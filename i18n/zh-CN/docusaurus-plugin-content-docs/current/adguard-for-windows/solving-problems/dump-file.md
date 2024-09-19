---
title: 创建 Dump 文件
sidebar_position: 8
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

:::note

转储文件中提供的数据和/或文件将根据 [AdGuard 隐私政策](https://adguard.com/en/privacy.html) 处理。

:::

要诊断用户在使用 AdGuard 期间可能遇到的潜在问题，支持团队需要进程 Dump 文件（转储文件）。 转储文件帮助开发者展现应用程序在某个周期内执行的进程。 用户可以按以下所述方式收集电脑上的转储文件。

1. 按按键组合「**Ctrl + Shift + Esc**」点击「**任务管理器**」

1. 在顶部的菜单内选择「**详细信息**」

    ![任务管理器详细信息](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. 右击您要为之创建转储文件的进程（如，支持团队可能会要求您为 `AdGuard.exe` 创建转储文件）

1. 在下拉菜单内选择「**创建转储文件**」

1. 转储文件创建成功！

    ![创建转储文件](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

创建转储文件后，请导航至文件所在。 转储文件创建完成后会提示用户打开其所在文件夹。 如没有，您可以在 **%tmp%** 文件夹内找到它。 创建的转储文件（`.DMP`）其名称与您在先前步骤所选的进程名称相同。 文件体积相当大，所以请在将其发送给我们的支持团队前先压缩它。

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard 进程](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

当您发送转储文件给我们的支持团队时，也请附上 AdGuard 程序日志以便我们更好的解决问题。 [Here](../adguard-logs) you can check the instructions on how to get the log file.
