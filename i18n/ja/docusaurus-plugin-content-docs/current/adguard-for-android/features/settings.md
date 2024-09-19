---
title: 設定
sidebar_position: 4
---

:::info

この記事は、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Android」についてです。 デバイス全体を保護するこのアプリは、[こちらからダウンロード](https://agrd.io/download-kb-adblock)できます。

:::

「設定」画面は、画面下部の右端の⚙アイコンをタップすることとアクセスできます。 このセクションには、各種設定、アプリ・ライセンス・サブスクリプション に関する情報、各種サポート資料が含まれています。

## 一般設定

このセクションでは、アプリの外観や動作を管理することができます。カラーテーマや言語を変更したり、通知を設定したりすることが可能です。 AdGuardチームがアプリのクラッシュを検出し、ユーザビリティを調査するのを支援したい場合は、「クラッシュを自動報告する」と「技術的情報とインタラクション情報を送信する」をオンにできます。

![General \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

「アプリとフィルタのアップデート」では、フィルタの自動更新を設定し、アプリのアップデートチャネルを選択できます。 一般使用向けの安定したバージョンのアップデートを受け取るには「安定版」チャネル、新機能への早期アクセスしたい場合には 「ベータ版」または「Nightly」チャネルを選択してください。

![Updates \*mobile\_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 詳細設定

「自動化」オプションを使用すると、Tasker アプリを介して AdGuard を管理できます。

「ウォッチドッグ（Watchdog）」は、AdGuard がシステムによって無効化されるのを防ぎます ([Android のバッテリー節約モードについてもお読みください](/adguard-for-android/solving-problems/background-work/))。 入力した値は、ウォッチドッグチェック間の間隔 (秒単位) になります。

「ログ・レベル」は、アプリの操作に関するどのデータをログに記録するかを定義します。 「デフォルト」レベルでは、アプリはイベントに関するデータを収集します。 「デバッグ」レベルでは、より多くのイベントがログに記録されます。AdGuard チームから問題をより深く理解するために有効にするよう依頼されましたら、これを有効にしてください。 [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

「ローレベル設定」セクションは上級者ユーザー向けです。 [ローレベル設定について詳しくはこちら](/adguard-for-android/solving-problems/log/)

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## フィルタリング

このセクションでは、HTTPSフィルタリング設定、フィルタ、ユーザースクリプトを管理し、プロキシサーバーを設定することができます。

![Filtering \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### フィルタ

AdGuard は、フィルタのルールを適用することで、広告、トラッカー（追跡）、迷惑なコンテンツをブロックします。 「AdGuardによる保護」セクションにある機能のほとんどは、[AdGuard フィルタ](/general/ad-filtering/adguard-filters/#adguard-filters) を使って動いています。 例えば、「基本的な保護」を有効にすると、「AdGuard ベースフィルタ」と「AdGuard モバイル広告フィルタ」が自動的にオンになります。 逆もまた同様で、両方のフィルタをオフにすると、「基本的な保護」も無効になります。

![Filters \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

デフォルトで有効になっているフィルタは、AdGuard が普通に動作するのに十分です。 しかし、広告ブロックをカスタマイズしたい場合は、他のAdGuardフィルタやサードパーティのフィルタを使用することができます。 既存のフィルタを追加で有効にするには、フィルタのカテゴリを選択し、必要なフィルタを選んでオンにします。 カスタムフィルタを追加するには、[_カスタムフィルタ_] → [_カスタムフィルターを追加する_] をタップし、フィルタの URL またはファイルパスを入力します。

:::note

多くのフィルタを有効にしすぎると、一部のウェブサイトが正しく動作しなくなることがありますので、有効フィルタの数にはご注意ください。

:::

[フィルタについてもっと読む](https://adguard.com/en/blog/what-are-filters.html)

### ユーザースクリプト

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. ユーザースクリプトをインストールするには、専用のユーザースクリプト・マネージャが必要です。 AdGuard にはこのようなマネージャー機能があるので、そのままURLまたはファイルからユーザースクリプトを追加することができます。

![Userscripts \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra は、複雑な広告やウェブサイトに広告を再投入するメカニズムをブロックしてくれるカスタム・ユーザースクリプトです。

#### AMPを無効化

「AMPを無効化」は、Google 検索結果ページで [Accelerated mobile pages（AMP）](https://ja.wikipedia.org/wiki/Accelerated_Mobile_Pages) を無効にするユーザー スクリプトです。

### ネットワーク

#### HTTPSフィルタリング

多くのウェブサイトやアプリで広告やトラッカー（追跡）をブロックするには、AdGuard は HTTPS トラフィックをフィルタリングできることが必要です。 [HTTPSフィルタリングについてもっと読む](/general/https-filtering/what-is-https-filtering)

##### セキュリティ証明書

暗号化されたトラフィックを処理するためには、AdGuard はデバイスに CA 証明書をインストールします。 トラフィックはローカルでフィルタリングされ、AdGuard が接続のセキュリティ性を検証しますので、安全です。

旧バージョンのアンドロイドでは、証明書は自動的にインストールされます。 Android 11 以降では、手動で証明書をインストールする必要があります。 [インストール手順はこちら](/adguard-for-android/solving-problems/manual-certificate/)

ユーザーストア内の CA 証明書は、ブラウザや一部のアプリで HTTPS トラフィックをフィルタリングするのに十分です。 しかし、システムストアの証明書しか信用しないアプリもあります。 そういったアプリで HTTPS トラフィックをフィルタリングするには、AdGuard の CA 証明書をシステムストアにインストールする必要があります。 [その手順はこちら](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPSフィルタリングされるアプリ

このセクションには、AdGuard が HTTPS トラフィックをフィルタリングするアプリのリストが含まれています。 ※この設定をデバイス上のすべてのアプリに適用するのは、ユーザーストアとシステムストアの両方にCA証明書がある場合のみ可能です。

##### HTTPSフィルタリング対象ウェブサイト

この設定では、AdGuard が HTTPS トラフィックをフィルタリングする Web サイトを管理できます。

HTTPS フィルタリングにより、AdGuard はリクエストと応答のコンテンツをフィルタリングできますが、AdGuard はこのデータを収集または保存したりすることは一切ありません。 ただし、セキュリティを強化するために、[潜在的に機密情報を含むウェブサイトを HTTPS フィルタリングから除外](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data)します。

次のいずれかのモードを選択して、除外する必要があると思われる Web サイトを追加することもできます:

- 特定のウェブサイトをHTTPSフィルタリングの対象から除外する
- 除外リストに追加されたウェブサイトのみのHTTPSトラフィックをフィルタリングする

デフォルトでは、金融ウェブサイトなど、Extended Validation (EV) 証明書を持つウェブサイトもAdGuardはフィルタリングしません。 必要であれば、「EV証明書を持つウェブサイトをフィルタリング」オプションを有効にすることができます。

#### プロキシ

AdGuardを、デバイスのすべてのトラフィックをプロキシサーバー経由でルーティングするように設定できます。 [アウトバウンドプロキシの設定方法](/adguard-for-android/solving-problems/outbound-proxy)

「プロキシ」セクションでは、AdGuard と連携するサードパーティの VPN を設定することもできます（お使いのVPNプロバイダーがそれを許可している場合）。

「プロキシ経由で動作するアプリ」の下で、指定したプロキシ経由でトラフィックをルーティングするアプリを選択できます。 _AdGuard VPN との併用モード_が有効になっている場合、この設定は AdGuard VPN のアプリ除外の役割を果たすようになります。これにより、AdGuard VPN トンネル経由でルーティングされるアプリを指定できます。

#### ルーティングモード

このセクションでは、トラフィックのフィルタリング方法を選択できます。

- 「ローカルVPN」は、ローカルに作成された VPN を介してトラフィックをフィルタリングします。 これは最も安定性の高いモードです。 Android の制限により、このモードはルート化されていないデバイスで使用できる唯一のシステム全体のトラフィックフィルタリング方法でもあります。

:::note

※_ローカルVPN_ モードでは、AdGuard を他の VPN と同時に使用することはできません。 AdGuard と別の VPN を併用するには、「プロキシ」モードで動作するように再構成し、AdGuard でアウトバウンドプロキシを設定する必要があります。 AdGuard VPN の場合、これは[_併用モード_](/adguard-for-android/features/integration-with-vpn)のおかげで自動的に行われます。

:::

- 「自動プロキシ」は、VPN の使用を必要としない代替トラフィックルーティング方法です。 大きな利点の 1 つは、VPN と並行して実行できることです。 ※このモードにはroot権限が必要です.

- 「手動プロキシ」は、特定のポートにプロキシサーバーを設定し、それを Wi-Fi 設定で構成できる、というモードです。 ※このモードには、Android 10 以降のroot権限が必要です。

## ライセンス

このセクションでは、お使いのライセンスに関する情報を確認し、以下のように管理することができます:

- [フルバージョンの機能](/adguard-for-android/features/free-vs-full)を有効にするためのAdGuardライセンス購入
- AdGuard アカウントにログインするか、ライセンスキーを入力してライセンスを有効化
- 7日間の無料試用期間をまだ利用していない場合は、登録して試用期間を有効にする
- Refresh the license status from the three-dots menu (⋮)
- AdGuard アカウントを開いてライセンスを管理する
- ライセンスをリセットする（たとえば、ライセンスの最大デバイス数上限に達し、別のライセンスを適用したい場合などです。）

![License screen \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## サポート

AdGuard for Android に関するご質問やご意見には、このセクションをご利用ください。 サポートにお問い合わせいただく前に、_[よくあるご質問（FAQ）](https://adguard.com/support/adguard_for_android.html)_ またはこのナレッジベースを参照することをお勧めします。

![Support \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

すり抜け広告を見つけた場合は、「不適切なブロックを報告する」からご報告ください。

アプリの変な動作については、「バグ・不具合を報告する」を選択してください。 可能でしたら、問題を詳しく説明し、アプリのログを添付してください。 [問題を説明する方法はこちら](/guides/report-bugs/#how-to-describe-a-problem)

ご提案については、「機能を依頼・提案する」をご利用ください。

:::note

GitHub も、バグを報告したり、新しい機能を提案したりするためのいい手段です。GitHub上のご報告等は直接エンジニアが頻繁に確認します。 [報告手順とリポジトリへのリンクはこちら](/guides/report-bugs/#adguard-for-android)

:::
