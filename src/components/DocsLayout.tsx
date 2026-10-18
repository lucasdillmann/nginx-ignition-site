import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router"
import { LINKS } from "../config"
import { DOC_GUIDES, DOC_GUIDE_PATHS, type DocGuide } from "../data/guides"
import { ExternalLinkIcon } from "./icons"

interface DocsLayoutProps {
    guide: DocGuide
    sourcePath: string
    children: ReactNode
}

export default function DocsLayout({
    guide,
    sourcePath,
    children,
}: DocsLayoutProps) {
    const { t } = useTranslation()
    const index = DOC_GUIDES.indexOf(guide)
    const previous = index > 0 ? DOC_GUIDES[index - 1] : undefined
    const next =
        index < DOC_GUIDES.length - 1 ? DOC_GUIDES[index + 1] : undefined

    const sourceUrl = `${LINKS.github}/blob/main/docs/${sourcePath}`

    return (
        <div className="container docs-layout">
            <aside className="docs-sidebar">
                <p className="docs-sidebar__title">{t("docs.sidebarTitle")}</p>
                <nav aria-label={t("docs.sidebarTitle")}>
                    <ul>
                        <li>
                            <NavLink
                                to="/docs"
                                end
                                className={({ isActive }) =>
                                    `docs-sidebar__link${
                                        isActive ? " is-active" : ""
                                    }`
                                }
                            >
                                {t("docs.overview")}
                            </NavLink>
                        </li>
                        {DOC_GUIDES.map(item => (
                            <li key={item}>
                                <NavLink
                                    to={DOC_GUIDE_PATHS[item]}
                                    className={({ isActive }) =>
                                        `docs-sidebar__link${
                                            isActive ? " is-active" : ""
                                        }`
                                    }
                                >
                                    {t(`docs.guides.${item}.title`)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a
                    className="docs-sidebar__reference"
                    href={LINKS.configReference}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t("docs.fullReference")}
                    <ExternalLinkIcon />
                </a>
            </aside>
            <div className="docs-content">
                {children}
                <div className="docs-source">
                    <a href={sourceUrl} target="_blank" rel="noreferrer">
                        {t("docs.fullDoc")}
                        <ExternalLinkIcon />
                    </a>
                </div>
                <nav
                    className="docs-prevnext"
                    aria-label={t("docs.sidebarTitle")}
                >
                    {previous ? (
                        <Link
                            className="docs-prevnext__link"
                            to={DOC_GUIDE_PATHS[previous]}
                        >
                            <span>{t("docs.previous")}</span>
                            {t(`docs.guides.${previous}.title`)}
                        </Link>
                    ) : (
                        <span />
                    )}
                    {next ? (
                        <Link
                            className="docs-prevnext__link docs-prevnext__link--next"
                            to={DOC_GUIDE_PATHS[next]}
                        >
                            <span>{t("docs.next")}</span>
                            {t(`docs.guides.${next}.title`)}
                        </Link>
                    ) : (
                        <span />
                    )}
                </nav>
            </div>
        </div>
    )
}
