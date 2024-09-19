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

Jede verschlüsselte Internetverbindung hat einen unverschlüsselten Teil. Dies ist das allererste Paket, das den Namen des Servers enthält, mit dem Sie sich verbinden. Die verschlüsselte Client-Hallo-Technologie soll dieses Problem lösen und das letzte bisschen an unverschlüsselter Information verschlüsseln. To benefit from it, enable the *Use Encrypted Client Hello* option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted.

### Zertifikatstransparenz von Websites prüfen

Überprüft die Authentizität aller Zertifikate für die Domain basierend auf der Chrome Certificate Transparency Policy. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome wiederum sperrt sie.

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

### Umleitungstreiber-Modus verwenden

Wenn diese Option aktiviert ist, fängt AdGuard den gesamten Datenverkehr ab und leitet ihn zur weiteren Filterung an den lokalen Proxy-Server weiter.

Andernfalls filtert AdGuard den gesamten Datenverkehr sofort und ohne Umleitung. In diesem Fall betrachtet das System AdGuard als die einzige Anwendung, die eine Verbindung zum Internet herstellt (andere Anwendungen werden über ihn geleitet). Der Nachteil ist, dass die System-Firewall dadurch weniger wirksam wird. Der Vorteil ist, dass dieser Ansatz ein wenig schneller funktioniert.

### Hauptfenster bei Systemstart öffnen

Aktivieren Sie diese Option, damit sich das Hauptfenster von AdGuard nach dem Laden des Systems öffnet. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*.

### Filterung beim Systemstart aktivieren

Ab v7.12 filtert der AdGuard-Dienst standardmäßig keinen Datenverkehr nach dem Start des Betriebssystems, wenn die Option „AdGuard beim Systemstart starten” deaktiviert ist. Mit anderen Worten, der Dienst von AdGuard wird im „Leerlaufmodus” gestartet. Aktivieren Sie diese Option, damit AdGuard den Datenverkehr auch dann filtert, wenn die App nicht gestartet ist.

:::note

Before v7.12, the AdGuard service started in filtering mode by default (even if the *Launch AdGuard at system start-up* was disabled). If you were satisfied with the old behavior, enable this option.

:::

### Localhost filtern

Wenn Sie möchten, dass AdGuard Loopback-Verbindungen filtert, markieren Sie das Kästchen. Diese Option wird immer aktiviert sein, wenn Sie AdGuard VPN installiert haben, da es sonst nicht funktionieren kann.

### Festgelegte IP-Bereiche von der Filterung ausschließen

Wenn Sie nicht möchten, dass AdGuard bestimmte Subnetze filtert, aktivieren Sie diese Funktion und geben Sie die IP-Bereiche in der CIDR-Notation (z.B. 98.51.100.14/24) im Abschnitt **IP-Bereiche, die von der Filterung ausgeschlossen sind** unten an.

### Das Schreiben im HAR-Format erlauben

Diese Option sollte **nur für die Fehlersuche** aktiviert werden. Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. Diese Datei kann mit der App „Fiddler“ analysiert werden. Beachten Sie, dass sich Ihr Surfen im Internet dadurch erheblich verlangsamen kann.

### Zusätzliches Leerzeichen in die einfache HTTP-Anfrage einfügen

Fügt ein zusätzliches Leerzeichen zwischen der HTTP-Methode und der URL ein und entfernt das Leerzeichen nach dem Feld „Host:”, um Deep Packet Inspection zu vermeiden. Zum Beispiel, wird die Anfrage

`GET /foo/bar/ HTTP/1.1
Host: example.org`

umgewandelt in

`GET /foo/bar/ HTTP/1.1
Host: example.org`

Diese Option wird nur angewendet, wenn die Option *Schutz vor DPI* im Privatsphärenmodus aktiviert ist.

### Größe der Fragmentierung des ersten TLS-Pakets anpassen

Gibt die Größe der TCP-Paketfragmentierung an, um eine Deep Packet Inspection zu vermeiden. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Gültige Werte: 1–1500. Wird eine ungültige Größe angegeben, wird der vom System ausgewählte Wert verwendet. Diese Option wird nur angewendet, wenn die Option *Schutz vor DPI* im Privatsphärenmodus aktiviert ist.

### Fragmentgröße einer einfachen HTTP-Anfrage

Passt die Größe der Fragmentierung der HTTP-Anfrage an. Diese Option betrifft nur den einfachen HTTP-Verkehr. Wenn diese Option aktiviert ist, teilt AdGuard das ursprüngliche Paket in zwei Teile auf: der erste hat die angegebene Länge und der zweite den Rest, bis zur Länge des gesamten ursprünglichen Pakets.

Gültige Werte: 1–1500. Wird eine ungültige Größe angegeben, wird der vom System ausgewählte Wert verwendet. Diese Option wird nur angewendet, wenn die Option *Schutz vor DPI* im Privatsphärenmodus aktiviert ist.

### QUIC anzeigen

Ermöglicht die Anzeige der QUIC-Protokollsätze im Filterungsprotokoll. Nur für gesperrte Anfragen.

### TCP-Keepalive aktivieren

Sendet regelmäßig TCP-Pakete über eine inaktive Verbindung, um sicherzustellen, dass sie aktiv ist und um NAT-Timeouts zu erneuern. Diese Option kann nützlich sein, um die strengen NAT-Einstellungen (Network Address Translation) zu umgehen, die einige ISPs verwenden.

### TCP-Keepalive-Intervall

Hier können Sie eine Leerlaufzeit in Sekunden angeben, bevor ein Keepalive-Test gesendet wird. Wird 0 (Null) angegeben, wird der vom System gewählte Wert verwendet.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP-Keepalive-Zeitüberschreitung

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. Wird 0 (Null) angegeben, wird der vom System gewählte Wert verwendet.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Java blockieren

Einige Websites und Webdienste unterstützen nach wie vor Java Plug-Ins. Die API, die als Grundlage für Java-Plug-ins dient, weist gravierende Sicherheitslücken auf. Sie können solche Plug-ins aus Sicherheitsgründen deaktivieren. Aber auch wenn Sie sich für die Option *Java sperren* entscheiden, wird JavaScript weiterhin aktiviert sein.

### Zeitüberschreitung des DNS-Servers

Hier können Sie die Zeit in Millisekunden angeben, die AdGuard auf die Antwort des ausgewählten DNS-Servers warten soll, bevor er auf den Fallback zurückgreift. Wenn Sie dieses Feld nicht ausfüllen oder einen ungültigen Wert eingeben, wird der Wert von 5.000 verwendet.

### HTTP/3 für DNS-over-HTTPS verwenden

Aktiviert HTTP/3 für DNS-over-HTTPS-Upstreams, um die Verbindung zu beschleunigen, wenn der ausgewählte Upstream dieses Protokoll unterstützt. Das bedeutet, dass die Aktivierung dieser Option nicht garantiert, dass alle DNS-Anfragen über HTTP/3 gesendet werden.

### Fallback-DNS-Upstreams verwenden

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Parallele Abfrage von DNS-Upstreams

All upstreams will be queried in parallel and the first response is returned. Da DNS-Abfragen parallel durchgeführt werden, erhöht das Aktivieren dieser Funktion die Internetgeschwindigkeit.

### Immer auf fehlgeschlagene DNS-Anfragen antworten

Wenn die Adressauflösung in jedem der weitergeleiteten Upstreams sowie in den Fallback-Domains fehlgeschlagen ist, lautet die Antwort auf die DNS-Anfrage `SERVFAIL`.

### Filtern von sicheren DNS-Anfragen aktivieren

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Sperrmodus für Hosts-Regeln

Hier können Sie festlegen, wie AdGuard auf Domains reagieren soll, die durch DNS-Regeln basierend auf der [Hosts-Regelsyntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax) gesperrt werden.

- Mit Fehler „Abgelehnt“ antworten
- Mit Fehler „NxDomain“ antworten
- Mit benutzerdefinierter IP-Adresse antworten

### Sperrmodus für Regeln im Adblock-Stil

Hier können Sie festlegen, wie AdGuard auf Domains reagieren soll, die durch DNS-Regeln auf Basis der [Adblock-Syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax) gesperrt werden.

- Mit Fehler „Abgelehnt“ antworten
- Mit Fehler „NxDomain“ antworten
- Mit benutzerdefinierter IP-Adresse antworten

### Benutzerdefinierte IPv4-Adresse

Wenn die benutzerdefinierte IP-Adresse im Sperrmodus für Hosts-Regeln oder im Sperrmodus für Adblock-Stil-Regeln ausgewählt ist, wird diese IP-Adresse als Antwort auf gesperrte A-Anfragen zurückgegeben. Wenn keine angegeben werden, antwortet AdGuard mit dem Standardfehler „Abgelehnt“.

### Benutzerdefiniertes IPv6-Adresse

Wenn die benutzerdefinierte IP-Adresse im Sperrmodus für Hosts-Regeln oder im Sperrmodus für Adblock-Stil-Regeln ausgewählt ist, wird diese IP-Adresse als Antwort auf gesperrte AAAA-Anfragen zurückgegeben. Wird keine angegeben, antwortet AdGuard mit dem Standardfehler „Abgelehnt“.

### Fallback-Server

Hier können Sie einen alternativen DNS-Server angeben, an den eine DNS-Anfrage umgeleitet wird, wenn der Hauptserver nicht innerhalb der im nächsten Abschnitt angegebenen Zeitspanne antwortet. Es stehen drei Optionen zur Auswahl:

- Keine Ausweichserver verwenden;
- Standardserver des Systems verwenden;
- Benutzerdefinierte Server verwenden.

### ECH blockieren

Wenn diese Option aktiviert ist, entfernt AdGuard die Parameter von Encrypted ClientHello aus den Antworten.

### Liste der benutzerdefinierten Fallback-Server

Wenn Sie möchten, dass AdGuard benutzerdefinierte Fallback-Server verwendet, führen Sie diese in diesem Abschnitt auf, einen pro Zeile.

### Liste der benutzerdefinierten Bootstrap-Adressen

Ein Bootstrap ist ein DNS-Zwischenserver, der verwendet wird, um die IP-Adresse des sicheren DNS-Servers zu erhalten, den Sie zuvor unter *DNS-Schutz* ausgewählt haben. Ein solcher „Mittelweg“ ist erforderlich, wenn Protokolle verwendet werden, bei denen die Serveradresse mit Buchstaben angegeben wird (wie z. B. DNS-over-TLS). In diesem Fall fungiert der Bootstrap als Übersetzer und wandelt die Buchstaben in Zahlen um, die Ihr System versteht.

Standardmäßig wird der DNS-Auflöser des Systems verwendet, und die erste Bootstrap-Anfrage erfolgt über Port 53. Wenn Ihnen das nicht passt, listen Sie hier die IP-Adressen der DNS-Server auf, die zur Ermittlung der Adresse des verschlüsselten DNS-Servers verwendet werden, und zwar in der Reihenfolge von oben nach unten. Die angegebenen IP-Adressen werden in der aufgeführten Reihenfolge übernommen. Wenn Sie ungültige Adressen oder gar keine Adressen angeben, werden die System-IPs verwendet.

### DNS-Ausschlüsse

Alle DNS-Anfragen an die hier aufgeführten Domains werden an den Standard-DNS-Server des Systems umgeleitet, anstatt an den in den Einstellungen der App angegebenen DNS-Server. Außerdem werden die DNS-Sperrregeln nicht auf solche Anfragen angewandt.

### Bestimmte WLAN-Netzwerknamen (SSIDs) von der DNS-Filterung ausschließen

DNS protection will not include Wi-Fi networks listed in this section. Geben Sie die Namen der WLAN-Netzwerke (SSIDs) an, eine pro Zeile. Dies kann nützlich sein, wenn ein bestimmtes WLAN-Netzwerk bereits durch AdGuard Home oder ein anderes DNS-Schutzsystem geschützt ist. In diesem Fall ist es überflüssig, DNS-Anfragen erneut zu filtern.
