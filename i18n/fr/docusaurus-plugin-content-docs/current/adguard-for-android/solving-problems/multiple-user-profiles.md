---
title: Problèmes causés par des profils d'utilisateurs multiples
sidebar_position: 10
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problèmes causés par des profils d'utilisateurs multiples

Sur Android 9 et les versions ultérieures, si AdGuard est installé pour plus d'un profil d'utilisateur sur votre appareil, vous pouvez rencontrer des problèmes lors de la désinstallation de l'application. Lorsque vous désinstallez AdGuard d'un profil d'utilisateur, l'application apparaîtra toujours dans la liste des applications, mais vous ne pourrez pas la désinstaller ou la réinstaller. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

Pour résoudre ce problème, vous devez désinstaller l'application pour tous les utilisateurs : allez dans Paramètres → Toutes les applications → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problems caused by using a Restricted Mode profile

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Solutions

You have three ways to solve the issue:

### Option 1: Grant permissions to AdGuard using ADB

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. If you're using an older version, you can get the latest update [here](https://adguard.com/adguard-android/overview.html).

:::

1. Activez le **mode développeur** et activez ensuite **le débogage USB** :

    - Open the **Settings** app phone;
    - Accédez à la section **Système** (dernier élément du menu des paramètres). Dans cette section, trouvez le sous-élément **À propos du téléphone** ;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).


:::

1. [Installer et configurer](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB ; Sur la plateforme Windows, les propriétaires de **Samsung** peuvent avoir besoin d'installer [cet utilitaire](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe** if you are using **Windows**;
    - **Terminal** if you are using **macOS**;

1. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *restricted user account*

About how to manage user accounts from an Android device you can [find here](https://support.google.com/a/answer/6223444?hl=en).

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

:::

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### Appareils LG et Samsung

Les propriétaires de téléphones **LG** ou **Samsung** peuvent rencontrer un problème similaire. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature.

### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down and press **Dual App**;
- Remove all apps from the list;
- Reboot your device.
