---
title: Tracking protection (formerly Stealth Mode)
sidebar_position: 4
---

Many websites gather information about their visitors, including their IP address, installed browser and operating system, screen resolution, and even the page from which they were redirected. Some web pages use cookies to mark your browser and save your settings and preferences, or to “recognize” you upon your next visit. **Tracking protection** safeguards your personal information from such data- and statistics-gathering systems.

You can adjust the tracking protection settings as needed. For example, you can prevent websites from receiving search engine queries that led you to them. You can automatically delete third-party and first-party cookies. You can also turn off browser geolocation sharing, which can be used to track your location. You can hide your true IP address or replace it with an arbitrary one.

Below, we will list and describe the main features that you can control in the **Tracking protection** settings. The features are organized into the following sections: **General**, **Tracking methods**, **Browser API**,  **Windows tracking**, and **Miscellaneous**.

:::note

Some features are only available for certain products because of limitations from the operating system or browser.

:::

## Generali {#general}

### Block trackers {#blocktrackers}

This feature blocks trackers and web analytics using the AdGuard Tracking Protection filter.

### Remove tracking parameters from URLs {#removetracking}

If you enable this feature, AdGuard will use its AdGuard URL Tracking filter to remove tracking parameters like `utm_*` and `fb_ref` from page URLs.

### Hide search queries {#searchqueries}

This feature hides your search queries from websites that you visit via search engine results. For example, when you open a website through a search engine like Google or Yahoo, this feature hides the search query you used to find that website.

### Ask websites not to track me {#donottrack}

Sends the [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit.

### Other privacy filters {#otherprivacyfilters}

This feature displays other privacy filters enabled in **Filters**.

:::note

Available in AdGuard for Android and AdGuard for Windows.

:::

## Tracking methods {#tracking-methods}

### Delete third-party cookies {#3p-cookie}

This feature prevents advertisers from tracking your behavior across multiple pages by limiting the lifetime of third-party cookies.

Websites use cookies to store your information and preferences, such as the language you selected, your location, or the list of items in your shopping cart. Imposta il timer a 0 per bloccarli completamente.

Third-party cookies are implemented by a website other than the one you are currently browsing. For example, cnn.com may have a Facebook “Like” widget on its homepage. This widget installs a cookie that Facebook can read later. Some advertisers use such cookies to track what other websites you visit that have their ads.

Set a time period (in minutes) after which all third-party cookies will be deleted. To block these cookies, set their lifetime to 0.

:::attenzione

This setting deletes all third-party cookies, including the information of your logins through social networks or other third-party services. You may have to periodically re-log in to some websites and face other cookie-related issues. To block only tracking cookies, use [*AdGuard Tracking Protection filter*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Available in AdGuard for Android, AdGuard for Windows, AdGuard for Mac, and AdGuard Browser Extension (MV2-based browsers).

:::

### Delete first-party cookies (not recommended) {#1p-cookie}

This feature prevents websites from remembering your details, such as your login credentials and language preferences, by limiting the lifetime of first-party cookies.

Set a time period (in minutes) after which all cookies will be deleted. To block these cookies, set their lifetime to 0.

:::attenzione

We do not recommend enabling this option as it may severely interfere with the work of certain websites. If you block these cookies, some websites may break or stop working.

:::

:::note

Available in AdGuard for Android, AdGuard for Windows, AdGuard for Mac, and AdGuard Browser Extension (MV2-based browsers).

:::

### Block ETag and If-None-Match headers {#3p-cache}

This feature removes the ETag and If-None-Match headers from requests and responses to prevent tracking by them.

When a browser addresses a page, the server assigns an ETag to that page. This ETag is used by the browser to cache the page's contents. Upon subsequent requests, the browser sends the ETag to the corresponding server, thus letting the server learn the visitor’s identity. As long as the site's files are cached, the ETag is sent every time your browser addresses this site. If the site has embedded content from another server (such as an image or iframe), that server can track your activities without your knowledge.

:::note

Available in AdGuard for Android, AdGuard for Windows, and AdGuard for Mac.

:::

### Block third-party Authorization header {#3p-auth}

This feature disables cached authorization data that can be used for tracking. May interfere with the functionality of some browser extensions and websites.

The “Authorization” header value is cached by the browser and sent alongside every request to that domain. This means it can be used for tracking purposes, just like cookies.

:::note

Available in AdGuard for Android, AdGuard for Windows, and AdGuard for Mac.

:::

## Browser API {#browser-api}

:::note

Only the **Block WebRTC** feature is available for AdGuard Browser Extension. You can find it in the **Miscellaneous** section.

:::

### Block WebRTC {#webrtc}

This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) is a technology that enables direct streaming of data between browsers and apps. However, it can let others know your true IP address, even when using a proxy or VPN.

:::attenzione

Enabling this option can disrupt the work of certain browser applications, such as messengers, streaming platforms, chats, or games.

:::

### Block Push API {#push}

This feature blocks push notifications from websites.

The Push API enables servers to send messages to web applications regardless of the activity status of your browser. This means that you can see notifications from various websites even when your browser is minimized or closed. Enable this option to block the browser’s Push API completely.

### Block Location API {#location}

This feature prevents websites from detecting your location.

Enabling this option prevents your browser from sending GPS data that could be used to determine your location, modify your search results, or otherwise influence your web experience.

### Block Flash {#flash}

This feature increases protection and speeds up website loading by blocking Flash Player support in browsers.

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. Turning this setting on makes AdGuard block browsers' ability to detect components (such as plugins and ActiveXObject objects) that allow Flash to display content. This effectively means that browsers are unable to support Flash.

### Block Java {#java}

This feature disables Java plugins on websites and web services because the API has serious security issues. Does not disable JavaScript.

Some websites and web services still use the old technology to support Java plugins. The Java plugin API, which is the basis of Java plugins, has serious security flaws. For security purposes, you can disable such plugins. Nevertheless, even if you decide to use the “Block Java” option, JavaScript will still be enabled.

## Windows tracking {#windowstracking}

:::note

These features are only available in AdGuard for Windows.

:::

### Disable Windows telemetry {#windowstelemetry}

This feature disables sending technical data about your system and app usage.

### Disable Windows Recall {#windowsrecall}

This feature prevents Windows from taking and analyzing screenshots of your desktop activity.

### Turn off Advertising ID {#advertisingid}

This feature disables Advertising ID to block tracking of your app usage.

### Disable automatic reporting by Microsoft Defender {#windowsautoreport}

This feature blocks automatic reporting and sampling of suspected malware.

### Disable WAP Push message routing service {#wappushrouting}

This feature disables data collection about Windows component problems.

## Varie {#miscellaneous}

### Hide Referer from third parties {#referer}

This feature prevents third parties from knowing what websites you visit.

Referer is an HTTP header used in browser-to-server requests. It contains the URL of the request source. When you navigate from one page to another, Referer saves the URL of the initial page. The server that hosts the destination web page often has software that parses Referer and extracts various pieces of information from it. Enabling the *Hide Referer from third parties* setting hides the current website from third-party websites by altering the HTTP header.

You can also set an arbitrary value for Referer by entering it into the *Custom Referer* field. To use default Referer, leave the field blank.

Note that to be able to filter traffic, AdGuard applications 'intercept' browser-to-server requests. Requests to ad, tracking, and phishing servers may be altered before sending them to the server or blocked completely. Same goes for the *Hide Referer from third parties* option: AdGuard intercepts HTTP(S) requests, in particular to remove or change the Referer header if this option is enabled. However, it happens only after these requests “leave” the browser. This means that if you monitor Referer inside the browser (for example, with the help of Chrome's Developer Tools), you will see the original Referer because the request hasn't reached AdGuard yet. You can use software like [Fiddler](https://www.telerik.com/fiddler) to make sure that Referer gets altered correctly.

Due to the nature of all web browser extensions, AdGuard Browser Extension instead works 'inside' the web browser. It will alter the Referer right then and there, so Developer Tools will show the desired Referer for your requests.

### Hide User-Agent {#useragent}

This feature removes identifying information from the User-Agent header.

When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with “User-Agent:”. It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.

You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank.

:::note

Available in AdGuard for Android, AdGuard for Windows, and AdGuard for Mac.

:::

### Mask IP address {#ip}

This feature tricks websites into believing you are a proxy with the IP address you specify.

Tracking protection cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address.

You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank.

:::note

Available in AdGuard for Android, AdGuard for Windows, and AdGuard for Mac.

:::

### Remove X-Client-Data header {#xclientdata}

This feature blocks Google Chrome from sending its version and modifications information to Google domains (including Double Click and Google Analytics).

:::note

Available in AdGuard for Android, AdGuard for Windows, AdGuard for Mac, and AdGuard Browser Extension (Chromium-based browsers).

:::

### Protect against DPI {#dpi}

This feature modifies your outgoing traffic so that your ISP’s Deep Packet Inspection systems can’t detect the websites you visit. Can’t guarantee complete protection against all DPI systems.

The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients.

AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this.

:::note

Available in AdGuard for Android, AdGuard for Windows, and AdGuard for Mac.

:::

:::attenzione

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
