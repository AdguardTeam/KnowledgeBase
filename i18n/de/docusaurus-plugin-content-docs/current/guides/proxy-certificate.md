---
title: So installieren Sie ein Proxy-Zertifikat
sidebar_position: 2
---

Desktop-Apps von AdGuard (AdGuard für Windows und AdGuard für Mac) können als Proxy verwendet werden. Dies bedeutet, dass Sie den Datenverkehr anderer Geräte durch AdGuard leiten können (vollständig oder den Datenverkehr bestimmter Apps/Browser).

:::note

Diese Geräte müssen sich im selben Netzwerk befinden wie der PC oder Mac, auf dem AdGuard installiert ist.

:::

HTTP-Verkehr wird in jedem Fall gefiltert, aber damit AdGuard auch HTTPS-Verkehr filtern kann, müssen Sie das AdGuard-Zertifikat manuell auf dem verbundenen Gerät installieren.

## Herunterladen und Installieren des Zertifikats

Befolgen Sie je nach Betriebssystem Ihres Geräts (Windows/macOS/Android/iOS) eine der folgenden Anweisungen:

### Windows {#windows}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

2. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Aktivieren Sie dann das Kontrollkästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen.

3. Auf demselben Gerät mit AdGuard folgen Sie diesem Link mit einem beliebigen Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klicken Sie auf die Schaltfläche **Herunterladen**.

5. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten.

6. Drücken Sie auf diesem Gerät die Taste ** Win**, geben Sie `Computerzertifikate verwalten` ein und drücken Sie **Eingabetaste**.

7. Suchen Sie auf der Seite *Zertifikate — Lokaler Computer* den Ordner *Vertrauenswürdige Stammzertifikatsstellen* → *Zertifikate*.

8. Klicken Sie mit der rechten Maustaste auf den Ordner *Zertifikate* und klicken Sie auf **Alle Aufgaben** → **Importieren**.

9. Klicken Sie auf der Seite *Zertifikatsimport-Assistent* auf **Weiter**.

10. Klicken Sie auf **Durchsuchen**, um das Zertifikat zu importieren.

11. Navigieren Sie zu der Zertifikatsdatei **cert.cer**, wählen Sie sie aus und klicken Sie auf **Öffnen**.

12. Klicken Sie auf **Weiter**.

13. Aktivieren Sie das Kontrollkästchen **Alle Zertifikate im folgenden Speicher speichern**.

14. Stellen Sie sicher, dass im Feld *Zertifikatspeicher* *Vertrauenswürdige Stammzertifizierungsstellen* angezeigt wird, und klicken Sie auf **Weiter**.

15. Klicken Sie auf **Fertigstellen**.

16. Drücken Sie die Taste **Win** und öffnen Sie dann **Einstellungen**.

17. Wählen Sie **Netzwerk und Internet** → **Proxy**.

18. Deaktivieren Sie *Einstellungen automatisch erkennen*.

19. Klicken Sie auf **Einrichten** im Tab *Proxyserver verwenden*.

20. Aktivieren Sie diese Option. Geben Sie bei **Adresse** die notierte IP-Adresse Ihres Desktop-Computers ein (Schritt 1). Geben Sie bei **Port** den Port ein, den Sie in den Netzwerkeinstellungen der Desktop-App von AdGuard ausgewählt haben.

21. Klicken Sie auf **Speichern**.

### Mac {#mac}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

2. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Öffnen Sie dann die **Einstellungen** → **Netzwerk** → **HTTP-Proxy** und aktivieren Sie das Kästchen **AdGuard als HTTP-Proxy verwenden**.

3. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klicken Sie auf die Schaltfläche **Herunterladen**.

5. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten.

6. Doppelklicken Sie auf die heruntergeladene Zertifikatsdatei.

7. Geben Sie das Administratorkennwort ein und klicken Sie dann auf **Schlüsselbund ändern**.

8. Öffnen Sie die **Spotlight-Suche** (das Suchsymbol in der oberen rechten Ecke), geben Sie „Schlüsselbundverwaltung” ein und wählen Sie dann **Schlüsselbundverwaltung** aus den Suchergebnissen.

9. Markieren Sie unter *System* das Zertifikat, das Sie hinzugefügt haben.

10. Klicken Sie mit der rechten Maustaste darauf und wählen Sie **Informationen** aus dem Kontextmenü.

11. Erweitern Sie *Vertrauen*, um die Vertrauensrichtlinien für das Zertifikat anzuzeigen.

12. Wählen Sie unter *Secure Sockets Layers (SSL)* **Immer vertrauen**.

13. Öffnen Sie **Systemeinstellungen** → **Netzwerk** und wählen Sie die obere aktive Verbindung.

14. Klicken Sie auf **Weitere Optionen…** und öffnen Sie den Tab **Proxys**.

15. Aktivieren Sie zwei Kontrollkästchen: *Webproxy (HTTP)* und *Sicherer Webproxy (HTTPS)*. Geben Sie im Feld **Server** die notierte IP-Adresse Ihres Computers ein (Schritt 1). Geben Sie im Feld **Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-App gewählt haben.

### Android {#android}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

2. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Aktivieren Sie dann das Kontrollkästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen.

3. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klicken Sie auf die Schaltfläche **Herunterladen**.

5. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten.

6. Suchen Sie das zuvor heruntergeladene Zertifikat **cert.cer** und tippen Sie darauf, um die Datei zu öffnen.

7. Bei einigen Handys werden Sie möglicherweise aufgefordert, Ihr Gerätepasswort einzugeben. Tun Sie das und drücken Sie dann **OK**. Das Zertifikat ist nun installiert.

8. Öffnen Sie die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

9. Schalten Sie den **Proxy-Typ** auf **Manuell** um. Geben Sie bei **Proxy-Hostname** die notierte IP-Adresse Ihres Desktop-Computers ein (Schritt 1). Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.

### iOS {#ios}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

2. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Aktivieren Sie dann das Kontrollkästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen.

3. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klicken Sie auf die Schaltfläche **Herunterladen**.

5. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten.

6. Öffnen Sie **Einstellungen** ➜ **Sicherheit** ➜ **Verschlüsselung & Anmeldeinformationen** ➜ **Zertifikat installieren**. Android-Geräte vertrauen Zertifikaten standardmäßig nicht, daher wird eine Warnung angezeigt, wenn Sie **CA-Zertifikat** auswählen. Tippen Sie auf **Trotzdem installieren**.

7. Öffnen Sie **Einstellungen** ➜ **Heruntergeladene Profile** und tippen Sie auf **Installieren** in der oberen rechten Ecke. Geben Sie Ihr Passwort ein, um Ihre Absicht zu bestätigen. Tippen Sie auf **Fertig**.

8. Öffnen Sie die **Einstellungen** ➜ **Allgemein** ➜ **Info** ➜ **Zertifikatsvertrauenseinstellungen**. Aktivieren Sie den Schalter neben *Adguard Personal CA*. Das Zertifikat ist nun installiert.

9. Öffnen Sie auf diesem Gerät die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

10. Schalten Sie den **Proxy-Typ** auf **Manuell** um. Geben Sie bei **Proxy-Hostname** die notierte IP-Adresse Ihres Computers ein (Schritt 1). Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.
