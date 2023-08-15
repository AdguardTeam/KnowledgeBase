---
title: How to create a dump file
sidebar_position: 8
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://adguard.com/download.html?auto=true)

:::

To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC.

1. Press **Ctrl + Shift + Esc** and click **Task Manager**
2. In the upper menu bar select **Details**

![Task Manager details](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

3. Right-click the process that you want to create the dump file for (for example, the support team may ask you to create a dump for `Adguard.exe`)
4. In the drop-down menu click **Create dump file**
5. The file was created successfully!

![Create dump file](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

After you’ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the **%tmp%** folder. The created dump file (`.DMP`) has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support.

:::note

AdGuard for Windows has two running processes (`Adguard.exe` and `AdguardSvc.exe`). So you need to create the dump file separately for each process.

:::

![AdGuard processes](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. [Here](../adguard-logs) you can check the instructions on how to collect the log file.
