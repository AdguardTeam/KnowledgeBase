---
title: Tracking protection (formerly Stealth Mode)
sidebar_position: 3
---

:::info

Ez a cikk az AdGuard böngészőbővítményről szól, amely csak a böngészőt védi. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The purpose of _Tracking protection_ is to safeguard your sensitive personal data from online trackers and fraudsters. There are slight differences in the tracking protection features between Chromium-based browsers, which support MV3, and non-Chromium browsers, which support MV2.

![Tracking protection in Chromium-based browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv3_trackingProtection.png)

_Tracking protection_ in Chromium-based browsers

![Tracking protection in non-Chromium browsers \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_mv2_trackingProtection.png)

_Tracking protection_ in non-Chromium browsers

_Tracking protection_ features prevent websites from seeing the search query you used to find them on the Internet, automatically delete third-party and website cookies, and more. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Browser extensions are limited to a specific browser and are subject to its technical restrictions. Therefore, they cannot offer all the tracking protection features available in full-fledged ad-blocking apps.

:::

:::caution

In AdGuard Browser Extension, the _Block WebRTC_ option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::
