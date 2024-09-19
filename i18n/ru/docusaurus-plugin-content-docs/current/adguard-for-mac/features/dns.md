---
title: DNS
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

## DNS-защита

The _DNS_ section contains one feature, _DNS protection_, with multiple settings:

- Providers
- Фильтры
- Blocklist
- Белый список

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

If you enable _DNS protection_, DNS traffic will be managed by AdGuard.

### Providers

Under _Providers_, you can select a DNS server to encrypt your DNS traffic and block ads and trackers if necessary. We recommend AdGuard DNS. For more advanced configuration, you can [set up a private AdGuard DNS server](https://adguard-dns.io/welcome.html) or add a custom one by clicking the `+` icon in the lower left corner.

### Фильтры

DNS filters apply ad-blocking rules at the DNS level. Such filtering is less precise than regular ad blocking, but it’s particularly useful for blocking an entire domain. To add a DNS filter, click `+`. You can find more DNS filters at [filterlists.com](https://filterlists.com/).

### Blocklist

Domains from this list will be blocked. To add a domain, click `+`. You can add domain names or DNS filtering rules using a [special syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

To export or import a blocklist, open the context menu.

### Белый список

Domains from this list aren’t filtered. To add a domain, click `+`. To export or import an allowlist, open the context menu.
