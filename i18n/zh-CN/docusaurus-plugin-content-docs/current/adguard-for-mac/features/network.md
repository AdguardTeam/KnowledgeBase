---
title: 网络
sidebar_position: 9
---

:::info

本文介绍了 Mac 版的 AdGuard，它是一款多功能广告拦截器，可在系统级别保护设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

## 常规

![网路](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### 自动过滤应用程序流量

默认情况下，AdGuard 在大多数浏览器中拦截广告和跟踪器（[Tor 浏览器是个例外](/adguard-for-mac/solving-problems/tor-filtering)）。 此设置还允许 AdGuard 屏蔽应用程序中的广告。

要管理过滤后的应用程序，请单击「应用程序」。

### 过滤 HTTPS 协议

此设置让 AdGuard 过滤目前大多数网站和应用程序使用的安全 HTTPS 协议。 默认情况下，包含潜在敏感信息（例如银行服务）的网站不会被过滤。 要管理 HTTPS 排除项，请单击「排除项」。

默认情况下，AdGuard 不过滤具有 Extended Validation（EV）证书的网站。 如果需要，用户还可以启用「过滤带 EV 证书的网站」。

## 出站代理

用户可以设置 AdGuard 通过代理服务器路由所有设备的流量。

## HTTP 代理

用户可以将 AdGuard 用作 HTTP 代理服务器。 这样就可以过滤连接到代理的其他设备上的流量。

确保 Mac 和其他设备连接到同一网络，并在要通过代理服务器路由的设备上输入代理端口（通常在网络设置中）。 要同时过滤 HTTPS 流量，请将 [AdGuard 代理证书](http://local.adguard.org/cert)传输到此设备。 [了解有关安装代理证书的更多信息](/guides/proxy-certificate)。
