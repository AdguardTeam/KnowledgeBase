---
title: 如何在韩国使用 Samsung Pay 和 AdGuard
sidebar_position: 16
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

有部分用户遇到了 AdGuard 运行时 Samsung Pay 无法正常运行的问题。 但是这个问题几乎只发生在韩国地区的 Android 设备上。

为什么会发生这样的问题呢？ 部分情况下 Samsung Pay 无法在有 VPN 服务的设备上运行，AdGuard 就是其中一种。 在默认情况下，AdGuard 使用本地的 VPN 服务来减少流量，这可能会导致 Samsung Pay 无法正常运行。

因此，韩国的用户在使用 Samsung Pay 进行付款时必须禁用 AdGuard。 启用「*检测 Samsung Pay*」功能可以避免这种问题的发生。 启用此功能后，只要用户打开 Samsung Pay 应用程序，AdGuard 就会暂停，并在 Samsung Pay 关闭时恢复。

:::note

只有在 AdGuard 设置中选择本地 VPN 过滤模式，此功能才会生效。 如果使用另一种模式，Samsung Pay 也会正常运行，不会受到任何影响。

:::

若要启用「*检测 Samsung Pay*」功能，请按照以下步骤操作：

1. 转到「*设置*」→「*通用*」→「*高级*」→「*低级设置*」。

1. 滚动到「*检测 Samsung Pay*」，然后将滑块向右移动。

1. 点按「*允许权限*」，让 AdGuard 获取有关其他应用程序使用情况的信息。

我们需要这些权限来收集 Samsung Pay 运作的统计数字，以便使「*检测 Samsung Pay*」功能正常运行。

启用此功能后，当用户从 Samsung Pay 切换到 AdGuard 时，将会出现如屏幕截图所示的以下消息。

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

或者，用户也可以在「*应用管理*」中禁用 Samsung Pay 的过滤功能。 只需进入「*应用管理*」界面（底部第三个标签），在列表中找到 Samsung Pay，然后关闭「*通过 AdGuard 路由流量*」即可。
