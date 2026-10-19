import { useEffect, useState } from "react"
import fallbackRelease from "../data/latest-release.json"
import { GITHUB_REPOSITORY, LINKS } from "../config"
import { posthogLog } from "./posthog-logs"

export interface ReleaseAsset {
    name: string
    url: string
}

export interface ReleaseInfo {
    version: string
    publishedAt: string
    htmlUrl: string
    assets: ReleaseAsset[]
    fromFallback: boolean
}

const API_URL = `https://api.github.com/repos/${GITHUB_REPOSITORY}/releases/latest`
const CACHE_KEY = "nginxIgnition.site.release"
const CACHE_TTL_MS = 30 * 60 * 1000

const FALLBACK_RELEASE: ReleaseInfo = { ...fallbackRelease, fromFallback: true }

interface CachedRelease {
    cachedAt: number
    release: ReleaseInfo
}

function readCache(): ReleaseInfo | null {
    try {
        const raw = window.sessionStorage.getItem(CACHE_KEY)

        if (!raw) {
            return null
        }

        const cached = JSON.parse(raw) as CachedRelease

        if (Date.now() - cached.cachedAt > CACHE_TTL_MS) {
            return null
        }

        return cached.release
    } catch {
        return null
    }
}

function writeCache(release: ReleaseInfo) {
    try {
        window.sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ cachedAt: Date.now(), release }),
        )
    } catch {
        return
    }
}

interface ApiAsset {
    name?: string
    browser_download_url?: string
}

interface ApiRelease {
    tag_name?: string
    published_at?: string
    html_url?: string
    assets?: ApiAsset[]
}

function mapApiRelease(data: ApiRelease): ReleaseInfo {
    if (!data.tag_name || !data.html_url) {
        throw new Error("Unexpected release payload")
    }

    return {
        version: data.tag_name,
        publishedAt: data.published_at ?? "",
        htmlUrl: data.html_url,
        assets: (data.assets ?? [])
            .filter(
                (asset): asset is Required<ApiAsset> =>
                    Boolean(asset.name) && Boolean(asset.browser_download_url),
            )
            .map(asset => ({ name: asset.name, url: asset.browser_download_url })),
        fromFallback: false,
    }
}

let inflight: Promise<ReleaseInfo> | null = null

export function getLatestRelease(): Promise<ReleaseInfo> {
    if (inflight) {
        return inflight
    }

    inflight = (async () => {
        const cached = readCache()

        if (cached) {
            posthogLog.info("release metadata loaded from cache", {
                source: "session_storage",
            })
            return cached
        }

        try {
            const response = await fetch(API_URL, {
                headers: { Accept: "application/vnd.github+json" },
            })

            if (!response.ok) {
                throw new Error(`GitHub API responded with ${response.status}`)
            }

            const release = mapApiRelease((await response.json()) as ApiRelease)
            writeCache(release)
            posthogLog.info("release metadata loaded from GitHub", {
                source: "github_api",
            })

            return release
        } catch {
            posthogLog.warn("release metadata fallback used", {
                source: "bundled_fallback",
            })
            return FALLBACK_RELEASE
        }
    })()

    return inflight
}

export function useLatestRelease(): ReleaseInfo | null {
    const [release, setRelease] = useState<ReleaseInfo | null>(null)

    useEffect(() => {
        let active = true

        void getLatestRelease().then(value => {
            if (active) {
                setRelease(value)
            }
        })

        return () => {
            active = false
        }
    }, [])

    return release
}

export const RELEASES_URL = LINKS.latestRelease
