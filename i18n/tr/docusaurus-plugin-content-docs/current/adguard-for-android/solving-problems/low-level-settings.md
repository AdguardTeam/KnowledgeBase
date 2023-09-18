---
title: Alt seviye ayarlar rehberi
sidebar_position: 6
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Alt seviye ayarlara nasıl ulaşılır

:::caution

Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.

:::

To go to *Low-level settings*, open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose *General → Advanced → Low-level settings*.

## Low-level settings

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### DNS protection

#### Yedek üst kaynaklar

Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Yedek alan adları

Here you can list domains that will be forwarded directly to fallback upstreams if they exist.

#### Arama alan adlarını tespit et

Bu ayar etkinleştirilirse, AdGuard arama alan adlarını algılar ve bunları otomatik olarak yedek üst kaynaklara iletir.

#### Önyükleme üst kaynakları

Bootstrap DNS for DoH, DoT, and DoQ servers. The *Automatic DNS* - the system DNS or AdGuard DNS - is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

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

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

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

### Filtreleme

#### HAR'ı yakala

Bu ayar etkinleştirilirse, AdGuard HAR dosyalarını yakalar. Uygulama önbellek dizini içinde "har" adında bir dizin oluşturur ve buraya, Fiddler programıyla analiz edilebilecek HAR 1.2 formatındaki tüm filtrelenmiş HTTP istekleri hakkında bilgi ekleyecektir.

Yalnızca hata ayıklama amacıyla kullanın!

### HTTPS filtering

#### Encrypted Client Hello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello teknolojisinin bu sorunu çözmesi ve şifrelenmemiş bilgilerin son kısmını şifrelemesi gerekiyor. To benefit from it, enable the *Encrypted Client Hello* option. Alan adı için ECH yapılandırmasını aramak için yerel bir DNS proxy'si kullanır. If it is found, ClientHello packet will be encrypted.

#### OCSP checking

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Sertifika iptal edilirse alan adına yapılan mevcut ve gelecekteki bağlantılar engellenecektir.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### HTTP/3'ü filtrele

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Giden proxy

#### Show the Filter DNS requests setting

Bu etkinleştirilirse, *Proxy sunucusu ekle* uyarısında *DNS isteklerini filtrele* düğmesi görüntülenecektir. Belirtilen proxy üzerinden geçen DNS isteklerinin filtrelenmesini etkinleştirmek için bunu kullanın.

### Protection

#### Port ranges

Here you can specify port ranges that should be filtered.

#### Log removed HTML events

Bu ayar etkinleştirilirse, AdGuard engellenen HTML öğelerini *Son etkinlik* öğesinde kaydeder.

#### Scriplet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Excluded apps

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Filtering for the IPv4 ranges listed in this section is disabled.

#### IPv6 ranges excluded from filtering

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to to VPN routes when on Wi-Fi.

#### IPv4 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Miscellaneous

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
