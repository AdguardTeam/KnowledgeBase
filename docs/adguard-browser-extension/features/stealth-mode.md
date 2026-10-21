---
title: Tracking protection (formerly Stealth Mode)
sidebar_position: 3
---

:::info

This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The purpose of *Tracking protection* is to safeguard your sensitive personal data from online trackers and fraudsters. There are slight differences in the tracking protection features between Chromium-based browsers, which support MV3, and non-Chromium browsers, which support MV2.

*Tracking protection* in Chromium-based browsers
![Tracking protection in Chromium-based browsers *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

*Tracking protection* in non-Chromium browsers
![Tracking protection in non-Chromium browsers *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv2.png)

*Tracking protection* features prevent websites from seeing the search query you used to find them on the Internet, automatically delete third-party and website cookies, and more. A [separate article](/general/stealth-mode) is devoted to all these features.

:::note

Browser extensions are limited to a specific browser and are subject to its technical restrictions. Therefore, they cannot offer all the tracking protection features available in full-fledged ad-blocking apps.

:::

:::caution

In AdGuard Browser Extension, the *Block WebRTC* option works globally — it either blocks or allows WebRTC for all websites. It cannot be controlled on a per-site basis. Exception rules like `@@||example.com^$stealth=webrtc` have no effect in the browser extension because the `webrtc` option is not among the [supported `$stealth` modifier options](/general/ad-filtering/create-own-filters#stealth-modifier). If you need per-site WebRTC control, use the full-fledged AdGuard app for Windows, Mac, or Android.

:::

## Block fingerprinting {#fingerprinting}

Starting with version 5.6, the *General* section of *Tracking protection* has the *Block fingerprinting* option. It slightly changes the images that websites read from a canvas, so websites can’t use them to identify your browser and device. A [separate article](/general/stealth-mode#fingerprinting) describes how it works.

The option is off by default. It works only while AdGuard protection and *Tracking protection* are on. Changes to the option, the allowlist, and user rules apply to pages you open or reload afterwards.

*Block fingerprinting* is available in all browsers that AdGuard Browser Extension supports, including Firefox for Android. How early the protection starts depends on the browser:

- In the [MV3 version](/adguard-browser-extension/mv3-version) of the extension and in Firefox 128 or later, the protection starts before the website’s own scripts.
- In the MV2 version for Chromium-based browsers, the protection may start too late on some pages, so a website can read the original image.
- In Firefox versions earlier than 128, the protection starts before the website’s own scripts, except on websites with a strict Content Security Policy: there it may start too late or not at all.

In the MV3 version, *Block fingerprinting* needs the same browser setting as custom filters: *Allow user scripts*, or *Developer mode* in Chrome versions prior to 138. While the option is on and the setting is off, AdGuard shows a reminder under the option. Learn [how to enable the setting](/adguard-browser-extension/user-scripts-api). Then return to the *Tracking protection* page in AdGuard settings: you don’t need to turn the option off and on again.

In private windows, the protection works only if you allow AdGuard to run there.

The protection is off on websites in the [allowlist](/adguard-browser-extension/features/filters#allowlist). With *Invert allowlist* on, it works only on websites from the list. To turn off only *Block fingerprinting* for a website and keep other *Tracking protection* features, add a user rule like `@@||example.com^$stealth=fingerprinting`. Learn more about the [`$stealth` modifier](/general/ad-filtering/create-own-filters#stealth-modifier) and its [limitations](/general/ad-filtering/create-own-filters#stealth-modifier-limitations).

In Firefox, a frame from another website, such as an embedded widget, may not know which page it is on: always in versions earlier than 148, and in later versions when the page hides its address from the frame. Such a frame gets the same result on every website that embeds it, and the allowlist does not turn off the protection in it. To turn off the protection in such a frame, add a rule for the frame’s domain, for example `@@||widget.example.com^$stealth=fingerprinting`.
