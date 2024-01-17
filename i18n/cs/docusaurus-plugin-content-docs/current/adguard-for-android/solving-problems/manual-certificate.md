---
title: Instalace certifikátu na zařízeních se systémem Android 11+
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Aby bylo možné [filtrovat provoz HTTPS](/general/https-filtering/what-is-https-filtering.md) (což je velmi důležité, protože většina reklam používá HTTPS), musí AdGuard nainstalovat certifikát do uživatelského úložiště vašeho zařízení. Ve starších verzích operačního systému Android se to provádělo automaticky, ale v Androidu 11 a novějších verzích jej uživatelé musí nainstalovat ručně.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Certifikát AdGuardu nainstalujete podle následujících kroků:

1. Když uvidíte oznámení *HTTPS filtrování je vypnuto*, klepněte na *Zapnout*.

1. Poté se zobrazí tři obrazovky s vysvětlením:
    - Proč filtrovat HTTPS provoz
    - Bezpečnost tohoto procesu filtrování
    - Nezbytnost AdGuard certifikátu

    Postupně klepněte na těchto obrazovkách na *Další* → *Další* → *Uložit certifikát*.

1. Klepněte na *Uložit* v dolní části otevřené složky *Stáhnout*.

1. Po uložení klepněte na *Otevřít nastavení*, přejděte na *Šifrování a ověření* a poté vyberte *Nainstalovat certifikát*.

1. Může se zobrazit varování. Pokud ano, klepněte na *Přesto nainstalovat*. Ze seznamu vyberte soubor s AdGuard certifikátem.

Vše je nastaveno! Jakmile je certifikát úspěšně nainstalován, zapnuli jste HTTPS filtrování.

Upozorňujeme, že uvedené kroky jsou provedeny na smartphonu Google Pixel 4. Pokud používáte jiné zařízení se systémem Android, mohou se přesné názvy nabídek nebo možností lišit. Pro snadnější navigaci zvažte vyhledání certifikátu přístupem do nastavení zařízení a zadáním "certificate" nebo "credentials" do vyhledávacího řádku.

Pokud se během ruční instalace certifikátu vyskytnou problémy (například jste certifikát nainstalovali, ale aplikace jej stále ignoruje), níže naleznete možná řešení.

1. Restartujte AdGuard.
2. Zkuste nainstalovat správný certifikát (AdGuard Personal CA) ještě jednou.

Pokud přesto narazíte na problém a certifikát se vám nepodaří nainstalovat, kontaktujte náš tým podpory na adrese support@adguard.com.
