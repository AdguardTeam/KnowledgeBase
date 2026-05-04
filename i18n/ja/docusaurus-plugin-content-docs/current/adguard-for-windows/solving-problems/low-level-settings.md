---
title: 詳細設定（旧「ローレベル設定」）ガイド
sidebar_position: 7
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

（以前は旧名「ローレベル設定」として知られていた）詳細設定には、ほとんどの場合、一般ユーザーの知識を超え、日常的な使用では必要ないオプションが含まれています。 AdGuard for Windows は、これらの機能を変更することなく動作するように設計されていますが、一部のコーナーケースや一般的でない問題を解決する際に役立つ追加機能が詳細設定にあります。

:::caution

*詳細設定*を考えずに変更することは AdGuard のパフォーマンスの悪化やインターネット接続の切断、もしくはあなたのセキュリティやプライバシーを侵害してしまう可能性があります。 このセクションで何かを変更するのは、あなたが何をしているのか自信がある場合、またはサポートチームから依頼された場合のみとすることをお勧めします。

:::

## 詳細設定にアクセスする方法

*詳細設定*に移動するには、メインウィンドウで⚙️*「設定」→「一般設定」を*クリックし、「*詳細設定*」までスクロールダウンします。 または、トレイメニューで*「詳細設定」→「詳細設定...」* を選択します。

## 詳細設定

詳細設定を開くと、以下のオプションが表示されます:

### TCP Fast Openをブロックする

有効にすると、AdGuardはEdgeブラウザのTCP Fast Openをブロックします。 この設定の変更を適用するには、ブラウザを再起動する必要があります。

### Encrypted Client Hello を使用する

暗号化されたインターネット接続には、暗号化されていない部分があります。 その部分とは、接続先のサーバー名を含む最初の通信パケットです。 Encrypted Client Hello 技術は、この問題を解決し、この暗号化されていない部分を暗号化してくれます。 この機能を利用するには、「*Encrypted Client Hello を使用する*」オプションを有効にします。 このオプションは、ローカル DNS プロキシを使用して、ドメインの ECH 構成を検索します。 見つかった場合、ClientHello パケットは暗号化されます。

### Webサイトの証明書の透明性を確認する

Chrome Certificate Transparency Policy（証明書透過性ポリシー）に基づき、ドメインのすべての証明書の信頼性を検証します。 証明書が Chrome Certificate Transparency Policy（Chrome 証明書の透明性に関するポリシー）に準拠していない場合、AdGuard は Web サイトをフィルタリングしません。 そして Chrome はそれをブロックします。

### SSL/TLS証明書の失効チェックを有効にする

このオプションを有効にすると、非同期OCSPチェックが実行され、ウェブサイトのSSL/TLS証明書が失効しているかどうかがチェックされます。

OCSP チェックが最小タイムアウト内に完了すると、AdGuard は結果を直ちに適用します（証明書が取り消されている場合は接続をブロックし、証明書が有効な場合は接続を確立します）。

検証に時間がかかりすぎる場合、AdGuardは接続を確立し、バックグラウンドでチェックを続けます。 証明書が失効している場合は、そのドメインへの現在の接続および今後の接続はブロックされるようになります。

### 設定で「AdGuard VPN」項目を表示する

このオプションを有効にすると、[設定] に [AdGuard VPN] タブが表示され、そのアプリやホームページを簡単に開くことができます。

### フルパスを入力してアプリをフィルタリングから除外する

AdGuardが特定のアプリをフィルタリングしないようにしたい場合は、そのアプリへのフルパスを指定すると、そのアプリはフィルタリングから除外されます。 異なるパスはセミコロンで区切ります。

### AdGuardのポップアップ通知を有効にする

この機能を有効にすると、AdGuardのポップアップ通知が表示されるようになります。 あまり頻繁には表示されず、重要な情報のみが含まれます。 トレイ メニューを使用して、最後のポップアップ通知を呼び出すこともできます。

### フィルタ・サブスクリプションURLを自動的に傍受する

AdGuard に購読 URL (例: `abp:subscribe` など) を自動的に傍受させ、カスタムフィルタインストールウィンドウを開くようにさせたい場合は、この機能を有効にします。

### HTTP/3 をフィルタリングする

このオプションを有効にすると、AdGuard は、他のリクエストタイプに加えて、HTTP/3 で送信されたリクエストもフィルタリングします。

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### リダイレクト・ドライバ・モードを使用する

このオプションを有効にすると、AdGuard はすべてのトラフィックを傍受し、さらにフィルタリングするためにローカルプロキシサーバーにリダイレクトします。

それ以外の場合、AdGuard はリダイレクトせずにすべてのトラフィックを即座にフィルタリングします。 この場合、システムは AdGuard をインターネットに接続する唯一のアプリと見なします (他のアプリケーションは AdGuard を経由してルーティングされます)。 欠点として、システムのファイアウォールの効果が低下することがあります。 利点は、このアプローチの方が少し速く動作することです。

### システム起動時にメインウィンドウを開く

このオプションを有効にすると、システムの起動後に AdGuard のメインウィンドウが開きます。 ※実際のフィルタリングサービスが起動するかどうかには影響しないことにご注意ください。その設定は*「設定」→「一般設定*」にあります。

### システム起動時にフィルタリングを有効にする

v7.12以降、デフォルトでは、[システム起動時にAdGuardを起動]オプションが無効になっている場合、AdGuardのサービスはOS起動後にトラフィックをフィルタリングしません。 つまり、AdGuard のサービスは「アイドル」モードで開始されます。 このオプションを有効にすると、アプリが起動されていない場合でも AdGuard がトラフィックをフィルタリングします。

:::note

v7.12 以前では、AdGuard サービスはデフォルトでフィルタリングモードで開始されていました ( *システム起動時に AdGuard を起動* が無効になっている場合でも)。 以前の動作に満足していた場合は、このオプションを有効にしてください。

:::

### localhostをフィルタリングする

AdGuard がループバック接続をフィルタリングするようにしたい場合は、チェックボックスをオンにします。 AdGuard VPN がインストールされている場合はこのオプションが常にオンになります。インストールされいない場合は機能しないからです。

### 指定のIP範囲をフィルタリングから除外する

AdGuardに特定のサブネットをフィルタリングさせたくない場合は、この機能を有効にし、下の「**フィルタリングから除外するIP範囲**」セクションで、CIDR表記（例：98.51.100.14/24）でIP範囲を指定します。

### HAR writing を有効にする

このオプションは、**デバッグ目的でのみ**有効にしてください。 チェックボックスをオンにすると、AdGuard は、フィルタされたすべての HTTP リクエストに関する情報を含む HAR 1.2 形式のファイルを作成します。 このファイルは Fiddler アプリで分析できます。 ※このオプションがオンの時は、ウェブブラウジングの速度が著しく低下する可能性がありますのでご注意ください。

### プレーンHTTPリクエストに余分なスペースを追加する

HTTPメソッドとURLの間に余分なスペースを追加し、「Host: 」欄の後のスペースを削除します。そうすることでdeep packet inspection（DPI）を回避します。 例えば、以下のリクエスト

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 最初のTLSパケットのフラグメントサイズを調整する

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. 無効なサイズを指定すると、システムによって選択された値が使用されます。 This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Plain HTTP request fragment size（プレーンHTTPリクエストフラグメントサイズ）

HTTPリクエストフラグメンテーションのサイズを調整します。 This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

有効な値は 1～1500 です。 無効なサイズを指定すると、システムによって選択された値が使用されます。 This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### QUICを表示する

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### TCP keepalive を有効にする

有効な値は 1～1500 です。 無効なサイズを指定すると、システムによって選択された値が使用されます。

### TCP keepalive interval

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP keepalive timeout

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Javaをブロックする

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### DNSサーバーのタイムアウト期間

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### DNS-over-HTTPS に HTTP/3 を使用する

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### フォールバックDNSアップストリームを使用する

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### DNSアップストリームを並列に問い合わせる

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### 失敗したDNSクエリにいつも応答する

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### セキュアなDNSリクエストのフィルタリングを有効にする

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### hostsルール用ブロックモード

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- 「拒否されました」（Refused）エラーで返答する
- 「NxDomain」エラーで返答する
- カスタムIPアドレスで返答する

### adblock-styleルール用ブロックモード

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- 「拒否されました」（Refused）エラーで返答する
- 「NxDomain」エラーで返答する
- カスタムIPアドレスで返答する

### カスタムIPv4アドレス

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### カスタムIPv6アドレス

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### フォールバックサーバー

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- フォールバックサーバーを使用しない
- システムデフォルトサーバーを使用する
- カスタムサーバーを使用する

### ECHをブロックする

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### カスタムフォールバックサーバーのリスト

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### カスタムbootstrapアドレスのリスト

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS除外リスト

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### 指定したWi-Fiネットワーク名（SSID）をDNSフィルタリングの対象から外す

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
