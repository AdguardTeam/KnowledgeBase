---
title: Problems caused by using a Restricted Mode profile
sidebar_position: 10
---

:::note

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Android için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual App/Dual Messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

## Solutions

You have three ways to solve the issue:

### Option 1: Grant permissions to AdGuard using ADB

> Please note, that this approach is available starting from **AdGuard v3.5 nightly 6**. If you're using an older version, you can get the latest update [here](https://adguard.com/adguard-android/overview.html).

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklamayı** etkinleştirin:
- Open the **Settings** app phone;
- **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
- Tap the **Build number** line 7 times. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
- **Sistem Ayarları** → **Geliştirici Seçenekleri** öğesini açın → Aşağı kaydırın ve **USB hata ayıklaması** öğesini etkinleştirin → Uyarıyı dikkatlice okuduktan sonra **USB hata ayıklamasına izin ver** penceresinde hata ayıklamanın etkinleştirildiğini onaylayın.

> If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

2. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> Windows platformunda, **Samsung** sahiplerinin [bu yardımcı programı](https://developer.samsung.com/mobile/android-usb-driver.html) yüklemeleri gerekebilir.
3. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;
4. Open **the command line** on your PC:
- **Cmd.exe** if you are using **Windows**;
- **Terminal** if you are using **macOS**;
5. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *restricted user account*

About how to manage user accounts from an Android device you can [find here](https://support.google.com/a/answer/6223444?hl=en).

> Please note, that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual messenger or Dual app features on **Samsung** or **LG** devices. You can read below how to fix the issue in these cases.

### Option 3: Use AdGuard in *Local HTTP proxy mode* (requires root)

To enable this mode, open **AdGuard Settings** → **Network** → **Filtering method** → **Local HTTP proxy**

## LG and Samsung devices

Owners of **LG** or **Samsung** phones may also encounter a similar issue. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature.

### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down and press **Dual messenger**;
- Disable the **Dual messenger** for all applications;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down and press **Dual app**;
- Remove all applications from the list;
- Reboot your device.