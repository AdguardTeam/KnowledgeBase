---
title: Comment créer un fichier minidump pour corriger l'erreur BSoD
sidebar_position: 8
---

Presque tous les utilisateurs de Windows connaissent malheureusement l'erreur [Blue Screen of Death (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death). BSoD se produit lorsque le système Windows rencontre des problèmes pouvant affecter le fonctionnement sûr du système, tels que des problèmes avec le code de pilote tiers, le matériel ou le code Microsoft. Pour résoudre l'erreur d'écran bleu, les utilisateurs peuvent utiliser un fichier minidump.

## Qu’est-ce qu’un fichier Minidump ?

Un fichier minidump est un fichier contenant des informations sur la nature de la panne du système. Il est créé juste avant l'apparition de l'écran bleu et contient le minimum d'informations utiles pouvant être utilisées pour résoudre le problème. Le fichier minidump a généralement une extension *.dmp* .

:::note
Sous Windows 10, l'écran bleu affiche un code d'arrêt et un code QR. L'utilisateur peut utiliser ces informations et rechercher le problème spécifique sur le web.

:::

L'option de création du fichier minidump est désactivée par défaut. Avant d'entrer dans les détails de l'utilisation du fichier, examinons de plus près comment l'activer.

## Configurer Windows pour créer le fichier Minidump

Même si vous ne rencontrez aucune erreur de crash BSoD, vous pouvez toujours définir cette option. Il s'agit d'une recommandation générale, pas nécessairement liée aux produits AdGuard. Veuillez suivre les instructions ci-dessous pour créer automatiquement le fichier minidump.

 1. Tapez *sysdm.cpl* dans la barre de recherche Windows et cliquez sur **Ouvrir**. Le **Menu du Panneau de configuration des propriétés système** s'affichera à l'écran.

    :::tip

    Vous pouvez également cliquer sur **Paramètres** →  **Système** →  **À propos** →  **Paramètres système avancés**.


:::

    ![Propriétés système *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Accédez à l'onglet **Avancés** .
 1. Dans la section **Démarrage et récupération** , cliquez sur **Paramètres**.

    ![Démarrage et récupération *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Activez les trois options suivantes :

    - Écrire un événement dans le journal système
    - Redémarrer automatiquement
    - Écriture des informations de débogage → Petit dump mémoire (256 Ko)

    ![Trois options *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Cliquez sur **OK** pour appliquer les paramètres.
 1. Redémarrez le PC.

Vous avez activé le fichier minidump. Désormais, il sera créé automatiquement en cas de panne du système.

:::note

Par défaut, le fichier minidump est stocké dans le dossier **%SystemRoot%\Minidump** . Vous pouvez modifier l'emplacement du répertoire comme vous le souhaitez, mais n'oubliez pas que de nombreux programmes sont configurés pour rechercher cet emplacement par défaut, nous vous recommandons donc de ne pas modifier l'emplacement.

:::
