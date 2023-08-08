---
title: 如何设置外出代理
sidebar_position: 8
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### 如何同时使用 AdGuard 和 Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

2. 打开 Orbot 并在应用程序的首页点击**「开启」**按钮。

3. Go back to the **Proxy** screen of AdGuard.

4. 点击**「配置 Tor® 整合」**按钮。

5. 所有必填的字符串将会被预填写：

    | 字符串  | 数值                  |
    | ---- | ------------------- |
    | 代理分类 | *SOCKS4* 或 *SOCKS5* |
    | 代理主机 | *127.0.0.1*         |
    | 代理端口 | *9050*              |

Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

6. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### 如何同时使用 AdGuard 和 PIA（Private Internet Access）

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                   |
    | ---- | ------------------------------------ |
    | 代理分类 | *SOCKS5*                             |
    | 代理主机 | *proxy-nl.privateinternetaccess.com* |
    | 代理端口 | *1080*                               |

3. 您还需要输入**「用户名/密码」**字符串。 以完成操作，请您在 PIA 官网上登录[客户管理面板](https://www.privateinternetaccess.com/pages/client-sign-in)。 在**生成 PPTP/L2TP/SOCKS 密码**部分下面点击**「生成密码」**按钮。 您将会看到一串开始于 "x" 的用户名和随机密码。 Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 AdGuard 和 TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                         |
    | ---- | ------------------------------------------ |
    | 代理分类 | *SOCKS5*                                   |
    | 代理主机 | *proxy.torguard.org* 或 *proxy.torguard.io* |
    | 代理端口 | *1080* 或 *1085* 或 *1090*                   |

3. 请在**「用户名」**和**「密码」**的相应空白处输入您的代理名称，以及您在 TorGuard 注册选择的代理密码。

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 AdGuard 和 NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. 点击**「添加代理」**按钮并输入以下的数据：

    | 字符串  | 数值                                                                             |
    | ---- | ------------------------------------------------------------------------------ |
    | 代理分类 | *SOCKS5*                                                                       |
    | 代理主机 | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | 代理端口 | *1080*                                                                         |

3. 在**「用户名」**和**「密码」**处输入您的 NordVPN 的用户名和密码。

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### 如何同时使用 Adguard 和 Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks application from filtering before setting up the process (**Settings** → **Filtering** → **Apps** → **App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** and fill in the fields:

    | 字符串  | 数值          |
    | ---- | ----------- |
    | 代理分类 | *SOCKS5*    |
    | 代理主机 | *127.0.0.1* |
    | 代理端口 | *1080*      |

3. Tap **Save and select**.

4. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.
2. Open Adguard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.
3. Then go to **Settings** → **Network** → **Proxy** → **Proxy server**.
4. Tap **Add proxy server** and fill in the fields:

    | 字符串  | 数值          |
    | ---- | ----------- |
    | 代理分类 | *SOCKS5*    |
    | 代理主机 | *127.0.0.1* |
    | 代理端口 | *7891*      |

## 限制

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.