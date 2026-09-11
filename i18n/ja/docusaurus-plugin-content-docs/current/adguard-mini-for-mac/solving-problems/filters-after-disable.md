---
title: AdGuard Mini を無効にしてもフィルタリングが止まらない
sidebar_position: 3
---

:::info

この記事は、Safariブラウザでのみ機能する「AdGuard Mini for Mac」に関するものです。 Mac全体を保護するには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

AdGuard Mini for Mac を無効にしてもフィルタリング（広告ブロック）が止まらない場合は、コンテンツブロッカーの更新に時間がかかりすぎていることが原因である可能性が高いです。

## 対処法

1. Safariを開きます。
2. 左上のメニューで「_Safari_」をクリックします。
3. 「_環境設定…_」→「_拡張機能_」をクリックします。
4. これらの AdGuard Mini拡張機能チェックボックスをオフにします： [_カスタム_]、[_一般_]、[_その他_]、[_プライバシー_]、[_セキュリティ_]、[_ソーシャル_]、[_AdGuard for Safari_]
   ![チェックなし拡張機能](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/unchecked-extensions.png)
5. Safari を再起動します。
6. Safariに戻る→「_環境設定..._」→「_拡張機能_」に戻り、AdGuardの拡張機能を再度有効にします。

これで、問題はなくなるはずです。つまり、AdGuard Mini がオンな場合にはフィルタリング（広告ブロック）は有効になり、オフの場合はフィルタリングが無効になります。
