---
title: Safari uzantıları
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari uzantıları nelerdir

Safari uzantıları, Safari web tarayıcısına işlevsellik ekleyen küçük yazılım programlarıdır. Tarayıcıda yerel olarak yerleşik olmayan özellikler ekleyerek kullanıcıların göz atma deneyimlerini özelleştirmelerine ve geliştirmelerine olanak tanırlar. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Nasıl çalışır

AdGuard, sitelerdeki reklamları, izleyicileri ve can sıkıcı öğeleri engellemek için filtreleme kuralları kullanır. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Genel
- AdGuard Gizlilik
- AdGuard Sosyal
- AdGuard Güvenlik
- AdGuard Özel
- AdGuard Diğerleri

Her içerik engelleme uzantısı, 150.000 adede kadar etkin filtreleme kuralı içerebilir. Çoğu filtre grubundaki kural sayısı 150.000'i geçmez. Ancak çok fazla dile özgü veya özel filtre etkinleştirirseniz sınırı aşabilirsiniz. Bu gibi durumlarda, sınırı aşan rastgele kurallar otomatik olarak devre dışı bırakılır ve bu da yanlış engellemeye yol açabilir. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Her bir uzantı hakkında daha fazla bilgi aşağıdadır.

## İçerik engelleme uzantıları

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Bu uzantı, kapsamlı reklam engellemeye odaklanır ve belirli dillerdeki reklamlar için filtreler içerir.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. İzleme mekanizmalarını engeller ve göz atma etkinliğinizin gizli kalmasını sağlar.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Bu uzantı, potansiyel olarak zararlı öğeleri tanımlayıp engelleyerek kullanıcıları kötü amaçlı içerikten korur.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## Safari için AdGuard

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Safari uzantıları nasıl yönetilir

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Safari için AdGuard neden izin gerektiriyor

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Sitelerdeki koruma durumunu kontrol etmek ve hangi gelişmiş kuralların uygulanması gerektiğini belirlemek için tarama geçmişine erişim gereklidir

Bu verileri başka hiçbir amaçla kullanmıyoruz veya kimseyle paylaşmıyoruz. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
