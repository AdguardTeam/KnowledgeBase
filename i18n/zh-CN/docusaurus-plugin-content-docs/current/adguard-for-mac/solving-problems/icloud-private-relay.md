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

1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter in filtered apps because HTTP/3 filtering is not yet available.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic — otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

`network.extension.monterey.force.split.tunnel` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.

## Recommended solution

We recommend using AdGuard together with a more traditional VPN service such as [AdGuard VPN](https://adguard-vpn.com/).

## Alternative solution

You can prevent AdGuard from using the "default route" by disabling the "default route". It can be done via Advanced Settings → `network.extension.monterey.force.split.tunnel`.

![Disable default route in advanced settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Bear in mind that, in this case, you'll face the issues described above.
