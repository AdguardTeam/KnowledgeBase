---
title: So installieren Sie ein Proxy-Zertifikat
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Herunterladen und Installieren des Zertifikats

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Klicken Sie mit der rechten Maustaste auf den Ordner *Zertifikate* und klicken Sie auf **Alle Aufgaben** ➜ **Importieren**.

1. Klicken Sie auf der Seite *Zertifikatsimport-Assistent* auf **Weiter**.

1. Klicken Sie auf **Durchsuchen**, um das Zertifikat zu importieren.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Aktivieren Sie das Kontrollkästchen **Alle Zertifikate im folgenden Speicher speichern**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Klicken Sie auf **Fertigstellen**.

1. Press **Win**, then open **Settings**.

1. Wählen Sie **Netzwerk und Internet** → **Proxy**.

1. Deaktivieren Sie *Einstellungen automatisch erkennen*.

1. Klicken Sie auf **Einrichten** im Tab *Proxyserver verwenden*.

1. Aktivieren Sie diese Option. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Geben Sie bei **Port** den Port ein, den Sie in den Netzwerkeinstellungen der Desktop-App von AdGuard ausgewählt haben.

1. Klicken Sie auf **Speichern**.

### Mac {#mac}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Doppelklicken Sie auf die heruntergeladene Zertifikatsdatei.

1. Geben Sie das Administratorkennwort ein und klicken Sie dann auf **Schlüsselbund ändern**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Markieren Sie unter *System* das Zertifikat, das Sie hinzugefügt haben.

1. Right-click it and select **Get Info** from the context menu.

1. Erweitern Sie *Vertrauen*, um die Vertrauensrichtlinien für das Zertifikat anzuzeigen.

1. Wählen Sie unter *Secure Sockets Layers (SSL)* **Immer vertrauen**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Klicken Sie auf **Weitere Optionen …** und öffnen Sie den Tab **Proxies**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. Geben Sie im Feld **Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-App gewählt haben.

### Android {#android}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Öffnen Sie die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.

### iOS {#ios}

1. Notieren Sie sich die IP-Adresse Ihres Desktop-Computers mit installiertem AdGuard.

1. Stellen Sie sicher, dass der AdGuard-Schutz aktiviert ist. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Folgen Sie auf dem Computer mit AdGuard diesem Link in einem Browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klicken Sie auf die Schaltfläche **Herunterladen**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Geben Sie Ihr Passwort ein, um Ihre Absicht zu bestätigen. Tippen Sie auf **Fertig**.

1. Öffnen Sie die **Einstellungen** ➜ **Allgemein** ➜ **Info** ➜ **Zertifikatsvertrauenseinstellungen**. Aktivieren Sie den Schalter neben *Adguard Personal CA*. Das Zertifikat ist nun installiert.

1. Öffnen Sie auf diesem Gerät die erweiterten Einstellungen des aktiven WLAN-Netzwerks.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Geben Sie bei **Proxy-Port** den Port ein, den Sie in den Netzwerkeinstellungen der AdGuard-Desktop-App gewählt haben.
