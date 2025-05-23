---
title: Protect Mail Activity and AdGuard
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Mac için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## In a nutshell

Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails.

![Mail privacy protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically.

Apple explains this issue [here](https://support.apple.com/HT212797).

## Ayrıntılı olarak

Mac için AdGuard artık ağ uzantıları API'sine dayalı macOS yerleşik soket filtrelemesini kullanıyor. Bu yeni ve oldukça hatalı mekanizma eski güzel Kernel uzantılarının yerini aldı. Over the last 1.5 years, we've reported more than 20(!) bugs to Apple regarding their new filtering method.

The network extensions API has a VPN-like configuration with a list of route-like entries. On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.

Monterey'de iCloud Özel Geçişi tanıtıldı. Privacy features of Mail.app also use Private Relay servers.

As a consequence, AdGuard can't work together with iCloud Private Relay and Mail app privacy features:

1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

`network.extension.monterey.force.split.tunnel` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). Bu soruna bir çözüm aramaya devam ediyoruz. One of the options is implementing HTTP/3 filtering.

## Önerilen çözüm

At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the newer Apple privacy features.
