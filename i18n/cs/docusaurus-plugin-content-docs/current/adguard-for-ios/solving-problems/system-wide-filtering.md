---
title: Jak povolit filtrování celého systému v AdGuardu pro iOS
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock).

:::

## O filtrování v celém systému

Filtrování v celém systému umožňuje blokovat reklamy a slídiče nejen v Safari, ale i v ostatních aplikacích a prohlížečích v zařízení iOS. iOS je poměrně uzavřený operační systém a Apple poskytuje jen omezené možnosti blokování reklam mimo Safari. Jediným způsobem, jak blokovat reklamy a slídiče v celém systému, je [DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering/). Tento článek vysvětluje, jak to povolit.

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Nejprve je třeba povolit DNS ochranu:

1. Otevřete *AdGuard*.
2. Klepněte na ikonu *Ochrana* (ikona štítu v dolní liště nabídky).
3. Zapněte *DNS ochranu*.

![DNS protection screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

Jakmile je DNS ochrana zapnutá, máte tři možnosti:

- **Použijte filtr AdGuard DNS.** K jeho povolení přejděte do *Ochrana* → *DNS ochrana* → *DNS filtrování* → *DNS filtry* → *Filtr AdGuard DNS*. Při této možnosti nejste vázáni na konkrétní blokovací server — veškeré blokování provádí filtr.
- **Použijte blokovací DNS server.** Jděte do *Ochrana* → *DNS ochrana* → *DNS server* a vyberte *AdGuard DNS* nebo jiný blokovací server podle svých představ.
- **Přidejte vlastní DNS filtr nebo soubor hosts.** Můžete přidat více DNS filtrů a souborů hosts. Uvědomte si, že použití příliš velkého počtu může zpomalit AdGuard.

## Jak přidat vlastní soubor DNS filtrování a soubor hosts

Pro příklad přidejme [OISD Blocklist Big](https://oisd.nl/).

1. Zkopírujte odkaz na OISD Blocklist Big: `https://big.oisd.nl`
2. Otevřete *Ochranu*  → *DNS ochrana* → *DNS filtrování* → *DNS filtry*.
3. Klepněte na *Přidat filtr*.
4. Vložte URL odkaz do pole filtru.
5. Klepněte na *Další* → *Přidat*.

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/adding_dns_filter.png)

Opakováním kroku 4 s jinou adresou URL přidejte libovolný počet filtrů DNS. Různé seznamy filtrů a odkazy na ně najdete na adrese [filterlists.com](https://filterlists.com).
