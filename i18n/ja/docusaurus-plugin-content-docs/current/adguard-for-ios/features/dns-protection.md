---
title: DNS通信を保護
sidebar_position: 2
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for iOS」についてです。 実際どのように機能するのかを確認するには、[AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

[DNS通信を保護機能](https://adguard-dns.io/kb/general/dns-filtering/)は、DNSトラフィックを暗号化することでプライバシーを強化します。 Safariのコンテンツブロックとは異なり、DNS通信の保護はシステム全体、つまりSafari以外のアプリや他のブラウザでも機能します。 この機能を使用する前に、この機能を有効にする必要があります。 それを行うには、ホーム画面で画面上部の盾アイコンをタップするか、_AdGuardによる保護_（画面下の左から2番目の盾アイコン） → 「_DNS通信を保護_」タブを開き、スイッチをオンにします。

:::note

DNS設定を管理するには、AdGuardアプリはローカルVPNの確立を必要とします。 その際、iOSからアクセス許可を求められますが、 通信をリモートサーバー経由でルーティングすることは一切なく、フィルタリングは全てローカルに（デバイス上で）行われるのでご安心ください。

:::

### DNSの実装

![DNS implementation screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

このセクションには「AdGuard」と「ネイティブ」という2つのオプションがあります。 基本的に、この二つは何かというと、二種類のDNS設定方法なのです。

「ネイティブ」実装では、DNS はアプリではなくシステムによって処理されます。 つまりこの場合、AdGuard はローカルVPNを作成する必要がありません。 しかし残念ながら、この方法ですと、システムの制限を回避し、他のVPNベースアプリと一緒にAdGuardを使用することはできません。VPNが有効になっている場合、ネイティブDNSは無視されるからです。 その結果、トラフィックをローカルでフィルタリングしたり、新しい[DNS-over-QUICプロトコル(DoQ)](https://adguard.com/ja/blog/dns-over-quic.html)を使用することができなくなります。

### DNSサーバー

DNS通信を保護画面で次に表示されるセクションは「DNS サーバー」です。 ここでは、現在選択されているDNSサーバーと暗号化タイプが表示されます。 これを変更するには、ボタンをタップしてDNSサーバー画面に入ります。

![DNS servers \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

DNSサーバーはいろいろあり、その速度、採用されているプロトコル、信頼性、ロギングポリシーなどによって異なります。 デフォルトでは、AdGuard は、最も一般的なDNSサーバー（AdGuard DNS を含む）の中から複数のDNSサーバーを一覧として提案します。 暗号化タイプを変更したり（変更できるオプションがサーバーの所有者によって提供されている場合）、サーバーのホームページを表示するには、それぞれのDNSサーバーをタップします。 選びやすいように、一覧にあるDNSサーバーに「ノーログポリシー」、「広告ブロック」、「セキュリティ」などのラベルを追加しております。

さらに、画面の下部にはカスタムDNSサーバーを追加するオプションもあります。 このオプションは、通常のサーバー、DNSCryptサーバー、DNS-over-HTTPSサーバー、DNS-over-TLSサーバー、DNS-over-QUICサーバーをサポートしています。

#### DNS-over-HTTPSのHTTPベーシック認証

この機能は、HTTPプロトコルの認証機能を、認証を内蔵していないDNSにもたらしてくれます。 DNS認証は、カスタムDNSサーバーへのアクセスを特定のユーザーに制限したい場合に便利です。

この機能を有効にするには:

1. AdGuard DNS ダッシュボードに移動し、_サーバー設定_ → _デバイス_ → _設定_ で、DNSサーバーを認証付きのものに変更します。 「_他のプロトコルを拒否_」をクリックすると、他のプロトコルの使用オプションが削除され、DNS-over-HTTPS 認証のみが有効になり、第三者による使用が防止されます。 次に、生成されたアドレスをコピーします。

![認証付きDNS-over-HTTPS](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-ja.png)

1. AdGuard for iOS アプリで、_AdGuardによる保護_（画面下の左から2番目の盾アイコン） → _DNS通信を保護_ → _DNS サーバー_ に移動し、生成されたアドレスを「_カスタム DNS サーバーを追加する_」フィールドに貼り付けます。 新しい構成を保存して選択します。

すべてが正しく設定されているかどうかを確認するには、[AdGuard診断ページ](https://adguard.com/en/test.html)にアクセスしてください。

### ネットワーク設定

![Network settings screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

ネットワーク設で DNS セキュリティを管理することもできます。 [_モバイルデータをフィルタリング_]と[_Wi-Fiをフィルタリング_]という設定は、それぞれのネットワークタイプのDNS通信保護を有効・無効にします。 さらに下にある「_Wi-Fi除外_」では、特定のWi-FiネットワークをDNS通信保護から除外できます（たとえば、[AdGuard Home](https://adguard.com/adguard-home/overview.html)を使用している場合は、ホームネットワークを除外しておくことができます）。

### DNSフィルタリング

「DNSフィルタリング」では、AdGuard DNS フィルタを有効にしたり、カスタムDNSフィルタを追加したり、DNSブラックリスト・ホワイトリストを使用したりすることで、DNSトラフィックをカスタマイズできます。

この設定を開く方法:

_AdGuardによる保護_（画面下の左から2番目の盾アイコン） → _DNS通信を保護_ → _DNSフィルタリング_

![DNS filtering screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNSフィルタ

Safariで動作するフィルタと同様に、DNSフィルタは[特別な構文](https://adguard-dns.io/kb/general/dns-filtering-syntax/)に従って記述されたルールのセットです。 AdGuard は、DNSトラフィックを監視し、フィルタのルール1つ以上にマッチするDNSリクエストをブロックします。 [AdGuard DNS フィルタ](https://github.com/AdguardTeam/AdguardSDNSFilter)などのフィルターを使用したり、フィルタとしてhostsファイルを追加したりできます。 同時に複数のフィルタも追加できます。 その方法は、[こちらの詳しいマニュアル](adguard-for-ios/solving-problems/system-wide-filtering)をお読みください。

#### ホワイトリストとブラックリスト

DNSフィルタに加えて、単一のドメインをブラックリストまたはホワイトリストに追加することで、DNSフィルタリングに的を絞った影響を与えることができます。 ブラックリストは同じDNS構文もサポートしており、Safariコンテンツブロックのホワイトリストと同様に、両方をインポートおよびエクスポートできます。
