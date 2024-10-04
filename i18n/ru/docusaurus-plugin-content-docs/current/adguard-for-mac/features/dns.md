---
title: DNS
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

## DNS-защита

В разделе _DNS_ есть одна функция — DNS-защита — с несколькими настройками:

- Провайдеры
- Фильтры
- Чёрный список
- Белый список

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

Если вы включите _DNS-защиту_, DNS-трафиком будет управлять AdGuard.

### Провайдеры

В разделе _Провайдеры_ вы можете выбрать DNS-сервер, который будет шифровать DNS-трафик и, если это необходимо, блокировать рекламу и трекеры. Мы рекомендуем AdGuard DNS. For more advanced configuration, you can [set up a private AdGuard DNS server](https://adguard-dns.io/welcome.html) or add a custom one by clicking the `+` icon in the lower left corner.

### Фильтры

DNS filters apply ad-blocking rules at the DNS level. Such filtering is less precise than regular ad blocking, but it’s particularly useful for blocking an entire domain. To add a DNS filter, click `+`. You can find more DNS filters at [filterlists.com](https://filterlists.com/).

### Чёрный список

Domains from this list will be blocked. To add a domain, click `+`. You can add domain names or DNS filtering rules using a [special syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

To export or import a blocklist, open the context menu.

### Белый список

Domains from this list aren’t filtered. To add a domain, click `+`. To export or import an allowlist, open the context menu.
