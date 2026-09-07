---
title: Instalace
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock).

:::

## Požadavky na systém

- **OS version:** Microsoft Windows 10 or higher
- **RAM:** at least 6 GB
- **Processor:** 2-core, 2.0 GHz (or faster)
- **Free disk space:** at least 4 GB

## Jak nainstalovat AdGuard

1. Přejděte na webové stránky [AdGuardu](https://adguard.com) a klikněte na *Stáhnout*. You can also get the installer from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

    ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

1. Po dokončení stahování otevřete soubor *adguardInstaller.exe*.

    ![Downloaded file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. Zobrazí se výzva Řízení uživatelských účtů s dotazem, zda chcete aplikaci povolit provádět změny v počítači. Klikněte na *Ano*.

    ![Allow changes *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Choose the folder where you want AdGuard to be installed and click *Save*.

    ![Choose folder *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    Pokud chcete vybrat jiné umístění, klikněte na *Procházet*, vyberte složku a klikněte na *OK*. Novou složku můžete vytvořit také kliknutím na *Vytvořit novou složku* a pojmenovat ji. Chcete-li vytvořit pro AdGuard zástupce na ploše, zaškrtněte políčko *Vytvořit zástupce na ploše*. Stiskněte *Instalovat* a pokračujte v instalaci.

    ![Start installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. Počkejte na dokončení instalace a klikněte na *Dokončit*.

    ![Complete installation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard has been successfully installed. When you launch the app, you’ll be prompted to accept our privacy documents and set up protection according to your preferences.

    ![Welcome on board *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## Jak odnstalovat AdGuard pro Windows {#uninstall}

### Obvyklý způsob

If you need to uninstall or reinstall AdGuard, do the following:

Open the *Start Menu*, then select *Settings*. In the window that opens, click *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*. After the app is uninstalled, restart your computer.

![Uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

The uninstaller automatically creates a backup of your settings in `C:\ProgramData\Adguard\Backups`. If you plan to reinstall AdGuard later, you can use this backup to restore your settings. For more information, see [How to back up and restore AdGuard settings](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### Pokročilý způsob {#advanced}

If the regular uninstall doesn’t work for any reason, you can use the advanced method. First, [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstall_utility.zip) created by our developers. Extract the archive to any folder on your PC and run **Adguard.UninstallUtility.exe**, then allow the app to make changes to your device.

1. Select *AdGuard Ad Blocker* and *Standard* uninstall type, then click *Uninstall*.

    ![Standard uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/advanced_uninstall_standard.png)

1. Wait until the uninstall is finished and restart your computer.

    ![Uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_complete.png)

:::caution

Follow the next steps only if the Standard uninstall didn’t fully remove AdGuard. We strongly suggest contacting our support before using the Extended uninstall.

:::

1. Select *AdGuard Ad Blocker* and *Extended*. Click *Yes, continue* in the prompt and then click *Uninstall*.

    ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_extended.png)

1. Wait until the uninstall is finished and restart your computer.

    ![Restart prompt *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/restart_prompt.png)

AdGuard byl úspěšně odinstalován!

### Running the uninstaller in console mode

You can also use command-line arguments to uninstall AdGuard for Windows.

1. Open Command Prompt by typing `cmd` in the Start menu.
1. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
1. Use `/adblocker` to uninstall AdGuard for Windows. Mělo by to vypadat takto:

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. You can also use `/advanced` to force the uninstaller to run in *Extended* mode and `/settings` to force the uninstaller to remove user settings along with the application.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

The parameters `/console` and `/adblocker` are necessary for a successful uninstall. Parametry `/advanced` a `/settings` jsou volitelné.

:::
