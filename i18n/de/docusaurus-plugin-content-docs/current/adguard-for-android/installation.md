---
title: Installation
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Systemanforderungen

**OS-Version:** Android 7.0 oder höher

**RAM:** mindestens 2 GB

**Freier Speicherplatz:** 500 MB

## Installation

Die meisten Android-basierten Apps werden über Google Play vertrieben. AdGuard wird dort jedoch nicht präsentiert, da Google die Verbreitung von Werbeblockern auf Netzwerkebene über Google Play verbietet, d. h. von Apps, die Werbung in anderen Apps sperren. Weitere Informationen über die restriktive Politik von Google finden Sie [in unserem Blog](https://adguard.com/blog/adguard-google-play-removal.html).

Aus diesem Grund können Sie AdGuard für Android nur manuell installieren. Um die App auf Ihrem mobilen Gerät nutzen zu können, müssen Sie Folgendes tun.

1. **Laden Sie die App auf Ihr Gerät herunter**. Hier sind einige Möglichkeiten, wie Sie dies tun können:

    - Besuchen Sie unsere [Website](https://adguard.com/adguard-android/overview.html) und tippen Sie auf die Schaltfläche *Herunterladen*.
    - Starten Sie den Browser und geben Sie die folgende URL ein: [https://adguard.com/apk](https://adguard.com/apk)
    - oder scannen Sie diesen QR-Code:

    ![QR-Code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Erlauben Sie, Apps aus unbekannten Quellen zu installieren**. Sobald das Herunterladen der Datei abgeschlossen ist, tippen Sie in der Benachrichtigung auf *Öffnen*.

    ![Apps aus unbekannten Quellen installieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Ein Pop-up-Fenster wird angezeigt. Tippen Sie auf *Einstellungen*, navigieren Sie zu *Unbekannte Apps installieren*, und erteilen Sie die Erlaubnis für den Browser, den Sie zum Herunterladen der Datei verwendet haben.

    ![Apps aus unbekannten Quellen installieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Installieren Sie die App**. Sobald der Browser die erforderlichen Berechtigungen erhalten hat, werden Sie aufgefordert, die AdGuard-App zu installieren. Tippen Sie auf *Installieren*.

    ![Apps aus unbekannten Quellen installieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Sie werden anschließend aufgefordert, den *Lizenz-Vertrag* und die *Datenschutzerklärung* von AdGuard zu lesen. Sie können sich außerdem an der Produktentwicklung beteiligen. Aktivieren Sie dazu die Kästchen *Absturzberichte automatisch senden* und *Technische und Interaktionsdaten senden*. Klicken Sie dann auf *Weiter*.

    ![Datenschutzerklärung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Erstellen Sie ein lokales VPN**. Um den gesamten Datenverkehr direkt auf Ihrem Gerät zu filtern und nicht über einen Remote-Server zu leiten, muss AdGuard eine VPN-Verbindung herstellen.

    ![Lokales VPN einrichten *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Aktivieren Sie die HTTPS-Filterung**. Diese Option ist nicht zwingend erforderlich, wir empfehlen jedoch, sie zu aktivieren, um die beste Werbeblockerqualität zu erzielen.

    Wenn Ihr Gerät unter Android 7–9 läuft, werden Sie nach der lokalen VPN-Einrichtung aufgefordert, ein Stammzertifikat zu installieren und die HTTPS-Filterung zu konfigurieren.

    ![HTTPS-Filterung unter Android 7–9 aktivieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Nachdem Sie auf *Jetzt installieren* getippt haben, wird eine Aufforderung angezeigt, die Zertifikatsinstallation mit einem Kennwort oder einem Fingerabdruck zu authentifizieren.

    ![HTTPS-Filterung unter Android 7-9 aktivieren. Schritt 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Wenn Sie Android 10+ auf Ihrem Gerät haben, dann sehen Sie nach dem Erstellen eines lokalen VPN den Hauptbildschirm der App mit einer Snackbar am unteren Rand mit einem Vorschlag zur Aktivierung der HTTPS-Filterung: Tippen Sie auf *Aktivieren* und folgen Sie den Anweisungen auf dem nächsten Bildschirm oder lesen Sie [den Artikel über die Zertifikatsinstallation](solving-problems/manual-certificate.md) für weitere Informationen.

    ![HTTPS-Filterung aktivieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## AdGuard deinstallieren/neu installieren

Wenn Sie AdGuard von Ihrem mobilen Gerät deinstallieren möchten, öffnen Sie *Einstellungen* und wählen Sie *Apps* (Android 7) oder *Apps und Benachrichtigungen* (Android 8+). Suchen Sie AdGuard in der Liste der installierten Apps und tippen Sie *Deinstallieren*.

![AdGuard neu installieren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Um AdGuard erneut zu installieren, laden Sie einfach die apk-Datei erneut herunter und befolgen Sie die im Abschnitt Installation beschriebenen Schritte. Eine vorherige Deinstallation ist nicht erforderlich.
