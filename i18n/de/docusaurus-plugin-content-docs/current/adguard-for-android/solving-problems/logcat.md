---
title: So können Sie Systemprotokolle erstellen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

:::note

Die in den Protokollen enthaltenen Daten und Dateien werden in Übereinstimmung mit der <a [Datenschutzerklärung von AdGuard](https://adguard.com/en/privacy.html) verarbeitet.

:::

Manchmal reicht ein einfaches Protokoll nicht aus, um die Ursache des Problems zu ermitteln. In solchen Fällen ist ein Systemprotokoll erforderlich. Nachfolgend finden Sie eine Anleitung zum Erfassen und Abrufen der Daten: über die Entwickleroptionen und Logcat.

:::note

AdGuard ist dem Schutz Ihrer Privatsphäre verpflichtet. Wir halten uns konsequent an unsere [Datenschutzerklärung](https://adguard.com/privacy/android.html) und sammeln keine privaten Informationen über Nutzer:innen. Bevor Sie Ihre Protokolle an das Support-Team senden, überprüfen Sie bitte die Datei, da sie zusätzliche Informationen enthalten kann, die Sie vielleicht nicht freigeben möchten. Wenn sie solche persönlichen Informationen enthält, empfehlen wir Ihnen, sie zuerst zu löschen.

:::

## Erfassen eines Fehlerberichts von einem Gerät

Um einen Fehlerbericht direkt von Ihrem Gerät zu erhalten, gehen Sie wie folgt vor:

1. Stellen Sie sicher, dass die [Entwickleroptionen](https://developer.android.com/studio/run/device.html#developer-device-options) aktiviert wurden.

1. Tippen Sie in **Entwickleroptionen** auf **Fehlerbericht aufzeichnen**.

    ![Fehlerbericht *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Wählen Sie die Art des gewünschten Fehlerberichts und tippen Sie auf **Melden**.

    :::note

    Nach einem kurzen Moment erhalten Sie eine Benachrichtigung, dass der Fehlerbericht fertiggestellt wurde (siehe Abbildung 2).


:::

    ![Fehlerbericht *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Um den Fehlerbericht zu teilen, tippen Sie auf die Benachrichtigung.

    ![Fehlerbericht *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Senden Sie dieses Protokoll an unser Support-Team.

    :::note

    Unser Support-Team wird Ihr Ticket viel schneller bearbeiten können, wenn Sie die HelpDesk-Ticketnummer oder die GitHub-Issue-Nummer in Ihrer Nachricht an den Support angeben.


:::

## Erfassen eines Fehlerberichts über Logcat

Auf Geräten mit Android 7 und darunter ist es nicht möglich, einen Fehlerbericht automatisch zu senden. Sie können ihn manuell über Logcat erfassen — ein Standard-Android-Befehlszeilentool, das ein Protokoll der Systemmeldungen ausgibt.

Befolgen Sie diese Anweisungen:

### Part #1: prepare the device

1. Schalten Sie das Gerät in den Entwicklermodus. Öffnen Sie dazu **Einstellungen** → **Über** → und tippen Sie 7-mal auf **Build-Nummer**.

1. Öffnen Sie die **Entwickleroptionen**.

1. Aktivieren Sie **USB-Debugging**.

1. Erhöhen Sie die Größe der **Protokollpuffer** auf 4 MB pro Protokollpuffer.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

### Part #2: reproduce the problem

It is important to reproduce the problem after you're done with the first part.

1. Reproduzieren Sie das Problem.

1. Notieren Sie sich das Datum und die Uhrzeit der Reproduktion und fügen Sie es später in die E-Mail an unseren Support ein.

### Part #3: get the log

1. Schließen Sie Ihr Gerät mit einem USB-Kabel an einen PC an.

1. Laden Sie die [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads) herunter. Wählen Sie im Bereich „Downloads“ den entsprechenden Download-Link für Ihr Betriebssystem aus. Sobald Sie auf den Link tippen, wird eine ZIP-Datei heruntergeladen. Sie können die ADB-Dateien (Android Debug Bridge) aus der ZIP-Datei extrahieren und an einem beliebigen Ort speichern.

1. Testen Sie, ob ADB ordnungsgemäß funktioniert: Schließen Sie Ihr Android-Gerät mit einem USB-Kabel an Ihren Computer an, öffnen Sie die Eingabeaufforderung, die PowerShell oder das Terminal und führen Sie den folgenden Befehl aus:

    `adb devices`

    Ein Beispiel für ein erfolgreiches Ergebnis:

    ![Schritt 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Führen Sie dann den folgenden Befehl aus (geben Sie den entsprechenden Pfad ein):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at <support@adguard.com>.

### Alternative way for ROOT users

1. Laden Sie [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog) herunter und führen Sie es aus.

1. Wählen Sie im Menü **Aufzeichnen**. Wählen Sie einen Namen für eine Protokolldatei oder tippen Sie einfach auf **OK**. Jetzt können Sie die **Home**-Taste antippen, CatLog wird die Aufzeichnung im Hintergrund fortsetzen.

1. Reproduzieren Sie das Problem.

1. Öffnen Sie CatLog und drücken Sie **Aufzeichnung stoppen** im Menü.

1. Senden Sie dieses Protokoll an unser Support-Team.

:::note

Unser Support-Team wird Ihr Ticket viel schneller bearbeiten können, wenn Sie die HelpDesk-Ticketnummer oder die GitHub-Issue-Nummer in Ihrer Nachricht an den Support angeben.

:::
