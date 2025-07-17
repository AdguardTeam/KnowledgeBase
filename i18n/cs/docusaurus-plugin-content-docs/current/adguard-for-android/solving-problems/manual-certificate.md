---
title: Instalace certifikátu na zařízeních se systémem Android 11+
sidebar_position: 11
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Aby bylo možné [filtrovat provoz HTTPS](/general/https-filtering/what-is-https-filtering.md) (což je velmi důležité, protože většina reklam používá HTTPS), musí AdGuard nainstalovat certifikát do uživatelského úložiště vašeho zařízení. Ve starších verzích operačního systému Android se to provádělo automaticky, ale v Androidu 11 a novějších verzích jej uživatelé musí nainstalovat ručně.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Certifikát AdGuardu nainstalujete podle následujících kroků:

1. Otevřete aplikaci. Na obrazovce *Domů* klepněte na *HTTPS filtrování je vypnuto*.

1. Poté se zobrazí tři obrazovky:
    - HTTPS filtrování je klíčové pro blokování reklam
    - Filtrování HTTPS AdGuardu je bezpečné
    - AdGuard certificate

1. Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, copy the text from the *CA Certificate* field and tap *Open Settings*.

1. Open *Settings* and either paste or type *CA Certificate* in the search bar. Tap the respective option.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

Vše je nastaveno! Jakmile je certifikát úspěšně nainstalován, zapnuli jste HTTPS filtrování.

Pokud se během ruční instalace certifikátu vyskytnou problémy (například jste certifikát nainstalovali, ale aplikace jej stále ignoruje), můžete použít jedno z níže uvedených řešení.

1. Restartujte AdGuard.
1. Zkuste nainstalovat správný certifikát (AdGuard Personal CA) ještě jednou.

## Bezpečnostní varování

V dřívějších verzích systému Android se na panelu rychlého nastavení zobrazovala zpráva "Síť může být monitorována". Klepnutím na ni se otevře okno s podrobnými informacemi.

Počínaje systémem Android 15 se uživatelům po instalaci certifikátu a po restartování zařízení zobrazí kromě nápisu "Síť může být monitorována" také varovné oznámení: "Certifikační autority nainstalované neznámou třetí stranou". To znamená, že systém zjistil v úložišti certifikátů uživatele certifikáty třetích stran. Klepnutím na oznámení otevřete seznam certifikátů v úložišti certifikátů uživatele.

Navzdory těmto varováním zůstává váš provoz bezpečný. Vaše připojení ke vzdáleným serverům zůstává šifrované. AdGuard jednoduše ověří certifikát serveru a teprve poté rozhodne, zda má připojení filtrovat — podobně jako to dělá prohlížeč.

[Další informace o filtrování HTTPS a fungování certifikátu](/general/https-filtering/what-is-https-filtering.md).

Pokud přesto narazíte na problém a certifikát se vám nepodaří nainstalovat, kontaktujte náš tým podpory na adrese <support@adguard.com>.
