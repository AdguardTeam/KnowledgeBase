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

Enables HTTP body compression after processing. CoreLibs, AdGuards filtreringsmotor, vil komprimere HTTP-svarindholdet inden afsendelsen med den oprindelige svaralgoritme (hvis understøttet) eller med standard reservealgoritmen (GZip). Svar fra BrowserApi kodes ligeledes, hvis denne indstilling er slået til.

#### `network.tcp.keepalive.enabled`

Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts.

#### `network.tcp.keepalive.interval.seconds`

Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value.

#### `network.tcp.keepalive.timeout.seconds`

Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

#### `network.https.ech.enabled`

Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy.

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

Aktivering af denne indstilling er nyttig i det flg. scenarie: Når macOS Private Relay er aktiv, kan filtrering ikke fungere korrekt og skal deaktiveres. In macOS versions up to 14, AdGuard could automatically disable Private Relay when Protection was enabled. However, starting with macOS 15, this is no longer possible if a firewall is active. By turning on this setting, you can disable Private Relay even when the firewall is enabled, overcoming the previous limitation.

#### `dns.proxy.postquantum.cryptography.enabled`

Secures DNS proxy connections with a hybrid post-quantum key exchange, combining the classical X25519 algorithm with the ML-KEM-768 post-quantum KEM. Applies only to DoH, DoT, and DoQ upstreams.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Adjusts the size of the HTTP request fragmentation. Valid values: 1–1500. If an invalid size is specified, the system will use the default value.

#### `stealth.antidpi.clienthello.split.fragment.size`

This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Valid values: 1–1500. If an invalid size is specified, the system will use the default value.

#### `stealth.antidpi.http.space.juggling`

Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.

#### `stealth.antidpi.split.delay.millisecond`

Here you can specify the delay, in milliseconds, after sending the first fragment, if fragmentation is performed.

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

Activate this feature if you want AdGuard to automatically intercept the URLs of userscripts and open the installation window.

#### `subscription.link.interception.filter`

Activate this feature if you want AdGuard to automatically intercept subscription URLs (for example, abp:subscribe, etc.) and open the custom filter setup window.
