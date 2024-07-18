---
title: How to set up outbound proxy
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Below you can find a list of the most famous applications that you can configure to work as proxies in AdGuard.

:::note

If your app is not listed below, please check on its proxy configurations in the settings or contact its support team.

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### How to use AdGuard with Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Open Orbot and press the **Start** button on the application's main screen.

1. Go back to the **Proxy** screen of AdGuard.

1. Tap the **Integrate with Tor** button.

1. All the required fields will be pre-filled:

    | Field      | Value                |
    | ---------- | -------------------- |
    | Proxy type | *SOCKS4* or *SOCKS5* |
    | Proxy host | *127.0.0.1*          |
    | Proxy port | *9050*               |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

    Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                |
    | ---------- | ------------------------------------ |
    | Proxy type | *SOCKS5*                             |
    | Proxy host | *proxy-nl.privateinternetaccess.com* |
    | Proxy port | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                       |
    | ---------- | ------------------------------------------- |
    | Proxy type | *SOCKS5*                                    |
    | Proxy host | *proxy.torguard.org* or *proxy.torguard.io* |
    | Proxy port | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Field      | Value                                                                                                                           |
    | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | Proxy type | *SOCKS5*                                                                                                                        |
    | Proxy host | *any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent)* |
    | Proxy port | *1080*                                                                                                                          |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** and fill in the fields:

    | Field      | Value       |
    | ---------- | ----------- |
    | Proxy type | *SOCKS5*    |
    | Proxy host | *127.0.0.1* |
    | Proxy port | *1080*      |

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Field      | Value       |
    | ---------- | ----------- |
    | Proxy type | *SOCKS5*    |
    | Proxy host | *127.0.0.1* |
    | Proxy port | *7891*      |

## Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy even after you configure AdGuard proxy settings. It can happen if you don't set up the app itself to send the traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
