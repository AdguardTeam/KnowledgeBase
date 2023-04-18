---
title: Firefoxブラウザへのセキュリティ証明書の手動インストール
sidebar_position: 11
---

Firefoxのバージョンによって、AdGuardがHTTPS フィルタリングを実行するために必要なアプローチが異なります。 セキュリティ証明書をブラウザ自体に直接インストールすることができない場合（主に79.0以降のFirefoxバージョンで発生し、今後のバージョンでMozillaに対応してもらいたい状況です）、下の「対策①」をお試しください。 それも効かなければ、手間かかりますがFIrefox全バージョンに対応するはずの「対策②」をお試しください。

### 【対策①】

> この方法は、Android版Firefoxのバージョン90.0以降で動作します。

Firefox (およびそれをベースにしたブラウザ) がAdGuard証明書を信頼できるようにするには、以下を行ってください:

1. Firefoxを起動します。
2. Go to **Settings** → **About Firefox**.

![Firefoxについて *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Firefoxのロゴを5回タップする
4. Navigate to **Settings** → **Secret Settings**.

![シークレット設定 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. 「**サードパーティのCA証明書を使用する**」をオンにする

### 【対策②】

> この方法は、**root化された**デバイスでのみ機能します。

1. ADBをインストトールして設定します（方法：[Windows編](https://expnote.com/how-to-install-android-debug-bridge/)、[Mac編](https://child-programmer.com/m-adb/)）
> Windowsでは、**Samsung** のユーザーは、[こちらのユーティリティ](https://developer.samsung.com/mobile/android-usb-driver.html)をインストールする必要があるかもしれません。
2. **開発者モード**をアクティブにし、**USBデバッグ**を有効にします（※端末によって下記メニュー項目の名称が多少違ったりする場合がございます）:
    - Open the **Settings** app on your phone;
    - **システム**セクションに移動し（設定メニューの最後の項目）、 In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. その後、「**開発者になりました！**」のような通知が表示されます（必要に応じて、デバイスのロック解除コードを入力してください）。
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.
3. [Firefox](https://www.mozilla.org/en-US/firefox/releases/)ブラウザ（リリース版）をインストールします
4. Open the **AdGuard settings** → **Network** → **HTTPS Filtering** → Install the certificate in **Firefox** → **INSTALL FOR OLD VERSIONS**;
5. `adb shell su` と `cd data/data/...` を使って `data/data/org.mozilla.firefox/files/mozilla` フォルダを開き、`xxxxxxx.default` という名前のフォルダを参照して名前を覚えておいてください。
6. 例のフォルダの中には、2つのファイルが必要になります:
    - `cert9.db`
    - `key4.db`
7. 以下のファイルを、セキュリティ証明書問題が発生したブラウザのフォルダに移動する必要があります:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. フルコマンドは以下のようになります:
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

システムから「**アクセスは拒否されました**」のような通知を受けた場合は、まず例のファイルを許可不要のディレクトリに移動します。 その後、Firefoxブラウザ内の必要なフォルダに移動してください。

フルコマンドは以下のようになります:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

※ `adb shell su` が効かない場合は、先に `adb shell` を試し、その後に `su` という順番でお試しください。