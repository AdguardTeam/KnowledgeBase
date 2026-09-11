---
title: 保护邮件活动和 AdGuard
sidebar_position: 8
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 简述

Apple 邮件应用现于下载邮件图像时使用代理以隐藏用户的 IP 地址。

![邮件隐私保护](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

但如有启动的 VPN 连接，保护邮件活动功能将无法工作。 因其视 AdGuard 为 VPN，所以它不会自动预载图像。

Apple [在此](https://support.apple.com/HT212797)解释此问题。

## 详述

现在，Mac 版 AdGuard 使用基于网络扩展 API 的 macOS 内置的 Socket 过滤。 这种新的漏洞百出的机制取代了老式的内核扩展。 在过去的一年半内，我们向 Apple 报告了超过 20 个（！）关于其新过滤方式的错误。

网络扩展 API 有一个类似 VPN 的配置，其中包含一个类似路由的条目列表。 在 Big Sur 上，AdGuard 使用了「分离隧道」规则，以避免创建「默认路由」规则，因为它会给 Big Sur 早期版本带来问题。 这些问题已在 Monterey 中得到解决，因此没有什么能阻止「默认路由」规则。

在 Monterey 上，推出了 iCloud 专用代理。 邮件应用程序的隐私功能也使用专用代理服务器。

因此，AdGuard 无法与 iCloud 专用代理和邮件应用程序的隐私功能一起使用：

1. iCloud 专用代理应用于库级别的连接，在连接到达 AdGuard 运行的套接字级别之前。
2. iCloud 专用代理使用 QUIC，AdGuard 无法对其进行过滤，因为 HTTP/3 过滤功能尚不可用。
3. 因此，AdGuard 会阻止 QUIC，包括 iCloud 专用代理的流量，否则就无法拦截广告。
4. 当用户使用 iCloud 专用代理，将 AdGuard 切换到「分离隧道」模式时，就无法在 Safari 中打开网站。
5. 要在 Monterey 上解决这个问题，我们应用「默认路由」规则。 专用代理检测到该规则时，功能将自动禁用。 因此，AdGuard 可以在 Monterey 上无缝运行，但 iCloud 专用代理会被禁用。

`network.extension.monterey.force.split.tunnel` 恢复了 Big Sur 行为，但由于（3）和（4）的原因，该选项会中断网站访问权限。 我们努力寻找能够解决这个问题的办法。 一种可能的解决方案是实施 HTTP/3 过滤。

## 建议的解决方案

此时，我们建议使用更传统的 VPN 服务，如 [AdGuard VPN](https://adguard-vpn.com/)，而不是较新的 Apple 隐私功能。
