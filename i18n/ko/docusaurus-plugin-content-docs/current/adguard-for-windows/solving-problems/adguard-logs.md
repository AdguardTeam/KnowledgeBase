---
title: AdGuard 로그 수집하는 방법
sidebar_position: 3
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in logs are processed in accordance with the [AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

To diagnose problems you may encounter while using AdGuard, our support team may need AdGuard log files. These files record errors and other events that occur in the application. This article explains how to change the logging level, collect the logs, and send them to support.

AdGuard for Windows offers two logging levels: *Default* and *Debug*. For most troubleshooting, *Debug* is sufficient, but it may slow down the app.

## How to change the logging level {#change-level}

You can change the logging level in either of two ways:

### Option 1: In the app

Go to AdGuard settings → *Support* → *Logs*, and in the *Logging level* dropdown select *Debug*.

![Logging level dropdown on Support page *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/support_logs.png)

### Option 2: From the tray menu

Right-click the AdGuard icon in the system tray, select *Advanced* → *Logging level*, and choose *Debug*.

![Logging level in tray menu *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/tray_menu_debug.png)

## Debug logs {#debug-logs}

For most issues, debug logs give the support team enough information to identify and fix the problem.

1. Set the logging level to *Debug* using one of the methods described [above](#change-level).

1. Reproduce the issue. Note the exact time — it will help our support team find the relevant log entries and solve the problem faster.

1. Go to AdGuard settings → *Support* → *Logs*, and click *Export logs and system info*.

    Once the export is complete, you’ll see a confirmation message. You can click *Show in folder* to open the folder where the exported archive with logs and system information was saved.

    :::note

    Set the logging level back to *Default* after exporting the logs. The *Debug* level slows down the application.


:::

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

1. Reproduce the issue. Note the exact time — it will help our support team find the relevant log entries and solve the problem faster.

1. Export the collected logs: go to Settings → *Support* → *Logs* → *Export logs and system info*.

    Don’t worry if the log file is large — we need as much detail as possible to fix your problem.

1. After exporting the trace logs, close AdGuard and restart it normally to return to the default logging level.

## Diagnostic report {#diagnostic-report}

When contacting support through the form in Settings → *Support*, you can include a diagnostic report that automatically attaches application logs together with other system information.

The diagnostic report includes:

- Information about the system
- A list of running processes
- Details about AdGuard settings, including enabled filters and installed extensions
- Application logs

To use this option, check the *Add diagnostic report* checkbox before sending your message.

![Diagnostic report option *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/add_report.png)

:::note

AdGuard는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 당사는 [개인정보취급방침을](https://adguard.com/privacy/windows.html) 엄격하게 준수하며 사용자에 대한 어떠한 개인 정보도 수집하지 않습니다. 지원팀에 로그를 보내기 전에 파일에 전달하고 싶지 않은 추가 정보가 포함되어 있는지 확인하세요. 이러한 정보가 포함되어 있는 경우, 먼저 삭제하는 것이 좋습니다.

:::
