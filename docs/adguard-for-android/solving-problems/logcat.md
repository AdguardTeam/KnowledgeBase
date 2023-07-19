---
title: How to get Logcat log
sidebar_position: 4
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## General Instruction

For troubleshooting problems with crashes a regular log is almost always not enough. In such cases to identify the origin of the problem we need the system log. Below is the instruction how to collect and get it.

## Capture a bug report from a device

To get a bug report directly from your device, do the following:

1. Be sure you have [Developer Options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled.

2. In **Developer options**, tap **Take bug report**.

![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

3. Select the type of bug report you want and tap **Report**.

> After a moment you get a notification that the bug report is ready (see figure 2).

![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

4. To share the bug report, tap the notification.

![Bug report *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

5. Send this log to our support team.

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.

:::

## Additional Instruction (for old Android versions)

On old Android devices there is no such option to take a bug report automatically. It has to be done manually by following this instruction:

**Part #1: prepare the device**

1. Switch device to the developer mode. To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

2. Go to **Developer Options**.

3. Enable **USB debugging**.

4. Increase **Logger buffer** sizes to 4 MB per log buffer.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting log from the device);

**Important:** you need to reproduce the problem after you've done with the first part!


**Part #2: get the log**

1. Connect your device to PC with USB cable.

2. Download and install Minimal ADB:

<http://forum.xda-developers.com/showthread.php?t=2317790>

Direct download link:

<https://www.androidfilehost.com/?fid=24052804347803384>

3. Run this command in the console (it will be opened after install):

adb logcat -v threadtime -d > C:\logcat.txt

Send this log to us by contacting support or by any other way.

**Alternative way for ROOT users:**

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

2. Choose **Record** in the menu. Choose a name for a log file or just press **OK**. Now you can press **Home** button, CatLog will continue recording the log in background.

3. Reproduce the issue.

4. Open CatLog and press **Stop record** in the menu.

5. Send this log to our support team.

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.

:::
