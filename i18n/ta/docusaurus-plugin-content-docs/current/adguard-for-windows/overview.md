---
title: Features overview
sidebar_position: 1
---

:::note

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

AdGuard for Windows is an easy-to-use tool that blocks annoying banners, popups, video ads, and trackers. But that's not all: it helps you save traffic, load web pages faster, and protect your computer from undesirable and potentially malicious websites. AdGuard also protects you from phishing websites and keeps your kids away from inappropriate content.

## Home screen

![Main screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/home-screen.png)

Once you start AdGuard for Windows, you will see the main screen of the app. Its most noticeable detail is the *enable/disable protection* button. Also, on this screen you can monitor blocked ads, trackers and threats statistics, find out the current version of the app or update it. Furthermore, there are four tabs in the upper right corner: *Settings*, *Support*, *License*, and *About*. Each of these is worth talking about separately.

## Settings

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

*Settings* is the section that requires the most attention. This is where you can configure the app so that it fully meets your requirements: blocks only what bothers you, uses the DNS server of the trusted provider, removes third-party cookies, and so on.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect *Debug logs*](../solving-problems/adguard-logs).

![Advanced Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

At the very bottom of the screen you will find *Advanced Settings*. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. That's why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to understend what can be set up in *Advanced Setting* read the [dedicated article](../solving-problems/low-level-settings).

### Ad Blocker

This is the main module of AdGuard for Windows that removes ads from the websites you visit and from the apps installed on your device. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

In the Ad Blocker module you can:
* enable automatic activation of language-specific filters,
* disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
* activate pre-installed filters such as *AdGuard Base filter*,
* install filters from the list or add a custom filter by clicking the *Add a filter* button,
* make changes to existing rule groups using the *Filter editor* button,
* see all the requests sent by browsers and apps installed on your computer by clicking the *Filtering log* button. From there you can also block or unblock any request by creating a custom rule,
* compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Stealth Mode

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data and statistics gathering systems.

![Stealth Mode *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Browsing Security

Browsing Security gives strong protection against malicious and fishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it's already started, nor delete the already existing ones. But it will warn you if you're about to proceed to a website whose domain has been added to our "untrusted sites" database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module you can
* enable notifications to block requests to malicious and phishing sites,
* activate sound notifications,
* agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and fishing websites database up to date.

![Browsing Security *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

In case you want to learn more about Browsing Security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. You can even add custom DNS servers. Also there is an option to add custom rules using [DNS rules syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). And if necessary, you can add [DNS filters of your choice](https://filterlists.com).

### Parental Control

There are numerous websites access to which should be restricted if the PC is used by children. This task is accomplished by Parental Control.

![Parental Control *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the Parental Control module you can enable the *Safe search* and manage the *blocklist* and the *allowlist* to customize how this option works. You can also check the *Block executable files download* box to prevent your child from downloading and installing software on the computer. There are two more options in the *Parental Control* module: you can select a specific Windows user to be protected by *Parental Control* and set a password to protect AdGuard settings from change.

![Parental Control *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser Assistant

![Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](../browser-assistant).

## Extensions

AdGuard can significantly broaden website functionality working as a [user script manager](/general/userscripts). AdGuard Users can add their own scripts, as well as manage existing ones.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Automatically detect userscripts**

With this option enabled, AdGuard will automatically define browser queries to userscripts and suggest their installation. Otherwise, extensions can be downloaded and installed manually.

The following extensions are installed with AdGuard:

![Preinstalled userscripts *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard Assistant**

AdGuard Assistant is Legacy Assistant that you may use if the [new Assistant](../browser-assistant) is not available for your browser. The name of this extension is quite deliberate: it actually assists the user in changing basic AdGuard settings right in the browser, without the need to open the app itself. AdGuard Assistant works with all Microsoft Windows compatible browsers. In addition, the AdGuard Assistant icon will not be displayed on websites listed as exceptions by the user and on certain web pages where there is a risk of incorrect content display.

**AdGuard Extra**

This is a custom extension designed to fight the technique of re-inserting blocked ads — the so-called ad blocker circumvention/ad reinjection. Both are advanced anti-ad blocker methods that continue to rise in popularity among advertisers.

AdGuard Extra is essentially a mini-program that changes the way pages work,and it does so in such a way that it becomes much more difficult for sites to use the above-mentioned functions to bypass blockers.

**AdGuard Popup Blocker**

This extension prevents popup windows from opening when you view web pages. Some pop-ups are considered useful – they may contain settings for site administering or additional reference information demonstrated upon clicking a link. That is why you can turn off the Blocker if needed. This extension doesn’t work on websites added to the AdGuard exceptions list either. It is turned off by default, but you can turn it on in the application settings. You will find more detailed information about this extension in our Knowledge base.

**Web of Trust**

Web of Trust lets you see the reputation of each website based on its users’ opinions. The site is rated by a number of specific criteria: trust, security, etc. This extension is turned off by default, but you can turn it on in the application settings. Please, note that AdGuard is not the developer of this extension.

### Network

The penultimate module is dedicated to network filtering, and here you will find additional network-related options. Two of them are enabled by default: *Enable traffic filtering* and *Filter HTTPS protocol*. These are important extra precautions to better filter your web space. Most websites are now using HTTPS, and the same applies to advertising. From many sites, like youtube.com, facebook.com and twitter.com, it is impossible to remove ads without HTTPS filtering. So keep the *Filter HTTPS protocol* feature enabled unless you have a strong reason not to.

![Network Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

In this module you can check the checkbox "Use AdGuard as an HTTP proxy" to use AdGuard as a regular HTTP proxy which will filter all traffic passing through it. You can also enable the *Filter websites with EV certificates* feature. Extended Validation (EV) SSL Certificates offer a stronger safety guarantee; owners of such websites have to pass a thorough and globally standardized identity verification process defined by EV guidelines. Which is the reason why some users trust websites with such certificates and prefer not to filter them.

At last, there is a section with proxy settings. There you can specify which proxy server AdGuard should use to update filters, get new versions and so on.

### AdGuard VPN

The last section is dedicated to AdGuard VPN — an ideal tool that provides security and anonymity each time you browse the Internet. You can download it by clicking the *Download* button or go to the AdGuard VPN website by clicking the *Homepage* button.

How does AdGuard VPN work? Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. In this way, data confidentiality is preserved, as well as the anonymity of the user, because a third-party observer sees the IP address of the VPN server and not the actual user's IP.

**What AdGuard VPN does:**

* hides your real whereabouts and helps you stay anonymous
* сhanges your IP address to protect your data from tracking
* encrypts your traffic to make it unreachable to scammers
* lets you configure where to use VPN and where not to (exclusions feature)

To get more information about AdGuard VPN dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/).

## Others

There are other useful AdGuard options that shouldn't go unnoticed in this article, since they add much to user experience.

### Support

![Support *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/support.png)

By clicking the Support tab you will open a dialog box through which you can report a bug, submit a feature request, or simply share your opinion of the product.

### License

![License *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/license.png)

This tab contains information about your license. Here you can:
* find out the license type (nightly build, beta or release), the number of devices available for simultaneous connection to AdGuard, the license expiration date;
* click the button to go to the license purchase page, and activate, reset or recover a license.

### About

![About *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/about.png)

In addition to information about the current version of the program, this tab provides some useful links to Licese Agreement, Privacy Policy, Acknowledgements, Discussions, and Version history pages.

### Check for updates

![Check for updates *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/check-updates.png)

To check for filters and userscripts updates, click the rotating arrows icon in the upper right corner of the app's main screen.

### Tray menu

To save you time navigating around AdGuard menus, many of the frequently used options and settings are available from the tray menu. To call the menu, right-click the AdGuard icon in the tray. It will offer you the following options:

* enable protection
* disable protection: completely or for 30 seconds
* go to *Settings*
* open the *Tools* and *Advanced* menus
* check for filter updates
* check for app updates
* to recall the last pop-up message
* reach the *Support* and *About* sections
* close AdGuard, but continue filtering
* exit AdGuard
