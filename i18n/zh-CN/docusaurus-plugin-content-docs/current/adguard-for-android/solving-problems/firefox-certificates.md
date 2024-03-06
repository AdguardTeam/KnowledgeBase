---
title: 手动将安全证书安装到火狐浏览器中
sidebar_position: 11
---

:::info

本文适用于安卓版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

为了让 Adguard 在火狐浏览器中成功过滤 HTTPS 流量，浏览器需要信任 AdGuard 证书。 根据火狐浏览器的版本，您要执行以下操作。

### Method 1

:::note

改方法在安卓版火狐浏览器 90.0 及以上的版本可用。

:::

为了让 AdGuard 证书在火狐浏览器中受信任，请执行以下操作：

1. Run the browser.

1. Go to **Settings** → **About Firefox**.

    ![About Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Tap the Firefox logo five times.

1. Navigate to **Settings** → **Secret Settings**.

    ![Secret Settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Toggle **Use third party CA certificates**.

### Method 2

:::note

This method will only work on **rooted** devices.

:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app on your phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

1. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);

1. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;

1. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;

1. In the specified folder we are interested in two files:

    - `cert9.db`
    - `key4.db`

1. We need to move these files to a folder of the browser where the security certificate issue occurred:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. The full command will look like this:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.

    The full command should look something like this:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    If `adb shell su` does not work, you should try `adb shell` initially, and then `su`.
