---
title: 保護をオンにできない
sidebar_position: 2
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

何らかの理由で AdGuard 保護を有効にできない場合は、以下の手順を実行してください:

1. メニューバーでAdGuardアイコンをクリックし、 *アドバンスド設定* → *設定をリセット...* → *AdGuardを終了...* に進みます。

2. Spotlight 検索で「ターミナル」と入力し、 `sudo rm -R /Library/Application\ Support/com.adguard.adguard` というコマンドを入力して実行します。

3. コンピュータを再起動します。

4. ターミナルを再度開き、 `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` というコマンドを入力して実行します。 「`そのようなファイルまたはディレクトリがありません`」のようなメッセージが表示されるはずです。

5. AdGuard を起動し、プロンプトが表示されたらログイン情報を入力します。
