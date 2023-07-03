---
title: Как настроить вышестоящий прокси-сервер
sidebar_position: 8
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

Эта статья рассказывает, как настроить работу некоторых наиболее популярных прокси параллельно с AdGuard.

### Как использовать AdGuard вместе с Tor

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Сеть** → **Настройки прокси**. Скачайте "Orbot: Proxy with Tor", нажав на кнопку **Настроить интеграцию с Tor®**, или скачайте его напрямую с [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess).

2. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

2. Вернитесь на экран **Настроек прокси** в AdGuard.

3. Тапните по кнопке **Настроить интеграцию с Tor®r**.

4. Все обязательные поля будут предварительно заполнены:

| Поле        | Значение              |
| ----------- | --------------------- |
| Тип прокси  | *SOCKS4* или *SOCKS5* |
| Прокси-хост | *127.0.0.1*           |
| Порт прокси | *9050*                |

Или же вы можете нажать на **Добавить прокси** и ввести эти значения вручную, и затем выставить Orbot как прокси по умолчанию.

5. Включите защиту AdGuard.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Сеть** → **Настройки прокси**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

| Поле        | Значение                             |
| ----------- | ------------------------------------ |
| Тип прокси  | *SOCKS5*                             |
| Прокси-хост | *proxy-nl.privateinternetaccess.com* |
| Порт прокси | *1080*                               |

3. Вам также понадобится заполнить поля **Имя пользователя/Пароль**. Для этого залогиньтесь в [Панели Клиентского Контроля](https://www.privateinternetaccess.com/pages/client-sign-in) на сайте PIA. Кликните по кнопке **Сгенерировать пароль** в секции **Сгенерировать пароль PPTP/L2TP/SOCKS**. Вам будет показано имя пользователя, начинающееся с "x" и случайный пароль. Используйте их, чтобы заполнить поля **Имя пользователя** и **Пароль** в AdGuard.

4. Установите этот прокси "по умолчанию" при помощи переключателя наверху экрана, затем нажмите **Сохранить**.

5. Включите защиту AdGuard.

### Как использовать AdGuard с TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Сеть** → **Настройки прокси**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

| Поле        | Значение                                     |
| ----------- | -------------------------------------------- |
| Тип прокси  | *SOCKS5*                                     |
| Прокси-хост | *proxy.torguard.org* или *proxy.torguard.io* |
| Порт прокси | *1080*, или *1085*, или *1090*               |

3. В полях **Имя Пользователя** и **Пароль** введите ваши имя пользователя и пароль, которые вы получили при регистрации в TorGuard.

4. Установите этот прокси "по умолчанию" при помощи переключателя наверху экрана, затем нажмите **Сохранить**.

5. Включите защиту AdGuard.

### Как использовать AdGuard с NordVPN

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Сеть** → **Настройки прокси**.

2. Нажмите на **Добавить прокси** и введите следующие данные:

| Поле        | Значение                                                                           |
| ----------- | ---------------------------------------------------------------------------------- |
| Тип прокси  | *SOCKS5*                                                                           |
| Прокси-хост | *любой сервер кроме "Маскирующих" из [этого списка](https://nordvpn.com/servers/)* |
| Порт прокси | *1080*                                                                             |

3. В полях **Имя Пользователя** и **Пароль** введите ваши имя пользователя и пароль от NordVPN.

4. Установите этот прокси "по умолчанию" при помощи переключателя наверху экрана, затем нажмите **Сохранить**.

5. Включите защиту AdGuard.

### Как использовать AdGuard вместе с Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

**Note: You should remove Shadowsocks application from filtering before setting up the process (AdGuard - Apps management - Shadowsocks - Disable AdGuard protection) to avoid infinite loops and drops.**

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Сеть** → **Настройки прокси**.

2. Нажмите на **Добавить прокси** и добавьте следующие значения:

| Поле        | Значение    |
| ----------- | ----------- |
| Тип прокси  | *SOCKS5*    |
| Прокси-хост | *127.0.0.1* |
| Порт прокси | *1080*      |

3. Нажмите **Сохранить и выбрать**

### Ограничения

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
