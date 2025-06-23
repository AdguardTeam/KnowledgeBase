---
title: 設定
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

「設定」は最も注意する価値のあるセクションです。 ここでは、アプリをご自身のニーズに合わせて設定することができます。気になるものだけをブロックし、信頼できるプロバイダのDNSサーバーを使用し、サードパーティCookieの削除を有効にすることなどができます。

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### 一般設定

ここでは、言語とカラーテーマ（ダーク・ライト）の設定、システム起動時のAdGuardの起動と自動アップデートの有効化、アップデートチャネルの選択、フィルタ更新チェック間隔の指定などを行うことができます。 また、AdGuard for Windows が正常に動作せず、サポートチームから[「デバッグログ」を収集する](/adguard-for-windows/solving-problems/adguard-logs.md)ように依頼された場合も、「設定」が役に立ちます。

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

画面の一番下に「高度な設定」があります。 Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

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

トラッキング防止の機能を柔軟に微調整することができます。例えば、インターネット上でウェブサイトを見つけるために使用した検索要求の受信を禁止したり、サードパーティとウェブサイト独自のCookieの両方を自動的に削除したり、居場所を追跡するために使用できるブラウザの位置情報共有を無効にしたりすることができます。

トラッキング防止とその多くのオプションについて知るには、[こちらの記事](/general/stealth-mode)をお読みください。

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

### ペアレンタルコントロール

子供が使用するパソコンで、アクセスを制限する必要があるウェブサイトは何個もあるでしょう。 This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

このモジュールは、ブラウザで開かれたウェブページの内容をチェックし、子供にとって好ましくない内容（大人向けの画像やテキスト、下品な言葉、暴力、薬物の宣伝など）のものをフィルタリングします。 ペアレンタルコントロールの設定はパスワードで保護されているため、子供が自分で制限をオフにすることはできません。 このモジュールは、不適切なサイトへの誘導をブロックするだけでなく、子供に不適切なリンクを検索結果から削除することもできます。

ペアレンタルコントロールモジュールでは、「_セーフサーチ_」を有効にし、「_ブラックリスト_」と「_ホワイトリスト_」を管理して、この機能の動作をカスタマイズすることができます。 「実行形式ファイルのダウンロードをブロック」を有効にしますと、お子様のコンピュータへのソフトウェアのダウンロードとインストールを防ぎます。 「_ペアレンタルコントロール_」モジュールにはさらに 2 つのオプションがあります。_ペアレンタルコントロール_で保護対象の特定の Windows ユーザーを指定するオプションと、AdGuard 設定が変更されないようにパスワードを設定するオプションです。

### ブラウザアシスタント

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
