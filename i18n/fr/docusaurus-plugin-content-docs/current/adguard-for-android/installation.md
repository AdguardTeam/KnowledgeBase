---
title: Installation
sidebar_position: 2
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicités multifonctionnel qui protège votre appareil au niveau système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Configuration requise

**Version du système d'exploitation :** Android 9.0 ou supérieur

**RAM :** au moins 2 Go

**Espace disque libre :** 500 Mo

## Installation

La plupart des applications basées sur Android sont distribuées via Google Play ; toutefois, AdGuard n'y est pas présenté, car Google interdit la distribution de bloqueurs d'annonces au niveau du réseau via Google Play, donc des applications qui bloquent les annonces dans d'autres applications. Vous trouverez plus d'informations sur la politique restrictive de Google [dans notre blog](https://adguard.com/blog/adguard-google-play-removal.html).

C'est pourquoi vous ne pouvez installer AdGuard pour Android que manuellement. Pour utiliser l'app sur votre appareil mobile, vous devrez faire ce qui suit.

1. **Téléchargez l'application sur votre appareil**. Voici quelques façons de procéder :

    - rendez-vous sur [notre site Web](https://adguard.com/adguard-android/overview.html) et appuyez sur le bouton *Télécharger*
    - démarrez le navigateur et saisissez l'URL suivante : [https://adguard.com/apk](https://adguard.com/apk)
    - ou scannez ce code QR :

    ![Code QR *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Autorisez l'installation d'applications à partir de sources inconnues**. Une fois le téléchargement du fichier terminé, appuyez sur *Ouvrir* dans la notification.

    ![Installation d'applications à partir de sources inconnues *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Un popup va apparaître. Appuyez sur *Paramètres*, naviguez vers *Installer des applications inconnues* et accordez l'autorisation pour le navigateur que vous avez utilisé pour télécharger le fichier.

    ![Installation d'applications à partir de sources inconnues *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Installez l'application**. Une fois que le navigateur a obtenu les autorisations nécessaires, le système vous demandera si vous souhaitez installer l'application AdGuard. Cliquez sur *Installer*.

    ![Installation d'applications à partir de sources inconnues *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Vous serez ensuite invité à lire le *Contrat de licence* et la *Politique de confidentialité*d'AdGuard. Vous pouvez également participer au développement du produit. Pour cela, cochez les cases pour *Envoyer des rapports de plantage automatiques* et *Envoyer des données techniques et d'interaction*. Cliquez ensuite sur *Continuer*.

    ![Politique de confidentialité *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Créez un VPN local**. Pour filtrer tout le trafic directement sur votre appareil et de ne pas l'acheminer via un serveur distant, AdGuard doit établir une connexion VPN.

    ![Créer un VPN local *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Activez le filtrage HTTPS**. Ce n'est pas une option obligatoire, cependant, nous vous conseillons de l'activer pour une meilleure qualité de blocage des publicités.

    Si votre appareil fonctionne sous Android 7–9, vous serez invité à installer un certificat racine et à configurer le filtrage HTTPS après la configuration du VPN local.

    ![Activer le filtrage HTTPS sur Android 7–9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Après avoir tapé *Installer maintenant*, une invite apparaîtra vous demandant d'authentifier l'installation du certificat avec un mot de passe ou une empreinte digitale.

    ![Activer le filtrage HTTPS sur Android 7–9. Étape 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Si vous avez Android 10+ sur votre appareil, après avoir créé un VPN local, vous verrez l'écran principal de l'application avec une barre de notification en bas vous suggérant d'activer le filtrage HTTPS : appuyez sur *Activer* et suivez les instructions à l'écran suivant ou consultez [l'article sur l'installation du certificat](solving-problems/manual-certificate.md) pour plus d'informations.

    ![Activer le filtrage HTTPS *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Désinstallation/Réinstallation d'AdGuard

Si vous devez désinstaller AdGuard sur votre appareil mobile, ouvrez *Paramètres* et choisissez *Applications* (Android 7) ou *Applications & notifications* (Android 8+). Trouvez AdGuard dans la liste des applications installées et appuyez sur *Désinstaller*.

![Réinstaller AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Pour réinstaller AdGuard, il suffit de télécharger le fichier apk à nouveau et de suivre les étapes décrites dans la section Installation. Aucune désinstallation préalable n'est nécessaire.
