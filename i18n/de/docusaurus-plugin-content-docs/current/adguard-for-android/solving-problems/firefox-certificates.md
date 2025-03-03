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

1. Wechseln Sie zu **Einstellungen** → **Geheimeinstellungen**.

    ![Geheime Einstellungen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Aktivieren Sie **Zertifikate von Drittanbietern verwenden**.

### Methode 2

:::note

Diese Methode funktioniert nur auf **gerooteten** Geräten.

:::

1. [Installieren und konfigurieren Sie](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Auf der Windows-Plattform müssen Besitzer von **Samsung** möglicherweise [dieses Dienstprogramm](https://developer.samsung.com/mobile/android-usb-driver.html)installieren.

1. Aktivieren Sie den **Entwicklermodus** und aktivieren Sie **USB-Debugging**:

    - Öffnen Sie **Einstellungen** auf Ihrem Telefon;
    - Wechseln Sie zum Abschnitt **System** (letzter Punkt im Einstellungsmenü). In diesem Abschnitt finden Sie den Unterpunkt **Über das Telefon**;
    - Tippen Sie 7 Mal auf die Zeile **Versionsnummer**. Danach erhalten Sie eine Benachrichtigung: **Sie sind jetzt ein Entwickler** (Geben Sie ggf. einen Entsperrcode für das Gerät ein);
    - Öffnen Sie **Systemeinstellungen** → **Entwickleroptionen** → Blättern Sie nach unten und aktivieren Sie **USB-Debugging** → Bestätigen Sie, dass das Debugging im Fenster **USB-Debugging zulassen** aktiviert ist, nachdem Sie die Warnung sorgfältig gelesen haben.

1. Installieren Sie den [Firefox-Browser](https://www.mozilla.org/en-US/firefox/releases/) (Release-Version);

1. Öffnen Sie die **AdGuard-Einstellungen** (Zahnradsymbol in der rechten unteren Ecke) → **Filterung** → **Netzwerk** → **HTTPS-Filterung** → **Sicherheitszertifikat** → **Anweisungen für Firefox** → **Installation für alte Versionen**;

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

    Falls Sie die Systemmeldung **Berechtigung verweigert** erhalten haben, sollten Sie die angegebenen Dateien zunächst in einen Ordner ohne Berechtigung verschieben. Danach sollten Sie sie in den entsprechenden Ordner in Ihrem Firefox-Browser verschieben.

    Der vollständige Befehl sollte in etwa so aussehen:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Wenn `adb shell su` nicht funktioniert, sollten Sie zunächst `adb shell` und dann `su`versuchen.
