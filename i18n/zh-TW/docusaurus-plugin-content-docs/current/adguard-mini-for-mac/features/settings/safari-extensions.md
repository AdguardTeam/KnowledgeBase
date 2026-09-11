---
title: Safari extensions
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[In 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple put limitations on ad blockers for Safari, allowing them to use only 50,000 filtering rules simultaneously. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[In 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple increased the filtering rule limit for each content blocker to 150,000 rules applied simultaneously. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Whereas the limit has been increased, the structure of content blockers has remained the same.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard General

_AdGuard General_ is a content blocker that combines the most essential filters for blocking ads. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Privacy

This content blocker is the main tool against counters and other web analytics tools. The _AdGuard Tracking Protection filter_ is enabled by default.

### AdGuard Social

_AdGuard Social_ contains filters against social media buttons, widgets, scripts, and icons. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Security

This content blocker unites several security-related filters. _Malware Domains Blocklist_ blocks domains that are notorious for spreading malware and spyware. _Spam404_ protects you from Internet fraudsters. _NoCoin Filter List_ disrupts browser-based cryptominers, such as Coinhive.

### AdGuard Other

_AdGuard Other_ contains filters with various functions. For example, it has a filter that unblocks search ads and self-promo ads. In some cases, it helps find exactly what you are looking for, because these kinds of ads are more relevant and less intrusive than others.

:::note Disclaimer

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Custom

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. You can find new filters at [filterlists.com](https://filterlists.com/).
