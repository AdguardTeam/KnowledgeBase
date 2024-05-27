---
title: 低级设置
sidebar_position: 6
---

:::info

本文所述 AdGuard iOS 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

![低级设置 \*mobile\_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

要打开「低级设置」，请转到「设置」→「常规」→（如果关闭，请启用「高级模式」 ）→「高级设置」→「低级设置」。

在大多数情况下，此部分的设置最好保持不变：仅当您确定自己在做什么或支持团队要求时才使用它们。 但有些设置可以在没有任何风险的情况下进行更改。

### 拦截 IPv6 {#blockipv6}

对于发送以获取 IPv6 地址的任何 DNS 查询，我们的应用程序将返回空响应（就好像该 IPv6 地址不存在一样）。 现在可以设置不返回 IPv6 地址。 此时，该功能的描述变得过于技术性：配置或禁用 IPv6 是高级用户的专有领域。 如果您是其中之一，您可能已经知道这个功能是什么，如果不是，就没必要深入了解这些细节了。

### Bootstrap 和 Fallback（后备）服务器 {#bootstrap-fallback}

Fallback 是指备用 DNS 服务器。 如果用户选择的 DNS 服务器发生问题，需要 fallback 功能设置备用 DNS 服务器，直到主服务器响应。

使用 Bootstrap 时，情况要复杂一些。 为了让 AdGuard iOS 版使用自定义安全 DNS 服务器，我们的应用程序需要首先获取其 IP 地址。 为此，默认情况下使用系统 DNS，但有时由于各种原因无法使用。 在这种情况下，可以使用 Bootstrap 获取所选安全 DNS 服务器的 IP 地址。 以下两个示例说明自定义 Bootstrap 服务器何时可能有所帮助：

1. 当系统默认 DNS 服务器不返回安全 DNS 服务器的 IP 地址，且无法使用安全 DNS 服务器时。
2. 当我们的应用程序和第三方 VPN 同时使用，且无法使用系统 DNS 作为引导时。
