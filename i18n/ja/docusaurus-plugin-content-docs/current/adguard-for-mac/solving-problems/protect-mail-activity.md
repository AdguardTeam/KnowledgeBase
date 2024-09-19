---
title: '「メールでのアクティビティ保護」と AdGuard'
sidebar_position: 8
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

## 一言で言えば

Apple の「メール」アプリは、電子メールから画像をダウンロードするときにユーザーの IP アドレスを隠すために、プロキシを使用するようになっています。

![メールのプライバシー保護](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

しかし、アクティブな VPN 接続がある場合、この機能は機能しません。 AdGuard は VPN として扱われるため、画像が自動的にプリロードされるなくなります。

Apple はこの問題について、[こちら](https://support.apple.com/HT212797)で説明しています。

## より詳しい説明

AdGuard for Macvは、ネットワーク拡張APIに基づくmacOS内蔵のソケットフィルタリングを使用するようになりました。 この新しくてかなりバグの多いメカニズムは、古き良きカーネル拡張に取って代わりました。 この1年半の間に、私たちはアップルに新しいフィルタリング方法に関するバグを20件以上（！）報告してきました。

ネットワーク拡張APIには、ルートライクなエントリーのリストを持つVPNライクなコンフィギュレーションがあります。 Big Surでは、AdGuardは「split-tunnel」ルールを使用して、「デフォルトルート」ルールを作成するのを避けていました。なぜなら、これはBig Surの初期リリースで問題を引き起こすからです。 これらの問題は Monterey で解決されたため、「デフォルトルート」ルールの使用を妨げるものはもう何もありません。

Monterey では、iCloud プライベート リレーが登場しました。 Mail.app のプライバシー機能でもプライベートリレー サーバーが使用されます。

その結果、AdGuard は iCloud プライベートリレーやメールアプリのプライバシー機能と連携できなくなっています。

1. iCloud プライベートリレーは、ライブラリレベル（AdGuard が動作するソケットレベルに到達する前）で接続に適用されます。
2. iCloud プライベートリレーは QUIC を使用しますが、HTTP/3 フィルタリングはまだ利用できないため、AdGuard はQUICをフィルタリングできません。
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. iCloud プライベートリレーを使用し、AdGuard を「split-tunnel」モードに切り替えると、Safari で Web サイトを開くことができなくなります。
5. Monterey でこの問題を回避するには、「デフォルトルート」ルールを適用します。 プライベートリレーはそのルールを検出すると、自動的に無効になります。 つまり、AdGuard は Monterey 上でシームレスに動作しますが、その場合、iCloud プライベート リレーは無効になります。

`network.extension.monterey.force.split.tunnel` は「Big Sur」並みの動作を復元しますが、(3) と (4) により Web サイトへのアクセスが切断される可能性があります。 私たちはこの問題の解決策を探し続けています。 考えられるオプションのひとつは、HTTP/3フィルタリングの実装です。

## おすすめの解決策

現時点では、新しい Apple のプライバシー機能ではなく、 [AdGuard VPN](https://adguard-vpn.com/) などのより従来的な VPN サービスを使用することをお勧めします。
