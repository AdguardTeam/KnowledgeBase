---
title: How to back up and restore AdGuard settings
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

When you update or uninstall AdGuard for Windows, the app automatically creates a backup of your settings in `C:\ProgramData\Adguard\Backups` as a ZIP file with a name like `adguard_settings_7.22.5008.0-08-04-2025-13_42_15.276.zip`. You can use this backup to restore your settings after reinstalling AdGuard.

If AdGuard couldn’t transfer your settings to a new version, it will show a message offering to import the saved backup or keep the default settings.

![Failed to transfer settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/failed_to_transfer_settings.png)

## How to export and import settings manually {#export-import}

You don’t have to wait for an automatic backup — you can create a settings file at any time and import it later. In AdGuard for Windows, open _Settings_ and go to the _App settings_ tab. Click the three-dot menu in the top right corner.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/settings_export_import.png)

- **Export settings** — saves your settings (filters, custom rules, DNS configuration, and app preferences) to an `.adg` file. Choose a location and save the file.
- **Import settings** — restores settings from a previously exported `.adg` file. After importing, AdGuard will prompt you to restart the app to apply the changes.

## How to restore settings after reinstalling AdGuard v8 {#reinstall-v8}

If you’ve uninstalled AdGuard v8.0 (for example, to fix a corrupted installation) and want to reinstall it with your previous settings:

1. Before reinstalling, locate the backup ZIP file in `C:\ProgramData\Adguard\Backups`. Copy it to a safe location outside `C:\ProgramData\Adguard`, such as your Desktop — the folder will be cleaned during reinstallation.

2. Install AdGuard v8.0 again.

3. Exit AdGuard from the system tray to stop filtering.

4. Extract the contents of the backup ZIP file.

5. Replace the following files with the ones from the backup:

   - `adguard.db` → `C:\ProgramData\Adguard` — main settings database, including filters and custom rules
   - `agflm_dns.db` → `C:\ProgramData\Adguard\FLM` — DNS filter database
   - `agflm_standard.db` → `C:\ProgramData\Adguard\FLM` — standard filter database

6. Lancez AdGuard. Your previous settings, filters, and custom rules will be restored.

## How to switch back to v7 after updating to v8.0 {#switch-back-v7}

AdGuard for Windows v8.0 introduces significant changes. If you find the new interface uncomfortable or encounter issues, you can switch back to version 7.

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

7. Lancez AdGuard. Version 7 will start with your previous settings restored.
