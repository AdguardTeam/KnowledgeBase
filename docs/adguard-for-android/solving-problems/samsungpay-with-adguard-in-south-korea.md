---
title: How to use Samsung Pay with AdGuard in South Korea
sidebar_position: 17
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

This problem occurs almost exclusively on devices registered in South Korea. Samsung Pay occasionally doesn't work on such devices with running VPN services. However, there is a way to solve this problem.

By default, AdGuard uses Local VPN to filter traffic. This was the reason why the South Korean users had to disable AdGuard when making payments with Samsung Pay. Now it is possible to avoid such difficulties.

The **"pref.samsungpay.autopause.enable"** feature was developed specifically for South Korean users. So, what process does it initiate? If the "pref.samsungpay.autopause.enable" option is enabled, the AdGuard app is suspended when a user opens the Samsung Pay app. But once the app is closed, AdGuard resumes operation.

Let's see how it works.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/en.gif)

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.

:::
