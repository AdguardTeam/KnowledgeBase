---
title: Problemi causati da profili utente multipli
sidebar_position: 10
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problemi causati da profili utente multipli

Su Android 9 e successive, se AdGuard è installata per più di un profilo utente sul tuo dispositivo, potresti riscontrare dei problemi disinstallando l'app. Quando disinstalli AdGuard da un profilo utente, l'app continuerà ad apparire sull'elenco delle app, ma non potrai disinstallarla o reinstallarla. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

Per risolvere questo problema, devi disinstallare l'applicazione per tutti gli utenti: vai su Impostazioni → Tutte le app → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problems caused by using a Restricted Mode profile

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Solutions

You have three ways to solve the issue:

### Option 1: Grant permissions to AdGuard using ADB

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. If you're using an older version, you can get the latest update [here](https://adguard.com/adguard-android/overview.html).

:::

1. Attiva la **modalità sviluppatore** e abilita il **Debug USB**:

    - Open the **Settings** app phone;
    - Vai alla sezione **Sistema** (ultima voce nel menu delle impostazioni). In questa sezione, trova **Informazioni sul telefono**;
    - Tocca la riga **Numero di build** per 7 volte. Dopodiché, riceverai la notifica "**Sei ora uno sviluppatore**" (Se necessario, inserisci un codice di sblocco per il dispositivo);
    - Apri le **Impostazioni di sistema** → **Opzioni per sviluppatori** → Scorri in basso e abilita **Debug USB** → Conferma che il debug sia abilitato nella finestra **Consenti debug USB**, dopo aver letto attentamente l'avviso.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe** if you are using **Windows**;
    - **Terminal** if you are using **macOS**;

1. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *restricted user account*

About how to manage user accounts from an Android device you can [find here](https://support.google.com/a/answer/6223444?hl=en).

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual messenger or Dual app features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

:::

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LG and Samsung devices

Owners of **LG** or **Samsung** phones may also encounter a similar issue. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature.

### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down and press **Dual messenger**;
- Disable the **Dual messenger** for all apps;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down and press **Dual app**;
- Remove all apps from the list;
- Reboot your device.
