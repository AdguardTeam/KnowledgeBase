---
title: Tracking protection
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Here are the active features of the pre-configured levels:

1. **Standard**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   c. _Remove X-Client-Data header_. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **High**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::caution

   This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Remove X-Client-Data header_. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

3. **Extreme** (formerly known as _Ultimate_)

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::caution

   This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Block WebRTC_. This feature blocks WebRTC, a known vulnerability that can leak your real IP address even if you use a proxy or VPN

   g. _Block Push API_. This feature prevents your browsers from receiving push messages from servers

   h. _Block Location API_. This feature prevents browsers from accessing your GPS data and determining your location

   i. _Hide Referer from third parties_. This feature prevents third parties from knowing which websites you visit. It hides the HTTP header that contains the URL of the initial page and replaces it with a default or custom one that you can set

   j. _Hide your User-Agent_. This feature removes identifying information from the User-Agent header, which typically includes the name and version of the browser, the operating system, and language settings

   k. _Remove X-Client-Data header_. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

You can tweak individual settings in _Tracking protection_ and come up with a custom configuration. Every setting has a description that will help you understand its role. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
