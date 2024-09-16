---
title: How to create a dump file
sidebar_position: 8
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in dump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC.

1. Press **Ctrl + Shift + Esc** and click **Task Manager**

1. In the upper menu bar select **Details**

    ![Task Manager details](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Right-click the process that you want to create the dump file for (for example, the support team may ask you to create a dump for `Adguard.exe`)

1. In the drop-down menu click **Create dump file**

1. The file was created successfully!

    ![Create dump file](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

After you’ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the **%tmp%** folder. The created dump file (`.DMP`) has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard processes](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. [Here](../adguard-logs) you can check the instructions on how to get the log file.
