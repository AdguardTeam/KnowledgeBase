---
title: Erweiterte Einstellungen
sidebar_position: 9
---

## Wo findet man die Eweiterten Einstellungen

> Das Ändern von *Low-Level-Einstellungen* kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Sie sollten diesen Abschnitt nur öffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie darum gebeten hat. Um zu *Erweiterte Einstellungen* zu gelangen, folgen Sie dieser Route: das AdGuard-Symbol im Taskleistenmenü → das Zahnradsymbol → Erweitert → Erweiterte Einstellungen.

## Erweiterte Einstellungen

`network.extension.exclude.domains`

Die aufgelisteten Domains werden von der Filterung im Modus *Netzwerk-Erweiterung* ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen.

`network.extension.exclude.ports`

Die aufgelisteten Ports werden im Modus *Netzwerk-Erweiterung* von der Filterung ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen.

`network.extension.route.exclude`

Die aufgelisteten Routen werden von der Filterung im Modus *Netzwerk-Erweiterung* ausgeschlossen. Legen Sie Routen mit einer IP-Adresse oder einem Ziel-CIDR fest. Trennen Sie die Werte durch Kommas oder Zeilenumbrüche.

`network.extension.http.downgrade.bundleids`

Hier können Sie eine Liste von Anwendungen angeben, für die das HTTP/2-Protokoll im Filtermodus *Netzwerk-Erweiterung* auf HTTP/1.1 heruntergestuft wird. Die Bundle-ID sollte durch ein Komma oder einen Zeilenumbruch getrennt werden.

`network.extension.monterey.force.split.tunnel`

Hier können Sie AdGuard verbieten, die „Standard-Route“ zu verwenden, die im Modus *Netzwerk-Erweiterung* unter macOS Monterey standardmäßig aktiviert ist. AdGuard verwendet „Standard-Route“, um iCloud Private Relay und Protect Mail Activity zu deaktivieren, da es nicht gleichzeitig mit ihnen arbeiten kann.

Weitere Informationen zum Problem finden Sie in [diesem Artikel](../icloud-private-relay).

`network.extension.dns.redirect.exclude.bundleids`

Hier können Sie eine Liste von Anwendungen angeben, die DNS-Abfragen direkt und nicht über den System-DNS-Resolver durchführen (z. B. einige VPN-Clients oder DNS-Filteranwendungen). Die DNS-Filterung wird für sie im *Netzwerk-Erweiterung* Modus deaktiviert. Die Bundle-IDs sollten durch ein Komma oder einen Zeilenumbruch getrennt werden.

`network.dns.filter.secure.request`

Redirects secure DNS requests to a local DNS proxy, if there is one available.

`network.https.ocsp.check`

Indem Sie `true` festlegen, aktivieren Sie die Sperrprüfung von HTTPS-Zertifikaten.

`network.tcp.keepalive.enabled`

Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts.

`network.tcp.keepalive.interval.seconds`

Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value.

`network.tcp.keepalive.timeout.seconds`

Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

`network.https.ech.enabled`

Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts ClientHellos.

`network.https.enforce.certificate.transparency`

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy.

`network.filtering.localnetwork`

Indem Sie `true` setzen, aktivieren Sie die lokale Netzwerkfilterung.

`network.filtering.localhost`

Wenn Sie `true` setzen, aktivieren Sie die LoopBack-Filterung.

`dns.proxy.bootstrap.ips`

Hier können Sie die IP-Adressen der DNS-Server eingeben, die verwendet werden, um die Adresse des verschlüsselten DNS-Servers zu ermitteln.

`dns.proxy.fallback.ips`

Hier können Sie eine Liste mit IP-Adressen von DNS-Servern angeben, die als Backup verwendet werden, falls der verschlüsselte DNS-Server nicht antwortet.

`dns.proxy.fallback.on.upstreams.failure.enabled`

Normal queries will be redirected to a fallback upstream if all normal upstreams fail.

`dns.proxy.detect.search.domains`

Diese Option aktiviert die automatische Erkennung der lokalen Netzwerkdomains, die automatisch auf den Fallback-DNS-Server statt auf den Haupt-DNS-Server umgeleitet wird.

`dns.proxy.fallback.domains`

Hier können Sie Domains auflisten, für die der Fallback-DNS-Server anstelle des Haupt-DNS-Servers verwendet werden soll.

`dns.proxy.adblockrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen festlegen, die den Regeln im Stil von Werbeblockern entsprechen.

* 0 — respond with REFUSED
* 1 — respond with NXDOMAIN
* 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.hostrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen entsprechend den Hosts-Regeln festlegen:

* 0 — respond with REFUSED
* 1 — respond with NXDOMAIN
* 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.blocking.response.IPv4.address`

Hier können Sie die IPv4-Adresse angeben, die als Antwort auf blockierte „A“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

`dns.proxy.blocking.response.IPv6.address`

Hier können Sie die IPv6-Adresse angeben, die als Antwort auf blockierte „AAAA“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

`dns.proxy.block.AAAA.requests`

Hier können Sie die Blockierung von IPv6-DNS-Abfragen aktivieren.

`dns.proxy.blocked.response.TTL.in.seconds`

Hier können Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

`dns.proxy.parallel.upstream.queries.enabled`

All upstreams are queried simultaneously. The first response is returned.

`dns.proxy.servfail.on.upstreams.failure.enabled`

Responds to upstream failure with a SERVFAIL packet.

`dns.proxy.http3.enabled`

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection.

`dns.proxy.block.encrypted.client.hello.response`

Removes the Encrypted Client Hello parameters from responses.

`stealth.antidpi.http.split.fragment.size`

Adjusts the size of the HTTP request fragmentation. Accepted values: 1–1500. If an invalid size is specified, the system will use the default value.

`stealth.antidpi.clienthello.split.fragment.size`

This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Accepted values: 1–1500. If an invalid size is specified, the system will use the default value.

`stealth.antidpi.http.space.juggling`

Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.

`subscription.link.interception.userscript`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard die URLs von Benutzerskripten automatisch abfängt und das Installationsfenster öffnet.

`subscription.link.interception.filter`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard Abonnement-URLs (z. B. abp:subscribe usw.) automatisch abfängt, und öffnen Sie das benutzerdefinierte Filter-Setup-Fenster.
