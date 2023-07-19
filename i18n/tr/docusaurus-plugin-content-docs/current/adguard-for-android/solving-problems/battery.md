---
title: Pil ve veri tüketimi sorunları
sidebar_position: 1
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

On Android devices running OS 6 and earlier, built-in statistics often attributed high data and/or battery usage to AdGuard. Bunun nedeni, AdGuard'ın çeşitli uygulamalardan filtrelediği tüm trafiği saymasıdır. Sonuç olarak, AdGuard'ın toplam veri ve pil kullanımındaki payı abartılırken, diğer uygulamalar olduğundan az gösterildi.

With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### Own battery usage stats screen

You can access it by navigating to *Statistics* → *Battery usage*.

![Battery stats *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. Besides that, there’s also a numeric breakdown of the relevant data and a short technical explanation.

### How much battery resource does AdGuard really consume?

First, let us lay down a bit of theory and links with necessary data.

1. Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: <https://source.android.com/devices/tech/power/values.html>

2. Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: <https://source.android.com/devices/tech/power/values.html>

For example, from the table above:

_wifi.active=_ 31mA additional consumption in mAh caused by WiFi data exchange.

_radio.active=_ 100-300mA additional consumption in mAh caused by data exchange over Mobile network.

_cpu.active=_ 100-200mA additional consumption in mAh caused by CPU work.

3. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating battery resource consumption let's get rid of 'Mobile/WiFi packets' and stcik to 'CPU'.

Formulа to calculate the consumption:
> "CPU TIME (ms)" X "cpu.active" / (60 * 60 * 1000) = "POWER USE mAh"

Let's put real numbers into this formula.

Let's take _CPU total_ from the second screenshot and convert into milliseconds: 506000

A coefficient _cpu.active_ for 2GHz will be roughly equal to 225mAh

En son sonuç
> 506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### Conclusion

Real consumption is **several times less** than it is shown in Android statistics. 220mAh yerine 31-40mAh civarında bir yerde olmalı. On the other hand, browser's consumption should be not 66mAh, but ~200mAh.
