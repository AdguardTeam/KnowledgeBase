---
title: Jak nainstalovat certifikát proxy
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Jak stáhnout a nainstalovat certifikát

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Klepněte pravým tlačítkem myši na složku *Certifikáty* a klepněte na **Všechny úlohy** → **Importovat**.

1. Na stránce *Průvodce importem certifikátu* klikněte na položku **Další**.

1. Kliknutím na **Procházet** certifikát importujte.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Zaškrtněte políčko **Umístit všechny certifikáty do následujícího úložiště**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Klikněte na **Dokončit**.

1. Press **Win**, then open **Settings**.

1. Vyberte **Síť a Internet** → **Proxy**.

1. Vypněte *Automaticky zjišťovat nastavení*.

1. Klikněte na **Nastavit** na kartě *Použít proxy server*.

1. Zapněte přepínač. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Pro **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

1. Klikněte na **Uložit**.

### Mac {#mac}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Dvakrát klikněte na stažený soubor certifikátu.

1. Zadejte heslo administrátora a klikněte na **Modify Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. V části *Systém* zvýrazněte certifikát, který jste přidali.

1. Right-click it and select **Get Info** from the context menu.

1. Rozbalte *Trust* a zobrazte zásady důvěryhodnosti pro certifikát.

1. V části *Secure Sockets Layers (SSL)* vyberte **Vždy důvěřovat**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Klikněte na **Podrobnosti...** a přejděte na kartu **Proxy**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. Do pole **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### Android {#android}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Otevřete pokročilá nastavení aktivní Wi-Fi sítě.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### iOS {#ios}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Zadejte své heslo a potvrďte instalaci. Klepněte na **Hotovo**.

1. Přejděte na **Nastavení** → **Obecné** → **Informace** → **Důvěryhodnost certifikátu**. Zapněte přepínač vedle *Adguard Personal CA*. Certifikát byl nainstalován.

1. Na tomto zařízení otevřete pokročilá nastavení aktivní Wi-Fi sítě.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.
