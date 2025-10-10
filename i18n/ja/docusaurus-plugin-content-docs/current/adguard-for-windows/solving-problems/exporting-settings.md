---
title: v8.0にアップデートした後で前バージョンに戻す方法
sidebar_position: 12
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。 実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

AdGuard for Windows v8.0 の変更は大きなものとなっており、この新バージョンを気に入っていただけることを願っています。 しかし、期待通りに進まないことがある可能性も考えられます。 バージョン8.0は前バージョンに比べて大きく異なります。なにしろ、これが最初のNightlyビルドであるからです。 v8.0のインターフェイスが使いにくく感じたり、機能性や安定性の問題が多発した場合は、以前のバージョンおよびその設定を復元できます。

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

代替方法として、以下も利用できます：

1. バージョン8.0にアップデートした後、フォルダー「C:\\ProgramData\\Adguard\\Backups」を開き、形式が「adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip」のような名前のZIPファイルを探してください。
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. バージョン8.0を「**設定の削除**」オプションがオンの状態でアンインストールします。
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. システムトレーからバージョン7を終了することで、フィルタリングを停止します。
6. 最初のステップのZIPファイルの内容を解凍し、以下のようにファイルを置き換えてください：
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. AdGuard を起動します。

完了です。
