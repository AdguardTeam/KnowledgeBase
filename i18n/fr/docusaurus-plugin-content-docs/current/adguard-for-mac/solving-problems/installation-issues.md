---
title: Résolution des problèmes d'installation
sidebar_position: 5
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Erreur "Échec d'installation" dans macOS Catalina

Lors de l'installation, vous pouvez rencontrer une erreur comme celle-ci :

![Écran d'erreur d'installation](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Suivez ces instructions pour résoudre le problème :

1. Redémarrez votre Mac
2. Lorsque votre Mac redémarre, appuyez et maintenez enfoncées les touches *Commande(⌘) + R* immédiatement après avoir entendu le carillon de démarrage. Maintenez les touches enfoncées jusqu'à ce que le logo Apple apparaisse pour mettre l'ordinateur en mode de récupération.
3. Dans la barre supérieure, sélectionnez *Utilitaires* → *Terminal*et exécutez cette commande : `csrutil disable`
4. Redémarrez le Mac et connectez-vous au profil administrateur
5. Ouvrez la fenêtre du Finder et sélectionnez dans la barre supérieure *Allez à* → *Allez dans le dossier* et tapez `~/private/`
6. Créez un dossier nommé *tmp* et saisissez votre mot de passe
7. Lancez l'installation d'AdGuard

Une fois l’installation terminée, redémarrez votre Mac en mode de récupération en suivant les instructions ci-dessus et exécutez `csrutil enable` dans le Terminal pour activer la protection du système.
