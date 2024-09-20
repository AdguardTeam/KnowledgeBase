---
title: DNS-защита
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

The DNS protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _DNS protection_.

:::tip

DNS protection works differently from regular ad and tracker blocking. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS protection_ allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Некоторые DNS-серверы располагают чёрными списками, которые помогают блокировать DNS-запросы к потенциально опасным доменам

- В дополнение к DNS-серверам, AdGuard может самостоятельно фильтровать DNS-запросы с помощью специального DNS-фильтра. Он содержит большой список рекламных и трекинговых доменов — запросы к ним перенаправляются на сервер blackhole

- Вы также можете блокировать и разблокировать домены, создавая пользовательские правила. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS-сервер

В этом разделе вы можете выбрать DNS-сервер для разрешения DNS-запросов, блокировки рекламы и трекеров, а также шифрования DNS-трафика. Нажмите на сервер, чтобы увидеть его полное описание и выбрать протокол. Если вы не нашли нужный сервер, его можно добавить вручную:

- Tap _Add DNS server_ and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and tap _Add to AdGuard_ next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

By default, _Automatic DNS_ is selected. Он устанавливает DNS-сервер на основе настроек AdGuard и вашего устройства. If you have [integration with AdGuard VPN](/adguard-for-android/features/integration-with-vpn) or another SOCKS5 proxy enabled, it connects to _AdGuard DNS Non-filtering_ or any other server you specify. Во всех остальных случаях приложение подключится к DNS-серверу, выбранному в настройках устройства.

#### DNS-фильтры

В этом разделе вы можете добавлять собственные DNS-фильтры и правила DNS-фильтрации. You can find more filters at [filterlists.com](https://filterlists.com/).
