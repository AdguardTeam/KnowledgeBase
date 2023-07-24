---
title: Features overview
sidebar_position: 1
---

:::info

This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

If you look for AdGuard in the App Store, you'll find two apps — [AdGuard](https://itunes.apple.com/app/id1047223162) and [AdGuard Pro](https://itunes.apple.com/app/id1126386264). These apps are designed to block ads and trackers in Safari, other browsers, and apps, and to manage DNS protection. Don't be misled by their names, both apps block ads on smartphones and tablets by Apple. They used to differ in functionality due to the changing App Store review guidelines, but now these two apps are [basically the same](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). So if you have purchased AdGuard Pro, there is no need to download AdGuard and buy a license there, and vice versa.

## Features {#features}

AdGuard and AdGuard Pro for iOS offer lots of features for blocking ads, trackers and creating user rules, both in Safari and on network level.

### Content blockers {#content-blockers}

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard for iOS contains six content blockers: General, Privacy, Social, Security, Custom, and Other. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in *Advanced settings* (tap the gear icon at the bottom right → *General* → *Advanced settings* → *Content blockers*).

![Content blockers *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Keep all content blockers enabled for the best filtering quality.

:::

### Filters {#filters}

Content blockers' work is based on filters, also sometimes referred to as filter lists. Each filter is a list of filtering rules. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Rules are developed to block ads, trackers, and more.

All filters are grouped into thematic categories. To see the full list of these categories (not to be confused with content blockers), open the *Protection* section by tapping the shield icon, then go to *Safari protection* → *Filters*.

![Filter groups *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

More enabled filters does not guarantee that there will be less ads. A large number of various filters enabled simultaneously reduces the quality of ad blocking.

:::

Custom filters category is empty by default for users to add there their filters by URL. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Use this tool to customize Safari filtering without adding an entire filter list.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). But please note that many of them won't work in Safari on iOS.

![User rules screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the *Safari protection* screen. If you want to disable ad blocking on a certain website, Allowlist will be of help. It allows you to add domains and subdomains to exlcusions. AdGuard for iOS has an Import/Export feature, so the allowlist from one device can be easily transferred to another.

### DNS protection {#dns-protection}

[DNS protection module](https://adguard-dns.io/kb/general/dns-filtering/) enhances your privacy by encrypting your DNS traffic. Unlike with Safari content blocking, DNS protection works system-wide, i.e. beyond Safari, in apps and other browsers. You have to enable this module before you're able to use it. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the *Protection* → *DNS protection* tab.

:::note

To be able to manage DNS settings, AdGuard apps require establishing a local VPN. It will not route your traffic through any remote servers. Nevertheless, the system will ask you to confirm access permission.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

This section has two options: AdGuard and Native implementation. Basically, these are two methods of setting up DNS.

In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications — if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servers {#dns-servers}

The first section you'll see on the DNS Protection screen is DNS server. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen.

![DNS servers *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Tap any to change the encryption type (if such option is provided by the server's owner) or to view the server's homepage. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

In addition, at the bottom of the screen there is an option to add a custom DNS server. It supports regular, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC servers.

### Network settings {#network-settings}

![Network settings screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Users can also handle their DNS security on the Network settings screen. *Filter mobile data* and *Filter Wi-Fi* enable or disable DNS protection for the respective network types. Further down, at *Wi-Fi exceptions*, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

In DNS filtering you can customize your DNS traffic by enabling AdGuard DNS filter, adding custom DNS filters and using DNS
blocklist/allowlist.

How to access:

*Protection* 🛡 icon (the second icon in the bottom menu bar) → *DNS protection* → *DNS filtering*

![DNS filtering screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with [this exhaustive manual](../solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.

### Advanced protection {#advanced-protection}

In iOS 15 Apple has added the support for Safari Web Extensions, and we in turn added a new *Advanced protection* module to AdGuard for iOS. It allows AdGuard to apply advanced filtering rules, such as CSS rules, CSS selectors, and scriptlets, and therefore to deal even with the complex ads, such as YouTube ads.

![Advanced protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg)

To enable *Advanced protection*, open the *Protection* tab by tapping the second left icon at the bottom of the screen, select the *Advanced protection* module, activate the feature by toggling the switch slider, and follow the instructions below.

:::note

The *Advanced protection* only works on iOS 15 and later versions. If you are using earlier versions of iOS, you will see the *YouTube ad blocking* module in the app instead of the *Advanced protection*.

:::

![Protection screen on iOS 14 and earlier *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg)

### Compatibility with AdGuard VPN {#compatibility}

In most cases, the ad blocker and the VPN application cannot work together, simply because there are certain system limitations. Nevertheless we've managed to find a solution to befriend [AdGuard VPN](https://adguard-vpn.com/) and AdGuard Ad Blocker. For your convenience we've added the *AdGuard VPN* block to the *Protection* section, so you can easily switch between two apps.

### Assistant {#assistant}

![Safari Assistant *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/assistant_en.jpeg)

Assistant is a tool that helps you manage filtering in Safari right from the browser without switching back to the app.

To see it, do the following: open Safari and tap the arrow-in-a-box symbol. Then scroll down to AdGuard/AdGuard Pro (depending on the app you use) and tap it to fetch a window with several options:

1. **Enable on this page.** Turn the switch off to add the current domain to the Allowlist.
2. **Block an element on this page.** Tap it to enter the 'Element blocking' mode: choose any element on the page, adjust the size by tapping 'plus' or 'minus', preview if necessary and then tap the checkmark icon to confirm. The selected element will be hidden from the page and a corresponding rule will be added to User rules. Remove or disable it there to revert the change.
3. **Report an issue on this page.** Opens a web reporting tool that will help you send a report to our support team in just a few taps. Use it if you noticed a missed ad or an incorrect blocking on the page.

:::tip

On iOS 15 devices, the Assistant features are available through [AdGuard Safari Web Extension](../web-extension), which enhances the capabilities of AdGuard for iOS and allows you to take advantage of iOS 15. With this web extension, AdGuard can apply advanced filter rules and, as a result, block more ads.

:::

### Activity {#activity}

This is the 'information hub' of AdGuard's DNS protection suite. You can quickswitch to it by tapping the third icon in the row at the screen bottom. N.b. this screen is only seen when DNS protection is enabled.

![Activity screen *mobile_border](https://cdn.adguard.com/content/github/ad_blocker/ios/activity.png)

Here AdGuard displays stats about device's DNS requests, such as total number, number of blocked requests and data saved by blocking them. AdGuard can display the stats for a day, a week, a month, or in total.

Below is the *Recent activity* feed. AdGuard stores the last 1500 DNS requests that have originated on your device and shows their attributes such as protocol type and target domain.

:::note

AdGuard does not send this information anywhere. It is 100% local and does not leave your device.

:::

Tap any request to view more details. There will also be buttons to add the request to Blocklist/Allowlist in one tap.

![Request details *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/request_info_en.jpeg)

Above the activity feed, there are *Most active* and *Most blocked* companies. Tap each to see data based on the last 1500 requests.

### Statistics {#statistics}

Aside from the *Activity* screen, you can find global statistics on the home screen and on widgets.

## Low-level settings {#low-level-settings}

![Low-level settings *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the *Low-level settings*, go to *Settings* → *General* → (Enable *Advanced mode* if it's off) → *Advanced settings* → *Low-level settings*.

For the most part, the settings in this section are best left untouched: only use them if you're sure about what you're doing, or if the support team has asked for them. But some settings could be changed without any risk.

### Block IPv6 {#blockipv6}

For any DNS query sent to get an IPv6 address, our app returns an empty response (as if this IPv6 address does not exist). Now there is an option not to return IPv6 addresses. At this point the description of this function becomes too technical: configuring or disabling IPv6 is the exclusive domain of advanced users. Presumably, if you are one of them, it will be good to know that we now have this feature, if not — there is no need to dive into it.

### Bootstrap and Fallback servers {#bootstrap-fallback}

Fallback is a backup DNS server. If you chose a DNS server and something happened to it, a fallback is needed to set the backup DNS server until the main server responds.

With Bootstrap, it’s a little more complicated. For AdGuard for iOS to use a custom secure DNS server, our app needs to get its IP address first. For this purpose, the system DNS is used by default, but sometimes this is not possible for various reasons. In such cases, Bootstrap could be used to get the IP address of the selected secure DNS server. Here are two examples to illustrate when a custom Bootstrap server might help:
1. When a system default DNS server does not return the IP address of a secure DNS server and it is not possible to use a secure one.
2. When our app and third-party VPN are used simultaneously and it is not possible to use System DNS as a Bootstrap.

## Other features {#other-features}

While Safari content blocking and DNS protection are indisputably two major modules of AdGuard/AdGuard Pro, there are some other minor features that don't fall into either of them directly but still can be useful and are worth knowing about.

- **Dark theme**

![Light theme *mobile_border](https://cdn.adtidy.org/blog/new/26vo4homelight.jpeg)

![Dark theme *mobile_border](https://cdn.adtidy.org/blog/new/bgko8homedark.jpeg)

Residing right at the top of **Settings** → **General** screen, this setting allows you to switch between dark and light themes.

- **Widgets**

![Widgets *mobile](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg)

AdGuard supports widgets that provide quick access to Safari content blocking and DNS protection switches, and also show global requests stats.

- **Auto-update over Wi-Fi only**

If this setting is enabled, AdGuard will use only Wi-Fi for background filter updates.

- **Invert the Allowlist**

An alternative mode for Safari filtering, it unblocks ads everywhere except for the specified websites from the list. Disabled by default.

- **Advanced mode**

**Advanced mode** unlocks **Advanced settings**. We don't recommend messing with those, unless you know what you're doing or you have consulted with technical support first.

- **Reset statistics**

Clears all statistical data, such as number of requests, etc.

- **Reset settings**

This option will reset all your settings.

- **Support**

Use this option to contact support, report a missed ad (although we advise to use the Assistant or AdGuard's Safari Web extension for your own convenience), export logs or to make a feature request.

- **About**

Contains the current version of the app and an assortment of rarely needed options and links.
