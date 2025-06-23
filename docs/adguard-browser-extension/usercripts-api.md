---
title: User Scripts API
sidebar_position: 8
---

:::info

This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

When adding a custom flter or a user rule, you will encounter a notification message asking you to turn on the developer mode to use these features on the extension: 

![Notifcation *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/dev-mode-ext.png)

This is because, from v5.2, AdGuard Browser Extension has migrated to the User Scripts API. In other words, the extension now uses script-based rules.

## What is the User Scripts API

The User Scripts API is a set of browser-provided functions and capabilities that allow extensions to run custom JavaScript scripts on web pages. These are often used to modify or enhance websites in ways that aren’t originally provided by the website itself.

With the shift to Chrome’s Manifest V3, many older methods of injecting scripts are limited or delayed. However, there is an exception for the User Scripts API.

## What happens when you enable the developer mode

You must enable either the developer mode (for Chrome versions prior to 138) or the *Allow User Scripts* toggle (for Chrome version 138 and more recent ones). When you do it, you give the extension a reliable and secure method of injecting scripts into web pages at an optimal time. This allows you to use **custom filters** and JavaScript rules in **User rules**.
