---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::note

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occurr with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary.

1. Open the AdGuard settings. Go to the *General Settings* section, scroll down to the end of the screen and switch the *Logging Level* to *Debug*.

![Debug logging level *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduce the issue.

- We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

3. Export the recorded logs using the *Export Logs* button.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

- Save the archive to any folder.

4. **Important**: after exporting the logs, set the logging level back to *Standard*. *Debug* logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing *Exit AdGuard*:

![Exit AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

Please don't leave the service running:

![Stop AdGuard Service *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the app with the command `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\Adguard\Adguard.exe /trace` in case if you use 32-bit one.

4. Select *Debug* logging level.

![Debug *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

5. Reproduce the issue.

- We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.

6. Export the recorded logs using the *Export Logs* button.

![Export logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

7. **Important**: after exporting the logs, set the logging level back to *Standard*. *Debug* logging level will slow down the application.

Don't worry if the log file is large. We need to know as much detail as possible to fix your problem.
