---
title: How to enable system-wide filtering in AdGuard for iOS
sidebar_position: 2
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 iOS용 AdGuard에 대해 다룹니다. To see how it works firsthand, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## 시스템 전체 필터링 정보

시스템 전체 필터링은 Safari 브라우저 외부, 즉 다른 앱과 브라우저에서 광고 및 추적기를 차단하는 것입니다. This article will tell you how to enable it on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/).

First, you have to enable DNS protection. To do so:

1. Open *AdGuard for iOS*.
2. Tap *Protection* icon (the second icon in the bottom menu bar).
3. Turn *DNS protection* switch on.

![DNS 보호 화면 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Now, if your purpose is to block ads and trackers system-wide, you have three options:

 1. Use AdGuard DNS filter (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*).
 2. Use AdGuard DNS server (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS server* → *AdGuard DNS*) or another blocking DNS server to your liking.
 3. Add a custom DNS filter/hosts file to your liking.

The first and third option have several advantages:

- You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking.
- You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).

![DNS 필터링 작동 방식](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## How to add custom DNS filter/hosts file

You can add any DNS filter or hosts file you like.

For the sake of the example, let's add [OISD Blocklist Big](https://oisd.nl/).

1. Copy this link: `https://big.oisd.nl` (it's a link for OISD Blocklist Big filter)
2. Open *Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Tap *Add a filter*.
4. Paste the link into the filter URL field.
5. Tap *Next* → *Add*.

![DNS 필터 화면 추가 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Add any number of other DNS filters the same way by pasting a different URL at step 4. [여기](https://filterlists.com)에서 다양한 필터와 링크를 확인할 수 있습니다.
