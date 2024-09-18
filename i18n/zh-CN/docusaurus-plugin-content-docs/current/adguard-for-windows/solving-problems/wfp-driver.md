---
title: WFP 驱动
sidebar_position: 1
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

要过滤网络流量，AdGuard 会使用网络驱动程序。 有两个设置选项：TDI 驱动程序和 WFP 驱动程序。 While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. 这些问题和随后的错误在每种情况下可能会有很大不同。

如果您遇到怀疑可能由此引起的问题，可以随时切换到较旧但更稳定的 TDI 网络驱动程序。 具体操作：

1. 转到*「设置」→「网络」*。

2. Disable the WFP driver as it’s done in this picture:

![WFP 驱动程序 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
