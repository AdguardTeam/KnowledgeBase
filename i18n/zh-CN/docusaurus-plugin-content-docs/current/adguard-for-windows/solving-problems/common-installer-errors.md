---
title: 常见安装程序错误
sidebar_position: 6
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解它是如何工作的，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

本文包含用户在安装 Windows 版 AdGuard 时可能遇到的一些最常见的错误，以及可能的解决方法。

### 错误 5：拒绝访问 {#error-5}

This error message appears when required permissions haven't been granted. AdGuard 安装程序没有正确完成安装过程所需的权限可能有多种不同的原因。 用户可以尝试以下步骤：

- Temporarily disable your antivirus. 部分防病毒软件可能会干扰安装，具体取决于其设置的严格程度。

- 选择不同的安装文件夹。 当前安装文件夹可能有一些访问限制。 用户还要确保没有选择外部驱动器、虚拟驱动器等。

- 重新启动计算机。 有时权限问题是暂时的，可以通过重新启动电脑来解决。

### 错误 112：磁盘已满；错误 1632：临时文件夹已满或无法访问 {#error-112}

这是两个不同的错误，但解决方案非常相似。 As their titles suggest, AdGuard installer didn't find enough disk space to complete the installation. 有几种方法可以尝试解决问题：

- 从尝试安装 AdGuard 的驱动器中卸载一些程序或删除不需要的文件。

- 下载、安装并运行 [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/)，这是一款由 Malwarebytes 提供的免费软件。 It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. 它有助于清理出磁盘空间。

- 重新启动计算机。 有时候临时文件会占用大量磁盘空间，重启电脑是清除临时文件最可靠的方法。

### 错误 1601：无法访问 Windows Installer {#error-1601}

You could say this is a particular subcategory of Error 1603. 解决方案是相似的：

- 启动并重新注册 Microsoft Installer 服务。 这需要如下操作：

    1) 按 *Win + R* 并输入 **services.msc**。 2) 在列表中找到并双击 *Windows Installer*。 3) 在「*服务状态*」下点击「*启动*」按钮并点击「*确定*」。 如果服务状态是「**正在运行**」，应该先点击「*停止*」，然后再点击「*启动*」。 4) 按「*Win + R*」，键入并输入 ***msiexec /unregister*** 并按「*Enter*」键。 5) 再次按「*Win + R* 」，键入并输入 ***msiexec /regserver*** 并按「*Enter*」键。

- 重启电脑并重新开始安装。 有时这足以修复此问题。

### 错误 1602：用户取消 {#error-1602}

如果您收到此错误代码，可能是您以某种方式手动中断了安装过程。 请执行以下操作：

- 不要关闭安装程序窗口。 安装完成后，窗口自动关闭。

- 如果在安装过程中弹出对话窗口，请点击「是」以授予安装程序所需的权限。 单击「否」将取消安装。

- 安装过程中请不要启动其他进程。

### 错误 1603：安装过程中出现致命错误 {#error-1603}

这个错误只是听起来比较吓人。 实际上，这是一个相当普遍的错误，有许多不同的原因，其中有些很容易修复。 请尝试以下解决方案：

- 按「*Win*」键，搜索「*命令提示符*」并运行它。 输入 `sfc /scannow`，按「*Enter*」键。

- 选择不同的安装文件夹。 当前安装文件夹可能有一些访问限制。 用户还要确保没有选择外部驱动器、虚拟驱动器等。

- 使用我们的专用[卸载工具](../../installation#advanced)卸载 AdGuard，然后重复安装。

- 启动并重新注册 Microsoft Installer 服务。 这需要如下操作：

    1) 按「*Win + R*」并输入 ***services.msc***。 2) 在列表中找到并双击 *Windows Installer*。 3) 在「*服务状态*」下点击「*启动*」按钮并点击「*确定*」。 如果服务状态是「**正在运行**」，应该先点击「*停止*」，然后再点击「*启动*」。 4) 按「*Win + R*」，键入并输入 ***msiexec /unregister*** 并按「*Enter*」键。 5) 再次按「*Win + R* 」，键入并输入 ***msiexec /regserver*** 并按「*Enter*」键。

- 获取安装驱动器的完全权限。 出现错误 1603 可能是由于您对该文件位置没有完全权限。 这种情况的解决方案会稍微复杂一些：

    1) 打开「*文件资源管理器*」，右键单击安装位置所在的驱动器，然后选择「*属性*」。 2) 转至「*安全*」选项卡并单击「*编辑*」。 3) 单击「*SYSTEM*」并确保勾选「*SYSTEM* 的权限」中每一项的「*允许*」框（如果可以勾选）。 对「*Administrators*」进行相同的勾选操作。 4) 单击「*确定*」返回「*属性*」对话框。 然后单击「*高级*」。 5) 单击「*更改权限*」。 6) 在「*权限*」选项卡中，双击「*管理员*」。 7) 在「*应用于*」中选择「*此文件夹、子文件夹和文件*」并勾选所有可用的「*基本权限*」。 然后点击「*确定*」。 8) 对「*SYSTEM*」执行上述相同操作（从第 7 项开始）。 9) 一直点击「*确定*」直到所有对话框关闭。 最后尝试重新安装 AdGuard。

### 错误 1618：另一个安装已在进行中 {#error-1618}

当同时启动多个 AdGuard 安装程序时会出现此错误。 如果出现此错误，请执行以下操作：

- 重启电脑并重新开始安装。 当您重启计算机后，所有正在进行的进程都将停止，包括所有运行中的安装程序。

- Don't make multiple clicks on the installer even if it doesn't start right away. 有时候显示安装界面可能会需要几秒钟。

### 错误 1638：已安装此软件的另一个版本 {#error-1638}

很有可能您之前已经安装 AdGuard。

- 检查 AdGuard 是否已安装在计算机上。 您可以通过按「*Win*」键并输入 ***AdGuard*** 来完成。

- Maybe there're some leftover files from a previous AdGuard installation. 使用我们的专用[卸载工具](../../installation#advanced)卸载 AdGuard，然后重复安装。

### 其他错误 {#other}

如果您遇到了上面没有列出的错误，请与支持团队联系，我们帮您解决问题。 与我们联系以前，请收集日志文件。 执行以下步骤：

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [这篇文章](../system-logs)中有操作步骤。

- 请将前两个步骤中得到的文件通过电子邮件发送到我们的支持团队 **support@adguard.com**，并在邮件正文中描述您的问题。 我们的技术支持团队将尽快回复您。
