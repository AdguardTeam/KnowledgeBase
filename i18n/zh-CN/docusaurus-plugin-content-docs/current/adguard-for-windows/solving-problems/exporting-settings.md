---
title: 如何回退至旧版本（升级 v8.0 后）
sidebar_position: 12
---

:::info

本文适用于 Windows 版的 AdGuard，是一种多功能广告拦截程序，可在系统级别保护用户的设备。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard for Windows v8.0 are significant, and we hope you love the new version. 不过，某些功能可能不如预期。 v8.0 版本差异较大，毕竟这是首个 Nightly 夜间构建版。 如果您觉得 v8.0 界面不适应或遇到过多功能/稳定性问题，可以恢复旧版本及原有设置。

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

您也可以采用以下替代方案：

1. 升级到 v8 后，打开 `C:\ProgramData\Adguard\Backups` 文件夹。找到类似 `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip` 的压缩文件。
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. 卸载 v8.0（选择**删除设置**选项）
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. 从系统托盘退出 v7 以停止过滤。
6. 解压第一步的 zip 文件，替换以下文件：
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. 启动 AdGuard。

完成！
