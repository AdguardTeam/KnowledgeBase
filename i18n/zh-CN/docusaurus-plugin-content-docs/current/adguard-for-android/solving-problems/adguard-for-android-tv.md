---
title: Android TV 版 AdGuard 安装方式
sidebar_position: 15
---

:::info

本文介绍适用于 Android TV 的 AdGuard，这是一款在系统级别保护您的电视的广告拦截器。 要了解其工作原理，请[下载 AdGuard TV 应用程序](https://agrd.io/tvapk)。

:::

在大多数情况下，普通浏览器无法在电视上安装文件，但用户可以从 Google Play 商店下载具有此功能的浏览器。 在本指南中，我们将举例说明如何使用 TV Bro 浏览器进行安装，但还有其他选项，用户可以根据自己的需要进行选择。 作为替代方案，可以使用 [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader) 应用程序。

## 通过浏览器安装 Android TV 版 AdGuard

1. 在 Android TV 上安装 [TV Bro 浏览器](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser)。

2. 下载并安装 Android TV 版 AdGuard：

- 在 Android TV 上打开已安装的 TV Bro 浏览器。
- 在浏览器地址栏中，输入 “https://agrd.io/tvapk”，然后按「Enter」或点击链接。
- 浏览器将开始自动下载 Android TV 版 AdGuard 的安装文件。
- 下载完成后，在浏览器控制栏中选择「下载」，然后选择下载的文件。
- 如果出现警告消息，请允许从浏览器安装文件。
- 返回浏览器，打开「下载」，然后点击下载的文件。
- 在出现的系统窗口中，点击「安装」，然后点击「完成」或「打开」。

完成了！Android TV 版 AdGuard 安装成功。

1. 启动 Android TV 版 AdGuard：

- 安装完成后，在 Android TV 上已安装的应用程序列表中找到 AdGuard 应用程序。
- 单击 AdGuard 图标，启动应用程序。
- 按照屏幕上的说明完成设置。

## 通过 ADB 安装 Android TV 版 AdGuard

1. 确保您的计算机上安装了 Android 调试桥（ADB）。 如果没有，您可以按照 XDA Developers 上的说明进行操作：[ADB 安装指南](https://www.xda-developers.com/install-adb-windows-macos-linux)。

2. 下载 [Android TV 版 AdGuard](https://agrd.io/tvapk)。

3. 在电视设置中，转到「系统」→「关于」，然后按版本号七次以解锁开发人员选项。 启用「USB 调试」。

4. 写下 Android TV 的 IP 地址：

   - 在 Android TV 上，进入「设置」。
   - 选择「系统」→「关于」。
   - 查找「网络」，然后根据连接类型选择「Wi-Fi」或「以太网」。
   - 转到网络部分并找到「IP 地址」。 记下该 IP 地址。

5. 通过 ADB 连接到 Android TV：

   - 打开计算机上的终端或命令提示符。
   - 输入 `adb connect` 命令和电视机的 IP 地址。
   - 这将建立连接。

6. 通过 ADB 安装 Android TV 版 AdGuard：

   - 在终端中，输入命令 `adb install Downloads/adguard_tv.apk`。 如有必要，请将 `Downloads/adguard_tv.apk` 替换为您的路径。
   - 等待终端中出现指示应用程序安装成功的消息。
