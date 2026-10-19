import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { LINKS } from "../config"
import posthog from "../lib/posthog"
import { GitHubIcon } from "./icons"

export default function CtaBand() {
    const { t } = useTranslation()

    function captureSupportChannel(channel: "discussions" | "issues") {
        if (posthog.__loaded) {
            posthog.capture("support_channel_opened", { channel })
        }
    }

    return (
        <section className="cta-band">
            <div className="container">
                <div className="cta-band__inner">
                    <h2>{t("home.ctaTitle")}</h2>
                    <p>{t("home.ctaBody")}</p>
                    <div className="btn-row">
                        <Link
                            className="btn btn--primary btn--large"
                            to="/getting-started"
                        >
                            {t("common.getStarted")}
                        </Link>
                        <a
                            className="btn btn--secondary btn--large"
                            href={LINKS.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => {
                                if (posthog.__loaded) {
                                    posthog.capture("github_repository_opened", {
                                        placement: "cta_band",
                                    })
                                }
                            }}
                        >
                            <GitHubIcon />
                            {t("common.starOnGitHub")}
                        </a>
                    </div>
                    <div className="btn-row">
                        <a
                            className="btn btn--ghost"
                            href={LINKS.discussions}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => captureSupportChannel("discussions")}
                        >
                            {t("home.ctaDiscussions")}
                        </a>
                        <a
                            className="btn btn--ghost"
                            href={LINKS.issues}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => captureSupportChannel("issues")}
                        >
                            {t("home.ctaIssues")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
