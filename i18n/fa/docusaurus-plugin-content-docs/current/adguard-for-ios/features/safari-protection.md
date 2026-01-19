---
title: Safari protection
sidebar_position: 1
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard for iOS contains six content blockers: General, Privacy, Social, Security, Custom, and Other. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in _Advanced settings_ (tap the gear icon at the bottom right → _General_ → _Advanced settings_ → _Content blockers_).

![Content blockers \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Keep all content blockers enabled for the best filtering quality.

:::

### Filters {#filters}

Content blockers' work is based on filters, also sometimes referred to as filter lists. Each filter is a list of filtering rules. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Rules are developed to block ads, trackers, and more.

All filters are grouped into thematic categories. To see the full list of these categories (not to be confused with content blockers), open the _Protection_ section by tapping the shield icon, then go to _Safari protection_ → _Filters_.

![Filter groups \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

More enabled filters does not guarantee that there will be less ads. A large number of various filters enabled simultaneously reduces the quality of ad blocking.

:::

Custom filters category is empty by default for users to add there their filters by URL. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Use this tool to customize Safari filtering without adding an entire filter list.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). But please note that many of them won't work in Safari on iOS.

![User rules screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the _Safari protection_ screen. If you want to disable ad blocking on a certain website, Allowlist will be of help. It allows you to add domains and subdomains to exclusions. AdGuard for iOS has an Import/Export feature, so the allowlist from one device can be easily transferred to another.
