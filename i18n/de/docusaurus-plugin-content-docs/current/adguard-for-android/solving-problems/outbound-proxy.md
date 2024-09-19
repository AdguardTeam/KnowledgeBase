---
title: How to set up outbound proxy
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Below is a list of the most well-known applications that can be configured to work as proxies in AdGuard.

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

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as the default proxy.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

    Now AdGuard will route all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable the outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

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

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

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

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Field      | Value                                                                                                                         |
    | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Proxy type | *SOCKS5*                                                                                                                      |
    | Proxy host | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxy port | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Öffnen Sie AdGuard und wechseln Sie zu **Einstellungen** ➜ **Filterung** ➜ **Netzwerk** ➜ **Proxy** ➜ **Proxy-Server**.

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

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
