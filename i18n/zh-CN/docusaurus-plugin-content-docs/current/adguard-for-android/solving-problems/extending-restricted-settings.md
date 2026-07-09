---
title: 扩展受限设置造成的问题
sidebar_position: 17
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

为了提高用户隐私保护，Google 在 Android 15 中扩展了限制设置。 现在，更多设置需要额外的权限才能启用包，比如「应用程序使用访问权限」。 由于[防火墙](/adguard-for-android/features/protection/firewall)和[检测 Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) 功能需要启用「应用使用访问权限」设置才能正常工作，因此用户在使用它们时可能会遇到问题。 To resolve these issues, please follow the steps below.

:::note

AdGuard 有严格的不记录政策，就是说我们不会收集您的数据或将其发送给第三方。 我们只要求访问应用无法运行的数据。

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
