---
title: 与 AdGuard VPN 整合
sidebar_position: 6
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

Android 版 AdGuard 创建本地 VPN 以过滤流量。 因此，在启用 Android 版 AdGuard 时，用户不能启动其他 VPN 服务。 不过，AdGuard 和 [AdGuard VPN](https://adguard-vpn.com/) 都有集成模式，可以一起运作。

在集成模式下，AdGuard VPN 作为一个出站代理服务器，通过该服务器，AdGuard 广告拦截程序路由流量。 这允许 AdGuard 创建一个 VPN 界面并在本地进行广告和跟踪器拦截，而AdGuard VPN 通过远程服务器路由所有流量。

禁用 AdGuard VPN 后，AdGuard 停止将其用作出站代理。 如果用户禁用 AdGuard，AdGuard VPN 将通过自己的 VPN 界面路由流量。

如果您安装了 AdGuard 广告拦截程序和 AdGuard VPN，广告拦截程序会检测到 VPN 服务并自动启用「与 AdGuard VPN 集成」。 反过来也是一样的。 请注意，如果您已启用集成模式，您将无法从 AdGuard VPN 管理应用程序排除项和连接到 DNS 服务器。 您可以通过「设置」→「过滤」→「网络」→「代理」→「通过代理运行的应用」指定要通过 VPN 隧道路由的应用程序。 选择 DNS 服务器，请打开「AdGuard」→「保护」→「DNS 保护」→「DNS 服务器」。
