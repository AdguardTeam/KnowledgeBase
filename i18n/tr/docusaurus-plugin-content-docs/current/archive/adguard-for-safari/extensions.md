---
title: Safari uzantıları
sidebar_position: 3
---

:::info

Bu makale, yalnızca Safari tarayıcınızı koruyan Safari için AdGuard hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Safari uzantıları nelerdir

Safari uzantıları, Safari web tarayıcısına işlevsellik ekleyen küçük yazılım programlarıdır. Tarayıcıda yerel olarak yerleşik olmayan özellikler ekleyerek kullanıcıların göz atma deneyimlerini özelleştirmelerine ve geliştirmelerine olanak tanırlar. Safari için AdGuard, uzantıları öncelikle Safari'de açılan sitelere filtreleme kuralları uygulamak için kullanır.

## Nasıl çalışır

AdGuard, sitelerdeki reklamları, izleyicileri ve can sıkıcı öğeleri engellemek için filtreleme kuralları kullanır. AdGuard'ın ve sizin özel filtrelerinizin kuralları, Safari tarafından anlaşılır olanlara dönüştürülür ve 6 Safari uzantısına entegre edilir:

- AdGuard Genel
- AdGuard Gizlilik
- AdGuard Sosyal
- AdGuard Güvenlik
- AdGuard Özel
- AdGuard Diğerleri

Her içerik engelleme uzantısı, 150.000 adede kadar etkin filtreleme kuralı içerebilir. Çoğu filtre grubundaki kural sayısı 150.000'i geçmez. Ancak çok fazla dile özgü veya özel filtre etkinleştirirseniz sınırı aşabilirsiniz. Bu gibi durumlarda, sınırı aşan rastgele kurallar otomatik olarak devre dışı bırakılır ve bu da yanlış engellemeye yol açabilir. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Her bir uzantı hakkında daha fazla bilgi aşağıdadır.

## İçerik engelleme uzantıları

_AdGuard General_ applies rules from filters that you can find in _Filters_ → _Ad blocking_ and _Filters_ → _Language-specific_. Bu uzantı, kapsamlı reklam engellemeye odaklanır ve belirli dillerdeki reklamlar için filtreler içerir.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. İzleme mekanizmalarını engeller ve göz atma etkinliğinizin gizli kalmasını sağlar.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. Açılır pencereleri, sosyal medya düğmelerini, çevrimiçi asistan pencerelerini ve web sayfalarındaki rahatsız edici bulabileceğiniz diğer öğeleri engeller.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Bu uzantı, potansiyel olarak zararlı öğeleri tanımlayıp engelleyerek kullanıcıları kötü amaçlı içerikten korur.

_AdGuard Other_ applies rules from filters that that don't fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

Kullanıcı kuralları ve izin listesi kuralları her uzantıya dahildir.

## Safari için AdGuard

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. Belirli bir sitede hızlı bir şekilde koruma ayarlamak veya reklamları elle engellemek istiyorsanız kullanışlıdır. Ayrıca Safari tarafından desteklenen biçime dönüştürülmemiş gelişmiş kurallar da içerir. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Safari uzantıları nasıl yönetilir

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Safari için AdGuard neden izin gerektiriyor

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to web page content** and **access to browsing history**. İşte bu izinlere neden ihtiyaç duyar:

- Elle reklam engelleme ve gelişmiş engelleme kurallarının düzgün çalışması için web sayfası içeriğine erişim gereklidir
- Sitelerdeki koruma durumunu kontrol etmek ve hangi gelişmiş kuralların uygulanması gerektiğini belirlemek için tarama geçmişine erişim gereklidir

Bu verileri başka hiçbir amaçla kullanmıyoruz veya kimseyle paylaşmıyoruz. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
