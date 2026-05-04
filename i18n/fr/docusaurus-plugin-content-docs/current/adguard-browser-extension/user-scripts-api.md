---
title: API des scripts utilisateur
sidebar_position: 8
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://adguard.com/download.html?auto=true).

:::

Lors de l'ajout d'un filtre ou d'une règle utilisateur personnalisée, une notification apparaîtra vous demandant d'activer le mode Développeur pour utiliser ces fonctionnalités dans l'extension.

![Notification \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

À partir de la version 5.2, l'extension de navigateur AdGuard utilise l'API des scripts utilisateur. Chrome exige que cette nouvelle API respecte les meilleures pratiques en matière de sécurité des utilisateurs.

## Qu'est-ce que l'API des scripts utilisateur ?

L'API des scripts utilisateur est un outil qui autorise les extensions à exécuter des scripts JavaScript personnalisés sur les pages web. Ils sont souvent utilisés pour modifier ou améliorer les sites web d'une manière qui n'est pas prévue à l'origine par le site lui-même.

Avec le passage à la version V3 du manifeste de Chrome, de nombreuses anciennes méthodes d'injection de scripts sont limitées ou retardées. Il existe toutefois une exception pour l'API des scripts utilisateur.

Apprenez plus sur les impacts des politiques MV3 dans notre [article de blog](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Comment activer le mode développeur

Pour utiliser les filtres personnalisés et les règles JavaScript dans l'onglet _Règles de l'utilisateur_, vous devez d'abord configurer votre navigateur. Cela offrira à l’extension une méthode fiable et sécurisée pour injecter des scripts dans les pages Web au moment optimal. Suivez les instructions ci-dessous en fonction de votre version de Chrome.

### Pour les versions de Chrome antérieures à 138

Vous devez activer le mode développeur pour les extensions. Pour ce faire, ouvrez le menu Chrome en cliquant sur les trois points dans le coin supérieur droit, allez dans _Extensions_ ⭢ _Gestion des extensions_, et basculez l'interrupteur _Mode développeur_.

![Gérer les extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Pour les versions de Chrome ultérieures à la 138

Vous devez activer l'option _Autoriser les scripts utilisateur_. Pour ça, ouvrez le menu Chrome en cliquant sur les trois points dans le coin supérieur droit, allez dans _Extensions_ ⭢ _Gestion des extensions_, allez dans _Détails_ de l'Extension de navigateur AdGuard, et basculez le commutateur _Autoriser les scripts utilisateur_.

![Gérer les extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
