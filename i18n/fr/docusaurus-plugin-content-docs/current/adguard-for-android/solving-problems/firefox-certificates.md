---
title: Installation manuelle du certificat de sécurité dans le navigateur Firefox
sidebar_position: 11
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
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

1. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);

1. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;

1. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;

1. In the specified folder we are interested in two files:

    - `cert9.db`
    - `key4.db`

1. We need to move these files to a folder of the browser where the security certificate issue occurred:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. The full command will look like this:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.

    The full command should look something like this:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyyyy.default`

    Si `adb shell su` ne fonctionne pas, essayez d'abord `adb shell`, puis `su`
