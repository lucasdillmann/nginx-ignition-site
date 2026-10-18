import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import Seo from "../components/Seo"
import { ExternalLinkIcon } from "../components/icons"
import { LINKS } from "../config"
import { DOC_GUIDES, DOC_GUIDE_PATHS } from "../data/guides"

const REFERENCE_LINKS = [
    { key: "config", href: LINKS.configReference, icon: "📜" },
    { key: "migration", href: LINKS.migrationGuide, icon: "🔁" },
    { key: "apiTokens", href: LINKS.apiTokensDoc, icon: "🔑" },
    { key: "healthChecks", href: LINKS.healthChecksDoc, icon: "🏥" },
    { key: "restore", href: LINKS.restoreGuide, icon: "💾" },
    { key: "troubleshooting", href: LINKS.troubleshootingDoc, icon: "🔍" },
    { key: "screenshots", href: LINKS.screenshotsGallery, icon: "📸" },
    { key: "changelog", href: LINKS.changelog, icon: "🗒️" },
    { key: "security", href: LINKS.security, icon: "🛡️" },
] as const

export default function DocsHubPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docs.title")}
                description={t("seo.docs.description")}
                path="/docs"
            />

            <section className="page-hero">
                <div className="container">
                    <h1 className="page-hero__title">{t("docs.heroTitle")}</h1>
                    <p className="page-hero__subtitle">
                        {t("docs.heroSubtitle")}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card-grid card-grid--two">
                        {DOC_GUIDES.map(guide => (
                            <Link
                                key={guide}
                                to={DOC_GUIDE_PATHS[guide]}
                                className="card card--link"
                            >
                                <h3>{t(`docs.guides.${guide}.title`)}</h3>
                                <p>{t(`docs.guides.${guide}.summary`)}</p>
                                <span className="card__link">
                                    {t("common.readGuide")} →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--soft">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("docs.referenceTitle")}</h2>
                        <p>{t("docs.referenceBody")}</p>
                    </div>
                    <div className="card-grid">
                        {REFERENCE_LINKS.map(item => (
                            <a
                                key={item.key}
                                className="card card--link"
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="card__icon" aria-hidden="true">
                                    {item.icon}
                                </span>
                                <h3>
                                    {t(`docs.reference.${item.key}.title`)}
                                </h3>
                                <p>{t(`docs.reference.${item.key}.body`)}</p>
                                <span className="card__link">
                                    {t("nav.github")} <ExternalLinkIcon />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container">
                    <div className="cta-band__inner">
                        <h2>{t("docs.helpTitle")}</h2>
                        <p>{t("docs.helpBody")}</p>
                        <div className="btn-row">
                            <a
                                className="btn btn--primary"
                                href={LINKS.issues}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("docs.helpIssues")}
                            </a>
                            <a
                                className="btn btn--secondary"
                                href={LINKS.discussions}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("docs.helpDiscussions")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
