---
title: AdGuard フィルタ
sidebar_position: 2
---

:::info

この記事では、AdGuard製品にプリインストールされているAdGuard開発のフィルタについて説明しています。 フィルタを実際に使ってみるには、[AdGuardアプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

この記事は、AdGuard製品やその他の広告ブロックソフト（uBlock Originなど）で使用するためにAdGuardが作成したフィルターについてです。 フィルタは、バナー、ポップアップ、トラッカーなどの広告やプライバシーを脅かすコンテンツをフィルタリングするために、AdGuardのアプリやプログラムで使用されるテキスト形式のルールセットです。 フィルタには、目的に応じたルールのリストが含まれています。 言語フィルタには、対応するインターネットの言語セグメントに対するルールが含まれています（例：ドイツ語フィルタ）。 目的別フィルタ（SNSフィルタやトラッキング防止フィルタなど）は、特定の目的を果たすルールをグループ化したものです。 フィルタの有効化または無効化は、ルールリスト全体を一度に扱うことを簡単にします。

## AdGuard フィルタ

- **AdGuard ベースフィルタ**は、英語コンテンツのウェブサイトから広告を削除します。 元々は[EasyList](https://easylist.to/)をベースに、私たちが手を加えたものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **AdGuard 追跡防止フィルタ**は、さまざまなオンラインカウンターとウェブ解析ツールの包括的なリストです。 オンライン上で自分の行動を隠し、追跡を避けるために使えます。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **AdGuard URL追跡防止フィルタ**は、URLからトラッキング（追跡）パラメーターを除去し、プライバシーを向上させます。 ユーザーがAdGuardの「ステルスモード」でトラッキングパラメーターのブロックを選択すると、このフィルタは自動的に有効になります。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **AdGuard SNS用フィルタ**は、人気ウェブサイトにある「いいね！」や「ツイート」ボタンなどのソーシャルメディア統合要素を削除します。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **AdGuard 迷惑要素フィルタ**は、ウェブページ上の刺激的な要素をブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt) 以下のAdGuardフィルタが含まれています（以下のフィルタは、迷惑要素フィルタとは別に、一つ一つを有効にすることもできます）:

    - **Cookie通知フィルタ** は、Web ページ上の Cookie 通知をブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **ポップアップフィルタ**は、Webサイトの動作に関係ないすべてのポップアップをブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **モバイルアプリバナーフィルタ**は、ウェブサイトのモバイルアプリを宣伝するバナーをブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **ウィジェットフィルタ**は、サードパーティのウィジェット（オンラインアシスタント、ライブサポートチャット）などをブロックします:。 [ルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **その他の迷惑要素フィルタ**は、一般的な迷惑要素に該当しない迷惑な要素をWebページ上でブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **検索広告と自己宣伝のブロック解除フィルタ**は、ユーザーにとって有益と思われる広告のブロックを解除します。 このフィルタの詳細については、 [このページ](../search-ads)をご覧ください。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **AdGuard ロシア語フィルタ**は、ロシア語のウェブサイトから広告を削除します。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **AdGuard ドイツ語フィルタ**は、ドイツ語のウェブサイトから広告を削除します。 元々は[EasyList Germany](https://easylist.to/)フィルタがベースになっており、その後ユーザーからのクレームを元に当社で修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **AdGuard フランス語フィルタ**は、フランス語のウェブサイトから広告を削除します。 元々は[Liste FR](https://forums.lanik.us/viewforum.php?f=91)フィルタがベースになっており、その後ユーザーからのクレームを元に当社で修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **AdGuard 日本語フィルタ**は、日本語のウェブサイトから広告を削除します。 元々は[Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt)フィルタがベースになっており、その後ユーザーからのクレームを元にAdGuardが修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **AdGuard オランダ語フィルタ**は、オランダ語のウェブサイトから広告を削除します。 元々は[EasyList Dutch](https://easylist.to/)フィルタがベースになっており、その後ユーザーからのクレームを元に当社で修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **AdGuard スペイン語/ポルトガル語フィルタ**は、スペイン語およびポルトガル語のウェブサイトから広告を削除します。 元々は[Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt)フィルタがベースになっており、その後ユーザーからのクレームを元に当社で修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **AdGuard トルコ語フィルタ**は、トルコ語のウェブサイトから広告を削除します。 ユーザーからのクレームに応じてAdGuardが作成しました。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **AdGuard 中国フィルタ**は、中国語のウェブサイトから広告を削除します。 元々は[EasyList China](https://github.com/easylist/easylistchina)フィルタがベースになっており、その後ユーザーからのクレームを元にAdGuardが修正しているものです。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **AdGuard ウクライナ語フィルタ**は、ウクライナ語のウェブサイトから広告を削除します。 このフィルタの詳細については、 [このページ](https://adguard.com/en/blog/ukrainian-filter.html)をご覧ください。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **実験的フィルタ**は、潜在的に競合を引き起こし、ウェブサイトの作業を混乱させる可能性のある新しいフィルタリングルールをテストするために使用されています。 これらのルールが問題なく動けば、メインフィルタに追加されます。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **AdGuard モバイル広告フィルタ**は、モバイルデバイス上の広告をブロックします。 すべての既知のモバイル広告ネットワークが含まれています。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **AdGuard DNSフィルタ**は、数フィルタ（AdGuardベースフィルタ、SNS用フィルタ、スパイウェアフィルタ、モバイル広告フィルタ、EasyList、EasyPrivacy）で構成され、DNSレベルの広告ブロックとの互換性が向上するように簡素化されたフィルタです。 このフィルタは[AdGuard DNS](https://adguard-dns.io/kb)サーバーでも使用され、広告やトラッキングをブロックします。 [含まれているルールを見る](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
- **AdGuard 臨時修正フィルタ**は、MV3対応版 AdGuard ブラウザ拡張機能をアップデートする必要なく、人気Webサイトでのコンテンツフィルタリング問題をすばやく解決するためのフィルタです。 [含まれているルールを見る](https://filters.adtidy.org/extension/chromium-mv3/filters/24.txt)

## AdGuard フィルタポリシー

AdGuardフィルタポリシーは、AdGuardフィルタがブロックすべきものとブロックすべきでないもの、およびフィルタのルールの追加と削除の規則を定義します。 詳細については、[AdGuardフィルタポリシーの全文](../filter-policy)をお読みください。

## AdGuardフィルタに貢献する

AdGuard を愛するだけでなく、貢献もしてくれるユニークなコミュニティに大変恵まれております。 AdGuardのユーザーエクスペリエンスをより良いものにするために、多くの人々がさまざまな形でボランティアとして協力してくださっています。 あなたもに参加して変化を起こしてください。 私たちからは、最も活発なコミュニティメンバーに喜んで報酬を与えております。 そこで、実際何をすることで貢献いただけるのでしょうか。

### 問題を報告する

私たちAdGuardは、フィルタに関する問題を知らせてくれるコミュニティに依存しています。 そのおかげで、時間をより効率的に使い、フィルタを常に最新の状態に保つことができております。 報告するには、[こちらのウェブ報告ツール](https://agrd.io/report)をご利用ください。

### フィルタリングルールを提案する

[GitHub フィルタリポジトリ](https://github.com/AdguardTeam/AdguardFilters/issues)には、未解決の問題が多数あります。 問題はそれぞれ、広告の見逃しや誤検出など、ウェブサイト関連問題になっています。 好きなissueを選んで、コメントで独自のルールを提案してください。 AdGuardフィルタエンジニアがご提案を確認して承認した場合、ご指摘のルールはAdGuardのフィルタに追加されます。

[AdGuardフィルタリングルールの構文に関する公式ドキュメントはこちら](../create-own-filters)です。 注意深くお読みください。独自のフィルタリングルールを作成する際の重要な情報が含まれています。

### その他の貢献方法

その他の方法でAdGuardに貢献してくださる方のための[専用ページはこちら](https://adguard.com/contribute.html)です。
