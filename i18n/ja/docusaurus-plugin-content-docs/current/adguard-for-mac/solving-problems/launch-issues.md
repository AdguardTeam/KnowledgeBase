---
title: macOSでAdGuardアプリが起動しない問題
sidebar_position: 6
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Mac」について書いています。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

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
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal**.
1. Enter `csrutil disable`.
1. Enter administrator password.
1. Reboot your Mac.
1. Open **Terminal** and enter the following command: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal** → Enter `csrutil enable` → Enter administrator password → Reboot your Mac.
1. Enable AdGuard protection.
