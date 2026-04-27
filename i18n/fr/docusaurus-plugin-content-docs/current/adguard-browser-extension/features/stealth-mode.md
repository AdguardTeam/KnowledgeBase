---
title: Protection contre le suivi (anciennement Mode furtif)
sidebar_position: 3
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Le but de la _Protection contre le suivi_ est de protéger vos données personnelles sensibles contre les traqueurs en ligne et les fraudeurs. Il existe de légères différences dans les fonctionnalités de protection contre le suivi entre les navigateurs basés sur Chromium, qui prennent en charge MV3, et les navigateurs non basés sur Chromium, qui prennent en charge MV2.

![Protection contre le suivi dans les navigateurs basés sur Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv3_trackingProtection.png)

_Protection contre le suivi_ dans les navigateurs basés sur Chromium

![Protection contre le suivi dans les navigateurs non basés sur Chromium \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

La _Protection contre le suivi_ dans les navigateurs non basés sur Chromium

Les fonctionnalités de _Protection contre le suivi_ empêchent aux sites Web de voir la requête que vous avez fait pour les trouver sur Internet, suppriment automatiquement les cookies tiers et les cookies du site, et plus encore. Un [article séparé](/general/stealth-mode) est consacré à toutes ces fonctionnalités.

:::note

Les extensions de navigateur sont limitées à un navigateur spécifique et sont soumises à ses restrictions techniques. Elles ne peuvent donc pas offrir toutes les fonctionnalités de protection contre le suivi disponibles dans les applications de blocage des publicités à part entière.

:::

:::caution

Dans l'extension de navigateur AdGuard, l'option _Bloquer WebRTC_ fonctionne globalement — elle bloque ou autorise WebRTC pour tous les sites Web. Elle ne peut pas être contrôlée par site. Les règles d'exception comme `@@||example.com^$stealth=webrtc` n'ont aucun effet dans l'extension du navigateur car l'option `webrtc` ne fait pas partie des [options de modification `$stealth` prises en charge](/general/ad-filtering/create-own-filters#stealth-modifier). Si vous avez besoin d'un contrôle WebRTC par site, utilisez l'application AdGuard complète pour Windows, Mac ou Android.

:::
