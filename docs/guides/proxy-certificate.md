---
title: How to install a proxy certificate
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## How to download and install the certificate

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Right-click the *Certificates* folder and click **All Tasks** → **Import**.

1. On the *Certificate Import Wizard* page, click **Next**.

1. Click **Browse** to import the certificate.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Select the **Place all certificates in the following store** checkbox.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Click **Finish**.

1. Press **Win**, then open **Settings**.

1. Select **Network & Internet** → **Proxy**.

1. Toggle *Automatically detect settings* off.

1. Click **Set up** in the *Use a proxy server* tab.

1. Turn the toggle on. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. For **Port**, enter the port chosen in the network settings of the desktop AdGuard app.

1. Click **Save**.

### Mac {#mac}

1. Note the IP address of your desktop computer with installed AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard.

1. Double-click the downloaded certificate file.

1. Enter the administrator password and then click **Modify Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Under *System*, highlight the certificate that you added.

1. Right-click it and select **Get Info** from the context menu.

1. Expand *Trust* to display the trust policies for the certificate.

1. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Click **Details...** and navigate to the **Proxies** tab.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### Android {#android}

1. Note the IP address of your desktop computer with installed AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Open advanced settings of the active Wi-Fi network.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS {#ios}

1. Note the IP address of your desktop computer with installed AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Click the **Download** button. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Enter your password and confirm the installation. Tap **Done**.

1. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. The certificate is now installed.

1. On that device, open advanced settings of the active Wi-Fi network.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
