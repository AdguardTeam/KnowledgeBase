---
title: 发送反馈意见
sidebar_position: 4
---

## 报告问题或建议功能

如果您在 Linux 版 AdGuard 中发现错误或想建议新功能，请按照以下步骤进行操作：

- 填写[反馈表](https://surveys.adguard.com/en/adguard_linux/form.html)。
- [创建 GitHub 问题](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose)。 创建问题前，请检查[存储库](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue)以了解类似问题。

:::note

如您想添加新功能或尽快修复某一个错误，用户可以在 GitHub 上投票。 要留下您的反馈，发送某一个表情即可。

:::

## 收集并发送日志记录

1. 启用调试日志：

   `adguard-cli config set log_level debug`

2. 重现问题并尝试记住问题发生的确切时间。

3. 稍等片刻，然后导出日志：

   `adguard-cli export-logs`

   默认情况下，存档日志文件将下载到应用程序文件夹，日志路径将写入控制台。

4. 将日志文件发送到 <devteam@adguard.com>。 请指定错误的时间，并附上您的 GitHub 问题或其编号的链接 (它显示为标题旁边的 #number) 。 或者，您可以将日志文件上传到 Google Drive 并与 <devteam@adguard.com> 共享它。 将文件链接附加到您创建的 GitHub 问题。

5. 将日志记录模式切换回默认（`info`）：

   `adguard-cli config set log_level info`
