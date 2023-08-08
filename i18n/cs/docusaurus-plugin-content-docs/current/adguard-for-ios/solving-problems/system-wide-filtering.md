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

 1. Použijte filtr AdGuard DNS (*Ochrana* (ikona štítu ve spodním menu) → *DNS ochrana* → *DNS filtrování* → *DNS filtry* → *Filtr AdGuard DNS*).
 2. Použijte server AdGuard DNS (*Ochrana* (ikona štítu v dolním menu) → *DNS ochrana* → *DNS server* → *AdGuard DNS*) nebo jiný DNS server podle vašich představ.
 3. Přidejte vlastní soubor DNS filtrování/hosts podle svých představ.

První a třetí možnost mají několik výhod:

* Můžete používat libovolný DNS server podle vlastního uvážení a nejste vázáni na konkrétní server pro blokování, protože blokování provádí filtr.
* Můžete přidat více DNS filtrů a/nebo souborů hosts (i když použití příliš velkého počtu může AdGuard zpomalit).

![Jak funguje DNS filtrování](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Jak přidat vlastní soubor DNS filtrování/hosts

Můžete přidat libovolný DNS filtr nebo soubor hosts.

Pro účely příkladu přidejme [OISD Blocklist Big](https://oisd.nl/).

1. Zkopírujte tento odkaz: `https://big.oisd.nl` (je to odkaz na filtr OISD Blocklist Big)
2. Otevřete *Ochranu* (ikona štítu ve spodním menu) → *DNS ochrana* → *DNS filtrování* → *DNS filtry*.
3. Klepněte na *Přidat filtr*.
4. Vložte URL odkaz do pole filtru.
5. Klepněte na *Další* → *Přidat*.

![Obrazovka přidání DNS filtru *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Stejným způsobem můžete přidat libovolný počet dalších DNS filtrů vložením jiné adresy URL v kroku 4. Různé filtry a odkazy na ně najdete [zde](https://filterlists.com).
