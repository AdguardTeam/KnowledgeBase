---
title: Filters
sidebar_position: 1
---

:::info

This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. As a result, you stop seeing ads on your webpages.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

All filters are grouped according to their role. For example, there are categories for ad-blocking filters, privacy protection filters, social media-related filters, etc. You can enable either individual filters or the entire group at once.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Custom filters

While the features of other filter groups are more or less self-explanatory, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

In this tab, you can add filters that are not present in the extension by default. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Moreover, you can create and add your own filters. In fact, you can build any set of filters and customize ad blocking the way you like.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

There are several ways to add new rules. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

You can import a ready-to-use filter list from a text file as well. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Besides, you can export your own filtering rules. This option is good for transferring your list of rules between browsers or devices.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Allowlist

The _allowlist_ is used to exclude certain websites from filtering. Blocking rules are not applied to the websites on the list.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

You can also import and export existing allowlists. It is useful, for instance, if you want to apply the same allowing rules in each of your browsers.
