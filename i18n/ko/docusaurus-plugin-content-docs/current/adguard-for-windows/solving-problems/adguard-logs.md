---
title: AdGuard 로그 수집하는 방법
sidebar_position: 3
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true)해 보세요.

:::

To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. 이 파일에는 소프트웨어에서 발생한 모든 오류에 대한 기록이 있습니다. AdGuard 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

1. Open the AdGuard settings. Go to the *General Settings* section, scroll down to the end of the screen and switch the *Logging Level* to *Debug*.

    ![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduce the issue.

    We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

1. Export the recorded logs using the *Export Logs* button.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Save the archive to any folder.

1. **Important**: after exporting the logs, set the logging level back to *Standard*. *Debug* logging level will slow down the application.

1. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### 추적 로그 {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing *Exit AdGuard*:

    ![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Please don't leave the service running:

    ![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Open the console (type `cmd` in the start panel).

1. Run the app with the command `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\Adguard\Adguard.exe /trace` in case if you use 32-bit one.

1. Reproduce the issue.

    We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

1. Export the recorded logs using the *Export Logs* button.

    ![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Don't worry if the log file is large. We need to know as much detail as possible to fix your problem.
