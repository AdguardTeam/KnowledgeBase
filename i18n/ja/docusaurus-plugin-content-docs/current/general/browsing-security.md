---
title: フィッシングやマルウェアからの保護
sidebar_position: 3
---

フィッシングやマルウェアの被害に遭うことは、依然としてよくある問題です。 デジタルセキュリティを強化するため、AdGuard製品には、悪意のあるウェブサイトやフィッシングサイトからユーザーを保護するための特別なフィルタが組み込まれています。 現在までに1,500万以上のサイトを分類し、フィッシングやマルウェアで知られる150万のウェブサイトのデータベースを構築してきました。 このデータベースを使用して、AdGuardはあなたが訪問するウェブサイトをチェックし、オンライン脅威から守ります。

:::note Important

AdGuardは、お客様が訪問されたウェブサイトに関するい情報を一歳収集または使用しません。

:::

## AdGuardはどのようにウェブサイトをチェックするのか？

ユーザーがウェブサイトにアクセスするたびに、ローカルクライアントはハッシュとハッシュプレフィックスの形式でバックエンドサーバーと情報を交換します。 このやり取りに基づいて、ローカルクライアントは、ウェブサイトが潜在的に危険なウェブサイトデータベースにリストされているかどうかを判断します。 AdGuardのアプリ版とブラウザ拡張機能版では、このチェックの範囲が異なります。

### AdGuard アプリ版の場合

AdGuard は、ページとページ上にロードされたすべてのオブジェクトの両方を検査することで、可能な限り最高の保護を提供します。 AdGuardは、完全なURLではなく、ハッシュ接頭辞（プレフィックス）を使用してURLとドメイン名をチェックするため、AdGuardのサーバーはお客様が訪問したウェブサイトに関する情報を保持しないため、お客様の個人情報は完全に安全になります。 AdGuardのサーバーは、ハッシュ接頭辞に一致するすべての可能なアドレスのリストで、アプリのクエリに応答します。 ハッシュマッチに基づいて潜在的な脅威が検出されると、そのウェブサイトへのアクセスが即座にブロックされます。

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

AdGuard ブラウザ拡張機能は、完全なURLではなく、ドメイン名しかチェックすることができません。 また、サブクエリをチェックすることもできません。 つまり、ページ上に悪意のある可能性のある要素がある場合、そのページ自体が安全なドメインのものであっても、読み込まれてしまうのです。 拡張機能ではそれらから保護することはできません。 また、実行されるチェックは非同期、つまりページがロードされるのと同時に行われるため、マルウェアもロードされる可能性があることにも注意が必要です。

## AdGuard製品でフィッシングとマルウェア対策を設定する方法

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![フィッシングやマルウェアからの保護](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## どんなものをブロックするのか

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## フィルタのメンテナンス

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### ご協力いただける場合

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### 誤検知への対応

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## ウェブサイトが疑わしい場合

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
