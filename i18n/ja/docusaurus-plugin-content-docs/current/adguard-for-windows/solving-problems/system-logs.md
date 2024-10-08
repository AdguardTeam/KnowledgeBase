---
title: Windows システムログを収集する方法
sidebar_position: 5
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

:::note

※システムログで提供されたデータおよびファイルは、[AdGuardのプライバシーポリシーに従って](https://adguard.com/en/privacy.html)処理されます。

:::

AdGuard for Windows で発生した問題を分析および診断するために、AdGuardのお客様サポートチームはWindowsのシステムログファイルを必要とする場合があります。 Windows のイベントログには、AdGuard を含む、インストールされたソフトウェアで発生したすべてのエラーの記録が含まれています。 以下は、ログファイルを取得し、必要に応じてAdGuardサポートに送信する方法についての簡単な説明です。

1. *Win + R* を押します。

1. 表示されたウィンドウに「`eventvwr`」と入力し、「*OK*」をクリックします:

    ![実行ウィンドウ *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. イベント ビューアー ウィンドウが表示されます。

    ![イベントビューア *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    必要なファイルを保存するには、以下の手順を実行します:

    - *アプリケーション*を開きます: *イベント ビューアー (ローカル)* → *Windows ログ* → *アプリケーション*

    - *アプリケーション* を右クリックし、ドロップダウンメニューで「*すべてのイベントを名前を付けて保存...*」を選択します。

    - 保存する名前と保存場所を選択し、「*保存*」をクリックします。 「*以下の言語の情報を表示する*」を選択します。 *英語*の横にあるチェックボックスをオンにする必要があります。 「*OK*」をクリックします。

    - *システム*を開きます: *イベント ビューアー (ローカル)* → *Windows ログ* → *システム*

    - *システム* を右クリックし、ドロップダウンメニューで「*すべてのイベントを名前を付けて保存...*」を選択します。

    - 保存先フォルダを選択し、名前を入力して「*保存*」をクリックします。 「*以下の言語の情報を表示する*」を選択します。 *英語*の横にあるチェックボックスにチェックを入れます。 「*OK*」をクリックします。

最近保存した 2 つのファイルを **support@adguard.com** まで送信してください。

:::note

AdGuard は、お客様のプライバシーを保護することに強くコミットしています。 [プライバシーポリシー](https://adguard.com/privacy/windows.html)を厳守し、ユーザーの個人情報を収集することはありません。 サポートチームにログを送信する前に、機密情報や共有したくない情報が含まれていないかどうか、ログファイルを確認してください。 そのような個人情報が含まれている場合は、削除してからログを送信することをお勧めします。

:::
