---
title: 常见安装程序错误
sidebar_position: 6
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解它是如何工作的，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

本文包含用户在安装 Windows 版 AdGuard 时可能遇到的一些最常见的错误，以及可能的解决方法。

### 错误 5：拒绝访问 {#error-5}

这个错误发生在权限设置有问题的时候。 AdGuard 安装程序没有正确完成安装过程所需的权限可能有多种不同的原因。 用户可以尝试以下步骤：

- 暂时禁用防病毒软件。 部分防病毒软件可能会干扰安装，具体取决于其设置的严格程度。

- 选择不同的安装文件夹。 当前安装文件夹可能有一些访问限制。 用户还要确保没有选择外部驱动器、虚拟驱动器等。

- 重新启动计算机。 有时权限问题是暂时的，可以通过重新启动电脑来解决。

### 错误 112：磁盘已满；错误 1632：临时文件夹已满或无法访问 {#error-112}

这是两个不同的错误，但解决方案非常相似。 顾名思义，AdGuard 安装程序没有找到足够的磁盘空间来完成安装。 有几种方法可以尝试解决问题：

- 从尝试安装 AdGuard 的驱动器中卸载一些程序或删除不需要的文件。

- 下载、安装并运行 [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/)，这是一款由 Malwarebytes 提供的免费软件。 软件能够清除系统中因卸载程序错误而产生的各种额外“遗留”文件。 它有助于清理出磁盘空间。

- 重新启动计算机。 有时候临时文件会占用大量磁盘空间，重启电脑是清除临时文件最可靠的方法。

### 错误 1601：无法访问 Windows Installer {#error-1601}

可以说，这是错误 1603 的一个特殊子案例。 解决方案是相似的：

- 启动并重新注册 Microsoft Installer 服务。 这需要如下操作：

    1) 按 *Win + R* 并输入 **services.msc**。 2) 在列表中找到并双击 *Windows Installer*。 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Reboot the PC and start the installation all over again. Sometimes that's enough to fix the problem.

### Error 1602: Canceled by user {#error-1602}

If you got this error code, chances are you have interrupted the installation process manually in one way or another. What you can do is:

- Don't close the installer window. When the installation is complete, it will close automatically.

- If a dialogue window pops up during the installation, hit "Yes" to grant the installer the required permissions. Clicking "No" will cancel the installation.

- Don't start other processes while the installation process is going on.

### Error 1603: Fatal error during installation {#error-1603}

The error sounds scarier than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:

- Press the *Win* key, search for *Command Prompt* and run it. There, type in `sfc /scannow` and press *Enter*.

- 选择不同的安装文件夹。 当前安装文件夹可能有一些访问限制。 用户还要确保没有选择外部驱动器、虚拟驱动器等。

- Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

- 启动并重新注册 Microsoft Installer 服务。 这需要如下操作：

    1) Press *Win + R* and enter ***services.msc***. 2) 在列表中找到并双击 *Windows Installer*。 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1) Open *File Explorer*, right-click the drive containing the installation location and select *Properties*. 2) Go to *Security* tab and click *Edit*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*. 4) Click *OK* to go back to *Properties* dialog. Then click *Advanced*. 5) Click *Change Permissions*. 6) On *Permissions* tab, double-click *Administrators*. 7) Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*. 8) Do the same operation above (from item 7) for *SYSTEM*. 9) Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: Another installation is already in progress {#error-1618}

This error occurs when there are several instances of AdGuard installer launched at the same time. What to do if you get this error:

- Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.

- Don't make multiple clicks on the installer even if doesn't start right away. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Another version of this product is already installed {#error-1638}

It's very likely that you've already installed AdGuard before.

- Check if AdGuard is already installed on your computer. You can do it by pressing the *Win* key and typing in ***AdGuard***.

- Maybe there's some leftover files from a previous AdGuard installation. Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

### Other errors {#other}

If you've encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:

- Find and archive **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk **Event Viewer** logs. [This article](../system-logs) explains how to do that.

- Please email all these files from two previous steps to the support team at **support@adguard.com** and describe the problem in the message body. Our tech support agents will reply to you as soon as possible.
