---
title: Проблемы, вызванные расширением ограниченных настроек
sidebar_position: 17
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Стремясь повысить уровень конфиденциальности пользователей, Google расширила настройки ограничений в Android 15. Теперь для включения дополнительных настроек, таких как _Доступ к использованию приложений_, требуется дополнительное разрешение. Поскольку функции _[Фаервол](/adguard-for-android/features/protection/firewall)_ и _[Обнаружение Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ требуют включения настройки _Доступ к использованию приложений_ для их правильной работы, у вас могли возникнуть проблемы с их использованием. To resolve these issues, please follow the steps below.

:::note

AdGuard придерживается строгой политики без логов, что означает, что мы не собираем ваши данные и не передаём их третьим лицам. Мы запрашиваем только доступ к тем данным, без которых приложение не может функционировать.

:::

## Basic instructions

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

## For OneUI 7.0 users

For Samsung devices with OneUI 7.0, the app permission settings follow a different path. Follow these steps to configure app usage access:

1. Open _System settings_ → _Apps_

![Apps settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/apps.jpg)

1. Tap the menu icon (⋮) in the top-right corner, then select _Special access_

![Special access \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/three-dots.jpg)

1. Select _Usage data access_

![Special access menu \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/special.jpg)

1. Find and enable _AdGuard_

![Usage data access \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/usage_data.jpg)

All done!
