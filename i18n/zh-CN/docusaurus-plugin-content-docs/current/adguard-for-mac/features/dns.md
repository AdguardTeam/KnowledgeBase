---
title: DNS
sidebar_position: 4
---

:::info

本文介绍了 Mac 版的 AdGuard，它是一款多功能广告拦截器，可在系统级别保护设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

## DNS 保护功能

「DNS」部分包含一个功能选项，即「DNS 保护」，它具有多项配置：

- 提供商
- 过滤器
- 黑名单
- 白名单

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

如果用户启用「DNS 保护」，DNS 流量将由 AdGuard 管理。

### 提供商

在「提供商」下，用户可以选择一个 DNS 服务器来加密 DNS 流量，并在必要时阻止广告和跟踪器。 我们推荐 AdGuard DNS。 要设置更高级的配置，可以[设置私有 AdGuard DNS 服务器](https://adguard-dns.io/welcome.html)或点击左下角的「+」图标添加自定义服务器。

### 过滤器

DNS 过滤器在 DNS 级别应用广告拦截规则。 这种过滤不如常规的广告拦截精确，但对于拦截整个域名特别有用。 要添加 DNS 过滤器，请单击「+」。 了解更多 DNS 过滤器请访问 [filterlists.com](https://filterlists.com/)。

### 黑名单

此列表中的域名将被拦截。 要添加域名，请单击「+」。 用户可以使用[专用语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/)添加域名或 DNS 过滤规则。

要导出或导入黑名单，请打开上下文菜单。

### 白名单

该列表中的域名不会被过滤。 要添加域，请单击「+」。 要导出或导入白名单，请打开上下文菜单。
