const en = {
    common: {
        getStarted: "Get started",
        download: "Download",
        viewOnGitHub: "View on GitHub",
        learnMore: "Learn more",
        readGuide: "Read the guide",
        copy: "Copy",
        copied: "Copied!",
        latestVersion: "Latest version",
        releasedOn: "released on {{date}}",
        releaseNotes: "Release notes",
        browseReleases: "Browse all releases",
        seeAllFeatures: "See all features",
        githubInEnglish: "Opens on GitHub, in English.",
        previous: "Previous",
        next: "Next",
        goToSlide: "Go to slide {{index}}",
        starOnGitHub: "Star on GitHub",
    },
    nav: {
        label: "Main navigation",
        features: "Features",
        docs: "Docs",
        gettingStarted: "Getting started",
        github: "GitHub",
        openMenu: "Open menu",
        closeMenu: "Close menu",
    },
    languageSwitcher: {
        label: "Change language",
    },
    seo: {
        home: {
            title: "nginx ignition — A modern UI for the nginx web server",
            description:
                "A modern, intuitive web interface for the nginx web server. Virtual hosts, streams, SSL certificates, integrations and more — installed with a single Docker command. Free and open source.",
        },
        gettingStarted: {
            title: "Getting started — nginx ignition",
            description:
                "Install nginx ignition with Docker, Docker Compose or a native package for Linux, Windows and macOS. Download the latest release.",
        },
        features: {
            title: "Features — nginx ignition",
            description:
                "Virtual hosts, streams, SSL certificates, security, integrations, logs, traffic statistics and caching — everything nginx ignition does, with screenshots.",
        },
        docs: {
            title: "Documentation — nginx ignition",
            description:
                "Guides on configuring and operating nginx ignition: environment variables, API tokens, health checks, backup and restore, troubleshooting.",
        },
        docsConfiguration: {
            title: "Configuration — nginx ignition docs",
            description:
                "Configure nginx ignition with environment variables or a properties file: database, nginx paths, JWT secret and more.",
        },
        docsApiTokens: {
            title: "API tokens — nginx ignition docs",
            description:
                "Create, use and revoke API tokens to authenticate scripts and tools against the nginx ignition API.",
        },
        docsHealthChecks: {
            title: "Health checks — nginx ignition docs",
            description:
                "Liveness and readiness endpoints for Docker, Kubernetes and monitoring systems.",
        },
        docsBackupRestore: {
            title: "Backup and restore — nginx ignition docs",
            description:
                "How to restore a nginx ignition database backup, for SQLite and PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Troubleshooting — nginx ignition docs",
            description:
                "Where to look first when something goes wrong, and how to reset a lost password.",
        },
        notFound: {
            title: "Page not found — nginx ignition",
            description: "The page you are looking for does not exist.",
        },
    },
    home: {
        eyebrow: "Open source · Self-hosted · Multi-language · Multi-platform",
        title: "nginx, without the config headache.",
        subtitle:
            "nginx ignition is a modern, intuitive web interface for the nginx web server — built for developers and homelabbers who want powerful control without editing config files by hand.",
        ctaPrimary: "Get started",
        ctaSecondary: "View on GitHub",
        ctaFeatures: "Explore the features",
        commandTitle: "Up and running in one command",
        commandNote:
            "Wait a few seconds, open http://localhost:8090 and let the setup wizard create your first user.",
        commandNoteDb:
            "The embedded SQLite database is enough to try it out; PostgreSQL is recommended for production.",
        commandMore: "See all installation options",
        highlightsTitle: "Everything nginx, in one place",
        highlightsSubtitle:
            "Batteries included for the most common use cases — without the manual config headache.",
        highlights: {
            hosts: {
                title: "Virtual hosts & routing",
                body: "Custom domains, routes, proxies (including gRPC), redirects, custom JS/Lua and static responses.",
            },
            streams: {
                title: "Streams",
                body: "Proxy TCP, UDP and Unix sockets with SNI routing, circuit breakers and load balancing.",
            },
            ssl: {
                title: "SSL certificates",
                body: "Automated Let's Encrypt (ACME), self-signed or bring your own certificates.",
            },
            integrations: {
                title: "Native integrations",
                body: "First-class support for Docker, Docker Swarm, Tailscale, NetBird and TrueNAS.",
            },
            security: {
                title: "Security",
                body: "Two-factor authentication, ABAC and per-host access lists. API tokens for your scripts and tools.",
            },
            observability: {
                title: "Logs, stats & caching",
                body: "Access and error logs with search, real-time traffic statistics and nginx caching.",
            },
        },
        showcaseTitle: "A quick look",
        showcaseSubtitle:
            "Every screen is designed to be simple, clear and useful.",
        showcase: {
            dashboard: "The dashboard: resources, nginx status and recent errors.",
        },
        goalsTitle: "Built for developers and homelabbers",
        goalsBody1:
            "nginx ignition is built for developers and enthusiasts who want a balance between ease of use and the power of nginx.",
        goalsBody2:
            "It is not aimed at being enterprise-ready or feature-complete for highly complex environments: if your use case is extremely advanced, you will likely prefer managing configuration files manually. The goal is a powerful, yet intuitive way to run nginx for the most common use cases.",
        goalsForTitle: "What it is for",
        goalsFor1: "Homelabs and self-hosted setups",
        goalsFor2: "Developers who want control without manual editing",
        goalsFor3: "Common use cases, done quickly",
        goalsNotTitle: "What it is not for",
        goalsNot1: "Highly complex, enterprise-grade environments",
        goalsNot2: "Replacing every nginx directive",
        goalsNot3: "Managing fleets of servers",
        languagesTitle: "Available in 11 languages",
        languagesBody:
            "The interface is translated into 11 languages and automatically follows your browser's language. You can switch at any time using the language selector in the header.",
        ctaTitle: "Ready to check it out?",
        ctaBody:
            "Try it with a single Docker command, or download the latest release for your platform.",
        ctaDiscussions: "Discussions",
        ctaIssues: "Report an issue",
    },
    gettingStarted: {
        heroTitle: "Get nginx ignition running",
        heroSubtitle:
            "Try it with Docker in seconds, download a native package for macOS, Windows or Linux, or use the production-ready Compose file.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Downloads",
        heroJumpNative: "Native installs",
        dockerTitle: "Quick test with Docker",
        dockerBody:
            "The fastest way to see nginx ignition in action is a single Docker command.",
        dockerStep1: "Run the command below.",
        dockerStep2: "Wait a few seconds for the app to initialize.",
        dockerStep3: "Open http://localhost:8090 in your browser.",
        dockerStep4:
            "The setup wizard will guide you through creating your first user.",
        dockerPersistenceTitle: "Keep your data",
        dockerPersistenceBody:
            "The embedded database lives inside the container. Add a volume to keep it between runs:",
        dockerSqliteTitle: "Using the embedded database",
        dockerSqliteBody:
            "By default the app uses an embedded SQLite database. It is fine to try things out, but PostgreSQL is recommended for long-term installations.",
        composeTitle: "Production with Docker Compose",
        composeBody:
            "The example Compose file runs nginx ignition alongside PostgreSQL, with health checks and persistent volumes. Review and update all values before deploying.",
        composeWarning:
            "Replace the placeholder database password with a strong value before deploying.",
        composeDownload: "View docker-compose.yml on GitHub",
        downloadsTitle: "Download the latest release",
        downloadsSubtitle:
            "Native packages for Linux, Windows and macOS. Every button always points to the assets of the latest release.",
        downloadsFallbackNote:
            "GitHub could not be reached right now, so the links point to the releases page.",
        downloadsHint:
            "Not sure which to pick? Docker is the simplest option on any platform.",
        macosTitle: "macOS",
        macosNote: "Requires macOS 12 or newer.",
        macosButton: "Download for macOS",
        macosArchNote: "Apple Silicon (arm64). Intel Macs: use Docker.",
        windowsTitle: "Windows",
        windowsNote:
            "ZIP archive with the application, the UI, migrations and a ready-to-use properties file.",
        windowsX64: "Download for Windows (x64)",
        windowsArm64: "Download for Windows (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Native packages and generic archives, for amd64 and arm64.",
        linuxArchLabel: "Architecture",
        linuxFormatLabel: "Package",
        linuxDownload: "Download for Linux",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — generic archive",
        },
        nativeTitle: "Native installs",
        nativeSubtitle:
            "For a permanent installation, download the package for your platform and follow the steps below.",
        nativeRequirements:
            "Requirements: nginx installed and accessible (with the mod-http-js, mod-http-lua and mod-stream modules), port 8090 available, and administrator rights for the service installation.",
        nativeFullInstructions: "Full instructions on GitHub",
        nativeUpgradeNote:
            "Upgrading: stop the service, replace the binary and any updated assets, then start it again. The full steps are in the instructions.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Unzip the archive and copy its contents to /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Fix the permissions and install the provided systemd unit.",
        nativeLinuxStep3:
            "Edit nginx-ignition.properties if needed (for example, the nginx binary path).",
        nativeLinuxStep4:
            "Enable and start the service, then open the firewall (and SELinux, if enforcing).",
        nativeLinuxStep5:
            "Open http://your-host:8090 and finish the setup in the browser.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Unzip the archive and copy its contents to /opt/nginx-ignition.",
        nativeMacosStep2:
            "Fix the permissions and install the provided launchd plist.",
        nativeMacosStep3:
            "Edit nginx-ignition.properties, pointing nginx.binary-path at your nginx (for Homebrew: /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Load and start the service, and allow incoming connections in the firewall.",
        nativeMacosStep5:
            "Open http://your-host:8090 and finish the setup in the browser.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Extract the ZIP archive to a directory of your choice, such as C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Edit nginx-ignition.properties and set nginx.binary-path to the location of your nginx.exe.",
        nativeWindowsStep3:
            "Run nginx-ignition.exe from an Administrator prompt.",
        nativeWindowsStep4:
            "Allow port 8090 in Windows Firewall. To run as a service, use NSSM or WinSW.",
        nativeWindowsStep5:
            "Open http://localhost:8090 and finish the setup in the browser.",
        firstStepsTitle: "After installing",
        firstStepsSubtitle: "A short checklist to get the most out of it:",
        firstSteps1: "Finish the setup wizard and sign in.",
        firstSteps2: "Create your first virtual host and add its domain names.",
        firstSteps3:
            "Issue an SSL certificate for the host, or upload your own.",
        firstSteps4:
            "Explore integrations (Docker, Swarm, TrueNAS) and VPN connections (Tailscale, NetBird).",
        firstStepsDocs: "Browse the guides",
        firstStepsFeatures: "See everything it can do",
        helpTitle: "Something not working?",
        helpBody:
            "nginx ignition has helpful logs: the first step is always to check the application logs (the container's stdout when running with Docker).",
        helpTroubleshooting: "Read the troubleshooting guide",
        helpIssues: "Open an issue",
        helpDiscussions: "Ask in the discussions",
    },
    features: {
        heroTitle: "Everything nginx, without the terminal",
        heroSubtitle:
            "From virtual hosts and SSL certificates to streams, logs and caching — the most common nginx tasks, managed from a clean, modern interface.",
        tours: {
            hosts: {
                title: "Hosts",
                bodies: [
                    "A virtual host, host in short, is a website that the nginx server will make available to be opened in a browser. You can find all hosts managed at the left, on the main menu.",
                    "nginx ignition provides an intuitive way to configure such websites. For example, if you have a NAS and have some services running on it (like Jellyfin, Vaultwarden and more), ignition enables an easy way to access it from a domain like jellyfin.myhome.com, way easier to remember and use than an IP and port.",
                    "Each host will have a set of routes, which are rules that define which requests patterns should be forwarded and to where, and bindings, which are the definitions at what ports the nginx should listen for such requests.",
                ],
            },
            streams: {
                title: "Streams",
                bodies: [
                    "While hosts are the main way to expose your HTTP and HTTPS-based services, streams enable you to expose other services that rely on TCP, UDP and unix sockets.",
                    "If you need to expose a game server, a database, a DNS server and anything else that don't use the HTTP protocol, streams are the way to go.",
                ],
            },
            ssl: {
                title: "SSL certificates",
                bodies: [
                    "If you want to or need to protect your domains with HTTPS encryption, the app comes with an easy way to manage such SSL certificates too.",
                    "Either if you need a valid certificate backed by Let's Encrypt, a self-signed, or bring your custom one for a third-party provider, ignition will allow it with ease. Even when the certificate is about to expire, the app will automatically renew it for you.",
                    "Once an SSL certificate is created or imported, you can use it on the hosts by simply selecting an option in the form.",
                ],
            },
            logs: {
                title: "Logs",
                bodies: [
                    "Need to know what has been requested or why something isn't working the way it was expected? nginx ignition provides a simple way for you to check the nginx logs too. Just select the host (or the nginx server itself) that you want to check what's going on, and we will get the logs for you.",
                    "And you don't need to worry about your disk getting full of logs, ignition will rotate them automatically for you (and you can control how much to keep, or even disable the rotation if it suits you best).",
                ],
            },
            integrations: {
                title: "Integrations",
                bodies: [
                    "Is your app running in a Docker container or in a TrueNAS? You can enable the native integration nginx ignition offers and easily pick a container or app as the destination app that the host should forward the requests to.",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "Easily expose your hosts in your VPNs. If you're using Tailscale, nginx ignition can automatically create a virtual machine in your network and forward the requests to the host whenever the machine IP or hostname is accessed.",
                ],
            },
            accessLists: {
                title: "Access lists",
                bodies: [
                    "Access lists provide a simple way to protect either a route or the entire host by checking if the user is from a range of authorized IPs or is identified by a valid username and password (or even both, IP and credentials)",
                ],
            },
            caches: {
                title: "Cache configuration",
                bodies: [
                    "Speed up your websites and reduce load on your upstream servers by enabling nginx's content caching capabilities. Ignition makes it easy to configure cache rules that determine which requests should be cached and for how long.",
                    "You can customize cache behavior by HTTP status codes, file extensions, request methods, and more. Advanced features like stale content handling, background updates, and concurrency locks give you fine-grained control over how your content is cached and served.",
                ],
            },
            settings: {
                title: "Settings",
                bodies: [
                    "Ignition abstracts away the complexity of the nginx's configuration files, but that doesn't mean that you lose the ability to apply some fine adjustments.",
                    "With the settings page, you can define some important definitions such as the timeout values, the maximum upload/body size of the requests, the default ports that the nginx will listen for requests and more.",
                    "Beyond that, you can also configure some of the nginx ignition's features there, like the automatic renewal of SSL certificates and log rotation.",
                ],
            },
        },
        checklistTitle: "…and more",
        checklistSubtitle:
            "Everything below ships with nginx ignition, out of the box.",
        checklist: {
            virtualHosts: {
                title: "Virtual hosts",
                body: "Multiple hosts with custom domains, routes and port bindings.",
            },
            streams: {
                title: "Streams",
                body: "Proxy TCP, UDP and Unix sockets with SNI-based routing, circuit breakers and load balancing.",
            },
            routing: {
                title: "Versatile routing",
                body: "Proxies (including gRPC/gRPCS upstreams), redirections, custom JS/Lua code, static responses and file serving.",
            },
            serverConfiguration: {
                title: "Server configuration",
                body: "Maximum body/upload size, server tokens, timeouts, log level and more.",
            },
            sslCertificates: {
                title: "SSL certificates",
                body: "Automated Let's Encrypt (ACME), self-signed or bring your own certificates.",
            },
            integrations: {
                title: "Native integrations",
                body: "First-class support for Docker, Docker Swarm, Tailscale and NetBird VPNs, and TrueNAS.",
            },
            security: {
                title: "Security",
                body: "Two-factor authentication, attribute-based access control and per-host access lists.",
            },
            apiTokens: {
                title: "API tokens",
                body: "Generate and revoke tokens to authenticate scripts and external tools.",
            },
            logging: {
                title: "Logging",
                body: "Detailed access and error logs for the server and each host, with automatic rotation.",
            },
            stats: {
                title: "Traffic statistics",
                body: "Real-time request rates, response times and traffic breakdowns by host and upstream.",
            },
            caching: {
                title: "Caching",
                body: "Built-in nginx caching configuration to speed up content delivery.",
            },
            execution: {
                title: "Flexible execution",
                body: "Let ignition run nginx for you, or just generate the configuration files.",
            },
        },
    },
    docs: {
        sidebarTitle: "Guides",
        overview: "Overview",
        fullReference: "Full reference on GitHub",
        fullDoc: "View the full doc on GitHub",
        previous: "Previous",
        next: "Next",
        heroTitle: "Documentation",
        heroSubtitle:
            "The essentials on installing, configuring and operating nginx ignition. Each guide links to the complete document in the project repository.",
        guides: {
            configuration: {
                title: "Configuration",
                summary:
                    "Environment variables, the properties file, PostgreSQL and the JWT secret.",
            },
            "api-tokens": {
                title: "API tokens",
                summary:
                    "Authenticate scripts and CI jobs against the API without sharing a password.",
            },
            "health-checks": {
                title: "Health checks",
                summary:
                    "Liveness and readiness endpoints for Docker, Kubernetes and monitoring.",
            },
            "backup-restore": {
                title: "Backup & restore",
                summary:
                    "How to restore a database backup, for SQLite and PostgreSQL.",
            },
            troubleshooting: {
                title: "Troubleshooting",
                summary:
                    "Where to look first, and how to reset a lost password.",
            },
        },
        referenceTitle: "Full reference on GitHub",
        referenceBody:
            "The guides here cover the essentials. The exhaustive references are maintained in the project repository, in English:",
        reference: {
            config: {
                title: "Configuration properties",
                body: "Every environment variable and property, with defaults.",
            },
            migration: {
                title: "Migration guide",
                body: "Upgrading from nginx ignition 1.x to 2.x.",
            },
            apiTokens: {
                title: "API tokens",
                body: "The complete API tokens documentation.",
            },
            healthChecks: {
                title: "Health checks",
                body: "Endpoints and usage scenarios.",
            },
            restore: {
                title: "Database restore",
                body: "The complete restore guide.",
            },
            troubleshooting: {
                title: "Troubleshooting",
                body: "Common issues and recovery steps.",
            },
            screenshots: {
                title: "Screenshots gallery",
                body: "Every screen of the application, described.",
            },
            changelog: {
                title: "Changelog",
                body: "What changed in every release.",
            },
            security: {
                title: "Security policy",
                body: "How to report vulnerabilities.",
            },
        },
        helpTitle: "Get help",
        helpBody:
            "Found a problem or have a question? The GitHub issues and discussions are the place to go — and where features are requested.",
        helpIssues: "Open an issue",
        helpDiscussions: "Start a discussion",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition is configured through environment variables or a properties file. Every setting has a single key: as an environment variable it is uppercase with underscores (NGINX_IGNITION_SERVER_PORT), and in the properties file it is lowercase with dots (nginx-ignition.server.port).",
            envTitle: "Key environment variables",
            envBody:
                "The essentials for most installations. Every property has a default value, so you usually only set what you need to change.",
            envVarCol: "Variable",
            envDescriptionCol: "Description",
            envExampleCol: "Example",
            envMore:
                "The complete reference lists every property, with defaults and examples.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Port where nginx ignition listens for requests",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Address where nginx ignition listens for requests",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Path to the nginx binary to use",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Where the generated nginx configuration files are stored",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Database type: sqlite or postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Database hostname or IP",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Port where the database listens",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Name of the database to use",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Encrypt the database connection: require or disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Database username",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Database password",
                    example: "your-password",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Folder where the SQLite database file is stored",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Custom secret (exactly 64 characters) for signing authentication tokens; only read on the first boot",
                    example: "(random)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "How long a session token stays valid before logout by inactivity",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "Enable or disable the health check endpoints",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Resets this user's password on boot and exits; used for recovery",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (recommended for production)",
            postgresBody:
                "The embedded SQLite database is great for quick tests, but long-term installations should use PostgreSQL. Point ignition to your database with the database variables:",
            postgresNote:
                "All required tables and indexes are created automatically on the first boot, and updated automatically on upgrades.",
            configFileTitle: "Configuration file",
            configFileBody:
                "Settings can also come from a properties file, with the same keys in lowercase and dots. ignition reads, in order: the file at NGINX_IGNITION_CONFIG_FILE_PATH, the path given with --config, or nginx-ignition.properties in the working directory.",
            jwtTitle: "Custom JWT secret",
            jwtBody:
                "By default, a secure random secret is generated and stored in the database. To provide your own, set NGINX_IGNITION_SECURITY_JWT_SECRET with exactly 64 characters before the first boot. Upgrading from a version that used this variable? Keep it in place: its value is stored in the database on the first boot after the upgrade.",
        },
        apiTokens: {
            lead: "API tokens let scripts, CI jobs and other tools authenticate against the nginx ignition API without sharing your username and password. Each token belongs to the user who created it and carries that user's permissions.",
            createTitle: "Creating a token",
            createStep1:
                "Open the user menu in the top-right corner of the interface.",
            createStep2: "Switch to the API Tokens tab.",
            createStep3: "Click New token.",
            createStep4: "Give it a name and, optionally, an expiration date.",
            createStep5:
                "Click Create token and copy the generated value — it is shown only once.",
            createNote1:
                "The name must be unique among your own tokens and can have up to 256 characters. Use something descriptive, like ci-deploy or home-assistant.",
            createNote2:
                "The expiration date is optional. Without it, the token never expires; when set, it must be in the future and the token stops working as soon as that moment passes.",
            createNote3:
                "The token value is displayed only once, right after creation, and cannot be recovered later. If you lose it, revoke the token and create a new one.",
            useTitle: "Using a token",
            useBody:
                "Send the token in the Authorization header using the Bearer scheme, exactly like a session token:",
            useError:
                "An invalid, revoked or expired token is answered with 401 Unauthorized; reserved operations are answered with 403 Forbidden.",
            useNote:
                "API tokens authenticate API calls only: logging into the web interface still requires a username and a password.",
            permissionsTitle: "Permissions",
            permissionsBody1:
                "A token inherits the permissions of the user that owns it, and there is no way to narrow them down independently of the owner.",
            permissionsBody2:
                "If a token needs a different set of permissions, create a dedicated service user with the desired access levels and generate the token from that account.",
            reservedTitle: "Reserved operations",
            reservedBody:
                "Some operations are reserved for interactive sessions and cannot be performed with a token:",
            reservedItem1: "Changing the profile or the password.",
            reservedItem2:
                "Reading, activating or disabling two-factor authentication.",
            reservedItem3: "Listing, creating or revoking API tokens.",
            reservedItem4:
                "Logging out (which only invalidates interactive sessions).",
            reservedException:
                "Reading your own profile with GET /api/users/current is the one exception: tokens are allowed to do it.",
            lifecycleTitle: "Token lifecycle",
            lifecycle1Title: "Not auto-renewed",
            lifecycle1Body:
                "Unlike web sessions, API tokens are never automatically extended; only the per-token expiration date matters.",
            lifecycle2Title: "Immediate revocation",
            lifecycle2Body:
                "Every request checks the token against the database, so revoking a token stops it on the very next call.",
            lifecycle3Title: "Disabled users",
            lifecycle3Body:
                "Disabling a user makes that user's tokens stop working, but nothing is deleted; re-enabling the user makes them work again.",
            upgradeNote:
                "Upgrading from a version older than 2.47.0 signs out all users once, as the token format changed. Just sign in again afterwards.",
        },
        healthChecks: {
            lead: "The health check endpoints can be used by container orchestration platforms (like Docker) and monitoring systems to verify the application's status and availability.",
            disableTitle: "Enabling and disabling",
            disableBody:
                "Both endpoints are enabled by default. Set NGINX_IGNITION_HEALTH_CHECK_ENABLED to false to disable them.",
            endpointsTitle: "Endpoints",
            livenessTitle: "Liveness endpoint",
            livenessBody:
                "Checks that the application is running and that its internal components — like the database connection — are healthy.",
            livenessCode200: "200 OK: the application is healthy",
            livenessCode503:
                "503 Service Unavailable: one or more critical components are unhealthy",
            livenessExampleLabel: "Example response",
            readinessTitle: "Readiness endpoint",
            readinessBody:
                "Indicates whether the application is ready to accept traffic — useful during startup or deployment scenarios.",
            readinessCode200: "200 OK: ready to accept requests",
            dockerTitle: "Docker Compose",
            dockerBody: "Use the liveness endpoint in a container health check:",
            kubernetesTitle: "Kubernetes probes",
            kubernetesBody: "Configure both probes in your deployment:",
        },
        backupRestore: {
            lead: "The Export and backup page generates a downloadable database backup. Restoring it differs depending on the database in use: for SQLite you get a single .db file (nginx-ignition.db), and for PostgreSQL a plain SQL file (nginx-ignition.sql).",
            safetyTitle: "Before you start",
            safety1:
                "Stop the application (or its container) so nothing writes to the database while you replace it.",
            safety2:
                "Always keep an extra copy of the backup before overwriting anything.",
            sqliteTitle: "Restoring a SQLite database",
            sqliteBody:
                "This applies when ignition runs with the embedded SQLite database, the default for fresh installs. The official Docker image expects the file at /opt/nginx-ignition/data/nginx-ignition.db; the NGINX_IGNITION_DATABASE_DATA_PATH variable changes that folder.",
            sqliteOptionATitle: "Copy the file into the running container",
            sqliteOptionAStep1: "Find the container name: docker ps",
            sqliteOptionAStep2: "Stop the app: docker stop <container>",
            sqliteOptionAStep3:
                "Copy the file: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "Start the app again: docker start <container>",
            sqliteOptionBTitle:
                "Or replace the file where the data folder lives",
            sqliteOptionBStep1: "Stop the container.",
            sqliteOptionBStep2:
                "Copy the backup over the file in your bind mount (or volume).",
            sqliteOptionBStep3: "Start the container again.",
            postgresTitle: "Restoring a PostgreSQL database",
            postgresBody:
                "Restore the .sql dump with the official psql client. This assumes that the target database exists, is empty, and that the user has privileges to create the objects in the dump.",
            postgresStep1:
                "Stop the app to avoid writes during the restore: docker stop <container>",
            postgresStep2: "Run psql pointing at the target database.",
            postgresStep3: "Enter the database password when prompted.",
            postgresStep4: "Start the app again.",
        },
        troubleshooting: {
            lead: "nginx ignition was designed to have helpful and useful logs. If something is not working and the feedback in the interface is not clear enough, start with the application logs — with Docker, the container's stdout.",
            logsLink: "How to view Docker container logs",
            passwordTitle: "Password reset",
            passwordBody:
                "Lost your password? Set the environment variable below on the container. It resets the target user's password on boot, prints the new random password in the logs, and then shuts down without starting the app:",
            passwordNote:
                "The password changes every time the app runs with the variable set, so run it once, note the new password, and remove the variable.",
            helpTitle: "Still stuck?",
            helpBody:
                "If the logs and the guides here do not solve it, reach out:",
            helpIssues: "Open an issue on GitHub",
            helpDiscussions: "Ask in the discussions",
        },
    },
    notFound: {
        title: "Page not found",
        body: "The page you are looking for does not exist, or has moved.",
        home: "Back to the home page",
        features: "Explore the features",
        docs: "Browse the documentation",
    },
    footer: {
        tagline:
            "A modern, intuitive web interface for the nginx web server. Made for developers and enthusiasts.",
        product: "Product",
        releases: "Releases",
        community: "Community",
        issues: "Issues",
        discussions: "Discussions",
        linkedin: "LinkedIn",
        resources: "Resources",
        configReference: "Configuration reference",
        screenshots: "Screenshots gallery",
        changelog: "Changelog",
        security: "Security policy",
        license: "MIT License",
        madeWith: "Made with ❤️ from Brazil",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default en

export type Messages = typeof en
