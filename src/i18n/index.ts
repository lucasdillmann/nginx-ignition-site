import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import resourcesToBackend from "i18next-resources-to-backend"
import { initReactI18next } from "react-i18next"
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./languages"
import en from "./locales/en"

export const LANGUAGE_STORAGE_KEY = "nginxIgnition.site.language"

void i18n
    .use(
        resourcesToBackend(
            (language: string) => import(`./locales/${language}.ts`),
        ),
    )
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: SUPPORTED_LANGUAGES,
        fallbackLng: DEFAULT_LANGUAGE,
        load: "languageOnly",
        nonExplicitSupportedLngs: true,
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: LANGUAGE_STORAGE_KEY,
        },
        resources: {
            [DEFAULT_LANGUAGE]: { translation: en },
        },
        partialBundledLanguages: true,
        interpolation: {
            escapeValue: false,
        },
    })

i18n.on("languageChanged", language => {
    document.documentElement.lang = language
})

export default i18n
