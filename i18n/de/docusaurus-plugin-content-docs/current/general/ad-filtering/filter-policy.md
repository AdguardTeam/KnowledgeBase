---
title: Filterrichtlinie von AdGuard
sidebar_position: 6
---

:::note Haftungsausschluss

Bitte lesen Sie diese Filterrichtlinie sorgfältig durch, bevor Sie einen Filter aktivieren.

Das Verwenden von AdGuard Werbeblocker, AdGuard DNS und deren Filtern kann die Funktionsweise von Websites und Diensten von Drittanbietern beeinträchtigen. Sie sind dafür verantwortlich, die Richtlinien und Bedingungen aller von Ihnen genutzten Websites oder Dienste zu überprüfen und zu befolgen.

Bevor Sie Filter von Drittanbietern aktivieren, erklären Sie sich damit einverstanden, deren geltende Bedingungen zu überprüfen und eine fundierte Entscheidung über deren Verwendung zu treffen. AdGuard ist nicht dafür verantwortlich, wie Filter von Drittanbietern funktionieren oder was deren Bedingungen enthalten, und das Vorhandensein dieser Filter in AdGuard-Produkten stellt keine Empfehlung zu deren Verwendung dar.

:::

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
- Köderelemente, die von mehreren bekannten Adblock-Erkennungsskripten verwendet werden, um das Vorhandensein eines Werbeblockers für verschiedene Ziele zu erkennen, einschließlich der Änderung der Art und Weise, wie Werbung angezeigt wird, Fingerprinting usw.
- Website-eigene Werbung, wenn sie durch allgemeine Filterregeln gesperrt wurde (siehe *Beschränkungen und Ausnahmen*)
- Anti-Adblock-Skripte, die die Nutzung der Website verhindern (siehe *Beschränkungen und Ausnahmen*)
- Werbung, die durch Malware eingeschleust wird, wenn detaillierte Informationen über die Art des Ladens oder die Schritte zur Reproduktion bereitgestellt werden
- Unerwünschtes Mining — Skripte, die ohne Zustimmung der Nutzer:innen Kryptowährungen schürfen

### Beschränkungen und Ausnahmen

- Die Website-eigene Werbung sollte nicht bewusst gesperrt werden. Sie sollte jedoch nicht entsperrt werden, wenn das Sperren auf allgemeine Filterregeln zurückzuführen ist
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- In folgenden Fällen werden die Anti-Adblock-Walls blockiert:
    - Sie bestehen aggressiv auf der Deaktivierung oder Entfernung des Werbeblockers oder verhindern effektiv die Nutzung der Website
    - Sie enthalten falsche und irreführende Beschreibungen der möglichen Folgen der Verwendung von Werbeblockern
    - Sie setzen Besucher:innen dem Risiko von Malware aus — wenn nicht gesperrte Werbung aus dubiosen Quellen stammt
    - They violate or negatively impact user privacy
- Es werden keine Werbeblocker-Erkennungsmeldungen blockiert, die mindestens eines der folgenden Kriterien erfüllen:
    - Sie ermöglichen die Nutzung der Website und überlagern nicht die große Menge an Inhalten
    - Sie bieten eine Alternative zum Deaktivieren eines Werbeblockers, da diese Alternative weder die Privatsphäre noch die Sicherheit der Nutzer:innen gefährdet
    - Sie ermöglichen den Zugang zum Inhalt der Website
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
- Erkennung des Werbeblockers zu Trackingzwecken
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

Dieser Filter wurde entwickelt, um sowohl Cookie-Hinweise als auch Anfragen von Cookie-Verwaltungsplattformen (CMPs) zu sperren. Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Beschränkungen und Ausnahmen**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Pop-up-Filter

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Beschränkungen und Ausnahmen**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard-Filter gegen Mobile-App-Banner

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Beschränkungen und Ausnahmen**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Widgets-Filter

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing-Widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Beschränkungen und Ausnahmen**

Was wird nicht blockiert?

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard-Filter gegen andere Belästigungen

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Beschränkungen und Ausnahmen**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Social-Media-Filter

### Filter

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Der Zweck dieser Filter

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Beschränkungen und Ausnahmen

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Sonstiges

This group contains filters that are not essential for blocking advertisements.

### Begriffe

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filter

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### Der Zweck dieser Filter

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Beschränkungen und Ausnahmen**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Beschränkungen und Ausnahmen**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Beschränkungen und Ausnahmen**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
