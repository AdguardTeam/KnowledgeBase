---
title: Tracking protection
sidebar_position: 2
---

Many websites collect data about their visitors, including IP addresses, browser and OS information, screen resolution, and even the page you came from. Cookies can be used to identify your browser, remember your preferences, or recognize you when you return. Tracking protection prevents such systems from collecting your personal data. Learn more in our [article about Tracking protection in AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

If you don’t want to spend time adjusting filters manually, you can simply pick one of the ready-made protection levels:

- _Standard_: enabled by default and provides reliable protection for everyday browsing.
- _High_: removes tracking parameters from page URLs and blocks third-party cookies. You may have to re-log in to some websites or face other cookie-related issues.
- _Extreme_: limits cookie lifetime of third-party cookies and blocks certain browser APIs. Some websites may not work correctly.

For maximum flexibility, select _Custom_ and adjust everything manually. The settings there are divided into five categories:

- [General settings](#general-settings)

- [Tracking methods](#tracking-methods)

- [Browser API](#browser-api)

- [Windows tracking](#windows-tracking)

- [Miscellaneous](#miscellaneous)

## General settings

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Block trackers

Blocks trackers and web analytics using _AdGuard Tracking Protection filter_.

### Remove tracking parameters from URLs

Strips tracking parameters such as `utm_*` and `fb_ref` from pages’ URLs using _AdGuard URL Tracking filter_.

### Hide search queries

Hides queries for websites visited from a search engine. When you get directed to a website from Google, Yahoo, or any other search engine, this option hides the search query that you used to find that website.

### Ask websites not to track me

Sends the [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit.

### Andre fortrolighedsfiltre

Anvender en række yderligere filtre til beskyttelse af fortrolighed. Tallet ud for _Aktiverede i filtre_ angiver, hvor mange filtre, som p.t. er aktive.

## Tracking methods

![Sporingsmetoder \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Delete third-party cookies

Websites use cookies to store your preferences — for example, the language you chose, your location, or the items in your shopping cart. When you return, the browser sends these cookies back so the site can recognize you.

Third-party cookies work the same way, but they are created by domains other than the one you’re visiting. For instance, cnn.com may include a Facebook _Like_ widget that sets a cookie later read by Facebook. Advertisers often use such cookies to track which other sites you visit.

With this option, you can set a time limit (in minutes) after which all third-party cookies will be deleted. If you set the timer to 0, such cookies will be blocked completely.

![Levetid (Time-to-live) \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Keep in mind that this setting removes all third-party cookies, including those used for logins via social networks or other external services. This means you may need to log in again from time to time or deal with other cookie-related issues. If you only want to block tracking cookies, use [_AdGuard Tracking Protection filter_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Delete first-party cookies (not recommended)

This option deletes cookies set by the website you are currently visiting after a selected period of time (in minutes). When the timer runs out, all such cookies are removed. Set the timer to 0 to block them completely.

:::caution

We do not recommend enabling this option as it may severely interfere with the work of certain websites.

:::

### Block ETag and If-None-Match headers

Removes the ETag and If-None-Match headers from requests and responses to prevent websites from using them for tracking.

When a browser addresses a page, the server assigns it an ETag — a unique identifier used to cache the page’s contents. On subsequent visits, the browser sends the same ETag back to the server. This allows the server to recognize the visitor. As long as the cached files remain, the ETag is transmitted with every request. If the page also contains embedded elements from other servers, such as images or iframes, those servers can use ETags to track your activity without your knowledge.

### Block third-party Authorization header

Disables cached authorization data that can be used for tracking purposes. May interfere with the functionality of some browser extensions and websites.

The Authorization header value is cached by the browser and automatically sent with every request to the same domain. Since it accompanies each request, it can be used to identify and track you similarly to how cookies do.

## Browser API

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Forhindr IP-adresselækager via WebRTC

Får WebRTC til at anvende en striksere IP-adressepolitik for at forhindre afsløring af den reelle IP-adresse, selv ved brug af proxy eller VPN.

WebRTC (Web Real-Time Communication) is a technology that allows direct data streaming between browsers and apps. Som standard kan den afsløre den reelle IP-adresse, selv når en proxy eller VPN er aktiveret. Denne indstilling håndhæver en strengere IP-adressepolitik i stedet for helt at blokere WebRTC, så webbrowserapplikationer, såsom beskedtjenester, chats og spil, er mindre tilbøjelige til at blive påvirket.

### Block Push API

The Push API allows servers to send messages to web applications regardless of the activity status of your browser. This is why you may receive notifications from websites even if your browser is hidden in the tray or not launched. Enabling this option completely blocks the Push API.

### Block Location API

When this option is enabled, the browser will no longer send GPS data to websites. This prevents them from determining your location, altering search results, or tailoring content based on where you are.

## Windows tracking

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Disable Windows telemetry

Disables sending technical data about your system and app usage.

### Deaktivere Windows Recall

Deaktiverer funktionen Windows Recall, der periodisk tager øjebliksbilleder af skærme og gemmer dem lokalt. Dette forhindrer, at sensitive oplysninger, som er synlige på skærmen, affotograferes og gemmes.

### Turn off Advertising ID

Disables Advertising ID to block tracking of your app usage.

### Disable automatic reporting by Microsoft Defender

Blocks automatic reporting and sampling of suspected malware.

### Disable WAP Push message routing service

Disables data collection about Windows component problems.

## Diverse

![Diverse \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Hide Referer from third parties

Referer is an HTTP header included in browser-to-server requests. It contains the URL of the request source. When you navigate from one page to another, Referer saves the URL of the initial page. The server that hosts the destination web page often has software that parses Referer and extracts various pieces of information from it.

Aktivering af indstillingen _Skjul Referer fra tredjeparter_ forhindrer tredjepartswebsteder i at se denne information ved at ændre eller fjerne headeren.

You can also enter a custom value in the _Custom Referer_ field. To use default Referer, leave the field blank.

Note that to be able to filter traffic, AdGuard applications intercept browser-to-server requests. Requests to ad, tracking, and phishing servers may be altered before sending them to the server or blocked completely.

Same goes for the _Hide Referer from third parties_ option: To filter traffic, AdGuard intercepts HTTP(S) requests and may alter or block them before they reach the server. The change happens only after the request leaves your browser. For this reason, if you check headers inside the browser (for example with Chrome Developer Tools), you will still see the original Referer. To confirm that it has been modified, you can use external tools such as Fiddler.

### Skjul Brugeragent (User-Agent)

When you visit a website, your browser sends a header called User-Agent as part of the HTTP request. It looks like a text line that begins with “User-Agent:”. This line usually contains details such as the browser name and version, operating system, and language settings.

By enabling this option, AdGuard removes identifying information from the User-Agent so advertisers and trackers cannot use it to profile you. If you prefer, you can enter a custom value in the _Custom User-Agent_ field. To keep the default value, simply leave the field blank.

### Maskér IP-adresse

AdGuard cannot completely hide your real IP address, but it can replace it with a different one so that websites interpret your connection as coming through a proxy. In some cases this helps to obscure your true IP.

You can enter any IP address you want to use in the corresponding field. To use the default IP address, leave the field blank.

### Remove X-Client-Data header

Prevents Google Chrome from sending information about its version and modifications in requests to Google domains, including services like DoubleClick and Google Analytics.

### Protect against DPI

![Beskyt mod DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) er en teknologi brugt af visse ISP'er til at analysere og filtrere trafik baseret på pakkeindhold. Når denne indstilling er aktiveret, ændrer AdGuard udgående pakkedata for at gøre det sværere for DPI-systemer at identificere og analysere trafikken, hvilket bidrager til at beskytte forbindelsesfortroligheden.

Ved klik på _Beskyt mod DPI_ åbnes en separat skærm med tre grupper af indstillinger:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Opdel TCP-pakke på fast position_ — opdeler ClientHello TCP-pakken på en bestemt byteposition.
- _Opdel TLS-posten på en fast position_ — opdeler TLS-posten indeholdende ClientHello på en angivet byteposition.
- _Opdel TLS før SNI_ — opdeler ClientHello før feltet Server Name Indication.
- _Opdel TLS efter SNI_ — opdeler ClientHello efter feltet Server Name Indication.
- _Opdel TLS midt i SNI_ — opdeler ClientHello midt i feltet Server Name Indication.
- _Opdel TLS tilfældigt inden for SNI_ — opdeler ClientHello på en tilfældig position i feltet Server Name Indication.

Ved brug af en strategi med fast position, indstil _Byteposition for opdeling_ (1-1500) for at angive, hvor opdelingen skal ske.

**Opdeling af HTTP-forespørgsler** — opdeler HTTP-forespørgsler i flere TCP-pakker for at omgå DPI-systemer, som er afhængige af at inspicere komplette HTTP-forespørgsler.

**HTTP-mellemrumsmanipulation** — manipulerer blanktegn i HTTP-forespørgsler for at forvirre DPI-systemer, som fortolker HTTP-headere, hvilket besværliggør identifikation og blokering af specifik trafik.

:::caution

Denne funktion kan forhindre adgang til visse ukrypterede websteder. Er denne funktion aktiveret i AdGuard til Windows, kan den også forstyrre ESETs antivirusprogram – ESET vil ikke kunne filtrere trafik, hvilket vil gøre visse ondsindede eller blokerede websteder tilgængelige.

:::
