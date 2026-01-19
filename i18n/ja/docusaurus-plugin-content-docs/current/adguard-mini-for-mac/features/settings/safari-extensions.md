---
title: Safari拡張機能
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[2019年](https://adguard.com/ja/blog/adguard-safari-1-5.html)、AppleはSafari用の広告ブロッカーに制約を設け、同時に使用できるフィルタリングルールは5万件までと制限しました。 As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[2022年](https://adguard.com/ja/blog/adguard-for-safari-1-11.html)、アップルは各コンテンツブロッカーの、同時に適用できるフィルタリングルール上限を15万ルールに引き上げました。 Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

上限が引き上げられたとはいえ、コンテンツブロッカーの構造は変わっていません。

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard 一般

「_AdGuard 一般_」は、広告をブロックするために最も重要なフィルタを組み合わせたコンテンツブロッカーです。 We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard プライバシー

このコンテンツブロッカーは、カウンターやその他のウェブ解析・追跡ツールに対抗する主要なツールです。 「_AdGuard 追跡防止フィルタ_」はデフォルトで有効になっています。

### AdGuard ソーシャル

「_AdGuard ソーシャル_」には、SNS系ボタン、ウィジェット、スクリプト、アイコンに対するフィルタが含まれています。 Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard セキュリティ

このコンテンツブロッカーは、いくつかのセキュリティ関連フィルタを統合しています。 _Malware Domains Blocklist_ は、マルウェアやスパイウェアの拡散で悪名高いドメインをブロックします。 _Spam404_ は、インターネット詐欺師からあなたを守ります。 _NoCoin Filter List_ は、Coinhiveのようなブラウザベースのクリプトマイナー（仮想通貨をマイニングするマルウェア）の動作を防止します。

### AdGuard その他

「_AdGuard その他_」には、さまざまな追加機能を持つフィルタが含まれています。 例えば、検索広告や自己宣伝広告のブロックを解除するフィルターがあります。 場合によっては、この種の広告は他の広告よりも関連性が高く、邪魔にならないため、探しているものを正確に見つけるのに役立つので、有効にすることが便利だったりします。

:::note 重要

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard カスタム

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. [filterlists.com](https://filterlists.com) で様々なフィルタを見つけることができます。
