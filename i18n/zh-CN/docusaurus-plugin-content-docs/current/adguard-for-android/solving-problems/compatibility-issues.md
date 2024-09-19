---
title: Android 应用程序的已知兼容性问题
sidebar_position: 16
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

## VPN 应用程序

如果在「*本地 VPN*」过滤模式下使用 AdGuard，您将无法同时运行其他 VPN 应用程序。 要解决这个问题，我们建议执行以下操作：

- 使用 [AdGuard VPN](https://adguard-vpn.com/welcome.html)。「*集成模式*」允许两个应用程序同时运行。
- 配置 VPN 应用程序，使其充当[出站代理](../solving-problems/outbound-proxy.md)，并使用第三方应用程序的参数设置本地出站代理。
- 切换到「*自动代理*」模式。 执行此操作后，AdGuard 将不再使用本地 VPN，而是重新配置 iptables。
- 切换到「*手动代理*」模式。 为此，请转至「*设置*」→「*过滤*」→「*网络*」→「*路由模式*」

:::note 兼容性

「*自动代理*」模式只能在有 Root 权限的设备上启用。 使用「*手动代理*，在运行 Android 10 或更高版本的设备上也需要 Root 权限。

:::

## 私人 DNS

Android Pie 中引入了私有 DNS 功能。 在 Q 版本之前，私有 DNS 不会破坏 AdGuard DNS 过滤逻辑，并且经由 AdGuard 的 DNS 转发工作正常。 但从 Q 版本开始，私有 DNS 功能会迫使应用程序重定向流量至系统解析器，不通过 AdGuard 。 有关更多详细信息，请参阅 Android [开发日志](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html)。

- 要解决私有 DNS 的问题，请使用 `$network` 规则。

有些设备制造商会隐藏私有 DNS 设置，并将「自动模式」设为默认模式。 因此，禁用私有 DNS 是不可能的，但我们可以通过使用 `$network` 规则来进行阻止，使系统认为上游服务器无效。 例如，如果系统默认使用 Google DNS，我们可以添加 `|8.8.4.4^$network` 和 `|8.8.8.8^$network` 规则来阻止 Google DNS。

## 不支持的浏览器

### UC 浏览器：UC 浏览器、适用于 x86 的 UC 浏览器、UC Mini、UC 浏览器 HD

要过滤 HTTPS 流量，AdGuard 要求用户将证书添加到设备的受信任用户证书中。 不幸的是，UC 系列浏览器不信任用户证书，因此 AdGuard 无法执行 HTTPS 过滤。

- 要解决此问题，请将[证书移至系统证书存储](../solving-problems/https-certificate-for-rooted.md/)

:::note 兼容性

需要 Root 权限。

:::

### 海豚浏览器：海豚浏览器、海豚浏览器极速版

在「*手动代理*」模式下运行时，AdGuard 无法过滤其流量，因为此浏览器会忽略系统代理设置。

- 使用「*本地 VPN*」过滤模式可以解决这个问题。

### Opera mini：Opera mini、Opera mini 与 Yandex

Opera mini 默认通过压缩代理驱动流量，AdGuard 无法同时解压缩和过滤流量。

- 目前没有解决方案。

### Puffin 浏览器：Puffin 浏览器、Puffin 浏览器 Pro

Puffin 浏览器默认通过压缩代理来驱动流量，AdGuard 无法同时解压并过滤流量。

- 目前没有解决方案。
