---
title: Filters
sidebar_position: 2
---

:::info

This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

- [Custom filters](#custom-filters)
- [User rules](#user-rules)
- [Allowlist](#allowlist)

Blocking ads is the core functionality of any ad blocker, and AdGuard Browser Extension is no exception. Ad blocking is based on filters — sets of rules written in a special language. These rules define which page elements should be blocked and which should not. AdGuard interprets these rules and modifies web requests accordingly. As a result, you stop seeing ads on your webpages.

![Filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filters.png)

All filters are grouped by category based on their role:

- Ad blocking: Blocks various types of advertisements
- Privacy: Blocks online trackers and analytical systems to protect your data
- Social widgets: Blocks social media elements like ‘Like’ and ‘Share’ buttons
- Annoyances: Blocks irritating web elements, such as cookie notices, third-party widgets, or in-page popups
- Security: Blocks requests to phishing and malicious websites
- Other: Contains miscellaneous filters that do not fit into the main categories
- Language-specific: Blocks ads on websites in specific languages
- Custom: Allows you to add your own filters from a local file or URL

You can enable either individual filters or entire groups at once.

![Security filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Custom filters {#custom-filters}

While the features of other filter groups are more or less self-explanatory, there is a group called *Custom* that may raise additional questions.

![Custom filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/custom_filters.png)

In this tab, you can add filters that are not included in the extension by default. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Moreover, you can create and add your own filters. In fact, you can build any set of filters and customize ad blocking the way you like.

To add a filter, just click *Add custom filter*, enter the URL or the file path of the filter you want to be added and click *Next*.

![Add a custom filter *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_filter.png)

Custom filters update independently, keeping your protection effective and up to date without requiring extension updates.

## User rules {#user-rules}

*User rules* is another tool that helps you customize the blocking of ads.

![User rules *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/user_rules.png)

There are several ways to add new rules. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

You can import a ready-to-use filter list from a text file as well. **Make sure that different rules are separated by line breaks.**

:::note

Importing a ready-to-use filter list is better done in the *Custom filters* tab.

:::

You can export your own filtering rules. This option is good for transferring your list of rules between browsers or devices.

When you add a website to the *Allowlist* or use the Assistant tool to hide an element on a page, the corresponding rule is automatically saved in *User rules*.

## Allowlist {#allowlist}

The *Allowlist* is used to exclude specific websites from filtering. None of the blocking rules will apply to the websites on this list.

![Allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allowlist.png)

*Allowlist* can also be inverted, allowing you to unblock ads everywhere except on the websites added to this list. To do this, go to *Additional settings* and enable  *Invert Allowlist*. Before it activates, a confirmation dialog will appear to explain how it works and prevent accidental activation.

![Invert allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/invert_allowlist_dialog.png)

You can also import and export existing allowlists. It is useful if you want to apply the same rules across all your browsers.
