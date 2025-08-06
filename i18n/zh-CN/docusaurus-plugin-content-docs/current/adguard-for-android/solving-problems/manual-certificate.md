---
title: Android 11+ 设备上的证书安装
sidebar_position: 11
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

为了能够[过滤 HTTPS 流量](/general/https-filtering/what-is-https-filtering.md)（这点很重要，因为大多数广告都使用 HTTPS），AdGuard 需要在设备的用户存储空间中安装证书。 旧版本的 Android 操作系统可以自动完成，但在 Android 11 及更高版本上，用户必须手动安装。

![证书 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

请按照以下步骤安装 AdGuard 证书：

1. 打开应用程序。 在 *主页* 屏上，点击「*HTTPS 过滤已关闭*」。

1. 然后您将看到三个画面：
    - HTTPS 过滤对广告拦截至关重要
    - AdGuard 的 HTTPS 过滤是安全的
    - AdGuard certificate

1. Consecutively, tap *Continue* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, copy the text from the *CA Certificate* field and tap *Open Settings*.

1. Open *Settings* and either paste or type *CA Certificate* in the search bar. Tap the respective option.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

完成！ 证书安装成功后，即可启用 HTTPS 过滤。

如果在手动安装证书过程中遇到问题（例如：已安装证书但应用仍无法识别），可参考以下任一解决方案：

1. 重启 AdGuard。
1. 再次尝试安装正确的证书（AdGuard Personal CA）。

## 安全警告

在早期 Android 版本中，快速设置面板会显示「网络可能受到监控」提示。 点击该提示将打开包含详细信息的窗口。

从 Android 15 开始，除「网络可能受到监控」外，用户在安装证书及设备重启后还将看到警告通知：「由未知第三方安装的证书颁发机构」。 这表示系统已在用户证书存储区检测到第三方证书。 点击通知会打开用户证书存储中的证书列表。

尽管存在这些警告，您的流量依然安全。 与远程服务器的连接始终保持加密状态。 AdGuard 仅会在决定是否过滤连接前验证服务器证书，其工作原理与浏览器类似。

[了解有关 HTTPS 过滤以及证书如何工作的更多信息](/general/https-filtering/what-is-https-filtering.md)。

如问题仍然存在使您无法安装证书，请联系我们的客户支持团队 <support@adguard.com>。
