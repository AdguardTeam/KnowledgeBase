---
title: 如何在 macOS High Sierra 及更高版本上安装 AdGuard
sidebar_position: 3
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

During the installation of AdGuard on macOS High Sierra (or later), you may receive the message "System Extension Blocked". This is a new security mechanism introduced in High Sierra that requires you to explicitly allow the installation of a third-party system extension.

To complete the installation of AdGuard you have to manually allow loading the extension by clicking the "Allow" button in *System Preferences* → *Security & Privacy* → *General*.

On macOS Sequoia, you can do it in *System Preferences* → *Security & Privacy* → *General* → *Login Items & Extensions*. Once there, click the "i" icon next to *Network Extensions* and toggle the AdGuard option.

![在设置中允许安装扩展](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/highsierra.png)

After that you will be able to proceed with the installation as usual.
