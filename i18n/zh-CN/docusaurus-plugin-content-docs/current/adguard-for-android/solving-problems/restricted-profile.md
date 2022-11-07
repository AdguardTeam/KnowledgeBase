---
title: 受限模式导致的一些问题
sidebar_position: 10
---

拥有安卓7+操作系统的手机、笔记本或电视的用户可能会遇到使用**受限模式（Restricted Mode）的配置文件**导致的问题。 如您有遇到这种情况，**AdGuard** 与其他使用 VPN 的应用程序一样进行选择性过滤 VPN 流量时，受其限制。 因此，AdGuard 无法使用**本地 VPN 模式**开启保护。 除此之外，如您在设备上使用**双开应用/应用分身帐户**也会导致相似的问题。 以下是您可以规避该问题的操作。

## 解决方法

解决该问题有三种方法：

### 方案 1：允许 AdGuard 使用 ADB

> 请注意！该方法仅由 **AdGuard v3.5 nightly 6** 起可用。 如您仍在使用旧版本，您可以[在此处](https://adguard.com/adguard-android/overview.html)下载 nightly 版本。

1. 激活**开发人员模式**以及启用 **USB 调试**：
- 在手机上前往**设置**；
- 前往**系统**部分（设置中最后一项选项）。 这里前往**关于手机**；
- 点击**版本号**7次。 之后您将会收到通知说明现在**您是开发人员**（如需要的话，输入解锁密码）；
- 前往**系统设置** > **开发人员选项** > 向下移动，启用 **USB 调试** > 在是否**允许 USB 调试**提示中仔细阅读警告后，确定允许调试。

> 如您遇到任何困难或其他问题，[在此处](https://developer.android.com/studio/debug/dev-options)可查看完整说明。

2. [安装以及配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> 在 Windows 平台中，**三星**用户需要安装[此工具](https://developer.samsung.com/mobile/android-usb-driver.html)。
3. 使用 **USB 电缆**将您的设备连接至您已安装 **ADB** 的电脑或笔记本等设备上;
4. 在您的 PC 上打开**命令行**：
- 如您使用的是 **Windows**，打开 **Cmd.exe**；
- 如您使用的是 **macOS**，打开 ** Terminal **；
5. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### 方案 2：移除**受限用户帐户**

[在此](https://support.google.com/a/answer/6223444?hl=en)可以查看如何在安卓设备上管理用户帐户的相关信息。

> 请注意！ 在一些情况下，受限用户帐户是自动创建，因而无法被删除。 例如，您在**安卓**或 **LG** 设备上使用应用分身或双开应用功能时，将会自动创建受限用户帐户。 您可以阅读以下内容以查看，在上面描述的情况下该如何解决问题。

### 方案 3：使用 AdGuard 的本地 HTTP 代理模式（需要 root 权限）

开启该模式需要打开 **AdGuard 设置** > **网络** > **过滤方式** > **本地 HTTP 代理**

## LG 和三星设备

**LG** 或**三星**手机的用户也可能会遇到相同的问题。 一般由**双开应用/应用分身**功能（自动创建受限帐户）引起。 为了解决该问题，您需要禁用该功能。

### 三星

- 前往**设置**；
- 点击**高级**功能；
- 向下移动，点击**应用分身**；
- 禁用所有应用使用**应用分身**；
- 锁定您的设备5分钟；
- 解锁屏幕并重新试图创建 VPN 账号。

### LG

- 前往**设置**；
- 选择**常规**标签钮；
- 向下移动，点击**双开应用**；
- 移除应用分身列表中所有的应用；
- 重启您的设备。