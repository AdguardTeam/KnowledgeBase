---
title: Cómo habilitar el filtrado en todo el sistema en AdGuard para iOS
sidebar_position: 2
---

:::info

Este artículo trata sobre AdGuard para iOS, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works firsthand, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

## Acerca del filtrado en todo el sistema

System-wide filtering lets you block ads and trackers not just in Safari, but across other apps and browsers on your iOS device. iOS is a fairly closed operating system, and Apple provides limited options for blocking ads outside Safari. The only way to block ads and trackers system-wide is through [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/). This article explains how to enable it.

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

The first thing you need to do is enable DNS protection:

1. Open *AdGuard*.
2. Tap the *Protection* icon (shield icon in the bottom menu bar).
3. Turn on *DNS protection*.

![Pantalla de protección DNS *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

Once DNS protection is on, you have three options:

- **Use AdGuard DNS filter.** To enable it, go to *Protection* → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*. With this option, you’re not tied to a specific blocking server — the filter does all the blocking.
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

Add any number of DNS filters by repeating step 4 with a different URL. You can find various filter lists and their links at [filterlists.com](https://filterlists.com).
