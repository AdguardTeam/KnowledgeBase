---
title: Protect Mail Activity and AdGuard
sidebar_position: 8
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## In a nutshell

Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails.

![Mail privacy protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically.

Apple explains this issue [here](https://support.apple.com/HT212797).

## I detaljer

AdGuard til Mac bruger nu macOS indbygget socket-filtrering baseret på netværksudvidelses-API'en. Denne nye og ret fejlbehæftede mekanisme har erstattet de gode gamle Kernel-udvidelser. I løbet af det seneste 1,5 år har vi anmeldt flere end 20(!) fejl til Apple vedr. deres nye filtreringsmetode.

Netværksudvidelses-API'en har en VPN-lignende opsætning med en liste over rute-lignende poster. On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.

I Monterey blev iCloud Private Relay introduceret. Privacy features of Mail.app also use Private Relay servers.

As a consequence, AdGuard can't work together with iCloud Private Relay and Mail app privacy features:

1. iCloud Private Relay anvendes på forbindelser på biblioteksniveauet — før de når socket-niveauet, hvor AdGuard opererer.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. Når Private Relay ser denne regel, deaktiverer den automatisk sig selv. Så AdGuard fungerer gnidningløst på Monterey, men iCloud Private Relay deaktiveres.

`network.extension.monterey.force.split.tunnel` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). Søgning efter en løsning på dette problem fortsættes. One of the options is implementing HTTP/3 filtering.

## Anbefalet løsning

At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the newer Apple privacy features.
