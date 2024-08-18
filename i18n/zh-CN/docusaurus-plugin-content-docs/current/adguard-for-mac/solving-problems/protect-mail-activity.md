---
title: Protect Mail Activity and AdGuard
sidebar_position: 8
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## In a nutshell

Apple 邮件应用现于下载邮件图像时使用代理以隐藏用户的 IP 地址。

![Mail privacy protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

However, it won't work if there's an active VPN connection. 因其视 AdGuard 为 VPN，所以它不会自动预载图像。

Apple explains this issue [here](https://support.apple.com/HT212797).

## 更详细的说明

现在 Mac 版 AdGuard 使用基于网络扩展 API 的 macOS 内置的 Socket 过滤。 这种新的漏洞百出的机制取代了老式的内核扩展。 在过去的一年半内，我们向 Apple 报告了超过 20 个（！）关于其新过滤方式的错误。

网络扩展 API 有一个类似 VPN 的配置，其中包含一个类似路由的条目列表。 On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.

在 Monterey 上，推出了 iCloud 专用代理。 Privacy features of Mail.app also use Private Relay servers.

As a consequence, AdGuard can't work together with iCloud Private Relay and Mail app privacy features:

1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic – otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

`network.extension.monterey.force.split.tunnel` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4). We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.

## Recommended solution

At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the newer Apple privacy features.
