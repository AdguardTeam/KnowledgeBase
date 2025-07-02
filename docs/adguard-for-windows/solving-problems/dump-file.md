---
title: How to create a dump file
sidebar_position: 8
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in dump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

If you experience an issue while using AdGuard, the support team may ask you to provide a dump file. This file helps developers see what processes were running in the app at the time and identify the cause of the problem.

Follow these steps to create a dump file:

1. Press *Ctrl + Shift + Esc* to open *Task Manager*.

1. In the left sidebar, click *Details*.
    ![Task Manager details *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Right-click the process you want to create a dump file for. In the drop-down menu, click *Create memory dump file*.
    ![Create dump file *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Once the dump file is created, you’ll be prompted to open the folder where it’s saved. If not, you can find it in the **%tmp%** folder.
    ![Open file location *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

The created dump file (`.DMP`) will have the same name as the process you selected.

:::note

AdGuard for Windows runs two processes: `Adguard.exe` and `AdguardSvc.exe`. You’ll need to create a separate dump file for each one.

:::

![Two processes *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Since dump files can be large, please compress them into an archive before sending them to support. Also, include the AdGuard logs to help us diagnose the issue more effectively.
[Instructions for collecting logs](../adguard-logs).

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file (along with a minidump file) to further analyze system logs and diagnose issues. To collect a wfpdiag.cab file please follow the steps:

1. Enable AdGuard protection.

1. Click *Start* and type `cmd` to open Command promt

1. Righ-click Command promp and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.

    :::

1. Enter the command to start logging: `netsh wfp capture start`

1. Reproduce the issue you encountered while using AdGuard

1. Enter the command to stop logging: `netsh wfp capture stop`
