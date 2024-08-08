---
title: 收集调试日志的方式
sidebar_position: 2
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 若要了解其工作原理， 请[下载 AdGuard 应用](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

在本文中，我们将指导用户完成收集调试日志的过程，这是解决可能出现的复杂问题的基本故障排除步骤。 调试日志可让您详细了解 Android 版 AdGuard 的内部运作。 如 AdGuard 支持团队要求调试日志，您可按以下指示说明操作即可。

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/android.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

### 收集调试日志

为了收集**调试**日志并将其转发给我们，您要完成以下操作步骤：

1. 转至「*设置*」→「*常规*」→「*高级*」。
1. 点击「*日志记录级别*」并设置为「*调试*」。
1. 重现问题并尝试记住问题发生的确切时间。
1. 稍等片刻，然后返回「*设置*」并选择「*支持*」标签。 点击「*报告错误*」并填写必填字段。 不要忘记选中「*发送日志记录和系统信息*」复选框。 最后，点击「*发送*」。

如果您有兴趣跟踪问题的解决流程并与开发人员进行对话，我们建议您在完成前三个步骤后采取以下步骤：

1. 稍等片刻，然后返回「*高级*」屏幕，通过 「*导出日志和系统信息*」以导出日志。 然后按照这些[指示说明](/guides/report-bugs.md)在 GitHub 上报告错误。
1. 在 GitHub 上创建问题后，将日志文件发送至 devteam@adguard.com。 包括错误发生的时间并附加指向您的问题或其编号的链接（它在标题旁边显示为 #number）。 或者，您可以将日志文件上传到 Google Drive 并将其发送至 devteam@adguard.com。 将文件链接添加到您的 GitHub 问题。
