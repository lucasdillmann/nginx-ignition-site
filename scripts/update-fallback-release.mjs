import { writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const response = await fetch(
    "https://api.github.com/repos/lucasdillmann/nginx-ignition/releases/latest",
    { headers: { Accept: "application/vnd.github+json" } },
)

if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`)
}

const data = await response.json()

const release = {
    version: data.tag_name,
    publishedAt: data.published_at,
    htmlUrl: data.html_url,
    assets: (data.assets ?? []).map(asset => ({
        name: asset.name,
        url: asset.browser_download_url,
    })),
}

await writeFile(
    path.join(root, "src", "data", "latest-release.json"),
    `${JSON.stringify(release, null, 2)}\n`,
)

console.log(`fallback release updated to ${release.version}`)
