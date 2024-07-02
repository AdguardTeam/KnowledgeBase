---
title: Kısıtlı ayarların genişletilmesinden kaynaklanan sorunlar
sidebar_position: 18
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Kullanıcı gizliliğini artırmak amacıyla Google, Android 15'teki kısıtlama ayarlarını genişletti. _Uygulama kullanım erişimi_ gibi daha fazla ayarın etkinleştirilmesi için artık ek bir izin gerekiyor. Since the _[Firewall](/adguard-for-android/features/protection/firewall)_ and _[Detect Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ features require the _App usage access_ setting to be enabled for them to work properly, you may have experienced problems using them. Bu sorunları çözmek için lütfen aşağıdaki adımları izleyin:

:::note

AdGuard'ın mutlak bir kayıt tutmama politikası vardır, bu da verilerinizi toplamadığımız veya üçüncü taraflara göndermediğimiz anlamına gelir. Yalnızca uygulamanın işlevi çalışamayacağı verilere erişim talebi istiyoruz.

:::

1. Android cihazınızda **Ayarlar uygulaması** öğesini açın.
2. **Uygulamalar** öğesine dokunun.
3. **AdGuard** öğesine dokunun

![Uygulamalarda AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solution_problems/problems-caused-by-extending-restricted-settings/restricted1.png)

If you can't find it, first tap **See all apps** or **App info**.

1. Tap **More** (⁝) → _Allow restricted settings_.

![Allow restricted settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted2.png)

Ekrandaki talimatları izleyin.

Hepsi tamam! Now the _Firewall_ and _Detect Samsung Pay_ features will work correctly.

![Restricted settings allowed for AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted3.png)
