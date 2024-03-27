---
title: Come installare un certificato proxy
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Come scaricare e installare il certificato

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Fai clic destro sulla cartella *Certificati* e clicca su **Tutte le Attività** → **Importa**.

1. Sulla pagina *Procedura Guidata d'Importazione Certificati*, clicca su **Successivo**.

1. Clicca su **Sfoglia** per importare il certificato.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Seleziona la casella **Posiziona tutti i certificati nel seguente archivio**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Clicca **Fine**.

1. Press **Win**, then open **Settings**.

1. Seleziona **Rete & Internet** → **Proxy**.

1. Disattiva *Rileva automaticamente le impostazioni*.

1. Clicca su **Configura** nella scheda *Utilizza un server proxy*.

1. Attiva l'interruttore. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Per la **Porta**, inserisci la porta scelta nelle impostazioni di rete dell'app desktop di AdGuard.

1. Clicca su **Salva**.

### Mac {#mac}

1. Nota l'indirizzo IP del tuo computer su cui è installato AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Fai doppio click sul file del certificato scaricato.

1. Inserisci la password dell'amministratore, quindi clicca su **Modifica Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Sotto *Sistema*, evidenzia il certificato aggiunto.

1. Right-click it and select **Get Info** from the context menu.

1. Espandi *Attendibilità* per mostrare i criteri di attendibilità per il certificato.

1. In *Secure Sockets Layers (SSL)*, seleziona **Fidati Sempre**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Clicca su **Dettagli...** e naviga alla scheda **Proxy**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. Nel campo **Porta**, inserisci la porta selezionata nelle impostazioni di rete dell'app desktop di AdGuard.

### Android {#android}

1. Nota l'indirizzo IP del tuo computer su cui è installato AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Apri le impostazioni avanzate della rete Wi-Fi attiva.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.

### iOS {#ios}

1. Annota l'indirizzo IP del tuo dispositivo su cui è installato AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Inserisci la tua password e conferma l'installazione. Tocca **Fatto**.

1. Vai in **Impostazioni** → **Generali** → **Informazioni** → **Impostazioni di Attendibilità Certificati**. Abilita l'interruttore affianco a *CA di Adguard Personal*. Il certificato è ora installato.

1. Su quel dispositivo, apri le impostazioni avanzate della rete Wi-Fi attiva.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.
