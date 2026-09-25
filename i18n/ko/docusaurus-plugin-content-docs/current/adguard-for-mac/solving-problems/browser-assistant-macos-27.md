---
title: How AdGuard Browser Assistant works on macOS 27+
sidebar_position: 12
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

Due to policy updates in macOS 27, AdGuard may be unable to communicate with its Browser Assistant, which could cause extension-based filtering features to stop working. To establish this connection, AdGuard must place a Native Messaging host manifest within the browser’s application data folder. Previously, AdGuard did this automatically in the background. However, macOS 27 restricts cross-app folder access by default and requires explicit permission. As a result, AdGuard can no longer place the manifest file automatically, which disrupts communication between the app and the extension.

## Recommended solutions

Since this issue can affect any Chromium-based browser, this section covers how to grant AdGuard the required permissions regardless of which browser is used.

### Step 1: Grant access via Files & Folders

1. Open _Files & Folders_
   - via AdGuard settings: click the gear icon on the app’s main window → _Preferences…_ → the _Assistant_ tab → _Open Files & Folders_
     ![AdGuard settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings.png)
   - via AdGuard Setup Assistant: on the Browser Assistant installation screen, click _Open Files & Folders_ — this button appears if AdGuard doesn’t have access to the browser’s folder
     ![AdGuard Setup Assistant](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant.png)
   - via _System Settings_ → _Privacy & Security_ → _Files & Folders_
     ![System Settings](https://cdn.adtidy.org/content/kb/ad_blocker/mac/system-settings-new.png)
2. Find _AdGuard_ in the list and click it to expand the dropdown
3. Locate the browser (for example, Chrome or Brave) and turn on the toggle next to it

:::note

A toggle for a specific browser will only appear in this list if the browser is already installed. If your browser or Google Chrome is not listed, proceed to Step 2.

:::

### Step 2: If the browser isn't listed

**Option A: Install Google Chrome**

Some browsers, like Opera, rely on the Native Messaging folder that belongs to Google Chrome instead of using a folder of their own. On earlier macOS versions, AdGuard could simply create this folder itself. Starting with macOS 27, however, macOS does not allow AdGuard to request access to Chrome's folder unless Chrome is actually installed. Installing Chrome allows AdGuard to request the required permission.

1. Install Google Chrome and open it at least once — the required Native Messaging folder will become available on the system
2. Open _Files & Folders_ (via the AdGuard settings, AdGuard Setup Assistant, or Mac System Settings, as described in Step 1)
3. Find _AdGuard_ in the list and click it to expand the dropdown
4. Locate Google Chrome and turn on the toggle next to it. As a result, Browser Assistant will start working in the browser that relies on Chrome's folder (such as Opera).

**Option B: Grant Full Disk Access**

1. Open _System Settings_ → _Privacy & Security_ → _Full Disk Access_
2. Find _AdGuard_ in the list and turn on the toggle
   ![Full Disk Access](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
