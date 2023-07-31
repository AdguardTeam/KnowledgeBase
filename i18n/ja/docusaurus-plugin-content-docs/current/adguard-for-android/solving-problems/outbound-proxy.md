---
title: How to setup outbound proxy
sidebar_position: 8
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」について書いています。 実際に使ってみるには、[AdGuardアプリをダウンロード](https://adguard.com/download.html?auto=true)してください。

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### How to use AdGuard with Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

2. Open Orbot and press the **Start** button on the application's main screen.

3. Go back to the **Proxy** screen of AdGuard.

4. Tap the **Integrate with Tor** button.

5. All the required fields will be pre-filled:

    | Field      | Value                |
    | ---------- | -------------------- |
    | Proxy type | *SOCKS4* or *SOCKS5* |
    | Proxy host | *127.0.0.1*          |
    | Proxy port | *9050*               |

Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

6. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                |
    | ---------- | ------------------------------------ |
    | Proxy type | *SOCKS5*                             |
    | Proxy host | *proxy-nl.privateinternetaccess.com* |
    | Proxy port | *1080*                               |

3. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                       |
    | ---------- | ------------------------------------------- |
    | Proxy type | *SOCKS5*                                    |
    | Proxy host | *proxy.torguard.org* or *proxy.torguard.io* |
    | Proxy port | *1080* or *1085* or *1090*                  |

3. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                                                          |
    | ---------- | ------------------------------------------------------------------------------ |
    | Proxy type | *SOCKS5*                                                                       |
    | Proxy host | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Proxy port | *1080*                                                                         |

3. For **Username** and **Password** fields, enter your NordVPN Username and Password.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks application from filtering before setting up the process (**Settings** → **Filtering** → **Apps** → **App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** and fill the fields:

    | Field      | Value       |
    | ---------- | ----------- |
    | Proxy type | *SOCKS5*    |
    | Proxy host | *127.0.0.1* |
    | Proxy port | *1080*      |

3. Tap **Save and select**.

4. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

## Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.