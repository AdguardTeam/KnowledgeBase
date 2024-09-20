---
title: 如何在 iOS 版 AdGuard 启用全系统的过滤？
sidebar_position: 2
---

:::info

本文适用于 iOS 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 关于系统层面上的过滤

系统层面上的过滤是指不仅在 Safari 浏览器里，而且在其它应用程序和浏览器里屏蔽广告及跟踪器。 这篇文章的内容讲述如何在 iOS 设备上启用系统层面的广告拦截。

在 iOS 上，仅有一个方式允许我们在系统层面上拦截广告和跟踪器，就是使用 [DNS 过滤](https://adguard-dns.io/kb/general/dns-filtering/)。

首先，需要启用 DNS 保护。 具体操作如下：

1. 打开 *iOS 版 AdGuard*。
2. 点击「*保护*」图标（底部菜单栏中的第二个图标）。
3. 打开「*DNS 保护*」开关。

![DNS 保护屏幕 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

到了这一步，如目标是在系统层面上拦截广告和跟踪器，那么用户有三个选择：

 1. 使用 AdGuard DNS 过滤器。点击「*保护*」（底部菜单中的盾牌图标）→「*DNS 保护*」→「*DNS 过滤*」→「*DNS 过滤器*」→「*AdGuard DNS 过滤器*」。
 2. 使用 AdGuard DNS 服务器。点击「*保护*」（底部菜单中的盾牌图标）→「*DNS 保护*」→「*DNS 服务器*」→「*AdGuard DNS*」，或其他您喜欢的阻止的 DNS 服务器。
 3. 根据自己的需求添加自定义 DNS 过滤器/主机文件。

第一种和第三种方案有几个优点：

- 用户可以亲自选择任何 DNS 服务器，不需要使用某一个特定的拦截服务器，因为过滤器将进行拦截。
- 用户可以添加多个 DNS 过滤器和/或主机文件（请注意：使用太多会降低 AdGuard 的运行速度）。

![DNS 过滤工作原理](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## 如何添加自定义 DNS 过滤器/Hosts 文件

用户可以添加任何 DNS 过滤器或主机文件。

我们将 [OISD Blocklist Big](https://oisd.nl/) 作为例子。

1. 复制链接：`https://big.oisd.nl` （这是 OISD Blocklist Big 过滤器的链接）。
2. 点击「*保护*」（底部菜单栏中的盾牌图标） →「*DNS 保护*」→「*DNS 过滤*」→「*DNS 过滤器*」。
3. 点击「*添加过滤器*」。
4. 将链接粘贴到过滤器 URL 字段中。
5. 点击「*下一步*」→「*添加*」。

![添加 DNS 过滤器屏幕 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

在第4步粘贴另一个链接，就可以使用同样的方式添加其它 DNS 过滤器。 [在这里](https://filterlists.com)可以找到各种过滤器，以及它们的链接。
