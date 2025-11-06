---
title: Statistics
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level.

This is a beta release and still under development. If you’d like to try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

In *Statistics*, you see a complete picture of what is happening with the traffic on your computer: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked. You can check statistics for various time frames: all time, the last 14 days, the last 7 days, the last 24 hours, and broken down by ads, trackers, or requests.

![Customize stats *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/statistics/customize_stats.png)

:::note

All statistics are stored locally on your device. We only calculate how much data is used — we don’t see what websites you visit. You can also turn off statistics if you don’t need them.

:::

*Open Filtering log* shows the last 10,000 requests processed by AdGuard

## Apps

This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests.

If you click an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

![App stats *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/statistics/app_stats.png)

## DNS

This section shows data about the requests handled by DNS protection. You can see the total number of requests sent and how many were blocked by AdGuard

## Companies

This section displays companies that your device reaches out to. What does it mean?

AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

## Data usage

This section shows the amount of downloaded and uploaded data and saved traffic.
