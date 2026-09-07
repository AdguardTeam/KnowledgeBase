---
title: Tracking-Schutz
sidebar_position: 2
---

Viele Websites sammeln Daten über ihre Besucher, darunter IP-Adressen, Browser- und Betriebssysteminformationen, Bildschirmauflösung und sogar die Seite, von der aus Sie gekommen sind. Cookies können verwendet werden, um Ihren Browser zu identifizieren, Ihre Präferenzen zu speichern oder Sie bei Ihrer Rückkehr wiederzuerkennen. Der Tracking-Schutz verhindert, dass solche Systeme Ihre personenbezogenen Daten erfassen. Erfahren Sie mehr in unserem [Artikel über Tracking-Schutz in AdGuard (https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Tracker blockieren

Blockiert Tracker und Webanalysen mit dem _AdGuard Tracking-Schutzfilter_.

### Tracking-Parameter aus URLs entfernen

Entfernt Tracking-Parameter wie `utm_*` und `fb_ref` aus den Seiten-URLs mithilfe des _AdGuard-URL-Tracking-Filters_.

### Suchanfragen verbergen

Verbirgt Suchanfragen für Websites, die über Suchmaschinenergebnisse besucht wurden. Wenn Sie von Google, Yahoo oder einer anderen Suchmaschine auf eine Website weitergeleitet werden, blendet diese Option die Suchanfrage aus, mit der Sie die Website gefunden haben.

### Websites mitteilen, meine Aktivitäten nicht zu verfolgen

Sendet die Signale [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) und [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites.

### Weitere Datenschutzfilter

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Tracking-Methoden

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Cookies von Drittanbietern löschen

Websites verwenden Cookies, um Ihre bevorzugten Einstellungen zu speichern — beispielsweise die von Ihnen gewählte Sprache, Ihren Standort oder die Artikel in Ihrem Warenkorb. Wenn Sie zurückkehren, sendet der Browser diese Cookies zurück, damit die Website Sie erkennen kann.

Cookies von Drittanbietern funktionieren auf die gleiche Weise, werden jedoch von anderen Domains als der von Ihnen besuchten erstellt. Beispielsweise kann cnn.com ein Facebook-Widget _Like_ einbinden, das einen Cookie setzt, der später von Facebook gelesen wird. Werbetreibende verwenden solche Cookies häufig, um nachzuverfolgen, welche anderen Websites Sie besuchen.

Mit dieser Option können Sie eine Gültigkeitsdauer (in Minuten) festlegen, nach dessen Ablauf alle Cookies von Drittanbietern gelöscht werden. Wenn Sie den Timer auf 0 setzen, werden solche Cookies vollständig blockiert.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

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

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) ist eine Technologie, die direktes Daten-Streaming zwischen Browsern und Apps ermöglicht. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Push API blockieren

Die Push-API ermöglicht es Servern, unabhängig vom Aktivitätsstatus Ihres Browsers Nachrichten an Webanwendungen zu senden. Aus diesem Grund erhalten Sie möglicherweise Benachrichtigungen von Websites, auch wenn Ihr Browser in der Taskleiste ausgeblendet oder nicht gestartet ist. Durch das Aktivieren dieser Option wird die Push-API vollständig blockiert.

### Location-API blockieren

Wenn diese Option aktiviert ist, sendet der Browser keine GPS-Daten mehr an Websites. Dadurch wird verhindert, dass Ihr Standort ermittelt, Suchergebnisse verändert oder Inhalte auf Grundlage Ihres Standorts angepasst werden.

## Windows-Tracking

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Windows-Telemetrie deaktivieren

Deaktiviert das Senden technischer Daten über Ihr System und Ihre App-Nutzung.

### Windows Recall deaktivieren

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Werbe-ID deaktivieren

Deaktiviert die Werbe-ID, um das Tracking Ihrer App-Nutzung zu verhindern.

### Automatische Berichterstellung durch Microsoft Defender deaktivieren

Blockiert die automatische Meldung und Probenahme von verdächtiger Malware.

### WAP-Push-Nachrichtendienst deaktivieren

Disables data collection about Windows component problems.

## Sonstiges

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Referer vor Drittanbietern verbergen

Referer ist ein HTTP-Header, der in Anfragen vom Browser an den Server enthalten ist. Er enthält die URL der Anfragequelle. Wenn Sie von einer Seite zur anderen navigieren, speichert Referer die URL der ursprünglichen Seite. Der Server, auf dem die Ziel-Webseite gehostet wird, verfügt häufig über Software, die Referer analysiert und verschiedene Informationen daraus extrahiert.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

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

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
