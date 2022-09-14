---
title: How to install a proxy certificate
sidebar_position: 2
---

Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers).

> Note that these devices must be in the same network as the PC or Mac on which AdGuard is installed.

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install AdGuard certificate on the connected device.

## How to download and install the certificate

Depending on the operation system of your device (Android/iOS), follow one of this instructions:

### Android {#android}

1. Note the IP address of your desktop computer with installed AdGuard.

2. On the device which traffic you want to route through AdGuard, open advanced settings of the active WiFi network.

3. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP-address of your desktop computer (step 1). For **Proxy port**, enter the port chosen in desktop AdGuard's network settings.

4. Activate AdGuard on your computer and check the box ***Use AdGuard as an HTTP proxy*** in the **Network** settings of the desktop app.

5. Follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

6. Click the **Download** button.

7. Once the certificate is downloaded, you need to install it. Tap the downloaded certificate to open the file, if it didn't open automatically.

8. On some phones, you might be asked to enter your device password. Do that, then press **OK**. The certificate is now installed.

### iOS {#ios}

1. Note the IP address of your desktop computer with installed AdGuard.

2. On the device which traffic you want to route through AdGuard, open advanced settings of the active WiFi network.

3. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP-address of your computer (step 1). For **Proxy port**, enter the port chosen in desktop AdGuard's network settings.

4. Activate AdGuard on your computer and check the box ***Use AdGuard as an HTTP proxy*** in the **Network** settings of the desktop app.

5. Open Safari, go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and tap **Download**. In the opened dialogue, allow the website to download a configuration profile.

6. Open **Settings** -> **Profile Donwloaded** and tap **Install** in the top right corner. Enter your password and confirm the installation. Tap **Done**.

7. Go to **Settings** -> **General** -> **About** -> **Certificate Trust Settings**. Enable the switch beside **Adguard Personal CA**. The certificate is now installed.