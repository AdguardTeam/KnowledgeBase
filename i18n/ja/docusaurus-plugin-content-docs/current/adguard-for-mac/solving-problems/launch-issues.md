---
title: macOSでAdGuardアプリが起動しない問題
sidebar_position: 6
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

時折、macOSでAdGuardのNetwork拡張モジュールが破損し、AdGuardアプリが使用できなくなる場合があります。 この場合、お使いのOSのバージョンに応じて、以下のいずれかの方法で対処してください。

## macOS 11以降でのAdGuard起動問題

Big Sur、Monterey、Venturaのオペレーティングシステムで AdGuard for Mac の起動に問題がある場合は、こちらの手順をご利用ください:

1. Macを再起動し、 [リカバリー（復旧）モードに入る](https://support.apple.com/ja-jp/HT204904)
1. SIPを無効にする（**ユーティリティー**メニューから「**ターミナル**」を起動し、 `csrutil disable`と入力します）
1. Macを再起動する
1. AdGuardアプリを閉じ、「**ターミナル**」を開き、 `systemextensionsctl reset`と入力します。
1. Macを再起動し、リカバリー（復旧）モードに入る
1. SIPを有効にする（**ユーティリティー**メニューから「**ターミナル**」を起動し、 `csrutil enable`と入力します）
1. AdGuardアプリを起動し、保護をオンにします。

## macOS 10以下でのAdGuard起動問題

Sierra、Mojave、Catalinaのオペレーティングシステムで AdGuard for Mac の起動に問題がある場合は、こちらの手順をご利用ください:

1. 「**ターミナル**」を開き、`ls -@lOae /private/var/db/KernelExtensionManagement`というコマンドを入力する
1. （以下のスクリーンショットのように）`restricted` フラグがなし（-）になっていることを確認してください。 ![コマンドの例 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Macをリカバリーモードで再起動する
1. **ユーティリティ** → **ターミナル** を開く
1. `csrutil disable` と入力する
1. 管理者パスワードを入力する
1. Macを再起動する
1. 「**ターミナル**」を開き、 `sudo chflags restricted /private/var/db/KernelExtensionManagement` というコマンドを入力する
1. Macをリカバリーモードで再起動する
1. 「**ユーティリティ**」→「**ターミナル**」→ `csrutil enable` と入力する → 管理者パスワードを入力する → Macを再起動する
1. AdGuard 保護をオンにする
