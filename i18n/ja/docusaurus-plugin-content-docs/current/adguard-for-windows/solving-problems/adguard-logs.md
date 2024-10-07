---
title: ログの収集・送信方法
sidebar_position: 3
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際にどのように動作するかを確認するには、[AdGuard アプリをダウンロード](https://agrd.io/download-kb-adblock)してください。

:::

:::note

※ログで提供されたデータおよびファイルは、[AdGuardのプライバシーポリシーに従って](https://adguard.com/en/privacy.html)処理されます。

:::

AdGuard for Windows で発生した問題を分析および診断するために、AdGuardのお客様サポートチームはログファイルを必要とする場合があります。 これらのファイルには、ソフトウェアで発生したエラーやその他のイベントに関する記録が含まれています。 以下は、ログファイルを取得し、必要に応じてAdGuardサポートに送信する方法についての簡単な説明です。

:::note

AdGuard は、お客様のプライバシーを保護することに強くコミットしています。 [プライバシーポリシー](https://adguard.com/privacy/windows.html)を厳守し、ユーザーの個人情報を収集することはありません。 サポートチームにログを送信する前に、機密情報や共有したくない情報が含まれていないかどうか、ログファイルを確認してください。 そのような個人情報が含まれている場合は、削除してからログを送信することをお勧めします。

:::

### デバッグログ {#debug-logs}

1. AdGuardアプリ内で「設定」を開きます。 *一般設定* セクションに移動し、画面の一番下までスクロールして、「*ログレベル*」を「*デバッグ*」に切り替えます。

    ![デバッグログレベル *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. 問題を再現します。

    問題が発生した正確な時刻をメモしておくことを強くお勧めします。そうすることで、サポートチームが問題に関連するログエントリーを見つけ、問題をより早く解決することができます。

1. 「*ログをエクスポートする*」ボタンを使用して、記録されたログをエクスポートします。

    ![ログをエクスポート *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    アーカイブを任意のフォルダに保存します。

1. **重要**: ログをエクスポートした後、ログレベルを「*デフォルト*」に戻してください。 「*デバッグ*」ログレベルのまましてしまうと、アプリの動作が劇的に低速下します。

1. アーカイブを AdGuard サポートサービス (**support@adguard.com**) に送信し、問題を説明してください。また、問題が再現された時刻も必ず記入してください。

### トレース（Trace）ログ {#trace-logs}

サポートチームのメンバーから、 *トレース*ログの送信を依頼されることがあります。 Traceログの収集方法は以下の通りです:

1. トレイメニューのAdGuardアイコンを右クリックし、[ *AdGuardを終了*]を選択してAdGuardを停止します。

    ![AdGuardを終了する *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    サービスを稼働させたままにしないでください:

    ![AdGuardサービスを停止する *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. コンソールを開きます (スタートパネルに `cmd` と入力します)。

1. AdGuard for Windows v7.16以降をインストールしている場合は、Windows のビット数に関係なく、コマンド `C:\"Program Files"\Adguard\Adguard.exe /trace` でAdGuardアプリを実行します。

Windows 用 AdGuard のより古いバージョンをお持ちの場合は、64 ビット Windows を使用している場合は C:\"Program Files (x86)"\Adguard\Adguard.exe /trace コマンドでAdGuardアプリを実行し、32 ビットを使用している場合は C:\"Program Files"\Adguard\Adguard.exe /trace コマンドでAdGuardアプリを実行します。

1. 問題を再現します。

    問題が発生した正確な時刻をメモしておくことを強くお勧めします。そうすることで、サポートチームが問題に関連するログエントリーを見つけ、問題をより早く解決することができます。

1. 「*ログをエクスポートする*」ボタンを使用して、記録されたログをエクスポートします。

    ![ログをエクスポート *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    ログファイルが大きくても心配しないでください。 問題を解決するためには、できるだけ詳しい情報ほど、より早く解決策を見つけることができます。
