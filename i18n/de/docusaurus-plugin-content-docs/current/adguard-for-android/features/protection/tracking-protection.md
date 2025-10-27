---
title: Tracking-Schutz
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Es kann auch Cookies blockieren, die Websites verwenden, um Ihren Browser zu identifizieren, Ihre persönlichen Einstellungen und Benutzereinstellungen zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Hier sind die aktiven Funktionen der vorkonfigurierten Ebenen:

1. **Standard**

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Ask websites not to track me_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   c. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome Informationen über seine Version und Änderungen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

2. **Hohes Niveau**

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. Diese Funktion verwendet den _AdGuard URL-Tracking-Filter_, um Tracking-Parameter wie `utm_*` und `fb_ref` aus Seiten-URLs zu entfernen

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. Um nur Tracking-Cookies zu blockieren, verwenden Sie die Schutzstufe _Standard_.

   :::

   f. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

3. **Extrem** (früher bekannt als _Ultimativ_)

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. Diese Funktion verwendet den _AdGuard URL-Tracking-Filter_, um Tracking-Parameter, wie `utm_*` und `fb_ref` aus Seiten-URLs zu entfernen

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. Um nur Tracking-Cookies zu blockieren, verwenden Sie die Schutzstufe _Standard_.

   :::

   f. _WebRTC blockieren_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Push-API blockieren_. This feature blocks push notifications from websites

   h. _Ortungsdienste-API blockieren_. Diese Funktion verhindert, dass Browser auf Ihre GPS-Daten zugreifen und Ihren Standort bestimmen können

   i. _Referer vor Drittanbietern verbergen_. Diese Funktion verhindert, dass Dritte erfahren, welche Websites Sie besuchen. Sie blendet den HTTP-Header aus, der die URL der Ausgangsseite enthält, und ersetzt ihn durch einen Standard- oder benutzerdefinierten Header, den Sie festlegen können

   j. _Hide User-Agent_. Diese Funktion entfernt identifizierende Informationen aus dem User-Agent-Header, die normalerweise den Namen und die Version des Browsers, das Betriebssystem und die Spracheinstellungen enthalten

   k. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
