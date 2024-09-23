---
title: Installation manuelle du certificat
sidebar_position: 1
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pour Mac doit installer le certificat racine dans le stockage des certificats pour pouvoir [filtrer le trafic HTTPS](/general/https-filtering/what-is-https-filtering). Cette action est effectuée automatiquement dans la plupart des cas quand vous exécutez l'application pour la première fois, mais les utilisateurs de navigateurs basés sur Gecko (Firefox, Waterfox, etc.) qui ont un mot de passe principal configuré pour leur navigateur peuvent être tenus de prendre des mesures supplémentaires (car ces navigateurs utilisent leur propre stockage de certificats au lieu de celui du système). Ils doivent soit saisir le mot de passe principal lorsqu'ils y sont invités (pour accorder à AdGuard l'accès au stockage du certificat), soit installer manuellement le certificat.

Pour installer manuellement le certificat dans un navigateur de type Firefox :

  1. Ouvrez les *Préférences*

  2. Allez sur *Confidentialité & Sécurité* → *Certificats*

  3. Cliquez sur *Afficher les certificats*

  4. Accédez à l'onglet *Autorités* et cliquez sur le bouton *Importer...*

  5. Sélectionnez le fichier `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` ou téléchargez-le simplement depuis http://local.adguard.org /cert en utilisant un navigateur basé sur Chromium (par exemple Google Chrome ou le nouveau Edge) et avec un filtrage HTTPS exécuté dans AdGuard

Les actions exactes requises pour les différents navigateurs basés sur Gecko peuvent varier, mais la séquence générale et le chemin d'accès au fichier `AdGuard Personal CA.cer` seront les mêmes.
