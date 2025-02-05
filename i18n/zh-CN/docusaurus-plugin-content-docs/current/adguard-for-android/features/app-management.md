---
title: 应用管理
sidebar_position: 2
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

点击「应用管理」标签（屏幕底部从左数起的第三个图标）可以访问「应用管理」模块。 本部分允许用户管理设备上安装的所有应用程序的权限和过滤设置。

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

点击所需应用以管理其设置：

- 通过 AdGuard 路由应用流量。
- 拦截应用内的广告和跟踪器（「过滤应用内容」）。
- 过滤应用 HTTPS 流量（对于非浏览器应用，需要[安装 AdGuard 的 CA 证书到系统存储](/adguard-for-android/solving-problems/https-certificate-for-rooted/)，可用于获取 Root 权限的设备）。
- 在「集成模式」下，通过指定的代理服务器或 AdGuard VPN 路由。

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

您也可从上下文菜单访问应用的状态。

![Chrome 中的应用管理。 上下文菜单 \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### “无问题”与“有问题”的应用

大多数应用程序在过滤后都能正常运行。 对于此类应用，它们的流量经过 AdGuard 路由，默认进行过滤。

某些应用程序（如下载管理器、收音机、UID 1000 和 1001 的系统应用程序（如 Google Play 服务））存在“问题”，通过 AdGuard 路由时可能会发生异常。 这就是在尝试路由或过滤所有应用程序时，用户可能会看到以下警告的原因。

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

要确保设备上安装的所有应用程序正常运行，我们强烈建议您只通过 AdGuard 路由“无问题”的应用程序。 您可以在「设置」→「常规」→「高级」→「低级设置」→「保护」→「排除应用」中查看不建议过滤的应用程序的完整列表。
