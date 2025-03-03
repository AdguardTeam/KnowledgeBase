---
title: DNS 保护功能
sidebar_position: 2
---

:::info

本文所述 AdGuard iOS 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

[DNS 保护模块](https://adguard-dns.io/kb/general/dns-filtering/)通过加密 DNS 流量来增强隐私保护。 与 Safari 内容拦截不同，DNS 保护适用于整个系统，即 Safari 以外的应用程序和其他浏览器。 用户必须先启用此模块才能使用它。 您可以在主屏幕上点击屏幕顶部的盾牌图标，或转至「保护」→「DNS 保护」选项卡来执行此操作。

:::note

要管理 DNS 设置，AdGuard 应用程序需要建立本地 VPN。 它不会通过任何远程服务器传输流量。 尽管如此，系统会要求用户确认访问权限。

:::

### DNS 实现 {#dns-implementation}

![DNS实现 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

此部分有两个选项：AdGuard 和本地实现。 基本上，这是两种设置 DNS 的方法。

在本地实现中，DNS 由系统而非应用程序处理。 这意味着 AdGuard 不必创建本地 VPN。 遗憾的是，这无法帮助用户规避系统限制并与其他基于 VPN 的应用程序一起使用 AdGuard。如果启用了任何 VPN，则本机 DNS 将被忽略。 因此，用户将无法在本地过滤流量或使用我们全新的 [DNS-over-QUIC 协议 (DoQ)](https://adguard.com/zh_cn/blog/dns-over-quic.html)。

### DNS 服务器 {#dns-servers}

在 DNS 保护屏幕上下一个部分是 DNS 服务器。 该部分显示当前选择的 DNS 服务器和加密类型。 要更改设置，请点击按钮进入 DNS 服务器界面。

![DNS 服务器 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

服务器的速度、使用的协议、可信度、日志记录策略等等。 默认情况下，AdGuard 会建议几个最流行的 DNS 服务器（包括 AdGuard DNS）。 点击任意以更改加密类型（如果服务器所有者提供此类选项）或查看服务器的主页。 我们添加了一些标签，如 `No logging policy`、`Ad blocking`、`Security` 以帮助用户做出选择。

此外，在屏幕底部还有一个添加自定义 DNS 服务器的选项。 它支持常规、DNSCrypt、DNS-over-HTTPS、DNS-over-TLS 和 DNS-over-QUIC 服务器。

#### 用于 DNS-over-HTTPS 的 HTTP 基本认证

该功能将 HTTP 协议的身份验证功能引入没有内置身份验证功能的 DNS。 如果要限制特定用户访问自定义 DNS 服务器，DNS 中的身份验证就非常有用。

要启用此功能，请执行以下操作：

1. 在 AdGuard DNS 中，转到「服务器设置」→「设备」→「设置」，然后将 DNS 服务器更改为具有身份验证的服务器。 单击「拒绝其他协议」将移除其他协议使用选项，只启用 DNS-over-HTTPS 身份验证，并防止第三方使用。 复制生成的地址。

![DNS-over-HTTPS 验证](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. 在 AdGuard iOS 版中，转到「保护」→「DNS 保护」→「DNS 服务器」，然后将生成的地址粘贴到「添加自定义 DNS 服务器」字段中。 保存并选择新配置。

要检查设置是否正确，请访问我们的[诊断页面](https://adguard.com/en/test.html)。

### 网络设置 {#network-settings}

![网络设置 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

用户还可以在网络设置上掌握 DNS 安全性。 「过滤移动数据」和「过滤 Wi-Fi」启用或禁用相应网络类型的 DNS 保护。 再往下，在「Wi-Fi 特例」，用户可以将特定 Wi-Fi 网络排除在 DNS 保护之外（例如，如果用户使用 [AdGuard Home](https://adguard.com/adguard-home/overview.html)，您可能希望将家庭网络排除在外）。

### DNS 过滤 {#dns-filtering}

DNS 过滤让用户通过 AdGuard DNS 过滤器、添加自定义 DNS 过滤器以及使用 DNS 黑名单/白名单来自定义 DNS 流量。

如何访问设置：

「保护」（底部菜单栏中的盾牌图标）→「DNS 保护」→「DNS 过滤」。

![DNS 过滤屏幕 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS 过滤器 {#dns-filters}

与 Safari 中的过滤器类似，DNS 过滤器也是根据特殊[语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/)编写的规则集。 AdGuard 将监控 DNS 流量并阻止与一项或多项规则匹配的请求。 用户可以使用过滤器，比如 [AdGuard DNS 过滤器](https://github.com/AdguardTeam/AdguardSDNSFilter)或添加主机文件作为过滤器。 可同时添加多个过滤器。 要了解如何操作，请阅读[说明](adguard-for-ios/solving-problems/system-wide-filtering)。

#### 白名单和黑名单 {#allowlist-blocklist}

除 DNS 过滤外，用户还可以将单个域名添加到黑名单或白名单中，从而自己管理 DNS 过滤。 黑名单甚至支持相同的 DNS 语法，并且两者都可以被导入和被导出，就像 Safari 内容拦截中的白名单一样。
