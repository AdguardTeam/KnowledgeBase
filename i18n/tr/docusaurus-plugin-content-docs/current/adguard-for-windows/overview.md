---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Windows için AdGuard can sıkıcı afişleri, açılır pencereleri, video reklamları ve izleyicileri engelleyen, kullanımı kolay bir araçtır. Ancak hepsi bu kadar değil: veri tasarrufu yapmanıza, web sayfalarını daha hızlı yüklemenize, bilgisayarınızı istenmeyen ve potansiyel olarak kötü amaçlı sitelerden korumanıza yardımcı olur. AdGuard ayrıca sizi kimlik avı sitelerinden korur ve çocuklarınızı uygunsuz içerikten uzak tutar.

## Ana ekran

![Ana ekran *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/home-screen.png)

Windows için AdGuard'ı başlattığınızda, uygulamanın ana ekranını göreceksiniz. En göze çarpan detayı, *korumayı etkinleştirme veya devre dışı bırakma* düğmesidir. Ayrıca bu ekranda engellenen reklamları, izleyicileri ve tehdit istatistiklerini izleyebilir, uygulamanın güncel sürümünü öğrenebilir veya güncelleyebilirsiniz. Ayrıca, sağ üst köşede dört sekme vardır: *Ayarlar*, *Destek*, *Lisans* ve *Hakkında*. Bunların her biri hakkında ayrı ayrı konuşmaya değer.

## Ayarlar

![Ayarlar *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

*Ayarlar* en fazla dikkat gerektiren bölümdür. Burası, uygulamayı gereksinimlerinizi tam olarak karşılayacak şekilde yapılandırabileceğiniz yerdir: yalnızca sizi rahatsız edenleri engeller, güvenilir sağlayıcının DNS sunucusunu kullanır, üçüncü taraf tanımlama bilgilerini kaldırır, vb.

### Genel ayarlar

Burada dili ve temayı (Koyu veya Açık) ayarlayabilir, AdGuard'ın sistem başlangıcında başlatılmasını ve sessiz otomatik güncellemeleri etkinleştirebilir, güncelleme kanalını ve filtre güncelleme denetimi aralığını seçebilirsiniz. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect *Debug logs*](../solving-problems/adguard-logs).

![Gelişmiş Ayarlar *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Ekranın en altında *Gelişmiş Ayarlar* öğesini bulacaksınız. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. Bu nedenle, bu bölümü yalnızca ne yaptığınızdan eminseniz veya destek ekibimiz size sormuşsa açmanızı tavsiye ederiz. *Gelişmiş Ayar* bölümünde nelerin ayarlanabileceğini öğrenmek istiyorsanız [özel makalesini](../solving-problems/low-level-settings) okuyun.

### Reklam Engelleyici

Bu, ziyaret ettiğiniz sitelerden ve cihazınızda yüklü uygulamalardan reklamları kaldıran Windows için AdGuard'ın ana modülüdür. Reklamları ve afişleri, açılır pencereleri veya izleyiciler gibi gizliliği tehdit eden içeriği filtrelemek için AdGuard farklı filtreler kullanır: [özel söz dizimi](/general/ad-filtering/create-own-filters) ile yazılmış, benzer amaca sahip kural grupları. Filtrelerin ne olduğunu ve nasıl çalıştığını anlamak için [bu makaleyi](/general/ad-filtering/how-ad-blocking-works) okuyun.

![Reklam Engelleyici *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

Reklam Engelleyici modülünde şunları yapabilirsiniz:

- enable automatic activation of language-specific filters,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- activate pre-installed filters such as *AdGuard Base filter*,
- install filters from the list or add a custom filter by clicking the *Add a filter* button,
- make changes to existing rule groups using the *Filter editor* button,
- see all the requests sent by browsers and apps installed on your computer by clicking the *Filtering log* button. From there you can also block or unblock any request by creating a custom rule,
- compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Kendi kurallarınızı elle yazmaya başlamadan önce ayrıntılı [söz dizimi rehberimizi](/general/ad-filtering/create-own-filters)okuyun.

### Gizlilik Modu

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Gizlilik Modu, kişisel bilgilerinizi bu tür veri ve istatistik toplama sistemlerinden korur.

![Gizlilik Modu *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Gizlilik Modun çalışmasını esnek bir şekilde ayarlayabilirsiniz: örneğin, sitenin internette bulmak için kullandığınız arama isteğini almasını yasaklayabilir, hem üçüncü taraf hem de sitenin kendi çerezlerini otomatik olarak silebilir ve tarayıcınızda nerede olduğunuzu izlemek için kullanılabilecek konum paylaşımını devre dışı bırakabilirsiniz.

Gizlilik Modu ve birçok seçeneği hakkında her şeyi öğrenmek için [bu makaleyi okuyun](/general/stealth-mode).

### Gezinti Koruması

Gezinti Koruması, kötü amaçlı ve kimlik avı sitelerine karşı güçlü koruma sağlar. Hayır, Windows için AdGuard bir antivirüs değildir. Ne bir virüs indirilmeye başlandığında bunu durdurur ne de var olanları siler. Ancak, alan adı "güvenilmeyen siteler" veri tabanımıza eklenmiş bir sitesine gitmek veya böyle bir siteden bir dosya indirmek üzereyseniz sizi uyarır. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

Bu modülde şunları yapabilirsiniz

- kötü amaçlı ve kimlik avı sitelerine yönelik istekleri engellemek için bildirimleri etkinleştirin,
- sesli bildirimleri etkinleştirin,
- kötü amaçlı ve kimlik avı siteleri veri tabanını güncel tutmamıza yardımcı olması için AdGuard sunucusuna anonim güvenlikle ilgili bilgiler göndermeyi kabul edin.

![Gezinti Koruması *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Gezinti Koruması hakkında daha fazla bilgi edinmek isterseniz [bu makaleyi](/general/browsing-security) okuyun.

### DNS Koruması

DNS koruma ayarlarını keşfetmek istemenizin üç önemli nedeni vardır. İlk olarak, İSS'niz tarafından izlenmekten kaçınmak için. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Genellikle, DNS sunucusu İSS'nize aittir ve bu da çevrimiçi etkinliğinizi izlemelerine olanak tanır. İkincisi, DNS trafiğinizi şifrelemek için. Üçüncüsü ise [DNS düzeyinde içeriği engellemektir](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Koruması *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. Özel DNS sunucuları bile ekleyebilirsiniz. Ayrıca, [DNS kural söz dizimini](https://adguard-dns.io/kb/general/dns-filtering-syntax/) kullanarak özel kurallar ekleme seçeneği de vardır. Ve gerekirse, [istediğiniz DNS filtrelerini](https://filterlists.com) ekleyebilirsiniz.

### Ebeveyn Denetimi

Çocuklar tarafından kullanılan bir bilgisayardan erişimin kısıtlanması gereken birkaç site vardır. Bu görev Ebeveyn Denetimi tarafından gerçekleştirilir.

![Ebeveyn Denetimi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Modül, tarayıcıda açılan web sayfalarının içeriğini kontrol eder ve çocuklar için istenmeyen içeriğe sahip olanları filtreler: yetişkinler için resimler ve metinler, kaba dil, şiddet, uyuşturucu kullanımı, vb. Ebeveyn Denetimi ayarları parola korumalıdır, böylece çocuk kısıtlamaların ötesine geçemez. Bu modül sadece istenmeyen sitelere yönlendirmeleri engellemekle kalmaz, aynı zamanda çocuklar için uygun olmayan bağlantıları da arama sonuçlarından silebilir.

Ebeveyn Denetimi modülünde, bu seçeneğin nasıl çalıştığını özelleştirmek için *Güvenli arama* öğesini etkinleştirebilir, *engel listesi* ve *izin listesi* öğelerini yönetebilirsiniz. Çocuğunuzun bilgisayara yazılım indirip yüklemesini engellemek için *Yürütülebilen dosyaların indirilmesini engelle* kutusunu da işaretleyebilirsiniz. *Ebeveyn Denetimi* modülünde iki seçenek daha vardır: *Ebeveyn Denetimi* tarafından korunacak belirli bir Windows kullanıcısını seçebilir ve AdGuard ayarlarının değişmesini önlemek için bir parola belirleyebilirsiniz.

![Ebeveyn Denetimi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Tarayıcı Asistanı

![Tarayıcı Asistanı *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Bu sekmeden, birincil işlevi filtrelemeyi doğrudan tarayıcıdan yönetmek olan Tarayıcı Asistanı yüklemeye kolayca devam edebilirsiniz. Bununla nasıl çalışılacağı ve tarayıcınız için Tarayıcı Asistanı yoksa ne yapılacağı hakkında daha fazla bilgiyi [ayrı makalede](../browser-assistant) açıkladık.

## Uzantılar

AdGuard, [kullanıcı betik yöneticisi](/general/userscripts) olarak çalışan site işlevselliğini önemli ölçüde genişletebilir. AdGuard Kullanıcıları kendi betiklerini ekleyebilir ve mevcut olanları yönetebilir.

![Uzantılar *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Kullanıcı betiklerini otomatik olarak tespit et**

Bu seçenek etkinleştirildiğinde, AdGuard tarayıcı sorgularını otomatik olarak kullanıcı betiklerini tanımlar ve bunların yüklenmesini önerir. Aksi takdirde, uzantılar elle indirilebilir ve yüklenebilir.

Aşağıdaki uzantılar AdGuard ile birlikte yüklenir:

![Önceden yüklenmiş kullanıcı betikleri *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard Asistanı**

AdGuard Asistanı, tarayıcınız için [yeni Asistan](../browser-assistant) yoksa kullanabileceğiniz Eski Asistandır. Bu uzantının adı oldukça bilinçli: Aslında, kullanıcının uygulamayı açmaya gerek kalmadan doğrudan tarayıcıda temel AdGuard ayarlarını değiştirmesine yardımcı oluyor. AdGuard Asistanı, tüm Microsoft Windows uyumlu tarayıcılarla çalışır. Ayrıca, AdGuard Asistanı simgesi, kullanıcı tarafından istisna olarak listelenen sitelerde ve yanlış içerik görüntüleme riski bulunan belirli web sayfalarında görüntülenmeyecektir.

**AdGuard Extra**

This is a custom extension designed to fight the technique of re-inserting blocked ads — the so-called ad blocker circumvention/ad reinjection. Both are advanced anti-ad blocker methods that continue to rise in popularity among advertisers.

AdGuard Extra, aslında sayfaların çalışma şeklini, sitelerin engelleyicileri atlamak için yukarıda belirtilen yöntemleri kullanmasını çok daha zor hâle getirecek şekilde değiştiren bir mini programdır.

**AdGuard Açılır Pencere Engelleyici**

Bu uzantı, web sayfalarını görüntülediğinizde açılır pencerelerin açılmasını engeller. Bazı açılır pencereler yararlı kabul edilir — site yönetimi için ayarlar veya bir bağlantıya tıklandığında gösterilen ek referans bilgileri içerebilirler. Bu nedenle gerekirse Engelleyiciyi kapatabilirsiniz. Bu uzantı, AdGuard istisnalar listesine eklenen sitelerde de çalışmaz. Varsayılan olarak kapalıdır, ancak uygulama ayarlarından açabilirsiniz. Bu uzantı hakkında daha ayrıntılı bilgiyi Bilgi tabanımızda bulabilirsiniz.

**Web of Trust**

Web of Trust, kullanıcılarının görüşlerine dayanarak her sitenin itibarını görmenizi sağlar. Site bir dizi özel kritere göre derecelendirilir: güven, güvenlik, vb. Bu uzantı varsayılan olarak kapalıdır, ancak uygulama ayarlarından açabilirsiniz. Lütfen AdGuard'ın bu uzantının geliştiricisi olmadığını unutmayın.

### Ağ

Sondan bir önceki modül ağ filtrelemeye ayrılmıştır ve burada ağla ilgili ek seçenekler bulacaksınız. Bunlardan ikisi varsayılan olarak etkindir: *Trafik filtrelemeyi etkinleştir* ve *HTTPS protokolünü filtrele*. Bunlar, web alanınızı daha iyi filtrelemek için önemli olağanüstü önlemlerdir. Çoğu site artık HTTPS kullanıyor ve aynı durum reklamcılık için de geçerli. Youtube.com, facebook.com ve twitter.com gibi birçok siteden HTTPS filtreleme olmadan reklamları kaldırmak imkansızdır. Bu nedenle, güçlü bir nedeniniz olmadığı sürece *HTTPS protokolünü filtrele* özelliğini etkin tutun.

![Ağ Ayarları *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

Bu modülde, AdGuard'ı içinden geçen tüm trafiği filtreleyecek normal bir HTTP proxy olarak kullanmak için "AdGuard'ı HTTP proxy olarak kullan" onay kutusunu işaretleyebilirsiniz. Ayrıca *EV sertifikalarına sahip siteleri filtrele* özelliğini de etkinleştirebilirsiniz. Genişletilmiş Doğrulama (EV) SSL Sertifikaları daha güçlü bir güvenlik garantisi sunar; bu tür sitelerin sahipleri EV yönergeleri tarafından tanımlanan kapsamlı ve küresel olarak standartlaştırılmış bir kimlik doğrulama sürecinden geçmek zorundadır. Bazı kullanıcıların bu tür sertifikalara sahip sitelere güvenmelerinin ve bunları filtrelememeyi tercih etmelerinin nedeni budur.

Son olarak, proxy ayarlarının bulunduğu bir bölüm vardır. Burada, filtreleri güncellemek, yeni sürümleri edinmek, vb. için AdGuard'ın hangi proxy sunucusunu kullanması gerektiğini belirleyebilirsiniz.

### AdGuard VPN

Son bölüm, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araç olan AdGuard VPN'e ayrılmıştır. *İndir* düğmesine tıklayarak indirebilir veya *Ana Sayfa* düğmesine tıklayarak AdGuard VPN sitesine gidebilirsiniz.

AdGuard VPN nasıl çalışır? NTeknik detaylara girmeden VPN'in kullanıcının bilgisayarı veya mobil cihazı ile uzak bir VPN sunucusu arasında güvenli bir şifreli tünel oluşturduğunu söyleyebiliriz. Bu şekilde, üçüncü taraf bir gözlemci gerçek kullanıcının IP'sini değil VPN sunucusunun IP adresini gördüğünden, kullanıcının anonimliğinin yanı sıra veri gizliliği de korunur.

**AdGuard VPN ne yapar:**

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- encrypts your traffic to make it unreadable to third parties
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

AdGuard VPN hakkında daha fazla bilgi edinmek için [AdGuard VPN Bilgi Tabanın](https://adguard-vpn.com/kb/) içinde dalın.

## Diğerleri

Kullanıcı deneyimine çok şey kattığı için bu makalede gözden kaçırılmaması gereken başka yararlı AdGuard seçenekleri de var.

### Destek

![Destek *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/support.png)

Destek sekmesine tıkladığınızda, bir hatayı bildirebileceğiniz, bir özellik talebi gönderebileceğiniz veya sadece ürün hakkındaki görüşlerinizi paylaşabileceğiniz bir uyarı kutusu açılır.

### Lisans

![Lisans *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/license.png)

Bu sekme lisansınızla ilgili bilgileri içerir. Burada şunları yapabilirsiniz:

- lisans türünü (nightly derleme, beta veya sürüm), AdGuard'a aynı anda bağlanabilecek cihaz sayısını ve lisansın sona erme tarihini öğrenin;
- lisans satın alma sayfasına gitmek ve lisansı etkinleştirmek, sıfırlamak veya kurtarmak için düğmeye tıklayın.

### Hakkında

![Hakkında *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/about.png)

In addition to information about the current version of the program, this tab provides some useful links to Licese agreement, Privacy policy, Acknowledgements, Discussions, and Version history pages.

### Güncellemeleri denetleyin

![Güncellemeleri denetle *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/check-updates.png)

Filtre ve kullanıcı betikleri güncellemelerini denetlemek için uygulamanın ana ekranının sağ üst köşesindeki dönen ok simgesine tıklayın.

### Tepsi menüsü

AdGuard menülerinde gezinirken size zaman kazandırmak için sık kullanılan seçeneklerin ve ayarların çoğuna tepsi menüsünden ulaşılabilir. Menüyü açmak için tepsideki AdGuard simgesine sağ tıklayın. Size aşağıdaki seçenekleri sunar:

- korumayı etkinleştirin
- korumayı devre dışı bırakın: tamamen veya 30 saniyeliğine
- *Ayarlar* öğesine gidin
- *Araçlar* ve *Gelişmiş* menülerini açın
- filtre güncellemelerini denetleyin
- uygulama güncellemelerini denetleyin
- son açılır mesajı tekrar görüntülemek için
- *Destek* ve *Hakkında* bölümlerine ulaşın
- AdGuard'ı kapatın ama filtrelemeye devam edin
- AdGuard'dan çıkın
