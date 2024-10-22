---
title: So können Sie Systemprotokolle erstellen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

Die in den Protokollen enthaltenen Daten und/oder Dateien werden in Übereinstimmung mit der [Datenschutzrichtlinie von AdGuard](https://adguard.com/de/privacy.html) verarbeitet.

:::

Manchmal reicht ein einfaches Protokoll nicht aus, um die Ursache des Problems zu ermitteln. In solchen Fällen ist ein Systemprotokoll erforderlich. Below are instructions on how to collect and get it: via Developer options and Logcat.

:::note

AdGuard ist dem Schutz Ihrer Privatsphäre verpflichtet. Wir halten uns konsequent an unsere [Datenschutzerklärung](https://adguard.com/privacy/android.html) und sammeln keine privaten Informationen über Nutzer:innen. Bevor Sie Ihre Protokolle an das Support-Team senden, überprüfen Sie bitte die Datei, da sie zusätzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben möchten. Wenn sie solche persönlichen Informationen enthält, empfehlen wir Ihnen, sie zuerst zu löschen.

:::

## Erfassen eines Fehlerberichts von einem Gerät

Um einen Fehlerbericht direkt von Ihrem Gerät zu erhalten, gehen Sie wie folgt vor:

1. Be sure you have [Developer options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled.

1. In **Developer options**, tap **Take bug report**.

    ![Fehlerbericht *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Select the type of bug report you want and tap **Report**.

    :::note

    After a moment, you will see a notification that the bug report is ready (see Figure 2).


:::

    ![Fehlerbericht *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. To share the bug report, tap the notification.

    ![Fehlerbericht *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Senden Sie dieses Protokoll an unser Support-Team.

    :::note

    Unser Support-Team wird Ihr Ticket viel schneller bearbeiten können, wenn Sie die HelpDesk-Ticketnummer oder die GitHub-Issue-Nummer in Ihrer Nachricht an den Support angeben.


:::

## Capture a bug report via Logcat

On devices with Android 7 and below, it is not possible to send a bug report automatically. Then you can capture it manually via Logcat — a standard Android command-line tool that dumps a log of system messages.

Befolgen Sie diese Anweisungen:

**Teil 1: Vorbereiten des Geräts**

1. Schalten Sie das Gerät in den Entwicklermodus. To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

1. Go to **Developer Options**.

1. Enable **USB debugging**.

1. Increase **Logger buffer** sizes to 4 MB per log buffer.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

**Part #2: reproduce the problem**

Es ist wichtig, das Problem zu reproduzieren, nachdem der erste Teil abgeschlossen ist.

1. Reproduzieren Sie das Problem.

1. Notieren Sie sich das Datum und die Uhrzeit der Reproduktion und fügen Sie es später in die E-Mail an unseren Support ein.

**Teil 3: Abrufen des Protokolls**

1. Schließen Sie Ihr Gerät mit einem USB-Kabel an einen PC an.

1. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Choose the appropriate download link for your OS from the Downloads section. Once you tap the link, a ZIP file will be downloaded. Sie können die ADB-Dateien (Android Debug Bridge) aus der ZIP-Datei extrahieren und an einem beliebigen Ort speichern.

1. Testen Sie, ob ADB ordnungsgemäß funktioniert: Schließen Sie Ihr Android-Gerät mit einem USB-Kabel an Ihren Computer an, öffnen Sie die Eingabeaufforderung, die PowerShell oder das Terminal und führen Sie den folgenden Befehl aus:

    `adb devices`

    Ein Beispiel für ein erfolgreiches Ergebnis:

    ![Schritt 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Führen Sie dann den folgenden Befehl aus (geben Sie den entsprechenden Pfad ein):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at support@adguard.com.

### Alternative way for ROOT users

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Choose **Record** in the menu. Choose a name for a log file or just press **OK**. Now you can press **Home** button, CatLog will continue recording the log in background.

1. Reproduzieren Sie das Problem.

1. Open CatLog and press **Stop record** in the menu.

1. Senden Sie dieses Protokoll an unser Support-Team.

:::note

Unser Support-Team wird Ihr Ticket viel schneller bearbeiten können, wenn Sie die HelpDesk-Ticketnummer oder die GitHub-Issue-Nummer in Ihrer Nachricht an den Support angeben.

:::
