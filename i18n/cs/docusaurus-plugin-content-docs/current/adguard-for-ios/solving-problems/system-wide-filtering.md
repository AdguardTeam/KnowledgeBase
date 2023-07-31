---
title: Jak povolit filtrování celého systému v AdGuardu pro iOS
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

## O filtrování v celém systému

Filtrování v celém systému znamená blokování reklam a slídičů mimo prohlížeč Safari, tedy v jiných aplikacích a prohlížečích. V tomto článku se dozvíte, jak to v zařízení se systémem iOS povolit.

V systému iOS je jediným způsobem, jak blokovat reklamy a slídiče v celém systému, použití [DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering/).

Nejprve musíte zapnout DNS ochranu. K tomu je třeba:

1. Otevřete *AdGuard pro iOS*.
2. Klepněte na ikonu *Ochrana* (druhá ikona v dolní liště nabídky).
3. Zapněte *DNS ochranu*.

![Obrazovka DNS ochrany *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Pokud je vaším cílem blokovat reklamy a slídiče v celém systému, máte tři možnosti:

 1. Use AdGuard DNS filter (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*).
 2. Use AdGuard DNS server (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS server* → *AdGuard DNS*) or another blocking DNS server to your liking.
 3. Add a custom DNS filter/hosts file to your liking.

The first and third option have several advantages:

* You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking.
* You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).

![Jak funguje DNS filtrování](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## How to add custom DNS filter/hosts file

You can add any DNS filter or hosts file you like.

For the sake of the example, let's add [OISD Blocklist Big](https://oisd.nl/).

1. Copy this link: `https://big.oisd.nl` (it's a link for OISD Blocklist Big filter)
2. Open *Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Klepněte na *Přidat filtr*.
4. Vložte URL odkaz do pole filtru.
5. Klepněte na *Další* → *Přidat*.

![Obrazovka přidání DNS filtru *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Stejným způsobem můžete přidat libovolný počet dalších DNS filtrů vložením jiné adresy URL v kroku 4. Různé filtry a odkazy na ně najdete [zde](https://filterlists.com).
