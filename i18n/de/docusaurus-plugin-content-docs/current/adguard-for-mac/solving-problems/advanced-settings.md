---
title: Erweiterte Einstellungen
sidebar_position: 9
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## So öffnen Sie die erweiterten Einstellungen

:::caution

Das Ändern der *Erweiterten Einstellungen* kann zu Problemen mit der Leistung von AdGuard führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Nehmen Sie Änderungen in diesem Bereich nur dann vor, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie darum gebeten hat.

:::

Um die *Erweiterte Einstellungen*zu finden, öffnen Sie AdGuard, klicken Sie auf das Zahnradsymbol, wählen Sie *Erweitert*und dann *Erweiterte Einstellungen*.

## Erweiterte Einstellungen

### Netzwerkeinstellungen

#### `network.extension.exclude.domains`

Die aufgelisteten Domains werden von der Filterung im Modus *Netzwerk-Erweiterung* ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen.

#### `network.extension.exclude.ports`

Die aufgeführten Ports werden von der Filterung im Modus *Netzwerk-Erweiterung* ausgeschlossen. Verwenden Sie ein Komma oder einen Zeilenumbruch, um Werte zu trennen.

#### `network.extension.route.exclude`

Die aufgelisteten Routen werden von der Filterung im Modus *Netzwerk-Erweiterung* ausgeschlossen. Legen Sie Routen mit einer IP-Adresse oder einem Ziel-CIDR fest. Trennen Sie die Werte durch Kommas oder Zeilenumbrüche.

#### `network.extension.http.downgrade.bundleids`

Hier können Sie eine Liste von Anwendungen angeben, für die das HTTP/2-Protokoll im Filtermodus *Netzwerk-Erweiterung* auf HTTP/1.1 heruntergestuft wird. Die Bundle-ID sollte durch ein Komma oder einen Zeilenumbruch getrennt werden.

#### `network.extension.monterey.force.split.tunnel`

Hier können Sie AdGuard verbieten, die „Standardroute“ zu verwenden, die im Modus *Netzwerk-Erweiterung* unter macOS Monterey standardmäßig aktiviert ist. AdGuard verwendet die „Standardroute“, um iCloud Privat-Relay und E-Mail-Datenschutz zu deaktivieren, da sie nicht mit ihnen zusammenarbeiten können.

Weitere Informationen zum Problem finden Sie in [diesem Artikel](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Hier können Sie eine Liste von Anwendungen angeben, die DNS-Abfragen direkt und nicht über den System-DNS-Resolver durchführen (z. B. einige VPN-Clients oder DNS-Filteranwendungen). Die DNS-Filterung wird für sie im *Netzwerk-Erweiterung* Modus deaktiviert. Die Bundle-IDs sollten durch ein Komma oder einen Zeilenumbruch getrennt werden.

#### `network.dns.filter.secure.request`

Leitet sichere DNS-Anfragen an einen lokalen DNS-Proxy um, sofern ein solcher vorhanden ist.

#### `network.https.ocsp.check`

Indem Sie `true` festlegen, aktivieren Sie die Sperrprüfung von HTTPS-Zertifikaten.

#### `network.tcp.keepalive.enabled`

Sendet in regelmäßigen Abständen TCP-Pakete über eine inaktive Verbindung, um sicherzustellen, dass diese aktiv bleibt und um NAT-Zeitüberschreitungen zu erneuern.

#### `network.tcp.keepalive.interval.seconds`

Leerlaufzeit (in Sekunden), bevor eine Keepalive-Anfrage gesendet wird. Wenn 0 (Null) angegeben wird, verwendet das System den Standardwert.

#### `network.tcp.keepalive.timeout.seconds`

Zeit (in Sekunden), bevor eine weitere Keepalive-Anfrage an eine nicht reagierende Gegenstelle gesendet wird. Wird 0 (Null) angegeben, wird der vom System gewählte Wert verwendet.

#### `network.https.ech.enabled`

Verwendet einen lokalen DNS-Proxy für die Suche nach Konfigurationen in den ECH-Konfigurationslisten. Falls gefunden, verschlüsselt Client Hellos.

#### `network.https.enforce.certificate.transparency`

Überprüft die Authentizität aller Zertifikate für die Domain basierend auf der Chrome Certificate Transparency Policy.

#### `network.https.filter.http3.enabled`

Mit der Einstellung `true` erlauben Sie AdGuard, Datenverkehr zu filtern, der über HTTP/3, die neueste Version des auf QUIC-basierenden HTTP-Protokolls, gesendet wird.

#### `network.filtering.localnetwork`

Indem Sie `true` setzen, aktivieren Sie die lokale Netzwerkfilterung.

#### `network.filtering.localhost`

Wenn Sie `true` setzen, aktivieren Sie die LoopBack-Filterung.

### DNS-Einstellungen

#### `dns.proxy.bootstrap.ips`

Hier können Sie die IP-Adressen der DNS-Server eingeben, die verwendet werden, um die Adresse des verschlüsselten DNS-Servers zu ermitteln.

#### `dns.proxy.fallback.ips`

Hier können Sie eine Liste mit IP-Adressen von DNS-Servern angeben, die als Backup verwendet werden, falls der verschlüsselte DNS-Server nicht antwortet.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Normale Abfragen werden an einen Fallback-Upstream weitergeleitet, wenn alle normalen Upstreams ausfallen.

#### `dns.proxy.detect.search.domains`

Diese Option aktiviert die automatische Erkennung der lokalen Netzwerkdomains, die automatisch auf den Fallback-DNS-Server statt auf den Haupt-DNS-Server umgeleitet wird.

#### `dns.proxy.fallback.domains`

Hier können Sie Domains auflisten, für die der Fallback-DNS-Server anstelle des Haupt-DNS-Servers verwendet werden soll.

#### `dns.proxy.adblockrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen festlegen, die den Regeln im Stil von Werbeblockern entsprechen.

- 0 — mit REFUSED antworten
- 1 — mit NXDOMAIN antworten
- 2 — mit 0.0.0.0 oder den in `dns.proxy.blocking.response.IPv4.address` und/oder `dns.proxy.blocking.response.IPv6.address` angegebenen Adressen antworten

#### `dns.proxy.hostrules.blocking.mode`

Hier können Sie die Art der Antwort des DNS-Servers auf blockierte Anfragen entsprechend den Hosts-Regeln festlegen:

- 0 — mit REFUSED antworten
- 1 — mit NXDOMAIN antworten
- 2 — mit 0.0.0.0 oder den in `dns.proxy.blocking.response.IPv4.address` und/oder `dns.proxy.blocking.response.IPv6.address` angegebenen Adressen antworten

#### `dns.proxy.blocking.response.IPv4.address`

Hier können Sie die IPv4-Adresse angeben, die als Antwort auf blockierte „A“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

#### `dns.proxy.blocking.response.IPv6.address`

Hier können Sie die IPv6-Adresse angeben, die als Antwort auf blockierte „AAAA“-Anfragen zurückgegeben wird, wenn `dns.proxy.adblockrules.blocking.mode` oder `dns.proxy.hostrules.blocking.mode` auf den Antworttyp „ADRESSE“ eingestellt ist.

#### `dns.proxy.block.AAAA.requests`

Hier können Sie die Blockierung von IPv6-DNS-Abfragen aktivieren.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Hier können Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

#### `dns.proxy.parallel.upstream.queries.enabled`

Alle Upstreams werden gleichzeitig abgefragt. Die erste Antwort wird zurückgegeben.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Reagiert auf einen Upstream-Fehler mit einem SERVFAIL-Paket.

#### `dns.proxy.http3.enabled`

Aktiviert HTTP/3 für DNS-over-HTTPS-Upstreams, um die Verbindung zu beschleunigen.

#### `dns.proxy.block.encrypted.client.hello.response`

Entfernt die „Encrypted Client Hello“-Parameter aus den Antworten.

### Privatsphäre-Einstellungen

#### `stealth.antidpi.http.split.fragment.size`

Passt die Größe der Fragmentierung der HTTP-Anfrage an. Gültige Werte: 1–1500. Wenn eine ungültige Größe angegeben wird, verwendet das System den Standardwert.

#### `stealth.antidpi.clienthello.split.fragment.size`

Diese Option gibt die Größe der TCP-Paketfragmentierung an, die dazu beiträgt, Deep Packet Inspection zu vermeiden. Gültige Werte: 1–1500. Wenn eine ungültige Größe angegeben wird, verwendet das System den Standardwert.

#### `stealth.antidpi.http.space.juggling`

Fügt ein zusätzliches Leerzeichen zwischen der HTTP-Methode und der URL ein und entfernt das Leerzeichen nach dem Feld „Host:“.

#### `stealth.antidpi.split.delay.millisecond`

Hier können Sie die Verzögerung in Millisekunden angeben, nachdem das erste Fragment gesendet wurde, wenn eine Fragmentierung durchgeführt wird.

### Einstellungen für das Abfangen von Abonnement-Links (Benutzerskripte und Filter)

#### `subscription.link.interception.userscript`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard die URLs von Benutzerskripten automatisch abfängt und das Installationsfenster öffnet.

#### `subscription.link.interception.filter`

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard Abonnement-URLs (z. B. abp:subscribe usw.) automatisch abfängt, und öffnen Sie das benutzerdefinierte Filter-Setup-Fenster.
