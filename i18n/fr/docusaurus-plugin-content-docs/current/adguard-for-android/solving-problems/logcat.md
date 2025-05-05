---
title: Comment obtenir les journaux système
sidebar_position: 4
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

::note

Les données et/ou les fichiers fournis dans les journaux sont traités conformément à [la Politique de confidentialité d'AdGuard](https://adguard.com/en/privacy.html).

:::

Parfois, un journal régulier peut ne pas être suffisant pour identifier l'origine du problème. Dans de tels cas, un journal système est nécessaire. Vous trouverez ci-dessous des instructions sur la façon de le collecter et de l'obtenir : via les options du développeur et Logcat.

:::note

AdGuard s'engage à protéger votre vie privée. Nous suivons strictement notre [Politique de confidentialité](https://adguard.com/privacy/android.html) et ne collectons aucune information privée sur les utilisateurs. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::

## Saisir un rapport de bogue à partir d'un appareil

Pour obtenir un rapport de bogue directement depuis votre appareil, procédez comme suit :

1. Assurez-vous que les [options de développement](https://developer.android.com/studio/run/device.html#developer-device-options) sont activées.

1. Dans **Options du développeur**, appuyez sur **Saisir un rapport de bogue**.

    ![Rapport de bogue *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Sélectionnez le type de bogue que vous souhaitez signaler et appuyez sur **Signaler**.

    :::note

    Après un moment, vous verrez une notification que le rapport de bogue est prêt (voir la Figure 2).


:::

    ![Rapport de bogue *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Pour partager le rapport de bogue, appuyez sur la notification.

    ![Rapport de bogue *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Envoyez ce journal à notre équipe d'assistance.

    :::note

    Notre équipe d'assistance traitera votre ticket beaucoup plus rapidement si vous spécifiez le numéro de ticket HelpDesk ou le numéro de problème GitHub dans votre message au support.


:::

## Saisir un rapport de bogue via Logcat

Sur les appareils équipés d'Android 7 et versions antérieures, il n'est pas possible d'envoyer un rapport de bogue automatiquement. Vous pouvez alors le saisir manuellement via Logcat — un outil en ligne de commande Android standard qui affiche un journal des messages système.

Suivez cette instruction :

### Partie #1 : préparez l'appareil

1. Basculez l'appareil en mode développeur. Pour faire ça : accédez aux **Paramètres** → **À propos** → appuyez sur **Numéro de build** 7 fois.

1. Allez dans les **Options pour développeurs**.

1. Activez le **Débogage USB**.

1. Augmentez la taille du **Tampon de journal** à 4 Mo par tampon de journal.

4 Mo devrait suffire pour stocker les journaux dont nous avons besoin jusqu'à ce que vous puissiez effectuer la deuxième partie (saisir le journal de l'appareil) ;

### Partie #2 : reproduisez le problème

Il est important de reproduire le problème après avoir terminé la première partie.

1. Reproduisez le problème.

1. N'oubliez pas/notez la date et l'heure de reproduction et incluez-les dans l'e-mail envoyé à notre support ultérieurement.

### Partie #3 : saisissez le journal

1. Connectez votre appareil à un PC avec un câble USB.

1. Téléchargez [les outils de plateforme Android SDK](https://developer.android.com/studio/releases/platform-tools#downloads). Choisissez le lien de téléchargement approprié pour votre OS dans la section Téléchargements. Une fois que vous appuyez sur le lien, un fichier ZIP sera téléchargé. Vous pouvez extraire les fichiers ADB (Android Debug Bridge) du fichier ZIP et les stocker où vous le souhaitez.

1. Testez si ADB fonctionne correctement : connectez votre appareil Android à votre ordinateur à l'aide d'un câble USB, ouvrez l'invite de commandes, PowerShell ou Terminal et exécutez la commande suivante :

    `adb devices`

    Un exemple de résultat réussi :

    ![Étape 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Ensuite, exécutez la commande suivante (insérez le chemin pertinent) :

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Envoyez par e-mail le fichier `txt` créé avec l'heure quand le problème a été reproduit (à partir de la partie #2) à notre équipe d'assistance à l'adresse <support@adguard.com>.

### Méthode alternative pour les utilisateurs ROOT

1. Téléchargez et exécutez [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Choisissez **Enregistrement** dans le menu. Choisissez un nom pour un fichier journal ou appuyez simplement sur **OK**. Vous pouvez maintenant appuyer sur le bouton **Accueil**, CatLog continuera à journaliser en arrière-plan.

1. Reproduisez le problème.

1. Ouvrez CatLog et appuyez sur **Arrêter l'enregistrement** dans le menu.

1. Envoyez ce journal à notre équipe d'assistance.

:::note

Notre équipe d'assistance traitera votre ticket beaucoup plus rapidement si vous spécifiez le numéro de ticket HelpDesk ou le numéro de problème GitHub dans votre message au support.

:::
