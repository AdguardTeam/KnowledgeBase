---
title: La protection ne peut pas être activée
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Si la protection AdGuard ne peut pas être activée pour une raison quelconque, procédez comme suit :

1. Cliquez sur l'icône AdGuard dans la barre de menu et accédez à *Avancé* → *Réinitialiser les paramètres...* → *Quitter AdGuard...*

2. Dans la recherche Spotlight, tapez Terminal, saisissez `sudo rm -R /Library/Application\ Support/com.adguard.adguard` et exécutez.

3. Redémarrez votre PC.

4. Ouvrez à nouveau le Terminal, tapez `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` et exécutez. Vous devriez recevoir ce qui suit : `Aucun fichier ou répertoire de ce type`.

5. Démarrez AdGuard et saisissez vos informations de connexion lorsque vous y êtes invité.
