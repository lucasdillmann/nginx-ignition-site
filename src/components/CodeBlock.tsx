import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import {
    isCodeLanguage,
    tokenize,
    type CodeLanguage,
} from "../lib/highlight"
import posthog from "../lib/posthog"
import { CheckIcon, CopyIcon } from "./icons"

interface CodeBlockProps {
    code: string
    label?: string
    language?: CodeLanguage
}

export default function CodeBlock({
    code,
    label = "shell",
    language,
}: CodeBlockProps) {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)

    const resolvedLanguage: CodeLanguage =
        language ?? (isCodeLanguage(label) ? label : "text")
    const tokens = useMemo(
        () => tokenize(code, resolvedLanguage),
        [code, resolvedLanguage],
    )

    async function copy() {
        try {
            await navigator.clipboard.writeText(code)
        } catch {
            return
        }

        if (posthog.__loaded) {
            posthog.capture("code_block_copied", {
                command_language: resolvedLanguage,
            })
        }

        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="code">
            <div className="code__bar">
                <span className="code__label">{label}</span>
                <button
                    type="button"
                    className="code__copy"
                    onClick={() => void copy()}
                >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    {copied ? t("common.copied") : t("common.copy")}
                </button>
            </div>
            <pre className="code__pre">
                <code>
                    {tokens.map((token, index) =>
                        token.type === "plain" ? (
                            token.text
                        ) : (
                            <span
                                key={index}
                                className={`tok tok--${token.type}`}
                            >
                                {token.text}
                            </span>
                        ),
                    )}
                </code>
            </pre>
        </div>
    )
}
