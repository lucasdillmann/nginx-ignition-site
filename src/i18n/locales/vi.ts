import type { Messages } from "./en"

const vi: Messages = {
    common: {
        getStarted: "Bắt đầu",
        download: "Tải xuống",
        viewOnGitHub: "Xem trên GitHub",
        learnMore: "Tìm hiểu thêm",
        readGuide: "Đọc hướng dẫn",
        copy: "Sao chép",
        copied: "Đã sao chép!",
        latestVersion: "Phiên bản mới nhất",
        releasedOn: "phát hành ngày {{date}}",
        releaseNotes: "Ghi chú phát hành",
        browseReleases: "Xem tất cả bản phát hành",
        seeAllFeatures: "Xem tất cả tính năng",
        githubInEnglish: "Mở trên GitHub, bằng tiếng Anh.",
        previous: "Trước",
        next: "Tiếp",
        goToSlide: "Chuyển đến slide {{index}}",
        starOnGitHub: "Gắn sao trên GitHub",
    },
    nav: {
        label: "Điều hướng chính",
        features: "Tính năng",
        docs: "Tài liệu",
        gettingStarted: "Bắt đầu",
        github: "GitHub",
        openMenu: "Mở menu",
        closeMenu: "Đóng menu",
    },
    languageSwitcher: {
        label: "Đổi ngôn ngữ",
    },
    seo: {
        home: {
            title: "nginx ignition — Giao diện hiện đại cho máy chủ web nginx",
            description:
                "Giao diện web hiện đại, trực quan cho máy chủ web nginx. Host ảo, stream, chứng chỉ SSL, các tích hợp và nhiều hơn nữa — cài đặt chỉ với một lệnh Docker. Miễn phí và mã nguồn mở.",
        },
        gettingStarted: {
            title: "Bắt đầu — nginx ignition",
            description:
                "Cài đặt nginx ignition bằng Docker, Docker Compose hoặc gói native cho Linux, Windows và macOS. Tải phiên bản mới nhất.",
        },
        features: {
            title: "Tính năng — nginx ignition",
            description:
                "Host ảo, stream, chứng chỉ SSL, bảo mật, các tích hợp, nhật ký, thống kê lưu lượng và bộ nhớ đệm — mọi thứ nginx ignition làm được, kèm ảnh chụp màn hình.",
        },
        docs: {
            title: "Tài liệu — nginx ignition",
            description:
                "Hướng dẫn cấu hình và vận hành nginx ignition: biến môi trường, token API, health check, sao lưu và khôi phục, xử lý sự cố.",
        },
        docsConfiguration: {
            title: "Cấu hình — tài liệu nginx ignition",
            description:
                "Cấu hình nginx ignition bằng biến môi trường hoặc tệp properties: cơ sở dữ liệu, đường dẫn nginx, JWT secret và nhiều hơn nữa.",
        },
        docsApiTokens: {
            title: "Token API — tài liệu nginx ignition",
            description:
                "Tạo, sử dụng và thu hồi token API để xác thực script và công cụ với API nginx ignition.",
        },
        docsHealthChecks: {
            title: "Health check — tài liệu nginx ignition",
            description:
                "Các endpoint liveness và readiness cho Docker, Kubernetes và hệ thống giám sát.",
        },
        docsBackupRestore: {
            title: "Sao lưu và khôi phục — tài liệu nginx ignition",
            description:
                "Cách khôi phục bản sao lưu cơ sở dữ liệu nginx ignition, cho SQLite và PostgreSQL.",
        },
        docsTroubleshooting: {
            title: "Xử lý sự cố — tài liệu nginx ignition",
            description:
                "Nên tìm ở đâu trước tiên khi có sự cố, và cách đặt lại mật khẩu bị mất.",
        },
        notFound: {
            title: "Không tìm thấy trang — nginx ignition",
            description: "Trang bạn đang tìm không tồn tại.",
        },
    },
    home: {
        eyebrow: "Mã nguồn mở · Tự lưu trữ · Đa ngôn ngữ · Đa nền tảng",
        title: "nginx, không còn đau đầu vì cấu hình.",
        subtitle:
            "nginx ignition là giao diện web hiện đại, trực quan cho máy chủ web nginx — dành cho lập trình viên và người dùng homelab muốn kiểm soát mạnh mẽ mà không phải sửa tệp cấu hình bằng tay.",
        ctaPrimary: "Bắt đầu",
        ctaSecondary: "Xem trên GitHub",
        ctaFeatures: "Khám phá tính năng",
        commandTitle: "Chạy lên chỉ với một lệnh",
        commandNote:
            "Đợi vài giây, mở http://localhost:8090 và để trình hướng dẫn thiết lập tạo người dùng đầu tiên của bạn.",
        commandNoteDb:
            "Cơ sở dữ liệu SQLite tích hợp là đủ để dùng thử; PostgreSQL được khuyến nghị cho production.",
        commandMore: "Xem tất cả cách cài đặt",
        highlightsTitle: "Mọi thứ về nginx, ở cùng một chỗ",
        highlightsSubtitle:
            "Đầy đủ tiện ích cho những trường hợp sử dụng phổ biến nhất — không còn đau đầu vì cấu hình thủ công.",
        highlights: {
            hosts: {
                title: "Host ảo & định tuyến",
                body: "Tên miền tùy chỉnh, route, proxy (bao gồm gRPC), chuyển hướng, JS/Lua tùy chỉnh và phản hồi tĩnh.",
            },
            streams: {
                title: "Các Stream",
                body: "Proxy TCP, UDP và Unix socket với định tuyến SNI, ngắt mạch và cân bằng tải.",
            },
            ssl: {
                title: "Chứng chỉ SSL",
                body: "Let's Encrypt (ACME) tự động, tự ký hoặc dùng chứng chỉ của riêng bạn.",
            },
            integrations: {
                title: "Tích hợp native",
                body: "Hỗ trợ hạng nhất cho Docker, Docker Swarm, Tailscale, NetBird và TrueNAS.",
            },
            security: {
                title: "Bảo mật",
                body: "Xác thực hai yếu tố, ABAC và danh sách truy cập theo từng host. Token API cho script và công cụ của bạn.",
            },
            observability: {
                title: "Nhật ký, thống kê & bộ nhớ đệm",
                body: "Nhật ký truy cập và lỗi với tìm kiếm, thống kê lưu lượng thời gian thực và bộ nhớ đệm nginx.",
            },
        },
        showcaseTitle: "Xem nhanh",
        showcaseSubtitle:
            "Mọi màn hình đều được thiết kế đơn giản, rõ ràng và hữu ích.",
        showcase: {
            dashboard: "Bảng điều khiển: tài nguyên, trạng thái nginx và lỗi gần đây.",
        },
        goalsTitle: "Dành cho lập trình viên và người dùng homelab",
        goalsBody1:
            "nginx ignition được xây dựng cho lập trình viên và những người đam mê muốn cân bằng giữa sự dễ sử dụng và sức mạnh của nginx.",
        goalsBody2:
            "Nó không nhắm đến việc sẵn sàng cho doanh nghiệp hay đầy đủ tính năng cho những môi trường cực kỳ phức tạp: nếu trường hợp sử dụng của bạn quá nâng cao, có lẽ bạn sẽ thích tự quản lý tệp cấu hình hơn. Mục tiêu là một cách mạnh mẽ nhưng vẫn trực quan để chạy nginx cho những trường hợp phổ biến nhất.",
        goalsForTitle: "Dành cho",
        goalsFor1: "Homelab và các thiết lập tự lưu trữ",
        goalsFor2: "Lập trình viên muốn kiểm soát mà không phải sửa thủ công",
        goalsFor3: "Các trường hợp sử dụng phổ biến, làm nhanh gọn",
        goalsNotTitle: "Không dành cho",
        goalsNot1: "Môi trường cực kỳ phức tạp, chuẩn doanh nghiệp",
        goalsNot2: "Thay thế mọi directive của nginx",
        goalsNot3: "Quản lý hàng loạt máy chủ",
        languagesTitle: "Có sẵn trong 11 ngôn ngữ",
        languagesBody:
            "Giao diện được dịch sang 11 ngôn ngữ và tự động theo ngôn ngữ trình duyệt của bạn. Bạn có thể chuyển đổi bất cứ lúc nào bằng bộ chọn ngôn ngữ ở đầu trang.",
        ctaTitle: "Sẵn sàng dùng thử chưa?",
        ctaBody:
            "Dùng thử chỉ với một lệnh Docker, hoặc tải phiên bản mới nhất cho nền tảng của bạn.",
        ctaDiscussions: "Thảo luận",
        ctaIssues: "Báo lỗi",
    },
    gettingStarted: {
        heroTitle: "Chạy nginx ignition",
        heroSubtitle:
            "Dùng thử với Docker trong vài giây, tải gói native cho macOS, Windows hoặc Linux, hoặc dùng tệp Compose sẵn sàng cho production.",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "Tải xuống",
        heroJumpNative: "Cài đặt native",
        dockerTitle: "Thử nhanh với Docker",
        dockerBody:
            "Cách nhanh nhất để thấy nginx ignition hoạt động là một lệnh Docker duy nhất.",
        dockerStep1: "Chạy lệnh bên dưới.",
        dockerStep2: "Đợi vài giây để ứng dụng khởi tạo.",
        dockerStep3: "Mở http://localhost:8090 trong trình duyệt.",
        dockerStep4:
            "Trình hướng dẫn thiết lập sẽ dẫn bạn qua các bước tạo người dùng đầu tiên.",
        dockerPersistenceTitle: "Giữ lại dữ liệu của bạn",
        dockerPersistenceBody:
            "Cơ sở dữ liệu tích hợp nằm bên trong container. Thêm volume để giữ nó giữa các lần chạy:",
        dockerSqliteTitle: "Dùng cơ sở dữ liệu tích hợp",
        dockerSqliteBody:
            "Mặc định ứng dụng dùng cơ sở dữ liệu SQLite tích hợp. Dùng để thử thì tốt, nhưng PostgreSQL được khuyến nghị cho các cài đặt lâu dài.",
        composeTitle: "Production với Docker Compose",
        composeBody:
            "Tệp Compose mẫu chạy nginx ignition cùng PostgreSQL, với health check và các volume lưu trữ. Xem lại và cập nhật mọi giá trị trước khi triển khai.",
        composeWarning:
            "Thay mật khẩu cơ sở dữ liệu mẫu bằng giá trị mạnh trước khi triển khai.",
        composeDownload: "Xem docker-compose.yml trên GitHub",
        downloadsTitle: "Tải phiên bản mới nhất",
        downloadsSubtitle:
            "Gói native cho Linux, Windows và macOS. Mỗi nút luôn trỏ đến tệp của phiên bản mới nhất.",
        downloadsFallbackNote:
            "Không thể kết nối đến GitHub ngay lúc này, nên các liên kết trỏ đến trang phát hành.",
        downloadsHint:
            "Không biết chọn cái nào? Docker là lựa chọn đơn giản nhất trên mọi nền tảng.",
        macosTitle: "macOS",
        macosNote: "Yêu cầu macOS 12 trở lên.",
        macosButton: "Tải cho macOS",
        macosArchNote: "Apple Silicon (arm64). Với máy Mac Intel: hãy dùng Docker.",
        windowsTitle: "Windows",
        windowsNote:
            "Tệp ZIP gồm ứng dụng, giao diện, các migration và tệp properties sẵn sàng sử dụng.",
        windowsX64: "Tải cho Windows (x64)",
        windowsArm64: "Tải cho Windows (arm64)",
        linuxTitle: "Linux",
        linuxNote: "Gói native và các gói tổng quát cho amd64 và arm64.",
        linuxArchLabel: "Kiến trúc",
        linuxFormatLabel: "Gói",
        linuxDownload: "Tải cho Linux",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — gói tổng quát",
        },
        nativeTitle: "Cài đặt native",
        nativeSubtitle:
            "Để cài đặt lâu dài, hãy tải gói cho nền tảng của bạn và làm theo các bước bên dưới.",
        nativeRequirements:
            "Yêu cầu: nginx đã được cài đặt và truy cập được (với các module mod-http-js, mod-http-lua và mod-stream), cổng 8090 còn trống, và quyền quản trị để cài đặt dịch vụ.",
        nativeFullInstructions: "Hướng dẫn đầy đủ trên GitHub",
        nativeUpgradeNote:
            "Nâng cấp: dừng dịch vụ, thay binary và mọi tệp đã cập nhật, rồi khởi động lại. Các bước đầy đủ có trong hướng dẫn.",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "Giải nén gói và sao chép nội dung vào /opt/nginx-ignition.",
        nativeLinuxStep2:
            "Sửa quyền và cài đặt systemd unit đi kèm.",
        nativeLinuxStep3:
            "Chỉnh sửa nginx-ignition.properties nếu cần (ví dụ: đường dẫn binary của nginx).",
        nativeLinuxStep4:
            "Bật và khởi động dịch vụ, sau đó mở tường lửa (và SELinux, nếu đang enforcing).",
        nativeLinuxStep5:
            "Mở http://your-host:8090 và hoàn tất thiết lập trong trình duyệt.",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "Giải nén gói và sao chép nội dung vào /opt/nginx-ignition.",
        nativeMacosStep2:
            "Sửa quyền và cài đặt launchd plist đi kèm.",
        nativeMacosStep3:
            "Chỉnh sửa nginx-ignition.properties, trỏ nginx.binary-path đến nginx của bạn (với Homebrew: /opt/homebrew/bin/nginx).",
        nativeMacosStep4:
            "Nạp và khởi động dịch vụ, đồng thời cho phép các kết nối đến trong tường lửa.",
        nativeMacosStep5:
            "Mở http://your-host:8090 và hoàn tất thiết lập trong trình duyệt.",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "Giải nén tệp ZIP vào thư mục bạn muốn, chẳng hạn như C:\\nginx-ignition.",
        nativeWindowsStep2:
            "Chỉnh sửa nginx-ignition.properties và đặt nginx.binary-path đến vị trí nginx.exe của bạn.",
        nativeWindowsStep3:
            "Chạy nginx-ignition.exe từ cửa sổ dòng lệnh với quyền Administrator.",
        nativeWindowsStep4:
            "Cho phép cổng 8090 trong Windows Firewall. Để chạy dưới dạng dịch vụ, hãy dùng NSSM hoặc WinSW.",
        nativeWindowsStep5:
            "Mở http://localhost:8090 và hoàn tất thiết lập trong trình duyệt.",
        firstStepsTitle: "Sau khi cài đặt",
        firstStepsSubtitle: "Danh sách ngắn để tận dụng tối đa:",
        firstSteps1: "Hoàn tất trình hướng dẫn thiết lập và đăng nhập.",
        firstSteps2: "Tạo host ảo đầu tiên và thêm tên miền cho nó.",
        firstSteps3:
            "Cấp chứng chỉ SSL cho host, hoặc tải lên chứng chỉ của riêng bạn.",
        firstSteps4:
            "Khám phá các tích hợp (Docker, Swarm, TrueNAS) và kết nối VPN (Tailscale, NetBird).",
        firstStepsDocs: "Xem các hướng dẫn",
        firstStepsFeatures: "Xem mọi thứ nó có thể làm",
        helpTitle: "Có gì đó không hoạt động?",
        helpBody:
            "nginx ignition có nhật ký hữu ích: bước đầu tiên luôn là kiểm tra nhật ký ứng dụng (stdout của container khi chạy với Docker).",
        helpTroubleshooting: "Đọc hướng dẫn xử lý sự cố",
        helpIssues: "Mở issue",
        helpDiscussions: "Hỏi trong mục thảo luận",
    },
    features: {
        heroTitle: "Mọi thứ về nginx, không cần terminal",
        heroSubtitle:
            "Từ host ảo và chứng chỉ SSL đến stream, nhật ký và bộ nhớ đệm — những tác vụ nginx phổ biến nhất, quản lý từ một giao diện gọn gàng, hiện đại.",
        tours: {
            hosts: {
                title: "Các Host",
                bodies: [
                    "Một máy chủ ảo (virtual host), gọi tắt là host, là một trang web mà máy chủ nginx sẽ cung cấp để có thể mở trong trình duyệt. Bạn có thể tìm thấy tất cả các host được quản lý ở bên trái, trên menu chính.",
                    "nginx ignition cung cấp một cách trực quan để cấu hình các trang web như vậy. Ví dụ: nếu bạn có một NAS và có một số dịch vụ chạy trên đó (như Jellyfin, Vaultwarden và nhiều hơn nữa), ignition cho phép một cách dễ dàng để truy cập nó từ một tên miền như jellyfin.myhome.com, dễ nhớ và sử dụng hơn nhiều so với IP và cổng.",
                    "Mỗi host sẽ có một tập hợp các tuyến đường (routes), là các quy tắc xác định mẫu yêu cầu nào nên được chuyển tiếp và đến đâu, và các binding, là các định nghĩa tại cổng nào nginx sẽ lắng nghe các yêu cầu đó.",
                ],
            },
            streams: {
                title: "Các Stream",
                bodies: [
                    "Trong khi các host là cách chính để hiển thị các dịch vụ dựa trên HTTP và HTTPS của bạn, các stream cho phép bạn hiển thị các dịch vụ khác dựa trên TCP, UDP và unix socket.",
                    "Nếu bạn cần hiển thị một máy chủ trò chơi, cơ sở dữ liệu, máy chủ DNS và bất kỳ thứ gì khác không sử dụng giao thức HTTP, stream là lựa chọn phù hợp.",
                ],
            },
            ssl: {
                title: "Chứng chỉ SSL",
                bodies: [
                    "Nếu bạn muốn hoặc cần bảo vệ tên miền của mình bằng mã hóa HTTPS, ứng dụng cũng đi kèm với một cách dễ dàng để quản lý các chứng chỉ SSL như vậy.",
                    "Dù bạn cần một chứng chỉ hợp lệ được hỗ trợ bởi Let's Encrypt, tự ký, hoặc mang theo chứng chỉ tùy chỉnh của bạn từ nhà cung cấp bên thứ ba, ignition sẽ cho phép điều đó một cách dễ dàng. Ngay cả khi chứng chỉ sắp hết hạn, ứng dụng sẽ tự động gia hạn cho bạn.",
                    "Khi chứng chỉ SSL được tạo hoặc nhập, bạn có thể sử dụng nó trên các host bằng cách chọn một tùy chọn trong biểu mẫu.",
                ],
            },
            logs: {
                title: "Nhật ký",
                bodies: [
                    "Cần biết những gì đã được yêu cầu hoặc tại sao điều gì đó không hoạt động như mong đợi? nginx ignition cũng cung cấp một cách đơn giản để bạn kiểm tra nhật ký nginx. Chỉ cần chọn host (hoặc chính máy chủ nginx) mà bạn muốn kiểm tra xem chuyện gì đang xảy ra, và chúng tôi sẽ lấy nhật ký cho bạn.",
                    "Và bạn không cần phải lo lắng về việc đĩa của mình bị đầy nhật ký, ignition sẽ tự động xoay chúng cho bạn (và bạn có thể kiểm soát lượng giữ lại, hoặc thậm chí tắt xoay vòng nếu phù hợp nhất với bạn).",
                ],
            },
            integrations: {
                title: "Các tích hợp",
                bodies: [
                    "Ứng dụng của bạn đang chạy trong một Docker container hay trong TrueNAS? Bạn có thể bật tích hợp gốc mà nginx ignition cung cấp và dễ dàng chọn một container hoặc ứng dụng làm đích đến mà host sẽ chuyển tiếp các yêu cầu tới.",
                ],
            },
            vpn: {
                title: "Các VPN",
                bodies: [
                    "Dễ dàng hiển thị các host của bạn trong VPN. Nếu bạn đang sử dụng Tailscale, nginx ignition có thể tự động tạo một máy ảo trong mạng của bạn và chuyển tiếp các yêu cầu đến host bất cứ khi nào IP máy hoặc tên máy (hostname) được truy cập.",
                ],
            },
            accessLists: {
                title: "Các danh sách truy cập",
                bodies: [
                    "Danh sách truy cập cung cấp một cách đơn giản để bảo vệ một tuyến đường hoặc toàn bộ host bằng cách kiểm tra xem người dùng có thuộc dải IP được ủy quyền hay được xác định bằng tên người dùng và mật khẩu hợp lệ (hoặc thậm chí cả hai, IP và thông tin xác thực)",
                ],
            },
            caches: {
                title: "Cấu hình bộ nhớ đệm (Cache)",
                bodies: [
                    "Tăng tốc trang web của bạn và giảm tải cho các máy chủ upstream bằng cách bật khả năng cache nội dung của nginx. Ignition giúp dễ dàng cấu hình các quy tắc cache xác định yêu cầu nào nên được cache và trong bao lâu.",
                    "Bạn có thể tùy chỉnh hành vi cache theo mã trạng thái HTTP, phần mở rộng tập tin, phương thức yêu cầu và hơn thế nữa. Các tính năng nâng cao như xử lý nội dung cũ, cập nhật nền và khóa đồng thời cung cấp cho bạn quyền kiểm soát chi tiết cách nội dung của bạn được cache và phục vụ.",
                ],
            },
            settings: {
                title: "Cài đặt",
                bodies: [
                    "Ignition trừu tượng hóa sự phức tạp của các tập tin cấu hình nginx, nhưng điều đó không có nghĩa là bạn mất khả năng áp dụng một số điều chỉnh tinh vi.",
                    "Với trang cài đặt, bạn có thể xác định một số định nghĩa quan trọng như giá trị timeout, kích thước tải lên/nội dung tối đa của yêu cầu, các cổng mặc định mà nginx sẽ lắng nghe yêu cầu và hơn thế nữa.",
                    "Ngoài ra, bạn cũng có thể cấu hình một số tính năng của nginx ignition ở đó, như tự động gia hạn chứng chỉ SSL và xoay vòng nhật ký.",
                ],
            },
        },
        checklistTitle: "…và nhiều hơn nữa",
        checklistSubtitle:
            "Mọi thứ dưới đây đều có sẵn trong nginx ignition, ngay khi cài đặt.",
        checklist: {
            virtualHosts: {
                title: "Host ảo",
                body: "Nhiều host với tên miền, route và binding cổng riêng.",
            },
            streams: {
                title: "Các Stream",
                body: "Proxy TCP, UDP và Unix socket với định tuyến theo SNI, ngắt mạch và cân bằng tải.",
            },
            routing: {
                title: "Định tuyến linh hoạt",
                body: "Proxy (bao gồm upstream gRPC/gRPCS), chuyển hướng, mã JS/Lua tùy chỉnh, phản hồi tĩnh và phục vụ tệp.",
            },
            serverConfiguration: {
                title: "Cấu hình máy chủ",
                body: "Kích thước body/upload tối đa, server token, timeout, mức nhật ký và nhiều hơn nữa.",
            },
            sslCertificates: {
                title: "Chứng chỉ SSL",
                body: "Let's Encrypt (ACME) tự động, tự ký hoặc dùng chứng chỉ của riêng bạn.",
            },
            integrations: {
                title: "Tích hợp native",
                body: "Hỗ trợ hạng nhất cho Docker, Docker Swarm, VPN Tailscale và NetBird, cùng TrueNAS.",
            },
            security: {
                title: "Bảo mật",
                body: "Xác thực hai yếu tố, kiểm soát truy cập dựa trên thuộc tính và danh sách truy cập theo từng host.",
            },
            apiTokens: {
                title: "Token API",
                body: "Tạo và thu hồi token để xác thực script và công cụ bên ngoài.",
            },
            logging: {
                title: "Ghi nhật ký",
                body: "Nhật ký truy cập và lỗi chi tiết cho máy chủ và từng host, với luân chuyển tự động.",
            },
            stats: {
                title: "Thống kê lưu lượng",
                body: "Tốc độ yêu cầu, thời gian phản hồi theo thời gian thực và phân tích lưu lượng theo host và upstream.",
            },
            caching: {
                title: "Bộ nhớ đệm (Cache)",
                body: "Cấu hình bộ nhớ đệm tích hợp của nginx để phân phối nội dung nhanh hơn.",
            },
            execution: {
                title: "Vận hành linh hoạt",
                body: "Để ignition chạy nginx thay bạn, hoặc chỉ tạo các tệp cấu hình.",
            },
        },
    },
    docs: {
        sidebarTitle: "Hướng dẫn",
        overview: "Tổng quan",
        fullReference: "Tài liệu tham chiếu đầy đủ trên GitHub",
        fullDoc: "Xem tài liệu đầy đủ trên GitHub",
        previous: "Trước",
        next: "Tiếp",
        heroTitle: "Tài liệu",
        heroSubtitle:
            "Những điều cần thiết về cài đặt, cấu hình và vận hành nginx ignition. Mỗi hướng dẫn đều liên kết đến tài liệu đầy đủ trong kho chứa của dự án.",
        guides: {
            configuration: {
                title: "Cấu hình",
                summary:
                    "Biến môi trường, tệp properties, PostgreSQL và JWT secret.",
            },
            "api-tokens": {
                title: "Token API",
                summary:
                    "Xác thực script và tác vụ CI với API mà không cần chia sẻ mật khẩu.",
            },
            "health-checks": {
                title: "Health check",
                summary:
                    "Các endpoint liveness và readiness cho Docker, Kubernetes và giám sát.",
            },
            "backup-restore": {
                title: "Sao lưu & khôi phục",
                summary:
                    "Cách khôi phục bản sao lưu cơ sở dữ liệu, cho SQLite và PostgreSQL.",
            },
            troubleshooting: {
                title: "Xử lý sự cố",
                summary:
                    "Nên tìm ở đâu trước tiên, và cách đặt lại mật khẩu bị mất.",
            },
        },
        referenceTitle: "Tài liệu tham chiếu đầy đủ trên GitHub",
        referenceBody:
            "Các hướng dẫn ở đây bao gồm những nội dung cốt lõi. Tài liệu tham chiếu đầy đủ được duy trì trong kho chứa của dự án, bằng tiếng Anh:",
        reference: {
            config: {
                title: "Thuộc tính cấu hình",
                body: "Mọi biến môi trường và thuộc tính, kèm giá trị mặc định.",
            },
            migration: {
                title: "Hướng dẫn nâng cấp",
                body: "Nâng cấp từ nginx ignition 1.x lên 2.x.",
            },
            apiTokens: {
                title: "Token API",
                body: "Tài liệu đầy đủ về token API.",
            },
            healthChecks: {
                title: "Health check",
                body: "Các endpoint và tình huống sử dụng.",
            },
            restore: {
                title: "Khôi phục cơ sở dữ liệu",
                body: "Hướng dẫn khôi phục đầy đủ.",
            },
            troubleshooting: {
                title: "Xử lý sự cố",
                body: "Các sự cố thường gặp và cách khắc phục.",
            },
            screenshots: {
                title: "Thư viện ảnh chụp màn hình",
                body: "Mọi màn hình của ứng dụng, kèm mô tả.",
            },
            changelog: {
                title: "Nhật ký thay đổi",
                body: "Mọi thay đổi trong từng phiên bản.",
            },
            security: {
                title: "Chính sách bảo mật",
                body: "Cách báo cáo lỗ hổng bảo mật.",
            },
        },
        helpTitle: "Nhận trợ giúp",
        helpBody:
            "Gặp vấn đề hay có câu hỏi? Issues và Discussions trên GitHub là nơi bạn nên đến — cũng là nơi đề xuất tính năng.",
        helpIssues: "Mở issue",
        helpDiscussions: "Bắt đầu thảo luận",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition được cấu hình qua biến môi trường hoặc tệp properties. Mỗi cài đặt có một khóa duy nhất: dưới dạng biến môi trường, khóa viết hoa và dùng dấu gạch dưới (NGINX_IGNITION_SERVER_PORT); trong tệp properties, khóa viết thường và dùng dấu chấm (nginx-ignition.server.port).",
            envTitle: "Các biến môi trường chính",
            envBody:
                "Những biến cần thiết cho hầu hết các cài đặt. Mọi thuộc tính đều có giá trị mặc định, nên bạn thường chỉ cần đặt những gì muốn thay đổi.",
            envVarCol: "Biến",
            envDescriptionCol: "Mô tả",
            envExampleCol: "Ví dụ",
            envMore:
                "Tài liệu tham chiếu đầy đủ liệt kê mọi thuộc tính, kèm giá trị mặc định và ví dụ.",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "Cổng mà nginx ignition lắng nghe các yêu cầu",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "Địa chỉ mà nginx ignition lắng nghe các yêu cầu",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "Đường dẫn đến binary nginx sẽ sử dụng",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "Nơi lưu các tệp cấu hình nginx được tạo ra",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "Loại cơ sở dữ liệu: sqlite hoặc postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "Tên máy chủ hoặc IP của cơ sở dữ liệu",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "Cổng mà cơ sở dữ liệu lắng nghe",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "Tên cơ sở dữ liệu sẽ sử dụng",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "Mã hóa kết nối cơ sở dữ liệu: require hoặc disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "Tên đăng nhập cơ sở dữ liệu",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "Mật khẩu cơ sở dữ liệu",
                    example: "mật-khẩu-của-bạn",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "Thư mục lưu tệp cơ sở dữ liệu SQLite",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "Secret tùy chỉnh (đúng 64 ký tự) để ký token xác thực; chỉ được đọc trong lần khởi động đầu tiên",
                    example: "(ngẫu nhiên)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "Thời gian token phiên còn hiệu lực trước khi đăng xuất do không hoạt động",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "Bật hoặc tắt các endpoint health check",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "Đặt lại mật khẩu của người dùng này khi khởi động rồi thoát; dùng để khôi phục",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (khuyến nghị cho production)",
            postgresBody:
                "Cơ sở dữ liệu SQLite tích hợp rất phù hợp để thử nhanh, nhưng các cài đặt lâu dài nên dùng PostgreSQL. Trỏ ignition đến cơ sở dữ liệu của bạn bằng các biến database:",
            postgresNote:
                "Mọi bảng và chỉ mục cần thiết được tạo tự động trong lần khởi động đầu tiên, và tự động cập nhật khi nâng cấp.",
            configFileTitle: "Tệp cấu hình",
            configFileBody:
                "Cài đặt cũng có thể đến từ tệp properties, với cùng các khóa viết thường và dấu chấm. ignition đọc theo thứ tự: tệp tại NGINX_IGNITION_CONFIG_FILE_PATH, đường dẫn truyền bằng --config, hoặc nginx-ignition.properties trong thư mục làm việc.",
            jwtTitle: "JWT secret tùy chỉnh",
            jwtBody:
                "Mặc định, một secret ngẫu nhiên an toàn được tạo và lưu trong cơ sở dữ liệu. Để cung cấp secret của riêng bạn, hãy đặt NGINX_IGNITION_SECURITY_JWT_SECRET với đúng 64 ký tự trước lần khởi động đầu tiên. Nâng cấp từ phiên bản đã dùng biến này? Hãy giữ nguyên: giá trị của nó được lưu vào cơ sở dữ liệu trong lần khởi động đầu tiên sau khi nâng cấp.",
        },
        apiTokens: {
            lead: "Token API cho phép script, tác vụ CI và các công cụ khác xác thực với API nginx ignition mà không cần chia sẻ tên đăng nhập và mật khẩu. Mỗi token thuộc về người dùng đã tạo nó và mang quyền của người dùng đó.",
            createTitle: "Tạo token",
            createStep1:
                "Mở menu người dùng ở góc trên bên phải giao diện.",
            createStep2: "Chuyển sang tab Token API.",
            createStep3: "Nhấn Token mới.",
            createStep4: "Đặt tên và, tùy chọn, một ngày hết hạn.",
            createStep5:
                "Nhấn Tạo token và sao chép giá trị được tạo — nó chỉ hiển thị một lần.",
            createNote1:
                "Tên phải duy nhất trong số các token của riêng bạn và có tối đa 256 ký tự. Hãy dùng tên mô tả rõ, ví dụ ci-deploy hoặc home-assistant.",
            createNote2:
                "Ngày hết hạn là tùy chọn. Không đặt thì token không bao giờ hết hạn; khi đặt, ngày phải ở tương lai và token ngừng hoạt động ngay khi thời điểm đó qua đi.",
            createNote3:
                "Giá trị token chỉ được hiển thị một lần, ngay sau khi tạo, và không thể khôi phục sau đó. Nếu làm mất, hãy thu hồi token và tạo token mới.",
            useTitle: "Sử dụng token",
            useBody:
                "Gửi token trong header Authorization theo scheme Bearer, giống hệt token phiên:",
            useError:
                "Token không hợp lệ, đã bị thu hồi hoặc hết hạn sẽ nhận về 401 Unauthorized; các thao tác dành riêng sẽ nhận về 403 Forbidden.",
            useNote:
                "Token API chỉ xác thực các lệnh gọi API: đăng nhập vào giao diện web vẫn cần tên đăng nhập và mật khẩu.",
            permissionsTitle: "Quyền",
            permissionsBody1:
                "Token kế thừa quyền của người dùng sở hữu nó, và không có cách nào giới hạn chúng độc lập với chủ sở hữu.",
            permissionsBody2:
                "Nếu token cần một bộ quyền khác, hãy tạo người dùng dịch vụ riêng với mức truy cập mong muốn và tạo token từ tài khoản đó.",
            reservedTitle: "Thao tác dành riêng",
            reservedBody:
                "Một số thao tác được dành riêng cho phiên tương tác và không thể thực hiện bằng token:",
            reservedItem1: "Thay đổi hồ sơ hoặc mật khẩu.",
            reservedItem2:
                "Đọc, kích hoạt hoặc vô hiệu hóa xác thực hai yếu tố.",
            reservedItem3: "Liệt kê, tạo hoặc thu hồi token API.",
            reservedItem4:
                "Đăng xuất (chỉ vô hiệu hóa các phiên tương tác).",
            reservedException:
                "Đọc hồ sơ của chính bạn bằng GET /api/users/current là ngoại lệ duy nhất: token được phép thực hiện.",
            lifecycleTitle: "Vòng đời token",
            lifecycle1Title: "Không tự động gia hạn",
            lifecycle1Body:
                "Khác với phiên web, token API không bao giờ được tự động gia hạn; chỉ ngày hết hạn của từng token là quan trọng.",
            lifecycle2Title: "Thu hồi tức thì",
            lifecycle2Body:
                "Mọi yêu cầu đều kiểm tra token với cơ sở dữ liệu, nên thu hồi token sẽ dừng nó ngay ở lần gọi kế tiếp.",
            lifecycle3Title: "Người dùng bị vô hiệu hóa",
            lifecycle3Body:
                "Vô hiệu hóa người dùng khiến token của họ ngừng hoạt động, nhưng không có gì bị xóa; kích hoạt lại người dùng thì chúng hoạt động trở lại.",
            upgradeNote:
                "Nâng cấp từ phiên bản cũ hơn 2.47.0 sẽ đăng xuất tất cả người dùng một lần, do định dạng token đã thay đổi. Chỉ cần đăng nhập lại sau đó.",
        },
        healthChecks: {
            lead: "Các endpoint health check có thể được dùng bởi nền tảng điều phối container (như Docker) và hệ thống giám sát để xác minh trạng thái và tính khả dụng của ứng dụng.",
            disableTitle: "Bật và tắt",
            disableBody:
                "Cả hai endpoint đều được bật mặc định. Đặt NGINX_IGNITION_HEALTH_CHECK_ENABLED thành false để tắt chúng.",
            endpointsTitle: "Các endpoint",
            livenessTitle: "Endpoint liveness",
            livenessBody:
                "Kiểm tra rằng ứng dụng đang chạy và các thành phần nội bộ của nó — như kết nối cơ sở dữ liệu — đều khỏe mạnh.",
            livenessCode200: "200 OK: ứng dụng khỏe mạnh",
            livenessCode503:
                "503 Service Unavailable: một hoặc nhiều thành phần quan trọng không khỏe mạnh",
            livenessExampleLabel: "Phản hồi mẫu",
            readinessTitle: "Endpoint readiness",
            readinessBody:
                "Cho biết ứng dụng đã sẵn sàng nhận lưu lượng hay chưa — hữu ích trong lúc khởi động hoặc triển khai.",
            readinessCode200: "200 OK: sẵn sàng nhận yêu cầu",
            dockerTitle: "Docker Compose",
            dockerBody: "Dùng endpoint liveness trong health check của container:",
            kubernetesTitle: "Probe Kubernetes",
            kubernetesBody: "Cấu hình cả hai probe trong deployment của bạn:",
        },
        backupRestore: {
            lead: "Trang Xuất và sao lưu tạo bản sao lưu cơ sở dữ liệu có thể tải xuống. Việc khôi phục khác nhau tùy theo cơ sở dữ liệu đang dùng: với SQLite bạn nhận được một tệp .db duy nhất (nginx-ignition.db), còn với PostgreSQL là tệp SQL thuần (nginx-ignition.sql).",
            safetyTitle: "Trước khi bắt đầu",
            safety1:
                "Dừng ứng dụng (hoặc container của nó) để không có gì ghi vào cơ sở dữ liệu trong lúc bạn thay thế nó.",
            safety2:
                "Luôn giữ thêm một bản sao lưu nữa trước khi ghi đè bất cứ thứ gì.",
            sqliteTitle: "Khôi phục cơ sở dữ liệu SQLite",
            sqliteBody:
                "Áp dụng khi ignition chạy với cơ sở dữ liệu SQLite tích hợp, mặc định cho các cài đặt mới. Docker image chính thức tìm tệp tại /opt/nginx-ignition/data/nginx-ignition.db; biến NGINX_IGNITION_DATABASE_DATA_PATH thay đổi thư mục đó.",
            sqliteOptionATitle: "Sao chép tệp vào container đang chạy",
            sqliteOptionAStep1: "Tìm tên container: docker ps",
            sqliteOptionAStep2: "Dừng ứng dụng: docker stop <container>",
            sqliteOptionAStep3:
                "Sao chép tệp: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "Khởi động ứng dụng trở lại: docker start <container>",
            sqliteOptionBTitle:
                "Hoặc thay thế tệp tại thư mục dữ liệu",
            sqliteOptionBStep1: "Dừng container.",
            sqliteOptionBStep2:
                "Sao chép bản sao lưu đè lên tệp trong bind mount (hoặc volume) của bạn.",
            sqliteOptionBStep3: "Khởi động container trở lại.",
            postgresTitle: "Khôi phục cơ sở dữ liệu PostgreSQL",
            postgresBody:
                "Khôi phục bản dump .sql bằng client psql chính thức. Điều này giả định rằng cơ sở dữ liệu đích đã tồn tại, đang trống, và người dùng có quyền tạo các đối tượng trong bản dump.",
            postgresStep1:
                "Dừng ứng dụng để tránh ghi dữ liệu trong lúc khôi phục: docker stop <container>",
            postgresStep2: "Chạy psql trỏ đến cơ sở dữ liệu đích.",
            postgresStep3: "Nhập mật khẩu cơ sở dữ liệu khi được yêu cầu.",
            postgresStep4: "Khởi động ứng dụng trở lại.",
        },
        troubleshooting: {
            lead: "nginx ignition được thiết kế để có nhật ký hữu ích và dễ hiểu. Nếu có gì đó không hoạt động và thông tin phản hồi trên giao diện chưa đủ rõ, hãy bắt đầu với nhật ký ứng dụng — với Docker, là stdout của container.",
            logsLink: "Tài liệu ghi nhật ký của Docker",
            passwordTitle: "Đặt lại mật khẩu",
            passwordBody:
                "Quên mật khẩu? Đặt biến môi trường bên dưới trên container. Biến này đặt lại mật khẩu của người dùng mục tiêu khi khởi động, in mật khẩu ngẫu nhiên mới vào nhật ký, rồi tắt mà không khởi chạy ứng dụng:",
            passwordNote:
                "Mật khẩu thay đổi mỗi lần ứng dụng chạy với biến này, vì vậy hãy chạy một lần, ghi lại mật khẩu mới, và xóa biến.",
            helpTitle: "Vẫn chưa giải quyết được?",
            helpBody:
                "Nếu nhật ký và các hướng dẫn ở đây không giải quyết được, hãy liên hệ:",
            helpIssues: "Mở issue trên GitHub",
            helpDiscussions: "Hỏi trong mục thảo luận",
        },
    },
    notFound: {
        title: "Không tìm thấy trang",
        body: "Trang bạn đang tìm không tồn tại, hoặc đã được chuyển đi.",
        home: "Về trang chủ",
        features: "Khám phá tính năng",
        docs: "Xem tài liệu",
    },
    footer: {
        tagline:
            "Giao diện web hiện đại, trực quan cho máy chủ web nginx. Dành cho lập trình viên và những người đam mê.",
        product: "Sản phẩm",
        releases: "Bản phát hành",
        community: "Cộng đồng",
        issues: "Báo lỗi",
        discussions: "Thảo luận",
        linkedin: "LinkedIn",
        resources: "Tài nguyên",
        configReference: "Tham chiếu cấu hình",
        screenshots: "Thư viện ảnh chụp màn hình",
        changelog: "Nhật ký thay đổi",
        security: "Chính sách bảo mật",
        license: "Giấy phép MIT",
        madeWith: "Được làm bằng ❤️ từ Brazil",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default vi
