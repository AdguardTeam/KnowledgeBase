---
title: 应用管理
sidebar_position: 1
---

:::info

本文适用于 Windows 版的 AdGuard v8.0，一款全面的广告拦截器，可在系统层面保护您的设备。 这是一个仍在开发中的 Beta 测试版本。 要试用，请下载[适用于 Windows 的 AdGuard 测试版](https://agrd.io/windows_beta)。

:::

![应用管理](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/management.png)

在「应用管理」部分，您可以管理设备上已安装所有应用的路由和过滤设置。

当 AdGuard 检测到某个应用联网时，它会自动添加到「应用管理」中，其流量将通过 AdGuard 路由。

默认情况下，AdGuard 会过滤所有流量，但您可以选择排除项。

由于如今大多数网站都使用 HTTPS，AdGuard 也会对 HTTPS 流量进行过滤。 这对于拦截 youtube.com、facebook.com 和 x.com 等网站上的广告尤其重要，因为不经过 HTTPS 过滤就无法移除这些广告。

当某个应用的路由和过滤都开启时，每个应用下方的图标会显示为绿色。

您可以保留默认设置，也可以同时关闭过滤和路由，或者为每个应用单独手动微调。 用户还可以查看应用的统计数据。

![应用统计](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## “「无问题」与「有问题」的应用

大多数应用在过滤时都能正常工作。 有些应用被视为「有问题」，当通过 AdGuard 路由时可能无法正常运行。 当您尝试路由或过滤所有应用时，可能会看到如下警告：

要确保设备上所有已安装应用的正常运行，我们建议只将无问题的应用通过 AdGuard 路由。
