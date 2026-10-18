import { useTranslation } from "react-i18next"
import CodeBlock from "../../components/CodeBlock"
import DocsLayout from "../../components/DocsLayout"
import Seo from "../../components/Seo"

const PSQL_COMMAND = `psql --host=<your-db-host> --port=5432 \\
     --username=<your-username> --dbname=<your-db-name> \\
     --file=./nginx-ignition.sql`

export default function BackupRestorePage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.docsBackupRestore.title")}
                description={t("seo.docsBackupRestore.description")}
                path="/docs/backup-restore"
            />
            <DocsLayout
                guide="backup-restore"
                sourcePath="database-restore-guide.md"
            >
                <div className="prose">
                    <h1>{t("docs.guides.backup-restore.title")}</h1>
                    <p>{t("docPages.backupRestore.lead")}</p>

                    <h2>{t("docPages.backupRestore.safetyTitle")}</h2>
                    <ul>
                        <li>{t("docPages.backupRestore.safety1")}</li>
                        <li>{t("docPages.backupRestore.safety2")}</li>
                    </ul>

                    <h2>{t("docPages.backupRestore.sqliteTitle")}</h2>
                    <p>{t("docPages.backupRestore.sqliteBody")}</p>

                    <h3>{t("docPages.backupRestore.sqliteOptionATitle")}</h3>
                    <ol className="steps">
                        <li>{t("docPages.backupRestore.sqliteOptionAStep1")}</li>
                        <li>{t("docPages.backupRestore.sqliteOptionAStep2")}</li>
                        <li>{t("docPages.backupRestore.sqliteOptionAStep3")}</li>
                        <li>{t("docPages.backupRestore.sqliteOptionAStep4")}</li>
                    </ol>

                    <h3>{t("docPages.backupRestore.sqliteOptionBTitle")}</h3>
                    <ol className="steps">
                        <li>{t("docPages.backupRestore.sqliteOptionBStep1")}</li>
                        <li>{t("docPages.backupRestore.sqliteOptionBStep2")}</li>
                        <li>{t("docPages.backupRestore.sqliteOptionBStep3")}</li>
                    </ol>

                    <h2>{t("docPages.backupRestore.postgresTitle")}</h2>
                    <p>{t("docPages.backupRestore.postgresBody")}</p>
                    <ol className="steps">
                        <li>{t("docPages.backupRestore.postgresStep1")}</li>
                        <li>{t("docPages.backupRestore.postgresStep2")}</li>
                        <li>{t("docPages.backupRestore.postgresStep3")}</li>
                        <li>{t("docPages.backupRestore.postgresStep4")}</li>
                    </ol>
                    <CodeBlock code={PSQL_COMMAND} label="shell" />
                </div>
            </DocsLayout>
        </>
    )
}
