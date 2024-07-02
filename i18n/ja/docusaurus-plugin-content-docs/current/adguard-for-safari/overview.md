---
title: 機能概要
sidebar_position: 1
---

:::info

この記事は、お使いのSafariブラウザのみを保護する「AdGuard  for Safari」に関するものです。 デバイス全体を保護するには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

AdGuard for Safari は、広告をブロックするブラウザ拡張機能に対するApple制約に適合するように設計されており、Safari用の最も人気のある広告ブロッカーです。 Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## 一般 {#general}

![一般設定タブ](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

最初のタブである「一般設定」画面においては、通知、更新頻度、システム起動時の AdGuard 起動など、基本的なことを設定できます。 メニューバーに AdGuard アイコンを表示するかどうかを設定することもできます。 また、「[コンテンツブロッカー](#contentblockers)」をオンにして、広告、トラッカー、迷惑要素などをブロックすることもできます。

## フィルタ {#filters}

![フィルタタブ](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

フィルタとは、特別な構文で書かれたルールのリストです。 これらのルールに従って、コンテンツブロッカーはウェブトラフィックをフィルタリングし、広告や悪質なウェブサイトへのリクエストをブロックすることができるようになります。

すべてのフィルターは 8 つのカテゴリに結合されています: *広告ブロック、プライバシー、SNSウィジェット、迷惑要素、セキュリティ、言語特化フィルタ、カスタム、その他*

【もっと読む】[AdGuardフィルタについてはこちら](/general/ad-filtering/adguard-filters)、[広告フィルタリングに関する全体的な説明はこちら](/general/ad-filtering/how-ad-blocking-works)

「フィルタ」タブでは、カテゴリー全体または個別のフィルタを有効・無効にすることができます。 「フィルタ」タブでの変更は、（「一般設定」タブにある）「コンテンツブロッカー」セクションにも反映されます。

## コンテンツブロッカー {#contentblockers}

![コンテンツブロッカータブ](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

コンテンツブロッカーとは、テーマ別のフィルタ群です。 プライバシー関連のフィルターは、コンテンツブロッカーの「*AdGuardプライバシー*」というグループに含まれています。

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[2019年](https://adguard.com/en/blog/adguard-safari-1-5.html)、AppleはSafari用の広告ブロッカーに制約を設け、同時に使用できるフィルタリングルールは5万件までと制限しました。 広告ブロッカーとして十分なフィルタリングクオリティを提供するにはこの数では不十分であったため（AdGuard ベースフィルタだけでも30,000のフィルタリングルールがある）、AdGuard for Safari を6つのコンテンツブロッカーに分割し、それぞれに最大50,000のルールを含ませることにしました。

[2022年](https://adguard.com/en/blog/adguard-for-safari-1-11.html)、アップルは各コンテンツブロッカーの、同時に適用できるフィルタリングルール上限を15万ルールに引き上げました。 そのため、AdGuard for Safari では、6つのコンテンツブロッカーすべてを使って、最大90万のルールを有効にすることができます。

上限が引き上げられたとはいえ、コンテンツブロッカーの構造は変わっていません。

「コンテンツブロッカー」画面では、どのコンテンツブロッカーが有効になっているか、それぞれのコンテンツブロッカが使用しているルールの数、どのフィルタが機能しているかを確認できます。

:::tip

有効になっているフィルタは「フィルタ」タブで管理できます。 「コンテンツブロッカー」画面では、すでに有効になっているフィルターのリストのみが表示されます。

:::

### AdGuard 一般 {#adguard_general}

「*AdGuard 一般*」は、広告をブロックするために最も重要なフィルターを組み合わせたコンテンツブロッカーです。 特に、「AdGuard ベースフィルタ」は常に有効にしておくことをお勧めします。

### AdGuard プライバシー {#adguard_privacy}

このコンテンツブロッカーは、カウンターやその他のウェブ解析・追跡ツールに対抗する主要なツールです。 「*AdGuard 追跡防止フィルタ*」はデフォルトで有効になっています。

### AdGuard ソーシャル {#adguard_social}

*AdGuard ソーシャル*には、ソーシャルメディアボタン、ウィジェット、スクリプト、アイコンに対するフィルタが含まれています。 ポップアップ、モバイルアプリのバナー、クッキー同意通知など、その他の迷惑要素フィルターもこのセクションに含まれます。 これらを有効にするには、「フィルタ」タブで「*SNSウィジェット*」を見つけてください。

### AdGuard セキュリティ {#adguard_security}

このコンテンツブロッカーは、いくつかのセキュリティ関連フィルタを統合しています。 *Malware Domains Blocklist* は、マルウェアやスパイウェアの拡散で悪名高いドメインをブロックします。 *Spam404* は、インターネット詐欺師からあなたを守ります。 *NoCoin Filter List* は、Coinhiveのようなブラウザベースのクリプトマイナーの動作を防止します。

### AdGuard その他 {#adguard_other}

*AdGuard その他* には、さまざまな機能を持つフィルタが含まれています。 例えば、検索広告や自己宣伝広告のブロックを解除するフィルターがあります。 場合によっては、この種の広告は他の広告よりも関連性が高く、邪魔にならないため、探しているものを正確に見つけるのに役立つので、有効にすることが便利だったりします。

:::note Disclaimer

We don't have any 'acceptable ads' paid by advertisers. 代わりに、ユーザーご自身が、 [検索広告とウェブサイトの自己宣伝](/general/ad-filtering/search-ads)広告のブロックを解除できるオプションを提供しています。

:::

### AdGuard カスタム {#adguard_custom}

![カスタムタブ](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

さらにフィルタを必要とする場合は、 *AdGuard カスタム*にそれらをユーザーから追加できます。 カスタムフィルタを追加するには、該当するフィールドにフィルタのURLまたはローカルファイルのパスを入力します。 [filterlists.com](https://filterlists.com/) で様々なフィルタを見つけることができます。

## ユーザールール {#userrules}

ユーザールールは、広告ブロックの効果をカスタマイズするために使用することができます。 ユーザールールは、手動で追加することも、インポートすることも、ページ上の要素をブロックしたときに自動的に作成することもできます。 独自のフィルタリングルールを追加するには、 [特別な構文](/general/ad-filtering/create-own-filters)を使用する必要があります。

## AdGuardについて {#about}

![このアプリについて](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

「このアプリについて」タブでは、AdGuard for Safari の現在のバージョンに関する情報や法的文書へのリンクをご確認いただけます。 GitHubリポジトリへのリンクもあります。 GitHubでは、製品開発のプロセスを確認し、機能要求を作成したり、バグを報告したりすることができます。

:::note Reminder

AdGuard for Safari は[App Storeから](https://apps.apple.com/app/adguard-for-safari/id1440147259)無料でダウンロードできます。 詳細なセットアップ方法は、 [こちらのナレッジベース記事](../installation)に掲載されています。

:::
