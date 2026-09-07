---
title: 如何收集 AdGuard 日志记录
sidebar_position: 3
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

要分析和诊断可能潜在的问题，AdGuard 技术人员可能需要 AdGuard 日志记录文件。 这些文件包含本软件发生的错误记录和其它事件。 下面是简短的说明，描述获取日志文件的方法，并在必要时将其发送给支持服务。

:::note

AdGuard 致力于保护用户的个人隐私。 We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. 请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。 如果其中包含此类个人信息，我们建议您先将其删除。

:::

### Debug logs {#debug-logs}

1. 打开 AdGuard 设置。 Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. 复现问题。

   我们强烈建议用户记录问题重现的确切时间：这将有助于我们的支持团队找到相关日志条目并更快地解决问题。

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   将存档保存到任意文件夹。

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. 要发送跟踪日志，请执行以下操作：

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   请不要让服务继续运行：

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

如果您有旧版本的 AdGuard for Windows：如您使用的是 64 位 Windows，则请使用命令 "C:\Program Files (x86)\Adguard\Adguard.exe /trace" 运行程序；如您使用的是 32 位 Windows，则请使用命令 "C:\Program Files\Adguard\Adguard.exe /trace"。

1. 复现问题。

   我们强烈建议用户记录问题重现的确切时间：这将有助于我们的支持团队找到相关日志条目并更快地解决问题。

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   用户无需担心日志文件大小。 我们需要了解尽可能多的细节来解决您的问题。
