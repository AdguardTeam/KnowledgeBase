---
title: 設定
sidebar_position: 2
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、[AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

「設定」は最も注意する価値のあるセクションです。 ここでは、アプリをご自身のニーズに合わせて設定することができます。気になるものだけをブロックし、信頼できるプロバイダのDNSサーバーを使用し、サードパーティCookieの削除を有効にすることなどができます。

![設定 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### 一般設定

ここでは、言語とカラーテーマ（ダーク・ライト）の設定、システム起動時のAdGuardの起動と自動アップデートの有効化、アップデートチャネルの選択、フィルタ更新チェック間隔の指定などを行うことができます。 Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![高度な設定 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

画面の一番下に「高度な設定」があります。 高度な設定を適用に変更することはAdGuardのパフォーマンスの悪化やインターネット接続の切断、もしくはあなたのセキュリティやプライバシーを侵害してしまう可能性があります。 そのため、このセクションを開くのは、あなたが何をしているのか確信がある場合、またはサポートチームから依頼された場合のみとすることをお勧めします。 高度な設定で設定できる内容について詳しく知りたい場合は、[こちらの専用記事](/adguard-for-windows/solving-problems/low-level-settings.md)をお読みください。

### 広告ブロッカー

これは AdGuard for Windows のメインモジュールで、アクセスしたウェブサイトやデバイスにインストールされたアプリから広告を削除します。 AdGuard は、バナー、ポップアップ、トラッカーなどのような、広告やプライバシーを脅かすコンテンツをフィルタリングするために、さまざまなフィルタ（[特別な構文](/general/ad-filtering/create-own-filters)で記述され、同様の目的を持つルールグループ）を使用します。 フィルタとは何か、どのように機能するのかについては、[こちらの記事](/general/ad-filtering/how-ad-blocking-works)をお読みください。

![広告ブロッカー \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

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

![トラッキング防止 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

トラッキング防止の機能を柔軟に微調整することができます。例えば、インターネット上でウェブサイトを見つけるために使用した検索要求の受信を禁止したり、サードパーティとウェブサイト独自のCookieの両方を自動的に削除したり、居場所を追跡するために使用できるブラウザの位置情報共有を無効にしたりすることができます。

トラッキング防止とその多くのオプションについて知るには、[こちらの記事](/general/stealth-mode)をお読みください。

### ブラウジング・セキュリティ

ブラウジング・セキュリティは、悪意のあるウェブサイトやフィッシングサイトからしっかり保護してくれます。 （※AdGuard for Windows はアンチウイルスソフトではありません。 すでに始まっているウイルスのダウンロードを止めることや、すでに存在するウイルスを削除することはできません。） しかし、ドメインが「信頼できないサイト」データベースに追加されたウェブサイトにアクセスしようとしたり、そのようなウェブサイトからファイルをダウンロードしようとしたりすると、警告が表示されます。 このモジュールがどのように機能するかについての詳細は、[こちらの専用記事](/general/browsing-security)をご覧ください。

このモジュールでできること:

- 悪質なウェブサイトやフィッシング詐欺サイトへのリクエストがブロックされた際の通知の受け取りを有効にする
- サウンド通知を有効にする
- AdGuard が悪質サイトやフィッシングサイトのデータベースを最新の状態に保つために、匿名のセキュリティ関連情報のAdGuardサーバーへの送信を有効にすることで協力する

![ブラウジング・セキュリティ \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

ブラウジング・セキュリティについてもっと知りたい場合は、[こちらの記事](/general/browsing-security)をお読みください。

### DNS通信を保護

「DNS通信を保護」の設定は、3つの重要な理由で役に立つことがあります。 まず、ISP（インターネットプロバイダ）に追跡されないようにするためです。 例えば、`google.com`のようなウェブサイトを開くたびに、ブラウザはDNSサーバーにリクエストを送り、ウェブサイトのIPアドレスを取得します。 通常、DNSサーバーはISPに属しており、ISPはあなたのオンライン活動を追跡することができます。 2つ目の理由は、DNSトラフィックを暗号化するためです。 そして3つ目は、[DNSレベルでコンテンツをブロックする](https://adguard-dns.io/kb/general/dns-filtering/)ことです。

![DNS通信を保護 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

AdGuard for Windows の「DNS通信を保護」モジュールでは、広告とトラッカーをブロックする「[AdGuard DNS](https://adguard-dns.io/kb/)」、アダルトコンテンツをブロックする「AdGuard DNS ファミリー保護」、または安全で信頼性の高い接続を提供するが何もフィルタリングしない「AdGuard DNS フィルタリングなし」など、既知のDNSプロバイダからDNSサーバを選択できます。 カスタムDNSサーバーを追加することもできます。 また、[DNSルール構文](https://adguard-dns.io/kb/general/dns-filtering-syntax/)を使ってカスタムルールを追加するオプションもあります。 また、必要に応じて[お好みのDNSフィルタ](https://filterlists.com)を追加することもできます。

### ペアレンタルコントロール

子供が使用するパソコンで、アクセスを制限する必要があるウェブサイトがいくつかあります。 ペアレンタルコントロールがこの機能を果たします。

![ペアレンタルコントロール \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

このモジュールは、ブラウザで開かれたウェブページの内容をチェックし、子供にとって好ましくない内容（大人向けの画像やテキスト、下品な言葉、暴力、薬物の宣伝など）のものをフィルタリングします。 ペアレンタルコントロールの設定はパスワードで保護されているため、子供が自分で制限をオフにすることはできません。 このモジュールは、好ましくないサイトへの誘導をブロックするだけでなく、検索結果から子供に不適切なリンクを削除することもできます。

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. 「実行形式ファイルのダウンロードをブロック」を有効にしますと、お子様のコンピュータへのソフトウェアのダウンロードとインストールを防ぎます。 _ペアレンタルコントロール_モジュールにはさらに 2 つのオプションがあります。_ペアレンタルコントロール_で保護対象の特定の Windows ユーザーを指定するオプションと、AdGuard 設定が変更されないようにパスワードを設定するオプションです。

![ペアレンタルコントロール \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### ブラウザアシスタント

![ブラウザアシスタント \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

このタブから、AdGuard ブラウザアシスタントのインストールに簡単に進むことができます。AdGuard ブラウザアシスタントは、ブラウザから直接フィルタリングを管理することを主な機能としています。 [別の記事](/adguard-for-windows/browser-assistant.md)で、その使い方や、ブラウザにブラウザアシスタントがない場合の対処方法について詳しく説明しました。
