---
title: 代理证书安装
sidebar_position: 2
---

桌面 AdGuard 应用程序 (适用于 Windows 和 Mac 的 AdGuard) 可以用作代理。 这意味着您可以通过 AdGuard 路由其他设备的流量（全部或特定应用程序或浏览器的流量）。

> 请注意，这些设备必须与已安装 AdGuard 的 PC 或 Mac 位于同一网络中。

在任何情况下，HTTP 流量都会被过滤，但是要使 AdGuard 能够过滤 HTTPS 流量，您需要在连接的设备上手动安装 AdGuard 证书。

## 如何下载并安装证书

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of these instructions:

### Windows 系统 {#windows}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure AdGuard’s protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. On the same device with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

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

21. Click **Save**.

### Mac 系统 {#mac}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure AdGuard’s protection is enabled. Then go to **Settings** → **Network** → **HTTP proxy** and check the box **Use AdGuard as an HTTP proxy**.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Double-click the downloaded certificate file.

7. Enter the administrator password and then click **Modify Keychain**.

8. Go to **Spotlight** (the search icon in the top right corner), type in "Keychain Access", and then select **Keychain Access** from the search results.

9. Under *System*, highlight the certificate that you added.

10. Right-click on it and choose **Get Info** from the context menu.

11. Expand *Trust* to display the trust policies for the certificate.

12. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

13. Open **System Preferences** → **Network** and choose the upper active connection.

14. Click **Details...** and navigate to the **Proxies** tab.

15. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, enter the noted IP address of your computer (step 1). In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### 安卓系统 {#android}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure AdGuard’s protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. 在某些手机上，可能会要求您输入设备密码。 然后再按**确定**。 证书安装成功。

8. Open advanced settings of the active Wi-Fi network.

9. 将**代理类型**切换为**手动**。 For **Proxy hostname**, enter the noted IP address of your desktop computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS 系统 {#ios}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure AdGuard’s protection is enabled. Then check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Open **Settings** → **Security** → **Encryption & Credentials** → **Install a certificate**. Android devices do not trust certificates by default so there will be a warning when you choose **CA certificate**. Tap **Install anyway**.

7. Open **Settings** → **Profile Donwloaded** and tap **Install** in the top right corner. 输入密码并确认安装。 点击**完成**。

8. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. 证书安装成功。

9. On that device, open advanced settings of the active Wi-Fi network.

10. 将**代理类型**切换为**手动**。 For **Proxy hostname**, enter the noted IP address of your computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
