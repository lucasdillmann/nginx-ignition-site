import type { Messages } from "./en"

const pt: Messages = {
    common: {
        getStarted: "Começar",
        download: "Baixar",
        viewOnGitHub: "Ver no GitHub",
        learnMore: "Saiba mais",
        readGuide: "Ler o guia",
        copy: "Copiar",
        copied: "Copiado!",
        latestVersion: "Versão mais recente",
        releasedOn: "lançada em {{date}}",
        releaseNotes: "Notas da versão",
        browseReleases: "Ver todas as versões",
        seeAllFeatures: "Ver todos os recursos",
        githubInEnglish: "Abre no GitHub, em inglês.",
        previous: "Anterior",
        next: "Próximo",
        goToSlide: "Ir para o slide {{index}}",
        starOnGitHub: "Dar uma estrela no GitHub",
    },
    nav: {
        label: "Navegação principal",
        features: "Recursos",
        docs: "Documentação",
        gettingStarted: "Primeiros passos",
        github: "GitHub",
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
    },
    languageSwitcher: {
        label: "Alterar idioma",
    },
    seo: {
        home: {
            title: "nginx ignition — Uma interface moderna para o servidor web nginx",
            description:
                "Uma interface web moderna e intuitiva para o servidor web nginx. Hosts virtuais, streams, certificados SSL, integrações e muito mais — instalada com um único comando Docker. Gratuita e de código aberto.",
        },
        gettingStarted: {
            title: "Primeiros passos — nginx ignition",
            description:
                "Instale o nginx ignition com Docker, Docker Compose ou um pacote nativo para Linux, Windows e macOS. Baixe a versão mais recente.",
        },
        features: {
            title: "Recursos — nginx ignition",
            description:
                "Hosts virtuais, streams, certificados SSL, segurança, integrações, logs, estatísticas de tráfego e cache — tudo o que o nginx ignition faz, com capturas de tela.",
        },
        docs: {
            title: "Documentação — nginx ignition",
            description:
                "Guias para configurar e operar o nginx ignition: variáveis de ambiente, tokens de API, verificações de integridade, backup e restauração, solução de problemas.",
        },
        docsConfiguration: {
            title: "Configuração — docs do nginx ignition",
            description:
                "Configure o nginx ignition com variáveis de ambiente ou um arquivo de propriedades: banco de dados, caminhos do nginx, segredo JWT e muito mais.",
        },
        docsApiTokens: {
            title: "Tokens de API — docs do nginx ignition",
            description:
                "Crie, use e revogue tokens de API para autenticar scripts e ferramentas na API do nginx ignition.",
        },
        docsHealthChecks: {
            title: "Verificações de integridade — docs do nginx ignition",
            description:
                "Endpoints de atividade e prontidão para Docker, Kubernetes e sistemas de monitoramento.",
        },
        docsBackupRestore: {
            title: "Backup e restauração — docs do nginx ignition",
            description:
                "Como restaurar um backup do banco de dados do nginx ignition, para SQLite e PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Solução de problemas — docs do nginx ignition",
            description:
                "Onde olhar primeiro quando algo dá errado, e como redefinir uma senha perdida.",
        },
        notFound: {
            title: "Página não encontrada — nginx ignition",
            description: "A página que você procura não existe.",
        },
    },
    home: {
        eyebrow: "Código aberto · Auto-hospedado · Multilíngue · Multiplataforma",
        title: "O nginx, sem dor de cabeça com configuração.",
        subtitle:
            "O nginx ignition é uma interface web moderna e intuitiva para o servidor web nginx — feita para desenvolvedores e entusiastas de homelab que querem controle poderoso sem editar arquivos de configuração à mão.",
        ctaPrimary: "Começar",
        ctaSecondary: "Ver no GitHub",
        ctaFeatures: "Explorar os recursos",
        commandTitle: "No ar com um único comando",
        commandNote:
            "Espere alguns segundos, abra http://localhost:8090 e deixe o assistente de configuração criar seu primeiro usuário.",
        commandNoteDb:
            "O banco SQLite embutido basta para experimentar; para produção, o PostgreSQL é recomendado.",
        commandMore: "Ver todas as opções de instalação",
        highlightsTitle: "Tudo do nginx em um só lugar",
        highlightsSubtitle:
            "Tudo incluído para os casos de uso mais comuns — sem a dor de cabeça da configuração manual.",
        highlights: {
            hosts: {
                title: "Hosts virtuais e roteamento",
                body: "Domínios personalizados, rotas, proxies (incluindo gRPC), redirecionamentos, JS/Lua personalizado e respostas estáticas.",
            },
            streams: {
                title: "Streams",
                body: "Faça proxy de TCP, UDP e sockets Unix com roteamento por SNI, circuit breakers e balanceamento de carga.",
            },
            ssl: {
                title: "Certificados SSL",
                body: "Let's Encrypt (ACME) automatizado, autoassinados ou traga os seus próprios certificados.",
            },
            integrations: {
                title: "Integrações nativas",
                body: "Suporte de primeira classe para Docker, Docker Swarm, Tailscale, NetBird e TrueNAS.",
            },
            security: {
                title: "Segurança",
                body: "Autenticação de dois fatores, ABAC e listas de acesso por host. Tokens de API para seus scripts e ferramentas.",
            },
            observability: {
                title: "Logs, estatísticas e cache",
                body: "Logs de acesso e de erros com busca, estatísticas de tráfego em tempo real e cache do nginx.",
            },
        },
        showcaseTitle: "Uma olhada rápida",
        showcaseSubtitle:
            "Cada tela foi projetada para ser simples, clara e útil.",
        showcase: {
            dashboard: "O painel: recursos, status do nginx e erros recentes.",
        },
        goalsTitle: "Feito para desenvolvedores e entusiastas de homelab",
        goalsBody1:
            "O nginx ignition foi feito para desenvolvedores e entusiastas que querem um equilíbrio entre facilidade de uso e o poder do nginx.",
        goalsBody2:
            "Ele não pretende ser uma solução pronta para empresas nem completa em recursos para ambientes altamente complexos: se o seu caso for extremamente avançado, você provavelmente vai preferir gerenciar os arquivos de configuração manualmente. O objetivo é uma forma poderosa, mas intuitiva, de rodar o nginx nos casos de uso mais comuns.",
        goalsForTitle: "Para que ele serve",
        goalsFor1: "Homelabs e ambientes auto-hospedados",
        goalsFor2: "Desenvolvedores que querem controle sem edição manual",
        goalsFor3: "Casos de uso comuns, resolvidos rapidamente",
        goalsNotTitle: "Para que ele não serve",
        goalsNot1: "Ambientes altamente complexos, de nível empresarial",
        goalsNot2: "Substituir todas as diretivas do nginx",
        goalsNot3: "Gerenciar frotas de servidores",
        languagesTitle: "Disponível em 11 idiomas",
        languagesBody:
            "A interface é traduzida para 11 idiomas e segue automaticamente o idioma do seu navegador. Você pode trocar quando quiser pelo seletor de idioma no cabeçalho.",
        ctaTitle: "Pronto para experimentar?",
        ctaBody:
            "Experimente com um único comando Docker, ou baixe a versão mais recente para a sua plataforma.",
        ctaDiscussions: "Discussões",
        ctaIssues: "Relatar um problema",
    },
    gettingStarted: {
        heroTitle: "Coloque o nginx ignition para rodar",
        heroSubtitle:
            "Experimente com Docker em segundos, baixe um pacote nativo para macOS, Windows ou Linux, ou use o arquivo Compose pronto para produção.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Downloads",
        heroJumpNative: "Instalações nativas",
        dockerTitle: "Teste rápido com Docker",
        dockerBody:
            "A forma mais rápida de ver o nginx ignition em ação é um único comando Docker.",
        dockerStep1: "Execute o comando abaixo.",
        dockerStep2: "Espere alguns segundos até o app inicializar.",
        dockerStep3: "Abra http://localhost:8090 no navegador.",
        dockerStep4:
            "O assistente de configuração vai guiar você na criação do primeiro usuário.",
        dockerPersistenceTitle: "Mantenha seus dados",
        dockerPersistenceBody:
            "O banco embutido fica dentro do contêiner. Adicione um volume para mantê-lo entre execuções:",
        dockerSqliteTitle: "Usando o banco embutido",
        dockerSqliteBody:
            "Por padrão, o app usa um banco SQLite embutido. Ele serve para experimentar, mas o PostgreSQL é recomendado para instalações de longo prazo.",
        composeTitle: "Produção com Docker Compose",
        composeBody:
            "O arquivo Compose de exemplo roda o nginx ignition junto com o PostgreSQL, com verificações de integridade e volumes persistentes. Revise e atualize todos os valores antes de implantar.",
        composeWarning:
            "Substitua a senha de banco de dados de exemplo por um valor forte antes de implantar.",
        composeDownload: "Ver o docker-compose.yml no GitHub",
        downloadsTitle: "Baixe a versão mais recente",
        downloadsSubtitle:
            "Pacotes nativos para Linux, Windows e macOS. Cada botão aponta sempre para os arquivos da versão mais recente.",
        downloadsFallbackNote:
            "Não foi possível acessar o GitHub agora, então os links apontam para a página de versões.",
        downloadsHint:
            "Não sabe qual escolher? O Docker é a opção mais simples em qualquer plataforma.",
        macosTitle: "macOS",
        macosNote: "Requer macOS 12 ou mais recente.",
        macosButton: "Baixar para macOS",
        macosArchNote: "Apple Silicon (arm64). Macs Intel: use Docker.",
        windowsTitle: "Windows",
        windowsNote:
            "Arquivo ZIP com a aplicação, a interface, as migrações e um arquivo de propriedades pronto para uso.",
        windowsX64: "Baixar para Windows (x64)",
        windowsArm64: "Baixar para Windows (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Pacotes nativos e arquivos genéricos, para amd64 e arm64.",
        linuxArchLabel: "Arquitetura",
        linuxFormatLabel: "Pacote",
        linuxDownload: "Baixar para Linux",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — arquivo genérico",
        },
        nativeTitle: "Instalações nativas",
        nativeSubtitle:
            "Para uma instalação permanente, baixe o pacote da sua plataforma e siga os passos abaixo.",
        nativeRequirements:
            "Requisitos: nginx instalado e acessível (com os módulos mod-http-js, mod-http-lua e mod-stream), porta 8090 disponível e direitos de administrador para a instalação do serviço.",
        nativeFullInstructions: "Instruções completas no GitHub",
        nativeUpgradeNote:
            "Atualização: pare o serviço, substitua o binário e os arquivos atualizados e inicie-o novamente. Os passos completos estão nas instruções.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Descompacte o arquivo e copie o conteúdo para /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Corrija as permissões e instale a unidade systemd fornecida.",
        nativeLinuxStep3:
            "Edite nginx-ignition.properties se necessário (por exemplo, o caminho do binário do nginx).",
        nativeLinuxStep4:
            "Habilite e inicie o serviço e libere o firewall (e o SELinux, se estiver em modo enforcing).",
        nativeLinuxStep5:
            "Abra http://your-host:8090 e conclua a configuração no navegador.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Descompacte o arquivo e copie o conteúdo para /opt/nginx-ignition.",
        nativeMacosStep2:
            "Corrija as permissões e instale o plist do launchd fornecido.",
        nativeMacosStep3:
            "Edite nginx-ignition.properties, apontando nginx.binary-path para o seu nginx (no Homebrew: /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Carregue e inicie o serviço e permita conexões de entrada no firewall.",
        nativeMacosStep5:
            "Abra http://your-host:8090 e conclua a configuração no navegador.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Extraia o arquivo ZIP para um diretório de sua preferência, como C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Edite nginx-ignition.properties e defina nginx.binary-path com o local do seu nginx.exe.",
        nativeWindowsStep3:
            "Execute nginx-ignition.exe em um prompt de Administrador.",
        nativeWindowsStep4:
            "Permita a porta 8090 no Firewall do Windows. Para rodar como serviço, use NSSM ou WinSW.",
        nativeWindowsStep5:
            "Abra http://localhost:8090 e conclua a configuração no navegador.",
        firstStepsTitle: "Depois de instalar",
        firstStepsSubtitle: "Uma lista rápida para aproveitar ao máximo:",
        firstSteps1: "Conclua o assistente de configuração e faça login.",
        firstSteps2:
            "Crie seu primeiro host virtual e adicione os nomes de domínio.",
        firstSteps3:
            "Emita um certificado SSL para o host, ou envie o seu próprio.",
        firstSteps4:
            "Explore as integrações (Docker, Swarm, TrueNAS) e as conexões VPN (Tailscale, NetBird).",
        firstStepsDocs: "Navegue pelos guias",
        firstStepsFeatures: "Veja tudo o que ele faz",
        helpTitle: "Algo não está funcionando?",
        helpBody:
            "O nginx ignition tem logs bem úteis: o primeiro passo é sempre verificar os logs da aplicação (o stdout do contêiner quando roda com Docker).",
        helpTroubleshooting: "Ler o guia de solução de problemas",
        helpIssues: "Abrir um problema",
        helpDiscussions: "Perguntar nas discussões",
    },
    features: {
        heroTitle: "Tudo do nginx, sem o terminal",
        heroSubtitle:
            "De hosts virtuais e certificados SSL a streams, logs e cache — as tarefas mais comuns do nginx, gerenciadas em uma interface limpa e moderna.",
        tours: {
            hosts: {
                title: "Hosts",
                bodies: [
                    "Um host virtual, ou host em resumo, é um site que o servidor nginx disponibilizará para ser aberto em um navegador. Você pode encontrar todos os hosts gerenciados à esquerda, no menu principal.",
                    "O nginx ignition fornece uma maneira intuitiva de configurar tais sites. Por exemplo, se você tem um NAS e possui alguns serviços rodando nele (como Jellyfin, Vaultwarden e mais), o ignition permite uma maneira fácil de acessá-lo a partir de um domínio como jellyfin.minhacasa.com, muito mais fácil de lembrar e usar do que um IP e porta.",
                    "Cada host terá um conjunto de rotas, que são regras que definem quais padrões de requisições devem ser encaminhados e para onde, e vínculos, que são as definições em quais portas o nginx deve ouvir tais requisições.",
                ],
            },
            streams: {
                title: "Streams",
                bodies: [
                    "Enquanto os hosts são a principal maneira de expor seus serviços baseados em HTTP e HTTPS, streams permitem que você exponha outros serviços que dependem de TCP, UDP e sockets unix.",
                    "Se você precisa expor um servidor de jogo, um banco de dados, um servidor DNS e qualquer outra coisa que não use o protocolo HTTP, streams são o caminho a seguir.",
                ],
            },
            ssl: {
                title: "Certificados SSL",
                bodies: [
                    "Se você quer ou precisa proteger seus domínios com criptografia HTTPS, o app vem com uma maneira fácil de gerenciar tais certificados SSL também.",
                    "Seja se você precisa de um certificado válido apoiado pelo Let's Encrypt, um autoassinado, ou trazer o seu personalizado de um provedor terceirizado, o ignition permitirá isso com facilidade. Mesmo quando o certificado estiver prestes a expirar, o app irá renová-lo automaticamente para você.",
                    "Uma vez que um certificado SSL é criado ou importado, você pode usá-lo nos hosts simplesmente selecionando uma opção no formulário.",
                ],
            },
            logs: {
                title: "Logs",
                bodies: [
                    "Precisa saber o que foi solicitado ou por que algo não está funcionando da maneira esperada? O nginx ignition fornece uma maneira simples para você verificar os logs do nginx também. Apenas selecione o host (ou o próprio servidor nginx) do qual você quer verificar o que está acontecendo, e nós buscaremos os logs para você.",
                    "E você não precisa se preocupar com seu disco ficando cheio de logs, o ignition irá rotacioná-los automaticamente para você (e você pode controlar quanto manter, ou até mesmo desabilitar a rotação se preferir).",
                ],
            },
            integrations: {
                title: "Integrações",
                bodies: [
                    "Seu app está rodando em um container Docker ou em um TrueNAS? Você pode habilitar a integração nativa que o nginx ignition oferece e facilmente escolher um container ou app como o destino para o qual o host deve encaminhar as requisições.",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "Exponha facilmente seus hosts em suas VPNs. Se você estiver usando Tailscale, o nginx ignition pode criar automaticamente uma máquina virtual em sua rede e encaminhar as requisições para o host sempre que o IP da máquina ou hostname for acessado.",
                ],
            },
            accessLists: {
                title: "Listas de acesso",
                bodies: [
                    "Listas de acesso fornecem uma maneira simples de proteger uma rota ou o host inteiro verificando se o usuário é de um intervalo de IPs autorizados ou é identificado por um nome de usuário e senha válidos (ou até mesmo ambos, IP e credenciais)",
                ],
            },
            caches: {
                title: "Configuração de cache",
                bodies: [
                    "Acelere seus sites e reduza a carga em seus servidores upstream habilitando os recursos de cache de conteúdo do nginx. O Ignition torna fácil configurar regras de cache que determinam quais requisições devem ser armazenadas em cache e por quanto tempo.",
                    "Você pode personalizar o comportamento do cache por códigos de status HTTP, extensões de arquivo, métodos de requisição e mais. Recursos avançados como tratamento de conteúdo obsoleto, atualizações em segundo plano e bloqueios de concorrência oferecem controle refinado sobre como seu conteúdo é armazenado e servido.",
                ],
            },
            settings: {
                title: "Configurações",
                bodies: [
                    "O Ignition abstrai a complexidade dos arquivos de configuração do nginx, mas isso não significa que você perde a capacidade de aplicar alguns ajustes finos.",
                    "Com a página de configurações, você pode definir algumas definições importantes como os valores de timeout, o tamanho máximo de upload/corpo das requisições, as portas padrão que o nginx ouvirá por requisições e mais.",
                    "Além disso, você também pode configurar alguns recursos do nginx ignition lá, como a renovação automática de certificados SSL e rotação de logs.",
                ],
            },
        },
        checklistTitle: "…e muito mais",
        checklistSubtitle:
            "Tudo o que está abaixo vem com o nginx ignition, pronto para usar.",
        checklist: {
            virtualHosts: {
                title: "Hosts virtuais",
                body: "Vários hosts com domínios personalizados, rotas e vínculos de porta.",
            },
            streams: {
                title: "Streams",
                body: "Faça proxy de TCP, UDP e sockets Unix com roteamento por SNI, circuit breakers e balanceamento de carga.",
            },
            routing: {
                title: "Roteamento versátil",
                body: "Proxies (incluindo upstreams gRPC/gRPCS), redirecionamentos, código JS/Lua personalizado, respostas estáticas e entrega de arquivos.",
            },
            serverConfiguration: {
                title: "Configuração do servidor",
                body: "Tamanho máximo de corpo/upload, tokens do servidor, timeouts, nível de log e mais.",
            },
            sslCertificates: {
                title: "Certificados SSL",
                body: "Let's Encrypt (ACME) automatizado, autoassinados ou traga os seus próprios certificados.",
            },
            integrations: {
                title: "Integrações nativas",
                body: "Suporte de primeira classe para Docker, Docker Swarm, VPNs Tailscale e NetBird, e TrueNAS.",
            },
            security: {
                title: "Segurança",
                body: "Autenticação de dois fatores, controle de acesso baseado em atributos e listas de acesso por host.",
            },
            apiTokens: {
                title: "Tokens de API",
                body: "Gere e revogue tokens para autenticar scripts e ferramentas externas.",
            },
            logging: {
                title: "Logs",
                body: "Logs detalhados de acesso e de erros do servidor e de cada host, com rotação automática.",
            },
            stats: {
                title: "Estatísticas de tráfego",
                body: "Taxas de requisições em tempo real, tempos de resposta e detalhamentos de tráfego por host e upstream.",
            },
            caching: {
                title: "Cache",
                body: "Configuração de cache do nginx integrada para acelerar a entrega de conteúdo.",
            },
            execution: {
                title: "Execução flexível",
                body: "Deixe o ignition rodar o nginx por você, ou apenas gere os arquivos de configuração.",
            },
        },
    },
    docs: {
        sidebarTitle: "Guias",
        overview: "Visão geral",
        fullReference: "Referência completa no GitHub",
        fullDoc: "Ver a documentação completa no GitHub",
        previous: "Anterior",
        next: "Próximo",
        heroTitle: "Documentação",
        heroSubtitle:
            "O essencial para instalar, configurar e operar o nginx ignition. Cada guia aponta para o documento completo no repositório do projeto.",
        guides: {
            configuration: {
                title: "Configuração",
                summary:
                    "Variáveis de ambiente, o arquivo de propriedades, PostgreSQL e o segredo JWT.",
            },
            "api-tokens": {
                title: "Tokens de API",
                summary:
                    "Autentique scripts e jobs de CI na API sem compartilhar uma senha.",
            },
            "health-checks": {
                title: "Verificações de integridade",
                summary:
                    "Endpoints de atividade e prontidão para Docker, Kubernetes e monitoramento.",
            },
            "backup-restore": {
                title: "Backup e restauração",
                summary:
                    "Como restaurar um backup do banco de dados, para SQLite e PostgreSQL.",
            },
            troubleshooting: {
                title: "Solução de problemas",
                summary: "Onde olhar primeiro, e como redefinir uma senha perdida.",
            },
        },
        referenceTitle: "Referência completa no GitHub",
        referenceBody:
            "Os guias aqui cobrem o essencial. As referências exaustivas são mantidas no repositório do projeto, em inglês:",
        reference: {
            config: {
                title: "Propriedades de configuração",
                body: "Todas as variáveis de ambiente e propriedades, com valores padrão.",
            },
            migration: {
                title: "Guia de migração",
                body: "Atualizando do nginx ignition 1.x para o 2.x.",
            },
            apiTokens: {
                title: "Tokens de API",
                body: "A documentação completa sobre tokens de API.",
            },
            healthChecks: {
                title: "Verificações de integridade",
                body: "Endpoints e cenários de uso.",
            },
            restore: {
                title: "Restauração do banco de dados",
                body: "O guia completo de restauração.",
            },
            troubleshooting: {
                title: "Solução de problemas",
                body: "Problemas comuns e passos de recuperação.",
            },
            screenshots: {
                title: "Galeria de capturas de tela",
                body: "Cada tela da aplicação, descrita.",
            },
            changelog: {
                title: "Registro de alterações",
                body: "O que mudou em cada versão.",
            },
            security: {
                title: "Política de segurança",
                body: "Como relatar vulnerabilidades.",
            },
        },
        helpTitle: "Obtenha ajuda",
        helpBody:
            "Encontrou um problema ou tem uma dúvida? Use as discussões e os relatos de problemas no GitHub — e é lá também que novas funcionalidades são sugeridas.",
        helpIssues: "Abrir um problema",
        helpDiscussions: "Iniciar uma discussão",
    },
    docPages: {
        configuration: {
            lead: "O nginx ignition é configurado por variáveis de ambiente ou por um arquivo de propriedades. Cada configuração tem uma única chave: como variável de ambiente, ela é maiúscula com sublinhados (NGINX_IGNITION_SERVER_PORT) e, no arquivo de propriedades, é minúscula com pontos (nginx-ignition.server.port).",
            envTitle: "Variáveis de ambiente principais",
            envBody:
                "O essencial para a maioria das instalações. Toda propriedade tem um valor padrão, então você normalmente define só o que precisa mudar.",
            envVarCol: "Variável",
            envDescriptionCol: "Descrição",
            envExampleCol: "Exemplo",
            envMore:
                "A referência completa lista todas as propriedades, com valores padrão e exemplos.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Porta em que o nginx ignition escuta requisições",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Endereço em que o nginx ignition escuta requisições",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Caminho para o binário do nginx a ser usado",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Onde os arquivos de configuração gerados do nginx são armazenados",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Tipo de banco de dados: sqlite ou postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Hostname ou IP do banco de dados",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Porta em que o banco de dados escuta",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Nome do banco de dados a ser usado",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Criptografa a conexão com o banco: require ou disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Usuário do banco de dados",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Senha do banco de dados",
                    example: "sua-senha",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Pasta onde o arquivo do banco SQLite é armazenado",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Segredo personalizado (exatamente 64 caracteres) para assinar tokens de autenticação; só é lido na primeira inicialização",
                    example: "(aleatória)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "Por quanto tempo um token de sessão permanece válido antes de a sessão ser encerrada por inatividade",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description:
                        "Ativa ou desativa os endpoints de verificação de integridade",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Redefine a senha deste usuário na inicialização e encerra; usado para recuperação",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (recomendado para produção)",
            postgresBody:
                "O banco SQLite embutido é ótimo para testes rápidos, mas instalações de longo prazo devem usar PostgreSQL. Aponte o ignition para o seu banco com as variáveis de banco:",
            postgresNote:
                "Todas as tabelas e índices necessários são criados automaticamente na primeira inicialização e atualizados automaticamente nas atualizações.",
            configFileTitle: "Arquivo de configuração",
            configFileBody:
                "As configurações também podem vir de um arquivo de propriedades, com as mesmas chaves em minúsculas e com pontos. O ignition lê, nesta ordem: o arquivo em NGINX_IGNITION_CONFIG_FILE_PATH, o caminho passado com --config, ou nginx-ignition.properties no diretório de trabalho.",
            jwtTitle: "Segredo JWT personalizado",
            jwtBody:
                "Por padrão, um segredo aleatório seguro é gerado e armazenado no banco de dados. Para usar o seu próprio, defina NGINX_IGNITION_SECURITY_JWT_SECRET com exatamente 64 caracteres antes da primeira inicialização. Está atualizando de uma versão que usava essa variável? Mantenha-a no lugar: o valor dela é armazenado no banco de dados na primeira inicialização após a atualização.",
        },
        apiTokens: {
            lead: "Os tokens de API permitem que scripts, jobs de CI e outras ferramentas se autentiquem na API do nginx ignition sem compartilhar seu nome de usuário e senha. Cada token pertence ao usuário que o criou e carrega as permissões desse usuário.",
            createTitle: "Criando um token",
            createStep1:
                "Abra o menu de usuário no canto superior direito da interface.",
            createStep2: "Mude para a aba Tokens de API.",
            createStep3: "Clique em Novo token.",
            createStep4:
                "Dê um nome a ele e, opcionalmente, uma data de expiração.",
            createStep5:
                "Clique em Criar token e copie o valor gerado — ele é exibido apenas uma vez.",
            createNote1:
                "O nome deve ser único entre os seus tokens e pode ter até 256 caracteres. Use algo descritivo, como ci-deploy ou home-assistant.",
            createNote2:
                "A data de expiração é opcional. Sem ela, o token nunca expira; quando definida, precisa estar no futuro e o token para de funcionar assim que esse momento passa.",
            createNote3:
                "O valor do token é exibido apenas uma vez, logo após a criação, e não pode ser recuperado depois. Se você perdê-lo, revogue o token e crie um novo.",
            useTitle: "Usando um token",
            useBody:
                "Envie o token no cabeçalho Authorization usando o esquema Bearer, exatamente como um token de sessão:",
            useError:
                "Um token inválido, revogado ou expirado recebe 401 Unauthorized; operações reservadas recebem 403 Forbidden.",
            useNote:
                "Os tokens de API autenticam apenas chamadas à API: entrar na interface web ainda exige nome de usuário e senha.",
            permissionsTitle: "Permissões",
            permissionsBody1:
                "Um token herda as permissões do usuário que o possui, e não há como restringi-las independentemente do dono.",
            permissionsBody2:
                "Se um token precisa de um conjunto diferente de permissões, crie um usuário de serviço dedicado com os níveis de acesso desejados e gere o token a partir dessa conta.",
            reservedTitle: "Operações reservadas",
            reservedBody:
                "Algumas operações são reservadas para sessões interativas e não podem ser feitas com um token:",
            reservedItem1: "Alterar o perfil ou a senha.",
            reservedItem2:
                "Ler, ativar ou desativar a autenticação de dois fatores.",
            reservedItem3: "Listar, criar ou revogar tokens de API.",
            reservedItem4:
                "Sair da conta (o que invalida apenas as sessões interativas).",
            reservedException:
                "Ler o próprio perfil com GET /api/users/current é a única exceção: tokens podem fazer isso.",
            lifecycleTitle: "Ciclo de vida do token",
            lifecycle1Title: "Sem renovação automática",
            lifecycle1Body:
                "Diferente das sessões web, tokens de API nunca são estendidos automaticamente; só a data de expiração de cada token importa.",
            lifecycle2Title: "Revogação imediata",
            lifecycle2Body:
                "Toda requisição verifica o token no banco de dados, então revogar um token o interrompe já na chamada seguinte.",
            lifecycle3Title: "Usuários desativados",
            lifecycle3Body:
                "Desativar um usuário faz os tokens dele pararem de funcionar, mas nada é excluído; reativar o usuário faz com que voltem a funcionar.",
            upgradeNote:
                "Atualizar de uma versão anterior à 2.47.0 desconecta todos os usuários uma vez, pois o formato do token mudou. Basta entrar de novo depois.",
        },
        healthChecks: {
            lead: "Os endpoints de verificação de integridade podem ser usados por plataformas de orquestração de contêineres (como o Docker) e sistemas de monitoramento para verificar o status e a disponibilidade da aplicação.",
            disableTitle: "Ativando e desativando",
            disableBody:
                "Os dois endpoints são ativados por padrão. Defina NGINX_IGNITION_HEALTH_CHECK_ENABLED como false para desativá-los.",
            endpointsTitle: "Endpoints",
            livenessTitle: "Endpoint de atividade",
            livenessBody:
                "Verifica se a aplicação está em execução e se seus componentes internos — como a conexão com o banco de dados — estão saudáveis.",
            livenessCode200: "200 OK: a aplicação está saudável",
            livenessCode503:
                "503 Service Unavailable: um ou mais componentes críticos estão com problemas",
            livenessExampleLabel: "Exemplo de resposta",
            readinessTitle: "Endpoint de prontidão",
            readinessBody:
                "Indica se a aplicação está pronta para receber tráfego — útil durante inicializações ou implantações.",
            readinessCode200: "200 OK: pronta para aceitar requisições",
            dockerTitle: "Docker Compose",
            dockerBody:
                "Use o endpoint de atividade em uma verificação de integridade do contêiner:",
            kubernetesTitle: "Sondas do Kubernetes",
            kubernetesBody: "Configure as duas sondas na sua implantação:",
        },
        backupRestore: {
            lead: "A página Exportação e backup gera um backup do banco de dados para download. Restaurá-lo funciona de forma diferente conforme o banco em uso: para SQLite você recebe um único arquivo .db (nginx-ignition.db), e para PostgreSQL um arquivo SQL simples (nginx-ignition.sql).",
            safetyTitle: "Antes de começar",
            safety1:
                "Pare a aplicação (ou o contêiner) para que nada escreva no banco de dados enquanto você o substitui.",
            safety2:
                "Mantenha sempre uma cópia extra do backup antes de sobrescrever qualquer coisa.",
            sqliteTitle: "Restaurando um banco SQLite",
            sqliteBody:
                "Isso vale quando o ignition roda com o banco SQLite embutido, o padrão para instalações novas. A imagem Docker oficial espera o arquivo em /opt/nginx-ignition/data/nginx-ignition.db; a variável NGINX_IGNITION_DATABASE_DATA_PATH muda essa pasta.",
            sqliteOptionATitle: "Copie o arquivo para dentro do contêiner em execução",
            sqliteOptionAStep1: "Encontre o nome do contêiner: docker ps",
            sqliteOptionAStep2: "Pare o app: docker stop <container>",
            sqliteOptionAStep3:
                "Copie o arquivo: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4: "Inicie o app de novo: docker start <container>",
            sqliteOptionBTitle:
                "Ou substitua o arquivo onde fica a pasta de dados",
            sqliteOptionBStep1: "Pare o contêiner.",
            sqliteOptionBStep2:
                "Copie o backup sobre o arquivo no seu ponto de montagem (ou volume).",
            sqliteOptionBStep3: "Inicie o contêiner de novo.",
            postgresTitle: "Restaurando um banco PostgreSQL",
            postgresBody:
                "Restaure o dump .sql com o cliente psql oficial. Isso pressupõe que o banco de destino existe, está vazio e que o usuário tem privilégios para criar os objetos do dump.",
            postgresStep1:
                "Pare o app para evitar escritas durante a restauração: docker stop <container>",
            postgresStep2: "Execute o psql apontando para o banco de destino.",
            postgresStep3: "Digite a senha do banco quando solicitado.",
            postgresStep4: "Inicie o app de novo.",
        },
        troubleshooting: {
            lead: "O nginx ignition foi projetado para ter logs úteis e esclarecedores. Se algo não está funcionando e o feedback na interface não é claro o suficiente, comece pelos logs da aplicação — com Docker, o stdout do contêiner.",
            logsLink: "Documentação de logs do Docker",
            passwordTitle: "Redefinição de senha",
            passwordBody:
                "Perdeu a senha? Defina a variável de ambiente abaixo no contêiner. Ela redefine a senha do usuário indicado na inicialização, imprime a nova senha aleatória nos logs e então encerra sem iniciar o app:",
            passwordNote:
                "A senha muda toda vez que o app roda com a variável definida, então execute uma vez, anote a nova senha e remova a variável.",
            helpTitle: "Ainda com problemas?",
            helpBody:
                "Se os logs e os guias daqui não resolverem, fale com a gente:",
            helpIssues: "Abrir um problema no GitHub",
            helpDiscussions: "Pergunte nas discussões",
        },
    },
    notFound: {
        title: "Página não encontrada",
        body: "A página que você procura não existe ou foi movida.",
        home: "Voltar para a página inicial",
        features: "Explorar os recursos",
        docs: "Navegar pela documentação",
    },
    footer: {
        tagline:
            "Uma interface web moderna e intuitiva para o servidor web nginx. Feita para desenvolvedores e entusiastas.",
        product: "Produto",
        releases: "Versões",
        community: "Comunidade",
        issues: "Problemas",
        discussions: "Discussões",
        linkedin: "LinkedIn",
        resources: "Recursos",
        configReference: "Referência de configuração",
        screenshots: "Galeria de capturas de tela",
        changelog: "Registro de alterações",
        security: "Política de segurança",
        license: "Licença MIT",
        madeWith: "Feito com ❤️ do Brasil",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default pt
