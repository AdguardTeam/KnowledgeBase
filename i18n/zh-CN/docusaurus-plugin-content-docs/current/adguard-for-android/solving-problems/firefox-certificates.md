---
title: 手动将安全证书安装到 Firefox 浏览器中
sidebar_position: 11
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

要让 Adguard 在 Firefox 浏览器中成功过滤 HTTPS 流量，浏览器需要信任 AdGuard 证书。 根据 Firefox 浏览器的版本，您要执行以下操作。

### 方法 1

:::note

该方法在 Android 版 Firefox 浏览器 90.0 及以上的版本可用。

:::

要让 AdGuard 证书在 Firefox 浏览器中受信任，请执行以下操作：

1. 运行浏览器。

1. 转到「**设置**」→「**关于 Firefox**」。

    ![关于 Firefox 浏览器 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. 点击 Firefox 浏览器徽标五次。

1. 导航到「**设置**」→「**Secret Settings**」。

    ![Secret Settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. 开启「**Use third party CA certificates**」。

### 方法 2

:::note

此方法仅在有 **Root 权限**的设备上有效。

:::

1. [安装和配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB； 在 Windows 平台上，** Samsung ** 用户可能需要安装[此实用程序](https://developer.samsung.com/mobile/android-usb-driver.html)。

1. 启用「**开发者模式**」并开启「**USB 调试**」：

    - 打开手机的「**设置**」；
    - 前往「**系统**」部分（设置中最后一项）。 在此部分中找到子项「**关于手机**」；
    - 点击「**版本号**」7次。 之后，您会收到通知称**您已处于开发者模式**（可能会要求您输入设备的解锁密码）；
    - 打开「**系统设置**」→「**开发者选项**」→ 下滑并启用「**USB 调试**」→ 在仔细阅读警告内容后在「**允许 USB 调试**」窗口中确认启用。

1. 安装 [Firefox](https://www.mozilla.org/en-US/firefox/releases/) 浏览器（发布版）；

1. 打开「**AdGuard 设置**」（右下角的齿轮图标）→「**过滤**」→「**网络**」→「**HTTPS 过滤**」→「**安全证书**」→「**Firefox 说明**」→「**安装旧版本**」；

1. 使用 `adb shell su` 和 `cd data/data/...` 打开 `data/data/org.mozilla.firefox/files/mozilla` 文件夹，找 `xxxxxxx.default` 文件并记住其名称；

1. 在指定文件夹里我们需要两个文件：

    - `cert9.db`
    - `key4.db`

1. 我们需要将这些文件移到发生安全证书问题的浏览器的一个文件夹中：

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`

1. 完整命令如下所示：

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    如果您收到系统通知**权限被拒绝**，您需要先将指定文件移至无权限目录。 然后再将它们移动至 Firefox 浏览器特定的文件夹里。

    完整命令的样式大致如下：

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    如果 `adb shell su` 无效，请先尝试先使用 `adb shell`，然后再使用 `su`。
