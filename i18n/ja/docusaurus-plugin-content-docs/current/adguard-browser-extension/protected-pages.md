---
title: ブラウザで保護されているページ
sidebar_position: 6
---

:::info

この記事は、お使いのブラウザのみを保護する「AdGuard ブラウザ拡張機能」に関するものです。 デバイス全体を保護するには、[AdGuardアプリをダウンロード](https://adguard.com/download.html?auto=true)してください。

:::

AdGuard ブラウザ拡張機能などの Web 拡張機能を使用する場合、アクセスや権限を禁止する特定の制限付きドメインが存在します。 その結果、広告ブロック拡張機能は、これらのページのコンテンツと相互作用したり、コンテンツを変更したりすることはできません。 言い換えれば、これらのウェブページの広告やその他の迷惑な要素をブロックすることは、ブラウザ側で許可されていないのです。

## Chromium 系ブラウザの制限

Google ChromeなどのChromiumベースブラウザは、拡張機能がアクセスできないように制限されたドメインのリストを保持しています。 これらのドメインには以下が含まれます:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- `chrome://`、 `chrome-extension://`、または `https://chrome.google.com/webstore/` で始まるURL
- PDFファイル
- Javascriptが無効になっているページ
- セキュリティ警告ページ
- 404エラーやネットワークエラーなどのエラーページ
- `view-source:` または `data:` で始まるURL

## Firefoxブラウザの制限

同様に、Firefoxブラウザには、拡張機能の使用が許可されていない独自の制限ドメインがあります。 これらの制限されているドメインには以下が含まれます:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Firefoxの制限を変更する方法

※詳細設定を変更すると、Firefoxの安定性とセキュリティに影響を与える可能性があります。 これは上級ユーザーである場合のみに推奨されます。 関連するリスクを認識した上で、保護されたページで許可されていないアドオンを有効にしたい場合は、以下の手順をご利用ください:

1. メニューボタン → **アドオンとテーマ** → **拡張機能** をクリックします。
2. 制限のあるサイトで有効にしたい拡張機能（この場合はAdGuard）をクリックします。
3. [ **制限のあるサイトで実行**] セクションで [ **許可** ] を選択します。

あるいは、以下の方法もあります:

1. 新しいタブを開き、アドレスバーに **about:config **と入力します。
2. **戻る**を押します。 警告が表示されることがあります。 この場合は、「 **リスクを受け入れて続行**」をクリックします。
3. `extensions.webextensions.restrictedDomains` を検索します。 この設定が見つからない場合は、作成することができます。 **Boolean** を選択し、「**+**」をクリックするだけで追加できます。
4. この設定の隣にあるトグルボタンをクリックし、その値を `false` に変更します。
5. Firefoxを再起動します。

この件に関する詳細は、[Mozillaのサポートサイトの記事](https://mzl.la/3POXoWi)をお読みください。
