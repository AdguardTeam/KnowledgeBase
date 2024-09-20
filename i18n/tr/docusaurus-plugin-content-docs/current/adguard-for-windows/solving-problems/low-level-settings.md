---
title: Gelişmiş (düşük düzey) Ayarlar kılavuzu
sidebar_position: 7
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Daha önce düşük düzey ayarlar olarak bilinen Gelişmiş Ayarlar çoğunlukla ortalama kullanıcı yetkinliğinin ötesine geçen ve günlük kullanımda uygulanmayan seçenekleri içerir. Windows için AdGuard, hiçbirini değiştirmenize gerek kalmadan çalışacak şekilde tasarlanmıştır, ancak bazı önemli durumlarda veya nadir görülen bir sorunu çözerken ek özellikler sağlar.

:::dikkat

*Gelişmiş Ayarlar* düşüncesizce değiştirilmesi, AdGuard'ın performansında sorunlara neden olabilir, internet bağlantısını kesebilir veya güvenliğinizi ve gizliliğinizi tehlikeye atabilir. Bu ayarlarda yalnızca ne yaptığınızdan eminseniz veya destek ekibimiz bunu yapmanızı istediyse değişiklik yapmalısınız.

:::

## Gelişmiş Ayarlara nasıl ulaşılır

*Gelişmiş ayarlar* öğesine gitmek için, ana pencerelerde *Ayarlar → Genel Ayarlar* öğesine tıklayın ve *Gelişmiş Ayarlar* öğesine ilerleyin. Alternatif olarak, tepsi menüsünde *Gelişmiş → Gelişmiş ayarlar...* öğesini seçin.

## Gelişmiş Ayarlar

Gelişmiş Ayarlar öğesini açtığınızda size aşağıdaki seçenekler sunulacaktır:

### TCP Fast Open protokolünü engelle

Etkinleştirilirse, AdGuard Edge tarayıcısında TCP Fast Open'ı engeller. Ayarları uygulamak için tarayıcıyı yeniden başlatmanız gerekir.

### Use Encrypted Client Hello

Her şifrelenmiş internet bağlantısının bir de şifrelenmemiş kısmı vardır. Bu, bağlandığınız sunucunun adını içeren ilk pakettir. Encrypted Client Hello teknolojisinin bu sorunu çözmesi ve şifrelenmemiş bilgilerin son kısmını şifrelemesi gerekiyor. To benefit from it, enable the *Use Encrypted Client Hello* option. Alan adı için ECH yapılandırmasını aramak için yerel bir DNS proxy'si kullanır. If it is found, Client Hello packet will be encrypted.

### Sitelerin sertifika şeffaflığını kontrol et

Chrome Sertifika Şeffaflığı Politikasını temel alarak alan adı için tüm sertifikaların orijinalliğini doğrular. Sertifika, Chrome Sertifika Şeffaflığı Politikasına uymuyorsa, AdGuard siteyi filtrelemez. Chrome da onu engeller.

### SSL/TLS sertifika iptal kontrollerini etkinleştir

Bu seçenek etkinleştirildiğinde, sitenin SSL/TLS sertifikasının iptal edilip edilmediğini kontrol etmek için eşzamansız OCSP kontrolleri gerçekleştirir.

OCSP kontrolü minimum zaman aşımı süresi içinde tamamlanırsa AdGuard hemen sonucu uygular: sertifika iptal edilirse bağlantıyı engelleyin veya sertifika geçerliyse bağlantı kurun.

Doğrulama çok uzun sürerse AdGuard bir bağlantı kurar ve arka planda kontrol etmeye devam eder. Sertifika iptal edilirse alan adına yapılan mevcut ve gelecekteki bağlantılar engellenecektir.

### Ayarlarda AdGuard VPN'i göster

Bu seçeneğin etkinleştirilmesi, uygulamanın ve ürünün sitenin kolayca açılması için Ayarlar'da AdGuard VPN sekmesini görüntülemenize olanak tanır.

### Tam dosya yolu girerek uygulamayı filtrelemeden hariç tut

AdGuard'ın belirli bir uygulamayı filtrelememesini istiyorsanız, bunların tam yolunu belirtin; uygulamalar filtrelemenin dışında bırakılacaktır. Farklı yolları noktalı virgülle ayırın.

### AdGuard açılır pencere bildirimlerini etkinleştir

AdGuard açılır bildirimlerini görmek için bu özelliği etkinleştirin. Çok sık görünmezler ve yalnızca önemli bilgiler içerirler. Son açılan bildirimi geri çağırmak için tepsi menüsünü de kullanabilirsiniz.

### Filtre aboneliği URL bağlantılarını otomatik yakala

AdGuard'ın filtre aboneliği URL'lerini (ör. `abp:subscribe` ve benzeri) otomatik olarak engellemesini ve özel bir filtre yükleme uyarı kutusu açmasını istiyorsanız bu özelliği etkinleştirin.

### HTTP/3'ü filtrele

Bu ayar etkinleştirilirse, AdGuard diğer istek türlerinin yanı sıra HTTP/3 üzerinden gönderilen istekleri de filtreler.

### Yönlendirme sürücü modunu kullan

Bu seçenek etkinleştirilirse AdGuard tüm trafiği keser ve daha fazla filtreleme için yerel proxy sunucusuna yönlendirir.

Aksi takdirde, AdGuard tüm trafiği yönlendirme olmadan anında filtreler. Bu durumda sistem, AdGuard'ı internete bağlanan tek uygulama olarak kabul eder (diğer uygulamalar onun üzerinden yönlendirilir). Dezavantajı ise sistem Güvenlik Duvarı'nı daha az etkili hâle getirmesidir. Bunun iyi yanı, bu yaklaşımın biraz daha hızlı çalışmasıdır.

### Sistem başlangıcında ana pencereyi aç

Sistem yüklendikten sonra ana AdGuard penceresinin açılmasını sağlamak için bu seçeneği etkinleştirin. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*.

### Sistem başlangıcında filtrelemeyi etkinleştir

v7.12'den başlayarak, varsayılan olarak AdGuard'ın hizmeti, AdGuard'ı sistem başlangıcında başlat seçeneği devre dışı bırakılırsa işletim sistemi başlatıldıktan sonra trafiği filtrelemez. Başka bir deyişle, AdGuard'ın hizmeti "boşta" modunda başlatılır. Uygulama başlatılmamış olsa bile AdGuard'ın trafiği filtrelemesini sağlamak için bu seçeneği etkinleştirin.

:::not

v7.12'den önce, AdGuard hizmeti varsayılan olarak filtreleme modunda başlatılıyordu ( *AdGuard'ı sistem başlangıcında başlat* devre dışı bırakılmış olsa bile). Eski davranıştan memnunsanız, bu seçeneği etkinleştirin.

:::

### localhost'u filtrele

AdGuard'ın geri dönen bağlantılarını filtrelemesini istiyorsanız, kutuyu işaretleyin. AdGuard VPN'iniz kuruluysa bu seçenek her zaman açık olur, aksi halde çalışmayacaktır.

### Belirtilen IP aralıklarını filtrelemeden hariç tut

AdGuard'ın belirli alt ağları filtrelemesini istemiyorsanız, bu özelliği etkinleştirin ve IP aralıklarını CIDR gösteriminde (örn. 98.51.100.14/24) aşağıdaki **Filtrelemeden hariç tutulan IP aralıkları** bölümünde belirtin.

### HAR yazımını etkinleştir

Bu seçenek **yalnızca hata ayıklama amacıyla** etkinleştirilmelidir. Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. Bu dosya Fiddler uygulamasıyla analiz edilebilir. İnternette gezinmeyi önemli ölçüde yavaşlatabileceğini unutmayın.

### Düz HTTP isteğine fazladan boşluk ekle

HTTP yöntemi ile URL arasına fazladan boşluk ekler ve Derin Paket İncelemesini önlemek için "Ana makine:" alanından sonraki boşluğu kaldırır. Örneğin, istek

`GET /foo/bar/ HTTP/1.1
Host: example.org`

şuna dönüştürülecektir

`GET /foo/bar/ HTTP/1.1
Host: example.org`

Bu seçenek yalnızca *DPİ'den koru* Gizlilik Modu seçeneği etkinleştirildiğinde uygulanır.

### İlk TLS paketinin parçalanma boyutunu ayarla

Derin paket incelemesinden kaçınarak TCP paket parçalanmasının boyutunu belirtir. Bu seçenek yalnızca güvenli (HTTPS) trafiğini etkiler.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Geçerli değerler: 1–1500. Geçersiz boyut belirtilirse, sistem tarafından seçilen değer kullanılacaktır. Bu seçenek yalnızca *DPİ'den koru* Gizlilik Modu seçeneği etkinleştirildiğinde uygulanır.

### Düz HTTP istek parçası boyutu

HTTP istek parçalanmasının boyutunu ayarlar. Bu seçenek yalnızca düz HTTP trafiğini etkiler. Bu seçenek etkinleştirilirse, AdGuard ilk paketi iki parçaya böler: ilki belirtilen uzunluğa sahiptir ve ikincisi tüm orijinal paketin uzunluğuna kadar geri kalanına sahiptir.

Geçerli değerler: 1–1500. Geçersiz boyut belirtilirse, sistem tarafından seçilen değer kullanılır. Bu seçenek yalnızca *DPİ'den koru* Gizlilik Modu seçeneği etkinleştirildiğinde uygulanır.

### QUIC'i göster

QUIC protokolü kayıtlarının filtreleme günlüğünde görüntülenmesine izin verir. Yalnızca engellenen istekler için.

### TCP keepalive'ı etkinleştir

Etkin olduğundan emin olmak ve NAT zaman aşımlarını yenilemek için boşta olan bağlantı üzerinden periyodik olarak TCP paketleri gönderir. Bu seçenek, bazı İSS'lerin kullandığı katı ağ adresi dönüştürme (NAT) ayarlarını atlamak için yararlı olabilir.

### TCP keepalive aralığı

Burada, bir keepalive probu göndermeden önce saniye cinsinden boşta kalma süresini belirtebilirsiniz. 0 belirtilirse, sistem tarafından seçilen değer kullanılacaktır.

:::not

Bu ayar yalnızca *TCP keepalive'ı etkinleştir* seçeneği etkinleştirildiğinde çalışır.

:::

### TCP keepalive zaman aşımı

Burada, yanıt vermeyen bir eşe başka bir keepalive probu göndermeden önce geçen süreyi saniye cinsinden belirtebilirsiniz. 0 belirtilirse, sistem tarafından seçilen değer kullanılacaktır.

:::not

Bu ayar yalnızca *TCP keepalive'ı etkinleştir* seçeneği etkinleştirildiğinde çalışır.

:::

### Java'yı engelle

Bazı siteler ve web hizmetleri hâlâ Java Eklentilerini desteklemektedir. Java eklentilerine temel oluşturan API'nin ciddi güvenlik açıkları bulunmaktadır. Güvenlik amacıyla bu tür eklentileri devre dışı bırakabilirsiniz. Bununla birlikte, *Java'yı engelle* seçeneğini kullanmaya karar verseniz bile, JavaScript hâlâ etkin olacaktır.

### DNS sunucusu zaman aşımı süresi

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. Bu alanı doldurmazsanız veya geçersiz bir değer girerseniz, 5000 değeri kullanılacaktır.

### DNS-over-HTTPS için HTTP/3 kullan

Seçilen üst kaynak bu protokolü destekliyorsa, bağlantıyı hızlandırmak amacıyla DNS-over-HTTPS üst kaynakları için HTTP/3'ü etkinleştirir. Bu, bu seçeneğin etkinleştirilmesinin tüm DNS isteklerinin HTTP/3 aracılığıyla gönderileceğini garanti etmediği anlamına gelir.

### Yedek DNS üst kaynaklarını kullan

Seçilen üst kaynaklara yönelik tüm DNS istekleri başarısız olursa, normal sorgular yedek kaynağa yönlendirilecektir.

### DNS üst kaynaklarını paralel olarak sorgulama

Tüm üst kaynaklar paralel olarak sorgulanacak ve ilk yanıt döndürülecektir. DNS sorguları paralel olarak yapıldığından bu özelliğin etkinleştirilmesi internet hızını artırır.

### Başarısız DNS sorgularına her zaman yanıt ver

Yönlendirilen üst kaynakların her birinde ve yedek alan adlarında adres çözümlemesi başarısız olursa, DNS isteğine verilen yanıt `SERVFAIL` olacaktır.

### Güvenli DNS isteklerinin filtrelenmesini etkinleştir

AdGuard, düz DNS isteklerine ek olarak güvenli DNS isteklerini yerel DNS proxy'sine yönlendirir.

### hosts kuralları için engelleme modu

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Reklam engelleme stili kuralları için engelleme modu

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Özel IPv4 adresi

hosts kuralları için Engelleme modunda veya reklam engelleme stili kuralları için Engelleme modunda Özel IP adresi seçilirse, bu IP adresi engellenen A isteklerine yanıt olarak döndürülür. Hiçbiri belirtilmezse, AdGuard varsayılan Refused hatasıyla yanıt verir.

### Özel IPv6 adresi

hosts kuralları için Engelleme modunda veya reklam engelleme stili kuralları için Engelleme modunda Özel IP adresi seçilirse, bu IP adresi engellenen AAAA isteklerine yanıt olarak döndürülür. Hiçbiri belirtilmezse, AdGuard varsayılan "Refused" hatasıyla yanıt verir.

### Yedek sunucular

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. Aralarından seçim yapabileceğiniz üç seçenek vardır:

- Yedek sunucuları kullanmayın;
- Sistem varsayılan sunucularını kullanın;
- Özel sunucular kullan.

### ECH'yi engelle

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Özel yedek sunucuların listesi

AdGuard'ın özel yedek sunucular kullanmasını istiyorsanız, bunları bu bölümde her satıra bir tane gelecek şekilde listeleyin.

### Özel önyükleme adresleri listesi

Önyükleme, daha önce *DNS koruması* içinde seçtiğiniz güvenli DNS sunucusunun IP adresini almak için kullanılan bir ara DNS sunucusudur. Sunucu adresini harflerle belirten protokoller (örneğin, DNS-over-TLS gibi) kullanılırken böyle bir "orta yol" gereklidir. Bu durumda, önyüklemeyi bir çevirmen görevi görerek harfleri sisteminizin anlayabileceği sayılara dönüştürür.

Varsayılan olarak sistem DNS çözümleyicisi kullanılır ve ilk önyükleme isteği bağlantı noktası 53 aracılığıyla yapılır. Eğer bu size uymuyorsa, şifrelenmiş DNS sunucusunun adresini belirlemek için kullanılacak DNS sunucularının IP adreslerini yukarıdan aşağıya doğru listeleyin. Belirtilen IP adresleri listelenen sıraya göre uygulanacaktır. Geçersiz adres belirtirseniz veya hiç adres belirtmezseniz sistem IP'leri kullanılacaktır.

### DNS istisnaları

Burada listelenen alan adlarına yapılan tüm DNS istekleri, uygulamanın ayarlarında belirtilen DNS sunucusu yerine sistemin varsayılan DNS sunucusuna yönlendirilecektir. Ayrıca, DNS engelleme kuralları bu tür isteklere uygulanmayacaktır.

### Belirtilen Wi-Fi ağ adlarını (SSID'ler) DNS filtrelemesinden hariç tut

DNS koruması, bu bölümde listelenen Wi-Fi ağlarını kapsamaz. Wi-Fi ağ adlarını (SSID'leri) her satıra bir tane belirtin. Belirli bir Wi-Fi ağı AdGuard Home veya başka bir DNS koruma sistemi tarafından zaten korunuyorsa bu yararlı olabilir. Bu durumda DNS isteklerini tekrar filtrelemek gereksizdir.
