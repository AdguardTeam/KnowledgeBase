---
title: Instalace certifikátu na zařízeních se systémem Android 11+
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device's user storage. Ve starších verzích operačního systému Android se to provádělo automaticky, ale v Androidu 11 a novějších verzích jej uživatelé musí nainstalovat ručně.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install the AdGuard certificate:

1. Když uvidíte oznámení *HTTPS filtrování je vypnuto*, klepněte na *Zapnout*.

1. Poté se zobrazí tři obrazovky s vysvětlením:
    - Proč filtrovat HTTPS provoz
    - Bezpečnost tohoto procesu filtrování
    - The necessity of the AdGuard certificate

    Postupně klepněte na *Další* → *Další* → *Uložit certifikát*.

1. Klepněte na *Uložit* v dolní části otevřené složky *Stáhnout*.

1. Po uložení klepněte na *Otevřít nastavení*.

1. Klepněte na *Další nastavení zabezpečení* → *Šifrování a pověření* → *Nainstalovat certifikát* → *Certifikát CA*.

1. Může se zobrazit varování. Pokud ano, klepněte na *Přesto nainstalovat* a v případě potřeby zadejte kód PIN.

1. Vyberte soubor AdGuard certifikátu. Jeho název by měl vypadat takto: *adguard_1342_020322.crt*.

Vše je nastaveno! Jakmile je certifikát úspěšně nainstalován, zapnuli jste HTTPS filtrování.

Upozorňujeme, že uvedené kroky jsou provedeny na smartphonu Google Pixel 7. Pokud používáte jiné zařízení se systémem Android, mohou se přesné názvy nabídek nebo možností lišit. Pro snadnější navigaci zvažte vyhledání certifikátu zadáním “certificate“ nebo “credentials“ do vyhledávacího řádku v nastavení.

Pokud se během ruční instalace certifikátu vyskytnou problémy (například jste certifikát nainstalovali, ale aplikace jej stále ignoruje), níže naleznete možná řešení.

1. Restartujte AdGuard.
2. Zkuste nainstalovat správný certifikát (AdGuard Personal CA) ještě jednou.

Pokud přesto narazíte na problém a certifikát se vám nepodaří nainstalovat, kontaktujte náš tým podpory na adrese support@adguard.com.
