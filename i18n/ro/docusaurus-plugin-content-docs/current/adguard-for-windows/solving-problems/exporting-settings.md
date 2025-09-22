---
title: How to switch back to the previous version after updating to v8.0
sidebar_position: 12
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard for Windows v8.0 are significant, and we hope you love the new version. However, chances are something won’t go the way you expected. Version 8.0 is very different; after all, it’s the first nightly. If you find the v8.0 interface uncomfortable or have encountered too many functionality/stability issues, you can restore the previous version along with its settings.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

As an alternative, the following method is also available:

1. After upgrading to version 8, open the folder `C:\ProgramData\Adguard\Backups` and find a ZIP file with a name similar to `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. Uninstall version 8.0 with the **setting removal** option on.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Exit version 7 from the system tray to stop the filtering.
6. Extract the contents of the ZIP file from the first step and replace the following files:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Launch AdGuard.

All set!
