---
title: Safari拡張機能
sidebar_position: 3
---

:::info

この記事は、お使いのSafariブラウザのみを保護する「AdGuard  for Safari」に関するものです。 デバイス全体を保護するには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

## Safari拡張機能とは

Safari拡張機能は、Safariウェブブラウザで機能を追加する小さなソフトウェアプログラムです。 ブラウザに内蔵されていない機能を追加することで、ユーザーはブラウジング体験をカスタマイズして改善させることができます。 AdGuard for Safari は、主にSafariで開かれたウェブサイトにフィルタリングルールを適用するために拡張機能を使用します。

## 仕組み

ウェブサイト上の広告、トラッキング、迷惑要素をブロックするために、AdGuardはフィルタリングルールを使用します。 AdGuard フィルタとユーザーのカスタムフィルタのルールは、Safari が読み取れるものに変換され、6つのSafari拡張機能に統合されます:

- AdGuard 一般
- AdGuard プライバシー
- AdGuard ソーシャル
- AdGuard セキュリティ
- AdGuard その他

各コンテンツブロッカー拡張機能において、最大150,000の有効フィルタリングルールが許可されています。 ほとんどのフィルタグループのルール数は150,000を超えません。 ただし、言語特化フィルタやカスタムフィルタを有効にしすぎると、制限を超える可能性があります。 このような場合、制限を超えたルールの中から、ランダムには一部のルールが自動的に無効化されるため、誤った広告ブロックの可能性が出てきます。 **必要なフィルタ以外は有効にしないことを強くお勧めします。**

もう一つの、「*AdGuard for Safari*」という拡張機能は、Safariの検索バーの横にAdGuardアイコンを追加し、複雑な広告をブロックするための高度なルールを使用できるようにします。

![Safari拡張機能](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

では、それぞれの拡張機能について詳しく説明いたします。

## 6個のコンテンツブロッカー拡張機能

「*AdGuard 一般*」は、フィルタ<からのルールを適用します。これらのフィルタは、*フィルタ* → *広告ブロッキング* および *フィルタ* → *言語特化フィルタ* で見つけることができます。 この拡張機能は、効果的な広告ブロックに焦点を当て、特定の言語の広告のフィルタリング、お含みます。

「*AdGuard プライバシー*」は、 *フィルタ* → *プライバシー*にあるフィルタのルールを適用します。 あらゆるトラッキング（個人情報追跡）メカニズムをブロックし、あなたのブラウジングアクティビティとオンラインプライバシーが保護されるようにします。

「*AdGuard ソーシャル*」は、SNS系フィルタからのルールを適用します。これらのフィルタは、*フィルタ* → *SNSウィジェット* および *フィルタ* → *迷惑要素* で見つけることができます。 ポップアップ、ソーシャルメディアボタン（いいね！、シェアなど）、オンラインアシスタントウィンドウ、および Web ページ上のその他の煩わしい要素をブロックします。

「*AdGuard セキュリティ*」は、 *フィルタ* → *セキュリティ*にあるフィルタのルールを適用します。 この拡張機能は、潜在的に有害な要素を識別してブロックし、悪意のあるコンテンツからユーザーを保護します。

「*AdGuard その他*」は上記のカテゴリーに該当せず、 *フィルタ* → *その他*にあるフィルタのルールを適用します: *検索広告と自己宣伝のブロックを解除するフィルタ*、*AdGuard DNS フィルタ*、*AdGuard 実験的フィルタ*

「*AdGuard カスタム*」は、独自に追加したフィルタのルールを*カスタムフィルタ*に適用します。

ユーザールールとホワイトリストルールはすべての拡張機能に含まれています。

## 「AdGuard for Safari」拡張機能

*AdGuard for Safari activates the AdGuard icon next to the search bar. It's useful if you want to quickly set up protection for a specific website or block ads manually. It also contains advanced rules that aren't converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Safariの拡張機能を管理する方法

1. Safariを開き、画面左上の *Safari* をクリックしてメニューを展開します。

    ![Safari設定 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Click *Settings...*

1. 🧩「*拡張機能*」タブを選択します。

    ![拡張機能タブ](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## AdGuard for Safari にアクセス権限が必要な理由

*AdGuard for Safari* 拡張機能を有効にすると、**ウェブページのコンテンツへのアクセス**と**閲覧履歴へのアクセス**が必要になります。 これらのアクセス権限が必要な理由は以下の通りです:

- ウェブページのコンテンツへのアクセスは、手動による広告ブロックや高度なブロックルールを正しく機能させるために必要です。
- 閲覧履歴へのアクセスは、Webサイトの保護ステータスを確認し、どの高度なルールを適用すべきかを判断するために必要です。

※AdGuardは、アクセス権限を通じて得たデータを他の目的で使用したり、誰かと共有したりすることは一切ありません。 詳しくは、[プライバシーポリシー](https://adguard.com/privacy.html)をご覧ください。
