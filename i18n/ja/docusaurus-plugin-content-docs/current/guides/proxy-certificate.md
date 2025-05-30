---
title: プロキシ証明書のインストール方法
sidebar_position: 2
---

デスクトップ版AdGuardアプリ（AdGuard for Windows と AdGuard for Mac）は他のデバイスのためのプロキシとして使用できます。 つまり、他のデバイスのトラフィック（通信）をAdGuard経由でルーティングすることができるのです（そのデバイス全体のトラフィック、もしくは特定のアプリ/ブラウザだけのトラフィック）。

:::note

※ルーティング対象のデバイスは、AdGuard がインストールされている PC または Mac と同じネットワーク内にあるデバイスである必要があります。

:::

HTTPトラフィックはどのような場合でもフィルタリングされます。一方、HTTPSトラフィックを AdGuard がフィルタリングできるようにするには、接続デバイス（ルーティングしたいデバイス）に AdGuard 証明書を手動でインストールする必要があります。

## 証明書のダウンロードとインストール方法

ルーティングしたいデバイスのオペレーションシステム（Windows/Mac/Android/iOS）に応じて、以下のいずれかの手順を使ってください:

### Windows の場合 {#windows}

1. AdGuard がインストール済みパソコンのIPアドレスをメモしてください。

1. AdGuard による保護がオンになっていることを確認してください。 Windowsパソコンでは、AdGuard アプリ内の設定⚙️の「**ネットワーク**」タブにある「**AdGuard をHTTPプロキシとして使用する**」チェックボックスにチェックを入れます。 Mac の場合は、 **設定⚙️** → **設定** → **ネットワーク** に移動して、「**HTTP プロキシ**」を有効にします。

1. AdGuard がインストールされているパソコンで、こちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをクリックしてください。 ダウンロードが開始されない場合は、Firefoxなど、別のブラウザでお試しください。

1. ダウンロードした **cert.cer** ファイルを、トラフィックを AdGuard 経由でルーティングさせたいWindowsデバイスに転送します。 USBケーブル、Bluetooth、クラウドサービスなどで転送を行うことができます。

1. そのデバイスで、「**Win**」ボタン（スタートメニュー）を押し、「`コンピューター証明書の管理`」と入力して、**Enter**キーを押します。

1. *証明書 - ローカル コンピュータ*ページで、「*信頼されたルート証明機関*」→「*証明書*」フォルダを見つけます。

1. 「*証明書*」フォルダを右クリックし、「**すべてのタスク**」→「**インポート**」をクリックします。

1. 「*証明書のインポート ウィザード*」ページで、 「**次へ**」をクリックします。

1. 「**参照**」をクリックします。

1. **cert.cer**証明書ファイルに移動して選択し、「**開く**」→「**次へ**」をクリックします。

1. 「**すべての証明書を次のストアに配置**」チェックボックスにチェックを入れます。

1. *証明書ストア*フィールドが*信頼されたルート証明機関*を表示していることを確認し、「**次へ**」をクリックします。

1. 「**完了**」をクリックします。

1. **Win** キーを押して、「**設定**」を開きます。

1. 「**ネットワーク & インターネット**」→「**プロキシ**」を選びます。

1. 「*設定の自動検出*」をオフに切り替えます。

1. 「*プロキシサーバーの使用*」タブの「**設定**」をクリックします。

1. トグルをオンにします。 「**プロキシIPアドレス**」には、コンピュータのIPアドレス（ステップ1からのもの）を入力します。 「**ポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

1. 「**保存**」をクリックします。

### Mac の場合 {#mac}

1. AdGuardがインストール済みのパソコンのIPアドレスをメモしてください。

1. AdGuard による保護がオンになっていることを確認してください。 Windowsパソコンでは、AdGuard アプリ内の設定⚙️の「**ネットワーク**」タブにある「**AdGuard をHTTPプロキシとして使用する**」チェックボックスにチェックを入れます。 Mac の場合は、 **設定⚙️** → **設定** → **ネットワーク** に移動して、「**HTTP プロキシ**」を有効にします。

1. ブラウザを使用してこちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをクリックしてください。 ダウンロードが開始されない場合は、Firefoxなど、別のブラウザでお試しください。

1. ダウンロードした **cert.cer** ファイルを、トラフィックを AdGuard 経由でルーティングさせたいMacデバイスに転送します。 USBケーブル、Bluetooth、AirDrop、クラウドサービスなどで転送を行うことができます。

1. ダウンロードした証明書ファイルをダブルクリックします。

1. 管理者パスワードを入力し、「**キーチェーンの変更**」をクリックします。

1. **Spotlight**（右上の検索🔍アイコン）にアクセスし、「`キーチェーンアクセス`」と入力し、検索結果から「**キーチェーンアクセス**」を選択します。

1. 「*システム*」で、追加した証明書をハイライトします。

1. 右クリックして、コンテキストメニューで「**情報を見る**」を選択します。

1. 「*信頼情報*」を展開して、証明書の信頼ポリシーを表示します。

1. *Secure Sockets Layer (SSL)*で、「**常に信頼する**」を選択します。

1. 「**システム環境設定**」→「**ネットワーク**」を開き、上のほうのアクティブな接続を選択します。

1. 「**詳細...**」をクリックし、「**プロキシ**」タブに移動します。

1. 「*Webプロキシ(HTTP)*」と「*セキュアWebプロキシ(HTTPS)*」という2つのチェックボックスにチェックを入れます。 「**サーバー**」フィールドに、この手順のステップ１にメモしておいたコンピュータの IP アドレスを入力します。 「**ポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

### Android の場合 {#android}

1. AdGuardがインストール済みのパソコンのIPアドレスをメモしてください。

1. AdGuard による保護がオンになっていることを確認してください。 Windowsパソコンでは、AdGuard アプリ内の設定⚙️の「**ネットワーク**」タブにある「**AdGuard をHTTPプロキシとして使用する**」チェックボックスにチェックを入れます。 Mac の場合は、 **設定⚙️** → **設定** → **ネットワーク** に移動して、「**HTTP プロキシ**」を有効にします。

1. AdGuardがインストール済みのデバイスで、ブラウザを使用してこちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをタップしてください。 ダウンロードが開始されない場合は、Firefoxなど、別のブラウザでお試しください。

1. ダウンロードした **cert.cer** ファイルを、トラフィックを AdGuard 経由でルーティングさせたいAndroidデバイスに転送します。 USBケーブル、Bluetooth、クラウドサービスなどで転送を行うことができます。

1. ダウンロードした **cert.cer** 証明書を見つけてタップし、ファイルを開き、指示に沿って証明書をインストールします。

1. Androidデバイスはデフォルトでは証明書を信頼しないため、警告が表示されますが、無視して大丈夫です。 端末によっては、端末のパスワードの入力を求められる場合があります。 入力してから「**OK**」を押します。 そうすると、証明書がインストールされます。

1. アクティブなWi-Fiネットワークの詳細設定を開きます。

1. **プロキシタイプ** を **手動**に変更します。 「**プロキシホスト名**」には、パソコンのIPアドレス（ステップ1からのもの）を入力します。 「**プロキシポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

### iOS （iPhone/iPad）の場合 {#ios}

1. AdGuardがインストール済みのパソコンのIPアドレスをメモしてください。

1. AdGuard による保護がオンになっていることを確認してください。 Windowsパソコンでは、AdGuard アプリ内の設定⚙️の「**ネットワーク**」タブにある「**AdGuard をHTTPプロキシとして使用する**」チェックボックスにチェックを入れます。 Mac の場合は、 **設定⚙️** → **設定** → **ネットワーク** に移動して、「**HTTP プロキシ**」を有効にします。

1. AdGuardがインストール済みのデバイスで、ブラウザを使用してこちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをタップします。 ダウンロードが開始されない場合は、Firefoxなど、別のブラウザでお試しください。

1. ダウンロードした **cert.cer** ファイルを、トラフィックを AdGuard 経由でルーティングさせたいiOSデバイスに転送します。 USBケーブル、Bluetooth、クラウドサービスなどで転送を行うことができます。

1. iOSデバイスで、**設定**アプリ→「**プロファイルがダウンロードされました**」を開き、右上隅にある「**インストール**」をタップします。 パスワードを入力してインストールを確認します。 「**完了**」をタップします。

1. **設定**→**一般**→**バージョン情報**→**証明書の信頼設定**。 「*Adguard Personal CA*」の横のスイッチを有効にします。 証明書のインストール完了です。

1. 接続しているWi-Fi ネットワークを選んで、「プロキシを設定」を開きます。

1. **プロキシタイプ** を **手動**に変更します。 「**プロキシホスト名**」には、パソコンのIPアドレス（ステップ1からのもの）を入力します。 「**プロキシポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。
