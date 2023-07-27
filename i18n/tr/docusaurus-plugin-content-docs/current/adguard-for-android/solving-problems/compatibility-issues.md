---
title: Known compatibility issues with Android apps
sidebar_position: 16
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

## VPN apps

Other VPN apps are incompatible with AdGuard running in the Local VPN filtering mode since you cannot have two active VPNs at the same time. To solve this problem we suggest you:

* [AdGuard VPN](https://adguard-vpn.com/welcome.html) kullanın — iki uygulamanın sorunsuz şekilde çalışmasına izin veren Entegre moda sahiptir
* AdGuard'ı Yerel HTTP Proxy modunda kullanın

:::caution

On Android 10 and later, the 'manual' HTTP proxy mode is no longer supported.

:::

* VPN uygulamanızı giden bir proxy olarak çalışacak şekilde yapılandırın ve üçüncü taraf uygulamasındaki parametreleri kullanarak yerel bir giden proxy ayarlayın. Bunu yapmak için üçüncü taraf bir VPN uygulamasının SOCKS4/SOCKS5 modunu desteklemesi gerekir. Örneğin, AdGuard otomatik olarak 'Orbot: Tor ile Proxy' ile yapılandırılabilir.

## Private DNS

The Private DNS feature was introduced in Android Pie. Before version Q, Private DNS didn't break AdGuard DNS filtering logic and the DNS forwarding through AdGuard worked normally. But starting from version Q, the presence of Private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) for more details.

* Özel DNS ile sorunu çözmek için `$network` kuralını kullanın

Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a `$network` rule. For instance, if the system uses Google DNS by default, we can add rules `|8.8.4.4^$network` and `|8.8.8.8^$network` to block Google DNS.

## Unsupported browsers

### UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD

To be able to filter HTTPS traffic, AdGuard requires the user to add a certificate to the device's trusted user certificates. Unfortunately, UC-family browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there.

* Bu sorunu çözmek için sertifikayı sistem sertifika deposuna taşıyın

:::caution

Requires root access.

:::

### Dolphin Browser: Dolphin Browser, Dolphin Browser Express

AdGuard cannot filter its traffic when operating in **Manual proxy mode** because this browser ignores system proxy settings.

* Bu sorunu çözmek için **Yerel VPN** filtreleme modunu kullanın

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

* Şu anda bir çözüm yok

### Puffin Browser: Puffin Browser, Puffin Browser Pro

Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

* Şu anda bir çözüm yok
