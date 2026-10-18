export type CodeLanguage = "shell" | "yaml" | "json" | "properties" | "text"

export type CodeTokenType =
    | "plain"
    | "comment"
    | "key"
    | "string"
    | "number"
    | "boolean"
    | "command"
    | "flag"
    | "url"
    | "punctuation"

export interface CodeToken {
    type: CodeTokenType
    text: string
}

const CODE_LANGUAGES: CodeLanguage[] = [
    "shell",
    "yaml",
    "json",
    "properties",
    "text",
]

export function isCodeLanguage(value: string): value is CodeLanguage {
    return (CODE_LANGUAGES as string[]).includes(value)
}

export function tokenize(code: string, language: CodeLanguage): CodeToken[] {
    switch (language) {
        case "shell":
            return tokenizeShell(code)
        case "yaml":
            return tokenizeYaml(code)
        case "json":
            return tokenizeJson(code)
        case "properties":
            return tokenizeProperties(code)
        default:
            return [{ type: "plain", text: code }]
    }
}

interface Rule {
    type: CodeTokenType
    pattern: RegExp
}

function tokenizeByRules(code: string, rules: Rule[]): CodeToken[] {
    const tokens: CodeToken[] = []
    let index = 0

    while (index < code.length) {
        let bestStart = -1
        let bestEnd = -1
        let bestType: CodeTokenType = "plain"

        for (const rule of rules) {
            rule.pattern.lastIndex = index
            const match = rule.pattern.exec(code)

            if (!match || match[0].length === 0) {
                continue
            }

            const isBetter =
                bestStart === -1 ||
                match.index < bestStart ||
                (match.index === bestStart &&
                    match[0].length > bestEnd - bestStart)

            if (isBetter) {
                bestStart = match.index
                bestEnd = match.index + match[0].length
                bestType = rule.type
            }
        }

        if (bestStart === -1) {
            tokens.push({ type: "plain", text: code.slice(index) })
            break
        }

        if (bestStart > index) {
            tokens.push({ type: "plain", text: code.slice(index, bestStart) })
        }

        tokens.push({ type: bestType, text: code.slice(bestStart, bestEnd) })
        index = bestEnd
    }

    return tokens
}

function tokenizeShell(code: string): CodeToken[] {
    const tokens: CodeToken[] = []
    let continuation = false

    code.split("\n").forEach((line, lineIndex) => {
        if (lineIndex > 0) {
            tokens.push({ type: "plain", text: "\n" })
        }

        const isContinuation = continuation
        continuation = line.trimEnd().endsWith("\\")

        if (!line) {
            return
        }

        const trimmed = line.trimStart()

        if (trimmed.startsWith("#")) {
            tokens.push({
                type: "plain",
                text: line.slice(0, line.length - trimmed.length),
            })
            tokens.push({ type: "comment", text: trimmed })
            return
        }

        const environment = /^(\s*)([A-Z][A-Z0-9_]*=)(.*)$/.exec(line)

        if (environment) {
            tokens.push({ type: "plain", text: environment[1] })
            tokens.push({ type: "key", text: environment[2] })
            tokenizeShellPart(environment[3], tokens, false)
            return
        }

        tokenizeShellPart(line, tokens, !isContinuation)
    })

    return tokens
}

function tokenizeShellPart(
    text: string,
    tokens: CodeToken[],
    commandPending: boolean,
) {
    const pattern =
        /"(?:[^"\\]|\\.)*"|'[^']*'|https?:\/\/[^\s"'\\]+|\s--?[A-Za-z][\w-]*(?:=[^\s]+)?|\s+|\S+/g
    let match: RegExpExecArray | null

    while ((match = pattern.exec(text)) !== null) {
        const value = match[0]

        if (value.startsWith('"') || value.startsWith("'")) {
            tokens.push({ type: "string", text: value })
        } else if (value.startsWith("http")) {
            tokens.push({ type: "url", text: value })
        } else if (/^\s+-/.test(value)) {
            const flag = value.trimStart()
            tokens.push({
                type: "plain",
                text: value.slice(0, value.length - flag.length),
            })
            tokens.push({ type: "flag", text: flag })
        } else if (/^-\S/.test(value)) {
            tokens.push({ type: "flag", text: value })
        } else if (/^\s+$/.test(value)) {
            tokens.push({ type: "plain", text: value })
        } else if (commandPending) {
            tokens.push({ type: "command", text: value })
            commandPending = false
        } else if (/^\d[\w:.]*$/.test(value)) {
            tokens.push({ type: "number", text: value })
        } else {
            tokens.push({ type: "plain", text: value })
        }

        if (!/^\s+$/.test(value)) {
            commandPending = false
        }
    }
}

function tokenizeYaml(code: string): CodeToken[] {
    const tokens: CodeToken[] = []

    code.split("\n").forEach((line, lineIndex) => {
        if (lineIndex > 0) {
            tokens.push({ type: "plain", text: "\n" })
        }

        if (!line) {
            return
        }

        const trimmed = line.trimStart()
        const indent = line.slice(0, line.length - trimmed.length)

        if (indent) {
            tokens.push({ type: "plain", text: indent })
        }

        if (trimmed.startsWith("#")) {
            tokens.push({ type: "comment", text: trimmed })
            return
        }

        const listItem = /^(-\s+)(.*)$/.exec(trimmed)

        if (listItem) {
            tokens.push({ type: "punctuation", text: listItem[1] })
            tokenizeYamlValue(listItem[2], tokens)
            return
        }

        const entry = /^([\w.$-]+)(:)(\s*)(.*)$/.exec(trimmed)

        if (entry) {
            tokens.push({ type: "key", text: entry[1] })
            tokens.push({ type: "punctuation", text: entry[2] })

            if (entry[3]) {
                tokens.push({ type: "plain", text: entry[3] })
            }

            tokenizeYamlValue(entry[4], tokens)
            return
        }

        tokenizeYamlValue(trimmed, tokens)
    })

    return tokens
}

function tokenizeYamlValue(text: string, tokens: CodeToken[]) {
    const pattern = /("[^"]*"|'[^']*')|([[\],{}])|(\s+)|(\S+)/g
    let match: RegExpExecArray | null

    while ((match = pattern.exec(text)) !== null) {
        if (match[1]) {
            tokens.push({ type: "string", text: match[0] })
        } else if (match[2]) {
            tokens.push({ type: "punctuation", text: match[0] })
        } else if (match[3]) {
            tokens.push({ type: "plain", text: match[0] })
        } else if (/^(true|false|null)$/.test(match[0])) {
            tokens.push({ type: "boolean", text: match[0] })
        } else if (/^\d+(\.\d+)?$/.test(match[0])) {
            tokens.push({ type: "number", text: match[0] })
        } else {
            tokens.push({ type: "string", text: match[0] })
        }
    }
}

function tokenizeJson(code: string): CodeToken[] {
    return tokenizeByRules(code, [
        { type: "key", pattern: /"(?:[^"\\]|\\.)*"(?=\s*:)/g },
        { type: "string", pattern: /"(?:[^"\\]|\\.)*"/g },
        { type: "number", pattern: /-?\b\d+(?:\.\d+)?\b/g },
        { type: "boolean", pattern: /\b(?:true|false|null)\b/g },
        { type: "punctuation", pattern: /[{}[\],:]/g },
    ])
}

function tokenizeProperties(code: string): CodeToken[] {
    const tokens: CodeToken[] = []

    code.split("\n").forEach((line, lineIndex) => {
        if (lineIndex > 0) {
            tokens.push({ type: "plain", text: "\n" })
        }

        if (!line) {
            return
        }

        const trimmed = line.trimStart()
        const indent = line.slice(0, line.length - trimmed.length)

        if (indent) {
            tokens.push({ type: "plain", text: indent })
        }

        if (trimmed.startsWith("#") || trimmed.startsWith("!")) {
            tokens.push({ type: "comment", text: trimmed })
            return
        }

        const separator = trimmed.indexOf("=")

        if (separator === -1) {
            tokens.push({ type: "plain", text: trimmed })
            return
        }

        tokens.push({ type: "key", text: trimmed.slice(0, separator) })
        tokens.push({ type: "punctuation", text: "=" })
        tokens.push({ type: "string", text: trimmed.slice(separator + 1) })
    })

    return tokens
}
