---
title: DNS 保护功能
sidebar_position: 4
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

DNS 保护模块可通过点击底部屏幕的「保护」标签（屏幕底部左起第二个图标）并选择「DNS 保护」访问。

:::tip

DNS 保护功能的工作原理与常规广告和跟踪器拦截不同。 用户可以[在专门文章中了解更多有关功能工作原理的信息](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)。

:::

「DNS 保护」让用户借助选定的 DNS 服务器、DNS 过滤器和用户规则过滤 DNS 请求：

- 一些 DNS 服务器有拦截列表，可阻止潜在有害域名的 DNS 请求。

- 除了 DNS 服务器，AdGuard 还可以使用特殊的 DNS 过滤器自行过滤 DNS 请求。 软件包含大量广告和跟踪域名，发送到这些域名的请求被重新路由到一个黑洞服务器。

- 用户还可以创建用户规则来屏蔽和解除域名的拦截。 用户可以查阅关于 [DNS 过滤规则语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/)的文章。

![DNS protection \*mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS 服务器

使用该设置用户可以选择 DNS 服务器以解析 DNS 请求、拦截广告和跟踪器，以及加密 DNS 流量。 点击服务器可阅读其完整描述并选择协议。 如果没有找到所需的服务器，可以手动添加所需要的服务器。说明如下：

- 点按「添加 DNS 服务器」，输入服务器地址（或多个地址）

- 或者，用户也可以从[已知 DNS 提供商列表](https://adguard-dns.io/kb/general/dns-providers/)中选择 DNS 服务器，然后点击「添加到 AdGuard」。

- 如果您使用私人 AdGuard DNS 服务器，可以从[仪表盘](https://adguard-dns.io/dashboard/)将其添加到 AdGuard。

默认选择「自动 DNS」。 它根据 AdGuard 和设备设置设置 DNS 服务器。 如果启用「[与 AdGuard VPN 集成](/adguard-for-android/features/integration-with-vpn)」或 SOCKS5 代理，软件连接到「AdGuard DNS 无过滤」或用户指定的服务器。 在其他情况下，软件将连接到设备设置中选择的 DNS 服务器。

#### DNS 过滤器

本部分让用户添加自定义 DNS 过滤器和 DNS 过滤规则。 在 [filterlists.com](https://filterlists.com/) 上可以查看更多过滤器。
