---
title: 如何安装代理证书
sidebar_position: 2
---

我们的桌面端应用程序，包括 Windows 版和 Mac 版 AdGuard ，可用作其他设备的代理。 这意味着用户可以通过 AdGuard 路由其他设备的流量（全部或特定应用程序或浏览器的流量）。

:::note

这些设备必须与安装 AdGuard 的电脑或 Mac 连接同一网。

:::

在任何情况下，HTTP 流量都会被过滤，但是要使 AdGuard 能够过滤 HTTPS 流量，用户需要在连接的设备上手动安装 AdGuard 证书。

## 如何下载并安装证书

根据要过滤流量的设备操作系统，执行以下操作：

### Windows 系统 {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. 请确保 AdGuard 保护已启用。 在 Windows 电脑上转到设置中的「**网络**」，勾选「**将 AdGuard 用作 HTTP 代理**」。 On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. 在装有 AdGuard 的计算机上，通过浏览器打开此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 单击「**下载**」按钮。 如果下载未开始，请使用另一个浏览器，例如 Firefox 浏览器。

1. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的 Windows 设备上。 用户还可以使用 USB 电缆，蓝牙或云服务来完成此操作。

1. 在该设备上，按「**Win**」按钮，输入「`Manage computer certificates`」（管理计算机证书），按「**Enter**」键。

1. 在「*证书 —— 本地计算机*」页面，找到「*受信任的根证书颁发机构*」→「*证书*」文件夹。

1. 右键单击「*证书*」文件夹，并单击「**所有任务**」→「**导入**」。

1. 在「*证书导入向导*」页面，单击「**下一步**」。

1. 点击「**浏览**」，导入证书。

1. 导航到 **cert.cer** 证书文件，选择它，点击「**打开**」，然后点击「**下一步**」。

1. 选择「**将所有证书放置在以下存储区中**」复选框。

1. 确保「*证书存储*」字段显示「*受信任的根证书颁发机构*」，然后点击「**下一步**」。

1. 单击「**完成**」。

1. 按「**Win**」，然后打开**设置**。

1. 选择「**网络&Internet **」→「**代理**」。

1. 关闭「*自动检测设置*」。

1. 在「*使用代理服务器*」中，点击「**设置**」。

1. 打开开关。 For **Proxy IP address**, type the IP address of your computer that you noted in step 1. 对于**端口**，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

1. 单击「**保存**」。

### Mac 系统 {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. 请确保 AdGuard 保护已启用。 在 Windows 电脑上转到设置中的「**网络**」，勾选「**AdGuard 用作 HTTP 代理**」。 On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. 通过浏览器打开此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 单击「**下载**」按钮。 如果下载未开始，请使用另一个浏览器，例如 Firefox 浏览器。

1. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的 Mac 设备上。 用户还可以使用 USB 电缆，蓝牙或云服务来完成此操作。

1. 双击下载的证书文件。

1. 输入管理员密码，然后点击「**修改钥匙串**」。

1. 转到「**Spotlight**」（右上角的搜索图标），输入「`Keychain Access`」（钥匙串访问），然后从搜索结果中选择「**Keychain Access**」（钥匙串访问）。

1. 在「*系统*」（System）中，突出显示您添加的证书。

1. 右键单击证书并从上下文菜单中选择「**更多信息**」（Get info）。

1. 展开「*信任*」（Trust）以显示该证书的信任政策。

1. 在「*安全套接层（SSL）*」（Secure Sockets Layers (SSL)），选择「**始终信任**」（Always Trust）。

1. 打开「**系统偏好**」→「**网络**」，选择顶部的活动连接。

1. 点击「**更多信息...**」，并转到「**代理**」。

1. 勾选两个复选框：「*网络代理（HTTP）*」和「*安全网络代理（HTTPS）*」。 在「**服务器**」字段中，键入您在步骤 1 记下的计算机的 IP 地址。 在「**端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### Android 系统 {#android}

1. Note the IP address of your computer with installed AdGuard.

1. 请确保 AdGuard 保护已启用。 在 Windows 电脑上转到设置中的「**网络**」，勾选「**将 AdGuard 用作 HTTP 代理**」。 On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. 在装有 AdGuard 的计算机上，通过浏览器访问此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)。

1. 单击「**下载**」按钮。 如果下载未开始，请使用另一个浏览器，例如 Firefox 浏览器。

1. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的 Android 设备上。 用户还可以使用 USB 电缆，蓝牙或云服务来完成此操作。

1. 找到并点击先前下载的 **cert.cer** 证书，打开文件并按照说明安装证书。

1. Android 设备默认不信任证书，所以会出现警告。用户可以忽略它。 在某些手机上，可能会要求您输入设备密码。 然后再按「**确定**」。 证书将安装成功。

1. 打开连接的 Wi-Fi 网络的高级设置。

1. 将「**代理类型**」更改为「**手动**」。 For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### iOS 系统 {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. 请确保 AdGuard 保护已启用。 在 Windows 电脑上转到设置中的「**网络**」，勾选「**将 AdGuard 用作 HTTP 代理**」。 On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. 在装有 AdGuard 的计算机上，通过浏览器访问此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)。

1. 单击「**下载**」按钮。 如果下载未开始，请使用另一个浏览器，例如 Firefox 浏览器。

1. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的 iOS 设备上。 用户还可以使用 USB 电缆，蓝牙或云服务来完成此操作。

1. 在 iOS 设备上，打开「**设置**」→「**已下载的配置文件**」，然后点击右上角的「**安装**」。 输入密码并确认安装。 点击**完成**。

1. 转到「**设置**」→ 「**常规**」→ 「**关于**」→ 「**证书信任设置**」。 启用「*Adguard Personal CA*」旁边的开关。 证书安装成功。

1. 在该设备上，打开连接的 Wi-Fi 网络的高级设置。

1. 将「**代理类型**」更改为「**手动**」。 在「**代理主机名**」请输入在第一步记下的 IP 地址。 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。
