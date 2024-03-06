---
title: iOS için AdGuard'da sistem genelinde filtreleme nasıl etkinleştirilir
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard'ı ele alır. Nasıl çalıştığını ilk elden görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Sistem genelinde filtreleme hakkında

System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to enable it on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/).

First, you have to enable DNS protection. Bunu yapmak için:

1. Open *AdGuard for iOS*.
2. Tap *Protection* icon (the second icon in the bottom menu bar).
3. Turn *DNS protection* switch on.

![DNS protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Now, if your purpose is to block ads and trackers system-wide, you have three options:

 1. Use AdGuard DNS filter (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*).
 2. Use AdGuard DNS server (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS server* → *AdGuard DNS*) or another blocking DNS server to your liking.
 3. Add a custom DNS filter/hosts file to your liking.

The first and third option have several advantages:

- You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking.
- You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## How to add custom DNS filter/hosts file

You can add any DNS filter or hosts file you like.

For the sake of the example, let's add [OISD Blocklist Big](https://oisd.nl/).

1. Copy this link: `https://big.oisd.nl` (it's a link for OISD Blocklist Big filter)
2. *Koruma* (alt menüdeki kalkan simgesi) → *DNS koruması* → *DNS filtreleme* → *DNS filtreleri* öğesini açın.
3. *Filtre ekle* öğesine dokunun.
4. Bağlantıyı filtre URL alanına yapıştırın.
5. *Sonraki* → *Ekle* öğesine dokunun.

![DNS filtre ekranı ekleme *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

4. adımda farklı bir URL yapıştırarak istediğiniz sayıda diğer DNS filtresini aynı şekilde ekleyin. Çeşitli filtreleri ve bunların bağlantılarını [burada](https://filterlists.com) bulabilirsiniz.
