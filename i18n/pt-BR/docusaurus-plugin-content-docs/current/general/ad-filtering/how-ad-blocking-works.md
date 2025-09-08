---
title: How ad blocking works
sidebar_position: 1
---

AdGuard has many ad-blocking products for different platforms, each with its own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

We don't cover DNS filtering here. It's a different way of blocking ads, with its own advantages and disadvantages. Follow this link to [learn more about DNS filtering](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work).

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## General principle

Filter lists, also called filters, lie at the core of any ad blocker. Filters are literally lists of rules written in a special syntax. Ad blockers can understand this complex syntax. They interpret filtering rules and perform actions on web traffic based on what the rules tell them to do: block specific elements, alter web pages in certain ways, etc.

![How ad blocking works](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Filter lists

To better understand ad blocking, it's important to know the underlying principles of how filters work.

Filtering rules that make up filters are not created automatically. They are developed by filter maintainers, including professionals and volunteers, who use browser developer consoles and other tools (such as the AdGuard's filtering log) to determine which rules will block a particular ad or tracker. This description of the process is very simplistic — some ads are particularly hard to block and require multiple rules, multiple iterations, and the use of complex syntax.

And even when a rule finally gets added to a filter, it doesn't mean that it stays there forever. Ads change, ways to serve the same ads on the same websites change, and the filter rules have to change, too. Sometimes rules become obsolete, a new ad appears, or a new filtering rule is needed to block the same ad. Filters are often maintained by one person, but even for a team of maintainers, it's impossible to constantly monitor the entire web. That's why many ad blockers have tools to help users easily report any filter-related issues they encounter.

![Filter update scheme](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

AdGuard users [have access to a special web reporting tool](https://reports.adguard.com/new_issue.html). Thanks to user complaints, filter developers can focus on correcting their filter lists and not on scouring the Internet for new and old unblocked ads.

Filters can do more than just block ads. There are filters that block tracking, social media widgets, and annoyances, such as cookie notices. Different users may choose different combinations of filters to match their personal preferences. There are websites like [filterlists.com](https://filterlists.com/) that are dedicated to filter lists and have huge databases.

We develop and maintain [our own set of filter lists](../adguard-filters) that can be used with AdGuard or other ad blockers.

## Types of filtering rules

There are many types of filtering rules that serve different purposes. Depending on the ad blocker you use, and especially on your OS, some types of rules may not be supported.

### Basic filtering rules

To be displayed on a web page or in an app, the ad has to be loaded from a server first. To do so, the browser or the app needs to send a web request. The most basic way of preventing an ad from appearing on your screen is to block this request so it never reaches the server, and thus there's no reply.

Basically, all AdGuard Ad Blocker products can block web requests according to the active filter rules. This method is very effective at stopping the ad, but it has some drawbacks. The most obvious one is: whatever place an ad was taking up will be left empty or occupied by an ad leftover.

### Cosmetic filtering rules

Every web page has a Document Object Model (DOM), an HTML document containing the structure and elements of this page. As ads are also page elements, they get recorded in the DOM. Ad blockers can remove parts of the DOM, while filtering rules help them understand which parts are ads and should be removed, and which parts should be left intact.

This method allows you to avoid above-mentioned blank spaces and ad leftovers, as well as perform other more complicated tasks.

### HTML filtering rules

In most cases, it's enough to use the above-mentioned basic and cosmetic rules to filter ads. But when it is necessary to change the HTML code of the page itself before it is loaded, you need filtering rules for HTML content. These rules allow you to specify the HTML elements to be cut out before the browser even loads the page.

These rules are quite complicated and require the ad blocker to be granted certain access rights, so not all platforms support them. Currently, these rules work only in the AdGuard Firefox add-on and in the AdGuard apps for Windows, Mac, and Android.

:::info

There are other types of filtering rules, but they require more advanced technical knowledge to understand how they work. If you are interested, [check out our comprehensive guide on filtering rules in the linked article](../create-own-filters).

:::

## Types of request handling in AdGuard

AdGuard handles requests according to filters, user rules and settings enabled by the user. As a result, a request can be blocked, modified, allowed or, when nothing is done to it, just processed.

Detailed information on how each request of yours has been handled by AdGuard can be found in the *Filtering log* (AdGuard for Windows, AdGuard for Mac, AdGuard Browser Extension) or *Recent activity* (AdGuard for iOS, AdGuard for Android).

Regarding AdGuard filters, you can also check [our filter policy](../filter-policy), which describes in detail what and why each of our filters blocks.

### Examples of blocked requests

AdGuard DNS filter blocks requests to ad domains, such as `ad.doubleclick.net`.

AdGuard Tracking Protection filter blocks tracking requests, such as `youtube.com/youtubei/log_event?`.

### Examples of allowed requests

AdGuard Base filter allows non-ad requests, such as `www.google.com/complete/search?q=`.

Filter unblocking search ads and self-promotion allows requests to search ad-related domains, such as `www.google.com/aclk?`.

Requests to websites that are added by the user to *Allowlist* are allowed.

### Examples of modified requests

Tracking protection feature with protection level set to *High* enables AdGuard URL Tracking filter which modifies requests by removing tracking parameters from them:

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` → `https://www.gog.com/game/spec_ops_the_line`

Please note that *modified* events you see in the Filtering log or Recent activity refer not only to the cases when a request is modified, but also when:

- something on the page is changed (usually by cosmetic rules)
- the response is modified
