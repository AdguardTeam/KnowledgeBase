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

![ウェブ拡張機能メニュー *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

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

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### Safari を使った手順

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
