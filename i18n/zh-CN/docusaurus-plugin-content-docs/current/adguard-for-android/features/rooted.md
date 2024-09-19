---
title: 有 Root 权限的设备
sidebar_position: 7
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

由于 Android 操作系统的安全措施，AdGuard 的一些功能只能在有 Root 权限的设备上使用。 以下是具体列表：

- 在大多数情况下，应用程序中的「**HTTPS 过滤**」需要将 [CA 证书安装到系统存储](/adguard-for-android/features/settings#security-certificates)上，因为大多数应用程序不信任用户存储中的证书。
- [「**自动代理**」路由模式](/adguard-for-android/features/settings#routing-mode)需要 Root 权限，因为 Android 对系统范围的流量过滤有限制。
- [「**手动代理**」路由模式](/adguard-for-android/features/settings#routing-mode)在 Android 10 及以上版本需要 Root 权限，因为不再可能确定与 AdGuard 过滤的连接相关联的应用程序的名称。
