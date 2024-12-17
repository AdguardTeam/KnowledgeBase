---
title: Privatsphäre (Tracking-Schutz)
sidebar_position: 4
---

Viele Websites sammeln Informationen über ihre Besucher, z. B. ihre IP-Adresse, den installierten Browser und das Betriebssystem, die Bildschirmauflösung und sogar die Seite, von der ein Besucher weitergeleitet wurde. Einige Webseiten verwenden Cookies, um Ihren Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Präferenzen zu speichern oder um Sie bei Ihrem nächsten Besuch „wiederzuerkennen”. Der Modus *Privatsphäre* (oder *Tracking-Schutz* in AdGuard für Windows und AdGuard Browsererweiterung) schützt Ihre persönlichen Informationen vor solchen daten- und statistiksammelnden Systemen.

Sie können die Funktionsweise des Stealth-Modus flexibel anpassen: Sie können z. B. verhindern, dass die Website die Suchanfrage erhält, mit der Sie sie im Internet gefunden haben, Sie können sowohl Cookies von Drittanbietern als auch eigene Cookies der Website automatisch löschen, Sie können die gemeinsame Nutzung der Geolokalisierung durch den Browser deaktivieren, die dazu verwendet werden kann, Ihren Aufenthaltsort zu verfolgen, und Sie können Ihre wahre IP-Adresse verbergen oder sie sogar durch eine beliebige ersetzen.

Im Folgenden werden die wichtigsten Funktionen und Optionen aufgeführt und beschrieben, die Sie in den Einstellungen des **Stealth-Modus** steuern können. Sie sind in vier Gruppen unterteilt: **Allgemein**, **Tracking-Methoden**, **Browser-API**und **Sonstiges**.

:::note

Einige Optionen sind je nach Produkt aufgrund des Betriebssystems oder anderer Einschränkungen möglicherweise nicht verfügbar.

:::

## Allgemein {#general}

### Suchanfragen verbergen {#searchqueries}

Wenn Sie von Google, Yahoo oder einer anderen Suchmaschine auf eine Website weitergeleitet werden, blendet diese Option die Suchanfrage aus, mit der Sie die Website gefunden haben.

### Anweisung senden, um das Tracking zu beenden {#donottrack}

Sendet die Nachricht [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) und [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) an die Websites, die Sie besuchen.

### Tracking-Parameter aus URLs entfernen {#removetracking}

Wenn Sie diese Option aktivieren, entfernt AdGuard Tracking-Parameter wie `utm_*` und `fb_ref` aus den URLs der Seiten.

### Tracking-Methoden {#tracking-methods}

### Cookies von Drittanbietern löschen {#3p-cookie}

Websites verwenden Cookies, um Ihre Informationen und Präferenzen zu speichern, z. B. die von Ihnen gewählte Sprache, Ihren Standort oder die Liste der Artikel in Ihrem Einkaufswagen. Wenn Sie auf eine Website zurückkehren, sendet Ihr Browser die zu dieser Website gehörenden Cookies zurück, so dass er sich Ihre Daten „merken” kann.

Cookies von Drittanbietern sind solche, die von einer anderen Website als derjenigen, die Sie gerade besuchen, eingesetzt werden. Zum Beispiel kann cnn.com ein Facebook „Gefällt mir”-Widget auf seiner Homepage haben. Dieses Widget setzt ein Cookie, das später von Facebook ausgelesen werden kann. Einige Werbetreibende verwenden solche Cookies, um zu verfolgen, welche anderen Websites Sie besuchen, auf denen ihre Werbung platziert ist.

Legen Sie eine Zeitspanne (in Minuten) fest, nach deren Ablauf alle Cookies von Drittanbietern gelöscht werden sollen. Stellen Sie den Timer auf 0 (Null), um sie vollständig zu sperren.

:::caution

Diese Einstellung löscht alle Cookies von Drittanbietern, einschließlich der Informationen über Ihre Anmeldungen bei sozialen Netzwerken oder anderen Diensten von Drittanbietern. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden und haben andere Probleme mit Cookies. Um ausschließlich Tracking-Cookies zu sperren, verwenden Sie den [*AdGuard Tracking-Schutz-Filter*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Cookies von Erstanbieter löschen (nicht empfohlen) {#1p-cookie}

Legen Sie eine Zeitspanne (in Minuten) fest, nach deren Ablauf alle Cookies gelöscht werden sollen. Stellen Sie den Timer auf 0 (Null), um sie vollständig zu sperren.

:::caution

Wir raten davon ab, diese Option zu aktivieren, da sie die Arbeit bestimmter Websites stark beeinträchtigen kann.

:::

### ETag- und If-None-Match-Header sperren {#3p-cache}

Wenn ein Browser eine Seite aufruft, weist der Server dieser Seite einen ETag zu. Dieser ETag wird vom Browser verwendet, um den Inhalt der Seite zwischenzuspeichern. Bei nachfolgenden Anfragen sendet der Browser den ETag an den entsprechenden Server, so dass der Server die Identität des Besuchers erfährt. Solange die Dateien der Website im Cache gespeichert sind, wird der ETag jedes Mal gesendet, wenn Ihr Browser diese Website aufruft. Wenn auf der Website Inhalte von einem anderen Server eingebettet sind (z. B. ein Bild oder ein iFrame), kann dieser Server Ihre Aktivitäten ohne Ihr Wissen verfolgen.

### Drittanbieter-Autorisierungsheader sperren {#3p-auth}

Der Wert der Kopfzeile „Autorisierung” wird vom Browser zwischengespeichert und dann mit jeder Anfrage an diese Domain gesendet. Das bedeutet, dass sie genau wie Cookies zur Nachverfolgung verwendet werden können.

## Browser-API {#browser-api}

### WebRTC sperren {#webrtc}

WebRTC (Web Real-Time Communication) ist eine Technologie, die das direkte Streaming von Daten zwischen Browsern und Anwendungen ermöglicht. So können andere Ihre wahre IP-Adresse erfahren, selbst wenn Sie einen Proxy oder ein VPN verwenden. Die Aktivierung dieser Option kann die Arbeit bestimmter Browseranwendungen wie Messenger, Chats, Kinos oder Spiele stören.

### Push-API sperren {#push}

Mit der Push-API können Server unabhängig vom Aktivitätsstatus Ihres Browsers Nachrichten an Webanwendungen senden. So sehen Sie möglicherweise Benachrichtigungen von verschiedenen Websites, selbst wenn Ihr Browser in der Taskleiste ausgeblendet oder nicht gestartet ist. Aktivieren Sie diese Option, um die Push-API des Browsers vollständig zu sperren.

### Ortungsdienste-API sperren {#location}

Durch die Aktivierung dieser Option wird verhindert, dass der Browser GPS-Daten sendet, die zur Bestimmung Ihres Standorts, zum Ändern Ihrer Suchergebnisse oder zur anderweitigen Beeinflussung Ihres Webangebots verwendet werden könnten.

### Flash sperren {#flash}

Das Flash Player-Plugin ist zunehmend anfällig für Online-Bedrohungen wie Viren und Hacker; außerdem kann es die Ladezeiten von Websites erheblich beeinträchtigen. Wenn Sie diese Einstellung aktivieren, sperrt AdGuard die Fähigkeit von Browsern, Komponenten (wie Plugins und ActiveXObject-Objekte) zu erkennen, die es Flash ermöglichen, Inhalte anzuzeigen. Dies bedeutet, dass die Browser Flash nicht unterstützen können.

### Java sperren {#java}

Einige Websites und Webdienste verwenden noch die alte Technologie zur Unterstützung von Java-Plugins. Die Java-Plugin-API, die die Grundlage für Java-Plugins bildet, weist gravierende Sicherheitsmängel auf. Aus Sicherheitsgründen sollten Sie solche Plugins deaktivieren. Aber auch wenn Sie die Option „Java sperren” wählen, ist JavaScript weiterhin aktiviert.

## Sonstiges {#miscellaneous}

### Referer vor Drittanbietern verbergen {#referer}

Referrer ist ein HTTP-Header, der bei Browser-zu-Server-Anfragen verwendet wird. Sie enthält die URL der Anfragequelle. Wenn Sie von einer Seite zu einer anderen navigieren, speichert der Referer die URL der Ausgangsseite. Der Server, auf dem die Ziel-Webseite gehostet wird, verfügt häufig über Software, die Referer analysiert und verschiedene Informationen daraus extrahiert. Wenn Sie die Option *Referer vor Dritten verbergen* aktivieren, wird die aktuelle Website durch Änderung des HTTP-Headers vor Websites Dritter verborgen.

Sie können auch einen beliebigen Wert für Referer festlegen, indem Sie ihn in das Feld *Eigener Referer* eingeben. Um den Standard-Referer zu verwenden, lassen Sie das Feld leer.

Beachten Sie, dass AdGuard-Anwendungen Browser-zu-Server-Anfragen „abfangen”, um den Datenverkehr filtern zu können. Anfragen an Werbe-, Tracking- und Phishing-Server können verändert werden, bevor sie an den Server gesendet werden, oder ganz gesperrt werden. Gleiches gilt für die Option *Referer vor Dritten verbergen*: AdGuard fängt HTTP(S)-Anfragen ab, insbesondere um den Referer-Header zu entfernen oder zu ändern, wenn diese Option aktiviert ist. Dies geschieht jedoch erst, nachdem diese Anfragen den Browser „verlassen” haben. Das bedeutet, dass Sie, wenn Sie den Referer innerhalb des Browsers überwachen (z. B. mit Hilfe der Developer Tools von Chrome), den ursprünglichen Referer sehen, da die Anfrage AdGuard noch nicht erreicht hat. Sie können Software wie [Fiddler](https://www.telerik.com/fiddler) verwenden, um sicherzustellen, dass der Referer korrekt geändert wird.

Andererseits arbeitet die AdGuard Browsererweiterung aufgrund der Natur aller Browsererweiterungen „innerhalb“ des Browsers. Dadurch wird der Referer auf der Stelle geändert, so dass die Entwicklertools den gewünschten Referer für Ihre Anfragen anzeigen.

### Browserkennung verbergen {#useragent}

Wenn Sie eine Website besuchen, sendet Ihr Browser seine Informationen an den Server. Sie sieht aus wie eine Textzeile, die Teil einer HTTP-Anfrage ist und mit „User-Agent:” beginnt. Sie enthält in der Regel den Namen und die Version des Browsers, das Betriebssystem und die Spracheinstellungen. Wir trennen den User-Agent (Browserkennung) von identifizierenden Informationen, so dass Werbetreibende ihn nicht erhalten können.

Sie können auch einen beliebigen Wert für die Browserkennung festlegen, indem Sie ihn in das Feld Benutzerdefinierter User Agent eingeben. Um die Standard-Browserkennung zu verwenden, lassen Sie das Feld leer.

### IP-Adresse maskieren {#ip}

Der Stealth-Modus kann Ihre IP-Adresse nicht verbergen. Wir können sie jedoch verbergen, so dass die von Ihnen besuchten Websites annehmen, dass Sie ein Proxy sind. Manchmal hilft das, und Websites ignorieren Ihre wahre IP-Adresse.

Sie können eine beliebige IP-Adresse festlegen, die andere als Ihre wahrnehmen sollen, indem Sie sie einfach in das entsprechende Feld eingeben. Um die Standard-IP-Adresse zu verwenden, lassen Sie das Feld leer.

### X-Client-Data-Header entfernen {#xclientdata}

Es verbietet Google Chrome, seine Versions- und Änderungsinformationen bei Anfragen an Google-Domains (einschließlich „Double Click” und „Google Analytics”) zu senden.

### Schutz vor DPI {#dpi}

Bei der Deep Packet Inspection handelt es sich um ein System zur Tiefenanalyse und Filterung des Datenverkehrs nach Paketinhalt sowie zur Sammlung statistischer Daten. Mit dieser Technologie können Internetanbieter den Datenverkehr kontrollieren und den Zugang zu Inhalten für ihre Kunden beschränken.

AdGuard kann ausgehende Paketdaten so verändern, dass der Client nicht unter die DPI-Sperrkriterien fällt. Das bedeutet, dass die Nutzer durch die Aktivierung dieser Option Zugang zu den von ihnen gewünschten Inhalten erhalten können. Derzeit können nicht alle DPI-Systeme umgangen werden, aber wir arbeiten ständig daran, dies zu verbessern.

Die Funktion „Schutz vor DPI” ist bereits in AdGuard für Windows, AdGuard für Mac und AdGuard für Android implementiert.

:::caution

Wenn diese Funktion in AdGuard für Windows aktiviert ist, kann dies ESET Antivirus beeinträchtigen. Schutz vor DPI verhindert, dass ESET den Datenverkehr filtert, so dass auf der Sperrliste stehende und bösartige Websites nicht gesperrt werden.

:::
