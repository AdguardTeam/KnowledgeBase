---
title: Low-Level-Einstellungen
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## So öffnen Sie die Low-Level-Einstellungen

:::caution

Das Ändern von *Low-Level-Einstellungen* kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Dieser Bereich sollte nur geöffnet werden, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert wurden.

:::

Um zu den *Low-Level-Einstellungen* zu gelangen, öffnen Sie die AdGuard-App und tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms. Wählen Sie dann *Allgemein → Erweitert → Low-Level-Einstellungen*.

## Low-Level-Einstellungen

Für AdGuard v4.0 für Android haben wir die Low-Level-Einstellungen komplett überarbeitet. Wir haben sie in thematische Blöcke unterteilt, sie übersichtlicher gestaltet, eine Validierung der eingegebenen Werte und andere Sicherheitsvorkehrungen hinzugefügt, einige Einstellungen gestrichen und andere hinzugefügt.

### DNS-Schutz

#### Fallback-Upstreams

Hier können Sie die Fallback-DNS-Auflöser angeben, die verwendet werden sollen, wenn der konfigurierte Server nicht verfügbar ist. Es gibt drei Optionen: *Automatischer DNS*, *Keine* und *Benutzerdefinierter DNS*. Wenn kein Fallback-Server angegeben ist, wird *Automatischer DNS* verwendet— der System-DNS-Server oder AdGuard DNS-Server. *Keine* bedeutet, dass überhaupt kein Fallback erfolgt. Wenn Sie *Benutzerdefinierter DNS* wählen, können Sie IPv4- und IPv6-Serveradressen auflisten, die als Upstreams verwendet werden sollen.

#### Fallback-Domains

Hier können Sie Domains auflisten, die direkt an Fallback-Upstreams weitergeleitet werden, sofern diese vorhanden sind.

#### Suchdomains erkennen

Wenn diese Einstellung aktiviert ist, erkennt AdGuard Suchdomains und leitet sie automatisch an Fallback-Upstreams weiter.

#### Bootstrap-Upstreams

Bootstrap DNS für DoH-, DoT- und DoQ-Server. Standardmäßig *Automatischer DNS* verwendet — der System-DNS oder AdGuard DNS. Wenn Sie *Benutzerdefinierter DNS* wählen, können Sie IPv4- und IPv6-Serveradressen auflisten, die als Bootstrap-Upstreams verwendet werden sollen.

#### Sperrmodus für Adblock-Regeln

Hier können Sie den Antworttyp für Domains angeben, die von DNS-Regeln basierend auf der Syntax der Adblock-Regel gesperrt werden (z. B. `||example.org^`).

- Mit REFUSED antworten
- Mit NXDOMAIN antworten
- Mit benutzerdefinierter IP-Adresse antworten (hier können IPv4- und IPv6-Adressen angegeben werden)

#### Sperrmodus für Hosts-Regeln

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

- Mit REFUSED antworten
- Mit NXDOMAIN antworten
- Mit benutzerdefinierter IP-Adresse antworten (hier können IPv4- und IPv6-Adressen angegeben werden)

#### Zeitüberschreitung bei DNS-Anfragen

Hier können Sie die Zeit in Millisekunden angeben, die AdGuard auf die Antwort des ausgewählten DNS-Servers warten soll, bevor er auf den Fallback zurückgreift. Wenn Sie dieses Feld nicht ausfüllen oder einen ungültigen Wert eingeben, wird der Wert von 5000 verwendet.

#### Gültigkeitsdauer der blockierten Antwort

Hier können Sie den TTL-Wert (Gültigkeitsdauer) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

#### Größe des DNS-Cache

Hier können Sie die maximale Anzahl der zwischengespeicherten Antworten angeben. Der Standardwert ist 1000.

#### ECH-Sperrung

Wenn diese Option aktiviert ist, entfernt AdGuard die Parameter von Encrypted Client Hello aus den DNS-Antworten.

#### Nicht verfügbare ausgehende Proxys ignorieren

Wenn diese Einstellung aktiviert ist, sendet AdGuard DNS-Anfragen direkt, wenn der Outbound-Proxy nicht verfügbar ist.

#### HTTP/3 für DNS-over-HTTPS-Upstreams versuchen

Wenn diese Einstellung aktiviert ist, verwendet AdGuard HTTP/3, um das Auflösen von DNS-Anfragen für DoH-Upstreams zu beschleunigen. Andernfalls kehrt AdGuard zu seinem Standardverhalten zurück und verwendet HTTP/2, um alle DNS-Anfragen für DNS-over-HTTPS zu senden.

#### SERVFAIL-Ausfallreaktion

Wenn diese Einstellung aktiviert ist und alle Upstreams (einschließlich der Fallback-Streams) nicht antworten, sendet AdGuard eine SERVFAIL-Antwort an den Client.

#### Fallback für Domains ohne Fallback verwenden

Wenn diese Einstellung aktiviert ist, verwendet AdGuard Fallback-Upstreams für alle Domains. Andernfalls werden Fallback-Upstreams nur für Fallback-Domains und Suchdomains verwendet, wenn die entsprechende Option aktiviert ist.

#### DNS-Upstreams überprüfen

Wenn diese Einstellung aktiviert ist, testet AdGuard DNS-Upstreams, bevor benutzerdefinierte DNS-Server hinzugefügt oder aktualisiert werden.

#### Verschlüsselte DNS-Anfragen filtern

Wenn diese Einstellung aktiviert ist, wendet AdGuard alle aktivierten DNS-Filter und DNS-Benutzerregeln auf verschlüsselten DNS-over-HTTPS (DoH)-Verkehr an und nicht nur auf unverschlüsselte DNS. Der DoH-Datenverkehr kommt hauptsächlich von Chrome und anderen Browsern, die die Einstellung *Secure DNS* (oder ähnlich) haben. Sie können *Verschlüsselte DNS-Anfragen filtern* in zwei verschiedenen Modi verwenden:

- **Filtern in Echtzeit**. In diesem Modus wendet AdGuard alle aktivierten DNS-Filter und DNS-Benutzerregeln auf den DoH-Datenverkehr an, leitet ihn aber nicht an den lokalen DNS-Proxy um. Wenn in den Browsereinstellungen ein DNS-Server angegeben ist, wird dieser Server den DoH-Verkehr für diesen Browser verarbeiten

- **Zum DNS-Proxy umleiten**. In diesem Modus wendet AdGuard alle aktivierten DNS-Filter und DNS-Benutzerregeln auf den DoH-Datenverkehr an, indem er ihn an den lokalen DNS-Proxy umleitet. Der DNS-Server, der in den AdGuard-Einstellungen angegeben ist, wird den gesamten DoH-Datenverkehr übernehmen

### Filterung

#### HAR erfassen

Wenn diese Einstellung aktiviert ist, werden HAR-Dateien von AdGuard erfasst. Es wird ein Ordner namens „har“ innerhalb des App-Cache-Verzeichnisses erstellt und dort Informationen über alle gefilterten HTTP-Anfragen im HAR 1.2-Format hinzugefügt, die mit dem Programm „Fiddler“ analysiert werden können.

Verwenden Sie es nur zur Fehlersuche!

### HTTPS-Filterung

#### Encrypted Client Hello

Jede verschlüsselte Internetverbindung hat einen unverschlüsselten Teil. Dies ist das allererste Paket, das den Namen des Servers enthält, mit dem Sie sich verbinden. Die Encrypted Client Hello-Technologie soll dieses Problem lösen und das letzte bisschen unverschlüsselter Informationen verschlüsseln. Um davon zu profitieren, aktivieren Sie die Option *Encrypted Client Hello*. Sie verwendet einen lokalen DNS-Proxy, um nach der ECH-Konfiguration für die Domain zu suchen. Wenn es gefunden wird, wird das Client Hello-Paket verschlüsselt.

#### OCSP-Prüfung

Wenn diese Einstellung aktiviert ist, führt AdGuard asynchrone OCSP-Prüfungen durch, um den Widerrufsstatus des SSL-Zertifikats einer Website zu ermitteln.

Wird eine OCSP-Prüfung innerhalb der geforderten Zeitspanne abgeschlossen, sperrt AdGuard die Verbindung sofort, wenn das Zertifikat widerrufen wurde, oder baut die Verbindung auf, wenn das Zertifikat gültig ist.

Wenn die Überprüfung zu lange dauert, lässt AdGuard die Verbindung zu, während der Zertifikatsstatus im Hintergrund weiter überprüft wird. Wird das Zertifikat widerrufen, werden aktuelle und zukünftige Verbindungen zu der Domain gesperrt.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. Wir empfehlen, Fallback-Upstreams zu deaktivieren und nur verschlüsselte DNS-Server zu verwenden, um die Privatsphäre zu wahren.

#### HTTP/3 filtern

Ist diese Einstellung aktiviert, filtert AdGuard zusätzlich zu den anderen Anfragetypen auch Anfragen, die über HTTP/3 gesendet werden.

### Outbound-Proxy

#### Einstellung „DNS-Anfragen filtern“ anzeigen

Wenn dies aktiviert ist, wird der Schalter *DNS-Anfragen filtern* im Dialog *Proxy-Server hinzufügen* angezeigt. Use it to enable filtering of DNS requests passing through the specified proxy.

### Schutz

#### Portbereiche

Hier können Sie Portbereiche angeben, die gefiltert werden sollen.

#### Entfernte HTML-Ereignisse protokollieren

Wenn diese Einstellung aktiviert ist, zeichnet AdGuard gesperrte HTML-Elemente in *Letzte Aktivität* auf.

#### Scriptlet-Debugging

Wenn diese Einstellung aktiviert ist, wird das Debugging in Scriptlets aktiviert, und das Browserprotokoll zeichnet auf, wenn Scriptlet-Regeln angewendet werden.

#### Ausgeschlossene Apps

Hier können Sie Paketnamen und UIDs auflisten, die Sie vom AdGuard-Schutz ausschließen möchten.

#### QUIC-Bypass-Pakete

Hier können Sie Paketnamen angeben, für die AdGuard den QUIC-Verkehr umgehen soll.

#### Automatischen Proxy bei Netzwerkänderungen neu konfigurieren

Wenn diese Einstellung aktiviert ist, wird der AdGuard-Schutz neu gestartet, um die automatischen Proxy-Einstellungen neu zu konfigurieren, wenn sich Ihr Gerät mit einem anderen Netzwerk verbindet. Diese Einstellung gilt nur, wenn *Routing-Modus* auf *Automatischer Proxy* eingestellt ist.

#### IPv6-Filterung

Wenn diese Einstellung aktiviert ist, filtert AdGuard IPv6-Netzwerke, wenn eine IPv6-Netzwerkschnittstelle verfügbar ist.

#### Von der Filterung ausgeschlossene IPv4-Bereiche

Die Filterung für die in diesem Abschnitt aufgeführten IPv4-Bereiche ist deaktiviert.

#### Von der Filterung ausgeschlossene IPv6-Bereiche

Die Filterung für die in diesem Abschnitt aufgeführten IPv6-Bereiche ist deaktiviert.

#### TCP-Keepalive für ausgehende Sockets

Wenn diese Einstellung aktiviert ist, sendet AdGuard nach der angegebenen Zeitspanne einen Keepalive-Test, um sicherzustellen, ob die TCP-Verbindung noch besteht. Hier können Sie die Leerlaufzeit vor dem Start von Keepalive-Tests und die Zeit zwischen Keepalive-Tests für einen nicht reagierenden Peer angeben.

Nach einer vom System festgelegten Anzahl erfolgloser Versuche, eine Antwort vom Server zu erhalten, schließt das System automatisch die TCP-Verbindung.

### Einstellungen des lokalen VPN

#### Recovery delay for revoked VPN

Hier können Sie eine Verzögerungszeit in Millisekunden festlegen, bevor AdGuard versucht, den VPN-Schutz wiederherzustellen, nachdem dieser durch eine VPN-App eines Drittanbieters oder durch Löschen des VPN-Profils aufgehoben wurde. Der Standardwert ist 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Der Standardwert ist 5000 ms.

#### MTU

Hier können Sie die maximale Übertragungseinheit (MTU) der VPN-Schnittstelle einstellen. Der empfohlene Bereich liegt bei 1500-1900 Bytes.

#### VPN automatisch wiederherstellen

Wenn diese Einstellung aktiviert ist, wird das lokale VPN von AdGuard automatisch wieder aktiviert, nachdem es aufgrund von Netzwerkabwesenheit, Tethering oder Energiesparmodus ausgeschaltet wurde.

#### Paketerfassung (PCAP)

Wenn diese Einstellung aktiviert ist, erstellt AdGuard eine Datei `timestamp.pcap` (z.B. 1682599851461.pcap) im App-Cache-Verzeichnis. Diese Datei listet alle durch das VPN übertragenen Netzwerkpakete auf und kann mit dem Programm Wireshark analysiert werden.

#### WLAN-Gateway in VPN-Routen einbeziehen

Wenn diese Einstellung aktiviert ist, werden die IP-Adressen des Gateways zu den VPN-Routen hinzugefügt, wenn WLAN verwendet wird.

#### IPv4-Adresse

Hier können Sie die IP-Adresse eingeben, die für die Erstellung einer TUN-Schnittstelle verwendet werden soll. Standardmäßig ist dies `172.18.11.218`.

#### LAN-IPv4 zwangsweise weiterleiten

Wenn diese Einstellung aktiviert ist, filtert AdGuard alle LAN-Verbindungen, einschließlich des lokalen IPv4-Netzwerkverkehrs, auch wenn die Option *Alle LAN-IPv4-Verbindungen weiterleiten* aktiviert ist.

#### Alle LAN-IPv4-Verbindungen weiterleiten

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6-Adresse

Hier können Sie die IP-Adresse eingeben, die für die Erstellung einer TUN-Schnittstelle verwendet werden soll. Standardmäßig ist dies `2001:db8:ad:0:ff::`.

### Sonstiges

#### Samsung Pay erkennen

Wenn diese Einstellung aktiviert ist, wird der AdGuard-Schutz pausiert, während Samsung Pay verwendet wird. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
