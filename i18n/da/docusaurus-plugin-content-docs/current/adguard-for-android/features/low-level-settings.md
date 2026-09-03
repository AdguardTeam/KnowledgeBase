---
title: Vejledning til Lavniveauindstillinger
sidebar_position: 5
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Sådan tilgås Lavniveauindstillinger

:::caution

Ændring af Lavniveauindstillinger kan forårsage problemer med AdGuards ydeevne, afbryde internetforbindelsen eller kompromittere brugersikkerhed og -fortrolighed. Use the low-level features only if you are an experienced user and know what you are doing, or if our support team has asked you to do so.

:::

To access _Low-level settings_, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select _General → Advanced → Low-level settings_.

## Lavniveauindstillinger

For AdGuard for Android v4.x we’ve completely redesigned the low-level settings. Vi har omarbejdet listen over indstillinger og organiseret dem i tematiske grupper med forbedrede beskrivelser. Vi har også tilføjet inputvalidering og andre sikkerhedsforanstaltninger.

### DNS-beskyttelse

#### Reserve-upstreams

Her kan angives omvendt-DNS-opløser(e) til brug, når den opsatte server er utilgængelig. Tilgængelige indstillinger:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Disse adresser bruges som upstreams.

#### Reservedomæner

Her kan angives de domæner, som videresendes til reserve-upstreams, hvis tilgængelige. Der kan angives flere domæner, ét pr. linje. Der kan bruges begrænsede jokertegn.

#### Detektér søgedomæner

Er denne indstilling slået til, registrerer AdGuard søgedomæner og videresende dem automatisk til reserve-upstreams, hvis tilgængelige.

#### Bootstrap upstreams

Bootstrap DNS til krypterede upsteams, såsom DoH-, DoT- og DoQ-servere. Tilgængelige indstillinger:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS. Denne indstilling er valgt som standard.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Disse adresser vil blive brugt som bootstrap-upstreams.

#### Blokeringstilstand for adblock-lignende regler

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Tilgængelige indstillinger:

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Der skal angives en IPv4-adresse for blokerede A-forespørgsler og en IPv6-adresse for blokerede AAAA-forespørgsler.

#### Blokeringstilstand for hosts-regler

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Der skal angives en IPv4-adresse for blokerede A-forespørgsler og en IPv6-adresse for blokerede AAAA-forespørgsler.

#### DNS-forespørgselstimeout

Her kan angives den timeout i millisekunder, AdGuard afventer svar på hver DNS-forespørgsel, før der omdirigeres til en reserve-DNS-opløser. Ved tomt felt eller ugyldig værdi, benyttes standardværdien 5000.
Har man flere upstreams, vil reserve-DNS'en kun blive brugt, efter at timeouts for hver upstream er udløbet.

#### Blocked response TTL

Her kan angives levetid (TTL) for posten for blokerede domæner. Standardværdien er 3600 sekunder.

#### DNS-cachestørrelse

Her kan angives det maksimale antal cachelagrede svar. Standardværdien er 1000.

#### ECH-blokering

Hvis slået til, fjerner AdGuard Encrypted Client Hello-parametre fra DNS-svar.

#### Prøv HTTP/3 til DNS-over-HTTPS-upstreams

Er denne indstilling slået til, bruger AdGuard HTTP/3 til at accelerere DNS-forespørgselsopløsning for DNS-over-HTTPS-upstreams. Ellers vil AdGuard vende tilbage til sin standardadfærd og bruge HTTP/2 til at sende alle DNS-over-HTTPS relaterede DNS-forespørgsler.

#### SERVFAIL-fejlsvar

Er denne indstilling slået til, sender AdGuard et SERVFAIL-svar til klienten, hvis alle upstreams, inkl. reserverne, ikke svarer. Er denne indstilling slået fra, sendes i så fald intet svar til klienten.

#### Brug reserve til alle domæner

Er denne indstilling aktiveret, bruger AdGuard reserve-upstreams for alle domæner, inkl. ikke-reservedomæner. Reserve-upstream vil ellers kun blive brugt til reservedomæner og søgedomæner, hvis den relevante indstilling er slået til.

#### Bekræft DNS-upstreams

Er denne indstilling slået til, tester AdGuard DNS-upstreams, før tilpassede DNS-servere tilføjes eller opdateres.

#### Filtrér sikker DNS

Er denne indstilling slået til, filtrerer AdGuard krypterede DNS-forespørgsler i tillæg til almindelige DNS-forespørgsler. Krypteret DNS-trafik kommer for det meste fra Chrome og andre webbrowsere, som har en sikker DNS-indstilling.

Denne indstilling har to tilstande:

- **Filter on the fly**. I denne tilstand filtrerer AdGuard DNS-over-HTTPS-trafik uden omdirigering heraf til den lokale DNS-proxy. Den bruger DNS-serveren, der er angivet i webbrowserindstillingerne.

- **Redirect to DNS proxy**. I denne tilstand omdirigerer AdGuard DNS-over-HTTPS-forespørgsler til den lokale DNS-proxy for filtrering. Den bruger den DNS-server, der er valgt i DNS-indstillingerne i AdGuard-appen.

### Filtrering

#### Optag HAR

Er denne indstilling er slået til, logger AdGuard alle filtrerede HTTP-forespørgsler i HAR 1.2-formatet til undermappen "har" i appens cachemappe. Disse filer kan analyseres med Fiddler-værktøjet.

Denne indstilling kan gøre enheden langsommere. Brug den kun til fejlfinding.

### HTTPS-filtrering

#### Krypteret Client Hello

Er denne indstilling slået til, krypterer AdGuard ClientHellos, hvis nødvendigt. Denne funktion kræver, at HTTPS-filtrering er slået til. Denne funktion bruger en lokal DNS-proxy til at lede efter ECH-opsætningen for domænet. Findes den, krypteres ClientHello-pakken. Sørg for at bruge en krypteret DNS-server med denne funktion.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. Dette er den allerførste pakke indeholdende navnet på serveren, der oprettes forbindelse til. Encrypted Client Hello-teknologien er designet til at løse dette problem ved at kryptere denne pakke.

#### OCSP-tjek

Er denne indstilling aktiveret, tjekker AdGuard automatisk tilbagekaldelsesstatus for SSL-certifikater, før der oprettes forbindelse til et websted. Denne funktion kræver, at HTTPS-filtrering er slået til.

Afsluttes tjekket inden for den krævede timeout, tillader AdGuard forbindelsen, såfremt certifikatet er gyldigt, eller blokerer straks forbindelsen, såfremt certifikatet er tilbagekaldt.

Tager bekræftelsen for langt tid, tillader AdGuard forbindelsen og fortsætter med at tjekke certifikatstatussen i baggrunden. Er certifikatet tilbagekaldt, blokeres nuværende og fremtidige forbindelser til domænet.

#### Filter HTTP/3

Er denne indstilling slået til, filtrerer AdGuard forespørgsler sendt over HTTP/3 i tillæg til andre forespørgselstyper. Denne funktion kræver, at HTTPS-filtrering er slået til.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

**Limitations**:

- Chrome-baserede webbrowsere accepterer ikke brugercertifikater og understøtter dermed ikke HTTP/3-filtrering.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari understøtter HTTP/3-filtrering uden yderligere opsætning.

### Udgående proxy

#### Vis indstillingen for Filtrér DNS-forespørgsler

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Slås kontakten til, aktiveres filtrering af DNS-forespørgsler, som passerer igennem den angivne udgående proxy.

### Beskyttelse

#### Portintervaller

Denne indstilling muliggør at angive de portintervaller, som skal filtreres. Angiv portintervaller, ét tinterval pr. linje. Use `..` to specify the range. For example, `80..5221`.

#### Logfør fjernet HTML-begivenheder

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Scriptlet-fejlfinding

Er denne indstilling slået til, viser appen fejlfindingsoplysninger i webbrowserkonsollen. I denne tilstand aktiveres fejlfinding i scriptlets, og webbrowseren logfører de begivenheder, som opstår, når scriptlet-regler anvendes.

#### Undtagne apps

Denne indstilling muliggør at liste de pakker og UID'er, som skal undtages fra AdGuard-beskyttelse. Angiv pakkenavne eller UID'er, én pr. linje. You can use `//` for comments.

#### QUIC-omgåelsespakker

Her kan angives de pakkenavne, for hvilke AdGuard skal omgå QUIC-trafik. Angiv pakkenavne, ét pr. linje. You can use `//` for comments.

#### Genopsæt Automatisk proxy ved netværksændringer

Er denne indstilling slået til, genstarter AdGuard-beskyttelsen for at genopsætte de automatiske proxyparametre, når enheden tilsluttes et andet netværk. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### IPv6-filtrering

Er denne indstilling slået til, filtrerer AdGuard IPv6-netværk, hvis en IPv6-netværksgrænseflade er tilgængelig.

#### IPv4-områder undtaget fra filtrering

Her kan angives de IPv4-områder, som ønskes undtaget fra filtrering. Angiv ét IP-område pr. linje. You can use `//` for comments.

#### IPv6-områder undtaget fra filtrering

Her kan angives de IPv6-områder, som ønskes undtaget fra filtrering. Angiv ét IP-område pr. linje. You can use `//` for comments.

#### TCP-keepalive for udgående sockets

Er denne indstilling slået til, sender AdGuard efter det angivne tidsinterval en keepalive-sonde for at sikre, at TCP-forbindelsen stadig er aktiv. Efter et systemdefineret antal mislykkede forsøg på at opnå svar fra serveren, lukker systemet automatisk TCP-forbindelsen.

Denne indstilling muliggør at angive:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. Standardværdien er 0. Opleves problemer med NAT, sæt denne til 20.
- **Time between keepalive probes** for an unresponsive peer. Standardværdien er 0 sekunder.

### Indstillinger for Lokalt VPN

#### Gendannelsesforsinkelse for tilbagekaldt VPN

Her kan angives forsinkelsen i millisekunder, før AdGuard forsøger at gendanne VPN-beskyttelsen, efter den er tilbagekaldt af en tredjeparts VPN-app eller ved sletning af VPN-profilen. Standardværdien er 5000 ms.

#### Genplanlæg forsinkelse for tilbagekaldt VPN-gendannelse

Her kan angives forsinkelsen i millisekunder, før AdGuard genplanlægger gendannelse af VPN-beskyttelsen, efter den er tilbagekaldt af en tredjeparts VPN-app eller ved sletning af VPN-profilen. Standardværdien er 5000 ms.

#### MTU

Her kan angives VPN-grænsefladens maksimale transmissionsenhed (MTU). Dette er den maksimale datapakkestørrelse brugt i det lokale VPN. Anbefalet interval er 1500–1900 bytes.

#### Pakkeoptagelse (PCAP)

Denne indstilling aktiverer logning af TUN-grænseflader. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. Denne fil viser alle netværkspakker, transmitteret igennem VPN'et, og kan analyseres med Wireshark-værktøjet.

#### Inkludér Wi-Fi-gateway i VPN-rutninger

Er denne indstilling aktiveret, føjes gateway IP-adresserne til VPN-ruter, når enheden er på Wi-Fi.

#### IPv4-adresse

Her kan angives IP-adressen til brug ved oprettelsen af en TUN-grænseflade. The default value is `172.18.11.218`.

#### Tving LAN IPv4-routning

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Rut alle LAN IPv4-forbindelser

Når slået til, undtager AdGuard LAN-forbindelser fra filtrering for simple netværk. Fungerer muligvis ikke for komplekse netværk. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### IPv6-adresse

Her kan angives IP-adressen til brug for oprettelse af en TUN-grænseflade. The default value is `2001:db8:ad:0:ff::`.

### Diverse

#### Vis Udviklerværktøjer på hovedskærmen

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. Det muliggør hurtigt aktivering/deaktivering af tilpassede filtre, adgang til logfiler, aktivering af div. logfiler mv.

#### Simplified UI mode

If this setting is enabled, AdGuard will only display the DNS icon on the app’s home screen.

#### Detektér Samsung Pay

Er denne indstilling slået til, pauseres AdGuard-beskyttelsen, når Samsung Pay-appen åbnes. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.

#### Show cloned apps

If this setting is enabled, you will be able to change routing, filtering, and firewall settings for cloned apps in _App management_.
