---
title: Paramètres de bas niveau
sidebar_position: 6
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

![Paramètres de bas niveau \*mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Pour ouvrir les _Paramètres de bas niveau_, accédez à _Paramètres_ → _Général_ → (Activer le _Mode avancé_ s'il est désactivé) → _Paramètres avancés_ → _Paramètres de bas niveau_.

Pour la plupart, il est préférable de ne pas modifier les paramètres de cette section : utilisez-les uniquement si vous êtes sûr de ce que vous faites ou si l'équipe d'assistance les a demandés. Mais certains paramètres pourraient être modifiés sans aucun risque.

### Bloquer IPv6 {#blockipv6}

Pour toute requête DNS envoyée pour obtenir une adresse IPv6, notre application renvoie une réponse vide (comme si cette adresse IPv6 n'existait pas). Il existe désormais une option pour ne pas renvoyer les adresses IPv6. A ce stade, la description de cette fonction devient trop technique : configurer ou désactiver IPv6 est le domaine exclusif des utilisateurs avancés. Vraisemblablement, si vous en faites partie, il sera bon de savoir que nous disposons désormais de cette fonctionnalité, sinon il n’est pas nécessaire de s’y plonger.

### Serveurs Bootstrap et Fallback {#bootstrap-fallback}

Fallback est un serveur DNS de secours. Si vous avez choisi un serveur DNS et que quelque chose lui arrive, une solution de secours est nécessaire pour définir le serveur DNS de sauvegarde jusqu'à ce que le serveur principal réponde.

Avec Bootstrap, c'est un peu plus compliqué. Pour qu'AdGuard pour iOS utilise un serveur DNS sécurisé personnalisé, notre application doit d'abord obtenir son adresse IP. À cette fin, le DNS du système est utilisé par défaut, mais cela n'est parfois pas possible pour diverses raisons. Dans de tels cas, Bootstrap peut être utilisé pour obtenir l'adresse IP du serveur DNS sécurisé sélectionné. Voici deux exemples pour illustrer dans quels cas un serveur Bootstrap personnalisé peut être utile :

1. Lorsqu'un serveur DNS par défaut du système ne renvoie pas l'adresse IP d'un serveur DNS sécurisé et ce n'est pas possible d'en utiliser un sécurisé.
2. Lorsque notre application et un VPN tiers sont utilisés simultanément et qu'il n'est pas possible d'utiliser le DNS système comme Bootstrap.
