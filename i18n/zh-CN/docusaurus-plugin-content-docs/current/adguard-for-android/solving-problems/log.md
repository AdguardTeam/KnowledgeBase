---
title: How to collect debug logs
sidebar_position: 2
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

在本文中，我们将指导用户完成收集调试日志的过程，这是解决可能出现的复杂问题的基本故障排除步骤。 Debug logs provide detailed insight into the inner workings of AdGuard for Android. If the AdGuard support team asks you to provide debug logs, simply follow these instructions.

### Collecting debug log

为了收集**调试**日志并将其转发给我们，您要完成以下操作步骤：

1. Go to *Settings* → *General* → *Advanced*.
1. Tap *Logging level* and set it to *Debug*.
1. Reproduce the problem and try to remember the exact time it occurred.
1. Wait a while, then return to *Settings* and choose the *Support* tab. Tap *Report a bug* and complete the required fields. Don't forget to check the *Send app logs and system info* checkbox. Finally tap *Send*.

If you're interested in following the resolution of your issue and engaging in a dialogue with the developers, we recommend that you take the following steps after completing the first three:

1. Wait a while, then return to the *Advanced* screen and export logs via *Export logs and system info*. Then report a bug on GitHub by following these [instructions](/guides/report-bugs.md).
1. After creating an issue on GitHub, send the log file to devteam@adguard.com. Include the time of the bug and attach a link to your issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and send it to devteam@adguard.com. Add the file link to your GitHub issue
