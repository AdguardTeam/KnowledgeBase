---
title: Vejledning til Lavniveauindstillinger
sidebar_position: 5
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Sådan tilgås Lavniveauindstillinger

:::caution

Ændring af Lavniveauindstillinger kan forårsage problemer med AdGuards ydeevne, afbryde internetforbindelsen eller kompromittere brugersikkerhed og -fortrolighed. Lavniveaufunktionerne bør kun benyttes af en erfaren bruger, der ved, hvad vedkommende foretager sig, eller hvis vores supportteam anmoder om det.

:::

For at tilgå _Lavniveuaindstillinger_, åbn AdGuard-appen og tryk på tandhjulsikonet nederst til højre på skærmen. Vælg dernæst _Generelt → Avanceret → Lavniveauindstillinger_.

## Lavniveauindstillinger

I AdGuard til Android v4.x har vi helt redesignet lavniveauindstillingerne. Vi har omarbejdet listen over indstillinger og organiseret dem i tematiske grupper med forbedrede beskrivelser. Vi har også tilføjet inputvalidering og andre sikkerhedsforanstaltninger.

### DNS-beskyttelse

#### Reserve-upstreams

Her kan angives reserve-DNS-opløser(e) til brug, når den opsatte server er utilgængelig. Tilgængelige indstillinger:

- _Automatisk DNS_: Vælg denne mulighed, hvis systemets DNS eller AdGuard DNS ønskes brugt.
- _Ingen_: Vælg denne mulighed, hvis ingen reserve ønskes brugt.
- _Tilpasset DNS_: Vælg denne mulighed og angiv almindelig DNS-server IPv4- eller IPv6-adresser, én pr. linje. Disse adresser bruges som upstreams.

#### Reservedomæner

Her kan angives de domæner, som omdirigeres til reserve-upstreams, hvis tilgængelige. Der kan angives flere domæner, ét pr. linje. Der kan bruges begrænsede jokertegn.

#### Detektér søgedomæner

Er denne indstilling slået til, registrerer AdGuard søgedomæner og omdirigerer dem automatisk til reserve-upstreams, hvis tilgængelige.

#### Bootstrap-upstreams

Bootstrap-DNS til krypterede upsteams, såsom DoH-, DoT- og DoQ-servere. Tilgængelige indstillinger:

- _Automatisk DNS_: Vælg denne mulighed, hvis systemets DNS eller AdGuard DNS ønskes brugt. Denne indstilling er valgt som standard.
- _Tilpasset DNS_: Vælg denne mulighed og angiv almindelig DNS-server IPv4- eller IPv6-adresser, én pr. linje. Disse adresser vil blive brugt som bootstrap-upstreams.

#### Blokeringstilstand for adblock-lignende regler

Her kan angives svartypen for domæner blokeret af DNS-regler baseret på adblock-regelsyntaks (f.eks. `||example.org^`). Tilgængelige indstillinger:

- _REFUSED_: Svar med REFUSED
- _NXDOMAIN_: Svar med NXDOMAIN
- _Tilpasset IP-adresse_: Vælg denne mulighed for at svare med en tilpasset IP-adresse. Der skal angives en IPv4-adresse for blokerede A-forespørgsler og en IPv6-adresse for blokerede AAAA-forespørgsler.

#### Blokeringstilstand for hosts-regler

Her kan angives svartypen for domæner blokeret af DNS-regler baseret på hosts-regelsyntaks
(f.eks. `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Svar med REFUSED
- _NXDOMAIN_: Svar med NXDOMAIN
- _Tilpasset IP-adresse_: Vælg denne mulighed for at svare med en tilpasset IP-adresse. Der skal angives en IPv4-adresse for blokerede A-forespørgsler og en IPv6-adresse for blokerede AAAA-forespørgsler.

#### DNS-forespørgselstimeout

Her kan angives den timeout i millisekunder, AdGuard afventer svar på hver DNS-forespørgsel, før der omdirigeres til en reserve-DNS-opløser. Ved tomt felt, eller ugyldig værdi, benyttes standardværdien 5000.
Haves flere upstreams, vil reserve-DNS'en kun blive brugt, efter at timeouts for hver upstream er udløbet.

#### Blokeret svar-TTL

Her kan angives levetid (TTL) for posten for blokerede domæner. Standardværdien er 3600 sekunder.

#### DNS-cachestørrelse

Her kan angives det maksimale antal cachelagrede svar. Standardværdien er 1000.

#### ECH-blokering

Hvis slået til, blokerer AdGuard TLS Encrypted Hello (ECH) parametre fra DNS-svar.

#### Prøv HTTP/3 til DNS-over-HTTPS-upstreams

Er denne indstilling slået til, bruger AdGuard HTTP/3 til at accelerere DNS-forespørgselsopløsning for DNS-over-HTTPS-upstreams. AdGuard vil ellers returnere til sin standardadfærd og bruge HTTP/2 til at sende alle DNS-over-HTTPS-relaterede DNS-forespørgsler.

#### SERVFAIL-fejlsvar

Er denne indstilling slået til, sender AdGuard et SERVFAIL-svar til klienten, hvis alle upstreams, inkl. reserverne, ikke svarer. Er denne indstilling slået fra, sendes i så fald intet svar til klienten.

#### Brug reserve til alle domæner

Er denne indstilling aktiveret, bruger AdGuard reserve-upstreams for alle domæner, inkl. ikke-reservedomæner. Reserve-upstream vil ellers kun blive brugt til reservedomæner og søgedomæner, hvis den relevante indstilling er slået til.

#### Bekræft DNS-upstreams

Er denne indstilling slået til, tester AdGuard DNS-upstreams, før tilpassede DNS-servere tilføjes eller opdateres.

#### Filtrér sikker DNS

Er denne indstilling slået til, filtrerer AdGuard krypterede DNS-forespørgsler i tillæg til almindelige DNS-forespørgsler. Krypteret DNS-trafik kommer for det meste fra Chrome og andre webbrowsere, som har en sikker DNS-indstilling.

Denne indstilling har to tilstande:

- **Filtrér i farten**. I denne tilstand filtrerer AdGuard DNS-over-HTTPS-trafik uden omdirigering heraf til den lokale DNS-proxy. Den bruger DNS-serveren angivet i webbrowserindstillingerne.

- **Omdirigér til DNS-proxy**. I denne tilstand omdirigerer AdGuard DNS-over-HTTPS-forespørgsler til den lokale DNS-proxy for filtrering. Den bruger den DNS-server, der er valgt i DNS-indstillingerne i AdGuard-appen.

### Filtrering

#### Optag HAR

Er denne indstilling er slået til, logger AdGuard alle filtrerede HTTP-forespørgsler i HAR 1.2-formatet til undermappen "har" i appens cachemappe. Disse filer kan analyseres med Fiddler-værktøjet.

Denne indstilling kan gøre enheden langsommere. Brug den kun til fejlfinding.

### HTTPS-filtrering

#### Krypteret Client Hello

Er denne indstilling slået til, krypterer AdGuard ClientHellos, hvis nødvendigt. Denne funktion kræver, at HTTPS-filtrering er slået til. Denne funktion bruger en lokal DNS-proxy til at lede efter ECH-opsætningen for domænet. Findes den, krypteres ClientHello-pakken. Sørg for at bruge en krypteret DNS-server med denne funktion.

**Om ClientHellos og ECH**: Alle krypterede internetforbindelser har en ukrypteret del. Dette er den allerførste pakke indeholdende navnet på serveren, der oprettes forbindelse til. Encrypted Client Hello-teknologien er designet til at løse dette problem ved at kryptere denne pakke.

#### OCSP-tjek

Er denne indstilling aktiveret, tjekker AdGuard automatisk tilbagekaldelsesstatus for SSL-certifikater, før der oprettes forbindelse til et websted. Denne funktion kræver, at HTTPS-filtrering er slået til.

Afsluttes tjekket inden for den krævede timeout, tillader AdGuard forbindelsen, såfremt certifikatet er gyldigt, eller blokerer straks forbindelsen, såfremt certifikatet er tilbagekaldt.

Tager bekræftelsen for langt tid, tillader AdGuard forbindelsen og fortsætter med at tjekke certifikatstatussen i baggrunden. Er certifikatet tilbagekaldt, blokeres nuværende og fremtidige forbindelser til domænet.

#### Filterér HTTP/3

Er denne indstilling slået til, filtrerer AdGuard forespørgsler sendt over HTTP/3 i tillæg til andre forespørgselstyper. Denne funktion kræver, at HTTPS-filtrering er slået til.

**Om HTTP/3**: Dette er den seneste version af HTTP-protokollen baseret på QUIC.

**Begrænsninger**:

- Chrome-baserede webbrowsere accepterer ikke brugercertifikater og understøtter dermed ikke HTTP/3-filtrering.
- Firefox-baserede webbrowsere opfører sig som standard tilsvarende, men `network.http.http3.disable_when_third_party_roots_found`-indstillingen kan i `about:config` sættes til `false` for at tillade brugercertifikater til HTTP/3.
- Safari understøtter HTTP/3-filtrering uden yderligere opsætning.

### Udgående proxy

#### Vis indstillingen for Filtrér DNS-forespørgsler

Når denne indstilling er aktiveret, vises kontakten _Filtrér DNS-forespørgsler_ i dialogen _Tilføj proxyserver_. For at tilgå dialogen, åbn **Indstillinger**, gå dernæst til **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**, og klik på _+ Tilføj proxyserver_. Slås kontakten til, aktiveres filtrering af DNS-forespørgsler, som passerer igennem den angivne udgående proxy.

### Beskyttelse

#### Portintervaller

Denne indstilling muliggør at angive de portintervaller, som skal filtreres. Angiv portintervaller, ét tinterval pr. linje. Brug `..` til at angive området. F.eks.:80..5221\`.

#### Logfør fjernede HTML-begivenheder

Er denne indstilling aktiveret, skriver AdGuard oplysninger om blokerede HTML-elementer til _Seneste aktivitet_. For at tilgå logfilerne, gå til **Statistik** → **Seneste aktivitet**.

#### Scriptlet-fejlfinding

Er denne indstilling slået til, viser appen fejlfindingsoplysninger i webbrowserkonsollen. I denne tilstand aktiveres fejlfinding i scriptlets, og webbrowseren logfører de begivenheder, som opstår, når scriptlet-regler anvendes.

#### Undtagne apps

Denne indstilling muliggør at liste de pakker og UID'er, som skal undtages fra AdGuard-beskyttelse. Angiv pakkenavne eller UID'er, én pr. linje. Brug `//` til kommentarer.

#### QUIC-omgåelsespakker

Her kan angives de pakkenavne, for hvilke AdGuard skal omgå QUIC-trafik. Angiv pakkenavne, ét pr. linje. Brug `//` til kommentarer.

#### Genopsæt Automatisk proxy ved netværksændringer

Er denne indstilling slået til, genstarter AdGuard-beskyttelsen for at genopsætte de automatiske proxyparametre, når enheden tilsluttes et andet netværk. Denne indstilling gælder kun, såfremt _Rutningstilstand_ er sat til _Automatisk proxy_.

#### IPv6-filtrering

Er denne indstilling slået til, filtrerer AdGuard IPv6-netværk, hvis en IPv6-netværksgrænseflade er tilgængelig.

#### IPv4-områder undtaget fra filtrering

Her kan angives de IPv4-områder, som ønskes undtaget fra filtrering. Angiv ét IP-område pr. linje. Brug `//` til kommentarer.

#### IPv6-områder undtaget fra filtrering

Her kan angives de IPv6-områder, som ønskes undtaget fra filtrering. Angiv ét IP-område pr. linje. Brug `//` til kommentarer.

#### TCP-keepalive for udgående sockets

Er denne indstilling slået til, sender AdGuard efter det angivne tidsinterval en keepalive-sonde for at sikre, at TCP-forbindelsen stadig er aktiv. Efter et systemdefineret antal mislykkede forsøg på at opnå svar fra serveren, lukker systemet automatisk TCP-forbindelsen.

Denne indstilling muliggør at angive:

- **Inaktiv tid** i sekunder før afsendelse af TCP keepalive-probes til udgående sockets. Standardværdien er 0. Opleves problemer med NAT, sæt denne til 20.
- **Tid mellem keepalive-probes** til en peer, der ikke svarer. Standardværdien er 0 sekunder.

### Indstillinger for Lokalt VPN

#### Gendannelsesforsinkelse for tilbagekaldt VPN

Her kan angives forsinkelsen i millisekunder, før AdGuard forsøger at gendanne VPN-beskyttelsen, efter den er tilbagekaldt af en tredjeparts VPN-app eller ved sletning af VPN-profilen. Standardværdien er 5000 ms.

#### Genplanlæg forsinkelse for tilbagekaldt VPN-gendannelse

Her kan angives forsinkelsen i millisekunder, før AdGuard genplanlægger gendannelse af VPN-beskyttelsen, efter den er tilbagekaldt af en tredjeparts VPN-app eller ved sletning af VPN-profilen. Standardværdien er 5000 ms.

#### MTU

Her kan angives VPN-grænsefladens maksimale transmissionsenhed (MTU). Dette er den maksimale datapakkestørrelse brugt i det lokale VPN. Anbefalet interval er 1500–1900 bytes.

#### Pakkeoptagelse (PCAP)

Denne indstilling aktiverer logning af TUN-grænseflader. Når aktiveret, opretter AdGuard en `timestamp.pcap`-fil, såsom 1682599851461.pcap, i appens cache-mappe. Denne fil viser alle netværkspakker, transmitteret igennem VPN'et, og kan analyseres med Wireshark-værktøjet.

#### Inkludér Wi-Fi-gateway i VPN-rutninger

Er denne indstilling aktiveret, føjes gateway IP-adresserne til VPN-ruter, når enheden er på Wi-Fi.

#### IPv4-adresse

Her kan angives IP-adressen til brug ved oprettelsen af en TUN-grænseflade. Standardværdien er `172.18.11.218`.

#### Tving LAN IPv4-rutning

Er denne indstilling slået til, filtrerer AdGuard alle LAN-forbindelser, herunder lokal IPv4-netværkstrafik, selv hvis indstillingen _Rut all LAN IPv4-forbindelser_ er slået til.

#### Rut alle LAN IPv4-forbindelser

Når slået til, undtager AdGuard LAN-forbindelser fra filtrering for simple netværk. Fungerer muligvis ikke for komplekse netværk. Denne indstilling gælder kun, hvis _Tving LAN IPv4-rutning_ er slået fra.

#### IPv6-adresse

Her kan angives IP-adressen til brug for oprettelse af en TUN-grænseflade. Standardværdien er `2001:db8:ad:0:ff::`.

### Diverse

#### Vis Udviklerværktøjer på hovedskærmen

Er denne indstilling aktiveret, viser AdGuard ikonet **Udviklerværktøjer** øverste til højre på appens startskærm.

**Udviklerværktøjer** er et specialiseret afsnit tilgængeligt i AdGuard til Android v4.3 og senere, designet til hurtig navigering og skift mellem funktioner. Det muliggør hurtigt aktivering/deaktivering af tilpassede filtre, adgang til logfiler, aktivering af div. logfiler mv.

#### Forenklet UI-tilstand

Er denne indstilling aktiveret, viser AdGuard kun DNS-ikonet på appens startskærm.

#### Detektér Samsung Pay

Er denne indstilling slået til, pauseres AdGuard-beskyttelsen, når Samsung Pay-appen åbnes. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.

#### Vis klonede apps

Er denne indstilling aktiveret, vil rutings-, filtrerings- og firewallindstillinger kunne ændres for klonede apps i _App-håndtering_.
