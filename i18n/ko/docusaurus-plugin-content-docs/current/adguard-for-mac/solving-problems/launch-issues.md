---
title: Launch issues on macOS
sidebar_position: 6
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Mac용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true) 해 보세요.

:::

Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. In this case you should follow one of these instructions, based on your OS version.

## Launch issues on macOS 11 and higher

If you have problems launching AdGuard for Mac on Big Sur and Monterey operating systems, please use this instruction:

1. Reboot Mac and enter [recovery mode](https://support.apple.com/en-us/HT201255).
2. Disable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil disable`).
3. Reboot Mac.
4. Close the AdGuard app, open **Terminal** and type `systemextensionsctl reset`.
5. Reboot Mac and enter recovery mode.
6. Enable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil enable`).
7. Launch the AdGuard app and enable protection.

## Launch issues on macOS 10

If you have problems launching AdGuard for Mac on Sierra, Mojave and Catalina operating systems, please use this instruction:

1. Open **Terminal** and enter command `ls -@lOae /private/var/db/KernelExtensionManagement`.
2. Check that the `restricted` flag is not present (like on the screenshot).

![Command example *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)

3. Reboot your Mac in recovery mode.
4. Open **Utilities** → **Terminal**.
5. Enter `csrutil disable`.
6. Enter administrator password.
7. Reboot your Mac.
8. Open **Terminal** and enter the following command: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
9. Reboot your Mac in recovery mode.
10. Open **Utilities** → **Terminal** → Enter `csrutil enable` → Enter administrator password → Reboot your Mac.
11. AdGuard 보호를 활성화합니다.
