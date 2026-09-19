---
title: How AdGuard Browser Assistant works on macOS 27+
sidebar_position: 12
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Due to policy updates in macOS 27, AdGuard may be unable to communicate with its Browser Assistant, which could cause extension-based filtering features to stop working. To establish this connection, AdGuard must place a Native Messaging host manifest within the browser’s application data folder. Previously, AdGuard did this automatically in the background. However, macOS 27 restricts cross-app folder access by default and requires explicit permission. As a result, AdGuard can no longer place the manifest file automatically, which disrupts communication between the app and the extension.

## Recommended solutions

Since this issue can affect any Chromium-based browser, this section covers how to grant AdGuard the required permissions regardless of which browser is used.

### Step 1: Grant access via Files & Folders

1. Open *Files & Folders*
    - via AdGuard settings: click the gear icon on the app’s main window → *Preferences…* → the *Assistant* tab → *Open Files & Folders*
    ![AdGuard settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings.png)
    - via AdGuard Setup assistant: on the Browser Assistant installation screen, click *Open Files & Folders* — this button appears if AdGuard doesn’t have access to the browser’s folder
    ![AdGuard Setup assistant](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant.png)
    - via *System Settings* → *Privacy & Security*
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
1. Open *Files & Folders* (via AdGuard settings, AdGuard Setup assistant or System Settings as described in Step 1)
1. Find *AdGuard* in the list and click it to expand the dropdown
1. Locate Google Chrome and turn on the toggle next to it. As a result, Browser Assistant will start working in the browser that relies on Chrome's folder (such as Opera).

**Option B: Grant Full Disk Access**

1. Open *System Settings* → *Privacy & Security* → *Full Disk Access*
1. Find *AdGuard* in the list and turn on the toggle
![Full Disk Access](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
