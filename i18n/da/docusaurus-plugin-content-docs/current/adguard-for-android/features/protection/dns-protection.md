---
title: DNS-beskyttelse
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Modulet DNS-beskyttelse kan tilgås ved tryk på fanen _Beskyttelse_ (2. ikon til venstre nederst på skærmen) og dernæst vælge _DNS-beskyttelse_.

:::tip

DNS-beskyttelse fungerer anderledes end almindelig ad- og trackerblocking. Der kan [læses mere herom, samt hvordan det fungerer, i den dedikerede artikel](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS-beskyttelse_ muliggør filtrering af DNS-forespørgsler via valgt DNS-server, DNS-filtre og brugerregler:

- Nogle DNS-servere har blokeringslister som hjælp til at blokere DNS-forespørgsler til potentielt skadelige domæner

- Ud over DNS-servere kan AdGuard også selv filtrere DNS-forespørgsler via et særligt DNS-filter. Det indeholder en stor liste over reklame- og sporingsdomæner, og forespørgsler til disse omdirigeres til en blackhole-server

- Domæner kan også blokeres/afblokeres ved at oprette brugerregler. Det er muligvis nødvendigt at konsultere vores artikel om [DNS-filtreringsregelsyntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS-beskyttelse \*mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS-server

I dette afsnit kan en DNS-server vælges til opløsning af DNS-forespørgsler, blokering af annoncer og trackere samt kryptering af DNS-trafik. Tryk på en server for at se dens fulde beskrivelse, og vælg en protokol. Blev en ønsket server ikke fundet, kan den tilføjes manuelt:

- Tryk på _Tilføj DNS-server_ og angiv serveradresse(n/rne)

- Alternativt kan der vælges en DNS-server fra [listen over kendte DNS-udbydere](https://adguard-dns.io/kb/general/dns-providers/) og trykkes på _Føj til AdGuard_ ved siden af den

- Anvendes en privat AdGuard DNS-server, kan den føjes til AdGuard via [betjeningspanelet](https://adguard-dns.io/dashboard/)

Som standard er _Automatisk DNS_ valgt. En DNS-server vælges så automatisk baseret på AdGuard- og enhedsindstillingerne. Er [integration med AdGuard VPN](/adguard-for-android/features/integration-with-vpn) eller anden SOCKS5-proxy slået til, opretter den forbindelse til _AdGuard DNS Non-filtring_ eller enhver anden angivet server. I alle andre tilfælde opretter den forbindelse til den i enhedsindstillingerne valgte DNS-server.

#### DNS-filtre

Dette afsnit muliggør tilføjelse af tilpassede DNS-filtre og -filtreringsregler. Flere filtre kan findes på [filterlists.com](https://filterlists.com/).
