import { RELEASES_URL, type ReleaseInfo } from "./release"

export type Arch = "amd64" | "arm64"

export type LinuxFormat = "deb" | "rpm" | "apk" | "pkg.tar.zst" | "ipk" | "zip"

export const LINUX_FORMATS: LinuxFormat[] = [
    "deb",
    "rpm",
    "apk",
    "pkg.tar.zst",
    "ipk",
    "zip",
]

function findAsset(release: ReleaseInfo, suffix: string): string | undefined {
    return release.assets.find(asset => asset.name.endsWith(suffix))?.url
}

export function macosUrl(release: ReleaseInfo): string | undefined {
    return findAsset(release, ".macos-arm64.zip")
}

export function windowsUrl(
    release: ReleaseInfo,
    arch: Arch,
): string | undefined {
    return findAsset(release, `.windows-${arch}.zip`)
}

export function linuxUrl(
    release: ReleaseInfo,
    arch: Arch,
    format: LinuxFormat,
): string | undefined {
    if (format === "zip") {
        return findAsset(release, `.linux-${arch}.zip`)
    }

    return findAsset(release, `.${arch}.${format}`)
}

export function urlOrReleasesPage(url: string | undefined): string {
    return url ?? RELEASES_URL
}
