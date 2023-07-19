---
title: How to use Samsung Pay with AdGuard in South Korea
sidebar_position: 17
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

Bazı kullanıcılar, AdGuard çalışırken Samsung Pay'in çalışmadığı bir sorunla karşılaştı. Bu sorun neredeyse yalnızca Güney Kore'de kayıtlı cihazlarda ortaya çıkmaktadır.

Bu soruna ne sebep oluyor? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses Local VPN to filter traffic. As a consequence, users had to disable AdGuard when making payments with Samsung Pay. Bu artık yeni **Samsung Pay'i tespit et** özelliğiyle önlenebilir. Bu seçenek etkinleştirildiğinde, kullanıcı Samsung Pay uygulamasını her açtığında AdGuard uygulaması duraklatılır ve uygulama kapatıldığında kaldığı yerden devam eder.

**Samsung Pay'i tespit et** öğesini etkinleştirmek için şu adımları izleyin:

1. Go to **Settings** → **General** → **Advanced**→ **Low-level settings**

2. **Samsung Pay'i tespit et** öğesine gidin ve kaydırıcıyı sağa hareket ettirin

3. **İzinlere izin ver** öğesine dokunun ve AdGuard'a verilerinizi toplaması için izin verin

> Herhangi bir kişisel veri toplamıyoruz, sadece **Samsung Pay'i tespit et** özelliğinin çalışması için Samsung Pay'in nasıl çalıştığına ilişkin istatistiklere ihtiyacımız var.

Bu özelliği etkinleştirdikten sonra, AdGuard size ekran görüntüsünde gösterildiği gibi bildirimler gönderir.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.

:::
