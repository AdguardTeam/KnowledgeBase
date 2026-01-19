---
title: 如何创建 Minidump 文件以修复 BSoD 错误
sidebar_position: 8
---

几乎所有 Windows 用户都熟悉[蓝屏死机 （BSoD）](https://en.wikipedia.org/wiki/Blue_screen_of_death) 错误。 BSoD（英语：Blue screen of death）发生在 Windows 系统遭遇可能影响安全系统操作的问题时，例如第三方驱动程序代码、硬件或 Microsoft 代码出现问题。 要解决蓝屏错误，用户可以获取 Minidump 文件。

## 什么是 Minidump 文件？

Minidump 文件是一个包含有关系统崩溃信息的转储文件。 它是在蓝屏出现之前创建的，仅包含可用于解决问题的最少量有用信息集。 Minidump 文件通常具有 *.dmp* 扩展名。

:::note
在 Windows 10 上，蓝屏显示一个停止代码和一个 QR 码。 用户可以使用这些信息在网络上搜索特定问题。

:::

默认情况下，创建 Minidump 文件被禁用，因此在我们更详细地讨论如何使用该转储文件之前，我们要启用它。

## 设置 Windows 以创建 Minidump 文件

即使您的电脑没有出现蓝屏错误，您仍然可以设置此选项。这是一个普遍建议，不一定与 AdGuard 服务有关。 请按照下面的指示说明自动创建 Minidump 文件。

 1. Type *sysdm.cpl* in the Windows search bar and click **Open**. The **System Properties Control Panel Menu** window will appear on the screen.

    :::tip

    Alternatively, click **Settings** → **System** → **About** → **Advanced system settings**.


:::

    ![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Go to the **Advanced** tab.
 1. In the **Startup and Recovery** section, click **Settings**.

    ![Startup and Recovery *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Enable the following three options:

    - 在系统日志写入事件
    - 自动重启
    - 编写调试信息 → 小内存转储（256KB）

    ![快速操作 *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. 单击「**确定**」应用设置。
 1. 重启计算机。

您已成功启用 Minidump 文件。 现在，系统崩溃时转储文件将自动创建。

:::note

默认情况下，Minidump 文件存储在 **%SystemRoot%\Minidump** 文件夹中。 用户可以更改目录位置为自己喜欢的位置，但请记住，许多程序都默认设置为查找此位置，因此我们建议您不要更改位置。

:::

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. 开启 AdGuard 保护。

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.


:::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
