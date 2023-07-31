---
title: Firefox 브라우저의 인증서 신뢰 문제
sidebar_position: 11
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true) 해 보세요.

:::

AdGuard가 Firefox에서 HTTPS 트래픽을 성공적으로 필터링하기 위해서는 브라우저가 AdGuard의 인증서를 신뢰해야 합니다. Firefox 버전에 따라 브라우저가 인증서를 신뢰하도록 하는 방법은 다릅니다.

### Method 1

:::note

이 방법은 Firefox Nightly 90.0a1 이상 버전에서만 사용될 수 있습니다. Firefox의 베타 및 일반 버전이 v90에 도달하면 이 방법을 해당 버전에도 적용할 수 있습니다.

:::

Firefox Nightly가 AdGuard 인증서를 신뢰하도록 하려면 다음 단계를 따르십시오.

1. 브라우저를 실행합니다.
2. Go to **Settings** → **About Firefox**.

![Firefox 정보 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Firefox 로고를 5번 탭합니다.
4. Navigate to **Settings** → **Secret Settings**.

![비밀 설정 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. **Use third party CA certificates** 기능을 활성화합니다.

### Method 2

:::note

이 방법은 **루팅된 기기**에서만 사용할 수 있습니다.

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).
2. **개발자 모드** 및 **USB 디버깅**을 활성화합니다.
    - Open the **Settings** app on your phone;
    - **시스템** 섹션(설정 메뉴의 마지막 항목)으로 이동합니다. In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. 그 후에 '**개발자 모드를 켰습니다'**라는 알림을 받게 됩니다. 필요한 경우 기기의 잠금 해제 코드를 입력하세요.
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.
3. [Firefox ](https://www.mozilla.org/en-US/firefox/releases/)브라우저(정식 버전)를 설치합니다.
4. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;
5. `adb shell su` 및 `cd data/data/...`를 사용하여 `data/data/org.mozilla.firefox/files/mozilla` 폴더를 엽니다. `xxxxxxx.default`라는 폴더를 찾아 이름을 기억하세요.
6. 지정된 폴더에는 두 개의 파일이 필요합니다.
    - `cert9.db`
    - `key4.db`
7. 보안 인증서 문제가 발생한 브라우저의 폴더로 이러한 파일을 이동해야 합니다.
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. 전체 명령은 다음과 같습니다.
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

**권한 거부됨** 시스템 알림을 받은 경우 먼저 지정된 파일을 권한이 없는 디렉토리로 이동해야 합니다. 그런 다음 Firefox 브라우저에서 필요한 폴더로 이동하시면 됩니다.

전체 명령은 다음과 같아야 합니다.
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

`adb shell su`가 작동하지 않으면 처음에 `adb shell`을 시도한 다음 `su`를 시도해 보세요.
