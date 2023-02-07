---
title: Firefoxブラウザへのセキュリティ証明書の手動インストール
sidebar_position: 11
---

Firefoxのバージョンによって、AdGuardがHTTPS フィルタリングを実行するために必要なアプローチが異なります。 セキュリティ証明書をブラウザ自体に直接インストールすることができない場合（主に79.0以降のFirefoxバージョンで発生し、今後のバージョンでMozillaに対応してもらいたい状況です）、下の「対策①」をお試しください。 それも効かなければ、手間かかりますがFIrefox全バージョンに対応するはずの「対策②」をお試しください。

### Method 1

> この方法は、Android版Firefoxのバージョン90.0以降で動作します。

Firefox (およびそれをベースにしたブラウザ) がAdGuard証明書を信頼できるようにするには、以下を行ってください:

1. Firefoxを起動します。
2. **設定** → **Firefoxについて**

![About Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Firefoxのロゴを5回タップする
4. **設定** → **シークレット設定**に移動する

![Secret Settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. 「**サードパーティのCA証明書を使用する**」をオンにする

### Method 2

> この方法は、**root化された**デバイスでのみ機能します。

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> Windowsでは、**Samsung** のユーザーは、[こちらのユーティリティ](https://developer.samsung.com/mobile/android-usb-driver.html)をインストールする必要があるかもしれません。
2. **開発者モード**をアクティブにし、**USBデバッグ**を有効にします（※端末によって下記メニュー項目の名称が多少違ったりする場合がございます）:
    - 端末で**設定**アプリを開きます。
    - **システム**セクションに移動し（設定メニューの最後の項目）、 サブアイテム「**端末について**」を見つけます。
    - 「**ビルド番号**」の行を7回タップします。 その後、「**開発者になりました！**」のような通知が表示されます（必要に応じて、デバイスのロック解除コードを入力してください）。
    - 設定→システム→**詳細設定**→**開発者向けオプション**→下にスクロールして「**USBデバッグ**」を開く（もしくはオンにする）→警告を注意深く読んでいただいた後、[**USBデバッグを許可する**]ウィンドウでデバッグが有効になっていることを確認します。
3. [Firefox](https://www.mozilla.org/en-US/firefox/releases/)ブラウザ（リリース版）をインストールします
4. このモードを有効にする手順: **AdGuard設定**→**ネットワーク**→**HTTPSフィルタリング**→ **Firefoxに証明書をインストール**→**旧バージョン用にインストール**
5. `adb shell su` と `cd data/data/...` を使って `data/data/org.mozilla.firefox/files/mozilla` フォルダを開き、`xxxxxxx.default` という名前のフォルダを参照して名前を覚えておいてください。
6. 例のフォルダの中には、2つのファイルが必要になります:
    - `cert9.db`
    - `key4.db`
7. We need to move these files to a folder of the browser where the security certificate issue occurred:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. The full command will look like this:
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

システムから「**アクセスは拒否されました**」のような通知を受けた場合は、まず例のファイルを許可不要のディレクトリに移動します。 その後、Firefoxブラウザ内の必要なフォルダに移動してください。

完全なコマンドは以下のようになります:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

※ `adb shell su` が効かない場合は、先に `adb shell` を試し、その後に `su` という順番でお試しください。