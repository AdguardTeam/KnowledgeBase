---
title: Сertificate installation issues on devices with Android 11+
sidebar_position: 12
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. Android işletim sisteminin eski sürümlerinde bu otomatik olarak yapılıyordu, ancak Android 11 ve sonraki sürümlerde kullanıcıların bunu [elle yüklemesi](../../overview#https-filtering) gerekiyor.

![Certificate *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/Android/3-5/cert-en.gif)

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. AdGuard'ı yeniden başlatın.
2. Doğru sertifikayı (AdGuard Personal CA) bir kez daha yüklemeyi deneyin.

If you still encounter a problem and can't install the certificate, please contact our support team at support@adguard.com. 