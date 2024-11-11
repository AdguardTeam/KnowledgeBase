---
title: AdGuard VPN との併用モード
sidebar_position: 6
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」についてです。 デバイス全体を保護するこのアプリは、[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

AdGuard for Android は、トラフィックをフィルタリングするためにローカルVPNを作成します。 したがって、AdGuard for Android の実行中は、他のVPNアプリを使用することはできません。 ただし、AdGuard と [AdGuard VPN](https://adguard-vpn.com/) の両アプリを一緒に使える「併用モード」があります。

このモードでは、AdGuard VPN は、AdGuard 広告ブロッカーがトラフィックをルーティングするアウトバウンドプロキシサーバーとして動作します。 これにより、AdGuard はVPNインターフェイスを作成し、ローカルで広告とトラッカーをブロックし、AdGuard VPN はすべてのトラフィックをリモートサーバー経由でルーティングします。

AdGuard VPN を無効にすると、AdGuard は AdGuard VPN をアウトバウンドプロキシとして使用しなくなります。 AdGuard を無効にすると、AdGuard VPN は独自のVPNインターフェイスを介してトラフィックをルーティングするようになります。

AdGuard 広告ブロッカーがある状態で AdGuard VPN をインストールすると、前者はそれを検出し、自動的に「AdGuard VPN との併用モード」を有効にします。 逆も同じです。 併用モードを有効の時は、AdGuard VPN アプリからアプリの除外を管理したり、DNSサーバーに接続したりすることはできませんのでご注意ください。 _設定_ → _フィルタリング_ → _ネットワーク_ → _プロキシ_ → _プロキシ経由で動作するアプリ_ から、VPN トンネル経由でルーティングされるアプリを指定できます。 DNSサーバーを選択するには、AdGuardアプリ → _AdGuard による保護_ → _DNS通信を保護_ → _DNSサーバー_ を開きます。
