---
title: Comment éviter les problèmes de compatibilité avec FaceTime
sidebar_position: 3
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Il s'est avéré que le mode Full-Tunnel pouvait interférer non seulement avec la compatibilité avec d'autres applications VPN, mais également avec FaceTime.

Certains utilisateurs ont rencontré le problème que FaceTime ne fonctionne pas sur l'appareil lorsque l'application AdGuard pour iOS est en mode Full-Tunnel.

Il est probable, mais non garanti, que FaceTime fonctionnera lorsque AdGuard est en mode Full-Tunnel sans icône VPN, car il est également incompatible avec d'autres applications VPN et instable.

**Si vous souhaitez utiliser FaceTime et vous assurer que les appels vidéo/audio ne cessent pas de fonctionner, utilisez le mode Split-Tunnel.**

![Écran du mode tunnel *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!)

Pour l'activer, suivez les instructions :

1. Accédez à AdGuard pour iOS *Paramètres* → *Paramètres généraux*.
2. Activez *Mode avancé* et accédez à la section *Paramètres avancés* qui apparaît juste après.
3. Ouvrez *Mode tunnel* et sélectionnez *Split-Tunnel*.

C'est fait ! Désormais, il ne devrait plus y avoir de problèmes de compatibilité avec FaceTime.
