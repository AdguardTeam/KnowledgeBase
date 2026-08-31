---
title: 'Installation'
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Systemkrav

**Operativsystemversion:** Minimum macOS 12

**RAM:** Minimum 2 GB

**Webbrowsere:** Safari, Chrome, Firefox, Opera, Yandex.Browser og øvrige macOS-kompatibele webbrowsere

**Ledig diskplads:** 120 MB

## Installation

For installation af AdGuard til Mac på computeren, start en webbrowser, gå til adressen *adguard.com* og tryk på **Download** [på den åbnede side](https://adguard.com/download.html?auto=1).

![Download appen *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Afvent download af *AdguardInstaller.dmg*. Dobbeltklik dernæst på dens ikon på listen over downloadede filer i Dock-panelet.

![Dobbeltklik for at åbne filen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

AdGuard-ikonet vil ses på etskrivebord. Klik på det for at åbne installations-appen, og dobbeltklik på AdGuard-ikonet i det åbnede vindue.

![Dobbeltklik på AdGuard-ikonet](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Ved første AdGuard-start advarer OS'et om, at appen er downloadet fra internet. Klik på **Åbn**.

![Klik på Åbn](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

I det næste trin, klik på **Installér**.

![Klik på Installér](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Afvent at installeren downloader de nødvendige filer.

![Afvent at de nødvendige filer er downloadet](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

For at bruge programmet kræves administratoradgangskoden til macOS-kontoen. Angiv adgangskoden, når den udbedes i dialogboksen, og tryk på **OK**.

![Angiv adgangskoden](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Nu vises en hurtig installationsguide, der tilbyder opsættelse af beskyttelse iht. aktuelle behov. Finjustering kan enten påbegyndes med det samme ("Lad os gøre det!") eller overspringes indtil videre ("Lad det være som det er").

![Opsæt beskyttelse](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Sådan, AdGuard er nu installeret på Mac'en!

### Installation i ældre macOS-versioner

Brugere med ældre macOS-versioner (Big Sur 11, Catalina 10.15 eller tidligere) vil ikke finde en kompatibel app-version på AdGuard Ad Blocker-webstedet — disse OS-versioner understøttes ikke længere i de seneste udgivelser.

Der kan dog stadig [downloades en ældre, kompatibel version](https://agrd.io/adguard_for_mac_v2-17)

## Afinstallation

### Almindelig

Åbn først Finder-appen ved at klikke på dens ikon:

![Åbn Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Gå til afsnittet Applikationer. Find dernæst AdGuard, højreklik på den og vælg **Flyt til Papirkurv**.

![Flyt AdGuard til Papirkurv *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Avanceret

**Denne vejledning bør kun bruges, såfremt man ved, hvad man foretager sig, eller supportteamet specifikt har anbefalet 'avanceret afinstallation'. Udfør samtlige trin fra den "almindelige afinstallation" først.**

1. Slet dernæst flg. AdGuard-filer:
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (mappe)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (fil)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (fil)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (fil)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (fil)

    For at gøre dette, åbn Terminal-appen, og indtast og eksekvér flg. kommandoer:

    ```bash
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Kør appen **Aktivitetsmonitor**.
1. Brug søgeværktøjet til at finde processen **cfprefsd**.

    ![Kør Aktivitetsmonitor](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Stop processen, der afvikles under brugeren (ikke dén, der afvikles under root). Gør dette ved at klikke på processen og dernæst klikke på X øverst til venstre. Bekræft handlingen i dialogvinduet.

    ![Bekræft](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard fjernes nu fra computeren.
