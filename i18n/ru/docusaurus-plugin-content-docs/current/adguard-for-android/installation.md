---
title: Установка
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Системные требования

**Версия ОС:** Android 7.0 или выше

**Объём оперативной памяти**: от 2 ГБ

**Свободное пространство на диске**: 500 МБ

## Установка

AdGuard для Android не представлен на Google Play: Google запрещает распространять через этот магазин блокировщики сетевого уровня — то есть те, которые блокируют рекламу в других приложениях. Дополнительную информацию об ограничительной политике Google можно найти [ в нашем блоге](https://blog.adguard.com/en/google-removes-adguard-android-app-google-play/).

Поэтому установить AdGuard для Android можно только вручную. Ниже — инструкции, как это сделать.

1. **Скачайте приложение на устройство**. Вот несколько способов сделать это:

    - перейдите на [наш сайт](https://adguard.com/adguard-android/overview.html) и нажмите кнопку *Скачать*
    - запустите браузер и введите: [https://adguard.com/apk](https://adguard.com/apk)
    - or scan this QR code:

    ![QR-код *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/qr/inst-qr-en.png)

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

## Удаление/переустановка AdGuard

If you need to reinstall AdGuard on your mobile device, first delete it by opening **Settings** and choosing **Apps** (Android 7) or **Apps & notifications** (Android 8+). Find **AdGuard** in the list of installed apps and press **Uninstall**.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall the app, repeat the actions described in the Installation section.
