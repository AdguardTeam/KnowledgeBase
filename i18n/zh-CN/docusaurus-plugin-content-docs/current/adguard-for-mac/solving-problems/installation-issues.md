---
title: 解决安装问题
sidebar_position: 5
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## macOS Catalina 中的「安装失败」错误

在安装过程中，用户会遇到如下错误：

![安装错误](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

请按以下指示说明解决问题：

1. 重启 Mac 电脑。
2. Mac 重新启动后，听到启动提示音后请立即按住 *Command(⌘) + R* 键。 按住这些键，直至出现 Apple 徽标以使计算机就会进入恢复模式。
3. 从顶部栏中选择「*实用程序*」→「*终端*」并执行此命令：`csrutil disable`
4. 重启 macOS 并登录到管理员配置。
5. 打开 Finder 窗口，从顶部栏选择「*转到*」→「*转到文件夹*」并输入 `~/private/`
6. 创建名为 *tmp* 的文件夹，并输入密码。
7. 启动 AdGuard 安装。

安装完成后，请按照上述说明重启 Mac 进入恢复模式，并在终端中执行 `csrutil enable` 命令以启用系统保护。
