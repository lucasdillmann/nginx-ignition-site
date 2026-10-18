import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import CodeBlock from "../components/CodeBlock"
import Seo from "../components/Seo"
import { DownloadIcon, ExternalLinkIcon, AppleIcon, LinuxIcon, WindowsIcon } from "../components/icons"
import { DOCKER_IMAGE, LINKS } from "../config"
import {
    LINUX_FORMATS,
    linuxUrl,
    macosUrl,
    urlOrReleasesPage,
    windowsUrl,
    type Arch,
    type LinuxFormat,
} from "../lib/downloads"
import { useLatestRelease } from "../lib/release"
import { Link } from "react-router"

const DOCKER_COMMAND = `docker run -p 8090:8090 -p 80:80 -p 443:443 ${DOCKER_IMAGE}`

const DOCKER_VOLUME_COMMAND = `docker run -d --name nginx-ignition \\
    -p 8090:8090 -p 80:80 -p 443:443 \\
    -v nginx-ignition-data:/opt/nginx-ignition/data \\
    ${DOCKER_IMAGE}`

const COMPOSE_SNIPPET = `services:
  postgres:
    image: postgres:18-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: nginx_ignition
      POSTGRES_USER: nginx_ignition
      POSTGRES_PASSWORD: change-me
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U nginx_ignition"]
      interval: 5s
      timeout: 5s
      retries: 3

  nginx-ignition:
    image: ${DOCKER_IMAGE}:latest
    restart: unless-stopped
    ports:
      - "8090:8090"
      - "80:80"
      - "443:443"
    environment:
      NGINX_IGNITION_DATABASE_DRIVER: postgres
      NGINX_IGNITION_DATABASE_HOST: postgres
      NGINX_IGNITION_DATABASE_PORT: 5432
      NGINX_IGNITION_DATABASE_NAME: nginx_ignition
      NGINX_IGNITION_DATABASE_SSL_MODE: disable
      NGINX_IGNITION_DATABASE_USERNAME: nginx_ignition
      NGINX_IGNITION_DATABASE_PASSWORD: change-me
    depends_on:
      postgres:
        condition: service_healthy

volumes:
  postgres-data:`

const FORMAT_LABEL_KEYS = {
    deb: "linuxFormats.deb",
    rpm: "linuxFormats.rpm",
    apk: "linuxFormats.apk",
    "pkg.tar.zst": "linuxFormats.pkgTarZst",
    ipk: "linuxFormats.ipk",
    zip: "linuxFormats.zip",
} as const satisfies Record<LinuxFormat, string>

export default function GettingStartedPage() {
    const { t, i18n } = useTranslation()
    const release = useLatestRelease()
    const [arch, setArch] = useState<Arch>("amd64")
    const [format, setFormat] = useState<LinuxFormat>("deb")

    const publishedDate = useMemo(() => {
        if (!release?.publishedAt) {
            return null
        }

        try {
            return new Intl.DateTimeFormat(i18n.resolvedLanguage ?? "en", {
                dateStyle: "long",
            }).format(new Date(release.publishedAt))
        } catch {
            return null
        }
    }, [release, i18n.resolvedLanguage])

    return (
        <>
            <Seo
                title={t("seo.gettingStarted.title")}
                description={t("seo.gettingStarted.description")}
                path="/getting-started"
            />

            <section className="page-hero">
                <div className="container">
                    <h1 className="page-hero__title">
                        {t("gettingStarted.heroTitle")}
                    </h1>
                    <p className="page-hero__subtitle">
                        {t("gettingStarted.heroSubtitle")}
                    </p>
                    <div className="page-hero__chips">
                        <a className="chip" href="#docker">
                            {t("gettingStarted.heroJumpDocker")}
                        </a>
                        <a className="chip" href="#compose">
                            {t("gettingStarted.heroJumpCompose")}
                        </a>
                        <a className="chip" href="#downloads">
                            {t("gettingStarted.heroJumpDownloads")}
                        </a>
                        <a className="chip" href="#native">
                            {t("gettingStarted.heroJumpNative")}
                        </a>
                    </div>
                </div>
            </section>

            <section className="section" id="docker">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("gettingStarted.dockerTitle")}</h2>
                        <p>{t("gettingStarted.dockerBody")}</p>
                    </div>
                    <div style={{ maxWidth: 820 }}>
                        <CodeBlock code={DOCKER_COMMAND} label="shell" />
                        <ol className="steps" style={{ marginTop: 22 }}>
                            <li>{t("gettingStarted.dockerStep1")}</li>
                            <li>{t("gettingStarted.dockerStep2")}</li>
                            <li>{t("gettingStarted.dockerStep3")}</li>
                            <li>{t("gettingStarted.dockerStep4")}</li>
                        </ol>
                        <div className="callout" style={{ marginTop: 24 }}>
                            <div>
                                <strong>
                                    {t("gettingStarted.dockerPersistenceTitle")}
                                </strong>
                                <p>{t("gettingStarted.dockerPersistenceBody")}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: 18 }}>
                            <CodeBlock
                                code={DOCKER_VOLUME_COMMAND}
                                label="shell"
                            />
                        </div>
                        <div
                            className="callout callout--warning"
                            style={{ marginTop: 24 }}
                        >
                            <div>
                                <strong>
                                    {t("gettingStarted.dockerSqliteTitle")}
                                </strong>
                                <p>{t("gettingStarted.dockerSqliteBody")}</p>
                                <div style={{ marginTop: 14 }}>
                                    <Link
                                        className="btn btn--secondary"
                                        to="/docs/configuration"
                                    >
                                        {t("common.readGuide")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--soft" id="compose">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("gettingStarted.composeTitle")}</h2>
                        <p>{t("gettingStarted.composeBody")}</p>
                    </div>
                    <div style={{ maxWidth: 820 }}>
                        <CodeBlock code={COMPOSE_SNIPPET} label="yaml" />
                        <div
                            className="callout callout--warning"
                            style={{ marginTop: 20 }}
                        >
                            <p>{t("gettingStarted.composeWarning")}</p>
                        </div>
                        <p style={{ marginTop: 18 }}>
                            <a
                                href={LINKS.composeFile}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("gettingStarted.composeDownload")}
                            </a>{" "}
                            <span
                                style={{
                                    color: "var(--text-faint)",
                                    fontSize: 14,
                                }}
                            >
                                ({t("common.githubInEnglish")})
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" id="downloads">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("gettingStarted.downloadsTitle")}</h2>
                        <p>{t("gettingStarted.downloadsSubtitle")}</p>
                    </div>

                    {release && (
                        <div className="downloads__badge">
                            <span className="chip">
                                {t("common.latestVersion")} v{release.version}
                            </span>
                            {publishedDate && (
                                <span
                                    style={{
                                        color: "var(--text-faint)",
                                        fontSize: 14,
                                    }}
                                >
                                    {t("common.releasedOn", {
                                        date: publishedDate,
                                    })}
                                </span>
                            )}
                            <a
                                href={release.htmlUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{ fontSize: 14.5 }}
                            >
                                {t("common.releaseNotes")}
                            </a>
                        </div>
                    )}

                    {release?.fromFallback && (
                        <div
                            className="callout callout--warning"
                            style={{ marginBottom: 24, maxWidth: 820 }}
                        >
                            <p>{t("gettingStarted.downloadsFallbackNote")}</p>
                        </div>
                    )}

                    <div className="card-grid">
                        <div className="download-card">
                            <div className="download-card__head">
                                <LinuxIcon
                                    className="card__icon"
                                    aria-hidden="true"
                                />
                                <h3>{t("gettingStarted.linuxTitle")}</h3>
                            </div>
                            <p className="download-card__note">
                                {t("gettingStarted.linuxNote")}
                            </p>
                            <div className="download-card__controls">
                                <div className="download-card__field">
                                    <label htmlFor="linux-arch">
                                        {t("gettingStarted.linuxArchLabel")}
                                    </label>
                                    <select
                                        id="linux-arch"
                                        value={arch}
                                        onChange={event =>
                                            setArch(
                                                event.target.value as Arch,
                                            )
                                        }
                                    >
                                        <option value="amd64">amd64</option>
                                        <option value="arm64">arm64</option>
                                    </select>
                                </div>
                                <div className="download-card__field">
                                    <label htmlFor="linux-format">
                                        {t("gettingStarted.linuxFormatLabel")}
                                    </label>
                                    <select
                                        id="linux-format"
                                        value={format}
                                        onChange={event =>
                                            setFormat(
                                                event.target
                                                    .value as LinuxFormat,
                                            )
                                        }
                                    >
                                        {LINUX_FORMATS.map(item => (
                                            <option
                                                key={item}
                                                value={item}
                                                lang={i18n.language}
                                            >
                                                {t(
                                                    `gettingStarted.${FORMAT_LABEL_KEYS[item]}`,
                                                )}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <a
                                    className="btn btn--primary"
                                    href={
                                        release
                                            ? urlOrReleasesPage(
                                                  linuxUrl(
                                                      release,
                                                      arch,
                                                      format,
                                                  ),
                                              )
                                            : LINKS.latestRelease
                                    }
                                >
                                    <DownloadIcon />
                                    {t("gettingStarted.linuxDownload")}
                                </a>
                            </div>
                        </div>

                        <div className="download-card">
                            <div className="download-card__head">
                                <AppleIcon
                                    className="card__icon"
                                    aria-hidden="true"
                                />
                                <h3>{t("gettingStarted.macosTitle")}</h3>
                            </div>
                            <p className="download-card__note">
                                {t("gettingStarted.macosNote")}
                            </p>
                            <a
                                className="btn btn--primary"
                                href={
                                    release
                                        ? urlOrReleasesPage(macosUrl(release))
                                        : LINKS.latestRelease
                                }
                            >
                                <DownloadIcon />
                                {t("gettingStarted.macosButton")}
                            </a>
                            <p className="download-card__footnote">
                                {t("gettingStarted.macosArchNote")}
                            </p>
                        </div>

                        <div className="download-card">
                            <div className="download-card__head">
                                <WindowsIcon
                                    className="card__icon"
                                    aria-hidden="true"
                                />
                                <h3>{t("gettingStarted.windowsTitle")}</h3>
                            </div>
                            <p className="download-card__note">
                                {t("gettingStarted.windowsNote")}
                            </p>
                            <div className="download-card__controls">
                                <a
                                    className="btn btn--primary"
                                    href={
                                        release
                                            ? urlOrReleasesPage(
                                                  windowsUrl(release, "amd64"),
                                              )
                                            : LINKS.latestRelease
                                    }
                                >
                                    <DownloadIcon />
                                    {t("gettingStarted.windowsX64")}
                                </a>
                                <a
                                    className="btn btn--secondary"
                                    href={
                                        release
                                            ? urlOrReleasesPage(
                                                  windowsUrl(release, "arm64"),
                                              )
                                            : LINKS.latestRelease
                                    }
                                >
                                    <DownloadIcon />
                                    {t("gettingStarted.windowsArm64")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <p
                        style={{
                            marginTop: 22,
                            color: "var(--text-faint)",
                            fontSize: 14,
                        }}
                    >
                        {t("gettingStarted.downloadsHint")}
                    </p>
                </div>
            </section>

            <section className="section section--soft" id="native">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("gettingStarted.nativeTitle")}</h2>
                        <p>{t("gettingStarted.nativeSubtitle")}</p>
                    </div>
                    <div style={{ maxWidth: 880 }}>
                        <div className="callout" style={{ marginBottom: 24 }}>
                            <p>{t("gettingStarted.nativeRequirements")}</p>
                        </div>

                        <details className="accordion">
                            <summary>
                                {t("gettingStarted.nativeLinuxTitle")}
                            </summary>
                            <div className="accordion__body">
                                <ol className="steps">
                                    <li>{t("gettingStarted.nativeLinuxStep1")}</li>
                                    <li>{t("gettingStarted.nativeLinuxStep2")}</li>
                                    <li>{t("gettingStarted.nativeLinuxStep3")}</li>
                                    <li>{t("gettingStarted.nativeLinuxStep4")}</li>
                                    <li>{t("gettingStarted.nativeLinuxStep5")}</li>
                                </ol>
                                <p>
                                    {t("gettingStarted.nativeUpgradeNote")}
                                </p>
                                <a
                                    href={LINKS.linuxInstructions}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t("gettingStarted.nativeFullInstructions")}{" "}
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </details>

                        <details className="accordion">
                            <summary>
                                {t("gettingStarted.nativeMacosTitle")}
                            </summary>
                            <div className="accordion__body">
                                <ol className="steps">
                                    <li>{t("gettingStarted.nativeMacosStep1")}</li>
                                    <li>{t("gettingStarted.nativeMacosStep2")}</li>
                                    <li>{t("gettingStarted.nativeMacosStep3")}</li>
                                    <li>{t("gettingStarted.nativeMacosStep4")}</li>
                                    <li>{t("gettingStarted.nativeMacosStep5")}</li>
                                </ol>
                                <p>
                                    {t("gettingStarted.nativeUpgradeNote")}
                                </p>
                                <a
                                    href={LINKS.macosInstructions}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t("gettingStarted.nativeFullInstructions")}{" "}
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </details>

                        <details className="accordion">
                            <summary>
                                {t("gettingStarted.nativeWindowsTitle")}
                            </summary>
                            <div className="accordion__body">
                                <ol className="steps">
                                    <li>
                                        {t("gettingStarted.nativeWindowsStep1")}
                                    </li>
                                    <li>
                                        {t("gettingStarted.nativeWindowsStep2")}
                                    </li>
                                    <li>
                                        {t("gettingStarted.nativeWindowsStep3")}
                                    </li>
                                    <li>
                                        {t("gettingStarted.nativeWindowsStep4")}
                                    </li>
                                    <li>
                                        {t("gettingStarted.nativeWindowsStep5")}
                                    </li>
                                </ol>
                                <p>
                                    {t("gettingStarted.nativeUpgradeNote")}
                                </p>
                                <a
                                    href={LINKS.windowsInstructions}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t("gettingStarted.nativeFullInstructions")}{" "}
                                    <ExternalLinkIcon />
                                </a>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("gettingStarted.firstStepsTitle")}</h2>
                        <p>{t("gettingStarted.firstStepsSubtitle")}</p>
                    </div>
                    <ol className="steps" style={{ maxWidth: 720 }}>
                        <li>{t("gettingStarted.firstSteps1")}</li>
                        <li>{t("gettingStarted.firstSteps2")}</li>
                        <li>{t("gettingStarted.firstSteps3")}</li>
                        <li>{t("gettingStarted.firstSteps4")}</li>
                    </ol>
                    <div className="btn-row" style={{ marginTop: 24 }}>
                        <Link className="btn btn--secondary" to="/docs">
                            {t("gettingStarted.firstStepsDocs")}
                        </Link>
                        <Link className="btn btn--ghost" to="/features">
                            {t("gettingStarted.firstStepsFeatures")}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container">
                    <div className="cta-band__inner">
                        <h2>{t("gettingStarted.helpTitle")}</h2>
                        <p>{t("gettingStarted.helpBody")}</p>
                        <div className="btn-row">
                            <Link
                                className="btn btn--primary"
                                to="/docs/troubleshooting"
                            >
                                {t("gettingStarted.helpTroubleshooting")}
                            </Link>
                            <a
                                className="btn btn--secondary"
                                href={LINKS.issues}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("gettingStarted.helpIssues")}
                            </a>
                            <a
                                className="btn btn--ghost"
                                href={LINKS.discussions}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("gettingStarted.helpDiscussions")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
