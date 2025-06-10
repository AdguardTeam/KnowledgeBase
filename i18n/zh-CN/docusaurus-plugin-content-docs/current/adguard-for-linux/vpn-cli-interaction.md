---
title: AdGuard VPN CLI 交互
sidebar_position: 5
---

## AdGuard VPN CLI 交互

在**自动代理模式**下使用 AdGuard CLI 与在**隧道模式**下使用 AdGuard VPN CLI 不可同时进行，原因在于会出现路由循环：AdGuard VPN CLI 的流量目前无法被排除在 AdGuard CLI 的透明代理之外，而 AdGuard CLI 的流量又必须通过 AdGuard VPN CLI 的隧道传输。

以下是两种可行的解决方案：

- 将 AdGuard CLI 切换至**手动代理模式**。
    - 这种情况下，AdGuard VPN CLI 可在**隧道模式**下使用，但需要手动配置希望启用广告拦截的应用，使其使用 AdGuard CLI 的代理。
- 将 AdGuard VPN CLI 切换至 **SOCKS5 模式**，并配置 AdGuard CLI 使用指向 AdGuard VPN CLI SOCKS5 接口的出站代理。 此时需注意：
    - 若要让应用的流量通过 VPN 隧道，该流量要么需被 AdGuard CLI 透明代理（默认所有应用均如此），要么需手动配置为使用 AdGuard VPN CLI 的 SOCKS5 接口。
    - 为避免路由循环，必须在 AdGuard CLI 的应用配置部分为 AdGuard VPN CLI 启用 `skip_outbound_proxy` 选项。 默认情况下，名称中包含 `vpn` 的所有应用（包括 AdGuard VPN CLI）均已启用 `skip_outbound_proxy` 选项。
