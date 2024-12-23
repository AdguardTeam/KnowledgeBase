---
title: Known compatibility issues with Android apps
sidebar_position: 16
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## VPN uygulamaları

AdGuard'ı *Yerel VPN* filtreleme modunda kullanıyorsanız, diğer VPN uygulamalarını aynı anda çalıştıramazsınız. Bu sorunu çözmek için şunları yapmanızı tavsiye ederiz:

- [AdGuard VPN](https://adguard-vpn.com/welcome.html) kullanın — iki uygulamanın sorunsuz şekilde çalışmasına izin veren *Entegre moda* sahiptir
- Configure your VPN app to act as an [outbound proxy](../solving-problems/outbound-proxy.md) and set up a local outbound proxy using the parameters from the third-party app
- Switch to the *Automatic proxy* mode. When you do that, AdGuard will no longer use local VPN and will reconfigure iptables instead
- Switch to the *Manual proxy* mode. To do this, go to *Settings* → *Filtering* → *Network* → *Routing mode*

:::note Uyumluluk

The *Automatic proxy* mode is only accessible on rooted devices. For *Manual proxy*, rooting is required on devices running on Android 10 or later.

:::

## Özel DNS

The Private DNS feature was introduced in Android Pie. Before version Q, Private DNS didn't break AdGuard DNS filtering logic and the DNS forwarding through AdGuard worked normally. But starting from version Q, the presence of Private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) for more details.

- Özel DNS ile sorunu çözmek için `$network` kuralını kullanın

Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a `$network` rule. For instance, if the system uses Google DNS by default, we can add rules `|8.8.4.4^$network` and `|8.8.8.8^$network` to block Google DNS.

## Desteklenmeyen tarayıcılar

### UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD

To be able to filter HTTPS traffic, AdGuard requires the user to add a certificate to the device's trusted user certificates. Unfortunately, UC browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there.

- To solve this problem, move the [certificate to the system certificate store](../solving-problems/https-certificate-for-rooted.md/)

:::note Uyumluluk

Requires root access.

:::

### Dolphin Browser: Dolphin Browser, Dolphin Browser Express

AdGuard cannot filter its traffic when operating in the *Manual proxy* mode because this browser ignores system proxy settings.

- Bu sorunu çözmek için *Yerel VPN* filtreleme modunu kullanın

### Opera mini: Opera mini, Yandex ile Opera mini

Opera mini drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

- Şu anda bir çözüm yok

### Puffin Browser: Puffin Browser, Puffin Browser Pro

Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

- Şu anda bir çözüm yok
