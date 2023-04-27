---
title: Proxy sertifikası nasıl yüklenir
sidebar_position: 2
---

Desktop AdGuard apps (AdGuard for Windows and AdGuard for Mac) can be used as a proxy. This means that you can route other devices' traffic through AdGuard (entirely, or traffic of specific apps/browsers).

> Note that these devices must be in the same network as the PC or Mac on which AdGuard is installed.

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install AdGuard certificate on the connected device.

## How to download and install the certificate

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Make sure the AdGuard protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. On the same device with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. On that device, press the **Win** button, type `Manage computer certificates` and press **Enter**.

7. On the *Certificates - Local Computer* page, find the *Trusted Root Certification* → *Certificates* folder.

8. Right-click the *Certificates* folder and click **All Tasks** → **Import**.

9. On the *Certificate Import Wizard* page, click **Next**.

10. Click **Browse** to import the certificate.

11. Navigate to the **cert.cer** certificate file, select it, then click **Open**.

12. Click **Next**.

13. Select the **Place all certificates in the following store** checkbox.

14. Ensure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

15. Click **Finish**.

16. Press the **Win** key, then open **Settings**.

17. Select **Network & Internet** → **Proxy**.

18. Toggle *Automatically detect settings* off.

19. Click **Set up** in the *Use a proxy server* tab.

20. Turn the toggle on. For **Proxy IP address**, enter the noted IP address of your desktop computer (step 1). For **Port**, enter the port chosen in the network settings of the desktop AdGuard app.

21. **Kaydet** öğesine tıklayın.

### Mac {#mac}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Make sure the AdGuard protection is enabled. Then go to **Settings** → **Network** → **HTTP proxy** and check the box **Use AdGuard as an HTTP proxy**.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. İndirilen sertifika dosyasına çift tıklayın.

7. Enter the administrator password and then click **Modify Keychain**.

8. Go to **Spotlight** (the search icon in the top right corner), type in "Keychain Access", and then select **Keychain Access** from the search results.

9. Under *System*, highlight the certificate that you added.

10. Right-click it and choose **Get Info** from the context menu.

11. Expand *Trust* to display the trust policies for the certificate.

12. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

13. Open **System Preferences** → **Network** and choose the upper active connection.

14. Click **Details...** and navigate to the **Proxies** tab.

15. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, enter the noted IP address of your computer (step 1). In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### Android {#android}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Make sure the AdGuard protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. On some phones, you might be asked to enter your device password. Do that, then press **OK**. Sertifika şimdi yüklenmiştir.

8. Open advanced settings of the active Wi-Fi network.

9. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS {#ios}

1. Note the IP address of your desktop computer with installed AdGuard.

2. Make sure the AdGuard protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Click the **Download** button.

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Open **Settings** → **Security** → **Encryption & Credentials** → **Install a certificate**. Android devices do not trust certificates by default so there will be a warning when you choose **CA certificate**. Tap **Install anyway**.

7. Open **Settings** → **Profile Donwloaded** and tap **Install** in the top right corner. Enter your password and confirm the installation. Tap **Done**.

8. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. Sertifika şimdi yüklenmiştir.

9. On that device, open advanced settings of the active Wi-Fi network.

10. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
