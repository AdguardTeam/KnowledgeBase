---
title: Instalare
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cerințele Sistemului

**Operating system:** Microsoft Windows 11, 10, 8.1, 8.

**RAM:** at least 1 GB.

**Spațiu liber pe disc:** 150 Mbytes.

**Browsere:** Microsoft Edge, Microsoft Internet Explorer (toate versiunile), Opera, Google Chrome, Yandex.Browser, Mozilla Firefox și multe alte browsere.

## Instalarea AdGuard

To install AdGuard on a Windows PC or tablet, follow these steps:

1. Go to the [AdGuard website](http://adguard.com) and click *Download*. You can also get the installation program from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

   ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

2. Once the download is complete, open the file *adguardInstaller.exe*.

   ![Downloaded file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

3. You’ll see a User Account Control prompt asking if you want to allow the app to make changes to your PC. Faceți clic pe *Da*.

   ![Permiteți modificări *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

4. Choose the folder where you want AdGuard to be installed.

   ![Alegeți folder *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

   If you want to select a different location, click *Browse*, choose the folder, and click *OK*. You can also create a new folder by clicking *Make New Folder* and naming it. If you’d like a desktop shortcut, check the box *Create a desktop shortcut*. Then click *Install* to start the installation.

   ![Începeți instalarea *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

5. Așteptați finalizarea instalării și faceți clic pe *Finalizare*.

   ![Finalizarea instalării *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer3_en.png)

   Felicitări! AdGuard has been successfully installed. You’ll be prompted to set up protection according to your preferences.

   ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setting_up_protection_en.png)

   After that, the main window will open, where you can adjust the app’s settings.

## Cum se dezinstalează AdGuard pentru Windows {#uninstall}

### Metoda obișnuită

Dacă trebuie să dezinstalați sau să reinstalați AdGuard, faceți următoarele:

- For Microsoft Windows 10 & 11: Open the *Start Menu* by clicking *Start*, then select *Settings*. In the window that opens, click  *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*.

   ![Windows 10 & 11 uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

- For Microsoft Windows 8: Right-click the *empty space* in the lower left corner of the task bar and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 8.1: Right-click the *Start button* and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 7: Open *Start Menu*. In the search box, type *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

### Metoda avansată {#advanced}

In case regular uninstall doesn't work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstal_utility.zip) created by our developers. Extract the archive to any folder on your PC and run the **Adguard.UninstallUtility.exe** file, and allow the app to make changes to your device. Then follow the instruction below:

- Select *AdGuard Ad Blocker* and *Standard* uninstall type, then click *Uninstall*.

   ![Standard uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard.jpg)

- Click *OK* once the warning window pops up:

   ![Standard uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

   ![Uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard_complete.jpg)

:::atenție

Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly suggest contacting our support before using steps 3-4 of advanced uninstall instruction.

:::

- Select *AdGuard Ad Blocker* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt.

   ![Extended uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended.jpg)

- Click *OK* once the warning window pops up:

   ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

   ![Extended uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_complete.jpg)

AdGuard is successfully uninstalled!

#### Rularea dezinstalatorului în modul consolei

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard for Windows. To do this, follow the instructions below:

1. Deschideți Promptul de comandă tastând *cmd* din meniul Start.
2. Utilizați `/console` pentru a rula dezinstalatorul în modul consolei, fără interfața interactivă. Toate parametrii din linia de comandă de mai jos vor fi ignorați dacă modul `/console` nu este activat.
3. Utilizați `/adblocker` pentru a dezinstala AdGuard pentru Windows. Ar trebui să arate astfel:

   `Adguard.UninstallUtility.exe /console /adblocker`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/adblocker` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
