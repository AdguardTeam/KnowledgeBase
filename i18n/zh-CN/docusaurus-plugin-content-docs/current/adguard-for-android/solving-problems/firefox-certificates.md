---
title: 手动将安全证书安装到火狐浏览器中
sidebar_position: 11
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

为了让 Adguard 在火狐浏览器中成功过滤 HTTPS 流量，浏览器需要信任 AdGuard 证书。 根据火狐浏览器的版本，您要执行以下操作。

### Method 1

:::note

改方法在安卓版火狐浏览器 90.0 及以上的版本可用。

:::

为了让 AdGuard 证书在火狐浏览器中受信任，请执行以下操作：

1. 打开浏览器
2. Go to **Settings** → **About Firefox**.

![关于 Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. 点击 Firefox 徽标五次
4. Navigate to **Settings** → **Secret Settings**.

![秘密设置 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. 开启**使用第三方 CA 证书**（Use third party CA certificates）

### Method 2

:::note

此方法仅在有 **Root 权限**的设备上有效。

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).
2. 启用**「开发者模式」**以及开启**「USB 调试」**：
    - Open the **Settings** app on your phone;
    - 前往**系统**部分（设置中最后一项选项）。 In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. 之后您将会收到通知说明现在**您是开发人员**（如需要的话，输入解锁密码）；
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.
3. 安装[火狐浏览器](https://www.mozilla.org/en-US/firefox/releases/)（发布版本）；
4. Open the **AdGuard settings** → **Network** → **HTTPS Filtering** → Install the certificate in **Firefox** → **INSTALL FOR OLD VERSIONS**;
5. 使用 `adb shell su` 和 `cd data/data/...` 打开 `data/data/org.mozilla.firefox/files/mozilla` 文件夹，找 `xxxxxxx.default` 文件并记住其名称；
6. 在指定文件夹里我们需要两个文件：
    - `cert9.db`
    - `key4.db`
7. 我们需要将这些文件移到发生安全证书问题的浏览器的一个文件夹中：
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`。
8. 完整命令如下所示：
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

如您收到**权限不足**的系统提示，请您先将指定文件移动至无权限目录。 然后再将它们移动至火狐浏览器中特定的文件夹里。

完整命令的样式大体如下：
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

如果 `adb shell su` 不起作用，请先尝试使用 `adb shell`，然后再使用 `su`。
