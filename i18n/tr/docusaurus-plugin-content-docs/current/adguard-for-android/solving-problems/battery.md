---
title: Battery and traffic consumption issues
sidebar_position: 1
---

:::note

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

Sometimes you may notice that, according to Android built-in statistics, AdGuard consumes a lot of traffic and/or battery resource.

Both these problems are two sides of the same coin. Since in the process of filtering all the mobile traffic goes through AdGuard, Android decides that it is AdGuard that consumes it all. In reality, of course, it is not true.

Battery and traffic consumption shown in devices statistics **do not represent the facts**. The thing is, Android attributes all of the WiFi and Mobile traffic to AdGuard, which was in fact consumed by other apps. Due to this, AdGuards real share of total consumed traffic and battery resource increases, and the share of other apps, on the contrary, decreases.

### Own battery usage stats screen

To mitigate this misconception, we added a new screen called 'Battery usage'. You can access it by tapping on the battery icon in the top right corner of the main screen.

![Battery stats *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/battery/batterystats.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the dots on the chart. Besides that, there’s also a numeric breakdown of the relevant data and a short technical explanation.

### Gerçek örnek

On the screenshots below you can see the battery resource consumption statistics for a night and subsequent morning:

![Battery 1 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_1.png) ![Battery 2 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_2.png) ![Battery 3 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_3.png)

From these screenshots you can see that:

1. AdGuard, as expected, is at the top of the chart. This is generally typical for smartphones (and not at all for tablets without 4G, since WiFi is much less 'costly' in terms of battery consumption).

2. Pay attention to the number of sent Mobile and WiFi packages, which were attributed to AdGuard (Mobile packets sent и Wi-Fi packets sent) on the second screenshot.

3. On the third screenshot are stats for one of the real traffic consumers, Yandex.Browser. It was not attributed almost any traffic at all, while in reality 70% of the total traffic was consumed by it.

### How much battery resource does AdGuard really consume?

First, let us lay down a little bit of theory and links with necessary data.

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

Final result
> 506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### Conclusion

Real consumption is **several times less** than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh.