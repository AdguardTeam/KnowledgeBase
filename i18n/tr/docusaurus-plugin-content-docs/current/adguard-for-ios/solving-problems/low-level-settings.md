---
title: Low-level Settings guide
sidebar_position: 5
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## How to reach the Low-level settings

:::caution

Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. This section should only be opened if you know what you are doing, or you were asked to do so by our support team.

:::

*Alt seviye ayarlar* öğesine gitmek için, ekranın sağ alt kısmındaki dişli çark simgesine dokunarak *Ayarlar* öğesini açın. Select the *General* section and then toggle on the *Advanced mode* switch, after that the *Advanced settings* section will appear below. Tap *Advanced settings* to reach the *Low-level settings* section.

## Low-level settings

### Tunnel mode

İki ana tünel modu vardır: *Bölünmüş* ve *Tam*. *Split-Tunnel* modu, AdGuard ve sözde "Kişisel VPN" uygulamalarının uyumluluğunu sağlar. *Tam Tünel* modunda başka hiçbir VPN AdGuard ile aynı anda çalışamaz.

There is a specific feature of the *Split-Tunnel* mode: In case of poor DNS proxy performance, for example, if the response from the AdGuard DNS server isn't returned in timely, iOS will instead reroute traffic through the DNS server specified in the iOS settings. Şu anda hiçbir reklam engellenmiyor ve DNS trafiği şifrelenmiyor.

*Tam Tünel* modunda yalnızca AdGuard ayarlarında belirtilen DNS sunucusu kullanılır. Yanıt vermezse, internet basitçe çalışmaz. Enabled *Full-Tunnel* mode may negatively impact the performance of some programs (e.g., FaceTime) and cause app update issues.

Varsayılan olarak, AdGuard en kararlı seçenek olarak *Bölünmüş Tünel* modunu kullanır.

There is also an additional mode called *Full-Tunnel (without VPN icon)*. This is exactly the same as *Full-Tunnel* mode, but it is set up so that the VPN icon is not displayed in the system line.

### Engelleme modu

Bu modülde AdGuard'ın engellenmesi gereken DNS sorgularına nasıl yanıt vereceğini seçebilirsiniz:

- Varsayılan — reklam engelleme tarzı kurallar tarafından engellendiğinde sıfır IP adresiyle yanıt verin; /etc/hosts tarzı kurallar tarafından engellendiğinde, kuralda belirtilen IP adresiyle yanıt verin
- REFUSED — REFUSED koduyla yanıt verin
- NXDOMAIN — NXDOMAIN koduyla yanıt verin
- Belirtilmemiş IP — sıfır IP adresiyle yanıt verin
- Özel IP — El ile ayarlanmış bir IP adresiyle yanıt verin

### Block IPv6

Düğmeyi sağa hareket ettirerek IPv6 sorgularının (AAAA istekleri) engellenmesini etkinleştirirsiniz. AAAA türü DNS istekleri çözümlenmeyecektir, bu nedenle yalnızca IPv4 sorguları işlenebilir.

### Blocked response TTL

Burada bir cihazın bir DNS isteğine verdiği yanıtı önbelleğe alma süresini ayarlayabilirsiniz. Belirtilen kullanım süresi boyunca (saniye cinsinden) istek, DNS sunucusuna yeniden istekte bulunmadan önbellekten okunabilir.

### Bootstrap servers

For DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC a bootstrap server is required for getting the IP address of the main DNS server. If not specified, the DNS server from iOS settings is used as the bootstrap server.

### Yedek sunucular

Here you can specify an alternate server to which a request will be rerouted if the main server fails to respond. If not specified, the system DNS server will be used as the fallback. It is also possible to specify `none`, in this case, there will be no fallback server set and only the main DNS server will be used.

### Arka planda uygulama yenileme süresi

Here you can select the frequency at which the application will check for filter updates while in the background. Note that update checks will not be performed more often than the specified period, but the exact intervals may not be respected.
