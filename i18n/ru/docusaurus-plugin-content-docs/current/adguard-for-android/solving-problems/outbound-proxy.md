---
title: Как настроить исходящий прокси
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Below is a list of the most well-known applications that can be configured to work as proxies in AdGuard.

:::note

Если вашего приложения нет в списке, проверьте конфигурацию прокси в настройках или напишите команде поддержки этого приложения.

:::

AdGuard позволяет направлять трафик устройства через прокси-сервер. Для доступа к настройкам прокси откройте **Настройки** и перейдите в раздел **Фильтрация** → **Сеть** → **Прокси**.

## Примеры конфигурации прокси-сервера

В этой статье даны примеры того, как настроить работу некоторые из самых популярных прокси для работы с AdGuard.

### Как использовать AdGuard вместе с Tor

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси**. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Откройте Orbot и нажмите кнопку **Запустить** в главном экране приложения.

1. Вернитесь на экран **Прокси** в AdGuard.

1. Нажмите **Интеграция с Tor**.

1. Все обязательные поля будут предварительно заполнены:

    | Поле        | Значение              |
    | ----------- | --------------------- |
    | Тип прокси  | *SOCKS4* или *SOCKS5* |
    | Прокси-хост | *127.0.0.1*           |
    | Порт прокси | *9050*                |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as the default proxy.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

    Now AdGuard will route all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable the outbound proxy settings in AdGuard.

### Как использовать AdGuard с PIA (Private Internet Access)

*Подразумевается, что у вас уже установлен PIA VPN.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                             |
    | ----------- | ------------------------------------ |
    | Тип прокси  | *SOCKS5*                             |
    | Прокси-хост | *proxy-nl.privateinternetaccess.com* |
    | Порт прокси | *1080*                               |

1. Вам также понадобится заполнить поля **Имя пользователя/Пароль**. Для этого войдите или зарегистрируйтесь [на сайте PIA](https://www.privateinternetaccess.com/pages/client-sign-in). Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Используйте их, чтобы заполнить поля **Имя пользователя** и **Пароль** в AdGuard.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard с TorGuard

*Подразумевается, что у вас уже установлен TorGuard.*

1. Откройте AdGuard и перейдите в раздел **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите **Добавить прокси** и введите следующие данные:

    | Поле        | Значение                                     |
    | ----------- | -------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                     |
    | Прокси-хост | *proxy.torguard.org* или *proxy.torguard.io* |
    | Порт прокси | *1080*, *1085* или *1090*                    |

1. В полях **Имя Пользователя** и **Пароль** введите имя пользователя и пароль, которые вы получили при регистрации в TorGuard.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard с NordVPN

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Поле        | Значение                                                                                                                      |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Тип прокси  | *SOCKS5*                                                                                                                      |
    | Прокси-хост | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Порт прокси | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Нажмите **Сохранить и выбрать**.

1. Включите основной переключатель Прокси и защиту AdGuard, чтобы направить трафик вашего устройства через прокси.

### Как использовать AdGuard вместе с Shadowsocks

*Подразумевается, что у вас уже установлен Shadowsocks и настроен нужный сервер.*

:::note

Перед настройкой процесса исключите приложение Shadowsocks из фильтрации (**Управление приложениями** → **Shadowsocks** → передвиньте влево переключатель **Направлять трафик через AdGuard**), чтобы избежать бесконечных циклов и падений.

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

*Подразумевается, что у вас уже установлен Clash.*

1. Откройте Clash и перейдите в **Настройки** → **Сеть** → **Маршрутизация системного трафика** и передвиньте переключатель влево. Это переведёт Clash в режим прокси.

1. Откройте AdGuard и перейдите в раздел **Управление приложениями**. Выберите **Clash для Android** и отключите **Направлять трафик через AdGuard**. Это предотвратит зацикливание трафика.

1. Затем перейдите в **Настройки** → **Фильтрация** → **Сеть** → **Прокси** → **Прокси-сервер**.

1. Нажмите **Добавить прокси-сервер** и заполните поля:

    | Поле        | Значение    |
    | ----------- | ----------- |
    | Тип прокси  | *SOCKS5*    |
    | Прокси-хост | *127.0.0.1* |
    | Порт прокси | *7891*      |

## Ограничения

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. Чтобы это исправить, откройте **Управление приложениями**, выберите нужное приложение и включите настройку **Направлять трафик через AdGuard**.
