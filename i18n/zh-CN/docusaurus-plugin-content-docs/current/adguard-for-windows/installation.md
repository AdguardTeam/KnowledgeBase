---
title: 安装
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 系统要求

**操作系统**： Microsoft Windows 11、10、8.1、8。

**RAM**： 至少 1GB

**可用磁盘空间**： 150MB

**浏览器**： 百度、Microsoft Edge、Microsoft Internet Explorer（所有版本）、Opera、Google Chrome、Yandex.Browser、Mozilla Firefox 和其他浏览器。

## AdGuard 安装过程

To install AdGuard on a Windows PC or tablet, follow these steps:

1. Go to the [AdGuard website](http://adguard.com) and click *Download*. You can also get the installation program from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

   ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

2. Once the download is complete, open the file *adguardInstaller.exe*.

   ![Downloaded file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

3. You’ll see a User Account Control prompt asking if you want to allow the app to make changes to your PC. 请点击「*是*」。

   ![允许更改 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

4. Choose the folder where you want AdGuard to be installed.

   ![选择文件夹 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

   If you want to select a different location, click *Browse*, choose the folder, and click *OK*. You can also create a new folder by clicking *Make New Folder* and naming it. If you’d like a desktop shortcut, check the box *Create a desktop shortcut*. Then click *Install* to start the installation.

   ![开始安装 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

5. 请稍等，安装完成后，点击「*完成*」。

   ![安装完成 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer3_en.png)

   恭喜！ AdGuard has been successfully installed. You’ll be prompted to set up protection according to your preferences.

   ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setting_up_protection_en.png)

   After that, the main window will open, where you can adjust the app’s settings.

## 如何卸载 Windows 版 AdGuard  {#uninstall}

### 常规方式

要卸载或重新安装 AdGuard，请执行以下操作：

- For Microsoft Windows 10 & 11: Open the *Start Menu* by clicking *Start*, then select *Settings*. In the window that opens, click  *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*.

   ![Windows 10 & 11 uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

- For Microsoft Windows 8: Right-click the *empty space* in the lower left corner of the task bar and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 8.1: Right-click the *Start button* and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 7: Open *Start Menu*. In the search box, type *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

### 卸载的进阶方法 {#advanced}

In case regular uninstall doesn't work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstal_utility.zip) created by our developers. Extract the archive to any folder on your PC and run the **Adguard.UninstallUtility.exe** file, and allow the app to make changes to your device. Then follow the instruction below:

- Select *AdGuard Ad Blocker* and *Standard* uninstall type, then click *Uninstall*.

   ![Standard uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard.jpg)

- Click *OK* once the warning window pops up:

   ![Standard uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

   ![Uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard_complete.jpg)

:::caution

Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly suggest contacting our support before using steps 3-4 of advanced uninstall instruction.

:::

- Select *AdGuard Ad Blocker* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt.

   ![Extended uninstall *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended.jpg)

- Click *OK* once the warning window pops up:

   ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

   ![Extended uninstall finished *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_complete.jpg)

AdGuard is successfully uninstalled!

#### 在控制台模式下运行卸载程序

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard for Windows. To do this, follow the instructions below:

1. 从开始菜单中输入 *cmd* 打开命令提示符。
2. 使用 `/console` 在控制台模式下运行卸载程序，无需交互式 UI。 如果未激活 `/console` 模式，则以下所有命令行参数将被忽略。
3. 使用 `/adblocker` 卸载 Windows 版 AdGuard。 如图所示：

   `Adguard.UninstallUtility.exe /console /adblocker`

4. 用户还可以使用 `/advanced` 强制卸载程序在「*高级模式*」下运行，以及使用 `/settings` 强制卸载程序与应用程序一起删除用户设置。

:::note

The use of the parameters `/console` and `/adblocker` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
