---
title: DNS-beskyttelse
sidebar_position: 4
---

DNS-beskyttelse giver mere kontrol over, hvordan enheden opretter forbindelse til internet. Der er tre hovedårsager til, at det kan være nyttigt:

## 1. Beskyttelse af fortroligheden overfor ISP'en

Inden et websted kan tilgås, f.eks. `google.com`, sender webbrowseren en forespørgsel til en DNS-server for at få webstedets IP-adresse oplyst. Normalt tilhører DNS-serveren ISP'en, hvilket betyder, at denne kan spore de websteder, som besøges. Skifter til en anden DNS-server, såsom AdGuard DNS, kan ISP'en ikke længere se brugerens onlineaktivitet.

## 2. Kryptering af DNS-trafik

Moderne protokoller, såsom DNS-over-TLS og DNS-over-HTTPS sikrer, at DNS-forespørgslerne krypteres. Dette beskytter dem mod at blive opsnappet, ændret eller overvåget af angribere.

## 3. Blokering af uønsket indhold på DNS-niveau

DNS-beskyttelse kan bortfiltrere annoncer, trackere, phishing-websteder og andet skadeligt eller irriterende indhold, før det overhovedet indlæses i webbrowseren eller i apps. [Læs mere om DNS-filtrering](https://adguard-dns.io/kb/general/dns-filtering/)

![DNS-beskyttelse \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Her er, hvad der kan opsættes i DNS-beskyttelse:

## Valg af DNS-server

![DNS-servere \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Der kan vælges mellem flere betroede DNS-udbydere. AdGuard selv tilbyder flere valgmuligheder til forskellige behov:

- AdGuard DNS — blokerer annoncer og trackere.

- AdGuard DNS Family Protection — blokerer annoncer, trackere og voksenindhold.

- AdGuard DNS Non-filtering — leverer en sikker og pålidelig forbindelse uden nogen filtrering.

Der kan anvendes en af vores offentlige servere, tilføjes en egen tilpasset DNS-server eller vælges en anden pålidelig mulighed fra vores [liste over pålidelige DNS-udbydere](https://adguard-dns.io/kb/general/dns-providers/).

## Tilføjelse af DNS-filtre og -regler

For at finjustere beskyttelsen kan der oprettes egne DNS-filtre ved brug af [DNS-regelsyntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/) eller impores færdiglavede [DNS-filtre](https://filterlists.com).

Derudover kan der oprettes tilpassede DNS-regler til at blokere, afblokere eller omdirigere domæner efter behov. Brug vores indbyggede regelkonstruktør.
