---
title: Problems caused by multiple user profiles
sidebar_position: 10
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problems caused by multiple user profiles

On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message "You can't install the app on your device".

To solve this problem, you need to uninstall the application for all users: go to Settings → All apps → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## 受限模式导致的一些问题

拥有安卓7+操作系统的手机、笔记本或电视的用户可能会遇到使用**受限模式（Restricted Mode）的配置文件**导致的问题。 如您有遇到这种情况，**AdGuard** 与其他使用 VPN 的应用程序一样进行选择性过滤 VPN 流量时，受其限制。 因此，AdGuard 无法使用**本地 VPN 模式**开启保护。 除此之外，如您在设备上使用**双开应用/应用分身帐户**也会导致相似的问题。 以下是您可以规避该问题的操作。

### 解决方法

解决该问题有三种方法：

### 方案 1：允许 AdGuard 使用 ADB

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. 如您仍在使用旧版本，您可以[在此处](https://adguard.com/adguard-android/overview.html)下载 nightly 版本。

:::

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    如您遇到任何困难或其他问题，[在此处](https://developer.android.com/studio/debug/dev-options)可查看完整说明。


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. 使用 **USB 电缆**将您的设备连接至您已安装 **ADB** 的电脑或笔记本等设备上;

1. 在您的 PC 上打开**命令行**：

    - 如您使用的是 **Windows**，打开 **Cmd.exe**；
    - 如您使用的是 **macOS**，打开 ** Terminal **；

1. 输入 `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` 的命令并点击**回车键**。

### 方案 2：移除**受限用户帐户**

[在此](https://support.google.com/a/answer/6223444?hl=en)可以查看如何在安卓设备上管理用户帐户的相关信息。

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. 例如，您在**安卓**或 **LG** 设备上使用应用分身或双开应用功能时，将会自动创建受限用户帐户。 您可以阅读以下内容以查看，在上面描述的情况下该如何解决问题。

:::

### 方案 3：使用 AdGuard 的本地 HTTP 代理模式（需要 root 权限）

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LG 和三星设备

**LG** 或**三星**手机的用户也可能会遇到相同的问题。 这可能是由**双开应用/双 Messenger 账户**功能（其本质是隐式创建了受限账户）引起的。 为了解决该问题，您需要禁用该功能。

### Samsung

- 前往**设置**；
- 点击**高级**功能；
- 向下移动，点击**双 Messenger 账户**；
- Disable the **Dual messenger** for all apps;
- 锁定您的设备5分钟；
- 解锁屏幕并重新试图创建 VPN 账号。

### LG

- 前往**设置**；
- 选择**常规**标签钮；
- 向下移动，点击**双开应用**；
- Remove all apps from the list;
- 重启您的设备。
