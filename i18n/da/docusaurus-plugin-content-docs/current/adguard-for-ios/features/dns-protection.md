---
title: DNS-beskyttelse
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

[DNS-beskyttelsesmodulet](https://adguard-dns.io/kb/general/dns-filtering/) forbedrer brugerfortroligheden ved at kryptere DNS-trafikken. Modsat Safaris indholdsblokering, fungerer DNS-beskyttelse på systemniveau, dvs. også i apps og andre webbrowsere end Safari. Dette modul skal aktiveres, før det kan anvendes. Dette kan gøres ved at trykke på skjoldikonet øverst på skærmen eller ved at gå til fanen _Beskyttelse_ → _DNS-beskyttelse_.

:::note

For at kunne håndtere DNS-indstillinger kræver AdGuard-apps oprettelse af et lokalt VPN. Den vil ikke rute trafikken igennem nogen fjernservere. Systemet vil dog stadig kræve, at tilladelsesadgangen bekræftes.

:::

### DNS-implementering {#dns-implementation}

![Skærmen DNS-implementering \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Dette afsnit har to muligheder: AdGuard- og Native-implementering. Disse er grundlæggende to metoder til opsætning af DNS.

I Native-implementeringen håndteres DNS af systemet og ikke appen. Det betyder, at AdGuard ikke behøver oprette et lokalt VPN. Desværre vil dette ikke hjælpe med at omgå systemrestriktioner og anvende AdGuard sammen med andre VPN-baserede apps — er et andet VPN aktivt, ignoreres den indbyggede DNS. Følgelig vil trafikfiltrering lokalt eller brug af vores helt nye [DNS-over-QUIC-protokol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html) ikke være mulig.

### DNS-servere: {#dns-servers}

Det næste afsnit vist på skærmen DNS-beskyttelse er DNS-server. Den viser den aktuelt valgte DNS-server og krypteringstype. For at skifte den, tryk på knappen for at åbne skærmen DNS-server.

![DNS-servere \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servere adskiller sig efter deres hastighed, anvendte protokol, troværdighed, logningspolitik mv. Som standard vil AdGuard foreslå flere DNS-servere blandt de mest populære (inkl. AdGuard DNS). Tryk på en hvilken som helst for at skifte krypteringstypen (såfremt muligheden tilbydes af serverejeren) eller for at se serverens hjemmeside. Etiketter, såsom `Ingen logningspolitik`, `Adblocking` og `Sikkerhed`, er tilføjet for nemmere valg.

I bunden af skærmen er der også mulighed for at tilføje en tilpasset DNS-server. Den understøtter almindelige DNSCrypt-, DNS-over-HTTPS-, DNS-over-TLS- og DNS-over-QUIC-servere.

#### HTTP-basisgodkendelse for DNS-over-HTTPS

Denne funktion bringer godkendelsesmulighederne for HTTP-protokollen til DNS, der ikke har indbygget godkendelse. Godkendelse i DNS er nyttig, hvis adgangen til en tilpassede DNS-server ønskes begrænset til bestemte brugere.

Sådan aktiveres denne funktion:

1. I AdGuard DNS, gå til _Serverindstillinger_ → _Enheder_ → _Indstillinger_ og skift DNS-serveren til den med godkendelse. Klikkes på _Afvis andre protokoller_, fjernes andre protokolbrugsindstillinger, så kun DNS-over-HTTPS-godkendelse er aktiveret og tredjeparter forhindres i at bruge den. Kopiér den genererede adresse.

![DNS-over-HTTPS med godkendelse](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. I AdGuard til iOS, gå til fanen _Beskyttelse_ → _DNS-beskyttelse_ → _DNS-server_ og indsæt den genererede adresse i feltet _Tilføj en tilpasset DNS-server_. Gem og vælg den nye opsætning.

Besøg vores [diagnostikside](https://adguard.com/en/test.html) for at tjekke, om alt er korrekt opsat.

### Netværksindstillinger {#network-settings}

![Skærmen Netværksindstillinger \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

På skærmen Netværksindstillinger kan brugere også håndtere DNS-sikkerhed. _Filtrér mobildata_ og _Filtér Wi-Fi_ slår DNS-beskyttelse til/fra for de respektive netværkstyper. Længere nede kan der via _Wi-Fi undtagelser_ undtages bestemte Wi-Fi netværk fra DNS-beskyttelsen (f.eks. hjemmenetværket, hvis der gøres brug af [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS-filtrering {#dns-filtering}

DNS-filtrering muliggør at tilpasse DNS-trafikken ved at aktivere AdGuard DNS-filter, tilføje tilpassede DNS-filtre og benytte DNS-sortlisten/hvidlisten.

Sådan opnås adgang:

_Beskyttelse_ (skjoldikonet på nederste menubjælke) → _DNS-beskyttelse_ → _DNS-filtrering_

![Skærmen DNS-filtrering \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS-filtre {#dns-filters}

I lighed med filtre, som fungerer i Safari, er DNS-filtre sæt af regler skrevet i en særlig [syntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard vil overvåge DNS-trafikken og blokere forespørgsler matchende en eller flere regler. Der kan bruges filtre såsom [AdGuard DNS-filter](https://github.com/AdguardTeam/AdguardSDNSFilter) eller tilføjes værtsfiler som filtre. Flere filtre kan tilføjes samtidigt. For at vide, hvordan dette gøres, konsultér [denne udtømmende manual](adguard-for-ios/solving-problems/system-wide-filtring).

#### Hvidliste og Sortliste {#allowlist-blocklist}

Ud over DNS-filtre, kan DNS-filtrering målrettet påvirkes ved at føje enkelte domæner til sort- eller hvidlisten. Sortlisten understøtter endda den samme DNS-syntaks, og begge kan importeres og eksporteres, ligesom hvidlisten i Safari-indholdsblokering.
