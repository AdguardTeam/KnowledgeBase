---
title: iOS版AdGuardでSafari外の広告ブロックを設定する方法（システムワイドブロック）
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for iOS」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

## システムワイドブロックについて

iOSでのシステムワイドブロックとは、Safariブラウザ以外、つまり他のアプリやブラウザで、ネットワークレベルで広告やトラッカー（個人情報追跡ソフト）をブロックすることです。 他社広告ブロッカーのほとんどはシステムワイドブロックをできませんが、AdGuardはできます。ただし、少し設定が必要であり、本記事では、お使いのiOSデバイスでこの機能を設定する方法をご紹介します。

iOSでは、広告やトラッカーをシステム全体でブロックする唯一の方法は、[DNSフィルタリング](https://adguard-dns.io/kb/general/dns-filtering/)を使用することです。

まず、「DNS通信を保護」を有効にする必要があります。 その方法は以下の通りです:

1. *AdGuard for iOS* アプリを開きます。
2. *AdGuardによる保護*アイコン（下部メニューバーの2番目の盾アイコン）をタップします。
3. 「*DNS通信を保護*」のスイッチをオンにします。

![DNS通信を保護画面 *mobile_border](https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_ja.PNG)

AdGuardを使ってシステムワイドブロックを行うには3つの方法があります:

 1. AdGuard DNS フィルタを使用する（<*AdGuardによる保護*アイコン（下部メニューバーの2番目の盾アイコン）） → *DNS通信を保護* → *DNSフィルタリング* → *DNSフィルタ* → *AdGuard DNS フィルタ*）
 2. AdGuard DNS サーバー（<*AdGuardによる保護*アイコン（下部メニューバーの2番目の盾アイコン）） → *DNS通信を保護* → *DNSサーバー* → *AdGuard DNS*）を使用するか、その他の任意のDNSサーバーを使用する
 3. お好みのカスタムDNSフィルターやhostsファイルを追加する

第1と第3の方法の利点は以下のとおりです:

- DNSフィルタが広告ブロックしてくれるので、DNSサーバーは任意のものにすることが可能
- 複数のDNSフィルタおよびhostsファイルを追加することが可能（ただし、多すぎるとAdGuardの動作が遅くなる可能性がありますので、数にはご注意ください。）

![DNSフィルタリングの仕組み](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ja.png)

## カスタムDNSフィルタやhostsファイルを追加する方法

好きなDNSフィルタやhostsファイルをなんでも追加できます。

例として、[OISD Blocklist Big](https://oisd.nl/) を追加してみましょう。

1. このリンクをコピーします: `https://big.oisd.nl` ( OISD Blocklist Big フィルタのリンクです)
2. AdGuardアプリ→ *AdGuardによる保護*アイコン（下部メニューバーの2番目の盾アイコン）） → *DNS通信を保護* → *DNSフィルタリング* → *DNSフィルタ*
3. 「*フィルターを追加する*」をタップします。
4. フィルタURL欄にリンクを貼り付けます。
5. *次へ* → *追加* をタップします。

![DNSフィルタ追加画面 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

完了です。ステップ4で別のDNSフィルタのURLをコピーして貼り付けることで、DNSフィルタをいくつでも追加できます。 様々なフィルターやそのリンクは[こちら](https://filterlists.com)で確認することができます。
