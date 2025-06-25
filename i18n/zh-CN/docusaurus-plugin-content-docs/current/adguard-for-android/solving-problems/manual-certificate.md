---
title: Android 11+ 设备上的证书安装
sidebar_position: 11
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device’s user storage. 旧版本的 Android 操作系统可以自动完成，但在 Android 11 及更高版本上，用户必须手动安装。

![证书 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

请按照以下步骤安装 AdGuard 证书：

1. Open the app. On the *Home* screen, tap *HTTPS filtering is off*.

1. Then you’ll be presented with three screens:
    - HTTPS filtering is critical for ad blocking
    - AdGuard’s HTTPS filtering is safe
    - AdGuard certificate

    Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. 在打开的「*下载*」文件夹底部点击「*保存*」。

1. 保存后，点击「*打开设置*」。

1. Open *Settings* and type *CA Certificate* in the search bar. Tap the respective option.

1. 您可能会看到一条警告。 如果有的话，请点击「*仍然安装*」并输入您的 PIN 码（如有必要）。

1. 选择 AdGuard 证书文件。 它的名称应该类似于「*adguard_1342_020322.crt*」。

You’re all set! Once the certificate is installed successfully, you’ve enabled HTTPS filtering.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. 重启 AdGuard。
2. 再次尝试安装正确的证书（AdGuard Personal CA）。

## Security warnings

In earlier versions of Android, the quick settings panel displayed the message “Network may be monitored.” Tapping it will open a window with detailed information.

Starting with Android 15, in addition to “Network may be monitored”, users will see a warning notification after installing a certificate and after restarting the device: “Certificate authorities installed by an unknown third party.” This means that the system has detected third-party certificates in the user certificate store. Tapping the notification opens a list of certificates in the user certificate store.

Despite these warnings, your traffic remains secure. Your connection to remote servers stays encrypted. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at <support@adguard.com>.
