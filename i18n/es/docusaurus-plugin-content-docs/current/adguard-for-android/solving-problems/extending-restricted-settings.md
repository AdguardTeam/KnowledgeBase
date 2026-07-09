---
title: Problemas causados por la ampliación de configuraciones restringidas
sidebar_position: 17
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver cómo funciona, [descarga la app de AdGuard](https://agrd.io/download-kb-adblock)

:::

En un esfuerzo por mejorar la privacidad del usuario, Google ha ampliado la configuración de restricciones en Android 15. Más configuraciones, como _Acceso al uso de la aplicación_, ahora requieren un permiso adicional para ser habilitadas. Dado que las funciones _[Firewall](/adguard-for-android/features/protection/firewall)_ y _[Detectar Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ requieren que la configuración _Acceso al uso de aplicaciones_ esté habilitada para que funcionen correctamente, es posible que hayas experimentado problemas al usarlas. To resolve these issues, please follow the steps below.

:::note

AdGuard tiene una estricta política de no registro, lo que significa que no recopilamos tus datos ni los enviamos a terceros. Sólo pedimos acceso a los datos sin los cuales la aplicación no puede funcionar.

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
