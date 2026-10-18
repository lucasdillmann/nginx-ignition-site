import type { Messages } from "./en"

const es: Messages = {
    common: {
        getStarted: "Comenzar",
        download: "Descargar",
        viewOnGitHub: "Ver en GitHub",
        learnMore: "Más información",
        readGuide: "Leer la guía",
        copy: "Copiar",
        copied: "¡Copiado!",
        latestVersion: "Última versión",
        releasedOn: "publicada el {{date}}",
        releaseNotes: "Notas de la versión",
        browseReleases: "Ver todas las versiones",
        seeAllFeatures: "Ver todas las funciones",
        githubInEnglish: "Se abre en GitHub, en inglés.",
        previous: "Anterior",
        next: "Siguiente",
        goToSlide: "Ir a la diapositiva {{index}}",
        starOnGitHub: "Dar una estrella en GitHub",
    },
    nav: {
        label: "Navegación principal",
        features: "Funciones",
        docs: "Documentación",
        gettingStarted: "Primeros pasos",
        github: "GitHub",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
    },
    languageSwitcher: {
        label: "Cambiar idioma",
    },
    seo: {
        home: {
            title: "nginx ignition — Una interfaz moderna para el servidor web nginx",
            description:
                "Una interfaz web moderna e intuitiva para el servidor web nginx. Hosts virtuales, streams, certificados SSL, integraciones y más — se instala con un solo comando de Docker. Gratis y de código abierto.",
        },
        gettingStarted: {
            title: "Primeros pasos — nginx ignition",
            description:
                "Instala nginx ignition con Docker, Docker Compose o un paquete nativo para Linux, Windows y macOS. Descarga la última versión.",
        },
        features: {
            title: "Funciones — nginx ignition",
            description:
                "Hosts virtuales, streams, certificados SSL, seguridad, integraciones, logs, estadísticas de tráfico y caché — todo lo que hace nginx ignition, con capturas de pantalla.",
        },
        docs: {
            title: "Documentación — nginx ignition",
            description:
                "Guías para configurar y operar nginx ignition: variables de entorno, tokens de API, verificaciones de estado, copia de seguridad y restauración, solución de problemas.",
        },
        docsConfiguration: {
            title: "Configuración — Documentación de nginx ignition",
            description:
                "Configura nginx ignition con variables de entorno o un archivo de propiedades: base de datos, rutas de nginx, secreto JWT y más.",
        },
        docsApiTokens: {
            title: "Tokens de API — Documentación de nginx ignition",
            description:
                "Crea, usa y revoca tokens de API para autenticar scripts y herramientas contra la API de nginx ignition.",
        },
        docsHealthChecks: {
            title: "Verificaciones de estado — Documentación de nginx ignition",
            description:
                "Endpoints de actividad y preparación para Docker, Kubernetes y sistemas de monitoreo.",
        },
        docsBackupRestore: {
            title: "Copia de seguridad y restauración — Documentación de nginx ignition",
            description:
                "Cómo restaurar una copia de seguridad de la base de datos de nginx ignition, para SQLite y PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Solución de problemas — Documentación de nginx ignition",
            description:
                "Dónde buscar primero cuando algo falla y cómo restablecer una contraseña perdida.",
        },
        notFound: {
            title: "Página no encontrada — nginx ignition",
            description: "La página que buscas no existe.",
        },
    },
    home: {
        eyebrow: "Código abierto · Autoalojado · Multiidioma · Multiplataforma",
        title: "nginx, sin el dolor de cabeza de la configuración.",
        subtitle:
            "nginx ignition es una interfaz web moderna e intuitiva para el servidor web nginx — pensada para desarrolladores y entusiastas del homelab que quieren un control potente sin editar archivos de configuración a mano.",
        ctaPrimary: "Comenzar",
        ctaSecondary: "Ver en GitHub",
        ctaFeatures: "Explorar las funciones",
        commandTitle: "Funcionando con un solo comando",
        commandNote:
            "Espera unos segundos, abre http://localhost:8090 y deja que el asistente de configuración cree tu primer usuario.",
        commandNoteDb:
            "La base de datos SQLite integrada es suficiente para probarlo; PostgreSQL es lo recomendado para producción.",
        commandMore: "Ver todas las opciones de instalación",
        highlightsTitle: "Todo nginx, en un solo lugar",
        highlightsSubtitle:
            "Todo lo necesario para los casos de uso más comunes — sin el dolor de cabeza de la configuración manual.",
        highlights: {
            hosts: {
                title: "Hosts virtuales y enrutamiento",
                body: "Dominios personalizados, rutas, proxies (incluido gRPC), redirecciones, JS/Lua personalizado y respuestas estáticas.",
            },
            streams: {
                title: "Streams",
                body: "Proxies de sockets TCP, UDP y Unix con enrutamiento por SNI, disyuntores y balanceo de carga.",
            },
            ssl: {
                title: "Certificados SSL",
                body: "Let's Encrypt (ACME) automatizado, autofirmados o usa tus propios certificados.",
            },
            integrations: {
                title: "Integraciones nativas",
                body: "Soporte de primera clase para Docker, Docker Swarm, Tailscale, NetBird y TrueNAS.",
            },
            security: {
                title: "Seguridad",
                body: "Autenticación de dos factores, ABAC y listas de acceso por host. Tokens de API para tus scripts y herramientas.",
            },
            observability: {
                title: "Logs, estadísticas y caché",
                body: "Logs de acceso y de error con búsqueda, estadísticas de tráfico en tiempo real y caché de nginx.",
            },
        },
        showcaseTitle: "Un vistazo rápido",
        showcaseSubtitle:
            "Cada pantalla está diseñada para ser simple, clara y útil.",
        showcase: {
            dashboard: "El dashboard: recursos, estado de nginx y errores recientes.",
        },
        goalsTitle: "Pensado para desarrolladores y entusiastas del homelab",
        goalsBody1:
            "nginx ignition está pensado para desarrolladores y entusiastas que buscan un equilibrio entre la facilidad de uso y la potencia de nginx.",
        goalsBody2:
            "No pretende ser una solución empresarial ni cubrirlo todo para entornos muy complejos: si tu caso de uso es extremadamente avanzado, probablemente prefieras gestionar los archivos de configuración a mano. El objetivo es una forma potente pero intuitiva de ejecutar nginx para los casos de uso más comunes.",
        goalsForTitle: "Para qué sirve",
        goalsFor1: "Homelabs y configuraciones autoalojadas",
        goalsFor2: "Desarrolladores que quieren control sin editar a mano",
        goalsFor3: "Casos de uso comunes, resueltos rápido",
        goalsNotTitle: "Para qué no sirve",
        goalsNot1: "Entornos muy complejos, de nivel empresarial",
        goalsNot2: "Reemplazar cada directiva de nginx",
        goalsNot3: "Gestionar flotas de servidores",
        languagesTitle: "Disponible en 11 idiomas",
        languagesBody:
            "La interfaz está traducida a 11 idiomas y sigue automáticamente el idioma de tu navegador. Puedes cambiarlo en cualquier momento con el selector de idioma del encabezado.",
        ctaTitle: "¿Listo para probarlo?",
        ctaBody:
            "Pruébalo con un solo comando de Docker o descarga la última versión para tu plataforma.",
        ctaDiscussions: "Discusiones",
        ctaIssues: "Reportar un problema",
    },
    gettingStarted: {
        heroTitle: "Pon nginx ignition en marcha",
        heroSubtitle:
            "Pruébalo con Docker en segundos, descarga un paquete nativo para macOS, Windows o Linux, o usa el archivo Compose listo para producción.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Descargas",
        heroJumpNative: "Instalación nativa",
        dockerTitle: "Prueba rápida con Docker",
        dockerBody:
            "La forma más rápida de ver nginx ignition en acción es un solo comando de Docker.",
        dockerStep1: "Ejecuta el comando de abajo.",
        dockerStep2: "Espera unos segundos a que la aplicación se inicialice.",
        dockerStep3: "Abre http://localhost:8090 en tu navegador.",
        dockerStep4:
            "El asistente de configuración te guiará para crear tu primer usuario.",
        dockerPersistenceTitle: "Conserva tus datos",
        dockerPersistenceBody:
            "La base de datos integrada vive dentro del contenedor. Añade un volumen para conservarla entre ejecuciones:",
        dockerSqliteTitle: "Cómo usar la base de datos integrada",
        dockerSqliteBody:
            "Por defecto, la aplicación usa una base de datos SQLite integrada. Es suficiente para hacer pruebas, pero para instalaciones a largo plazo se recomienda PostgreSQL.",
        composeTitle: "Producción con Docker Compose",
        composeBody:
            "El archivo Compose de ejemplo ejecuta nginx ignition junto a PostgreSQL, con verificaciones de estado y volúmenes persistentes. Revisa y actualiza todos los valores antes de desplegar.",
        composeWarning:
            "Reemplaza la contraseña de base de datos de ejemplo por un valor seguro antes de desplegar.",
        composeDownload: "Ver docker-compose.yml en GitHub",
        downloadsTitle: "Descarga la última versión",
        downloadsSubtitle:
            "Paquetes nativos para Linux, Windows y macOS. Cada botón apunta siempre a los archivos de la última versión.",
        downloadsFallbackNote:
            "No se pudo contactar a GitHub en este momento, así que los enlaces apuntan a la página de versiones.",
        downloadsHint:
            "¿No sabes cuál elegir? Docker es la opción más simple en cualquier plataforma.",
        macosTitle: "macOS",
        macosNote: "Requiere macOS 12 o posterior.",
        macosButton: "Descargar para macOS",
        macosArchNote: "Apple Silicon (arm64). Macs con Intel: usa Docker.",
        windowsTitle: "Windows",
        windowsNote:
            "Archivo ZIP con la aplicación, la interfaz, las migraciones y un archivo de propiedades listo para usar.",
        windowsX64: "Descargar para Windows (x64)",
        windowsArm64: "Descargar para Windows (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Paquetes nativos y archivos genéricos, para amd64 y arm64.",
        linuxArchLabel: "Arquitectura",
        linuxFormatLabel: "Paquete",
        linuxDownload: "Descargar para Linux",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — archivo genérico",
        },
        nativeTitle: "Instalación nativa",
        nativeSubtitle:
            "Para una instalación permanente, descarga el paquete para tu plataforma y sigue los pasos de abajo.",
        nativeRequirements:
            "Requisitos: nginx instalado y accesible (con los módulos mod-http-js, mod-http-lua y mod-stream), el puerto 8090 disponible y permisos de administrador para instalar el servicio.",
        nativeFullInstructions: "Instrucciones completas en GitHub",
        nativeUpgradeNote:
            "Actualizar: detén el servicio, reemplaza el binario y los archivos actualizados, y vuelve a iniciarlo. Los pasos completos están en las instrucciones.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Descomprime el archivo y copia su contenido en /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Corrige los permisos e instala la unidad de systemd incluida.",
        nativeLinuxStep3:
            "Edita nginx-ignition.properties si es necesario (por ejemplo, la ruta del binario de nginx).",
        nativeLinuxStep4:
            "Habilita e inicia el servicio y abre el firewall (y SELinux, si está en modo enforcing).",
        nativeLinuxStep5:
            "Abre http://your-host:8090 y completa la configuración en el navegador.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Descomprime el archivo y copia su contenido en /opt/nginx-ignition.",
        nativeMacosStep2:
            "Corrige los permisos e instala el plist de launchd incluido.",
        nativeMacosStep3:
            "Edita nginx-ignition.properties y apunta nginx.binary-path a tu nginx (con Homebrew: /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Carga e inicia el servicio y permite las conexiones entrantes en el firewall.",
        nativeMacosStep5:
            "Abre http://your-host:8090 y completa la configuración en el navegador.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Extrae el archivo ZIP en el directorio que prefieras, por ejemplo C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Edita nginx-ignition.properties y define nginx.binary-path en la ubicación de tu nginx.exe.",
        nativeWindowsStep3:
            "Ejecuta nginx-ignition.exe desde una consola de Administrador.",
        nativeWindowsStep4:
            "Permite el puerto 8090 en el firewall de Windows. Para ejecutarlo como servicio, usa NSSM o WinSW.",
        nativeWindowsStep5:
            "Abre http://localhost:8090 y completa la configuración en el navegador.",
        firstStepsTitle: "Después de instalar",
        firstStepsSubtitle: "Una lista corta para sacarle el máximo provecho:",
        firstSteps1: "Completa el asistente de configuración e inicia sesión.",
        firstSteps2: "Crea tu primer host virtual y añade sus nombres de dominio.",
        firstSteps3:
            "Emite un certificado SSL para el host o sube el tuyo.",
        firstSteps4:
            "Explora las integraciones (Docker, Swarm, TrueNAS) y las conexiones VPN (Tailscale, NetBird).",
        firstStepsDocs: "Explorar las guías",
        firstStepsFeatures: "Ver todo lo que puede hacer",
        helpTitle: "¿Algo no funciona?",
        helpBody:
            "nginx ignition tiene logs muy útiles: el primer paso siempre es revisar los logs de la aplicación (la salida estándar del contenedor cuando se ejecuta con Docker).",
        helpTroubleshooting: "Leer la guía de solución de problemas",
        helpIssues: "Abrir un reporte",
        helpDiscussions: "Preguntar en las discusiones",
    },
    features: {
        heroTitle: "Todo nginx, sin la terminal",
        heroSubtitle:
            "Desde hosts virtuales y certificados SSL hasta streams, logs y caché — las tareas más comunes de nginx, gestionadas desde una interfaz limpia y moderna.",
        tours: {
            hosts: {
                title: "Hosts",
                bodies: [
                    "Un host virtual, o host para abreviar, es un sitio web que el servidor nginx pondrá a disposición para abrirse en un navegador. Puede encontrar todos los hosts gestionados a la izquierda, en el menú principal.",
                    "nginx ignition proporciona una forma intuitiva de configurar dichos sitios web. Por ejemplo, si tiene un NAS y tiene algunos servicios ejecutándose en él (como Jellyfin, Vaultwarden y más), ignition permite una forma fácil de acceder a él desde un dominio como jellyfin.micasa.com, mucho más fácil de recordar y usar que una IP y un puerto.",
                    "Cada host tendrá un conjunto de rutas, que son reglas que definen qué patrones de solicitudes deben reenviarse y a dónde, y enlaces (bindings), que son las definiciones en qué puertos el nginx debe escuchar dichas solicitudes.",
                ],
            },
            streams: {
                title: "Streams",
                bodies: [
                    "Mientras que los hosts son la forma principal de exponer sus servicios basados en HTTP y HTTPS, los streams le permiten exponer otros servicios que dependen de TCP, UDP y sockets unix.",
                    "Si necesita exponer un servidor de juegos, una base de datos, un servidor DNS y cualquier otra cosa que no use el protocolo HTTP, los streams son el camino a seguir.",
                ],
            },
            ssl: {
                title: "Certificados SSL",
                bodies: [
                    "Si desea o necesita proteger sus dominios con cifrado HTTPS, la aplicación también viene con una forma fácil de gestionar dichos certificados SSL.",
                    "Ya sea si necesita un certificado válido respaldado por Let's Encrypt, uno autofirmado, o traer el suyo personalizado de un proveedor externo, ignition lo permitirá con facilidad. Incluso cuando el certificado esté a punto de caducar, la aplicación lo renovará automáticamente por usted.",
                    "Una vez que se crea o importa un certificado SSL, puede usarlo en los hosts simplemente seleccionando una opción en el formulario.",
                ],
            },
            logs: {
                title: "Registros (Logs)",
                bodies: [
                    "¿Necesita saber qué se ha solicitado o por qué algo no funciona como se esperaba? nginx ignition proporciona una forma sencilla para que revise los registros de nginx también. Simplemente seleccione el host (o el servidor nginx en sí) del que desea verificar qué está sucediendo, y obtendremos los registros por usted.",
                    "Y no necesita preocuparse de que su disco se llene de registros, ignition los rotará automáticamente por usted (y puede controlar cuánto mantener, o incluso deshabilitar la rotación si le conviene más).",
                ],
            },
            integrations: {
                title: "Integraciones",
                bodies: [
                    "¿Su aplicación se está ejecutando en un contenedor Docker o en un TrueNAS? Puede habilitar la integración nativa que ofrece nginx ignition y elegir fácilmente un contenedor o aplicación como la aplicación de destino a la que el host debe reenviar las solicitudes.",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "Exponga fácilmente sus hosts en sus VPNs. Si está utilizando Tailscale, nginx ignition puede crear automáticamente una máquina virtual en su red y reenviar las solicitudes al host cada vez que se acceda a la IP o nombre de host de la máquina.",
                ],
            },
            accessLists: {
                title: "Listas de acceso",
                bodies: [
                    "Las listas de acceso proporcionan una forma sencilla de proteger una ruta o el host completo verificando si el usuario proviene de un rango de IPs autorizadas o se identifica con un nombre de usuario y contraseña válidos (o incluso ambos, IP y credenciales)",
                ],
            },
            caches: {
                title: "Configuración de caché",
                bodies: [
                    "Acelere sus sitios web y reduzca la carga en sus servidores upstream habilitando las capacidades de caché de contenido de nginx. Ignition facilita la configuración de reglas de caché que determinan qué solicitudes deben almacenarse en caché y por cuánto tiempo.",
                    "Puede personalizar el comportamiento de la caché por códigos de estado HTTP, extensiones de archivo, métodos de solicitud y más. Características avanzadas como manejo de contenido obsoleto, actualizaciones en segundo plano y bloqueos de concurrencia le brindan un control detallado sobre cómo se almacena en caché y se sirve su contenido.",
                ],
            },
            settings: {
                title: "Configuración",
                bodies: [
                    "Ignition abstrae la complejidad de los archivos de configuración de nginx, pero eso no significa que pierda la capacidad de aplicar algunos ajustes finos.",
                    "Con la página de configuración, puede definir algunas definiciones importantes como los valores de tiempo de espera, el tamaño máximo de carga/cuerpo de las solicitudes, los puertos predeterminados en los que nginx escuchará las solicitudes y más.",
                    "Más allá de eso, también puede configurar algunas de las características de nginx ignition allí, como la renovación automática de certificados SSL y la rotación de registros.",
                ],
            },
        },
        checklistTitle: "…y mucho más",
        checklistSubtitle:
            "Todo lo siguiente viene con nginx ignition, listo para usar.",
        checklist: {
            virtualHosts: {
                title: "Hosts virtuales",
                body: "Varios hosts con dominios personalizados, rutas y enlaces de puertos.",
            },
            streams: {
                title: "Streams",
                body: "Haz proxy de sockets TCP, UDP y Unix con enrutamiento por SNI, disyuntores y balanceo de carga.",
            },
            routing: {
                title: "Enrutamiento versátil",
                body: "Proxies (incluidos upstreams gRPC/gRPCS), redirecciones, código JS/Lua personalizado, respuestas estáticas y servicio de archivos.",
            },
            serverConfiguration: {
                title: "Configuración del servidor",
                body: "Tamaño máximo de subida, tokens del servidor, tiempos de espera, nivel de log y más.",
            },
            sslCertificates: {
                title: "Certificados SSL",
                body: "Let's Encrypt (ACME) automatizado, autofirmados o usa tus propios certificados.",
            },
            integrations: {
                title: "Integraciones nativas",
                body: "Soporte de primera clase para Docker, Docker Swarm, las VPN Tailscale y NetBird, y TrueNAS.",
            },
            security: {
                title: "Seguridad",
                body: "Autenticación de dos factores, control de acceso basado en atributos y listas de acceso por host.",
            },
            apiTokens: {
                title: "Tokens de API",
                body: "Genera y revoca tokens para autenticar scripts y herramientas externas.",
            },
            logging: {
                title: "Logs",
                body: "Logs detallados de acceso y de error del servidor y de cada host, con rotación automática.",
            },
            stats: {
                title: "Estadísticas de tráfico",
                body: "Tasas de solicitudes en tiempo real, tiempos de respuesta y desgloses de tráfico por host y upstream.",
            },
            caching: {
                title: "Caché",
                body: "Configuración de caché de nginx integrada para acelerar la entrega de contenido.",
            },
            execution: {
                title: "Ejecución flexible",
                body: "Deja que ignition ejecute nginx por ti, o solo genera los archivos de configuración.",
            },
        },
    },
    docs: {
        sidebarTitle: "Guías",
        overview: "Resumen",
        fullReference: "Referencia completa en GitHub",
        fullDoc: "Ver la documentación completa en GitHub",
        previous: "Anterior",
        next: "Siguiente",
        heroTitle: "Documentación",
        heroSubtitle:
            "Lo esencial para instalar, configurar y operar nginx ignition. Cada guía enlaza con el documento completo en el repositorio del proyecto.",
        guides: {
            configuration: {
                title: "Configuración",
                summary:
                    "Variables de entorno, el archivo de propiedades, PostgreSQL y el secreto JWT.",
            },
            "api-tokens": {
                title: "Tokens de API",
                summary:
                    "Autentica scripts y trabajos de CI contra la API sin compartir una contraseña.",
            },
            "health-checks": {
                title: "Verificaciones de estado",
                summary:
                    "Endpoints de actividad y preparación para Docker, Kubernetes y monitoreo.",
            },
            "backup-restore": {
                title: "Copia de seguridad y restauración",
                summary:
                    "Cómo restaurar una copia de seguridad de la base de datos, para SQLite y PostgreSQL.",
            },
            troubleshooting: {
                title: "Solución de problemas",
                summary:
                    "Dónde buscar primero y cómo restablecer una contraseña perdida.",
            },
        },
        referenceTitle: "Referencia completa en GitHub",
        referenceBody:
            "Las guías de aquí cubren lo esencial. Las referencias exhaustivas se mantienen en el repositorio del proyecto, en inglés:",
        reference: {
            config: {
                title: "Propiedades de configuración",
                body: "Cada variable de entorno y propiedad, con sus valores por defecto.",
            },
            migration: {
                title: "Guía de migración",
                body: "Cómo actualizar de nginx ignition 1.x a 2.x.",
            },
            apiTokens: {
                title: "Tokens de API",
                body: "La documentación completa de tokens de API.",
            },
            healthChecks: {
                title: "Verificaciones de estado",
                body: "Endpoints y escenarios de uso.",
            },
            restore: {
                title: "Restauración de base de datos",
                body: "La guía completa de restauración.",
            },
            troubleshooting: {
                title: "Solución de problemas",
                body: "Problemas comunes y pasos de recuperación.",
            },
            screenshots: {
                title: "Galería de capturas",
                body: "Cada pantalla de la aplicación, descrita.",
            },
            changelog: {
                title: "Registro de cambios",
                body: "Qué cambió en cada versión.",
            },
            security: {
                title: "Política de seguridad",
                body: "Cómo reportar vulnerabilidades.",
            },
        },
        helpTitle: "Obtén ayuda",
        helpBody:
            "¿Encontraste un problema o tienes una pregunta? Los problemas y las discusiones de GitHub son el lugar indicado — y donde se solicitan las nuevas funciones.",
        helpIssues: "Abrir un reporte",
        helpDiscussions: "Iniciar una discusión",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition se configura con variables de entorno o un archivo de propiedades. Cada ajuste tiene una única clave: como variable de entorno se escribe en mayúsculas con guiones bajos (NGINX_IGNITION_SERVER_PORT), y en el archivo de propiedades en minúsculas con puntos (nginx-ignition.server.port).",
            envTitle: "Variables de entorno clave",
            envBody:
                "Lo esencial para la mayoría de las instalaciones. Cada propiedad tiene un valor por defecto, así que normalmente solo defines lo que necesitas cambiar.",
            envVarCol: "Variable",
            envDescriptionCol: "Descripción",
            envExampleCol: "Ejemplo",
            envMore:
                "La referencia completa enumera todas las propiedades, con valores por defecto y ejemplos.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Puerto en el que nginx ignition escucha las solicitudes",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Dirección en la que nginx ignition escucha las solicitudes",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Ruta al binario de nginx que se usará",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Dónde se guardan los archivos de configuración de nginx generados",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Tipo de base de datos: sqlite o postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Nombre de host o IP de la base de datos",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Puerto en el que escucha la base de datos",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Nombre de la base de datos que se usará",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Cifra la conexión a la base de datos: require o disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Usuario de la base de datos",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Contraseña de la base de datos",
                    example: "tu-contraseña",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Carpeta donde se guarda el archivo de base de datos SQLite",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Secreto personalizado (exactamente 64 caracteres) para firmar los tokens de autenticación; solo se lee en el primer inicio",
                    example: "(aleatorio)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "Cuánto tiempo permanece válido un token de sesión antes de cerrar sesión por inactividad",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description:
                        "Activa o desactiva los endpoints de verificación de estado",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Restablece la contraseña de este usuario al iniciar y sale; se usa para recuperación",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (recomendado para producción)",
            postgresBody:
                "La base de datos SQLite integrada es ideal para pruebas rápidas, pero las instalaciones a largo plazo deberían usar PostgreSQL. Apunta ignition a tu base de datos con las variables correspondientes:",
            postgresNote:
                "Todas las tablas e índices necesarios se crean automáticamente en el primer inicio y se actualizan automáticamente en cada actualización.",
            configFileTitle: "Archivo de configuración",
            configFileBody:
                "La configuración también puede venir de un archivo de propiedades, con las mismas claves en minúsculas y con puntos. ignition lee, en orden: el archivo en NGINX_IGNITION_CONFIG_FILE_PATH, la ruta indicada con --config, o nginx-ignition.properties en el directorio de trabajo.",
            jwtTitle: "Secreto JWT personalizado",
            jwtBody:
                "Por defecto, se genera un secreto aleatorio seguro y se guarda en la base de datos. Para usar el tuyo, define NGINX_IGNITION_SECURITY_JWT_SECRET con exactamente 64 caracteres antes del primer inicio. ¿Actualizas desde una versión que usaba esta variable? Déjala como está: su valor se guarda en la base de datos en el primer inicio después de la actualización.",
        },
        apiTokens: {
            lead: "Los tokens de API permiten que scripts, trabajos de CI y otras herramientas se autentiquen contra la API de nginx ignition sin compartir tu usuario y contraseña. Cada token pertenece al usuario que lo creó y lleva sus permisos.",
            createTitle: "Crear un token",
            createStep1:
                "Abre el menú de usuario en la esquina superior derecha de la interfaz.",
            createStep2: "Cambia a la pestaña Tokens de API.",
            createStep3: "Haz clic en Nuevo token.",
            createStep4: "Ponle un nombre y, si quieres, una fecha de vencimiento.",
            createStep5:
                "Haz clic en Crear token y copia el valor generado — se muestra una sola vez.",
            createNote1:
                "El nombre debe ser único entre tus propios tokens y puede tener hasta 256 caracteres. Usa algo descriptivo, como ci-deploy o home-assistant.",
            createNote2:
                "La fecha de vencimiento es opcional. Sin ella, el token nunca vence; si la defines, debe estar en el futuro y el token deja de funcionar en cuanto pasa ese momento.",
            createNote3:
                "El valor del token se muestra una sola vez, justo después de crearlo, y no se puede recuperar después. Si lo pierdes, revoca el token y crea uno nuevo.",
            useTitle: "Usar un token",
            useBody:
                "Envía el token en el encabezado Authorization con el esquema Bearer, igual que un token de sesión:",
            useError:
                "Un token inválido, revocado o vencido recibe una respuesta 401 Unauthorized; las operaciones reservadas reciben 403 Forbidden.",
            useNote:
                "Los tokens de API solo autentican llamadas a la API: iniciar sesión en la interfaz web sigue requiriendo un usuario y una contraseña.",
            permissionsTitle: "Permisos",
            permissionsBody1:
                "Un token hereda los permisos del usuario que lo posee, y no hay forma de restringirlos de manera independiente del propietario.",
            permissionsBody2:
                "Si un token necesita otro conjunto de permisos, crea un usuario de servicio dedicado con los niveles de acceso deseados y genera el token desde esa cuenta.",
            reservedTitle: "Operaciones reservadas",
            reservedBody:
                "Algunas operaciones están reservadas para sesiones interactivas y no se pueden realizar con un token:",
            reservedItem1: "Cambiar el perfil o la contraseña.",
            reservedItem2:
                "Leer, activar o desactivar la autenticación de dos factores.",
            reservedItem3: "Listar, crear o revocar tokens de API.",
            reservedItem4:
                "Cerrar sesión (lo que solo invalida las sesiones interactivas).",
            reservedException:
                "Leer tu propio perfil con GET /api/users/current es la única excepción: los tokens sí pueden hacerlo.",
            lifecycleTitle: "Ciclo de vida del token",
            lifecycle1Title: "Sin renovación automática",
            lifecycle1Body:
                "A diferencia de las sesiones web, los tokens de API nunca se extienden automáticamente; solo importa la fecha de vencimiento de cada token.",
            lifecycle2Title: "Revocación inmediata",
            lifecycle2Body:
                "Cada solicitud verifica el token contra la base de datos, así que revocar un token lo detiene en la siguiente llamada.",
            lifecycle3Title: "Usuarios deshabilitados",
            lifecycle3Body:
                "Deshabilitar a un usuario hace que sus tokens dejen de funcionar, pero no se elimina nada; volver a habilitar al usuario los hace funcionar de nuevo.",
            upgradeNote:
                "Actualizar desde una versión anterior a la 2.47.0 cierra la sesión de todos los usuarios una vez, porque cambió el formato del token. Solo hay que volver a iniciar sesión después.",
        },
        healthChecks: {
            lead: "Los endpoints de verificación de estado pueden ser usados por plataformas de orquestación de contenedores (como Docker) y sistemas de monitoreo para comprobar el estado y la disponibilidad de la aplicación.",
            disableTitle: "Activar y desactivar",
            disableBody:
                "Ambos endpoints están habilitados por defecto. Define NGINX_IGNITION_HEALTH_CHECK_ENABLED como false para desactivarlos.",
            endpointsTitle: "Endpoints",
            livenessTitle: "Endpoint de actividad",
            livenessBody:
                "Verifica que la aplicación esté en ejecución y que sus componentes internos — como la conexión a la base de datos — estén en buen estado.",
            livenessCode200: "200 OK: la aplicación está en buen estado",
            livenessCode503:
                "503 Service Unavailable: uno o más componentes críticos no están en buen estado",
            livenessExampleLabel: "Respuesta de ejemplo",
            readinessTitle: "Endpoint de preparación",
            readinessBody:
                "Indica si la aplicación está lista para recibir tráfico — útil durante el arranque o en escenarios de despliegue.",
            readinessCode200: "200 OK: lista para aceptar solicitudes",
            dockerTitle: "Docker Compose",
            dockerBody:
                "Usa el endpoint de actividad en una verificación de estado de contenedor:",
            kubernetesTitle: "Sondas de Kubernetes",
            kubernetesBody: "Configura ambas sondas en tu despliegue:",
        },
        backupRestore: {
            lead: "La página Exportar y copia de seguridad genera una copia de seguridad descargable de la base de datos. La forma de restaurarla depende de la base de datos en uso: con SQLite obtienes un único archivo .db (nginx-ignition.db), y con PostgreSQL un archivo SQL plano (nginx-ignition.sql).",
            safetyTitle: "Antes de empezar",
            safety1:
                "Detén la aplicación (o su contenedor) para que nada escriba en la base de datos mientras la reemplazas.",
            safety2:
                "Conserva siempre una copia adicional del respaldo antes de sobrescribir cualquier cosa.",
            sqliteTitle: "Restaurar una base de datos SQLite",
            sqliteBody:
                "Esto aplica cuando ignition se ejecuta con la base de datos SQLite integrada, la opción por defecto en instalaciones nuevas. La imagen oficial de Docker espera el archivo en /opt/nginx-ignition/data/nginx-ignition.db; la variable NGINX_IGNITION_DATABASE_DATA_PATH cambia esa carpeta.",
            sqliteOptionATitle: "Copiar el archivo al contenedor en ejecución",
            sqliteOptionAStep1: "Averigua el nombre del contenedor: docker ps",
            sqliteOptionAStep2: "Detén la aplicación: docker stop <container>",
            sqliteOptionAStep3:
                "Copia el archivo: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "Inicia la aplicación de nuevo: docker start <container>",
            sqliteOptionBTitle:
                "O reemplaza el archivo donde vive la carpeta de datos",
            sqliteOptionBStep1: "Detén el contenedor.",
            sqliteOptionBStep2:
                "Copia el respaldo sobre el archivo en tu montaje de enlace (o volumen).",
            sqliteOptionBStep3: "Inicia el contenedor de nuevo.",
            postgresTitle: "Restaurar una base de datos PostgreSQL",
            postgresBody:
                "Restaura el volcado .sql con el cliente oficial psql. Esto supone que la base de datos destino existe, está vacía y que el usuario tiene privilegios para crear los objetos del volcado.",
            postgresStep1:
                "Detén la aplicación para evitar escrituras durante la restauración: docker stop <container>",
            postgresStep2: "Ejecuta psql apuntando a la base de datos destino.",
            postgresStep3:
                "Escribe la contraseña de la base de datos cuando se te solicite.",
            postgresStep4: "Inicia la aplicación de nuevo.",
        },
        troubleshooting: {
            lead: "nginx ignition fue diseñado para tener logs útiles y claros. Si algo no funciona y los mensajes de la interfaz no son lo bastante claros, empieza por los logs de la aplicación — con Docker, la salida estándar del contenedor.",
            logsLink: "Documentación de Docker sobre los logs",
            passwordTitle: "Restablecer la contraseña",
            passwordBody:
                "¿Perdiste tu contraseña? Define la variable de entorno de abajo en el contenedor. Restablece la contraseña del usuario indicado al iniciar, imprime la nueva contraseña aleatoria en los logs y luego se apaga sin iniciar la aplicación:",
            passwordNote:
                "La contraseña cambia cada vez que la aplicación se ejecuta con la variable definida, así que ejecútala una vez, anota la nueva contraseña y quita la variable.",
            helpTitle: "¿Sigues atascado?",
            helpBody:
                "Si los logs y las guías de aquí no lo resuelven, contáctanos:",
            helpIssues: "Abrir un reporte en GitHub",
            helpDiscussions: "Preguntar en las discusiones",
        },
    },
    notFound: {
        title: "Página no encontrada",
        body: "La página que buscas no existe o se movió.",
        home: "Volver a la página principal",
        features: "Explorar las funciones",
        docs: "Ver la documentación",
    },
    footer: {
        tagline:
            "Una interfaz web moderna e intuitiva para el servidor web nginx. Hecha para desarrolladores y entusiastas.",
        product: "Producto",
        releases: "Versiones",
        community: "Comunidad",
        issues: "Problemas",
        discussions: "Discusiones",
        linkedin: "LinkedIn",
        resources: "Recursos",
        configReference: "Referencia de configuración",
        screenshots: "Galería de capturas",
        changelog: "Registro de cambios",
        security: "Política de seguridad",
        license: "Licencia MIT",
        madeWith: "Hecho con ❤️ desde Brasil",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default es
