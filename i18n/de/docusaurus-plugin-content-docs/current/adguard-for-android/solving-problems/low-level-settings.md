---
title: Leitfaden für Low-Level-Einstellungen
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## So öffnen Sie die Low-Level-Einstellungen

:::caution

Das Ändern von *Low-Level-Einstellungen* kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Dieser Bereich sollte nur geöffnet werden, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert wurden.

:::

Um zu den *Low-Level-Einstellungen* zu gelangen, öffnen Sie die AdGuard-App und tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms. Then choose *General → Advanced → Low-level settings*.

## Low-Level-Einstellungen

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### DNS-Schutz

#### Fallback-Upstreams

Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Fallback-Domains

Here you can list domains that will be forwarded directly to fallback upstreams if they exist.

#### Suchdomains erkennen

If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap-Upstreams

Bootstrap DNS für DoH-, DoT- und DoQ-Server. The *Automatic DNS* — the system DNS or AdGuard DNS — is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

#### Sperrmodus für Regeln im Adblock-Stil

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, `||example.org^`).

- Mit REFUSED antworten
- Mit NXDOMAIN antworten
- Mit benutzerdefinierter IP-Adresse antworten (hier können IPv4- und IPv6-Adressen angegeben werden)

#### Sperrmodus für Hosts-Regeln

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

- Mit REFUSED antworten
- Mit NXDOMAIN antworten
- Mit benutzerdefinierter IP-Adresse antworten (hier können IPv4- und IPv6-Adressen angegeben werden)

#### Zeitüberschreitung bei DNS-Anfragen

Hier können Sie die Zeit in Millisekunden angeben, die AdGuard auf die Antwort des ausgewählten DNS-Servers warten soll, bevor er auf den Fallback zurückgreift. Wenn Sie dieses Feld nicht ausfüllen oder einen ungültigen Wert eingeben, wird der Wert von 5.000 verwendet.

#### Gültigkeitsdauer der blockierten Antwort

Hier können Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

#### Größe des DNS-Cache

Hier können Sie die maximale Anzahl der zwischengespeicherten Antworten angeben. Der Standardwert ist 1000.

#### ECH-Sperrung

Wenn diese Option aktiviert ist, entfernt der AdGuard die Parameter von Encrypted Client Hello aus den DNS-Antworten.

#### Nicht verfügbare ausgehende Proxys ignorieren

If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL-Ausfallreaktion

Wenn diese Einstellung aktiviert ist und alle Upstreams (einschließlich der Fallback-Streams) nicht antworten, sendet AdGuard eine SERVFAIL-Antwort an den Client.

#### Fallback für Domains ohne Fallback verwenden

Wenn diese Einstellung aktiviert ist, verwendet AdGuard Fallback-Upstreams für alle Domains. Andernfalls werden Fallback-Upstreams nur für Fallback-Domains und Such-Domains verwendet, wenn die entsprechende Option aktiviert ist.

#### DNS-Upstreams überprüfen

Wenn diese Einstellung aktiviert ist, testet AdGuard DNS-Upstreams, bevor benutzerdefinierte DNS-Server hinzugefügt oder aktualisiert werden.

#### Verschlüsselte DNS-Anfragen filtern

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filterung

#### HAR erfassen

Wenn diese Einstellung aktiviert ist, werden HAR-Dateien von AdGuard erfasst. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### HTTPS-Filterung

#### Encrypted Client Hello

Jede verschlüsselte Internetverbindung hat einen unverschlüsselten Teil. Dies ist das allererste Paket, das den Namen des Servers enthält, mit dem Sie sich verbinden. Die verschlüsselte Client-Hallo-Technologie soll dieses Problem lösen und das letzte bisschen an unverschlüsselter Information verschlüsseln. Um davon zu profitieren, aktivieren Sie die Option *Encrypted ClientHello*. Sie verwendet einen lokalen DNS-Proxy, um nach der ECH-Konfiguration für die Domain zu suchen. Wenn es gefunden wird, wird das Client Hello-Paket verschlüsselt.

#### OCSP-Prüfung

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Wird das Zertifikat widerrufen, werden aktuelle und zukünftige Verbindungen zu der Domain gesperrt.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### HTTP/3 filtern

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Ausgehender Proxy

#### Show the Filter DNS requests setting

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Schutz

#### Port ranges

Hier können Sie Portbereiche angeben, die gefiltert werden sollen.

#### Entfernte HTML-Ereignisse protokollieren

Wenn diese Einstellung aktiviert ist, zeichnet AdGuard gesperrte HTML-Elemente in *Letzte Aktivität* auf.

#### Scriptlet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Ausgeschlossene Apps

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC-Bypass-Pakete

Hier können Sie Paketnamen angeben, für die AdGuard den QUIC-Verkehr umgehen soll.

#### Automatischer Proxy bei Netzwerkänderungen neu konfigurieren

Wenn diese Einstellung aktiviert ist, wird der AdGuard-Schutz neu gestartet, um die automatischen Proxy-Einstellungen neu zu konfigurieren, wenn sich Ihr Gerät mit einem anderen Netzwerk verbindet. Diese Einstellung gilt nur, wenn *Routing-Modus* auf *Automatischer Proxy* eingestellt ist.

#### IPv6-Filterung

Wenn diese Einstellung aktiviert ist, filtert AdGuard IPv6-Netzwerke, wenn eine IPv6-Netzwerkschnittstelle verfügbar ist.

#### Von der Filterung ausgeschlossene IPv4-Bereiche

Das Filtern für die in diesem Abschnitt aufgeführten IPv4-Bereiche ist deaktiviert.

#### Von der Filterung ausgeschlossene IPv6-Bereiche

Das Filtern für die in diesem Abschnitt aufgeführten IPv6-Bereiche ist deaktiviert.

#### TCP-Keepalive für ausgehende Sockets

Wenn diese Einstellung aktiviert ist, sendet AdGuard nach der angegebenen Zeitspanne einen Keepalive-Test, um sicherzustellen, ob die TCP-Verbindung noch besteht. Hier können Sie die Leerlaufzeit vor dem Start von Keepalive-Tests und die Zeit zwischen Keepalive-Tests für einen nicht reagierenden Peer angeben.

Nach einer vom System festgelegten Anzahl erfolgloser Versuche, eine Antwort vom Server zu erhalten, schließt das System automatisch die TCP-Verbindung.

### Lokale VPN-Einstellungen

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Der Standardwert ist 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Der Standardwert ist 5000 ms.

#### MTU (Maximale Übertragungseinheit)

Hier können Sie die maximale Übertragungseinheit (MTU) der VPN-Schnittstelle einstellen. Der empfohlene Bereich liegt bei 1500-1900 Bytes.

#### VPN automatisch wiederherstellen

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Paket-Erfassung (PCAP)

Wenn diese Einstellung aktiviert ist, erstellt AdGuard eine Datei `timestamp.pcap` (z.B. 1682599851461.pcap) im App-Cache-Verzeichnis. Diese Datei listet alle durch das VPN übertragenen Netzwerkpakete auf und kann mit dem Programm Wireshark analysiert werden.

#### WLAN-Gateway in VPN-Routen einbeziehen

Wenn diese Einstellung aktiviert ist, werden die IP-Adressen des Gateways zu den VPN-Routen hinzugefügt, wenn WLAN verwendet wird.

#### IPv4-Adresse

Hier können Sie die IP-Adresse eingeben, die für die Erstellung einer TUN-Schnittstelle verwendet werden soll. Standardmäßig ist dies `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6-Adresse

Hier können Sie die IP-Adresse eingeben, die für die Erstellung einer TUN-Schnittstelle verwendet werden soll. By default, it is `2001:db8:ad:0:ff::`.

### Sonstiges

#### Samsung Pay erkennen

Wenn diese Einstellung aktiviert ist, wird der AdGuard-Schutz pausiert, während Samsung Pay verwendet wird. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
