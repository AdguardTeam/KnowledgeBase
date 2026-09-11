---
title: How to keep using AdGuard after Chrome removed MV2
sidebar_position: 4
---

This article describes two ways to keep blocking ads: switching to the MV3 version of AdGuard
Browser Extension in Chrome, or continuing with MV2 in a browser that still supports it.

On 31 August 2026, the [Chrome Web Store removed all remaining Manifest V2 (MV2) extensions,
including **AdGuard Ad Blocker MV2**](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html). Chrome disables such extensions and reports them as no longer supported. The MV3 version is not
affected.

:::caution

Keep only one ad blocker enabled in a browser. Two blockers filtering the same traffic cause missed
ads, broken page layouts, and pages that load indefinitely. If the browser has built-in ad blocking,
disable it before installing AdGuard.

:::

## Switching to MV3 in Chrome

MV3 is the current version of AdGuard Browser Extension for Chrome and the only one available from
the Chrome Web Store.

If you installed AdGuard from the main Web Store page and allowed Chrome to update extensions, you
already have MV3 and don’t need to do anything.

If you installed **AdGuard Ad Blocker MV2** from its own Web Store page, Chrome can’t replace it
automatically: the two versions have different extension IDs. To switch to MV3:

1. Install [AdGuard Ad Blocker](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) from the Chrome Web Store.
1. Open `chrome://extensions`, remove **AdGuard Ad Blocker MV2**, and enable the MV3 version.
1. Re-add your custom rules and third-party filters: MV3 doesn’t import them from MV2.
1. Reload open tabs.

MV3 applies most blocking rules through the browser’s declarative engine, which limits the number
of rules and changes how filters update. Before switching, read [AdGuard Browser Extension for Chrome MV3](/kb/adguard-browser-extension/mv3-version/).

## Continuing with MV2 in other browsers

MV2 and MV3 are built from the same codebase and released together, so MV2 keeps receiving
filtering engine updates, filter updates, bug fixes, and security fixes. MV2 ends when a browser
stops running Manifest V2, not when we stop updating it.

### Firefox

Firefox supports MV2 extensions and has no plans to deprecate them. AdGuard for Firefox is built on
MV2 and distributed through Firefox Add-ons, so it installs and updates like any other add-on.

1. Go to the [AdGuard ad blocker add-on page](https://addons.mozilla.org/firefox/addon/adguard-adblocker/).
1. Click *Add to Firefox* and confirm the permissions.

![AdGuard in Firefox *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_firefox.png)

Firefox’s Enhanced Tracking Protection blocks trackers rather than ads and can stay enabled
alongside AdGuard.

### Brave

Brave supports MV2 through its own compatibility mode and hosts the AdGuard build on its backend,
independent of the Chrome Web Store. Brave installs and updates it automatically.

1. Go to `brave://settings/extensions/v2`.
1. Find **AdGuard Ad Blocker** and enable it.

![MV2 extensions in Brave settings *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_brave.png)

Brave describes MV2 support as best-effort rather than a permanent guarantee. Brave Shields also
blocks ads — turn it off if AdGuard should do the filtering.

### ungoogled-chromium, Helium, and other Chromium builds

These browsers keep MV2 support but have no Chrome Web Store integration, so the extension is
installed manually:

- **ungoogled-chromium** is a modified Chromium that patches MV2 support back in.
- **Helium** is an open-source Chromium-based browser that supports Chromium extensions and can
  import the ones already installed in your previous browser. It blocks ads and trackers by default
  — disable that if AdGuard should do the filtering.
- **Portable Chromium builds** that kept MV2 use the same steps. Check the build's documentation,
  as some maintainers removed MV2 support.

1. Download `chrome.zip` from [AdGuard Browser Extension releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) and unpack it to a folder you won’t move or delete.
1. Open `chrome://extensions`.
1. Turn on *Developer mode*.
1. Click *Load unpacked* and select the extension folder.

![Developer mode *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

![Load unpacked *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

:::note

An unpacked extension is loaded from the folder you selected and stops working if that folder is
moved or deleted. Unpacked extensions don’t update automatically: to get a new version, download
and load the build again.

:::

- **ungoogled-chromium** is a modified Chromium that patches MV2 support back in.
- **Helium** is an open-source Chromium-based browser that supports Chromium extensions and can
  import the ones already installed in your previous browser. It blocks ads and trackers by default
  — disable that if AdGuard should do the filtering.
- **Portable Chromium builds** that kept MV2 use the same steps. Check the build’s documentation,
  as some maintainers removed MV2 support.

For the full *Developer mode* → *Load unpacked* flow, see the *How to install unpacked in the
browser* section in [How to debug rules in AdGuard for Chrome MV3](/kb/adguard-browser-extension/solving-problems/debug-rules/).

### Microsoft Edge

The MV2 build is still available from Edge Add-ons, but Microsoft is phasing Manifest V2 out:
warnings started appearing in August 2026, and the transition for consumer Edge is expected to
finish by the end of 2026. Managed enterprise installations get more time. Treat Edge as a
temporary option. See [Edge is phasing out the extension platform ad blockers relied on](https://adguard.com/en/blog/edge-phasing-out-mv2-ad-blockers.html).

## System-wide AdGuard apps

The AdGuard app for [Windows](https://adguard.com/en/adguard-windows/overview.html), [Mac](https://adguard.com/en/adguard-mac/overview.html), [Android](https://adguard.com/en/adguard-android/overview.html), [iOS](https://adguard.com/en/adguard-ios/overview.html), and [Linux](https://adguard.com/en/adguard-linux/overview.html) filters traffic in all browsers and other applications, regardless of manifest versions.
