---
title: iOS版AdGuardでSafari外の広告ブロックを設定する方法（システムワイドブロック）
sidebar_position: 2
---

## システムワイドブロックについて

iOSでのシステムワイドブロックとは、Safariブラウザ以外、つまり他のアプリやブラウザで、ネットワークレベルで広告やトラッカー（個人情報追跡ソフト）をブロックすることです。 ほとんどの広告ブロッカーはこれをできませんが、AdGuardはできます。ただし、少し設定が必要であり、この記事では、お使いのiOSデバイスでこの機能を設定する方法をご紹介します。

iOSでは、広告やトラッカーをシステム全体でブロックする唯一の方法は、[DNSフィルタリング](https://adguard-dns.io/kb/general/dns-filtering/)を使用することです。 まず、「DNS通信を保護」を有効にする必要があります。 AdGuard for iOSアプリのメイン画面→設定（右下の⚙アイコン）→「DNS通信を保護」→オンにする

![DNS protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

AdGuardを使ってシステムワイドブロックを行うには2つの方法があります。

1. AdGuard DNSを有効にする（*設定*⚙→*DNS通信を保護*→*DNSサーバー*→*AdGuard DNS*）
2. 追跡・広告ドメインをブロックするDNSフィルタやホストファイルを使う（例えば「AdGuard DNSフィルタ」）

両方とも効果は近いですが、DNSフィルタを有効にする方法２には、メリットがあります:

* DNSサーバーは任意のものにすることが可能（もしくは接続しない）
* DNSホワイトリストを使えて、複数のDNSフィルタやホストファイルを同時に使える

![DNSフィルタリングの仕組み](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## DNSフィルタ/ホストファイルを追加する方法

どのDNSフィルタやhostsファイルを追加しても、手順は同じです。 おすすめとして、[AdGuard DNSフィルター](https://github.com/AdguardTeam/AdguardSDNSFilter)を追加してみましょう。 他のいくつかのフィルタ（AdGuardベースフィルタ、SNS用フィルタ、追跡防止フィルタ、モバイル広告フィルタ、EasyList、EasyPrivacy）から構成され、DNSレベルの広告ブロックとの互換性を向上するように簡素化されたフィルタです。

1. AdGuard iOSアプリ→*設定*（右下の⚙）→*一般設定*
2. 高度な設定モード→オン。 そうすると、「詳細設定」という項目が現れますので、 それを開きます。

![Open AdGuard Settings and enable Advanced mode *mobile_border](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg)

![Advanced settings screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_advanced_settings.PNG)

> ※「*詳細設定*」タブにある設定をそのままオンにすることはお勧めできません（特に「*ローレベル設定*」）。 中には、インターネット接続が切断されたり、プライバシーやセキュリティが損なわれたりするものもありますので、注意が必要です。 　

3. このリンクをコピーする: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt` （AdGuard DNSフィルタのリンクです）
4. *AdGuard設定* → *DNS通信を保護* → *DNSフィルタリング* (「高度な設定」モードのオンが必須) → *DNSフィルタ*
5. 「*フィルタを追加する*」→フィルタのURL欄に「3.」でコピーしたリンクを貼り付ける→次へ

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_adding_a_filter.PNG)

> 完了です。ステップ3で別のURLをコピーして貼り付けることで、同じように他のDNSフィルターをいくつでも追加できます。 様々なフィルターやそのリンクは[こちら](https://filterlists.com)で確認することができます。