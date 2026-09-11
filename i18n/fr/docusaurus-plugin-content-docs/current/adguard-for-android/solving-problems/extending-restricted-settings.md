---
title: Problems caused by extending restricted settings
sidebar_position: 17
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

In an effort to improve user privacy, Google has expanded the restriction settings in Android 15. More settings, such as _App usage access_, now require an additional permission to be enabled. Étant donné que les fonctionnalités _[Pare-feu](/adguard-for-android/features/protection/firewall)_ et _[Détecter Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ nécessitent que le paramètre _Accès à l'utilisation des applications_ soit activé pour qu'elles fonctionnent correctement, vous avez peut-être rencontré des problèmes lors de leur utilisation. To resolve these issues, please follow the steps below.

:::note

AdGuard has a strict no-logging policy, which means that we do not collect your data or send it to third parties. We only ask for access to data without which the application cannot function.

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
