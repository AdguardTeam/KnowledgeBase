---
title: 无法启用保护
sidebar_position: 2
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

如果由于某种原因无法启用 AdGuard 保护，请执行以下操作：

1. 单击菜单栏上的 AdGuard 图标并转到「*高级*」→「*重置设置...*」→「*退出 AdGuard...*」。

2. 在 Spotlight 搜索工具中，键入‘终端’，输入并执行 `sudo rm -R /Library/Application\ Support/com.adguard.adguard` 命令。

3. 重启计算机。

4. 再次打开终端，输入并执行 `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` 命令。 用户将收到以下信息：`No such file or directory`。

5. 启动 AdGuard 并按提示输入登录信息。
