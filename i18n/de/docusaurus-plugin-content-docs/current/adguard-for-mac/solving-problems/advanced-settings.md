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

`network.https.ocsp.check`

Indem Sie `true` festlegen, aktivieren Sie die Sperrprüfung von HTTPS-Zertifikaten.

`network.filtering.localnetwork`

Indem Sie `true` setzen, aktivieren Sie die lokale Netzwerkfilterung.

`network.filtering.localhost`

Wenn Sie `true` setzen, aktivieren Sie die LoopBack-Filterung.

`upstream.proxy`

In dieser Zeichenfolge können Sie einen Proxy-Server für Upstream-Verbindungen angeben. Zum Beispiel:

* SOCKS5-Proxy mit Authentifizierung – `socks5://username:password@proxy.example.org:1080`
* Lokaler HTTP-Proxy ohne Authentifizierung – `http://localhost:3128`

`upstream.proxy.socks5udp`

Indem Sie `true` festlegen, aktivieren Sie die Umleitung des UDP-Datenverkehrs über den lokalen Server im SOCKS5-Modus. Hinweis: Wenn Ihr SOCKS5-Server das UDP-Protokoll nicht unterstützt, führt die Aktivierung dieser Einstellung dazu, dass Ihre Internetverbindung fehlschlägt.

`dns.proxy.bootstrap.ips`

Hier können Sie die IP-Adressen der DNS-Server eingeben, die verwendet werden, um die Adresse des verschlüsselten DNS-Servers zu ermitteln.

`dns.proxy.fallback.ips`

Hier können Sie eine Liste mit IP-Adressen von DNS-Servern angeben, die als Backup verwendet werden, falls der verschlüsselte DNS-Server nicht antwortet.

`dns.proxy.detect.search.domains`

Diese Option aktiviert die automatische Erkennung der lokalen Netzwerkdomains, die automatisch auf den Fallback-DNS-Server statt auf den Haupt-DNS-Server umgeleitet wird.

`dns.proxy.fallback.domains`

Hier können Sie Domains auflisten, für die der Fallback-DNS-Server anstelle des Haupt-DNS-Servers verwendet werden soll.

`dns.proxy.adblockrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen festlegen, die den Regeln im Stil von Werbeblockern entsprechen.

0 – antwortet mit REFUSED; 1 – antwortet mit NXDOMAIN; 2 – antwortet mit 0.0.0.0 oder den in `dns.proxy.blocking.response.IPv4.address` und/oder `dns.proxy.blocking.response.IPv6.address` angegebenen Adressen

`dns.proxy.hostrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen entsprechend den Hosts-Regeln festlegen:

0 – antwortet mit REFUSED; 1 – antwortet mit NXDOMAIN; 2 – antwortet mit 0.0.0.0 oder den in `dns.proxy.blocking.response.IPv4.address` und/oder `dns.proxy.blocking.response.IPv6.address` angegebenen Adressen

`dns.proxy.blocking.response.IPv4.address`

Hier können Sie die IPv4-Adresse angeben, die als Antwort auf blockierte „A“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

`dns.proxy.blocking.response.IPv6.address`

Hier können Sie die IPv6-Adresse angeben, die als Antwort auf blockierte „AAAA“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

`dns.proxy.block.AAAA.requests`

Hier können Sie die Blockierung von IPv6-DNS-Abfragen aktivieren.

`dns.proxy.blocked.response.TTL.in.seconds`

Hier können Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

`subscription.link.interception.userscript`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard die URLs von Benutzerskripten automatisch abfängt und das Installationsfenster öffnet.

`subscription.link.interception.filter`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard Abonnement-URLs (z. B. abp:subscribe usw.) automatisch abfängt, und öffnen Sie das benutzerdefinierte Filter-Setup-Fenster.
