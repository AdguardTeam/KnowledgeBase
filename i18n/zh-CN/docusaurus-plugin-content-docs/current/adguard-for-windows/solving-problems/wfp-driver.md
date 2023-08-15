---
title: WFP driver
sidebar_position: 1
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

To filter netwrok traffic, AdGuard uses a network driver. There are two options: TDI driver and WFP driver. While WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. These problems and subsequent errors can be very different in each case.

If you encounter a problem that you suspect might be caused by this, you can always switch to the older but more stable TDI network driver. To do so:

1. Go to *Settings → Network*.

2. Disable WFP driver as it’s done in this picture:

![WFP driver *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
