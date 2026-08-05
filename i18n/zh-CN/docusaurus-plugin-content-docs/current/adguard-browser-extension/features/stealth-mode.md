---
title: 跟踪保护（隐身模式）
sidebar_position: 3
---

:::info

这篇文章是关于 AdGuard 浏览器扩展，它只能保护用户的浏览器。 要全面保护设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

「跟踪防护」的目的是保护您的敏感个人数据免受在线跟踪器和欺诈者的侵害。 基于 Chromium（支持 MV3）和非 Chromium（支持 MV2）的浏览器在跟踪防护功能上存在细微差异。

_Tracking protection_ in Chromium-based browsers
![Tracking protection in Chromium-based browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

_Tracking protection_ in non-Chromium browsers
![Tracking protection in non-Chromium browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv2.png)

_Tracking protection_ features prevent websites from seeing the search query you used to find them on the Internet, automatically delete third-party and website cookies, and more. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Browser extensions are limited to a specific browser and are subject to its technical restrictions. Therefore, they cannot offer all the tracking protection features available in full-fledged ad-blocking apps.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
