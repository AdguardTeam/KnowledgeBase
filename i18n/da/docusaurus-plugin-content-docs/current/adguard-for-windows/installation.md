---
title: Installation
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

## Systemkrav

- **OS version:** Microsoft Windows 10 eller højere
- **RAM:** minimum 6 GB
- **Processor:** 2-kernet, 2.0 GHz (eller højere)
- **Ledig diskplads:** minimum 4 GB

## How to install AdGuard

1. Gå til [AdGuard-webstedet](http://adguard.com) og klik på *Download*. You can also get the installer from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

    ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

1. Når download er færdig, åbn filen *adguardInstaller.exe*.

    ![Downloaded file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. Prompten Brugerkontokontrol spørger nu, om appen må foretage ændringer på PC'en. Klik på *Ja*.

    ![Tillad ændringer *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Choose the folder where you want AdGuard to be installed and click *Save*.

    ![Vælg mappe *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    Ønskes en anden placering valgt, klik på *Gennemse*, vælge mappen og klik på *OK*. AdGuard kan også installeres i en ny mappe ved at klikke på *Opret ny mappe* og angive dens navn. For at oprette en skrivebordsgenvej til AdGuard, afkryds feltet *Opret skrivebordsgenvej*. Tryk på *Installér* for at fortsætte med installationen.

    ![Start installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. Afvent at installationen færdiggøres og klik dernæst på *Færdig*.

    ![Færdiggør installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard has been successfully installed. Når appen startes, anmodes om accept af vores fortrolighedsdokumenter samt opsætning af beskyttelse jf. egne præferencer.

    ![Welcome on board *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Opsætning af beskyttelse *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## Sådan afinstalleres AdGuard til Windows {#uninstall}

### Almindelig metode

If you need to uninstall or reinstall AdGuard, do the following:

Åbn *Startmenuen*, vælg dernæst *Indstillinger*. I det åbnede vindue, klik på *Apps* → *Installerede apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*. Når appen er afinstalleret, genstart computeren.

![Afinstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

:::note

Afinstallationsprogrammet opretter automatisk en sikkerhedskopi af indstillingerne i `C:\ProgramData\Adguard\Backups`. Planlægges AdGuard geninstalleret senere, kan indstillingerne gendannes med denne sikkerhedskopi. For yderligere information, se [Sådan sikkerhedskopieres og gendannes AdGuard-indstillinger](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### Avanceret metode {#advanced}

If the regular uninstall doesn’t work for any reason, you can use the advanced method. First, [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstall_utility.zip) created by our developers. Extract the archive to any folder on your PC and run **Adguard.UninstallUtility.exe**, then allow the app to make changes to your device.

1. Select *AdGuard Ad Blocker* and *Standard* uninstall type, then click *Uninstall*.

    ![Standard uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/advanced_uninstall_standard.png)

1. Afvent afinstallationens færdiggørelse og genstart computeren.

    ![Uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_complete.png)

:::caution

Follow the next steps only if the Standard uninstall didn’t fully remove AdGuard. We strongly suggest contacting our support before using the Extended uninstall.

:::

1. Vælg *AdGuard Ad Blocker* og *Udvidet*. Klik i prompten på *Ja, fortsæt*, og klik derefter på *Afinstallér*.

    ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_extended.png)

1. Afvent afinstallationens færdiggørelse og genstart computeren.

    ![Genstartprompt *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/restart_prompt.png)

AdGuard er hermed afinstalleret!

### Running the uninstaller in console mode

Der kan også bruges kommandolinjeargumenter til at afinstallere AdGuard til Windows.

1. Åbn kommandoprompten ved at skrive `cmd` i menuen Start.
1. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
1. Use `/adblocker` to uninstall AdGuard for Windows. Det bør se således ud:

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. Der kan også bruges `/advanced` for at tvinge afinstallationsprogrammet til at køre i *Udvidet* tilstand og `/settings` for at tvinge det til at slette brugerindstillingerne sammen med applikationen.

:::note

The parameters `/console` and `/adblocker` are necessary for a successful uninstall. Parametrene `/advanced` og `/settings` er valgfrie.

:::
