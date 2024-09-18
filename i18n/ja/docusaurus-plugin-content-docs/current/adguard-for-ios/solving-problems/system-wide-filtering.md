---
title: How to enable system-wide filtering in AdGuard for iOS
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for iOS」について書いています。 To see how it works firsthand, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## システムワイドブロックについて

iOSでのシステムワイドブロックとは、Safariブラウザ以外、つまり他のアプリやブラウザで、ネットワークレベルで広告やトラッカー（個人情報追跡ソフト）をブロックすることです。 This article will tell you how to enable it on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/).

First, you have to enable DNS protection. その方法は以下の通りです:

1. Open *AdGuard for iOS*.
2. Tap *Protection* icon (the second icon in the bottom menu bar).
3. Turn *DNS protection* switch on.

![DNS通信を保護画面 *mobile_border](https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_ja.PNG)

Now, if your purpose is to block ads and trackers system-wide, you have three options:

 1. Use AdGuard DNS filter (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters* → *AdGuard DNS filter*).
 2. Use AdGuard DNS server (*Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS server* → *AdGuard DNS*) or another blocking DNS server to your liking.
 3. Add a custom DNS filter/hosts file to your liking.

The first and third option have several advantages:

- You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking.
- You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).

![DNSフィルタリングの仕組み](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ja.png)

## How to add custom DNS filter/hosts file

You can add any DNS filter or hosts file you like.

For the sake of the example, let's add [OISD Blocklist Big](https://oisd.nl/).

1. Copy this link: `https://big.oisd.nl` (it's a link for OISD Blocklist Big filter)
2. Open *Protection* (the shield icon in the bottom menu) → *DNS protection* → *DNS filtering* → *DNS filters*.
3. Tap *Add a filter*.
4. Paste the link into the filter URL field.
5. Tap *Next* → *Add*.

![DNSフィルタ追加画面 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Add any number of other DNS filters the same way by pasting a different URL at step 4. 様々なフィルターやそのリンクは[こちら](https://filterlists.com)で確認することができます。
