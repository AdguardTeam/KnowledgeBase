---
title: 証明書関連の問題
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

HTTPSトラフィックをフィルタリングし、広告やトラッカーを効率的にブロックするために、AdGuardは特別でユニークなルート証明書を生成し、システムストレージにその証明書をインストールします。 （なぜ証明書が必要なのかについて詳しくは、[こちらの記事](/general/https-filtering/what-is-https-filtering)をご覧ください。）

AdGuard証明書がインストールプロセス中にシステム証明書ストレージに追加されると、ブラウザは通常、その証明書を信頼します。 しかし、場合によってはこれだけでは不十分で、警告やエラーに出くわすこともあります。 この現象は、Mozilla Firefox、PaleMoon、WaterfoxなどのFirefoxベースブラウザや、Yandex.Browserでよく起こります。

## Firefoxベースのブラウザにおける「*潜在的なセキュリティリスク*」エラー

![セキュリティリスクエラー](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

旧バージョンのFireFoxや、それをベースとしたブラウザは、システムストレージの証明書を信用せず、ローカルストレージの証明書のみを信用します。 バージョン 68 以降、FireFox はシステム証明書を信頼しますが、それでも「接続が信頼されていません」というエラーが発生する可能性があります。 このようなことが起こった場合は、まずはAdGuardの[*ネットワーク*]タブにある*[証明書を再インストールする*]ボタンをクリックしてみてください。

![証明書を再インストール](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

それでも解決しない場合は、AdGuard証明書をFireFoxのストレージに手動で追加する手順に従ってください。

> ※以下の手順はFirefoxブラウザ用です。 他のFirefoxベースのブラウザでは、ボタンやメニューの名前が多少異なる場合があります。

1. AdGuard を起動します。

1. [http://local.adguard.org/cert](http://local.adguard.org/cert) にアクセスし、 *ダウンロード* ボタンをクリックします。 ブラウザは **cert.cer** ファイルのダウンロードを開始するはずです。

    :::note

    また、AdGuardアプリの*[設定]→[ネットワーク]→[HTTPSフィルタリング]*からリンクをクリックしてダウンロードページを開くこともできます。


:::

    ![証明書の設定](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. ブラウザを開き、 *設定*を開きます。

1. *プライバシーとセキュリティ* タブに移動します。

1. *証明書* まで下にスクロールし、 *証明書を表示* ボタンをクリックします。

    ![証明書ウィンドウを表示](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. *権限* タブを選択します。

1. 「*インポート...*」をクリックします。

    ![証明書設定 - インポート](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. ダウンロードした **cert.cer** ファイルを参照して、 「*開く*」をクリックします。

1. *[この認証局によるウェブサイトの識別を信頼する*] ボックスにチェックを入れ、 *[OK]*をクリックします。

    ![証明書設定 - チェックボックス](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

これで、AdGuard証明書のインストールは完了です。 ブラウザを再起動すればエラーは解消するはずです。

## Yandex.Browser証明書の警告

AdGuard for Windows と Yandex.Browserの両方のユーザーであれば、この警告に出くわしたことがあるかもしれません:

![Yandex 証明書の警告](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### なぜこのようなことが起こるのか

AdGuardとYandexの両社は、インターネット上のユーザーのセキュリティを非常に重視しています。 現在の Yandex のポリシーでは、ブラウザで認識されない証明書についてはユーザーに警告することになっています。 これは根拠のない話ではありません。悪意のあるアプリが独自の証明書を挿入し、それを使ってシステムに危害を加えたり、個人情報を盗んだりすることがあるからです。

しかし、AdGuardもその証明書を信頼できるものに追加します。 これにより、例の警告メッセージが表示されます。

### この問題を解決する方法

最も簡単な方法は、「**サイトへ移動」**ボタンをクリックすることです。 これによりYandex.Browserは、しばらくの間はAdGuard証明書を信頼できるものとして記憶するようになります。 通常、例のメッセージを見ることはなくなりますが、何らかの理由で時折表示される可能性はゼロではありません。 このような場合は、同じボタンをもう一度押すだけで解決します *(※AdGuard 証明書に関する警告であることにご注意ください。)*

AdGuardのHTTPSフィルタリングを無効にした場合も、Yandex.Browserがこのメッセージを再び表示することはなくなりますが、それには大きな代償が伴います。HTTPSで読み込まれるすべての広告（**Yandex独自の広告**を含む）が、YouTube、Facebook、Instagramなどのウェブサイトで表示されるようになってしまいます。 広告ブロックの質を高く保ちたいのであれば、HTTPSフィルタリングをオフにする方法はお勧めできません。
