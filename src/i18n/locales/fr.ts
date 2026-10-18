import type { Messages } from "./en"

const fr: Messages = {
    common: {
        getStarted: "Commencer",
        download: "Télécharger",
        viewOnGitHub: "Voir sur GitHub",
        learnMore: "En savoir plus",
        readGuide: "Lire le guide",
        copy: "Copier",
        copied: "Copié !",
        latestVersion: "Dernière version",
        releasedOn: "publiée le {{date}}",
        releaseNotes: "Notes de version",
        browseReleases: "Voir toutes les versions",
        seeAllFeatures: "Voir toutes les fonctionnalités",
        githubInEnglish: "S'ouvre sur GitHub, en anglais.",
        previous: "Précédent",
        next: "Suivant",
        goToSlide: "Aller à la diapositive {{index}}",
        starOnGitHub: "Mettre une étoile sur GitHub",
    },
    nav: {
        label: "Navigation principale",
        features: "Fonctionnalités",
        docs: "Documentation",
        gettingStarted: "Premiers pas",
        github: "GitHub",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
    },
    languageSwitcher: {
        label: "Changer de langue",
    },
    seo: {
        home: {
            title: "nginx ignition — Une interface moderne pour le serveur web nginx",
            description:
                "Une interface web moderne et intuitive pour le serveur web nginx. Hôtes virtuels, flux, certificats SSL, intégrations et plus — le tout s'installe avec une simple commande Docker. Gratuit et open source.",
        },
        gettingStarted: {
            title: "Premiers pas — nginx ignition",
            description:
                "Installez nginx ignition avec Docker, Docker Compose ou un paquet natif pour Linux, Windows et macOS. Téléchargez la dernière version.",
        },
        features: {
            title: "Fonctionnalités — nginx ignition",
            description:
                "Hôtes virtuels, flux, certificats SSL, sécurité, intégrations, logs, statistiques de trafic et cache — tout ce que fait nginx ignition, avec captures d'écran.",
        },
        docs: {
            title: "Documentation — nginx ignition",
            description:
                "Guides pour configurer et exploiter nginx ignition : variables d'environnement, jetons d'API, contrôles d'état, sauvegarde et restauration, dépannage.",
        },
        docsConfiguration: {
            title: "Configuration — documentation nginx ignition",
            description:
                "Configurez nginx ignition avec des variables d'environnement ou un fichier de propriétés : base de données, chemins de nginx, secret JWT et plus.",
        },
        docsApiTokens: {
            title: "Jetons d'API — documentation nginx ignition",
            description:
                "Créez, utilisez et révoquez des jetons d'API pour authentifier vos scripts et vos outils auprès de l'API de nginx ignition.",
        },
        docsHealthChecks: {
            title: "Contrôles d'état — documentation nginx ignition",
            description:
                "Points de terminaison liveness et readiness pour Docker, Kubernetes et les systèmes de supervision.",
        },
        docsBackupRestore: {
            title: "Sauvegarde et restauration — documentation nginx ignition",
            description:
                "Comment restaurer une sauvegarde de la base de données nginx ignition, pour SQLite et PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Dépannage — documentation nginx ignition",
            description:
                "Où regarder en premier quand quelque chose ne fonctionne pas, et comment réinitialiser un mot de passe perdu.",
        },
        notFound: {
            title: "Page introuvable — nginx ignition",
            description: "La page que vous recherchez n'existe pas.",
        },
    },
    home: {
        eyebrow: "Open source · Auto-hébergé · Multilingue · Multiplateforme",
        title: "nginx, sans le casse-tête de la configuration.",
        subtitle:
            "nginx ignition est une interface web moderne et intuitive pour le serveur web nginx — conçue pour les développeurs et les passionnés de homelab qui veulent un contrôle puissant sans éditer les fichiers de configuration à la main.",
        ctaPrimary: "Commencer",
        ctaSecondary: "Voir sur GitHub",
        ctaFeatures: "Explorer les fonctionnalités",
        commandTitle: "Opérationnel en une seule commande",
        commandNote:
            "Patientez quelques secondes, ouvrez http://localhost:8090 et laissez l'assistant de configuration créer votre premier utilisateur.",
        commandNoteDb:
            "La base de données SQLite intégrée suffit pour essayer ; PostgreSQL est recommandé en production.",
        commandMore: "Voir toutes les options d'installation",
        highlightsTitle: "Tout nginx, au même endroit",
        highlightsSubtitle:
            "Tout est inclus pour les cas d'usage les plus courants — sans le casse-tête de la configuration manuelle.",
        highlights: {
            hosts: {
                title: "Hôtes virtuels et routage",
                body: "Domaines personnalisés, routes, proxys (y compris gRPC), redirections, code JS/Lua personnalisé et réponses statiques.",
            },
            streams: {
                title: "Flux",
                body: "Proxy TCP, UDP et sockets Unix avec routage SNI, coupe-circuits et répartition de charge.",
            },
            ssl: {
                title: "Certificats SSL",
                body: "Let's Encrypt (ACME) automatisé, auto-signés ou vos propres certificats.",
            },
            integrations: {
                title: "Intégrations natives",
                body: "Prise en charge de premier ordre pour Docker, Docker Swarm, Tailscale, NetBird et TrueNAS.",
            },
            security: {
                title: "Sécurité",
                body: "Authentification à deux facteurs, ABAC et listes d'accès par hôte. Des jetons d'API pour vos scripts et vos outils.",
            },
            observability: {
                title: "Logs, statistiques et cache",
                body: "Logs d'accès et d'erreurs avec recherche, statistiques de trafic en temps réel et cache nginx.",
            },
        },
        showcaseTitle: "Un rapide coup d'œil",
        showcaseSubtitle:
            "Chaque écran est pensé pour être simple, clair et utile.",
        showcase: {
            dashboard: "Le tableau de bord : ressources, état de nginx et erreurs récentes.",
        },
        goalsTitle: "Conçu pour les développeurs et les passionnés de homelab",
        goalsBody1:
            "nginx ignition est conçu pour les développeurs et les passionnés qui veulent un équilibre entre simplicité d'utilisation et puissance de nginx.",
        goalsBody2:
            "Il ne vise pas à être prêt pour le monde de l'entreprise ni exhaustif pour des environnements très complexes : si votre cas d'usage est extrêmement avancé, vous préférerez probablement gérer les fichiers de configuration à la main. L'objectif est une façon puissante, mais intuitive, de faire tourner nginx pour les cas d'usage les plus courants.",
        goalsForTitle: "Ce pour quoi il est fait",
        goalsFor1: "Homelabs et installations auto-hébergées",
        goalsFor2: "Développeurs qui veulent garder le contrôle sans édition manuelle",
        goalsFor3: "Cas d'usage courants, réglés rapidement",
        goalsNotTitle: "Ce pour quoi il n'est pas fait",
        goalsNot1: "Environnements très complexes, de niveau entreprise",
        goalsNot2: "Remplacer chaque directive nginx",
        goalsNot3: "Gérer des parcs de serveurs",
        languagesTitle: "Disponible en 11 langues",
        languagesBody:
            "L'interface est traduite en 11 langues et suit automatiquement la langue de votre navigateur. Vous pouvez en changer à tout moment grâce au sélecteur de langue dans l'en-tête.",
        ctaTitle: "Prêt à l'essayer ?",
        ctaBody:
            "Essayez avec une seule commande Docker, ou téléchargez la dernière version pour votre plateforme.",
        ctaDiscussions: "Discussions",
        ctaIssues: "Signaler un problème",
    },
    gettingStarted: {
        heroTitle: "Lancez nginx ignition",
        heroSubtitle:
            "Essayez en quelques secondes avec Docker, téléchargez un paquet natif pour macOS, Windows ou Linux, ou utilisez le fichier Compose prêt pour la production.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Téléchargements",
        heroJumpNative: "Installations natives",
        dockerTitle: "Test rapide avec Docker",
        dockerBody:
            "Le moyen le plus rapide de voir nginx ignition à l'œuvre est une seule commande Docker.",
        dockerStep1: "Exécutez la commande ci-dessous.",
        dockerStep2:
            "Patientez quelques secondes pendant l'initialisation de l'application.",
        dockerStep3: "Ouvrez http://localhost:8090 dans votre navigateur.",
        dockerStep4:
            "L'assistant de configuration vous guidera pour créer votre premier utilisateur.",
        dockerPersistenceTitle: "Conservez vos données",
        dockerPersistenceBody:
            "La base de données intégrée vit à l'intérieur du conteneur. Ajoutez un volume pour la conserver entre les exécutions :",
        dockerSqliteTitle: "Utiliser la base de données intégrée",
        dockerSqliteBody:
            "Par défaut, l'application utilise une base de données SQLite intégrée. C'est parfait pour essayer, mais PostgreSQL est recommandé pour les installations à long terme.",
        composeTitle: "Production avec Docker Compose",
        composeBody:
            "Le fichier Compose d'exemple fait tourner nginx ignition aux côtés de PostgreSQL, avec contrôles d'état et volumes persistants. Relisez et mettez à jour toutes les valeurs avant de déployer.",
        composeWarning:
            "Remplacez le mot de passe de base de données d'exemple par une valeur robuste avant de déployer.",
        composeDownload: "Voir docker-compose.yml sur GitHub",
        downloadsTitle: "Téléchargez la dernière version",
        downloadsSubtitle:
            "Paquets natifs pour Linux, Windows et macOS. Chaque bouton pointe toujours vers les fichiers de la dernière version.",
        downloadsFallbackNote:
            "GitHub est actuellement injoignable, les liens pointent donc vers la page des versions.",
        downloadsHint:
            "Vous hésitez ? Docker est l'option la plus simple sur toutes les plateformes.",
        macosTitle: "macOS",
        macosNote: "Nécessite macOS 12 ou une version ultérieure.",
        macosButton: "Télécharger pour macOS",
        macosArchNote: "Apple Silicon (arm64). Mac Intel : utilisez Docker.",
        windowsTitle: "Windows",
        windowsNote:
            "Archive ZIP avec l'application, l'interface, les migrations et un fichier de propriétés prêt à l'emploi.",
        windowsX64: "Télécharger pour Windows (x64)",
        windowsArm64: "Télécharger pour Windows (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Paquets natifs et archives génériques, pour amd64 et arm64.",
        linuxArchLabel: "Architecture",
        linuxFormatLabel: "Paquet",
        linuxDownload: "Télécharger pour Linux",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — archive générique",
        },
        nativeTitle: "Installations natives",
        nativeSubtitle:
            "Pour une installation permanente, téléchargez le paquet de votre plateforme et suivez les étapes ci-dessous.",
        nativeRequirements:
            "Prérequis : nginx installé et accessible (avec les modules mod-http-js, mod-http-lua et mod-stream), le port 8090 disponible, et les droits d'administrateur pour l'installation du service.",
        nativeFullInstructions: "Instructions complètes sur GitHub",
        nativeUpgradeNote:
            "Mise à niveau : arrêtez le service, remplacez le binaire et les fichiers mis à jour, puis redémarrez-le. Les étapes complètes figurent dans les instructions.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Décompressez l'archive et copiez son contenu dans /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Corrigez les permissions et installez l'unité systemd fournie.",
        nativeLinuxStep3:
            "Modifiez nginx-ignition.properties si nécessaire (par exemple, le chemin du binaire nginx).",
        nativeLinuxStep4:
            "Activez et démarrez le service, puis ouvrez le pare-feu (et SELinux, s'il est en mode enforcing).",
        nativeLinuxStep5:
            "Ouvrez http://your-host:8090 et terminez la configuration dans le navigateur.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Décompressez l'archive et copiez son contenu dans /opt/nginx-ignition.",
        nativeMacosStep2:
            "Corrigez les permissions et installez le plist launchd fourni.",
        nativeMacosStep3:
            "Modifiez nginx-ignition.properties en pointant nginx.binary-path vers votre nginx (pour Homebrew : /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Chargez et démarrez le service, et autorisez les connexions entrantes dans le pare-feu.",
        nativeMacosStep5:
            "Ouvrez http://your-host:8090 et terminez la configuration dans le navigateur.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Extrayez l'archive ZIP dans un dossier de votre choix, par exemple C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Modifiez nginx-ignition.properties et définissez nginx.binary-path à l'emplacement de votre nginx.exe.",
        nativeWindowsStep3:
            "Exécutez nginx-ignition.exe depuis une invite de commandes en tant qu'administrateur.",
        nativeWindowsStep4:
            "Autorisez le port 8090 dans le pare-feu Windows. Pour l'exécuter comme service, utilisez NSSM ou WinSW.",
        nativeWindowsStep5:
            "Ouvrez http://localhost:8090 et terminez la configuration dans le navigateur.",
        firstStepsTitle: "Après l'installation",
        firstStepsSubtitle:
            "Une petite liste de vérifications pour en tirer le meilleur parti :",
        firstSteps1: "Terminez l'assistant de configuration et connectez-vous.",
        firstSteps2: "Créez votre premier hôte virtuel et ajoutez ses noms de domaine.",
        firstSteps3:
            "Émettez un certificat SSL pour l'hôte, ou importez le vôtre.",
        firstSteps4:
            "Explorez les intégrations (Docker, Swarm, TrueNAS) et les connexions VPN (Tailscale, NetBird).",
        firstStepsDocs: "Parcourir les guides",
        firstStepsFeatures: "Voir tout ce qu'il peut faire",
        helpTitle: "Quelque chose ne fonctionne pas ?",
        helpBody:
            "nginx ignition dispose de logs utiles : la première étape est toujours de consulter les logs de l'application (la sortie standard du conteneur avec Docker).",
        helpTroubleshooting: "Lire le guide de dépannage",
        helpIssues: "Ouvrir un ticket",
        helpDiscussions: "Poser une question dans les discussions",
    },
    features: {
        heroTitle: "Tout nginx, sans le terminal",
        heroSubtitle:
            "Des hôtes virtuels et certificats SSL aux flux, logs et cache — les tâches nginx les plus courantes, gérées depuis une interface propre et moderne.",
        tours: {
            hosts: {
                title: "Hôtes",
                bodies: [
                    "Un hôte virtuel, hôte en bref, est un site web que le serveur nginx rendra disponible pour être ouvert dans un navigateur. Vous pouvez trouver tous les hôtes gérés à gauche, dans le menu principal.",
                    "nginx ignition fournit un moyen intuitif de configurer de tels sites web. Par exemple, si vous avez un NAS et avez des services qui tournent dessus (comme Jellyfin, Vaultwarden et plus), ignition permet un moyen facile d'y accéder depuis un domaine comme jellyfin.amaison.com, bien plus facile à retenir et utiliser qu'une IP et un port.",
                    "Chaque hôte aura un ensemble de routes, qui sont des règles définissant quels modèles de requêtes doivent être transférés et vers où, et des liaisons, qui sont les définitions des ports sur lesquels nginx doit écouter pour de telles requêtes.",
                ],
            },
            streams: {
                title: "Flux",
                bodies: [
                    "Tandis que les hôtes sont le moyen principal d'exposer vos services basés sur HTTP et HTTPS, les flux vous permettent d'exposer d'autres services qui reposent sur TCP, UDP et les sockets unix.",
                    "Si vous devez exposer un serveur de jeu, une base de données, un serveur DNS et tout autre chose n'utilisant pas le protocole HTTP, les flux sont la voie à suivre.",
                ],
            },
            ssl: {
                title: "Certificats SSL",
                bodies: [
                    "Si vous voulez ou devez protéger vos domaines avec le chiffrement HTTPS, l'application vient avec un moyen facile de gérer de tels certificats SSL aussi.",
                    "Que vous ayez besoin d'un certificat valide soutenu par Let's Encrypt, d'un auto-signé, ou d'apporter le vôtre personnalisé d'un fournisseur tiers, ignition le permettra avec facilité. Même lorsque le certificat est sur le point d'expirer, l'application le renouvellera automatiquement pour vous.",
                    "Une fois qu'un certificat SSL est créé ou importé, vous pouvez l'utiliser sur les hôtes en sélectionnant simplement une option dans le formulaire.",
                ],
            },
            logs: {
                title: "Logs",
                bodies: [
                    "Besoin de savoir ce qui a été demandé ou pourquoi quelque chose ne fonctionne pas comme prévu ? nginx ignition fournit un moyen simple pour vous de vérifier les logs nginx aussi. Sélectionnez simplement l'hôte (ou le serveur nginx lui-même) dont vous voulez vérifier ce qui se passe, et nous récupérerons les logs pour vous.",
                    "Et vous n'avez pas à vous soucier que votre disque se remplisse de logs, ignition les fera tourner automatiquement pour vous (et vous pouvez contrôler combien en garder, ou même désactiver la rotation si cela vous convient mieux).",
                ],
            },
            integrations: {
                title: "Intégrations",
                bodies: [
                    "Votre application tourne-t-elle dans un conteneur Docker ou dans un TrueNAS ? Vous pouvez activer l'intégration native offerte par nginx ignition et choisir facilement un conteneur ou une application comme application de destination vers laquelle l'hôte doit transférer les requêtes.",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "Exposez facilement vos hôtes dans vos VPNs. Si vous utilisez Tailscale, nginx ignition peut créer automatiquement une machine virtuelle dans votre réseau et transférer les requêtes vers l'hôte chaque fois que l'IP de la machine ou le nom d'hôte est accédé.",
                ],
            },
            accessLists: {
                title: "Listes d'accès",
                bodies: [
                    "Les listes d'accès offrent un moyen simple de protéger soit une route soit l'hôte entier en vérifiant si l'utilisateur provient d'une plage d'IP autorisées ou est identifié par un nom d'utilisateur et un mot de passe valides (ou même les deux, IP et identifiants)",
                ],
            },
            caches: {
                title: "Configuration du cache",
                bodies: [
                    "Accélérez vos sites web et réduisez la charge sur vos serveurs amont en activant les capacités de mise en cache de contenu de nginx. Ignition facilite la configuration des règles de cache qui déterminent quelles requêtes doivent être mises en cache et pour combien de temps.",
                    "Vous pouvez personnaliser le comportement du cache par codes d'état HTTP, extensions de fichier, méthodes de requête, et plus. Des fonctionnalités avancées comme la gestion du contenu périmé, les mises à jour en arrière-plan et les verrous de concurrence vous donnent un contrôle précis sur la façon dont votre contenu est mis en cache et servi.",
                ],
            },
            settings: {
                title: "Paramètres",
                bodies: [
                    "Ignition abstrait la complexité des fichiers de configuration nginx, mais cela ne signifie pas que vous perdez la capacité d'appliquer certains ajustements fins.",
                    "Avec la page des paramètres, vous pouvez définir certaines définitions importantes telles que les valeurs de délai d'attente, la taille maximale d'upload/corps des requêtes, les ports par défaut sur lesquels nginx écoutera les requêtes et plus.",
                    "Au-delà de cela, vous pouvez également configurer certaines des fonctionnalités de nginx ignition là-bas, comme le renouvellement automatique des certificats SSL et la rotation des logs.",
                ],
            },
        },
        checklistTitle: "…et bien plus encore",
        checklistSubtitle:
            "Tout ce qui suit est livré avec nginx ignition, prêt à l'emploi.",
        checklist: {
            virtualHosts: {
                title: "Hôtes virtuels",
                body: "Plusieurs hôtes avec domaines personnalisés, routes et liaisons de ports.",
            },
            streams: {
                title: "Flux",
                body: "Proxy TCP, UDP et sockets Unix avec routage SNI, coupe-circuits et répartition de charge.",
            },
            routing: {
                title: "Routage polyvalent",
                body: "Proxys (y compris les upstreams gRPC/gRPCS), redirections, code JS/Lua personnalisé, réponses statiques et service de fichiers.",
            },
            serverConfiguration: {
                title: "Configuration du serveur",
                body: "Taille maximale du corps/upload, jetons serveur, délais d'attente, niveau de log et plus.",
            },
            sslCertificates: {
                title: "Certificats SSL",
                body: "Let's Encrypt (ACME) automatisé, auto-signés ou vos propres certificats.",
            },
            integrations: {
                title: "Intégrations natives",
                body: "Prise en charge de premier ordre de Docker, Docker Swarm, des VPN Tailscale et NetBird, et de TrueNAS.",
            },
            security: {
                title: "Sécurité",
                body: "Authentification à deux facteurs, contrôle d'accès basé sur les attributs et listes d'accès par hôte.",
            },
            apiTokens: {
                title: "Jetons d'API",
                body: "Générez et révoquez des jetons pour authentifier vos scripts et vos outils externes.",
            },
            logging: {
                title: "Logs",
                body: "Logs d'accès et d'erreurs détaillés pour le serveur et chaque hôte, avec rotation automatique.",
            },
            stats: {
                title: "Statistiques de trafic",
                body: "Taux de requêtes en temps réel, temps de réponse et répartitions du trafic par hôte et par upstream.",
            },
            caching: {
                title: "Cache",
                body: "Configuration de cache nginx intégrée pour accélérer la diffusion du contenu.",
            },
            execution: {
                title: "Exécution flexible",
                body: "Laissez ignition exécuter nginx pour vous, ou générez simplement les fichiers de configuration.",
            },
        },
    },
    docs: {
        sidebarTitle: "Guides",
        overview: "Aperçu",
        fullReference: "Référence complète sur GitHub",
        fullDoc: "Voir la documentation complète sur GitHub",
        previous: "Précédent",
        next: "Suivant",
        heroTitle: "Documentation",
        heroSubtitle:
            "L'essentiel pour installer, configurer et exploiter nginx ignition. Chaque guide renvoie au document complet dans le dépôt du projet.",
        guides: {
            configuration: {
                title: "Configuration",
                summary:
                    "Variables d'environnement, fichier de propriétés, PostgreSQL et secret JWT.",
            },
            "api-tokens": {
                title: "Jetons d'API",
                summary:
                    "Authentifiez vos scripts et vos jobs CI auprès de l'API sans partager de mot de passe.",
            },
            "health-checks": {
                title: "Contrôles d'état",
                summary:
                    "Points de terminaison liveness et readiness pour Docker, Kubernetes et la supervision.",
            },
            "backup-restore": {
                title: "Sauvegarde et restauration",
                summary:
                    "Comment restaurer une sauvegarde de base de données, pour SQLite et PostgreSQL.",
            },
            troubleshooting: {
                title: "Dépannage",
                summary:
                    "Où regarder en premier, et comment réinitialiser un mot de passe perdu.",
            },
        },
        referenceTitle: "Référence complète sur GitHub",
        referenceBody:
            "Les guides ici couvrent l'essentiel. Les références exhaustives sont maintenues dans le dépôt du projet, en anglais :",
        reference: {
            config: {
                title: "Propriétés de configuration",
                body: "Chaque variable d'environnement et propriété, avec les valeurs par défaut.",
            },
            migration: {
                title: "Guide de migration",
                body: "Mise à niveau de nginx ignition 1.x vers 2.x.",
            },
            apiTokens: {
                title: "Jetons d'API",
                body: "La documentation complète des jetons d'API.",
            },
            healthChecks: {
                title: "Contrôles d'état",
                body: "Points de terminaison et scénarios d'utilisation.",
            },
            restore: {
                title: "Restauration de base de données",
                body: "Le guide complet de restauration.",
            },
            troubleshooting: {
                title: "Dépannage",
                body: "Problèmes courants et étapes de récupération.",
            },
            screenshots: {
                title: "Galerie de captures d'écran",
                body: "Chaque écran de l'application, décrit.",
            },
            changelog: {
                title: "Journal des modifications",
                body: "Ce qui a changé dans chaque version.",
            },
            security: {
                title: "Politique de sécurité",
                body: "Comment signaler des vulnérabilités.",
            },
        },
        helpTitle: "Obtenir de l'aide",
        helpBody:
            "Un problème ou une question ? Rendez-vous sur les tickets et les discussions GitHub — c'est aussi là que l'on propose de nouvelles fonctionnalités.",
        helpIssues: "Ouvrir un ticket",
        helpDiscussions: "Lancer une discussion",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition se configure via des variables d'environnement ou un fichier de propriétés. Chaque paramètre a une seule clé : en variable d'environnement, elle est en majuscules avec des underscores (NGINX_IGNITION_SERVER_PORT), et dans le fichier de propriétés, en minuscules avec des points (nginx-ignition.server.port).",
            envTitle: "Principales variables d'environnement",
            envBody:
                "L'essentiel pour la plupart des installations. Chaque propriété a une valeur par défaut, vous ne définissez donc en général que ce que vous voulez modifier.",
            envVarCol: "Variable",
            envDescriptionCol: "Description",
            envExampleCol: "Exemple",
            envMore:
                "La référence complète liste chaque propriété, avec les valeurs par défaut et des exemples.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Port sur lequel nginx ignition écoute les requêtes",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Adresse sur laquelle nginx ignition écoute les requêtes",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Chemin vers le binaire nginx à utiliser",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Emplacement où sont stockés les fichiers de configuration nginx générés",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Type de base de données : sqlite ou postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Nom d'hôte ou IP de la base de données",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Port sur lequel la base de données écoute",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Nom de la base de données à utiliser",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Chiffrer la connexion à la base de données : require ou disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Nom d'utilisateur de la base de données",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Mot de passe de la base de données",
                    example: "votre-mot-de-passe",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Dossier où est stocké le fichier de base de données SQLite",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Secret personnalisé (exactement 64 caractères) pour signer les jetons d'authentification ; lu uniquement au premier démarrage",
                    example: "(aléatoire)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "Durée de validité d'un jeton de session avant déconnexion par inactivité",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "Activer ou désactiver les points de terminaison de contrôle d'état",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Réinitialise le mot de passe de cet utilisateur au démarrage puis quitte ; utilisé pour la récupération",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (recommandé en production)",
            postgresBody:
                "La base de données SQLite intégrée est parfaite pour des tests rapides, mais les installations à long terme devraient utiliser PostgreSQL. Pointez ignition vers votre base de données avec les variables de base de données :",
            postgresNote:
                "Toutes les tables et index nécessaires sont créés automatiquement au premier démarrage, et mis à jour automatiquement lors des mises à niveau.",
            configFileTitle: "Fichier de configuration",
            configFileBody:
                "Les paramètres peuvent aussi provenir d'un fichier de propriétés, avec les mêmes clés en minuscules et avec des points. ignition lit, dans l'ordre : le fichier indiqué par NGINX_IGNITION_CONFIG_FILE_PATH, le chemin passé avec --config, ou nginx-ignition.properties dans le dossier de travail.",
            jwtTitle: "Secret JWT personnalisé",
            jwtBody:
                "Par défaut, un secret aléatoire sécurisé est généré et stocké dans la base de données. Pour fournir le vôtre, définissez NGINX_IGNITION_SECURITY_JWT_SECRET avec exactement 64 caractères avant le premier démarrage. Vous mettez à niveau depuis une version qui utilisait cette variable ? Laissez-la en place : sa valeur est enregistrée dans la base de données au premier démarrage après la mise à niveau.",
        },
        apiTokens: {
            lead: "Les jetons d'API permettent à des scripts, des jobs CI et d'autres outils de s'authentifier auprès de l'API de nginx ignition sans partager votre nom d'utilisateur et votre mot de passe. Chaque jeton appartient à l'utilisateur qui l'a créé et porte ses permissions.",
            createTitle: "Créer un jeton",
            createStep1:
                "Ouvrez le menu utilisateur dans le coin supérieur droit de l'interface.",
            createStep2: "Basculez sur l'onglet Jetons d'API.",
            createStep3: "Cliquez sur Nouveau jeton.",
            createStep4:
                "Donnez-lui un nom et, éventuellement, une date d'expiration.",
            createStep5:
                "Cliquez sur Créer le jeton et copiez la valeur générée — elle ne s'affiche qu'une seule fois.",
            createNote1:
                "Le nom doit être unique parmi vos propres jetons et peut contenir jusqu'à 256 caractères. Utilisez quelque chose de descriptif, comme ci-deploy ou home-assistant.",
            createNote2:
                "La date d'expiration est facultative. Sans elle, le jeton n'expire jamais ; si elle est définie, elle doit être dans le futur et le jeton cesse de fonctionner dès que ce moment est passé.",
            createNote3:
                "La valeur du jeton n'est affichée qu'une seule fois, juste après la création, et ne peut pas être récupérée ensuite. Si vous la perdez, révoquez le jeton et créez-en un nouveau.",
            useTitle: "Utiliser un jeton",
            useBody:
                "Envoyez le jeton dans l'en-tête Authorization avec le schéma Bearer, exactement comme un jeton de session :",
            useError:
                "Un jeton invalide, révoqué ou expiré reçoit une réponse 401 Unauthorized ; les opérations réservées reçoivent une réponse 403 Forbidden.",
            useNote:
                "Les jetons d'API authentifient uniquement les appels à l'API : se connecter à l'interface web nécessite toujours un nom d'utilisateur et un mot de passe.",
            permissionsTitle: "Permissions",
            permissionsBody1:
                "Un jeton hérite des permissions de l'utilisateur qui le possède, et il n'existe aucun moyen de les restreindre indépendamment du propriétaire.",
            permissionsBody2:
                "Si un jeton a besoin d'un ensemble de permissions différent, créez un utilisateur de service dédié avec les niveaux d'accès souhaités et générez le jeton depuis ce compte.",
            reservedTitle: "Opérations réservées",
            reservedBody:
                "Certaines opérations sont réservées aux sessions interactives et ne peuvent pas être effectuées avec un jeton :",
            reservedItem1: "Modifier le profil ou le mot de passe.",
            reservedItem2:
                "Consulter, activer ou désactiver l'authentification à deux facteurs.",
            reservedItem3: "Lister, créer ou révoquer des jetons d'API.",
            reservedItem4:
                "Se déconnecter (ce qui n'invalide que les sessions interactives).",
            reservedException:
                "Consulter votre propre profil avec GET /api/users/current est la seule exception : les jetons y sont autorisés.",
            lifecycleTitle: "Cycle de vie des jetons",
            lifecycle1Title: "Pas de renouvellement automatique",
            lifecycle1Body:
                "Contrairement aux sessions web, les jetons d'API ne sont jamais prolongés automatiquement ; seule compte la date d'expiration de chaque jeton.",
            lifecycle2Title: "Révocation immédiate",
            lifecycle2Body:
                "Chaque requête vérifie le jeton dans la base de données, donc révoquer un jeton l'arrête dès l'appel suivant.",
            lifecycle3Title: "Utilisateurs désactivés",
            lifecycle3Body:
                "Désactiver un utilisateur fait cesser de fonctionner ses jetons, mais rien n'est supprimé ; réactiver l'utilisateur les fait fonctionner à nouveau.",
            upgradeNote:
                "Depuis une version antérieure à la 2.47.0, la mise à niveau déconnecte tous les utilisateurs une fois, car le format des jetons a changé. Reconnectez-vous simplement ensuite.",
        },
        healthChecks: {
            lead: "Les points de terminaison de contrôle d'état peuvent être utilisés par les plateformes d'orchestration de conteneurs (comme Docker) et les systèmes de supervision pour vérifier l'état et la disponibilité de l'application.",
            disableTitle: "Activer et désactiver",
            disableBody:
                "Les deux points de terminaison sont activés par défaut. Définissez NGINX_IGNITION_HEALTH_CHECK_ENABLED à false pour les désactiver.",
            endpointsTitle: "Points de terminaison",
            livenessTitle: "Point de terminaison liveness",
            livenessBody:
                "Vérifie que l'application est en cours d'exécution et que ses composants internes — comme la connexion à la base de données — fonctionnent correctement.",
            livenessCode200: "200 OK : l'application fonctionne correctement",
            livenessCode503:
                "503 Service Unavailable : un ou plusieurs composants critiques sont en panne",
            livenessExampleLabel: "Exemple de réponse",
            readinessTitle: "Point de terminaison readiness",
            readinessBody:
                "Indique si l'application est prête à accepter du trafic — utile au démarrage ou lors de scénarios de déploiement.",
            readinessCode200: "200 OK : prêt à accepter des requêtes",
            dockerTitle: "Docker Compose",
            dockerBody: "Utilisez le point de terminaison liveness dans un contrôle d'état de conteneur :",
            kubernetesTitle: "Sondes Kubernetes",
            kubernetesBody: "Configurez les deux sondes dans votre déploiement :",
        },
        backupRestore: {
            lead: "La page Export et sauvegarde génère une sauvegarde téléchargeable de la base de données. Sa restauration diffère selon la base de données utilisée : pour SQLite, vous obtenez un seul fichier .db (nginx-ignition.db), et pour PostgreSQL, un fichier SQL simple (nginx-ignition.sql).",
            safetyTitle: "Avant de commencer",
            safety1:
                "Arrêtez l'application (ou son conteneur) pour que rien n'écrive dans la base de données pendant que vous la remplacez.",
            safety2:
                "Conservez toujours une copie supplémentaire de la sauvegarde avant d'écraser quoi que ce soit.",
            sqliteTitle: "Restaurer une base de données SQLite",
            sqliteBody:
                "Cela s'applique lorsque ignition tourne avec la base de données SQLite intégrée, la valeur par défaut des nouvelles installations. L'image Docker officielle attend le fichier à /opt/nginx-ignition/data/nginx-ignition.db ; la variable NGINX_IGNITION_DATABASE_DATA_PATH permet de changer ce dossier.",
            sqliteOptionATitle: "Copier le fichier dans le conteneur en cours d'exécution",
            sqliteOptionAStep1: "Trouvez le nom du conteneur : docker ps",
            sqliteOptionAStep2: "Arrêtez l'application : docker stop <container>",
            sqliteOptionAStep3:
                "Copiez le fichier : docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "Redémarrez l'application : docker start <container>",
            sqliteOptionBTitle:
                "Ou remplacez le fichier là où se trouve le dossier de données",
            sqliteOptionBStep1: "Arrêtez le conteneur.",
            sqliteOptionBStep2:
                "Copiez la sauvegarde par-dessus le fichier dans votre bind mount (ou volume).",
            sqliteOptionBStep3: "Redémarrez le conteneur.",
            postgresTitle: "Restaurer une base de données PostgreSQL",
            postgresBody:
                "Restaurez le dump .sql avec le client psql officiel. Cela suppose que la base de données cible existe, est vide, et que l'utilisateur a les privilèges nécessaires pour créer les objets du dump.",
            postgresStep1:
                "Arrêtez l'application pour éviter toute écriture pendant la restauration : docker stop <container>",
            postgresStep2: "Exécutez psql en pointant vers la base de données cible.",
            postgresStep3: "Saisissez le mot de passe de la base de données lorsqu'il vous est demandé.",
            postgresStep4: "Redémarrez l'application.",
        },
        troubleshooting: {
            lead: "nginx ignition a été conçu pour produire des logs utiles et pertinents. Si quelque chose ne fonctionne pas et que les retours dans l'interface ne sont pas assez clairs, commencez par les logs de l'application — avec Docker, la sortie standard du conteneur.",
            logsLink: "Documentation Docker sur les logs",
            passwordTitle: "Réinitialisation du mot de passe",
            passwordBody:
                "Mot de passe perdu ? Définissez la variable d'environnement ci-dessous sur le conteneur. Elle réinitialise le mot de passe de l'utilisateur cible au démarrage, affiche le nouveau mot de passe aléatoire dans les logs, puis s'arrête sans démarrer l'application :",
            passwordNote:
                "Le mot de passe change à chaque exécution de l'application avec la variable définie : exécutez-la une fois, notez le nouveau mot de passe, puis supprimez la variable.",
            helpTitle: "Toujours bloqué ?",
            helpBody:
                "Si les logs et les guides ici ne résolvent pas le problème, n'hésitez pas à demander de l'aide :",
            helpIssues: "Ouvrir un ticket sur GitHub",
            helpDiscussions: "Poser une question dans les discussions",
        },
    },
    notFound: {
        title: "Page introuvable",
        body: "La page que vous recherchez n'existe pas ou a été déplacée.",
        home: "Retour à la page d'accueil",
        features: "Explorer les fonctionnalités",
        docs: "Parcourir la documentation",
    },
    footer: {
        tagline:
            "Une interface web moderne et intuitive pour le serveur web nginx. Conçue pour les développeurs et les passionnés.",
        product: "Produit",
        releases: "Versions",
        community: "Communauté",
        issues: "Tickets",
        discussions: "Discussions",
        linkedin: "LinkedIn",
        resources: "Ressources",
        configReference: "Référence de configuration",
        screenshots: "Galerie de captures d'écran",
        changelog: "Journal des modifications",
        security: "Politique de sécurité",
        license: "Licence MIT",
        madeWith: "Fait avec ❤️ depuis le Brésil",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default fr
