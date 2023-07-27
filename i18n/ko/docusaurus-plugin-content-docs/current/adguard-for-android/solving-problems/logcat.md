---
title: How to get system logs
sidebar_position: 4
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, firsthand [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

Sometimes a regular log may not be sufficient to identify the origin of the problem. In such cases a system log is needed. Below are instructions on how to collect and get it: via Developer options and Logcat.

## 기기에서 버그 보고서 받기

기기에서 직접 버그 보고서를 받으려면 다음을 수행하십시오.

1. Be sure you have [Developer options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled.

2. **개발자 옵션**에서 **버그 신고**를 탭합니다.

![버그 신고 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

3. Select the type of bug report you want and tap **Report**.

:::note

After a moment, you will see a notification that the bug report is ready (see Figure 2).

:::

![버그 신고 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

4. 알림을 누릅니다.

![버그 신고 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

5. 이 로그를 지원 팀에 보냅니다.

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.

:::

## Capture a bug report via Logcat

On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat — a standard Android command-line tool that dumps a log of system messages.

Follow this instruction:

**1단계: 기기 준비**

1. 기기를 개발자 모드로 전환하기 위해 To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

2. **개발자 옵션**으로 이동합니다.

3. **USB 디버깅**을 활성화합니다.

4. Increase **Logger buffer** sizes to 4 MB per log buffer.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

**Part #2: reproduce the problem**

It is important to reproduce the problem after you're done with the first part.

1. 문제를 재현합니다.

2. Remember/write down the date and time of reproduction and include it in the email to our support later.

**Part #3: get the log**

1. Connect your device to a PC with a USB cable.

2. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.

3. Test whether ADB is working properly: connect your Android device to your computer using a USB cable, open the Command Prompt, PowerShell or Terminal and run the following command:

`adb devices`

An example of a successful result:

![Step 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

4. Then run the following command (insert the relevant path):

`adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at support@adguard.com.

### ROOT 사용자를 위한 대체 방법

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

2. 메뉴에서 **녹음**을 선택합니다. 로그 파일의 이름을 입력하거나 **확인**을 누릅니다. 이제 **홈** 버튼을 누르면 CatLog가 로그인 배경을 계속 기록합니다.

3. 문제를 재현합니다.

4. CatLog를 열고 메뉴에서 **기록 중지**를 누릅니다.

5. 이 로그를 지원 팀에 보냅니다.

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.

:::
