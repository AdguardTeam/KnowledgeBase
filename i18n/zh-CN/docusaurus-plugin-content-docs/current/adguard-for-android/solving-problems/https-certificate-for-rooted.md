---
title: 将 CA 证书移至 Root 设备的系统证书区
sidebar_position: 14
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

Android 版 AdGuard 可以[过滤加密的 HTTPS 流量](/general/https-filtering/what-is-https-filtering)，从而拦截网站上的大多数广告和跟踪器。 在获得 Root 权限的设备上，AdGuard 还可以过滤应用程序中的 HTTPS 流量。 过滤 HTTPS 流量需要将 AdGuard 的 CA 证书添加到受信任证书列表中。

在非 Root 权限设备上，CA 证书可以安装到「**用户证书**」中。 只有小部分应用程序（主要是浏览器）会信任安装到用户存储空间的 CA 证书，这意味着 HTTPS 过滤仅适用于此类应用程序。

在具有 Root 权限设备上，用户可以将证书安装到**系统存储空间**。 这样 AdGuard 就可以在其他应用程序中过滤 HTTPS 流量。

以下是具体操作方法。

## 如何在系统存储中安装 AdGuard 证书

1. 打开*「AdGuard」→「设置」→「过滤」→「网络」→「HTTPS 过滤」→「安全证书」*。

1. 如果您还没有任何证书，**将 AdGuard Personal CA 安装到用户存储中**。 这样 AdGuard 就可以过滤浏览器中的 HTTPS 流量。

1. **将 AdGuard Intermediate CA 安装到用户存储中**。 您需要它来运行 adguardcert Magisk 模块，该模块可以让用户将证书移动到系统存储中。

    ![安装证书 *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. 安装[最新版本的 **adguardcert** Magisk 模块](https://github.com/AdguardTeam/adguardcert/releases/latest/)。

1. 打开*「Magisk」→「模块」→「从存储安装」*并选择下载的 **adguardcert** 文件。 这样 AdGuard Personal CA 就从用户存储移到了系统存储。

    ![打开 Magisk 模块 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![从存储安装 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![选择 adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. 点击「**重启**」。

    ![重启设备 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

转移证书后，系统存储中的 AdGuard Personal CA 可让您在应用程序中过滤 HTTPS 流量，而用户存储中的 AdGuard Intermediate CA 则可让您在基于 Chromium 的浏览器中过滤 HTTPS 流量（原因见下文）。

## Chrome 和基于 Chromium 的浏览器的已知问题

对于系统存储中的证书，Chrome 和其他基于 Chromium 的浏览器需要证书透明度（CT）日志。 CT 日志不包含 HTTPS 过滤应用程序签发的证书信息。 因此，AdGuard 需要在用户存储中增加一个证书，以过滤这些浏览器中的 HTTPS 流量。

### Bromite 浏览器

除上述问题外，Bromite 浏览器默认不信任用户存储中的证书。 要在此浏览器中过滤 HTTPS 流量，请打开 Bromite，进入 `chrome://flags`，并将「*允许用户证书*」设置为「*开启*」。 **此方法适用于有 Root 权限的设备和未 Root 权限的设备**。
