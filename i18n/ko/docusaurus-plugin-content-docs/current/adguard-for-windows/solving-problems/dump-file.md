---
title: 덤프 파일을 만드는 방법
sidebar_position: 9
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in dump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

If you experience an issue while using AdGuard, the support team may ask you to provide a dump file. This file helps developers see what processes were running in the app at the time and identify the cause of the problem.

Follow these steps to create a dump file:

1. Press *Ctrl + Shift + Esc* to open *Task Manager*.

1. In the left sidebar, click *Details*. ![Task Manager details *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Right-click the process you want to create a dump file for. In the drop-down menu, click *Create memory dump file*. ![Create dump file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Once the dump file is created, you’ll be prompted to open the folder where it’s saved. If not, you can find it in the **%tmp%** folder. ![Open file location *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

The created dump file (`.DMP`) will have the same name as the process you selected.

:::note

AdGuard for Windows runs two processes: `Adguard.exe` and `AdguardSvc.exe`. You’ll need to create a separate dump file for each one.

:::

![Two processes *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Since dump files can be large, please compress them into an archive before sending them to support. Also, include the AdGuard logs to help us diagnose the issue more effectively. [Instructions for collecting logs](../adguard-logs).
