---
title: 'インストール/アンインストール'
sidebar_position: 2
---

## 動作環境

**OSバージョン**: macOS 10.13 (64 bit) 以上

**RAM**: 2 GB以上

**対応ブラウザ**: Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, およびその他のmacOSと互換性のあるブラウザ

**空きディスク容量**: 120 MB

## インストール方法

To install AdGuard for macOS on your computer, launch your browser, type _adguard.com_ in the address bar, and press **Download** [on the page that opens](https://adguard.com/download.html?auto=1).

![アプリをダウンロード *border](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-1.png)

「_AdguardInstaller.dmg_」がダウンロード完了したら、クリックします。（Finderから開くこともできます。）

![Double-click to open the file](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-2.png)

表示されたインストールアプリでAdGuardアイコンをダブルクリックしてください。

![Double-click the AdGuard icon](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-3.png)

AdGuard初インストールの際に、OSからの警告が表示されます。 「**開く**」を押してください。

![「開く」をクリック](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-4.png)

次に、「**インストール**」を押してください。

![「インストール」をクリック](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-5.png)

インストーラが必要なファイルをダウンロード完了するのをお待ちください。

![必要なファイルがダウンロードされるまで待ちます](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-6.png)

AdGuardアプリを使用するにはmacOS管理者アカウントのパスワードが必要になります。 パスワードを入力して「**OK**」を押してください。

![パスワードを入力します。](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-7.png)

次に、自分に合わせて設定を簡単にカスタマイズできるチュートリアル画面表示されます。 「はじめる」を押して微調整を開始するか、 「スキップ」を押して今はスキップすることができます。

![保護を設定する](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-8.jpg)

これで、お使いのMacへのAdGuardインストールは完了です！

## アンインストール

### レギュラー
まず、Finderを開いてください。

![Finderを開く](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

「アプリケーション」→ 「AdGuard」アイコンを右クリック→「**こみ箱に入れる**」

![AdGuardをゴミ箱に移動する *border](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-9.jpg)

### アドバンスド

**※この手順は、技術的なことが分かる場合、またはAdGuardサポートに「アドバンスドアンインストール」を案内された場合にのみ使用してください。 また、最初に「通常のアンインストール」手順のステップをすべて行ってください。**

1. After that, delete following AdGuard files:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (folder)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (file)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (folder)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (file)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (file)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (file)

    To do so, open the Terminal app, then enter and execute the following commands:
    - `sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
    - `rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
    - `rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
    - `rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
    - `find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
    - `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
    - `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

1. Run the **Activity Monitor** app.
1. 検索ツールを使用して「**cfprefsd**」プロセスを見つける

    ![アクティビティモニタを実行する](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. ユーザーで実行されているプロセス（ルートで実行されているものではないほう）を停止します。 そうするにはプロセスをクリックして、左上の「X」をクリックしてください。 表示されたダイアログで確認してください。

    ![確認](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuardアドバンスドアンインストール完了です。
