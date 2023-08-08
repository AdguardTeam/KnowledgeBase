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

2. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

3. Go back to the **Proxy** screen of AdGuard.

4. Тапните по кнопке **Настроить интеграцию с Tor®r**.

5. Все обязательные поля будут предварительно заполнены:

    | Поле        | Значение              |
    | ----------- | --------------------- |
    | Тип прокси  | *SOCKS4* или *SOCKS5* |
    | Прокси-хост | *127.0.0.1*           |
    | Порт прокси | *9050*                |

Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

6. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

Теперь AdGuard будет перенаправлять весь трафик через Orbot. Если вы отключите Orbot, подключение к интернету будет недоступно до тех пор, пока вы не отключите настройки исходящего прокси в AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Здесь мы предполагаем, что вы уже клиент PIA VPN и он установлен на вашем устройстве.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                             |
    | ----------- | ------------------------------------ |
    | Тип прокси  | *SOCKS5*                             |
    | Прокси-хост | *proxy-nl.privateinternetaccess.com* |
    | Порт прокси | *1080*                               |

3. Вам также понадобится заполнить поля **Имя пользователя/Пароль**. Для этого залогиньтесь в [Панели Клиентского Контроля](https://www.privateinternetaccess.com/pages/client-sign-in) на сайте PIA. Кликните по кнопке **Сгенерировать пароль** в секции **Сгенерировать пароль PPTP/L2TP/SOCKS**. Вам будет показано имя пользователя, начинающееся с "x" и случайный пароль. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard с TorGuard

*Здесь мы предполагаем, что вы уже клиент TorGuard и он установлен на вашем устройстве.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                     |
    | ----------- | -------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                     |
    | Прокси-хост | *proxy.torguard.org* или *proxy.torguard.io* |
    | Порт прокси | *1080*, или *1085*, или *1090*               |

3. В полях **Имя Пользователя** и **Пароль** введите ваши имя пользователя и пароль, которые вы получили при регистрации в TorGuard.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard с NordVPN

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                                                       |
    | ----------- | ------------------------------------------------------------------------------ |
    | Тип прокси  | *SOCKS5*                                                                       |
    | Прокси-хост | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Порт прокси | *1080*                                                                         |

3. В полях **Имя Пользователя** и **Пароль** введите ваши имя пользователя и пароль от NordVPN.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Как использовать AdGuard вместе с Shadowsocks

*Подразумевается, что вы уже настроили Shadowsocks и он установлен на вашем устройстве.*

:::note

You should remove Shadowsocks application from filtering before setting up the process (**Settings** → **Filtering** → **Apps** → **App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** and fill in the fields:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *1080*      |

3. Tap **Save and select**.

4. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.
2. Open Adguard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.
3. Then go to **Settings** → **Network** → **Proxy** → **Proxy server**.
4. Tap **Add proxy server** and fill in the fields:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *7891*      |

## Ограничения

Есть фактор, который может помешать определённому трафику проходить через исходящий прокси. AdGuard будет направлять через прокси только тот трафик, который проходит через сам AdGuard. По сути, это означает приложения, у которых выставлена галочка напротив пункта **Блокировка рекламы** во вкладке **Настройки приложений**.