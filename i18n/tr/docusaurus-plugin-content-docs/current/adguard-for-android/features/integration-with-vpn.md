---
title: AdGuard VPN ile entegrasyon
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Android için AdGuard, trafiği filtrelemek için yerel bir VPN oluşturur. Bu nedenle, Android için AdGuard çalışırken diğer VPN uygulamaları kullanılamaz. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. Bu, AdGuard'ın bir VPN arayüzü oluşturmasına, reklamları ve izleyicileri yerel olarak engellemesine olanak tanırken, AdGuard VPN tüm trafiği uzak bir sunucu üzerinden yönlendirir.

AdGuard VPN'i devre dışı bırakırsanız, AdGuard onu giden proxy olarak kullanmayı bırakır. AdGuard'ı devre dışı bırakırsanız, AdGuard VPN trafiği kendi VPN arayüzü üzerinden yönlendirir.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable _Integration with AdGuard VPN_ automatically. Aynı şey tam tersi için de geçerlidir. Entegrasyonu etkinleştirdiyseniz, uygulama istisnaları yönetemeyeceğinizi ve AdGuard VPN uygulamasından DNS sunucularına bağlanamayacağınızı unutmayın. You can specify apps to be routed through your VPN tunnel via _Settings_ → _Filtering_ → _Network_ → _Proxy_ → _Apps operating through proxy_. To select a DNS server, open AdGuard → _Protection_ → _DNS protection_ → _DNS server_.
