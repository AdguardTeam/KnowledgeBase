---
title: Protect Mail Activity a AdGuard
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Ve stručnosti

Aplikace Apple Mail nyní používá proxy ke skrytí IP adresy uživatele při stahování obrázků z e-mailů.

![Mail privacy protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

To však nebude fungovat, pokud je aktivní připojení VPN. Vzhledem k tomu, že AdGuard chová jako VPN, nebude automaticky přednačítat obrázky.

Apple tento problém vysvětluje [zde](https://support.apple.com/HT212797).

## Podrobněji

AdGuard pro Mac nyní používá filtrování integrované v systému macOS na základě rozhraní API síťových rozšíření. Tento nový a poměrně chybový mechanismus nahradil staré dobré Rozšíření jádra. Za posledních 1,5 roku jsme společnosti Apple nahlásili více než 20(!) chyb týkajících se jejich nové metody filtrování.

Rozhraní API síťových rozšíření má konfiguraci podobnou VPN se seznamem položek směrování. V systému Big Sur použila společnost AdGuard pravidla "dělený tunel", aby se vyhnula vytváření pravidla "výchozí směrování", protože v prvních verzích systému Big Sur způsobuje problémy. Tyto problémy byly vyřešeny v Monterey, takže nám nic nebrání používat pravidlo "výchozí směrování".

V systému Monterey byl představen iCloud Private Relay. Funkce ochrany osobních údajů aplikace Mail také využívají servery iCloud Private Relay.

V důsledku toho, nemůže AdGuard spolupracovat s funkcemi soukromí iCloud Private Relay a aplikací Mail:

1. iCloud Private Relay se použije pro připojení na úrovni knihovny — předtím, než se dostanou na úroveň, kde funguje AdGuard.
2. iCloud Private Relay používá QUIC, který AdGuard nemůže filtrovat, protože filtrování HTTP/3 ještě není k dispozici.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. Když používáte iCloud Private Relay a přepnete AdGuard do režimu "dělený tunel", nemůžete v Safari otevírat webové stránky.
5. Abychom tento problém pro Monterey obešli, použijeme pravidlo "výchozí směrování". Když iCloud Private Relay uvidí toto pravidlo, automaticky se deaktivuje. AdGuard tedy v Monterey funguje bez problémů, ale iCloud Private Relay je vypnuto.

`network.extension.monterey.force.split.tunnel` obnoví chování "Big Sur", ale tato možnost může přerušit přístup k webům kvůli (3) a (4). Stále hledáme řešení tohoto problému. Jednou z možností je implementace filtrování HTTP/3.

## Doporučené řešení

V tuto chvíli doporučujeme místo novějších funkcí ochrany osobních údajů Apple používat tradičnější službu VPN, například [AdGuard VPN](https://adguard-vpn.com/).
