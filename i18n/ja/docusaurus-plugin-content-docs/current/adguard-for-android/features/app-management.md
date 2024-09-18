---
title: アプリの管理
sidebar_position: 2
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」についてです。 デバイス全体を保護するこのアプリは、[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

「アプリの管理」機能の画面は、画面下部の左から3番目のアイコンをタップすることでアクセスできます。 このセクションでは、デバイスにインストールされているすべてのアプリの、アプリごとのアクセス許可とフィルタリング設定（広告ブロックの常時オン／オフなど）を管理できます。

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

アプリをタップすると、そのアプリに対する設定を管理できます:

- AdGuard経由で通信をルーティングするかどうか
- このアプリの広告とトラッカーをブロックする（アプリのコンテンツをフィルタリングする）かどうか
- HTTPSトラフィックをフィルタリングするかどうか（非ブラウザアプリの場合、[システムストアにAdGuardのCA証明書をインストールする](/adguard-for-android/solving-problems/https-certificate-for-rooted/)必要があり、ルート化デバイスで利用可能）
- 指定したプロキシサーバー経由でルーティングするか、または併用モードの場合は AdGuard VPN を経由させるか

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

コンテキストメニューからは、アプリの統計情報にアクセスすることもできます。

![App management in Chrome. Context menu \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### "問題のない"アプリと"問題あり"アプリ

Most apps work correctly when filtered. このような"問題なし"アプリのトラフィックは AdGuard を経由してルーティングされ、デフォルトでフィルタリングされます。

Download Manager、ラジオ、UIDが1000および1001のシステムアプリ（例：Google Playサービス）など、一部のアプリは"問題あり"で、AdGuardを経由すると正しく動作しない可能性があります。 そのため、すべてのアプリをルーティングまたはフィルタリングしようとすると、次のような警告が表示されることがあります:

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

お使いのデバイスにインストールされているすべてのアプリが正常に動作するよう、問題なしアプリのみをAdGuard経由でルーティングすることを強くお勧めします。 フィルタリングをしない方がいい"問題あり"アプリの完全なリストは、_設定_ → _一般設定_ → _詳細設定_ → _ローレベル設定_ → _保護機能_ → _除外されているアプリ_ で確認できます。
