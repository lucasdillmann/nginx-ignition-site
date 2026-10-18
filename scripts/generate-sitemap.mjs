import { writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const siteUrl = "https://nginxignition.app"

const routes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/getting-started", priority: "0.9", changefreq: "weekly" },
    { path: "/features", priority: "0.9", changefreq: "weekly" },
    { path: "/docs", priority: "0.8", changefreq: "weekly" },
    { path: "/docs/configuration", priority: "0.7", changefreq: "monthly" },
    { path: "/docs/api-tokens", priority: "0.7", changefreq: "monthly" },
    { path: "/docs/health-checks", priority: "0.7", changefreq: "monthly" },
    { path: "/docs/backup-restore", priority: "0.7", changefreq: "monthly" },
    { path: "/docs/troubleshooting", priority: "0.7", changefreq: "monthly" },
]

const urls = routes
    .map(
        route => `    <url>
        <loc>${siteUrl}${route.path}</loc>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`,
    )
    .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await writeFile(path.join(root, "dist", "sitemap.xml"), sitemap)

console.log(`sitemap.xml written with ${routes.length} URLs`)
