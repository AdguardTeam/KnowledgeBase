---
title: User Scripts API
sidebar_position: 8
---

:::info

Este artigo é sobre a extensão do navegador AdGuard, que protege apenas o seu navegador. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true).

:::

When adding a custom filter or user rule, a notification will appear asking you to enable the Developer mode to use these features in the extension.

![Notification \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

Starting with version 5.2, AdGuard Browser Extension uses the User Scripts API. Chrome requires this new API to follow best practices for user safety.

## What is the User Scripts API?

The User Scripts API is a tool that allows extensions to run customized JavaScript scripts on webpages. These are often used to modify or enhance websites in ways that aren’t originally provided by the website itself.

With the shift to Chrome’s Manifest V3, many older methods of injecting scripts are limited or delayed. However, there is an exception for the User Scripts API.

Learn more about the impacts of the MV3 policies in our [blog post](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## How to enable the Developer mode

To use custom filters and JavaScript rules in the _User Rules_ tab, you must set up your browser first. This will give the extension a reliable and secure method of injecting scripts into webpages at the optimal time. Follow the instructions below depending on your Chrome version.

### For Chrome versions prior to 138

You must enable Developer mode for extensions. To do so, open the Chrome menu by clicking the three dots in the upper-right corner, go to _Extensions_ ⭢ _Manage extensions_, and toggle the _Developer mode_ switch.

![Manage Extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### For Chrome version 138 and later

You must enable the _Allow user scripts_ toggle. To do so, open the Chrome menu by clicking the three dots in the upper-right corner, go to _Extensions_ ⭢ _Manage extensions_, go to AdGuard Browser Extension’s _Details_, and toggle the _Allow user scripts_ switch.

![Manage Extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
