---
title: Launch issues on macOS
sidebar_position: 6
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Mac용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. In this case you should follow one of these instructions, based on your OS version.

## Launch issues on macOS 11 and higher

If you have problems launching AdGuard for Mac on Big Sur and Monterey operating systems, please use this instruction:

1. Reboot Mac and enter [recovery mode](https://support.apple.com/en-us/HT201255).
1. Disable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil disable`).
1. Reboot Mac.
1. Close the AdGuard app, open **Terminal** and type `systemextensionsctl reset`.
1. Reboot Mac and enter recovery mode.
1. Enable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil enable`).
1. Launch the AdGuard app and enable protection.

## Launch issues on macOS 10

If you have problems launching AdGuard for Mac on Sierra, Mojave and Catalina operating systems, please use this instruction:

1. Open **Terminal** and enter command `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Check that the `restricted` flag is not present (like on the screenshot). ![Command example *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal**.
1. Enter `csrutil disable`.
1. Enter administrator password.
1. Reboot your Mac.
1. Open **Terminal** and enter the following command: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal** → Enter `csrutil enable` → Enter administrator password → Reboot your Mac.
1. Enable AdGuard protection.
