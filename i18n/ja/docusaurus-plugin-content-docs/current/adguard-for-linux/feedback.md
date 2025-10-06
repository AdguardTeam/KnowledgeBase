---
title: フィードバックの送信
sidebar_position: 4
---

## 問題の報告、機能の提案などをしたい場合

AdGuard for Linux にバグを発見した場合、または新機能を提案したい場合、以下の方法があります：

- [フィードバックフォーム](https://surveys.adguard.com/en/adguard_linux/form.html)のご記入
- [GitHub issue](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose)の作成 （※作成前に、[リポジトリ](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue)で同様の問題がすでにないかをご確認ください。）

:::note

新機能やバグ修正の実装をサポートしたい場合は、GitHubで投票することができます。 投票するには、絵文字で反応するだけで結構です。

:::

## ログの収集・送信方法

1. デバッグログを有効にします:

   `adguard-cli config set log_level debug`

2. 問題を再現し、問題が発生した正確な時刻をメモしておいてください。

3. 少し待ってからログをエクスポートします:

   `adguard-cli export-logs`

   そうしますと、アーカイブされたログファイルは、デフォルトでアプリケーションフォルダにダウンロードされ、ログへのパスがコンソールに書き込まれます。

4. ログファイルを <devteam@adguard.com> に送信します。 メールにバグの発生時刻とissueへのリンクまたはissue番号（番号はissueタイトルの横に「#○○」として表示されます）を記載してください。 もう一つの方法として、ログファイルを Google ドライブにアップロードして、<devteam@adguard.com> にリンクを送りください。 GitHubのissueにもファイルへのリンクを追加してください。

5. ログ記録モードを `info` に戻します:

   `adguard-cli config set log_level info`
