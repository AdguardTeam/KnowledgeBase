---
title: 代理证书安装
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## 如何下载并安装证书

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows 系统 {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. 单击**下载**按钮。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. 右键单击「*证书*」文件夹，并单击「**所有任务**」→「**导入**」。

1. 在「*证书导入向导*」页面，单击「**下一步**」。

1. 点击「**浏览**」，导入证书。

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. 选择「**将所有证书放置在以下存储区中**」复选框。

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. 单击「**完成**」。

1. Press **Win**, then open **Settings**.

1. 选择「**网络&Internet **」→「**代理**」。

1. 关闭「*自动检测设置*」。

1. 在「*使用代理服务器*」中，点击「**设置**」。

1. 打开开关。 For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. 对于**端口**，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

1. 单击「**保存**」。

### Mac 系统 {#mac}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. 单击**下载**按钮。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. 双击下载的证书文件。

1. 输入管理员密码，然后点击「**修改钥匙串**」。

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. 在「*系统*」中，突出显示您添加的证书。

1. Right-click it and select **Get Info** from the context menu.

1. 展开「*信任*」以显示该证书的信任政策。

1. 在「*安全套接层（SSL）*」，选择「**始终信任**」。

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. 点击「**更多信息...** ，并转到「**代理**」。

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. 在「**端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### 安卓系统 {#android}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. 单击**下载**按钮。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. 打开连接的 Wi-Fi 网络的高级设置。

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### iOS 系统 {#ios}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. 单击**下载**按钮。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. 输入密码并确认安装。 点击**完成**。

1. 转到「**设置**」→ 「**常规**」→ 「**关于**」→ 「**证书信任设置**」。 启用「*Adguard Personal CA*」旁边的开关。 证书安装成功。

1. 在该设备上，打开连接的 Wi-Fi 网络的高级设置。

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。
