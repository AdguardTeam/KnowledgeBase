---
title: 如何收集 AdGuard 日志记录
sidebar_position: 4
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in logs are processed in accordance with the [AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

To diagnose problems you may encounter while using AdGuard, our support team may need AdGuard log files. These files record errors and other events that occur in the application. This article explains how to change the logging level, collect the logs, and send them to support.

AdGuard for Windows offers two logging levels: *Default* and *Debug*. For most troubleshooting, *Debug* is sufficient, but it may slow down the app.

## Debug logs {#debug-logs}

For most issues, debug logs give the support team enough information to identify and fix the problem.

1. Go to *Settings* → *Support* → *Logs*.

1. In the *Logging level* dropdown, select *Debug*.

    ![Logging level dropdown on the Logs screen *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/export_logs_debug_dropdown.png)

1. 复现问题。 Note the exact time — it will help our support team find the relevant log entries and solve the problem faster.

1. Click *Export logs and system info*.

1. In the system dialog, choose the folder where you want to save the archive.

1. Once the export is complete, you’ll see a notification with the archive file name, for example *Logs exported to adguard_logs_4.0.688_2303_144521.zip*. Click *Show in folder* to open the folder where it was saved.

    :::note

    Set the logging level back to *Default* after exporting the logs. The *Debug* level slows down the application.


:::

1. If the export fails, you’ll see *Failed to export logs. Try again or contact support*.

1. Send the archive to **support@adguard.com**, describe the problem, and mention the time you reproduced the issue.

## Trace logs {#trace-logs}

Sometimes the support team may ask you for *trace* logs. Trace logging captures more detail than debug logging and is only available via command line.

1. Exit AdGuard by right-clicking the AdGuard icon in the tray menu and choosing *Exit AdGuard*.

    ![Exit AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/exit_adguard.png)

    If prompted to keep the service running in the background, make sure to stop it — the service must not be running when you start AdGuard with trace logging.

1. Open the command prompt (type `cmd` in the Start menu search).

1. Run AdGuard with trace logging enabled:

    ```text
    C:\"Program Files"\Adguard\Adguard.exe /trace
    ```

1. 复现问题。 Note the exact time — it will help our support team find the relevant log entries and solve the problem faster.

1. Go to *Settings* → *Support* → *Logs*.

1. Click *Export logs and system info*.

    Don’t worry if the log file is large — we need as much detail as possible to fix your problem.

1. In the system dialog, choose the folder where you want to save the archive.

1. Once the export is complete, you’ll see a notification with the archive file name. Click *Show in folder* to open the folder where it was saved.

1. After exporting the trace logs, close AdGuard and restart it normally to return to the default logging level.

## Diagnostic report {#diagnostic-report}

When contacting support through the form in *Settings* → *Support* → *Contact support*, you can include a diagnostic report that automatically attaches application logs together with other system information.

The diagnostic report includes:

- Information about the system
- A list of running processes
- Details about AdGuard settings, including enabled filters and installed extensions
- Application logs

To use this option, check the *Add diagnostic report* checkbox before sending your message.

![Diagnostic report option *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/add_report.png)

:::note

AdGuard 致力于保护用户的个人隐私。我们严格遵守我们的[隐私政策](https://adguard.com/privacy/windows.html) ，不收集任何有关用户的私人信息。请注意：在将您的日志记录发送给客户支持团队之前，请检查文件，因为它会包含您不想分享的附加信息。如果其中包含此类个人信息，我们建议您先将其删除。

:::
