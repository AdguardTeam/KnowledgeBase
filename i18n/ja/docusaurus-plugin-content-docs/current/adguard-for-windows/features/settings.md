---
title: 設定
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、[AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

「設定」は最も注意する価値のあるセクションです。 ここでは、アプリをご自身のニーズに合わせて設定することができます。気になるものだけをブロックし、信頼できるプロバイダのDNSサーバーを使用し、サードパーティCookieの削除を有効にすることなどができます。

![設定 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### 一般設定

ここでは、言語とカラーテーマ（ダーク・ライト）の設定、システム起動時のAdGuardの起動と自動アップデートの有効化、アップデートチャネルの選択、フィルタ更新チェック間隔の指定などを行うことができます。 また、AdGuard for Windows が正常に動作せず、サポートチームから[「デバッグログ」を収集する](/adguard-for-windows/solving-problems/adguard-logs.md)ように依頼された場合も、「設定」が役に立ちます。

![高度な設定 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

画面の一番下に「高度な設定」があります。 高度な設定を適用に変更することはAdGuardのパフォーマンスの悪化やインターネット接続の切断、もしくはあなたのセキュリティやプライバシーを侵害してしまう可能性があります。 そのため、このセクションを開くのは、あなたが何をしているのか確信がある場合、またはサポートチームから依頼された場合のみとすることをお勧めします。 高度な設定で設定できる内容について詳しく知りたい場合は、[こちらの専用記事](/adguard-for-windows/solving-problems/low-level-settings.md)をお読みください。

### 広告ブロッカー

これは AdGuard for Windows のメインモジュールで、アクセスしたウェブサイトやデバイスにインストールされたアプリから広告を削除します。 To filter out advertising and privacy-threatening content such as banners, popups, or trackers AdGuard uses different filters — groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). フィルタとは何か、どのように機能するのかについては、[こちらの記事](/general/ad-filtering/how-ad-blocking-works)をお読みください。

![広告ブロッカー \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

広告ブロッカーモジュールでは以下のことができます:

- 言語特化フィルタの自動有効化をオンにする
- [検索広告と自己宣伝](/general/ad-filtering/search-ads)のブロックをオフにする
- Windows 11のスタートメニュー広告を無効にする
- 「AdGuard ベースフィルター」などのプリインストールされたフィルタを有効にする
- リストからフィルタをインストールするか、「フィルタを追加する」ボタンをクリックしてカスタムフィルタを追加する
- 「フィルタエディタ」ボタンを使用して既存のルールグループに変更を加える
- 「フィルタリングログ」ボタンをクリックすると、コンピューターにインストールされているブラウザやアプリから送信されたすべてのリクエストが表示されます。 そこからカスタムルールを作成することで、あらゆるリクエストをブロックしたり、ブロック解除したりすることもできます。
- 手動で作成したルール、インポートしたルール、または「AdGuard アシスタント」拡張機能で作成したルールからフィルタを構成する

※手動で独自のルールを書き始める場合、[こちらの詳細な構文ガイド](/general/ad-filtering/create-own-filters)をお読みください。

### トラッキング防止

「トラッキング防止」（旧名：「ステルスモード」）機能は、ウェブサイトがあなたに関する情報（IPアドレス、ブラウザやオペレーティングシステムに関する情報、画面の解像度、ユーザーが訪問した、またはリダイレクトされたページなど）を収集することを防ぎます。 また、Cookie（クッキー）を使って、ウェブサイトはあなたのブラウザをマークしたり、個人設定やユーザー設定を保存したり、次回訪問時にあなたを識別したりします。 トラッキング防止は、そのようなデータや統計収集システムからお客様の個人情報を保護します。

![トラッキング防止 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

トラッキング防止の機能を柔軟に微調整することができます。例えば、インターネット上でウェブサイトを見つけるために使用した検索要求の受信を禁止したり、サードパーティとウェブサイト独自のCookieの両方を自動的に削除したり、居場所を追跡するために使用できるブラウザの位置情報共有を無効にしたりすることができます。

トラッキング防止とその多くのオプションについて知るには、[こちらの記事](/general/stealth-mode)をお読みください。

### ブラウジング・セキュリティ

ブラウジング・セキュリティは、悪意のあるウェブサイトやフィッシングサイトからしっかり保護してくれます。 （※AdGuard for Windows はアンチウイルスソフトではありません。 すでに始まっているウイルスのダウンロードを止めることや、すでに存在するウイルスを削除することはできません。） しかし、ドメインが「信頼できないサイト」データベースに追加されたウェブサイトにアクセスしようとしたり、そのようなウェブサイトからファイルをダウンロードしようとしたりすると、警告が表示されます。 このモジュールがどのように機能するかについての詳細は、[こちらの専用記事](/general/browsing-security)をご覧ください。

In this module, you can:

- 悪質なウェブサイトやフィッシング詐欺サイトへのリクエストがブロックされた際の通知の受け取りを有効にする
- サウンド通知を有効にする
- AdGuard が悪質サイトやフィッシングサイトのデータベースを最新の状態に保つために、匿名のセキュリティ関連情報のAdGuardサーバーへの送信を有効にすることで協力する

![ブラウジング・セキュリティ \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

ブラウジング・セキュリティについてもっと知りたい場合は、[こちらの記事](/general/browsing-security)をお読みください。

### DNS通信を保護

「DNS通信を保護」の設定は、3つの重要な理由で役に立つことがあります。 まず、ISP（インターネットプロバイダ）に追跡されないようにするためです。 例えば、`google.com`のようなウェブサイトを開くたびに、ブラウザはDNSサーバーにリクエストを送り、ウェブサイトのIPアドレスを取得します。 通常、DNSサーバーはISPに属しており、ISPはあなたのオンライン活動を追跡することができます。 2つ目の理由は、DNSトラフィックを暗号化するためです。 そして3つ目は、[DNSレベルでコンテンツをブロックする](https://adguard-dns.io/kb/general/dns-filtering/)ことです。

![DNS通信を保護 \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### ブラウザアシスタント

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
