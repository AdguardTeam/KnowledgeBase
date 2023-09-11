---
title: 설치 방법
sidebar_position: 2
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true)해 보세요.

:::

## 시스템 요구 사항

**OS version:** Android 7.0 or higher

**RAM**: 2 GB 이상

**Free disk space:** 500 MB

## 설치 방법

대부분의 Android 기반 앱은 Google Play에서 다운로드할 수 있지만 Google은 Google Play를 통한 네트워크 수준 광고 차단기(다른 앱의 광고를 차단하는 앱)를 배포하는 것을 금지하기 때문에 Google Play에서 AdGuard 광고 차단 앱이 없습니다. [AdGuard 블로그](https://blog.adguard.com/en/google-removes-adguard-android-app-google-play/)에서 Google 제한 정책에 대한 자세한 내용을 확인하실 수 있습니다.

그래서 Android용 AdGuard는 수동으로만 설치할 수 있습니다. 휴대폰에서 앱을 사용하려면 다음 단계를 수행하세요.

1. **Download the app on your device**. Here are a few ways you can do this:

    - head over to [our website](https://adguard.com/adguard-android/overview.html) and tap the *Download* button
    - start the browser and type in the following URL: [https://adguard.com/apk](https://adguard.com/apk)
    - or scan this QR code:

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/qr/inst-qr-en.png)

1. **Allow installing apps from unknown sources**. Once the file download is complete, tap *Open* in the notification.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    A popup will appear. Tap *Settings*, navigate to *Install unknown apps*, and grant permission for the browser you've used to download the file.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

    This guide is for Android 8+. If you have an older OS version, before downloading the apk file, go to *Settings* and select *Additional settings* in *System & Device*. Enable *Unknown sources* and tap *OK* in the system warning window.

1. **Install the app**. Once the browser has obtained the necessary permissions, the system will ask you if you want to install the AdGuard app. Tap *Install*.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    You will then be asked to read AdGuard's *License Agreement* and *Privacy Policy*. You can also participate in product development. To do this, check the boxes for *Send crash reports automatically* and *Send technical and interaction data*. Then tap *Continue*.

    ![Privacy Policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Create a local VPN**. In order to filter all traffic directly on your device and not route it through a remote server, AdGuard needs to establish a VPN connection.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Enable HTTPS filtering**. It is not a mandatory option, however, we advice to turn it on for the best ad-blocking quality.

    If your device is running Android 7–9, you'll be prompted to install a root certificate and configure HTTPS filtering after the local VPN setup.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    After you tap *Install now*, a prompt will appear asking you to authenticate the certificate installation with a password or fingerprint.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom: tap *Enable* and follow the instructions on the next screen.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## AdGuard 제거 및 재설치

If you need to reinstall AdGuard on your mobile device, first delete it by opening **Settings** and choosing **Apps** (Android 7) or **Apps & notifications** (Android 8+). Find **AdGuard** in the list of installed apps and press **Uninstall**.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall the app, repeat the actions described in the Installation section.
