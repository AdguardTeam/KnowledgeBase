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

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Yönlendirme sürücü modunu kullan

Bu seçenek etkinleştirilirse AdGuard tüm trafiği keser ve daha fazla filtreleme için yerel proxy sunucusuna yönlendirir.

Aksi takdirde, AdGuard tüm trafiği yönlendirme olmadan anında filtreler. Bu durumda sistem, AdGuard'ı internete bağlanan tek uygulama olarak kabul eder (diğer uygulamalar onun üzerinden yönlendirilir). Dezavantajı ise sistem Güvenlik Duvarı'nı daha az etkili hâle getirmesidir. Bunun iyi yanı, bu yaklaşımın biraz daha hızlı çalışmasıdır.

### Sistem başlangıcında ana pencereyi aç

Sistem yüklendikten sonra ana AdGuard penceresinin açılmasını sağlamak için bu seçeneği etkinleştirin. This setting, which doesn't affect whether the actual filtering service is launched or not, is located in *Settings → General Settings*.

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

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### İlk TLS paketinin parçalanma boyutunu ayarla

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Geçersiz boyut belirtilirse, sistem tarafından seçilen değer kullanılacaktır. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Düz HTTP istek parçası boyutu

HTTP istek parçalanmasının boyutunu ayarlar. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Geçerli değerler: 1–1500. Geçersiz boyut belirtilirse, sistem tarafından seçilen değer kullanılacaktır. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### QUIC'i göster

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### TCP keepalive'ı etkinleştir

Geçerli değerler: 1–1500. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use.

### TCP keepalive aralığı

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP keepalive zaman aşımı

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Java'yı engelle

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### DNS sunucusu zaman aşımı süresi

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### DNS-over-HTTPS için HTTP/3 kullan

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Yedek DNS üst kaynaklarını kullan

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### DNS üst kaynaklarını paralel olarak sorgulama

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Başarısız DNS sorgularına her zaman yanıt ver

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Güvenli DNS isteklerinin filtrelenmesini etkinleştir

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

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

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Özel IPv6 adresi

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Yedek sunucular

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Yedek sunucuları kullanmayın;
- Sistem varsayılan sunucularını kullanın;
- Özel sunucular kullan.

### ECH'yi engelle

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Özel yedek sunucuların listesi

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Özel önyükleme adresleri listesi

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS istisnaları

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Belirtilen Wi-Fi ağ adlarını (SSID'ler) DNS filtrelemesinden hariç tut

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
