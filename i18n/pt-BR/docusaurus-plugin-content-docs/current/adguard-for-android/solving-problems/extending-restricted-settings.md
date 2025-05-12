---
title: Problemas causados pela extensão de configurações restritas
sidebar_position: 17
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

Em um esforço para melhorar a privacidade do usuário, o Google expandiu as configurações de restrição no Android 15. Mais configurações, como _Acesso ao uso do aplicativo_, agora exigem uma permissão adicional para serem ativadas. Como os recursos _[Firewall](/adguard-for-android/features/protection/firewall)_ e _[Detectar Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ exigem que a configuração _Acesso ao uso do app_ esteja ativada para que funcionem corretamente, você pode ter tido problemas ao usá-los. To resolve these issues, please follow the steps below.

:::note

O AdGuard tem uma política rigorosa de não registro, o que significa que não coletamos seus dados nem os enviamos a terceiros. Solicitamos apenas acesso aos dados sem os quais o aplicativo não pode funcionar.

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
