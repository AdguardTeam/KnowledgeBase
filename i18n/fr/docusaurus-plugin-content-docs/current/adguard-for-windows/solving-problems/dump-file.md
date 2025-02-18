---
title: Comment créer un fichier de vidage
sidebar_position: 8
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Les données et/ou les fichiers fournis dans les fichiers de vidage sont traités conformément à [la Politique de confidentialité d'AdGuard](https://adguard.com/en/privacy.html).

:::

Pour diagnostiquer les raisons des problèmes potentiels que les utilisateurs pourraient rencontrer en utilisant AdGuard, l'équipe d'assistance pourrait avoir besoin du fichier de vidage du processus. Ce fichier de vidage aide les développeurs à voir les processus qui ont été exécutés dans l'application pendant une période donnée. Ci-dessous, vous pouvez consulter les instructions sur la façon de collecter le fichier de vidage sur votre PC.

1. Appuyez sur **Ctrl + Shift + Esc** et cliquez sur **Gestionnaire des tâches.**

1. Dans la barre de menu supérieure, sélectionnez **Détails**

    ![Détails du gestionnaire de tâches](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Cliquez avec le bouton droit sur le processus pour lequel vous souhaitez créer le fichier de vidage (par exemple, l'équipe d'assistance peut vous demander de créer un vidage pour `Adguard.exe`)

1. Dans le menu déroulant, cliquez sur **Créer un fichier de vidage**

1. Le fichier a été créé !

    ![Créer un fichier de vidage](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Après avoir créé le fichier de vidage, veuillez naviguer vers l'emplacement du fichier. Vous devriez être invité à ouvrir le dossier contenant le fichier de vidage juste après sa création. Sinon, vous pourrez le trouver dans le dossier **%tmp%**. Le fichier de vidage créé (`.DMP`) a le même nom que le nom du processus que vous avez choisi dans les étapes précédentes. Le fichier est assez volumineux, donc veuillez le compresser en une archive avant de l'envoyer à l'assistance.

:::note

AdGuard pour Windows a deux processus en cours d'exécution, `Adguard.exe` et `AdguardSvc.exe`. Il est donc nécessaire de créer un fichier de vidage séparé pour chaque processus.

:::

![Processus AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Lorsque vous envoyez les fichiers de vidage à l'équipe d'assistance, veuillez également joindre les journaux de l'application AdGuard afin que nous ayons une meilleure chance de résoudre le problème. [Ici](../adguard-logs), vous pouvez consulter les instructions sur comment obtenir le fichier des journaux.
