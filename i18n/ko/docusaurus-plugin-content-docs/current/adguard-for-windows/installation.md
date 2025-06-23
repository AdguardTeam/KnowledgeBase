---
title: 설치 방법
sidebar_position: 2
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 시스템 요구 사항

**운영 체제**: Microsoft Windows 11, 10, 8.1, 8, 7, Vista.

**RAM**: 1GB 이상.

**디스크 여유 공간**: 150 Mbytes.

**브라우저**: Microsoft Edge, Microsoft Internet Explorer(모든 버전), Opera, Google Chrome, Yandex.Browser, Mozilla Firefox, 등등.

## AdGuard 설치 방법

To install AdGuard on a Windows PC or tablet, follow these steps:

1. Go to the [AdGuard website](http://adguard.com) and click *Download*. You can also get the installation program from the [download page](https://adguard.com/download.html?auto=1) — the download will start automatically.

   ![Download AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/website_en.png)

2. Once the download is complete, open the file *adguardInstaller.exe*.

   ![Downloaded file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/download_en.png)

3. You’ll see a User Account Control prompt asking if you want to allow the app to make changes to your PC. *네* 버튼을 클릭합니다.

   ![변경 허용 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/allow-changes.png)

4. Choose the folder where you want AdGuard to be installed.

   ![폴더 선택 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer1_en.png)

   If you want to select a different location, click *Browse*, choose the folder, and click *OK*. You can also create a new folder by clicking *Make New Folder* and naming it. If you’d like a desktop shortcut, check the box *Create a desktop shortcut*. Then click *Install* to start the installation.

   ![설치 시작 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer2_en.png)

5. 설치가 완료된 후 *마침*을 클릭합니다.

   ![설치 완료 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/installer3_en.png)

   축하드립니다! AdGuard has been successfully installed. You’ll be prompted to set up protection according to your preferences.

   ![Setting up protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/setting_up_protection_en.png)

   After that, the main window will open, where you can adjust the app’s settings.

## Windows용 AdGuard를 제거하는 방법 {#uninstall}

### 일반 제거 방법

AdGuard 제거 및 재설치 방법은 다음과 같습니다.

- For Microsoft Windows 10 & 11: Open the *Start Menu* by clicking *Start*, then select *Settings*. In the window that opens, click  *Apps* → *Installed apps*. Select *AdGuard* from the list of your installed apps, click the three-dot menu, and select *Uninstall*.

   ![Windows 10 & 11 uninstallation *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/installation/installation_new/win11_uninstall_adguard.png)

- For Microsoft Windows 8: Right-click the *empty space* in the lower left corner of the task bar and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 8.1: Right-click the *Start button* and select *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

- For Microsoft Windows 7: Open *Start Menu*. In the search box, type *Control Panel*. Click *Uninstall a program* in the *Programs* section, then select *AdGuard* from the list of installed apps and press the *Uninstall* button located right above the list. Confirm the action by clicking *Uninstall AdGuard* in the window that opens.

### 고급 방법 {#advanced}

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

#### 콘솔 모드에서 제거 프로그램 실행

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard for Windows. To do this, follow the instructions below:

1. 시작 메뉴에서 *cmd를* 입력하여 명령 프롬프트를 엽니다.
2. 대화형 UI 없이 콘솔 모드에서 제거 프로그램을 실행하려면 `/console`을 사용합니다. `콘솔` 모드가 활성화되지 않은 경우, 아래의 모든 명령줄 매개변수는 무시됩니다.
3. Windows용 AdGuard를 제거하려면 `/adblocker`를 사용합니다. 다음과 같이 표시되어야 합니다.

   `Adguard.UninstallUtility.exe /console /adblocker`

4. 또한 `/advanced`를 사용하여 제거 프로그램이 *고급 모드*에서 강제로 실행되도록 하고 `/settings`를 사용하여 제거 프로그램이 애플리케이션과 함께 사용자 설정을 제거하도록 할 수도 있습니다.

:::note

The use of the parameters `/console` and `/adblocker` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
