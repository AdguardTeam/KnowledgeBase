---
title: Installation
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Systemkrav

- **OS version:** Microsoft Windows 10 eller højere
- **RAM:** minimum 6 GB
- **Processor:** 2-kernet, 2.0 GHz (eller højere)
- **Ledig diskplads:** minimum 4 GB

## Sådan installeres AdGuard

1. Gå til [AdGuard-webstedet](http://adguard.com) og klik på *Download*. Installeren kan også hentes fra [download-siden](https://adguard.com/download.html?auto=1) — download starter automatisk.

    ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

1. Når download er færdig, åbn filen *adguardInstaller.exe*.

    ![Downloadet fil *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. Prompten Brugerkontokontrol spørger nu, om appen må foretage ændringer på PC'en. Klik på *Ja*.

    ![Tillad ændringer *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Vælg dernæst mappen, i hvilken AdGuard skal installeres, og klik på *Gem*.

    ![Vælg mappe *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    Ønskes en anden placering valgt, klik på *Gennemse*, vælge mappen og klik på *OK*. AdGuard kan også installeres i en ny mappe ved at klikke på *Opret ny mappe* og angive dens navn. For at oprette en skrivebordsgenvej til AdGuard, afkryds feltet *Opret skrivebordsgenvej*. Tryk på *Installér* for at fortsætte med installationen.

    ![Start installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. Afvent at installationen færdiggøres og klik dernæst på *Færdig*.

    ![Færdiggør installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard er nu installeret. Når appen startes, anmodes om accept af vores fortrolighedsdokumenter samt opsætning af beskyttelse jf. egne præferencer.

    ![Velkommen ombord *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Opsætning af beskyttelse *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## Sådan afinstalleres AdGuard til Windows {#uninstall}

### Almindelig metode

Gør flg. for enten at afinstallere eller geninstallere AdGuard:

Åbn *Startmenuen*, vælg dernæst *Indstillinger*. I det åbnede vindue, klik på *Apps* → *Installerede apps*. Vælg *AdGuard* fra listen over installerede apps, klik på 3-priksmenuen og vælg *Afinstallér*. Når appen er afinstalleret, genstart computeren.

![Afinstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

:::note

Afinstallationsprogrammet opretter automatisk en sikkerhedskopi af indstillingerne i `C:\ProgramData\Adguard\Backups`. Planlægges AdGuard geninstalleret senere, kan indstillingerne gendannes med denne sikkerhedskopi. For yderligere information, se [Sådan sikkerhedskopieres og gendannes AdGuard-indstillinger](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### Avanceret metode {#advanced}

Fungerer alm. afinstallation af en eller anden grund ikke, kan den avancerede metode bruges. Første trin, [download uninstalleren tool](https://static.adtidy.org/windows/uninstaller/uninstall_utility.zip) fra vores udviklere. Udpak arkivet til en vilkårlig mappe på PC'en, og eksekvér filen **Adguard.UninstallUtility.exe**. Tillad appen at foretage ændringer på enheden.

1. Vælg *AdGuard Ad Blocker* og *Standard* afinstallationstype, og klik dernæst på *Afinstallér*.

    ![Standard afinstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/advanced_uninstall_standard.png)

1. Afvent afinstallationens færdiggørelse og genstart computeren.

    ![Afinstallation færdig *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_complete.png)

:::caution

Følg kun de næste trin, såfremt standardafinstallationen ikke fjernede AdGuard helt. Det anbefales kraftigt at kontakte vores support før brug af den udvidede afinstallation.

:::

1. Vælg *AdGuard Ad Blocker* og *Udvidet*. Klik i prompten på *Ja, fortsæt*, og klik derefter på *Afinstallér*.

    ![Udvidet afinstallationsadvarsel *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_extended.png)

1. Afvent afinstallationens færdiggørelse og genstart computeren.

    ![Genstartprompt *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/restart_prompt.png)

AdGuard er hermed afinstalleret!

### Kørsel af afinstalleren i konsoltilstand

Der kan også bruges kommandolinjeargumenter til at afinstallere AdGuard til Windows.

1. Åbn kommandoprompten ved at skrive `cmd` i menuen Start.
1. Brug `/console` for at eksekverre uninstalleren i konsoltilstand uden interaktiv UI. Alle nedenstående kommandolinjeparametre ignoreres, hvis tilstanden `/console` ikke er aktiveret.
1. Anvend `/adblocker` til at afinstallere AdGuard til Windows. Det bør se således ud:

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. Der kan også bruges `/advanced` for at tvinge afinstallationsprogrammet til at køre i *Udvidet* tilstand og `/settings` for at tvinge det til at slette brugerindstillingerne sammen med applikationen.

:::note

Brugen af parametrene `/console` og `/adblocker` er nødvendig for en vellykket afinstallation. Parametrene `/advanced` og `/settings` er valgfrie.

:::
