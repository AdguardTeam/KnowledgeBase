---
title: Android 11以上での証明書インストール方法
sidebar_position: 12
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. 実際に使ってみるには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device's user storage. On older versions of the Android OS this was done automatically, but on Android 11 and later users have to install it manually.

![証明書 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install the AdGuard certificate:

1. 「*HTTPS フィルタリングがオフになっています*」という通知が表示されたら、「*有効にする*」をタップします。

1. すると、3つの説明画面が順番に表示されます:
    - HTTPSトラフィックをフィルタリングする理由
    - AdGuardによるHTTPSフィルタリングが安全である理由
    - The necessity of the AdGuard certificate

    Consecutively tap *Next* → *Next* → *Save certificate*.

1. 開いた*ダウンロード*フォルダで右下の「*保存*」をタップします。

1. After saving, tap *Open Settings*.

1. Tap *More security settings* → *Encryption & credentials* → *Install a certificate* → *CA certificate*.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

これで完了です。 証明書が正常にインストールされると、HTTPSフィルタリングが有効になります。

Please note that the steps provided are based on the Google Pixel 7 smartphone. 別のAndroidデバイスをお使いの場合、正確なメニュー名やオプションは多少異なる場合があります。 For easier navigation consider searching for a certificate by entering “certificate” or “credentials” in the settings search bar.

証明書の手動インストール中に問題が発生した場合（たとえば、証明書をインストールしたにもかかわらず、AdGuardアプリが証明書を無視し続けるなど）、以下のいずれかの解決策をお試しください。

1. AdGuardを再起動してみる
2. 正しい証明書（AdGuard Personal CA）をもう一度インストールしてみてください。

それでも問題が発生し、証明書をインストールできない場合は、サポートチームの support@adguard.com （日本語対応）までご連絡ください。
