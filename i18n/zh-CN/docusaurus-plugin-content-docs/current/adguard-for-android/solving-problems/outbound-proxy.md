---
title: 如何设置外出代理
sidebar_position: 8
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

这篇文章为用户讲述如何设置一些主流的代理，让它们与 AdGuard 一起运行。

### 如何同时使用 AdGuard 和 Tor

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**. 打开[谷歌商店](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess)，或者点击**「配置 Tor® 整合」**以下载 "Orbot: Proxy with Tor"。

2. 打开 Orbot 并在应用程序的首页点击**「开启」**按钮。

2. 返回 AdGuard 的**代理设置**页面。

3. 点击**「配置 Tor® 整合」**按钮。

4. 所有必填的字符串将会被预填写：

| 字符串  | 数值                  |
| ---- | ------------------- |
| 代理分类 | *SOCKS4* 或 *SOCKS5* |
| 代理主机 | *127.0.0.1*         |
| 代理端口 | *9050*              |

或您可以点击**「添加代理」**并手动输入数值。然后设置 Orbot 代理为默认代理。

5. 开启 AdGuard 保护。

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### 如何同时使用 AdGuard 和 PIA（Private Internet Access）

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. 点击**「添加代理」**按钮并输入以下的数据：

| 字符串  | 数值                                   |
| ---- | ------------------------------------ |
| 代理分类 | *SOCKS5*                             |
| 代理主机 | *proxy-nl.privateinternetaccess.com* |
| 代理端口 | *1080*                               |

3. 您还需要输入**「用户名/密码」**字符串。 以完成操作，请您在 PIA 官网上登录[客户管理面板](https://www.privateinternetaccess.com/pages/client-sign-in)。 在**生成 PPTP/L2TP/SOCKS 密码**部分下面点击**「生成密码」**按钮。 您将会看到一串开始于 "x" 的用户名和随机密码。 将它们输入到 AdGuard**「用户名」**和**「密码」**相应的字段。

4. 勾选此代理以设置它为默认代理。然后点击**「保存」**。

5. 开启 AdGuard 保护。

### 如何同时使用 AdGuard 和 TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. 点击**「添加代理」**按钮并输入以下的数据：

| 字符串  | 数值                                         |
| ---- | ------------------------------------------ |
| 代理分类 | *SOCKS5*                                   |
| 代理主机 | *proxy.torguard.org* 或 *proxy.torguard.io* |
| 代理端口 | *1080* 或 *1085* 或 *1090*                   |

3. 请在**「用户名」**和**「密码」**的相应空白处输入您的代理名称，以及您在 TorGuard 注册选择的代理密码。

4. 勾选此代理以设置它为默认代理。然后点击**「保存」**。

5. 开启 AdGuard 保护。

### 如何同时使用 AdGuard 和 NordVPN

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. 点击**「添加代理」**按钮并输入以下的数据：

| 字符串  | 数值                                                        |
| ---- | --------------------------------------------------------- |
| 代理分类 | *SOCKS5*                                                  |
| 代理主机 | *除了“混淆服务器”以外，任何一个[列表内](https://nordvpn.com/servers/)的服务器* |
| 代理端口 | *1080*                                                    |

3. 在**「用户名」**和**「密码」**处输入您的 NordVPN 的用户名和密码。

4. 勾选此代理以设置它为默认代理。然后点击**「保存」**。

5. 开启 AdGuard 保护。

### 如何同时使用 Adguard 和 Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks application from filtering before setting up the process (AdGuard → Apps management → Shadowsocks → Disable AdGuard protection) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. 点击**「添加代理」**按钮并输入以下数据：

| 字符串  | 数值          |
| ---- | ----------- |
| 代理分类 | *SOCKS5*    |
| 代理主机 | *127.0.0.1* |
| 代理端口 | *1080*      |

3. 点击**「选择并保存」**

### 限制

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
