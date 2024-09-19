---
title: Pil ve veri tüketimi sorunları
sidebar_position: 1
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Due to built-in statistics processes, high data and/or battery consumption was often attributed to AdGuard by Android 6 and earlier. Bunun nedeni, AdGuard'ın çeşitli uygulamalardan filtrelediği tüm trafiği saymasıdır. Sonuç olarak, AdGuard'ın toplam veri ve pil kullanımındaki payı abartılırken, diğer uygulamalar olduğundan az gösterildi.

With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### Kendi pil kullanım istatistikleri ekranı

You can access it by navigating to *Statistics* → *Battery usage*.

![Pil istatistikleri *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. Besides that, there’s also a numeric breakdown of the relevant data and a short technical explanation.

### How much battery resource does AdGuard really consume?

First, let us lay down a bit of theory and links with necessary data.

1. Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: <https://source.android.com/devices/tech/power/values.html>

1. Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: <https://source.android.com/devices/tech/power/values.html>

    Örneğin, yukarıdaki tablodan:

    *wifi.active=* 31mA WiFi veri alışverişinden kaynaklanan mAh cinsinden ek tüketim.

    *radio.active=* 100-300mA additional consumption in mAh caused by data exchange over Mobile network.

    *cpu.active=* 100-200mA additional consumption in mAh caused by CPU load.

1. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating power consumption let's get rid of 'Mobile/Wi-Fi packets' and stick to 'CPU'.

    Formula to calculate the consumption:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    Bu formüle gerçek sayılar koyalım.

    Let's take *CPU total* from the second screenshot and convert into milliseconds: 506000

    A coefficient *cpu.active* for 2GHz will be roughly equal to 225mAh

    En son sonuç:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Conclusion

Real consumption is **several times less** than it is shown in Android statistics. 220mAh yerine 31-40mAh civarında bir yerde olmalı. Öte yandan, tarayıcının tüketimi 66mAh değil, ~200mAh olmalıdır.
