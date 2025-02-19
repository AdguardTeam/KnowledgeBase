---
title: Comment collecter les journaux AdGuard
sidebar_position: 3
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

::note

Les données et/ou les fichiers fournis dans les journaux sont traités conformément à [la Politique de confidentialité d'AdGuard](https://adguard.com/en/privacy.html).

:::

Pour analyser et diagnostiquer les différents problèmes susceptibles de survenir, le service d'assistance d'AdGuard peut avoir besoin des fichiers journaux d'AdGuard. Ces fichiers contiennent des enregistrements d'erreurs et d'autres événements qui se produisent avec le logiciel. Vous trouverez ci-dessous de brèves instructions décrivant comment obtenir les fichiers journaux et les envoyer à notre service d'assistance si nécessaire.

:::note

AdGuard s'engage à protéger votre vie privée. Nous suivons strictement notre [Politique de confidentialité](https://adguard.com/privacy/windows.html) et ne collectons aucune information privée sur les utilisateurs. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::

### Journaux de débogage {#debug-logs}

1. Ouvrez les paramètres d'AdGuard. Accédez à la section *Paramètres généraux* , faites défiler vers le bas de l'écran et basculez le *Niveau de journalisation* sur *Débogage*.

    ![Niveau de journalisation du débogage *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduisez le problème.

    Nous vous conseillons vivement de noter l'heure exacte à laquelle vous avez reproduit le problème : cela aidera notre équipe d'assistance à trouver les entrées de journal pertinentes et à résoudre le problème plus rapidement.

1. Exportez les journaux collectés en utilisant le bouton *Exporter les journaux*.

    ![Exportation des journaux *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Enregistrez l'archive dans n'importe quel dossier.

1. **Important**: après avoir exporté les journaux, rétablissez le niveau de journalisation à *Par défaut*. Le niveau de journalisation *débogage* ralentira l'application.

1. Envoyez l'archive au service d'assistance AdGuard à **support@adguard.com**, décrivez le problème et n'oubliez pas de mentionner l'heure à laquelle vous avez reproduit le problème.

### Journaux de trace {#trace-logs}

Parfois, les membres de l'équipe d'assistance peuvent vous demander d'envoyer des journaux de *trace*. Ensuite, vous devrez faire ce qui suit :

1. Arrêtez AdGuard en faisant un clic droit sur l'icône AdGuard dans le menu de la barre d'état et en choisissant *Quitter AdGuard*:

    ![Quitter AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Veuillez ne pas laisser le service en cours d'exécution :

    ![Arrêter le service AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Ouvrez la console (tapez `cmd` dans le panneau de démarrage).

1. Exécutez l'application avec la commande `C:\"Program Files"\Adguard\Adguard.exe /trace` peu importe l'architecture de Windows si vous avez installé AdGuard v7.16 pour Windows ou une version ultérieure.

Si vous avez une version plus ancienne d'AdGuard pour Windows, exécutez l'application avec la commande C:\"Program Files (x86)"\Adguard\Adguard.exe /trace si vous utilisez Windows 64 bits, et C:\"Program Files"\Adguard\Adguard.exe /trace si vous utilisez Windows 32 bits.

1. Reproduisez le problème.

    Nous vous conseillons vivement de noter l'heure exacte à laquelle vous avez reproduit le problème : cela aidera notre équipe d'assistance à trouver les entrées de journal pertinentes et à résoudre le problème plus rapidement.

1. Exportez les journaux collectés en utilisant le bouton *Exporter les journaux*.

    ![Exporter les journaux *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Ne vous inquiétez pas si le fichier de journal est volumineux. Nous avons besoin de connaître autant de détails que possible pour résoudre votre problème.
