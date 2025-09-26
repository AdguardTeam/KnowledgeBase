---
title: Ghid pentru Setări Avansate
sidebar_position: 9
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Cum să accesați Setările Avansate

:::atenție

Modificarea *Setărilor Avansate* poate cauza probleme cu performanța AdGuard, poate întrerupe conexiunea la Internet sau poate compromite securitatea și intimitatea dvs. Faceți modificări în această secțiune doar dacă sunteți sigur de ceea ce faceți sau echipa noastră de asistență v-a cerut să faceți acest lucru.

:::

Pentru a găsi *Setările Avansate*, deschideți AdGuard, faceți clic pe pictograma de setări, selectați *Avansat*, apoi selectați *Setări Avansate*.

## Setări Avansate

### Network settings

#### `network.extension.exclude.domains`

Domeniile enumerate vor fi excluse din filtrare în modul *Extensie de rețea*. Utilizați o virgulă sau o întrerupere de linie pentru a separa valorile.

#### `network.extension.exclude.ports`

Porturile enumerate vor fi excluse din filtrare în modul *Extensie de rețea*. Utilizați o virgulă sau o întrerupere de linie pentru a separa valorile.

#### `network.extension.route.exclude`

Rutele enumerate vor fi excluse din filtrare în modul *Extensie de rețea*. Setați rute folosind o adresă IP sau CIDR de destinație. Separați valorile cu virgule sau întreruperi de linie.

#### `network.extension.http.downgrade.bundleids`

Aici puteți specifica o listă de aplicații pentru care protocolul HTTP/2 va fi retrogradat la HTTP/1.1 în modul de filtrare *Extensie de rețea*. ID-ul pachetului trebuie să fie separat printr-o virgulă sau o întrerupere de linie.

#### `network.extension.monterey.force.split.tunnel`

Aici puteți interzice AdGuard să folosească "ruta implicită" care este activată implicit în modul *Extensie de rețea* pe macOS Monterey. AdGuard folosește "ruta implicită" pentru a dezactiva Transmisia privată iCloud și a proteja activitatea poștei, deoarece nu poate funcționa împreună cu acestea.

Veți găsi mai multe informații despre problemă [în acest articol](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Aici puteți specifica o listă de aplicații care efectuează interogări DNS direct, nu prin rezolvatorul DNS al sistemului (de exemplu, unele clienți VPN sau aplicații de filtrare DNS). DNS filtering will be disabled for them in the *Network Extension mode*. ID-urile pachetului trebuie să fie separate printr-o virgulă sau o întrerupere de linie.

#### `rețea.dns.filtrare.solicitare.sigură`

Redirecționează solicitările DNS securizate către un proxy DNS local, dacă există unul disponibil.

#### `rețea.https.ocsp.check`

Prin setarea `true`, activați verificarea revocării certificatului HTTPS.

#### `network.tcp.keepalive.enabled`

Trimite periodic pachete TCP pe o conexiune inactivă pentru a se asigura că aceasta rămâne activă și pentru a reînnoi timeout-urile NAT.

#### `network.tcp.keepalive.interval.seconds`

Timpul de inactivitate, în secunde, înainte de a trimite o solicitare de menținere activă. Dacă se specifică 0, sistemul va folosi valoarea implicită.

#### `network.tcp.keepalive.timeout.seconds`

Timp, în secunde, înainte de a trimite o altă solicitare de menținere activă unui peer care nu răspunde. Dacă se specifică 0, va fi folosită valoarea selectată de sistem.

#### `network.https.ech.enabled`

Utilizează un proxy DNS local pentru a căuta configurații în listele de configurare ECH. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifică autenticitatea tuturor certificatelor pentru domeniu pe baza Politicii de transparență a certificatelor Chrome.

#### `network.https.filter.http3.enabled`

By setting `true`, you allow AdGuard to filter traffic sent over HTTP/3, the latest version of the HTTP protocol based on QUIC.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

#### `network.filtering.localnetwork`

Prin setarea `true`, activați filtrarea rețelei locale.

#### `network.filtering.localhost`

Prin setarea `true`, activați filtrarea LoopBack.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Aici puteți introduce adresele IP ale serverelor DNS care vor fi folosite pentru a determina adresa serverului DNS criptat.

#### `dns.proxy.fallback.ips`

Aici puteți specifica o listă de adrese IP ale serverelor DNS care vor fi folosite ca backup în caz că serverul DNS criptat nu răspunde.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Interogările normale vor fi redirecționate către un server în amonte de rezervă dacă toate serverele în amonte normale eșuează.

#### `dns.proxy.detect.search.domains`

Această opțiune permite detectarea automată a domeniului rețelei locale, care va fi redirecționat automat către serverul DNS de rezervă în loc de serverul DNS principal.

#### `dns.proxy.fallback.domains`

Aici puteți lista domeniile pentru care serverul DNS de rezervă va fi utilizat în locul serverului DNS principal.

#### `dns.proxy.adblockrules.blocking.mode`

Aici puteți specifica tipul de răspuns al serverului DNS pentru cererile blocate, corespunzător regulilor stilului blocator de reclame.

- 0 — răspunde cu REFUSED
- 1 — răspunde cu NXDOMAIN
- 2 — răspunde cu 0.0.0.0 sau adresele specificate în `dns.proxy.blocking.response.IPv4.address` și/sau `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Aici puteți specifica tipul de răspuns al serverului DNS pentru cererile blocate, corespunzător regulilor gazdelor:

- 0 — răspunde cu REFUSED
- 1 — răspunde cu NXDOMAIN
- 2 — răspunde cu 0.0.0.0 sau adresele specificate în `dns.proxy.blocking.response.IPv4.address` și/sau `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.adresă.IPv4`

Aici puteți specifica adresa IPv4 care va fi returnată ca răspuns la cererile "A" blocate când `dns.proxy.adblockrules.blocking.mode` sau `dns.proxy.hostrules.blocking.mode` este setat pe tipul de răspuns "ADRESĂ".

#### `dns.proxy.blocking.response.adresă.IPv6`

Aici puteți specifica adresa IPv6 care va fi returnată ca răspuns la cererile "AAAA" blocate când `dns.proxy.adblockrules.blocking.mode` sau `dns.proxy.hostrules.blocking.mode` este setat pe tipul de răspuns "ADRESĂ".

#### `dns.proxy.block.AAAA.requests`

Aici puteți activa blocarea interogărilor DNS IPv6.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Aici puteți specifica valoarea TTL (durata de viață) care va fi returnată ca răspuns la o cerere blocată.

#### `dns.proxy.parallel.upstream.queries.enabled`

Toate fluxurile ascendente sunt interogate simultan. Primul răspuns este returnat.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Răspunde la eroarea din amonte cu un pachet SERVFAIL.

#### `dns.proxy.http3.enabled`

Activează HTTP/3 pentru transmisiile ascendente DNS-over-HTTPS pentru a accelera conexiunea.

#### `dns.proxy.block.encrypted.client.hello.response`

Elimină parametrii Encrypted Client Hello din răspunsuri.

#### `dns.proxy.private.relay.sequoia.workaround.enabled`

Blocks macOS Private Relay domains if the user has a firewall enabled, which in turn disables the *Private Relay* feature.

Enabling this setting is useful in the following scenario: when macOS Private Relay is active, filtering cannot function properly and must be disabled. In macOS versions up to 14, AdGuard could automatically disable Private Relay when Protection was enabled. However, starting with macOS 15, this is no longer possible if a firewall is active. By turning on this setting, you can disable Private Relay even when the firewall is enabled, overcoming the previous limitation.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Ajustează dimensiunea fragmentării cererilor HTTP. Valid values: 1–1500. Dacă se specifică o dimensiune invalidă, sistemul va folosi valoarea implicită.

#### `stealth.antidpi.clienthello.split.fragment.size`

Această opțiune specifică dimensiunea fragmentării pachetelor TCP, ceea ce ajută la evitarea inspectării profunde a pachetelor. Valid values: 1–1500. Dacă se specifică o dimensiune invalidă, sistemul va folosi valoarea implicită.

#### `stealth.antidpi.http.space.juggling`

Adaugă un spațiu suplimentar între metoda HTTP și URL și elimină spațiul după câmpul "Host:".

#### `stealth.antidpi.split.delay.millisecond`

Here you can specify the delay, in milliseconds, after sending the first fragment, if fragmentation is performed.

### Subscription link interception settings (userscripts and filters)

#### `abonament.link.interceptare.userscript`

Activați această funcție dacă doriți ca AdGuard să intercepteze automat URL-urile scripturilor de utilizator și să deschidă fereastra de instalare.

#### `abonament.link.interceptare.filtru`

Activați această funcție dacă doriți ca AdGuard să intercepteze automat URL-urile de abonare (de exemplu, abp:subscribe, etc.) și să deschidă fereastra de setări a filtrului personalizat.
