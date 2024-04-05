---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::bilgi

Bu makale, yalnızca tarayıcınızı koruyan AdGuard Tarayıcı Uzantısı hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

AdGuard, farklı platformlarda reklamları ve izleyicileri engelleyen bir dizi yazılım ürünü sunar. En popüler AdGuard ürünlerinden biri, beş popüler tarayıcıda çalışan ücretsiz bir uzantıdır: Chrome, Firefox, Edge, Opera ve Yandex Browser. Tarayıcı uzantıları temel reklam engelleme özelliklerini içerir ancak [Windows için AdGuard](/adguard-for-windows/features/home-screen) ve [Mac için AdGuard](/adguard-for-mac/overview) gibi tam özellikli masaüstü programlarıyla karşılaştırılamaz.

![Chrome için AdGuard Tarayıcı Uzantısı *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Kullanılabilirlik {#br-extension}

[AdGuard Tarayıcı Uzantısı](https://adguard.com/adguard-browser-extension/overview.html) çoğu büyük tarayıcıda kullanılabilir. Tarayıcınızın çevrimiçi mağazasında veya resmi sitemizde kolayca bulabilirsiniz.

![En popüler tarayıcılar için kullanılabilir *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::not

Safari için bağımsız bir uzantımız var. Since the release of [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), most of the ad-blocking extensions have experienced huge issues and many of them stopped functioning. Safari için bu makalede açıklanan uzantıya kıyasla bazı farklılıkları olan [ayrı bir uzantı](/adguard-for-safari/features/general) geliştirmek zorunda kaldık.

:::

**Do not forget that the functionality of each extension is strictly limited by the browser’s capabilities.** So if you want to get full-fledged protection, consider installing a standalone program for your computer. Böyle olmasının [bir nedeni](#comparison) var.

## Reklam engelleme {#adblocker}

Reklamları engellemek, herhangi bir reklam engelleyicinin temel işlevidir ve AdGuard bir istisna değildir. Uzantı, tarayıcınızdaki herhangi bir sayfadaki reklamları başarıyla engeller. Reklam engelleme, sözde filtre listelerine veya basitçe [filtrelere](/general/ad-filtering/how-ad-blocking-works) dayanmaktadır. Filtreler uzantınızın ayarlarından etkinleştirilebilir veya devre dışı bırakılabilir. Belirli filtreleri etkinleştirerek reklam engellemeyi özelleştirebilirsiniz.

### Filtreler {#filters}

Özünde, filtre listeleri özel bir dilde yazılmış kurallar dizisidir. Reklam engelleyiciniz kuralları yorumlar ve uygular. Sonuç olarak, web sayfalarınızda reklam görmeyi bırakırsınız.

![Filtreler *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tüm filtreler rollerine göre gruplandırılmıştır. Örneğin, reklam engelleme filtreleri, gizlilik koruma filtreleri, sosyal medya ile ilgili filtreler, vb. için kategoriler vardır. Filtreleri teker teker veya tüm grubu aynı anda etkinleştirebilirsiniz.

![Reklam engelleme filtreleri *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Özel filtreler {#custom}

While the features of other filter groups are more or less predictable, there is a group called *Custom* that may raise additional questions.

![Özel filtreler *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Bu sekmede, varsayılan olarak uzantıda bulunmayan filtreler ekleyebilirsiniz. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Üstelik kendi filtrelerinizi oluşturabilir ve ekleyebilirsiniz. Aslında, herhangi bir filtre seti oluşturabilir ve reklam engellemeyi istediğiniz şekilde özelleştirebilirsiniz.

Filtre eklemek için *Özel filtre ekle* öğesine tıklamanız, eklenmesini istediğiniz filtrenin URL'sini veya dosya yolunu girmeniz ve *İleri* öğesine tıklamanız yeterlidir.

![Özel filtre ekle *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Kullanıcı kuralları {#user-rules}

*Kullanıcı kuralları*, reklamların engellenmesini özelleştirmenize yardımcı olan başka bir araçtır.

![Kullanıcı kuralları *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Yeni kurallar eklemenin birkaç yolu vardır. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Kullanıma hazır bir filtre listesini bir metin dosyasından da içe aktarabilirsiniz. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the [Custom filters](#custom) tab.

Ayrıca, kendi filtreleme kurallarınızı dışa aktarabilirsiniz. Bu seçenek, kural listenizi tarayıcılar veya cihazlar arasında aktarmak için iyidir.

İzin listesine bir site eklediğinizde (daha fazla bilgi [aşağıda](#allowlist)) veya sayfadaki bir öğeyi gizlemek için Asistan aracını kullandığınızda, aynı bir kural da *Kullanıcı kuralları* bölümüne kaydedilir.

### İzin listesi {#allowlist}

*İzin listesi* belirli siteleri filtrelemeden hariç tutmak için kullanılır. Listedeki sitelere engelleme kuralları uygulanmaz.

![İzin listesi *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

*İzin listesi* tersine de çevrilebilir: bu listeye eklenen siteler dışında her yerde reklam engelini kaldırabilirsiniz. Bunu yapmak için *İzin listesini ters çevir* seçeneğini etkinleştirin.

![İzin listesini ters çevir *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Ayrıca mevcut izin listelerini içe ve dışa aktarabilirsiniz. Örneğin, aynı izin verme kurallarını tarayıcılarınızın her birine uygulamak istiyorsanız kullanışlıdır.

## Gizlilik Modu {#stealth-mode}

*Gizlilik Modu*, hassas kişisel verilerin çevrimiçi izleyicilerden ve dolandırıcılardan korunmasını sağlamayı amaçlar.

![Gizlilik Modu *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

Gizlilik Modunda, bir sitenin onu internette bulmak için kullandığınız arama sorgularını görmesini engelleyebilir, üçüncü taraf ve sitenin kendi çerezlerini, vb. otomatik olarak silebilirsiniz. Tüm bu özelliklere [ayrı bir makale](/general/stealth-mode) ayrılmıştır.

:::not

Tam teşekküllü uygulamalarda bulunan *Gizlilik Modu* seçeneklerinden bazıları teknik kısıtlamalar nedeniyle tarayıcı uzantılarında mevcut değildir.

:::

## Diğer özellikler ve seçenekler {#other}

AdGuard Tarayıcı Uzantısının büyük anahtar modüllerinin yanı sıra, uzantı ayarlarının *Genel* ve *Ek ayarlar* sekmelerinde yapılandırılabilen birkaç özel özellik daha vardır.

### Genel {#general}

In the *General* tab, you can allow search ads and the [self-promotion of websites](/general/ad-filtering/search-ads), enable the automatic activation of language-specific filters, indicate the filters update interval, etc.

![Genel *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Ayrıca, buradan [*Kimlik avı ve kötü amaçlı yazılım koruması*](/general/browsing-security) öğesini etkinleştirebilirsiniz.

Ayar yapılandırmanızı *Ayarları dışa aktar* düğmesine tıklayarak kaydedebilirsiniz. Ayarlar bir .json dosyası olarak kaydedilecektir. Önceden kaydedilmiş ayar yapılandırmasını yüklemek için *Ayarları içe aktar* işlevini kullanın. Farklı ayar profilleri arasında hızlıca geçiş yapmak ve hatta ayar yapılandırmalarını farklı tarayıcılar arasında aktarmak için bile kullanabilirsiniz.

### Ek ayarlar {#misc}

*Ek ayarlar* bölümü, reklam engelleme süreci ve uygulama kullanılabilirliği ile ilgili bir takım çeşitli ayarlar içerir.

![Ek ayarlar *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Bu sekmeden, iyileştirilmiş filtreleri etkinleştirebilir, uzantı güncellemeleriyle ilgili bildirimleri etkinleştirebilir, *Filtreleme günlüğünü* açabilir veya engellenen reklamların ve izleyicilerin istatistiklerini temizleyebilirsiniz.

Ayrıca, uygulanan kurallarla ilgili istatistikleri göndererek filtrelerin geliştirilmesinde bize yardımcı olmayı tercih edebilirsiniz: hangilerinin tetiklendiği, hangi sitelerde ve ne sıklıkta olduğu. Kullanıcı verilerini onay olmadan toplamadığımız için bu seçenek varsayılan olarak devre dışıdır. Yine de, etkinleştirirseniz, tüm veriler kesinlikle anonimleştirilecektir.

### Hakkında {#about}

*Hakkında* bölümünde, mevcut sürüm hakkında bilgiler, SKLS ve Gizlilik politikası ile GitHub'daki Tarayıcı uzantısı deposuna bağlantılar bulabilirsiniz.

![Hakkında *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Uzantının ana menüsü {#main-menu}

Uzantının ana sayfasına, tarayıcınızın araç çubuğundaki uzantı simgesine tıklayarak erişebilirsiniz.

![Ana menü *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

Ana sayfada, herhangi bir sayfadaki herhangi bir öğeyi elle gizleyebilir (*Kullanıcı kuralları* bölümüne ilgili bir kural eklenecektir), tarayıcınızın trafiği hakkındaki tüm bilgileri görüntülemek ve hareket hâlindeyken istekleri engellemek için *Filtreleme günlüğünü* açabilir veya bir sitenin güvenlik raporuna bakabilirsiniz. Ayrıca, herhangi bir site hakkında bir şikayet gönderebilir (örneğin, sayfada gözden kaçan reklamlar varsa, filtre mühendislerimiz raporu inceler ve sorunu çözer) ve uygulanan engelleme kurallarına ilişkin istatistikleri görebilirsiniz.

Tarayıcı tarafından yapılan tüm web istekleri, her istekle ilgili ayrıntılı bilgilerle birlikte *Filtreleme günlüğünde* görüntülenir. *Filtreleme günlüğü*, örneğin AdGuard Tarayıcı Uzantısı tarafından engellenen istekleri gözlemlemeyi kolaylaştırır. Ayrıca, herhangi bir isteği engellemenize veya daha önce engellenen bir isteği iki tıklamayla İzin listesine eklemenize olanak tanır. *Filtreleme günlüğü* ayrıca web isteklerini sıralamak için size çok çeşitli seçenekler sunar; bu da kendi filtreleme kurallarınızı oluştururken yardımcı olabilir. Ana menüdeki ilgili öğeyi seçerek veya ayarlar sayfasından ("Ek ayarlar" sekmesinde) *Filtreleme günlüğünü* açabilirsiniz.

Uzantının ana menüsünün sağ üst köşesindeki simgelere tıklayarak uzantı ayarlarını açabilir veya korumayı duraklatabilirsiniz.

## AdGuard Tarayıcı Uzantısı ile bağımsız uygulamalar {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard bağımsız programlarının tarayıcı uzantılarına göre en büyük avantajı, programların her tarayıcıda ve neredeyse tüm uygulamalarda reklamları engelleyebilmesidir. Aynı anda farklı tarayıcılar kullanabilirsiniz, uygulama hepsinde reklamları ve çevrimiçi tehditleri eşit derecede iyi filtreler.

İkinci fark, uzantı tabanlı reklam engelleyicilerin olanaklarının tarayıcı yönergeleri tarafından sıkı bir şekilde sınırlandırılmış olmasıdır. Tarayıcı uzantıları, reklam engellemenin kısıtlanabileceği tarayıcıların politikalarına uygun olmalıdır. Bu nedenle, bazı filtreleme kuralları uzantılar tarafından desteklenmez. Masaüstü uygulamalarının işlevselliği sınırlı değildir, bu nedenle daha iyi bir filtreleme kalitesine sahiptirler.

AdGuard Tarayıcı Uzantısı ücretsiz ve yüklemesi kolay olmasına, reklamları engellemek ve çevrimiçi tehditlerle mücadele etmek için filtrelere sahip olmasına karşın, tam teşekküllü uygulamalar daha güçlüdür ve gelişmiş özelliklerin bir listesine sahiptir. Aşağıdaki karşılaştırmalı tablodaki tüm farklılıklara bakın.

![Uzantı ile Uygulama *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – tarayıcı kısıtlamaları dahilinde ve yalnızca yüklü olduğu tarayıcıda;

`2` – uzantı, diğer uzantılardan gelen istekleri algılayamaz. Kötü amaçlı veya izleme uzantısı, sunucusuna size reklam göstermek veya etkinliğinizi izlemek için bir istek gönderirse, AdGuard Tarayıcı Uzantısı bu isteği engellemeyecektir;

`3` – belirli tarayıcı sınırlamaları nedeniyle, tüm reklam türleri ve tehditler tarayıcı uzantıları tarafından engellenemez. Bazı öğeler sayfaya ulaşabilir ve yükleme sürecini yavaşlatabilir. Ayrıca, tarayıcı tabanlı reklam engelleyicilerin aksine, AdGuard uygulaması reklamları tarayıcıya yüklenmeden önce engeller. Bu, veri tasarrufu ve sayfa açılışını hızlandırır.
