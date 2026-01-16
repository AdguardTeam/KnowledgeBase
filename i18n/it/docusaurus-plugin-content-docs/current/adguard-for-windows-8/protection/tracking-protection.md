---
title: Tracking protection
sidebar_position: 2
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

Many websites collect data about their visitors, including IP addresses, browser and OS information, screen resolution, and even the page you came from. Cookies can be used to identify your browser, remember your preferences, or recognize you when you return. Tracking protection prevents such systems from collecting your personal data. Learn more in our [article about Tracking protection in AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![General settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Bloccare tracciatori

Blocks trackers and web analytics using _AdGuard Tracking Protection filter_.

### Elimina i parametri di tracciamento dagli URL

Strips tracking parameters such as `utm_*` and `fb_ref` from pages’ URLs using _AdGuard URL Tracking filter_.

### Hide your search queries

Hides queries for websites visited from a search engine. When you get directed to a website from Google, Yahoo, or any other search engine, this option hides the search query that you used to find that website.

### Ask websites not to track you

Sends the [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit.

## Metodi di tracciamento

![Tracking methods](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Elimina i cookie di terze parti

Websites use cookies to store your preferences — for example, the language you chose, your location, or the items in your shopping cart. When you return, the browser sends these cookies back so the site can recognize you.

Third-party cookies work the same way, but they are created by domains other than the one you’re visiting. For instance, cnn.com may include a Facebook _Like_ widget that sets a cookie later read by Facebook. Advertisers often use such cookies to track which other sites you visit.

With this option, you can set a time limit (in minutes) after which all third-party cookies will be deleted. If you set the timer to 0, such cookies will be blocked completely.

![Time-to-live](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Keep in mind that this setting removes all third-party cookies, including those used for logins via social networks or other external services. This means you may need to log in again from time to time or deal with other cookie-related issues. If you only want to block tracking cookies, use [_AdGuard Tracking Protection filter_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Elimina i cookie proprietari (non consigliato)

This option deletes cookies set by the website you are currently visiting after a selected period of time (in minutes). When the timer runs out, all such cookies are removed. Set the timer to 0 to block them completely.

:::caution

Sconsigliamo di abilitare quest'opzione, poiché potrebbe interferire gravemente con il funzionamento di certi siti web.

:::

### Blocca le intestazioni ETag e If-None-Match

Removes the ETag and If-None-Match headers from requests and responses to prevent websites from using them for tracking.

When a browser addresses a page, the server assigns it an ETag — a unique identifier used to cache the page’s contents. On subsequent visits, the browser sends the same ETag back to the server. This allows the server to recognize the visitor. As long as the cached files remain, the ETag is transmitted with every request. If the page also contains embedded elements from other servers, such as images or iframes, those servers can use ETags to track your activity without your knowledge.

### Blocca l'Intestazione di Autorizzazione da terze parti

Disables cached authorization data that can be used for tracking purposes. Può interferire con la funzionalità di alcune estensioni browser e siti web.

The Authorization header value is cached by the browser and automatically sent with every request to the same domain. Since it accompanies each request, it can be used to identify and track you similarly to how cookies do.

## API del Browser

![Browser API](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### Blocca WebRTC

Blocks WebRTC, a known vulnerability that can leak your real IP address even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) is a technology that allows direct data streaming between browsers and apps. It can reveal your true IP address, even if you use a proxy or VPN. Enabling this option may disrupt certain browser applications, such as messengers, chats, cinemas, or games.

### Blocca l'API Push

The Push API allows servers to send messages to web applications regardless of the activity status of your browser. This is why you may receive notifications from websites even if your browser is hidden in the tray or not launched. Enabling this option completely blocks the Push API.

### Blocca l'API di Posizione

When this option is enabled, the browser will no longer send GPS data to websites. This prevents them from determining your location, altering search results, or tailoring content based on where you are.

### Blocca Flash

The Flash Player plugin is outdated and highly vulnerable to viruses and exploits. It can also slow down website loading. Enabling this option prevents browsers from detecting Flash components (such as plugins or ActiveXObject objects), which effectively disables Flash support.

## Monitoraggio di Windows

![Windows tracking](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Disabilita telemetria Windows

Disables sending technical data about your system and app usage.

### Disattiva ID Pubblicitario

Disables Advertising ID to block tracking of your app usage.

### Disabilita la reportistica automatica di Microsoft Defender

Blocks automatic reporting and sampling of suspected malware.

### Disabilita il servizio di instradamento dei messaggi WAP Push

Disables data collection about Windows component problems

## Varie

![Miscellaneous](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Nascondi Referente dalle terze parti

Referer is an HTTP header included in browser-to-server requests. Contiene l'URL dell'origine della richiesta. Quando navighi da una pagina all'altra, il Referente salva l'URL della pagina iniziale. Il server che ospita la pagina web di destinazione, spesso, dispone di software che analizzano il Referente, estraendo da esso varie informazioni.

Enabling the _Hide Referer from third-parties_ option prevents third-party websites from seeing this information by altering or removing the header.

You can also enter a custom value in the _Custom Referer_ field. Per utilizzare il Referente predefinito, lascia vuoto il campo.

Note that to be able to filter traffic, AdGuard applications intercept browser-to-server requests. Le richieste effettuate agli server di annunci, tracciamento e di phishing possono essere modificate prima dell'invio al server o bloccate completamente.

Same goes for the _Hide Referer from third parties_ option: To filter traffic, AdGuard intercepts HTTP(S) requests and may alter or block them before they reach the server. The change happens only after the request leaves your browser. For this reason, if you check headers inside the browser (for example with Chrome Developer Tools), you will still see the original Referer. To confirm that it has been modified, you can use external tools such as Fiddler.

### Hide your User-Agent

When you visit a website, your browser sends a header called User-Agent as part of the HTTP request. It looks like a text line that begins with “User-Agent:”. This line usually contains details such as the browser name and version, operating system, and language settings.

By enabling this option, AdGuard removes identifying information from the User-Agent so advertisers and trackers cannot use it to profile you. If you prefer, you can enter a custom value in the _Custom User-Agent_ field. To keep the default value, simply leave the field blank.

### Mask your IP address

AdGuard cannot completely hide your real IP address, but it can replace it with a different one so that websites interpret your connection as coming through a proxy. In some cases this helps to obscure your true IP.

You can enter any IP address you want to use in the corresponding field. Per utilizzare l'indirizzo IP predefinito, lascia vuoto il campo.

### Rimuovi intestazione X-Client-Data

Prevents Google Chrome from sending information about its version and modifications in requests to Google domains, including services like DoubleClick and Google Analytics.

### Proteggiti dall'IAP

L'Ispezione Approfondita dei pacchetti è un sistema di analisi profonda e filtraggio del traffico per contenuto del pacchetto, nonché l'accumulo di dati statistici. Utilizzando questa tecnologia, gli ISP possono controllare il traffico in transito e limitare i contenuti per i loro clienti.

Deep Packet Inspection (DPI) is a technology used by some ISPs to analyze and filter traffic based on packet content. It allows them to monitor connections, restrict access to certain resources, and collect statistics about users.

When this option is enabled, AdGuard modifies outgoing packet data so that it no longer matches the DPI blocking criteria. This can help you bypass restrictions and access the content you need. However, not all DPI systems can be circumvented yet — improvements are still in progress.

The _Protect from DPI_ feature is already implemented in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with the ESET antivirus. In this case, ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
