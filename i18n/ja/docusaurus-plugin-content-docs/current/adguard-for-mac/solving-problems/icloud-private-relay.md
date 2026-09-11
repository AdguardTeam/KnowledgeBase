---
title: iCloud プライベートリレーと AdGuard
sidebar_position: 7
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

## 問題の簡単な説明

デフォルトでは、AdGuard は iCloud プライベートリレーを無効にしてしまう「デフォルトルート」というものを使用しています。

現在、AdGuard と iCloud プライベートリレーは同時に動作できません。 iCloudプライベートリレーは、AdGuardがネットワーク接続をフィルタリングする前にトラフィックを暗号化してしまうため、AdGuardは広告をブロックできなくなります。 iCloud プライベートリレーがアクティブになると、あらゆるフィルタリング（ローカルフィルタリングを含む）が不可能になります。 したがって、AdGuard はトラフィックをフィルタリングしたり、Safari でDNS フィルタリングを実行したりすることはできません。 しかし、AdGuard は依然として他のブラウザのトラフィックをフィルタリングしています。 iCloud プライベート リレーを引き続き使用するには、 [AdGuard for Safari](https://adguard.com/adguard-safari/overview.html) のインストールを検討してください。

Mac で VPN アプリを使用する場合も同様です。iCloud プライベートリレーと VPN サービスのどちらを使用するかを選択する必要があります。

## より詳しい説明

AdGuard for Macvは、ネットワーク拡張APIに基づくmacOS内蔵のソケットフィルタリングを使用するようになりました。 この新しくてかなりバグの多いメカニズムは、古き良きカーネル拡張に取って代わりました。 この1年半の間に、私たちはアップルに新しいフィルタリング方法に関するバグを20件以上（！）報告してきました。

ネットワーク拡張APIには、ルートライクなエントリーのリストを持つVPNライクなコンフィギュレーションがあります。 Big Surでは、AdGuardは「split-tunnel」ルールを開発して、「デフォルトルート」ルールを作成するのを避けていました。なぜなら、これはBig Surの初期リリースで問題を引き起こすからです。

Monterey では、iCloud プライベートリレーが登場しました。 「メール」アプリのプライバシー機能でもプライベートリレー サーバーが使用されます。

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. iCloud プライベートリレーは、ライブラリレベル（AdGuard が動作するソケットレベルに到達する前）で接続に適用されます。
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. プライベートリレーはそのルールを検出すると、自動的に無効になります。 つまり、AdGuard は Monterey 上でシームレスに動作しますが、その場合、iCloud プライベート リレーは無効になります。

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). 私たちはこの問題の解決策を探し続けています。 One of the options is implementing HTTP/3 proxy filtering.

## おすすめの解決策

AdGuard を、 [AdGuard VPN](https://adguard-vpn.com/) のような従来の VPN サービスと併用することをお勧めします。

## 代替の解決策

「デフォルト ルート」を無効にすることで、AdGuard が「デフォルト ルート」を使用しないようにすることができます。 これは、アドバンスド設定 →高度な設定→ `network.extension.monterey.force.split.tunnel` から実行できます。

![高度な設定でデフォルトルートを無効にする *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

この場合、上記のような問題が発生してしまうことにご注意ください。
