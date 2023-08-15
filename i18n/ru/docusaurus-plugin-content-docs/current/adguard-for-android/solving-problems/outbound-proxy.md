---
title: Как настроить вышестоящий прокси-сервер
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://adguard.com/download.html?auto=true)

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### Как использовать AdGuard вместе с Tor

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Скачайте «Orbot: Proxy with Tor» напрямую из [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) или нажав **«Интегрировать с Tor**, а затем **Установить**.

1. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

1. Go back to the **Proxy** screen of AdGuard.

1. Тапните по кнопке **Настроить интеграцию с Tor®r**.

1. All the required fields will be pre-filled:

    | Поле        | Значение              |
    | ----------- | --------------------- |
    | Тип прокси  | *SOCKS4* или *SOCKS5* |
    | Прокси-хост | *127.0.0.1*           |
    | Порт прокси | *9050*                |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

    Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                             |
    | ----------- | ------------------------------------ |
    | Тип прокси  | *SOCKS5*                             |
    | Прокси-хост | *proxy-nl.privateinternetaccess.com* |
    | Порт прокси | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Click the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with "x" and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard с TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                    |
    | ----------- | ------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                    |
    | Прокси-хост | *proxy.torguard.org* or *proxy.torguard.io* |
    | Порт прокси | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard с NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                                                       |
    | ----------- | ------------------------------------------------------------------------------ |
    | Тип прокси  | *SOCKS5*                                                                       |
    | Прокси-хост | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Порт прокси | *1080*                                                                         |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard вместе с Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** and fill in the fields:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *1080*      |

1. Tap **Save and select**.

1. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *7891*      |

## Ограничения

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
