---
title: Integrace s AdGuard VPN
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

AdGuard pro Android vytváří lokální VPN pro filtrování provozu. Při spuštěné aplikaci AdGuard pro Android tedy nelze používat jiné aplikace VPN. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. To umožňuje AdGuardu vytvořit rozhraní VPN a blokovat reklamy a slídiče lokálně, zatímco AdGuard VPN směruje veškerý provoz přes vzdálený server.

Pokud AdGuard VPN ukončíte, přestane ji AdGuard používat jako odchozí proxy server. Pokud AdGuard zakážete, bude AdGuard VPN směrovat provoz přes vlastní rozhraní VPN.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable _Integration with AdGuard VPN_ automatically. Totéž se děje i obráceně. Všimněte si, že pokud jste povolili integraci, nebudete moci spravovat výjimky aplikací a připojovat se k DNS serverům z aplikace AdGuard VPN. You can specify apps to be routed through your VPN tunnel via _Settings_ → _Filtering_ → _Network_ → _Proxy_ → _Apps operating through proxy_. To select a DNS server, open AdGuard → _Protection_ → _DNS protection_ → _DNS server_.
