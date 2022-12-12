---
title: 代理证书安装
sidebar_position: 2
---

桌面 AdGuard 应用程序 (适用于 Windows 和 Mac 的 AdGuard) 可以用作代理。 这意味着您可以通过 AdGuard 路由其他设备的流量（全部或特定应用程序或浏览器的流量）。

> 请注意，这些设备必须与已安装 AdGuard 的 PC 或 Mac 位于同一网络中。

在任何情况下，HTTP 流量都会被过滤，但是要使 AdGuard 能够过滤 HTTPS 流量，您需要在连接的设备上手动安装 AdGuard 证书。

## 如何下载并安装证书

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of this instructions:

### Windows {#windows}

1. Activate AdGuard on your computer with installed AdGuard and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

2. On the same device with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

3. 单击**下载**按钮。

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

### Mac 系统 {#mac}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. 单击**下载**按钮。

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

### 安卓系统 {#android}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. 单击**下载**按钮。

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. 在某些手机上，可能会要求您输入设备密码。 然后再按**确定**。 证书安装成功。

8. Open advanced settings of the active WiFi network.

9. 将**代理类型**切换为**手动**。 对于**代理主机名**，请输入在第一步记下的 IP 地址。 对于**代理端口**，输入在桌面 AdGuard 的网络设置中选择的端口。

### iOS 系统 {#ios}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. 单击**下载**按钮。

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate the downloaded certificate in *Files*. A popup should show up, telling you about a downloaded profile.

7. Open **Settings** > **Profile Donwloaded** and tap **Install** in the top right corner. 输入密码并确认安装。 点击**完成**。

8. Go to **Settings** > **General** > **About** > **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. 证书安装成功。

9. On that device, open advanced settings of the active WiFi network.

10. 将**代理类型**切换为**手动**。 对于**代理主机名**，请输入在第一步记下的 IP 地址。 对于**代理端口**，输入在桌面 AdGuard 的网络设置中选择的端口。