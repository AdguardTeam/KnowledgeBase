---
title: Problèmes causés par l'extension des paramètres restreints
sidebar_position: 17
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Afin d'améliorer la confidentialité utilisateur, Google a étendu les paramètres restreints dans Android 15. D'autres paramètres, tels que l'_accès à l'utilisation des applications_, nécessite désormais une autorisation supplémentaire pour être activés. Étant donné que les fonctionnalités _[Pare-feu](/adguard-for-android/features/protection/firewall)_ et _[Détecter Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)_ nécessitent que le paramètre _Accès à l'utilisation des applications_ soit activé pour qu'elles fonctionnent correctement, vous avez peut-être rencontré des problèmes lors de leur utilisation. Pour résoudre ces problèmes, veuillez suivre les étapes ci-dessous.

:::note

AdGuard a une politique stricte de non-conservations des journaux, ce qui signifie que nous ne collectons pas vos données et ne les envoyons pas à des tiers. Nous demandons uniquement l'accès aux données sans lesquelles l'application ne peut pas fonctionner.

:::

## Instructions basiques

1. Sur votre appareil Android, ouvrez l'**application Paramètres**.
2. Appuyez sur **Applications**.
3. Appuyez sur **AdGuard**

![AdGuard dans Applications \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted1.png)

Si vous ne la trouvez pas, appuyez d'abord sur **Voir toutes les applications** ou **Infos sur l'application**.

1. Appuyez sur **Plus** (⁝) → _Autoriser les paramètres restreints_.

![Autoriser les paramètres restreints \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted2.png)

Suivez les instructions à l'écran.

C'est fait ! Maintenant, les fonctionnalités _Pare-feu_ et _Détecter Samsung Pay_ fonctionneront correctement.

![Paramètres restreints autorisés pour AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted3.png)

## Pour les utilisateurs de OneUI 7.0

Pour les appareils Samsung avec OneUI 7.0, les paramètres d'autorisation de l'application suivent un chemin différent. Suivez ces étapes pour configurer l'accès à l'utilisation de l'application :

1. Ouvrez _Paramètres système_ → _Applications_

![Paramètres des applications \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/apps.jpg)

1. Appuyez sur l'icône de menu (⋮) située dans le coin supérieur droit, puis sélectionnez _Accès spécial_

![Accès spécial \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/three-dots.jpg)

1. Sélectionnez _Accès aux données d'utilisation_

![Menu d'accès spécial \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/special.jpg)

1. Trouvez et activez _AdGuard_

![Accès aux données d'utilisation](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/usage_data.jpg)

C'est fait !
