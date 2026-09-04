---
title: 安装
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

## 系统要求

- **OS version:** Microsoft Windows 10 or higher
- **RAM:** at least 6 GB
- **Processor:** 2-core, 2.0 GHz (or faster)
- **Free disk space:** at least 4 GB

## 如何安装 AdGuard

1. Go to the [AdGuard website](https://adguard.com) and click *Download*. You can also get the installer from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

    ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

1. Once the download is complete, open the file *adguardInstaller.exe*.

    ![Downloaded file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

1. You’ll see a User Account Control prompt asking if you want to allow the app to make changes to your PC. 请点击「*是*」。

    ![允许更改 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

1. Choose the folder where you want AdGuard to be installed and click *Save*.

    ![选择文件夹 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

    If you want to select a different location, click *Browse*, choose the folder, and click *OK*. You can also create a new folder by clicking *Make New Folder* and naming it. If you’d like a desktop shortcut, check the box *Create a desktop shortcut*. Then click *Install* to start the installation.

    ![开始安装 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

1. 请稍等，安装完成后，点击「*完成*」。

    ![安装完成 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installation_completed.png)

    AdGuard has been successfully installed. When you launch the app, you’ll be prompted to accept our privacy documents and set up protection according to your preferences.

    ![Welcome on board *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/welcome.png)

    ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setup.png)

## 如何卸载 Windows 版 AdGuard  {#uninstall}

### 常规方式

If you need to uninstall or reinstall AdGuard, do the following:

Open the *Start Menu*, then select *Settings*. In the window that opens, click *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*. After the app is uninstalled, restart your computer.

![Uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

:::note

The uninstaller automatically creates a backup of your settings in `C:\ProgramData\Adguard\Backups`. If you plan to reinstall AdGuard later, you can use this backup to restore your settings. For more information, see [How to back up and restore AdGuard settings](/adguard-for-windows/solving-problems/backup-and-restore).

:::

### 卸载的进阶方法 {#advanced}

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

AdGuard is successfully uninstalled!

### Running the uninstaller in console mode

You can also use command-line arguments to uninstall AdGuard for Windows.

1. Open Command Prompt by typing `cmd` in the Start menu.
1. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
1. Use `/adblocker` to uninstall AdGuard for Windows. 如图所示：

    ```text
    Adguard.UninstallUtility.exe /console /adblocker
    ```

1. You can also use `/advanced` to force the uninstaller to run in *Extended* mode and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The parameters `/console` and `/adblocker` are necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
