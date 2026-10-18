export const SUPPORTED_LANGUAGES = [
    "en",
    "pt",
    "zh",
    "de",
    "fr",
    "es",
    "hi",
    "vi",
    "ru",
    "bn",
    "ja",
] as const

export type Language = (typeof SUPPORTED_LANGUAGES)[number]

export const DEFAULT_LANGUAGE: Language = "en"

export const LANGUAGE_LABELS: Record<Language, string> = {
    en: "English",
    pt: "Português (Brasil)",
    zh: "简体中文",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
    hi: "हिन्दी",
    vi: "Tiếng Việt",
    ru: "Русский",
    bn: "বাংলা",
    ja: "日本語",
}

export function resolveLanguage(value: string | undefined | null): Language {
    if (!value) {
        return DEFAULT_LANGUAGE
    }

    const base = value.toLowerCase().split("-")[0]

    return (SUPPORTED_LANGUAGES as readonly string[]).includes(base)
        ? (base as Language)
        : DEFAULT_LANGUAGE
}
