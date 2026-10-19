import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const POSTHOG_PACKAGES =
    "posthog-js|@posthog|core-js|dompurify|fflate|preact|query-selector-shadow-dom|web-vitals|web-vitals-soft-navs"

const REACT_PACKAGES =
    "react|react-dom|react-router|scheduler"

const I18N_PACKAGES =
    "i18next|react-i18next|i18next-browser-languagedetector|i18next-resources-to-backend"

export default defineConfig({
    plugins: [react()],
    build: {
        rolldownOptions: {
            output: {
                codeSplitting: {
                    groups: [
                        {
                            name: "ev",
                            test: new RegExp(
                                `node_modules[\\\\/](?:${POSTHOG_PACKAGES})[\\\\/]`,
                            ),
                            priority: 3,
                        },
                        {
                            name: "react",
                            test: new RegExp(
                                `node_modules[\\\\/](?:${REACT_PACKAGES})[\\\\/]`,
                            ),
                            priority: 2,
                        },
                        {
                            name: "i18n",
                            test: new RegExp(
                                `node_modules[\\\\/](?:${I18N_PACKAGES})[\\\\/]`,
                            ),
                            priority: 2,
                        },
                    ],
                },
            },
        },
    },
})
