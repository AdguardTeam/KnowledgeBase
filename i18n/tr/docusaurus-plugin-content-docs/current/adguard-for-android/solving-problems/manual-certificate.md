---
title: Certificate installation on devices with Android 11+
sidebar_position: 12
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device's user storage. On older versions of the Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install the AdGuard certificate:

1. When you see the *HTTPS filtering is off* notification, tap *Enable*.

1. Daha sonra size aşağıdakileri açıklayan üç ekran sunulacaktır:
    - Why filter HTTPS traffic
    - Bu filtreleme işleminin güvenliği
    - The necessity of the AdGuard certificate

    Consecutively tap *Next* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. Kaydettikten sonra *Ayarları aç* öğesine dokunun.

1. Tap *More security settings* → *Encryption & credentials* → *Install a certificate* → *CA certificate*.

1. Bir uyarı görebilirsiniz. Öyleyse, *Yine de yükle* öğesine dokunun ve gerekirse PIN kodunuzu girin.

1. AdGuard sertifika dosyasını seçin. Adı *adguard_1342_020322.crt* gibi görünmelidir.

Hepsi hazır! Once the certificate is installed successfully, you've enabled HTTPS filtering.

Lütfen sağlanan adımların Google Pixel 7 akıllı telefonunu temel aldığını unutmayın. If you're using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by entering “certificate” or “credentials” in the settings search bar.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. AdGuard'ı yeniden başlatın.
2. Doğru sertifikayı (AdGuard Personal CA) bir kez daha yüklemeyi deneyin.

Hâlâ bir sorunla karşılaşıyorsanız ve sertifikayı yükleyemiyorsanız, lütfen support@adguard.com adresinden destek ekibimizle iletişime geçin.
