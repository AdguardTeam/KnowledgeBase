---
title: Filterrichtlinie von AdGuard
sidebar_position: 6
---

Bei AdGuard folgen wir seit langem bestimmten Grundsätzen bei der Erstellung unserer Filter, die zusammen mit den Filterbeschreibungen unten als Teil unserer Filterrichtlinien aufgeführt sind.

## Gemeinsame Kriterien

Diese Kriterien gelten gleichermaßen für die Regeln aller Filter.

- Regeln für eine bestimmte Website werden nur hinzugefügt, wenn genügend Traffic vorhanden ist. Der Traffic wird anhand öffentlicher Statistiken (sofern verfügbar) oder indirekter Indikatoren wie der Anzahl der Abonnenten in sozialen Netzwerken ermittelt. Der Traffic einer Website gilt als ausreichend, wenn er 100.000 Besuche pro Monat erreicht. Wir werden erwägen, eine Regel für eine weniger beliebte Seite hinzuzufügen, aber die endgültige Entscheidung liegt bei den Filterentwickler:innen. Websites mit geringem Traffic sollten dennoch auf Analyse- und Werbenetzwerke von Drittanbietern überprüft werden
- Die Entscheidung über Content-Farmen (Websites, die große Mengen an Inhalten produzieren, die in erster Linie darauf abzielen, eine hohe Sichtbarkeit in den Suchergebnissen zu erreichen und Werbeeinnahmen zu generieren) wird von den Filterentwickler:innen in Abhängigkeit von der Qualität der Inhalte getroffen

Qualitätsanforderungen für Filterregeln:

- Die Regeln dürfen sich nicht negativ auf die Leistung der Websites auswirken
- Die Entsperrungsregeln müssen so spezifisch wie möglich sein, um unnötige Entsperrungen zu vermeiden
- JavaScript-Regeln sollten so sparsam wie möglich und nur dann eingesetzt werden, wenn das Blockieren von Werbung ohne sie nicht möglich ist

## Werbeblockierung

### Begriffe

**Werbeblocker** ist ein Software- oder Hardware-Tool zum Filtern, Ausblenden oder Blockieren von Werbung und anderen Elementen auf Webseiten. Werbeblocker wurden entwickelt, um die Benutzerfreundlichkeit zu verbessern, die Ladezeiten von Seiten zu verkürzen, den Internetverkehr zu verringern, Werbung und störende Elemente zu blockieren und den Datenschutz beim Surfen auf Websites und bei der Nutzung von Apps zu verbessern.

Ein **Filter** (oder eine **Filterliste**) ist ein Satz von Filterregeln, der dazu dient, Inhalte zu filtern und verschiedene Arten von Werbung zu blockieren. Diese Filter arbeiten normalerweise auf der Ebene des Webbrowsers, der Programme oder des DNS-Servers.

**Anti-Adblock** ist eine Technologie, die von Websites oder Apps eingesetzt wird, um das Blockieren von Werbung zu erkennen und auf verschiedene Weise darauf zu reagieren: Nachverfolgung, Wiedereinblendung der Werbung, Aufforderung zur Deaktivierung des Werbeblockers (sog. „Adblock-Walls“). Es gibt verschiedene Arten von Anti-Adblocks:

- Anti-Adblock, der den Inhalt der Website blockiert, ohne eine Alternative anzubieten: Um die Website weiter nutzen zu können, muss der Werbeblocker auf der Website deaktiviert werden
- „Anti-Adblock-Wall“ mit alternativen Optionen, wie z. B. dem Kauf eines Abonnements, um den Werbeblocker weiterhin nutzen zu können
- Informationsmeldungen, die nicht zum Handeln verpflichten: Die Nutzer:innen werden aufgefordert, den Werbeblocker zu deaktivieren, aber diese Meldungen können geschlossen werden, so dass die Nutzer:innen die Website weiterhin ohne Einschränkungen nutzen können
- Implementierung von alternativer Werbung als Reaktion auf die Nutzung von Werbeblockern: Websites führen alternative Werbung ein, wenn Werbeblocker erkannt werden
- Paywall: eine Methode zur Monetarisierung von Inhalten, bei der die Inhalte teilweise oder vollständig vor den Nutzer:innen verborgen werden, mit einer Meldung, die sie auffordert, ein Abonnement für den Zugriff zu erwerben

### Filter

AdGuard-Filter zum Blockieren von Werbung umfassen:

- AdGuard Basisfilter
- AdGuard-Filter gegen mobile Werbung
- Regionale Filter nach Sprachprinzip — Chinesisch, Niederländisch, Französisch, Deutsch, Japanisch, Russisch, Spanisch/Portugiesisch, Türkisch, und Ukrainisch

### Der Zweck dieser Filter

- **Der Basisfilter** blockiert Werbung auf englischsprachigen Websites und solchen, für die es keinen eigenen Filter gibt. Er enthält auch allgemeine Filterregeln, die für alle Websites unabhängig von der Sprache gelten
- **Filter gegen mobile Werbung** blockiert Werbung auf mobilen Versionen von Websites und in mobilen Apps. Es gibt keine Unterteilung nach Sprachen
- **Sprachspezifische Filter** folgen der gleichen Politik wie der **Basisfilter**, sind aber auf Websites in bestimmten Sprachen beschränkt

Das Ziel von Werbeblockern ist es, alle Arten von Werbung auf Websites, in Apps und auf bestimmten Geräten, die Werbung aus dem Internet laden können, zu blockieren:

- Banner — Werbeanzeigen, die als Bilder in verschiedenen Bereichen von Webseiten angezeigt werden
- Teaser — textliche oder grafische, oft animierte Anzeigen, die die Besucher:innen neugierig machen sollen (sensationelle Überschriften, aufmerksamkeitsstarke Bilder) und zum Anklicken des Banners verleiten (Clickbait)
- Textanzeigen — Werbung in Form von Text, einschließlich Links
- Modale Anzeigen — Werbung, die plötzlich über dem aktuellen Inhalt in Form von modalen Fenstern angezeigt wird
- Popunders — Werbung, die sich in einem separaten Fenster unter dem aktuellen Fenster öffnet, wenn sie irgendwo auf der Seite angeklickt wird
- Umleitungswerbung (redirect advertising) — Mechanismen, die den Nutzer:innen nach dem Anklicken automatisch auf eine andere Website umleiten
- Als Website-Inhalte getarnte Werbung, die beim Anklicken Seiten mit beworbenen Produkten oder nicht verwandten Inhalten öffnet
- Videoanzeigen — Werbevideos, die in Videoinhalte oder in separate Werbeelemente auf Websites und in Apps eingebettet sind
- Interaktive Anzeigen — Werbung, mit der die Nutzer:innen interagieren können (z. B. Spiele und Umfragen, nach deren Beendigung sich das beworbene Objekt öffnet)
- Interstitial-Anzeigen — bildschirmfüllende Werbung auf mobilen Geräten, die die Oberfläche der App oder des Webbrowsers verdeckt
- Anzeigenreste, die große Flächen einnehmen oder sich deutlich von ihrem Hintergrund abheben und die Aufmerksamkeit der Besucher:innen auf sich ziehen (außer kaum erkennbaren oder unauffälligen)
- Anti-Adblock-Werbung — alternative Werbung, die auf der Website angezeigt wird, wenn die Hauptwerbung blockiert ist
- Website-eigene Werbung, wenn sie durch allgemeine Filterregeln gesperrt wurde (siehe *Beschränkungen und Ausnahmen*)
- Anti-Adblock-Skripte, die die Nutzung der Website verhindern (siehe *Beschränkungen und Ausnahmen*)
- Werbung, die durch Malware eingeschleust wird, wenn detaillierte Informationen über die Art des Ladens oder die Schritte zur Reproduktion bereitgestellt werden
- Unerwünschtes Mining — Skripte, die ohne Zustimmung der Nutzer:innen Kryptowährungen schürfen

### Beschränkungen und Ausnahmen

- Die Website-eigene Werbung sollte nicht bewusst gesperrt werden. Sie sollte jedoch nicht entsperrt werden, wenn das Sperren auf allgemeine Filterregeln zurückzuführen ist
- Maßnahmen zum Zugriff auf Inhalte wie Paywalls werden nicht gesperrt
- In folgenden Fällen werden die Anti-Adblock-Walls blockiert:
    - Sie bestehen aggressiv auf der Deaktivierung oder Entfernung des Werbeblockers oder verhindern effektiv die Nutzung der Website
    - Sie enthalten falsche und irreführende Beschreibungen der möglichen Folgen der Verwendung von Werbeblockern
    - Sie setzen Besucher:innen dem Risiko von Malware aus — wenn nicht gesperrte Werbung aus dubiosen Quellen stammt
- Es werden keine Werbeblocker-Erkennungsmeldungen blockiert, die mindestens eines der folgenden Kriterien erfüllen:
    - Sie ermöglichen die Nutzung der Website und überlagern nicht die große Menge an Inhalten
    - Sie bieten eine Alternative zum Deaktivieren eines Werbeblockers, da diese Alternative weder die Privatsphäre noch die Sicherheit der Nutzer:innen gefährdet
    - Sie ermöglichen den Zugang zum Inhalt der Website oder bieten einen praktikablen Gegenwert, der die Privatsphäre oder Sicherheit der Nutzer:innen nicht gefährdet
    - Einige ältere Regeln können weiterhin Meldungen blockieren, die eines oder mehrere dieser Kriterien erfüllen. Wenn solche Regeln identifiziert werden, werden sie gemäß dieser Richtlinie behandelt
- Mining-Pools werden nicht blockiert, wenn sie öffentlich sind und nicht ausschließlich zu böswilligen Zwecken genutzt werden

## Tracking-Schutzfilter

### Begriffe

**Tracking** — der Prozess der Überwachung und Sammlung von Daten über Nutzer:innen und ihre Interaktionen mit Websites und Apps zu Marketingzwecken sowie zur Sammlung von Telemetriedaten über das Funktionieren von Websites oder Apps zum Zwecke der Analyse ihrer Funktionsweise. Dieser Prozess umfasst die Nachverfolgung der besuchten Seiten, der Verweildauer, der Interaktion mit Website-Elementen (z. B. Klicks, Eingaben in Formulare) und anderer Metriken. Tracking (Nachverfolgung) ermöglicht es den Betreibern von Websites und Apps, das Nutzerverhalten besser zu verstehen, die Funktionalität zu optimieren und Marketingstrategien anzupassen. Die Nachverfolgung dient auch dazu, die Leistung und die Nutzungsmuster zu überwachen und Probleme zu erkennen, damit die Entwickler die notwendigen Daten erhalten, um die Stabilität und Qualität der Website oder App zu verbessern. Auch wenn die gewonnenen Daten keinen Rückschluss auf die Identität einer Person zulassen, gelten solche Maßnahmen dennoch als Tracking.

**Tracker** — Software, die auf einer Website oder in einer App eingesetzt wird und dazu dient, Informationen über deren Funktion und die Aktionen der Besucher:innen zu sammeln. Sie verfolgt die Interaktion der Benutzer:innen mit der Website oder App und zeichnet Daten über Seitenaufrufe, Verweildauer, Klicks, Formularübertragungen und andere Ereignisse auf. Tracker dienen somit Website- und App-Betreibern als Tool zur Analyse des Nutzerverhaltens, zur Verbesserung der Nutzererfahrung und zur Optimierung von Inhalten und Werbung.

**URL-Tracking-Parameter** — ein Teil der Adresse, der von Analysesystemen zu Links hinzugefügt wird oder in einigen Links auf Webseiten enthalten ist. Wenn eine Anfrage gestellt wird, kann dieser URL-Tracking-Parameter vom Backend eines Analysesystems oder einer Website verarbeitet werden, das daraus Informationen extrahiert. So können beispielsweise URL-Tracking-Parameter Informationen über Klicks oder Werbekampagnen übermitteln. URL-Tracking-Parameter können auch von Betrugsschutz- oder Bot-Erkennungssystemen verwendet werden.

**Cookies** — Dateien, die von Websites an Geräte gesendet und dort gespeichert werden. Diese Dateien enthalten verschiedene Informationen, die sowohl für das Funktionieren der Website auf dem Gerät erforderlich sind als auch für Analysezwecke verwendet werden: eindeutige Kennungen zur Verfolgung der Besucheraktivitäten auf der Website, Werbeparameter usw.

### Filter

Die AdGuard-Filter zum Schutz vor Tracking enthalten:

- AdGuard Tracking-Schutzfilter
- AdGuard URL-Tracking-Filter

### Der Zweck dieser Filter

**Der Tracking-Schutzfilter** wurde entwickelt, um Tracker zu blockieren, die persönliche Daten der Nutzer:innen sammeln, und um die Privatsphäre der Nutzer:innen zu verbessern.

Was genau wird durch diesen Filter blockiert?

- Skripte für Analysesysteme
- Eigene Tracking-Skripte von Websites und Apps
- Maskierte CNAME-Tracker
- Tracking-Cookies
- Zählpixel
- Tracking-APIs von Browsern
- Datenschutz-Sandbox-Funktionalität in Google Chrome und seine Ableger, die für das Tracking verwendet werden (Google Topics API, Protected Audience API)

Der **URL-Tracking-Filter** wurde entwickelt, um Tracking-Parameter aus Webadressen zu entfernen

### Beschränkungen und Ausnahmen

Tracking-Schutzfilter sollten einen Tracker nicht blockieren, wenn dadurch das ordnungsgemäße Funktionieren der Website beeinträchtigt würde:

- Anti-Bots und Schutz vor Betrug, wenn dies die Nutzung der Website beeinträchtigt. Zum Beispiel verursacht das Sperren mit PerimeterX oder hCaptcha Probleme, wenn die Website versucht, den Besucher mit einem Captcha zu verifizieren
- Fehlerverfolgungssysteme wie Sentry oder Bugsnag werden nicht blockiert

## Belästigungsfilter

Belästigungsfilter zielen darauf ab, die Benutzerfreundlichkeit von Websites zu verbessern, indem sie Elemente auf Seiten blockieren, bei denen es sich nicht um Werbung handelt, die aber von der Interaktion mit der Website oder dem Konsum von Inhalten ablenken und diese stören, z. B. verschiedene modale Fenster und interaktive Formulare, Cookie-Zustimmungsbenachrichtigungen und -Anfragen, Banner für mobile Apps und verschiedene Widgets.

### Begriffe

**Cookie-Hinweis** — ein Formular, das die Arten und Verwendung von Cookies auf einer Website beschreibt. Ein Cookie-Hinweis wird beim Besuch der Website angezeigt und informiert die Nutzer:innen darüber, dass die Website Cookies oder andere Tracking-Technologien verwendet, um personenbezogene Daten zu sammeln und zu nutzen, und erklärt, warum und mit wem die gesammelten Daten geteilt werden.

**CMP (Consent Management Platform)** — Software, die Websites bei der Einhaltung von Cookie-Nutzungsregeln unterstützt. CMPs schränken die Verwendung von Cookies ein, bis die Zustimmung der Nutzer:innen vorliegt, und bieten den Nutzer:innen die Möglichkeit, bestimmte Cookies zu akzeptieren und Datenschutzeinstellungen zu verwalten.

**Widget** — ein Element der Benutzeroberfläche, das die Funktionalität einer Website erweitert. Web-Widgets werden in Webseiten integriert und können interaktive Elemente wie Schaltflächen, Formulare oder Banner enthalten. Sie können den Nutzer:innen den Zugang zu bestimmten Diensten oder Inhalten ermöglichen, ohne dass eine Navigation zu anderen Seiten erforderlich ist.

**Pop-up** — ein Fenster, das über der aktuellen Webseite angezeigt wird. Es dient dazu, zusätzliche Informationen, Werbung, Benachrichtigungen oder Dateneingabeformulare anzuzeigen. Pop-ups verdecken in der Regel den Blick auf den Hauptinhalt der Seite und erfordern eine Aktion, um sie zu schließen, was lästig sein kann.

### Filter

Zur besseren Anpassung sind die Belästigungsfilter nach ihrem Zweck unterteilt:

- AdGuard Cookie-Hinweise-Filter
- AdGuard Pop-up-Filter
- AdGuard-Filter gegen Mobile-App-Banner
- AdGuard Widgets-Filter
- AdGuard-Filter gegen andere Belästigungen
- AdGuard Belästigungsfilter — ein kombinierter Filter, der alle 5 speziellen Belästigungsfilter enthält

### Der Zweck dieser Filter

#### AdGuard Cookie-Hinweise-Filter

Dieser Filter wurde entwickelt, um sowohl Cookie-Hinweise als auch Anfragen von Cookie-Verwaltungsplattformen (CMPs) zu sperren. Für Cookie-Hinweise und CMPs können verschiedene Methoden angewandt werden. In den meisten Fällen reicht es aus, die entsprechenden Skripte auszublenden oder zu sperren. Wenn jedoch die Funktionalität der Website und die Anzeige von Inhalten Dritter die Zustimmung zu Cookies erfordern, werden die folgenden Methoden angewandt:

- Scriptlets werden verwendet, um die Zustimmungsanfrage zu umgehen (praktisch nicht anwendbar auf Websites mit Beschränkungen für das Laden von Inhalten Dritter, bis eine Entscheidung getroffen wurde)
- Setzen eines Cookies oder Schlüssels im lokalen Speicher der Website, so dass das Skript davon ausgeht, dass eine Wahl getroffen ist
- Simulation von Benutzeraktionen mit einer Regel, die eine bestimmte Schaltfläche anklickt und deren Ausführung 10 Sekunden nach dem Laden unterbricht. Es bestehen zwei Möglichkeiten:
    - Ablehnen (mit Ausnahme von funktionalen Cookies — je nach CMP-System) — die bevorzugte Option, da das Risiko, zusätzliche Analysetools zu laden, geringer ist
    - Akzeptieren — diese Option wird als letztes Mittel verwendet, wenn andere Methoden fehlschlagen. In diesem Fall wird die Seite zusätzlich auf die Verwendung von Analysetools überprüft, die dann durch den **AdGuard Tracking-Schutzfilter** gesperrt werden

**Beschränkungen und Ausnahmen**

In einigen Fällen wird die Entscheidung, Regeln hinzuzufügen, von den Filterentwicklern selbst getroffen. Meistens dann, wenn die bei der Simulation von Aktionen getroffene Wahl die Funktionalität der Website beeinträchtigen würde (z. B. könnte die Verlaufsfunktion nicht funktionieren oder die Benutzereinstellungen würden auf einer solchen Website nicht gespeichert).

#### AdGuard Pop-up-Filter

Dies ist ein Filter, der verschiedene Pop-ups auf Seiten blockiert, die für die normale Nutzung der Website nicht notwendig sind. Dazu gehören unter anderem folgende Pop-ups:

- Anfragen für die Genehmigung zum Empfang von Push-Benachrichtigungen
- Pop-ups und Formulare zum Abonnieren von Nachrichten, Werbeaktionen und verschiedenen Ereignissen, einschließlich der Kanäle von Drittanbietern, über die sie empfangen werden können (z. B. Google News, Telegram)
- Pop-ups, die die Privatsphäre verletzen (nach Ermessen der Filterentwickler:innen) und die Nutzer:innen auffordern, den Werbeblocker zu deaktivieren
- Andere Arten von Pop-ups, die den Benutzer:innen stören können (im Ermessen der Filterentwickler:innen)

**Beschränkungen und Ausnahmen**

- Push-Benachrichtigungen werden nur auf Websites gesperrt, auf denen sie nicht für praktische Zwecke verwendet werden. Beispielsweise werden solche Benachrichtigungen in E-Mail-Webclients oder Tools, die zu Arbeitszwecken verwendet werden, nicht gesperrt
- Einige Pop-ups, die nicht in die oben beschriebenen Kategorien fallen, aber dennoch die Benutzerfreundlichkeit beeinträchtigen, können ebenfalls blockiert werden. Zum Beispiel Aufforderungen zur Registrierung auf einer Website oder Pop-ups, in denen die Funktionen der Website vorgestellt werden. Die Entscheidung wird von den Filterentwickler:innen getroffen
- Maßnahmen für den Zugang zu Inhalten, bei denen der Nutzer für den Zugang zum Inhalt bezahlen muss, dürfen nicht umgangen werden

#### AdGuard-Filter gegen Mobile-App-Banner

Dieser Filter blockiert Banner und Pop-ups, die Besucher:innen zur Installation mobiler Apps auffordern.

**Beschränkungen und Ausnahmen**

Banner in Website-Headern oder Website-Menüs werden nicht blockiert, wenn sie nicht animiert sind und keinen wesentlichen Teil der Nutzfläche einnehmen. Die Entscheidung, ob ein Banner in der Fußzeile blockiert werden soll, wird von den Filterentwickler:innen von Fall zu Fall getroffen. In der Regel heben sich Banner in der Fußzeile nicht von anderen Elementen ab und sind nicht störend.

#### AdGuard Widgets-Filter

Dies ist ein Filter, der verschiedene Widgets blockiert, die für das Funktionieren der Website oder die Interaktion mit ihr nicht unbedingt erforderlich sind:

- Widgets für Inhaltsempfehlungen — verwandte Artikel, ähnliche Websites, verschiedene personalisierte Empfehlungen
- Chat-Widgets, die nicht in den Inhalt integriert sind und nicht der Hauptinhalt der Seite sind
- Marketing-Widgets:
    - Chats für die Kommunikation mit Assistenten oder Bots
    - Widgets mit Produktempfehlungen, die den Nutzer:innen angezeigt werden
    - Formulare für Rückrufe
- Andere Widgets, die keiner eigenen Kategorie zugeordnet sind, aber die Seite optisch unübersichtlich machen können: Wetter-Widgets, Wechselkurse, Stellenanzeigen und Spenden

**Beschränkungen und Ausnahmen**

Was wird nicht blockiert?

- Widgets, die in engem Zusammenhang mit dem Inhalt der Seite stehen, z. B. Kommentarbereiche, Live-Chat-Streams, mit Ausnahme von unmoderierten Chats auf Websites mit inoffiziellen Streams, die oft mit Spam und ähnlichen Inhalten gefüllt sind
- Widgets für Eigenwerbung und standortspezifische Werbemaßnahmen
- Spenden-Widgets, außer in den Fällen, in denen sie einen großen Teil der Seite einnehmen und sich deutlich vom Inhalt abheben. Die Entscheidung über die Blockierung wird von den Filterentwickler:innen getroffen

#### AdGuard-Filter gegen andere Belästigungen

Dieser Filter wurde entwickelt, um störende Elemente zu blockieren, die in anderen Filtern nicht enthalten sind, und um verschiedene Optimierungen vorzunehmen. Er wird für folgende Zwecke benötigt:

- Sperren von Eigenwerbung auf Websites (jede Art von Werbung für Waren oder Dienstleistungen, die dem Eigentümer der Website gehören, ohne dass er eine kommerzielle Vergütung von einem Dritten erhält), wenn sie als störendes Element empfunden wird
- Sperren von störenden Elementen, die nicht in anderen Kategorien enthalten sind
- Entsperren von Aktionen auf der Seite, wie z. B. Öffnen des Kontextmenüs, Auswählen und Kopieren von Text, wenn diese gesperrt sind
- Beschleunigung von Countdown-Timern beim Laden von Dateien von Websites, wenn die Prüfung nicht vom Server gesteuert wird oder nicht behindert wird
- Anwendung verschiedener Regeln, die für Filterentwickler:innen nützlich sein können, zum Beispiel das Sperren der Web-Debugger-Erkennung

**Beschränkungen und Ausnahmen**

Dieser Filter kann Regeln enthalten, die nicht für alle Benutzer:innen geeignet sind. Manchmal ist es empfehlenswert, diesen Filter zu deaktivieren. Die Entscheidung, diesem Filter Regeln hinzuzufügen, wird von den Filterentwickler:innen für jede einzelne Regel getroffen.

## Social-Media-Filter

### Filter

AdGuard Social Media-Filter umfassen:

- AdGuard Social-Media-Filter

### Der Zweck dieser Filter

Dieser Filter blockiert Widgets für soziale Medien auf Websites von Drittanbietern, z. B. „Gefällt mir“- und „Teilen“-Schaltflächen, Gruppen-Widgets, Empfehlungen und ähnliche Widgets.

### Beschränkungen und Ausnahmen

Widgets, die zur Funktionalität oder zum Inhalt der Website gehören, wie z. B. Kommentare, eingebettete Beiträge, Umfragen sowie Widgets für die Anmeldung bei sozialen Medien, werden nicht gesperrt. Auch Links zu den Social-Media-Seiten der Website werden nicht gesperrt.

## Sonstiges

Diese Gruppe enthält Filter, die zum Blockieren von Werbung nicht unbedingt erforderlich sind.

### Begriffe

**Kontextbezogene Werbung** ist eine Art der Internetwerbung, bei der die Werbung auf der Grundlage des Inhalts, der ausgewählten Zielgruppe, des Standorts, der Zeit oder eines anderen Kontexts von Internetseiten angezeigt wird.

**Suchwerbung** ist eine Unterklasse der kontextbezogenen Werbung, bei der Anzeigen auf Grundlage der Suchanfrage der Besucher:innen angezeigt werden.

**Eigenwerbung von Websites** bezieht sich auf die Banner einer Website, die für Waren und Dienstleistungen werben, die dem Eigentümer der Website gehören und für die er keine Vergütung von Dritten erhält.

Weitere Einzelheiten über diese Arten von Werbung finden Sie im [Artikel über Suchanzeigen](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filter

- Filter zum Anzeigen von nützlicher Werbung
- AdGuard DNS-Filter
- AdGuard Experimenteller Filter

### Der Zweck dieser Filter

#### Filter zum Anzeigen von nützlicher Werbung

Dieser Filter entsperrt:

- Kontextbezogene Werbung in den Suchergebnissen bei der Nutzung von Suchmaschinen (wie Google, Bing, Yandex, DuckDuckGo)
- Eigenwerbung von Websites

**Beschränkungen und Ausnahmen**

- Suchwerbung wird nur dann freigegeben, wenn sie der Suchanfrage entspricht, da sie kontextbezogen ist. Andernfalls bleibt die Werbung gesperrt
- Eigenwerbung wird nur dann freigeschaltet, wenn sie mit den Filterrichtlinien übereinstimmt. Eine Anfrage zum Entsperren kann von Filterentwickler:innen abgelehnt werden
- Andere Werbung wird nicht entsperrt

#### AdGuard DNS-Filter

Dieser Filter wird in AdGuard DNS verwendet und ist kein Ersatz für die Werbeblocker-Filter.

**Beschränkungen und Ausnahmen**

Identisch mit Filtern, die Werbung blockieren.

#### AdGuard Experimenteller Filter

Dieser Filter ist für das Testen und Debuggen von Regeln gedacht, die möglicherweise die Funktionalität von Websites beeinträchtigen können. Regeln werden von Filterentwickler:innen hinzugefügt, wenn eine bestimmte Lösung getestet werden muss. Da der Filter für Debugging-Zwecke konzipiert ist, sind seine Einschränkungen minimal.

**Beschränkungen und Ausnahmen**

- Regeln sollten die Funktionalität von Websites nicht explizit beeinträchtigen
- Regeln sollten keine Werbung freigeben oder anderweitig gegen die Richtlinie verstoßen
