---
title: Kısıtlı ayarların genişletilmesinden kaynaklanan sorunlar
sidebar_position: 17
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Kullanıcı gizliliğini artırmak amacıyla Google, Android 15'teki kısıtlama ayarlarını genişletti. _Uygulama kullanım erişimi_ gibi daha fazla ayarın etkinleştirilmesi için artık ek bir izin gerekiyor. Since the _[Firewall](/adguard-for-android/features/protection/firewall)_ and _[Detect Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ features require the _App usage access_ setting to be enabled for them to work properly, you may have experienced problems using them. To resolve these issues, please follow the steps below.

:::note

AdGuard'ın mutlak bir kayıt tutmama politikası vardır, bu da verilerinizi toplamadığımız veya üçüncü taraflara göndermediğimiz anlamına gelir. Yalnızca uygulamanın işlevi çalışamayacağı verilere erişim talebi istiyoruz.

:::

## Temel talimatlar

1. On your Android device, open the **Settings app**.
2. Tap **Apps**.
3. Tap **AdGuard**

![AdGuard in Apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted1.png)

If you can't find it, first tap **See all apps** or **App info**.

1. Tap **More** (⁝) → _Allow restricted settings_.

![Allow restricted settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted2.png)

Follow the on-screen instructions.

All done! Now the _Firewall_ and _Detect Samsung Pay_ features will work correctly.

![Restricted settings allowed for AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted3.png)

## OneUI 7.0 kullanıcıları için

For Samsung devices with OneUI 7.0, the app permission settings follow a different path. Uygulama kullanım erişimini yapılandırmak için şu adımları izleyin:

1. _Sistem ayarları_ → _Uygulamalar_ öğesini açın

![Apps settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/apps.jpg)

1. Sağ üst köşedeki menü simgesine (⋮) dokunun ve ardından _Özel erişim_ öğesini seçin

![Special access \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/three-dots.jpg)

1. Select _Usage data access_

![Özel erişim menüsü \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/special.jpg)

1. _AdGuard_ öğesini bulun ve etkinleştirin

![Usage data access \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/usage_data.jpg)

All done!
