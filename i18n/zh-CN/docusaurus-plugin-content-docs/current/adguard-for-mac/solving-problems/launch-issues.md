---
title: 在 macOS 上无法启动 AdGuard 应用程序的问题
sidebar_position: 6
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

在 macOS 上，AdGuard 网络扩展偶尔会损坏，导致 AdGuard 应用程序无法使用。 在这种情况下，用户应根据操作系统版本，遵循以下其中一条指令。

## macOS 11 及更高版本上的启动问题

如果在 Big Sur、Monterey 和 Ventura 操作系统上启动 Mac 版 AdGuard 时遇到问题，请按照以下说明操作：

1. 重启 Mac 并进入[恢复模式](https://support.apple.com/en-us/HT201255)。
1. 禁用 SIP（从**实用工具**菜单启动**终端**，输入 `csrutil disable`）。
1. 重新启动 Mac。
1. 关闭 AdGuard 应用程序，打开**终端**并键入 `systemextensionsctl reset`。
1. 重新启动 Mac 并进入恢复模式。
1. 启动 SIP（从**实用工具**菜单启动**终端**，输入 `csrutil disable`）。
1. 启动 AdGuard 应用程序并启用保护。

## 在 macOS 10 上无法启动 AdGuard 应用程序的问题

如果在 Sierra、Mojave 和 Catalina 操作系统上启动 Mac 版 AdGuard 时遇到问题，请执行以下操作：

1. 打开**终端**并输入命令 `ls -@lOae /private/var/db/KernelExtensionManagement`。
1. 请确认没有 ` restricted ` 标志（如截图所示）。 ![命令示例 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. 在恢复模式下重启 Mac。
1. 打开**实用程序** → **终端**。
1. 输入 `csrutil disable`。
1. 输入管理员密码。
1. 重新启动 Mac。
1. 打开**终端**，输入以下命令：`sudo chflags restricted /private/var/db/KernelExtensionManagement`。
1. 在恢复模式下重启 Mac。
1. 打开**实用工具** → **终端** → 输入 `csrutil enable` → 输入管理员密码 → 重新启动 Mac。
1. 开启 AdGuard 保护。
