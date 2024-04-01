---
title: Síť
sidebar_position: 9
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

## Obecné

![Network](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Automaticky filtrovat aplikace

Ve výchozím nastavení blokuje AdGuard reklamy a slídiče ve většině prohlížečů ([Tor Browser je výjimkou](/adguard-for-mac/solving-problems/tor-filtering)). Toto nastavení umožňuje AdGuardu blokovat také reklamy v aplikacích.

Chcete-li spravovat filtrované aplikace, klikněte na _Aplikace_.

### Filtrovat HTTPS protokol

Toto nastavení umožňuje AdGuardu filtrovat zabezpečený protokol HTTPS, který v současnosti používá většina webových stránek a aplikací. Ve výchozím nastavení nejsou filtrovány webové stránky s potenciálně citlivými informacemi, jako jsou bankovní služby. Chcete-li spravovat výjimky HTTPS, klikněte na _Výjimky_.

Ve výchozím nastavení nefiltruje AdGuard webové stránky s certifikáty EV (Extended Validation). Pokud potřebujete, můžete také povolit možnost _Filtrovat weby s certifikáty EV_.

## Odchozí proxy

AdGuard můžete nastavit tak, aby veškerý provoz vašeho zařízení směroval přes server proxy.

## HTTP proxy

AdGuard můžete použít jako HTTP proxy server. To vám umožní filtrovat provoz na jiných zařízeních připojených k proxy.

Ujistěte se, že jsou Mac a druhé zařízení připojeny ke stejné síti, a zadejte port proxy serveru na zařízení, které chcete přesměrovat skrze proxy server (obvykle v nastavení sítě). Chcete-li filtrovat i provoz HTTPS, [převeďte proxy certifikát AdGuardu] (http\://local.adguard.org/cert) do tohoto zařízení. [Další informace o instalaci proxy certifikátu](/guides/proxy-certificate)
