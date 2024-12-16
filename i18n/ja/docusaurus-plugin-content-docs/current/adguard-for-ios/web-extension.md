---
title: Safari Web拡張機能（Safari web extension）
sidebar_position: 3
---

Web拡張機能は、Safariにカスタム機能を追加します。 Web 拡張機能についてより詳しくは、[こちらのAppleドキュメンテーション](https://developer.apple.com/documentation/safariservices/safari_web_extensions)をご覧ください。

![SafariでのWeb拡張機能の見た目 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_ja.png)

AdGuardのSafariウェブ拡張機能は、iOS 15の新機能を活用して AdGuard for iOS の機能を強化してくれるツールです。 これにより、AdGuardは高度なフィルタリングルールを適用することで、より多くの広告をブロックすることができるようになります。

## ウェブ拡張機能の効果

デフォルトでは、Safariはコンテンツブロッカー用にベーシックなツールしか提供していません。 これらのツールでは、他のオペレーティング・システム（Windows、Mac、Android）のコンテンツブロッカー並みのパフォーマンスは発揮できません。 たとえば、他のプラットフォーム上のAdGuardアプリは、 [CSSルール](/general/ad-filtering/create-own-filters#cosmetic-css-rules)、 [拡張CSSセレクター](/general/ad-filtering/create-own-filters#extended-css-selectors)、 [スクリプトレット（Scriptlets）](/general/ad-filtering/create-own-filters#scriptlets)などのような強力な広告対策技術を使用できます。 複雑なケース（YouTubeのプリロール広告など）を扱う場合、こうしたユーティリティはなかなか代用できないものです。

AdGuard の Safari Web 拡張機能は、これらのタイプのフィルタリングルールの適用を可能にすることで、AdGuard for iOS を補完します。

さらに、AdGuard の Safari Web 拡張機能は、ブラウザからiOS用AdGuardの管理を可能にします。 Safariで*拡張機能*ボタンをタップします。これはジグソー🧩アイコンのボタンで、デバイスの種類に応じて、アドレスバーの左側または右側に配置されている場合があります。 一覧で **AdGuard** を見つけてタップします。

![ウェブ拡張機能メニュー *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_ja.png?1)

> iPadでは、ブラウザのアドレスバーにあるAdGuardアイコンをタップすることで、AdGuardのSafariウェブ拡張機能に直接アクセスできます。

以下のオプションのリストが表示されます:

- **ウェブサイトでの保護の有効化/無効化**　 スイッチをオフにすると、現在のウェブサイトに対してAdGuardが完全に無効になり、対象の除外ルールが追加されます。 スイッチをオンに戻すと、ウェブサイトでの保護が再開され、除外ルールが削除されます。 この変更が有効になるには、少し時間がかかる場合があります。

- **ページ上の要素を手動でブロック**　 「*このページで要素をブロックする*」ボタンをタップすると、要素の手動ブロック画面が表示されます。 非表示にしたいページ上の要素を選択し、選択範囲を調整し、結果のプレビューを確認して、削除を確定します。 対応するフィルタリングルールが AdGuard に追加されます。（後でそのルールを無効にしたり、削除して変更を元に戻すことができます。）

- **問題・不具合を報告する**　 上にスワイプすると、「*問題を報告する*」ボタンが表示されます。 現在のページですり抜けた広告やその他の問題を報告する際にご利用ください。

## AdGuardのSafariウェブ拡張機能を有効にする方法

:::note

※AdGuardのSafariウェブ拡張機能は、動作するためにウェブページのコンテンツにアクセスする必要がありますが、広告ブロック以外の目的でこのアクセス権限を使用することはありません。

:::

### iOS設定を使った手順

ウェブ拡張機能はスタンドアロンツールではなく、AdGuard for iOS が必要です。 お使いのデバイスに AdGuard for iOS がインストールされていない場合は、まず[インストール](../installation)して初期設定を完了してください。

次に、 *設定 → Safari → 機能拡張* を開きます。

!["Safari"を選択 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_ja.png)

!["拡張機能"を選択 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_ja.png)

「**これらの機能拡張を許可**」セクションで「**AdGuard**」をタップします。

![これらの拡張機能を許可するセクションで AdGuard を選択 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_ja.png)

「AdGuard」のスイッチをオンにします。 同画面の下の「*すべてのWebサイト*」が「*許可*」または「*尋ねる*」になっていることを確認してください。 「*許可*」を選択すると、新しい Web サイトにアクセスするたびに許可を与える手間がなくなります。 サイトごとに許可を与えたい場合には「*尋ねる*」選択してください。

![拡張機能設定 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_ja.png)

### Safari を使った手順

SafariブラウザからWeb機能拡張を有効にすることもできます。 Safarアドレスバーの横の*拡張機能ボタン*（🧩）をタップします。（見つからない場合は、アドレスバーの横の「`ぁあ`」アイコンをタップします。）

![Safariでぁあアイコンをタップ *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_ja.png)

「*機能拡張を管理*」を開きます。 **AdGuard**のスイッチをオンにします。

![拡張機能 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_ja.png)

![拡張機能 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_ja.png)

この方法を使用した場合でも、Safari の設定に移動して、AdGuard 拡張機能に必要な権限を付与する必要がある場合があります。

これで、利用可能なWeb拡張機能の中にAdGuardが表示されるはずです。 aAメニュー→AdGuardで**ℹ️アイコン**が表示された場合、 そのアイコンをタップして「**高度な保護機能**」を*オン*にしてください。

:::note

※「高度な保護機能」は、AdGuardプレミアム版でのみご利用いただけます。

:::

または、AdGuardアプリから直接、**AdGuardによる保護**（画面下の左から2番目の盾アイコン）で**高度な保護機能**を有効にすることもできます。

※「高度な保護機能」は、iOS 15以降でのみご利用いただけることにご注意ください。
