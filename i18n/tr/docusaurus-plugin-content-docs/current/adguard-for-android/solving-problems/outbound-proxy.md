---
title: Giden proxy nasıl ayarlanır
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Below is a list of the most well-known applications that can be configured to work as proxies in AdGuard.

:::not

Uygulamanız aşağıda listelenmiyorsa lütfen ayarlardan proxy yapılandırmalarını kontrol edin veya destek ekibiyle iletişime geçin.

:::

AdGuard allows you to route your device's traffic through a proxy server. Proxy ayarlarına erişmek için **Ayarlar** öğesini açın ve ardından **Filtreleme** → **Ağ** → **Proxy** öğesine ilerleyin.

## Proxy yapılandırma örnekleri

Bu makalede, AdGuard ile çalışmak için en popüler proxy'lerden bazılarının nasıl kurulacağına dair örnekler veriyoruz.

### Tor ile AdGuard nasıl kullanılır

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** öğesine gidin. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Open Orbot and press the **Start** button on the application's main screen.

1. AdGuard'ın **Proxy** ekranına geri dönün.

1. Tap the **Integrate with Tor** button.

1. Gerekli tüm alanlar önceden doldurulacaktır:

    | Alan                   | Değer                  |
    | ---------------------- | ---------------------- |
    | Proxy türü             | *SOCKS4* veya *SOCKS5* |
    | Proxy ana makine       | *127.0.0.1*            |
    | Proxy bağlantı noktası | *9050*                 |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as the default proxy.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

    Now AdGuard will route all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable the outbound proxy settings in AdGuard.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. **Proxy sunucusu ekle** düğmesine dokunun ve aşağıdaki verileri girin:

    | Alan                   | Değer                                |
    | ---------------------- | ------------------------------------ |
    | Proxy türü             | *SOCKS5*                             |
    | Proxy ana makine       | *proxy-nl.privateinternetaccess.com* |
    | Proxy bağlantı noktası | *1080*                               |

1. Ayrıca **Kullanıcı Adı/Parola** alanlarını da doldurmanız gerekmektedir. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. AdGuard'da **Proxy kullanıcı adı** ve **Proxy parolası** alanlarını doldurmak için bunları kullanın.

1. **Kaydet ve seç** öğesine dokunun.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### TorGuard ile AdGuard nasıl kullanılır

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. **Proxy sunucusu ekle** düğmesine dokunun ve aşağıdaki verileri girin:

    | Alan                   | Değer                                         |
    | ---------------------- | --------------------------------------------- |
    | Proxy türü             | *SOCKS5*                                      |
    | Proxy ana makine       | *proxy.torguard.org* veya *proxy.torguard.io* |
    | Proxy bağlantı noktası | *1080* veya *1085* veya *1090*                |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. **Kaydet ve seç** öğesine dokunun.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### NordVPN ile AdGuard nasıl kullanılır

1. NordVPN hesabınıza giriş yapın.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Elle kurulum](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Aşağıdaki verileri girin:

    | Alan                   | Değer                                                                                                                         |
    | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Proxy türü             | *SOCKS5*                                                                                                                      |
    | Proxy ana makine       | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxy bağlantı noktası | *1080*                                                                                                                        |

1. **Kullanıcı Adı** ve **Şifre** alanlarına NordVPN kimlik bilgilerinizi girin.

1. **Kaydet ve seç** öğesine dokunun.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### Shadowsocks ile AdGuard nasıl kullanılır

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::not

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. **Proxy sunucusu ekle** öğesine dokunun ve alanları doldurun:

    | Alan                   | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *1080*      |

1. **Kaydet ve seç** öğesine dokunun.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

### AdGuard Clash ile nasıl kullanılır

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Alan                   | Değer       |
    | ---------------------- | ----------- |
    | Proxy türü             | *SOCKS5*    |
    | Proxy ana makine       | *127.0.0.1* |
    | Proxy bağlantı noktası | *7891*      |

## Limitations

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. Bunu yapmak için **Uygulama yönetimi** öğesine ilerlemeniz, uygulamayı seçmeniz ve **Trafiği AdGuard üzerinden yönlendir** öğesini açmanız gerekir.
