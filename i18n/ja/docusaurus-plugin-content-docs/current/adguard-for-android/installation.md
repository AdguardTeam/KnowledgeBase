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

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. [**提供元が不明のアプリのインストールを許可**] ファイルのダウンロードが完了したら、通知の中の「*開く*」をタップします。

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    ポップアップが表示されます。 *[設定]*をタップし、 *[不明なアプリのインストール]*に移動して、ファイルのダウンロードに使われたブラウザに許可を与えます。

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. [**アプリをインストール**] ブラウザが必要な権限を取得すると、システムから、AdGuardアプリのインストールを実施するかどうか尋ねられますので、 そこで「**インストール**」をタップします。

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    アプリを起動しますと、AdGuardの*EULA（使用許諾契約）*と*プライバシーポリシー*の同意画面が表示されます。 また、さらに2つのチェックボックスにチェックを入れることで、AdGuardの開発にご協力いただけます。 （協力される場合、「*AdGuardにクラッシュレポートを自動送信*」と 「*テクニカル情報とインタラクション情報を送信する*」にチェックを入れてください。） 次に、「*次へ*」をタップしてください。

    ![Privacy policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. [**ローカルVPNを作成**] すべてのトラフィックをデバイス上（リモートサーバー経由なし）で直接フィルタリングするためには、AdGuardはローカルVPNというものを確立する必要があります。

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. [**HTTPSフィルタリングを有効化**] これは必須のオプションではありませんが、最高の広告ブロック品質を得るには有効にすることをお勧めします。

    Android 7～9 のデバイスの場合は、ローカルVPNのセットアップ後に、ルート証明書のインストールとHTTPSフィルタリングの設定が求められます。

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    After you tap *Install now*, a prompt will appear asking you to authenticate the certificate installation with a password or fingerprint.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## АdGuardのアンインストールや再インストール

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Find AdGuard in the list of installed apps and press *Uninstall*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall AdGuard, just download the apk file again and follow the steps outlined in the Installation section. Uninstallation is not required beforehand.
