---
title: How AdGuard Browser Assistant works on macOS 27+
sidebar_position: 12
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Due to policy updates in macOS 27, AdGuard may be unable to communicate with its Browser Assistant, which could cause extension-based filtering features to stop working. To establish this connection, AdGuard must place a Native Messaging host manifest within the browser’s application data folder. Previously, AdGuard did this automatically in the background. However, macOS 27 restricts cross-app folder access by default and requires explicit permission. As a result, AdGuard can no longer place the manifest file automatically, which disrupts communication between the app and the extension.

## Recommended solutions

Since this issue can affect any Chromium- or Gecko-based browser, this section covers how to grant AdGuard the required permissions regardless of which browser is used.

### Step 1: Grant access via Files & Folders

1. Open *Files & Folders*
    - via AdGuard Setup Assistant upon first launch: on the Browser Assistant installation screen, click *Allow Access...* — this button appears if AdGuard doesn’t have access to the browser’s folder. You’ll be taken directly to the *Files & Folders* section
    ![AdGuard Setup Assistant](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant-new.png)
    - via the AdGuard main window:
        - click *Allow access to your browser folder for the Assistant* at the bottom → *Assistant* → *Allow Access...*
        - or click the gear icon in the top-right corner → *Preferences…* → *Assistant* → *Allow Access...*

    | | |
    | :-: | :-: |
    | ![AdGuard popup *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-popup.png) | ![AdGuard settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings-new.png) |

    - via *System Settings* → *Privacy & Security* → *Files & Folders*
    ![System Settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/system-settings-new.png)
1. Find *AdGuard* in the list and click it to expand the dropdown
1. Locate the browser (for example, Chrome or Brave) and turn on the toggle next to it

:::note

A toggle for a specific browser will only appear in this list if the browser is already installed. If your browser or Google Chrome is not listed, proceed to Step 2.

:::

### Step 2: If the browser isn't listed

**Option A: Install Google Chrome**

Some browsers, like Opera, rely on the Native Messaging folder that belongs to Google Chrome instead of using a folder of their own. On earlier macOS versions, AdGuard could simply create this folder itself. Starting with macOS 27, however, macOS does not allow AdGuard to request access to Chrome's folder unless Chrome is actually installed. Installing Chrome allows AdGuard to request the required permission.

1. Install Google Chrome and open it at least once — the required Native Messaging folder will become available on the system
1. Open *Files & Folders* (via the AdGuard main window, AdGuard Setup Assistant, or Mac System Settings, as described in Step 1)
1. Find *AdGuard* in the list and click it to expand the dropdown
1. Locate Google Chrome and turn on the toggle next to it. As a result, Browser Assistant will start working in the browser that relies on Chrome's folder (such as Opera).

**Option B: Grant Full Disk Access**

:::caution

Granting *Full Disk Access* is a last-resort measure: we strongly recommend trying the options above first. You should only enable it only if you fully understand what you are doing. *Full Disk Access* is not required for AdGuard to work properly.

:::

1. Open *System Settings* → *Privacy & Security* → *Full Disk Access*
1. Find *AdGuard* in the list and turn on the toggle
![Full Disk Access](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
