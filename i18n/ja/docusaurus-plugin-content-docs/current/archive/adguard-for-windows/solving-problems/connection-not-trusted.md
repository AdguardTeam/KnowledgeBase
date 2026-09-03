---
title: 証明書関連の問題
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

HTTPSトラフィックをフィルタリングし、広告やトラッカーを効率的にブロックするために、AdGuardは特別でユニークなルート証明書を生成し、システムストレージにその証明書をインストールします。 You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

AdGuard証明書がインストールプロセス中にシステム証明書ストレージに追加されると、ブラウザは通常、その証明書を信頼します。 しかし、場合によってはこれだけでは不十分で、警告やエラーに出くわすこともあります。 この現象は、Mozilla Firefox、PaleMoon、WaterfoxなどのFirefoxベースブラウザや、Yandex.Browserでよく起こります。

Here are some common issues:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

旧バージョンのFireFoxや、それをベースとしたブラウザは、システムストレージの証明書を信用せず、ローカルストレージの証明書のみを信用します。 バージョン 68 以降、FireFox はシステム証明書を信頼しますが、それでも「接続が信頼されていません」というエラーが発生する可能性があります。 If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

それでも解決しない場合は、AdGuard証明書をFireFoxのストレージに手動で追加する手順に従ってください。

> ※以下の手順はFirefoxブラウザ用です。 他のFirefoxベースのブラウザでは、ボタンやメニューの名前が多少異なる場合があります。

1. AdGuard を起動します。

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

これで、AdGuard証明書のインストールは完了です。 ブラウザを再起動すればエラーは解消するはずです。

## Yandex.Browser証明書の警告

AdGuard for Windows と Yandex.Browserの両方のユーザーであれば、この警告に出くわしたことがあるかもしれません:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### なぜこのようなことが起こるのか

AdGuardとYandexの両社は、インターネット上のユーザーのセキュリティを非常に重視しています。 現在の Yandex のポリシーでは、ブラウザで認識されない証明書についてはユーザーに警告することになっています。 これは根拠のない話ではありません。悪意のあるアプリが独自の証明書を挿入し、それを使ってシステムに危害を加えたり、個人情報を盗んだりすることがあるからです。

しかし、AdGuardもその証明書を信頼できるものに追加します。 これにより、例の警告メッセージが表示されます。

### この問題を解決する方法

The easiest way is to click the **Go to site** button. これによりYandex.Browserは、しばらくの間はAdGuard証明書を信頼できるものとして記憶するようになります。 通常、例のメッセージを見ることはなくなりますが、何らかの理由で時折表示される可能性はゼロではありません。 In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. 広告ブロックの質を高く保ちたいのであれば、HTTPSフィルタリングをオフにする方法はお勧めできません。

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
