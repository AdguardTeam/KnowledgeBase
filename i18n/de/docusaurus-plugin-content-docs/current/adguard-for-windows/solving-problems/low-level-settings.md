---
title: Leitfaden für erweiterte (low-level) Einstellungen
sidebar_position: 7
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Die früher als Low-Level-Einstellungen bezeichneten erweiterten Einstellungen enthalten meist Optionen, die über die Fähigkeiten des durchschnittlichen Benutzers hinausgehen und im Alltag nicht verwendet werden. AdGuard für Windows ist so konzipiert, dass es ohne Änderungen funktioniert, aber in bestimmten Fällen oder bei der Lösung eines ungewöhnlichen Problems werden zusätzliche Funktionen bereitgestellt.

:::caution

Das unbedachte Ändern von *Erweiterten Einstellungen* kann möglicherweise Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Sie sollten diese Einstellungen nur dann ändern, wenn Sie sich sicher sind, was Sie tun, oder wenn unser Support-Team Sie dazu aufgefordert hat.

:::

## So öffnen Sie die erweiterten Einstellungen

Um zu *Erweiterte Einstellungen* zu gelangen, klicken Sie im Hauptfenster auf *Einstellungen* → *Allgemeine Einstellungen* und scrollen Sie nach unten zu *Erweiterte Einstellungen*. Wählen Sie alternativ *Erweitert → Erweiterte Einstellungen...* im Infobereich der Taskleiste.

## Erweiterte Einstellungen

Wenn Sie die erweiterten Einstellungen öffnen, werden Ihnen die folgenden Optionen angezeigt:

### TCP Fast Open blockieren

Wenn aktiviert, blockiert AdGuard TCP Fast Open im Edge-Browser. Um die Einstellungen zu übernehmen, müssen Sie den Browser neu starten.

### Encrypted Client Hello verwenden

Jede verschlüsselte Internetverbindung hat einen unverschlüsselten Teil. Dies ist das allererste Paket, das den Namen des Servers enthält, mit dem Sie sich verbinden. Die verschlüsselte Client-Hallo-Technologie soll dieses Problem lösen und das letzte bisschen an unverschlüsselter Information verschlüsseln. Um davon zu profitieren, aktivieren Sie die Option *Encrypted Client Hello verwenden*. Sie verwendet einen lokalen DNS-Proxy, um nach der ECH-Konfiguration für die Domain zu suchen. Wenn es gefunden wird, wird das Client Hello-Paket verschlüsselt.

### Zertifikatstransparenz von Websites prüfen

Überprüft die Authentizität aller Zertifikate für die Domain basierend auf der Chrome Certificate Transparency Policy. Wenn das Zertifikat nicht mit der Chrome Certificate Transparency Policy übereinstimmt, wird die Website von AdGuard nicht gefiltert. Chrome wiederum sperrt sie.

### SSL/TLS-Zertifikatssperrprüfungen aktivieren

Wenn diese Option aktiviert ist, werden asynchrone OCSP-Prüfungen durchgeführt, um zu überprüfen, ob das SSL/TLS-Zertifikat der Website widerrufen wurde.

Wenn die OCSP-Prüfung innerhalb der Mindestzeit abgeschlossen ist, wendet AdGuard das Ergebnis sofort an: Sperren der Verbindung, wenn das Zertifikat gesperrt ist, oder Aufbau einer Verbindung, wenn das Zertifikat gültig ist.

Wenn die Überprüfung zu lange dauert, stellt AdGuard eine Verbindung her und setzt die Überprüfung im Hintergrund fort. Wird das Zertifikat widerrufen, werden aktuelle und zukünftige Verbindungen zu der Domain gesperrt.

### AdGuard VPN in den Einstellungen anzeigen

Wenn Sie diese Option aktivieren, können Sie die Registerkarte „AdGuard VPN” in den Einstellungen anzeigen lassen, um die App und die Website des Produkts einfach zu öffnen.

### Anwendung von der Filterung ausschließen, durch Angabe des vollständigen Pfads

Wenn Sie möchten, dass AdGuard bestimmte Anwendungen nicht filtert, geben Sie den vollständigen Pfad zu diesen Anwendungen an, damit diese von der Filterung ausgeschlossen werden. Trennen Sie verschiedene Pfade durch Semikolon.

### AdGuard Pop-up-Benachrichtigungen aktivieren

Aktivieren Sie diese Funktion, um Popup-Benachrichtigungen von AdGuard anzuzeigen. Sie werden nicht allzu oft angezeigt und enthalten nur wichtige Informationen. Sie können auch das Symbol im Infobereich der Taskleiste verwenden, um die letzte Popup-Benachrichtigung aufzurufen.

### Filter-Abonnement URLs automatisch filtern

Aktivieren Sie diese Funktion, wenn Sie möchten, dass AdGuard automatisch Filter-URLs (z.B. `abp:subscribe` und ähnliche) abfängt und einen benutzerdefinierten Filter-Installationsdialog öffnet.

### HTTP/3 filtern

Ist diese Option aktiviert, filtert AdGuard zusätzlich zu den anderen Anfragetypen auch Anfragen, die über HTTP/3 gesendet werden.

**Einschränkungen**:

- Chromebasierte Browser akzeptieren keine Benutzerzertifikate, daher wird HTTP/3-Filterung in ihnen nicht unterstützt.
- Firefox-basierte Browser verhalten sich standardmäßig ähnlich, aber Sie können die Option `network.http.http3.disable_when_third_party_roots_found` in `about:config` auf `false` setzen, um Benutzerzertifikate für HTTP/3 zuzulassen.
- Safari unterstützt HTTP/3-Filterung ohne zusätzliche Konfiguration.

### Umleitungstreiber-Modus verwenden

Wenn diese Option aktiviert ist, fängt AdGuard den gesamten Datenverkehr ab und leitet ihn zur weiteren Filterung an den lokalen Proxy-Server weiter.

Andernfalls filtert AdGuard den gesamten Datenverkehr sofort und ohne Umleitung. In diesem Fall betrachtet das System AdGuard als die einzige Anwendung, die eine Verbindung zum Internet herstellt (andere Anwendungen werden über ihn geleitet). Der Nachteil ist, dass die System-Firewall dadurch weniger wirksam wird. Der Vorteil ist, dass dieser Ansatz ein wenig schneller funktioniert.

### Hauptfenster bei Systemstart öffnen

Aktivieren Sie diese Option, damit sich das Hauptfenster von AdGuard nach dem Laden des Systems öffnet. Beachten Sie, dass es keinen Einfluss darauf hat, ob der eigentliche Filterdienst gestartet wurde oder nicht. Diese Einstellung befindet sich in *Einstellungen → Allgemeine Einstellungen*.

### Filterung beim Systemstart aktivieren

Ab v7.12 filtert der AdGuard-Dienst standardmäßig keinen Datenverkehr nach dem Start des Betriebssystems, wenn die Option „AdGuard beim Systemstart starten” deaktiviert ist. Mit anderen Worten, der Dienst von AdGuard wird im „Leerlaufmodus” gestartet. Aktivieren Sie diese Option, damit AdGuard den Datenverkehr auch dann filtert, wenn die App nicht gestartet ist.

:::note

Vor Version 7.12 startete der AdGuard-Dienst standardmäßig im Filtermodus (auch wenn die Option *AdGuard beim Systemstart starten* deaktiviert war). Wenn Sie mit dem alten Verhalten zufrieden waren, aktivieren Sie diese Option.

:::

### Localhost filtern

Wenn Sie möchten, dass AdGuard Loopback-Verbindungen filtert, markieren Sie das Kästchen. Diese Option wird immer aktiviert sein, wenn Sie AdGuard VPN installiert haben, da es sonst nicht funktionieren kann.

### Festgelegte IP-Bereiche von der Filterung ausschließen

Wenn Sie nicht möchten, dass AdGuard bestimmte Subnetze filtert, aktivieren Sie diese Funktion und geben Sie die IP-Bereiche in der CIDR-Notation (z.B. 98.51.100.14/24) im Abschnitt **IP-Bereiche, die von der Filterung ausgeschlossen sind** unten an.

### Das Schreiben im HAR-Format erlauben

Diese Option sollte **nur für die Fehlersuche** aktiviert werden. Wenn Sie das Kontrollkästchen aktivieren, erstellt AdGuard eine Datei im Format HAR 1.2 mit Informationen über alle gefilterten HTTP-Anfragen. Diese Datei kann mit der App „Fiddler“ analysiert werden. Beachten Sie, dass sich Ihr Surfen im Internet dadurch erheblich verlangsamen kann.

### Zusätzliches Leerzeichen in die einfache HTTP-Anfrage einfügen

Fügt ein zusätzliches Leerzeichen zwischen der HTTP-Methode und der URL ein und entfernt das Leerzeichen nach dem Feld „Host:”, um Deep Packet Inspection zu vermeiden. Zum Beispiel, wird die Anfrage

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Größe der Fragmentierung des ersten TLS-Pakets anpassen

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Wird eine ungültige Größe angegeben, wird der vom System ausgewählte Wert verwendet. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Fragmentgröße einer einfachen HTTP-Anfrage

Passt die Größe der Fragmentierung der HTTP-Anfrage an. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Gültige Werte: 1–1500. Wird eine ungültige Größe angegeben, wird der vom System ausgewählte Wert verwendet. Diese Option wird nur angewendet, wenn die Option *Schutz vor DPI* im Privatsphärenmodus aktiviert ist.

### QUIC anzeigen

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### TCP-Keepalive aktivieren

Gültige Werte: 1–1500. Wird eine ungültige Größe angegeben, wird der vom System ausgewählte Wert verwendet.

### TCP-Keepalive-Intervall

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP-Keepalive-Zeitüberschreitung

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Java blockieren

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Zeitüberschreitung des DNS-Servers

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### HTTP/3 für DNS-over-HTTPS verwenden

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Fallback-DNS-Upstreams verwenden

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Parallele Abfrage von DNS-Upstreams

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Immer auf fehlgeschlagene DNS-Anfragen antworten

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Filtern von sicheren DNS-Anfragen aktivieren

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Sperrmodus für Hosts-Regeln

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Mit Fehler „Abgelehnt“ antworten
- Mit Fehler „NxDomain“ antworten
- Mit benutzerdefinierter IP-Adresse antworten

### Sperrmodus für Regeln im Adblock-Stil

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Mit Fehler „Abgelehnt“ antworten
- Mit Fehler „NxDomain“ antworten
- Mit benutzerdefinierter IP-Adresse antworten

### Benutzerdefinierte IPv4-Adresse

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Benutzerdefiniertes IPv6-Adresse

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Fallback-Server

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Keine Ausweichserver verwenden;
- Standardserver des Systems verwenden;
- Benutzerdefinierte Server verwenden.

### ECH blockieren

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Liste der benutzerdefinierten Fallback-Server

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Liste der benutzerdefinierten Bootstrap-Adressen

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS-Ausschlüsse

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Bestimmte WLAN-Netzwerknamen (SSIDs) von der DNS-Filterung ausschließen

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
