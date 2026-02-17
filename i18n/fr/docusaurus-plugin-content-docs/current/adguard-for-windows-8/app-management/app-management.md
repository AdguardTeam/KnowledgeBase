---
title: Gestion des applications
sidebar_position: 1
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

![Gestion des applications](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/management.png)

Dans la section _Gestion des applications_, vous pouvez gérer les paramètres de routage et de filtrage pour toutes les applications installées sur votre appareil.

Une fois qu'AdGuard détecte qu’une app est en ligne, elle est automatiquement ajoutée à la _Gestion des applications_, et son trafic est acheminé via AdGuard.

Par défaut, AdGuard filtre tout le trafic, mais vous pouvez choisir ce qu'il faut exclure.

AdGuard filtre également le trafic HTTPS, car la plupart des sites Web utilisent aujourd'hui HTTPS. Ceci est particulièrement important pour bloquer les publicités sur des sites comme youtube.com, facebook.com, et x.com, où il est impossible de retirer les publicités sans filtrage HTTPS.

Lorsque le routage et le filtrage sont activés pour une application, les icônes situées sous chaque application apparaissent en vert.

Vous pouvez laisser les paramètres tels quels, désactiver à la fois le filtrage et le routage, ou les affiner manuellement pour chaque app. Vous pouvez également accéder aux statistiques de l'application.

![Statistiques de l'application](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Applications "sans problème" et "problématiques"

La plupart des applications fonctionnent correctement lorsqu'elles sont filtrées. Certaines applications sont considérées comme "problématiques" et peuvent ne pas fonctionner correctement lorsqu'elles sont acheminées par AdGuard. Il se peut qu'un avertissement de ce type apparaisse lorsque vous essayez d'acheminer ou de filtrer toutes les applications :

Pour garantir le bon fonctionnement de toutes les applications installées sur votre appareil, nous vous recommandons de n'acheminer que les applications qui ne posent pas de problème via AdGuard.
