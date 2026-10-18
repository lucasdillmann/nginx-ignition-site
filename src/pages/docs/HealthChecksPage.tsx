import { useTranslation } from "react-i18next"
import CodeBlock from "../../components/CodeBlock"
import DocsLayout from "../../components/DocsLayout"
import Seo from "../../components/Seo"

const LIVENESS_RESPONSE = `{
    "healthy": true,
    "components": [
        {
            "name": "database",
            "healthy": true
        }
    ]
}`

const COMPOSE_HEALTHCHECK = `services:
  nginx-ignition:
    image: dillmann/nginx-ignition:latest
    ports:
      - "8090:8090"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8090/api/health/liveness"]
      interval: 30s
      timeout: 3s
      start_period: 5s
      retries: 3`

const KUBERNETES_PROBES = `livenessProbe:
  httpGet:
    path: /api/health/liveness
    port: 8090
  initialDelaySeconds: 10
  periodSeconds: 30

readinessProbe:
  httpGet:
    path: /api/health/readiness
    port: 8090
  initialDelaySeconds: 5
  periodSeconds: 10`

export default function HealthChecksPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docsHealthChecks.title")}
                description={t("seo.docsHealthChecks.description")}
                path="/docs/health-checks"
            />
            <DocsLayout guide="health-checks" sourcePath="health-checks.md">
                <div className="prose">
                    <h1>{t("docs.guides.health-checks.title")}</h1>
                    <p>{t("docPages.healthChecks.lead")}</p>

                    <h2>{t("docPages.healthChecks.disableTitle")}</h2>
                    <p>{t("docPages.healthChecks.disableBody")}</p>

                    <h2>{t("docPages.healthChecks.endpointsTitle")}</h2>

                    <h3>{t("docPages.healthChecks.livenessTitle")}</h3>
                    <p>{t("docPages.healthChecks.livenessBody")}</p>
                    <ul>
                        <li>{t("docPages.healthChecks.livenessCode200")}</li>
                        <li>{t("docPages.healthChecks.livenessCode503")}</li>
                    </ul>
                    <CodeBlock
                        code={LIVENESS_RESPONSE}
                        label={t("docPages.healthChecks.livenessExampleLabel")}
                        language="json"
                    />

                    <h3>{t("docPages.healthChecks.readinessTitle")}</h3>
                    <p>{t("docPages.healthChecks.readinessBody")}</p>
                    <ul>
                        <li>{t("docPages.healthChecks.readinessCode200")}</li>
                    </ul>

                    <h2>{t("docPages.healthChecks.dockerTitle")}</h2>
                    <p>{t("docPages.healthChecks.dockerBody")}</p>
                    <CodeBlock code={COMPOSE_HEALTHCHECK} label="yaml" />

                    <h2>{t("docPages.healthChecks.kubernetesTitle")}</h2>
                    <p>{t("docPages.healthChecks.kubernetesBody")}</p>
                    <CodeBlock code={KUBERNETES_PROBES} label="yaml" />
                </div>
            </DocsLayout>
        </>
    )
}
