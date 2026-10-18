import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import logo from "../assets/logo.svg"
import { LINKS } from "../config"
import { ExternalLinkIcon } from "./icons"

export default function Footer() {
    const { t } = useTranslation()
    const year = new Date().getFullYear()

    const external = (href: string, label: string) => (
        <li>
            <a href={href} target="_blank" rel="noreferrer">
                {label}
                <ExternalLinkIcon />
            </a>
        </li>
    )

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__grid">
                    <div className="site-footer__brand">
                        <Link to="/" className="site-header__brand">
                            <img src={logo} width={26} height={26} alt="" />
                            <span>nginx ignition</span>
                        </Link>
                        <p>{t("footer.tagline")}</p>
                    </div>
                    <div className="site-footer__column">
                        <h3>{t("footer.product")}</h3>
                        <ul>
                            <li>
                                <Link to="/features">{t("nav.features")}</Link>
                            </li>
                            <li>
                                <Link to="/getting-started">
                                    {t("nav.gettingStarted")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs">{t("nav.docs")}</Link>
                            </li>
                            {external(LINKS.releases, t("footer.releases"))}
                        </ul>
                    </div>
                    <div className="site-footer__column">
                        <h3>{t("footer.community")}</h3>
                        <ul>
                            {external(LINKS.github, t("nav.github"))}
                            {external(LINKS.issues, t("footer.issues"))}
                            {external(LINKS.discussions, t("footer.discussions"))}
                            {external(LINKS.linkedin, t("footer.linkedin"))}
                        </ul>
                    </div>
                    <div className="site-footer__column">
                        <h3>{t("footer.resources")}</h3>
                        <ul>
                            {external(
                                LINKS.configReference,
                                t("footer.configReference"),
                            )}
                            {external(
                                LINKS.screenshotsGallery,
                                t("footer.screenshots"),
                            )}
                            {external(LINKS.changelog, t("footer.changelog"))}
                            {external(LINKS.security, t("footer.security"))}
                            {external(LINKS.license, t("footer.license"))}
                        </ul>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <p>{t("footer.madeWith")}</p>
                    <p>{t("footer.copyright", { year })}</p>
                </div>
            </div>
        </footer>
    )
}
