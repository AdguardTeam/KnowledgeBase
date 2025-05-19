---
title: How to revert changes after updating to v8.0
sidebar_position: 11
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard v8.0 for Windows are significant, and we hope you love the new version. However, chances are something won’t go the way you expected. Version 8.0 is very different; after all, it’s the first nightly. If you find the v8.0 interface uncomfortable or have encountered too many functionality/stability issues, you can restore the previous version along with its settings.

To ensure your settings are preserved during the whole process, it's recommended to export them before upgrading to v8.0, so, if needed, you can then reinstall version 7 and import back your saved settings.

As an alternative, the following method is also available:

1. After upgrading to version 8, open the folder `C:\ProgramData\Adguard\Backups` and find a ZIP file with a name similar to `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this zip file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop (this is important because it will be deleted in the next step).
3. Uninstall version 8.0 with the **setting removal** option on.
4. Install the version 7 build that was installed before the update.
5. Exit version 7 from the system tray to stop the filtering.
6. Extract the contents of the ZIP file from the first step and replace the following files:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Launch AdGuard.

All set!
