---
title: 浏览器扩展
sidebar_position: 7
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

AdGuard 可作为[用户脚本管理器](/general/extensions.md)，用于扩展网站功能。 This allows you to add your own scripts as well as manage existing ones.

![Extensions](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/extensions.png)

## Automatically detect userscripts

When this option is enabled, AdGuard automatically notices when your browser requests a userscript and offers to install it. If you prefer, you can also download and install userscripts manually.

## Pre-installed userscripts

AdGuard comes with four pre-installed userscripts:

- AdGuard Assistant (Beta)
- AdGuard Extra (Beta)
- AdGuard Popup blocker (Beta)
- Web of Trust (Beta)

### AdGuard Assistant (Beta)

AdGuard 助手是旧版助手，当[新版助手](/adguard-for-windows/browser-assistant.md)不适用于您的浏览器时，可使用此版本。 As the name suggests, it helps you manage basic AdGuard settings directly from your browser without opening the app.

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
