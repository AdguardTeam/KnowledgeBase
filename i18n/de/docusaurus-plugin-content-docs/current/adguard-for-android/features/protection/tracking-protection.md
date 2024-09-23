---
title: Tracking-Schutz
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Sie können auf das Modul Tracking-Schutz zugreifen, indem Sie auf den Tab _Schutz_ (zweites Symbol links unten auf dem Bildschirm) tippen und dann _Tracking-Schutz_ auswählen.

_Tracking-Schutz_ (früher bekannt als _Privatsphäre_) verhindert, dass Websites Informationen über Sie sammeln, wie z. B. Ihre IP-Adresse, Informationen über Ihren Browser und Ihr Betriebssystem, die Bildschirmauflösung und die Seite, von der Sie kommen oder auf die Sie weitergeleitet wurden. Es kann auch Cookies blockieren, die Websites verwenden, um Ihren Browser zu identifizieren, Ihre persönlichen Einstellungen und Benutzereinstellungen zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen.

![Tracking-Schutz \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking-Schutz_ bietet drei vorkonfigurierte Datenschutzstufen (_Standard_, _Hoch_ und _Extrem_) und eine benutzerdefinierte Stufe (_Benutzerdefiniert_).

Hier sind die aktiven Funktionen der vorkonfigurierten Ebenen:

1. **Standard**

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   c. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome Informationen über seine Version und Änderungen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

2. **Hohes Niveau**

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. Diese Funktion verwendet den _AdGuard URL-Tracking-Filter_, um Tracking-Parameter wie `utm_*` und `fb_ref` aus Seiten-URLs zu entfernen

   c. _Suchanfragen verbergen_. Diese Funktion verbirgt Abfragen für Websites, die von einer Suchmaschine besucht werden

   d. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Selbstzerstörung von Drittanbieter-Cookies_. Diese Funktion begrenzt die Lebensdauer von Drittanbieter-Cookies auf 180 Minuten

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. Um nur Tracking-Cookies zu blockieren, verwenden Sie die Schutzstufe _Standard_.

   :::

   f. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

3. **Extrem** (früher bekannt als _Ultimativ_)

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. Diese Funktion verwendet den _AdGuard URL-Tracking-Filter_, um Tracking-Parameter, wie `utm_*` und `fb_ref` aus Seiten-URLs zu entfernen

   c. _Suchanfragen verbergen_. Diese Funktion verbirgt Abfragen für Websites, die von einer Suchmaschine besucht werden

   d. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Selbstzerstörung von Drittanbieter-Cookies_. Diese Funktion begrenzt die Lebensdauer von Drittanbieter-Cookies auf 180 Minuten

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. Um nur Tracking-Cookies zu blockieren, verwenden Sie die Schutzstufe _Standard_.

   :::

   f. _WebRTC blockieren_. Diese Funktion kann WebRTC blockieren: eine bekannte Schwachstelle, die Ihre echte IP-Adresse preisgeben kann, selbst wenn Sie einen Proxy oder VPN verwenden

   g. _Push-API blockieren_. Diese Funktion verhindert, dass Ihre Browser Push-Nachrichten von Servern empfangen

   h. _Ortungsdienste-API blockieren_. Diese Funktion verhindert, dass Browser auf Ihre GPS-Daten zugreifen und Ihren Standort bestimmen können

   i. _Referer vor Drittanbietern verbergen_. Diese Funktion verhindert, dass Dritte erfahren, welche Websites Sie besuchen. Sie blendet den HTTP-Header aus, der die URL der Ausgangsseite enthält, und ersetzt ihn durch einen Standard- oder benutzerdefinierten Header, den Sie festlegen können

   j. _Eigene Browserkennung verbergen_. Diese Funktion entfernt identifizierende Informationen aus dem User-Agent-Header, die normalerweise den Namen und die Version des Browsers, das Betriebssystem und die Spracheinstellungen enthalten

   k. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

Sie können die einzelnen Einstellungen unter _Tracking-Schutz_ anpassen und eine individuelle Konfiguration erstellen. Zu jeder Einstellung gibt es eine Beschreibung, die Ihnen hilft, ihre Bedeutung zu verstehen. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
