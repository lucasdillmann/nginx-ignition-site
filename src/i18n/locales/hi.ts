import type { Messages } from "./en"

const hi: Messages = {
    common: {
        getStarted: "शुरू करें",
        download: "डाउनलोड",
        viewOnGitHub: "GitHub पर देखें",
        learnMore: "और जानें",
        readGuide: "गाइड पढ़ें",
        copy: "कॉपी करें",
        copied: "कॉपी हो गया!",
        latestVersion: "नवीनतम संस्करण",
        releasedOn: "{{date}} को जारी",
        releaseNotes: "रिलीज़ नोट्स",
        browseReleases: "सभी रिलीज़ देखें",
        seeAllFeatures: "सभी फ़ीचर्स देखें",
        githubInEnglish: "GitHub पर खुलता है, अंग्रेज़ी में।",
        previous: "पिछला",
        next: "अगला",
        goToSlide: "स्लाइड {{index}} पर जाएँ",
        starOnGitHub: "GitHub पर स्टार दें",
    },
    nav: {
        label: "मुख्य नेविगेशन",
        features: "फ़ीचर्स",
        docs: "डॉक्स",
        gettingStarted: "शुरू करें",
        github: "GitHub",
        openMenu: "मेन्यू खोलें",
        closeMenu: "मेन्यू बंद करें",
    },
    languageSwitcher: {
        label: "भाषा बदलें",
    },
    seo: {
        home: {
            title: "nginx ignition — nginx वेब सर्वर के लिए एक आधुनिक UI",
            description:
                "nginx वेब सर्वर के लिए एक आधुनिक, सहज वेब इंटरफ़ेस। वर्चुअल होस्ट्स, स्ट्रीम्स, SSL प्रमाणपत्र, इंटीग्रेशन्स और बहुत कुछ — सिर्फ़ एक Docker कमांड से इंस्टॉल। मुफ़्त और ओपन सोर्स।",
        },
        gettingStarted: {
            title: "शुरू करें — nginx ignition",
            description:
                "nginx ignition को Docker, Docker Compose या Linux, Windows और macOS के लिए नेटिव पैकेज से इंस्टॉल करें। नवीनतम रिलीज़ डाउनलोड करें।",
        },
        features: {
            title: "फ़ीचर्स — nginx ignition",
            description:
                "वर्चुअल होस्ट्स, स्ट्रीम्स, SSL प्रमाणपत्र, सुरक्षा, इंटीग्रेशन्स, लॉग्स, ट्रैफ़िक आँकड़े और कैशिंग — nginx ignition जो सब करता है, स्क्रीनशॉट्स के साथ।",
        },
        docs: {
            title: "दस्तावेज़ीकरण — nginx ignition",
            description:
                "nginx ignition को कॉन्फ़िगर करने और चलाने की गाइड्स: एनवायरनमेंट वेरिएबल्स, API टोकन, हेल्थ चेक, बैकअप और रीस्टोर, ट्रबलशूटिंग।",
        },
        docsConfiguration: {
            title: "कॉन्फ़िगरेशन — nginx ignition डॉक्स",
            description:
                "nginx ignition को एनवायरनमेंट वेरिएबल्स या properties फ़ाइल से कॉन्फ़िगर करें: डेटाबेस, nginx पाथ, JWT सीक्रेट और बहुत कुछ।",
        },
        docsApiTokens: {
            title: "API टोकन — nginx ignition डॉक्स",
            description:
                "स्क्रिप्ट्स और टूल्स को nginx ignition API से प्रमाणित करने के लिए API टोकन बनाएं, इस्तेमाल करें और रद्द करें।",
        },
        docsHealthChecks: {
            title: "हेल्थ चेक — nginx ignition डॉक्स",
            description:
                "Docker, Kubernetes और मॉनिटरिंग सिस्टम्स के लिए लाइवनेस और रेडीनेस एंडपॉइंट।",
        },
        docsBackupRestore: {
            title: "बैकअप और रीस्टोर — nginx ignition डॉक्स",
            description:
                "SQLite और PostgreSQL के लिए nginx ignition डेटाबेस बैकअप रीस्टोर करने का तरीक़ा।",
        },
        docsTroubleshooting: {
            title: "ट्रबलशूटिंग — nginx ignition डॉक्स",
            description:
                "कुछ गड़बड़ हो तो सबसे पहले कहां देखें, और खोया पासवर्ड कैसे रीसेट करें।",
        },
        notFound: {
            title: "पेज नहीं मिला — nginx ignition",
            description: "जो पेज आप खोज रहे हैं वह मौजूद नहीं है।",
        },
    },
    home: {
        eyebrow: "ओपन सोर्स · सेल्फ-होस्टेड · बहुभाषी · मल्टी-प्लेटफ़ॉर्म",
        title: "nginx, कॉन्फ़िग के झंझट के बिना।",
        subtitle:
            "nginx ignition, nginx वेब सर्वर के लिए एक आधुनिक और सहज वेब इंटरफ़ेस है — उन डेवलपर्स और होमलैबर्स के लिए बनाया गया जो कॉन्फ़िग फ़ाइलें हाथ से एडिट किए बिना पूरा नियंत्रण चाहते हैं।",
        ctaPrimary: "शुरू करें",
        ctaSecondary: "GitHub पर देखें",
        ctaFeatures: "फ़ीचर्स जानें",
        commandTitle: "एक ही कमांड में तैयार",
        commandNote:
            "कुछ सेकंड इंतज़ार करें, http://localhost:8090 खोलें और सेटअप विज़ार्ड से अपना पहला यूज़र बनाएं।",
        commandNoteDb:
            "शुरुआती आज़माइश के लिए एम्बेडेड SQLite डेटाबेस काफ़ी है; प्रोडक्शन के लिए PostgreSQL की सिफ़ारिश की जाती है।",
        commandMore: "इंस्टॉलेशन के सभी विकल्प देखें",
        highlightsTitle: "पूरा nginx, एक ही जगह",
        highlightsSubtitle:
            "आम उपयोग के मामलों के लिए सब कुछ तैयार — बिना कॉन्फ़िग के झंझट के।",
        highlights: {
            hosts: {
                title: "वर्चुअल होस्ट्स और रूटिंग",
                body: "कस्टम डोमेन, रूट्स, प्रॉक्सी (gRPC सहित), रीडायरेक्ट, कस्टम JS/Lua और स्टेटिक रिस्पॉन्स।",
            },
            streams: {
                title: "स्ट्रीम्स",
                body: "SNI रूटिंग, सर्किट ब्रेकर्स और लोड बैलेंसिंग के साथ TCP, UDP और Unix सॉकेट्स प्रॉक्सी करें।",
            },
            ssl: {
                title: "SSL प्रमाणपत्र",
                body: "स्वचालित Let's Encrypt (ACME), स्व-हस्ताक्षरित या अपने ख़ुद के प्रमाणपत्र।",
            },
            integrations: {
                title: "नेटिव इंटीग्रेशन्स",
                body: "Docker, Docker Swarm, Tailscale, NetBird और TrueNAS के लिए फ़र्स्ट-क्लास सपोर्ट।",
            },
            security: {
                title: "सुरक्षा",
                body: "दो-कारक प्रमाणीकरण, ABAC और प्रति-होस्ट एक्सेस लिस्ट्स। आपकी स्क्रिप्ट्स और टूल्स के लिए API टोकन।",
            },
            observability: {
                title: "लॉग्स, आँकड़े और कैश",
                body: "खोज के साथ एक्सेस और एरर लॉग्स, रीयल-टाइम ट्रैफ़िक आँकड़े और nginx कैश।",
            },
        },
        showcaseTitle: "एक नज़र",
        showcaseSubtitle:
            "हर स्क्रीन को सरल, स्पष्ट और उपयोगी बनाया गया है।",
        showcase: {
            dashboard: "डैशबोर्ड: रिसोर्स, nginx की स्थिति और हाल की त्रुटियाँ।",
        },
        goalsTitle: "डेवलपर्स और होमलैबर्स के लिए बना",
        goalsBody1:
            "nginx ignition उन डेवलपर्स और शौक़ीन लोगों के लिए बना है जो इस्तेमाल में आसानी और nginx की ताक़त के बीच संतुलन चाहते हैं।",
        goalsBody2:
            "इसका मक़सद बेहद जटिल वातावरणों के लिए एंटरप्राइज़-रेडी या फ़ीचर-कंप्लीट होना नहीं है: अगर आपका उपयोग बेहद एडवांस्ड है, तो आप शायद कॉन्फ़िग फ़ाइलें ख़ुद प्रबंधित करना पसंद करेंगे। लक्ष्य है आम उपयोग के मामलों के लिए nginx चलाने का एक ताक़तवर, पर सहज तरीक़ा।",
        goalsForTitle: "यह किनके लिए है",
        goalsFor1: "होमलैब और सेल्फ-होस्टेड सेटअप्स",
        goalsFor2: "बिना हाथ से एडिट किए नियंत्रण चाहने वाले डेवलपर्स",
        goalsFor3: "आम उपयोग के मामले, तुरंत पूरे",
        goalsNotTitle: "यह किनके लिए नहीं है",
        goalsNot1: "बेहद जटिल, एंटरप्राइज़-स्तरीय वातावरण",
        goalsNot2: "हर nginx डायरेक्टिव की जगह लेना",
        goalsNot3: "सर्वरों के बेड़े प्रबंधित करना",
        languagesTitle: "11 भाषाओं में उपलब्ध",
        languagesBody:
            "इंटरफ़ेस 11 भाषाओं में अनूदित है और अपने-आप आपके ब्राउज़र की भाषा अपनाता है। हेडर में भाषा चयनकर्ता से आप इसे कभी भी बदल सकते हैं।",
        ctaTitle: "इसे आज़माने के लिए तैयार हैं?",
        ctaBody:
            "एक Docker कमांड से आज़माएं, या अपने प्लेटफ़ॉर्म के लिए नवीनतम रिलीज़ डाउनलोड करें।",
        ctaDiscussions: "चर्चाएं",
        ctaIssues: "समस्या रिपोर्ट करें",
    },
    gettingStarted: {
        heroTitle: "nginx ignition को चलाएं",
        heroSubtitle:
            "Docker के साथ सेकंडों में आज़माएं, macOS, Windows या Linux के लिए नेटिव पैकेज डाउनलोड करें, या प्रोडक्शन के लिए तैयार Compose फ़ाइल इस्तेमाल करें।",
        heroJumpDocker: "Docker",
        heroJumpCompose: "Docker Compose",
        heroJumpDownloads: "डाउनलोड",
        heroJumpNative: "नेटिव इंस्टॉल",
        dockerTitle: "Docker के साथ क्विक टेस्ट",
        dockerBody:
            "nginx ignition को काम करते हुए देखने का सबसे तेज़ तरीक़ा एक अकेली Docker कमांड है।",
        dockerStep1: "नीचे दी गई कमांड चलाएं।",
        dockerStep2: "ऐप के इनिशियलाइज़ होने तक कुछ सेकंड रुकें।",
        dockerStep3: "अपने ब्राउज़र में http://localhost:8090 खोलें।",
        dockerStep4:
            "सेटअप विज़ार्ड आपको पहला यूज़र बनाने में मार्गदर्शन करेगा।",
        dockerPersistenceTitle: "अपना डेटा बनाए रखें",
        dockerPersistenceBody:
            "एम्बेडेड डेटाबेस कंटेनर के अंदर रहता है। दोबारा चलाने पर भी डेटा बनाए रखने के लिए एक वॉल्यूम जोड़ें:",
        dockerSqliteTitle: "एम्बेडेड डेटाबेस का उपयोग",
        dockerSqliteBody:
            "डिफ़ॉल्ट रूप से ऐप एम्बेडेड SQLite डेटाबेस इस्तेमाल करता है। चीज़ें आज़माने के लिए यह ठीक है, लेकिन लंबी अवधि के इंस्टॉलेशन के लिए PostgreSQL की सिफ़ारिश की जाती है।",
        composeTitle: "Docker Compose के साथ प्रोडक्शन",
        composeBody:
            "उदाहरण Compose फ़ाइल nginx ignition को PostgreSQL के साथ चलाती है, हेल्थ चेक और पर्सिस्टेंट वॉल्यूम्स के साथ। डिप्लॉय करने से पहले सभी मान जांच लें और अपडेट करें।",
        composeWarning:
            "डिप्लॉय करने से पहले प्लेसहोल्डर डेटाबेस पासवर्ड की जगह मज़बूत मान रखें।",
        composeDownload: "GitHub पर docker-compose.yml देखें",
        downloadsTitle: "नवीनतम रिलीज़ डाउनलोड करें",
        downloadsSubtitle:
            "Linux, Windows और macOS के लिए नेटिव पैकेज। हर बटन हमेशा नवीनतम रिलीज़ की एसेट्स की ओर ले जाता है।",
        downloadsFallbackNote:
            "GitHub अभी पहुँच में नहीं है, इसलिए लिंक रिलीज़ पेज की ओर ले जाते हैं।",
        downloadsHint:
            "कौन-सा चुनें, समझ नहीं आ रहा? किसी भी प्लेटफ़ॉर्म पर Docker सबसे आसान विकल्प है।",
        macosTitle: "macOS",
        macosNote: "macOS 12 या उससे नया चाहिए।",
        macosButton: "macOS के लिए डाउनलोड करें",
        macosArchNote: "Apple Silicon (arm64)। Intel Macs: Docker इस्तेमाल करें।",
        windowsTitle: "Windows",
        windowsNote:
            "ऐप्लिकेशन, UI, माइग्रेशन और तैयार properties फ़ाइल के साथ ZIP आर्काइव।",
        windowsX64: "Windows के लिए डाउनलोड करें (x64)",
        windowsArm64: "Windows के लिए डाउनलोड करें (arm64)",
        linuxTitle: "Linux",
        linuxNote: "amd64 और arm64 के लिए नेटिव पैकेज और जेनेरिक आर्काइव।",
        linuxArchLabel: "आर्किटेक्चर",
        linuxFormatLabel: "पैकेज",
        linuxDownload: "Linux के लिए डाउनलोड करें",
        linuxFormats: {
            deb: "deb — Debian, Ubuntu",
            rpm: "rpm — Fedora, RHEL",
            apk: "apk — Alpine",
            pkgTarZst: "pkg.tar.zst — Arch Linux",
            ipk: "ipk — OpenWrt",
            zip: "zip — जेनेरिक आर्काइव",
        },
        nativeTitle: "नेटिव इंस्टॉल",
        nativeSubtitle:
            "स्थायी इंस्टॉलेशन के लिए, अपने प्लेटफ़ॉर्म का पैकेज डाउनलोड करें और नीचे दिए चरणों का पालन करें।",
        nativeRequirements:
            "आवश्यकताएँ: nginx इंस्टॉल और उपलब्ध हो (mod-http-js, mod-http-lua और mod-stream मॉड्यूल के साथ), पोर्ट 8090 खाली हो, और सर्विस इंस्टॉलेशन के लिए एडमिन अधिकार हों।",
        nativeFullInstructions: "GitHub पर पूरे निर्देश",
        nativeUpgradeNote:
            "अपग्रेड करते समय: सर्विस रोकें, बाइनरी और अपडेट हुई एसेट्स बदलें, फिर उसे दोबारा शुरू करें। पूरे चरण निर्देशों में दिए हैं।",
        nativeLinuxTitle: "Linux (systemd)",
        nativeLinuxStep1:
            "आर्काइव अनज़िप करें और इसकी सामग्री /opt/nginx-ignition में कॉपी करें।",
        nativeLinuxStep2:
            "अनुमतियाँ ठीक करें और दी गई systemd यूनिट इंस्टॉल करें।",
        nativeLinuxStep3:
            "ज़रूरत पड़े तो nginx-ignition.properties एडिट करें (उदाहरण के लिए, nginx बाइनरी का पाथ)।",
        nativeLinuxStep4:
            "सर्विस एनेबल और शुरू करें, फिर फ़ायरवॉल खोलें (और SELinux भी, अगर enforcing है)।",
        nativeLinuxStep5:
            "http://your-host:8090 खोलें और ब्राउज़र में सेटअप पूरा करें।",
        nativeMacosTitle: "macOS (launchd)",
        nativeMacosStep1:
            "आर्काइव अनज़िप करें और इसकी सामग्री /opt/nginx-ignition में कॉपी करें।",
        nativeMacosStep2:
            "अनुमतियाँ ठीक करें और दी गई launchd plist इंस्टॉल करें।",
        nativeMacosStep3:
            "nginx-ignition.properties एडिट करें और nginx.binary-path को अपने nginx पर पॉइंट करें (Homebrew के लिए: /opt/homebrew/bin/nginx)।",
        nativeMacosStep4:
            "सर्विस लोड और शुरू करें, और फ़ायरवॉल में आने वाले कनेक्शन्स की अनुमति दें।",
        nativeMacosStep5:
            "http://your-host:8090 खोलें और ब्राउज़र में सेटअप पूरा करें।",
        nativeWindowsTitle: "Windows",
        nativeWindowsStep1:
            "ZIP आर्काइव को अपनी पसंद की डायरेक्टरी में निकालें, जैसे C:\\nginx-ignition।",
        nativeWindowsStep2:
            "nginx-ignition.properties एडिट करें और nginx.binary-path को अपनी nginx.exe के लोकेशन पर सेट करें।",
        nativeWindowsStep3:
            "एडमिनिस्ट्रेटर प्रॉम्प्ट से nginx-ignition.exe चलाएं।",
        nativeWindowsStep4:
            "Windows Firewall में पोर्ट 8090 की अनुमति दें। सर्विस के रूप में चलाने के लिए NSSM या WinSW इस्तेमाल करें।",
        nativeWindowsStep5:
            "http://localhost:8090 खोलें और ब्राउज़र में सेटअप पूरा करें।",
        firstStepsTitle: "इंस्टॉल करने के बाद",
        firstStepsSubtitle: "इससे भरपूर फ़ायदा उठाने के लिए छोटी चेकलिस्ट:",
        firstSteps1: "सेटअप विज़ार्ड पूरा करें और साइन इन करें।",
        firstSteps2: "अपना पहला वर्चुअल होस्ट बनाएं और उसके डोमेन नाम जोड़ें।",
        firstSteps3:
            "होस्ट के लिए SSL प्रमाणपत्र जारी करें, या अपना ख़ुद का अपलोड करें।",
        firstSteps4:
            "इंटीग्रेशन्स (Docker, Swarm, TrueNAS) और VPN कनेक्शन्स (Tailscale, NetBird) देखें।",
        firstStepsDocs: "गाइड्स ब्राउज़ करें",
        firstStepsFeatures: "इसकी सभी क्षमताएं देखें",
        helpTitle: "कुछ काम नहीं कर रहा?",
        helpBody:
            "nginx ignition के पास मददगार लॉग्स होते हैं: पहला कदम हमेशा ऐप्लिकेशन लॉग्स देखना है (Docker के साथ चलाते समय कंटेनर का stdout)।",
        helpTroubleshooting: "ट्रबलशूटिंग गाइड पढ़ें",
        helpIssues: "इश्यू खोलें",
        helpDiscussions: "चर्चाओं में पूछें",
    },
    features: {
        heroTitle: "पूरा nginx, बिना टर्मिनल के",
        heroSubtitle:
            "वर्चुअल होस्ट्स और SSL प्रमाणपत्रों से लेकर स्ट्रीम्स, लॉग्स और कैशिंग तक — nginx के सबसे आम काम, एक साफ़-सुथरे और आधुनिक इंटरफ़ेस से।",
        tours: {
            hosts: {
                title: "होस्ट्स",
                bodies: [
                    "एक वर्चुअल होस्ट, संक्षेप में होस्ट, एक वेबसाइट है जिसे nginx सर्वर ब्राउज़र में खोलने के लिए उपलब्ध कराएगा। आप मुख्य मेनू पर, बाईं ओर प्रबंधित सभी होस्ट पा सकते हैं।",
                    "nginx ignition ऐसी वेबसाइटों को कॉन्फ़िगर करने का एक सहज तरीका प्रदान करता है। उदाहरण के लिए, यदि आपके पास एक NAS है और उस पर कुछ सेवाएँ चल रही हैं (जैसे Jellyfin, Vaultwarden और अधिक), ignition इसे jellyfin.myhome.com जैसे डोमेन से एक्सेस करने का एक आसान तरीका सक्षम करता है, जो IP और पोर्ट की तुलना में याद रखना और उपयोग करना बहुत आसान है।",
                    "प्रत्येक होस्ट के पास रूट्स का एक सेट होगा, जो ऐसे नियम हैं जो यह परिभाषित करते हैं कि किन अनुरोध पैटर्न को फॉरवर्ड किया जाना चाहिए और कहाँ, और बाइंडिंग्स, जो परिभाषाएँ हैं कि nginx को ऐसे अनुरोधों के लिए किन पोर्ट्स पर सुनना चाहिए।",
                ],
            },
            streams: {
                title: "स्ट्रीम्स",
                bodies: [
                    "जबकि होस्ट आपकी HTTP और HTTPS-आधारित सेवाओं को उजागर करने का मुख्य तरीका हैं, स्ट्रीम आपको अन्य सेवाओं को उजागर करने में सक्षम बनाती हैं जो TCP, UDP और यूनिक्स सॉकेट पर निर्भर करती हैं।",
                    "यदि आपको गेम सर्वर, डेटाबेस, DNS सर्वर और कुछ भी जो HTTP प्रोटोकॉल का उपयोग नहीं करता है, को उजागर करने की आवश्यकता है, तो स्ट्रीम जाने का रास्ता है।",
                ],
            },
            ssl: {
                title: "SSL प्रमाणपत्र",
                bodies: [
                    "यदि आप अपने डोमेन को HTTPS एन्क्रिप्शन के साथ सुरक्षित करना चाहते हैं या इसकी आवश्यकता है, तो ऐप ऐसे SSL प्रमाणपत्रों को प्रबंधित करने के लिए एक आसान तरीका भी प्रदान करता है।",
                    "चाहे आपको Let's Encrypt द्वारा समर्थित वैध प्रमाणपत्र की आवश्यकता हो, स्व-हस्ताक्षरित, या किसी तृतीय-पक्ष प्रदाता के लिए अपना कस्टम लाएं, ignition इसे आसानी से अनुमति देगा। यहां तक कि जब प्रमाणपत्र समाप्त होने वाला होता है, तो ऐप स्वचालित रूप से आपके लिए इसे नवीनीकृत कर देगा।",
                    "एक बार SSL प्रमाणपत्र बन जाने या आयात हो जाने के बाद, आप फ़ॉर्म में एक विकल्प का चयन करके इसे होस्ट पर उपयोग कर सकते हैं।",
                ],
            },
            logs: {
                title: "लॉग्स",
                bodies: [
                    "यह जानने की आवश्यकता है कि क्या अनुरोध किया गया है या कुछ अपेक्षा के अनुरूप काम क्यों नहीं कर रहा है? nginx ignition आपको nginx लॉग्स की जाँच करने का एक सरल तरीका भी प्रदान करता है। बस उस होस्ट (या स्वयं nginx सर्वर) का चयन करें जिसे आप देखना चाहते हैं कि क्या हो रहा है, और हम आपके लिए लॉग प्राप्त करेंगे।",
                    "और आपको अपनी डिस्क के लॉग से भरने के बारे में चिंता करने की ज़रूरत नहीं है, ignition उन्हें आपके लिए स्वचालित रूप से रोटेट करेगा (और आप नियंत्रित कर सकते हैं कि कितना रखना है, या यदि यह आपको सबसे अच्छा लगता है तो रोटेशन को अक्षम भी कर सकते हैं)।",
                ],
            },
            integrations: {
                title: "इंटीग्रेशन्स",
                bodies: [
                    "क्या आपका ऐप Docker कंटेनर में या TrueNAS में चल रहा है? आप nginx ignition द्वारा प्रदान किए जाने वाले नेटिव इंटीग्रेशन को सक्षम कर सकते हैं और आसानी से एक कंटेनर या ऐप को डेस्टिनेशन ऐप के रूप में चुन सकते हैं जिसे होस्ट को अनुरोधों को फॉरवर्ड करना चाहिए।",
                ],
            },
            vpn: {
                title: "VPNs",
                bodies: [
                    "आसानी से अपने होस्ट को अपने VPN में उजागर करें। यदि आप Tailscale का उपयोग कर रहे हैं, तो nginx ignition स्वचालित रूप से आपके नेटवर्क में एक वर्चुअल मशीन बना सकता है और जब भी मशीन IP या होस्टनाम एक्सेस किया जाता है तो अनुरोधों को होस्ट को फॉरवर्ड कर सकता है।",
                ],
            },
            accessLists: {
                title: "एक्सेस लिस्ट्स",
                bodies: [
                    "एक्सेस लिस्ट यह जाँचने का एक सरल तरीका प्रदान करती हैं कि क्या उपयोगकर्ता अधिकृत IPs की एक श्रृंखला से है या एक वैध यूज़रनेम और पासवर्ड (या दोनों, IP और क्रेडेंशियल) द्वारा पहचाना जाता है, जिससे रूट या पूरे होस्ट को सुरक्षित किया जा सके",
                ],
            },
            caches: {
                title: "कैश कॉन्फ़िगरेशन",
                bodies: [
                    "nginx की सामग्री कैशिंग क्षमताओं को सक्षम करके अपनी वेबसाइटों को गति दें और अपने अपस्ट्रीम सर्वर पर लोड कम करें। Ignition कैश नियमों को कॉन्फ़िगर करना आसान बनाता है जो यह निर्धारित करते हैं कि किन अनुरोधों को कैश किया जाना चाहिए और कितनी देर तक।",
                    "आप HTTP स्टेटस कोड, फ़ाइल एक्सटेंशन, अनुरोध विधियों और बहुत कुछ द्वारा कैश व्यवहार को कस्टमाइज़ कर सकते हैं। स्टेल सामग्री हैंडलिंग, बैकग्राउंड अपडेट और कंकरेंसी लॉक जैसी उन्नत सुविधाएँ आपको इस पर बारीक नियंत्रण देती हैं कि आपकी सामग्री कैसे कैश और सर्व की जाती है।",
                ],
            },
            settings: {
                title: "सेटिंग्स",
                bodies: [
                    "Ignition nginx की कॉन्फ़िगरेशन फ़ाइलों की जटिलता को दूर करता है, लेकिन इसका मतलब यह नहीं है कि आप कुछ ठीक समायोजन लागू करने की क्षमता खो देते हैं।",
                    "सेटिंग्स पेज के साथ, आप कुछ महत्वपूर्ण परिभाषाएँ जैसे टाइमआउट मान, अनुरोधों का अधिकतम अपलोड/बॉडी आकार, डिफ़ॉल्ट पोर्ट्स जिन पर nginx अनुरोधों के लिए सुनेगा और बहुत कुछ परिभाषित कर सकते हैं।",
                    "इसके अलावा, आप वहाँ nginx ignition की कुछ विशेषताओं को भी कॉन्फ़िगर कर सकते हैं, जैसे SSL प्रमाणपत्रों का स्वचालित नवीनीकरण और लॉग रोटेशन।",
                ],
            },
        },
        checklistTitle: "…और भी बहुत कुछ",
        checklistSubtitle:
            "नीचे दिया सब कुछ nginx ignition के साथ आउट ऑफ़ द बॉक्स मिलता है।",
        checklist: {
            virtualHosts: {
                title: "वर्चुअल होस्ट्स",
                body: "कस्टम डोमेन, रूट्स और पोर्ट बाइंडिंग वाले कई होस्ट।",
            },
            streams: {
                title: "स्ट्रीम्स",
                body: "SNI-आधारित रूटिंग, सर्किट ब्रेकर्स और लोड बैलेंसिंग के साथ TCP, UDP और Unix सॉकेट्स प्रॉक्सी करें।",
            },
            routing: {
                title: "बहुमुखी रूटिंग",
                body: "प्रॉक्सी (gRPC/gRPCS अपस्ट्रीम सहित), रीडायरेक्शन, कस्टम JS/Lua कोड, स्टेटिक रिस्पॉन्स और फ़ाइल सर्विंग।",
            },
            serverConfiguration: {
                title: "सर्वर कॉन्फ़िगरेशन",
                body: "अधिकतम बॉडी/अपलोड साइज़, सर्वर टोकन, टाइमआउट्स, लॉग लेवल और बहुत कुछ।",
            },
            sslCertificates: {
                title: "SSL प्रमाणपत्र",
                body: "स्वचालित Let's Encrypt (ACME), स्व-हस्ताक्षरित या अपने ख़ुद के प्रमाणपत्र।",
            },
            integrations: {
                title: "नेटिव इंटीग्रेशन्स",
                body: "Docker, Docker Swarm, Tailscale और NetBird VPN, तथा TrueNAS के लिए फ़र्स्ट-क्लास सपोर्ट।",
            },
            security: {
                title: "सुरक्षा",
                body: "दो-कारक प्रमाणीकरण, एट्रिब्यूट-आधारित एक्सेस कंट्रोल और प्रति-होस्ट एक्सेस लिस्ट्स।",
            },
            apiTokens: {
                title: "API टोकन",
                body: "स्क्रिप्ट्स और बाहरी टूल्स को प्रमाणित करने के लिए टोकन जनरेट और रद्द करें।",
            },
            logging: {
                title: "लॉगिंग",
                body: "सर्वर और हर होस्ट के लिए विस्तृत एक्सेस और एरर लॉग्स, स्वचालित रोटेशन के साथ।",
            },
            stats: {
                title: "ट्रैफ़िक आँकड़े",
                body: "होस्ट और अपस्ट्रीम के अनुसार रीयल-टाइम रिक्वेस्ट रेट, रिस्पॉन्स टाइम और ट्रैफ़िक ब्रेकडाउन।",
            },
            caching: {
                title: "कैशिंग",
                body: "कंटेंट डिलीवरी तेज़ करने के लिए बिल्ट-इन nginx कैश कॉन्फ़िगरेशन।",
            },
            execution: {
                title: "लचीला एक्ज़ीक्यूशन",
                body: "nginx को ignition से चलवाएं, या सिर्फ़ कॉन्फ़िगरेशन फ़ाइलें जनरेट करें।",
            },
        },
    },
    docs: {
        sidebarTitle: "गाइड्स",
        overview: "अवलोकन",
        fullReference: "GitHub पर पूरा रेफ़रेंस",
        fullDoc: "GitHub पर पूरा दस्तावेज़ देखें",
        previous: "पिछला",
        next: "अगला",
        heroTitle: "दस्तावेज़ीकरण",
        heroSubtitle:
            "nginx ignition को इंस्टॉल करने, कॉन्फ़िगर करने और चलाने से जुड़ी ज़रूरी बातें। हर गाइड प्रोजेक्ट रिपॉज़िटरी के पूरे दस्तावेज़ से लिंक करती है।",
        guides: {
            configuration: {
                title: "कॉन्फ़िगरेशन",
                summary:
                    "एनवायरनमेंट वेरिएबल्स, properties फ़ाइल, PostgreSQL और JWT सीक्रेट।",
            },
            "api-tokens": {
                title: "API टोकन",
                summary:
                    "पासवर्ड साझा किए बिना स्क्रिप्ट्स और CI जॉब्स को API से प्रमाणित करें।",
            },
            "health-checks": {
                title: "हेल्थ चेक",
                summary:
                    "Docker, Kubernetes और मॉनिटरिंग के लिए लाइवनेस और रेडीनेस एंडपॉइंट।",
            },
            "backup-restore": {
                title: "बैकअप और रीस्टोर",
                summary:
                    "SQLite और PostgreSQL के लिए डेटाबेस बैकअप रीस्टोर करने का तरीक़ा।",
            },
            troubleshooting: {
                title: "ट्रबलशूटिंग",
                summary:
                    "सबसे पहले कहां देखें, और लुप्त पासवर्ड कैसे रीसेट करें।",
            },
        },
        referenceTitle: "GitHub पर पूरा रेफ़रेंस",
        referenceBody:
            "यहां की गाइड्स ज़रूरी बातें कवर करती हैं। पूरा विस्तृत रेफ़रेंस प्रोजेक्ट रिपॉज़िटरी में अंग्रेज़ी में रखा जाता है:",
        reference: {
            config: {
                title: "कॉन्फ़िगरेशन प्रॉपर्टीज़",
                body: "हर एनवायरनमेंट वेरिएबल और प्रॉपर्टी, डिफ़ॉल्ट के साथ।",
            },
            migration: {
                title: "माइग्रेशन गाइड",
                body: "nginx ignition 1.x से 2.x पर अपग्रेड करना।",
            },
            apiTokens: {
                title: "API टोकन",
                body: "पूरा API टोकन दस्तावेज़।",
            },
            healthChecks: {
                title: "हेल्थ चेक",
                body: "एंडपॉइंट और उपयोग परिदृश्य।",
            },
            restore: {
                title: "डेटाबेस रीस्टोर",
                body: "पूरी रीस्टोर गाइड।",
            },
            troubleshooting: {
                title: "ट्रबलशूटिंग",
                body: "आम समस्याएं और रिकवरी चरण।",
            },
            screenshots: {
                title: "स्क्रीनशॉट गैलरी",
                body: "ऐप्लिकेशन की हर स्क्रीन, जानकारी के साथ।",
            },
            changelog: {
                title: "चेंजलॉग",
                body: "हर रिलीज़ में क्या बदला।",
            },
            security: {
                title: "सुरक्षा नीति",
                body: "कमज़ोरियाँ कैसे रिपोर्ट करें।",
            },
        },
        helpTitle: "मदद पाएं",
        helpBody:
            "कोई समस्या मिली या कोई सवाल है? GitHub के इश्यूज़ और डिस्कशन्स ही सही जगह हैं — फ़ीचर सुझाव भी यहीं दिए जाते हैं।",
        helpIssues: "इश्यू खोलें",
        helpDiscussions: "चर्चा शुरू करें",
    },
    docPages: {
        configuration: {
            lead: "nginx ignition को एनवायरनमेंट वेरिएबल्स या properties फ़ाइल से कॉन्फ़िगर किया जाता है। हर सेटिंग की एक ही कुंजी होती है: एनवायरनमेंट वेरिएबल के रूप में यह अपरकेस और अंडरस्कोर के साथ होती है (NGINX_IGNITION_SERVER_PORT), और properties फ़ाइल में लोअरकेस और डॉट्स के साथ (nginx-ignition.server.port)।",
            envTitle: "प्रमुख एनवायरनमेंट वेरिएबल्स",
            envBody:
                "ज़्यादातर इंस्टॉलेशन के लिए ज़रूरी चीज़ें। हर प्रॉपर्टी का एक डिफ़ॉल्ट मान होता है, इसलिए आम तौर पर आप सिर्फ़ वही सेट करते हैं जो बदलना है।",
            envVarCol: "वेरिएबल",
            envDescriptionCol: "विवरण",
            envExampleCol: "उदाहरण",
            envMore:
                "पूरा रेफ़रेंस हर प्रॉपर्टी को डिफ़ॉल्ट और उदाहरणों के साथ सूचीबद्ध करता है।",
            envVars: {
                NGINX_IGNITION_SERVER_PORT: {
                    description:
                        "वह पोर्ट जहां nginx ignition रिक्वेस्ट्स के लिए सुनता है",
                    example: "8090",
                },
                NGINX_IGNITION_SERVER_ADDRESS: {
                    description:
                        "वह एड्रेस जहां nginx ignition रिक्वेस्ट्स के लिए सुनता है",
                    example: "0.0.0.0",
                },
                NGINX_IGNITION_NGINX_BINARY_PATH: {
                    description: "इस्तेमाल होने वाली nginx बाइनरी का पाथ",
                    example: "/usr/sbin/nginx",
                },
                NGINX_IGNITION_NGINX_CONFIG_PATH: {
                    description:
                        "जनरेट की गई nginx कॉन्फ़िगरेशन फ़ाइलें कहां रखी जाती हैं",
                    example: "/etc/nginx",
                },
                NGINX_IGNITION_DATABASE_DRIVER: {
                    description: "डेटाबेस प्रकार: sqlite या postgres",
                    example: "postgres",
                },
                NGINX_IGNITION_DATABASE_HOST: {
                    description: "डेटाबेस होस्टनेम या IP",
                    example: "192.168.1.150",
                },
                NGINX_IGNITION_DATABASE_PORT: {
                    description: "वह पोर्ट जहां डेटाबेस सुनता है",
                    example: "5432",
                },
                NGINX_IGNITION_DATABASE_NAME: {
                    description: "इस्तेमाल होने वाले डेटाबेस का नाम",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_SSL_MODE: {
                    description:
                        "डेटाबेस कनेक्शन एन्क्रिप्ट करें: require या disable",
                    example: "disable",
                },
                NGINX_IGNITION_DATABASE_USERNAME: {
                    description: "डेटाबेस यूज़रनेम",
                    example: "nginx_ignition",
                },
                NGINX_IGNITION_DATABASE_PASSWORD: {
                    description: "डेटाबेस पासवर्ड",
                    example: "your-password",
                },
                NGINX_IGNITION_DATABASE_DATA_PATH: {
                    description:
                        "वह फ़ोल्डर जहां SQLite डेटाबेस फ़ाइल रखी जाती है",
                    example: "/opt/nginx-ignition/data",
                },
                NGINX_IGNITION_SECURITY_JWT_SECRET: {
                    description:
                        "प्रमाणीकरण टोकन पर हस्ताक्षर के लिए कस्टम सीक्रेट (ठीक 64 अक्षर); सिर्फ़ पहले बूट पर पढ़ा जाता है",
                    example: "(रैंडम)",
                },
                NGINX_IGNITION_SECURITY_JWT_TTL_SECONDS: {
                    description:
                        "निष्क्रियता से लॉग आउट होने तक सेशन टोकन कितनी देर वैध रहता है",
                    example: "3600",
                },
                NGINX_IGNITION_HEALTH_CHECK_ENABLED: {
                    description: "हेल्थ चेक एंडपॉइंट एनेबल या डिसेबल करें",
                    example: "true",
                },
                NGINX_IGNITION_PASSWORD_RESET_USERNAME: {
                    description:
                        "बूट पर इस यूज़र का पासवर्ड रीसेट करता है और बाहर निकल जाता है; रिकवरी के लिए इस्तेमाल होता है",
                    example: "admin",
                },
            },
            postgresTitle: "PostgreSQL (प्रोडक्शन के लिए अनुशंसित)",
            postgresBody:
                "एम्बेडेड SQLite डेटाबेस क्विक टेस्ट के लिए बढ़िया है, लेकिन लंबी अवधि के इंस्टॉलेशन के लिए PostgreSQL इस्तेमाल करना चाहिए। डेटाबेस वेरिएबल्स से ignition को अपने डेटाबेस पर पॉइंट करें:",
            postgresNote:
                "सभी ज़रूरी टेबल्स और इंडेक्स पहले बूट पर अपने-आप बन जाते हैं, और अपग्रेड पर अपने-आप अपडेट हो जाते हैं।",
            configFileTitle: "कॉन्फ़िगरेशन फ़ाइल",
            configFileBody:
                "सेटिंग्स एक properties फ़ाइल से भी आ सकती हैं, वही कुंजियाँ लोअरकेस और डॉट्स के साथ। ignition इस क्रम में पढ़ता है: NGINX_IGNITION_CONFIG_FILE_PATH पर मौजूद फ़ाइल, --config के साथ दिया गया पाथ, या वर्किंग डायरेक्टरी की nginx-ignition.properties।",
            jwtTitle: "कस्टम JWT सीक्रेट",
            jwtBody:
                "डिफ़ॉल्ट रूप से एक सुरक्षित रैंडम सीक्रेट जनरेट होकर डेटाबेस में स्टोर होता है। अपना देना है तो पहले बूट से पहले NGINX_IGNITION_SECURITY_JWT_SECRET को ठीक 64 अक्षरों के साथ सेट करें। किसी ऐसे संस्करण से अपग्रेड कर रहे हैं जो यह वेरिएबल इस्तेमाल करता था? इसे वहीं रखें: अपग्रेड के बाद पहले बूट पर इसका मान डेटाबेस में स्टोर हो जाता है।",
        },
        apiTokens: {
            lead: "API टोकन स्क्रिप्ट्स, CI जॉब्स और अन्य टूल्स को आपका यूज़रनेम और पासवर्ड साझा किए बिना nginx ignition API से प्रमाणित होने देते हैं। हर टोकन उसे बनाने वाले यूज़र का होता है और उसी यूज़र की अनुमतियों के साथ चलता है।",
            createTitle: "टोकन बनाना",
            createStep1:
                "इंटरफ़ेस के ऊपर-दाएं कोने में यूज़र मेन्यू खोलें।",
            createStep2: "API टोकन टैब पर जाएं।",
            createStep3: "\"नया टोकन\" पर क्लिक करें।",
            createStep4: "इसे एक नाम दें और चाहें तो समाप्ति तिथि भी।",
            createStep5:
                "\"टोकन बनाएं\" पर क्लिक करें और जनरेट किया गया मान कॉपी करें — यह सिर्फ़ एक बार दिखाया जाता है।",
            createNote1:
                "नाम आपके अपने टोकन में अनोखा होना चाहिए और 256 अक्षरों तक का हो सकता है। कुछ वर्णनात्मक रखें, जैसे ci-deploy या home-assistant।",
            createNote2:
                "समाप्ति तिथि वैकल्पिक है। इसके बिना टोकन कभी समाप्त नहीं होता; सेट करने पर यह भविष्य की तारीख़ होनी चाहिए और वह पल बीतते ही टोकन काम करना बंद कर देता है।",
            createNote3:
                "टोकन का मान सिर्फ़ एक बार, बनने के तुरंत बाद दिखाया जाता है और बाद में वापस नहीं पाया जा सकता। खो गया तो टोकन रद्द करें और नया बनाएं।",
            useTitle: "टोकन का उपयोग",
            useBody:
                "टोकन को Authorization हेडर में Bearer स्कीम के साथ भेजें, ठीक वैसे ही जैसे सेशन टोकन:",
            useError:
                "अमान्य, रद्द किए गए या समाप्त टोकन पर 401 Unauthorized मिलता है; आरक्षित ऑपरेशन्स पर 403 Forbidden मिलता है।",
            useNote:
                "API टोकन सिर्फ़ API कॉल्स को प्रमाणित करते हैं: वेब इंटरफ़ेस में लॉगिन के लिए अब भी यूज़रनेम और पासवर्ड चाहिए।",
            permissionsTitle: "अनुमतियाँ",
            permissionsBody1:
                "टोकन उस यूज़र की अनुमतियाँ विरासत में लेता है जो उसका मालिक है, और मालिक से अलग उन्हें सीमित करने का कोई तरीक़ा नहीं है।",
            permissionsBody2:
                "अगर किसी टोकन को अलग अनुमतियाँ चाहिए, तो मनचाहे एक्सेस लेवल वाला एक समर्पित सर्विस यूज़र बनाएं और उसी अकाउंट से टोकन जनरेट करें।",
            reservedTitle: "आरक्षित ऑपरेशन्स",
            reservedBody:
                "कुछ ऑपरेशन्स इंटरैक्टिव सेशन के लिए आरक्षित हैं और टोकन से नहीं किए जा सकते:",
            reservedItem1: "प्रोफ़ाइल या पासवर्ड बदलना।",
            reservedItem2:
                "दो-कारक प्रमाणीकरण पढ़ना, सक्रिय या निष्क्रिय करना।",
            reservedItem3: "API टोकन की सूची देखना, बनाना या रद्द करना।",
            reservedItem4:
                "लॉग आउट करना (जो सिर्फ़ इंटरैक्टिव सेशन अमान्य करता है)।",
            reservedException:
                "GET /api/users/current से अपनी प्रोफ़ाइल पढ़ना एकमात्र अपवाद है: टोकन को यह करने की अनुमति है।",
            lifecycleTitle: "टोकन का जीवनचक्र",
            lifecycle1Title: "अपने-आप रिन्यू नहीं होता",
            lifecycle1Body:
                "वेब सेशन के उलट, API टोकन कभी अपने-आप बढ़ाए नहीं जाते; सिर्फ़ प्रति-टोकन समाप्ति तिथि मायने रखती है।",
            lifecycle2Title: "तुरंत रद्दीकरण",
            lifecycle2Body:
                "हर रिक्वेस्ट टोकन को डेटाबेस से जांचती है, इसलिए रद्द करते ही टोकन अगली कॉल से काम करना बंद कर देता है।",
            lifecycle3Title: "डिसेबल किए गए यूज़र",
            lifecycle3Body:
                "किसी यूज़र को डिसेबल करने पर उसके टोकन काम करना बंद कर देते हैं, पर कुछ हटाया नहीं जाता; यूज़र को फिर एनेबल करने पर वे दोबारा काम करने लगते हैं।",
            upgradeNote:
                "2.47.0 से पुराने संस्करण से अपग्रेड करने पर सभी यूज़र एक बार साइन आउट हो जाते हैं, क्योंकि टोकन का फ़ॉर्मैट बदल गया है। बाद में बस दोबारा साइन इन करें।",
        },
        healthChecks: {
            lead: "हेल्थ चेक एंडपॉइंट का उपयोग कंटेनर ऑर्केस्ट्रेशन प्लेटफ़ॉर्म (जैसे Docker) और मॉनिटरिंग सिस्टम ऐप्लिकेशन की स्थिति और उपलब्धता जांचने के लिए कर सकते हैं।",
            disableTitle: "एनेबल और डिसेबल करना",
            disableBody:
                "दोनों एंडपॉइंट डिफ़ॉल्ट रूप से एनेबल हैं। उन्हें डिसेबल करने के लिए NGINX_IGNITION_HEALTH_CHECK_ENABLED को false पर सेट करें।",
            endpointsTitle: "एंडपॉइंट",
            livenessTitle: "लाइवनेस एंडपॉइंट",
            livenessBody:
                "जांचता है कि ऐप्लिकेशन चल रहा है और उसके आंतरिक कंपोनेंट्स — जैसे डेटाबेस कनेक्शन — स्वस्थ हैं।",
            livenessCode200: "200 OK: ऐप्लिकेशन स्वस्थ है",
            livenessCode503:
                "503 Service Unavailable: एक या अधिक महत्वपूर्ण कंपोनेंट्स अस्वस्थ हैं",
            livenessExampleLabel: "उदाहरण रिस्पॉन्स",
            readinessTitle: "रेडीनेस एंडपॉइंट",
            readinessBody:
                "बताता है कि ऐप्लिकेशन ट्रैफ़िक लेने के लिए तैयार है — स्टार्टअप या डिप्लॉयमेंट के दौरान उपयोगी।",
            readinessCode200: "200 OK: रिक्वेस्ट्स लेने के लिए तैयार",
            dockerTitle: "Docker Compose",
            dockerBody: "कंटेनर हेल्थ चेक में लाइवनेस एंडपॉइंट इस्तेमाल करें:",
            kubernetesTitle: "Kubernetes प्रोब्स",
            kubernetesBody: "अपने डिप्लॉयमेंट में दोनों प्रोब्स कॉन्फ़िगर करें:",
        },
        backupRestore: {
            lead: "निर्यात और बैकअप पेज डाउनलोड करने योग्य डेटाबेस बैकअप बनाता है। इसे रीस्टोर करने का तरीक़ा इस्तेमाल हो रहे डेटाबेस पर निर्भर करता है: SQLite के लिए आपको एक ही .db फ़ाइल (nginx-ignition.db) मिलती है, और PostgreSQL के लिए एक सादी SQL फ़ाइल (nginx-ignition.sql)।",
            safetyTitle: "शुरू करने से पहले",
            safety1:
                "ऐप्लिकेशन (या उसका कंटेनर) रोक दें ताकि डेटाबेस बदलते समय उसमें कोई न लिखे।",
            safety2:
                "कुछ भी ओवरराइट करने से पहले बैकअप की एक अतिरिक्त कॉपी हमेशा रखें।",
            sqliteTitle: "SQLite डेटाबेस रीस्टोर करना",
            sqliteBody:
                "यह तब लागू होता है जब ignition एम्बेडेड SQLite डेटाबेस के साथ चलता है, जो नई इंस्टॉल का डिफ़ॉल्ट है। आधिकारिक Docker इमेज फ़ाइल को /opt/nginx-ignition/data/nginx-ignition.db पर अपेक्षित करती है; NGINX_IGNITION_DATABASE_DATA_PATH वेरिएबल उस फ़ोल्डर को बदलता है।",
            sqliteOptionATitle: "फ़ाइल को चल रहे कंटेनर में कॉपी करें",
            sqliteOptionAStep1: "कंटेनर का नाम ढूंढें: docker ps",
            sqliteOptionAStep2: "ऐप रोकें: docker stop <container>",
            sqliteOptionAStep3:
                "फ़ाइल कॉपी करें: docker cp ./nginx-ignition.db <container>:/opt/nginx-ignition/data/nginx-ignition.db",
            sqliteOptionAStep4:
                "ऐप फिर शुरू करें: docker start <container>",
            sqliteOptionBTitle:
                "या फ़ाइल को वहीं बदलें जहां डेटा फ़ोल्डर है",
            sqliteOptionBStep1: "कंटेनर रोकें।",
            sqliteOptionBStep2:
                "अपने बाइंड माउंट (या वॉल्यूम) की फ़ाइल पर बैकअप कॉपी करें।",
            sqliteOptionBStep3: "कंटेनर फिर शुरू करें।",
            postgresTitle: "PostgreSQL डेटाबेस रीस्टोर करना",
            postgresBody:
                "आधिकारिक psql क्लाइंट से .sql डंप रीस्टोर करें। यह मानता है कि लक्ष्य डेटाबेस मौजूद और खाली है, और यूज़र के पास डंप में ऑब्जेक्ट्स बनाने के अधिकार हैं।",
            postgresStep1:
                "रीस्टोर के दौरान लिखावट से बचने के लिए ऐप रोकें: docker stop <container>",
            postgresStep2: "लक्ष्य डेटाबेस की ओर psql इंगित करके चलाएं।",
            postgresStep3: "पूछे जाने पर डेटाबेस पासवर्ड डालें।",
            postgresStep4: "ऐप फिर शुरू करें।",
        },
        troubleshooting: {
            lead: "nginx ignition को मददगार और उपयोगी लॉग्स के साथ डिज़ाइन किया गया है। अगर कुछ काम नहीं कर रहा और इंटरफ़ेस में फ़ीडबैक साफ़ नहीं है, तो ऐप्लिकेशन लॉग्स से शुरू करें — Docker के साथ, कंटेनर का stdout।",
            logsLink: "Docker लॉगिंग दस्तावेज़",
            passwordTitle: "पासवर्ड रीसेट",
            passwordBody:
                "पासवर्ड भूल गए? कंटेनर पर नीचे दिया एनवायरनमेंट वेरिएबल सेट करें। यह बूट पर लक्ष्य यूज़र का पासवर्ड रीसेट करता है, नया रैंडम पासवर्ड लॉग्स में प्रिंट करता है, और फिर ऐप शुरू किए बिना बंद हो जाता है:",
            passwordNote:
                "वेरिएबल सेट होने पर हर बार ऐप चलने पर पासवर्ड बदलता है, इसलिए इसे एक बार चलाएं, नया पासवर्ड नोट करें, और वेरिएबल हटा दें।",
            helpTitle: "फिर भी अटके हैं?",
            helpBody:
                "अगर लॉग्स और यहां की गाइड्स से हल नहीं निकलता, तो संपर्क करें:",
            helpIssues: "GitHub पर इश्यू खोलें",
            helpDiscussions: "चर्चाओं में पूछें",
        },
    },
    notFound: {
        title: "पेज नहीं मिला",
        body: "जो पेज आप खोज रहे हैं वह मौजूद नहीं है, या स्थानांतरित हो गया है।",
        home: "होम पेज पर वापस जाएं",
        features: "फ़ीचर्स देखें",
        docs: "दस्तावेज़ीकरण ब्राउज़ करें",
    },
    footer: {
        tagline:
            "nginx वेब सर्वर के लिए एक आधुनिक, सहज वेब इंटरफ़ेस। डेवलपर्स और शौक़ीन लोगों के लिए बनाया गया।",
        product: "प्रोडक्ट",
        releases: "रिलीज़",
        community: "कम्युनिटी",
        issues: "इश्यूज़",
        discussions: "चर्चाएं",
        linkedin: "LinkedIn",
        resources: "रिसोर्सेज़",
        configReference: "कॉन्फ़िगरेशन रेफ़रेंस",
        screenshots: "स्क्रीनशॉट गैलरी",
        changelog: "चेंजलॉग",
        security: "सुरक्षा नीति",
        license: "MIT लाइसेंस",
        madeWith: "ब्राज़ील से ❤️ के साथ बनाया गया",
        copyright: "© {{year}} Lucas Dillmann",
    },
}

export default hi
