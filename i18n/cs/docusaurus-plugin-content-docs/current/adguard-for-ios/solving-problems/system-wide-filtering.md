---
title: Jak nakonfigurovat filtrování v celém systému pomocí AdGuardu pro iOS
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

## O filtrování v celém systému

Filtrování v celém systému znamená blokování reklam a slídičů mimo prohlížeč Safari, tedy v jiných aplikacích a prohlížečích. V tomto článku se dozvíte, jak to v zařízení se systémem iOS nastavit.

V systému iOS je jediným způsobem, jak blokovat reklamy a slídiče v celém systému, použití [DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering/). Nejprve musíte zapnout DNS ochranu. Za tímto účelem otevřete *nastavení AdGuardu pro iOS* → *DNS ochrana* a zapněte ji.

![Obrazovka DNS ochrany *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Pokud je vaším cílem blokovat reklamy a slídiče v celém systému, máte dvě možnosti:

1. Zapněte server AdGuard DNS (*Nastavení* → *DNS ochrana* → *DNS server* → *AdGuard DNS*).
2. Přidejte soubor DNS filtr/hosts, který bude blokovat reklamy a slídiče, např. filtr AdGuard DNS.

Druhá možnost vyžaduje trochu více času na nastavení, ale má několik výhod:

* Můžete používat libovolný DNS server podle vlastního uvážení a nejste vázáni na konkrétní server pro blokování.
* Můžete přidat více DNS filtrů a/nebo souborů hostitelů najednou, ale nemůžete používat více DNS serverů najednou.

![Jak funguje DNS filtrování](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Jak přidat soubor DNS filtr/hosts

Můžete přidat libovolný filtr DNS nebo soubor hosts, pokyny budou pro všechny stejné. Pro účely příkladu přidejme [filtr AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter). Filtr složený z více jiných filtrů (Základní filtrAdGuard, Filtr sociálních médií, Filtr ochrany sledování, Filtr mobilních reklam, EasyList, EasyPrivacy atd.), který je zjednodušený pro lepší kompatibilitu s blokováním reklamy na úrovni DNS.

1. Otevřete *Nastavení AdGuardu pro iOS* → *Obecné*.
2. Povolte *Pokročilý režim*. Zobrazí se karta *Pokročilá nastavení*. Otevřete ji.

![Otevřít Nastavení AdGuardu a povolit pokročilý režim *mobile_border](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg)

![Obrazovka pokročilých nastavení *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_advanced_settings.PNG)

:::note

Nedoporučujeme se dotýkat dalších nastavení, která najdete na kartě *Pokročilá nastavení*, zejména pokud jde o *Nízkoúrovňová nastavení*. Některé z nich mohou narušit internetové připojení nebo ohrozit vaše soukromí a bezpečnost, proto je lepší být opatrný. Níže uvedený text popisuje přesné úkony potřebné k přidání filtru AdGuard DNS.

:::

3. Zkopírujte tento odkaz: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt` (je to odkaz na filtr AdGuard DNS)
4. Otevřete *Nastavení AdGuardu pro iOS* → *DNS ochrana* → *DNS filtrování* (dostupné, když je povolen *Pokročilý režim*) → *DNS filtry*.
5. Tap *Add a filter*, paste the link into the filter URL field, and tap 'Next'.

![Obrazovka přidání DNS filtru *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_adding_a_filter.PNG)

Stejným způsobem můžete přidat libovolný počet dalších DNS filtrů vložením jiné adresy URL v kroku 3. Různé filtry a odkazy na ně najdete [zde](https://filterlists.com).
