import { useTranslation } from "react-i18next"
import CodeBlock from "../../components/CodeBlock"
import DocsLayout from "../../components/DocsLayout"
import Seo from "../../components/Seo"
import { LINKS } from "../../config"

const PASSWORD_RESET_ENV = `NGINX_IGNITION_PASSWORD_RESET_USERNAME=admin`

const PASSWORD_RESET_LOG = `Password reset completed successfully for the user admin. New password: 0bd2189e`

export default function TroubleshootingPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docsTroubleshooting.title")}
                description={t("seo.docsTroubleshooting.description")}
                path="/docs/troubleshooting"
            />
            <DocsLayout guide="troubleshooting" sourcePath="troubleshooting.md">
                <div className="prose">
                    <h1>{t("docs.guides.troubleshooting.title")}</h1>
                    <p>{t("docPages.troubleshooting.lead")}</p>
                    <p>
                        <a
                            href="https://docs.docker.com/engine/logging/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("docPages.troubleshooting.logsLink")}
                        </a>
                    </p>

                    <h2>{t("docPages.troubleshooting.passwordTitle")}</h2>
                    <p>{t("docPages.troubleshooting.passwordBody")}</p>
                    <CodeBlock code={PASSWORD_RESET_ENV} label="shell" />
                    <CodeBlock code={PASSWORD_RESET_LOG} label="text" />
                    <p>{t("docPages.troubleshooting.passwordNote")}</p>

                    <h2>{t("docPages.troubleshooting.helpTitle")}</h2>
                    <p>{t("docPages.troubleshooting.helpBody")}</p>
                    <ul>
                        <li>
                            <a
                                href={LINKS.issues}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("docPages.troubleshooting.helpIssues")}
                            </a>
                        </li>
                        <li>
                            <a
                                href={LINKS.discussions}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t(
                                    "docPages.troubleshooting.helpDiscussions",
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
            </DocsLayout>
        </>
    )
}
