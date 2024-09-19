---
title: 高度な設定（詳細設定）ガイド
sidebar_position: 9
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)。

:::

## 詳細設定にアクセスする方法

:::caution

*高度な設定*を適用に変更することは AdGuard のパフォーマンスの悪化やインターネット接続の切断、もしくはあなたのセキュリティやプライバシーを侵害してしまう可能性があります。 そのため、このセクションで何かを変更するのは、あなたが何をしているのか確信がある場合、またはサポートチームから依頼された場合のみとすることをお勧めします。

:::

*高度な設定*にアクセスするには、まず AdGuard アプリを開き、ギアのアイコンをクリックし、*アドバンスド設定*を選択し、*高度な設定*をクリックしてください。

## 高度な設定

### Network settings

#### `network.extension.exclude.domains`

リストされたドメインが、*ネットワーク拡張*モードでフィルタリングより除外されます。 値を区切るには、カンマまたは改行を使用してください。

#### `network.extension.exclude.ports`

リストされたポートが、*ネットワーク拡張*モードでフィルタリングより除外されます。 値を区切るには、カンマまたは改行を使用してください。

#### `network.extension.route.exclude`

リストされたルートが、*ネットワーク拡張*モードでフィルタリングより除外されます。 IPアドレスもしくはCIDR宛先を用いてルートを設定してください。 値はカンマまたは改行で区切ります。

#### `network.extension.http.downgrade.bundleids`

*ネットワーク拡張*モードにおいて、通信がHTTP/2からHTTP/1.1に強制的にダウングレードされるアプリを設定できます。 バンドルIDはカンマか改行で区切ります。

#### `network.extension.monterey.force.split.tunnel`

ここでは、macOS Monterey にて*ネットワーク拡張*モードの場合、デフォルトで有効化されているAdGuardによるいわゆる「デフォルトルート」の使用を拒否することができます。 （AdGuardは「デフォルトルート」を、AdGuardと互換性のないiCloud プライベートリレー、またはメールでのアクティビティ保護を無効化するために使用します。）

この問題についての詳細は[こちらの記事](../icloud-private-relay)をご覧ください。

#### `network.extension.dns.redirect.exclude.bundleids`

ここでは、システムのDNSリソルバー経由ではなく、直接DNSクエリを取得させたいアプリを指定することができます（例えばいくつかのVPNクライアントやDNSフィルタリングアプリなど）。 *ネットワーク拡張*モードにおいて、DNSフィルタリングは指定されたアプリに対して無効となります。 バンドルIDはカンマか改行で区切ります。

#### `network.dns.filter.secure.request`

ローカルのDNSプロキシ（利用可能ならば）にDNSリクエストをリダイレクトします。

#### `network.https.ocsp.check`

`true`を設定すると、HTTPS 証明書の失効チェックが有効になります。

#### `network.tcp.keepalive.enabled`

コネクションがアクティブであることを確認するためとNATタイムアウトを更新するために、アイドル状態のコネクションに定期的にTCPパケットを送信します。

#### `network.tcp.keepalive.interval.seconds`

キープアライブ（keepalive）プローブを送信するまでのアイドル時間 (秒)。 「0」の場合、システムはデフォルトの値を使用します。

#### `network.tcp.keepalive.timeout.seconds`

応答がないpeerに再度keepaliveプローブを送信するまでの時間 (秒単位)。 「0」を指定すると、システムによって選択された値が使用されます。

#### `network.https.ech.enabled`

ECH Configs Lists内のconfigsを検索するために、ローカルDNSプロキシを使用します。 If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Chrome Certificate Transparency Policy（証明書透過性ポリシー）に基づき、ドメインのすべての証明書の信頼性を検証します。

#### `network.https.filter.http3.enabled`

`true` を設定すると、AdGuardがHTTP/3（QUICに基づくHTTPプロトコルの最新バージョン）経由で送信されるトラフィックをフィルタリングできるようになります。

#### `network.filtering.localnetwork`

`true` を設定すると、ローカル ネットワークフィルタリングが有効になります。

#### `network.filtering.localhost`

`true` を設定すると、LoopBack フィルタリングが有効になります。

### DNS settings

#### `dns.proxy.bootstrap.ips`

暗号化されたDNSサーバーのアドレスを決定するために使用されるDNSサーバーのIPアドレスを入力することができます。

#### `dns.proxy.fallback.ips`

ここでは、暗号化されたDNSサーバーが応答しなかった場合にバックアップとして使用されるDNSサーバーのIPアドレスのリストを指定できます。

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

通常のアップストリームがすべて失敗した場合、通常のクエリーはフォールバックアップストリームにリダイレクトされます。

#### `dns.proxy.detect.search.domains`

このオプションは、ローカルネットワークドメインの自動検出を有効にし、メインDNSサーバーの代わりにフォールバックDNSサーバーに自動的にリダイレクトします。

#### `dns.proxy.fallback.domains`

メインDNSサーバーの代わりにフォールバックDNSサーバーを使用するドメインをリストアップできます。

#### `dns.proxy.adblockrules.blocking.mode`

ここでは、広告ブロッカー スタイルのルールに対応して、ブロックされたリクエストに対するDNSサーバーのレスポンスのタイプを指定できます。

- 「0」REFUSEDで応答します
- 「1」nXDOMAINで応答します
- 「2」0.0.0.0 または `dns.proxy.blocking.response.IPv4.address` および/または `dns.proxy.blocking.response.IPv6.address`で指定されたアドレスで応答します。

#### `dns.proxy.hostrules.blocking.mode`

ここでは、ホストルールに応じて、ブロックされたリクエストに対するDNSサーバーのレスポンスのタイプを指定できます。

- 「0」REFUSEDで応答します
- 「1」nXDOMAINで応答します
- 「2」0.0.0.0 または `dns.proxy.blocking.response.IPv4.address` および/または `dns.proxy.blocking.response.IPv6.address`で指定されたアドレスで応答します。

#### `dns.proxy.blocking.response.IPv4.address`

ここでは、 `dns.proxy.adblockrules.blocking.mode` または `dns.proxy.hostrules.blocking.mode` が応答タイプ「ADDRESS」に設定されている場合に、ブロックされた「A」要求への応答として返される IPv4 アドレスを指定できます。

#### `dns.proxy.blocking.response.IPv6.address`

ここでは、 `dns.proxy.adblockrules.blocking.mode` または `dns.proxy.hostrules.blocking.mode` が応答タイプ「ADDRESS」に設定されている場合に、ブロックされた「AAAA」要求への応答として返される IPv6 アドレスを指定できます。

#### `dns.proxy.block.AAAA.requests`

ここでは、IPv6 DNSクエリのブロックを有効にすることができます。

#### `dns.proxy.blocked.response.TTL.in.seconds`

ここでは、ブロックされたリクエストに応答して返される TTL (time to live) 値を指定できます。

#### `dns.proxy.parallel.upstream.queries.enabled`

すべてのアップストリームが同時にクエリされるようになります。 最初の応答は返されます。

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

アップストリーム障害に対してSERVFAILパケットで応答します。

#### `dns.proxy.http3.enabled`

接続を高速化するために、DNS-over-HTTPS アップストリームに対して HTTP/3 を有効にします。

#### `dns.proxy.block.encrypted.client.hello.response`

応答からECH（Encrypted Client Hello）パラメータを削除します。

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

HTTPリクエストフラグメンテーションのサイズを調整します。 （有効な値: 1 〜 1500） もし無効なサイズが指定された場合、システムはデフォルトの値を使用します。

#### `stealth.antidpi.clienthello.split.fragment.size`

このオプションは、TCPパケットの断片化のサイズを指定し、ディープ・パケット・インスペクション（DPI）を回避するのに役立ちます。 （有効な値: 1 〜 1500） もし無効なサイズが指定された場合、システムはデフォルトの値を使用します。

#### `stealth.antidpi.http.space.juggling`

HTTPメソッドとURLの間に余分なスペースを追加し、「Host: 」欄の後のスペースを削除します。

#### `stealth.antidpi.split.delay.millisecond`

ここでは、断片化が実行される場合に、最初のフラグメントを送信した後の遅延をミリ秒単位で指定できます。

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

AdGuard にユーザースクリプトの URL を自動的に傍受させ、インストー ルウィンドウを開かせたい場合は、この機能を有効にします。

#### `subscription.link.interception.filter`

AdGuard に購読 URL (例: abp:subscribe など) を自動的に傍受させ、カスタムフィルタ設定ウィンドウを開くようにさせたい場合は、この機能を有効にします。
