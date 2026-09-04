---
title: Installazione
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

## Requisiti di sistema

- **OS version:** Microsoft Windows 10 or higher
- **RAM:** at least 6 GB
- **Processor:** 2-core, 2.0 GHz (or faster)
- **Free disk space:** at least 4 GB

## Come installare AdGuard

1. Go to the [AdGuard website](https://adguard.com) and click *Download*. You can also get the installer from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

    ![Scarica AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

1. Al termine del download, premi il pulsante *Apri* visualizzato nella barra dei download o clicca sul nome del file *adguardInstaller.exe*.

    ![Downloaded file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. Vedrai la finestra di dialogo Controllo dell'account utente che richiede di consentire all'app di apportare modifiche al tuo PC. Clicca *Sì*.

    ![Consenti modifiche *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Choose the folder where you want AdGuard to be installed and click *Save*.

    ![Scegli cartella *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    Se non sei d'accordo con il percorso d'installazione predefinito, clicca su *Sfoglia*, seleziona la cartella e clicca su *OK*. Puoi anche installare AdGuard in una nuova cartella, cliccando su *Crea nuova cartella* e inserendone il nome. Per creare un collegamento sul fisso per AdGuard, spunta la casella *Crea un collegamento sul desktop*. Clicca *Installa* per procedere con l'installazione.

    ![Avvia installazione *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. Attendi il completamento dell'installazione e clicca su *Fine*.

    ![Installazione completa *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard has been successfully installed. When you launch the app, you’ll be prompted to accept our privacy documents and set up protection according to your preferences.

    ![Welcome on board *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## Come disinstallare AdGuard per Windows {#uninstall}

### Metodo regolare

If you need to uninstall or reinstall AdGuard, do the following:

Open the *Start Menu*, then select *Settings*. In the window that opens, click *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*. After the app is uninstalled, restart your computer.

![Uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

:::note

The uninstaller automatically creates a backup of your settings in `C:\ProgramData\Adguard\Backups`. If you plan to reinstall AdGuard later, you can use this backup to restore your settings. For more information, see [How to back up and restore AdGuard settings](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### Metodo avanzato {#advanced}

If the regular uninstall doesn’t work for any reason, you can use the advanced method. First, [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstall_utility.zip) created by our developers. Extract the archive to any folder on your PC and run **Adguard.UninstallUtility.exe**, then allow the app to make changes to your device.

1. Select *AdGuard Ad Blocker* and *Standard* uninstall type, then click *Uninstall*.

    ![Standard uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/advanced_uninstall_standard.png)

1. Wait until the uninstall is finished and restart your computer.

    ![Uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_complete.png)

:::attenzione

Follow the next steps only if the Standard uninstall didn’t fully remove AdGuard. We strongly suggest contacting our support before using the Extended uninstall.

:::

1. Select *AdGuard Ad Blocker* and *Extended*. Click *Yes, continue* in the prompt and then click *Uninstall*.

    ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/uninstall_extended.png)

1. Wait until the uninstall is finished and restart your computer.

    ![Restart prompt *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/restart_prompt.png)

AdGuard is successfully uninstalled!

### Running the uninstaller in console mode

You can also use command-line arguments to uninstall AdGuard for Windows.

1. Open Command Prompt by typing `cmd` in the Start menu.
1. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
1. Use `/adblocker` to uninstall AdGuard for Windows. Dovrebbe somigliare a quanto segue:

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. You can also use `/advanced` to force the uninstaller to run in *Extended* mode and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The parameters `/console` and `/adblocker` are necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
