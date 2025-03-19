---
title: So installieren Sie AdGuard für Android TV
sidebar_position: 16
---

:::info

Dieser Artikel behandelt AdGuard für Android TV, einen Werbeblocker, der Ihren Fernseher auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die App „AdGuard TV“ herunter](https://agrd.io/tvapk)

:::

In den meisten Fällen können die vorinstallierten Browser keine Dateien auf Ihrem Fernseher installieren. Sie können jedoch einen Browser aus dem Google Play Store herunterladen, der diese Funktion bietet. In unserem Leitfaden werden wir ein Beispiel für die Installation mit dem Browser TV Bro durchgehen, aber es gibt auch andere Optionen, und Sie können diejenige wählen, die Ihren Bedürfnissen am besten entsprechen. Als Alternative können Sie die App [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader) verwenden.

## AdGuard für Android TV über den Browser installieren

1. Installieren Sie den [TV Bro-Browser] (https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) auf Ihrem Android TV.

2. Laden Sie AdGuard für Android TV herunter und installieren Sie die App:

- Öffnen Sie den installierten TV Bro-Browser auf Ihrem Android TV.
- Geben Sie in die Adressleiste des Browsers `https://agrd.io/tvapk` ein und drücken Sie _Eingabe_ oder folgen Sie dem Link.
- Der Browser beginnt automatisch mit dem Herunterladen der Installationsdatei von AdGuard für Android TV.
- Sobald das Herunterladen abgeschlossen ist, wählen Sie in der Kontrollleiste des Browsers _Downloads_ und dann die heruntergeladene Datei aus.
- In einer Warnmeldung müssen Sie die Installation von Dateien über den Browser erlauben.
- Kehren Sie zu Ihrem Browser zurück, öffnen Sie _Downloads_, und klicken Sie auf die heruntergeladene Datei.
- Klicken Sie in dem daraufhin angezeigten Systemfenster auf _Installieren_ und dann auf _Fertig_ oder _Öffnen_.

Fertig, AdGuard für Android TV ist installiert.

1. Starten Sie AdGuard für Android TV:

- Nachdem die Installation abgeschlossen ist, suchen Sie die AdGuard-App in der Liste der installierten Apps auf Ihrem Android TV.
- Klicken Sie auf das AdGuard-Symbol, um die App zu starten.
- Folgen Sie den Anweisungen auf dem Bildschirm, um die Einrichtung abzuschließen.

## Installation von AdGuard für Android TV über ADB

1. Stellen Sie sicher, dass die Android Debug Bridge (ADB) auf Ihrem Computer installiert ist. Wenn nicht, können Sie die Anweisungen auf XDA Developers befolgen: [ADB-Installationsanleitung](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Laden Sie [AdGuard für Android TV](https://agrd.io/tvapk) herunter.

3. Gehen Sie in den TV-Einstellungen auf _System_ → _Über_ und drücken Sie sieben Mal auf die Build-Nummer, um die Entwickleroptionen zu aktivieren. Aktivieren Sie _USB-Debugging_.

4. Notieren Sie sich die IP-Adresse Ihres Android TV:

    - Navigieren Sie auf Ihrem Android TV zu „Einstellungen“.
    - Wählen Sie _System_ → _Über_.
    - Suchen Sie _Netzwerk_ und wählen Sie _Wi-Fi_ oder _Ethernet_, je nach Verbindungstyp.
    - Wechseln Sie zum Abschnitt „Netzwerk“ und suchen Sie die _IP-Adresse_. Notieren Sie sich diese IP-Adresse.

5. Verbinden Sie sich mit Android TV über ADB:

    - Öffnen Sie das Terminal oder die Eingabeaufforderung auf Ihrem Computer.
    - Geben Sie den Befehl `adb connect` ein und fügen Sie die IP-Adresse Ihres TV-Geräts ein.
    - Die Verbindung wird aufgebaut.

6. Installieren Sie AdGuard für Android TV über ADB:

    - Geben Sie im Terminal den Befehl `adb install Downloads/adguard_tv.apk` ein. Ersetzen Sie gegebenenfalls `Downloads/adguard_tv.apk` durch Ihren Pfad.
    - Warten Sie auf eine Meldung im Terminal, die die erfolgreiche Installation der App anzeigt.
