---
title: How to setup outbound proxy
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

AdGuard allows you to route your device's traffic through a proxy server. Proxy ayarlarına erişmek için **Ayarlar** öğesini açın ve ardından **Filtreleme** → **Ağ** → **Proxy** öğesine ilerleyin.

## Proxy yapılandırma örnekleri

Bu makalede, AdGuard ile çalışmak için en popüler proxy'lerden bazılarının nasıl kurulacağına dair örnekler veriyoruz.

### How to use AdGuard with Tor

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** öğesine gidin. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

2. Open Orbot and press the **Start** button on the application's main screen.

3. AdGuard'ın **Proxy** ekranına geri dönün.

4. Tap the **Integrate with Tor** button.

5. All the required fields will be pre-filled:

    | Field                  | Değer                |
    | ---------------------- | -------------------- |
    | Proxy türü             | *SOCKS4* or *SOCKS5* |
    | Proxy ana makine       | *127.0.0.1*          |
    | Proxy bağlantı noktası | *9050*               |

Veya **Proxy sunucusu** → **Proxy sunucusu ekle** öğesine dokunabilir, bu değerleri elle girebilir ve Orbot'u varsayılan proxy olarak ayarlayabilirsiniz.

6. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

2. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                |
    | ---------------------- | ------------------------------------ |
    | Proxy türü             | *SOCKS5*                             |
    | Proxy ana makine       | *proxy-nl.privateinternetaccess.com* |
    | Proxy bağlantı noktası | *1080*                               |

3. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. AdGuard'da **Proxy kullanıcı adı** ve **Proxy parolası** alanlarını doldurmak için bunları kullanın.

4. **Kaydet ve seç** öğesine dokunun.

5. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

2. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                       |
    | ---------------------- | ------------------------------------------- |
    | Proxy türü             | *SOCKS5*                                    |
    | Proxy ana makine       | *proxy.torguard.org* or *proxy.torguard.io* |
    | Proxy bağlantı noktası | *1080* or *1085* or *1090*                  |

3. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

4. **Kaydet ve seç** öğesine dokunun.

5. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### How to use AdGuard with NordVPN

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

2. Tap the **Add proxy server** button and enter the following data:

    | Field                  | Değer                                                                          |
    | ---------------------- | ------------------------------------------------------------------------------ |
    | Proxy türü             | *SOCKS5*                                                                       |
    | Proxy ana makine       | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Proxy bağlantı noktası | *1080*                                                                         |

3. For **Username** and **Password** fields, enter your NordVPN Username and Password.

4. **Kaydet ve seç** öğesine dokunun.

5. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

2. **Proxy sunucusu ekle** öğesine dokunun ve alanları doldurun:

    | Field                  | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *1080*      |

3. **Kaydet ve seç** öğesine dokunun.

4. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### AdGuard Clash ile nasıl kullanılır

*Burada zaten bir Clash istemcisi olduğunuzu ve onu cihazınıza yüklediğinizi varsayıyoruz.*

1. Clash'i açın ve **Ayarlar** → **Ağ** → **Sistem Trafiğini Yönet** öğesine gidin ve düğmeyi değiştirin. Bu, Clash'i proxy moduna ayarlar.
2. Open AdGuard and go to **App management**. **Clash For Android** öğesini seçin ve **Trafiği AdGuard üzerinden yönlendir** öğesini devre dışı bırakın. Bu, trafik döngüsünü ortadan kaldırır.
3. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.
4. **Proxy sunucusu ekle** öğesine dokunun ve alanları doldurun:

    | Alan                   | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *7891*      |

## Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.