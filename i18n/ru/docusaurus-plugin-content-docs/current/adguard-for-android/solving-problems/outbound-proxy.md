---
title: How to set up outbound proxy
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Below you can find a list of the most famous applications that you can configure to work as proxies in AdGuard.

:::note

If your app is not listed below, please check on its proxy configurations in the settings or contact its support team.

:::

AdGuard позволяет направлять трафик устройства через прокси-сервер. Для доступа к настройкам прокси откройте **Настройки** и перейдите в раздел **Фильтрация** → **Сеть** → **Прокси**.

## Примеры конфигурации прокси-сервера

В этой статье даны примеры того, как настроить работу некоторые из самых популярных прокси для работы с AdGuard.

### Как использовать AdGuard вместе с Tor

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси**. Скачайте «Orbot: Proxy with Tor» напрямую из [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) или нажав **«Интегрировать с Tor**, а затем **Установить**.

1. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

1. Вернитесь на экран **Прокси** в AdGuard.

1. Тапните по кнопке **Настроить интеграцию с Tor®r**.

1. Все обязательные поля будут предварительно заполнены:

    | Поле        | Значение              |
    | ----------- | --------------------- |
    | Тип прокси  | *SOCKS4* или *SOCKS5* |
    | Прокси-хост | *127.0.0.1*           |
    | Порт прокси | *9050*                |

    Или же вы можете нажать на **Прокси** → **Добавить прокси-сервер**, ввести эти значения вручную и установить Orbot в качестве прокси-сервера по умолчанию.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

    Теперь AdGuard будет перенаправлять весь трафик через Orbot. Если вы отключите Orbot, подключение к интернету будет недоступно до тех пор, пока вы не отключите настройки исходящего прокси в AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Здесь мы предполагаем, что вы уже клиент PIA VPN и он установлен на вашем устройстве.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                             |
    | ----------- | ------------------------------------ |
    | Тип прокси  | *SOCKS5*                             |
    | Прокси-хост | *proxy-nl.privateinternetaccess.com* |
    | Порт прокси | *1080*                               |

1. Вам также понадобится заполнить поля **Имя пользователя/Пароль**. Для этого залогиньтесь в [Панели Клиентского Контроля](https://www.privateinternetaccess.com/pages/client-sign-in) на сайте PIA. Кликните по кнопке **Сгенерировать пароль** в секции **Сгенерировать пароль PPTP/L2TP/SOCKS**. A username starting with "x" and a random password will be shown. Используйте их, чтобы заполнить поля **Имя пользователя** и **Пароль** в AdGuard.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard с TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                    |
    | ----------- | ------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                    |
    | Прокси-хост | *proxy.torguard.org* or *proxy.torguard.io* |
    | Порт прокси | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard с NordVPN

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите на **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                                                          |
    | ----------- | --------------------------------------------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                                                          |
    | Прокси-хост | *любой сервер из [этого списка](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Порт прокси | *1080*                                                                            |

1. For **Username** and **Password** fields, enter your NordVPN Username and Password.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard вместе с Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите **Добавить прокси-сервер** и заполните поля:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *1080*      |

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard вместе с Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. Это переведёт Clash в режим прокси.

1. Откройте AdGuard и перейдите в раздел **Управление приложениями**. Выберите **Clash для Android** и отключите **Направлять трафик через AdGuard**. Это предотвратит зацикливание трафика.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Нажмите **Добавить прокси-сервер** и заполните поля:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *7891*      |

## Ограничения

There is a factor that can prevent certain traffic from being routed through the outgoing proxy even after you configure AdGuard proxy settings. It can happen if you don't set up the app itself to send the traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
