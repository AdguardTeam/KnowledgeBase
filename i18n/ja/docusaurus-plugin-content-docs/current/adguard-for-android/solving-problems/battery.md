---
title: バッテリーとデータ通信の消費量について
sidebar_position: 1
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. 実際に使ってみるには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

Due to built-in statistics processes, high data and/or battery consumption was often attributed to AdGuard by Android 6 and earlier. そういった表示の原因、AdGuardがさまざまなアプリからのトラフィックをすべてカウントしていたためです。 その結果、総データ使用量とバッテリー使用量において、AdGuardの分は過大に表示され、他のアプリは過小に表示されていました。

しかし、Android 7では、この状況は改善しました。 現在、Android内蔵のデータ使用量統計に反映されるデータは、バッテリー使用量データに若干の不一致があるものの、現実に非常に近いものになっています。

さらに、AdGuardアプリ内にて、「*バッテリーの使用状況*」画面で、いつでも正確な状況を確認することができます。

### AdGuardのバッテリー使用状況統計画面

AdGuard for Android アプリ →「*統計*」（画面下左から3番目のアイコン）→「*バッテリーの使用状況*」でアクセスできます。

![バッテリー統計 *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

この画面では、過去24時間以内のAdGuardによるバッテリー消費量を示すグラフが表示されています。また、グラフをタップすることで、より詳細な1時間ごとのデータも確認できます。 そのほか、関連データの数値的な内訳と短い技術的な説明もあります。

### AdGuard の本当のバッテリー消費量はどのくらいですか？

まず、少し理論を整理し、必要なデータへのリンク挙げたいと思います。を

1. Androidは、各メーカーから提供されているいわゆるパワープロファイルに基づき、トラフィック消費量を算出します: <https://source.android.com/devices/tech/power/values.html>

1. パワープロファイルの主な部分は、デバイスの各コンポーネントのバッテリー消費を定義するmAh単位の値のセットです: <https://source.android.com/devices/tech/power/values.html>

    例えば、上の表から:

    *wifi.active* = WiFiデータ通信によって追加の31mAが消費（mAh）される。

    *radio.active* = モバイルデータ通信によって追加の100-300mAが消費（mAh）される。

    *cpu.active=* 100-200mA additional consumption in mAh caused by CPU load.

1. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating power consumption let's get rid of 'Mobile/Wi-Fi packets' and stick to 'CPU'.

    消費量の計算式:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    この式に実数を入れてみましょう。

    スクリーンショットから*CPUの合計*をミリ秒に換算します：506000。

    2GHzの*cpu.active*係数はおよそ225mAhになります。

    最終結果:

    > 506000 * ✖️ 225 / (60* ✖️ 60 ✖️ 1000) = 31,625mAh

### 結論

AdGuard の実際のバッテリー消費量は、Androidのシステム統計で表示されているよりも、**数倍少ない**です。 220mAhなどではなく、31～40mAhといったところです。 一方、ブラウザーの消費量は66mAhではなく、〜200mAhであるべきです。
