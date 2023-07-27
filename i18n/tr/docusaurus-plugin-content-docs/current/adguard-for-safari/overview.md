---
title: Özelliklere genel bakış
sidebar_position: 1
---

:::info

Bu makale, yalnızca Safari tarayıcınızı koruyan Safari için AdGuard hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

AdGuard for Safari was designed to conform to Apple's restrictions for ad blocking browser extensions and is the most popular ad blocker for Safari. Although it can’t be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## General {#general}

![General tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

The first tab is the General screen where you can set up basic things like notifications, update intervals, and launching AdGuard at system startup. You can also choose to display the AdGuard icon in the menu bar. There you can also turn on [content blockers](#contentblockers) to block ads, trackers, annoyances, etc.

## Filters {#filters}

![Filters tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

A filter is a list of rules written in a special syntax. Following these rules, content blockers can filter web traffic: block ads or requests to malicious websites.

Filters are combined into eight thematic categories: *Ad Blocking, Privacy, Social widgets, Annoyances, Security, Language-specific filters, Custom, and Other filters*.

Read more about [AdGuard filters](/general/ad-filtering/adguard-filters) or [ad filtering in general](/general/ad-filtering/how-ad-blocking-works).

Filtreler sekmesinde, tüm kategoriyi veya ayrı filtreleri etkinleştirebilirsiniz. Filtreler sekmesindeki değişiklikler, İçerik Engelleyiciler bölümünde (Genel sekmesinde bulunur) yansıtılır.

## İçerik engelleyiciler {#contentblockers}

![İçerik engelleyiciler sekmesi](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

A content blocker is a thematic cluster of filters. Privacy-related filters are included in the content blocker with the corresponding name — *AdGuard Privacy*.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[In 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple put limitations on ad blockers for Safari, allowing them to use only 50,000 filtering rules simultaneously. As this number was not enough for an ad blocker to provide a good filtering quality (AdGuard Base Filter alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[In 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple increased the filtering rule limit for each content blocker to 150,000 rules applied simultaneously. Regarding AdGuard for Safari, up to 900,000 rules can be enabled for all six content blockers.

Whereas the limit has been increased, the structure of content blockers has remained the same.

In the Content blockers tab, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in the Filters tab. In the Content blockers section, you can only see the list of already enabled filters.

:::

### AdGuard General {#adguard_general}

*AdGuard General* is a content blocker that combines the most essential filters for blocking ads. We recommend keeping the AdGuard Base Filter always enabled.

### AdGuard Privacy {#adguard_privacy}

This content blocker is the main tool against counters and other web analytics tools. The *AdGuard Tracking Protection filter* is enabled by default.

### AdGuard Social {#adguard_social}

*AdGuard Social* contains filters against social media buttons, widgets, scripts, and icons. Other annoyance filters can also be found in this section: filters against pop-ups, mobile app banners, cookie notices, and more. To enable them, find *Social Widgets* in the Filters tab.

### AdGuard Security {#adguard_security}

This content blocker unites several security-related filters. *Malware Domains Blocklist* blocks domains that are notorious for spreading malware and spyware. *Spam404* protects you from Internet fraudsters. *NoCoin Filter List* disrupts browser-based cryptominers, such as Coinhive.

### AdGuard Other {#adguard_other}

*AdGuard Other* contains filters with various functions. For example, it has a filter that unblocks search ads and self-promo ads. In some cases, it helps find exactly what you are looking for, because these kinds of ads are more relevant and less intrusive than others.

:::note Disclaimer

We don’t have any ‘acceptable ads’ paid by advertisers. Instead, we provide users with an option to see [search ads and websites' self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Özel {#adguard_custom}

![Custom tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

If you need more filters, you can add them to *AdGuard Custom*. To add a custom filter, enter a URL or a local file path in the relevant field. You can find new filters at [filterlists.com](https://filterlists.com/).

## Kullanıcı kuralları {#userrules}

User rules can be used to customize ad blocking. They can be added manually, imported, or created automatically when you block an element on the page. To add your own filering rules, use a [special syntax](/general/ad-filtering/create-own-filters).

## About {#about}

![About tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

In the About tab, you can see info about the current version of your product and links to legal documents. There is also a link to our repository on GitHub. You can monitor the product development, create feature requests and report bugs there.

:::note Reminder

AdGuard for Safari can be downloaded for free [from the App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). A detailed setup instruction is available in the [Knowledge base](../installation).

:::
