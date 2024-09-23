---
title: 배터리 및 트래픽 소비 문제
sidebar_position: 1
---

:::정보

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Due to built-in statistics processes, high data and/or battery consumption was often attributed to AdGuard by Android 6 and earlier. This was because AdGuard counted all the traffic it filtered from various apps. As a result, AdGuard's share of total data and battery usage was overstated, while other apps were understated.

With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### 자체 배터리 사용 통계 화면

You can access it by navigating to *Statistics* → *Battery usage*.

![배터리 통계 *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. 또한 데이터의 숫자 분석과 간단한 기술 설명도 있습니다.

### AdGuard는 실제로 얼마나 많은 배터리를 소비합니까?

First, let us lay down a bit of theory and links with necessary data.

1. Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: <https://source.android.com/devices/tech/power/values.html>

1. Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: <https://source.android.com/devices/tech/power/values.html>

    For example, from the table above:

    *wifi.active=* 31mA additional consumption in mAh caused by WiFi data exchange.

    *radio.active=* 100-300mA additional consumption in mAh caused by data exchange over Mobile network.

    *cpu.active=* 100-200mA additional consumption in mAh caused by CPU load.

1. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating power consumption let's get rid of 'Mobile/Wi-Fi packets' and stick to 'CPU'.

    Formula to calculate the consumption:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    Let's put real numbers into this formula.

    Let's take *CPU total* from the second screenshot and convert into milliseconds: 506000

    A coefficient *cpu.active* for 2GHz will be roughly equal to 225mAh

    Final result:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### 결론

Real consumption is **several times less** than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh.
