---
title: AdGuard ブラウザ拡張機能 MV3対応版
sidebar_position: 5
---

ChromeウェブストアではMV2（Manifest V2）拡張機能が段階的に廃止されているため、ChromeユーザーはChromeの新しいAPI、「Manifest V3」（MV3）と互換性のあるMV3拡張機能に切り替える必要があるかもしれません。 このトピックに関する当社の考えは、[当社のブログ](https://adguard.com/en/blog/tag/manifest-v3.html)で詳しく議論されています。

AdGuard ブラウザ拡張機能MV3対応版は、SNSウィジェット、バナー、動画広告をシームレスに処理しながら、広告やトラッカーを効果的にブロックします。 ほとんどのユーザーは操作上の違いに気付かないでしょうが、注意すべき制限や変更点がいくつかあります。

## AdGuard ブラウザ拡張機能MV3対応版はどこで入手できるのか

**MV3対応版**は、[Chromeウェブストア](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg)で以前のAdGuardブラウザ拡張機能に取って代わりました。

**MV3対応版のベータ版**は引き続き[Chrome ウェブストア](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf)で入手できます。

旧ベータ拡張機能は、[**AdGuard 広告ブロッカー MV2対応版**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl)に改名され、Googleが段階的に廃止するまでサポートされます。

## 機能と設定における主な変更点

- **自動および手動のフィルタ更新なし**　_フィルタ_タブの「_フィルタの自動更新_」および「_フィルタ更新の確認_」オプションは使用できなくなりました。 一部のルールは現在 DNR 形式で適用されているため、リクエストに応じてフィルタを更新することはできません。ストアでのレビューとともに拡張機能を更新する完全なプロセスを通じてのみ更新できます。

- **フィルタリングログ**

  ![Filtering log \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  DNRの制限により、どのルールが機能したかを正確に示すことはできませんが、AdGuardのエンジンに基づいて「発動したと想定されるルール」を表示します。 正確な情報を確認されたい場合は、ご自身でブラウザにAdGuardブラウザ拡張機能の「解凍」版をインストールする必要があります。 これを行う方法の詳細な手順については、[別の記事](/adguard-browser-extension/solving-problems/debug-rules/)を参照してください。

- _トラッキング防止_（旧称：_ステルスモード_）

  ![Tracking protection \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  宣言型ルールを使用して Cookie の TTL を設定できないため、_Cookie_ セクション、_ファーストパーティ Cookie の自己破壊_、_サードパーティ Cookie の自己破壊_ セクションはありません。

- 「_フィッシング＆マルウェア保護_」は、一般設定では利用できなくなりました。 悪質なウェブサイトや詐欺から身を守るには、_フィルタ_タブで適切な「_セキュリティ_」フィルタを有効にしてください。

  ![Security \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitations

### ルールとフィルタの最大数

Manifest V3 では、拡張子ごとに静的ルールと正規表現ルールの制限が課せられています。 これらの制限を超えた場合、ユーザーは通知を受け取ることができます。

![Rule limits \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

基本的に、Manifest V3 はルールを静的 (組み込み) と動的に分割し、厳格な制限を設けています。

**静的ルール:** 拡張機能ごとに最低**30,000**ルール、1ユーザーがインストールしたすべての拡張機能の累積上限は**330,000**

正規表現ルールの場合、**拡張子ごとに1,000**に制限されています。

同時に有効なフィルタの最大数は**50**です。

**動的ルール:** ルールの厳密な上限は**5,000**で、これには最大1,000個の正規表現ルールが含まれます。

この制限を超えた場合、**5,000の変換されたルール**のみが次の順序で適用されます：最初に許可リスト、次にユーザールール、最後にカスタムフィルタ。

> **変換されたルール**は、[宣言的コンバータ][github-declarative-converter]を使って
> \[DNR形式]に変換されたルールです。
> この変換プロセス中に、一部のルールが他のルールを上書きしたり (`$badfilter`)、一部のルールが結合されたり (`$removeparam`)して、順序がわずかに異なるルールのリストが生成され流ことがあります。
>
> この変換されたルールのリストから、AdGuardは5,000のルールだけを使用します。 それ以外のルールはエディタに表示されますが、適用されません。

基本修飾子を持つルールが、どのように宣言的ルールに変換されるかの一例は以下のとおりです。

```adblock
||example.org^$script,third-party,domain=example.com
```

が以下のものに変化されます:

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

その他の例については、[GitHub][github-declarative-converter-examples] をご覧ください。

### ネットワークルール修飾子

ネットワークルール修飾子には制限があります。一部、MV3環境では実装できないルール修飾子が合ったり、制限付きでしか実装できないものがあります。

制限の詳細については、[GitHub][github-declarative-converter] を参照してください。
修飾子の詳細については、[ナレッジベース](/general/ad-filtering/create-own-filters)を参照してください。

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
