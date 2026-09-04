---
title: 설치 방법
sidebar_position: 2
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 시스템 요구 사항

**Operating system:** Microsoft Windows 11, 10, 8.1, 8.

**RAM:** at least 1 GB.

**Free disk space:** 150 Mbytes.

**Browsers:** Microsoft Edge, Microsoft Internet Explorer (all versions), Opera, Google Chrome, Yandex.Browser, Mozilla Firefox, and many other browsers.

## AdGuard 설치 방법

To install AdGuard on a Windows PC or tablet, follow these steps:

1. Go to the [AdGuard website](https://adguard.com) and click _Download_. You can also get the installation program from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

   ![Download AdGuard \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

2. Once the download is complete, open the file _adguardInstaller.exe_.

   ![Downloaded file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

3. You’ll see a User Account Control prompt asking if you want to allow the app to make changes to your PC. Click _Yes_.

   ![Allow changes \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

4. Choose the folder where you want AdGuard to be installed.

   ![Choose folder \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

   If you want to select a different location, click _Browse_, choose the folder, and click _OK_. You can also create a new folder by clicking _Make New Folder_ and naming it. If you’d like a desktop shortcut, check the box _Create a desktop shortcut_. Then click _Install_ to start the installation.

   ![Start installation \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

5. Wait for the installation to complete and click _Finish_.

   ![Complete installation \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer3_en.png)

   축하드립니다! AdGuard has been successfully installed. You’ll be prompted to set up protection according to your preferences.

   ![Setting up protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setting_up_protection_en.png)

   After that, the main window will open, where you can adjust the app’s settings.

## How to uninstall AdGuard for Windows {#uninstall}

### 일반 제거 방법

If you need to uninstall or reinstall AdGuard, do the following:

- For Microsoft Windows 10 & 11: Open the _Start Menu_ by clicking _Start_, then select _Settings_. In the window that opens, click  _Apps_ → _Installed apps_. Select _AdGuard_ from the list of your installed apps, click the three-dot menu, and select _Uninstall_.

  ![Windows 10 & 11 uninstallation \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

- For Microsoft Windows 8: Right-click the _empty space_ in the lower left corner of the task bar and select _Control Panel_. Click _Uninstall a program_ in the _Programs_ section, then select _AdGuard_ from the list of installed apps and press the _Uninstall_ button located right above the list. Confirm the action by clicking _Uninstall AdGuard_ in the window that opens.

- For Microsoft Windows 8.1: Right-click the _Start button_ and select _Control Panel_. Click _Uninstall a program_ in the _Programs_ section, then select _AdGuard_ from the list of installed apps and press the _Uninstall_ button located right above the list. Confirm the action by clicking _Uninstall AdGuard_ in the window that opens.

- For Microsoft Windows 7: Open _Start Menu_. In the search box, type _Control Panel_. Click _Uninstall a program_ in the _Programs_ section, then select _AdGuard_ from the list of installed apps and press the _Uninstall_ button located right above the list. Confirm the action by clicking _Uninstall AdGuard_ in the window that opens.

### Advanced method {#advanced}

In case regular uninstall doesn't work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstall_utility.zip) created by our developers. Extract the archive to any folder on your PC and run the **Adguard.UninstallUtility.exe** file, and allow the app to make changes to your device. Then follow the instruction below:

- Select _AdGuard Ad Blocker_ and _Standard_ uninstall type, then click _Uninstall_.

  ![Standard uninstall \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard.jpg)

- Click _OK_ once the warning window pops up:

  ![Standard uninstall warning \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

  ![Uninstall finished \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_standard_complete.jpg)

:::caution

Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly suggest contacting our support before using steps 3-4 of advanced uninstall instruction.

:::

- Select _AdGuard Ad Blocker_ and _Extended_ uninstall type, then click _Uninstall_. Click _Yes, continue_ in the window prompt.

  ![Extended uninstall \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended.jpg)

- Click _OK_ once the warning window pops up:

  ![Extended uninstall warning \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_warning.jpg)

- Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

  ![Extended uninstall finished \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/ab_extended_complete.jpg)

AdGuard is successfully uninstalled!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard for Windows. To do this, follow the instructions below:

1. Open Command Prompt by typing _cmd_ from the Start menu.

2. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.

3. Use `/adblocker` to uninstall AdGuard for Windows. 다음과 같이 표시되어야 합니다:

   `Adguard.UninstallUtility.exe /console /adblocker`

4. You can also use `/advanced` to force the uninstaller to run in _Advanced mode_ and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/adblocker` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
