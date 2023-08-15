---
title: How to avoid compatibility problem with FaceTime
sidebar_position: 3
---

:::info

本文适用于 iOS 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime.

Some users have encountered the problem that FaceTime does not work on the device when the AdGuard app for iOS is in Full-Tunnel mode.

It is likely but not guaranteed that FaceTime will work when AdGuard is in Full-Tunnel mode without VPN icon because it is also incompatible with other VPN apps and unstable.

**If you want to use FaceTime and make sure that video/audio calls don't stop working, use Split-Tunnel mode.**

![Tunnel mode screen *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!)

To enable it, follow the instructions:

1. Go to AdGuard for iOS *Settings* → *General settings*.
2. Enable *Advanced mode* and go to the *Advanced settings* section that appears right after.
3. Open *Tunnel mode* and select *Split-Tunnel*.

Done! Now there should be no problems with FaceTime compatibility.
