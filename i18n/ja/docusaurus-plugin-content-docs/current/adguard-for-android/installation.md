---
title: インストール方法
sidebar_position: 2
---

:::info

この記事は、システムレベルでデバイスを保護してくれる多機能広告ブロッカー、「AdGuard for Android」についてです。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

## 動作環境

**OSバージョン**: Android 9.0以上

**RAM**: 2 GB以上

**空きディスク容量**: 500 MB

## AdGuard for Android のインストール方法

【AdGuardがGoogle Playにない理由】これは、Googleがネットワークレベルの広告ブロッカー（つまり、他のアプリの広告をブロックするアプリ）のGoogle Playでの配布を禁止しているためです。 Google 制約について詳しくは、 [こちらのブログ記事](https://adguard.com/blog/adguard-google-play-removal.html)をご覧ください。

この理由で、AdGuard for Androidは直接AdGuardウェブサイトから手動でインストールする必要があります。 方法は以下の通りです。

1. **お使いのデバイスにAdGuardアプリをダウンロードします**。 これを行うには、複数の方法がございます：

    - [AdGuardウェブサイト](https://adguard.com/adguard-android/overview.html)にアクセスして、「*ダウンロード*」ボタンをタップ
    - ブラウザで「[https://adguard.com/apk](https://adguard.com/apk)」を開く
    - 以下のQRコードをスキャン：

    ![QRコード *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. [**提供元が不明のアプリのインストールを許可**] ファイルのダウンロードが完了したら、通知の中の「*開く*」をタップします。

    ![提供元不明のアプリをインストールする *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    ポップアップが表示されます。 *[設定]*をタップし、 *[不明なアプリのインストール]*に移動して、ファイルのダウンロードに使われたブラウザに許可を与えます。

    ![提供元不明のアプリをインストールする *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. [**アプリをインストール**] ブラウザが必要な権限を取得すると、システムから、AdGuardアプリのインストールを実施するかどうか尋ねられますので、 そこで「**インストール**」をタップします。

    ![提供元不明のアプリをインストールする *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    アプリを起動しますと、AdGuardの*EULA（使用許諾契約）*と*プライバシーポリシー*の同意画面が表示されます。 また、さらに2つのチェックボックスにチェックを入れることで、AdGuardの開発にご協力いただけます。 （協力される場合、「*AdGuardにクラッシュレポートを自動送信*」と 「*テクニカル情報とインタラクション情報を送信する*」にチェックを入れてください。） 次に、「*次へ*」をタップしてください。

    ![プライバシーポリシー *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. [**ローカルVPNを作成**] すべてのトラフィックをデバイス上（リモートサーバー経由なし）で直接フィルタリングするためには、AdGuardはローカルVPNというものを確立する必要があります。

    ![ローカルVPN構築 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. [**HTTPSフィルタリングを有効化**] これは必須のオプションではありませんが、最高の広告ブロック品質を得るには有効にすることをお勧めします。

    Android 7～9 のデバイスの場合は、ローカルVPNのセットアップ後に、ルート証明書のインストールとHTTPSフィルタリングの設定が求められます。

    ![Android 7〜9でHTTPSフィルタリングを有効にする *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    「*今すぐインストール*」をタップすると、パスワードまたは指紋で証明書のインストールを認証するように求められます。

    ![Android 7〜9でHTTPSフィルタリングを有効にする ステップ 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Android 10 以降搭載デバイスの場合は、ローカル VPN を作成すると、メインアプリ画面の下部に、HTTPSフィルタリングを有効にするよう勧めるスナックバーが表示されます。 *[有効にする]* をタップし、次の画面の指示に従うか、 [証明書インストールに関する記事](solving-problems/manual-certificate.md)で詳細を確認してください。

    ![HTTPSフィルタリングを有効にする *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## АdGuardのアンインストールや再インストール

モバイル端末でAdGuardをアンインストールする必要がある場合は、デバイスの「*設定*」を開き、*アプリ*（Android 7）または<「*アプリと通知*」（Android 8以降）を選択してください。 インストールされているアプリのリストでAdGuardを見つけ、「*削除する*」を押します。

![AdGuardを再インストール *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

AdGuard を再インストールするには、apk ファイルを再度ダウンロードし、インストールセクションに記載されている手順に従ってください。 （※あらかじめアンインストールする必要はありません。）
