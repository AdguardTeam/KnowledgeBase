---
title: Problèmes causés par des profils d'utilisateurs multiples
sidebar_position: 9
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problèmes causés par des profils d'utilisateurs multiples

Sur Android 9 et les versions ultérieures, si AdGuard est installé pour plus d'un profil d'utilisateur sur votre appareil, vous pouvez rencontrer des problèmes lors de la désinstallation de l'application. Lorsque vous désinstallez AdGuard d'un profil d'utilisateur, l'application apparaîtra toujours dans la liste des applications, mais vous ne pourrez pas la désinstaller ou la réinstaller. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

Pour résoudre ce problème, vous devez désinstaller l'application pour tous les utilisateurs : allez dans Paramètres → Toutes les applications → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problèmes causés par l'utilisation d'un profil sous le Mode restreint

Les propriétaires de téléphones, tablettes ou TV sous le système d'exploitation Android 7+ peuvent être confrontés au problème causé par l'utilisation d'**un profil en Mode restreint**. Si vous avez un tel profil, **AdGuard**, comme les autres applications qui utilisent le VPN, obtient des restrictions sur la gestion sélective du trafic VPN. Par conséquent, AdGuard ne peut pas lancer de protection en **mode VPN local**. En outre, l'utilisation du profil **Dual App/Dual Messenger** sur votre appareil peut causer cette situation. Vous trouverez ci-dessous les recommandations que vous pouvez appliquer lorsque ce problème se produit.

### Solutions

Il existe trois façons de résoudre le problème :

### Option 1 : Accorder des autorisations à AdGuard en utilisant ADB

:::note

Cette approche est disponible à partir de **AdGuard v3.5 nightly 6**. Si vous utilisez une version plus ancienne, vous pouvez obtenir la dernière mise à jour [ici](https://adguard.com/adguard-android/overview.html).

:::

1. Activez le **mode développeur** et activez ensuite **le débogage USB** :

    - Ouvrez l'application **Paramètres** sur votre téléphone ;
    - Accédez à la section **Système** (dernier élément du menu des paramètres). Dans cette section, trouvez le sous-élément **À propos du téléphone** ;
    - Cliquez 7 fois sur la ligne **Numéro de version**. Ensuite, vous recevrez une notification indiquant **Vous êtes maintenant un développeur** (Si nécessaire, saisissez un code de déverrouillage pour l'appareil) ;
    - Ouvrez **Paramètres système** → **Options du développeur** → Faites défiler vers le bas et activez **Débogage USB** → Confirmez que le débogage est activé dans la fenêtre **Autoriser le débogage USB** après avoir lu attentivement l'avertissement.

    :::note

    Si vous rencontrez des difficultés ou avez des questions supplémentaires, vous trouverez des instructions complètes [ici](https://developer.android.com/studio/debug/dev-options).


:::

1. [Installer et configurer](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB ; Sur la plateforme Windows, les propriétaires de **Samsung** peuvent avoir besoin d'installer [cet utilitaire](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connectez votre appareil à l'aide d'un **câble USB** à l'ordinateur ou au portable sur lequel vous avez installé **ADB**;

1. Ouvrez **la ligne de commande** sur votre PC :

    - **Cmd.exe** si vous utilisez **Windows** ;
    - **Terminal** si vous utilisez **macOS**;

1. Saisissez la commande `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` et appuyez sur **Enter**.

### Option 2 : Retirer le *compte utilisateur restreint*

Pour savoir comment gérer les comptes utilisateurs à partir d'un appareil Android, vous pouvez [rechercher l'info ici](https://support.google.com/a/answer/6223444?hl=en).

:::note

Dans certains cas, les comptes d'utilisateurs restreints sont créés implicitement et ne peuvent pas être supprimés. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Vous pouvez lire ci-dessous comment résoudre le problème dans ces cas.

:::

### Option 3 : Utiliser AdGuard en *Mode proxy HTTP local* (nécessite l'accès root)

Pour activer ce mode, ouvrez **Paramètres AdGuard** → **Réseau** → **Méthode de filtrage** → **Proxy HTTP local**

### Appareils LG et Samsung

Les propriétaires de téléphones **LG** ou **Samsung** peuvent rencontrer un problème similaire. Cela peut être dû à l'utilisation de la fonction **Dual App/Dual Messenger** (qui crée automatiquement un profil restreint). Pour résoudre ce problème, vous devez désactiver cette fonctionnalité.

### Samsung

- Ouvrez les **Paramètres**;
- Appuyez **Paramètres avancés** ;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Verrouillez l'appareil pendant 5 minutes ;
- Déverrouillez l'écran et réessayez de créer le profil VPN.

### LG

- Ouvrez les **Paramètres**;
- Choisissez l'onglet **Général** ;
- Scroll down and press **Dual App**;
- Remove all apps from the list;
- Redémarrez votre appareil.
