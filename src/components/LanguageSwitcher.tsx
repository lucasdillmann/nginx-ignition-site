import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import {
    LANGUAGE_LABELS,
    SUPPORTED_LANGUAGES,
    resolveLanguage,
} from "../i18n/languages"
import { CheckIcon, GlobeIcon } from "./icons"

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation()
    const [open, setOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement>(null)
    const current = resolveLanguage(i18n.resolvedLanguage ?? i18n.language)

    useEffect(() => {
        if (!open) {
            return
        }

        const onPointerDown = (event: PointerEvent) => {
            if (
                rootRef.current &&
                !rootRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener("pointerdown", onPointerDown)
        document.addEventListener("keydown", onKeyDown)

        return () => {
            document.removeEventListener("pointerdown", onPointerDown)
            document.removeEventListener("keydown", onKeyDown)
        }
    }, [open])

    return (
        <div className="lang" ref={rootRef}>
            <button
                type="button"
                className="lang__button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t("languageSwitcher.label")}
                onClick={() => setOpen(value => !value)}
            >
                <GlobeIcon />
                <span className="lang__current">{LANGUAGE_LABELS[current]}</span>
            </button>
            {open && (
                <ul
                    className="lang__menu"
                    role="listbox"
                    aria-label={t("languageSwitcher.label")}
                >
                    {SUPPORTED_LANGUAGES.map(language => (
                        <li key={language}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={language === current}
                                className={`lang__option${
                                    language === current ? " is-active" : ""
                                }`}
                                lang={language}
                                onClick={() => {
                                    void i18n.changeLanguage(language)
                                    setOpen(false)
                                }}
                            >
                                <span>{LANGUAGE_LABELS[language]}</span>
                                {language === current && <CheckIcon />}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
