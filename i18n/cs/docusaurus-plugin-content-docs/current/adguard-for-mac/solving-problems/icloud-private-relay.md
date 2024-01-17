---
title: iCloud Private Relay a AdGuard
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Stručný popis problému

Ve výchozím nastavení používá AdGuard "výchozí směrování", která vypíná iCloud Private Relay.

V současné době nemohou AdGuard a iCloud Private Relay fungovat současně. AdGuard nemá možnost blokovat reklamy, protože iCloud Private Relay šifruje provoz předtím, než AdGuard může filtrovat síťová připojení.  Když je iCloud Private Relay aktivní, není možné žádné filtrování (včetně lokálního). AdGuard tedy nemůže v Safari filtrovat přenosy ani provádět DNS filtrování. Přesto AdGuard stále filtruje provoz v jiných prohlížečích. Chcete-li nadále používat iCloud Private Relay, zvažte instalaci [AdGuardu pro Safari](https://adguard.com/adguard-safari/overview.html).

Totéž platí pro používání jakýchkoli aplikací VPN na Macu: musíte si vybrat, zda použijete iCloud Private Relay, nebo službu VPN.

## Podrobněji

AdGuard pro Mac nyní používá filtrování integrované v systému macOS na základě rozhraní API síťových rozšíření. Tento nový a poměrně chybový mechanismus nahradil staré dobré Rozšíření jádra. Za posledních 1,5 roku jsme společnosti Apple nahlásili více než 20(!) chyb týkajících se jejich nové metody filtrování.

Rozhraní API síťových rozšíření má konfiguraci podobnou VPN se seznamem položek směrování. V systému Big Sur vyvinula společnost AdGuard pravidla "dělený tunel", aby se vyhnula vytváření pravidla "výchozí směrování", protože v prvních verzích systému Big Sur způsobuje problémy.

V systému Monterey byl představen iCloud Private Relay. Funkce ochrany osobních údajů aplikace Mail také využívají servery iCloud Private Relay.

AdGuard proto nemůže spolupracovat s funkcemi soukromí aplikace iCloud Private Relay a aplikací Mail:

1. iCloud Private Relay se použije pro připojení na úrovni knihovny — předtím, než se dostanou na úroveň, kde funguje AdGuard.
2. iCloud Private Relay používá QUIC, který AdGuard nemůže ve filtrovaných aplikacích filtrovat, protože filtrování HTTP/3 ještě není k dispozici.
3. Protože AdGuard blokuje QUIC, včetně provozu iCloud Private Relay — jinak je blokování reklam nemožné.
4. Když používáte iCloud Private Relay a přepnete AdGuard do režimu "dělený tunel", nemůžete v Safari otevírat webové stránky.
5. Abychom tento problém pro Monterey obešli, použijeme pravidlo "výchozí směrování". Když iCloud Private Relay uvidí toto pravidlo, automaticky se deaktivuje. AdGuard tedy v Monterey funguje bez problémů, ale iCloud Private Relay je vypnuto.

`network.extension.monterey.force.split.tunnel` obnoví chování "Big Sur", ale tato možnost může přerušit přístup k webům kvůli (3) a (4). Stále hledáme řešení tohoto problému. Jednou z možností je implementace filtrování HTTP/3.

## Doporučené řešení

Doporučujeme používat AdGuard společně s tradičnější službou VPN, např. [AdGuard VPN](https://adguard-vpn.com/).

## Alternativní řešení

Můžete zabránit tomu, aby AdGuard používal "výchozí směrování" tím, že jej deaktivujete".  Lze to provést přes Pokročilá nastavení → `network.extension.monterey.force.split.tunnel`.

![Disable default route in advanced settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Mějte na paměti, že v tomto případě budete čelit výše popsaným problémům.
