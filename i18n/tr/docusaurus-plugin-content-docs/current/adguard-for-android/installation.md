---
title: Kurulum
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Sistem gereksinimleri

**OS version:** Android 7.0 or higher

**RAM:** en az 2 GB

**Boş disk alanı:** 500 MB

## Kurulum

Most Android-based apps are distributed via Google Play; however, AdGuard is not presented there, because Google prohibits distribution of network-level ad blockers via Google Play, i.e. apps that block commercials in other apps. Google'ın kısıtlayıcı politikası hakkında daha fazla bilgiyi [blogumuzda](https://adguard.com/blog/adguard-google-play-removal.html) bulabilirsiniz.

That’s why you can only install AdGuard for Android manually. To use the app on your mobile device, you will need to do the following.

1. **Uygulamayı cihazınıza indirin**. İşte bunu yapmanın birkaç yolu:

    - head over to [our website](https://adguard.com/adguard-android/overview.html) and tap the *Download* button
    - start the browser and type in the following URL: [https://adguard.com/apk](https://adguard.com/apk)
    - veya bu QR kodu tarayın:

    ![QR kodu *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Allow installing apps from unknown sources**. Once the file download is complete, tap *Open* in the notification.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Bir açılır pencere görünür. Tap *Settings*, navigate to *Install unknown apps*, and grant permission for the browser you've used to download the file.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Uygulamayı yükleyin**. Tarayıcı gerekli izinleri aldıktan sonra, sistem size AdGuard uygulamasını yüklemek isteyip istemediğinizi sorar. *Yükle* öğesine dokunun.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    You will then be asked to read AdGuard's *License agreement* and *Privacy policy*. You can also participate in product development. To do this, check the boxes for *Send crash reports automatically* and *Send technical and interaction data*. Ardından *Devam* öğesine dokunun.

    ![Gizlilik politikası *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Yerel bir VPN oluşturun**. In order to filter all traffic directly on your device and not route it through a remote server, AdGuard needs to establish a VPN connection.

    ![Yerel bir VPN oluşturun *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **HTTPS filtrelemeyi etkinleştirin**. It is not a mandatory option, however, we advice to turn it on for the best ad-blocking quality.

    If your device is running Android 7–9, you'll be prompted to install a root certificate and configure HTTPS filtering after the local VPN setup.

    ![Android 7-9'da HTTPS filtrelemeyi etkinleştirin *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    After you tap *Install now*, a prompt will appear asking you to authenticate the certificate installation with a password or fingerprint.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Uninstalling/Reinstalling AdGuard

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Yüklü uygulamalar listesinde AdGuard'ı bulun ve *Kaldır* öğesine basın.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

AdGuard'ı yeniden yüklemek için apk dosyasını tekrar indirin ve Yükleme bölümünde belirtilen adımları izleyin. Kaldırma işlemi önceden gerekli değildir.
