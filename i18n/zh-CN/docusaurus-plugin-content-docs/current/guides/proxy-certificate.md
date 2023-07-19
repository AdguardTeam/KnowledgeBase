---
title: 代理证书安装
sidebar_position: 2
---

桌面 AdGuard 应用程序 (适用于 Windows 和 Mac 的 AdGuard) 可以用作代理。 这意味着您可以通过 AdGuard 路由其他设备的流量（全部或特定应用程序或浏览器的流量）。

:::note

These devices must be in the same network as the PC or Mac on which AdGuard is installed.

:::

在任何情况下，HTTP 流量都会被过滤，但是要使 AdGuard 能够过滤 HTTPS 流量，您需要在连接的设备上手动安装 AdGuard 证书。

## 如何下载并安装证书

根据您设备的类型 (Windows/Mac/Android/iOS)，请遵守以下说明中的一条：

### Windows 系统 {#windows}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure the AdGuard protection is enabled. 然后在设置的「**网络**」中勾选「**将 AdGuard 用作 HTTP 代理**」。

3. 在装有 AdGuard 的同一台设备上，通过浏览器打开此链接： [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. 单击**下载**按钮。

5. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的设备

6. 在该设备上，按 **Win** 按钮，输入 `管理计算机证书` ，按 **Enter**。

7. 在*「证书」-「本地计算机」*页面，找到*「受信任根证书」*→「*证书*」文件夹。

8. 右键单击「*证书*」文件夹，并单击「**所有任务**」→「**导入**」。

9. 在「*证书导入向导*」页面，单击「**下一步**」。

10. 点击「**浏览**」，导入证书。

11. 导航到 **cert.cer** 证书文件，选择它，然后点击「**打开**」。

12. 单击「**下一步**」。

13. 选择「**将所有证书放置在以下存储区中**」复选框。

14. 确保「*证书存储*」字段显示「*受信任的根证书颁发机构*」，然后点击「**下一步**」。

15. 单击「**完成**」。

16. 按 **Win** 键，然后打开「**设置**」。

17. 选择「**网络&Internet **」→「**代理**」。

18. 关闭「*自动检测设置*」。

19. 在「*使用代理服务器*」中，点击「**设置**」。

20. 打开开关。 对于「**代理 IP 地址**」，输入在第一步记下的台式计算机的 IP 地址。 对于**端口**，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

21. 单击「**保存**」。

### Mac 系统 {#mac}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure the AdGuard protection is enabled. 然后转到 「**设置**」→「**网络**」→「**HTTP 代理**」并选中「**AdGuard 用作 HTTP 代理**」复选框。

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的设备

6. 双击下载的证书文件。

7. 输入管理员密码，然后点击「**修改钥匙串**」。

8. 转到「**Spotlight**」（右上角的搜索图标），输入“Keychain Access”（钥匙串访问），然后从搜索结果中选择「**Keychain Access**」（钥匙串访问）。

9. 在「*系统*」中，突出显示您添加的证书。

10. 右键单击证书并从上下文菜单中选择「**查看信息**」。

11. 展开「*信任*」以显示该证书的信任政策。

12. 在「*安全套接层（SSL）*」，选择「**始终信任**」。

13. 打开「**系统偏好**」→「**网络**」，选择上层活动连接。

14. 点击「**更多信息...** ，并转到「**代理**」。

15. 勾选两个复选框。「*网络代理（HTTP）*」和「*安全网络代理（HTTPS）*」。 在「**代理**」，请输入在第一步记下的您的计算机的 IP 地址。 在「**端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### 安卓系统 {#android}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure the AdGuard protection is enabled. 然后在设置的「**网络**」中勾选「**将 AdGuard 用作 HTTP 代理**」。

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的设备

6. 找到并点击先前下载的 **cert.cer** 证书以打开文件。

7. 在某些手机上，可能会要求您输入设备密码。 然后再按**确定**。 证书安装成功。

8. 打开连接的 Wi-Fi 网络的高级设置。

9. 将**代理类型**切换为**手动**。 对于「**代理主机名**」，请输入在第一步记下的 IP 地址。 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。

### iOS 系统 {#ios}

1. 记下装有 AdGuard 的台式计算机的 IP 地址。

2. Make sure the AdGuard protection is enabled. 然后在设置的「**网络**」中勾选「**将 AdGuard 用作 HTTP 代理**」。

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. 单击**下载**按钮。

5. 将下载的 **cert.cer** 文件传输到您想通过 AdGuard 路由流量的设备

6. 打开「**设置**」→「**安全**」→「**加密&凭证**」→「**安装证书**」。 安卓设备默认不信任证书，所以当您选择「**CA证书**」，您会收到警告。 点击「**继续安装**」。

7. 打开「**设置**」→「**配置文件下载**」，然后点击右上角的「**安装**」。 输入密码并确认安装。 点击**完成**。

8. 转到「**设置**」→ 「**常规**」→ 「**关于**」→ 「**证书信任设置**」。 启用「*Adguard Personal CA*」旁边的开关。 证书安装成功。

9. 在该设备上，打开连接的 Wi-Fi 网络的高级设置。

10. 将**代理类型**切换为**手动**。 对于「**代理主机名**」，请输入在第一步记下的您的计算机的 IP 地址。 对于「**代理端口**」，输入在桌面 AdGuard 应用程序的网络设置中选择的端口。
