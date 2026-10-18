import type { ConfigEnvVar } from "./envVars"

export const DOC_GUIDES = [
    "configuration",
    "api-tokens",
    "health-checks",
    "backup-restore",
    "troubleshooting",
] as const

export type DocGuide = (typeof DOC_GUIDES)[number]

export const DOC_GUIDE_PATHS: Record<DocGuide, string> = {
    configuration: "/docs/configuration",
    "api-tokens": "/docs/api-tokens",
    "health-checks": "/docs/health-checks",
    "backup-restore": "/docs/backup-restore",
    troubleshooting: "/docs/troubleshooting",
}

export const DOC_GUIDE_SOURCES: Record<DocGuide, string> = {
    configuration: "configuration-properties.md",
    "api-tokens": "api-tokens.md",
    "health-checks": "health-checks.md",
    "backup-restore": "database-restore-guide.md",
    troubleshooting: "troubleshooting.md",
}

export type { ConfigEnvVar }
