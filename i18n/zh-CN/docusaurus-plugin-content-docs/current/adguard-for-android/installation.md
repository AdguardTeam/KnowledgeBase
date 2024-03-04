---
title: 安装
sidebar_position: 2
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## 系统需求

**OS version:** Android 7.0 or higher

**RAM**： 至少 2 GB

**Free disk space:** 500 MB

## 安装

虽然大部分用于安卓系统的应用程序可以通过谷歌商店分发，但是 AdGuard 不在里面。谷歌禁止通过谷歌商店分发网络层的广告拦截程序，即，在其他应用程序里屏蔽商业广告的应用程序。 You will find more information about Google restrictive policy [in our blog](https://adguard.com/blog/adguard-google-play-removal.html).

由于上述原因，您只可以手动安装适用于安卓的 AdGuard。 为了在移动设备上使用该应用程序，您需要执行以下操作。

1. **Download the app on your device**. Here are a few ways you can do this:

    - head over to [our website](https://adguard.com/adguard-android/overview.html) and tap the *Download* button
    - start the browser and type in the following URL: [https://adguard.com/apk](https://adguard.com/apk)
    - or scan this QR code:

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Allow installing apps from unknown sources**. Once the file download is complete, tap *Open* in the notification.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    A popup will appear. Tap *Settings*, navigate to *Install unknown apps*, and grant permission for the browser you've used to download the file.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Install the app**. Once the browser has obtained the necessary permissions, the system will ask you if you want to install the AdGuard app. Tap *Install*.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    You will then be asked to read AdGuard's *License agreement* and *Privacy policy*. You can also participate in product development. To do this, check the boxes for *Send crash reports automatically* and *Send technical and interaction data*. Then tap *Continue*.

    ![Privacy policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Create a local VPN**. In order to filter all traffic directly on your device and not route it through a remote server, AdGuard needs to establish a VPN connection.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Enable HTTPS filtering**. It is not a mandatory option, however, we advice to turn it on for the best ad-blocking quality.

    If your device is running Android 7–9, you'll be prompted to install a root certificate and configure HTTPS filtering after the local VPN setup.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    After you tap *Install now*, a prompt will appear asking you to authenticate the certificate installation with a password or fingerprint.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## 卸载/重新安装 AdGuard

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Find AdGuard in the list of installed apps and press *Uninstall*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall AdGuard, just download the apk file again and follow the steps outlined in the Installation section. Uninstallation is not required beforehand.
