---
title: 証明書の手動インストール
sidebar_position: 1
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

AdGuard for Mac は、 [HTTPS トラフィックをフィルタリング](/general/https-filtering/what-is-https-filtering)できるように、ルート証明書を証明書ストレージにインストールする必要があります。 この操作は、ほとんどの場合、アプリを初めて実行する際に自動的に実行されますが、Geckoベースのブラウザ（Firefox、Waterfoxなど）のユーザーで、ブラウザにマスターパスワードが設定されている場合は、追加の手順が必要になる場合があります（これらのブラウザは、システムの証明書ストレージではなく、独自の証明書ストレージを使用することが理由です）。 要求が表示されたら（AdGuardに証明書ストレージへのアクセスを許可するために）マスターパスワードを入力するか、証明書を手動でインストールする必要があります。

Firefox 系ブラウザに証明書を手動でインストールする方法:

  1. 環境設定を開く

  2. *プライバシー & セキュリティ* → *証明書* に移動します。

  3. *証明書の表示* をクリックします。

  4. *権限* タブに移動し、 *インポート...* ボタンをクリックします。

  5. ファイル `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` を選択するか、Chromium ベースのブラウザ (Google Chrome や新しい Edge など) を使用して、AdGuard で HTTPS フィルタリングがオンの状態で http://local.adguard.org/cert からダウンロードします。

Geckoベースのブラウザによって、必要なアクションは異なる場合がありますが、基本的な流れと `AdGuard Personal CA.cer `ファイルへのパスは同じです。
