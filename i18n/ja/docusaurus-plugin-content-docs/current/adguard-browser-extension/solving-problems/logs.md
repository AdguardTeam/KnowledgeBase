---
title: バックグラウンドページからログをエクスポートする方法
sidebar_position: 1
---

## 拡張機能のバックグラウンドページからログをエクスポートする方法

### Google Chrome の場合

1. AdGuard ブラウザ拡張機能を開き、可能であれば、エラーに至った操作を繰り返して、問題を再現してください。 ※問題が発生した時刻を記録しておいてください。

2. `chrome://extensions` に移動します。

3. _開発者モード_を有効にします。

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. `background.html`をクリックします。

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. _コンソール_タブを開きます。

   ![The Console tab \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. コンテキスト メニューを開き、_名前を付けて保存…_ を選択します。

   ![Save as \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Mozilla Firefox の場合

1. AdGuard ブラウザ拡張機能を開き、可能であれば、エラーに至った操作を繰り返して、問題を再現してください。 ※問題が発生した時刻を記録しておいてください。

2. `about:addons` に移動します。

3. 「_アドオンのデバッグ_」をクリックします。

   ![Debug Add-ons \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. 「_検証する_」をクリックします。

   ![Inspect \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. _コンソール_タブを開きます。

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. 「_すべてのメッセージをファイルに保存_」をクリックします。

   ![Save \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## ログの送信方法

:::note

AdGuard は、お客様のプライバシーを保護することに強くコミットしています。 [プライバシーポリシー](https://adguard.com/privacy/browser-extension.html)を厳守し、ユーザーの個人情報を収集することはありません。 サポートチームにログを送信する前に、機密情報や共有したくない情報が含まれていないかどうか、ログファイルを確認してください。 そのような個人情報が含まれている場合は、削除してからログを送信することをお勧めします。

:::

ログを収集したら、以下の手順に沿って開発チームに送信してください:

1. [GitHubでバグを報告](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose)してください。
2. ログと再生時間を含むアーカイブを `devteam@adguard.com` に送信してください。GitHub issueへのリンクもメールにご記載ください。 ファイルを添付する代わりに、アーカイブをGoogleドライブにアップロードしてリンクを送信することもできます。
