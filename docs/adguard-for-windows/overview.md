---
title: Features overview
sidebar_position: 1
---

AdGuard for Windows is an easy-to-use tool that blocks annoying banners, pop-ups, video ads and trackers. But that's not all: it helps you save traffic, load web pages faster, and guard your computer from undesirable and potentially malicious content. AdGuard can also protect you from phishing sites and your children from information they shouldn't be exposed to due to age restrictions. With a variety of settings, you can customize the app to suit you. 

## Home screen

![Main screen]()

Once you start AdGuard for Windows, you will see the main screen of the app. Its most noticeable detail is the enable/disable button. Also, on this screen you can monitor blocked ads, trackers and threats statistics, find out the current version of the app or update it. Furthermore, there are four tabs in the upper right corner: *Settings*, *Support*, *License*, and *About*. Each of these is worth talking about separately. 

## Settings

![Settings]()

*Settings* is the section that requires the most attention. This is where you can configure the app so that it fully meets your requirements: blocks only what bothers you, uses the DNS server of the trusted provider, removes third-party cookies, and so on.  

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update chek interval. You should also go to *Settings* if AdGuard for Windows is not working properly to enable *Debug* logging Level and then export logs.  

![Advanced Settings]()

At the very bottom of the screen you will find *Advanced Settings*. Changing them can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. That's why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to understend what can be set up in *Advanced Setting* read the [dedicated article](/solving-problems/low-level-settings.md).

### Ad Blocker

This is the main module of AdGuard for Windows that removes ads from the websites you visit and from the apps installed on your device. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a special syntax. To understend what filters are and how they work read our [blog post](https://adguard.com/en/blog/what-are-filters.html).

![Ad Blocker]()

In the Ad Blocker module you can:
* enable an auto activation of language-specific filters
* disable search ads and self-promotion blocking
* activate pre-installed filters such as the *AdGuard Base filter*, 
* install filters from the list or add a custom filter by clicking the *Add a filter* button, 
* make changes to existing rule groups using the *Filter editor* button, 
* compose a filter from your own rules written manually, imported or created with the AdGuard Assistant extension.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters.md). 

### Stealth Mode

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. Stealth Mode safeguards your personal information from such data and statistics gathering systems.

![Stealth Mode]()
 
You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.
 
To learn all the main features and options you can manage in the Stealth mode settings, [read this article](/general/stealth-mode.md).  

### Browsing Security

Phishing is a very common web fraud aimed at stealing your personal data (passwords, bank account details, etc.). It is carried out using fake web pages mimicking popular websites or real services, such as web stores or social networks. Many phishing websites have URLs that only differ from the real ones in just a few symbols to put off your guard. If a user enters their details on such a website, they will definitely end up in the hands of criminals.

Browsing Security gives strong protection against such incidents. In addition, the regularly updated module bases allow it to recognize malicious websites, thus securing your PC from viruses and trojans. At the same time, the user’s personal information is not transferred anywhere, and AdGuard servers do not know which websites the user is visiting, because security check is not performed via open web address (URL) but through hash prefixes (hash is a certain data structure that renders each address added to the base unambiguous). Some web pages are not malicious themselves, but they may contain elements built into their structure by other websites. Unlike browser plug-ins, Browsing Security module checks each object built into any web page, thus ensuring maximum protection.

>But note that AdGuard for Android is not an antivirus. It will neither stop the actual download of a virus nor delete the already existing ones. For the complete protection of your device, we recommend using AdGuard in tandem with a dedicated AV tool.

![Browsing Security]()

In case you want to learn more about Browsing Security, read [this article](/general/browsing-security.md).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you want to open a website and type, for example, `google.com` in the address bar, your browser sends a request to a DNS server to get the IP address of the site in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to block content on DNS level. 

![DNS Protection]()

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including AdGuard DNS that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. You can even add custom DNS servers. Also there is an option to add complicated rules using DNS rules syntax and [DNS filters of your choice](https://filterlists.com). 

### Parental Control

There are numerous websites access to which should be restricted if the PC is used by children. This task is accomplished by Parental Control.

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results. Filter sensitivity is flexibly adjusted. 

![Parental Control]()

### Browser Assistant

[Browser Assistant]()

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](browser-assistant.md).

## Extensions

AdGuard can significantly broaden website functionality working as a [user script manager](/general/userscripts.md). AdGuard Users can add their own scripts, as well as manage existing ones.

![Extensions](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Windows7.1/extensionsEn.png)

**Automatically detect userscripts**

With this option enabled, AdGuard will automatically define browser queries to userscripts and suggest their installation. Otherwise, extensions can be downloaded and installed manually.

The following extensions are installed with AdGuard:

![Preinstalled userscripts](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Windows7.1/extensionslistEn.png)

**AdGuard Assistant**

The name of this extension is quite deliberate: it actually assists the user in changing basic AdGuard settings right in the browser, without the need to open the app itself. AdGuard Assistant works with all Microsoft Windows compatible browsers. In addition, the AdGuard Assistant icon will not be displayed on websites listed as exceptions by the user and on certain web pages where there is a risk of incorrect content display. You can find detailed description of capabilities and adjustment methods of AdGuard Assistant in the relevant section of our Knowledge Database.

**AdGuard Extra**

This is a custom extension designed to fight the technique of re-inserting blocked ads - the so-called ad blocker circumvention/ad reinjection. Both are advanced anti-ad blocker methods that continue to rise in popularity among advertisers.

AdGuard Extra is essentially a mini-program that changes the way pages work,and it does so in such a way that it becomes much more difficult for sites to use the above-mentioned functions to bypass blockers.

**AdGuard Popup Blocker**

This extension prevents popup windows from opening when you view web pages. Some popups are considered useful – they may contain settings for site administering or additional reference information demonstrated upon clicking a link. That is why you can turn off the Blocker if needed. This extension doesn’t work on websites added to the AdGuard exceptions list either. It is turned off by default, but you can turn it on in the application settings. You will find more detailed information about this extension in our Knowledge Database.

**Web of Trust**

Web of Trust lets you see the reputation of each website based on its users’ opinions. The site is rated by a number of specific criteria: trust, security, etc. This extension is turned off by default, but you can turn it on in the application settings.

### Network

The penultimate module is dedicated to network filtering, and here you will find additional features. Two of them are enabled by default: "Enable traffic filtering" and "Filter HTTPS protocol". These are important extra precautions to better filter your web space. HTTP is the primary protocol for transmitting information over the Internet. Most data, including ads, is transmitted through it, but it has one drawback: the connection is not encrypted. With the HTTPS filtering feature, AdGuard filters not only HTTP traffic, but also HTTPS traffic (S stands for "safe").

[Network Settings]()

In this module you can also manage proxy settings. Check the checkbox "Use AdGuard as an HTTP proxy" to use AdGuard as a regular HTTP proxy which will filter all traffic passing through it. You can also enable the "Filter websites with EV certificates" feature. Extended Validation (EV) SSL Certificates offer a stronger safety guarantee; owners of such websites have to pass a thorough and globally standardized identity verification process defined by EV guidelines. Which is the reason why some users trust websites with such certificates and prefer not to filter them.

At last, there is a section with Proxy settings. There you can specify which proxy server AdGuard should use to update filters, get new versions and so on.

### AdGuard VPN 

The last section is dedicated to AdGuard VPN — an ideal tool that provides security and anonymity each time you browse the Internet. You can download it by clicking the *Download* button or go to the AdGuard VPN website by clicking the *Homepage* button.

How does AdGuard VPN work? Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. In this way, data confidentiality is preserved, as well as the anonymity of the user, because a third-party observer sees the IP address of the VPN server and not the actual user's IP.

**What does AdGuard VPN do:**

* hides your real whereabouts and helps you stay anonymous
* сhanges your IP address to protect your data from tracking
* encrypts your traffic to make it unreachable to scammers
* lets you configure where to use VPN and where not to (exclusions feature)

To get more information about AdGuard VPN dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/). 

## Others

There are other useful AdGuard options that shouldn't go unnoticed in this article, since they add much to user experience.

### Support 

[Support]()

By clicking the Support tab you will open a dialog box through which you can report a bug, submit a feature request, or simply share your opinion of the product. 

### License

[License]()

In this tab, everything is very simple: three buttons and a minimum amount of information. Here you can:
* find out the license type (natli build, veta or release), the number of devices available for simultaneous connection to AdGuard, the license expiration date;
* click the button to go to the license purchase page, and activate, reset or recover a license. 

### About 

[About]()

In addition to information about the current version of the program, this tab provides some useful links to the Licese Agreement, Privacy Policy, Acknowledgements, Discussions, and Version history pages. 