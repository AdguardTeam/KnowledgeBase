---
title: Установка
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock).

:::

## Системные требования

- **OS version:** Microsoft Windows 10 or higher
- **RAM:** at least 6 GB
- **Processor:** 2-core, 2.0 GHz (or faster)
- **Free disk space:** at least 4 GB

## Как установить AdGuard

1. Go to the [AdGuard website](https://adguard.com) and click *Download*. You can also get the installer from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

    ![Скачайте AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_ru.png)

1. После завершения скачивания откройте файл *adguardInstaller.exe*.

    ![Downloaded file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. Вы увидите окно Контроля учётных записей, запрашивающее разрешение вносить изменения в ваш компьютер. Нажмите *Да*.

    ![Разрешите изменения *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Choose the folder where you want AdGuard to be installed and click *Save*.

    ![Выберите папку *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    Если вы хотите выбрать другое место, нажмите *Обзор*, выберите папку и нажмите *ОК*. Вы также можете установить AdGuard в новую папку, нажав *Создать папку* и введя её имя. Чтобы добавить ярлык AdGuard на рабочий стол Windows, установите флажок *Создать ярлык на рабочем столе*. Затем нажмите *Установить*, чтобы начать установку.

    ![Начните установку *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. Дождитесь завершения установки и нажмите *Готово*.

    ![Полная установка *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard has been successfully installed. When you launch the app, you’ll be prompted to accept our privacy documents and set up protection according to your preferences.

    ![Welcome on board *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## Как удалить AdGuard для Windows {#uninstall}

### Обычный способ

If you need to uninstall or reinstall AdGuard, do the following:

Open the *Start Menu*, then select *Settings*. In the window that opens, click *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*. After the app is uninstalled, restart your computer.

![Uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

:::note

The uninstaller automatically creates a backup of your settings in `C:\ProgramData\Adguard\Backups`. If you plan to reinstall AdGuard later, you can use this backup to restore your settings. For more information, see [How to back up and restore AdGuard settings](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### Продвинутый способ {#advanced}

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

AdGuard успешно удалён!

### Running the uninstaller in console mode

You can also use command-line arguments to uninstall AdGuard for Windows.

1. Open Command Prompt by typing `cmd` in the Start menu.
1. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
1. Use `/adblocker` to uninstall AdGuard for Windows. Это должно выглядеть так:

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. You can also use `/advanced` to force the uninstaller to run in *Extended* mode and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The parameters `/console` and `/adblocker` are necessary for a successful uninstall. Параметры `/advanced` и `/settings` являются необязательными.

:::
