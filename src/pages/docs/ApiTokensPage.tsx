import { useTranslation } from "react-i18next"
import CodeBlock from "../../components/CodeBlock"
import DocsLayout from "../../components/DocsLayout"
import Seo from "../../components/Seo"

const CURL_SNIPPET = `curl -H "Authorization: Bearer YOUR_API_TOKEN" \\
     http://localhost:8090/api/hosts`

export default function ApiTokensPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docsApiTokens.title")}
                description={t("seo.docsApiTokens.description")}
                path="/docs/api-tokens"
            />
            <DocsLayout guide="api-tokens" sourcePath="api-tokens.md">
                <div className="prose">
                    <h1>{t("docs.guides.api-tokens.title")}</h1>
                    <p>{t("docPages.apiTokens.lead")}</p>

                    <h2>{t("docPages.apiTokens.createTitle")}</h2>
                    <ol className="steps">
                        <li>{t("docPages.apiTokens.createStep1")}</li>
                        <li>{t("docPages.apiTokens.createStep2")}</li>
                        <li>{t("docPages.apiTokens.createStep3")}</li>
                        <li>{t("docPages.apiTokens.createStep4")}</li>
                        <li>{t("docPages.apiTokens.createStep5")}</li>
                    </ol>
                    <ul>
                        <li>{t("docPages.apiTokens.createNote1")}</li>
                        <li>{t("docPages.apiTokens.createNote2")}</li>
                        <li>{t("docPages.apiTokens.createNote3")}</li>
                    </ul>

                    <h2>{t("docPages.apiTokens.useTitle")}</h2>
                    <p>{t("docPages.apiTokens.useBody")}</p>
                    <CodeBlock code={CURL_SNIPPET} label="shell" />
                    <p>{t("docPages.apiTokens.useError")}</p>
                    <p>{t("docPages.apiTokens.useNote")}</p>

                    <h2>{t("docPages.apiTokens.permissionsTitle")}</h2>
                    <p>{t("docPages.apiTokens.permissionsBody1")}</p>
                    <p>{t("docPages.apiTokens.permissionsBody2")}</p>

                    <h2>{t("docPages.apiTokens.reservedTitle")}</h2>
                    <p>{t("docPages.apiTokens.reservedBody")}</p>
                    <ul>
                        <li>{t("docPages.apiTokens.reservedItem1")}</li>
                        <li>{t("docPages.apiTokens.reservedItem2")}</li>
                        <li>{t("docPages.apiTokens.reservedItem3")}</li>
                        <li>{t("docPages.apiTokens.reservedItem4")}</li>
                    </ul>
                    <p>{t("docPages.apiTokens.reservedException")}</p>

                    <h2>{t("docPages.apiTokens.lifecycleTitle")}</h2>
                    <h3>{t("docPages.apiTokens.lifecycle1Title")}</h3>
                    <p>{t("docPages.apiTokens.lifecycle1Body")}</p>
                    <h3>{t("docPages.apiTokens.lifecycle2Title")}</h3>
                    <p>{t("docPages.apiTokens.lifecycle2Body")}</p>
                    <h3>{t("docPages.apiTokens.lifecycle3Title")}</h3>
                    <p>{t("docPages.apiTokens.lifecycle3Body")}</p>

                    <div className="callout" style={{ marginTop: 26 }}>
                        <p>{t("docPages.apiTokens.upgradeNote")}</p>
                    </div>
                </div>
            </DocsLayout>
        </>
    )
}
