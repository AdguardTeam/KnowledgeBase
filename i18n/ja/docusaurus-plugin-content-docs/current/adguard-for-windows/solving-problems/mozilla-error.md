---
title: "`MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` エラーを修正する方法"
sidebar_position: 12
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

[HTTPSフィルタリング](/general/https-filtering/what-is-https-filtering)が有効な AdGuard for Windows の一部のユーザーは、google.comやyoutube.comなどの特定のウェブサイトにアクセスできないことがあります。 ウェブサイトを開く代わりに、厳格な証明書ピンニングを持つブラウザは `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` エラーを表示します。

影響を受けたブラウザのリストはこちらです：

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

お使いのデフォルトブラウザがこれらのいずれかである場合は、以下の手順で問題を解決してください：

1. ブラウザのアドレスバーに「about:config」と入力します。
2. 表示されるメニューの検索フィールドに「security.cert_pinning.enforcement_level」と入力します。
3. `security.cert_pinning.enforcement_level` パラメータを 2 から 1 に変更します。
