---
title: Features overview
sidebar_position: 1
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

AdGuard provides a range of software products that block ads and trackers on different platforms. One of the most popular AdGuard products is a free extension that works in five popular browsers: Chrome, Firefox, Edge, Opera, and Yandex Browser. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/overview) and [AdGuard for Mac](/adguard-for-mac/overview).

![AdGuard Browser Extension for Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Availability {#br-extension}

[AdGuard Browser Extension](https://adguard.com/adguard-browser-extension/overview.html) is available for most major browsers. You can easily find it in your browser’s online store or on our official website.

![Available for most popular browsers *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

We have a standalone extension for Safari. Since the release of [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html), most of the ad-blocking extensions have experienced huge issues and many of them stopped functioning. We had to develop a [separate extension for Safari](/adguard-for-safari/overview) that has some differences in comparison with the extension described in this article.

:::

**Do not forget that the functionality of each extension is strictly limited by the browser’s capabilities.** So if you want to get full-fledged protection, consider installing a standalone program for your computer. There's [a reason why](#comparison).

## Ad blocking {#adblocker}

Blocking ads is clearly the key functionality of any ad blocker, and AdGuard is not an exception. The extension will successfully block ads on any page in your browser. Ad blocking is based on so-called filter lists, or simply [filters](/general/ad-filtering/how-ad-blocking-works). Filters can be enabled or disabled in your extension's settings. You can customize ad blocking by activating specific filters.

### Filters {#filters}

In essence, filter lists are sets of rules written in a special language. Your ad blocker interpretes the rules and implements them. As a result, you stop seeing ads on your webpages.

![Filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

All filters are grouped according to their role. For example, there are categories for ad-blocking filters, privacy protection filters, social media-related filters, etc. You can enable either individual filters or the entire group at once.

![Ad blocking filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Custom filters {#custom}

While the features of other filter groups are more or less predictable, there is a group called *Custom* that may raise additional questions.

![Custom filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

In this tab, you can add filters that are not present in the extension by default. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Moreover, you can create and add your own filters. In fact, you can build any set of filters and customize ad blocking the way you like.

To add a filter, just click *Add custom filter*, enter the URL or the file path of the filter you want to be added and click *Next*.

![Add a custom filter *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### User rules {#user-rules}

*User rules* is another tool that helps you customize the blocking of ads.

![User rules *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

There are several ways to add new rules. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

You can import a ready-to-use filter list from a text file as well. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the [Custom filters](#custom) tab.

Besides, you can export your own filtering rules. This option is good for transferring your list of rules between browsers or devices.

When you add a website to the Allowlist (more on that [below](#allowlist)) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in *User rules*.

### Allowlist {#allowlist}

The *allowlist* is used to exclude certain websites from filtering. Blocking rules are not applied to the websites on the list.

![Allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The *allowlist* can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the *Invert allowlist* option.

![Invert allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

You can also import and export existing allowlists. It is useful, for instance, if you want to apply the same allowing rules in each of your browsers.

## Stealth Mode {#stealth-mode}

*Stealth Mode* aims to ensure the protection of sensitive personal data from online trackers and fraudsters.

![Stealth Mode *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

In Stealth Mode, you can prevent a website from seeing the search queries from you used to find it on the Internet, automatically delete third-party and website’s own cookies, etc. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Some of the *Stealth Mode* options available in full-fledged apps are not present in the browser extensions due to technical restrictions.

:::

## Other features and options {#other}

Apart from the large key modules of AdGuard Browser Extension, there are several more specific features that can be configured in the *General* and *Additional settings* tabs of the extension settings.

### Generali {#general}

In the *General* tab, you can allow search ads and the [self-promotion of websites](/general/ad-filtering/search-ads), enable the automatic activation of language-specific filters, indicate the filters update interval, etc.

![General *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Besides, here you can enable [*Phishing and malware protection*](/general/browsing-security).

You can save your settings configuration by clicking the *Export settings* button. The settings will be saved as a .json file. To upload the previously saved settings configuration, use the *Import settings* function. You can even use it to quickly switch between different settings profiles or even to transfer settings configurations between different browsers.

### Additional settings {#misc}

The *Additional settings* section contains a range of various settings that are related to the ad blocking process and application usability.

![Additional settings *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

From this tab, you can activate optimized filters, enable notifications about extension updates, open the *Filtering log*, or clear the statistics of blocked ads and trackers.

Besides, you can opt to help us with the development of filters by sending the statistics on applied rules: which ones are triggered, on which websites, and how often. This option is disabled by default as we do not collect user data without consent. Yet, if you enable it, all data will be strictly anonymized.

### Info {#about}

In the *About* section, you can find infos about the current version, links to the EULA and Privacy policy, and to the repository of the Browser extension on GitHub.

![About *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Extension’s main menu {#main-menu}

The extension's main page can be accessed by clicking on the extension's icon on the toolbar of your browser.

![Main menu *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

On the main page, you can hide any element on any page manually (a corresponding rule will be added to the *User rules*), open the *Filtering log* to view the complete information about your browser's traffic and block requests on the go, or look at a website’s security report. Besides, you can submit a complaint about any website (for example, if there are missed ads on the page, our filter engineers will review the report and fix the problem) and see the statistics on applied blocking rules.

All web requests made by the browser are displayed in the *Filtering log*, along with detailed information about each request. The *Filtering log* makes it easy, for example, to monitor requests blocked by AdGuard Browser Extension. Besides, it allows you to block any request or add a previously blocked request to Allowlist in two clicks. The *Filtering log* also offers you a wide variety of options for sorting web requests, which can be helpful when creating your own filtering rules. You can open the *Filtering log* by selecting the corresponding item in the main menu, or from the settings page (in the "Additional settings" tab).

By clicking the icons in the top right corner of the extension's main menu, you can open the extension settings or pause the protection.

## AdGuard Browser Extension vs. standalone apps {#comparison}

The main advantage of AdGuard standalone programs over browser extensions is that the programs can block ads in every browser and in almost all apps. You may use different browsers at the same time, the app will filter ads and online threats in all of them equally well.

The second difference is that the possibilities of extension-based ad blockers are strictly limited by browser guidelines. The browser extensions have to conform to the policies of the browsers, where ad blocking might be restricted. Thus, some types of filtering rules are not supported by the extensions. The functionality of the desktop apps is not limited, so they have a better filtering quality.

Whereas AdGuard Browser Extension is free and easy to install, and has filters to block ads and fight online threats, the full-fledged apps are more powerful and have a list of advanced features. See all the differences in the comparative table below.

![Extension vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – within browser restrictions and only in the browser where it is installed;

`2` – the extension is unable to detect requests from other extensions. If a malicious or tracking extension sends a request to its server to show you ads or track your activity, AdGuard Browser Extension will not be able to block that request;

`3` – not all types of ads and threats can be blocked by browser extensions due to certain browser limitations. Some elements may get to the page and slow down the loading process. Besides, unlike browser-based ad blockers, the AdGuard app blocks ads before they are loaded to the browser. This saves traffic and speeds up page loading.
