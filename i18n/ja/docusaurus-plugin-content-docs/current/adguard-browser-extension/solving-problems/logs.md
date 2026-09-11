---
title: バックグラウンドページからログをエクスポートする方法
sidebar_position: 1
---

## 拡張機能のバックグラウンドページからログをエクスポートする方法

### Google Chrome の場合

1. AdGuard ブラウザ拡張機能を開き、可能であれば、エラーに至った操作を繰り返して、問題を再現してください。 ※問題が発生した時刻を記録しておいてください。

2. `chrome://extensions` に移動します。

3. _開発者モー&#x30C9;_&#x3092;有効にします。

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Mozilla Firefox の場合

1. AdGuard ブラウザ拡張機能を開き、可能であれば、エラーに至った操作を繰り返して、問題を再現してください。 ※問題が発生した時刻を記録しておいてください。

2. `about:addons` に移動します。

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. 「_検証する_」をクリックします。

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## ログの送信方法

:::note

AdGuard は、お客様のプライバシーを保護することに強くコミットしています。 [プライバシーポリシー](https://adguard.com/privacy/browser-extension.html)を厳守し、ユーザーの個人情報を収集することはありません。 サポートチームにログを送信する前に、機密情報や共有したくない情報が含まれていないかどうか、ログファイルを確認してください。 そのような個人情報が含まれている場合は、削除してからログを送信することをお勧めします。

:::

ログを収集したら、以下の手順に沿って開発チームに送信してください:

1. [GitHubでバグを報告](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose)してください。
2. ログと再生時間を含むアーカイブを `devteam@adguard.com` に送信してください。GitHub issueへのリンクもメールにご記載ください。 ファイルを添付する代わりに、アーカイブをGoogleドライブにアップロードしてリンクを送信することもできます。
