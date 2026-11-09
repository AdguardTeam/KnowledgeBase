---
title: Sådan aktiveres systemniveaufiltrering i AdGuard til iOS
sidebar_position: 2
---

:::info

Denne artikel dækker AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Om systemniveaufiltrering

Systemniveaufiltrering betyder blokering af annoncer og trackere ud over i Safari-webbrowseren, dvs. også i andre apps og webbrowsere på iOS-enheden. iOS er et forholdsvis lukket operativsystem, og Apple tilbyder begrænsede muligheder for at blokere annoncer uden for Safari. Den eneste måde at blokere annoncer og trackere på systemniveau er via [>DNS-filtrering](https://adguard-dns.io/kb/general/dns-filtering/). Denne artikel forklarer, hvordan det aktiveres.

![Sådan fungerer DNS-filtrering](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Først skal DNS-beskyttelsen aktiveres:

1. Åbn *AdGuard*.
2. Tryk på ikonet *Beskyttelse* (skjoldikonet på nederste menubjælke).
3. Slå *DNS-beskyttelse* til.

![DNS-beskyttelsesskærm *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

Når DNS-beskyttelse er slået til, er der tre valgmuligheder:

- **Brug AdGuard DNS-filter.** For at aktivere det, gå til *Beskyttelse* → *DNS-beskyttelse* → *DNS-filtrering* → *DNS-filtre* → *AdGuard DNS-filter*. Denne indstilling kræver ikke brug af en bestemt blokeringsserver — filteret sørger for al blokeringen.
- **Brug en blokerende DNS-server.** Gå til *Beskyttelse* → *DNS-beskyttelse* → *DNS-server*, og vælg *AdGuard DNS* eller en anden blokerende server efter eget valg.
- **Tilføj et tilpasset DNS-filter eller hosts-fil.** Flere DNS-filtre og hosts-filer kan tilføjes. Vær opmærksom på, at brug af for mange kan gøre AdGuard langsommere.

## Sådan tilføjes tilpasset DNS-filter/hosts-fil

Lad os f.eks. tilføje [OISD Blocklist Big](https://oisd.nl/).

1. Kopiér linket til OISD Blocklist Big: `https://big.oisd.nl`
2. Åbn *Beskyttelse*  → *DNS-beskyttelse* → *DNS-filtrering* → *DNS-filtre*.
3. Tryk på *Tilføj et filter*.
4. Indsæt linket i filterets URL-felt.
5. Tryk på *Næste* → *Tilføj*.

![Skærmen Tilføjelse af DNS-filter *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/adding_dns_filter.png)

Tilføj et vilkårligt antal DNS-filtre ved at gentage trin 4 med en anden URL. Forskellige filterlister inkl. links kan findes på [filterlists.com](https://filterlists.com).
