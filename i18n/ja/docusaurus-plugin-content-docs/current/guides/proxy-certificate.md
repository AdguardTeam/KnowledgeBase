---
title: プロキシ証明書のインストール方法
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## 証明書のダウンロードとインストール方法

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows の場合 {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **ダウンロード**ボタンをクリックしてください。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. 「*証明書*」フォルダを右クリックし、「**すべてのタスク**」→「**インポート**」をクリックします。

1. 「*証明書のインポート ウィザード*」ページで、 「**次へ**」をクリックします。

1. 「**参照**」をクリックします。

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. 「**すべての証明書を次のストアに配置**」チェックボックスにチェックを入れます。

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. 「**完了**」をクリックします。

1. Press **Win**, then open **Settings**.

1. 「**ネットワーク & インターネット**」→「**プロキシ**」を選びます。

1. 「*設定の自動検出*」をオフに切り替えます。

1. 「*プロキシサーバーの使用*」タブの「**設定**」をクリックします。

1. トグルをオンにします。 For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. 「**ポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

1. 「**保存**」をクリックします。

### Mac の場合 {#mac}

1. AdGuardがインストール済みコンピュータのIPアドレスをメモしてください。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **ダウンロード**ボタンをクリックしてください。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. ダウンロードした証明書ファイルをダブルクリックします。

1. 管理者パスワードを入力し、「**キーチェーンの変更**」をクリックします。

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. 「*システム*」で、追加した証明書をハイライトします。

1. Right-click it and select **Get Info** from the context menu.

1. 「*信頼情報*」を展開して、証明書の信頼ポリシーを表示します。

1. *Secure Sockets Layer (SSL)*で、「**常に信頼する**」を選択します。

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. 「**詳細...**」をクリックし、「**プロキシ**」タブに移動します。

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. 「**ポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

### Android の場合 {#android}

1. AdGuardがインストール済みコンピュータのIPアドレスをメモしてください。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuardがインストール済みのデバイスで、ブラウザを使用してこちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをタップしてください。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. アクティブなWi-Fiネットワークの詳細設定を開きます。

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. 「**プロキシポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。

### iOS （iPhone/iPad）の場合 {#ios}

1. AdGuardがインストール済みコンピュータのIPアドレスをメモしてください。

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuardがインストール済みのデバイスで、ブラウザを使用してこちらのリンクをたどってください： [ http://local.adguard.org/cert](http://local.adguard.org/cert)

1. 「**ダウンロード**」ボタンをタップします。 If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. パスワードを入力してインストールを確認します。 「**完了**」をタップします。

1. **設定**→**一般**→**バージョン情報**→**証明書の信頼設定**。 「*Adguard Personal CA*」の横のスイッチを有効にします。 証明書のインストール完了です。

1. 接続しているWi-Fi ネットワークを選んで、「プロキシを設定」を開きます。

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. 「**プロキシポート**」には、デスクトップ版AdGuardアプリのネットワーク設定で選択したポートを入力します。
