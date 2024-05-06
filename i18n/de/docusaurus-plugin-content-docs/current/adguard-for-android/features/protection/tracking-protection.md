---
title: Tracking-Schutz
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking-Schutz_ (früher bekannt als _Privatsphäre_) verhindert, dass Websites Informationen über Sie sammeln, wie z. B. Ihre IP-Adresse, Informationen über Ihren Browser und Ihr Betriebssystem, die Bildschirmauflösung und die Seite, von der Sie kommen oder auf die Sie weitergeleitet wurden. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Hier sind die aktiven Funktionen der vorkonfigurierten Ebenen:

1. **Standard**

   a. _Block trackers_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   c. _X-Client-Data-Header entfernen_. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **Hohes Niveau**

   a. _Block trackers_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Suchanfragen verbergen_. This feature hides queries for websites visited from a search engine

   d. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Selbstzerstörung von Drittanbieter-Cookies_. Diese Funktion begrenzt die Lebensdauer von Drittanbieter-Cookies auf 180 Minuten

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

3. **Extreme** (formerly known as _Ultimate_)

   a. _Tracker blockieren_. Diese Funktion verwendet den _AdGuard Tracking-Schutzfilter_, um Sie vor Online-Zählern und Webanalysetools zu schützen.

   b. _Tracking-Parameter aus URLs entfernen_. Diese Funktion verwendet den _AdGuard URL-Tracking-Filter_, um Tracking-Parameter, wie `utm_*` und `fb_ref` aus Seiten-URLs zu entfernen

   c. _Suchanfragen verbergen_. This feature hides queries for websites visited from a search engine

   d. _Websites bitten, Sie nicht zu verfolgen_. Diese Funktion sendet die Signale [Global Privacy Control] (https://globalprivacycontrol.org/) und [Do Not Track] (https://en.wikipedia.org/wiki/Do_Not_Track) an die von Ihnen besuchten Websites und bittet Webanwendungen, die Verfolgung Ihrer Aktivitäten zu deaktivieren.

   e. _Selbstzerstörung von Drittanbieter-Cookies_. Diese Funktion begrenzt die Lebensdauer von Drittanbieter-Cookies auf 180 Minuten

   :::caution

   Diese Funktion löscht alle Cookies von Drittanbietern, nachdem sie erzwungenermaßen abgelaufen sind. Dazu gehören auch Ihre Anmeldungen über soziale Netzwerke oder andere Dienste Dritter. Möglicherweise müssen Sie sich bei einigen Websites regelmäßig neu anmelden oder es treten andere Probleme im Zusammenhang mit Cookies auf. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Block WebRTC_. This feature blocks WebRTC, a known vulnerability that can leak your real IP address even if you use a proxy or VPN

   g. _Block Push API_. This feature prevents your browsers from receiving push messages from servers

   h. _Block Location API_. This feature prevents browsers from accessing your GPS data and determining your location

   i. _Hide Referer from third parties_. This feature prevents third parties from knowing which websites you visit. It hides the HTTP header that contains the URL of the initial page and replaces it with a default or custom one that you can set

   j. _Hide your User-Agent_. This feature removes identifying information from the User-Agent header, which typically includes the name and version of the browser, the operating system, and language settings

   k. _X-Client-Data-Header entfernen_. Diese Funktion verhindert, dass Google Chrome seine Versions- und Änderungsinformationen an Google-Domains (einschließlich DoubleClick und Google Analytics) sendet

You can tweak individual settings in _Tracking protection_ and come up with a custom configuration. Every setting has a description that will help you understand its role. [Learn more about what various _Tracking protection_ settings do](/general/stealth-mode) and approach them with caution, as some may interfere with the functionality of websites and browser extensions.
