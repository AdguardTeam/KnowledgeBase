---
title: iOS için AdGuard'da sistem genelinde filtreleme nasıl etkinleştirilir
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard'ı ele alır. To see how it works firsthand, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

## Sistem genelinde filtreleme hakkında

System-wide filtering lets you block ads and trackers not just in Safari, but across other apps and browsers on your iOS device. iOS is a fairly closed operating system, and Apple provides limited options for blocking ads outside Safari. Reklamları ve izleyicileri sistem genelinde engellemenin tek yolu [DNS filtrelemesidir](https://adguard-dns.io/kb/general/dns-filtering/). This article explains how to enable it.

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Yapmanız gereken ilk şey DNS korumasını etkinleştirmektir:

1. Open *AdGuard*.
2. Tap the *Protection* icon (shield icon in the bottom menu bar).
3. Turn on *DNS protection*.

![DNS protection screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

Once DNS protection is on, you have three options:

- **Use AdGuard DNS filter.** To enable it, go to *Protection* → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*. Bu seçenekle, belirli bir engelleme sunucusuna bağlı kalmazsınız — tüm engellemeyi filtre yapar.
- **Use a blocking DNS server.** Go to *Protection* → *DNS protection* → *DNS server* and select *AdGuard DNS* or another blocking server to your liking.
- **Add a custom DNS filter or hosts file.** You can add multiple DNS filters and hosts files. Be aware that using too many may slow down AdGuard.

## How to add custom DNS filter and hosts file

For example, let’s add the [OISD Blocklist Big](https://oisd.nl/).

1. Copy the OISD Blocklist Big link: `https://big.oisd.nl`
2. Open *Protection*  → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Tap *Add a filter*.
4. Paste the link into the filter URL field.
5. Tap *Next* → *Add*.

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/adding_dns_filter.png)

4. adımı farklı bir URL ile tekrarlayarak istediğiniz sayıda DNS filtresi ekleyebilirsiniz. [filterlists.com](https://filterlists.com) adresinde çeşitli filtre listelerini ve bağlantılarını bulabilirsiniz.
