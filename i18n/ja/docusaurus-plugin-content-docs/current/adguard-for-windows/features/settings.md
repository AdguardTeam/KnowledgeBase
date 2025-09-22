---
title: 設定
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

「設定」は最も注意する価値のあるセクションです。 ここでは、アプリをご自身のニーズに合わせて設定することができます。気になるものだけをブロックし、信頼できるプロバイダのDNSサーバーを使用し、サードパーティCookieの削除を有効にすることなどができます。

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Ad blocking

これは AdGuard for Windows のメインモジュールで、アクセスしたウェブサイトやデバイスにインストールされたアプリから広告を削除します。 AdGuard は、バナー、ポップアップ、トラッカーなどのような、広告やプライバシーを脅かすコンテンツをフィルタリングするために、さまざまなフィルタ（[特別な構文](/general/ad-filtering/create-own-filters)で記述され、同様の目的を持つルールグループ）を使用します。 フィルタとは何か、どのように機能するのかについては、[こちらの記事](/general/ad-filtering/how-ad-blocking-works)をお読みください。

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- 言語特化フィルタの自動有効化をオンにする
- [検索広告と自己宣伝](/general/ad-filtering/search-ads)のブロックをオフにする
- Windows 11のスタートメニュー広告を無効にする
- 「AdGuard ベースフィルター」などのプリインストールされたフィルタを有効にする
- リストからフィルタをインストールするか、「フィルタを追加する」ボタンをクリックしてカスタムフィルタを追加する
- 「フィルタエディタ」ボタンを使用して既存のルールグループに変更を加える
- 「フィルタリングログ」ボタンをクリックすると、コンピューターにインストールされているブラウザやアプリから送信されたすべてのリクエストが表示されます。 そこからカスタムルールを作成することで、あらゆるリクエストをブロックしたり、ブロック解除したりすることもできます。
- 手動で作成したルール、インポートしたルール、または「AdGuard アシスタント」拡張機能で作成したルールからフィルタを構成する

※手動で独自のルールを書き始める場合、[こちらの詳細な構文ガイド](/general/ad-filtering/create-own-filters)をお読みください。

### Tracking protection

「トラッキング防止」（旧名：「ステルスモード」）機能は、ウェブサイトがあなたに関する情報（IPアドレス、ブラウザやオペレーティングシステムに関する情報、画面の解像度、ユーザーが訪問した、またはリダイレクトされたページなど）を収集することを防ぎます。 Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### ブラウジング・セキュリティ

ブラウジング・セキュリティは、悪意のあるウェブサイトやフィッシングサイトからしっかり保護してくれます。 （※AdGuard for Windows はアンチウイルスソフトではありません。 It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. このモジュールがどのように機能するかについての詳細は、[こちらの専用記事](/general/browsing-security)をご覧ください。

このモジュールでできること：

- 悪質なウェブサイトやフィッシング詐欺サイトへのリクエストがブロックされた際の通知の受け取りを有効にする
- サウンド通知を有効にする
- AdGuard が悪質サイトやフィッシングサイトのデータベースを最新の状態に保つために、匿名のセキュリティ関連情報のAdGuardサーバーへの送信を有効にすることで協力する

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

ブラウジング・セキュリティについてもっと知りたい場合は、[こちらの記事](/general/browsing-security)をお読みください。

### DNS通信を保護

「DNS通信を保護」の設定は、3つの重要な理由で役に立つことがあります。 まず、ISP（インターネットプロバイダ）に追跡されないようにするためです。 例えば、`google.com`のようなウェブサイトを開くたびに、ブラウザはDNSサーバーにリクエストを送り、ウェブサイトのIPアドレスを取得します。 通常、DNSサーバーはISPに属しており、ISPはあなたのオンライン活動を追跡することができます。 2つ目の理由は、DNSトラフィックを暗号化するためです。 そして3つ目は、[DNSレベルでコンテンツをブロックする](https://adguard-dns.io/kb/general/dns-filtering/)ことです。

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

AdGuard for Windows の「DNS通信を保護」モジュールでは、広告とトラッカーをブロックする「AdGuard DNS」、アダルトコンテンツをブロックする「AdGuard DNS ファミリー保護」、または安全で信頼性の高い接続を提供するが何もフィルタリングしない「AdGuard DNS フィルタリングなし」など、既知のDNSプロバイダからDNSサーバを選択できます。 また、[DNSルール構文](https://adguard-dns.io/kb/general/dns-filtering-syntax/)を使ってカスタムDNSサーバーやカスタムDNSルールを追加することもできます。 また、必要に応じて[お好みのDNSフィルタ](https://filterlists.com)を追加することもできます。

v7.20 以降では、信頼できる組み込みフィルタリストからフィルタを選択するだけで、フィルタを追加することもできます。 より使いやすくなるよう、フィルタは4つのカテゴリにグループ化されています：

- **一般**：広告とトラッカー（個人情報追跡）をブロックします。
- **地域別**：言語固有のウェブサイトで広告とトラッカーをブロックします。
- **セキュリティ**：フィッシングサイトや信頼できないウェブサイトをブロックします。
- **その他**：上記のカテゴリに当てはまらない特別なユースケースをカバーします。

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

子供が使用するパソコンで、アクセスを制限する必要があるウェブサイトは何個もあるでしょう。 This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

このモジュールは、ブラウザで開かれたウェブページの内容をチェックし、子供にとって好ましくない内容（大人向けの画像やテキスト、下品な言葉、暴力、薬物の宣伝など）のものをフィルタリングします。 Parental control settings are password-protected so that the child is not able to go round the restrictions. このモジュールは、不適切なサイトへの誘導をブロックするだけでなく、子供に不適切なリンクを検索結果から削除することもできます。

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. 「実行形式ファイルのダウンロードをブロック」を有効にしますと、お子様のコンピュータへのソフトウェアのダウンロードとインストールを防ぎます。 There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### ブラウザアシスタント

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
