import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router"
import logo from "../assets/logo.svg"
import { LINKS } from "../config"
import { useLatestRelease } from "../lib/release"
import LanguageSwitcher from "./LanguageSwitcher"
import { CloseIcon, GitHubIcon, MenuIcon } from "./icons"

export default function Header() {
    const { t } = useTranslation()
    const release = useLatestRelease()
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { to: "/features", label: t("nav.features") },
        { to: "/getting-started", label: t("nav.gettingStarted") },
        { to: "/docs", label: t("nav.docs") },
    ]

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link to="/" className="site-header__brand">
                    <img src={logo} width={28} height={28} alt="" />
                    <span>nginx ignition</span>
                </Link>
                <nav
                    className="site-header__nav"
                    aria-label={t("nav.label")}
                >
                    {navItems.map(item => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `site-header__link${
                                    isActive ? " is-active" : ""
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="site-header__actions">
                    <a
                        className="site-header__github"
                        href={LINKS.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("nav.github")}
                    >
                        <GitHubIcon />
                    </a>
                    {release && (
                        <a
                            className="chip chip--link"
                            href={release.htmlUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            v{release.version}
                        </a>
                    )}
                    <LanguageSwitcher />
                    <button
                        type="button"
                        className="site-header__menu"
                        aria-expanded={menuOpen}
                        aria-label={
                            menuOpen ? t("nav.closeMenu") : t("nav.openMenu")
                        }
                        onClick={() => setMenuOpen(value => !value)}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="site-header__mobile">
                    <nav
                        className="container site-header__mobile-nav"
                        aria-label={t("nav.label")}
                    >
                        {navItems.map(item => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `site-header__link${
                                        isActive ? " is-active" : ""
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <a
                            className="site-header__link"
                            href={LINKS.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setMenuOpen(false)}
                        >
                            {t("nav.github")}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
