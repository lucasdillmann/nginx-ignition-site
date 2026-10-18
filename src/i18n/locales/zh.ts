import type { Messages } from "./en"

const zh: Messages = {
    common: {
        getStarted: "开始使用",
        download: "下载",
        viewOnGitHub: "在 GitHub 上查看",
        learnMore: "了解更多",
        readGuide: "阅读指南",
        copy: "复制",
        copied: "已复制！",
        latestVersion: "最新版本",
        releasedOn: "发布于 {{date}}",
        releaseNotes: "发行说明",
        browseReleases: "浏览所有版本",
        seeAllFeatures: "查看所有功能",
        githubInEnglish: "将在 GitHub 上以英文打开。",
        previous: "上一个",
        next: "下一个",
        goToSlide: "转到第 {{index}} 张幻灯片",
        starOnGitHub: "在 GitHub 上标星",
    },
    nav: {
        label: "主导航",
        features: "功能",
        docs: "文档",
        gettingStarted: "快速开始",
        github: "GitHub",
        openMenu: "打开菜单",
        closeMenu: "关闭菜单",
    },
    languageSwitcher: {
        label: "切换语言",
    },
    seo: {
        home: {
            title: "nginx ignition — nginx Web 服务器的现代 UI",
            description:
                "一个现代、直观的 nginx Web 服务器界面。虚拟主机、流、SSL 证书、集成等功能——只需一条 Docker 命令即可安装。免费且开源。",
        },
        gettingStarted: {
            title: "快速开始 — nginx ignition",
            description:
                "使用 Docker、Docker Compose 或适用于 Linux、Windows 和 macOS 的原生安装包安装 nginx ignition。下载最新版本。",
        },
        features: {
            title: "功能 — nginx ignition",
            description:
                "虚拟主机、流、SSL 证书、安全、集成、日志、流量统计和缓存——nginx ignition 的全部功能，附有截图。",
        },
        docs: {
            title: "文档 — nginx ignition",
            description:
                "关于配置和运维 nginx ignition 的指南：环境变量、API 令牌、健康检查、备份与恢复、故障排查。",
        },
        docsConfiguration: {
            title: "配置 — nginx ignition 文档",
            description:
                "通过环境变量或 properties 文件配置 nginx ignition：数据库、nginx 路径、JWT 密钥等。",
        },
        docsApiTokens: {
            title: "API 令牌 — nginx ignition 文档",
            description:
                "创建、使用和撤销 API 令牌，让脚本和工具通过 nginx ignition API 完成身份验证。",
        },
        docsHealthChecks: {
            title: "健康检查 — nginx ignition 文档",
            description:
                "面向 Docker、Kubernetes 和监控系统的存活与就绪端点。",
        },
        docsBackupRestore: {
            title: "备份与恢复 — nginx ignition 文档",
            description:
                "如何恢复 nginx ignition 数据库备份，涵盖 SQLite 和 PostgreSQL。",
        },
        docsTroubleshooting: {
            title: "故障排查 — nginx ignition 文档",
            description:
                "出问题时应该先看哪里，以及如何重置丢失的密码。",
        },
        notFound: {
            title: "页面未找到 — nginx ignition",
            description: "你访问的页面不存在。",
        },
    },
    home: {
        eyebrow: "开源 · 自托管 · 多语言 · 多平台",
        title: "nginx，从此告别配置烦恼。",
        subtitle:
            "nginx ignition 是一个现代、直观的 nginx Web 界面——为开发者和家庭实验室用户打造，无需手动编辑配置文件，也能获得强大的控制力。",
        ctaPrimary: "开始使用",
        ctaSecondary: "在 GitHub 上查看",
        ctaFeatures: "探索功能",
        commandTitle: "一条命令，即刻运行",
        commandNote:
            "等待几秒钟，打开 http://localhost:8090，让安装向导创建你的第一个用户。",
        commandNoteDb:
            "内置的 SQLite 数据库足以满足试用需求；生产环境建议使用 PostgreSQL。",
        commandMore: "查看所有安装方式",
        highlightsTitle: "nginx 的一切，尽在一处",
        highlightsSubtitle:
            "为最常见的场景开箱即用——无需再为手动配置费心。",
        highlights: {
            hosts: {
                title: "虚拟主机与路由",
                body: "自定义域名、路由、代理（包括 gRPC）、重定向、自定义 JS/Lua 和静态响应。",
            },
            streams: {
                title: "流",
                body: "代理 TCP、UDP 和 Unix socket，支持 SNI 路由、熔断和负载均衡。",
            },
            ssl: {
                title: "SSL 证书",
                body: "自动化的 Let's Encrypt (ACME)、自签名，或使用你自己的证书。",
            },
            integrations: {
                title: "原生集成",
                body: "对 Docker、Docker Swarm、Tailscale、NetBird 和 TrueNAS 的一流支持。",
            },
            security: {
                title: "安全",
                body: "双重身份验证、ABAC 和按主机访问列表。为脚本和工具提供 API 令牌。",
            },
            observability: {
                title: "日志、统计与缓存",
                body: "支持搜索的访问日志和错误日志、实时流量统计以及 nginx 缓存。",
            },
        },
        showcaseTitle: "快速一览",
        showcaseSubtitle:
            "每个界面都力求简洁、清晰、实用。",
        showcase: {
            dashboard: "仪表盘：资源数量、nginx 状态和最近的错误。",
        },
        goalsTitle: "为开发者和家庭实验室用户打造",
        goalsBody1:
            "nginx ignition 为开发者和爱好者打造，力求在使用便捷与 nginx 的强大功能之间取得平衡。",
        goalsBody2:
            "它并不以企业级就绪或覆盖高度复杂环境的所有功能为目标：如果你的场景极为高级，你很可能更愿意手动管理配置文件。它的目标是为最常见的场景提供一种既强大又直观的 nginx 运行方式。",
        goalsForTitle: "适用于",
        goalsFor1: "家庭实验室和自托管环境",
        goalsFor2: "想要掌控一切、又不想手动编辑配置的开发者",
        goalsFor3: "快速搞定常见的使用场景",
        goalsNotTitle: "不适用于",
        goalsNot1: "高度复杂的企业级环境",
        goalsNot2: "替代每一条 nginx 指令",
        goalsNot3: "管理大规模服务器集群",
        languagesTitle: "提供 11 种语言",
        languagesBody:
            "界面已翻译为 11 种语言，并会自动跟随你的浏览器语言。你随时可以使用页眉中的语言选择器进行切换。",
        ctaTitle: "准备好试用了吗？",
        ctaBody:
            "用一条 Docker 命令试用，或下载适用于你的平台的最新版本。",
        ctaDiscussions: "讨论区",
        ctaIssues: "报告问题",
    },
    gettingStarted: {
        heroTitle: "让 nginx ignition 跑起来",
        heroSubtitle:
            "几秒钟内用 Docker 试用，下载适用于 macOS、Windows 或 Linux 的原生安装包，或使用可直接用于生产的 Compose 文件。",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "下载",
        heroJumpNative: "原生安装",
        dockerTitle: "用 Docker 快速试用",
        dockerBody:
            "体验 nginx ignition 最快的方式，就是一条 Docker 命令。",
        dockerStep1: "运行下面的命令。",
        dockerStep2: "等待几秒钟，让应用完成初始化。",
        dockerStep3: "在浏览器中打开 http://localhost:8090。",
        dockerStep4:
            "安装向导会引导你创建第一个用户。",
        dockerPersistenceTitle: "保留你的数据",
        dockerPersistenceBody:
            "内置数据库位于容器内部。添加一个卷，让数据在多次运行之间得以保留：",
        dockerSqliteTitle: "使用内置数据库",
        dockerSqliteBody:
            "默认情况下，应用使用内置的 SQLite 数据库。用它试用没有问题，但长期安装建议使用 PostgreSQL。",
        composeTitle: "用 Docker Compose 部署生产环境",
        composeBody:
            "这个示例 Compose 文件会将 nginx ignition 与 PostgreSQL 一起运行，并配置健康检查和持久卷。部署前请检查并更新所有值。",
        composeWarning:
            "部署前，请将占位的数据库密码替换为高强度值。",
        composeDownload: "在 GitHub 上查看 docker-compose.yml",
        downloadsTitle: "下载最新版本",
        downloadsSubtitle:
            "适用于 Linux、Windows 和 macOS 的原生安装包。每个按钮始终指向最新版本的构建产物。",
        downloadsFallbackNote:
            "当前无法访问 GitHub，因此链接指向版本发布页面。",
        downloadsHint:
            "不确定选哪个？在任何平台上，Docker 都是最简单的选择。",
        macosTitle: "macOS",
        macosNote: "需要 macOS 12 或更高版本。",
        macosButton: "下载 macOS 版",
        macosArchNote: "Apple Silicon（arm64）。Intel Mac：请使用 Docker。",
        windowsTitle: "Windows",
        windowsNote:
            "包含应用程序、UI、迁移脚本和开箱即用的 properties 文件的 ZIP 压缩包。",
        windowsX64: "下载 Windows 版（x64）",
        windowsArm64: "下载 Windows 版（arm64）",
        linuxTitle: "Linux",
        linuxNote: "适用于 amd64 和 arm64 的原生安装包和通用归档包。",
        linuxArchLabel: "架构",
        linuxFormatLabel: "安装包",
        linuxDownload: "下载 Linux 版",
        linuxFormats: {
            deb: "deb — Debian、Ubuntu",
            rpm: "rpm — Fedora、RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — 通用归档包",
        },
        nativeTitle: "原生安装",
        nativeSubtitle:
            "如需长期安装，请下载适用于你的平台的安装包，并按照下面的步骤操作。",
        nativeRequirements:
            "前提条件：已安装并可访问的 nginx（包含 mod-http-js、mod-http-lua 和 mod-stream 模块）、8090 端口可用，以及安装服务所需的管理员权限。",
        nativeFullInstructions: "GitHub 上的完整说明",
        nativeUpgradeNote:
            "升级：停止服务，替换二进制文件和所有更新的资源文件，然后重新启动。完整步骤见说明文档。",
        nativeLinuxTitle: "Linux（systemd）",
        nativeLinuxStep1:
            "解压压缩包，并将其内容复制到 /opt/nginx-ignition。",
        nativeLinuxStep2:
            "修正权限，并安装随附的 systemd 单元文件。",
        nativeLinuxStep3:
            "如有需要，编辑 nginx-ignition.properties（例如 nginx 二进制文件路径）。",
        nativeLinuxStep4:
            "启用并启动服务，然后开放防火墙（如果启用了 SELinux，也要相应放行）。",
        nativeLinuxStep5:
            "打开 http://your-host:8090，在浏览器中完成设置。",
        nativeMacosTitle: "macOS（launchd）",
        nativeMacosStep1:
            "解压压缩包，并将其内容复制到 /opt/nginx-ignition。",
        nativeMacosStep2:
            "修正权限，并安装随附的 launchd plist。",
        nativeMacosStep3:
            "编辑 nginx-ignition.properties，将 nginx.binary-path 指向你的 nginx（Homebrew：/opt/homebrew/bin/nginx）。",
        nativeMacosStep4:
            "加载并启动服务，并在防火墙中允许传入连接。",
        nativeMacosStep5:
            "打开 http://your-host:8090，在浏览器中完成设置。",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "将 ZIP 压缩包解压到任意目录，例如 C:\\nginx-ignition。",
        nativeWindowsStep2:
            "编辑 nginx-ignition.properties，将 nginx.binary-path 设置为你的 nginx.exe 所在位置。",
        nativeWindowsStep3:
            "在管理员命令提示符中运行 nginx-ignition.exe。",
        nativeWindowsStep4:
            "在 Windows 防火墙中允许 8090 端口。如需以服务方式运行，请使用 NSSM 或 WinSW。",
        nativeWindowsStep5:
            "打开 http://localhost:8090，在浏览器中完成设置。",
        firstStepsTitle: "安装之后",
        firstStepsSubtitle: "一份简短的检查清单，助你充分上手：",
        firstSteps1: "完成安装向导并登录。",
        firstSteps2: "创建你的第一个虚拟主机，并添加它的域名。",
        firstSteps3:
            "为主机签发 SSL 证书，或上传你自己的证书。",
        firstSteps4:
            "探索集成（Docker、Swarm、TrueNAS）和 VPN 连接（Tailscale、NetBird）。",
        firstStepsDocs: "浏览指南",
        firstStepsFeatures: "查看它的全部能力",
        helpTitle: "遇到问题了？",
        helpBody:
            "nginx ignition 提供了实用的日志：第一步永远是查看应用程序日志（用 Docker 运行时即容器的 stdout）。",
        helpTroubleshooting: "阅读故障排查指南",
        helpIssues: "提交问题",
        helpDiscussions: "在讨论区提问",
    },
    features: {
        heroTitle: "nginx 的一切，无需终端",
        heroSubtitle:
            "从虚拟主机和 SSL 证书到流、日志和缓存——最常见的 nginx 任务，都能在简洁现代的界面中完成。",
        tours: {
            hosts: {
                title: "主机",
                bodies: [
                    "虚拟主机，简称主机，是 nginx 服务器使其可以在浏览器中打开的网站。您可以在左侧主菜单中找到所有管理的主机。",
                    "nginx ignition 提供了一种直观的方式来配置此类网站。例如，如果您有一个 NAS 并且运行了一些服务（如 Jellyfin, Vaultwarden 等），ignition 提供了一种简单的方法，可以通过像 jellyfin.myhome.com 这样的域名访问它，这比 IP 和端口更容易记忆和使用。",
                    "每个主机都有一组路由，这些规则定义了哪些请求模式应被转发以及转发到哪里，还有绑定，这些是定义 nginx 应在哪些端口监听此类请求的定义。",
                ],
            },
            streams: {
                title: "流",
                bodies: [
                    "虽然主机是公开基于 HTTP 和 HTTPS 服务的主要方式，但流使您能够公开其他依赖 TCP、UDP 和 unix 套接字的服务。",
                    "如果您需要公开游戏服务器、数据库、DNS 服务器以及其他任何不使用 HTTP 协议的内容，流是最佳选择。",
                ],
            },
            ssl: {
                title: "SSL 证书",
                bodies: [
                    "如果您想要或需要使用 HTTPS 加密保护您的域名，该应用也提供了一种简单的方法来管理此类 SSL 证书。",
                    "无论您是需要由 Let's Encrypt 支持的有效证书、自签名证书，还是导入第三方提供商的自定义证书，ignition 都能轻松实现。即使在证书即将过期时，该应用也会自动为您续期。",
                    "一旦创建或导入了 SSL 证书，您只需在表单中选择一个选项即可在主机上使用它。",
                ],
            },
            logs: {
                title: "日志",
                bodies: [
                    "需要知道请求了什么或为什么某些东西没有按预期工作？nginx ignition 也为您提供了一种简单的方法来检查 nginx 日志。只需选择您想要检查的主机（或 nginx 服务器本身），我们将为您获取日志。",
                    "而且您不需要担心磁盘被日志占满，ignition 会自动为您轮换日志（您可以控制保留多少，或者如果适合您最好，甚至可以禁用轮换）。",
                ],
            },
            integrations: {
                title: "集成",
                bodies: [
                    "您的应用是否运行在 Docker 容器或 TrueNAS 中？您可以启用 nginx ignition 提供的原生集成，并轻松选择容器或应用作为主机转发请求的目标应用。",
                ],
            },
            vpn: {
                title: "VPN",
                bodies: [
                    "轻松地在您的 VPN 中公开您的主机。如果您正在使用 Tailscale，nginx ignition 可以自动在您的网络中创建一个虚拟机，并在访问机器 IP 或主机名时将请求转发到主机。",
                ],
            },
            accessLists: {
                title: "访问列表",
                bodies: [
                    "访问列表提供了一种简单的方法来保护路由或整个主机，通过检查用户是否来自授权 IP 范围或通过有效的用户名和密码（甚至两者，IP 和凭据）进行识别",
                ],
            },
            caches: {
                title: "缓存配置",
                bodies: [
                    "通过启用 nginx 的内容缓存功能，加速您的网站并减少上游服务器的负载。Ignition 使配置缓存规则变得容易，这些规则确定哪些请求应被缓存以及缓存多长时间。",
                    "您可以根据 HTTP 状态码、文件扩展名、请求方法等自定义缓存行为。诸如陈旧内容处理、后台更新和并发锁等高级功能让您可以精细控制内容的缓存和传输方式。",
                ],
            },
            settings: {
                title: "设置",
                bodies: [
                    "Ignition 抽象了 nginx 配置文件的复杂性，但这并不意味着您失去了进行一些微调的能力。",
                    "通过设置页面，您可以定义一些重要的定义，例如超时值、请求的最大上传/正文大小、nginx 监听请求的默认端口等。",
                    "除此之外，您还可以配置一些 nginx ignition 的功能，如 SSL 证书的自动续期和日志轮换。",
                ],
            },
        },
        checklistTitle: "……以及更多",
        checklistSubtitle:
            "以下功能都随 nginx ignition 一并提供，开箱即用。",
        checklist: {
            virtualHosts: {
                title: "虚拟主机",
                body: "多个主机，支持自定义域名、路由和端口绑定。",
            },
            streams: {
                title: "流",
                body: "代理 TCP、UDP 和 Unix socket，支持基于 SNI 的路由、熔断和负载均衡。",
            },
            routing: {
                title: "全能路由",
                body: "代理（包括 gRPC/gRPCS 上游）、重定向、自定义 JS/Lua 代码、静态响应和文件服务。",
            },
            serverConfiguration: {
                title: "服务器配置",
                body: "最大请求体/上传大小、服务器令牌、超时、日志级别等。",
            },
            sslCertificates: {
                title: "SSL 证书",
                body: "自动化的 Let's Encrypt (ACME)、自签名，或使用你自己的证书。",
            },
            integrations: {
                title: "原生集成",
                body: "为 Docker、Docker Swarm、Tailscale 和 NetBird VPN，以及 TrueNAS 提供一流支持。",
            },
            security: {
                title: "安全",
                body: "双重身份验证、基于属性的访问控制和按主机访问列表。",
            },
            apiTokens: {
                title: "API 令牌",
                body: "生成和撤销令牌，供脚本和外部工具进行身份验证。",
            },
            logging: {
                title: "日志",
                body: "服务器和每个主机的详细访问日志与错误日志，自动轮转。",
            },
            stats: {
                title: "流量统计",
                body: "实时的请求速率、响应时间，以及按主机和上游划分的流量明细。",
            },
            caching: {
                title: "缓存",
                body: "内置 nginx 缓存配置，加速内容分发。",
            },
            execution: {
                title: "灵活的执行方式",
                body: "让 ignition 为你运行 nginx，或仅生成配置文件。",
            },
        },
    },
    docs: {
        sidebarTitle: "指南",
        overview: "概览",
        fullReference: "GitHub 上的完整参考",
        fullDoc: "在 GitHub 上查看完整文档",
        previous: "上一篇",
        next: "下一篇",
        heroTitle: "文档",
        heroSubtitle:
            "关于安装、配置和运维 nginx ignition 的核心内容。每篇指南都链接到项目仓库中的完整文档。",
        guides: {
            configuration: {
                title: "配置",
                summary:
                    "环境变量、properties 文件、PostgreSQL 和 JWT 密钥。",
            },
            "api-tokens": {
                title: "API 令牌",
                summary:
                    "让脚本和 CI 任务在不共享密码的情况下通过 API 完成身份验证。",
            },
            "health-checks": {
                title: "健康检查",
                summary:
                    "面向 Docker、Kubernetes 和监控系统的存活与就绪端点。",
            },
            "backup-restore": {
                title: "备份与恢复",
                summary:
                    "如何恢复数据库备份，涵盖 SQLite 和 PostgreSQL。",
            },
            troubleshooting: {
                title: "故障排查",
                summary:
                    "遇到问题先看哪里，以及如何重置丢失的密码。",
            },
        },
        referenceTitle: "GitHub 上的完整参考",
        referenceBody:
            "这里的指南只涵盖核心内容。详尽的参考资料维护在项目仓库中，仅提供英文版：",
        reference: {
            config: {
                title: "配置属性",
                body: "每一个环境变量和属性，附默认值。",
            },
            migration: {
                title: "迁移指南",
                body: "从 nginx ignition 1.x 升级到 2.x。",
            },
            apiTokens: {
                title: "API 令牌",
                body: "完整的 API 令牌文档。",
            },
            healthChecks: {
                title: "健康检查",
                body: "端点及使用场景。",
            },
            restore: {
                title: "数据库恢复",
                body: "完整的恢复指南。",
            },
            troubleshooting: {
                title: "故障排查",
                body: "常见问题与恢复步骤。",
            },
            screenshots: {
                title: "截图图库",
                body: "逐一介绍应用程序的每个界面。",
            },
            changelog: {
                title: "更新日志",
                body: "每个版本的变化。",
            },
            security: {
                title: "安全政策",
                body: "如何报告漏洞。",
            },
        },
        helpTitle: "获取帮助",
        helpBody:
            "遇到问题或有疑问？GitHub 上的问题反馈和讨论区是最合适的地方——新功能也是在那里提出的。",
        helpIssues: "提交问题",
        helpDiscussions: "发起讨论",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition 通过环境变量或 properties 文件进行配置。每个设置都有一个统一的键名：写成环境变量时是下划线分隔的大写形式（NGINX_IGNITION_SERVER_PORT），写在 properties 文件中则是点号分隔的小写形式（nginx-ignition.server.port）。",
            envTitle: "关键环境变量",
            envBody:
                "大多数安装所需的核心配置。每个属性都有默认值，因此通常只需设置你想修改的项。",
            envVarCol: "变量",
            envDescriptionCol: "说明",
            envExampleCol: "示例",
            envMore:
                "完整的参考资料列出了每一个属性，并附默认值和示例。",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "nginx ignition 监听请求的端口",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "nginx ignition 监听请求的地址",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "要使用的 nginx 二进制文件路径",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "生成的 nginx 配置文件存放位置",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "数据库类型：sqlite 或 postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "数据库主机名或 IP",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "数据库监听的端口",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "要使用的数据库名称",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "加密数据库连接：require 或 disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "数据库用户名",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "数据库密码",
                    example: "your-password",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "SQLite 数据库文件的存放文件夹",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "用于签发身份验证令牌的自定义密钥（恰好 64 个字符）；仅在首次启动时读取",
                    example: "(随机)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "会话令牌在因无操作而登出之前保持有效的时长",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "启用或禁用健康检查端点",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "启动时重置该用户的密码并退出；用于恢复",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL（生产环境推荐）",
            postgresBody:
                "内置的 SQLite 数据库非常适合快速测试，但长期安装应使用 PostgreSQL。通过数据库相关变量让 ignition 指向你的数据库：",
            postgresNote:
                "首次启动时会自动创建所有必需的表和索引，升级时也会自动更新。",
            configFileTitle: "配置文件",
            configFileBody:
                "设置也可以来自 properties 文件，键名相同，但使用小写和点号。ignition 按以下顺序读取：NGINX_IGNITION_CONFIG_FILE_PATH 指定的文件、通过 --config 给出的路径，或工作目录中的 nginx-ignition.properties。",
            jwtTitle: "自定义 JWT 密钥",
            jwtBody:
                "默认情况下，系统会生成一个安全随机密钥并存储在数据库中。如需自行提供，请在首次启动前设置 NGINX_IGNITION_SECURITY_JWT_SECRET，长度必须恰好为 64 个字符。从使用该变量的版本升级而来？请保留它：升级后的首次启动时，它的值会被存入数据库。",
        },
        apiTokens: {
            lead: "API 令牌让脚本、CI 任务和其他工具无需共享你的用户名和密码，即可通过 nginx ignition API 完成身份验证。每个令牌都属于创建它的用户，并继承该用户的权限。",
            createTitle: "创建令牌",
            createStep1:
                "打开界面右上角的用户菜单。",
            createStep2: "切换到 API 令牌标签页。",
            createStep3: "点击“新建令牌”。",
            createStep4: "为它起一个名字，也可以选择设置过期时间。",
            createStep5:
                "点击“创建令牌”，并复制生成的令牌值——它只会显示一次。",
            createNote1:
                "名称在你自己的令牌中必须唯一，最长可达 256 个字符。请使用有描述性的名称，例如 ci-deploy 或 home-assistant。",
            createNote2:
                "过期时间是可选的。不设置时，令牌永不过期；设置后，该时间必须是将来的时间，一旦超过该时刻，令牌就会立即失效。",
            createNote3:
                "令牌值仅在创建后显示一次，之后无法找回。如果不慎丢失，请撤销该令牌并重新创建一个。",
            useTitle: "使用令牌",
            useBody:
                "像会话令牌一样，使用 Bearer 方案将令牌放在 Authorization 请求头中发送：",
            useError:
                "无效、已撤销或已过期的令牌会收到 401 Unauthorized 响应；保留操作会收到 403 Forbidden 响应。",
            useNote:
                "API 令牌只能用于 API 调用：登录 Web 界面仍然需要用户名和密码。",
            permissionsTitle: "权限",
            permissionsBody1:
                "令牌会继承其所属用户的权限，无法独立于所有者进一步收窄权限。",
            permissionsBody2:
                "如果某个令牌需要不同的权限组合，请创建一个具有所需访问级别的专用服务用户，并用该账户生成令牌。",
            reservedTitle: "保留操作",
            reservedBody:
                "部分操作仅限交互式会话使用，无法通过令牌执行：",
            reservedItem1: "修改个人资料或密码。",
            reservedItem2:
                "读取、启用或停用双重身份验证。",
            reservedItem3: "列出、创建或撤销 API 令牌。",
            reservedItem4:
                "登出（仅会使交互式会话失效）。",
            reservedException:
                "读取自己的资料（GET /api/users/current）是唯一的例外：允许使用令牌执行。",
            lifecycleTitle: "令牌生命周期",
            lifecycle1Title: "不会自动续期",
            lifecycle1Body:
                "与 Web 会话不同，API 令牌永远不会自动延长；只有每个令牌自身的过期时间才起作用。",
            lifecycle2Title: "即时撤销",
            lifecycle2Body:
                "每个请求都会对照数据库检查令牌，因此撤销后，令牌在下一次调用时就会立即失效。",
            lifecycle3Title: "已禁用的用户",
            lifecycle3Body:
                "禁用某个用户会使其令牌失效，但不会删除任何内容；重新启用该用户后，令牌即可恢复使用。",
            upgradeNote:
                "从低于 2.47.0 的版本升级会让所有用户登出一次，因为令牌格式发生了变化。之后重新登录即可。",
        },
        healthChecks: {
            lead: "健康检查端点可供容器编排平台（如 Docker）和监控系统使用，以验证应用程序的状态和可用性。",
            disableTitle: "启用与禁用",
            disableBody:
                "两个端点默认均已启用。将 NGINX_IGNITION_HEALTH_CHECK_ENABLED 设为 false 即可禁用。",
            endpointsTitle: "端点",
            livenessTitle: "存活端点",
            livenessBody:
                "检查应用程序是否正在运行，以及其内部组件——例如数据库连接——是否健康。",
            livenessCode200: "200 OK：应用程序状态健康",
            livenessCode503:
                "503 Service Unavailable：一个或多个关键组件状态异常",
            livenessExampleLabel: "示例响应",
            readinessTitle: "就绪端点",
            readinessBody:
                "指示应用程序是否已准备好接收流量——在启动或部署过程中很有用。",
            readinessCode200: "200 OK：已准备好接收请求",
            dockerTitle: "Docker Compose",
            dockerBody: "在容器健康检查中使用存活端点：",
            kubernetesTitle: "Kubernetes 探针",
            kubernetesBody: "在你的 Kubernetes 部署中配置这两个探针：",
        },
        backupRestore: {
            lead: "“导出和备份”页面会生成一个可下载的数据库备份。恢复方式取决于所使用的数据库：SQLite 得到的是单个 .db 文件（nginx-ignition.db），PostgreSQL 则是纯 SQL 文件（nginx-ignition.sql）。",
            safetyTitle: "开始之前",
            safety1:
                "停止应用程序（或其容器），确保替换期间没有任何写入操作。",
            safety2:
                "在覆盖任何内容之前，始终额外保留一份备份副本。",
            sqliteTitle: "恢复 SQLite 数据库",
            sqliteBody:
                "这适用于 ignition 使用内置 SQLite 数据库的情况，这也是全新安装的默认方式。官方 Docker 镜像要求文件位于 /opt/nginx-ignition/data/nginx-ignition.db；NGINX_IGNITION_DATABASE_DATA_PATH 变量可以更改该文件夹。",
            sqliteOptionATitle: "将文件复制到运行中的容器",
            sqliteOptionAStep1: "找到容器名称：docker ps",
            sqliteOptionAStep2: "停止应用：docker stop <container>",
            sqliteOptionAStep3:
                "复制文件：docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "重新启动应用：docker start <container>",
            sqliteOptionBTitle:
                "或者直接在数据目录中替换文件",
            sqliteOptionBStep1: "停止容器。",
            sqliteOptionBStep2:
                "将备份覆盖到你的 bind mount（或卷）中的文件上。",
            sqliteOptionBStep3: "重新启动容器。",
            postgresTitle: "恢复 PostgreSQL 数据库",
            postgresBody:
                "使用官方 psql 客户端恢复 .sql 转储文件。前提是目标数据库已存在、为空，且该用户有权限创建转储中的对象。",
            postgresStep1:
                "停止应用，以免恢复期间发生写入：docker stop <container>",
            postgresStep2: "运行 psql，并指向目标数据库。",
            postgresStep3: "根据提示输入数据库密码。",
            postgresStep4: "重新启动应用。",
        },
        troubleshooting: {
            lead: "nginx ignition 在设计上就提供了实用而有价值的日志。如果出现问题，且界面上的反馈不够明确，请先从应用程序日志入手——使用 Docker 时，就是容器的 stdout。",
            logsLink: "Docker 日志文档",
            passwordTitle: "密码重置",
            passwordBody:
                "忘记密码了？在容器上设置下面的环境变量。它会在启动时重置目标用户的密码，在日志中打印新的随机密码，然后在不启动应用的情况下退出：",
            passwordNote:
                "只要设置了该变量，每次运行应用时密码都会变化，所以请运行一次，记下新密码，然后移除该变量。",
            helpTitle: "还是没解决？",
            helpBody:
                "如果日志和这里的指南都没能解决问题，请联系我们：",
            helpIssues: "在 GitHub 上提交问题",
            helpDiscussions: "在讨论区提问",
        },
    },
    notFound: {
        title: "页面未找到",
        body: "你访问的页面不存在，或已被移动。",
        home: "返回首页",
        features: "探索功能",
        docs: "浏览文档",
    },
    footer: {
        tagline:
            "一个现代、直观的 nginx Web 界面。为开发者和爱好者打造。",
        product: "产品",
        releases: "版本发布",
        community: "社区",
        issues: "问题反馈",
        discussions: "讨论区",
        linkedin: "LinkedIn",
        resources: "资源",
        configReference: "配置参考",
        screenshots: "截图图库",
        changelog: "更新日志",
        security: "安全政策",
        license: "MIT 许可证",
        madeWith: "用 ❤️ 在巴西打造",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default zh
