import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const sourceArgIndex = args.indexOf("--source")
const sourceRoot =
    sourceArgIndex >= 0
        ? path.resolve(args[sourceArgIndex + 1])
        : path.resolve(root, "../nginx-ignition")

const LANGUAGES = ["en", "pt", "zh", "de", "fr", "es", "hi", "vi", "ru", "bn", "ja"]

const TOPICS = [
    {
        key: "hosts",
        title: "common/hosts",
        bodies: [
            "frontend/help/hosts-description-1",
            "frontend/help/hosts-description-2",
            "frontend/help/hosts-description-3",
        ],
    },
    {
        key: "streams",
        title: "common/streams",
        bodies: [
            "frontend/help/streams-description-1",
            "frontend/help/streams-description-2",
        ],
    },
    {
        key: "ssl",
        title: "common/ssl-certificates",
        bodies: [
            "frontend/help/ssl-description-1",
            "frontend/help/ssl-description-2",
            "frontend/help/ssl-description-3",
        ],
    },
    {
        key: "logs",
        title: "common/logs",
        bodies: [
            "frontend/help/logs-description-1",
            "frontend/help/logs-description-2",
        ],
    },
    {
        key: "integrations",
        title: "common/integrations",
        bodies: ["frontend/help/integrations-description"],
    },
    {
        key: "vpn",
        title: "common/vpns",
        bodies: ["frontend/help/vpns-description"],
    },
    {
        key: "accessLists",
        title: "common/access-lists",
        bodies: ["frontend/help/access-lists-description"],
    },
    {
        key: "caches",
        title: "common/cache-configuration",
        bodies: [
            "frontend/help/cache-description-1",
            "frontend/help/cache-description-2",
        ],
    },
    {
        key: "settings",
        title: "common/settings",
        bodies: [
            "frontend/help/settings-description-1",
            "frontend/help/settings-description-2",
            "frontend/help/settings-description-3",
        ],
    },
]

function parseProperties(text) {
    const values = new Map()

    for (const line of text.split("\n")) {
        const trimmed = line.trim()

        if (!trimmed || trimmed.startsWith("#")) {
            continue
        }

        const separator = trimmed.indexOf("=")

        if (separator === -1) {
            continue
        }

        values.set(trimmed.slice(0, separator), trimmed.slice(separator + 1))
    }

    return values
}

function required(map, key, language) {
    const value = map.get(key)

    if (!value) {
        throw new Error(`missing ${key} for language ${language}`)
    }

    return value
}

function buildToursBlock(map, language) {
    const quote = value => JSON.stringify(value)

    const topics = TOPICS.map(topic => {
        const title = required(map, topic.title, language)
        const bodies = topic.bodies.map(key => required(map, key, language))

        return [
            `            ${topic.key}: {`,
            `                title: ${quote(title)},`,
            "                bodies: [",
            ...bodies.map(body => `                    ${quote(body)},`),
            "                ],",
            "            },",
        ].join("\n")
    })

    const cast = ""

    return `        tours: {\n${topics.join("\n")}\n        }${cast},`
}

for (const language of LANGUAGES) {
    const propertiesPath = path.join(
        sourceRoot,
        "internal",
        "i18n",
        `messages_${language}.properties`,
    )
    const properties = parseProperties(await readFile(propertiesPath, "utf8"))
    const localePath = path.join(root, "src", "i18n", "locales", `${language}.ts`)
    let source = await readFile(localePath, "utf8")

    source = source.replace(
        /\n {8}tours: \{[\s\S]*?\n {8}\}(?: as Record<[^>]+>)?,\n/,
        "\n",
    )

    if (!source.includes("\n        checklistTitle:")) {
        throw new Error(`insertion point not found in ${language}.ts`)
    }

    source = source.replace(
        "\n        checklistTitle:",
        `\n${buildToursBlock(properties, language)}\n        checklistTitle:`,
    )

    await writeFile(localePath, source)
    console.log(`synced tours for ${language}`)
}
