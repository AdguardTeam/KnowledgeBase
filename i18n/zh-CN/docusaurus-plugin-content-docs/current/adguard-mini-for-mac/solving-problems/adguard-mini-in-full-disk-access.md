---
title: Why AdGuard Mini appears in Full Disk Access on macOS
sidebar_position: 6
---

:::info

这篇文章是关于 Mac 版的 AdGuard Mini，用于 Safari 浏览器的保护。要全面保护设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

AdGuard Mini for Mac may appear in _System Settings_ → _Privacy & Security_ → _Full Disk Access_. An entry there doesn’t mean AdGuard asked for Full Disk Access or received it: macOS adds entries itself, and the switch stays off. No dialog appears when it does.

## Why the entry appears

No app can add or remove its own entry in _Full Disk Access_ or enable its own switch. macOS creates the entry when an app accesses data that the system protects, such as files belonging to other apps.

The list of protected data depends on the macOS version. Apple changes these rules between releases, so an action that added nothing on an older version may add an entry on a newer one. Starting with macOS 27, the folders where some apps, including popular browsers, store their data are protected. Accessing such a folder, even just to read it, adds the app to the list; on macOS 26 and earlier, the same action added nothing.

macOS also keeps entries after an app is deleted and after macOS is updated. An entry you see today may have been created years ago by an earlier version of the app.

## AdGuard Mini for Mac

AdGuard Mini for Mac doesn’t add itself to the list. The entry comes from AdGuard for Safari — [the previous name of the same app](https://adguard.com/support/adguard-mini-mac/about/what_is.html).

macOS added AdGuard for Safari to the list on macOS 13 and later; on macOS 12 it didn’t. When the app updates to AdGuard Mini for Mac, macOS doesn’t create a new entry but renames the existing one to AdGuard Mini. That’s why the entry can be there even if you installed the app years ago or have since deleted it.

## System Wide Protection is not related to Full Disk Access

_System Wide Protection_, the URL filter in AdGuard Mini for Mac, is a Network Extension. It works with network traffic and doesn’t read files on your disk. It appears in _System Settings_ → _General_ → _Login Items & Extensions_, separately from _Full Disk Access_.

## How to remove the entry

The entry itself gives AdGuard no access to your files. Ad blocking works with the switch off, so you can leave the entry in place.

To remove it:

1. Go to _System Settings_ → _Privacy & Security_ → _Full Disk Access_.
2. Turn the switch off.
3. Select the AdGuard entry and click _−_.

:::caution

Don’t turn this toggle on without a reason. _Full Disk Access_ gives the app access to almost all your data, including documents, browser data, mail, messages, and other apps’ files. AdGuard Mini works without it.

:::

![Full Disk Access list with the AdGuard entry \*border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)

To reset the record from Terminal, run the command from [Apple’s guide to resetting access to protected resources](https://developer.apple.com/documentation/xcode/resetting-access-to-protected-resources-in-macos):

`tccutil reset SystemPolicyAllFiles com.adguard.safari.AdGuard`

If `tccutil reset` didn’t work, try to restart the app.

Without `sudo`, the command resets the record for your user account. With `sudo`, for all accounts on the Mac.

:::note

A _Full Disk Access_ record sometimes stays after `tccutil reset`. Removing the entry in _System Settings_ is more reliable.

:::

### The entry may appear again

macOS adds the entry back the next time the app accesses a protected folder, for example when AdGuard Mini for Mac migrates settings. macOS adds the entry on its own, it doesn’t mean the app requested access.
