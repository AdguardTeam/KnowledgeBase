---
title: Firefox 브라우저의 인증서 신뢰 문제
sidebar_position: 11
---

AdGuard가 Firefox에서 HTTPS 트래픽을 성공적으로 필터링하기 위해서는 브라우저가 AdGuard의 인증서를 신뢰해야 합니다. Firefox 버전에 따라 브라우저가 인증서를 신뢰하도록 하는 방법은 다릅니다.

#### 방법 1

> This method works in Firefox for Android version 90.0 and later.

To make Firefox trust the AdGuard certificate, do the following:

1. Run the browser.
2. Go to **Settings** > **About Firefox**.

![About Firefox](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Tap the Firefox logo five times.
4. Navigate to **Settings** > **Secret Settings**.

![Secret Settings*](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. Toggle **Use third party CA certificates**.

#### Method 2

> This method will only work on **rooted** devices.

1. adb를 [설치하고 구성합니다.](https://www.xda-developers.com/install-adb-windows-macos-linux/)
> Windows 플랫폼을 사용하는 경우, adb를 설치하고 구성합니다. **삼성 기기**를 사용하는 경우, [이 드라이버](https://developer.samsung.com/mobile/android-usb-driver.html)를 설치해야 합니다.
2. **개발자 모드** 및 **USB 디버깅**을 활성화합니다.
- 휴대폰에서 **설정**을 엽니다.
- **시스템** 섹션(설정 메뉴의 마지막 항목)으로 이동합니다. 이 섹션에서 **휴대전화 정보**를 찾습니다.
- **빌드 번호** 줄을 7번 클릭합니다. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.
3. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);
4. Open the **AdGuard settings** > **Network** > **HTTPS Filtering** > Install the certificate in **Firefox** > **INSTALL FOR OLD VERSIONS**;
5. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;
6. In the specified folder we are interested in two files:
- `cert9.db` - `key4.db` 7. We need to move these files to a folder of the browser where the security certificate issue occurred: - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`. 8. The full command will look like this: - `adb shell su` - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.

The full command should look something like this:

- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

If `adb shell su` does not work, you should try `adb shell` initially, and then `su`.