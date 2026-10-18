import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import accessListsShot from "../assets/screenshots/access-lists.webp"
import cachesShot from "../assets/screenshots/caches.webp"
import dashboardShot from "../assets/screenshots/dashboard.webp"
import integrationsShot from "../assets/screenshots/integrations.webp"
import settingsShot from "../assets/screenshots/settings.webp"
import Carousel from "../components/Carousel"
import CodeBlock from "../components/CodeBlock"
import CtaBand from "../components/CtaBand"
import Screenshot from "../components/Screenshot"
import Seo from "../components/Seo"
import { GitHubIcon } from "../components/icons"
import { DOCKER_IMAGE, LINKS } from "../config"
import { HELP_TOURS } from "../data/tours"
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from "../i18n/languages"

const DOCKER_COMMAND = `docker run -p 8090:8090 -p 80:80 -p 443:443 ${DOCKER_IMAGE}`

const HIGHLIGHTS = [
    { key: "hosts", icon: "🌐", anchor: "hosts" },
    { key: "streams", icon: "🔄", anchor: "streams" },
    { key: "ssl", icon: "🔐", anchor: "ssl-certificates" },
    { key: "integrations", icon: "🐳", anchor: "integrations" },
    { key: "security", icon: "🛡️", anchor: "access-lists" },
    { key: "observability", icon: "📊", anchor: "logs" },
] as const

export default function HomePage() {
    const { t } = useTranslation()

    const heroSlides = [
        {
            src: dashboardShot,
            alt: t("home.showcase.dashboard"),
        },
        {
            src: integrationsShot,
            alt: t("features.tours.integrations.title"),
        },
        {
            src: accessListsShot,
            alt: t("features.tours.accessLists.title"),
        },
        {
            src: cachesShot,
            alt: t("features.tours.caches.title"),
        },
        {
            src: settingsShot,
            alt: t("features.tours.settings.title"),
        },
    ]

    return (
        <>
            <Seo
                title={t("seo.home.title")}
                description={t("seo.home.description")}
                path="/"
            />

            <section className="hero">
                <div className="container hero__inner">
                    <span className="eyebrow">{t("home.eyebrow")}</span>
                    <h1 className="hero__title">{t("home.title")}</h1>
                    <p className="hero__subtitle">{t("home.subtitle")}</p>
                    <div className="btn-row">
                        <Link
                            className="btn btn--primary btn--large"
                            to="/getting-started"
                        >
                            {t("home.ctaPrimary")}
                        </Link>
                        <Link
                            className="btn btn--secondary btn--large"
                            to="/features"
                        >
                            {t("home.ctaFeatures")}
                        </Link>
                        <a
                            className="btn btn--secondary btn--large"
                            href={LINKS.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                            {t("home.ctaSecondary")}
                        </a>
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="shot shot--hero">
                        <div className="shot__bar" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>
                        <Carousel
                            count={heroSlides.length}
                            mode="fade"
                            controls="overlay"
                            autoPlayMs={6000}
                            ariaLabel={t("home.showcaseTitle")}
                        >
                            {index => (
                                <img
                                    className="shot__img"
                                    src={heroSlides[index].src}
                                    alt={heroSlides[index].alt}
                                    width={1600}
                                    height={1000}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                />
                            )}
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section__header section__header--center">
                        <h2>{t("home.highlightsTitle")}</h2>
                        <p>{t("home.highlightsSubtitle")}</p>
                    </div>
                    <div className="card-grid">
                        {HIGHLIGHTS.map(item => (
                            <Link
                                key={item.key}
                                to={`/features#${item.anchor}`}
                                className="card card--link"
                            >
                                <span className="card__icon" aria-hidden="true">
                                    {item.icon}
                                </span>
                                <h3>{t(`home.highlights.${item.key}.title`)}</h3>
                                <p>{t(`home.highlights.${item.key}.body`)}</p>
                                <span className="card__link">
                                    {t("common.learnMore")} →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--soft">
                <div className="container">
                    <div className="section__header section__header--center">
                        <h2>{t("home.commandTitle")}</h2>
                    </div>
                    <div
                        style={{
                            maxWidth: 760,
                            marginInline: "auto",
                            textAlign: "center",
                        }}
                    >
                        <CodeBlock code={DOCKER_COMMAND} label="shell" />
                        <p
                            style={{
                                marginTop: 16,
                                color: "var(--text-muted)",
                                fontSize: 15,
                            }}
                        >
                            {t("home.commandNote")}
                        </p>
                        <p
                            style={{
                                marginTop: 8,
                                color: "var(--text-faint)",
                                fontSize: 14,
                            }}
                        >
                            {t("home.commandNoteDb")}
                        </p>
                        <div style={{ marginTop: 26 }}>
                            <Link
                                className="btn btn--primary"
                                to="/getting-started"
                            >
                                {t("home.commandMore")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("home.showcaseTitle")}</h2>
                        <p>{t("home.showcaseSubtitle")}</p>
                    </div>
                    <Carousel
                        count={HELP_TOURS.length}
                        mode="swap"
                        controls="below"
                        ariaLabel={t("home.showcaseTitle")}
                    >
                        {index => {
                            const tour = HELP_TOURS[index]
                            const title = t(`features.tours.${tour.key}.title`)
                            const bodies = t(
                                `features.tours.${tour.key}.bodies`,
                                { returnObjects: true },
                            ) as unknown as string[]

                            return (
                                <div className="quicklook__slide">
                                    <div className="quicklook__body">
                                        <h3>{title}</h3>
                                        {bodies.map(body => (
                                            <p key={body}>{body}</p>
                                        ))}
                                        <Link
                                            className="btn btn--secondary"
                                            to={`/features#${tour.anchor}`}
                                        >
                                            {t("common.seeAllFeatures")}
                                        </Link>
                                    </div>
                                    <div className="quicklook__media">
                                        <Screenshot
                                            src={tour.video}
                                            alt={title}
                                            width={1000}
                                            height={706}
                                        />
                                    </div>
                                </div>
                            )
                        }}
                    </Carousel>
                </div>
            </section>

            <section className="section section--soft">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("home.goalsTitle")}</h2>
                        <p>{t("home.goalsBody1")}</p>
                    </div>
                    <div className="card-grid card-grid--two">
                        <div className="card">
                            <h3>{t("home.goalsForTitle")}</h3>
                            <ul className="feature-row__points">
                                <li>{t("home.goalsFor1")}</li>
                                <li>{t("home.goalsFor2")}</li>
                                <li>{t("home.goalsFor3")}</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>{t("home.goalsNotTitle")}</h3>
                            <ul className="feature-row__points feature-row__points--negative">
                                <li>{t("home.goalsNot1")}</li>
                                <li>{t("home.goalsNot2")}</li>
                                <li>{t("home.goalsNot3")}</li>
                            </ul>
                        </div>
                    </div>
                    <p
                        style={{
                            marginTop: 20,
                            maxWidth: 820,
                            color: "var(--text-faint)",
                            fontSize: 14.5,
                        }}
                    >
                        {t("home.goalsBody2")}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("home.languagesTitle")}</h2>
                        <p>{t("home.languagesBody")}</p>
                    </div>
                    <div className="language-chips">
                        {SUPPORTED_LANGUAGES.map(language => (
                            <span className="chip" key={language} lang={language}>
                                {LANGUAGE_LABELS[language]}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand />
        </>
    )
}
