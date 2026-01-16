---
title: Extensões
sidebar_position: 7
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

AdGuard can extend website functionality by acting as a [userscript manager](/general/extensions.md). This allows you to add your own scripts as well as manage existing ones.

![Extensions](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/extensions.png)

## Automatically detect userscripts

When this option is enabled, AdGuard automatically notices when your browser requests a userscript and offers to install it. If you prefer, you can also download and install userscripts manually.

## Pre-installed userscripts

AdGuard comes with four pre-installed userscripts:

- AdGuard Assistent (Beta)
- AdGuard Extra
- AdGuard Popup blocker
- Web of Trust

### AdGuard Assistant (Beta)

AdGuard Assistant is the legacy version of Assistant, which you can use if the [new Assistant](/adguard-for-windows/browser-assistant.md) is not available for your browser. As the name suggests, it helps you manage basic AdGuard settings directly from your browser without opening the app.

AdGuard Assistant works with all browsers compatible with Microsoft Windows. It will not appear on websites excluded from filtering or on certain pages where it could cause display issues.

### AdGuard Extra

AdGuard Extra is a custom extension created to fight ad-blocker circumvention and ad reinjection methods used by websites. Such techniques are becoming more common as advertisers try to bypass ad blockers.

AdGuard Extra works by modifying the way pages are loaded, making it more difficult for websites to bypass ad blockers using these advanced methods.

### AdGuard Popup Blocker (Beta)

This extension stops unwanted pop-up windows from opening while you browse. Some popups can be useful — for example, settings for website management or extra reference information that appears after clicking a link. If needed, you can turn off the Popup Blocker.

This extension does not work on the allowlisted websites.

### Web of Trust (Beta)

Web of Trust lets you see the reputation of websites based on user ratings. Websites are reviewed according to several criteria, including trust and security.

This extension is off by default. Keep in mind that it is developed by a third party, not AdGuard.
