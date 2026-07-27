---
title: Guide til Avancerede indstillinger
sidebar_position: 9
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

## Sådan tilgås Avancerede indstillinger

:::caution

Ændring af *Avancerede indstillinger* kan forårsage problemer med AdGuards ydeevne, afbryde internetforbindelsen eller kompromittere brugersikkerhed og -fortrolighed. Ændringer i dette afsnit bør kun foretages, såfremt konsekvenserne forstås, eller vores supportteam har anmodet herom.

:::

For at finde *Avancerede indstillinger*, åbn AdGuard, klik på tandhjulsikonet, vælg *Avanceret* og dernæst *Avancerede indstillinger*.

## Avancerede indstillinger

### Netværksindstillinger

#### `network.extension.exclude.domains`

De anførte domæner undtages fra filtrering i tilstanden *Netværksudvidelse*. Benyt et komma eller linjeskift som værdiadskiller.

#### `network.extension.exclude.ports`

De anførte porte undtages fra filtrering i tilstanden *Netværksudvidelse*. Benyt et komma eller linjeskift som værdiadskiller.

#### `network.extension.route.exclude`

De anførte rutninger undtages fra filtrering i tilstanden *Netværksudvidelse*. Opsæt rutninger vha. en IP-adresse eller destinations-CIDR. Benyt kommaer eller linjeskift som værdiadskillere.

#### `network.extension.http.downgrade.bundleids`

Her kan angives en liste over applikationer, for hvilke HTTP/2-protokollen nedgraderes til HTTP/1.1 i filtreringstilstanden *Netværksudvidelse*. Pakke-ID'et skal adskilles af et komma eller linjeskift.

#### `network.extension.monterey.force.split.tunnel`

Her kan AdGuard forbydes at bruge den "standardrutning", der som standard er aktiveret i tilstanden *Netværksudvidelse* på macOS Monterey. AdGuard bruger "standardrutning" til at deaktivere iCloud Private Relay og Protect Mail Activity, da den ikke kan fungere sideløbende med dem.

Yderligere oplysninger om problemet kan findes [i denne artikel](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Her kan angives en liste over apps, som foretager DNS-forespørgsler direkte, ikke via systemets DNS-opløser (f.eks. visse VPN-klienter eller DNS-filtrerings-apps). DNS-filtrering deaktiveres for disse i tilstanden *Netværksudvidelse*. Pakke-ID'et skal adskilles af et komma eller linjeskift.

#### `network.dns.filter.secure.request`

Omdirigerer sikre DNS-forespørgsler til en lokal DNS-proxy, hvis tilgængelig.

#### `network.https.ocsp.check`

Ved at angive `true`, aktiveres ophævelsestjek af HTTPS-certifikater.

#### `network.http.compress.body`

Aktiverer HTTP body compression-efterbehandling. CoreLibs, AdGuards filtreringsmotor, vil komprimere HTTP-svarindholdet inden afsendelsen med den oprindelige svaralgoritme (hvis understøttet) eller med standard reservealgoritmen (GZip). Svar fra BrowserApi kodes ligeledes, hvis denne indstilling er slået til.

#### `network.tcp.keepalive.enabled`

Sender periodisk TCP-pakker over en hvilende forbindelse for at sikre, at den forbliver aktiv samt at NAT-timeouts fornys.

#### `network.tcp.keepalive.interval.seconds`

Hviletid, i sekunder, før en keepalive-datapakke sendes. Er 0 angivet, benytter systemet standardværdien.

#### `network.tcp.keepalive.timeout.seconds`

Tid, i sekunder, før endnu en keepalive-datapakke sendes til en peer, der ikke reagerer. Er 0 angivet, benyttes en systemvalgt værdi.

#### `network.https.ech.enabled`

Benytter en lokal DNS-proxy til at søge efter opsætninger i ECH Config Lists. Hvis fundet, krypteres Client Hellos.

#### `network.https.enforce.certificate.transparency`

Bekræfter ægtheden af alle certifikater for domænet baseret på Chrome Certificate Transparency Policy.

#### `network.https.filter.http3.enabled`

Ved at sætte `true`, tillades AdGuard at filtrere trafik sendt over HTTP/3, den seneste version af HTTP-protokollen baseret på QUIC.

**Begrænsninger**:

- Chrome-baserede webbrowsere accepterer ikke brugercertifikater og understøtter dermed ikke HTTP/3-filtrering.
- Firefox-baserede webbrowsere opfører sig som standard tilsvarende, men `network.http.http3.disable_when_third_party_roots_found`-indstillingen kan i `about:config` sættes til `false` for at tillad brugercertifikater til HTTP/3.
- Safari understøtter HTTP/3-filtrering uden yderligere opsætning.

#### `network.filtering.localnetwork`

Ved at angive `true`, aktiveres lokal netværksfiltrering.

#### `network.filtering.localhost`

Ved at angive `true`, aktiveres LoopBack-filtrering.

### DNS-indstillinger

#### `dns.proxy.bootstrap.ips`

Her kan angives IP-adresserne på de DNS-servere, som skal bruges til at bestemme adressen på den krypterede DNS-server.

#### `dns.proxy.fallback.ips`

Her kan angives en liste over IP-adresser på DNS-servere, som skal bruges som reserve, såfremt den krypterede DNS-server ikke svarer.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Normale forespørgsler videresendes til reserve-upstream, hvis alle normale upstreams fejler.

#### `dns.proxy.detect.search.domains`

Denne mulighed aktiverer automatisk registrering af det lokale netværksdomæne, der automatisk omdirigeres til reserve DNS-serveren i stedet for hoved DNS-serveren.

#### `dns.proxy.fallback.domains`

Her kan domæner angives, for hvilke reserve DNS-serveren vil blive brugt i stedet for hoved DNS-serveren.

#### `dns.proxy.adblockrules.blocking.mode`

Her kan angives typen af DNS-serversvar på blokerede forespørgsler, svarende til adblocker-lignende regler.

- 0 — besvar med REFUSED
- 1 — besvar med NXDOMAIN
- 2 — besvar med med 0.0.0.0 eller adresserne angivet i `dns.proxy.blocking.response.IPv4.address` og/eller `dns.proxy.blocking.response.IPv6.adresse`

#### `dns.proxy.hostrules.blocking.mode`

Her kan angives typen af DNS-serversvar på blokerede forespørgsler, svarende til hosts-regler:

- 0 — besvar med REFUSED
- 1 — besvar med NXDOMAIN
- 2 — besvar med med 0.0.0.0 eller adresserne angivet i `dns.proxy.blocking.response.IPv4.address` og/eller `dns.proxy.blocking.response.IPv6.adresse`

#### `dns.proxy.blocking.response.IPv4.address`

Her kan angives den IPv4-adresse, der returneres som svar på blokerede "A"-forespørgsler, når `dns.proxy.adblockrules.blocking.mode` eller `dns.proxy.hostrules.blocking.mode` er sat til svartypen "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Her kan anguves den IPv6-adresse, der returneres som svar på blokerede "AAAA"-forespørgsler, når `dns.proxy.adblockrules.blocking.mode` eller `dns.proxy.hostrules.blocking.mode` er sat til svartypen "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Her kan IPv6 DNS-forespørgselsblokering aktiveres.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Her kan angives TTL-værdien (time to live), der returneres som svar på en blokeret forespørgsel.

#### `dns.proxy.parallel.upstream.queries.enabled`

Alle upstreams forespørges samtidigt. Det første svar returneres.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Svarer på upstream-fejl med en SERVFAIL-pakke.

#### `dns.proxy.http3.enabled`

Aktiverer HTTP/3 for DNS-over-HTTPS upstreams for at øge forbindelseshastigheden.

#### `dns.proxy.block.encrypted.client.hello.response`

Fjerner Encrypted Client Hello-parametre fra svar.

#### `dns.proxy.private.relay.sequoia.workaround.enabled`

Blokerer macOS Private Relay-domæner, hvis brugeren har en firewall aktiveret, hvilket igen deaktiverer *Private Relay*-funktionen.

Aktivering af denne indstilling er nyttig i det flg. scenarie: Når macOS Private Relay er aktiv, kan filtrering ikke fungere korrekt og skal deaktiveres. I macOS til og med version 14 kunne AdGuard automatisk deaktivere Private Relay, når beskyttelse blev aktiveret. Fra macOS 15 er dette dog ikke længere muligt, hvis en firewall er aktiv. Ved at slå denne indstilling til kan Private Relay deaktiveres, selv når firewall'en er aktiveret, hvormed den tidligere begrænsning omgås.

#### `dns.proxy.postquantum.cryptography.enabled`

Sikrer DNS-proxyforbindelser med en hybrid postkvante nøgleudveksling, der kombinerer den klassiske X25519-algoritme med ML-KEM-768 postkvante KEM. Gælder kun for DoH-, DoT- og DoQ-upstreams.

### Indstillinger for Stealth Mode

#### `stealth.antidpi.http.split.fragment.size`

Justerer størrelsen af HTTP-forespørgselsfragmenteringen. Gyldige værdier: 1–1500. Angives en ugyldig værdi, benytter systemet standardværdien.

#### `stealth.antidpi.clienthello.split.fragment.size`

Denne indstilling angiver størrelsen på TCP-pakkefragmentering, hvilket bidrager til at undgå Deep Packet Inspection. Gyldige værdier: 1–1500. Angives en ugyldig værdi, benytter systemet standardværdien.

#### `stealth.antidpi.http.space.juggling`

Tilføjer ekstra mellemrum mellem HTTP-metoden og URL'en og fjerner mellemrum efter feltet "Host:".

#### `stealth.antidpi.split.delay.millisecond`

Udføres fragmentering, kan her angives forsinkelsen, i millisekunder, efter afsendelsen af første fragment udføres.

### Indstillinger for opfangelse af abonnementslinks (userscripts og filtre)

#### `subscription.link.interception.userscript`

Aktivér denne funktion, hvis AdGuard automatisk skal opfange URL'erne på userscripts og åbne installationsvinduet.

#### `subscription.link.interception.filter`

Aktivér denne funktion, hvis AdGuard automatisk skal opfange abonnements-URL'er (f.eks. abp:subscribe mv.) og åbn vinduet til opsætning af tilpassede filter.
