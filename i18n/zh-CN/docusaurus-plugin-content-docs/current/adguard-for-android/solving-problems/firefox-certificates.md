---
title: 手动将安全证书安装到火狐浏览器中
sidebar_position: 11
---

为了让 Adguard 在火狐浏览器中成功过滤 HTTPS 流量，浏览器需要信任 AdGuard 证书。 根据火狐浏览器的版本，您要执行以下操作。

#### 第一个方法

> 改方法在安卓版火狐浏览器 90.0 及以上的版本可用。

为了让 AdGuard 证书在火狐浏览器中受信任，请执行以下操作：

1. 打开浏览器
2. 前往**「设置」**>**「关于 Firefox Nightly」**

![关于火狐](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. 点击 Firefox 徽标五次
4. 前往**「设置」**>**「Secret Settings」**

![秘密设置*](https://cdn.adguard.com/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. 开启**使用第三方 CA 证书**（Use third party CA certificates）

#### 第二个方法

> 此方法仅在有 **Root 权限**的设备上有效。

1. [安装以及配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB；
> 在 Windows 平台上，**三星**用户最可能需要安装此[实用程序](https://developer.samsung.com/mobile/android-usb-driver.html)（Utility）。
2. 启用**「开发者模式」**以及开启**「USB 调试」**：
- 在手机上打开**「设置」**；
- 前往**系统**部分（设置中最后一项选项）。 这里前往**关于手机**；
- 点击**版本号**7次。 之后您将会收到通知说明现在**您是开发人员**（如需要的话，输入解锁密码）；
- 前往**系统设置** > **开发人员选项** > 向下移动，启用 **USB 调试** > 在是否**允许 USB 调试**提示中仔细阅读警告后，确定允许调试。
3. 安装[火狐浏览器](https://www.mozilla.org/en-US/firefox/releases/)（发布版本）；
4. 打开 **AdGuard 设置** > **「网络」** > **「HTTPS 过滤」** >「安装证书至 **Firefox 浏览器**」> **「为旧版本安装」**；
5. 使用 `adb shell su` 和 `cd data/data/...` 打开 `data/data/org.mozilla.firefox/files/mozilla` 文件夹，找 `xxxxxxx.default` 文件并记住其名称；
6. 在指定文件夹里我们需要两个文件：
- `cert9.db` - `key4.db` 7. 请您将这两个文件移动到安全证书发生错误的浏览器的文件夹中： - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`. 8. 完整命令如下： - `adb shell su` - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

如您收到**权限不足**的系统提示，请您先将指定文件移动至无权限目录。 然后再将它们移动至火狐浏览器中特定的文件夹里。

完整命令的样式大体如下：

- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

如果 `adb shell su` 不起作用，请先尝试使用 `adb shell`，然后再使用 `su`。