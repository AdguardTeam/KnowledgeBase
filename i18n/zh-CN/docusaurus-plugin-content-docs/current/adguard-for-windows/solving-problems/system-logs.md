---
title: How to collect Windows system logs
sidebar_position: 5
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

:::note

系统日志记录中提供的数据和/或文件将根据 [AdGuard 隐私政策](https://adguard.com/en/privacy.html)处理。

:::

要分析和诊断可能潜在的问题，AdGuard 支持服务可能需要 Windows 系统日志文件。 Windows event logs contain records about all errors that occur with the installed software, including AdGuard. 下面我们简述获取日志文件的方式并在需要的时候反送给我们的支持服务。

1. 按「*Win + R*」

1. 在出现的窗口内键入 `eventvwr` 点击「*确定*」：

    ![运行窗口 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. 会出现如下图所示的事件查看器（Event Viewer）窗口。

    ![事件查看器 *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    要保存我们需要的文件，请执行以下操作：

    - 打开「*应用程序*」：「*事件查看器（本地）*」→「*Windows 日志*」→「*应用程序*」。

    - 右击「*应用程序*」，然后在下拉菜单内选择「*将所有事件另存为...*」。

    - 选择名称和保存位置并点击「*保存*」。 选择「 *显示以下语言的信息*」。 用户需要选中「*English*」旁边的复选框。 单击「*确定*」。

    - 打开「*系统*」：「*事件查看器（本地）*」→「*Windows 日志*」→「*系统*」。

    - 右击「*系统*」，然后在下拉菜单内选择「*将所有事件另存为...*」。

    - 选择目标文件夹，输入名称，点击「*保存*」。 选择「*显示以下语言的信息*」。 您需要选中「*English*」旁边的复选框。 单击「*确定*」。

请发送您最近保存的两个文件到 **support@adguard.com**。

:::note

AdGuard 致力于保护用户的个人隐私。 我们严格遵守我们的[隐私政策](https://adguard.com/privacy/windows.html) ，不收集任何有关用户的私人信息。 请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。 如果其中包含此类个人信息，我们建议您先将其删除。

:::
