---
title: 网络设置
sidebar_position: 3
---

:::info

本文适用于 Windows 版的 AdGuard v8.0，一款全面的广告拦截器，可在系统层面保护您的设备。 这是一个仍在开发中的 Beta 测试版本。 要试用，请下载[适用于 Windows 的 AdGuard 测试版](https://agrd.io/windows_beta)。

:::

本部分让用户管理 AdGuard 过滤网络流量的方式，并提供额外工具来控制网络相关功能。

![网络设置](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## 将 AdGuard 用作 HTTP 代理

启用此选项可使 AdGuard 作为 HTTP 代理工作。 通过它的所有流量都将被过滤，不仅在您电脑上，还包括家庭网络中的其他设备。

要过滤其他设备的流量，需要在那些设备上安装 AdGuard 根证书并手动设置代理。

其他设置默认开启。

## HTTPS 过滤

如今大多数网站使用 HTTPS 加密。 没有 HTTPS 过滤，AdGuard 无法拦截 YouTube、Facebook 或 X（Twitter）等网站上的广告。

除非有特殊原因需要关闭，否则我们建议保持「过滤 HTTPS」选项开启。

通过此选项，您可以：

- 重新安装或下载 AdGuard 证书

- 将网站添加到不进行过滤的列表中

- 选择是否过滤带有 EV（扩展验证）证书的网站

## 应用及过滤器更新的代理

在此选择 AdGuard 下载过滤器更新或新应用版本时应使用何种代理：系统代理、自定义代理，或不使用代理。

![代理设置](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## 使用 SockFilter 驱动

启用此选项可使用 SockFilter 驱动程序，该驱动程序有助于阻止 Windows 8 及更高版本应用程序中的广告和跟踪器。 如果禁用此选项，AdGuard 将切换到较旧的 WFP 驱动。

SockFilter 首次引入于 v8.0 RC 版本。 它是一个**实验性**的轻量级内核态网络驱动，工作在套接字层面（TCP/UDP）。 与在完整 Windows 网络协议栈中检查或修改数据包不同，套接字过滤器在更高、更稳定的抽象层拦截套接字调用（如 connect、send、recv、bind）。 这使得它非常适合需要监控或控制网络活动但无需深度数据包处理的应用。

经过充分测试和实现后，SockFilter 相比其他驱动具有以下优势：

- **工作在更高、更稳定的套接字层面**：SockFilter 处理套接字操作而非原始数据包，比 WFP 的低层级数据包过滤更简单、更稳定。
- **不与其他网络驱动冲突**：由于它位于 VPN、防火墙和杀毒软件的 WFP 过滤器之上，避免了 WFP 协议栈中常见的过滤器顺序问题和兼容性冲突。
- **大幅降低 NETIO 相关蓝屏风险**：SockFilter 不在 NETIO 数据包管道内运行，因此避免了 WFP 标注错误处理缓冲区、分类结果或数据包内存导致的典型崩溃场景。

在缺点方面，SockFilter 驱动只能看到套接字层面的操作，无法捕获由其他内核驱动或绕过标准 Winsock API 的组件产生的流量。 从底层网络角度看，这可以被视为一种限制，因为驱动无法访问原始数据包或检查非套接字流量。 然而，对于广告拦截应用而言，这种行为不仅可接受，甚至是最优的。 所有来自浏览器和用户态应用的相关流量都通过标准套接字，这正是我们需要控制的。 同时，忽略低层级驱动流量消除不必要的复杂性，避免兼容性问题，并保持系统稳定。
