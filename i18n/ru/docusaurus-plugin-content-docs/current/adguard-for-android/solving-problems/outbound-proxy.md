---
title: How to setup outbound proxy
sidebar_position: 8
---

Эта статья рассказывает, как настроить работу некоторых наиболее популярных прокси параллельно с AdGuard.

### Как использовать AdGuard вместе с Tor

1. Open AdGuard and go to **Settings** > **Network** > **Proxy settings**. Скачайте "Orbot: Proxy with Tor", нажав на кнопку **Настроить интеграцию с Tor®**, или скачайте его напрямую с [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess).

2. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

2. Вернитесь на экран **Настроек прокси** в AdGuard.

3. Tap the **Integrate with Tor** button.

4. Все обязательные поля будут предварительно заполнены:

| Поле        | Значение              |
| ----------- | --------------------- |
| Тип прокси  | *SOCKS4* или *SOCKS5* |
| Прокси-хост | *127.0.0.1*           |
| Порт прокси | *9050*                |

Or you can tap **Add proxy**, enter these values manually, and set Orbot as a default proxy.

5. Включить защиту AdGuard.

> Теперь AdGuard будет перенаправлять весь трафик через Orbot. Если вы отключите Orbot, подключение к интернету будет недоступно до тех пор, пока вы не отключите настройки исходящего прокси в AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Здесь мы предполагаем, что вы уже являетесь клиентом PIA VPN и он установлен на вашем устройстве.*

1. Open AdGuard and go to **Settings** > **Network** > **Proxy settings**.

2. Tap the **Add proxy server** button and enter the following data:

| Поле        | Значение                             |
| ----------- | ------------------------------------ |
| Тип прокси  | *SOCKS5*                             |
| Прокси-хост | *proxy-nl.privateinternetaccess.com* |
| Порт прокси | *1080*                               |

3. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. Use them to fill out the **Username** and **Password** fields in AdGuard.

4. Set this proxy as a default one by toggling the switch, then click **Save**.

5. Включить защиту AdGuard.

### Как использовать AdGuard с TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** > **Network** > **Proxy settings**.

2. Tap the **Add proxy server** button and enter the following data:

| Поле        | Значение                                     |
| ----------- | -------------------------------------------- |
| Тип прокси  | *SOCKS5*                                     |
| Прокси-хост | *proxy.torguard.org* или *proxy.torguard.io* |
| Порт прокси | *1080*, или *1085*, или *1090*               |

3. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

4. Set this proxy as a default one by toggling the switch, then click **Save**.

5. Включить защиту AdGuard.

### Как использовать AdGuard с NordVPN

1. Open AdGuard and go to **Settings** > **Network** > **Proxy settings**.

2. Tap the **Add proxy server** button and enter the following data:

| Поле        | Значение                                                                          |
| ----------- | --------------------------------------------------------------------------------- |
| Тип прокси  | *SOCKS5*                                                                          |
| Прокси-хост | *any server save for "Obfuscated" from [this list](https://nordvpn.com/servers/)* |
| Порт прокси | *1080*                                                                            |

3. For **Username** and **Password** fields, enter your NordVPN Username and Password.

4. Set this proxy as a default one by toggling the switch, then click **Save**.

5. Включить защиту AdGuard.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

**Note: You should remove Shadowsocks application from filtering before setting up the process (AdGuard - Apps management - Shadowsocks - Disable AdGuard protection) to avoid infinite loops and drops.**

1. Open AdGuard and go to  **Settings** > **Network** > **Proxy settings**.

2. Tap the **Add proxy server** and fill the fields:

| Поле        | Значение    |
| ----------- | ----------- |
| Тип прокси  | *SOCKS5*    |
| Прокси-хост | *127.0.0.1* |
| Порт прокси | *1080*      |

3. Tap **Save and select**

### Limitations

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab. 