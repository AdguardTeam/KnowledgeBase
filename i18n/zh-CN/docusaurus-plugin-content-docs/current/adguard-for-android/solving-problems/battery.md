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

1. Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: <https://source.android.com/devices/tech/power/values.html>

1. Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: <https://source.android.com/devices/tech/power/values.html>

    For example, from the table above:

    *wifi.active=* 31mA additional consumption in mAh caused by WiFi data exchange.

    *radio.active=* 100-300mA additional consumption in mAh caused by data exchange over Mobile network.

    *cpu.active=* 100-200mA additional consumption in mAh caused by CPU work.

1. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating battery resource consumption let's get rid of 'Mobile/WiFi packets' and stcik to 'CPU'.

    Formula to calculate the consumption:

    > "CPU TIME (ms)" X "cpu.active" / (60 *60* 1000) = "POWER USE mAh"

    Let's put real numbers into this formula.

    Let's take *CPU total* from the second screenshot and convert into milliseconds: 506000

    A coefficient *cpu.active* for 2GHz will be roughly equal to 225mAh

    Final result:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### 结论

Real consumption is **several times less** than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh.
