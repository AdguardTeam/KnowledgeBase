---
title: Protection cannot be enabled
sidebar_position: 2
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

If AdGuard Protection cannot be enabled for some reason, perform the following steps:

1. Click the AdGuard icon at the menu bar and go to *Advanced* → *Reset settings...* → *Quit AdGuard...*

2. In the Spotlight Search, type Terminal, enter `sudo rm -R /Library/Application\ Support/com.adguard.adguard` and execute.

3. Restart your computer.

4. Open the Terminal again, type `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` and execute. You should receive the following: `No such file or directory`.

5. Start AdGuard and enter your login information when prompted.
