---
title: Speciális beállítások útmutató
sidebar_position: 9
---

:::info

Ez a cikk az AdGuard Macre vonatkozik, egy többfunkciós hirdetésblokkoló, amely védelmet nyújt eszközének a rendszer szintjén. Ha szeretné megnézni, hogyan működik, [töltse le az AdGuard alkalmazást](https://agrd.io/download-kb-adblock)

:::

## A Speciális beállítások elérése

:::figyelem

A *Speciális beállítások* módosítása problémákat okozhat az AdGuard teljesítményében, megszakíthatja az internetkapcsolatot, vagy veszélyeztetheti a biztonságot és az adatvédelmet. Csak akkor változtasson ezen a részen, ha biztos benne, hogy mit csinál, vagy ha ügyfélszolgálatunk megkérte erre.

:::

A *Speciális beállítások* megtalálásához nyissa meg az AdGuardot, kattintson a fogaskerék ikonra, válassza a *Speciális*, majd a *Speciális beállítások* lehetőséget.

## Speciális beállítások

### Network settings

#### `network.extension.exclude.domains`

A felsorolt tartományok ki lesznek zárva a szűrésből *Hálózati bővítmény* módban. Az értékek elválasztásához használjon vesszőt vagy sortörést.

#### `network.extension.exclude.ports`

A felsorolt portok ki lesznek zárva a szűrésből *Hálózati bővítmény* módban. Az értékek elválasztásához használjon vesszőt vagy sortörést.

#### `network.extension.route.exclude`

A felsorolt tartományok ki lesznek zárva a szűrésből *Hálózati bővítmény* módban. Útvonalak beállítása IP-cím vagy CIDR-célcím használatával. Az értékeket vesszővel vagy sortöréssel válassza el egymástól.

#### `network.extension.http.downgrade.bundleids`

Itt adhatja meg azoknak az alkalmazásoknak a listáját, amelyeknél a HTTP/2 protokoll HTTP/1.1-re lesz visszaminősítve a *Hálózati kiterjesztés* szűrési módban. A kötegazonosítót vesszővel vagy sortöréssel kell elválasztani.

#### `network.extension.monterey.force.split.tunnel`

Itt letilthatja az AdGuard számára az „alapértelmezett útvonal” használatát, amely alapértelmezés szerint engedélyezve van a *Hálózati bővítmény* módban a macOS Monterey rendszeren. Az AdGuard az "alapértelmezett útvonalat" használja az iCloud Private Relay és Protect Mail Activity letiltására, mivel nem tud velük együtt működni.

A [problémáról ebben a cikkben talál további információt:](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Itt megadhatja azoknak az alkalmazásoknak a listáját, amelyek közvetlenül, nem a rendszer DNS-feloldóján keresztül hajtanak végre DNS-lekérdezéseket (például egyes VPN-kliensek vagy DNS-szűrő alkalmazások). A DNS-szűrés számukra letiltásra kerül a *Hálózati kiterjesztés módban*. A kötegazonosítókat vesszővel vagy sortöréssel kell elválasztani.

#### `network.dns.filter.secure.request`

Átirányítja a biztonságos DNS-kérelmeket egy helyi DNS-proxynak, ha van ilyen.

#### `network.https.ocsp.check`

A `true` beállítással engedélyezi a HTTPS-tanúsítvány visszavonásának ellenőrzését.

#### `network.tcp.keepalive.enabled`

Időnként TCP-csomagokat küld tétlen kapcsolaton keresztül, hogy megbizonyosodjon arról, hogy életben van, és megújítja a NAT időtúllépéseket.

#### `network.tcp.keepalive.interval.seconds`

Üresjárati idő másodpercben, mielőtt elküldené a fenntartó szondát. Ha 0 van megadva, a rendszer az alapértelmezett értéket fogja használni.

#### `network.tcp.keepalive.timeout.seconds`

Az az idő másodpercben, amíg újabb keepalive próbát küld egy nem reagáló társnak. Ha 0 van megadva, akkor a rendszer által kiválasztott értéket fogja használni.

#### `network.https.ech.enabled`

Helyi DNS-proxyt használ a konfigurációk keresésére az ECH konfigurációs listákban. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy.

#### `network.https.filter.http3.enabled`

By setting `true`, you allow AdGuard to filter traffic sent over HTTP/3, the latest version of the HTTP protocol based on QUIC.

#### `network.filtering.localnetwork`

By setting `true`, you enable local network filtering.

#### `network.filtering.localhost`

By setting `true`, you enable LoopBack filtering.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Here you can enter the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server.

#### `dns.proxy.fallback.ips`

Here you can specify a list of IP addresses of DNS servers that will be used as backups in case the encrypted DNS server fails to respond.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Normal queries will be redirected to a fallback upstream if all normal upstreams fail.

#### `dns.proxy.detect.search.domains`

This option enables automatic detection of the local network domain, which will be automatically redirected to the fallback DNS server instead of the main DNS server.

#### `dns.proxy.fallback.domains`

Here you can list domains for which the fallback DNS server will be used instead of the main DNS server.

#### `dns.proxy.adblockrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to ad-blocker-style rules.

- 0 — respond with REFUSED
- 1 — respond with NXDOMAIN
- 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to hosts rules:

- 0 — respond with REFUSED
- 1 — respond with NXDOMAIN
- 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.IPv4.address`

Here you can specify the IPv4 address that will be returned in response to blocked "A" requests when `dns.proxy.adblockrules.blocking.mode` or `dns.proxy.hostrules.blocking.mode` is set to the response type "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Here you can specify the IPv6 address that will be returned in response to blocked "AAAA" requests when `dns.proxy.adblockrules.blocking.mode` or `dns.proxy.hostrules.blocking.mode` is set to the response type "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Here you can enable IPv6 DNS query blocking.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Here you can specify the TTL (time to live) value that will be returned in response to a blocked request.

#### `dns.proxy.parallel.upstream.queries.enabled`

All upstreams are queried simultaneously. The first response is returned.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Responds to upstream failure with a SERVFAIL packet.

#### `dns.proxy.http3.enabled`

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection.

#### `dns.proxy.block.encrypted.client.hello.response`

Removes the Encrypted Client Hello parameters from responses.

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
