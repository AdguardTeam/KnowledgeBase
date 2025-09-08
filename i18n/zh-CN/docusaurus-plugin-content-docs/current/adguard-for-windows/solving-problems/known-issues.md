---
title: Windows 版 AdGuard 已知问题
sidebar_position: 11
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## Windows 版 AdGuard 和 AdGuard VPN 的兼容性问题

一旦用户安装 Windows 版 AdGuard 和 Windows 版 AdGuard VPN，两款软件就会开始协同工作，无需付出任何努力。 不过，更改某些默认设置会导致应用程序同时运行时出现工作错误。

Windows 版 AdGuard 有两个特定设置：「*使用重定向驱动模式*」和「*过滤 localhost 连接*」。 默认情况下，第一个处于禁用状态，第二个处于启用状态。 如果在设备上同时启用 AdGuard 广告拦截程序和 AdGuard VPN，则更改任何这些设置都将不可避免地破坏 AdGuard 的过滤功能。

只有在解决与 AdGuard 广告拦截程序和网络级应用程序（如防病毒软件、VPN 和网络过滤器）同时运行有关的问题时，才有必要更改这些设置。 如果有用户需要更改上述设置的默认状态，但仍希望 AdGuard 广告拦截程序和 AdGuard VPN 同时正确工作，请[在 GitHub 上创建一个问题](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose)，以便我们为您提供帮助。

我们目前正在努力克服上述应用程序同时工作的限制。
