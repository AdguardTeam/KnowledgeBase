---
title: 如何收集系统日志
sidebar_position: 4
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

:::note

日志记录中提供的数据和/或文件将根据 [AdGuard 隐私政策](https://adguard.com/en/privacy.html)处理。

:::

有时候常规日志可能无法识别问题的根源。 在这种情况下，就需要系统日志。 以下是收集日志的说明：通过开发人员选项和 Logcat。

:::note

AdGuard 致力于保护用户的个人隐私。 我们严格遵守我们的[隐私政策](https://adguard.com/privacy/android.html) ，不收集任何有关用户的私人信息。 请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。 如果其中包含此类个人信息，我们建议您先将其删除。

:::

## 从设备捕获错误报告

要从设备获取错误报告，请执行以下操作：

1. 确保您已开启[ 开发者选项](https://developer.android.com/studio/run/device.html#developer-device-options)。

1. 在「**开发者选项**」内，点击「**获取错误报告**」。

    ![错误报告 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. 选择您要的错误报告类型并点击「**报告**」。

    :::note

    稍等片刻，您就会看到错误报告已准备就绪的通知（见图 2）。


:::

    ![错误报告 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. 要分享错误报告，请点击通知。

    ![错误报告 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. 将此日志发送给我们的支持团队。

    :::note

    如果您在反馈的信息中指定 HelpDesk 号或 GitHub 问题号，我们的支持团队会更快地处理您的问题。


:::

## 通过 Logcat 捕获错误报告

在 Android 7 及更低版本的设备上，错误报告无法自动发送。 然后，用户可以通过 Logcat 进行手动捕获，Logcat 是一个标准 Android 命令行工具，可转储系统消息日志。

请按此说明操作：

### 第一部分：准备设备

1. 将设备切换到开发者模式。 打开手机「**设置**」→「**关于**」→ 点击 7 次**版本号**。

1. 打开「**开发者选项**」。

1. 启用「**USB 调试**」。

1. 将每个「**日志缓冲区**」的大小增加到 4MB。

在完成第二部分（从设备中获取日志）之前，4MB 应该足以存储我们需要的日志；

### 第二部分：复现问题

在完成第一部分后，复现问题非常重要。

1. 复现问题。

1. 记住/写下复现的日期和时间，并将其包含在稍后发送给我们支持人员的电子邮件中。

### 第三部分：获取日志

1. 用 USB 数据线将设备连接到电脑。

1. 下载 [Android SDK 平台工具](https://developer.android.com/studio/releases/platform-tools#downloads)。 从「下载」部分选择适合您的操作系统的下载链接。 点击链接后，将下载一个 ZIP 文件。 您可以从 ZIP 文件中提取 ADB（Android 调试桥接器）文件，并将其存储到任何您想存的地方。

1. 测试 ADB 是否正常工作：使用 USB 数据线将 Android 设备连接到电脑，打开命令提示符、PowerShell 或者终端并运行以下命令：

    `adb 设备`

    成功结果的示例：

    ![步骤 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. 然后运行以下命令（插入对应路径）：

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    将创建的 `txt` 文件以及复现问题的时间（来自第二部分）通过电子邮件发送给我们的支持团队：<support@adguard.com>。

### ROOT 用户的替代方法

1. 下载并运行 [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog)。

1. 在菜单中选择「**记录**」。 选择日志文件的名称或直接点「**OK**」。 现在您可以点击**首页** 键，CatLog 将继续在后台记录日志。

1. 复现问题。

1. 打开 CatLog，然后点击「**停止记录**」。

1. 将此日志发送给我们的支持团队。

:::note

如果您在反馈的信息中指定 HelpDesk 号或 GitHub 问题号，我们的支持团队会更快地处理您的问题。

:::
