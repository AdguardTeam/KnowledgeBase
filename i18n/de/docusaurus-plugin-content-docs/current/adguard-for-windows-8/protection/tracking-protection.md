---
title: Tracking-Schutz
sidebar_position: 2
---

:::info

Dieser Artikel beschreibt AdGuard für Windows v8.0, einen umfassenden Werbeblocker, der Ihr Gerät auf Systemebene schützt. Es handelt sich hierbei um eine Beta-Version, die sich noch in der Entwicklung befindet. Um es auszuprobieren, laden Sie die [Beta-Version von AdGuard für Windows](https://agrd.io/windows_beta) herunter.

:::

Viele Websites sammeln Daten über ihre Besucher, darunter IP-Adressen, Browser- und Betriebssysteminformationen, Bildschirmauflösung und sogar die Seite, von der aus Sie gekommen sind. Cookies können verwendet werden, um Ihren Browser zu identifizieren, Ihre Präferenzen zu speichern oder Sie bei Ihrer Rückkehr wiederzuerkennen. Der Tracking-Schutz verhindert, dass solche Systeme Ihre personenbezogenen Daten erfassen. Erfahren Sie mehr in unserem [Artikel über Tracking-Schutz in AdGuard (https://adguard.com/kb/general/stealth-mode/)

![Tracking-Schutz](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Wenn Sie keine Zeit mit der manuellen Einstellung von Filtern verbringen möchten, können Sie einfach eine der vordefinierten Schutzstufen auswählen:

- _Standard_: standardmäßig aktiviert und bietet zuverlässigen Schutz für das tägliche Surfen.
- _Hoch_: entfernt Tracking-Parameter aus Seiten-URLs und blockiert Cookies von Drittanbietern. Möglicherweise müssen Sie sich bei manchen Websites regelmäßig erneut anmelden und es treten andere Probleme im Zusammenhang mit Cookies auf.
- _Extrem_: begrenzt die Lebensdauer von Cookies von Drittanbietern und blockiert bestimmte Browser-APIs. Einige Websites funktionieren möglicherweise nicht wie vorgesehen.

Für maximale Flexibilität wählen Sie _Benutzerdefiniert_ und nehmen Sie alle Einstellungen manuell vor. Die darin enthaltenen Einstellungen sind in fünf Kategorien unterteilt:

- [Allgemein](#general-settings)

- [Tracking-Methoden](#tracking-methods)

- [Browser-API](#browser-api)

- [Windows-Tracking](#windows-tracking)

- [Sonstiges](#miscellaneous)

## Allgemeine Einstellungen

![Allgemeine Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Tracker blockieren

Blockiert Tracker und Webanalysen mit dem _AdGuard Tracking-Schutzfilter_.

### Tracking-Parameter aus URLs entfernen

Entfernt Tracking-Parameter wie `utm_*` und `fb_ref` aus den Seiten-URLs mithilfe des _AdGuard-URL-Tracking-Filters_.

### Suchanfragen verbergen

Verbirgt Suchanfragen für Websites, die über Suchmaschinenergebnisse besucht wurden. Wenn Sie von Google, Yahoo oder einer anderen Suchmaschine auf eine Website weitergeleitet werden, blendet diese Option die Suchanfrage aus, mit der Sie die Website gefunden haben.

### Websites bitten, Sie nicht zu verfolgen

Sendet die Signale [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) und [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites.

## Tracking-Methoden

![Tracking-Methoden](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Cookies von Drittanbietern löschen

Websites verwenden Cookies, um Ihre bevorzugten Einstellungen zu speichern — beispielsweise die von Ihnen gewählte Sprache, Ihren Standort oder die Artikel in Ihrem Warenkorb. Wenn Sie zurückkehren, sendet der Browser diese Cookies zurück, damit die Website Sie erkennen kann.

Cookies von Drittanbietern funktionieren auf die gleiche Weise, werden jedoch von anderen Domains als der von Ihnen besuchten erstellt. Beispielsweise kann cnn.com ein Facebook-Widget _Like_ einbinden, das einen Cookie setzt, der später von Facebook gelesen wird. Werbetreibende verwenden solche Cookies häufig, um nachzuverfolgen, welche anderen Websites Sie besuchen.

Mit dieser Option können Sie eine Gültigkeitsdauer (in Minuten) festlegen, nach dessen Ablauf alle Cookies von Drittanbietern gelöscht werden. Wenn Sie den Timer auf 0 setzen, werden solche Cookies vollständig blockiert.

![Gültigkeitsdauer](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Beachten Sie, dass diese Einstellung alle Cookies von Drittanbietern entfernt, einschließlich derjenigen, die für Anmeldungen über soziale Netzwerke oder andere externe Dienste verwendet werden. Das bedeutet, dass Sie sich möglicherweise von Zeit zu Zeit erneut anmelden müssen oder andere Probleme im Zusammenhang mit Cookies klären müssen. Wenn Sie ausschließlich Tracking-Cookies blockieren möchten, verwenden Sie den [_AdGuard Tracking-Schutzfiter_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Cookies von Erstanbieter löschen (nicht empfohlen)

Diese Option löscht Cookies, die von der Website, die Sie gerade besuchen, gesetzt wurden, nach einer ausgewählten Zeitspanne (in Minuten). Nachdem der Timer abgelaufen ist, werden alle derartigen Cookies gelöscht. Setzen Sie den Timer auf 0, um sie vollständig zu blockieren.

:::caution

Wir raten davon ab, diese Option zu aktivieren, da sie die Arbeit bestimmter Websites stark beeinträchtigen kann.

:::

### ETag- und If-None-Match-Header blockieren

Entfernt die Header „ETag“ und „If-None-Match“ aus Anfragen und Antworten, um zu verhindern, dass Websites diese zum Tracking verwenden können.

Wenn ein Browser eine Seite aufruft, weist der Server ihr einen ETag zu — eine eindeutige Kennung, die zum Zwischenspeichern des Seiteninhalts verwendet wird. Bei späteren Besuchen sendet der Browser denselben ETag zurück an den Server. Dies ermöglicht es dem Server, den Besucher wiederzuerkennen. Solange die zwischengespeicherten Dateien vorhanden sind, wird der ETag bei jeder Anfrage übertragen. Wenn die Seite auch eingebettete Elemente von anderen Servern enthält, wie Bilder oder Iframes, können diese Server ETags verwenden, um Ihre Aktivitäten ohne Ihr Wissen zu verfolgen.

### Drittanbieter-Autorisierungsheader blockieren

Deaktiviert zwischengespeicherte Autorisierungsdaten, die für Tracking-Zwecke verwendet werden können. Dies kann die Funktionalität einiger Erweiterungen und Websites beeinträchtigen.

Der Wert des Headers wird vom Browser zwischengespeichert und mit jeder Anfrage an diese Domain mitgesendet. Da es jede Anfrage begleitet, kann es ähnlich wie Cookies dazu verwendet werden, Sie zu identifizieren und zu verfolgen.

## Browser-API

![Browser-API](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### WebRTC blockieren

Blockiert WebRTC, eine bekannte Schwachstelle, die Ihre echte IP-Adresse preisgeben kann, selbst wenn Sie einen Proxy oder VPN verwenden.

WebRTC (Web Real-Time Communication) ist eine Technologie, die direktes Daten-Streaming zwischen Browsern und Apps ermöglicht. Es kann Ihre echte IP-Adresse offenlegen, selbst wenn Sie einen Proxy oder ein VPN verwenden. Die Aktivierung dieser Option kann bestimmte Browseranwendungen wie Messenger, Chats, Videoplayer oder Spiele beeinträchtigen.

### Push API blockieren

Die Push-API ermöglicht es Servern, unabhängig vom Aktivitätsstatus Ihres Browsers Nachrichten an Webanwendungen zu senden. Aus diesem Grund erhalten Sie möglicherweise Benachrichtigungen von Websites, auch wenn Ihr Browser in der Taskleiste ausgeblendet oder nicht gestartet ist. Durch das Aktivieren dieser Option wird die Push-API vollständig blockiert.

### Location-API blockieren

Wenn diese Option aktiviert ist, sendet der Browser keine GPS-Daten mehr an Websites. Dadurch wird verhindert, dass Ihr Standort ermittelt, Suchergebnisse verändert oder Inhalte auf Grundlage Ihres Standorts angepasst werden.

### Flash blockieren

Das Flash Player-Plugin ist veraltet und sehr anfällig für Viren und Sicherheitslücken. Es kann auch das Laden der Websites verlangsamen. Durch das Aktivieren dieser Option wird verhindert, dass Browser Flash-Komponenten (wie Plugins oder ActiveXObject-Objekte) erkennen, wodurch die Flash-Unterstützung effektiv deaktiviert wird.

## Windows-Tracking

![Windows-Tracking](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Windows-Telemetrie deaktivieren

Deaktiviert das Senden technischer Daten über Ihr System und Ihre App-Nutzung.

### Werbe-ID deaktivieren

Deaktiviert die Werbe-ID, um das Tracking Ihrer App-Nutzung zu verhindern.

### Automatische Berichterstellung durch Microsoft Defender deaktivieren

Blockiert die automatische Meldung und Probenahme von verdächtiger Malware.

### WAP-Push-Nachrichtendienst deaktivieren

Deaktiviert die Datenerfassung zu Problemen mit Windows-Komponenten

## Sonstiges

![Sonstiges](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Referer vor Drittanbietern verbergen

Referer ist ein HTTP-Header, der in Anfragen vom Browser an den Server enthalten ist. Er enthält die URL der Anfragequelle. Wenn Sie von einer Seite zur anderen navigieren, speichert Referer die URL der ursprünglichen Seite. Der Server, auf dem die Ziel-Webseite gehostet wird, verfügt häufig über Software, die Referer analysiert und verschiedene Informationen daraus extrahiert.

Durch Aktivieren der Option _Referer vor Drittanbietern verbergen_ wird verhindert, dass Websites von Drittanbietern diese Informationen einsehen können, indem der Header geändert oder entfernt wird.

Sie können auch einen benutzerdefinierten Wert in das Feld _Eigener Referer_ eingeben. Um den Standard-Referer zu verwenden, lassen Sie das Feld leer.

Beachten Sie, dass AdGuard-Anwendungen Browser-zu-Server-Anfragen abfangen, um den Datenverkehr filtern zu können. Anfragen an Werbe-, Tracking- und Phishing-Server können verändert werden, bevor sie an den Server gesendet werden, oder ganz blockiert werden.

Das Gleiche gilt für die Option _Referer vor Drittanbietern verbergen_: Um den Datenverkehr filtern zu können, fängt AdGuard HTTP(S)-Anfragen ab und kann diese ändern oder sperren, bevor diese den Server erreichen. Die Änderung erfolgt erst, nachdem die Anfrage Ihren Browser verlassen hat. Aus diesem Grund sehen Sie beim Überprüfen der Header im Browser (z. B. mit den Chrome Developer Tools) weiterhin den ursprünglichen Referer. Um zu überprüfen, ob es geändert wurde, können Sie externe Tools wie „Fiddler“ verwenden.

### User-Agent verbergen

Wenn Sie eine Website besuchen, sendet Ihr Browser eine Kopfzeile namens User-Agent als Teil der HTTP-Anfrage. Es sieht aus wie eine Textzeile, die mit „User-Agent:“ beginnt. Diese Zeile enthält in der Regel Angaben wie den Namen und die Version des Browsers, das Betriebssystem und die Spracheinstellungen.

Durch Aktivierung dieser Option entfernt AdGuard identifizierende Informationen aus dem User-Agent, sodass Werbetreibende und Tracker diese nicht zur Erstellung von Profilen über Sie verwenden können. Wenn Sie möchten, können Sie einen benutzerdefinierten Wert in das Feld _Benutzerdefinierter User-Agent_ eingeben. Um den Standardwert beizubehalten, lassen Sie das Feld einfach leer.

### IP-Adresse maskieren

AdGuard kann Ihre echte IP-Adresse nicht vollständig verbergen, aber es kann sie durch eine andere ersetzen, sodass Websites Ihre Verbindung als über einen Proxy hergestellt interpretieren. In einigen Fällen hilft dies dabei, Ihre tatsächliche IP-Adresse zu verschleiern.

Sie können jede beliebige IP-Adresse, die Sie verwenden möchten, in das entsprechende Feld eingeben. Um die Standard-IP-Adresse zu verwenden, lassen Sie das Feld leer.

### X-Client-Data-Header entfernen

Verhindert, dass Google Chrome Informationen über seine Version und Änderungen in Anfragen an Google-Domains sendet, einschließlich Diensten wie DoubleClick und Google Analytics.

### Schutz vor DPI

Bei der Deep Packet Inspection handelt es sich um ein System zur Tiefenanalyse und Filterung des Datenverkehrs nach Paketinhalt sowie zur Sammlung statistischer Daten. Mit dieser Technologie können Internetanbieter den Datenverkehr kontrollieren und den Zugang zu bestimmten Inhalten beschränken.

Deep Packet Inspection (DPI) ist eine Technologie, die von einigen Internetdienstanbietern verwendet wird, um den Datenverkehr anhand des Paketinhalts analysieren und filtern zu können. Es ermöglicht ihnen, Verbindungen zu überwachen, den Zugriff auf bestimmte Ressourcen zu beschränken und Statistiken über Benutzer zu sammeln.

Wenn diese Option aktiviert ist, modifiziert AdGuard ausgehende Paketdaten so, dass sie nicht mehr den Sperrkriterien von DPI entsprechen. Dies kann Ihnen helfen, Einschränkungen zu umgehen und auf die benötigten Inhalte zugreifen zu können. Allerdings können noch nicht alle DPI-Systeme umgangen werden – Verbesserungen sind noch nicht abgeschlossen.

Die Funktion _Schutz vor DPI_ ist bereits in AdGuard für Windows, AdGuard für Mac und AdGuard für Android implementiert.

:::caution

Wenn diese Funktion in AdGuard für Windows aktiviert ist, kann sie zu Konflikten mit dem Virenschutzprogramm von ESET führen. In diesem Fall kann ESET den Datenverkehr nicht filtern, sodass einige bösartige oder gesperrte Websites weiterhin zugänglich sind.

:::
