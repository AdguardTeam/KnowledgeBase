---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

:::note Disclaimer

AdGuard for Android is not to be confused with AdGuard Content Blocker. AdGuard Content Blocker is an app available in Google Play that has truncated functionality to meet restrictions imposed by the store. AdGuard for Android, on the contrary, is a powerful app to block ads, manage applications, and perform other roles that will be described in this article. İndirilebileceği tek yer [AdGuard sitesi](https://adguard.com/adguard-android/overview.html).

:::

## Koruma

Bu ekran, AdGuard korumasının tüm özelliklerini bir araya getirir:

- Reklam engelleme
- İzleme koruması
- Can sıkıcı öğe engelleme
- DNS koruması
- Güvenlik duvarı
- Browsing Security
- AdGuard VPN ile entegrasyon

Her bir özellikle ilgili daha fazla bilgi aşağıdadır.

### Reklam engelleme

Bu özellik, reklam engelleme ve dile özgü filtreler uygulayarak reklamları engeller. Reklam engelleme mekanizması hakkında bilgi edinmek için [özel makalesini](/general/ad-filtering/how-ad-blocking-works) okuyabilirsiniz.

Temel koruma, çoğu sitedeki reklamları etkili bir şekilde engeller. Daha özelleştirilmiş reklam engelleme için şunları yapabilirsiniz:

- Dile özgü uygun filtreleri etkinleştirin — belirli dillerdeki sitelerinde reklamları engellemek için filtreleme kuralları içerirler

- Siteleri izin listesine ekleyin — bu siteleri AdGuard tarafından filtrelenmeyecek

- Kullanıcı kuralları oluşturun — AdGuard bunları belirtilen sitelere uygular. [Kendi kullanıcı kurallarınızı nasıl oluşturacağınızı öğrenin](/general/ad-filtering/create-own-filters)

![Reklam engelleme *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### İzleme koruması

*Tracking protection* (formerly known as *Stealth Mode*) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![İzleme koruması *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

*Tracking protection* has three pre-configured levels of privacy protection (*Standard*, *High*, and *Extreme*) and one user-defined level (*Custom*). *Custom* allows you to set your own tracking protection parameters. [Learn more about other Tracking protection settings](/general/stealth-mode)

Here are the active features of the pre-configured levels:

1. **Standart**

    a. *İzleyicileri engelleyin*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *Sitelerden sizi izlememelerini isteyin*. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    c. *X-Client-Data başlığını kaldırın*. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **Yüksek**

    a. *İzleyicileri engelleyin*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *İzleme parametrelerini URL'lerden kaldırın*. This feature uses *AdGuard URL Tracking filter* to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

    c. *Hide your search queries*. This feature hides queries for websites visited from a search engine

    d. *Sitelerden sizi izlememelerini isteyin*. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    e. *Kendini yok eden üçüncü taraf çerezler*. This feature limits the lifetime of third-party cookies to 180 minutes

    :::dikkat

    This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. Yalnızca izleme çerezlerini engellemek için *Standart* koruma düzeyini kullanın.


:::

    f. *X-Client-Data başlığını kaldırın*. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

3. **Extreme** (formerly known as *Ultimate*)

    a. *İzleyicileri engelleyin*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *İzleme parametrelerini URL'lerden kaldırın*. This feature uses *AdGuard URL Tracking filter* to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

    c. *Hide your search queries*. This feature hides queries for websites visited from a search engine

    d. *Sitelerden sizi izlememelerini isteyin*. Bu özellik, ziyaret ettiğiniz sitelere [Global Privacy Control](https://globalprivacycontrol.org/) ve [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) sinyallerini göndererek web uygulamalarından etkinliğinizin izlenmesini devre dışı bırakmasını ister

    e. *Kendini yok eden üçüncü taraf çerezler*. This feature limits the lifetime of third-party cookies to 180 minutes

    :::caution

    This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. Yalnızca izleme çerezlerini engellemek için *Standart* koruma düzeyini kullanın.


:::

    f. *WebRTC'i engelle*. This feature blocks WebRTC, a known vulnerability that can leak your real IP address even if you use a proxy or VPN

    g. *Block Push API*. This feature prevents your browsers from receiving push messages from servers

    h. *Konum API'i engelle*. This feature prevents browsers from accessing your GPS data and determining your location

    i. *Referer'i üçüncü taraflardan gizle*. This feature prevents third parties from knowing which websites you visit. It hides the HTTP header that contains the URL of the initial page and replaces it with a default or custom one that you can set

    j. *Kullanıcı Aracısını gizle*. This feature removes identifying information from the User-Agent header, which typically includes the name and version of the browser, the operating system, and language settings

    k. *X-Client-Data başlığını kaldırın*. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

### Can sıkıcı öğe engelleme

This feature is based on AdGuard's annoyance filters and allows you to block popups, online assistant windows, cookie notifications, prompts to download mobile apps, and similar annoyances. [Can sıkıcı öğe filtreleri hakkında daha fazla bilgi edinin](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS koruması

*DNS protection* allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Some DNS servers have blocklists that help block DNS requests to potentially harmful domains

- DNS sunucularına ek olarak, AdGuard özel bir DNS filtresi kullanarak DNS isteklerini kendi başına filtreleyebilir. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- You can also block and unblock domains by creating user rules. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS koruması *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS sunucusu

In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:

- Click *Add DNS server* and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and click *Add to AdGuard* next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

 Varsayılan olarak, *Otomatik DNS* seçilidir. It sets a DNS server based on your AdGuard and device settings. If you have integration with AdGuard VPN or another SOCKS5 proxy enabled, it connects to *AdGuard DNS Non-filtering* or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings.

#### DNS filtreleri

This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at [filterlists.com](https://filterlists.com/).

### Güvenlik duvarı

This feature helps manage Internet access for specific apps installed on your device and for the device in general.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Genel güvenlik duvarı kuralları

This section allows you to control Internet access for the entire device.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Bu kurallar, özel kurallar belirlemediğiniz sürece cihazınızdaki tüm uygulamalar için geçerlidir.

#### Özel güvenlik duvarı kuralları

Bu bölümde, belirli uygulamalar için internet erişimini kontrol edebilirsiniz — güvenilir bulmadıklarınızı engelleyebilir veya tam tersine, genel güvenlik duvarı kurallarına rağmen kullanmak istediklerinizin engelini kaldırabilirsiniz.

1. *Özel güvenlik duvarı kuralları* öğesini açın. *Özel kurallara sahip uygulamalar* altında, *Uygulama ekle* öğesine dokunun.

    ![Özel güvenlik duvarı kuralları *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Select the app for which you want to set individual rules.

    ![Özel güvenlik duvarı kurallarına bir uygulama ekleme *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. *Kullanılabilir özel kurallar* içinde, yapılandırmak istediklerinizi seçin ve "+" simgesine dokunun. Kurallar şimdi *Uygulanan özel kurallar* içinde görünür.

    ![Eklenen kural *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. Belirli bir bağlantı türünü engellemeniz gerekiyorsa, düğmeyi sola kaydırın. Buna izin vermek istiyorsanız, düğmeyi etkin bırakın. Özel kurallar genel kuralları geçersiz kılar: *Genel güvenlik duvarı kurallar* içinde yaptığınız herhangi bir değişiklik bu uygulamayı etkilemez.

*Özel kurallar* öğesinden bir kuralı veya uygulamayı silmek için sola kaydırın.

### Hızlı eylemler

*Hızlı eylemler*, *Son etkinlik* (*İstatistikler* içinde bulunabilir) öğesinden gelen isteklere dayalıdır. Bu bölüm, son zamanlarda hangi uygulamaların internete bağlandığını gösterir.

![Hızlı eylemler *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

İnterneti hiç kullanmaması gereken bir uygulama veya son zamanlarda kullanmadığınız bir uygulama görürseniz, erişimini anında engelleyebilirsiniz.

### Browsing Security

Gezinti Koruması, sizi kimlik avı ve kötü amaçlı siteleri ziyaret etmekten korur. Ayrıca sizi olası kötü amaçlı yazılımlara karşı uyarır.

![Gezinti Koruması *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

Tehlikeli bir siteyi ziyaret etmek üzereyseniz, Gezinti Koruması size aşağıdaki uyarıyı gösterir:

![Gezinti Koruması uyarısı *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Android için AdGuard'ın bir antivirüs programı olmadığını lütfen unutmayın. Ne virüslerin indirilmesini durdurur ne de önceden indirilmiş olanları siler. Cihazınızı tam olarak korumak için AdGuard'ı bir antivirüs ile birlikte kullanmanızı tavsiye ederiz.

Gezinti Koruması güvenlidir: AdGuard hangi siteleri ziyaret ettiğinizi bilmez. Site güvenliğini kontrol etmek için URL'ler yerine karma önekleri kullanır.

### AdGuard VPN ile entegrasyon

Android için AdGuard, trafiği filtrelemek için yerel bir VPN oluşturur. Bu nedenle, Android için AdGuard çalışırken diğer VPN uygulamaları kullanılamaz. Ancak, hem AdGuard hem de AdGuard VPN uygulamalarında, bunları birlikte kullanmanıza izin veren Entegre modlar bulunur.

Bu modda, AdGuard VPN, AdGuard'ın trafiğini yönlendirdiği bir giden proxy sunucusu gibi davranır. Bu, AdGuard'ın bir VPN arayüzü oluşturmasına, reklamları ve izleyicileri yerel olarak engellemesine olanak tanırken, AdGuard VPN tüm trafiği uzak bir sunucu üzerinden yönlendirir.

AdGuard VPN'i devre dışı bırakırsanız, AdGuard onu giden proxy olarak kullanmayı bırakır. AdGuard'ı devre dışı bırakırsanız, AdGuard VPN trafiği kendi VPN arayüzü üzerinden yönlendirir.

AdGuard Reklam Engelleyiciye sahipseniz ve AdGuard VPN'i yüklerseniz, Reklam Engelleyici uygulaması bunu tespit eder ve otomatik olarak *AdGuard VPN ile entegrasyon* öğesini etkinleştirir. Aynı şey tam tersi için de geçerlidir. Entegrasyonu etkinleştirdiyseniz, uygulama istisnaları yönetemeyeceğinizi ve AdGuard VPN uygulamasından DNS sunucularına bağlanamayacağınızı unutmayın. VPN tüneliniz üzerinden yönlendirilecek uygulamaları *Ayarlar* → *Filtreleme* → *Ağ* → *Proxy* → *Proxy aracılığıyla çalışan uygulamalar* üzerinden belirleyebilirsiniz. DNS sunucusu seçmek için AdGuard → *DNS koruması* → *DNS sunucusu* öğesini açın.

## Uygulama yönetimi

Bu bölüm, cihazınızda yüklü olan tüm uygulamalar için izinleri ve filtreleme ayarlarını yönetmenize olanak tanır.

![Uygulama yönetimi *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Bir uygulamaya tıklayarak ayarlarını yönetebilirsiniz:

- Route its traffic through AdGuard
- Bu uygulamada reklamları ve izleyicileri engelleyin (*Uygulama içeriğini filtrele*)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![Uygulama yönetimi: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Bağlam menüsünden uygulamanın istatistiklerine de erişebilirsiniz.

![Uygulama yönetimi: Chrome. Context menu *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Problem-free and problematic apps

By default, only problem-free apps are routed through AdGuard and filtered. These are the apps that still work properly when filtering is enabled.

Problematic apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services) may work incorrectly when routed through AdGuard. Bu nedenle, tüm uygulamaları yönlendirmeye veya filtrelemeye çalışırken aşağıdaki uyarıyı görebilirsiniz:

![Route all apps dialog *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in *Settings* → *General* → *Advanced* → *Low-level settings* → *Protection* → *Excluded apps*.

## Statistics

This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more.

![Statistics *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

The stats are categorized into different sections.

### Requests

This section shows the number of blocked ads, trackers, and the total number of requests for the selected time period: 24 hours, 7 days, 30 days, or all time. You can also filter requests by data type: mobile data, Wi-Fi, or all data combined.

*Recent activity*, formerly known as *Filtering log*, shows the last 10,000 requests processed by AdGuard. Tap *Customize* to filter requests by status (*regular*, *blocked*, *modified*, or *allowlisted*) or origin (*first-party* or *third-party*).

You can tap a request to view its details and add a blocking or unblocking rule.

### Veri kullanımı

Bu bölüm, seçilen zaman dilimi ve veri türü için indirilen ve yüklenen veri miktarını ve tasarruf edilen veriyi gösterir. Tap *saved*, *uploaded*, or *downloaded* to view the graph of data usage over time.

### Uygulamalar

Bu bölüm, cihazınızda yüklü tüm uygulamaların istatistiklerini görüntüler. Uygulamaları engellenen reklam veya izleyici sayısına ya da gönderilen istek sayısına göre sıralayabilirsiniz.

Tap *View all apps* to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Şirketler

This section displays companies that your device reaches out to. Bu ne anlama geliyor? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS istatistikleri

This section shows data about the requests handled by *DNS protection*. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved and data downloaded and uploaded.

### Pil kullanımı

This section displays statistics on the device resources used by AdGuard during the last 24 hours. Veriler cihaz ayarlarınızdan farklı olabilir. This happens because the system attributes the traffic of filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/)

## Ayarlar

### Genel

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable *Auto-report crashes* and *Send technical and interaction data*.

![Genel *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

*Uygulama ve filtre güncellemeleri* altında, otomatik filtre güncellemelerini yapılandırabilir ve bir uygulama güncelleme kanalı seçebilirsiniz. Daha fazla kararlılık için *Sürüm* ve yeni özelliklere erken erişim için *Beta* veya *Nightly* seçeneklerini seçin.

![Güncellemeler *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Advanced settings

*Automation* allows you to manage AdGuard via tasker apps.

*Watchdog*, AdGuard'ın sistem tarafından devre dışı bırakılmasına karşı korunmasına yardımcı olur ([Android'in pil tasarrufu modu hakkında daha fazlasını okuyun](/adguard-for-android/solving-problems/background-work/)). Girdiğiniz değer, watchdog denetimleri arasındaki saniye cinsinden aralık olacaktır.

*Günlük kayıt düzeyi*, uygulamanın çalışmasıyla ilgili hangi verilerin günlüğe kaydedileceğini tanımlar. Varsayılan olarak, uygulama etkinlikleriyle ilgili verileri toplar. *Hata ayıklama* düzeyi daha fazla etkinlik kaydeder — sorunu daha iyi anlamalarına yardımcı olmak için AdGuard ekibi tarafından istenirse etkinleştirin. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/logcat/)

![Gelişmiş *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The *Low-level settings* section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Filtreleme

This section allows you to manage HTTPS filtering settings, filters, and userscripts, and set up a proxy server.

![Filtreleme *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Ağ

##### HTTPS filtreleme

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [HTTPS filtreleme hakkında daha fazla bilgi edinin](/general/https-filtering/what-is-https-filtering)

###### Güvenlik sertifikaları

Şifrelenmiş trafiği yönetmek için AdGuard, CA sertifikasını cihazınıza yükler. Güvenlidir: trafik yerel olarak filtrelenir ve AdGuard bağlantının güvenliğini doğrular.

Android'in eski sürümlerinde sertifika otomatik olarak yüklenir. On Android 11 and later, you need to install it manually. [Yükleme talimatları](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. Ancak, yalnızca sistem depolamasındaki sertifikalara güvenen uygulamalar vardır. Buradaki HTTPS trafiğini filtrelemek için AdGuard'ın CA sertifikasını sistem depolamasına yüklemeniz gerekir. [Talimatlar](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### HTTPS filtrelenen uygulamalar

Bu bölüm, AdGuard'ın HTTPS trafiğini filtrelediği uygulamaların listesini içerir. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

###### HTTPS filtrelenmiş siteler

Bu ayar, AdGuard'ın HTTPS trafiğini filtrelemesi gereken siteleri yönetmenizi sağlar.

HTTPS filtreleme, AdGuard'ın isteklerin ve yanıtların içeriğini filtrelemesini sağlar, ancak bu verileri asla toplamaz veya saklamayız. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. If needed, you can enable the *Filter websites with EV certificates* option.

##### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

##### Yönlendirme modu

Bu bölüm trafik filtreleme yöntemini seçmenizi sağlar.

- *Yerel VPN* yerel olarak oluşturulan bir VPN üzerinden trafiği filtreler. Bu en güvenilir moddur. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::not

The *Local VPN* mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [*Integrated mode*](#integration-with-adguard-vpn).

:::

- *Automatic proxy* is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Filtreler

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filtreler *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::not

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

#### Kullanıcı Betikleri

Userscripts are mini-programs written in JavaScript that extend the functionality of one or more websites. Bir kullanıcı betiği yüklemek için özel bir kullanıcı betiği yöneticisine ihtiyacınız vardır. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra, karmaşık reklamları ve reklamları sitelere yeniden enjekte eden mekanizmaları engelleyen özel bir kullanıcı betiğidir.

### Lisans

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](#free-vs-full-version)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status if you have recently extended its validity
- Open the AdGuard account to manage your license there
- Reset your license – for example, if you've reached device limit for this license and want to apply another one

![License screen *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Destek

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting *[FAQ](https://adguard.com/support/adguard_for_android.html)* or this knowledge base before contacting support.

![Destek *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via *Report incorrect blocking*.

For unusual app behavior, select *Report a bug*. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use *Request a feature*.

:::not

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::

## Ücretsiz ile tam sürüm karşılaştırması

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard for Android has a free and a paid version. Paid features extend AdGuard's capabilities:

- *Ad blocking in apps* allows you to block ads in non-browser apps. You can specify apps for filtering in [*App management*](#app-management)

:::not

AdGuard uses its own ad-free media player to block ads in YouTube videos. Medya oynatıcıyı açmak için YouTube uygulamasını açın ve AdGuard ile bir video paylaşın. Bu özellik ücretsizdir.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Browsing Security* warns you if you're about to visit a potentially dangerous website. [Back to Browsing Security](#browsing-security)

- *Custom filters and user rules* allow you to add your own filtering rules and third-party filters to fine-tune ad blocking. [Back to filters](#filters)

- *Kullanıcı betikleri* tarayıcının işlevselliğini genişletmenize ve reklamların yeniden eklenmesini önleyen [AdGuard Extra](#adguard-extra) kullanmanıza olanak tanır. [Back to userscripts](#userscripts)

You can get access to these features by [purchasing a license](https://adguard.com/license.html). [How to activate the license](/general/license/activation/#activating-adguard-for-android)

## Rooted vs non-rooted devices

Android işletim sisteminin güvenlik önlemleri nedeniyle bazı AdGuard özellikleri yalnızca root erişimli cihazlarda kullanılabilir. İşte bunların listesi:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Installing a certificate into the system store is only possible on rooted devices
- The [**Automatic proxy** routing mode](#routing-mode) requires root access due to Android's restrictions on system-wide traffic filtering
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard

## Asistan

Asistan, AdGuard uygulamasını başlatmadan uygulama veya site ayarlarını hızlı bir şekilde değiştirmek ve istatistikleri görüntülemek için kullanışlı bir araçtır.

### Asistana nasıl erişilir

 1. Android cihazınızda, bildirim gölgesini açmak için ekranın üst kısmından aşağı doğru kaydırın.
 2. AdGuard bildirimini bulun ve **genişletin**.

    ![Bildirim gölgesinde AdGuard bildirimini genişletin *mobile](https://cdn.adtidy.org/blog/new/jkksbhassistant-shade.png)

 3. *Asistan* öğesine dokunun.

    ![Tap Assistant *mobile](https://cdn.adtidy.org/blog/new/1qvlhassistant-tap-assistant.jpg)

### Asistan nasıl kullanılır

Asistanı açtığınızda iki sekme göreceksiniz: **Uygulamalar** ve **Siteler**. Her biri sırasıyla son kullanılan uygulamaların ve sitelerin bir listesini içerir.

![Asistan ana *mobile](https://cdn.adtidy.org/blog/new/i5mljAssistant-main.jpg)

### Uygulamalar sekmesi

Bir uygulama seçtikten sonra (**örnek olarak Chrome'u ele alalım**), yapabileceklerinizle ilgili birkaç seçenek göreceksiniz.

![Asistan Chrome menüsü *mobile_border](https://cdn.adtidy.org/blog/new/e1sr4Chrome-assistant.jpg)

#### Son etkinlikler

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests made by Chrome.

![App recent activity *mobile_border](https://cdn.adtidy.org/blog/new/66hpechrome-recent-activity.png)

#### Uygulama istatistikleri

You'll be taken to the AdGuard app, where you'll see detailed statistics about Chrome:

- Chrome'da engellenen reklam ve izleyici sayısı
- Chrome'un reklam veya izleme isteklerinin engellenmesiyle kaydedilen veriler
- Chrome'un istek gönderdiği şirketler

#### Uygulama yönetimi

You'll be taken to the AdGuard app screen where you can disable AdGuard protection for the app.

#### Güvenlik Duvarı ayarları

You'll be taken to the AdGuard screen where you can change Firewall settings for the app, meaning you can manage the app's Internet access.

### Siteler sekmesi

![Asistan siteler sekmesi *mobile](https://cdn.adtidy.org/blog/new/74y9rAssistant-websites.jpg)

Bir site seçin (**örnek olarak google.com'u ele alalım**) ve yapabileceklerinize ilişkin birkaç seçenek göreceksiniz.

![Asistan google.com bilgileri *mobile](https://cdn.adtidy.org/blog/new/tht0tgoogle-com-assistant.jpg)

#### İzin listesine ekle

Bu seçeneğe dokunulduğunda google.com anında izin listesine eklenir ve AdGuard artık onu filtrelemez (yani reklamlar ve izleyiciler site için engellenmeyecektir).

#### Son etkinlikler

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests to google.com.

![website recent activity *mobile_border](https://cdn.adtidy.org/blog/new/xq7f3assistant-website-recent-activity.png)

#### Site istatistikleri

You'll be taken to the AdGuard app, where you'll see detailed statistics about google.com:

- Number of blocked ad and tracking requests to google.com
- Data saved by blocking ad and tracking requests to google.com
- google.com'a istek gönderen uygulamalar
- google.com'un alt alan adları hakkında bilgi
