---
title: How AdGuard Browser Assistant works on macOS 27+
sidebar_position: 12
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

Due to policy updates in macOS 27, AdGuard may be unable to communicate with its Browser Assistant, which could cause extension-based filtering features to stop working. To establish this connection, AdGuard must place a Native Messaging host manifest within the browser’s application data folder. Previously, AdGuard did this automatically in the background. However, macOS 27 restricts cross-app folder access by default and requires explicit permission. As a result, AdGuard can no longer place the manifest file automatically, which disrupts communication between the app and the extension.

## Recommended solutions

This section covers how to grant AdGuard the required permissions across Chromium- and Gecko-based browsers.

### Step 1: Grant access via Files & Folders

:::note

AdGuard checks folder access **only for your system default browser**. Consequently, the in-app prompts and the _Allow Access…_ button will not appear if the browser is not set as default. In this case, you will need to grant permission manually via macOS _System Settings_.

:::

1. Open _Files & Folders_

   - via AdGuard Setup Assistant upon first launch: on the Browser Assistant installation screen, click _Allow Access…_. You’ll be taken directly to the _Files & Folders_ section
     ![AdGuard Setup Assistant](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant-new.png)
   - via the AdGuard main window:
     - click _Allow access to your browser folder for the Assistant_ at the bottom → _Assistant_ → _Allow Access…_. This prompt only appears if the Assistant was installed at least once and access is currently denied for your default browser. It permanently disappears after the first click. If you don’t see it, use the Preferences option below.
     - or click the gear icon in the top-right corner → _Preferences…_ → _Assistant_ → _Allow Access…_

   |                                                                                      |                                                                                                |
   | :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
   | ![AdGuard popup](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-popup.png) | ![AdGuard settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings-new.png) |

   - via _System Settings_ → _Privacy & Security_ → _Files & Folders_
     ![System Settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/system-settings-new.png)
2. Find _AdGuard_ in the list and click it to expand the dropdown
3. Locate the browser (for example, Chrome or Brave) and turn on the toggle next to it

:::note

A toggle for a specific browser will only appear in this list if the browser is already installed. If your browser, Google Chrome, or Mozilla Firefox is not listed, proceed to Step 2.

:::

### Step 2: If the browser isn’t listed

**Option A: Install Google Chrome or Mozilla Firefox**

Some browsers built on Chromium or Gecko do not create their own dedicated Native Messaging directory. Instead, they share the directory used by Chrome or Firefox. On earlier macOS versions, AdGuard could simply create these folders itself. Starting with macOS 27, macOS does not allow AdGuard to request access to these folders unless the corresponding browser — Google Chrome or Mozilla Firefox — is actually installed on the system.

1. Install Google Chrome or Mozilla Firefox (depending on whether your browser is Chromium- or Gecko-based) and open it at least once — the required Native Messaging folder will become available on the system
2. Open _Files & Folders_ (via the AdGuard main window, AdGuard Setup Assistant, or Mac System Settings, as described in Step 1)
3. Find _AdGuard_ in the list and click it to expand the dropdown
4. Locate Google Chrome or Mozilla Firefox and turn on the toggle next to it. As a result, Browser Assistant will start working in the browser that relies on Chrome’s or Mozilla Firefox’s folder (such as Opera or Zen).

**Option B: Grant Full Disk Access**

:::caution

Granting _Full Disk Access_ is a last-resort measure: we strongly recommend trying the options above first. _Full Disk Access_ is not required for AdGuard in general. Use it only as a workaround for Browser Assistant if the options above did not work and you fully understand what you are doing.

:::

1. Open _System Settings_ → _Privacy & Security_ → _Full Disk Access_
2. Find _AdGuard_ in the list and turn on the toggle
   ![Full Disk Access](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
