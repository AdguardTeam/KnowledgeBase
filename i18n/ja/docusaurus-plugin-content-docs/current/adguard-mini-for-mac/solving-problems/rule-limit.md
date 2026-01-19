---
title: ルール数制限関連問題
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari コンテンツブロッカールール数の制限

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. 現在、一つのコンテンツブロッカー拡張機能には、最大150,000ルールの使用が許可されています。

AdGuard Mini for Mac has 6 content blockers:

- AdGuard 一般
- AdGuard プライバシー
- AdGuard ソーシャル
- AdGuard セキュリティ
- AdGuard その他
- AdGuard カスタム

これで合計90万ものフィルタリングルールをできることになります。

However, **one extension can contain only up to 150,000 rules**. この制限を超えると、ルールの一部が適用されなくなってしまい、 広告ブロックの不具合・不十分さにつながる可能性があります。

## ルールの上限を超えているかどうかを確認する方法

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

いずれかのコンテンツブロッカーで150,000以上のルールが有効になっている場合、一部のフィルタまたはユーザールールを無効にする必要があります。 「_フィルタ_」タブに移動し、問題のあるフィルタカテゴリーを選択し、不要なフィルターやユーザールールを無効にしてください。
