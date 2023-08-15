---
title: Protection cannot be enabled
sidebar_position: 2
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Mac용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true)해 보세요.

:::

If AdGuard Protection cannot be enabled for some reason, perform the following steps:

1. Click the AdGuard icon at the Menu Bar → go to Advanced → Reset settings... → Quit AdGuard...

2. In the Spotlight Search, type Terminal, enter `sudo rm -R /Library/Application\ Support/com.adguard.adguard` and execute.

3. Restart your computer.

4. Open the Terminal again, type `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` and execute. You should receive the following: `No such file or directory`.

5. Start AdGuard, type in login and password when prompted.
