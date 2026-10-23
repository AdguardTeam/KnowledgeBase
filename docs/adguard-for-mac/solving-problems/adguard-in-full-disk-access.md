---
title: Why AdGuard appears in Full Disk Access on macOS
sidebar_position: 13
---

:::info

This article is about AdGuard for Mac and AdGuard Mini for Mac. To see how they work, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

AdGuard for Mac and AdGuard Mini for Mac may appear in *System Settings* → *Privacy & Security* → *Full Disk Access*. An entry there doesn’t mean AdGuard asked for Full Disk Access or received it: macOS adds entries itself, and the switch stays off. No dialog appears when it does.

## Why the entry appears

No app can add or remove its own entry in *Full Disk Access* or enable its own switch. macOS creates the entry when an app accesses data that the system protects, such as files belonging to other apps.

The list of protected data depends on the macOS version. Apple changes these rules between releases, so an action that added nothing on an older version may add an entry on a newer one. Starting with macOS 27, the folders where some apps, including popular browsers, store their data are protected. Accessing such a folder, even just to read it, adds the app to the list; on macOS 26 and earlier, the same action added nothing.

macOS also keeps entries after an app is deleted and after macOS is updated. An entry you see today may have been created years ago by an earlier version of the app.

## AdGuard for Mac

AdGuard for Mac writes a Native Messaging manifest for Browser Assistant, a browser extension. The manifest tells the browser where to find AdGuard, and the browser uses it to pass messages between the extension and AdGuard. This is what lets Browser Assistant show how AdGuard filtered the current page and manage blocking without opening the app.

AdGuard stores the manifest in the browser’s folder inside your user Library. On macOS 27 that folder is protected, so the attempt to write the manifest adds AdGuard to the *Full Disk Access* list.

:::caution

Don’t turn this toggle on without a reason. *Full Disk Access* gives the app access to almost all your data, including documents, browser data, mail, messages, and other apps’ files. AdGuard works without it.

If Browser Assistant can’t connect to AdGuard, start with the narrower option: [Browser Assistant doesn’t work on macOS 27](https://adguard.com/kb/adguard-for-mac/solving-problems/browser-assistant-macos-27/) shows how to grant access to the browser folder alone. Use *Full Disk Access* **only if those steps don’t help**.

:::

## AdGuard Mini for Mac

AdGuard Mini for Mac doesn’t add itself to the list. The entry comes from AdGuard for Safari — [the previous name of the same app](https://adguard.com/support/adguard-mini-mac/about/what_is.html).

macOS added AdGuard for Safari to the list on macOS 13 and later; on macOS 12 it didn’t. When the app updates to AdGuard Mini for Mac, macOS doesn’t create a new entry but renames the existing one to AdGuard Mini. That’s why the entry can be there even if you installed the app years ago or have since deleted it.

## System Wide Protection is not related to Full Disk Access

*System Wide Protection*, the URL filter in AdGuard Mini for Mac, is a Network Extension. It works with network traffic and doesn’t read files on your disk. It appears in *System Settings* → *General* → *Login Items & Extensions*, separately from *Full Disk Access*.

## How to remove the entry

The entry itself gives AdGuard no access to your files. Ad blocking works with the switch off, so you can leave the entry in place.

To remove it:

1. Go to *System Settings* → *Privacy & Security* → *Full Disk Access*.
2. Turn the switch off.
3. Select the AdGuard entry and click *−*.

:::note

If you granted Full Disk Access to AdGuard for Mac for [Browser Assistant](https://adguard.com/kb/adguard-for-mac/solving-problems/browser-assistant-macos-27/), removing the entry takes that access away. Ad blocking is not affected.

:::

![Full Disk Access list with the AdGuard entry *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)

To reset the record from Terminal, run the command from [Apple’s guide to resetting access to protected resources](https://developer.apple.com/documentation/xcode/resetting-access-to-protected-resources-in-macos):

- **AdGuard for Mac:**  
  `tccutil reset SystemPolicyAllFiles com.adguard.mac.adguard`
- **AdGuard Mini for Mac:**  
  `tccutil reset SystemPolicyAllFiles com.adguard.safari.AdGuard`

If `tccutil reset` didn’t work, try to restart the app.

Without `sudo`, the command resets the record for your user account. With `sudo`, for all accounts on the Mac.

:::note

A *Full Disk Access* record sometimes stays after `tccutil reset`. Removing the entry in *System Settings* is more reliable.

:::

### The entry may appear again

macOS adds the entry back the next time the app accesses a protected folder, for example when AdGuard for Mac writes the browser manifest again. In both cases macOS adds it on its own, it doesn’t mean the app requested access.
