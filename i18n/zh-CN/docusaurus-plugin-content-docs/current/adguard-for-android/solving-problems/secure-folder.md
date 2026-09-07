---
title: 在安全文件夹中安装证书
sidebar_position: 12
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

如果您在 Android 设备上将 AdGuard 安装 [在*安全文件夹*中](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/)（这主要适用于 Samsung 设备），安装 HTTPS 证书时可能会遇到困难。 「*安全文件夹*」拥有独立的证书存储空间。 不过，如果您遵循[常规证书安装说明](/adguard-for-android/features/settings#https-filtering)，证书将安装在主内存中，不会影响*安全文件夹*中的广告拦截程序。 要为*安全文件夹*存储中的 AdGuard Android 版安装证书，请改按以下说明操作：

1. 安装应用并连接本地 VPN 后，在主屏幕上点击「*HTTPS 过滤已关闭*」。
1. 点击「**继续**」→「**下一步**」→「**保存证书**」。
1. 保存证书（在此阶段，用户可以重命名证书，以方便日后查找，这也是您需要做的）。
1. 弹出*安装说明*后，**请不要**点击「**打开设置**」。
1. 最小化应用程序并转到*安全文件夹*。
1. 点击三点菜单并转到「**设置**」→「**其他安全设置**」。
1. 点击「**从设备存储安装**」→「**CA 证书**」→「**仍然安装**」。
1. 使用图形密钥/密码/指纹确认安装。
1. 查找并选择先前保存的证书，然后点击「**完成**」。
1. 返回 AdGuard 应用程序并导航回主屏幕。
1. 完成！ 证书安装成功。
