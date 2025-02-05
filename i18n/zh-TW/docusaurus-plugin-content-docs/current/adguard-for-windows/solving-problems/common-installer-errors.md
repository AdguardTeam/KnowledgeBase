---
title: Common installer errors
sidebar_position: 6
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

This article contains some of the most common errors that you can encounter during the AdGuard for Windows installation, and possible ways to solve them.

### Error 5: Access Denied {#error-5}

This error message appears when required permissions haven't been granted. There may be several different reasons why AdGuard installer doesn't have the permissions it requires to properly finish the installation process. You can try the following steps:

- Temporarily disable your antivirus. Some of them may interfere with the installation, depending on the severity of their settings.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.

- Reboot your computer. Sometimes the permission issues are temporary and can be solved by restarting the PC.

### Error 112: Disk is full, Error 1632: Temporary folder full or inaccessible {#error-112}

These are two different errors with very similar solutions. As their titles suggest, AdGuard installer didn't find enough disk space to complete the installation. There are several things you can attempt to fix the problem:

- Uninstall some programs or delete unnecessary files from the drive you were trying to install AdGuard to.

- Download, install, and run [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), a free piece of software by Malwarebytes. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. It will help clean up some disk space.

- Reboot your computer. Sometimes temporary files can take up a considerable amount of disk space, and restarting your PC is the most reliable way to get rid of them.

### Error 1601: Windows Installer is not accessible {#error-1601}

You could say this is a particular subcategory of Error 1603. The possible solutions are similar:

- Start and re-register Microsoft Installer service. It requires some work.

    1) Press *Win + R* and enter **services.msc**. 2) Find in the list and double click *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Reboot the PC and start the installation all over again. Sometimes that's enough to fix the problem.

### Error 1602: Canceled by user {#error-1602}

If you got this error code, chances are you have interrupted the installation process manually in one way or another. What you can do is:

- Don't close the installer window. When the installation is complete, it will close automatically.

- If a dialogue window pops up during the installation, hit "Yes" to grant the installer the required permissions. Clicking "No" will cancel the installation.

- Don't start other processes while the installation process is going on.

### Error 1603: Fatal error during installation {#error-1603}

The error sounds scarier than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:

- Press the *Win* key, search for *Command Prompt* and run it. There, type in `sfc /scannow` and press *Enter*.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.

- Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1) Press *Win + R* and enter ***services.msc***. 2) Find in the list and double click *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1) Open *File Explorer*, right-click the drive containing the installation location and select *Properties*. 2) Go to *Security* tab and click *Edit*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*. 4) Click *OK* to go back to *Properties* dialog. Then click *Advanced*. 5) Click *Change Permissions*. 6) On *Permissions* tab, double-click *Administrators*. 7) Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*. 8) Do the same operation above (from item 7) for *SYSTEM*. 9) Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: Another installation is already in progress {#error-1618}

This error occurs when there are several instances of AdGuard installer launched at the same time. What to do if you get this error:

- Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.

- Don't make multiple clicks on the installer even if it doesn't start right away. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Another version of this product is already installed {#error-1638}

It's very likely that you've already installed AdGuard before.

- Check if AdGuard is already installed on your computer. You can do it by pressing the *Win* key and typing in ***AdGuard***.

- Maybe there're some leftover files from a previous AdGuard installation. Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

### Other errors {#other}

If you've encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [This article](../system-logs) explains how to do that.

- Please email all these files from two previous steps to the support team at **support@adguard.com** and describe the problem in the message body. Our tech support agents will reply to you as soon as possible.
