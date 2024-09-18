---
title: iCloud 专用代理和 AdGuard
sidebar_position: 7
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 问题描述

AdGuard 默认使用「默认路由」功能，禁用 iCloud 专用代理的原因。

目前，AdGuard 和 iCloud 专用代理不能同时工作。 AdGuard 无法阻止广告，因为 iCloud 专用代理会在 AdGuard 过滤网络连接之前对流量进行加密。 当 iCloud 专用代理处于活动状态时，应用就无法进行过滤（包括本地过滤）。 因此，AdGuard 无法在 Safari 中过滤流量或执行 DNS 过滤。 但是，AdGuard 仍然会过滤其他浏览器的流量。 要继续使用 iCloud 专用代理，请考虑安装 [AdGuard Safari 版](https://adguard.com/adguard-safari/overview.html)。

在 Mac 上使用任何 VPN 应用程序也是如此：用户必须在使用 iCloud 专用代理或 VPN 服务之间进行选择。

## 更详细的说明

现在 Mac 版 AdGuard 使用基于网络扩展 API 的 macOS 内置的 Socket 过滤。 这种新的漏洞百出的机制取代了老式的内核扩展。 在过去的一年半内，我们向 Apple 报告了超过 20 个（！）关于其新过滤方式的错误。

网络扩展 API 有一个类似 VPN 的配置，其中包含一个类似路由的条目列表。 在 Big Sur 上，AdGuard 开发了「分离隧道」规则，以避免创建「默认路由」规则，因为它会给 Big Sur 早期版本带来问题。

在 Monterey 上，推出了 iCloud 专用代理。 邮件应用程序的隐私功能也使用专用代理服务器。

因此，AdGuard 无法与 iCloud 专用代理和邮件应用程序的隐私功能一起使用：

1. iCloud 专用代理应用于库级别的连接，在连接到达 AdGuard 运行的套接字级别之前。
2. iCloud 专用代理使用 QUIC，AdGuard 无法在已过滤的应用程序中过滤 QUIC，因为 HTTP/3 过滤尚未可用。
3. 因此，AdGuard 会阻止 QUIC，包括 iCloud 专用代理的流量，否则就无法拦截广告。
4. 当用户使用 iCloud 专用代理，将 AdGuard 切换到「分离隧道」模式时，就无法在 Safari 中打开网站。
5. 要在 Monterey 上解决这个问题，我们应用「默认路由」规则。 专用代理检测到该规则时，功能将自动禁用。 因此，AdGuard 可以在 Monterey 上无缝运行，但 iCloud 专用代理会被禁用。

`network.extension.monterey.force.split.tunnel` 恢复了 Big Sur 行为，但由于（3）和（4）的原因，该选项会中断网站访问权限。 我们努力寻找能够解决这个问题的办法。 一种可能的解决方案是实施 HTTP/3 过滤。

## 建议的解决方案

我们建议将 AdGuard 与更传统的 VPN 服务（如 [AdGuard VPN](https://adguard-vpn.com/)）一起使用。

## 替代解决方案

用户可以禁用「默认路由」，防止 AdGuard 使用「默认路由」。 前往「高级设置」→ `network.extension.monterey.force.split.tunnel` 进行设置。

![在高级设置中禁用默认路由 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

请注意，在这种情况下，用户将面临上述问题。
