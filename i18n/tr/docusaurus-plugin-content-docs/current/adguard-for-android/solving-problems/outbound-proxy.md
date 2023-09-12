---
title: How to setup outbound proxy
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

AdGuard allows you to route your device's traffic through a proxy server. Proxy ayarlarına erişmek için **Ayarlar** öğesini açın ve ardından **Filtreleme** → **Ağ** → **Proxy** öğesine ilerleyin.

## Proxy yapılandırma örnekleri

Bu makalede, AdGuard ile çalışmak için en popüler proxy'lerden bazılarının nasıl kurulacağına dair örnekler veriyoruz.

### How to use AdGuard with Tor

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** öğesine gidin. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Open Orbot and press the **Start** button on the application's main screen.

1. AdGuard'ın **Proxy** ekranına geri dönün.

1. Tap the **Integrate with Tor** button.

1. All the required fields will be pre-filled:

    | Field                  | Değer                |
    | ---------------------- | -------------------- |
    | Proxy türü             | *SOCKS4* or *SOCKS5* |
    | Proxy ana makine       | *127.0.0.1*          |
    | Proxy bağlantı noktası | *9050*               |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

    Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                |
    | ---------------------- | ------------------------------------ |
    | Proxy türü             | *SOCKS5*                             |
    | Proxy ana makine       | *proxy-nl.privateinternetaccess.com* |
    | Proxy bağlantı noktası | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. **Kaydet ve seç** öğesine dokunun.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                       |
    | ---------------------- | ------------------------------------------- |
    | Proxy türü             | *SOCKS5*                                    |
    | Proxy ana makine       | *proxy.torguard.org* or *proxy.torguard.io* |
    | Proxy bağlantı noktası | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. **Kaydet ve seç** öğesine dokunun.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with NordVPN

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                                                          |
    | ---------------------- | ------------------------------------------------------------------------------ |
    | Proxy türü             | *SOCKS5*                                                                       |
    | Proxy ana makine       | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Proxy bağlantı noktası | *1080*                                                                         |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

1. **Kaydet ve seç** öğesine dokunun.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::not

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. Tap the **Add proxy server** and fill in the fields:

    | Field                  | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *1080*      |

1. **Kaydet ve seç** öğesine dokunun.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### AdGuard Clash ile nasıl kullanılır

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Field                  | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *7891*      |

## Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
