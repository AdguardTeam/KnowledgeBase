---
title: Certificate installation on devices with Android 11+
sidebar_position: 12
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install AdGuard certificate:

1. When you see the *HTTPS filtering is off* notification, tap *Enable*.

1. Then you'll be presented with three screens that explain:
    - Why filter HTTPS traffic
    - The safety of this filtering process
    - The necessity of AdGuard certificate

    Consecutively tap *Next* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, tap *Open Settings*.

1. Tap *More security settings* → *Encryption & credentials* → *Install a certificate* → *CA certificate*.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

You're all set! Once the certificate is installed successfully, you've enabled HTTPS filtering.

Please note that the steps provided are based on the Google Pixel 7 smartphone. If you're using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by entering "certificate" or "credentials" in the settings search bar.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Restart AdGuard.
2. Try to install the correct certificate (AdGuard Personal CA) one more time.

If you still encounter a problem and can't install the certificate, please contact our support team at support@adguard.com.
