import { useTranslation } from "react-i18next"
import CodeBlock from "../../components/CodeBlock"
import DocsLayout from "../../components/DocsLayout"
import Seo from "../../components/Seo"
import { LINKS } from "../../config"
import { CONFIG_ENV_VARS } from "../../data/envVars"

const POSTGRES_SNIPPET = `NGINX_IGNITION_DATABASE_DRIVER=postgres
NGINX_IGNITION_DATABASE_HOST=192.168.1.150
NGINX_IGNITION_DATABASE_PORT=5432
NGINX_IGNITION_DATABASE_NAME=my_custom_db
NGINX_IGNITION_DATABASE_SSL_MODE=disable
NGINX_IGNITION_DATABASE_USERNAME=my_username
NGINX_IGNITION_DATABASE_PASSWORD=supersecretpassword`

const CONFIG_FILE_SNIPPET = `nginx-ignition.server.port=8090
nginx-ignition.nginx.binary-path=/usr/sbin/nginx
nginx-ignition.database.driver=postgres`

export default function ConfigurationPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docsConfiguration.title")}
                description={t("seo.docsConfiguration.description")}
                path="/docs/configuration"
            />
            <DocsLayout
                guide="configuration"
                sourcePath="configuration-properties.md"
            >
                <div className="prose">
                    <h1>{t("docs.guides.configuration.title")}</h1>
                    <p>{t("docPages.configuration.lead")}</p>

                    <h2>{t("docPages.configuration.envTitle")}</h2>
                    <p>{t("docPages.configuration.envBody")}</p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>{t("docPages.configuration.envVarCol")}</th>
                                    <th>
                                        {t(
                                            "docPages.configuration.envDescriptionCol",
                                        )}
                                    </th>
                                    <th>
                                        {t("docPages.configuration.envExampleCol")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {CONFIG_ENV_VARS.map(name => (
                                    <tr key={name}>
                                        <td>
                                            <code>{name}</code>
                                        </td>
                                        <td>
                                            {t(
                                                `docPages.configuration.envVars.${name}.description`,
                                            )}
                                        </td>
                                        <td>
                                            <code>
                                                {t(
                                                    `docPages.configuration.envVars.${name}.example`,
                                                )}
                                            </code>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p>
                        {t("docPages.configuration.envMore")}{" "}
                        <a
                            href={LINKS.configReference}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("docs.reference.config.title")}
                        </a>
                        .
                    </p>

                    <h2>{t("docPages.configuration.postgresTitle")}</h2>
                    <p>{t("docPages.configuration.postgresBody")}</p>
                    <CodeBlock code={POSTGRES_SNIPPET} label="shell" />
                    <p>{t("docPages.configuration.postgresNote")}</p>

                    <h2>{t("docPages.configuration.configFileTitle")}</h2>
                    <p>{t("docPages.configuration.configFileBody")}</p>
                    <CodeBlock code={CONFIG_FILE_SNIPPET} label="properties" />

                    <h2>{t("docPages.configuration.jwtTitle")}</h2>
                    <p>{t("docPages.configuration.jwtBody")}</p>
                </div>
            </DocsLayout>
        </>
    )
}
