---
title: How to restore settings after updating to v8.0
sidebar_position: 11
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

After installing AdGuard for Windows v8.0, your user settings will be reset. To keep your preferences, the most reliable way is to export your settings before upgrading to version 8. Then, if needed, you can reinstall version 7 and simply import them back.

As an alternative, the following method is also available:

1. After upgrading to version 8, open the folder `C:\ProgramData\Adguard\Backups` and find a ZIP file with a name similar to `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this zip file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop (this is important because it will be deleted in the next step).
3. Uninstall version 8.0 with the **setting removal** option on.
4. Install the version 7 build that was installed before the update.
5. Exit version 7 from the system tray to stop the filtering.
6. Extract the contents of the ZIP file from first step and replace the following files:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Launch AdGuard.

All set! Now you can use your costumary settings in AdGuard for Windows v8.0.
