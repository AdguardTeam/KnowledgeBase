---
title: 多用户配置文件引起的问题
sidebar_position: 9
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

本文将介绍在 Android 设备上设置*多个账户*或*受限配置文件*时，如何使用 AdGuard 解决问题的方法。

## 多用户配置文件引起的问题

在 Android 9 和更新的版本，如 AdGuard 是安装给设备上的多个用户配置，当您卸载本应用时可能会遇到问题。 当您从单个用户配置内卸载 AdGuard 时，本应用仍会出现在应用列表内，而且您无法卸载或重新安装它。 发生此种情况，是因为 AdGuard 安装给了设备上的不同用户配置。

如在移除尝试失败后重新安装 AdGuard，用户会看到错误讯息「您无法在此设备上安装本应用」。

要解决此问题，您需要为所有用户卸载本应用：转到「设置」→「所有应用」→「AdGuard」。 点击右上角的三个点菜单并选择「*为所有用户卸载*」。

![卸载 *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## 受限模式导致的一些问题

拥有安卓7+操作系统的手机、笔记本或电视的用户可能会遇到使用**受限模式（Restricted Mode）的配置文件**导致的问题。 如您有遇到这种情况，**AdGuard** 与其他使用 VPN 的应用程序一样进行选择性过滤 VPN 流量时，受其限制。 因此，AdGuard 无法使用**本地 VPN 模式**开启保护。 除此之外，如您在设备上使用**双开应用/应用分身帐户**也会导致相似的问题。 以下是您可以规避该问题的操作。

### 解决方法

解决该问题有三种方法：

### 方案 1：允许 AdGuard 使用 ADB

:::note

此方法是自 **AdGuard v3.5 nightly 6** 起可用。 如您仍在使用旧版本，您可以[在此处](https://adguard.com/adguard-android/overview.html)下载 nightly 版本。

:::

1. 启用「**开发者模式**」并开启「**USB 调试**」：

    - 打开手机的「**设置**」；
    - 前往「**系统**」部分（设置中最后一项）。 在此部分中找到子项「**关于手机**」；
    - 点击「**版本号**」7次。 之后，您会收到通知称**您已处于开发者模式**（可能会要求您输入设备的解锁密码）；
    - 打开「**系统设置**」→「**开发者选项**」→ 下滑并启用「**USB 调试**」→ 在仔细阅读警告内容后在「**允许 USB 调试**」窗口中确认启用。

    :::note

    如您遇到任何困难或其他问题，[在此处](https://developer.android.com/studio/debug/dev-options)可查看完整说明。


:::

1. [安装和配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB； 在 Windows 平台上，** Samsung ** 用户可能需要安装[此实用程序](https://developer.samsung.com/mobile/android-usb-driver.html)。

1. 用 **USB 数据线** 将设备连接至您已安装 **ADB** 的电脑或笔记本等设备上;

1. 在您的 PC 上打开**命令行**：

    - 如您使用的是 **Windows**，打开 **Cmd.exe**；
    - 如您使用的是 **macOS**，打开 ** Terminal **；

1. 输入 `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` 的命令并点击**回车键**。

### 方案 2：移除**受限用户帐户**

[在此](https://support.google.com/a/answer/6223444?hl=en)可以查看如何在安卓设备上管理用户帐户的相关信息。

:::note

在某些情况下，受限用户账户会自动创建，且无法删除。 例如，您在 **Android** 或 **LG** 设备上使用应用分身或双开应用功能时，将会自动创建受限用户账户。 您可以阅读以下内容以查看，在上面描述的情况下该如何解决问题。

:::

### 选项三：以*本地 HTTP 代理模式*使用AdGuard（需要 Root 权限）

要启用此模式，请打开「**AdGuard 设置**」→「**网络**」→「**过滤方式**」→「**本地 HTTP 代理**」。

### LG 和 Samsung 设备

**LG** 或**三星**手机的用户也可能会遇到相同的问题。 这可能是由**双开应用/双 Messenger 账户**功能（其本质是隐式创建了受限账户）引起的。 为了解决该问题，您需要禁用该功能。

### Samsung

- 前往**设置**；
- 点击**高级**功能；
- 向下移动，点击**双 Messenger 账户**；
- 禁用所有应用的「**双 Messenger 账户**」；
- 锁定您的设备5分钟；
- 解锁屏幕并重新试图创建 VPN 账号。

### LG

- 前往**设置**；
- 选择**常规**标签钮；
- 向下移动，点击**双开应用**；
- 移除应用分身列表中的所有应用；
- 重启您的设备。
