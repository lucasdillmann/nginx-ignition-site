import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import Seo from "../components/Seo"

export default function NotFoundPage() {
    const { t } = useTranslation()

    return (
        <>
            <Seo
                title={t("seo.notFound.title")}
                description={t("seo.notFound.description")}
                path="/404"
            />
            <div className="container not-found">
                <h1>{t("notFound.title")}</h1>
                <p>{t("notFound.body")}</p>
                <div className="btn-row">
                    <Link className="btn btn--primary" to="/">
                        {t("notFound.home")}
                    </Link>
                    <Link className="btn btn--secondary" to="/features">
                        {t("notFound.features")}
                    </Link>
                    <Link className="btn btn--ghost" to="/docs">
                        {t("notFound.docs")}
                    </Link>
                </div>
            </div>
        </>
    )
}
