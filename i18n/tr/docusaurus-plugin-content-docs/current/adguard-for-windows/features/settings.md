---
title: Ayarlar
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

_Ayarlar_ en fazla dikkat gerektiren bölümdür. Burası, uygulamayı gereksinimlerinizi tam olarak karşılayacak şekilde yapılandırabileceğiniz yerdir: yalnızca sizi rahatsız edenleri engeller, güvenilir sağlayıcının DNS sunucusunu kullanır, üçüncü taraf tanımlama bilgilerini kaldırır, vb.

![Ayarlar \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Genel ayarlar

Burada dili ve temayı (Koyu veya Açık) ayarlayabilir, AdGuard'ın sistem başlangıcında başlatılmasını ve sessiz otomatik güncellemeleri etkinleştirebilir, güncelleme kanalını ve filtre güncelleme denetimi aralığını seçebilirsiniz. Ayrıca Ayarlar, Windows için AdGuard düzgün çalışmıyorsa ve destek ekibi sizden [_Hata ayıklama günlüklerini_ toplamanızı](/adguard-for-windows/solving-problems/adguard-logs.md) istediyse gidilecek yerdir.

![Advanced Settings \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Ekranın en altında _Gelişmiş Ayarlar_ öğesini bulacaksınız. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. Bu nedenle, bu bölümü yalnızca ne yaptığınızdan eminseniz veya destek ekibimiz size sormuşsa açmanızı tavsiye ederiz. _Gelişmiş Ayarlar_ öğesinde nelerin ayarlanabileceğini öğrenmek istiyorsanız [özel makaleyi](/adguard-for-windows/solving-problems/low-level-settings.md) okuyun.

### Reklam Engelleyici

Bu, ziyaret ettiğiniz sitelerden ve cihazınızda yüklü uygulamalardan reklamları kaldıran Windows için AdGuard'ın ana modülüdür. To filter out advertising and privacy-threatening content such as banners, popups, or trackers AdGuard uses different filters — groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Reklam engelleyici \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

Reklam Engelleyici modülünde şunları yapabilirsiniz:

- enable automatic activation of language-specific filters,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- disable ads in the Start menu on Windows 11,
- activate pre-installed filters such as _AdGuard Base filter_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- make changes to existing rule groups using the _Filter editor_ button,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. From there you can also block or unblock any request by creating a custom rule,
- compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Gizlilik Modu

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Gizlilik Modu, kişisel bilgilerinizi bu tür veri ve istatistik toplama sistemlerinden korur.

![Stealth Mode \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Gizlilik Modun çalışmasını esnek bir şekilde ayarlayabilirsiniz: örneğin, sitenin internette bulmak için kullandığınız arama isteğini almasını yasaklayabilir, hem üçüncü taraf hem de sitenin kendi çerezlerini otomatik olarak silebilir ve tarayıcınızda nerede olduğunuzu izlemek için kullanılabilecek konum paylaşımını devre dışı bırakabilirsiniz.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Gezinti koruması

Gezinti koruması, kötü amaçlı ve kimlik avı sitelerine karşı güçlü koruma sağlar. Hayır, Windows için AdGuard bir antivirüs değildir. Ne bir virüs indirilmeye başlandığında bunu durdurur ne de var olanları siler. Ancak, alan adı "güvenilmeyen siteler" veri tabanımıza eklenmiş bir sitesine gitmek veya böyle bir siteden bir dosya indirmek üzereyseniz sizi uyarır. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module, you can:

- kötü amaçlı ve kimlik avı sitelerine yönelik istekleri engellemek için bildirimleri etkinleştirin,
- sesli bildirimleri etkinleştirin,
- kötü amaçlı ve kimlik avı siteleri veri tabanını güncel tutmamıza yardımcı olması için AdGuard sunucusuna anonim güvenlikle ilgili bilgiler göndermeyi kabul edin.

![Gezinti koruması \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Gezinti koruması hakkında daha fazla bilgi edinmek isterseniz [bu makaleyi](/genel/browsing-security) okuyun.

### DNS Koruması

DNS koruma ayarlarını keşfetmek istemenizin üç önemli nedeni vardır. İlk olarak, İSS'niz tarafından izlenmekten kaçınmak için. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Genellikle, DNS sunucusu İSS'nize aittir ve bu da çevrimiçi etkinliğinizi izlemelerine olanak tanır. İkincisi, DNS trafiğinizi şifrelemek için. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Koruması \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

v7.20 sürümünden itibaren, önceden oluşturulmuş güvenilir filtreler listesinden seçerek de filtre ekleyebilirsiniz. Size kolaylık sağlamak için dört kategoriye ayrılmıştır:

- **Genel**: reklamları ve izleyicileri engelleyin
- **Bölgesel**: Dile özgü sitelerde reklamları ve izleyicileri engelleyin
- **Güvenlik**: Kimlik avı ve güvenilir olmayan siteleri engelleyin
- **Diğer**: Yukarıdaki kategorilere uymayan özel kullanım durumlarını kapsar

![DNS filtreleri \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Tarayıcı Asistanı

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
