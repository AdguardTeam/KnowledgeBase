---
title: 'Instalare'
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cerințele Sistemului

**Versiunea sistemului de operare:** macOS 10.15 (64 biți) sau mai recent

**RAM:** cel puțin 2 GB

**Browsers:** Safari, Chrome, Firefox, Opera, Yandex.Browser, and any other macOS compatible browser

**Spațiu liber pe disc:** 120 MB

## Instalare

Pentru a instala AdGuard pentru Mac pe computerul dumneavoastră, lansați browserul, tastați *adguard.com* în bara de adrese și apăsați **Descărcați** [pe pagina care se deschide](https://adguard.com/download.html?auto=1).

![Descărcați aplicația *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Așteptați ca *AdguardInstaller.dmg* să se descarce și faceți dublu clic pe iconița sa din lista de fișiere descărcate pe panoul Dock.

![Faceți dublu clic pentru a deschide fișierul](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

Iconița AdGuard va apărea pe desktop-ul dumneavoastră. Faceți clic pe aceasta pentru a deschide aplicația de instalare și faceți dublu clic pe iconița AdGuard din fereastra deschisă.

![Faceți dublu clic pe iconița AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

La prima lansare a AdGuard, sistemul dumneavoastră de operare vă va avertiza că această aplicație a fost descărcată de pe Internet. Faceți clic **Deschide**.

![Faceți clic pe Deschidere](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

În pasul următor, va trebui să faceți clic pe **Instalare**.

![Faceți clic pe Instalare](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Așteptați ca programul de instalare să descarce fișierele necesare.

![Așteptați până când fișierele necesare sunt descărcate](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Pentru a utiliza aplicația, va trebui să introduci parola administratorului pentru contul tău de macOS. Introduceți parola când vi se cere în fereastra de dialog și apăsați **OK**.

![Introduceți parola](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Acum, veți vedea un asistent rapid de instalare în care veți fi oferit să configurați protecția conform nevoilor dumneavoastră. Puteți începe fie refinisarea imediat ("Hai să facem asta!") sau să omiteți acum ("Lăsați-l așa cum este").

![Configurați protecția](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Iată-ne, AdGuard este instalat pe Mac-ul dumneavoastră!

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

However, you still can [download an older, compatible version](https://agrd.io/adguard_for_mac_v2-17)

## Dezinstalare

### Regular

În primul rând, deschideți aplicația Finder făcând clic pe iconița respectivă:

![Deschideți Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Mergeți la secțiunea Aplicații. Găsiți AdGuard acolo, faceți clic dreapta pe el și alegeți **Mutați în Coșul de gunoi**.

![Mutați AdGuard în Coșul de gunoi *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Avansat

**Folosiți această instrucțiune doar dacă știți ce faceți sau dacă serviciul nostru de suport v-a recomandat în mod specific 'dezinstalarea avansată'. De asemenea, faceți toate etapele din "dezinstalarea regulată" întâi.**

1. După aceea, ștergeți următoarele fișiere AdGuard:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (folder)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (fișier)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (folder)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (fișier)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (fișier)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (fișier)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (fișier)

    Pentru a face acest lucru, deschideți aplicația Terminal, apoi introduceți și executați următoarele comenzi:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Rulați aplicația **Activity Monitor**.
1. Folosind instrumentul de căutare, găsiți procesul **cfprefsd**.

    ![Rulați aplicația Activity Monitor](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Opriți procesul care este rulat sub utilizator (nu cel care este rulat sub root). To do so, click the process and then click X on the upper left. Confirmați acțiunea în fereastra de dialog.

    ![Confirmați](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard a fost eliminat acum de pe computerul dumneavoastră.
