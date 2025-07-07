---
title: User Scripts API
sidebar_position: 8
---

:::info

This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true).

:::

When adding a custom filter or user rule, a notification will appear asking you to enable developer mode to use these features in the extension:

![Notification *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/dev-mode-ext.png)

This is because, starting with version 5.2, AdGuard Browser Extension uses the User Scripts API . In other words, the extension now uses script-based rules.

## What is the User Scripts API?

The User Scripts API is a set of browser-provided functions and capabilities that allow extensions to run custom JavaScript scripts on web pages. These are often used to modify or enhance websites in ways that aren’t originally provided by the website itself.

With the shift to Chrome’s Manifest V3, many older methods of injecting scripts are limited or delayed. However, there is an exception for the User Scripts API.

## What happens when you enable the Developer mode

You must either enable Developer mode (for Chrome versions prior to 138) or the *Allow User Scripts* toggle (for Chrome version 138 and later). Doing so gives the extension a reliable and secure method of injecting scripts into web pages at the optimal time. This allows you to use custom filters and JavaScript rules in *User Rules*.
