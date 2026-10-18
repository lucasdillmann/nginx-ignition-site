export const SITE_URL = "https://nginxignition.app"

export const GITHUB_REPOSITORY = "lucasdillmann/nginx-ignition"

const github = `https://github.com/${GITHUB_REPOSITORY}`

export const LINKS = {
    github,
    releases: `${github}/releases`,
    latestRelease: `${github}/releases/latest`,
    issues: `${github}/issues`,
    discussions: `${github}/discussions`,
    license: `${github}/blob/main/LICENSE`,
    changelog: `${github}/blob/main/CHANGELOG.md`,
    security: `${github}/blob/main/SECURITY.md`,
    composeFile: `${github}/blob/main/docker-compose.yml`,
    screenshotsGallery: `${github}/blob/main/docs/screenshots.md`,
    configReference: `${github}/blob/main/docs/configuration-properties.md`,
    migrationGuide: `${github}/blob/main/docs/migration-guide.md`,
    restoreGuide: `${github}/blob/main/docs/database-restore-guide.md`,
    apiTokensDoc: `${github}/blob/main/docs/api-tokens.md`,
    healthChecksDoc: `${github}/blob/main/docs/health-checks.md`,
    troubleshootingDoc: `${github}/blob/main/docs/troubleshooting.md`,
    linuxInstructions: `${github}/blob/main/dist/linux/instructions.md`,
    macosInstructions: `${github}/blob/main/dist/macos/instructions.md`,
    windowsInstructions: `${github}/blob/main/dist/windows/instructions.md`,
    linkedin: "https://linkedin.com/in/lucasdillmann",
} as const

export const DOCKER_IMAGE = "dillmann/nginx-ignition"
