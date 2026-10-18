import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const sourceArgIndex = args.indexOf("--source")
const sourceRoot =
    sourceArgIndex >= 0
        ? path.resolve(args[sourceArgIndex + 1])
        : path.resolve(root, "../nginx-ignition")

const screenshotDir = path.join(root, "src", "assets", "screenshots")
const videoDir = path.join(root, "src", "assets", "videos")

const screenshots = [
    "access-lists",
    "caches",
    "dashboard",
    "integrations",
    "settings",
]

const videos = [
    "access-lists",
    "caches",
    "hosts",
    "integrations",
    "logs",
    "settings",
    "ssl-certificates",
    "streams",
    "vpns",
]

await mkdir(screenshotDir, { recursive: true })
await mkdir(videoDir, { recursive: true })

for (const name of screenshots) {
    await sharp(path.join(sourceRoot, "docs", "images", `${name}.png`))
        .webp({ quality: 80 })
        .toFile(path.join(screenshotDir, `${name}.webp`))
    console.log(`optimized screenshots/${name}.webp`)
}

for (const name of videos) {
    await sharp(
        path.join(sourceRoot, "frontend", "src", "domain", "help", "videos", `${name}.webp`),
        { animated: true },
    )
        .resize({ width: 1000 })
        .webp({ quality: 60, effort: 4 })
        .toFile(path.join(videoDir, `${name}.webp`))
    console.log(`optimized videos/${name}.webp`)
}

await sharp(path.join(sourceRoot, "docs", "readme-screenshots.png"))
    .resize({ width: 1200 })
    .jpeg({ quality: 82 })
    .toFile(path.join(root, "src", "assets", "og.jpg"))
console.log("optimized og.jpg")
