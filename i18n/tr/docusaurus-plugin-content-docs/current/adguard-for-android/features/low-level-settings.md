---
title: Alt seviye ayarlar rehberi
sidebar_position: 5
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Alt seviye ayarlara nasıl ulaşılır

:::caution

Changing the low-level settings can cause problems with AdGuard’s performance, interrupt your Internet connection, or compromise your security and privacy. Use the low-level features only if you are an experienced user and know what you are doing, or if our support team has asked you to do so.

:::

To access _Low-level settings_, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select _General → Advanced → Low-level settings_.

## Low-level settings

For AdGuard v4.x for Android we’ve completely redesigned the low-level settings. We have reworked the list of settings and organized them into thematic groups with improved descriptions. We also added input validation and other safety valves.

### DNS koruması

#### Yedek üst kaynaklar

Here you can specify the fallback DNS resolver(s) to use when the configured server is unavailable. Mevcut seçenekler:

- _Otomatik DNS_: Sistem DNS'ini veya AdGuard DNS'ini kullanmak istiyorsanız bu seçeneği seçin.
- _None_: Select this option if you do not want to have any fallback.
- _Özel DNS_: Bu seçeneği seçin ve satır başına bir tane olmak üzere düz DNS sunucusu IPv4 veya IPv6 adreslerini girin. These addresses will be used as upstreams.

#### Yedek alan adları

Here you can list domains that will be redirected to fallback upstreams, if available. Her satıra bir tane olmak üzere birden fazla alan adı girebilirsiniz. Sınırlı joker karakterler kullanabilirsiniz.

#### Arama alan adlarını tespit et

If this setting is enabled, AdGuard will detect DNS search domains and automatically redirect them to fallback upstreams, if available.

#### Önyükleme üst kaynakları

Bootstrap DNS for encrypted DNS upstreams, such as DoH, DoT, and DoQ servers. Mevcut seçenekler:

- _Otomatik DNS_: Sistem DNS'ini veya AdGuard DNS'ini kullanmak istiyorsanız bu seçeneği seçin. This option is selected by default.
- _Özel DNS_: Bu seçeneği seçin ve satır başına bir tane olmak üzere düz DNS sunucusu IPv4 veya IPv6 adreslerini girin. These addresses will be used as bootstrap upstreams.

#### Reklam engelleme stili kuralları için engelleme modu

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Available options:

- _REFUSED_: REFUSED ile yanıt verin
- _NXDOMAIN_: NXDOMAIN ile yanıt verin
- _Özel IP adresi_: Özel bir IP adresiyle yanıt vermek için bu seçeneği belirleyin. Engellenen A istekleri için bir IPv4 adresi, engellenen AAAA istekleri için bir IPv6 adresi girmeniz gerekir.

#### hosts kuralları için engelleme modu

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: REFUSED ile yanıt verin
- _NXDOMAIN_: NXDOMAIN ile yanıt verin
- _Özel IP adresi_: Özel bir IP adresiyle yanıt vermek için bu seçeneği belirleyin. Engellenen A istekleri için bir IPv4 adresi, engellenen AAAA istekleri için bir IPv6 adresi girmeniz gerekir.

#### DNS isteği zaman aşımı

Here you can specify the timeout, in milliseconds, that AdGuard will wait for each DNS request before redirecting it to a fallback DNS resolver. If you don’t fill in this field or enter an invalid value, the value of 5000 ms will be used.
If you have multiple upstreams, the fallback DNS will only be used after the timeouts of each upstream have expired.

#### Engellenen yanıt kullanım süresi

Burada engellenen alan adları için kaydın kullanım süresini (TTL) ayarlayabilirsiniz. Varsayılan değer 3600 saniyedir.

#### DNS önbellek boyutu

Burada önbelleğe alınan yanıtların maksimum sayısını belirtebilirsiniz. The default value is 1000.

#### ECH engelleme

Bu ayar etkinleştirilirse, AdGuard DNS yanıtlarında TLS Encrypted Hello'yu (ECH) engeller.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DNS-over-HTTPS upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled, AdGuard will send a SERVFAIL response to the client if all upstreams, including the fallback ones, fail to reply. Bu ayar devre dışı bırakılırsa, böyle bir durumda istemciye hiçbir yanıt gönderilmeyecektir.

#### Use fallback for all domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains, including non-fallback ones. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

Bu ayar etkinleştirilirse, AdGuard, düz DNS isteklerine ek olarak şifrelenmiş DNS isteklerini de filtreler. Encrypted DNS traffic mostly comes from Chrome and other browsers that have a secure DNS setting.

This setting has two modes:

- **Filter on the fly**. In this mode, AdGuard will filter DNS-over-HTTPS traffic without redirecting it to the local DNS proxy. It will use the DNS server specified in the browser settings.

- **Redirect to DNS proxy**. In this mode, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy for filtering. It will use the DNS server selected in the DNS settings of the AdGuard app.

### Filtreleme

#### Capture HAR

If this setting is enabled, AdGuard will log all filtered HTTP requests in HAR 1.2 format to the “har” subdirectory in the app cache directory. These files can be analyzed with the Fiddler tool.

This setting may slow down your device. Use it for debugging purposes only.

### HTTPS filtreleme

#### Encrypted Client Hello

If this setting is enabled, AdGuard will encrypt ClientHellos, if necessary. This feature requires HTTPS filtering to be enabled. This feature uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, the ClientHello packet will be encrypted. Make sure to use an encrypted DNS server with this feature.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. This is the very first packet that contains the name of the server you are connecting to. Encrypted Client Hello technology is designed to solve this problem by encrypting this packet.

#### OCSP checking

If this setting is enabled, AdGuard will automatically check the revocation status of SSL certificates before connecting to a website. This feature requires HTTPS filtering to be enabled.

If the check is completed within the required timeout, AdGuard will  allow the connection if the certificate is valid or immediately block the connection if the certificate is revoked.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Sertifika iptal edilirse alan adına yapılan mevcut ve gelecekteki bağlantılar engellenecektir.

#### HTTP/3'ü filtrele

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types. This feature requires HTTPS filtering to be enabled.

**HTTP/3 Hakkında**: Bu, QUIC tabanlı HTTP protokolünün en son sürümüdür.

### Giden proxy

#### Show the Filter DNS requests setting

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Bu düğmenin açılması, belirtilen giden proxy üzerinden geçen DNS isteklerinin filtrelenmesini sağlar.

### Koruma

#### Port ranges

Bu ayar, filtrelenmesi gereken bağlantı noktası aralıklarını belirlemenizi sağlar. Her satırda bir aralık olacak şekilde bağlantı noktası aralıklarını girin. Aralığı belirtmek için `..` kullanın. Örneğin, `80..5221`.

#### Log removed HTML events

Bu ayar etkinleştirilirse, AdGuard engellenen HTML öğeleri hakkındaki bilgileri _Son etkinlikler_ öğesine yazar. Günlüklere erişmek için **İstatistikler** → **Son etkinlikler** öğesine gidin.

#### Komut dosyası hata ayıklama

Bu ayar etkinleştirilirse, uygulama tarayıcı konsolunda hata ayıklama bilgilerini görüntüler. In this mode, debugging in scriptlets is activated, and the browser logs the events that occur when applying scriptlet rules are applied.

#### Excluded apps

Bu ayar, AdGuard korumasından hariç tutulacak paketleri ve UID'leri listelemenizi sağlar. Her satıra bir tane olmak üzere paket adlarını veya UID'leri girin. Yorumlar için `//` kullanabilirsiniz.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic. Enter package names, one per line. Yorumlar için `//` kullanabilirsiniz.

#### Reconfigure Automatic proxy when network changes

Bu ayar etkinleştirilirse, cihazınız başka bir ağa bağlandığında otomatik proxy parametrelerini yeniden yapılandırmak için AdGuard koruması yeniden başlatılır. Bu ayar yalnızca _Yönlendirme modu_ _Otomatik proxy_ olarak ayarlandığında geçerlidir.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Burada filtrelemeden hariç tutulacak IPv4 aralıklarını listeleyebilirsiniz. Her satıra bir IP aralığı girin. Yorumlar için `//` kullanabilirsiniz.

#### IPv6 ranges excluded from filtering

Burada filtrelemeden hariç tutulacak IPv6 aralıklarını listeleyebilirsiniz. Her satıra bir IP aralığı girin. Yorumlar için `//` kullanabilirsiniz.

#### Giden soketler için TCP keepalive

If this setting is enabled, AdGuard will send a keepalive probe after the specified time interval to ensure that the TCP connection is still alive. After a system-defined number of unsuccessful attempts to get a response from the server, the system will automatically close the TCP connection.

Bu ayar, şunları belirlemenizi sağlar:

- **Boşta kalma süresi**, giden soketlere TCP keepalive araştırmaları gönderilmeden önce saniye cinsinden. Varsayılan değer 0'dır. NAT ile sorun yaşıyorsanız, bunu 20 olarak ayarlayın.
- **Time between keepalive probes** for an unresponsive peer. Varsayılan değer 0 saniyedir.

### Yerel VPN ayarları

#### İptal edilen VPN için kurtarma gecikmesi

Here you can set the delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### İptal edilen VPN kurtarma için gecikmeyi yeniden zamanlama

Here you can set the delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Burada VPN arayüzünün maksimum iletim birimini (MTU) ayarlayabilirsiniz. Bu, yerel VPN'inizde kullanılan veri paketinin maksimum boyutudur. Önerilen aralık 1500-1900 bayttır.

#### Restore VPN automatically

Bu ayar etkinleştirilirse, AdGuard'ın yerel VPN'i ağ yokluğu, tethering veya düşük güç modu nedeniyle kapatıldıktan sonra otomatik olarak yeniden etkinleştirilir.

#### Paket yakalama (PCAP)

Bu ayar TUN arayüzlerinin günlüğe kaydedilmesini sağlar. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. This file lists all network packets transmitted through the VPN and can be analyzed using the Wireshark tool.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when the device is on Wi-Fi.

#### IPv4 adresi

Here you can specify the IP address that will be used to create a TUN interface. Varsayılan değer `172.18.11.218`'dir.

#### Forcibly route LAN IPv4

Bu ayar etkinleştirilirse, _Tüm LAN IPv4 bağlantılarını yönlendir_ seçeneği etkinleştirilmiş olsa bile, AdGuard yerel IPv4 ağ trafiği de dahil olmak üzere tüm LAN bağlantılarını filtreler.

#### Route all LAN IPv4 connections

Bu ayar etkinleştirilirse, AdGuard LAN bağlantılarını basit ağlar için filtrelemeden hariç tutar. Bu, karmaşık ağlar için işe yaramayabilir. Bu ayar yalnızca _LAN IPv4'ü zorla yönlendir_ devre dışı bırakıldığında geçerlidir.

#### IPv6 adresi

Burada TUN arayüzü oluşturmak için kullanılacak IP adresini girebilirsiniz. Varsayılan değer `2001:db8:ad:0:ff::`'dir.

### Diğer

#### Show Developer tools on the main screen

Bu ayar etkinleştirilirse, AdGuard uygulamanın ana ekranının sağ üst köşesinde **Geliştirici araçları** simgesini görüntüler.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. It allows you to quickly enable or disable custom filters, access logs, enable various logs, and more.

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused when you open the Samsung Pay app. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
