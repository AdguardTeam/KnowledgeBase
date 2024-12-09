---
title: Comment utiliser Samsung Pay avec AdGuard en Corée du Sud
sidebar_position: 17
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Un certain nombre d'utilisateurs ont rencontré un problème où Samsung Pay ne fonctionne pas lorsque AdGuard est en cours d'exécution. This issue occurs almost exclusively on devices registered in South Korea.

What is causing this issue? Parfois, Samsung Pay ne fonctionne pas sur les appareils avec des services VPN en cours d'exécution, et AdGuard est l'une de ces applications. Par défaut, AdGuard utilise un VPN local pour filtrer le trafic, ce qui peut poser des problèmes lors de l'utilisation de Samsung Pay.

En conséquence, les utilisateurs devaient désactiver AdGuard lorsqu'ils effectuaient des paiements avec Samsung Pay. Cela peut être évité avec la fonction *Détecter Samsung Pay*. Lorsque cette option est activée, l'application AdGuard est mise en pause chaque fois que l'utilisateur ouvre l'application Samsung Pay et reprend lorsque l'application est fermée.

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. Si un autre mode est utilisé, Samsung Pay fonctionnera sans interruption.

:::

Pour activer *Détecter Samsung Pay*, suivez ces étapes :

1. Go to *Settings* → *General* → *Advanced*→ *Low-level settings*.

1. Faites défiler jusqu'à *Détecter Samsung Pay* et déplacez le curseur vers la droite.

1. Tap *Allow permissions* and give AdGuard access to information about the use of other apps.

Nous en avons besoin pour collecter des statistiques sur le fonctionnement de Samsung Pay afin que la fonction *Détecter Samsung Pay* puisse être utilisée.

Après avoir activé cette fonctionnalité, lorsque vous basculez de Samsung Pay à AdGuard, le message suivant apparaîtra comme indiqué dans la capture d'écran.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternativement, vous pouvez désactiver le filtrage pour Samsung Pay dans la *gestion des applications*. Il vous suffit d'aller sur l'écran de la *gestion des applications* (troisième onglet en partant du bas), de trouver Samsung Pay dans la liste, et de désactiver le commutateur à *Rediriger le trafic via AdGuard*.
