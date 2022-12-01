---
title: How to install a proxy certificate
sidebar_position: 2
---

Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers).

> Note that these devices must be in the same network as the PC or Mac on which AdGuard is installed.

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install AdGuard certificate on the connected device.

## How to download and install the certificate

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of this instructions:

### Windows {#windows}

1. Activate AdGuard on your computer with installed AdGuard and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

2. On the same device with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

3. Click the **Download** button.

4. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

5. On that device, press the **Win** button, type `Manage computer certificates` and press **Enter**.

6. On the *Certificates - Local Computer* page, find the *Trusted Root Certification* > *Certificates* folder.

7. Right-click the *Certificates* folder and click **All Tasks** > **Import**.

8. On the *Certificate Import Wizard* page, click Next.

9. Click **Browse** to import the certificate.

10. Navigate to the **cert.cer** certificate file, select it, then click **Open**.

11. Click **Next**.

12. Select the **Place all certificates in the following store** check box.

13. Ensure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

14. Click **Finish**.

15. Press the **Win** key, then open **Settings**.

16. Select **Network & Internet** > **Proxy**.

17. Toggle *Automatically detect settings* off.

18. Click **Set up** in the *Use a proxy server* tab.

19. Turn the toggle on. For **Proxy IP address**, enter the noted IP-address of your desktop computer (step 1). For **Port**, enter the port chosen in desktop AdGuard's network settings.

20. Click **Save**.

### Android {#android}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. On some phones, you might be asked to enter your device password. Do that, then press **OK**. The certificate is now installed.

8. Open advanced settings of the active WiFi network.

9. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP-address of your desktop computer (step 1). For **Proxy port**, enter the port chosen in desktop AdGuard's network settings.

### iOS {#ios}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate the downloaded crtificate in *Files*. A popup should show up, telling you about a downloaded profile.

7. Open **Settings** > **Profile Donwloaded** and tap **Install** in the top right corner. Enter your password and confirm the installation. Tap **Done**.

8. Go to **Settings** > **General** > **About** > **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. The certificate is now installed.

9. On that device, open advanced settings of the active WiFi network.

10. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP-address of your computer (step 1). For **Proxy port**, enter the port chosen in desktop AdGuard's network settings.

### Mac {#mac}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Double-click the downloaded certificate file.

7. Enter the administrator password, and then click **Modify Keychain**.

8. Go to **Spotlight** (the search icon in the top right corner), type in “Keychain Access”, and then select **Keychain Access** from the search results.

9. Under *System*, highlight the certificate that you added.

10. Right-click on it and choose **Get Info** from the context menu.

11. Expand *Trust* to display the trust policies for the certificate.

12. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

13. Open **System Preferences** > **Network** > **Wi-Fi**.

14. Navigate to the **Proxies** tab.

15. Tick the checkbox *Web Proxy (HTTP)*. For **Web Proxy Server**, enter the noted IP-address of your computer (step 1). In the field next to it (separated with a colon), enter the port chosen in desktop AdGuard's network settings.