---
title: AdGuard for Windows の既知の問題
sidebar_position: 10
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

## AdGuard for Windows と AdGuard VPN for Windows の互換性問題

AdGuard for Windows と AdGuard VPN for Windows をインストールすると、何もしなくても連携して動作し始めます。 ただし、一部のデフォルト設定を変更すると、両アプリを同時に実行したときにアプリが正しく動作しなくなる可能性があります。

AdGuard for Windows には、2 つの特殊設定があります: *リダイレクト・ドライバ・モードを使用する* 」と「*plocalhostをフィルタリングする*」です。 デフォルトでは、1つ目は無効、2つ目は有効になっています。 デバイスで AdGuard 広告ブロッカーと AdGuard VPN の両方が有効になっている場合、この二つの設定のいずれかを変更すると、必然的に AdGuard のフィルタリングが中断されてしまいます。

これらの設定を変更する必要があるのは、AdGuard 広告ブロッカーと、ウイルス対策、VPN、ネットワークフィルタなどのネットワークレベル系アプリの同時操作に関連する問題を解決する場合のみです。 上記の設定のデフォルト状態を変更する必要があり、AdGuard 広告ブロッカーと AdGuard VPN を同時に正しく動作させたい状況に遭遇した場合は、 [GitHub で問題を作成](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose)してください。専用的にサポートさせていただきます。

現在、アプリの併用に関する上記の制限を克服するために取り組んでおります。
