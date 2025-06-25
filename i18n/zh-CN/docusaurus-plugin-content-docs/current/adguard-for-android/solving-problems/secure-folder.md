---
title: 在安全文件夹中安装证书
sidebar_position: 12
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. 保存证书（在此阶段，用户可以重命名证书，以方便日后查找，这也是您需要做的）。
1. 弹出*安装说明*后，**请不要**点击「**打开设置**」。
1. 最小化应用程序并转到*安全文件夹*。
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. 使用图形密钥/密码/指纹确认安装。
1. 查找并选择先前保存的证书，然后点击「**完成**」。
1. Return to the AdGuard app and navigate back to the main screen.
1. 完成！ 证书安装成功。
