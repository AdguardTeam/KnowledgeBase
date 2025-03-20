---
title: 安装
sidebar_position: 2
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 系统要求

**操作系统版本：** Android 9.0 或更高版本

**RAM**： 至少 2GB

**可用磁盘空间**： 500MB

## 安装

虽然大部分用于安卓系统的应用程序可以通过谷歌商店分发，但是 AdGuard 不在里面。谷歌禁止通过谷歌商店分发网络层的广告拦截程序，即，在其他应用程序里屏蔽商业广告的应用程序。 您可以[在我们的博客中](https://adguard.com/blog/adguard-google-play-removal.html)找到有关 Google 限制性政策的更多信息。

由于上述原因，您只可以手动安装适用于安卓的 AdGuard。 为了在移动设备上使用该应用程序，您需要执行以下操作。

1. **在设备上下载应用程序**。 用户可以通过以下几种方式执行此操作：

    - 前往[我们的网站](https://adguard.com/adguard-android/overview.html)并点击「*下载*」按钮
    - 打开浏览器并输入以下的网址：[https://adguard.com/apk](https://adguard.com/apk)
    - 或扫描此二维码：

    ![二维码 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **允许安装未知来源的应用程序**。 文件下载完成后，点击通知中的「*打开*」。

    ![安装未知来源的应用程序 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    将出现一个弹出窗口。 点击「*设置*」，导航至「*安装未知应用程序*」，然后为您用于下载文件的浏览器授予权限。

    ![安装未知来源的应用程序 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **安装应用程序**。 浏览器获得必要权限后，系统会询问您是否要安装 AdGuard 应用程序。 点击「*安装*」。

    ![安装未知来源的应用程序 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

    然后，用户将被要求阅读 AdGuard 的 *许可协议*和*隐私政策*。 您还可以参与应用程序的改进过程。 为此，请选中「*自动发送崩溃报告*」和「*发送技术和交互数据*」复选框。 然后点击「*继续*」。

    ![隐私政策 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **创建本地 VPN**。 为了过滤设备上的所有流量而不是通过远程服务器路由，AdGuard 需要建立 VPN 连接。

    ![创建本地 VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **启用 HTTPS 过滤**。 这不是一个强制选项，但我们建议打开它以获得最佳的广告拦截质量。

    如果设备上安装 Android 7-9，在本地 VPN 设置后，系统会提示用户安装 Root 证书并配置 HTTPS 过滤。

    ![在 Android 7-9 上启用 HTTPS 过滤 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    点击「*立即安装*」后，将出现提示，要求您使用密码或指纹验证证书安装。

    ![在 Android 7-9 上启用 HTTPS 过滤。 步骤二 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    如果设备上安装 Android 10 及以上系统，那么在创建本地 VPN 后，用户将看到应用程序主界面，底部有一个建议启用 HTTPS 过滤的提示栏：点击 *启用* ，然后按照下一个界面的说明操作，或者查看[有关证书安装的文章](solving-problems/manual-certificate.md)了解更多信息。

    ![启用 HTTPS 过滤 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## 卸载/重新安装 AdGuard

如果需要卸载移动设备上的 AdGuard，请打开「*设置*」并选择「*应用程序*」（Android 7）或 「*应用程序和通知*」（Android 8+）。 在已安装的应用程序列表内找到 AdGuard 并点击「*卸载*」。

![重新安装 AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

要重新安装 AdGuard，只需再次下载 apk 文件，然后按照安装部分所述步骤操作即可。 无需事先卸载。
