---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

:::note Disclaimer

AdGuard for Android is not to be confused with AdGuard Content Blocker. AdGuard Content Blocker is an app available in Google Play that has truncated functionality to meet restrictions imposed by the store. AdGuard for Android, on the contrary, is a powerful application to block ads, manage applications, and perform other roles that will be described in this article. The only place it can be downloaded from is [the AdGuard website](https://adguard.com/adguard-android/overview.html).

:::

## Protection

Bu ekran, AdGuard korumasının tüm özelliklerini bir araya getirir:

- Reklam engelleme
- İzleme koruması
- Can sıkıcı öğe engelleme
- DNS protection
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

*İzleme koruması* (eski adıyla *Gizlilik Modu*), sitelerin IP adresleriniz, tarayıcınız ve işletim sisteminiz hakkındaki bilgiler, ekran çözünürlüğü ve geldiğiniz veya yönlendirildiğiniz sayfa gibi hakkınızda bilgi toplamasını engeller. Ayrıca, sitelerin tarayıcıyı işaretlemek ve kişisel ayarlarınızı, kullanıcı tercihlerinizi kaydetmek veya bir sonraki ziyaretinizde sizi tanımak için kullandığı çerezleri de engelleyebilir.

![İzleme koruması *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

Önceden yapılandırılmış üç koruma seviyesi vardır. İşte etkinleştirdikleri özellikler:

 1. **Standart**

    a. *İzleyicileri engelleyin*. Bu ayar, AdGuard'ın İzleme Koruması filtresini kullanan çevrimiçi sayaçlara ve web analizi araçlarına karşı koruma sağlar

    b. *Sitelerden sizi izlememelerini isteyin*. Bu ayar, ziyaret ettiğiniz sitelere [Global Privacy Control](https://globalprivacycontrol.org/) ve [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) isteklerini göndererek web uygulamalarından etkinliğinizin izlenmesini devre dışı bırakmasını ister

    c. *X-Client-Data başlığını kaldırın*. Bu ayar, Google Chrome'un sürüm ve değişiklik bilgilerini Google alan adlarına (Double Click ve Google Analytics dahil) göndermesini engeller

 2. **Yüksek**

    a. *İzleyicileri engelleyin*

    b. *İzleme parametrelerini URL'lerden kaldırın*. Bu ayar, AdGuard URL İzleme filtresini kullanarak sayfa URL'lerinden `utm_*` ve `fb_ref` gibi izleme parametrelerini arındırır

    c. *Arama sorgularınızı gizleyin*

    d. *Sitelerden sizi izlememelerini isteyin*

    e. *Kendini yok eden üçüncü taraf çerezler*. Bu ayar, üçüncü taraf çerezlerinin kullanım süresini 180 dk ile sınırlar

    f. *X-Client-Data başlığını kaldırın*

 3. **En yüksek**

    a. *İzleyicileri engelleyin*

    b. *Remove tracking parameters from URLs*

    c. *Arama sorgularınızı gizleyin*

    d. *Sitelerden sizi izlememelerini isteyin*

    e. *Self-destruction of third-party cookies*

    f. *Block WebRTC*. This setting blocks WebRTC, a technology that allows direct streaming of data between browsers and apps and can let others know your true IP address, even if you use a proxy or VPN

    g. *Block Push API*. This setting prevents websites from sending you notifications, regardless of the activity status of your browser

    h. *Block Location API*. This setting prevents browsers from detecting your GPS data

    i. *Hide Referer from third parties*. This setting hides the HTTP header that contains the URL of the initial page and changes it into the default or the specified one. You can set your custom referer in the respective field

    j. *Hide your User-Agent*. This setting removes identifying information from the User-Agent header that usually includes the name and version of the browser, the operating system, and language settings

    k. *X-Client-Data başlığını kaldırın*

You can fine-tune Tracking protection by selecting the *Custom* protection level. [Learn more about other Tracking protection settings](/general/stealth-mode)

### Can sıkıcı öğe engelleme

This feature is based on AdGuard's annoyance filters and allows you to block popups, online assistant windows, cookie notifications, prompts to download mobile apps, and similar annoyances. [Learn more about annoyance filters](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS protection

*DNS protection* allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Some DNS servers have blocklists that help block DNS requests to potentially harmful domains

- In addition to DNS servers, AdGuard can filter DNS requests on its own using a special DNS filter. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- You can also block and unblock domains by creating user rules. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:

- Click *Add DNS server* and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and click *Add to AdGuard* next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

 By default, *Automatic DNS* is selected. It sets a DNS server based on your AdGuard and device settings. If you have integration with AdGuard VPN or another SOCKS5 proxy enabled, it connects to *AdGuard DNS Non-filtering* or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings.

#### DNS filters

This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at [filterlists.com](https://filterlists.com/).

### Güvenlik duvarı

This feature helps manage Internet access for specific apps installed on your device and for the device in general.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Global firewall rules

This section allows you to control Internet access for the entire device.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

These rules apply to all apps on your device unless you've set custom rules for them.

#### Custom firewall rules

Bu bölümde, belirli uygulamalar için internet erişimini kontrol edebilirsiniz — güvenilir bulmadıklarınızı engelleyebilir veya tam tersine, genel güvenlik duvarı kurallarına rağmen kullanmak istediklerinizin engelini kaldırabilirsiniz.

1. Open *Custom firewall rules*. Under *Apps with custom rules*, tap *Add app*.

    ![Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Select the app for which you want to set individual rules.

    ![Adding an app to Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. In *Available custom rules*, select the ones you want to configure and tap the "+" icon. The rules will now appear in *Applied custom rules*.

    ![Added rule *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. If you need to block a specific type of connection, toggle the switch to the left. If you want to allow it, leave the switch enabled. Custom rules override global ones: any changes you make in *Global firewall rules* will not affect this app.

To delete a rule or app from *Custom rules*, swipe it to the left.

### Quick actions

*Quick actions* are based on the requests from *Recent activity* (which can be found in *Statistics*). This section shows which apps have recently connected to the Internet.

![Quick actions *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

If you see an app that shouldn't be using the Internet at all or an app that you haven't used recently, you can block its access on the fly.

### Browsing Security

Browsing Security protects you from visiting phishing and malicious websites. It also warns you about potential malware.

![Gezinti Koruması *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

If you're about to visit a dangerous website, Browsing Security will show you the following warning:

![Browsing Security warning *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Android için AdGuard'ın bir antivirüs programı olmadığını lütfen unutmayın. Ne virüslerin indirilmesini durdurur ne de önceden indirilmiş olanları siler. Cihazınızı tam olarak korumak için AdGuard'ı bir antivirüs aracıyla birlikte kullanmanızı tavsiye ederiz.

Browsing Security is safe: AdGuard does not know what websites you visit. It uses hash prefixes instead of URLs to check website security.

### AdGuard VPN ile entegrasyon

AdGuard for Android creates a local VPN to filter traffic. Thus, other VPN apps cannot be used while AdGuard for Android is running. However, both AdGuard and AdGuard VPN apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard routes its traffic. This allows AdGuard to create a VPN interface and block ads and trackers locally, while AdGuard VPN routes all traffic through a remote server.

If you disable AdGuard VPN, AdGuard will stop using it as an outbound proxy. If you disable AdGuard, AdGuard VPN will route traffic through its own VPN interface.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable *Integration with AdGuard VPN* automatically. The same happens in reverse. Note that if you've enabled integration, you won't be able to manage app exclusions and connect to DNS servers from the AdGuard VPN app. You can specify apps to be routed through your VPN tunnel via *Settings* → *Filtering* → *Network* → *Proxy* → *Apps operating through proxy*. To select a DNS server, open AdGuard → *DNS protection* → *DNS server*.

## App management

This section allows you to manage permissions and filtering settings for all apps installed on your device.

![App management *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

By clicking an app you can manage its settings:

- Route its traffic through AdGuard
- Bu uygulamada reklamları ve izleyicileri engelleyin (*Uygulama içeriğini filtrele*)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![App management: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

From the context menu, you can also access the app's stats.

![App management: Chrome. Context menu *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Problem-free and problematic apps

By default, only problem-free apps are routed through AdGuard and filtered. These are the apps that still work properly when filtering is enabled.

Problematic apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services) may work incorrectly when routed through AdGuard. That's why you may see the following warning when trying to route or filter all apps:

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

### Data usage

This section shows the amount of downloaded, uploaded, and saved traffic for the selected time period and data type. Tap *saved*, *uploaded*, or *downloaded* to view the graph of data usage over time.

### Apps

This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests.

Tap *View all apps* to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Companies

This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS statistics

This section shows data about the requests handled by *DNS protection*. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved, downloaded, and uploaded.

### Battery usage

This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from your device settings. This happens because the system attributes the traffic of filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/)

## Ayarlar

### Genel

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable *Auto-report crashes* and *Send technical and interaction data*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under *App and filter updates*, you can configure automatic filter updates and select an app update channel. Choose *Release* for more stability and *Beta* or *Nightly* for early access to new features.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Advanced settings

*Automation* allows you to manage AdGuard via tasker apps.

*Watchdog* helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). The value you enter will be the interval in seconds between watchdog checks.

*Logging level* defines what data about the app's operation should be logged. By default, the app collects the data about its events. The *Debug* level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/logcat/)

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The *Low-level settings* section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Filtreleme

This section allows you to manage HTTPS filtering settings, filters, and userscripts, and set up a proxy server.

![Filtering *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Network

##### HTTPS filtering

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

###### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

###### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtreleme, AdGuard'ın isteklerin ve yanıtların içeriğini filtrelemesini sağlar, ancak bu verileri asla toplamaz veya saklamayız. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. If needed, you can enable the *Filter websites with EV certificates* option.

##### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

##### Routing mode

This section allows you to select the traffic filtering method.

- *Local VPN* filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::not

The *Local VPN* mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [*Integrated mode*](#integration-with-adguard-vpn).

:::

- *Automatic proxy* is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Filtreler

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::not

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

#### Kullanıcı Betikleri

Userscripts are mini-programs written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra is a custom userscript that prevents websites from bypassing ad blockers and re-inserting blocked ads.

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

### Free vs full version

AdGuard for Android has a free and a paid version. Paid features extend AdGuard's capabilities:

- *Ad blocking in apps* allows you to block ads in non-browser apps. You can specify apps for filtering in [*App management*](#app-management)

:::not

AdGuard uses its own ad-free media player to block ads in YouTube videos. To open the media player, open the YouTube app and share a video with AdGuard. This feature is free.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Browsing Security* warns you if you're about to visit a potentially dangerous website. [Back to Browsing Security](#browsing-security)

- *Custom filters and user rules* allow you to add your own filtering rules and third-party filters to fine-tune ad blocking. [Back to filters](#filters)

- *Userscripts* allow you to use AdGuard Extra to bypass ad blocker bans and install other userscripts to extend your browser's functionality. [Back to userscripts](#userscripts)

You can get access to these features by [purchasing a license](https://adguard.com/license.html). [How to activate the license](/general/license/activation/#activating-adguard-for-android)

### Rooted vs non-rooted devices

Due to additional security measures of Android apps, some AdGuard features are only available on rooted devices. Here's the list of them:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Installing a certificate into the system store is only possible on rooted devices
- The [**Automatic proxy** routing mode](#routing-mode) requires root access due to Android's limitations on system-wide traffic filtering
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
