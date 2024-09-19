---
title: 使用的流量与电池消耗的问题
sidebar_position: 1
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 若要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

由于内置统计过程，Android 6 及更早版本经常将高数据和/或电量消耗归因于 AdGuard。 这是因为 AdGuard 计算从各应用过滤的所有流量。 从而高估 AdGuard 总数据和电池使用率所占份额，而低估其它应用所占份额。

在 Android 7 此种情况得到改善。 现在 Android 内置的数据使用统计中反映的数据非常接近现实，尽管电池使用数据存在细微差异。

然而，AdGuard 用户始终可在「*电池使用情况*」屏幕上了解真实情况。

### 电池使用情况

您可转到「*统计数据*」→「*电池使用情况*」以访问它。

![电池统计数据 *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

以上图表显示有最近24小时内 AdGuard 电池的使用量。点击图标上的绿线可以按每一个小时查看关于流量使用的更详细信息。 除此之外，还有相关数据的信息以及简短技术说明。

### AdGuard 真实电池消耗是多少？

首先，我们从理论角度看此问题并附上必要数据的链接。

1. Android 设备使用厂商提供的 Power Profile 来计算流量使用量：<https://source.android.com/devices/tech/power/values.html>

1. Power Profile 的主要部分是一组用于定义设备每个组件的电池消耗的值，以 mAh 为单位：<https://source.android.com/devices/tech/power/values.html>

    例如，从链接的表格中可以看到：

    *wifi.active=* 31mA 是由 WiFi 数据交换引起的额外消耗（以 mAh 为单位）。

    *radio.active=* 100-300mA 是因移动网络数据交换而导致的额外消耗（以 mAh 为单位）。

    *cpu.active=* 是指由 CPU 工作引起的 100-200mA 额外消耗（以 mAh 为单位）。

1. AdGuard 本身几乎不消耗任何流量，因此为评估电池资源消耗，让我们忽略「移动/WiFi 数据包」，重点关注「CPU」。

    以下是消耗量计算的公式：

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWE

    将实际数据写入公式中。

    让我们以第二张截图中「*CPU 总计*」数据为例，将其转换为毫秒：506000

    2GHz 的 *cpu.active* 系数大约等于 225mAh

    最终结果

    > 506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### 结论

实际消耗量比 Android 统计的消耗量**小很多倍**。 消耗量应为 31-40mAh，而非 220mAh。 另一方面，浏览器的消耗不应该是 66mAh，而是大约 200mAh。
