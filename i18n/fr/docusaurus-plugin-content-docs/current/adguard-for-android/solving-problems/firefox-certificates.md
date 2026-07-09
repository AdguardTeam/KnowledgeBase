---
title: Installation manuelle du certificat de sécurité dans le navigateur Firefox
sidebar_position: 10
---

:::info

Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour qu’AdGuard puisse filtrer avec succès le trafic HTTPS dans Firefox, le navigateur doit faire confiance au certificat d’AdGuard. Cela peut être réalisé différemment pour différentes versions de Firefox.

### Méthode 1

:::note

Cette méthode fonctionne avec Firefox pour Android version 90.0 et suivantes.

:::

Pour que Firefox fasse confiance au certificat AdGuard, procédez comme suit :

1. Lancez le navigateur.

1. Allez dans **Paramètres** → **À propos de Firefox.**.

    ![A propos de Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Appuyez cinq fois sur le logo Firefox.

1. Naviguez vers **Paramètres** → **Paramètres secrets**.

    ![Paramètres secrets *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Basculez **Utiliser des certificats CA tiers**.

### Méthode 2

:::note

Cette méthode ne fonctionnera que sur les appareils **rootés** .

:::

1. [Installer et configurer](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB ; Sur la plateforme Windows, les propriétaires de **Samsung** peuvent avoir besoin d'installer [cet utilitaire.](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Activez le **mode développeur** et activez ensuite **le débogage USB** :

    - Ouvrez l'application **Paramètres** sur votre téléphone ;
    - Accédez à la section **Système** (dernier élément du menu des paramètres). Dans cette section, trouvez le sous-élément **À propos du téléphone** ;
    - Cliquez 7 fois sur la ligne **Numéro de version**. Ensuite, vous recevrez une notification indiquant **Vous êtes maintenant un développeur** (Si nécessaire, saisissez un code de déverrouillage pour l'appareil) ;
    - Ouvrez **Paramètres système** → **Options du développeur** → Faites défiler vers le bas et activez **Débogage USB** → Confirmez que le débogage est activé dans la fenêtre **Autoriser le débogage USB** après avoir lu attentivement l'avertissement.

1. Installez le navigateur [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (version finale) ;

1. Ouvrez les **paramètres d'AdGuard** (icône d'engrenage dans le coin inférieur droit) → **Filtrage** → **Réseau** → **Filtrage HTTPS** → **Certificat de sécurité** → **Instructions pour Firefox** → **Installer pour les anciennes versions**;

1. Ouvrez le dossier `data/data/org.mozilla.firefox/files/mozilla` en utilisant `adb shell su` et `cd data/data/...`, puis naviguez jusqu'au dossier nommé `xxxxxxx.default` et mémorisez son nom ;

1. Dans le dossier spécifié, nous nous intéressons à deux fichiers :

    - `cert9.db`
    - `key4.db`

1. Nous devons déplacer ces fichiers dans un dossier du navigateur où le problème du certificat de sécurité s'est produit :

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. La commande complète se présente comme suit :

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Si vous avez reçu la notification du système indiquant que **l'autorisation est refusée**, vous devez d'abord déplacer les fichiers spécifiés vers le répertoire sans autorisation. Ensuite, vous devez les déplacer dans le dossier nécessaire dans votre navigateur Firefox.

    La commande complète doit ressembler à ceci :

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyyyy.default`

    Si `adb shell su` ne fonctionne pas, essayez d'abord `adb shell`, puis `su`
