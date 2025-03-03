---
title: Comment collecter les journaux système Windows
sidebar_position: 5
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Les données et/ou les fichiers fournis dans les journaux système sont traités conformément à [la Politique de confidentialité d'AdGuard](https://adguard.com/en/privacy.html).

:::

Pour analyser et diagnostiquer les différents problèmes susceptibles de survenir, le service d'assistance d'AdGuard peut avoir besoin des fichiers journaux du système Windows. Les journaux d'événements Windows contiennent des enregistrements de toutes les erreurs qui se produisent avec le logiciel installé, y compris AdGuard. Vous trouverez ci-dessous de brèves instructions décrivant comment obtenir les fichiers journaux et les envoyer à notre service d'assistance si nécessaire.

1. Appuyez sur *Win + R*

1. Dans la fenêtre qui apparaît, tapez `eventvwr` et cliquez sur *OK* :

    ![Exécuter la fenêtre *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. La fenêtre de l'Event Viewer apparaît comme indiqué dans l'image.

    ![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Pour enregistrer les fichiers dont nous avons besoin, faites ce qui suit :

    - Ouvrir *Application*: *Event Viewer (local)* → *Journaux Windows* → *Application*.

    - Faites un clic droit sur *Application* et dans le menu déroulant, sélectionnez *Enregistrer tous les événements sous...*

    - Sélectionnez un nom et un emplacement pour enregistrer, puis cliquez sur *Enregistrer.*. Sélectionnez *Afficher les informations pour les langues suivantes*. Vous devez cocher la case à cocher à côté de *Anglais*. Cliquez sur *OK*.

    - Ouvrir *Système* : *Event Viewer (Local)* → *Journaux Windows* → *Système*.

    - Faites un clic droit sur *Système* et dans le menu déroulant, sélectionnez *Enregistrer tous les événements sous...*

    - Choisissez un dossier de destination, saisissez le nom, cliquez sur *Enregistrer*. Sélectionnez *Afficher les informations pour les langues suivantes*. Vous devez cocher la case à cocher à côté de *Anglais*. Cliquez sur *OK*.

Veuillez envoyer les deux fichiers que vous avez récemment enregistrés à **support@adguard.com**.

:::note

AdGuard s'engage à protéger votre vie privée. Nous suivons strictement notre [Politique de confidentialité](https://adguard.com/privacy/windows.html) et ne collectons aucune information privée sur les utilisateurs. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::
