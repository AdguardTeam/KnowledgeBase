---
title: Probleme, die durch mehrere Benutzerprofile verursacht werden
sidebar_position: 10
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Probleme, die durch mehrere Benutzerprofile verursacht werden

Unter Android 9 und höher, wenn AdGuard für mehr als ein Benutzerprofil auf Ihrem Gerät installiert ist, können Probleme bei der Deinstallation der App auftreten. Wenn Sie AdGuard aus einem Benutzerprofil deinstallieren, wird die App weiterhin in der App-Liste angezeigt, aber Sie können sie weder deinstallieren noch neu installieren. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message “You can't install the app on your device”.

Um dieses Problem zu lösen, müssen Sie die App für alle Benutzer deinstallieren: Gehen Sie zu Einstellungen → Alle Apps → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Deinstallation *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Probleme, die durch die Verwendung eines Profils im eingeschränkten Modus verursacht werden

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Lösungen

Sie haben drei Möglichkeiten, das Problem zu lösen:

### Option 1: Grant permissions to AdGuard using ADB

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. If you're using an older version, you can get the latest update [here](https://adguard.com/adguard-android/overview.html).

:::

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe**, wenn Sie **Windows** verwenden;
    - **Terminal**, wenn Sie **macOS** verwenden;

1. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *restricted user account*

Wie Sie Benutzerkonten von einem Android-Gerät aus verwalten können, erfahren Sie [hier](https://support.google.com/a/answer/6223444?hl=en).

:::note

In einigen Fällen werden eingeschränkte Benutzerkonten implizit erstellt und können nicht entfernt werden. For instance, when you use Dual messenger or Dual app features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

:::

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LG- und Samsung-Geräte

Owners of **LG** or **Samsung** phones may also encounter a similar issue. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature.

### Samsung

- Öffnen Sie die **Einstellungen**;
- Tippen Sie auf **Erweitert**;
- Blättern Sie nach unten und tippen Sie auf **Dual messenger**;
- Deaktivieren Sie **Dual Messenger** für alle Apps;
- Sperren Sie das Gerät für 5 Minuten;
- Entsperren Sie den Bildschirm und versuchen Sie erneut, das VPN-Profil zu erstellen.

### LG

- Öffnen Sie die **Einstellungen**;
- Wählen Sie den Tab **Allgemein**;
- Blättern Sie nach unten und tippen Sie auf **Dual app**;
- Entfernen Sie alle Apps aus der Liste;
- Starten Sie Ihr Gerät neu.
