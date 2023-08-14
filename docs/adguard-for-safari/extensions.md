---
title: Safari extensions
sidebar_position: 3
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## What Safari extensions are

Safari extensions are small software programs that add functionality to the Safari web browser. They allow users to customize and enhance their browsing experience by adding features that are not natively built into the browser. AdGuard for Safari uses extensions primarily to apply filtering rules on websites opened in Safari.

## How it works

To block ads, trackers, and annoyances on websites, AdGuard uses filtering rules. The rules from AdGuard's and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

– AdGuard General
– AdGuard Privacy
– AdGuard Social
– AdGuard Security
– AdGuard Other

Each content-blocking extension can include up to 150,000 active filtering rules. The number of rules within most filter groups does not surpass 150,000. However, if you activate too many language-specific or custom filters, you might exceed the limit. In such cases, random rules that are over the limit will be automatically disabled, which may lead to incorrect blocking. **We strongly recommend activating only the filters you need**.

There are also two extensions responsible for other features:

– *AdGuard Safari Icon* enables AdGuard's icon next to the search bar in Safari
– *AdGuard Advanced Blocking* allows using advanced rules to block complex ads

![Safari extensions](https://uploads.adguard.org/safari_extensions.png)

More on each extension below.

## Content-blocking extensions

*AdGuard General* applies rules from filters that you can find in *Filters* → *Ad blocking* and *Filters* → *Language-specific*. This extension focuses on comprehensive ad blocking and includes filters for ads in specific languages.

*AdGuard Privacy* applies rules from filters located in *Filters* → *Privacy*. It blocks tracking mechanisms and ensures that your browsing activity remains private.

*AdGuard Social* applies rules from filters that can be found in *Filters* → *Social Widgets* and *Filters* → *Annoyances*. It blocks popups, social media buttons, online assistant windows, and other elements on web pages that you might find annoying.

*AdGuard Security* applies rules from filters under *Filters* → *Security*. This extension identifies and blocks potentially harmful elements, safeguarding users from malicious content.

*AdGuard Other* applies rules from filters that that don't fall under the above-mentioned categories and that are located in *Filters* → *Other*: *Filter unblocking search ads and self-promotion*, *AdGuard DNS filter*, and *AdGuard Experimental filter*.

*AdGuard Custom* applies rules from filters that you add on your own to *Custom filters*.

User rules and allowlist rules are included into every extension.

## Other extensions

*AdGuard Safari Icon* enables the AdGuard icon next to the search bar. It's useful if you want to quickly set up protection on a particular website or block ads manually.

*AdGuard Advanced blocking* contains advanced rules that aren't converted into the format supported by Safari. This includes CSS rules, CSS selectors, and scriptlets that allow AdGuard to block complex ads — for example, on YouTube.

## How to manage Safari extensions

1. Open Safari and click *Safari* in the upper left corner of the screen to expand the menu.
    ![Safari settings *mobile](https://cdn.adtidy.org/blog/new/sxaqgfsafari_settings.png)
1. Click *Preferences...*
1. Select *Extensions*.
    ![Extensions tab](https://cdn.adtidy.org/blog/new/ocofdextensions_tab.png)

## Why some extensions require permissions

When enabling some Safari extensions, you might notice that they ask for **access to web page content** and **access to browsing history**. Here's why AdGuard for Safari needs them:

– Access to web page content is required for manual ad blocking and advanced blocking rules to work correctly
– Access to browsing history is required to check the protection status on websites and determine which advanced rules should be applied

We do not use this data for any other person or share it with anyone. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
