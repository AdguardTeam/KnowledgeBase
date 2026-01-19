---
title: Tracking-Schutz (früher Privatsphäre)
sidebar_position: 4
---

Viele Websites sammeln Informationen über Personen, die sie besuchen, z. B. ihre IP-Adresse, den installierten Browser und das Betriebssystem, die Bildschirmauflösung und sogar die Seite, von der jemand weitergeleitet wurde. Einige Websites verwenden Cookies, um Ihren Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Präferenzen zu speichern oder um Sie bei Ihrem nächsten Besuch „wiederzuerkennen”. **Tracking-Schutz** bewahrt Ihre persönlichen Informationen vor solchen Daten- und Statistiksammelsystemen.

Sie können die Einstellungen für den Tracking-Schutz nach Bedarf anpassen. Beispielsweise können Sie verhindern, dass Websites Suchmaschinenanfragen erhalten, über die Sie zu ihnen gelangt sind. Sie können Cookies von Dritt- und Erstanbietern automatisch löschen lassen. Sie können auch die Standortfreigabe Ihres Browsers deaktivieren, die zur Verfolgung Ihres Standorts verwendet werden kann. Sie können Ihre echte IP-Adresse verbergen oder durch eine beliebige andere ersetzen.

Werfen wir einen Blick auf die wichtigsten Einstellungen in **Tracking-Schutz**. Die Funktionen sind in die folgenden Abschnitte unterteilt: **Allgemeine Einstellungen**, **Tracking-Methoden**, **Browser-API**, **Windows-Tracking** und **Sonstiges**.

:::note

Einige Funktionen sind nur für bestimmte Produkte verfügbar, da es Einschränkungen durch das Betriebssystem oder den Browser gibt.

:::

## Allgemeine Einstellungen {#general}

### Tracker blockieren {#blocktrackers}

Diese Funktion blockiert Tracker und Web-Analyse-Tools mit dem AdGuard Tracking-Schutzfilter.

### Tracking-Parameter aus URLs entfernen {#removetracking}

Wenn Sie diese Funktion aktivieren, verwendet AdGuard seinen URL-Tracking-Filter, um Tracking-Parameter wie `utm_*` und `fb_ref` von Seiten-URLs.

### Suchanfragen verbergen {#searchqueries}

Diese Funktion verbirgt Ihre Suchanfragen vor Websites, die Sie über Suchmaschinenergebnisse besuchen. Wenn Sie beispielsweise eine Website über eine Suchmaschine wie Google oder Yahoo öffnen, blendet diese Funktion die Suchanfrage aus, mit der Sie diese Website gefunden haben.

### Websites mitteilen, meine Aktivitäten nicht zu verfolgen {#donottrack}

Sendet die Nachricht [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) und [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) an die Websites, die Sie besuchen.

### Weitere Datenschutzfilter {#otherprivacyfilters}

Diese Funktion zeigt andere Datenschutzfilter an, die in **Filter**aktiviert sind.

:::note

Verfügbar in AdGuard für Android und AdGuard für Windows.

:::

## Tracking-Methoden {#tracking-methods}

### Cookies von Drittanbietern löschen {#3p-cookie}

Diese Funktion begrenzt die Lebensdauer von Drittanbieter-Cookies, damit Werbetreibende Ihr Verhalten über verschiedene Seiten hinweg nicht verfolgen können.

Websites verwenden Cookies, um Ihre Informationen und Präferenzen zu speichern, z. B. die von Ihnen ausgewählte Sprache, Ihren Standort oder die Liste der Artikel in Ihrem Warenkorb. Wenn Sie auf eine Website zurückkehren, sendet Ihr Browser der Website Ihre Cookies, die zu der Website gehören, damit sie sich Ihre Daten „merken” kann.

Drittanbieter-Cookies werden von einer anderen Website als derjenigen gesetzt, die Sie gerade besuchen. Beispielsweise könnte cnn.com auf seiner Homepage ein Facebook-Widget „Gefällt mir“ haben. Dieses Widget installiert ein Cookie, das Facebook später lesen kann. Einige Werbetreibende verwenden solche Cookies, um zu nachzuverfolgen, welche anderen Websites Sie besuchen, auf denen ihre Anzeigen geschaltet werden.

Legen Sie einen Zeitraum (in Minuten) fest, nach dessen Ablauf alle Drittanbieter-Cookies gelöscht werden. Um solche Cookies abzulehnen, setzen Sie deren Lebensdauer auf 0 (Null).

:::caution

Diese Einstellung löscht alle Cookies von Drittanbietern, einschließlich der Informationen über Ihre Anmeldungen bei sozialen Netzwerken oder anderen Diensten von Drittanbietern. Möglicherweise müssen Sie sich bei manchen Websites regelmäßig erneut anmelden und es treten andere Probleme im Zusammenhang mit Cookies auf. Um ausschließlich Tracking-Cookie zu blockieren, verwenden Sie den [*AdGuard Tracking-Schutzfilter*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows, AdGuard für Mac und AdGuard Browsererweiterung (MV2-basierte Browser).

:::

### Cookies von Erstanbieter löschen (nicht empfohlen) {#1p-cookie}

Diese Funktion begrenzt die Lebensdauer von Erstanbieter-Cookies, damit Websites Ihre Daten wie Anmeldedaten und Spracheinstellungen nicht speichern können.

Legen Sie einen Zeitraum (in Minuten) fest, nach dessen Ablauf alle Cookies gelöscht werden. Um solche Cookies abzulehnen, setzen Sie deren Lebensdauer auf 0 (Null).

:::caution

Wir raten davon ab, diese Option zu aktivieren, da sie die Arbeit bestimmter Websites stark beeinträchtigen kann. Wenn Sie diese Cookies sperren, könnten einige Websites nicht mehr richtig funktionieren oder völlig unbenutzbar sind.

:::

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows, AdGuard für Mac und AdGuard Browsererweiterung (MV2-basierte Browser).

:::

### ETag- und If-None-Match-Header blockieren {#3p-cache}

Diese Funktion entfernt die ETag- und If-None-Match-Header aus Anfragen und Antworten, um eine Nachverfolgung durch diese zu verhindern.

Wenn ein Browser eine Seite aufruft, weist der Server dieser Seite einen ETag zu. Dieser ETag wird vom Browser verwendet, um den Inhalt der Seite zwischenzuspeichern. Bei nachfolgenden Anfragen sendet der Browser den ETag an den entsprechenden Server, so dass der Server die Identität des Besuchers erfährt. Solange die Dateien der Website im Cache gespeichert sind, wird der ETag jedes Mal gesendet, wenn Ihr Browser diese Website aufruft. Wenn auf der Website Inhalte von einem anderen Server eingebettet sind (z. B. ein Bild oder ein iFrame), kann dieser Server Ihre Aktivitäten ohne Ihr Wissen verfolgen.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows und AdGuard für Mac.

:::

### Drittanbieter-Autorisierungsheader blockieren {#3p-auth}

Diese Funktion deaktiviert zwischengespeicherte Autorisierungsdaten, die für Tracking-Zwecke verwendet werden. Dies kann die Funktionalität einiger Erweiterungen und Websites beeinträchtigen.

Der Wert des Headers wird vom Browser zwischengespeichert und mit jeder Anfrage an diese Domain mitgesendet. Das bedeutet, dass Autorisierungsheader genauso wie Cookies zu Tracking-Zwecken verwendet werden kann.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows und AdGuard für Mac.

:::

## Browser-API {#browser-api}

:::note

Für die AdGuard Browsererweiterung ist nur die Funktion **WebRTC blockieren** verfügbar. Sie finden diese im Abschnitt **Sonstiges**.

:::

### WebRTC blockieren {#webrtc}

Diese Funktion blockiert WebRTC, das Ihre echte IP-Adresse preisgeben kann, selbst wenn Sie einen Proxy oder ein VPN verwenden.

WebRTC (Web Real-Time Communication) ist eine Technologie, die das direkte Streaming von Daten zwischen Browsern und Apps ermöglicht. Allerdings kann es anderen Ihre echte IP-Adresse verraten, selbst wenn Sie einen Proxy oder ein VPN verwenden.

:::caution

Das Aktivieren dieser Option kann die Funktion bestimmter Browseranwendungen beeinträchtigen, z. B. Messenger, Streaming-Plattformen, Chats oder Spiele.

:::

### Push API blockieren {#push}

Diese Funktion verhindert Push-Benachrichtigungen von Websites.

Die Push-API ermöglicht es Servern, Nachrichten an Webanwendungen zu senden, unabhängig vom Aktivitätsstatus Ihres Browsers. Das bedeutet, dass Sie Benachrichtigungen von verschiedenen Websites auch dann sehen können, wenn Ihr Browser minimiert oder geschlossen ist. Aktivieren Sie diese Option, um die Push-API des Browsers vollständig zu deaktivieren.

### Location-API blockieren {#location}

Diese Funktion verhindert, dass Websites Ihren Standort ermitteln können.

Wenn Sie diese Option aktivieren, wird verhindert, dass Ihr Browser GPS-Daten sendet, die verwendet werden könnten, um Ihren Standort zu bestimmen, Ihre Suchergebnisse zu verändern und Ihre Online-Erfahrung zu beeinflussen.

### Flash blockieren {#flash}

Diese Funktion erhöht den Schutz und beschleunigt das Laden von Websites, indem sie die Flash Player-Unterstützung in Browsern deaktiviert.

Das Flash Player-Plugin ist zunehmend anfällig für Online-Bedrohungen wie Viren und Hacker geworden. Es kann auch die Ladezeiten der Website erheblich verlängern. Wenn Sie diese Einstellung aktivieren, sperrt AdGuard die Fähigkeit von Browsern, Komponenten (wie Plugins und ActiveXObject-Objekte) zu erkennen, die es Flash ermöglichen, Inhalte anzuzeigen. Dies bedeutet, dass die Browser Flash nicht unterstützen können.

### Java blockieren {#java}

Diese Funktion deaktiviert Java-Plugins auf Websites und Webdiensten, da die API schwerwiegende Sicherheitsprobleme aufweist. JavaScript wird dadurch nicht deaktiviert.

Einige Websites und Webdienste verwenden noch die alte Technologie zur Unterstützung von Java-Plugins. Die Java-Plugin-API, die die Grundlage für Java-Plugins bildet, weist gravierende Sicherheitsmängel auf. Aus Sicherheitsgründen sollten Sie solche Plugins deaktivieren. Selbst wenn Sie sich für die Option „Java blockieren“ entscheiden, bleibt JavaScript dennoch aktiviert.

## Windows-Tracking {#windowstracking}

:::note

Diese Funktionen sind nur in AdGuard für Windows verfügbar.

:::

### Windows-Telemetrie deaktivieren {#windowstelemetry}

Diese Funktion deaktiviert das Senden technischer Daten zu Ihrem System und Ihrer App-Nutzung.

### Windows Recall deaktivieren {#windowsrecall}

Diese Funktion verhindert, dass Windows Bildschirmaufnahmen Ihrer Desktop-Aktivitäten erstellt und analysiert.

### Werbe-ID deaktivieren {#advertisingid}

Diese Funktion deaktiviert die Werbe-ID, um die Nachverfolgung Ihrer App-Nutzung zu unterbinden.

### Automatische Berichterstellung durch Microsoft Defender deaktivieren {#windowsautoreport}

Diese Funktion blockiert die automatische Meldung und Probenahme von verdächtiger Malware.

### WAP-Push-Nachrichtendienst deaktivieren {#wappushrouting}

Diese Funktion deaktiviert die Datenerfassung zu Problemen mit Windows-Komponenten.

## Sonstiges {#miscellaneous}

### Referer vor Drittanbietern verbergen {#referer}

Diese Funktion verhindert, dass Dritte erfahren, welche Websites Sie besuchen.

Referer ist ein HTTP-Header, der bei Browser-zu-Server-Anfragen verwendet wird. Er enthält die URL der Anfragequelle. Wenn Sie von einer Seite zur anderen navigieren, speichert Referer die URL der ursprünglichen Seite. Der Server, auf dem die Ziel-Webseite gehostet wird, verfügt häufig über Software, die Referer analysiert und verschiedene Informationen daraus extrahiert. Durch das Aktivieren der Einstellung *Referer vor Dritten verbergen* wird die aktuelle Website durch Ändern des HTTP-Headers vor Websites Dritter verborgen.

Sie können auch einen beliebigen Wert für Referer festlegen, indem Sie ihn in das Feld *Eigener Referer* eingeben. Um den Standard-Referer zu verwenden, lassen Sie das Feld leer.

Beachten Sie, dass AdGuard-Apps Browser-an-Server-Anfragen „abfangen“, um den Datenverkehr filtern zu können. Anfragen an Werbe-, Tracking- und Phishing-Server können verändert werden, bevor sie an den Server gesendet werden, oder ganz blockiert werden. Gleiches gilt für die Option *Referer vor Dritten verbergen*: AdGuard fängt HTTP(S)-Anfragen ab, insbesondere um den Referer-Header zu entfernen oder zu ändern, wenn diese Option aktiviert ist. Dies geschieht jedoch erst, nachdem diese Anfragen den Browser „verlassen” haben. Das bedeutet, dass Sie, wenn Sie den Referer innerhalb des Browsers überwachen (z. B. mit Hilfe der Entwicklertools von Chrome), den ursprünglichen Referer sehen, da die Anfrage AdGuard noch nicht erreicht hat. Sie können Software wie [Fiddler](https://www.telerik.com/fiddler) verwenden, um sicherzustellen, dass der Referer korrekt geändert wird.

Aufgrund der Natur aller Browsererweiterungen funktioniert die AdGuard Browsererweiterung stattdessen „innerhalb“ des Webbrowsers. Dadurch wird der Referer auf der Stelle geändert, so dass die Entwicklertools den gewünschten Referer für Ihre Anfragen anzeigen.

### User-Agent verbergen {#useragent}

Diese Funktion entfernt identifizierende Informationen aus dem User-Agent-Header.

Wenn Sie eine Website besuchen, sendet Ihr Browser seine Informationen an den Server. Es sieht aus wie eine Textzeile, die Teil einer HTTP-Anfrage ist, die mit „User-Agent:“ beginnt. Sie enthält in der Regel den Namen und die Version des Browsers, das Betriebssystem und die Spracheinstellungen. Wir trennen den User-Agent (Browserkennung) von identifizierenden Informationen, so dass Werbetreibende ihn nicht erhalten können.

Sie können auch einen beliebigen Wert für den User-Agent festlegen, indem Sie ihn in das Feld Eigener User-Agent eingeben. Um den Standard-User-Agent zu verwenden, lassen Sie das Feld leer.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows und AdGuard für Mac.

:::

### IP-Adresse maskieren {#ip}

Diese Funktion täuscht Websites vor, dass Sie ein Proxy mit der von Ihnen angegebenen IP-Adresse sind.

Der Tracking-Schutz kann Ihre IP-Adresse nicht ausblenden. Wir können sie jedoch verbergen, so dass die von Ihnen besuchten Websites annehmen, dass Sie ein Proxy sind. Manchmal hilft das, und Websites ignorieren Ihre wahre IP-Adresse.

Sie können eine beliebige IP-Adresse festlegen, die andere als Ihre wahrnehmen sollen, indem Sie sie einfach in das entsprechende Feld eingeben. Um die Standard-IP-Adresse zu verwenden, lassen Sie das Feld leer.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows und AdGuard für Mac.

:::

### X-Client-Data-Header entfernen {#xclientdata}

Diese Funktion verhindert, dass Google Chrome Informationen zu seiner Version und Änderungen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows, AdGuard für Mac und AdGuard Browsererweiterung (Chromium-basierte Browser).

:::

### Schutz vor DPI {#dpi}

Diese Funktion modifiziert Ihren ausgehenden Datenverkehr, sodass die Deep Packet Inspection-Systeme Ihres Internetdienstanbieters die von Ihnen besuchten Websites nicht erkennen können. Ein vollständiger Schutz vor allen DPI-Systemen kann jedoch nicht garantiert werden.

Bei der Deep Packet Inspection handelt es sich um ein System zur Tiefenanalyse und Filterung des Datenverkehrs nach Paketinhalt sowie zur Sammlung statistischer Daten. Mit dieser Technologie können Internetanbieter den Datenverkehr kontrollieren und den Zugang zu bestimmten Inhalten beschränken.

AdGuard kann ausgehende Paketdaten so ändern, dass der Client nicht unter die DPI-Blockierungskriterien fällt. Das bedeutet, dass Sie durch die Aktivierung dieser Option Zugang zu den gewünschten Inhalten erhalten können. Derzeit können nicht alle DPI-Systeme umgangen werden, aber wir arbeiten ständig daran, dies zu verbessern.

:::note

Verfügbar in AdGuard für Android, AdGuard für Windows und AdGuard für Mac.

:::

:::caution

Wenn diese Funktion in AdGuard für Windows aktiviert ist, kann dies ESET Antivirus beeinträchtigen. Schutz vor DPI verhindert, dass ESET den Datenverkehr filtert, so dass auf der Sperrliste stehende und bösartige Websites nicht blockiert werden.

:::
