---
title: フィルタ
sidebar_position: 1
---

:::info

この記事は、お使いのブラウザのみを保護する「AdGuard ブラウザ拡張機能」に関するものです。 デバイス全体を保護するには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

広告ブロックはどの広告ブロッカーにとっても主要な機能であり、AdGuard ブラウザ拡張機能も例外ではありません。 広告ブロックはフィルタリストというものに基づいて行われます。フィルタリストとは、特別な言語で記述された一連のルールセットです。 これらのルールは、どの要素がブロックされるべきで、どの要素がブロックされるべきではないかを示しています。 AdGuard はルールを解釈し、それらに基づいてウェブリクエストを変改します。 その結果、ウェブページに広告が表示されなくなります。

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

フィルタはすべて、役割に応じてグループ化されています。 例えば、広告ブロックフィルタ、プライバシー保護フィルタ、SNS関連のフィルタ、などのカテゴリがあります。 個々のフィルタを有効化することもできますし、グループ全体を一括に有効化することもできます。

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## カスタムフィルタ

While the features of other filter groups are more or less self-explanatory, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

このタブでは、もとからは拡張機能に入っていないフィルタを追加することができます。 インターネット上に[公開されているフィルタが数多く](https://filterlists.com)あります。 さらには、ご自身で独自のフィルタを作成して追加することもできます。 それどころか、フィルタを組み合わせて、広告ブロックを好きなようにカスタマイズすることもできます。

フィルタを追加するには、「カスタムフィルタを追加する」をクリックし、追加したいフィルタのURLまたはファイルパスを入力して「次へ」をクリックします。

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## ユーザールール {#user-rules}

「ユーザールール」は、広告ブロック機能のカスタマイズに役立つもう1つのツールです。

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

新しいルールを追加する方法は、複数あります。 最も簡単なのはルールを手入力する方法ですが、[ルール構文](/general/ad-filtering/create-own-filters)についての知識が必要です。

既成のフィルタリストをテキストファイルからインポートすることもできます。 ※**それぞれのルールが改行で区切られるようにしてください**。なお、既成のフィルタリストのインポートは「カスタムフィルタ」タブで行ったほうが便利であることに留意してください。

また、作成したフィルタリングルールをエクスポートすることもできます。 これは、ブラウザまたはデバイス間でルールのリストを転送するのに便利です。

ウェブサイトをホワイトリストに追加する（詳細は後述）か、アシスタントツールを使用してページ上の要素を非表示にすると、対応するルールも自動的にユーザールールに保存されます。

## ホワイトリスト

「ホワイトリスト」を使って、特定のウェブサイトをフィルタリングの対象から外しておくことができます。 リストに入っているウェブサイトに対してブロックルールは適用されません。

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

「ホワイトリスト」の動作を逆にすることもできます。つまり、リストに追加されたウェブサイト以外で広告ブロックされなくなる、といった動作になります。 そうするには、「ホワイトリストを逆転する」オプションを有効にしてください。

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

ホワイトリストをインポートおよびエクスポートすることもできます。 これは、同じホワイトリストルールをお使いの各ブラウザに適用したい場合などに便利です。
