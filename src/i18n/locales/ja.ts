import type { Messages } from "./en"

const ja: Messages = {
    common: {
        getStarted: "はじめる",
        download: "ダウンロード",
        viewOnGitHub: "GitHubで見る",
        learnMore: "詳しく見る",
        readGuide: "ガイドを読む",
        copy: "コピー",
        copied: "コピーしました！",
        latestVersion: "最新バージョン",
        releasedOn: "{{date}} にリリース",
        releaseNotes: "リリースノート",
        browseReleases: "すべてのリリースを見る",
        seeAllFeatures: "すべての機能を見る",
        githubInEnglish: "GitHubの英語ページが開きます。",
        previous: "前へ",
        next: "次へ",
        goToSlide: "スライド{{index}}へ移動",
        starOnGitHub: "GitHubでスターを付ける",
    },
    nav: {
        label: "メインナビゲーション",
        features: "機能",
        docs: "ドキュメント",
        gettingStarted: "はじめに",
        github: "GitHub",
        openMenu: "メニューを開く",
        closeMenu: "メニューを閉じる",
    },
    languageSwitcher: {
        label: "言語を変更",
    },
    seo: {
        home: {
            title: "nginx ignition — nginxウェブサーバーのモダンなUI",
            description:
                "nginxウェブサーバーのためのモダンで直感的なウェブインターフェース。仮想ホスト、ストリーム、SSL証明書、統合などを、Dockerコマンド1つでインストールできます。無料のオープンソース。",
        },
        gettingStarted: {
            title: "はじめに — nginx ignition",
            description:
                "Docker、Docker Compose、またはLinux・Windows・macOS向けのネイティブパッケージでnginx ignitionをインストールできます。最新リリースをダウンロードしましょう。",
        },
        features: {
            title: "機能 — nginx ignition",
            description:
                "仮想ホスト、ストリーム、SSL証明書、セキュリティ、統合、ログ、トラフィック統計、キャッシュ — nginx ignitionのすべての機能をスクリーンショット付きで紹介します。",
        },
        docs: {
            title: "ドキュメント — nginx ignition",
            description:
                "nginx ignitionの設定と運用に関するガイド: 環境変数、APIトークン、ヘルスチェック、バックアップと復元、トラブルシューティング。",
        },
        docsConfiguration: {
            title: "設定 — nginx ignitionドキュメント",
            description:
                "環境変数またはプロパティファイルでnginx ignitionを設定。データベース、nginxのパス、JWTシークレットなど。",
        },
        docsApiTokens: {
            title: "APIトークン — nginx ignitionドキュメント",
            description:
                "スクリプトやツールをnginx ignition APIで認証するためのAPIトークンの作成・使用・無効化。",
        },
        docsHealthChecks: {
            title: "ヘルスチェック — nginx ignitionドキュメント",
            description:
                "Docker、Kubernetes、監視システム向けのライブネス/レディネスエンドポイント。",
        },
        docsBackupRestore: {
            title: "バックアップと復元 — nginx ignitionドキュメント",
            description:
                "SQLiteとPostgreSQLそれぞれでのnginx ignitionデータベースバックアップの復元方法。",
        },
        docsTroubleshooting: {
            title: "トラブルシューティング — nginx ignitionドキュメント",
            description:
                "問題が起きたときにまず確認すべき場所と、パスワードを忘れた場合のリセット方法。",
        },
        notFound: {
            title: "ページが見つかりません — nginx ignition",
            description: "お探しのページは存在しません。",
        },
    },
    home: {
        eyebrow: "オープンソース · セルフホスト · 多言語対応 · マルチプラットフォーム",
        title: "nginxを、設定ファイルの悩みから解放。",
        subtitle:
            "nginx ignitionは、nginxウェブサーバーのためのモダンで直感的なウェブインターフェースです。設定ファイルを手で編集せずに、強力なコントロールを求める開発者やホームラボユーザーのために作られました。",
        ctaPrimary: "はじめる",
        ctaSecondary: "GitHubで見る",
        ctaFeatures: "機能を見る",
        commandTitle: "コマンド1つで起動まで",
        commandNote:
            "数秒待って http://localhost:8090 を開くと、セットアップウィザードが最初のユーザーを作成します。",
        commandNoteDb:
            "試すだけであれば内蔵のSQLiteデータベースで十分ですが、本番環境にはPostgreSQLをおすすめします。",
        commandMore: "すべてのインストール方法を見る",
        highlightsTitle: "nginxのすべてを、ひとつの場所に",
        highlightsSubtitle:
            "よくあるユースケースに必要な機能を標準搭載 — 面倒な手動設定はもうありません。",
        highlights: {
            hosts: {
                title: "仮想ホストとルーティング",
                body: "カスタムドメイン、ルート、プロキシ（gRPC対応）、リダイレクト、カスタムJS/Lua、静的レスポンス。",
            },
            streams: {
                title: "ストリーム",
                body: "TCP、UDP、Unixソケットを、SNIルーティング、サーキットブレーカー、ロードバランシングでプロキシ。",
            },
            ssl: {
                title: "SSL証明書",
                body: "Let's Encrypt（ACME）の自動化、自己署名証明書、または手持ちの証明書を持ち込み可能。",
            },
            integrations: {
                title: "ネイティブ統合",
                body: "Docker、Docker Swarm、Tailscale、NetBird、TrueNASを本格サポート。",
            },
            security: {
                title: "セキュリティ",
                body: "二要素認証、ABAC、ホスト別アクセスリスト。スクリプトやツール向けのAPIトークンも。",
            },
            observability: {
                title: "ログ、統計、キャッシュ",
                body: "検索できるアクセスログとエラーログ、リアルタイムのトラフィック統計、nginxキャッシュ。",
            },
        },
        showcaseTitle: "クイックツアー",
        showcaseSubtitle:
            "どの画面も、シンプルでわかりやすく、役に立つように設計されています。",
        showcase: {
            dashboard: "ダッシュボード: リソース、nginxの状態、最近のエラー。",
        },
        goalsTitle: "開発者とホームラボユーザーのために",
        goalsBody1:
            "nginx ignitionは、使いやすさとnginxのパワーを両立させたい開発者や愛好家のために作られました。",
        goalsBody2:
            "高度に複雑な環境向けに、エンタープライズ対応や全機能の網羅を目指したものではありません。極めて高度なユースケースでは、設定ファイルを手動で管理する方が適しているでしょう。目標は、よくあるユースケースにおいて、強力かつ直感的にnginxを運用できる方法を提供することです。",
        goalsForTitle: "こんな用途に最適",
        goalsFor1: "ホームラボやセルフホスト環境",
        goalsFor2: "手動編集なしでコントロールしたい開発者",
        goalsFor3: "よくあるユースケースを手早く片付けたいとき",
        goalsNotTitle: "こんな用途には不向き",
        goalsNot1: "極めて複雑なエンタープライズ環境",
        goalsNot2: "すべてのnginxディレクティブの置き換え",
        goalsNot3: "多数のサーバーの一括管理",
        languagesTitle: "11言語に対応",
        languagesBody:
            "インターフェースは11言語に翻訳されており、ブラウザの言語に自動で追従します。ヘッダーの言語セレクターからいつでも切り替えられます。",
        ctaTitle: "試してみませんか？",
        ctaBody:
            "Dockerコマンド1つで試すか、お使いのプラットフォーム向けの最新リリースをダウンロードしてください。",
        ctaDiscussions: "ディスカッション",
        ctaIssues: "イシューを報告",
    },
    gettingStarted: {
        heroTitle: "nginx ignitionを動かす",
        heroSubtitle:
            "Dockerなら数秒で試せます。macOS、Windows、Linux向けのネイティブパッケージをダウンロードするか、本番環境向けのComposeファイルを使ってください。",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "ダウンロード",
        heroJumpNative: "ネイティブインストール",
        dockerTitle: "Dockerで手軽にお試し",
        dockerBody:
            "nginx ignitionの動作を最速で確かめる方法は、Dockerコマンド1つです。",
        dockerStep1: "以下のコマンドを実行します。",
        dockerStep2: "アプリが初期化されるまで数秒待ちます。",
        dockerStep3: "ブラウザで http://localhost:8090 を開きます。",
        dockerStep4:
            "セットアップウィザードに従って、最初のユーザーを作成します。",
        dockerPersistenceTitle: "データを永続化する",
        dockerPersistenceBody:
            "内蔵データベースはコンテナ内にあります。ボリュームを追加すると、実行のたびにデータが保持されます：",
        dockerSqliteTitle: "内蔵データベースを使う",
        dockerSqliteBody:
            "デフォルトでは、アプリは内蔵のSQLiteデータベースを使用します。試用には問題ありませんが、長期運用にはPostgreSQLをおすすめします。",
        composeTitle: "Docker Composeで本番運用",
        composeBody:
            "サンプルのComposeファイルは、ヘルスチェックと永続ボリューム付きで、nginx ignitionをPostgreSQLと一緒に実行します。デプロイ前にすべての値を確認して更新してください。",
        composeWarning:
            "デプロイ前に、プレースホルダーのデータベースパスワードを強力な値に置き換えてください。",
        composeDownload: "GitHubでdocker-compose.ymlを見る",
        downloadsTitle: "最新リリースをダウンロード",
        downloadsSubtitle:
            "Linux、Windows、macOS向けのネイティブパッケージ。各ボタンは常に最新リリースのアセットを指します。",
        downloadsFallbackNote:
            "現在GitHubに接続できないため、リンクはリリースページを指しています。",
        downloadsHint:
            "どれを選べばよいかわからない場合は、どのプラットフォームでもDockerが最も簡単です。",
        macosTitle: "macOS",
        macosNote: "macOS 12以降が必要です。",
        macosButton: "macOS版をダウンロード",
        macosArchNote: "Apple Silicon（arm64）。Intel Macの場合はDockerをご利用ください。",
        windowsTitle: "Windows",
        windowsNote:
            "アプリケーション、UI、マイグレーション、すぐに使えるプロパティファイルを含むZIPアーカイブ。",
        windowsX64: "Windows版をダウンロード（x64）",
        windowsArm64: "Windows版をダウンロード（arm64）",
        linuxTitle: "Linux",
        linuxNote: "amd64およびarm64向けのネイティブパッケージと汎用アーカイブ。",
        linuxArchLabel: "アーキテクチャ",
        linuxFormatLabel: "パッケージ",
        linuxDownload: "Linux版をダウンロード",
        linuxFormats: {
            deb: "deb — Debian、Ubuntu",
            rpm: "rpm — Fedora、RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — 汎用アーカイブ",
        },
        nativeTitle: "ネイティブインストール",
        nativeSubtitle:
            "恒久的にインストールする場合は、お使いのプラットフォーム向けのパッケージをダウンロードし、以下の手順に従ってください。",
        nativeRequirements:
            "要件: nginxがインストール済みでアクセス可能（mod-http-js、mod-http-lua、mod-streamモジュールが必要）、ポート8090が利用可能、サービスのインストールには管理者権限。",
        nativeFullInstructions: "GitHubで完全な手順を見る",
        nativeUpgradeNote:
            "アップグレード: サービスを停止し、バイナリと更新されたアセットを置き換えてから、再度起動します。詳細な手順は説明書に記載されています。",
        nativeLinuxTitle: "Linux（systemd）",
        nativeLinuxStep1:
            "アーカイブを解凍し、内容を /opt/nginx-ignition にコピーします。",
        nativeLinuxStep2:
            "パーミッションを適切に設定し、付属のsystemdユニットをインストールします。",
        nativeLinuxStep3:
            "必要に応じて nginx-ignition.properties を編集します（例: nginxバイナリのパス）。",
        nativeLinuxStep4:
            "サービスを有効化して起動し、ファイアウォール（SELinuxが有効な場合はSELinuxも）を開放します。",
        nativeLinuxStep5:
            "ブラウザで http://your-host:8090 を開き、セットアップを完了します。",
        nativeMacosTitle: "macOS（launchd）",
        nativeMacosStep1:
            "アーカイブを解凍し、内容を /opt/nginx-ignition にコピーします。",
        nativeMacosStep2:
            "パーミッションを適切に設定し、付属のlaunchd plistをインストールします。",
        nativeMacosStep3:
            "nginx-ignition.properties を編集し、nginx.binary-path をnginxの場所に設定します（Homebrewの場合: /opt/homebrew/bin/nginx）。",
        nativeMacosStep4:
            "サービスをロードして起動し、ファイアウォールで受信接続を許可します。",
        nativeMacosStep5:
            "ブラウザで http://your-host:8090 を開き、セットアップを完了します。",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "ZIPアーカイブを任意のディレクトリ（例: C:\\nginx-ignition）に展開します。",
        nativeWindowsStep2:
            "nginx-ignition.properties を編集し、nginx.binary-path にnginx.exeの場所を設定します。",
        nativeWindowsStep3:
            "管理者権限でコマンドプロンプトを開き、nginx-ignition.exe を実行します。",
        nativeWindowsStep4:
            "Windowsファイアウォールでポート8090を許可します。サービスとして実行するには、NSSMまたはWinSWを使用します。",
        nativeWindowsStep5:
            "ブラウザで http://localhost:8090 を開き、セットアップを完了します。",
        firstStepsTitle: "インストール後にやること",
        firstStepsSubtitle: "使いこなすための簡単なチェックリスト：",
        firstSteps1: "セットアップウィザードを完了してサインインします。",
        firstSteps2: "最初の仮想ホストを作成し、ドメイン名を追加します。",
        firstSteps3:
            "ホスト用のSSL証明書を発行するか、手持ちの証明書をアップロードします。",
        firstSteps4:
            "統合（Docker、Swarm、TrueNAS）とVPN接続（Tailscale、NetBird）を試してみましょう。",
        firstStepsDocs: "ガイド一覧を見る",
        firstStepsFeatures: "できることすべてを見る",
        helpTitle: "うまく動かないときは？",
        helpBody:
            "nginx ignitionには役立つログがあります。まずはアプリケーションのログ（Dockerで実行している場合はコンテナのstdout）を確認してください。",
        helpTroubleshooting: "トラブルシューティングガイドを読む",
        helpIssues: "イシューを作成",
        helpDiscussions: "ディスカッションで質問する",
    },
    features: {
        heroTitle: "ターミナルなしで、nginxのすべてを",
        heroSubtitle:
            "仮想ホストやSSL証明書から、ストリーム、ログ、キャッシュまで — よくあるnginxのタスクを、クリーンでモダンなインターフェースから管理できます。",
        tours: {
            hosts: {
                title: "ホスト一覧",
                bodies: [
                    "仮想ホスト（略してホスト）は、nginxサーバーがブラウザで開けるようにするWebサイトです。管理されているすべてのホストは、メインメニューの左側にあります。",
                    "nginx ignitionは、このようなWebサイトを設定するための直感的な方法を提供します。たとえば、NASがあり、その上でいくつかのサービス（Jellyfin、Vaultwardenなど）を実行している場合、ignitionを使用すると、IPとポートよりもはるかに覚えやすく使いやすい jellyfin.myhome.com のようなドメインから簡単にアクセスできます。",
                    "各ホストには、どのリクエストパターンをどこに転送するかを定義するルールであるルートと、nginxがそのようなリクエストをリッスンするポートの定義であるバインディングのセットがあります。",
                ],
            },
            streams: {
                title: "ストリーム一覧",
                bodies: [
                    "ホストはHTTPおよびHTTPSベースのサービスを公開する主な方法ですが、ストリームを使用すると、TCP、UDP、およびUnixソケットに依存する他のサービスを公開できます。",
                    "ゲームサーバー、データベース、DNSサーバーなど、HTTPプロトコルを使用しないものを公開する必要がある場合は、ストリームが適しています。",
                ],
            },
            ssl: {
                title: "SSL証明書",
                bodies: [
                    "ドメインをHTTPS暗号化で保護したい、または保護する必要がある場合、アプリにはそのようなSSL証明書を管理する簡単な方法も付属しています。",
                    "Let's Encryptによる有効な証明書、自己署名証明書、またはサードパーティプロバイダーのカスタム証明書を持ち込む必要がある場合でも、ignitionを使用すると簡単に許可できます。証明書の有効期限が切れそうになっても、アプリが自動的に更新します。",
                    "SSL証明書が作成またはインポートされたら、フォームのオプションを選択するだけでホストで使用できます。",
                ],
            },
            logs: {
                title: "ログ",
                bodies: [
                    "何が要求されたか、またはなぜ何かが期待どおりに機能しないのかを知る必要がありますか？nginx ignitionは、nginxログを確認するための簡単な方法も提供します。何が起こっているかを確認したいホスト（またはnginxサーバー自体）を選択するだけで、ログを取得します。",
                    "また、ディスクがログでいっぱいになることを心配する必要はありません。ignitionは自動的にログをローテーションします（保持する量を制御したり、必要に応じてローテーションを無効にしたりすることもできます）。",
                ],
            },
            integrations: {
                title: "統合一覧",
                bodies: [
                    "アプリはDockerコンテナまたはTrueNASで実行されていますか？nginx ignitionが提供するネイティブ統合を有効にして、ホストがリクエストを転送する宛先アプリとしてコンテナまたはアプリを簡単に選択できます。",
                ],
            },
            vpn: {
                title: "VPN一覧",
                bodies: [
                    "VPNでホストを簡単に公開できます。Tailscaleを使用している場合、nginx ignitionはネットワーク内に仮想マシンを自動的に作成し、マシンのIPまたはホスト名がアクセスされるたびにリクエストをホストに転送できます。",
                ],
            },
            accessLists: {
                title: "アクセスリスト一覧",
                bodies: [
                    "アクセスリストは、ユーザーが許可されたIP範囲からのアクセスであるか、有効なユーザー名とパスワードで識別されているか（またはIPと認証情報の両方）を確認することで、ルートまたはホスト全体を保護する簡単な方法を提供します。",
                ],
            },
            caches: {
                title: "キャッシュ設定",
                bodies: [
                    "nginxのコンテンツキャッシュ機能を有効にすることで、Webサイトを高速化し、アップストリームサーバーの負荷を軽減します。Ignitionを使用すると、どのリクエストをどのくらいの期間キャッシュするかを決定するキャッシュルールを簡単に設定できます。",
                    "HTTPステータスコード、ファイル拡張子、リクエストメソッドなどによってキャッシュの動作をカスタマイズできます。古いコンテンツの処理、バックグラウンド更新、同時実行ロックなどの高度な機能により、コンテンツのキャッシュと提供方法を細かく制御できます。",
                ],
            },
            settings: {
                title: "設定",
                bodies: [
                    "Ignitionはnginxの設定ファイルの複雑さを抽象化しますが、だからといって微調整を適用する機能が失われるわけではありません。",
                    "設定ページでは、タイムアウト値、リクエストの最大アップロード/ボディサイズ、nginxがリクエストをリッスンするデフォルトポートなどの重要な定義を定義できます。",
                    "さらに、SSL証明書の自動更新やログローテーションなど、nginx ignitionの機能の一部をそこで設定することもできます。",
                ],
            },
        },
        checklistTitle: "…その他にも",
        checklistSubtitle:
            "以下はすべて、nginx ignitionに最初から備わっています。",
        checklist: {
            virtualHosts: {
                title: "仮想ホスト",
                body: "カスタムドメイン、ルート、ポートバインディングを備えた複数のホスト。",
            },
            streams: {
                title: "ストリーム",
                body: "SNIベースのルーティング、サーキットブレーカー、ロードバランシングを備えたTCP、UDP、Unixソケットのプロキシ。",
            },
            routing: {
                title: "多彩なルーティング",
                body: "プロキシ（gRPC/gRPCSアップストリーム含む）、リダイレクト、カスタムJS/Luaコード、静的レスポンス、ファイル配信。",
            },
            serverConfiguration: {
                title: "サーバー設定",
                body: "最大ボディ/アップロードサイズ、サーバートークン、タイムアウト、ログレベルなど。",
            },
            sslCertificates: {
                title: "SSL証明書",
                body: "Let's Encrypt（ACME）の自動化、自己署名証明書、または手持ちの証明書を持ち込み可能。",
            },
            integrations: {
                title: "ネイティブ統合",
                body: "Docker、Docker Swarm、TailscaleとNetBirdのVPN、そしてTrueNASを本格サポート。",
            },
            security: {
                title: "セキュリティ",
                body: "二要素認証、属性ベースのアクセス制御（ABAC）、ホスト別アクセスリスト。",
            },
            apiTokens: {
                title: "APIトークン",
                body: "スクリプトや外部ツールの認証用にトークンを生成・無効化できます。",
            },
            logging: {
                title: "ログ",
                body: "サーバー全体とホストごとの詳細なアクセスログ・エラーログ、自動ローテーション付き。",
            },
            stats: {
                title: "トラフィック統計",
                body: "リアルタイムのリクエストレート、応答時間、ホスト別・アップストリーム別のトラフィック内訳。",
            },
            caching: {
                title: "キャッシュ",
                body: "コンテンツ配信を高速化する内蔵のnginxキャッシュ設定。",
            },
            execution: {
                title: "柔軟な実行",
                body: "ignitionにnginxの実行を任せることも、設定ファイルを生成するだけでも。",
            },
        },
    },
    docs: {
        sidebarTitle: "ガイド",
        overview: "概要",
        fullReference: "GitHubで完全なリファレンス",
        fullDoc: "GitHubで完全なドキュメントを見る",
        previous: "前へ",
        next: "次へ",
        heroTitle: "ドキュメント",
        heroSubtitle:
            "nginx ignitionのインストール、設定、運用に必要な要点をまとめています。各ガイドは、プロジェクトリポジトリにある完全なドキュメントへリンクしています。",
        guides: {
            configuration: {
                title: "設定",
                summary:
                    "環境変数、プロパティファイル、PostgreSQL、JWTシークレット。",
            },
            "api-tokens": {
                title: "APIトークン",
                summary:
                    "パスワードを共有せずに、スクリプトやCIジョブをAPIで認証します。",
            },
            "health-checks": {
                title: "ヘルスチェック",
                summary:
                    "Docker、Kubernetes、監視システム向けのライブネス/レディネスエンドポイント。",
            },
            "backup-restore": {
                title: "バックアップと復元",
                summary:
                    "SQLiteとPostgreSQLそれぞれでのデータベースバックアップの復元方法。",
            },
            troubleshooting: {
                title: "トラブルシューティング",
                summary:
                    "まずどこを見るべきか、そしてパスワードを忘れた場合のリセット方法。",
            },
        },
        referenceTitle: "GitHubで完全なリファレンス",
        referenceBody:
            "ここにあるガイドは要点を扱っています。網羅的なリファレンスは、プロジェクトリポジトリで英語で管理されています：",
        reference: {
            config: {
                title: "設定プロパティ",
                body: "すべての環境変数とプロパティを、デフォルト値付きで。",
            },
            migration: {
                title: "移行ガイド",
                body: "nginx ignition 1.xから2.xへのアップグレード。",
            },
            apiTokens: {
                title: "APIトークン",
                body: "APIトークンの完全なドキュメント。",
            },
            healthChecks: {
                title: "ヘルスチェック",
                body: "エンドポイントと利用シナリオ。",
            },
            restore: {
                title: "データベースの復元",
                body: "復元の完全ガイド。",
            },
            troubleshooting: {
                title: "トラブルシューティング",
                body: "よくある問題と復旧手順。",
            },
            screenshots: {
                title: "スクリーンショットギャラリー",
                body: "アプリケーションの全画面を解説。",
            },
            changelog: {
                title: "変更履歴",
                body: "リリースごとの変更点。",
            },
            security: {
                title: "セキュリティポリシー",
                body: "脆弱性の報告方法。",
            },
        },
        helpTitle: "困ったときは",
        helpBody:
            "問題が見つかった、または質問がある場合は、GitHubのイシューとディスカッションをご利用ください。機能リクエストもここで受け付けています。",
        helpIssues: "イシューを作成",
        helpDiscussions: "ディスカッションを開始",
    },
    docPages: {
        configuration: {
            lead: "nginx ignitionは、環境変数またはプロパティファイルで設定します。すべての設定に共通するキーの書き方があり、環境変数では大文字とアンダースコア（NGINX_IGNITION_SERVER_PORT）、プロパティファイルでは小文字とドット（nginx-ignition.server.port）を使います。",
            envTitle: "主要な環境変数",
            envBody:
                "ほとんどのインストールで必要な基本設定です。すべてのプロパティにはデフォルト値があるため、通常は変更したい項目だけを設定すれば十分です。",
            envVarCol: "変数",
            envDescriptionCol: "説明",
            envExampleCol: "例",
            envMore:
                "完全なリファレンスでは、すべてのプロパティをデフォルト値と例付きで確認できます。",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "nginx ignitionがリクエストを待ち受けるポート",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "nginx ignitionがリクエストを待ち受けるアドレス",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "使用するnginxバイナリのパス",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "生成されたnginx設定ファイルの保存先",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "データベースの種類: sqlite または postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "データベースのホスト名またはIP",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "データベースが待ち受けるポート",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "使用するデータベース名",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "データベース接続の暗号化: require または disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "データベースのユーザー名",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "データベースのパスワード",
                    example: "パスワード",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "SQLiteデータベースファイルの保存フォルダー",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "認証トークンの署名用カスタムシークレット（正確に64文字）。最初の起動時のみ読み込まれます",
                    example: "（ランダム）",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "無操作によるログアウトまで、セッショントークンが有効な時間",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "ヘルスチェックエンドポイントの有効/無効",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "起動時にこのユーザーのパスワードをリセットして終了します。復旧用",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL（本番環境に推奨）",
            postgresBody:
                "内蔵のSQLiteデータベースは手軽なテストに最適ですが、長期運用ではPostgreSQLを使用することをおすすめします。データベース用の変数で、ignitionをデータベースに接続します：",
            postgresNote:
                "必要なテーブルとインデックスはすべて初回起動時に自動作成され、アップグレード時には自動更新されます。",
            configFileTitle: "設定ファイル",
            configFileBody:
                "設定はプロパティファイルからも読み込めます（同じキーを小文字とドットで表記）。ignitionは以下の順に読み込みます: NGINX_IGNITION_CONFIG_FILE_PATH が指すファイル、--config で指定されたパス、作業ディレクトリの nginx-ignition.properties。",
            jwtTitle: "カスタムJWTシークレット",
            jwtBody:
                "デフォルトでは、安全なランダムシークレットが生成され、データベースに保存されます。独自のものを使用する場合は、初回起動の前に NGINX_IGNITION_SECURITY_JWT_SECRET に正確に64文字の値を設定してください。この変数を使用していたバージョンからアップグレードする場合は、そのまま残しておいてください。アップグレード後の初回起動時に、値がデータベースに保存されます。",
        },
        apiTokens: {
            lead: "APIトークンを使うと、ユーザー名とパスワードを共有することなく、スクリプトやCIジョブ、その他のツールをnginx ignition APIで認証できます。各トークンは作成したユーザーに属し、そのユーザーの権限を引き継ぎます。",
            createTitle: "トークンの作成",
            createStep1:
                "インターフェース右上のユーザーメニューを開きます。",
            createStep2: "「APIトークン」タブに切り替えます。",
            createStep3: "「新しいトークン」をクリックします。",
            createStep4: "名前を付け、必要に応じて有効期限を設定します。",
            createStep5:
                "「トークンを作成」をクリックし、生成された値をコピーします。値は一度しか表示されません。",
            createNote1:
                "名前は自分のトークンの中で一意である必要があり、最大256文字まで使用できます。ci-deploy や home-assistant のようなわかりやすい名前を付けてください。",
            createNote2:
                "有効期限は任意です。設定しない場合、トークンは無期限になります。設定する場合は将来の日時を指定する必要があり、その日時を過ぎるとトークンは機能しなくなります。",
            createNote3:
                "トークンの値は作成直後に一度だけ表示され、後から復元することはできません。紛失した場合は、トークンを無効化して新しいものを作成してください。",
            useTitle: "トークンの使用",
            useBody:
                "セッショントークンとまったく同じように、Bearerスキームを使い、Authorizationヘッダーでトークンを送信します：",
            useError:
                "無効、失効、期限切れのトークンには 401 Unauthorized が返されます。予約された操作には 403 Forbidden が返されます。",
            useNote:
                "APIトークンが認証できるのはAPI呼び出しのみです。ウェブインターフェースへのログインには引き続きユーザー名とパスワードが必要です。",
            permissionsTitle: "権限",
            permissionsBody1:
                "トークンは所有ユーザーの権限を継承し、所有者とは別に権限を絞り込む方法はありません。",
            permissionsBody2:
                "異なる権限セットが必要な場合は、目的のアクセスレベルを持つ専用のサービスユーザーを作成し、そのアカウントからトークンを生成してください。",
            reservedTitle: "予約された操作",
            reservedBody:
                "一部の操作は対話型セッション専用で、トークンでは実行できません：",
            reservedItem1: "プロフィールまたはパスワードの変更。",
            reservedItem2:
                "二要素認証の読み取り、有効化、無効化。",
            reservedItem3: "APIトークンの一覧表示、作成、無効化。",
            reservedItem4:
                "ログアウト（対話型セッションのみを無効化します）。",
            reservedException:
                "唯一の例外は GET /api/users/current での自分のプロフィールの読み取りで、トークンでも実行できます。",
            lifecycleTitle: "トークンのライフサイクル",
            lifecycle1Title: "自動更新なし",
            lifecycle1Body:
                "ウェブセッションとは異なり、APIトークンが自動で延長されることはありません。関係するのはトークンごとの有効期限だけです。",
            lifecycle2Title: "即時失効",
            lifecycle2Body:
                "すべてのリクエストでデータベースに対してトークンが確認されるため、無効化すると次の呼び出しから機能しなくなります。",
            lifecycle3Title: "無効化されたユーザー",
            lifecycle3Body:
                "ユーザーを無効化すると、そのユーザーのトークンは機能しなくなりますが、何も削除されません。再度有効化すると機能が戻ります。",
            upgradeNote:
                "2.47.0より古いバージョンからアップグレードすると、トークン形式の変更により、すべてのユーザーが一度サインアウトされます。その後、もう一度サインインするだけです。",
        },
        healthChecks: {
            lead: "ヘルスチェックエンドポイントは、コンテナオーケストレーションプラットフォーム（Dockerなど）や監視システムが、アプリケーションの状態と可用性を確認するために使用できます。",
            disableTitle: "有効化と無効化",
            disableBody:
                "両方のエンドポイントはデフォルトで有効です。無効にするには、NGINX_IGNITION_HEALTH_CHECK_ENABLED を false に設定します。",
            endpointsTitle: "エンドポイント",
            livenessTitle: "ライブネスエンドポイント",
            livenessBody:
                "アプリケーションが実行中で、その内部コンポーネント（データベース接続など）が正常であることを確認します。",
            livenessCode200: "200 OK: アプリケーションは正常",
            livenessCode503:
                "503 Service Unavailable: 1つ以上の重要なコンポーネントが異常",
            livenessExampleLabel: "レスポンスの例",
            readinessTitle: "レディネスエンドポイント",
            readinessBody:
                "アプリケーションがトラフィックを受け入れる準備ができているかを示します。起動時やデプロイ時に役立ちます。",
            readinessCode200: "200 OK: リクエストを受け入れ可能",
            dockerTitle: "Docker Compose",
            dockerBody: "コンテナのヘルスチェックでライブネスエンドポイントを使用します：",
            kubernetesTitle: "Kubernetesプローブ",
            kubernetesBody: "デプロイメントで両方のプローブを設定します：",
        },
        backupRestore: {
            lead: "「エクスポートとバックアップ」ページでは、ダウンロード可能なデータベースバックアップを生成できます。復元方法は使用中のデータベースによって異なります。SQLiteの場合は単一の.dbファイル（nginx-ignition.db）、PostgreSQLの場合はプレーンなSQLファイル（nginx-ignition.sql）になります。",
            safetyTitle: "はじめる前に",
            safety1:
                "データベースを置き換えている間に書き込みが発生しないよう、アプリケーション（またはそのコンテナ）を停止します。",
            safety2:
                "何かを上書きする前に、必ずバックアップの予備コピーを保管してください。",
            sqliteTitle: "SQLiteデータベースの復元",
            sqliteBody:
                "これは、新規インストール時のデフォルトである内蔵SQLiteデータベースでignitionを実行している場合に該当します。公式Dockerイメージは /opt/nginx-ignition/data/nginx-ignition.db にファイルがあることを前提としています。NGINX_IGNITION_DATABASE_DATA_PATH 変数でそのフォルダーを変更できます。",
            sqliteOptionATitle: "実行中のコンテナにファイルをコピーする",
            sqliteOptionAStep1: "コンテナ名を確認: docker ps",
            sqliteOptionAStep2: "アプリを停止: docker stop <container>",
            sqliteOptionAStep3:
                "ファイルをコピー: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "アプリを再起動: docker start <container>",
            sqliteOptionBTitle:
                "または、データフォルダーがある場所でファイルを置き換える",
            sqliteOptionBStep1: "コンテナを停止します。",
            sqliteOptionBStep2:
                "バインドマウント（またはボリューム）内のファイルにバックアップを上書きコピーします。",
            sqliteOptionBStep3: "コンテナを再起動します。",
            postgresTitle: "PostgreSQLデータベースの復元",
            postgresBody:
                "公式のpsqlクライアントで.sqlダンプを復元します。これは、対象のデータベースが存在し、空であり、ユーザーがダンプ内のオブジェクトを作成する権限を持っていることを前提としています。",
            postgresStep1:
                "復元中の書き込みを避けるため、アプリを停止: docker stop <container>",
            postgresStep2: "対象のデータベースを指定してpsqlを実行します。",
            postgresStep3: "プロンプトが表示されたらデータベースのパスワードを入力します。",
            postgresStep4: "アプリを再起動します。",
        },
        troubleshooting: {
            lead: "nginx ignitionは、役立つログを備えるように設計されています。何かが動かず、インターフェースのフィードバックが十分に明確でない場合は、まずアプリケーションのログを確認してください。Dockerの場合は、コンテナのstdoutです。",
            logsLink: "Dockerのログに関するドキュメント",
            passwordTitle: "パスワードのリセット",
            passwordBody:
                "パスワードを忘れた場合は、コンテナに以下の環境変数を設定してください。起動時に対象ユーザーのパスワードをリセットし、新しいランダムパスワードをログに出力したうえで、アプリを起動せずに終了します：",
            passwordNote:
                "変数を設定してアプリを実行するたびにパスワードは変わるため、一度実行して新しいパスワードを控えたら、変数を削除してください。",
            helpTitle: "まだ解決しない場合",
            helpBody:
                "ログとここのガイドで解決しない場合は、お問い合わせください：",
            helpIssues: "GitHubでイシューを作成",
            helpDiscussions: "ディスカッションで質問する",
        },
    },
    notFound: {
        title: "ページが見つかりません",
        body: "お探しのページは存在しないか、移動しました。",
        home: "ホームページに戻る",
        features: "機能を見る",
        docs: "ドキュメントを見る",
    },
    footer: {
        tagline:
            "nginxウェブサーバーのためのモダンで直感的なウェブインターフェース。開発者と愛好家のために。",
        product: "プロダクト",
        releases: "リリース",
        community: "コミュニティ",
        issues: "イシュー",
        discussions: "ディスカッション",
        linkedin: "LinkedIn",
        resources: "リソース",
        configReference: "設定リファレンス",
        screenshots: "スクリーンショットギャラリー",
        changelog: "変更履歴",
        security: "セキュリティポリシー",
        license: "MITライセンス",
        madeWith: "ブラジルから ❤️ を込めて",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default ja
