---
title: 統計
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

In _Statistics_, you see a complete picture of what is happening with the traffic on your computer: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked. You can check statistics for various time frames: all time, the last 14 days, the last 7 days, the last 24 hours, and broken down by ads, trackers, or requests.

![Customize stats](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/statistics/stats.png)

:::note

All statistics are stored locally on your device. We only calculate how much data is used — we don’t see what websites you visit. You can also turn off statistics if you don’t need them.

:::

_Open Filtering log_ shows the last 10,000 requests processed by AdGuard

## アプリ

このセクションには、デバイスにインストールされているすべてのアプリの統計が表示されます。 ブロックされた広告やトラッカーの数、または送信されたリクエストの数でアプリを並べ替えることができます。

If you click an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

## DNS

This section shows data about the requests handled by DNS protection. You can see the total number of requests sent and how many were blocked by AdGuard

## 企業に関する統計

このセクションには、デバイスがリクエスト送信する企業が表示されます。 これは一体どういうことなのか？

AdGuard は、デバイスがリクエストをどのドメインに送信するのかを検出し、それらがどの企業に属しているかを検出します。 企業のデータベースは[GitHub](https://github.com/AdguardTeam/companiesdb)にあります。

## データ使用量

This section shows the amount of downloaded and uploaded data and saved traffic.
