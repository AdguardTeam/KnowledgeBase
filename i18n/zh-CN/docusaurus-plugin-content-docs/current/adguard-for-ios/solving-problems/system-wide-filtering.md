---
title: How to enable system-wide filtering in AdGuard for iOS
sidebar_position: 2
---

:::info

本文适用于 iOS 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

## 关于系统层面上的过滤

系统层面上的过滤是指不仅在 Safari 浏览器里，而且在其它应用程序和浏览器里屏蔽广告及跟踪器。 This article will tell you how to enable it on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/).

First, you have to enable DNS protection. To do so:

1. Open *AdGuard for iOS*.
2. Tap *Protection* icon (the second icon in the bottom menu bar).
3. Turn *DNS protection* switch on.

![DNS 保护屏幕 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Now, if your purpose is to block ads and trackers system-wide, you have three options:

 1. Use AdGuard DNS filter (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*).
 2. Use AdGuard DNS server (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS server* → *AdGuard DNS*) or another blocking DNS server to your liking.
 3. Add a custom DNS filter/hosts file to your liking.

The first and third option have several advantages:

- You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking.
- You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).

![DNS 过滤工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## How to add custom DNS filter/hosts file

You can add any DNS filter or hosts file you like.

For the sake of the example, let's add [OISD Blocklist Big](https://oisd.nl/).

1. Copy this link: `https://big.oisd.nl` (it's a link for OISD Blocklist Big filter)
2. Open *Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Tap *Add a filter*.
4. Paste the link into the filter URL field.
5. Tap *Next* → *Add*.

![添加 DNS 过滤器屏幕 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Add any number of other DNS filters the same way by pasting a different URL at step 4. [在这里](https://filterlists.com)您可以找到各种过滤器以及它们的链接。
