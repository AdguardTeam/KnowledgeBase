---
title: User Scripts API
sidebar_position: 8
---

:::info

This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true).

:::

When adding a custom filter or user rule, a notification will appear asking you to enable the Developer mode to use these features in the extension.

![Notification *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

Starting with version 5.2, AdGuard Browser Extension uses the User Scripts API. Chrome requires this new API to follow best practices for user safety.

## What is the User Scripts API?

The User Scripts API is a tool that allows extensions to run customized JavaScript scripts on webpages. These are often used to modify or enhance websites in ways that aren’t originally provided by the website itself.

With the shift to Chrome’s Manifest V3, many older methods of injecting scripts are limited or delayed. However, there is an exception for the User Scripts API.

## How to enable the Developer mode

To use custom filters and JavaScript rules in the *User Rules* tab, you must set up your browser first. This will give the extension a reliable and secure method of injecting scripts into webpages at the optimal time. Follow the instructions below depending on your Chrome version.

### For Chrome versions prior to 138

You must enable the Developer mode for extensions. To do it, open the Chrome menu by clicking the three dots in the upper-right corner, go to *Extensions* ⭢ *Manage Exetensions*. Toggle the "Developer mode" switch in the upper-right corner:

![Manage Extensions *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### For Chrome version 138 and later

You must enable the *Allow user scripts* toggle. To do so, open the Chrome menu by clicking the three dots in the upper-right corner, go to *Extensions* ⭢ *Manage extensions*, and toggle the *Allow user scripts* switch.

![Manage Extensions *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
