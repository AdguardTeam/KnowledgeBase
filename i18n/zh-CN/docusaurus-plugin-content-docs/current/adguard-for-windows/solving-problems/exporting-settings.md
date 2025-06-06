---
title: 如何回退至旧版本（升级 v8.0 后）
sidebar_position: 11
---

:::info

本文适用于 Windows 版的 AdGuard，是一种多功能广告拦截程序，可在系统级别保护用户的设备。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard for Windows v8.0 are significant, and we hope you love the new version. 不过，某些功能可能不如预期。 v8.0 版本差异较大，毕竟这是首个 Nightly 夜间构建版。 如果您觉得 v8.0 界面不适应或遇到过多功能/稳定性问题，可以恢复旧版本及原有设置。

为确保整个过程中设置不丢失，建议在升级 v8.0 前导出设置，这样在需要时，您可以重新安装 v7 版本并导入保存的设置。

您也可以采用以下替代方案：

1. 升级到 v8 后，打开 `C:\ProgramData\Adguard\Backups` 文件夹。找到类似 `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip` 的压缩文件。
2. 将该 zip 文件复制到 `C:\ProgramData\Adguard` 以外的位置（如桌面，这很关键，因为下一步会删除原文件）。
3. 卸载 v8.0（选择**删除设置**选项）
4. 安装更新前使用的 v7 版本。
5. 从系统托盘退出 v7 以停止过滤。
6. 解压第一步的 zip 文件，替换以下文件：
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. 启动 AdGuard。

完成！
