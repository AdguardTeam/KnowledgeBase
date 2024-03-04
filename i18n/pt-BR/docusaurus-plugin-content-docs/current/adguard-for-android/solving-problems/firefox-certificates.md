---
title: Manual installation of the security certificate into the Firefox browser
sidebar_position: 11
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

For AdGuard to successfully filter HTTPS traffic in Firefox, the browser needs to trust AdGuard's certificate. It can be achieved differently for different versions of the Firefox.

### Method 1

:::note

This method works in Firefox for Android version 90.0 and later.

:::

To make Firefox trust the AdGuard certificate, do the following:

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
