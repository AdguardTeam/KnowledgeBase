---
title: Problems caused by multiple user profiles
sidebar_position: 10
---

:::info

Este artículo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Problems caused by multiple user profiles

On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. This happens because AdGuard is installed for a different user profile on the device.

If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message "You can't install the app on your device".

To solve this problem, you need to uninstall the application for all users: go to Settings → All apps → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Problems caused by using a Restricted Mode profile

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Solutions

You have three ways to solve the issue:

### Option 1: Grant permissions to AdGuard using ADB

:::note

This approach is available starting from **AdGuard v3.5 nightly 6**. If you're using an older version, you can get the latest update [here](https://adguard.com/adguard-android/overview.html).

:::

1. Activate the **developer mode** and enable **USB debugging**:

    - Open the **Settings** app phone;
    - Go to **System** section (last item in the settings menu). In this section, find the sub-item **About phone**;
    - Tap the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).


:::

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe** if you are using **Windows**;
    - **Terminal** if you are using **macOS**;

1. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *restricted user account*

About how to manage user accounts from an Android device you can [find here](https://support.google.com/a/answer/6223444?hl=en).

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual messenger or Dual app features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

:::

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

### LG and Samsung devices

Owners of **LG** or **Samsung** phones may also encounter a similar issue. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature.

### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down and press **Dual messenger**;
- Disable the **Dual messenger** for all apps;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down and press **Dual app**;
- Remove all apps from the list;
- Reboot your device.
