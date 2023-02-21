---
title: Stealth Mode
sidebar_position: 4
---

Many websites gather information about their visitors, such as their IP address, installed browser and operating system, screen resolution, and even the page from which a visitor was redirected. Some web pages use cookies to mark your browser and save your personal settings and preferences, or to "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data- and statistics-gathering systems.

You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website from receiving the search request you used to find it on the Internet, automatically delete both third-party and the website's own cookies, turn off browser geolocation sharing that can be used to track your whereabouts, and hide your true IP address or even replace it with an arbitrary one.

Below we will list and describe the main features and options that you can control in the **Stealth Mode** settings. They are split into four groups: **General**, **Tracking methods**, **Browser API**, and **Miscellaneous**.

> Some options may not be available depending on the particular product due to OS or other limitations.

## Generali {#general}

### Hide your search queries {#searchqueries}

When you get directed to a website from Google, Yahoo, or any other search engine, this option hides the search query that you used to find that website.

### Send Do-Not-Track header {#donottrack}

It sends a Do-Not-Track (DNT) HTTP header to queried websites, thus requiring web apps to disable tracking of your activity.

### Strip tracking parameters from URLs

If you enable this option, AdGuard will strip tracking parameters like `utm_*` and `fb_ref` from pages’ URLs.

### Tracking methods {#tracking-methods}

### Self-destructing third-party cookies {#3p-cookie}

Websites use cookies to store your information and preferences, such as the language you selected, your location, or the list of items in your shopping cart. When you return to a website, your browser sends back the cookies belonging to that website, which allows it to "remember" your data.

Third-party cookies are those implemented by a website that is different from the one you are currently browsing. For example, cnn.com may have a Facebook "Like" widget on its homepage. This widget will implement a cookie that may be read later by Facebook. Some advertisers use such cookies to track what other sites you visit where their ads are placed.

Set a time period (in minutes) at the end of which all third-party cookies will be destroyed. Set the timer to 0 to block them completely.

### Self-destructing first-party cookies {#1p-cookie}

We do not recommend enabling this option as it may severely interfere with the work of certain sites. Set a time period (in minutes) at the end of which all cookies will be destroyed. Set the timer to 0 to block them completely.

### Disable cache for third-party requests {#3p-cache}

When a browser addresses a page, the server assigns an ETag to that page. This ETag is used by the browser to cache the page's contents. Upon subsequent requests, the browser sends the ETag to the corresponding server, thus letting the server learn the visitor’s identity. As long as the site's files are cached, the ETag is sent every time your browser addresses this site. If the site has embedded content from another server (such as an image or iframe), that server can track your activities without your knowledge.

### Block third-party Authorization header {#3p-auth}

"Authorization" header value is cached by the browser, and then is sent alongside every request to that domain. It means that it can be used for tracking purposes just like cookies.

## Browser API {#browser-api}

### Block WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) is a technology that allows direct streaming of data between browsers and apps. It can let others know your true IP address, even if you use a proxy or VPN. Enabling this option can disrupt the work of certain browser applications, such as messengers, chats, cinemas, or games.

### Block Push API {#push}

The Push API enables servers to send messages to web applications regardless of the activity status of your browser. Thus, you may see notifications from various websites even if your browser is hidden in the tray or not launched. Enable this option to block the browser's Push API completely.

### Block Location API {#location}

Enabling this option will prevent the browser from sending GPS data that could be used to determine your location, modify your search results, or otherwise influence your web experience.

### Block Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly affect website loading time. Turning this setting on makes AdGuard block browsers' ability to detect components (such as plugins and ActiveXObject objects) that allow Flash to display content. This effectively means that browsers are unable to support Flash.

### Block Java {#java}

Some websites and web services still use the old technology to support Java plugins. The Java plugin API, which is the basis of Java plugins, has serious security flaws. For security purposes, you can disable such plugins. Nevertheless, even if you decide to use the "Block Java" option, JavaScript will still be enabled.

## Varie {#miscellaneous}

### Hide Referrer from third-parties {#referrer}

Referrer is an HTTP header used in browser-to-server requests. It contains the URL of the request source. When you navigate from one page to another, Referrer saves the URL of the initial page. The server often has software that parses Referrer and extracts various pieces of information from it. Enabling this option hides the current website from third-party sites by changing the HTTP header. You can also set an arbitrary value for Referrer by entering it into the Custom Referrer field. To use default Referrer, leave the field blank.

### Hide your User-Agent {#useragent}

When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with "User-Agent:". It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.

You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank.

### Hide your IP address {#ip}

Stealth Mode cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address.

You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank.

### Remove X-Client-Data header from HTTP requests {#xclientdata}

It forbids Google Chrome from sending its version and modification information with requests to Google domains (including Double Click and Google Analytics).

### Protect from DPI {#dpi}

The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients.

AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this.

> The "Protect from DPI" feature is already implemented in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.
