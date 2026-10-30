---
title: Avanceret (lavniveau) Indstillingsvejledning
sidebar_position: 7
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Avancerede indstillinger, tidligere kendt som lavniveauindstillinger, indeholder fortrinsvis indstillinger, som går ud over den gennemsnitlige brugerkompetence og ikke anvendes i daglig brug. AdGuard til Windows er designet til at fungere uden nogensinde at skulle ændre nogen af dem, men de vil tilbyde yderligere funktioner i visse særlige tilfælde, eller ved løsning af et usædvanligt problem.

:::caution

Tankeløs ændring af _Lavniveauindstillinger_ kan forårsage problemer med AdGuards ydeevne, ødelægge internetforbindelsen eller kompromittere brugersikkerhed og -fortrolighed. Man bør kun foretages ændringer i disse indstillinger, såfremt man ved, hvad man foretager sig, eller hvis supportteamet har anmodet herom.

:::

## Sådan tilgås Avancerede indstillinger

For at gå til _Avancerede indstillinger_, klik i hovedvinduerne på _Indstillinger → Generelle indstillinger_ og rul ned til _Avancerede indstillinger_. Alternativt, vælg _Avanceret → Avancerede indstillinger..._ i bakkemenuen.

## Avancerede indstillinger

Når Avancerede indstillinger åbnes, fremgår flg. muligheder:

### Blokér TCP Fast Open

Hvis aktiveret, vil AdGuard blokere TCP Fast Open i Edge-webbrowseren. Genstart webbrowseren for at effektuere indstillingerne.

### Anvend Encrypted Client Hello

Alle krypterede internetforbindelser har en ukrypteret del. Dette er den allerførste pakke indeholdende navnet på serveren, der oprettes forbindelse til. Encrypted Client Hello-teknologien sigter mod at løse dette problem og kryptere den sidste smule ukrypteret information. Aktivér muligheden _Brug Encrypted Client Hello_ for at drage fordel af den. Den bruger en lokal DNS-proxy til at søge efter domænets ECH-opsætningen. Hvis den findes, krypteres ClientHello-pakken.

### Tjek websteders certifikatgennemsigtighed

Bekræfter ægtheden af alle certifikater for domænet baseret på Chrome Certificate Transparency Policy. Overholder certifikatet ikke Chrome Certificate Transparency-politikken, filtrerer AdGuard ikke webstedet. Chrome vil til gengæld blokere det.

### Aktivér tjek for tilbagekaldte SSL/TLS-certifikater

Når aktiveret, kører denne mulighed asynkrone OCSP-tjek for at kontrollere, om webstedets SSL/TLS-certifikat er ophævet.

Hvis OCSP-tjekket fuldføres inden for den minimale timeout, vil AdGuard straks anvende resultatet: Blokere forbindelsen, hvis certifikatet er ophævet, eller oprette forbindelse, hvis certifikatet er gyldigt.

Tager bekræftelsen for lang tid, opretter AdGuard forbindelse og fortsætter med at tjekke i baggrunden. Er certifikatet ophævet, blokeres nuværende og fremtidige forbindelser til domænet.

### Vis AdGuard VPN i Indstillinger

Aktiveres denne indstilling, visee fanen AdGuard VPN i Indstillinger for nem åbning af appen og produktwebstedet.

### Undtag app fra filtrering ved at angive dens fulde sti

Skal AdGuard ikke filtrere visse apps, angiv den fulde sti til hver af dem, og de undtages fra filtrering. Adskil forskellige stier med semikolon.

### Aktivér AdGuard pop op-notifikationer

Aktivér denne funktion for at se AdGuard pop op-notifikationer. De vises ikke for ofte og indeholder kun vigtig information. Den sidste pop op-notifikation kan også genkaldes via bakkemenuen.

### Opsnap automatisk filterabonnements-URL'er

Aktivér denne funktion, hvis AdGuard automatisk skal opsnappe filterabonnements-URL'er (dvs. `abp:subscribe` o.lign.) og åbne en dialogboks til installation af tilpassede filter.

### Filterér HTTP/3

Er denne mulighed aktiveret, filtrerer AdGuard forespørgsler sendt over HTTP/3 i tillæg til andre forespørgselstyper.

**Begrænsninger**:

- Chrome-baserede webbrowsere accepterer ikke brugercertifikater og understøtter dermed ikke HTTP/3-filtrering.
- Firefox-baserede webbrowsere opfører sig som standard tilsvarende, men `network.http.http3.disable_when_third_party_roots_found`-indstillingen kan i `about:config` sættes til `false` for at tillade brugercertifikater til HTTP/3.
- Safari understøtter HTTP/3-filtrering uden yderligere opsætning.

### Brug omdirigeringsdrivertilstand

Er denne indstilling aktiveret, opsnapper AdGuard al trafikken, og ruter den til den lokale proxyserver for yderligere filtrering.

AdGuard vil ellers løbende filtrere al trafik uden omdirigering. I så tilfælde vil systemet betragte AdGuard som den eneste applikation, der opretter forbindelse til internet (andre applikationer rutes igennem den). Ulempen er, at det vil gøre system-firewall'en mindre effektiv. Fordelen er, at denne tilgang fungerer en smule hurtigere.

### Åbn hovedvindue ved systemstart

Aktivér denne indstilling for at åbne AdGuard-hovedvinduet, efter at systemet er indlæst. Denne indstilling, der ingen indflydelse har på, hvorvidt filtreringstjenesten faktisk startes eller ej, er placeret i _Indstillinger → Generelle indstillinger_.

### Aktivér filtrering ved systemstart

Fra v7.12 filtrerer AdGuards tjeneste som standard ikke trafik efter OS-start, hvis indstillingen Start AdGuard ved systemstart er deaktiveret. AdGuards tjeneste startes med andre ord i "tomgangstilstand". Aktivér denne indstilling for at få AdGuard til at filtrere trafik, selvom appen ikke startes.

:::note

Før v7.12 startede AdGuard-tjenesten som standard i filtreringstilstand (selv hvis _Start AdGuard ved systemopstart_ var slået fra). Slå denne indstilling til, hvis den gamle adfærd foretrækkes.

:::

### Filtrér localhost

Markér afkrydsningsfeltet, hvis AdGuard skal filtrere loopback-forbindelser. Denne valgmulighed vil altid være slået til, hvis AdGuard VPN er installeret, da den ellers ikke vil kunne fungere.

### Undtag angive IP-områder fra filtrering

Aktivér denne funktion, hvis AdGuard ikke skal filtrere bestemte undernet, og angiv IP-intervallerne i CIDR-notationen (f.eks. 98.51.100.14/24) i afsnittet **IP-intervaller undtaget fra filtrering** nedenfor.

### Aktivér HAR-skrivning

Denne indstilling bør kun være aktiveret **til fejlfindingsformål**. Markeres afkrydsningsfeltet, opretter AdGuard en fil i HAR 1.2-formatet indeholdende information om alle filtrerede HTTP-forespørgsler. Denne fil kan analyseres med Fiddler-appen. Bemærk, at HAR-skrivning kan gøre webbrowsing betydeligt langsommere.

### Føj ekstra mellemrum til den almindelige HTTP-forespørgsel

Føjer ekstra mellemrum mellem HTTP-metoden og URL'en og fjerner mellemrum efter feltet "Vært:" for at undgå Deep Packet Inspektion. F.eks. vil forespørgslen

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

blive konverteret til

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

Denne indstilling anvendes kun, når indstillingen _Beskyt mod DPI_ Stealth-tilstanden er aktiv.

### Størrelsesjustering af den indledende TLS-pakkes fragmentering

Angiver størrelsen på TCP-pakkefragmentering og undgår dyb pakkeinspektion. Denne indstilling påvirker kun sikret (HTTPS) trafik.

Er indstillingen aktiveret, opdeler AdGuard den indledende TLS-pakke (ClientHello-pakken) i to dele: Den første har den angivne længde, og den anden har resten, op til længden af hele den indledende TLS-pakke.

Gyldige værdier: 1–1500. Angives en ugyldig størrelse, anvendes den systemvalgte størrelse. Denne indstilling anvendes kun, når indstillingen _Beskyt mod DPI_ Stealth-tilstanden er aktiv.

### Fragmentstørrelse for almindelig HTTP-forespørgsel

Justerer størrelsen af HTTP-forespørgselsfragmenteringen. Denne indstilling påvirker kun almindelig HTTP-trafik. Aktiveres denne indstilling, opdeler AdGuard den første pakke i to dele: Den første har den angivne længde, og den anden indeholder resten op til længden af hele den oprindelige pakke.

Gyldige værdier: 1–1500. Angives en ugyldig størrelse, anvendes den systemvalgte størrelse. Denne indstilling anvendes kun, når indstillingen _Beskyt mod DPI_ Stealth-tilstanden er aktiv.

### Vis QUIC

Muliggør visning af QUIC-protokolposterne i filtreringsloggen. Kun for blokerede forespørgsler.

### Aktivér TCP keepalive

Sender periodisk TCP-pakker over en inaktiv forbindelse for at sikre, at den holdes i live og at NAT-timeouts fornys. Denne indstilling kan være nyttig til at omgå de stringente NAT-indstillinger (Network Address Translation) brugt af visse internetudbydere.

### TCP keepalive-interval

Her kan angives en inaktiv tidsperiode i sekunder, før en keepalive probe sendes. Angives 0, benyttes en systemvalgt værdi.

:::note

Denne indstilling fungerer kun, når indstillingen _Aktivér TCP keepalive_ er slået til.

:::

### TCP keepalive-timeout

Her kan angives tiden i sekunder, før der sendes endnu en keepalive-probe til en ikke-responsiv peer. Angives 0, benyttes en systemvalgt værdi.

:::note

Denne indstilling fungerer kun, når indstillingen _Aktivér TCP keepalive_ er slået til.

:::

### Blokér Java

Nogle websteder og webtjenester understøtter stadig Java-plugins. API'en, der udgør basis for Java-plugins, har alvorlige sikkerhedssårbarheder. Sådanne plugins kan deaktiveres af sikkerhedshensyn. Selvom det besluttes at bruge muligheden _Blokér Java_, vil JavaScript stadig være aktiveret.

### DNS-server timeoutperiode

Her kan angives den tid i millisekunder, AdGuard afventer svar fra den valgte DNS-server, før reservserveren bruges. Ved tomt felt, eller ugyldig værdi, benyttes standardværdien 5000.

### Anvend HTTP/3 til DNS-over-HTTPS

Aktiverer HTTP/3 for DNS-over-HTTPS upstreams for at accelerere forbindelsen, hvis den valgte upstream understøtter denne protokol. Dette betyder, at aktivering af denne indstilling ikke garanterer, at alle DNS-forespørgsler sendes via HTTP/3.

### Anvend reserve-DNS-upstreams

Normale forespørgsler omdirigeres til reserve-upstreamen, hvis alle DNS-forespørgsler til de valgte upstreams fejler.

### Forespørg DNS-upstreams parallelt

Alle upstreams forespørges parallelt, og det første svar returneres. Da DNS-forespørgsler foretages parallelt, forøger aktivering af denne funktion internethastigheden.

### Svar altid på fejlede DNS-forespørgsler

Fejler adresseopløsningen på hver af de videresendte upstreams, såvel som på reservedomænerne, returneres DNS-forespørgselssvaret SERVFAIL\`.

### Aktivér filtrering af sikre DNS-forespørgsler

AdGuard omdirigerer sikre DNS-forespørgsler til den lokale DNS-proxy i tillæg til almindelige DNS-forespørgsler.

### Blokeringstilstand for hosts-regler

Vælg her, hvordan AdGuard svarer, når et domæne blokeres af en DNS-regel baseret på [hosts-lignende syntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Svar med "Refused"-fejl
- Svar med "NxDomain"-fejl
- Svar med en tilpasset IP-adr.

### Blokeringstilstand for adblock-lignende regler

Vælg her, hvordan AdGuard svarer, når et domæne blokeres af en DNS-regel baseret på [adblock-lignende syntaks](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Svar med "Refused"-fejl
- Svar med "NxDomain"-fejl
- Svar med en tilpasset IP-adr.

### Tilpasset IPv4-adr.

Er Tilpasset IP-adresse valgt i Blokeringstilstand for værtsregler eller i Blokeringstilstand for adblock-lignende regler, returneres denne IP-adresse som svar på blokerede A-forespørgsler. Er ingen angivet, svarer AdGuard med standardfejlen Refused.

### Tilpasset IPv6-adr.

Er Tilpasset IP-adresse valgt i Blokeringstilstand for værtsregler eller Blokeringstilstand for adblock-lignende regler, returneres denne IP-adresse som svar på blokerede AAAA-forespørgsler. Er ingen angivet, svarer AdGuard med standardfejlen Refused.

### Reserveservere (fallback)

Her kan angives en alternativ DNS-server, hvortil en DNS-forespørgsel omrutes, hvis hovedserveren ikke reagerer inden for timeout-perioden angivet i næste afsnit. Der er tre indstillinger at vælge imellem:

- Brug ikke reserveservere;
- Brug systemets standardservere;
- Brug tilpassede servere.

### Blokér ECH

Hvis aktiveret, fjerner AdGuard parametre for Encrypted Client Hello fra svar.

### Liste over tilpassede reserveservere

Skal AdGuard anvende tilpassede reserveservere, angiv disse i dette afsnit (én pr. linje).

### Liste over tilpassede bootstrap-adresser

En bootstrap er en mellemliggende DNS-server brugt til at hente IP-adressen på den sikre DNS-server valgt tidligere i _DNS-beskyttelse_. Et sådant "kompromis" er nødvendigt ved brug af protokoller, som angiver serveradressen med bogstaver (såsom f.eks. DNS-over-TLS). I så tilfælde fungerer bootstrap'en som en oversætter, der omdanner bogstaverne til tal, som systemet kan forstå.

Som standard anvendes system-DNS-opløseren, og den indledende bootstrap-forespørgsel sker via port 53. Ønskes dette ikke, angiv her IP-adresserne på de DNS-servere, som skal anvendes til at bestemme adressen på den krypterede DNS-server i en top til bund-rækkefølge. De angivne IP-adresser anvendes i den rækkefølge, de står opført. Angives ugyldige adresser, eller ingen adresser overhovedet, anvendes system-IP'erne.

### DNS-undtagelser

Alle DNS-forespørgsler til domæner angivet her omdirigeres til systemets standard DNS-server i stedet for til DNS-serveren angivet i appens indstillinger. DNS-blokeringsregler anvendes heller ikke på sådanne forespørgsler.

### Undtag angivne Wi-Fi-netværksnavne (SSID'er) fra DNS-filtreringen

DNS-beskyttelse vil ikke omfatte Wi-Fi-netværk angivet i dette afsnit. Angiv Wi-Fi-netværksnavne (SSID'er), ét pr. linje. Dette kan være nyttigt, såfremt et bestemt Wi-Fi-netværk allerede beskyttes af AdGuard Home eller et andet DNS-beskyttelsessystem. I så tilfælde er det unødvendigt at filtrere DNS-forespørgsler igen.
