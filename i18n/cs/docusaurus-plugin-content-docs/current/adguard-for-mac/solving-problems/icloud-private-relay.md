---
title: iCloud Private Relay a AdGuard
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Stručný popis problému

Ve výchozím nastavení používá AdGuard "výchozí směrování", která vypíná iCloud Private Relay.

V současné době nemohou AdGuard a iCloud Private Relay fungovat současně. AdGuard nemá možnost blokovat reklamy, protože iCloud Private Relay šifruje provoz předtím, než AdGuard může filtrovat síťová připojení. Když je iCloud Private Relay aktivní, není možné žádné filtrování (včetně lokálního). AdGuard tedy nemůže v Safari filtrovat přenosy ani provádět DNS filtrování. Přesto AdGuard stále filtruje provoz v jiných prohlížečích. Chcete-li nadále používat iCloud Private Relay, zvažte instalaci [AdGuardu pro Safari](https://adguard.com/adguard-safari/overview.html).

Totéž platí pro používání jakýchkoli aplikací VPN na Macu: musíte si vybrat, zda použijete iCloud Private Relay, nebo službu VPN.

## Podrobněji

AdGuard pro Mac nyní používá filtrování integrované v systému macOS na základě rozhraní API síťových rozšíření. Tento nový a poměrně chybový mechanismus nahradil staré dobré Rozšíření jádra. Za posledních 1,5 roku jsme společnosti Apple nahlásili více než 20(!) chyb týkajících se jejich nové metody filtrování.

Rozhraní API síťových rozšíření má konfiguraci podobnou VPN se seznamem položek směrování. V systému Big Sur vyvinula společnost AdGuard pravidla "dělený tunel", aby se vyhnula vytváření pravidla "výchozí směrování", protože v prvních verzích systému Big Sur způsobuje problémy.

V systému Monterey byl představen iCloud Private Relay. Funkce ochrany osobních údajů aplikace Mail také využívají servery iCloud Private Relay.

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. iCloud Private Relay se použije pro připojení na úrovni knihovny — předtím, než se dostanou na úroveň, kde funguje AdGuard.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Když iCloud Private Relay uvidí toto pravidlo, automaticky se deaktivuje. AdGuard tedy v Monterey funguje bez problémů, ale iCloud Private Relay je vypnuto.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Stále hledáme řešení tohoto problému. One of the options is implementing HTTP/3 proxy filtering.

## Doporučené řešení

Doporučujeme používat AdGuard společně s tradičnější službou VPN, např. [AdGuard VPN](https://adguard-vpn.com/).

## Alternativní řešení

Můžete zabránit tomu, aby AdGuard používal "výchozí směrování" tím, že jej deaktivujete". Lze to provést přes Pokročilá nastavení → `network.extension.monterey.force.split.tunnel`.

![Disable default route in advanced settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Mějte na paměti, že v tomto případě budete čelit výše popsaným problémům.
