---
title: Сertificate installation issues on devices with Android 11+
sidebar_position: 12
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true)해 보세요.

:::

To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to [install it manually](../../overview#https-filtering).

![Certificate *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/Android/3-5/cert-en.gif)

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Restart AdGuard.
2. Try to install the correct certificate (AdGuard Personal CA) one more time.

If you still encounter a problem and can't install the certificate, please contact our support team at support@adguard.com. 