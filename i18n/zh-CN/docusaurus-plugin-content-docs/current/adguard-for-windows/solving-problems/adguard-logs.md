---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 如需了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

:::note

日志记录中提供的数据和/或文件将根据 [AdGuard 隐私政策](https://adguard.com/en/privacy.html)处理。

:::

要分析和诊断可能潜在的问题，AdGuard 技术人员可能需要 AdGuard 日志记录文件。 These files contain records about errors and other events that occur with the software. 下面是简短的说明，描述获取日志文件的方法，并在必要时将其发送给支持服务。

:::note

AdGuard 致力于保护用户的个人隐私。 我们严格遵守我们的[隐私政策](https://adguard.com/privacy/windows.html) ，不收集任何有关用户的私人信息。 请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。 如果包含此类个人信息，我们建议您删除它。

:::

### 调试日志 {#debug-logs}

1. 打开 AdGuard 设置。 Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![调试级别日志 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. 复现问题。

    我们强烈建议用户记录问题重现的确切时间：这将有助于我们的支持团队找到相关日志条目并更快地解决问题。

1. Export the collected logs using the *Export Logs* button.

    ![导出日志 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    将存档保存到任意文件夹。

1. **Important**: after exporting the logs, set the logging level back to *Default*. 「*调试*」日志记录级别会降低应用程序的运行速度。

1. 发送存档给 AdGuard 支持团队 **support@adguard.com** 时，请描述问题和出现问题的时间。

### 跟踪日志 {#trace-logs}

有时，支持团队成员可能会要求用户发送「*跟踪*」日志。 要发送跟踪日志，请执行以下操作：

1. 右击托盘菜单内的 AdGuard 图标并选择「*退出 AdGuard*」以停止 AdGuard：

    ![退出 AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    请不要让服务继续运行：

    ![停止 AdGuard 服务 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. 打开控制台（在开始面板中键入 `cmd`）。

1. 如果您已安装适用于 Windows 的 AdGuard v7.16 或更高版本，请使用命令 `C:\"Program Files"\Adguard\Adguard.exe /trace` 运行程序，无论 Windows 位数如何。

如果您有旧版本的 AdGuard for Windows：如您使用的是 64 位 Windows，则请使用命令 "C:\Program Files (x86)\Adguard\Adguard.exe /trace" 运行程序；如您使用的是 32 位 Windows，则请使用命令 "C:\Program Files\Adguard\Adguard.exe /trace"。

1. 复现问题。

    我们强烈建议用户记录问题重现的确切时间：这将有助于我们的支持团队找到相关日志条目并更快地解决问题。

1. Export the collected logs using the *Export Logs* button.

    ![导出日志 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    用户无需担心日志文件大小。 我们需要了解尽可能多的细节来解决您的问题。
