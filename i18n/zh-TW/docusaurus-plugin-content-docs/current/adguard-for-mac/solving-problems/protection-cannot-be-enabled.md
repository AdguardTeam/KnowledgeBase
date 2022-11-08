---
title: Protection cannot be enabled
sidebar_position: 2
---
 
If AdGuard Protection cannot be enabled for some reason, perform the following steps:

1. Click the AdGuard icon at the Menu Bar - go to Advanced - Reset settings... and quit AdGuard.

2. In the Spotlight Search, type Terminal - enter `sudo rm -R /Library/Application\ Support/com.adguard.adguard` and execute

3. Restart your computer.

4. Open the Terminal again, type `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` and execute. You should receive the following: `No such file or directory`

5. Start AdGuard, type in login and password when prompted.