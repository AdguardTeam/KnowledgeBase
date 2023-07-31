---
title: 使用的流量与电池消耗的问题
sidebar_position: 1
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

On Android devices running OS 6 and earlier, built-in statistics often attributed high data and/or battery usage to AdGuard. This was because AdGuard counted all the traffic it filtered from various apps. As a result, AdGuard's share of total data and battery usage was overstated, while other apps were understated.

With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### 电池使用情况

You can access it by navigating to *Statistics* → *Battery usage*.

![电池统计 *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. 除此之外，还有相关数据的信息以及简短技术说明。

### AdGuard 真实电池消耗是多少？

First, let us lay down a bit of theory and links with necessary data.

1. 安卓使用自带的 Power Profile 来计算流量使用量：<https://source.android.com/devices/tech/power/values.html>

2. Power Profile 的主要部分是一组以mAh为单位的值，这些值定义设备每个组件的电池消耗：<https://source.android.com/devices/tech/power/values.html>

比如说，从链接的表格中我们可以看到：

_wifi.active=_ 31m 是指 WiFi 数据交换导致的额外消耗（使用的单位：毫安）

_radio.active=_ 100-300mA 是指经过移动交换数据导致的额外消耗 （使用的单位：毫安）

_cpu.active=_ 100-200mA 是指中央处理器（CPU） 运行导致的额外消耗 （使用的单位：毫安）

3. AdGuard 几乎没有消耗任何流量，因此，我们来去除“移动/WiFi 包”以评价电池消耗，而把重心放在 “CPU”（中央处理器）上。

以下是计算消耗量的公式：
> "CPU TIME (ms)" X "cpu.active" / (60 * 60 * 1000) = "POWER USE mAh"

我们将实数写入公式中。

来将第二张截图上的 _CPU total_ 转换为毫秒：506000

2GHz 的 _cpu.active_ 系数大约等于 225mAh

最后结果
> 506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### 结论

事实上的消耗量比安卓统计上的消耗量**小很多倍**。 消耗量为 31-40mAh，而非 220mAh。 从另一方面来看的话，浏览器流量使用量为 ~200mAh，而不是 66mAh。
