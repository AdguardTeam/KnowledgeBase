---
title: Tracking protection
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the *Protection* tab (the second icon from the bottom of the screen) and then select *Tracking protection*.

*Tracking protection* (formerly *Stealth Mode*) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

*Tracking protection* has three pre-configured privacy protection levels (*Standard*, *High*, and *Extreme*) and one user-defined level (*Custom*).

Here are the active features of the pre-configured levels:

1. **Standard**

    a. *Block trackers*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *Ask websites not to track me*. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    c. *Remove X-Client-Data header*. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **High**

    a. *Block trackers*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *Remove tracking parameters from URLs*. This feature uses *AdGuard URL Tracking filter* to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

    c. *Hide search queries*. This feature hides your searches from websites visited through search engine results

    d. *Ask websites not to track me*. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    e. *Delete third-party cookies*. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

    :::caution

    This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the *Standard* protection level.

    :::

    f. *Remove X-Client-Data header*. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

3. **Extreme** (formerly known as *Ultimate*)

    a. *Block trackers*. This feature uses *AdGuard Tracking Protection filter* to protect you from online counters and web analytics tools

    b. *Remove tracking parameters from URLs*. This feature uses *AdGuard URL Tracking filter* to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

    c. *Hide search queries*. This feature hides your searches from websites visited through search engine results

    d. *Ask websites not to track me*. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    e. *Delete third-party cookies*. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

    :::caution

    This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the *Standard* protection level.

    :::

    f. *Block WebRTC*. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

    g. *Block Push API*. This feature blocks push notifications from websites

    h. *Block Location API*. This feature prevents browsers from accessing your GPS data and determining your location

    i. *Hide Referer from third parties*. This feature prevents third parties from knowing which websites you visit. It hides the HTTP header that contains the URL of the initial page and replaces it with a default or custom one that you can set

    j. *Hide User-Agent*. This feature removes identifying information from the User-Agent header, which typically includes the name and version of the browser, the operating system, and language settings

    k. *Remove X-Client-Data header*. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

You can tweak individual settings in *Tracking protection* to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various *Tracking protection* settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
