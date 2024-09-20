---
title: Alt seviye ayarlar rehberi
sidebar_position: 6
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Alt seviye ayarlara nasıl ulaşılır

:::caution

Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.

:::

*Alt seviye ayarlar* öğesine gitmek için AdGuard uygulamasını açın ve ekranın sağ alt köşesindeki dişli çark simgesine dokunun. Then choose *General → Advanced → Low-level settings*.

## Low-level settings

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### DNS koruması

#### Yedek üst kaynaklar

Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Yedek alan adları

Here you can list domains that will be forwarded directly to fallback upstreams if they exist.

#### Arama alan adlarını tespit et

Bu ayar etkinleştirilirse, AdGuard arama alan adlarını algılar ve bunları otomatik olarak yedek üst kaynaklara iletir.

#### Önyükleme üst kaynakları

Bootstrap DNS for DoH, DoT, and DoQ servers. The *Automatic DNS* — the system DNS or AdGuard DNS — is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

#### Reklam engelleme stili kuralları için engelleme modu

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, `||example.org^`).

- REFUSED ile yanıt verin
- Respond with NXDOMAIN
- Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### hosts kuralları için engelleme modu

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

- Respond with REFUSED
- Respond with NXDOMAIN
- Özel IP adresiyle yanıt verin (IPv4 ve IPv6 adresleri burada belirtilebilir)

#### DNS isteği zaman aşımı

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. Bu alanı doldurmazsanız veya geçersiz bir değer girerseniz, 5000 değeri kullanılacaktır.

#### Engellenen yanıt kullanım süresi

Burada, engellenen bir isteğe yanıt olarak döndürülecek TTL (kullanım süresi) değerini belirtebilirsiniz.

#### DNS önbellek boyutu

Here you can specify the maximum number of cached responses. Varsayılan değer 1000'dir.

#### ECH engelleme

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

Bu ayar etkinleştirilirse, AdGuard giden proxy kullanılamadığında doğrudan DNS isteklerini gönderir.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

Bu ayar etkinleştirilirse, AdGuard DoH üst kaynaklar için DNS sorgu çözümlemesini hızlandırmak amacıyla HTTP/3'ü kullanır. Aksi takdirde, AdGuard varsayılan davranışına geri döner ve DNS-over-HTTPS için tüm DNS isteklerini göndermek üzere HTTP/2'yi kullanır.

#### SERVFAIL hata yanıtı

Bu ayar etkinleştirilirse ve yedek olanlar da dahil olmak üzere tüm üst kaynaklar yanıt vermezse AdGuard, istemciye bir SERVFAIL yanıtı gönderir.

#### Use fallback for non-fallback domains

Bu ayar etkinleştirilirse, AdGuard tüm alan adları için yedek üst kaynaklarını kullanır. Aksi takdirde, yedek üst kaynaklar yalnızca yedek alan adları ve arama alan adlarıı için ilgili seçeneğin etkinleştirilmesi durumunda kullanılacaktır.

#### DNS üst kaynaklarını doğrula

Bu ayar etkinleştirilirse, AdGuard özel DNS sunucularını eklemeden veya güncellemeden önce DNS üst kaynakları test eder.

#### Güvenli DNS'i filtrele

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Anında filtrele**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filtreleme

#### HAR'ı yakala

Bu ayar etkinleştirilirse, AdGuard HAR dosyalarını yakalar. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Yalnızca hata ayıklama amacıyla kullanın!

### HTTPS filtreleme

#### Encrypted Client Hello

Her şifrelenmiş internet bağlantısının bir de şifrelenmemiş kısmı vardır. Bu, bağlandığınız sunucunun adını içeren ilk pakettir. Encrypted Client Hello teknolojisinin bu sorunu çözmesi ve şifrelenmemiş bilgilerin son kısmını şifrelemesi gerekiyor. To benefit from it, enable the *Encrypted Client Hello* option. Alan adı için ECH yapılandırmasını aramak için yerel bir DNS proxy'si kullanır. If it is found, Client Hello packet will be encrypted.

#### OCSP denetimi

Bu ayar etkinleştirilirse, AdGuard bir sitenin SSL sertifikasının iptal durumunu almak için zaman uyumsuz OCSP denetimleri gerçekleştirir.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

Doğrulama çok uzun sürerse, AdGuard arka planda sertifika durumunu kontrol etmeye devam ederken bağlantıya izin verir. Sertifika iptal edilirse alan adına yapılan mevcut ve gelecekteki bağlantılar engellenecektir.

#### DNS-over-HTTPS isteklerini yönlendir

Bu ayar etkinleştirilirse, AdGuard düz DNS isteklerine ek olarak DNS-over-HTTPS isteklerini yerel DNS proxy'sine yönlendirir. Gizliliği korumak için yedek üst kaynakları devre dışı bırakmanızı ve yalnızca şifrelenmiş DNS sunucularını kullanmanızı tavsiye ederiz.

#### HTTP/3'ü filtrele

Bu ayar etkinleştirilirse, AdGuard diğer istek türlerine ek olarak HTTP/3 üzerinden gönderilen istekleri de filtreler.

### Giden proxy

#### DNS isteklerini filtreleme ayarını göster

Bu etkinleştirilirse, *Proxy sunucusu ekle* uyarısında *DNS isteklerini filtrele* düğmesi görüntülenecektir. Belirtilen proxy üzerinden geçen DNS isteklerinin filtrelenmesini etkinleştirmek için bunu kullanın.

### Koruma

#### Bağlantı noktası aralıkları

Burada filtrelenmesi gereken bağlantı noktası aralıklarını belirtebilirsiniz.

#### Kaldırılan HTML olaylarını günlüğe kaydet

Bu ayar etkinleştirilirse, AdGuard engellenen HTML öğelerini *Son etkinlik* öğesinde kaydeder.

#### Scriptlet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Hariç tutulan uygulamalar

Burada AdGuard korumasından hariç tutmak istediğiniz paket adlarını ve UID'leri listeleyebilirsiniz.

#### QUIC atlama paketleri

Burada AdGuard'ın QUIC trafiğini atlaması gereken paket adlarını belirtebilirsiniz.

#### Ağ değişikliklerinde proxy'yi otomatik yeniden yapılandır

Bu ayar etkinleştirilirse, cihazınız başka bir ağa bağlandığında otomatik proxy ayarlarını yeniden yapılandırmak için AdGuard koruması yeniden başlatılır. Bu ayar yalnızca *Yönlendirme modu* *Otomatik proxy* olarak ayarlanmışsa geçerlidir.

#### IPv6 filtreleme

Bu ayar etkinleştirilirse, AdGuard bir IPv6 ağ arayüzü varsa IPv6 ağlarını filtreler.

#### Filtrelemeden hariç tutulan IPv4 aralıkları

Bu bölümde listelenen IPv4 aralıkları için filtreleme devre dışıdır.

#### Filtrelemeden hariç tutulan IPv6 aralıkları

Bu bölümde listelenen IPv6 aralıkları için filtreleme devre dışıdır.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Varsayılan değer 5000 ms'dir.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Varsayılan değer 5000 ms'dir.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

Bu ayar etkinleştirilirse, AdGuard'ın yerel VPN'i ağ yokluğu, tethering veya düşük güç modu nedeniyle kapatıldıktan sonra otomatik olarak yeniden etkinleştirilir.

#### Paket yakalama (PCAP)

Bu ayar etkinleştirilirse, AdGuard uygulama önbellek dizininde bir `timestamp.pcap` dosyası (örneğin, 1682599851461.pcap) oluşturur. Bu dosya VPN üzerinden aktarılan tüm ağ paketlerini listeler ve Wireshark programıyla analiz edilebilir.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

#### IPv4 adresi

Burada TUN arayüzü oluşturmak için kullanılacak IP adresini girebilirsiniz. Varsayılan olarak `172.18.11.218` şeklindedir.

#### LAN IPv4'ü zorla yönlendir

Bu ayar etkinleştirilirse, *Tüm LAN IPv4 bağlantılarını yönlendir* seçeneği etkinleştirilmiş olsa bile, AdGuard yerel IPv4 ağ trafiği de dahil olmak üzere tüm LAN bağlantılarını filtreler.

#### Tüm LAN IPv4 bağlantılarını yönlendir

Bu ayar etkinleştirilirse, AdGuard LAN bağlantılarını basit ağlar için filtrelemeden hariç tutacaktır. Bu, karmaşık ağlar için işe yaramayabilir. Bu ayar yalnızca *LAN IPv4'ü zorla yönlendir* devre dışı bırakıldığında geçerlidir.

#### IPv6 adresi

Burada TUN arayüzü oluşturmak için kullanılacak IP adresini girebilirsiniz. Varsayılan olarak `2001:db8:ad:0:ff::` şeklindedir.

### Diğer

#### Samsung Pay'i tespit et

Bu ayar etkinleştirilirse, Samsung Pay kullanımdayken AdGuard koruması duraklatılacaktır. Koreli kullanıcılar, AdGuard etkinleştirildiğinde [Samsung Pay ile ilgili sorunlar](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) yaşadıkları için bu özelliğe ihtiyaç duymaktadır.
