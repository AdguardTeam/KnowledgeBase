---
title: AdGuard for Safari を無効にしてもフィルタリングが停止しない時
sidebar_position: 3
---

:::info

この記事は、お使いのSafariブラウザのみを保護する「AdGuard  for Safari」に関するものです。 デバイス全体を保護するには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

AdGuard for Safari を無効にしてもフィルタリング（広告ブロック）が止まらない場合は、コンテンツブロッカーの更新に時間がかかりすぎていることが原因である可能性が高いです。

## 対処法

1. Safariを開きます。
2. 左上のメニューで「_Safari_」をクリックします。
3. 「_環境設定…_」→「_拡張機能_」をクリックします。
4. Clear the checkboxes for AdGuard’s extensions: _Custom_, _General_, _Other_, _Privacy_, _Security_, _Social_, _AdGuard for Safari_, and _AdGuard Assistant_.
   ![チェックを外したコンテンツブロッカー](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-unchecked-cbs.png)
5. Safari を再起動します。
6. Safari→「_環境設定..._」→「_拡張機能_」に戻り、AdGuardのコンテンツブロッカー拡張機能６つを再度有効にします。

これで、問題はなくなるはずです。つまり、AdGuard for Safari がオンな場合にはフィルタリング（広告ブロック）は有効になり、オフの場合はフィルタリングが無効になります。
