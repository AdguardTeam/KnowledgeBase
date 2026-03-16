---
title: Safari extensions
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## What Safari extensions are

Safari extensions are small software programs that add functionality to the Safari web browser. They allow users to customize and enhance their browsing experience by adding features that are not natively built into the browser. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## How it works

To block ads, trackers, and annoyances on websites, AdGuard uses filtering rules. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Custom
- AdGuard Other

Each content-blocking extension can include up to 150,000 active filtering rules. The number of rules within most filter groups does not surpass 150,000. However, if you activate too many language-specific or custom filters, you might exceed the limit. In such cases, random rules that are over the limit will be automatically disabled, which may lead to incorrect blocking. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

More on each extension below.

## Content-blocking extensions

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. This extension focuses on comprehensive ad blocking and includes filters for ads in specific languages.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. It blocks tracking mechanisms and ensures that your browsing activity remains private.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. This extension identifies and blocks potentially harmful elements, safeguarding users from malicious content.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard for Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## How to manage Safari extensions

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Why AdGuard for Safari requires permission

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Access to browsing history is required to check the protection status on websites and determine which advanced rules should be applied

We do not use this data for any other purpose or share it with anyone. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
