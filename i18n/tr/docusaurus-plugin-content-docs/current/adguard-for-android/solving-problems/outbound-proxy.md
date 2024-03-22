---
title: Giden proxy nasıl ayarlanır
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Aşağıda AdGuard'da proxy olarak çalışacak şekilde yapılandırabileceğiniz en ünlü uygulamaların bir listesini bulabilirsiniz.

:::not

Uygulamanız aşağıda listelenmiyorsa lütfen ayarlardan proxy yapılandırmalarını kontrol edin veya destek ekibiyle iletişime geçin.

:::

AdGuard allows you to route your device's traffic through a proxy server. Proxy ayarlarına erişmek için **Ayarlar** öğesini açın ve ardından **Filtreleme** → **Ağ** → **Proxy** öğesine ilerleyin.

## Proxy yapılandırma örnekleri

Bu makalede, AdGuard ile çalışmak için en popüler proxy'lerden bazılarının nasıl kurulacağına dair örnekler veriyoruz.

### Tor ile AdGuard nasıl kullanılır

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** öğesine gidin. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Open Orbot and press the **Start** button on the application's main screen.

1. AdGuard'ın **Proxy** ekranına geri dönün.

1. Tap the **Integrate with Tor** button.

1. Gerekli tüm alanlar önceden doldurulacaktır:

    | Alan                   | Değer                  |
    | ---------------------- | ---------------------- |
    | Proxy türü             | *SOCKS4* veya *SOCKS5* |
    | Proxy ana makine       | *127.0.0.1*            |
    | Proxy bağlantı noktası | *9050*                 |

    Veya **Proxy sunucusu** → **Proxy sunucusu ekle** öğesine dokunabilir, bu değerleri elle girebilir ve Orbot'u varsayılan proxy olarak ayarlayabilirsiniz.

1. Cihazınızın trafiğini proxy üzerinden yönlendirmek için ana Proxy düğmesini ve AdGuard korumasını etkinleştirin.

    Artık AdGuard tüm trafiği Orbot üzerinden yönlendirir. Orbot'u devre dışı bırakırsanız, AdGuard'da giden proxy ayarlarını devre dışı bırakana kadar internet bağlantısı kullanılamayacaktır.

### How to use AdGuard with PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. **Proxy sunucusu ekle** düğmesine dokunun ve aşağıdaki verileri girin:

    | Alan                   | Değer                                |
    | ---------------------- | ------------------------------------ |
    | Proxy türü             | *SOCKS5*                             |
    | Proxy ana makine       | *proxy-nl.privateinternetaccess.com* |
    | Proxy bağlantı noktası | *1080*                               |

1. Ayrıca **Kullanıcı Adı/Parola** alanlarını da doldurmanız gerekmektedir. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. "x" ile başlayan bir kullanıcı adı ve rastgele bir parola gösterilecektir. AdGuard'da **Proxy kullanıcı adı** ve **Proxy parolası** alanlarını doldurmak için bunları kullanın.

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

1. AdGuard'ı açın ve **Ayarlar** → **Filtreleme** → **Ağ** → **Proxy** → **Proxy sunucusu** öğesine gidin.

1. **Proxy sunucusu ekle** düğmesine dokunun ve aşağıdaki verileri girin:

    | Alan                   | Değer                                                                                                                           |
    | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
    | Proxy türü             | *SOCKS5*                                                                                                                        |
    | Proxy ana makine       | *any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent)* |
    | Proxy bağlantı noktası | *1080*                                                                                                                          |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

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

AdGuard proxy ayarlarını yapılandırdıktan sonra bile belirli trafiğin giden proxy üzerinden yönlendirilmesini engelleyebilecek bir faktör vardır. Uygulamanın kendisini trafiği AdGuard üzerinden gönderecek şekilde ayarlamazsanız bu durumla karşılaşabilirsiniz. Bunu yapmak için **Uygulama yönetimi** öğesine ilerlemeniz, uygulamayı seçmeniz ve **Trafiği AdGuard üzerinden yönlendir** öğesini açmanız gerekir.
