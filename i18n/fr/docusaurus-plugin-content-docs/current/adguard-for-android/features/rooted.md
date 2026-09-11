---
title: Appareils rootés
sidebar_position: 9
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

À cause des mesures de sécurité du système d'exploitation Android, certaines fonctionnalités d'AdGuard ne sont disponibles que sur des appareils rootés. En voici la liste :

- Dans la plupart des cas, **le filtrage HTTPS dans les applications** nécessite [d'installer un certificat CA dans le magasin système](/adguard-for-android/features/settings#security-certificates), car la plupart des applications ne font pas confiance aux certificats dans le magasin d'utilisateur
- Le mode de [**proxy automatique**](/adguard-for-android/features/settings#routing-mode) nécessite un accès root en raison des restrictions d'Android sur le filtrage de trafic à l'échelle du système
- Le mode de routage [**proxy manuel**](/adguard-for-android/features/settings#routing-mode) nécessite un accès root sur Android 10 et supérieur car il n'est plus possible de déterminer le nom de l'application associée à une connexion filtrée par AdGuard
