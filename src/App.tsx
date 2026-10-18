import { Suspense, useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"
import BootLoader from "./components/BootLoader"
import Layout from "./components/Layout"
import DocsHubPage from "./pages/DocsHubPage"
import FeaturesPage from "./pages/FeaturesPage"
import GettingStartedPage from "./pages/GettingStartedPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import ApiTokensPage from "./pages/docs/ApiTokensPage"
import BackupRestorePage from "./pages/docs/BackupRestorePage"
import ConfigurationPage from "./pages/docs/ConfigurationPage"
import HealthChecksPage from "./pages/docs/HealthChecksPage"
import TroubleshootingPage from "./pages/docs/TroubleshootingPage"

function ScrollManager() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash)

            if (element) {
                element.scrollIntoView()
                return
            }
        }

        window.scrollTo(0, 0)
    }, [pathname, hash])

    return null
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollManager />
            <Suspense fallback={<BootLoader />}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path="/getting-started"
                            element={<GettingStartedPage />}
                        />
                        <Route path="/features" element={<FeaturesPage />} />
                        <Route path="/docs" element={<DocsHubPage />} />
                        <Route
                            path="/docs/configuration"
                            element={<ConfigurationPage />}
                        />
                        <Route
                            path="/docs/api-tokens"
                            element={<ApiTokensPage />}
                        />
                        <Route
                            path="/docs/health-checks"
                            element={<HealthChecksPage />}
                        />
                        <Route
                            path="/docs/backup-restore"
                            element={<BackupRestorePage />}
                        />
                        <Route
                            path="/docs/troubleshooting"
                            element={<TroubleshootingPage />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
