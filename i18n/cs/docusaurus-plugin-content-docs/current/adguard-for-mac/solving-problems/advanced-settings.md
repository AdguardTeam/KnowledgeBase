---
title: Průvodce pokročilými nastaveními
sidebar_position: 9
---

## Jak dosáhnout pokročilých nastavení

> Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory. Chcete-li přejít na *Pokročilá nastavení*, postupujte takto: ikona AdGuardu v menu → ikona ozubeného kola → Pokročilé → Pokročilá nastavení.

## Pokročilá nastavení

`network.extension.exclude.domains`

Uvedené domény budou z filtrování v režimu *Rozšíření sítě* vyloučeny. Pro oddělení hodnot použijte čárku nebo zalomení řádku.

`network.extension.exclude.ports`

Uvedené porty budou z filtrování v režimu *Rozšíření sítě* vyloučeny. Pro oddělení hodnot použijte čárku nebo zalomení řádku.

`network.extension.route.exclude`

Uvedené routery budou z filtrování v režimu *Rozšíření sítě* vyloučeny. Nastavte routery pomocí IP adresy nebo cílového CIDR. Hodnoty oddělujte čárkami nebo zalomením řádků.

`network.extension.http.downgrade.bundleids`

Zde můžete zadat seznam aplikací, pro které bude protokol HTTP/2 v režimu filtrování *Rozšíření sítě* ponížen na HTTP/1.1. ID svazku by mělo být odděleno čárkou nebo zalomením řádku.

`network.extension.monterey.force.split.tunnel`

Zde můžete AdGuardu zakázat používání "výchozí trasy", která je ve výchozím nastavení povolena v režimu *Rozšíření sítě* v systému MacOS Monterey. AdGuard používá "výchozí trasu" pro zakázání iCloud Private Relay a Protect Mail Activity, protože s nimi nemůže pracovat současně.

Více informací o tomto problému najdete v [tomto článku](../icloud-private-relay).

`network.extension.dns.redirect.exclude.bundleids`

Zde můžete zadat seznam aplikací, které provádějí dotazy DNS přímo, nikoli prostřednictvím systémového DNS řešitele (například někteří klienti VPN nebo aplikace pro filtrování DNS). DNS filtrování pro ně bude zakázáno v režimu *Rozšíření sítě*. ID svazku by mělo být odděleno čárkou nebo zalomením řádku.

`network.https.ocsp.check`

Nastavením `true` povolíte kontrolu odvolání certifikátu HTTPS.

`network.filtering.localnetwork`

Nastavením `true` povolíte filtrování lokální sítě.

`network.filtering.localhost`

Nastavením `true` povolíte filtrování LoopBack.

`upstream.proxy`

V tomto řetězci můžete zadat proxy server pro odchozí připojení. Např:

* Proxy SOCKS5 s ověřováním — `socks5://username:password@proxy.example.org:1080`
* Lokální proxyHTTP bez ověřování — `http://localhost:3128`

`upstream.proxy.socks5udp`

Nastavením `true` povolíte přesměrování provozu UDP přes lokální server v režimu SOCKS5. Poznámka: Pokud váš server SOCKS5 nepodporuje protokol UDP, zapnutí tohoto nastavení způsobí, že připojení k Internetu selže.

`dns.proxy.bootstrap.ips`

Zde můžete zadat IP adresy DNS serverů, které budou použity k určení adresy šifrovaného DNS serveru.

`dns.proxy.fallback.ips`

Zde můžete zadat seznam IP adres DNS serverů, které budou použity jako zálohy v případě, že šifrovaný DNS server neodpoví.

`dns.proxy.detect.search.domains`

Tato možnost umožňuje automatickou detekci domény lokální sítě, která bude automaticky přesměrována na záložní DNS server namísto hlavního DNS serveru.

`dns.proxy.fallback.domains`

Zde můžete uvést seznam domén, pro které bude použit záložní DNS server namísto hlavního DNS serveru.

`dns.proxy.adblockrules.blocking.mode`

Zde můžete zadat typ odezvy DNS serveru na blokované požadavky odpovídající pravidlům typu ad-blocker.

0 — odezva s REFUSED 1 — odezva s NXDOMAIN 2 — odezva s 0.0.0.0 nebou adresou uvedenou v `dns.proxy.blocking.response.IPv4.address` a/nebo `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.hostrules.blocking.mode`

Zde můžete zadat typ odezvy DNS serveru na blokované požadavky odpovídající pravidlům typu hosts:

0 — odezva s REFUSED 1 — odezva s NXDOMAIN 2 — odezva s 0.0.0.0 nebou adresou uvedenou v `dns.proxy.blocking.response.IPv4.address` a/nebo `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.blocking.response.IPv4.address`

Zde můžete zadat adresu IPv4, která bude vrácena jako odezva na blokované požadavky "A", pokud je `dns.proxy.adblockrules.blocking.mode` nebo `dns.proxy.hostrules.blocking.mode` nastaven na typ odezvy "ADDRESS".

`dns.proxy.blocking.response.IPv6.address`

Zde můžete zadat adresu IPv6, která bude vrácena jako odezva na blokované požadavky "AAAA", pokud je `dns.proxy.adblockrules.blocking.mode` nebo `dns.proxy.hostrules.blocking.mode` nastaven na typ odezvy "ADDRESS".

`dns.proxy.block.AAAA.requests`

Zde můžete povolit blokování DNS dotazů IPv6.

`dns.proxy.blocked.response.TTL.in.seconds`

Zde můžete zadat hodnotu TTL (time to live), která bude vrácena jako odpověď na zablokovaný požadavek.

`subscription.link.interception.userscript`

Tuto funkci aktivujte, pokud chcete, aby AdGuard automaticky zachycoval adresy URL uživatelských skriptů a otevíral instalační okno.

`subscription.link.interception.filter`

Tuto funkci aktivujte, pokud chcete, aby AdGuard automaticky zachycoval adresy URL odběru (například abp:subscribe atd.) a otevřel okno nastavení vlastního filtru.
