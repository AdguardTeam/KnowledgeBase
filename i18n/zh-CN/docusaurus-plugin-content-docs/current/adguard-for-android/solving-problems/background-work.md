---
title: 如何让 AdGuard 保持后台运行
sidebar_position: 8
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

在某些情况下，由于 Android 系统优化功能或所谓的「省电模式」，应用程序无法在后台运行（活动或睡眠模式），此功能可终止后台应用。 每次关闭后，重新启动它们可能会很不方便。 要避免后台应用终止，需要按照我们针对每个 Android 操作系统制造商（版本）分别描述的步骤进行操作。 请注意，不同制造商的说明大多非常相似。

## Asus

关于 Asus 设备的信息仍远未详尽，所以存在的问题可能比此处列出的要多。 当我们了解更多信息时，我们将更新文章内容。

Asus 设备后台工作的潜在问题主要来自「Power Master」这一优化程序。 此程序是预装的，其默认设置非常强大，例如可以阻止应用程序启动，以及在屏幕关闭时中断后台任务。 为了确保应用程序能在后台处理正常运行，请进行如下设置：

1. 进入「**Mobile Manager**」→「**Power Master**」→「**设置**」或「**省电选项**」→ 取消选中「**暂停清理**」。

1. 进入「**Mobile Manager**」→「**Power Master**」→「**设置**」或「**省电选项**」→ 取消选中「**自动拒绝应用自启动**」

或者，用户可以不完全取消「**自动拒绝应用自启动**」，而是转到「**设置**」→「**省电选项**」→「**自启动管理**」→「**AdGuard**」，然后取消选中。

## 小米

小米（特别是 MIUI 系统）是在后台运行方面限制最多的系统之一。 众所周知，小米的系统会限制后台进程，具有非标准权限，还缺乏适当的文档。 有时应用程序就是无法在小米手机上正常运行，而且我们对此还无能为力。 如果您在各种小米设备上遇到有关 AdGuard 后台工作的问题，您可以尝试执行以下操作。

### MIUI 13+ 和 HyperOS

取决于 MIUI 和 HyperOS 版本，有两种方法可以更改手机电池优化设置并更有效地拦截广告。

方案一

1. 转到「**设置**」→「**应用程序**」→「**权限**」→「**后台自动启动**」并允许 AdGuard 在后台运行。

1. 返回「**设置**」→「**应用程序**」→「**管理应用程序**」→「**AdGuard**」并取消选中「**在未使用时暂停应用程序**」。

1. 转到「**省电模式**」并点击「**无限**」。

方案二

1. 转到「**设置**」→「**应用程序**」→「**管理应用程序**」→「**AdGuard**」并启用「**自动启动**」。

1. 转到「**省电模式**」并点击「**无限**」。

完成！ 您已成功设置 AdGuard 在后台运行。

### MIUI 12.0.8

要让 AdGuard 应用程序成功在后台运行，请执行以下操作：

在「**设置**」→「**应用程序**」→「**管理应用程序**」→ 向下滚动找到「**AdGuard**」，将「**自动启动**」设置为「开」。

![小米设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

下滑并点击「**省电模式**」，然后设置为「无限制」。

![MIUI *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

在 **其他权限**，将所有可能的权限设置为「开”」。

运行「**安全中心**」应用。

点击屏幕右上角的**齿轮**图标。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

在功能设置中点击「**优化加速**」。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

点击「**锁定任务管理**」。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

在「**锁定任务管理**」界面中，将 AdGuard 应用程序的开关设置为打开。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

完成！ 您已成功锁定 AdGuard 应用程序。

### MIUI 12

打开「**设置**」→「**应用设置**」→「**应用管理**」→「**AdGuard**」。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- 将自启动设置为「开」
- 将「其他权限」中所有可能的权限设置为「开」。
- 将省电模式设置为「**无限制**」

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

现在从屏幕底部向上滑动，启动后台应用管理器，找到 AdGuard 应用程序。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

按住它，直到弹出一个特殊菜单。 选择锁定图标。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

之后锁定图标应该会显示在后台应用窗口的上方。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

### MIUI 10-11

为了能让应用程序在后台运行，请按照以下步骤来设置：

- 将自启动设置为「开」

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- 「**设置**」→「**电池与性能**」→ 关闭「**省电模式**」功能

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- 然后打开「**应用程序省电**」配置 →「**AdGuard**」→「**无限制**」

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

### 所有型号

如果小米设备仍不断中断 AdGuard 应用程序，请执行以下步骤：

#### 电源管理

请开启：

- 「**设置**」→「**高级设置**」→「**电源管理**」→ 将「**电源计划**」调至「**性能**」
- 「**设置**」→「**高级设置**」→「**电源管理**」→「**受保护应用**」，即 AdGuard 需要被**保护**。
- 「**设备设置**」→「**应用**」→「**AdGuard**」→「**电池**」→「**耗电提示**」和「**熄屏后继续运行**」
- 「**设置**」→「**其他设置**」→「**电池与性能**」→「**应用耗电管理**」，在这里：

1. 将省电模式切换为「关闭」
1. 选择以下选项：「**后台省电**」→「**选择应用程序**」→「**AdGuard**」→「**后台配置**」→「**无限制**」

#### 应用程序省电

选择「**安全中心**」→「**电池**」→「**应用程序省电**」→「**AdGuard**」设置为「**无限制**」

#### 应用程序锁定

要设置 AdGuard 在小米设备的后台工作，请注意电池和权限。

- 点击「**最近任务**」按钮，然后向下轻扫 AdGuard 以显示*菜单*（如截图所示）：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- 点击「**锁定**」图标。 这将阻止小米自动关闭 AdGuard。 如图所示：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- 转到「**电池**」

- 选择「**省电**」应用程序

- 查找并选择「**AdGuard**」

- 设置如下「**后台配置**」：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- 转到「**权限**」

- 选择「**自启动**」

- 确保启用了 AdGuard 的自启动功能：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

On many Samsung devices, apps that have been unused for three days will not be able to start from the background. To prevent this, you should turn off the **Adaptive Battery** and **Put apps to sleep** options wherever possible. Note that after an app or OS update, these settings often revert to their default values and must be turned off again.

### Android 11+

On Android 11, Samsung prevents apps (including AdGuard) from working in the background by default, unless you exclude them from battery optimizations. To ensure that AdGuard will not be terminated in the background:

1. Lock AdGuard in **Recent apps**: open **Recent apps**, find AdGuard, and long-press the AdGuard app icon.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is **Settings** → **Apps** → (⁝) menu → **Special access** → **Optimize battery usage**. Find AdGuard on the list and uncheck it.

1. Disable automatic optimization:

    Open **Battery** → (⁝) menu → **Automation** and toggle off all the settings there.

    Again, the exact path may differ. For example, on some devices you should go to phone **Settings** → **Device care** → (⁝) menu → **Advanced** and isable **Auto optimization** and **Optimize settings**.

1. If your phone has this option, disable **Adaptive battery**:

    Open phone **Settings** → **Battery** → **More battery settings** and toggle off **Adaptive battery**

1. Disable **Sleeping apps** (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** and disable **Put unused apps to sleep**

If you’re still experiencing issues, try these additional battery optimization adjustments:

 1. Navigate to **Settings** → **Apps** → **AdGuard** → **Battery** and turn on the **Optimised** option:

    ![Optimised settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Go to **Settings** → **Battery** → **Background usage limits** → **Never auto sleeping apps**:

    ![Never auto sleeping apps settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Choose AdGuard from the list of apps. If you don’t see it, return to step 1 and make sure that the *Optimized* battery mode is active:

    ![Choose the app *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 或 10

- Go to **Phone settings** → **Device care**, tap the **Battery** item, go to (⁝) **3-dot menu** → **Settings**, and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- In **Phone settings** → **Apps** → **Sleep as Android** → **Battery**, check that **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from **Sleeping apps**:

    1. Go to **Phone settings** → **Device care**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Wake up AdGuard using the trash can icon:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### 更早版本的 Samsung 手机

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. 如图所示：

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## 华为

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### 在某些 EMUI 8、9 和 10 设备（华为 P20、华为 P20 Lite、华为 Mate 10…）上启动应用。

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    打开「**设置**」→「**全部**」→「**启动管理器**」→ 关闭 AdGuard 的开关

    此外，为了确保后台进程的可靠性，您可能需要卸载「**省电精灵**」，详情如下。

### EMUI 9+ 设备和省电精灵

:::note

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Source

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. If this setting is present in your device's settings, you may skip the following steps. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer.

1. Connect your phone with a data cable.

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. Enable **USB debugging** within Developer options on your phone.

1. 在计算机上运行以下命令：

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### EMUI 6+ 设备（以及部分 EMUI 5 设备）

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20、Huawei Honor 9 Lite、Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20、Huawei P20 Lite、Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### 早期华为

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## 魅族

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1（Android Go）

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. Enable **USB debugging** within Developer options on your phone;

1. 通过以下 ADB 命令卸载 **com.evenwell.emm** 软件包：

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 和 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. Enable **USB debugging** within Developer options on your phone;

1. 输入以下命令，授予 MacroDroid（或您选择的自动化应用程序）写入全局设置存储的能力：

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. 创建一个在**设备启动**时触发的任务，执行以下操作：

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### 其他 Nokia 机型

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. Enable **USB debugging** within Developer options on your phone;

1. 通过以下 ADB 命令卸载 **com.evenwell.powersaving.g3** 软件包：

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## OPPO

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## 一加

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### 锁定应用程序

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### 电池优化

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### 应用自启动

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### 增强/高级优化

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### 最近应用的清除行为

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## WIKO

Wiko devices are problematic in terms of non-standard background process optimizations. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## 基于 Android 设备： Pixel /Nexus /Nubia /Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. 设置 AdGuard 软件：

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. 设置电池：

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. 为 AdGuard 启用「*始终启用 VPN*」：

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

On Motorola devices, there are four key configurations to ensure that AdGuard works properly in the background.

1. Allow background usage:

   - Stop AdGuard protection and close the AdGuard app
   - Go to **Settings → Apps → App battery usage** and find AdGuard
   - Enable **Allow background usage** or select **Unrestricted**, depending on your Android version

1. Remove background activity restrictions:

   - Go to **Settings**
   - Scroll down and tap **Apps & notifications**
   - Find **AdGuard** and open **Advanced → Battery**
   - Tap **Background restriction** or **Background limits**
   - If it says **Background activity restricted**, tap it and then tap **Remove**

1. Manage background apps:

   - Go to **Settings → Battery → Background app use**
   - Enable the **Manage background apps** option
   - In the resulting menu, select the **Apps** tab
   - Find **AdGuard** in the list and tap it
   - In the **Optimize battery use** dialog, select **Always allow**

    ![Always allow *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/motorolla-background-app-use.png)

1. Disable Adaptive Battery:

   - Go to **Settings → Battery**
   - Turn off the **Adaptive Battery** option

## ZTE

ZTE devices functioning under the MyOS operating system have an aggressive approach to background processes. Follow these steps to prevent AdGuard from being closed automatically by AI control:

- Go to **Settings → Battery → App Management**
- Turn off **AI Control**
- Select **Manual Management**
- Find **AdGuard** in the list and set **Background Work** to **Allow**

## Infinix

Infinix devices apply strict battery and power-saving rules that may interrupt AdGuard’s work in the background. Follow these steps to prevent AdGuard from being closed automatically by the system and ensure stable protection:

1. Disable protection and close the AdGuard app.

1. Go to system settings → *App management* → *App list* → *AdGuard* → *Battery* and enable *Allow background usage*. Then go to *Allow background usage* setting and switch the mode to *Unrestricted*.

    ![Allow background usage *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_allow.png)

1. Open system settings → *App management* → *Auto-start management* and enable *AdGuard*.

    ![Auto-start management *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_app_launch.png)

1. Navigate to system settings → *Battery & Power Saving* → *Power Saver* and disable *Battery Saver*.

1. From the *Battery & Power Saving* tab, find *AdGuard*, and select *No Restrictions*.

    ![Power saving management for apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_power_saving.png)

1. Go to *App management* → *Special App Access* → *Battery Optimisation*. At the top of the screen, select *All apps* from the dropdown menu, tap *AdGuard*, and set it to *Not Optimised*.

    ![Battery optimisation *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_not_optimized.png)
