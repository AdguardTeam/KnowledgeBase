---
title: Integrace s AdGuard VPN
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

AdGuard pro Android vytváří lokální VPN pro filtrování provozu. Při spuštěné aplikaci AdGuard pro Android tedy nelze používat jiné aplikace VPN. Aplikace AdGuard i [AdGuard VPN](https://adguard-vpn.com/) však mají režimy integrace, které umožňují jejich společné používání.

V tomto režimu funguje AdGuard VPN jako odchozí proxy, přes který Blokátor reklam AdGuard směruje svůj provoz. To umožňuje AdGuardu vytvořit rozhraní VPN a blokovat reklamy a slídiče lokálně, zatímco AdGuard VPN směruje veškerý provoz přes vzdálený server.

Pokud AdGuard VPN ukončíte, přestane ji AdGuard používat jako odchozí proxy server. Pokud AdGuard zakážete, bude AdGuard VPN směrovat provoz přes vlastní rozhraní VPN.

Pokud máte Blokátor reklam AdGuard a nainstalujete AdGuard VPN, blokátor reklam to detekuje a automaticky povolí _Integraci s AdGuard VPN_. Totéž se děje i obráceně. Všimněte si, že pokud jste povolili integraci, nebudete moci spravovat výjimky aplikací a připojovat se k DNS serverům z aplikace AdGuard VPN. Aplikace, které mají být směrovány přes tunel VPN, můžete určit prostřednictvím _Nastavení_ → _Filtrování_ → _Síť_ → _Proxy_ → _Aplikace provozované skrze proxy_. Chcete-li vybrat DNS server, otevřete AdGuard → _Ochrana_ → _DNS ochrana_ → _DNS server_.
