---
title: Manuelle Installation des Sicherheitszertifikats im Firefox-Browser
sidebar_position: 11
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Damit AdGuard den HTTPS-Datenverkehr in Firefox erfolgreich filtern kann, muss der Browser dem Zertifikat von AdGuard vertrauen. Dies kann bei verschiedenen Firefox-Versionen auf unterschiedliche Weise erreicht werden.

### Methode 1

:::note

Diese Methode funktioniert in Firefox für Android Version 90.0 und höher.

:::

Um Firefox zu ermöglichen, dem AdGuard-Zertifikat zu vertrauen, gehen Sie wie folgt vor:

1. Starten Sie den Browser.

1. Öffnen Sie **Einstellungen** → **Über Firefox**.

    ![Über Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Tippen Sie fünfmal auf das Firefox-Logo.

1. Navigate to **Settings** → **Secret Settings**.

    ![Geheime Einstellungen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Toggle **Use third party CA certificates**.

### Methode 2

:::note

Diese Methode funktioniert nur auf **gerooteten** Geräten.

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app on your phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

1. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);

1. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;

1. Öffnen Sie den Ordner `data/data/org.mozilla.firefox/files/mozilla` mit `adb shell su` und `cd data/data/...` und suchen Sie dann den Ordner mit dem Namen `xxxxxxx.default` und merken Sie sich dessen Namen;

1. In dem angegebenen Ordner sind wir an zwei Dateien interessiert:

    - `cert9.db`
    - `key4.db`

1. Es ist notwendig, diese Dateien in einen Ordner des Browsers zu verschieben, in dem das Problem mit dem Sicherheitszertifikat aufgetreten ist:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. Der vollständige Befehl sieht wie folgt aus:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. Danach sollten Sie sie in den entsprechenden Ordner in Ihrem Firefox-Browser verschieben.

    Der vollständige Befehl sollte in etwa so aussehen:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Wenn `adb shell su` nicht funktioniert, sollten Sie zunächst `adb shell` und dann `su`versuchen.
