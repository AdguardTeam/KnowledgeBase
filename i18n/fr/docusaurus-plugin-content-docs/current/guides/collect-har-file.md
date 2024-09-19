---
title: How to generate a HAR file
sidebar_position: 1
---

Les fichiers HAR aident nos équipes d'assistance technique à résoudre des problèmes complexes. Pour créer ces fichiers, nous vous recommandons d'utiliser Chrome ou Firefox. Cependant, IE 11, Edge et Safari offrent également une capacité de génération et d'exportation de fichiers `.har` .

## Chrome {#chrome}

Pour créer un fichier HAR dans Chrome, procédez comme suit :

1. Accédez à l'URL où le problème se produit. Ne reproduisez pas encore le problème.

1. Ouvrez les **Outils de développeur** :

    - Depuis le menu : **Menu → Plus d'outils → Outils de développeur**.
    - Clavier : **Ctrl+Shift+C**, ou **Ctrl+Alt+I**, ou **⌥+⌘+I pour Mac**.

1. Cliquez sur l'onglet **Réseau**.

1. Localisez le bouton rond en haut à gauche de l'onglet Réseau et confirmez qu'il est en mode d'enregistrement rouge. S'il est gris, cliquez-le pour qu'il devienne rouge pour démarrer l'enregistrement.

1. Utilisez le bouton **Effacer** (le bouton circulaire barré d'une ligne à côté du bouton d'enregistrement) pour effacer toutes les activités précédentes.

1. Cochez la case **Conserver le journal** dans l'onglet Réseau.

1. Cochez la case **Désactiver le cache** .

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduisez les étapes qui créent le problème.

1. Enregistrez la session comme un fichier .har avec un clic droit sur la grille et en sélectionnant **Enregistrer au format HAR avec le contenu**.

1. Envoyez-le au service d'assistance AdGuard (support@adguard.com) avec une explication détaillée du problème. Les captures d’écran complémentaires peuvent également être utiles.

## Edge {#edge}

1. Accédez à l'URL où le problème se produit. Ne reproduisez pas encore le problème.

1. Ouvrez les **Outils de développeur** :

    - Depuis le menu : **Menu → Plus d'outils → Outils de développeur**.
    - Clavier : **Ctrl+Shift+C**, ou **Ctrl+Alt+I**, ou **⌥+⌘+I pour Mac**.

1. Cliquez sur l'onglet **Réseau**.

1. Localisez le bouton rond en haut à gauche de l'onglet Réseau et confirmez qu'il est en mode d'enregistrement rouge. S'il est gris, cliquez-le pour qu'il devienne rouge pour démarrer l'enregistrement.

1. Utilisez le bouton **Effacer** (le bouton circulaire barré d'une ligne à côté du bouton d'enregistrement) pour effacer toutes les activités précédentes.

1. Cochez la case **Conserver le journal** dans l'onglet Réseau.

1. Cochez la case **Désactiver le cache** .

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduisez les étapes qui créent le problème.

1. Enregistrez la session comme un fichier .har avec un clic droit sur la grille et en sélectionnant **Enregistrer au format HAR avec le contenu**.

1. Envoyez-le au service d'assistance AdGuard (support@adguard.com) avec une explication détaillée du problème. Les captures d’écran complémentaires peuvent également être utiles.

## Firefox {#firefox}

Pour créer un fichier HAR dans Firefox, procédez comme suit :

1. Accédez à l'URL où le problème se produit. Ne reproduisez pas encore le problème.

1. Ouvrez les outils de développeur en mode **Réseau** :

    - Depuis le menu : **Menu → Développeur Web → Réseau**.
    - Clavier : **Ctrl+Shift+C**, ou **⌥+⌘+E (Mac)**.

1. Notez le bouton **Lecture/Pause** en haut à gauche de l'onglet Réseau.

    - Le bouton doit être en mode lecture.

1. Si des informations sont actuellement affichées dans la grille, effacez-les en cliquant sur le bouton **Vider la corbeille** à côté du bouton lecture/pause.

1. Cochez la case **Conserver les journaux** dans l'onglet Réseau.

1. Cochez la case **Désactiver le cache** .

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduisez les étapes qui créent le problème.

1. Enregistrez la session comme un fichier .har avec un clic droit sur la grille et en sélectionnant **Enregistrer tout au format HAR**.

1. Envoyez-le au service d'assistance AdGuard (support@adguard.com) avec une explication détaillée du problème. Les captures d’écran complémentaires peuvent également être utiles.

## Internet Explorer 11 {#ie11}

Pour créer un fichier HAR dans Internet Explorer 11, procédez comme suit :

1. Accédez à l'URL où le problème se produit. Ne reproduisez pas encore le problème.

1. Ouvrez les outils de développeur en mode **Réseau** :

    - Du menu de la roue dentée Outils : **Outils de développement** → onglet **Réseau**.
    - Clavier : **F12 → Onglet Réseau**.

1. Notez le bouton de démarrage de la session de profilage **Play** et le bouton d'arrêt du profilage **Stop** en haut à gauche de l'onglet Réseau.

    - Le bouton de lecture sera gris lors de l'enregistrement et le bouton d'arrêt sera rouge. Mettez en mode **Lecture** .

1. Effacez toutes les informations de session apparaissant dans la grille inférieure à l'aide du bouton **Effacer la session** de l'onglet Réseau. Passez la souris sur les icônes pour voir les noms.

    - **Le bouton Effacer la session** est une icône à trois lignes avec un x dessus.

1. Cochez la case **Désactiver le cache** .

1. Reproduisez les étapes qui créent le problème.

1. Enregistrez la session en tant que fichier .har en cliquant sur le bouton **Enregistrer sur le disque** (Exporter en tant que HAR) dans l'onglet Réseau.

1. Envoyez-le au service d'assistance AdGuard (support@adguard.com) avec une explication détaillée du problème. Les captures d’écran prises en charge peuvent également être utiles.

## Safari {#safari}

Pour créer un fichier HAR dans Safari, procédez comme suit :

1. Vérifiez la barre de menus Safari en haut de l'écran pour un menu **Développeur** .

    - S'il n'est pas visible, activez-le en allant dans **Safari → Paramètres → Avancé**.
    - Cochez la case en bas à côté de **Afficher le menu Développement dans la barre de menu**.

1. Accédez à l'URL où le problème se produit. Ne reproduisez pas encore le problème.

1. Ouvrez l'onglet **Réseau** dans Web Inspector :

    - Depuis le menu : **Développer → Afficher Web Inspector → Réseau**.
    - Clavier : **⌥+⌘+I → Réseau**

1. Cochez la case **Conserver le journal** sur le côté gauche des onglets Réseau, dans le menu **Autres options de filtre...** .

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Effacez les éléments réseau actuels en cliquant sur l'icône **Vider la corbeille** à l'extrême droite des onglets Réseau.

    - Clavier : **⌘+K**

1. Cochez la case **Désactiver les caches** .

1. Reproduisez les étapes qui créent le problème.

1. Enregistrez la session en tant que fichier .har en cliquant sur l'icône **Exporter** à côté de l'icône **Vider la corbeille** .

1. Envoyez-le au service d'assistance AdGuard (support@adguard.com) avec une explication détaillée du problème. Les captures d’écran complémentaires peuvent également être utiles.

## Android {#android}

Pour créer des fichiers HAR, procédez comme suit :

1. Ouvrez AdGuard et accédez à **Paramètres**.

1. Choisissez **Avancé** dans le menu.

1. Choisissez **Paramètres de bas niveau**

1. Activez `pref.har.capture` (il faudra relancer la protection).

1. Reproduisez maintenant le problème : ouvrez l'application, effectuez les actions nécessaires pour faire apparaître l'annonce.

1. Maintenant, désactivez à nouveau `pref.har.capture` .

1. Revenez en arrière et appuyez sur **Exporter les journaux et les informations système** → **Enregistrer**.

## Windows {#windows}

1. Ouvrez **Paramètres*** → **Paramètres généraux** → **Paramètres avancés** et faites défiler vers le bas.

1. Cochez la case **Activer l'écriture HAR** .

1. Reproduisez le problème.

1. Accédez à **Paramètres généraux** → Cliquez sur **Exporter les journaux** → **Enregistrer**.

1. Désactivez l’écriture HAR en décochant la case correspondante.
