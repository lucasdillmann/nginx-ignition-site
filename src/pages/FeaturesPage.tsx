import { useTranslation } from "react-i18next"
import CtaBand from "../components/CtaBand"
import Screenshot from "../components/Screenshot"
import Seo from "../components/Seo"
import { HELP_TOURS } from "../data/tours"

const CHECKLIST_KEYS = [
    { key: "virtualHosts", icon: "🌐" },
    { key: "streams", icon: "🔄" },
    { key: "routing", icon: "⚡" },
    { key: "serverConfiguration", icon: "⚙️" },
    { key: "sslCertificates", icon: "🔐" },
    { key: "integrations", icon: "🐳" },
    { key: "security", icon: "🛡️" },
    { key: "apiTokens", icon: "🔑" },
    { key: "logging", icon: "📋" },
    { key: "stats", icon: "📊" },
    { key: "caching", icon: "🚀" },
    { key: "execution", icon: "🏗️" },
] as const

export default function FeaturesPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.features.title")}
                description={t("seo.features.description")}
                path="/features"
            />

            <section className="page-hero">
                <div className="container">
                    <h1 className="page-hero__title">
                        {t("features.heroTitle")}
                    </h1>
                    <p className="page-hero__subtitle">
                        {t("features.heroSubtitle")}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {HELP_TOURS.map((tour, index) => {
                        const title = t(`features.tours.${tour.key}.title`)
                        const bodies = t(
                            `features.tours.${tour.key}.bodies`,
                            { returnObjects: true },
                        ) as unknown as string[]

                        return (
                            <div
                                key={tour.key}
                                id={tour.anchor}
                                className={`feature-row${
                                    index % 2 === 1
                                        ? " feature-row--reverse"
                                        : ""
                                }`}
                            >
                                <div className="feature-row__body">
                                    <h2>{title}</h2>
                                    {bodies.map(body => (
                                        <p key={body}>{body}</p>
                                    ))}
                                </div>
                                <div className="feature-row__media">
                                    <Screenshot
                                        src={tour.video}
                                        alt={title}
                                        width={1000}
                                        height={706}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="section section--soft">
                <div className="container">
                    <div className="section__header">
                        <h2>{t("features.checklistTitle")}</h2>
                        <p>{t("features.checklistSubtitle")}</p>
                    </div>
                    <ul className="checklist">
                        {CHECKLIST_KEYS.map(item => (
                            <li key={item.key}>
                                <span
                                    className="checklist__icon"
                                    aria-hidden="true"
                                >
                                    {item.icon}
                                </span>
                                <span>
                                    <strong>
                                        {t(
                                            `features.checklist.${item.key}.title`,
                                        )}
                                    </strong>
                                    <span>
                                        {t(
                                            `features.checklist.${item.key}.body`,
                                        )}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CtaBand />
        </>
    )
}
