---
title: AdGuard フィルタポリシー
sidebar_position: 6
---

:::note 免責事項

迷惑要素フィルタを有効にする前に、このフィルタリングポリシーをよくお読みください。

AdGuard 広告ブロッカー、AdGuard DNS、およびそれらのフィルタの使用は、サードパーティのウェブサイトやサービスの動作に影響を与える可能性があります。 お客様が利用するウェブサイトやサービスのポリシーおよび利用規約の確認・遵守の責任はお客様にあります。

サードパーティー（第三者）が提供するフィルタを有効化する前に、それらの利用規約を確認した上での判断を行って利用することに同意するものとします。 第三者のフィルタの動作やその利用条件についてAdGuardは責任を負わず、AdGuard 製品に第三者フィルタが含まれていることは、決して第三者フィルタの使用を推奨するものではありません。

:::

AdGuard はフィルタを作るにあたり、長い間、一連の原則に従ってきました。これらの原則は、フィルタリングポリシーの一部として、フィルタの説明とともに、以下に概説されています。

## 共通基準

これらの基準は、すべてのフィルタのルールに等しく適用されます。

- 特定のサイトに対するルールは、そのサイトへの十分なウェブトラフィック量がある場合にのみ追加される。 トラフィック量は、公開されている統計情報（入手可能な場合）またはソーシャルネットワークの購読者数などの間接的指標によって決定される。 サイトのトラフィック量は、月間10万アクセスに達すれば十分とみなされる。 人気のないサイトに対するルールを追加することも検討したりしますが、最終的な決定はフィルタ開発者たちが行います。 トラフィック量が少ないサイトでも、サードパーティのアナリティクスや広告ネットワークがあるかどうかをチェックされます。
- コンテンツファーム（主に検索結果で上位に表示され、広告収入を得ることを目的として大量のコンテンツを制作するウェブサイト）については、フィルタ開発者たちがコンテンツの質に応じて判断する。

フィルタリングルールの品質要件:

- ルールはウェブサイトのパフォーマンスに悪影響を与えないこと。
- ブロックを解除するルールは、不必要なものを解除しないように、できるだけ具体的にしなければならない。
- JavaScriptルールの使用はできるだけ控えめにし、それなしでは広告のブロックが不可能な場合にのみ使用する。

## 広告ブロック用フィルタ

### 用語の定義

**広告ブロッカー**は、ウェブページ上の広告やその他の要素をフィルタリング、非表示、またはブロックするように設計されたソフトウェアまたはハードウェアツールです。 広告ブロッカーは、ユーザーエクスペリエンスを向上させ、ページの読み込み時間を短縮し、インターネットトラフィック（データ通信）の消費を減らし、広告をブロックし、ウェブサイトの閲覧やアプリケーションの使用中のプライバシーを強化し、迷惑な要素をブロックするために作成されています。

**フィルタ**（または**フィルタリスト**）は、コンテンツをフィルタリングし、広告ブロッカーを使用してさまざまな種類の広告やその他の種類のコンテンツをブロックするために設計されたフィルタリングルールのセットです。 これらのフィルタは通常、ウェブブラウザ、プログラム、DNSサーバーのレベルで動作します。

**アンチアドブロック**（広告ブロック対策）とは、広告ブロックを検出し、追跡、広告の再投入、広告ブロッカーの無効化（いわゆる「アドブロックウォール」）を促すなど、さまざまな方法で広告ブロックに対策することを目的としたウェブサイトやアプリケーションによって使用される技術です。 アンチアドブロック（広告ブロック対策）にはさまざまな種類があります:

- 代替手段を提供せずにウェブサイトのコンテンツをブロックするアンチアドブロック：サイトの利用を続けるには、ユーザーはそのサイトに対して広告ブロッカーを無効にしなければならない
- 広告ブロッカーの使用を継続するためにサブスクリプションを購入するなどの代替オプションを提供する「アンチアドブロックウォール」
- 行動を義務付けないメッセージ通知：ユーザーは広告ブロッカーを無効にするよう求められるが、これらのメッセージは閉じることができ、ユーザーは制限なくサイトを使い続けることができる
- 広告ブロッカーの使用に応じて代替広告を導入：広告ブロッカーが検出された場合、サイトは代替広告を導入する
- ペイウォール：コンテンツの一部または全部をユーザーから隠蔽し、コンテンツにアクセスするためには、有料サブスクリプションの購入を促すメッセージを表示するコンテンツマネタイゼーション手法

### フィルタ

AdGuardの広告ブロックフィルタには以下が含まれます:

- AdGuard ベースフィルタ
- AdGuard モバイル広告フィルタ
- 言語ごとに分けられた地域フィルタ：中国語、オランダ語、フランス語、ドイツ語、日本語、ロシア語、スペイン語/ポルトガル語、トルコ語、ウクライナ語。例「AdGuard 日本語フィルタ」

### これらのフィルタの目的

- 「**AdGuard ベースフィルタ**」は、英語のウェブサイトや、専用フィルタがないウェブサイトの広告をブロックするように設計されています。 言語に関係なくすべてのサイトに適用される一般的なフィルタリングルールも含まれています。
- 「**AdGuard モバイル広告フィルタ**」はウェブサイトのモバイル版の広告とモバイルアプリ内の広告をブロックします。 言語によるセグメンテーション・差別化はありません。
- **地域別フィルタ**（言語特化フィルタ）は、 **AdGuard ベースフィルタ**と同じポリシーに従いますが、特定の言語のウェブサイトに限定されます。

広告ブロックフィルタの目的は、インターネットから広告を読み込むことができるウェブサイト、アプリケーション、特定のデバイス上であらゆる種類の広告をブロックすることです。ブロックする広告の種類:

- 【バナー】ウェブページのさまざまな部分に画像として表示される広告
- 【ティーザー】訪問者の興味をそそり（衝撃的な見出し、注意を引く画像）、バナーのクリックを促すようにデザインされたテキストまたはグラフィカルな広告（多くの場合アニメーション）、クリックベイト
- 【テキスト広告】リンクを含むテキスト形式の広告
- 【モーダル広告】モーダルウィンドウ（ウィンドウ内で指定された操作を完了またはキャンセルするまで、他のウィンドウを開くことができないウィンドウ）の形で現在のコンテンツの上に突然表示される広告
- 【ポップアンダー（Popunders）】ページ上のどこかをクリックすると、現在のウィンドウの下に別ウィンドウで開く広告
- 【リダイレクト広告】クリックしたユーザーを自動的に別のサイトにリダイレクトするメカニズム
- 【サイトのコンテンツに偽装した広告】 サイトのコンテンツに見せかけた広告で、クリックすると宣伝商品や無関係なコンテンツが掲載されたページが開く
- 【動画広告】ウェブサイトやアプリケーションの動画コンテンツ内または個別の広告要素に埋め込まれた広告動画
- 【インタラクティブ広告】ユーザーがインタラクション・相互操作できる広告（ゲームやアンケートなど、完了・クリアすると広告アイテムが表示されるようなもの）
- 【インタースティシャル広告】モバイルデバイス上で、アプリやウェブブラウザのインターフェイスを覆うフルスクリーン広告
- 【広告の残骸】画面・ページで大きなスペースを占有していたり、背景の中で際立っていたり、訪問者の注意を引くような広告の残りもの（ほとんど判別できないものや目立たないものを除く）
- 【アンチアドブロック広告】主要な広告がブロックされた場合にサイトで表示される代替広告
- 広告ブロック検知スクリプトが広告ブロッカーの存在を検出したり、広告の表示のされ方を変えたり、フィンガープリントなどのさまざまな目的で使用する複数の既知の偽のHTML要素
- 【サイトの自己宣伝広告】※一般的なフィルタリング・ルールでブロックされている場合のみ（ *制限と例外*を参照）
- 【アンチアドブロックスクリプト】サイトの利用を妨げるアンチアドブロックスクリプト ( *制限と例外*を参照)
- 【マルウェアによって注入された広告】マルウェアによって注入された広告で、そのローディング方法や再現手順に関する詳細情報が提供されている場合
- 【マイニング】ユーザーの同意なしに仮想通貨をマイニング（採掘）するスクリプト

### 制限と例外

- サイト独自の広告（自己宣伝広告）を意図的にブロックすべきではない。 ただし、一般的なフィルタリングルールによってブロックされている場合は、ブロックを解除すべきではない。
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- アンチアドブロックウォールが以下のことをしている場合、アンチアドブロックウォールはブロックされる:
    - 広告ブロッカーの無効化や削除を強引に要求したり、ウェブサイトの利用を事実上妨害したりしている
    - 広告ブロッカーの使用がもたらす可能性のあることについて、誤解を招くような説明をしている
    - 訪問者を不正広告の危険にさらしている（ブロックされない広告が疑わしいソースから来る場合）
    - They violate or negatively impact user privacy
- AdGuard は、以下の基準の少なくとも1つを満たす広告ブロッカー検出メッセージをブロックしません:
    - ウェブサイトの利用を許可していて、コンテンツの大部分を被せていない
    - 広告ブロッカーを無効にする代わりに、ユーザーのプライバシーやセキュリティを危険にさらすことのない代替手段を提供している
    - ユーザーによるウェブサイトのコンテンツへのアクセスを許可するもの
    - レガシールールの中には、これらの基準の1つ以上を満たすメッセージもブロックし続けているものがあるかもしれません。 そのようなルールが特定された場合、そのようなルールは本ポリシーに沿って取り扱われます。
- 公開されており、悪意のある目的のみに使用されていないマイニングプールはブロックされない。

## 追跡防止フィルタ

### 用語の定義

**トラッキング**（個人情報追跡）とは、マーケティングを目的として、ウェブサイトやアプリケーションとユーザーのやり取りに関するデータを監視・収集するプロセス、およびウェブサイトやアプリケーションの動作を分析する目的で、その機能に関するテレメトリーを取得するプロセスです。 このプロセスには、訪問ページ、滞在時間、ウェブサイト要素とのインタラクション（クリック、タップ、フォーム送信など）、その他の指標の追跡が含まれます。 これにより、ウェブサイトやアプリケーションの所有者は、ユーザーの行動をよりよく理解し、機能を最適化し、マーケティング戦略を適応させることができます。 トラッキングは、パフォーマンス、使用パターンの監視、問題の特定にも使用され、ウェブサイトやアプリケーションの安定性と品質を向上させるために必要なデータを開発者に提供します。 取得されたデータから個人を特定できなくても、こうした行為はトラッキング・追跡とみなされます。

**トラッカー**（追跡ソフトウェア）とは、ウェブサイトやアプリケーションで使用され、その操作や訪問者の行動に関する情報を収集するように設計されたソフトウェアです。 ウェブサイトやアプリケーションとユーザーのインタラクションを追跡し、ページ表示、滞在時間、クリック、フォーム送信、その他のイベントに関するデータを記録します。 その目的は、ユーザーの行動を分析し、ユーザーエクスピリエンスを改善し、コンテンツや広告を最適化するためのツールを、ウェブサイトやアプリケーションの所有者に提供することです。

**URLトラッキングパラメータ**は、アナリティクス・分析システムによってURLリンクに追加される、またはウェブページ上の一部のリンクに含まれるアドレスの追加部分です。 リクエストが行われると、このURLトラッキングパラメータは分析システムやウェブサイトのバックエンドで処理され、そこから情報を抽出することができます。 例えば、URLトラッキングパラメータは、クリックや広告キャンペーンに関する情報を送信することができます。 URLトラッキングパラメータは、詐欺防止やボット検知システムにも使用されることができます。

**クッキー**（Cookie）は、ウェブサイトがデバイスに送信し、デバイス上で保存するファイルです。 これらのファイルには、デバイス上でサイトを機能させるために必要な情報や、ウェブサイト上での訪問者の行動を追跡するために使用される一意の識別子、広告パラメータなど、分析目的で使用される様々な情報が含まれています。

### フィルタ

AdGuardの追跡防止フィルタには以下が含まれます:

- AdGuard 追跡防止フィルタ
- AdGuard URL追跡防止フィルタ

### これらのフィルタの目的

「**AdGuard 追跡防止フィルタ**」は、ユーザーの個人情報・データを収集するトラッカーをブロックし、ユーザーのオンラインプライバシーを向上させるために設計されています。

ブロックするもの:

- 分析システムのスクリプト
- ウェブサイトやアプリケーション独自の追跡スクリプト
- マスクされたCNAMEトラッカー
- 追跡クッキー
- トラッキングピクセル
- ブラウザのトラッキングAPI
- Detection of the ad blocker for tracking purposes
- Google Chromeのプライバシーサンドボックス機能、およびトラッキングに使用されるプライバシーサンドボックスのフォーク（Google Topics API、Protected Audience API）

「**AdGuard URL追跡防止フィルタ**」は、ウェブアドレスからトラッキングパラメータを削除するように設計されています。

### 制限と例外

トラッキング防止フィルタは、ブロックすることでウェブサイトの正しい機能が妨げられる場合には、トラッカーをブロックすべきではありません:

- ボット対策や詐欺対策など、ブロックするサイトの利用を妨げる場合。 例えば、PerimeterXやhCaptchaをブロックすると、サイトがキャプチャで訪問者を確認しようとする際に問題が発生します。
- SentryやBugsnagのようなエラー追跡システムはブロックしません。

## 迷惑要素フィルタ

迷惑要素フィルタは、広告ではないもののうち、サイトのインタラクションやコンテンツ閲覧の妨げとなるページ上の要素（各種モーダルウィンドウやインタラクティブフォーム、クッキーの使用同意通知やリクエスト、モバイルアプリのバナー、各種ウィジェットなど）をブロックすることで、ウェブサイトのユーザビリティを向上させるように設計されています。

### 用語の定義

**クッキー（Cookie）使用同意通知**は、ウェブサイト上のクッキーの種類と使用について説明するフォームです。 クッキー（Cookie）の使用同意通知は、ユーザーがウェブサイトを訪問した際に表示され、ウェブサイトがクッキーまたはその他のトラッキング技術を使用して個人情報を収集・使用していることをユーザーに知らせるとともに、収集した情報を共有する理由と共有先を説明します。

**CMP (Consent Management Platform)**は、ウェブサイトがクッキー（Cookie）の使用規則を遵守するためのソフトウェアです。 CMPは、ユーザーの同意が得られるまでクッキーの使用を制限し、特定のクッキーの受け入れとプライバシー設定の管理をユーザーに提供します。

**ウィジェット**は、ウェブサイトの機能を拡張するユーザーインターフェース要素です。 ウェブウィジェットはウェブページに統合され、ボタン、フォーム、バナーなどのインタラクティブな要素を含むことができます。 ウィジェットを使って、他のページへの誘導なしで特定のサービスやコンテンツへのアクセスをユーザーに提供することが可能です。

**ポップアップ**は、現在のウェブページの上に表示されるウィンドウです。 追加情報、広告、通知、またはデータ入力フォームを表示するためのものです。 ポップアップは通常、ページのメインコンテンツの視界を遮り、閉じるためにユーザーのアクションを必要とし、苛立たしいことがあります。

### フィルタ

カスタマイズしやすいように、迷惑要素フィルタは目的別に分けられています:

- AdGuard クッキー通知フィルタ
- AdGuard ポップアップフィルタ
- AdGuard モバイルアプリバナーフィルタ
- AdGuard ウィジェットフィルタ
- AdGuard その他の迷惑要素フィルタ
- 「AdGuard 迷惑要素フィルタ」は上記5つの目的別フィルタをすべて含む複合フィルタです。

### これらのフィルタの目的

#### AdGuard クッキー通知フィルタ

このフィルタは、クッキー（Cookie）通知とクッキー管理プラットフォーム(CMP)からのリクエストの両方をブロックするように設計されています。 Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**制限と例外**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard ポップアップフィルタ

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**制限と例外**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard モバイルアプリバナーフィルタ

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**制限と例外**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard ウィジェットフィルタ

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**制限と例外**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard その他の迷惑要素フィルタ

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**制限と例外**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## SNS系フィルタ

### フィルタ

AdGuard Social Media filters include:

- AdGuard Social Media filter

### これらのフィルタの目的

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### 制限と例外

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## その他のフィルタ

This group contains filters that are not essential for blocking advertisements.

### 用語の定義

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### フィルタ

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### これらのフィルタの目的

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**制限と例外**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**制限と例外**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**制限と例外**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
