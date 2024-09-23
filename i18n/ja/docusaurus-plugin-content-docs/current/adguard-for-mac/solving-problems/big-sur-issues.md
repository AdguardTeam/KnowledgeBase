---
title: 異なるmacOSバージョンとの互換性問題
sidebar_position: 4
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能な広告ブロッカー、「AdGuard for Mac」についてです。 実際にどのように動作するか確認するには、[AdGuard アプリをダウンロードしてください](https://agrd.io/download-kb-adblock)

:::

## 現行の問題

アップルは毎年、macOSの新バージョンをリリースし、革新的なソリューションを導入し、新しい便利な機能を追加しています。 しかし、Network Extensions API（Big Sur）やiCloud Private Relay（Monterey）のように、多くのアプリケーションに問題を引き起こすものもあり、AdGuardも例外ではありません。 本記事では、各macOSバージョンに特有の既知の問題と、それを解決する方法について説明しております。

### Monterey 12: 現行の問題

以下の問題はまだアップルによって修正されていないか、部分的にしか修正されていません。

#### iCloudプライベートリレーとの互換性問題

現在、AdGuard と iCloud プライベートリレーは同時に動作できません。 iCloudプライベートリレーは、AdGuardがネットワーク接続をフィルタリングする前にトラフィックを暗号化してしまうため、AdGuardは広告をブロックできなくなります。 iCloud プライベートリレーがアクティブになると、あらゆるフィルタリング（ローカルフィルタリングを含む）が不可能になります。 したがって、AdGuard はトラフィックをフィルタリングしたり、Safari でDNS フィルタリングを実行したりすることはできません。 そのため、デフォルトでは、AdGuard は iCloud プライベートリレーを無効にする「デフォルトルート」を使用します。

この問題について詳しくは、 [こちらの記事](../icloud-private-relay)をお読みください。

**おすすめの解決策**

AdGuard を、 [AdGuard VPN](https://adguard-vpn.com/) のような従来の VPN サービスと併用することをお勧めします。

**代替の解決策**

「デフォルト ルート」を無効にすることで、AdGuard が「デフォルト ルート」を使用しないようにすることができます。 これは、アドバンスド設定 →高度な設定→ `network.extension.monterey.force.split.tunnel` から実行できます。 ※この設定を有効にすると、上記の問題が発生することに注意してください。

![高度な設定... *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### 「"メール"でのアクティビティ保護」との互換性問題

Apple の「メール」アプリは、電子メールから画像をダウンロードするときにユーザーの IP アドレスを隠すために、プロキシを使用するようになっています。 しかし、アクティブな VPN 接続がある場合、この機能は機能しません。 AdGuard は VPN として扱われるため、画像が自動的にプリロードされるなくなります。

この問題について詳しくは、 [こちらの記事](../protect-mail-activity)をお読みください。

**おすすめの解決策**

現時点では、新しい Apple のプライバシー機能ではなく、 [AdGuard VPN](https://adguard-vpn.com/) などのより従来的な VPN サービスを使用することをお勧めします。

### Monterey 12、Big Sur 11.6 とその以降: 現行の問題

以下の問題はまだアップルによって修正されていないか、部分的にしか修正されていません。

#### Cisco AnyConnectとの互換性問題

AdGuard が*ネットワーク拡張*モードである場合、 Cisco AnyConnect と連携して動作することできません。 AdGuardを *自動プロキシ* モードに切り替える必要があります。 これを行うには、[こちらの手順](#automatic-proxy)をお使いください。

#### Flutterとの互換性問題

この問題は、2021年6月にリリースされたFlutter 2.2で解決されています。 ただし、Flutter で開発されたアプリケーションでこの問題を修正するには、アップデートを待つ必要があります。

Monterey または Big Sur で、「ネットワーク拡張」モードのAdGuard (または、その他の「透過プロキシ」系アプリ) を Flutter と一緒に使用すると、プロジェクトが開けず、Flutter が事実上壊れるという問題が発生します。 我々はすでにこのバグをアップルに報告しています。 その間に、これらの一時的な解決策を使うことができます:

1. AdGuard を *自動プロキシ* モードに切り替える

1. SIPを無効にし、AdGuard をカーネル拡張モードに切り替える（[手順はこちら](#kernel-extension)）

#### レガシーAPIを使用したVPNアプリ

AdGuard はシステム設定では VPN として表示されますが、他の VPN ベースのアプリと一緒に動作しても競合は発生しません。 However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. AdGuardのメニューを開きます。
1. *設定...* を選択します。
1. *ネットワーク* タブに切り替えます。
1. *アプリケーション...* ボタンをクリックします。
1. 除外したいアプリを探し、その横にあるチェックボックスのチェックを外します。

![フィルタリング対象アプリ](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## すでに修正されている問題

これらの問題は、現在では Apple によって修正されていますが、macOS Big Sur の古いバージョンでは発生する可能性があります。

### Little Snitch 5 との互換性

現時点では、AdGuard のネットワーク拡張モードは [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html)と互換性がありません。 When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. この問題は Big Sur のバグによって引き起こされており、我々はすでに Apple にその旨を通知しています。 このため、この問題は今後のmacOSアップデートで解決されると思われます。

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Apple がバグを修正するまでは、Big Sur で AdGuard を Little Snitch と併用する場合は、 [**自動プロキシ**](#automatic-proxy) フィルタリング モードに切り替えることをお勧めします。

### ローカルプロキシとの互換性問題

:::note

現在、AdGuard はローカルプロキシを（ほぼ）問題なくフィルタリングできます。 OSバージョン11.1以上で問題が発生した場合、またはBig Sur 11.0を使用している場合は、以下の手順に従って、システム設定からローカルプロキシを削除し、AdGuardでアップストリームプロキシを設定してください。

:::

Big Surにおいて、AdGuard for Mac でアップストリームプロキシを構成する方法は以下の通りです:

1. AdGuardの *設定 → ネットワーク → アウトバウンドプロキシ* を開きます。
2. プロキシの種類に応じて、「HTTP」「HTTPS」「SOCKS4」または「SOCKS5」を選択します。
3. 以下のフィールドに入力します:
    - `ホスト`はプロキシサーバーのIPアドレスです。
    - `port`は、プロキシサーバーが使用する希望のポート番号です。
    - `ユーザー名` と `パスワード`は、プロキシの対応するユーザー名とパスワードです（必要な場合）。 該当しない場合はいずれかまたは両方を無視して結構です。

問題が発生した場合は、テクニカルサポート（support@adguard.com）までご連絡ください。

#### 例1: アップストリームShadowsocksプロキシの設定

[Shadowsocks](https://shadowsocks.org)用のアップストリームプロキシを設定する方法の例です。

まず第一に、プロキシを動作させるサーバサイドが必要になります。 たいていの場合、このようなJSONファイルを使うことになります（以下の`サーバー`と`パスワード`値はランダムに選んであります）:

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

次に、Mac に Shadowsocks クライアントをインストールする必要があります。 その設定で「マニュアルモード」または「オートモード」を選択していることを確認してください。 「グローバル モード」(または Big Sur バージョン 11.1 より前では「自動モード」) を選択した場合、構成は機能しません。

![設定で手動モードまたは自動モードを選択 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

次に、 *AdGuardメニュー→アドバンスド設定→高度な設定...* に移動して、*値* のエリア `upstream.proxy` を `socks5://localhost:1080` に設定します。 ここでは、JSON ファイルの「local_port」値を使用する必要があることに注意してください。

ShadowsocksはSOCKS5を使用するため、AdGuardがUDPトラフィックをプロキシサーバーにルーティングするように、AdGuard高度な設定の`upstream.proxy.socks5udp`設定の値を`true`に設定する必要もあります。

#### 例2: アップストリームSurgeプロキシの設定

Big Sur v11.1 以降では、AdGuard と Surge プロキシの間に競合は発生していません。 Big Sur の古いバージョン (11.1 より前) を使用している場合は、右下隅の **システムプロキシ** が無効になっていることを確認してください。 そうしないと、Surge は AdGuard と連携して動作しません。 一方、 **拡張モード** は、どの Big Sur バージョンでも競合を引き起こすことなく有効にできます。

![アップストリームSurgeプロキシの設定 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

次に、 *設定 → ネットワーク → アウトバウンドプロキシ* に移動して、フィールドに入力します。 プロキシタイプSOCKS5の場合:

- `ホスト`: localhost
- `ポート`: 6153 HTTPプロキシタイプの場合:
- `ホスト`: localhost
- `ポート`: 6152

## ネットワーク拡張の代わりに使用できる方法

ハードウェア/ソフトウェアや設定構成は無数に存在しますので、Big Sur や Monterey で発生する可能性のある問題のすべてを予測することは不可能です。 互換性の問題が発生した場合は、サポート チームにお問い合わせください。ただし、まずは以下の回避策のいずれかを試してみてください。

### 「自動プロキシ」フィルタリングモードを使用する {#automatic-proxy}

Big Sur または Monterey で上記のいずれの方法でも解決できない問題が発生した場合、AdGuard を *自動プロキシ* モードに切り替えてみてください。

1. AdGuardのメニューを開きます。
1. *設定...* を選択します。
1. *ネットワーク* タブに切り替えます。
1. *モードを選択...* ボタンをクリックします。
1. *自動プロキシ* を選択します。

![AdGuardを自動プロキシモードに切り替える](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

これで、AdGuard は **.pac** ファイルを Mac のネットワーク設定に自動的に追加し、システムは AdGuard をプロキシと見なし、すべてのトラフィックを AdGuard 経由で送信するようにします。

:::note

※一部のアプリはこのシステム設定を無視し、トラフィックがフィルタリングされない場合があります。

:::

### Big Sur と Monterey でカーネル拡張を有効にする {#kernel-extension}

デフォルトでは、Big Sur と Monterey では古いカーネル拡張フレームワークが無効になっているため、AdGuard はネットワーク拡張フレームワークを使用します。 これにより互換性の問題が発生する可能性がありますが、カーネル拡張機能を再度有効にするには、まずシステム整合性保護 (SIP：System Integrity Protection) を無効にする必要があります。 SIP を無効にする方法は以下の通りです:

1. 左上の、Macメニューバーの *Apple アイコン* をクリックします。
1. *再起動…*をクリックします。
1. *Command-R* を押したままにして、リカバリモードで再起動します。
1. *ユーティリティ* をクリックします。
1. *ターミナル* を選択します。
1. `csrutil disable` と入力します。
1. キーボードで *Return* または *Enter* を押します。
1. 左上の、Macメニューバーの *Apple アイコン* をクリックします。
1. *再起動…*をクリックします。

これで SIP が無効になったので、カーネル拡張を有効にする方法は次のとおりです:

![カーネル拡張を有効にする](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. AdGuardのメニューを開きます。
1. *設定...* を選択します。
1. *ネットワーク* タブに切り替えます。
1. *モードを選択...* ボタンをクリックします。
1. 「*カーネル拡張*」を選択します。
1. カーネル拡張に切り替えることを確認します。

:::caution

ただし、この方法は予期せぬ問題を引き起こす可能性があるため、他の方法がすべて失敗した場合にのみ使用するようにしてください。

:::
