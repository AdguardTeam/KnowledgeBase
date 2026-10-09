---
title: How to switch back to v7 after updating to v8.0
sidebar_position: 14
---

:::info

この記事では、システムレベルでお使いのデバイスを保護する多機能広告ブロッカー、「AdGuard for Windows」について書いています。実際どのように機能するのかを確認するには、 [AdGuard アプリ](https://agrd.io/download-kb-adblock)をダウンロードしてください。

:::

## How to switch back to v7 after updating to v8.0

AdGuard for Windows v8.0 introduces significant changes. If you find the new interface uncomfortable or encounter issues, you can switch back to version 7.

:::note

If you wish to preserve your settings, it’s recommended that you export them before changing versions. You can then import your saved settings after updating the app. The steps needed to do so are listed below.

:::

1. After upgrading to v8, open the folder `C:\ProgramData\Adguard\Backups` and find a ZIP file with a name similar to `adguard_settings_7.22.5008.0-08-04-2025-13_42_15.276.zip`.

2. Copy this ZIP file somewhere outside `C:\ProgramData\Adguard`, for example, to your Desktop. This is important because the folder will be cleaned during the next step.

3. Uninstall v8.0 via _Settings_ → _Apps_ → _Installed apps_. In the uninstaller dialog, check the box to remove all user settings and data so that no v8 leftovers remain.

   ![Uninstall \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/uninstall.png)

   :::note

   For step-by-step instructions, see [How to uninstall AdGuard for Windows](/adguard-for-windows/installation#uninstall).

   :::

4. Install the previous version. You can find the download link in the _Assets_ section of the latest stable v7 release on [GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.22.9).

5. Exit version 7 from the system tray to stop filtering.

6. Extract the contents of the ZIP file from step 2 and replace the following files:

   - `adguard.db` → `C:\ProgramData\Adguard` — main settings database, including filters and custom rules
   - `agflm_dns.db` → `C:\ProgramData\Adguard\FLM` — DNS filter database
   - `agflm_standard.db` → `C:\ProgramData\Adguard\FLM` — standard filter database

7. AdGuard を起動します。 Version 7 will start with your previous settings restored.
