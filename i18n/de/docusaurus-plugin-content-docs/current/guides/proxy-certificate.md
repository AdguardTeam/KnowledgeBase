---
title: So installieren Sie ein Proxy-Zertifikat
sidebar_position: 2
---

Unsere Desktop-Anwendungen, AdGuard für Windows und AdGuard für Mac, können als Proxy für andere Geräte verwendet werden. Dies bedeutet, dass Sie den Datenverkehr anderer Geräte durch AdGuard leiten können (den gesamten Datenverkehr oder den Datenverkehr bestimmter Anwendungen und Browser).

:::note

Diese Geräte müssen sich im selben Netzwerk befinden wie der PC oder Mac mit AdGuard.

:::

HTTP-Verkehr wird in jedem Fall gefiltert, aber damit AdGuard auch HTTPS-Verkehr filtern kann, müssen Sie das AdGuard-Zertifikat manuell auf dem angeschlossenen Gerät installieren.

## Herunterladen und Installieren des Zertifikats

Je nach Betriebssystem des Geräts, dessen Datenverkehr Sie filtern möchten, befolgen Sie eine der folgenden Anweisungen:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das Kästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie auf demselben Computer mit AdGuard diesem Link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.

1. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Windows-Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten. Sie können dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.

1. Drücken Sie auf diesem Gerät **Win**, geben Sie `Computerzertifikate verwalten` ein und drücken Sie **Enter**.

1. Auf der Seite *Zertifikate — Lokaler Computer* * →Vertraute Stammzertifizierungsstellen* suchen Sie den Ordner*Zertifikate*.

1. Klicken Sie mit der rechten Maustaste auf den Ordner *Zertifikate* und klicken Sie auf **Alle Aufgaben** ➜ **Importieren**.

1. Klicken Sie auf der Seite *Zertifikatsimport-Assistent* auf **Weiter**.

1. Klicken Sie auf **Durchsuchen**, um das Zertifikat zu importieren.

1. Navigieren Sie zu der Zertifikatsdatei **cert.cer**, wählen Sie sie aus, klicken Sie auf **Öffnen** und dann auf **Weiter**.

1. Aktivieren Sie das Kontrollkästchen **Alle Zertifikate im folgenden Speicher speichern**.

1. Stellen Sie sicher, dass im Feld *Zertifikatspeicher* *Vertrauenswürdige Stammzertifizierungsstellen* angezeigt wird, und klicken Sie auf **Weiter**.

1. Klicken Sie auf **Fertigstellen**.

1. Drücken Sie **Win** und öffnen Sie dann **Einstellungen**.

1. Wählen Sie **Netzwerk und Internet** → **Proxy**.

1. Deaktivieren Sie *Einstellungen automatisch erkennen*.

1. Klicken Sie auf **Einrichten** im Tab *Proxyserver verwenden*.

1. Aktivieren Sie diese Option. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. Geben Sie bei **Port** den Port ein, den Sie in den Netzwerkeinstellungen der Desktop-App von AdGuard ausgewählt haben.

1. Klicken Sie auf **Speichern**.

### Mac {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das Kästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie diesem Link in einem Webbrowser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.

1. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Mac-Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten. Sie können dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.

1. Doppelklicken Sie auf die heruntergeladene Zertifikatsdatei.

1. Geben Sie das Administratorkennwort ein und klicken Sie dann auf **Schlüsselbund ändern**.

1. Öffnen Sie die **Spotlight-Suche** (das Suchsymbol in der oberen rechten Ecke), geben Sie `Schlüsselbundverwaltung` ein und wählen Sie dann **Schlüsselbundverwaltung** aus den Suchergebnissen.

1. Markieren Sie unter *System* das Zertifikat, das Sie hinzugefügt haben.

1. Klicken Sie mit der rechten Maustaste darauf und wählen Sie **Informationen** aus dem Kontextmenü.

1. Erweitern Sie *Vertrauen*, um die Vertrauensrichtlinien für das Zertifikat anzuzeigen.

1. Wählen Sie unter *Secure Sockets Layers (SSL)* **Immer vertrauen**.

1. Öffnen Sie **Systemeinstellungen** → **Netzwerk** und wählen Sie oben die aktive Verbindung aus.

1. Klicken Sie auf **Weitere Optionen …** und öffnen Sie den Tab **Proxies**.

1. Aktivieren Sie zwei Kontrollkästchen: *Webproxy (HTTP)* und *Sicherer Webproxy (HTTPS)*. Geben Sie in das Feld **Server** die IP-Adresse Ihres Computers ein, die Sie in Schritt 1 notiert haben. Geben Sie im Feld **Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-App gewählt haben.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das Kästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.

1. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das Android-Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten. Sie können dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.

1. Suchen Sie das zuvor heruntergeladene Zertifikat **cert.cer** und tippen Sie darauf, um die Datei zu öffnen, und folgen Sie den Anweisungen zur Installation des Zertifikats.

1. Android-Geräte vertrauen Zertifikaten standardmäßig nicht, daher wird eine Warnung angezeigt, die Sie ignorieren können. Bei einigen Handys werden Sie möglicherweise aufgefordert, Ihr Gerätepasswort einzugeben. Tun Sie dies und drücken Sie anschließend **OK**. Das Zertifikat wird installiert.

1. Öffnen Sie die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

1. Ändern Sie den **Proxy-Typ** in **Manuell**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. Auf einem Windows-Computer markieren Sie das Kästchen **AdGuard als HTTP-Proxy verwenden** im Tab **Netzwerk** in den Einstellungen. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. Wenn der Download nicht startet, versuchen Sie einen anderen Browser, z. B. Firefox.

1. Übertragen Sie die heruntergeladene Datei **cert.cer** auf das iOS-Gerät, dessen Datenverkehr Sie durch AdGuard leiten möchten. Sie können dazu ein USB-Kabel, Bluetooth oder Cloud-Dienste verwenden.

1. Öffnen Sie auf Ihrem iOS-Gerät **Einstellungen** → **Heruntergeladene Profile** und tippen Sie auf **Installieren** in der oberen rechten Ecke. Geben Sie Ihr Passwort ein, um Ihre Absicht zu bestätigen. Tippen Sie auf **Fertig**.

1. Öffnen Sie die **Einstellungen** ➜ **Allgemein** ➜ **Info** ➜ **Zertifikatsvertrauenseinstellungen**. Aktivieren Sie den Schalter neben *Adguard Personal CA*. Das Zertifikat ist nun installiert.

1. Öffnen Sie auf diesem Gerät die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

1. Ändern Sie den **Proxy-Typ** in **Manuell**. Geben Sie unter **Proxy-Hostname** die IP-Adresse Ihres Computers ein, die Sie in Schritt 1 notiert haben. Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.
