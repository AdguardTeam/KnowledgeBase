---
title: Comment corriger l'erreur `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 11
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Certains utilisateurs d'AdGuard pour Windows avec le [filtrage HTTPS](/general/https-filtering/what-is-https-filtering) activé ne peuvent pas accéder à certains sites Web comme google.com et youtube.com. Au lieu d'ouvrir un site Web, les navigateurs avec une validation stricte des certificats afficheraient une erreur `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Voici une liste des navigateurs impactés :

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Si votre navigateur par défaut est l'un de ceux-ci, procédez comme suit pour résoudre le problème :

1. Tapez `about:config` dans la barre d'adresse de votre navigateur
2. Dans le menu qui apparaît, saisissez `security.cert_pinning.enforcement_level` dans le champ de recherche.
3. Modifiez le paramètre `security.cert_pinning.enforcement_level` de 2 à 1.
