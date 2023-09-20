---
title: Certificate installation on devices with Android 11+
sidebar_position: 12
---

:::info

Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![Certificate *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install AdGuard certificate:

1. When you see the *HTTPS filtering is off* notification, tap *Enable*.

1. Then you'll be presented with three screens that explain:
    - Why filter HTTPS traffic
    - The safety of this filtering process
    - The necessity of AdGuard certificate

    Consecutively tap *Next* → *Next* → *Save certificate* on these screens.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, tap *Open Settings*, navigate to *Encryption & credentials*, and then choose *Install a certificate*.

1. You might see a warning, if so, tap *Install anyway*. From the list, select the file with AdGuard certificate.

You're all set! Once the certificate is installed successfully, you've enabled HTTPS filtering.

Please note: The steps provided are based on the Google Pixel 4 smartphone. If you're using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by accessing your device's settings and entering "certificate" or "credentials" in the search bar.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Restart AdGuard.
2. Try to install the correct certificate (AdGuard Personal CA) one more time.

If you still encounter a problem and can't install the certificate, please contact our support team at support@adguard.com.
