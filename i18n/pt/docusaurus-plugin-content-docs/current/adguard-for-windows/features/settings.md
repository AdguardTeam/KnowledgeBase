---
title: Settings
sidebar_position: 2
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege o seu dispositivo ao nível do sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

_Settings_ is the section that requires the most attention. This is where you can configure the app so that it fully meets your requirements: blocks only what bothers you, uses the DNS server of the trusted provider, removes third-party cookies, and so on.

![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. That's why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Setting_ read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad Blocker

This is the main module of AdGuard for Windows that removes ads from the websites you visit and from the apps installed on your device. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

In the Ad Blocker module you can:

- enable automatic activation of language-specific filters,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- disable ads in the Start menu on Windows 11,
- activate pre-installed filters such as _AdGuard Base filter_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- make changes to existing rule groups using the _Filter editor_ button,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. From there you can also block or unblock any request by creating a custom rule,
- compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Stealth Mode

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data and statistics gathering systems.

![Stealth Mode \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Browsing security

Browsing security gives strong protection against malicious and phishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it's already started, nor delete the already existing ones. But it will warn you if you're about to proceed to a website whose domain has been added to our "untrusted sites" database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module you can

- enable notifications to block requests to malicious and phishing sites,
- activate sound notifications,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. You can even add custom DNS servers. Also there is an option to add custom rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). And if necessary, you can add [DNS filters of your choice](https://filterlists.com).

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser Assistant

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
