---
title: Certificate installation on devices with Android 11+
sidebar_position: 11
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device’s user storage. On older versions of the Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Follow these steps to install the AdGuard certificate:

1. Uygulamayı açın. *Ana sayfa* ekranında, *HTTPS filtreleme kapalı* öğesine dokunun.

1. Then you’ll be presented with three screens:
    - HTTPS filtering is critical for ad blocking
    - AdGuard’s HTTPS filtering is safe
    - AdGuard certificate

1. Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, copy the text from the *CA Certificate* field and tap *Open Settings*.

1. Open *Settings* and either paste or type *CA Certificate* in the search bar. Tap the respective option.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

You’re all set! Once the certificate is installed successfully, you’ve enabled HTTPS filtering.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. AdGuard'ı yeniden başlatın.
1. Doğru sertifikayı (AdGuard Personal CA) bir kez daha yüklemeyi deneyin.

## Güvenlik uyarıları

Android'in önceki sürümlerinde hızlı ayarlar panelinde "Ağ izlenebilir" mesajı görüntüleniyordu. Üzerine dokunduğunuzda detaylı bilgilerin yer aldığı bir pencere açılır.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” Bu, sistemin kullanıcı sertifika depokanasubda üçüncü taraf sertifikaları tespit ettiği anlamına gelir. Bildirime dokunulduğunda kullanıcı sertifika depolamasındaki sertifikaların bir listesi açılır.

Bu uyarılara rağmen trafiğiniz güvende kalır. Uzak sunuculara olan bağlantınız şifrelenmiş olarak kalır. AdGuard'ın yaptığı şey, bağlantıyı filtreleyip filtrelememeye karar vermeden önce sunucunun sertifikasını doğrulamaktır — tıpkı bir tarayıcının çalışma şekline benzer.

[HTTPS filtrelemesi ve sertifikanın nasıl çalıştığı hakkında daha fazla bilgi edinin](/general/https-filtering/what-is-https-filtering.md).

Hâlâ bir sorunla karşılaşıyorsanız ve sertifikayı yükleyemiyorsanız lütfen <support@adguard.com> adresinden destek ekibimizle iletişime geçin.
