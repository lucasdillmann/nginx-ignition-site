import accessListsVideo from "../assets/videos/access-lists.webp"
import cachesVideo from "../assets/videos/caches.webp"
import hostsVideo from "../assets/videos/hosts.webp"
import integrationsVideo from "../assets/videos/integrations.webp"
import logsVideo from "../assets/videos/logs.webp"
import settingsVideo from "../assets/videos/settings.webp"
import sslCertificatesVideo from "../assets/videos/ssl-certificates.webp"
import streamsVideo from "../assets/videos/streams.webp"
import vpnsVideo from "../assets/videos/vpns.webp"

export const HELP_TOURS = [
    { key: "hosts", anchor: "hosts", video: hostsVideo },
    { key: "streams", anchor: "streams", video: streamsVideo },
    { key: "ssl", anchor: "ssl-certificates", video: sslCertificatesVideo },
    { key: "logs", anchor: "logs", video: logsVideo },
    { key: "integrations", anchor: "integrations", video: integrationsVideo },
    { key: "vpn", anchor: "vpn", video: vpnsVideo },
    { key: "accessLists", anchor: "access-lists", video: accessListsVideo },
    { key: "caches", anchor: "cache-configurations", video: cachesVideo },
    { key: "settings", anchor: "settings", video: settingsVideo },
] as const

export type HelpTourKey = (typeof HELP_TOURS)[number]["key"]
