---
title: How to get system logs
sidebar_position: 4
---

## General instruction

For troubleshooting problems with crashes a regular log may not be enough. In such cases to identify the origin of the problem we need the system log. Below is the instruction how to collect and get it: via Developer Options and Logcat. 

## Capture a bug report from a device

To get a bug report directly from your device, do the following:

1. Be sure you have [Developer options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled.

2. In **Developer options**, tap **Take bug report**.

![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

3. Select the type of the bug report you want and tap **Report**. 

> After a moment you get a notification that the bug report is ready (see figure 2).

![Bug report *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

4. To share the bug report, tap the notification.

![Bug report *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

5. Send this log to our support team.

> Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.

## Additional instruction (for Android 7 and lower versions)

On old Android devices there is no such option to take a bug report automatically. It has to be done manually via Logcat — a standard Android command-line tool that dumps a log of system messages. 

Follow this instruction:

**Part #1: prepare the device**

1. Switch device to the developer mode. To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

2. Go to **Developer Options**.

3. Enable **USB debugging**.

4. Increase **Logger buffer** sizes to 4MB per log buffer.

4MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

**Important:** you need to reproduce the problem after you're done with the first part.

**Part #2: get the log**

1. Connect your device to a PC with a USB cable.

2. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Choose the appropriate download link for your OS from the Downloads section. Once you click the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.

3. Open the Command Prompt, PowerShell or Terminal and enter the directory where you unzipped the file earlier. The command may look like this:

`cd C:\Program Files\platform-tools`

4. Test whether ADB is working properly: connect your Android device to your computer using a USB cable and run the following command:

`./adb devices`

5. Then run the following command (insert the relevant path):

`./adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt` 

Send the created `txt` file to us by contacting support or by any other way.

**Alternative way for ROOT users:**

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

2. Choose **Record** in the menu. Choose a name for a log file or just press **OK**. Now you can press **Home** button, CatLog will continue recording the log in background.

3. Reproduce the issue.

4. Open CatLog and press **Stop record** in the menu.

5. Send this log to our support team.

> Note: Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message to support.
