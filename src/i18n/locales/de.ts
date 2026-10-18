import type { Messages } from "./en"

const de: Messages = {
    common: {
        getStarted: "Loslegen",
        download: "Herunterladen",
        viewOnGitHub: "Auf GitHub ansehen",
        learnMore: "Mehr erfahren",
        readGuide: "Anleitung lesen",
        copy: "Kopieren",
        copied: "Kopiert!",
        latestVersion: "Neueste Version",
        releasedOn: "veröffentlicht am {{date}}",
        releaseNotes: "Versionshinweise",
        browseReleases: "Alle Releases ansehen",
        seeAllFeatures: "Alle Funktionen ansehen",
        githubInEnglish: "Öffnet auf GitHub, auf Englisch.",
        previous: "Zurück",
        next: "Weiter",
        goToSlide: "Zu Folie {{index}} wechseln",
        starOnGitHub: "Star auf GitHub",
    },
    nav: {
        label: "Hauptnavigation",
        features: "Funktionen",
        docs: "Doku",
        gettingStarted: "Erste Schritte",
        github: "GitHub",
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen",
    },
    languageSwitcher: {
        label: "Sprache ändern",
    },
    seo: {
        home: {
            title:
                "nginx ignition — Eine moderne Oberfläche für den nginx-Webserver",
            description:
                "Eine moderne, intuitive Weboberfläche für den nginx-Webserver. Virtuelle Hosts, Streams, SSL-Zertifikate, Integrationen und mehr — installiert mit einem einzigen Docker-Befehl. Kostenlos und Open Source.",
        },
        gettingStarted: {
            title: "Erste Schritte — nginx ignition",
            description:
                "Installieren Sie nginx ignition mit Docker, Docker Compose oder einem nativen Paket für Linux, Windows und macOS. Laden Sie die neueste Version herunter.",
        },
        features: {
            title: "Funktionen — nginx ignition",
            description:
                "Virtuelle Hosts, Streams, SSL-Zertifikate, Sicherheit, Integrationen, Logs, Verkehrsstatistiken und Caching — alles, was nginx ignition kann, mit Screenshots.",
        },
        docs: {
            title: "Dokumentation — nginx ignition",
            description:
                "Anleitungen zum Konfigurieren und Betreiben von nginx ignition: Umgebungsvariablen, API-Tokens, Health-Checks, Backup und Wiederherstellung, Fehlerbehebung.",
        },
        docsConfiguration: {
            title: "Konfiguration — nginx ignition Doku",
            description:
                "Konfigurieren Sie nginx ignition über Umgebungsvariablen oder eine Properties-Datei: Datenbank, nginx-Pfade, JWT-Secret und mehr.",
        },
        docsApiTokens: {
            title: "API-Tokens — nginx ignition Doku",
            description:
                "Erstellen, verwenden und widerrufen Sie API-Tokens, um Skripte und Tools gegenüber der nginx ignition API zu authentifizieren.",
        },
        docsHealthChecks: {
            title: "Health-Checks — nginx ignition Doku",
            description:
                "Liveness- und Readiness-Endpunkte für Docker, Kubernetes und Monitoring-Systeme.",
        },
        docsBackupRestore: {
            title: "Backup und Wiederherstellung — nginx ignition Doku",
            description:
                "Wie Sie ein Datenbank-Backup von nginx ignition wiederherstellen, für SQLite und PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Fehlerbehebung — nginx ignition Doku",
            description:
                "Wo Sie bei Problemen zuerst nachsehen und wie Sie ein verlorenes Passwort zurücksetzen.",
        },
        notFound: {
            title: "Seite nicht gefunden — nginx ignition",
            description: "Die gesuchte Seite existiert nicht.",
        },
    },
    home: {
        eyebrow: "Open Source · Selbst gehostet · Mehrsprachig · Multiplattform",
        title: "nginx, ohne den Konfigurationsfrust.",
        subtitle:
            "nginx ignition ist eine moderne, intuitive Weboberfläche für den nginx-Webserver — gemacht für Entwickler und Homelab-Nutzer, die starke Kontrolle wollen, ohne Konfigurationsdateien von Hand zu bearbeiten.",
        ctaPrimary: "Loslegen",
        ctaSecondary: "Auf GitHub ansehen",
        ctaFeatures: "Funktionen entdecken",
        commandTitle: "Mit einem einzigen Befehl einsatzbereit",
        commandNote:
            "Warten Sie ein paar Sekunden, öffnen Sie http://localhost:8090 und lassen Sie den Einrichtungsassistenten Ihren ersten Benutzer anlegen.",
        commandNoteDb:
            "Die eingebettete SQLite-Datenbank reicht zum Ausprobieren; für den Produktivbetrieb wird PostgreSQL empfohlen.",
        commandMore: "Alle Installationsoptionen ansehen",
        highlightsTitle: "Alles für nginx an einem Ort",
        highlightsSubtitle:
            "Alles an Bord für die häufigsten Anwendungsfälle — ganz ohne manuellen Konfigurationsfrust.",
        highlights: {
            hosts: {
                title: "Virtuelle Hosts & Routing",
                body: "Eigene Domains, Routen, Proxys (inklusive gRPC), Weiterleitungen, eigener JS/Lua-Code und statische Antworten.",
            },
            streams: {
                title: "Streams",
                body: "TCP-, UDP- und Unix-Sockets als Proxy mit SNI-Routing, Circuit Breakern und Lastverteilung.",
            },
            ssl: {
                title: "SSL-Zertifikate",
                body: "Automatisiertes Let's Encrypt (ACME), selbstsigniert oder eigene Zertifikate.",
            },
            integrations: {
                title: "Native Integrationen",
                body: "Erstklassige Unterstützung für Docker, Docker Swarm, Tailscale, NetBird und TrueNAS.",
            },
            security: {
                title: "Sicherheit",
                body: "Zwei-Faktor-Authentifizierung, ABAC und Zugriffslisten pro Host. API-Tokens für Ihre Skripte und Tools.",
            },
            observability: {
                title: "Logs, Statistiken & Caching",
                body: "Zugriffs- und Fehlerlogs mit Suche, Verkehrsstatistiken in Echtzeit und nginx-Caching.",
            },
        },
        showcaseTitle: "Ein kurzer Blick",
        showcaseSubtitle:
            "Jeder Bildschirm ist darauf ausgelegt, einfach, klar und nützlich zu sein.",
        showcase: {
            dashboard: "Das Dashboard: Ressourcen, nginx-Status und aktuelle Fehler.",
        },
        goalsTitle: "Gemacht für Entwickler und Homelab-Nutzer",
        goalsBody1:
            "nginx ignition ist für Entwickler und Enthusiasten gebaut, die eine Balance zwischen Bedienkomfort und der Leistungsfähigkeit von nginx suchen.",
        goalsBody2:
            "Es ist nicht darauf ausgelegt, Enterprise-tauglich oder funktionsvollständig für hochkomplexe Umgebungen zu sein: Wenn Ihr Anwendungsfall extrem fortgeschritten ist, werden Sie die Konfigurationsdateien wahrscheinlich lieber manuell verwalten. Das Ziel ist ein leistungsstarker und zugleich intuitiver Weg, nginx für die gängigsten Anwendungsfälle zu betreiben.",
        goalsForTitle: "Wofür es gedacht ist",
        goalsFor1: "Homelabs und selbst gehostete Umgebungen",
        goalsFor2: "Entwickler, die Kontrolle ohne manuelles Bearbeiten wollen",
        goalsFor3: "Häufige Anwendungsfälle, schnell umgesetzt",
        goalsNotTitle: "Wofür es nicht gedacht ist",
        goalsNot1: "Hochkomplexe Enterprise-Umgebungen",
        goalsNot2: "Ersatz für jede nginx-Direktive",
        goalsNot3: "Die Verwaltung ganzer Server-Flotten",
        languagesTitle: "Verfügbar in 11 Sprachen",
        languagesBody:
            "Die Oberfläche ist in 11 Sprachen übersetzt und folgt automatisch der Sprache Ihres Browsers. Über die Sprachauswahl im Header können Sie jederzeit wechseln.",
        ctaTitle: "Bereit, es auszuprobieren?",
        ctaBody:
            "Testen Sie nginx ignition mit einem einzigen Docker-Befehl oder laden Sie die neueste Version für Ihre Plattform herunter.",
        ctaDiscussions: "Diskussionen",
        ctaIssues: "Problem melden",
    },
    gettingStarted: {
        heroTitle: "Bringen Sie nginx ignition zum Laufen",
        heroSubtitle:
            "Testen Sie es in Sekunden mit Docker, laden Sie ein natives Paket für macOS, Windows oder Linux herunter oder verwenden Sie die produktionsreife Compose-Datei.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Downloads",
        heroJumpNative: "Native Installationen",
        dockerTitle: "Schneller Test mit Docker",
        dockerBody:
            "Der schnellste Weg, nginx ignition in Aktion zu sehen, ist ein einziger Docker-Befehl.",
        dockerStep1: "Führen Sie den folgenden Befehl aus.",
        dockerStep2:
            "Warten Sie ein paar Sekunden, bis die Anwendung initialisiert ist.",
        dockerStep3: "Öffnen Sie http://localhost:8090 in Ihrem Browser.",
        dockerStep4:
            "Der Einrichtungsassistent führt Sie durch das Anlegen Ihres ersten Benutzers.",
        dockerPersistenceTitle: "So bleiben Ihre Daten erhalten",
        dockerPersistenceBody:
            "Die eingebettete Datenbank liegt im Container. Fügen Sie ein Volume hinzu, damit sie zwischen den Läufen erhalten bleibt:",
        dockerSqliteTitle: "Die eingebettete Datenbank verwenden",
        dockerSqliteBody:
            "Standardmäßig verwendet die Anwendung eine eingebettete SQLite-Datenbank. Zum Ausprobieren ist das in Ordnung, für langfristige Installationen wird jedoch PostgreSQL empfohlen.",
        composeTitle: "Produktivbetrieb mit Docker Compose",
        composeBody:
            "Die Beispiel-Compose-Datei startet nginx ignition zusammen mit PostgreSQL, mit Health-Checks und persistenten Volumes. Prüfen und aktualisieren Sie alle Werte, bevor Sie sie einsetzen.",
        composeWarning:
            "Ersetzen Sie das Platzhalter-Datenbankpasswort vor dem Einsatz durch einen starken Wert.",
        composeDownload: "docker-compose.yml auf GitHub ansehen",
        downloadsTitle: "Die neueste Version herunterladen",
        downloadsSubtitle:
            "Native Pakete für Linux, Windows und macOS. Jeder Button verweist immer auf die Assets der neuesten Version.",
        downloadsFallbackNote:
            "GitHub war gerade nicht erreichbar, daher verweisen die Links auf die Release-Seite.",
        downloadsHint:
            "Nicht sicher, was Sie wählen sollen? Docker ist auf jeder Plattform die einfachste Option.",
        macosTitle: "macOS",
        macosNote: "Erfordert macOS 12 oder neuer.",
        macosButton: "Für macOS herunterladen",
        macosArchNote:
            "Apple Silicon (arm64). Intel-Macs: Docker verwenden.",
        windowsTitle: "Windows",
        windowsNote:
            "ZIP-Archiv mit der Anwendung, der Oberfläche, den Migrationen und einer sofort nutzbaren Properties-Datei.",
        windowsX64: "Für Windows herunterladen (x64)",
        windowsArm64: "Für Windows herunterladen (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Native Pakete und generische Archive, für amd64 und arm64.",
        linuxArchLabel: "Architektur",
        linuxFormatLabel: "Paket",
        linuxDownload: "Für Linux herunterladen",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — generisches Archiv",
        },
        nativeTitle: "Native Installationen",
        nativeSubtitle:
            "Für eine dauerhafte Installation laden Sie das Paket für Ihre Plattform herunter und befolgen Sie die folgenden Schritte.",
        nativeRequirements:
            "Voraussetzungen: nginx installiert und zugänglich (mit den Modulen mod-http-js, mod-http-lua und mod-stream), Port 8090 frei und Administratorrechte für die Installation des Dienstes.",
        nativeFullInstructions: "Vollständige Anleitung auf GitHub",
        nativeUpgradeNote:
            "Upgrade: Stoppen Sie den Dienst, ersetzen Sie das Binary und alle aktualisierten Assets und starten Sie ihn dann erneut. Die vollständigen Schritte finden Sie in der Anleitung.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Entpacken Sie das Archiv und kopieren Sie seinen Inhalt nach /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Korrigieren Sie die Berechtigungen und installieren Sie die mitgelieferte systemd-Unit.",
        nativeLinuxStep3:
            "Bearbeiten Sie nginx-ignition.properties bei Bedarf (zum Beispiel den Pfad zum nginx-Binary).",
        nativeLinuxStep4:
            "Aktivieren und starten Sie den Dienst und öffnen Sie dann die Firewall (und SELinux, falls im Enforcing-Modus).",
        nativeLinuxStep5:
            "Öffnen Sie http://your-host:8090 und schließen Sie die Einrichtung im Browser ab.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Entpacken Sie das Archiv und kopieren Sie seinen Inhalt nach /opt/nginx-ignition.",
        nativeMacosStep2:
            "Korrigieren Sie die Berechtigungen und installieren Sie die mitgelieferte launchd-Plist.",
        nativeMacosStep3:
            "Bearbeiten Sie nginx-ignition.properties und richten Sie nginx.binary-path auf Ihr nginx aus (für Homebrew: /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Laden und starten Sie den Dienst und erlauben Sie eingehende Verbindungen in der Firewall.",
        nativeMacosStep5:
            "Öffnen Sie http://your-host:8090 und schließen Sie die Einrichtung im Browser ab.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Entpacken Sie das ZIP-Archiv in ein Verzeichnis Ihrer Wahl, zum Beispiel C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Bearbeiten Sie nginx-ignition.properties und setzen Sie nginx.binary-path auf den Speicherort Ihrer nginx.exe.",
        nativeWindowsStep3:
            "Führen Sie nginx-ignition.exe in einer Administrator-Eingabeaufforderung aus.",
        nativeWindowsStep4:
            "Erlauben Sie Port 8090 in der Windows-Firewall. Für den Betrieb als Dienst verwenden Sie NSSM oder WinSW.",
        nativeWindowsStep5:
            "Öffnen Sie http://localhost:8090 und schließen Sie die Einrichtung im Browser ab.",
        firstStepsTitle: "Nach der Installation",
        firstStepsSubtitle:
            "Eine kurze Checkliste, um das Beste herauszuholen:",
        firstSteps1:
            "Schließen Sie den Einrichtungsassistenten ab und melden Sie sich an.",
        firstSteps2:
            "Erstellen Sie Ihren ersten virtuellen Host und fügen Sie seine Domainnamen hinzu.",
        firstSteps3:
            "Stellen Sie ein SSL-Zertifikat für den Host aus oder laden Sie Ihr eigenes hoch.",
        firstSteps4:
            "Entdecken Sie Integrationen (Docker, Swarm, TrueNAS) und VPN-Verbindungen (Tailscale, NetBird).",
        firstStepsDocs: "Anleitungen durchstöbern",
        firstStepsFeatures: "Alle Funktionen entdecken",
        helpTitle: "Etwas funktioniert nicht?",
        helpBody:
            "nginx ignition bietet hilfreiche Logs: Der erste Schritt ist immer, die Anwendungs-Logs zu prüfen (bei Docker die Standardausgabe des Containers).",
        helpTroubleshooting: "Anleitung zur Fehlerbehebung lesen",
        helpIssues: "Ein Issue öffnen",
        helpDiscussions: "In den Diskussionen fragen",
    },
    features: {
        heroTitle: "Alles für nginx, ohne Terminal",
        heroSubtitle:
            "Von virtuellen Hosts und SSL-Zertifikaten bis hin zu Streams, Logs und Caching — die häufigsten nginx-Aufgaben, verwaltet über eine aufgeräumte, moderne Oberfläche.",
        tours: {
            hosts: {
                title: "Hosts",
                bodies: [
                    "Ein Virtual Host, kurz Host, ist eine Website, die der nginx-Server verfügbar macht, um in einem Browser geöffnet zu werden. Sie finden alle verwalteten Hosts links im Hauptmenü.",
                    "nginx ignition bietet eine intuitive Möglichkeit, solche Websites zu konfigurieren. Wenn Sie zum Beispiel ein NAS haben und einige Dienste darauf laufen (wie Jellyfin, Vaultwarden und mehr), ermöglicht ignition einen einfachen Weg, darauf über eine Domain wie jellyfin.myhome.com zuzugreifen, was viel einfacher zu merken und zu verwenden ist als eine IP und ein Port.",
                    "Jeder Host hat einen Satz von Routen, das sind Regeln, die definieren, welche Anfragemuster weitergeleitet werden sollen und wohin, sowie Bindungen, welche die Definitionen sind, auf welchen Ports nginx auf solche Anfragen hören soll.",
                ],
            },
            streams: {
                title: "Streams",
                bodies: [
                    "Während Hosts der Hauptweg sind, um Ihre HTTP- und HTTPS-basierten Dienste offenzulegen, ermöglichen Streams Ihnen, andere Dienste offenzulegen, die auf TCP, UDP und Unix-Sockets basieren.",
                    "Wenn Sie einen Spieleserver, eine Datenbank, einen DNS-Server und alles andere, das nicht das HTTP-Protokoll verwendet, offenlegen müssen, sind Streams der richtige Weg.",
                ],
            },
            ssl: {
                title: "SSL-Zertifikate",
                bodies: [
                    "Wenn Sie Ihre Domains mit HTTPS-Verschlüsselung schützen wollen oder müssen, kommt die App auch mit einer einfachen Möglichkeit, solche SSL-Zertifikate zu verwalten.",
                    "Egal, ob Sie ein gültiges Zertifikat von Let's Encrypt, ein selbstsigniertes oder Ihr eigenes von einem Drittanbieter importieren müssen, ignition ermöglicht dies mit Leichtigkeit. Selbst wenn das Zertifikat kurz vor dem Ablauf steht, wird die App es automatisch für Sie erneuern.",
                    "Sobald ein SSL-Zertifikat erstellt oder importiert ist, können Sie es auf den Hosts verwenden, indem Sie einfach eine Option im Formular auswählen.",
                ],
            },
            logs: {
                title: "Logs",
                bodies: [
                    "Müssen Sie wissen, was angefordert wurde oder warum etwas nicht so funktioniert, wie es erwartet wurde? nginx ignition bietet auch eine einfache Möglichkeit für Sie, die nginx-Logs zu prüfen. Wählen Sie einfach den Host (oder den nginx-Server selbst), bei dem Sie prüfen wollen, was los ist, und wir holen die Logs für Sie.",
                    "Und Sie müssen sich keine Sorgen machen, dass Ihre Festplatte mit Logs voll wird, ignition rotiert sie automatisch für Sie (und Sie können steuern, wie viel aufbewahrt werden soll, oder die Rotation sogar deaktivieren, wenn es Ihnen besser passt).",
                ],
            },
            integrations: {
                title: "Integrationen",
                bodies: [
                    "Läuft Ihre App in einem Docker-Container oder in einem TrueNAS? Sie können die native Integration aktivieren, die nginx ignition bietet, und einfach einen Container oder eine App als Ziel-App auswählen, an die der Host die Anfragen weiterleiten soll.",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "Legen Sie Ihre Hosts einfach in Ihren VPNs offen. Wenn Sie Tailscale verwenden, kann nginx ignition automatisch eine virtuelle Maschine in Ihrem Netzwerk erstellen und die Anfragen an den Host weiterleiten, wann immer auf die IP oder den Hostnamen der Maschine zugegriffen wird.",
                ],
            },
            accessLists: {
                title: "Zugriffslisten",
                bodies: [
                    "Zugriffslisten bieten eine einfache Möglichkeit, entweder eine Route oder den gesamten Host zu schützen, indem geprüft wird, ob der Benutzer aus einem Bereich autorisierter IPs stammt oder durch einen gültigen Benutzernamen und ein Passwort (oder sogar beides, IP und Anmeldedaten) identifiziert wird",
                ],
            },
            caches: {
                title: "Cache-Konfiguration",
                bodies: [
                    "Beschleunigen Sie Ihre Websites und reduzieren Sie die Last auf Ihren Upstream-Servern, indem Sie die Content-Caching-Funktionen von nginx aktivieren. Ignition macht es einfach, Cache-Regeln zu konfigurieren, die bestimmen, welche Anfragen wie lange zwischengespeichert werden sollen.",
                    "Sie können das Cache-Verhalten nach HTTP-Statuscodes, Dateierweiterungen, Anfragemethoden und mehr anpassen. Erweiterte Funktionen wie die Behandlung veralteter Inhalte, Hintergrundaktualisierungen und Concurrency Locks geben Ihnen feinkörnige Kontrolle darüber, wie Ihre Inhalte zwischengespeichert und bereitgestellt werden.",
                ],
            },
            settings: {
                title: "Einstellungen",
                bodies: [
                    "Ignition abstrahiert die Komplexität der nginx-Konfigurationsdateien, aber das bedeutet nicht, dass Sie die Fähigkeit verlieren, einige Feinjustierungen vorzunehmen.",
                    "Mit der Einstellungsseite können Sie einige wichtige Definitionen wie die Timeout-Werte, die maximale Upload-/Body-Größe der Anfragen, die Standard-Ports, auf denen nginx auf Anfragen hören wird, und mehr definieren.",
                    "Darüber hinaus können Sie dort auch einige Funktionen von nginx ignition konfigurieren, wie die automatische Erneuerung von SSL-Zertifikaten und die Log-Rotation.",
                ],
            },
        },
        checklistTitle: "…und mehr",
        checklistSubtitle:
            "Alles Folgende ist bei nginx ignition von Haus aus dabei.",
        checklist: {
            virtualHosts: {
                title: "Virtuelle Hosts",
                body: "Mehrere Hosts mit eigenen Domains, Routen und Port-Bindungen.",
            },
            streams: {
                title: "Streams",
                body: "TCP-, UDP- und Unix-Sockets als Proxy mit SNI-basiertem Routing, Circuit Breakern und Lastverteilung.",
            },
            routing: {
                title: "Vielseitiges Routing",
                body: "Proxys (einschließlich gRPC/gRPCS-Upstreams), Weiterleitungen, eigener JS/Lua-Code, statische Antworten und Dateiauslieferung.",
            },
            serverConfiguration: {
                title: "Server-Konfiguration",
                body: "Maximale Body-/Upload-Größe, Server-Tokens, Timeouts, Log-Level und mehr.",
            },
            sslCertificates: {
                title: "SSL-Zertifikate",
                body: "Automatisiertes Let's Encrypt (ACME), selbstsigniert oder eigene Zertifikate.",
            },
            integrations: {
                title: "Native Integrationen",
                body: "Erstklassige Unterstützung für Docker, Docker Swarm, die VPNs Tailscale und NetBird sowie TrueNAS.",
            },
            security: {
                title: "Sicherheit",
                body: "Zwei-Faktor-Authentifizierung, attributbasierte Zugriffskontrolle und Zugriffslisten pro Host.",
            },
            apiTokens: {
                title: "API-Tokens",
                body: "Tokens generieren und widerrufen, um Skripte und externe Tools zu authentifizieren.",
            },
            logging: {
                title: "Logging",
                body: "Detaillierte Zugriffs- und Fehlerlogs für den Server und jeden Host, mit automatischer Rotation.",
            },
            stats: {
                title: "Verkehrsstatistiken",
                body: "Anfragenraten, Antwortzeiten und Verkehrsaufschlüsselungen nach Host und Upstream in Echtzeit.",
            },
            caching: {
                title: "Caching",
                body: "Integrierte nginx-Caching-Konfiguration für eine schnellere Auslieferung von Inhalten.",
            },
            execution: {
                title: "Flexible Ausführung",
                body: "Lassen Sie nginx von ignition ausführen oder erzeugen Sie nur die Konfigurationsdateien.",
            },
        },
    },
    docs: {
        sidebarTitle: "Anleitungen",
        overview: "Übersicht",
        fullReference: "Vollständige Referenz auf GitHub",
        fullDoc: "Vollständige Dokumentation auf GitHub ansehen",
        previous: "Zurück",
        next: "Weiter",
        heroTitle: "Dokumentation",
        heroSubtitle:
            "Das Wichtigste zu Installation, Konfiguration und Betrieb von nginx ignition. Jede Anleitung verlinkt auf das vollständige Dokument im Projekt-Repository.",
        guides: {
            configuration: {
                title: "Konfiguration",
                summary:
                    "Umgebungsvariablen, die Properties-Datei, PostgreSQL und das JWT-Secret.",
            },
            "api-tokens": {
                title: "API-Tokens",
                summary:
                    "Skripte und CI-Jobs gegenüber der API authentifizieren, ohne ein Passwort weiterzugeben.",
            },
            "health-checks": {
                title: "Health-Checks",
                summary:
                    "Liveness- und Readiness-Endpunkte für Docker, Kubernetes und Monitoring.",
            },
            "backup-restore": {
                title: "Backup & Wiederherstellung",
                summary:
                    "Wie Sie ein Datenbank-Backup wiederherstellen, für SQLite und PostgreSQL.",
            },
            troubleshooting: {
                title: "Fehlerbehebung",
                summary:
                    "Wo Sie zuerst nachsehen und wie Sie ein verlorenes Passwort zurücksetzen.",
            },
        },
        referenceTitle: "Vollständige Referenz auf GitHub",
        referenceBody:
            "Die Anleitungen hier behandeln das Wesentliche. Die ausführlichen Referenzen werden im Projekt-Repository gepflegt, auf Englisch:",
        reference: {
            config: {
                title: "Konfigurationseigenschaften",
                body: "Jede Umgebungsvariable und Eigenschaft, mit Standardwerten.",
            },
            migration: {
                title: "Migrationsanleitung",
                body: "Upgrade von nginx ignition 1.x auf 2.x.",
            },
            apiTokens: {
                title: "API-Tokens",
                body: "Die vollständige Dokumentation zu API-Tokens.",
            },
            healthChecks: {
                title: "Health-Checks",
                body: "Endpunkte und Anwendungsszenarien.",
            },
            restore: {
                title: "Datenbank-Wiederherstellung",
                body: "Die vollständige Anleitung zur Wiederherstellung.",
            },
            troubleshooting: {
                title: "Fehlerbehebung",
                body: "Häufige Probleme und wie Sie sie beheben.",
            },
            screenshots: {
                title: "Screenshot-Galerie",
                body: "Jeder Bildschirm der Anwendung, beschrieben.",
            },
            changelog: {
                title: "Changelog",
                body: "Was sich in jeder Version geändert hat.",
            },
            security: {
                title: "Sicherheitsrichtlinie",
                body: "Wie Sie Sicherheitslücken melden.",
            },
        },
        helpTitle: "Hilfe erhalten",
        helpBody:
            "Ein Problem gefunden oder eine Frage? Die GitHub-Issues und -Diskussionen sind die richtige Anlaufstelle — und der Ort, an dem neue Funktionen vorgeschlagen werden.",
        helpIssues: "Ein Issue öffnen",
        helpDiscussions: "Eine Diskussion starten",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition wird über Umgebungsvariablen oder eine Properties-Datei konfiguriert. Jede Einstellung hat einen einzigen Schlüssel: Als Umgebungsvariable wird er in Großbuchstaben mit Unterstrichen geschrieben (NGINX_IGNITION_SERVER_PORT), in der Properties-Datei in Kleinbuchstaben mit Punkten (nginx-ignition.server.port).",
            envTitle: "Wichtige Umgebungsvariablen",
            envBody:
                "Das Wesentliche für die meisten Installationen. Jede Eigenschaft hat einen Standardwert, daher legen Sie normalerweise nur fest, was Sie ändern möchten.",
            envVarCol: "Variable",
            envDescriptionCol: "Beschreibung",
            envExampleCol: "Beispiel",
            envMore:
                "Die vollständige Referenz listet jede Eigenschaft mit Standardwerten und Beispielen auf.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Port, auf dem nginx ignition Anfragen entgegennimmt",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Adresse, auf der nginx ignition Anfragen entgegennimmt",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Pfad zum zu verwendenden nginx-Binary",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Ablageort der generierten nginx-Konfigurationsdateien",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Datenbanktyp: sqlite oder postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Hostname oder IP-Adresse der Datenbank",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Port, auf dem die Datenbank lauscht",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Name der zu verwendenden Datenbank",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Datenbankverbindung verschlüsseln: require oder disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Benutzername für die Datenbank",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Passwort für die Datenbank",
                    example: "ihr-passwort",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Ordner, in dem die SQLite-Datenbankdatei gespeichert wird",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Eigenes Secret (genau 64 Zeichen) zum Signieren von Authentifizierungstokens; wird nur beim ersten Start gelesen",
                    example: "(zufällig)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "Wie lange ein Sitzungstoken gültig bleibt, bevor die Sitzung wegen Inaktivität endet",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description:
                        "Die Health-Check-Endpunkte aktivieren oder deaktivieren",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Setzt beim Start das Passwort dieses Benutzers zurück und beendet sich; wird zur Wiederherstellung verwendet",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (empfohlen für den Produktivbetrieb)",
            postgresBody:
                "Die eingebettete SQLite-Datenbank ist ideal für schnelle Tests, für langfristige Installationen sollte jedoch PostgreSQL verwendet werden. Richten Sie ignition mit den Datenbankvariablen auf Ihre Datenbank aus:",
            postgresNote:
                "Alle erforderlichen Tabellen und Indizes werden beim ersten Start automatisch erstellt und bei Upgrades automatisch aktualisiert.",
            configFileTitle: "Konfigurationsdatei",
            configFileBody:
                "Einstellungen können auch aus einer Properties-Datei stammen, mit denselben Schlüsseln in Kleinbuchstaben und mit Punkten. ignition liest in dieser Reihenfolge: die Datei unter NGINX_IGNITION_CONFIG_FILE_PATH, den mit --config angegebenen Pfad oder nginx-ignition.properties im Arbeitsverzeichnis.",
            jwtTitle: "Eigenes JWT-Secret",
            jwtBody:
                "Standardmäßig wird ein sicheres Zufalls-Secret generiert und in der Datenbank gespeichert. Um ein eigenes festzulegen, setzen Sie NGINX_IGNITION_SECURITY_JWT_SECRET mit genau 64 Zeichen vor dem ersten Start. Upgrade von einer Version, die diese Variable verwendet hat? Lassen Sie sie stehen: Ihr Wert wird beim ersten Start nach dem Upgrade in der Datenbank gespeichert.",
        },
        apiTokens: {
            lead: "API-Tokens ermöglichen es Skripten, CI-Jobs und anderen Tools, sich gegenüber der nginx ignition API zu authentifizieren, ohne Benutzername und Passwort weiterzugeben. Jedes Token gehört dem Benutzer, der es erstellt hat, und trägt dessen Berechtigungen.",
            createTitle: "Ein Token erstellen",
            createStep1:
                "Öffnen Sie das Benutzermenü in der oberen rechten Ecke der Oberfläche.",
            createStep2: "Wechseln Sie zum Tab API-Tokens.",
            createStep3: "Klicken Sie auf Neues Token.",
            createStep4:
                "Geben Sie ihm einen Namen und optional ein Ablaufdatum.",
            createStep5:
                "Klicken Sie auf Token erstellen und kopieren Sie den generierten Wert — er wird nur einmal angezeigt.",
            createNote1:
                "Der Name muss unter Ihren eigenen Tokens eindeutig sein und darf bis zu 256 Zeichen lang sein. Verwenden Sie etwas Aussagekräftiges, wie ci-deploy oder home-assistant.",
            createNote2:
                "Das Ablaufdatum ist optional. Ohne Angabe läuft das Token nie ab; mit Angabe muss es in der Zukunft liegen und das Token funktioniert nicht mehr, sobald dieser Zeitpunkt überschritten ist.",
            createNote3:
                "Der Tokenwert wird nur einmal direkt nach der Erstellung angezeigt und kann später nicht wiederhergestellt werden. Wenn Sie ihn verlieren, widerrufen Sie das Token und erstellen Sie ein neues.",
            useTitle: "Ein Token verwenden",
            useBody:
                "Senden Sie das Token im Authorization-Header mit dem Bearer-Schema, genau wie ein Sitzungstoken:",
            useError:
                "Auf ein ungültiges, widerrufenes oder abgelaufenes Token antwortet der Server mit 401 Unauthorized; auf reservierte Vorgänge mit 403 Forbidden.",
            useNote:
                "API-Tokens authentifizieren nur API-Aufrufe: Für die Anmeldung an der Weboberfläche sind weiterhin Benutzername und Passwort erforderlich.",
            permissionsTitle: "Berechtigungen",
            permissionsBody1:
                "Ein Token erbt die Berechtigungen des Benutzers, dem es gehört, und sie können nicht unabhängig vom Besitzer eingeschränkt werden.",
            permissionsBody2:
                "Wenn ein Token andere Berechtigungen benötigt, erstellen Sie einen eigenen Dienstbenutzer mit den gewünschten Zugriffsrechten und generieren Sie das Token aus diesem Konto.",
            reservedTitle: "Reservierte Vorgänge",
            reservedBody:
                "Einige Vorgänge sind interaktiven Sitzungen vorbehalten und können nicht mit einem Token ausgeführt werden:",
            reservedItem1: "Das Ändern von Profil oder Passwort.",
            reservedItem2:
                "Das Lesen, Aktivieren oder Deaktivieren der Zwei-Faktor-Authentifizierung.",
            reservedItem3: "Das Auflisten, Erstellen oder Widerrufen von API-Tokens.",
            reservedItem4:
                "Das Abmelden (wodurch nur interaktive Sitzungen ungültig werden).",
            reservedException:
                "Das Lesen des eigenen Profils mit GET /api/users/current ist die einzige Ausnahme: Tokens dürfen das.",
            lifecycleTitle: "Lebenszyklus eines Tokens",
            lifecycle1Title: "Keine automatische Verlängerung",
            lifecycle1Body:
                "Anders als Websitzungen werden API-Tokens nie automatisch verlängert; maßgeblich ist nur das Ablaufdatum des jeweiligen Tokens.",
            lifecycle2Title: "Sofortiger Widerruf",
            lifecycle2Body:
                "Jede Anfrage prüft das Token gegen die Datenbank, daher funktioniert ein widerrufenes Token schon beim nächsten Aufruf nicht mehr.",
            lifecycle3Title: "Deaktivierte Benutzer",
            lifecycle3Body:
                "Wenn Sie einen Benutzer deaktivieren, funktionieren seine Tokens nicht mehr, aber es wird nichts gelöscht; beim erneuten Aktivieren funktionieren sie wieder.",
            upgradeNote:
                "Beim Upgrade von einer Version älter als 2.47.0 werden alle Benutzer einmal abgemeldet, da sich das Tokenformat geändert hat. Melden Sie sich danach einfach erneut an.",
        },
        healthChecks: {
            lead: "Die Health-Check-Endpunkte können von Container-Orchestrierungsplattformen (wie Docker) und Monitoring-Systemen genutzt werden, um den Status und die Verfügbarkeit der Anwendung zu prüfen.",
            disableTitle: "Aktivieren und Deaktivieren",
            disableBody:
                "Beide Endpunkte sind standardmäßig aktiviert. Setzen Sie NGINX_IGNITION_HEALTH_CHECK_ENABLED auf false, um sie zu deaktivieren.",
            endpointsTitle: "Endpunkte",
            livenessTitle: "Liveness-Endpunkt",
            livenessBody:
                "Prüft, ob die Anwendung läuft und ob ihre internen Komponenten — wie die Datenbankverbindung — fehlerfrei sind.",
            livenessCode200: "200 OK: Die Anwendung läuft fehlerfrei",
            livenessCode503:
                "503 Service Unavailable: Eine oder mehrere kritische Komponenten sind fehlerhaft",
            livenessExampleLabel: "Beispielantwort",
            readinessTitle: "Readiness-Endpunkt",
            readinessBody:
                "Gibt an, ob die Anwendung bereit ist, Anfragen entgegenzunehmen — nützlich beim Start oder in Deployment-Szenarien.",
            readinessCode200: "200 OK: Bereit, Anfragen entgegenzunehmen",
            dockerTitle: "Docker Compose",
            dockerBody:
                "Verwenden Sie den Liveness-Endpunkt in einem Health-Check des Containers:",
            kubernetesTitle: "Kubernetes-Probes",
            kubernetesBody:
                "Konfigurieren Sie beide Probes in Ihrem Deployment:",
        },
        backupRestore: {
            lead: "Die Seite Export und Backup erzeugt ein herunterladbares Datenbank-Backup. Die Wiederherstellung unterscheidet sich je nach verwendeter Datenbank: Bei SQLite erhalten Sie eine einzelne .db-Datei (nginx-ignition.db), bei PostgreSQL eine reine SQL-Datei (nginx-ignition.sql).",
            safetyTitle: "Bevor Sie beginnen",
            safety1:
                "Stoppen Sie die Anwendung (oder ihren Container), damit während des Austauschs nichts in die Datenbank schreibt.",
            safety2:
                "Bewahren Sie immer eine zusätzliche Kopie des Backups auf, bevor Sie etwas überschreiben.",
            sqliteTitle: "Eine SQLite-Datenbank wiederherstellen",
            sqliteBody:
                "Gilt, wenn ignition mit der eingebetteten SQLite-Datenbank läuft, dem Standard bei Neuinstallationen. Das offizielle Docker-Image erwartet die Datei unter /opt/nginx-ignition/data/nginx-ignition.db; die Variable NGINX_IGNITION_DATABASE_DATA_PATH ändert diesen Ordner.",
            sqliteOptionATitle:
                "Datei in den laufenden Container kopieren",
            sqliteOptionAStep1:
                "Ermitteln Sie den Containernamen: docker ps",
            sqliteOptionAStep2: "Stoppen Sie die Anwendung: docker stop <container>",
            sqliteOptionAStep3:
                "Kopieren Sie die Datei: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "Starten Sie die Anwendung wieder: docker start <container>",
            sqliteOptionBTitle:
                "Oder ersetzen Sie die Datei dort, wo der Datenordner liegt",
            sqliteOptionBStep1: "Stoppen Sie den Container.",
            sqliteOptionBStep2:
                "Kopieren Sie das Backup über die Datei in Ihrem Bind Mount (oder Volume).",
            sqliteOptionBStep3: "Starten Sie den Container wieder.",
            postgresTitle: "Eine PostgreSQL-Datenbank wiederherstellen",
            postgresBody:
                "Stellen Sie das .sql-Dump mit dem offiziellen psql-Client wieder her. Dies setzt voraus, dass die Zieldatenbank existiert, leer ist und der Benutzer die Berechtigung hat, die Objekte aus dem Dump zu erstellen.",
            postgresStep1:
                "Stoppen Sie die Anwendung, um Schreibzugriffe während der Wiederherstellung zu vermeiden: docker stop <container>",
            postgresStep2:
                "Rufen Sie psql mit der Zieldatenbank auf.",
            postgresStep3:
                "Geben Sie das Datenbankpasswort ein, wenn Sie dazu aufgefordert werden.",
            postgresStep4: "Starten Sie die Anwendung wieder.",
        },
        troubleshooting: {
            lead: "nginx ignition wurde so entworfen, dass die Logs hilfreich und aussagekräftig sind. Wenn etwas nicht funktioniert und die Rückmeldungen in der Oberfläche nicht klar genug sind, beginnen Sie mit den Anwendungs-Logs — bei Docker mit der Standardausgabe des Containers.",
            logsLink: "Docker-Dokumentation zum Logging",
            passwordTitle: "Passwort zurücksetzen",
            passwordBody:
                "Passwort verloren? Legen Sie die folgende Umgebungsvariable am Container fest. Sie setzt beim Start das Passwort des Zielbenutzers zurück, gibt das neue Zufallspasswort in den Logs aus und fährt dann herunter, ohne die Anwendung zu starten:",
            passwordNote:
                "Das Passwort ändert sich bei jedem Lauf der Anwendung mit gesetzter Variable. Starten Sie sie also einmal, notieren Sie sich das neue Passwort und entfernen Sie die Variable.",
            helpTitle: "Kommen Sie immer noch nicht weiter?",
            helpBody:
                "Wenn die Logs und die Anleitungen hier das Problem nicht lösen, melden Sie sich:",
            helpIssues: "Ein Issue auf GitHub öffnen",
            helpDiscussions: "In den Diskussionen fragen",
        },
    },
    notFound: {
        title: "Seite nicht gefunden",
        body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
        home: "Zurück zur Startseite",
        features: "Funktionen entdecken",
        docs: "Dokumentation durchstöbern",
    },
    footer: {
        tagline:
            "Eine moderne, intuitive Weboberfläche für den nginx-Webserver. Gemacht für Entwickler und Enthusiasten.",
        product: "Produkt",
        releases: "Releases",
        community: "Community",
        issues: "Issues",
        discussions: "Diskussionen",
        linkedin: "LinkedIn",
        resources: "Ressourcen",
        configReference: "Konfigurationsreferenz",
        screenshots: "Screenshot-Galerie",
        changelog: "Changelog",
        security: "Sicherheitsrichtlinie",
        license: "MIT-Lizenz",
        madeWith: "Mit ❤️ aus Brasilien gebaut",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default de
