---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

App Store'da AdGuard'ı ararsanız, iki uygulama bulacaksınız - [AdGuard](https://itunes.apple.com/app/id1047223162) ve [AdGuard Pro](https://itunes.apple.com/app/id1126386264). Bu uygulamalar Safari'de, diğer tarayıcılarda ve uygulamalarda reklamları ve izleyicileri engellemek ve DNS korumasını yönetmek için tasarlanmıştır. İsimleri sizi yanıltmasın, her iki uygulama da Apple tarafından akıllı telefon ve tabletlerde reklamları engelliyor. They used to differ in functionality due to the changing App Store review guidelines, but now these two apps are [basically the same](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). Dolayısıyla, AdGuard Pro'yu satın aldıysanız, AdGuard'ı indirmenize ve oradan bir lisans satın almanıza gerek yoktur veya bunun tam tersi de geçerlidir.

## Özellikler {#features}

AdGuard ve iOS için AdGuard Pro, hem Safari'de hem de ağ düzeyinde reklamları, izleyicileri engellemek ve kullanıcı kuralları oluşturmak için birçok özellik sunar.

### İçerik engelleyiciler {#content-blockers}

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. iOS için AdGuard altı içerik engelleyici içerir: Genel, Gizlilik, Sosyal, Güvenlik, Özel ve Diğer. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in *Advanced settings* (tap the gear icon at the bottom right → *General* → *Advanced settings* → *Content blockers*).

![İçerik engelleyiciler *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

En iyi filtreleme kalitesi için tüm içerik engelleyicileri etkin tutun.

:::

### Filtreler {#filters}

İçerik engelleyicilerin çalışması, bazen filtre listeleri olarak da adlandırılan filtrelere dayanmaktadır. Her filtre, filtreleme kurallarının bir listesidir. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Reklamları, izleyicileri ve daha fazlasını engellemek için kurallar geliştirilmiştir.

Tüm filtreler içerikli kategoriler hâlinde gruplandırılmıştır. To see the full list of these categories (not to be confused with content blockers), open the *Protection* section by tapping the shield icon, then go to *Safari protection* → *Filters*.

![Filtre grupları *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::not

Daha fazla filtrenin etkin olması daha az reklam olacağını garanti etmez. Aynı anda etkinleştirilen çok sayıda çeşitli filtre, reklam engellemenin kalitesini düşürür.

:::

Özel filtreler kategorisi, kullanıcıların filtrelerini URL'ye göre eklemeleri için varsayılan olarak boştur. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### Kullanıcı kuralları {#user-rules}

Burada, elle girerek veya [Safari'de AdGuard elle engelleme aracını](#assistant) kullanarak yeni kurallar ekleyebilirsiniz. Tüm filtre listesini eklemeden Safari filtrelemesini özelleştirmek için bu aracı kullanın.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). Ancak bunların birçoğunun iOS'ta Safari'de çalışmayacağını lütfen unutmayın.

![Kullanıcı kuralları ekranı *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### İzin listesi {#allowlist}

*Safari koruması* ekranının üçüncü bölümü. Belirli bir sitede reklam engellemeyi devre dışı bırakmak istiyorsanız, İzin listesi size yardımcı olacaktır. It allows you to add domains and subdomains to exclusions. iOS için AdGuard'ın bir İçe ve Dışa aktarma özelliği vardır, böylece bir cihazdaki izin listesi kolayca başka bir cihaza aktarılabilir.

### DNS koruması {#dns-protection}

[DNS koruma modülü](https://adguard-dns.io/kb/general/dns-filtering/), DNS trafiğinizi şifreleyerek gizliliğinizi artırır. Safari içerik engellemenin aksine, DNS koruması sistem genelinde, yani Safari'nin ötesinde, uygulamalarda ve diğer tarayıcılarda çalışır. Bu modülü kullanabilmeniz için önce etkinleştirmeniz gerekir. Bunu ana ekranda ekranın üst kısmındaki kalkan simgesine dokunarak veya *Koruma* → *DNS koruması* sekmesine giderek yapabilirsiniz.

:::not

DNS ayarlarını yönetebilmek için AdGuard uygulamaları yerel bir VPN kurulmasını gerektirir. Trafiğinizi herhangi bir uzak sunucu üzerinden yönlendirmez. Nevertheless, the system will ask you to confirm access permission.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

This section has two options: AdGuard and Native implementation. Temel olarak, bunlar DNS ayarlamanın iki yöntemidir.

In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications — if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS sunucuları {#dns-servers}

DNS Koruması ekranında göreceğiniz bir sonraki bölüm DNS sunucusudur. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen.

![DNS sunucuları *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Şifreleme türünü değiştirmek (sunucu sahibi tarafından böyle bir seçenek sağlanmışsa) veya sunucunun ana sayfasını görüntülemek için herhangi birine dokunun. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

Ek olarak, ekranın alt kısmında özel bir DNS sunucusu ekleme seçeneği vardır. Normal, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS ve DNS-over-QUIC sunucularını destekler.

### Ağ ayarları {#network-settings}

![Ağ ayarları ekranı *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Kullanıcılar, DNS güvenliklerini Ağ ayarları ekranından da yönetebilirler. *Filter mobile data* and *Filter Wi-Fi* enable or disable DNS protection for the respective network types. Further down, at *Wi-Fi exceptions*, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtreleme {#dns-filtering}

DNS filtreleme, AdGuard DNS filtresini etkinleştirerek, özel DNS filtreleri ekleyerek ve DNS engel listesi ile izin listesini kullanarak DNS trafiğinizi özelleştirmenize olanak tanır.

Nasıl erişilir:

*Koruma* (alt menü çubuğundaki kalkan simgesi) → *DNS koruması* → *DNS filtreleme*

![DNS filtreleme ekranı *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filtreleri {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard, DNS trafiğinizi izler ve bir veya daha fazla kuralla eşleşen istekleri engeller. [AdGuard DNS filtresi](https://github.com/AdguardTeam/AdguardSDNSFilter) gibi filtreler kullanabilir veya hosts dosyalarını filtre olarak ekleyebilirsiniz. Aynı anda birden fazla filtre eklenebilir. To know how to do it, get acquainted with [this exhaustive manual](../solving-problems/system-wide-filtering).

#### İzin listesi ve Engelleme listesi {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.

### Gelişmiş koruma {#advanced-protection}

In iOS 15 Apple has added the support for Safari Web Extensions, and we in turn added a new *Advanced protection* module to AdGuard for iOS. It allows AdGuard to apply advanced filtering rules, such as CSS rules, CSS selectors, and scriptlets, and therefore to deal even with the complex ads, such as YouTube ads.

![Advanced protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg)

To enable *Advanced protection*, open the *Protection* tab by tapping the second left icon at the bottom of the screen, select the *Advanced protection* module, activate the feature by toggling the switch slider, and follow the instructions below.

:::not

The *Advanced protection* only works on iOS 15 and later versions. If you are using earlier versions of iOS, you will see the *YouTube ad blocking* module in the app instead of the *Advanced protection*.

:::

![Protection screen on iOS 14 and earlier *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg)

### AdGuard VPN ile uyumluluk {#compatibility}

In most cases, the ad blocker and the VPN app cannot work together, simply because there are certain system limitations. Nevertheless, we've managed to find a solution to befriend [AdGuard VPN](https://adguard-vpn.com/) and AdGuard Ad Blocker. In the *Protection* section, you can easily switch between two apps.

### Asistan {#assistant}

![Safari Asistanı *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/assistant_en.jpeg)

Assistant is a tool that helps you manage filtering in Safari right from the browser without switching back to the app.

To see it, do the following: open Safari and tap the arrow-in-a-box symbol. Then scroll down to AdGuard/AdGuard Pro (depending on the app you use) and tap it to fetch a window with several options:

1. **Enable on this page.** Turn the switch off to add the current domain to the Allowlist.
2. **Block an element on this page.** Tap it to enter the 'Element blocking' mode: choose any element on the page, adjust the size by tapping '+' or '–', preview if necessary and then tap the checkmark icon to confirm. The selected element will be hidden from the page and a corresponding rule will be added to User rules. Remove or disable it to revert the change.
3. **Report an issue on this page.** Opens a web reporting tool that will help you send a report to our support team in just a few taps. Use it if you noticed a missed ad or an incorrect blocking on the page.

:::tip

On iOS 15 devices, the Assistant features are available through [AdGuard Safari Web Extension](../web-extension), which enhances the capabilities of AdGuard for iOS and allows you to take advantage of iOS 15. With this web extension, AdGuard can apply advanced filter rules and, as a result, block more ads.

:::

### Activity {#activity}

This is the 'information hub' of AdGuard's DNS protection suite. Ekranın altındaki sıradaki üçüncü simgeye dokunarak hızlı geçiş yapabilirsiniz. N.b. this screen is only seen when DNS protection is enabled.

![Etkinlik ekranı *mobile_border](https://cdn.adtidy.org/content/github/ad_blocker/ios/activity.png)

This is where AdGuard displays statistics about the device's DNS requests, such as total number, number of blocked requests and data saved by blocking them. AdGuard can display the statistics for a day, a week, a month or in total.

Below is the *Recent activity* feed. AdGuard stores the last 1500 DNS requests that have originated on your device and shows their attributes such as protocol type and target domain.

:::not

AdGuard bu bilgileri hiçbir yere göndermez. It is 100% local and does not leave your device.

:::

Tap any request to view more details. There will also be buttons to add the request to Blocklist/Allowlist in one tap.

![Request details *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/request_info_en.jpeg)

Above the activity feed, there are *Most active* and *Most blocked* companies. Son 1500 isteğe dayalı verileri görmek için her birine dokunun.

### Statistics {#statistics}

Aside from the *Activity* screen, you can find global statistics on the home screen and on widgets.

## Low-level settings {#low-level-settings}

![Low-level settings *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the *Low-level settings*, go to *Settings* → *General* → (Enable *Advanced mode* if it's off) → *Advanced settings* → *Low-level settings*.

For the most part, the settings in this section are best left untouched: only use them if you're sure about what you're doing, or if the support team has asked for them. But some settings could be changed without any risk.

### Block IPv6 {#blockipv6}

For any DNS query sent to get an IPv6 address, our app returns an empty response (as if this IPv6 address does not exist). Now there is an option not to return IPv6 addresses. At this point the description of this function becomes too technical: configuring or disabling IPv6 is the exclusive domain of advanced users. Presumably, if you are one of them, it will be good to know that we now have this feature, if not — there is no need to dive into it.

### Bootstrap and Fallback servers {#bootstrap-fallback}

Fallback is a backup DNS server. If you chose a DNS server and something happened to it, a fallback is needed to set the backup DNS server until the main server responds.

With Bootstrap, it’s a little more complicated. For AdGuard for iOS to use a custom secure DNS server, our app needs to get its IP address first. For this purpose, the system DNS is used by default, but sometimes this is not possible for various reasons. In such cases, Bootstrap could be used to get the IP address of the selected secure DNS server. Here are two examples to illustrate when a custom Bootstrap server might help:

1. When a system default DNS server does not return the IP address of a secure DNS server and it is not possible to use a secure one.
2. When our app and third-party VPN are used simultaneously and it is not possible to use System DNS as a Bootstrap.

## Diğer özellikler {#other-features}

While Safari content blocking and DNS protection are indisputably two major modules of AdGuard/AdGuard Pro, there are some other minor features that don't fall into either of them directly but still can be useful and are worth knowing about.

- **Dark theme**

![Açık tema *mobil_border](https://cdn.adtidy.org/blog/new/26vo4homelight.jpeg)

![Koyu tema *mobile_border](https://cdn.adtidy.org/blog/new/bgko8homedark.jpeg)

Residing right at the top of **Settings** → **General** screen, this setting allows you to switch between dark and light themes.

- **Widgets**

![Widgets *mobile](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg)

AdGuard supports widgets that provide quick access to Safari content blocking and DNS protection switches, and also show global requests stats.

- **Auto-update over Wi-Fi only**

If this setting is enabled, AdGuard will use only Wi-Fi for background filter updates.

- **İzin listesini ters çevir**

An alternative mode for Safari filtering, it unblocks ads everywhere except for the specified websites from the list. Varsayılan olarak devre dışıdır.

- **Advanced mode**

**Advanced mode** unlocks **Advanced settings**. We don't recommend messing with those, unless you know what you're doing or you have consulted with technical support first.

- **Reset statistics**

Clears all statistical data, such as number of requests, etc.

- **Reset settings**

Bu seçenek tüm ayarlarınızı sıfırlar.

- **Destek**

Use this option to contact support, report a missed ad (although we advise to use the Assistant or AdGuard's Safari Web extension for your own convenience), export logs or to make a feature request.

- **Hakkında**

Contains the current version of the app and an assortment of rarely needed options and links.
