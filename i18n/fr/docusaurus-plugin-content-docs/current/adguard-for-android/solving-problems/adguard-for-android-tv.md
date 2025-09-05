---
title: Comment installer AdGuard pour Android TV
sidebar_position: 15
---

:::info

Cet article concerne AdGuard pour Android TV, un bloqueur de publicité qui protège votre TV au niveau système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard TV](https://agrd.io/tvapk)

:::

Dans la plupart des cas, les navigateurs par défaut ne permettent pas d'installer un fichier sur votre TV, mais vous pouvez télécharger un navigateur depuis le Google Play Store qui a cette fonctionnalité. Dans notre guide, nous allons passer par un exemple d'installation en utilisant le navigateur TV Bro, mais il existe d'autres options, et vous pouvez choisir celle qui correspond le mieux à vos besoins. En alternative, vous pouvez utiliser l'application [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Installation de AdGuard pour Android TV via un navigateur

1. Installez le [navigateur TV Bro](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) sur votre Android TV.

2. Téléchargez et installez AdGuard pour Android TV :

- Ouvrez le navigateur TV Bro installé sur votre Android TV.
- Dans la barre d'adresse du navigateur, tapez `https://agrd.io/tvapk` et appuyez sur _Entrée_ ou suivez le lien.
- Le navigateur commencera à télécharger automatiquement le fichier d'installation d'AdGuard pour Android TV.
- Une fois le téléchargement terminé, sélectionnez _Téléchargements_ dans la barre de contrôle du navigateur, puis sélectionnez le fichier téléchargé.
- Dans un message d'avertissement, autorisez l'installation de fichiers depuis le navigateur.
- Retournez dans votre navigateur, ouvrez _Téléchargements_, et cliquez sur le fichier téléchargé.
- Dans la fenêtre système qui apparaît, cliquez sur _Installer_, puis _Terminé_ ou _Ouvrir_.

C'est fait, AdGuard pour Android TV est installé.

1. Lancez AdGuard pour Android TV :

- Après l'installation, trouvez l'application AdGuard dans la liste des applications installées sur votre Android TV.
- Cliquez sur l'icône AdGuard pour lancer l'application.
- Suivez les instructions à l'écran pour terminer la configuration.

## Installation d'AdGuard pour Android TV via ADB

1. Assurez-vous que Android Debug Bridge (ADB) est installé sur votre ordinateur. Si ce n'est pas le cas, vous pouvez suivre les instructions sur XDA Developers : [Guide d'installation ADB](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Téléchargez [AdGuard pour Android TV](https://agrd.io/tvapk).

3. Dans les paramètres de votre TV, allez dans _Système_ → _À propos_ et appuyez sept fois sur le numéro de build pour déverrouiller les options pour les développeurs. Activez le _Débogage USB_.

4. Notez l'adresse IP de votre Android TV :

   - Sur votre Android TV, allez dans les Paramètres.
   - Sélectionnez _Système_ → _À propos_.
   - Trouvez _Réseau_ et sélectionnez _Wi-Fi_ ou _Ethernet_, en fonction de votre type de connexion.
   - Allez dans la section réseau et trouvez _Adresse IP_. Notez cette adresse IP.

5. Connectez-vous à l'Android TV via ADB :

   - Ouvrez le terminal ou l'invite de commande sur votre ordinateur.
   - Saisissez la commande `adb connect` et collez l'adresse IP de votre TV.
   - La connexion sera établie.

6. Installez AdGuard pour Android TV via ADB :

   - Dans le terminal, saisissez la commande `adb install Downloads/adguard_tv.apk`. Si nécessaire, remplacez `Downloads/adguard_tv.apk` par votre chemin d'accès.
   - Attendez un message dans le terminal indiquant l'installation réussie de l'application.
