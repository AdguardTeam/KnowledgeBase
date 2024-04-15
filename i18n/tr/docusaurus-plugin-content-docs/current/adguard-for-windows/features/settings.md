---
title: Ayarlar
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

_Settings_ is the section that requires the most attention. Burası, uygulamayı gereksinimlerinizi tam olarak karşılayacak şekilde yapılandırabileceğiniz yerdir: yalnızca sizi rahatsız edenleri engeller, güvenilir sağlayıcının DNS sunucusunu kullanır, üçüncü taraf tanımlama bilgilerini kaldırır, vb.

![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Genel ayarlar

Burada dili ve temayı (Koyu veya Açık) ayarlayabilir, AdGuard'ın sistem başlangıcında başlatılmasını ve sessiz otomatik güncellemeleri etkinleştirebilir, güncelleme kanalını ve filtre güncelleme denetimi aralığını seçebilirsiniz. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. Bu nedenle, bu bölümü yalnızca ne yaptığınızdan eminseniz veya destek ekibimiz size sormuşsa açmanızı tavsiye ederiz. If you want to know what can be set up in _Advanced Setting_ read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Reklam Engelleyici

Bu, ziyaret ettiğiniz sitelerden ve cihazınızda yüklü uygulamalardan reklamları kaldıran Windows için AdGuard'ın ana modülüdür. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

Reklam Engelleyici modülünde şunları yapabilirsiniz:

- enable automatic activation of language-specific filters,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- activate pre-installed filters such as _AdGuard Base filter_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- make changes to existing rule groups using the _Filter editor_ button,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. From there you can also block or unblock any request by creating a custom rule,
- compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Stealth Mode

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Gizlilik Modu, kişisel bilgilerinizi bu tür veri ve istatistik toplama sistemlerinden korur.

![Stealth Mode \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Gizlilik Modun çalışmasını esnek bir şekilde ayarlayabilirsiniz: örneğin, sitenin internette bulmak için kullandığınız arama isteğini almasını yasaklayabilir, hem üçüncü taraf hem de sitenin kendi çerezlerini otomatik olarak silebilir ve tarayıcınızda nerede olduğunuzu izlemek için kullanılabilecek konum paylaşımını devre dışı bırakabilirsiniz.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Browsing security

Browsing security gives strong protection against malicious and phishing websites. Hayır, Windows için AdGuard bir antivirüs değildir. Ne bir virüs indirilmeye başlandığında bunu durdurur ne de var olanları siler. Ancak, alan adı "güvenilmeyen siteler" veri tabanımıza eklenmiş bir sitesine gitmek veya böyle bir siteden bir dosya indirmek üzereyseniz sizi uyarır. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

Bu modülde şunları yapabilirsiniz

- kötü amaçlı ve kimlik avı sitelerine yönelik istekleri engellemek için bildirimleri etkinleştirin,
- sesli bildirimleri etkinleştirin,
- kötü amaçlı ve kimlik avı siteleri veri tabanını güncel tutmamıza yardımcı olması için AdGuard sunucusuna anonim güvenlikle ilgili bilgiler göndermeyi kabul edin.

![Browsing security \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Koruması

DNS koruma ayarlarını keşfetmek istemenizin üç önemli nedeni vardır. İlk olarak, İSS'niz tarafından izlenmekten kaçınmak için. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Genellikle, DNS sunucusu İSS'nize aittir ve bu da çevrimiçi etkinliğinizi izlemelerine olanak tanır. İkincisi, DNS trafiğinizi şifrelemek için. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. Özel DNS sunucuları bile ekleyebilirsiniz. Also there is an option to add custom rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). And if necessary, you can add [DNS filters of your choice](https://filterlists.com).

### Ebeveyn Denetimi

Çocuklar tarafından kullanılan bir bilgisayardan erişimin kısıtlanması gereken birkaç site vardır. Bu görev Ebeveyn Denetimi tarafından gerçekleştirilir.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Modül, tarayıcıda açılan web sayfalarının içeriğini kontrol eder ve çocuklar için istenmeyen içeriğe sahip olanları filtreler: yetişkinler için resimler ve metinler, kaba dil, şiddet, uyuşturucu kullanımı, vb. Ebeveyn Denetimi ayarları parola korumalıdır, böylece çocuk kısıtlamaların ötesine geçemez. Bu modül sadece istenmeyen sitelere yönlendirmeleri engellemekle kalmaz, aynı zamanda çocuklar için uygun olmayan bağlantıları da arama sonuçlarından silebilir.

In the Parental Control module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Tarayıcı Asistanı

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Bu sekmeden, birincil işlevi filtrelemeyi doğrudan tarayıcıdan yönetmek olan Tarayıcı Asistanı yüklemeye kolayca devam edebilirsiniz. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
