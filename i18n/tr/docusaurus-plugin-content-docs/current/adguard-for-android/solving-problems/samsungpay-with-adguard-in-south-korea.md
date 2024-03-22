---
title: How to use Samsung Pay with AdGuard in South Korea
sidebar_position: 17
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Bazı kullanıcılar, AdGuard çalışırken Samsung Pay'in çalışmadığı bir sorunla karşılaştı. Bu sorun neredeyse yalnızca Güney Kore'de kayıtlı cihazlarda ortaya çıkmaktadır.

Bu soruna ne sebep oluyor? Bazen Samsung Pay, VPN hizmetlerinin çalıştığı cihazlarda çalışmaz ve AdGuard da bu uygulamalardan biridir. AdGuard, trafiği filtrelemek için varsayılan olarak yerel bir VPN kullanır ve bu, Samsung Pay kullanırken sorunlara neden olabilir.

Sonuç olarak, kullanıcılar Samsung Pay ile ödeme yaparken AdGuard'ı devre dışı bırakmak zorunda kaldılar. *Samsung Pay'i tespit et* özelliğiyle bu durumun önüne geçilebilir. Bu seçenek etkinleştirildiğinde, kullanıcı Samsung Pay uygulamasını her açtığında AdGuard uygulaması duraklatılır ve uygulama kapatıldığında kaldığı yerden devam eder.

:::not

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. Başka bir mod kullanılıyorsa, Samsung Pay herhangi bir kesinti olmadan çalışır.

:::

*Samsung Pay'i tespit et* öğesini etkinleştirmek için şu adımları izleyin:

1. *Ayarlar* → *Genel* → *Gelişmiş*→ *Alt Seviye ayarlar* öğesine gidin.

1. *Samsung Pay'i tespit et* öğesine gidin ve kaydırıcıyı sağa hareket ettirin.

1. *İzinlere izin ver* öğesine dokunun ve AdGuard'a diğer uygulamaların kullanımıyla ilgili bilgilere erişim izni verin.

*Samsung Pay'i tespit et* özelliğinin çalışması için Samsung Pay'in çalışmasıyla ilgili istatistikler toplamamız gerekiyor.

Bu özelliği etkinleştirdikten sonra, Samsung Pay'den AdGuard'a geçiş yaptığınızda, ekran görüntüsünde gösterildiği gibi aşağıdaki mesaj görünür.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternatif olarak, *Uygulama yönetimi* bölümünde Samsung Pay için filtrelemeyi devre dışı bırakabilirsiniz. *Uygulama yönetimi* ekranına gidin (alttan üçüncü sekme), listede Samsung Pay'i bulun ve *Trafiği AdGuard üzerinden yönlendir* öğesindeki düğmeyi kapatın.
