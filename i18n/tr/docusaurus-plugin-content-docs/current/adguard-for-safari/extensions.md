---
title: Safari uzantıları
sidebar_position: 3
---

:::bilgi

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
- AdGuard Diğerleri

Her içerik engelleme uzantısı, 150.000 adede kadar etkin filtreleme kuralı içerebilir. Çoğu filtre grubundaki kural sayısı 150.000'i geçmez. Ancak çok fazla dile özgü veya özel filtre etkinleştirirseniz sınırı aşabilirsiniz. Bu gibi durumlarda, sınırı aşan rastgele kurallar otomatik olarak devre dışı bırakılır ve bu da yanlış engellemeye yol açabilir. **Yalnızca ihtiyacınız olan filtreleri etkinleştirmenizi önemle tavsiye ederiz**.

Ayrıca diğer özelliklerden sorumlu bir uzantı daha var: *Safari için AdGuard*, Safari'deki arama çubuğunun yanına AdGuard simgesini ekler ve karmaşık reklamları engellemek için gelişmiş kuralların kullanılmasına izin verir.

![Safari uzantıları](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Her bir uzantı hakkında daha fazla bilgi aşağıdadır.

## İçerik engelleme uzantıları

*AdGuard Genel* *Filtreler* → *Reklam engelleme* ve *Filtreler* → *Dile özgü* öğesinde bulabileceğiniz filtrelerdeki kuralları uygular. Bu uzantı, kapsamlı reklam engellemeye odaklanır ve belirli dillerdeki reklamlar için filtreler içerir.

*AdGuard Gizlilik*, *Filtreleme* → *Gizlilik* öğesinde bulunan filtrelerdeki kuralları uygular. İzleme mekanizmalarını engeller ve göz atma etkinliğinizin gizli kalmasını sağlar.

*AdGuard Sosyal*, *Filtreler* → *Sosyal Ağ Araçları* ve *Filtreler* → *Can Sıkıcı Öğeler* öğelerinde bulunan filtrelerdeki kuralları uygular. Açılır pencereleri, sosyal medya düğmelerini, çevrimiçi asistan pencerelerini ve web sayfalarındaki rahatsız edici bulabileceğiniz diğer öğeleri engeller.

*AdGuard Güvenlik*, *Filtreler* → *Güvenlik* altındaki filtrelerdeki kuralları uygular. Bu uzantı, potansiyel olarak zararlı öğeleri tanımlayıp engelleyerek kullanıcıları kötü amaçlı içerikten korur.

*AdGuard Diğer*,, yukarıda belirtilen kategorilere girmeyen ve *Filtreler* → *Diğer*: *Arama motoru reklamları ve öz tanıtımına izin veren filtre*, *AdGuard DNS filtresi* ve *AdGuard Deneysel filtre* öğelerinde bulunan filtrelerdeki kuralları uygular.

*AdGuard Özel*, kendi eklediğiniz filtrelerdeki kuralları *Özel filtreler* öğesine uygular.

Kullanıcı kuralları ve izin listesi kuralları her uzantıya dahildir.

## Safari için AdGuard

*Safari için AdGuard, arama çubuğunun yanındaki AdGuard simgesini etkinleştirir. Belirli bir sitede hızlı bir şekilde koruma ayarlamak veya reklamları elle engellemek istiyorsanız kullanışlıdır. Ayrıca Safari tarafından desteklenen biçime dönüştürülmemiş gelişmiş kurallar da içerir. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Safari uzantıları nasıl yönetilir

1. Safari'yi açın ve menüyü genişletmek için ekranın sol üst köşesindeki *Safari* öğesine tıklayın.

    ![Safari ayarları *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. *Ayarlar...* öğesine tıklayın

1. *Uzantılar* öğesini seçin.

    ![Uzantılar sekmesi](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Safari için AdGuard neden izin gerektiriyor

When enabling the *AdGuard for Safari* extension, you might notice that it requires **access to web page content** and **access to browsing history**. İşte bu izinlere neden ihtiyaç duyar:

- Elle reklam engelleme ve gelişmiş engelleme kurallarının düzgün çalışması için web sayfası içeriğine erişim gereklidir
- Sitelerdeki koruma durumunu kontrol etmek ve hangi gelişmiş kuralların uygulanması gerektiğini belirlemek için tarama geçmişine erişim gereklidir

Bu verileri başka hiçbir amaçla kullanmıyoruz veya kimseyle paylaşmıyoruz. Daha fazla bilgi için [Gizlilik politikamıza](https://adguard.com/privacy.html) bakabilirsiniz.
