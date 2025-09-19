---
title: 高级设置指南
sidebar_position: 9
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 如何转到高级设置

:::caution

更改「*高级设置*」会引起 AdGuard 出现性能问题，中断因特网连接或危及用户的安全和隐私等问题。 这就是我们建议用户仅在自己知道在做什么或我们的支持团队要求的情况下才打开此设置的原因。

:::

要转到「*高级设置*」，请打开 AdGuard，单击齿轮图标，选择 「*高级*」，然后选择「*高级设置*」。

## 高级设置

### 网络设置

#### `network.extension.exclude.domains`

在「*网络扩展*」模式下，列出的域名将被排除在过滤之外。 使用逗号或换行符分隔数值。

#### `network.extension.exclude.ports`

在「*网络扩展*」模式下，列出的端口将被排除在过滤之外。 使用逗号或换行符分隔数值。

#### `network.extension.route.exclude`

在「*网络扩展*」模式下，列出的路由将被排除在过滤之外。 使用 IP 地址或目标 CIDR 设置路由。 用逗号或换行符分隔数值。

#### `network.extension.http.downgrade.bundleids`

用户可以指定在「*网络扩展*」过滤模式下 HTTP/2 协议将降级为 HTTP/1.1 的应用程序列表。 捆绑包 ID 应该用逗号或换行符分隔。

#### `network.extension.monterey.force.split.tunnel`

用户可以禁止 AdGuard 使用「默认路由」，该路由在 macOS Monterey 的「*网络扩展*」模式中默认已启用。 AdGuard 使用「默认路由」禁用 iCloud 私人中继服务和保护邮件活动，因为软件无法与服务协同运行。

用户可以[在本文中](../icloud-private-relay)找到有关该问题的更多信息。

#### `network.extension.dns.redirect.exclude.bundleids`

用户可以在此指定不通过系统 DNS 解析器进行 DNS 查询的应用程序列表（例如，VPN 客户端或 DNS 过滤应用程序）。 在「*网络扩展*」模式下，应用程序的 DNS 过滤将被禁用。 捆绑包 ID 应该用逗号或换行符分隔。

#### `network.dns.filter.secure.request`

将安全 DNS 请求重定向到本地 DNS 代理（如果有的话）。

#### `network.https.ocsp.check`

设置为 `true`，将启用 HTTPS 证书吊销检查。

#### `network.tcp.keepalive.enabled`

定期在空闲连接上发送 TCP 数据包，以确保连接保持活动状态，并更新 NAT 超时。

#### `network.tcp.keepalive.interval.seconds`

发送存活探测前的空闲时间（秒）。 如果指定为 0，系统将使用默认值。

#### `network.tcp.keepalive.timeout.seconds`

向无响应的对等设备发送另一个存活探测之前的时间（秒）。 如果指定 0，使用系统选择的数值。

#### `network.https.ech.enabled`

使用本地 DNS 代理在 ECH 配置列表中查找配置。 如果找到，加密 Client Hellos。

#### `network.https.enforce.certificate.transparency`

基于 Chrome 证书透明度（英文：Chrome Certificate Transparency，简称：Chrome CT）政策验证域名内所有证书的真实性。

#### `network.https.filter.http3.enabled`

如果设置为 `true`，允许 AdGuard 过滤通过 HTTP/3 发送的流量，HTTP/3 是基于 QUIC 的 HTTP 协议的最新版本。

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

#### `network.filtering.localnetwork`

设置为 `true` 即可启用本地网络过滤。

#### `network.filtering.localhost`

设置为 `true` 即可启用 LoopBack 过滤功能。

### DNS 设置

#### `dns.proxy.bootstrap.ips`

用户可以在此输入 DNS 服务器的 IP 地址，这些地址将用于确定加密 DNS 服务器的地址。

#### `dns.proxy.fallback.ips`

用户可以指定 DNS 服务器的 IP 地址列表，这些地址将在加密 DNS 服务器无法响应时用作备份。

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

如果所有正常的上游都失败，正常的查询将被重定向到一个备用上游。

#### `dns.proxy.detect.search.domains`

该设置可以自动检测本地网络域名，并自动将其重定向到后备 DNS 服务器，而不是主 DNS 服务器。

#### `dns.proxy.fallback.domains`

用户可以列出将使用后备 DNS 服务器而不是主 DNS 服务器的域名。

#### `dns.proxy.adblockrules.blocking.mode`

用户可以指定 DNS 服务器响应被阻止请求的类型，与广告拦截器类型规则相对应。

- 0 —— 用 REFUSED 响应
- 1 —— 用 NXDOMAIN 响应
- 2 —— 用 0.0.0.0 或 `dns.proxy.blocking.response.IPv4.address` 和/或 `dns.proxy.blocking.response.IPv6.address` 中指定的地址进行响应

#### `dns.proxy.hostrules.blocking.mode`

用户可以根据主机规则指定 DNS 服务器响应被阻止请求的类型：

- 0 —— 用 REFUSED 响应
- 1 —— 用 NXDOMAIN 响应
- 2 —— 用 0.0.0.0 或 `dns.proxy.blocking.response.IPv4.address` 和/或 `dns.proxy.blocking.response.IPv6.address` 中指定的地址进行响应

#### `dns.proxy.blocking.response.IPv4.address`

用户可以指定当 `dns.proxy.adblockrules.blocking.mode` 或 `dns.proxy.hostrules.blocking.mode` 设置为响应类型「ADDRESS」时，响应被阻止的「A」请求时将返回的 IPv4 地址。

#### `dns.proxy.blocking.response.IPv6.address`

用户可以指定当 `dns.proxy.adblockrules.blocking.mode` 或 `dns.proxy.hostrules.blocking.mode` 设置为响应类型「ADDRESS」时，响应被阻止的「AAAA」请求时将返回的 IPv6 地址。

#### `dns.proxy.block.AAAA.requests`

在此可以启用 IPv6 DNS 查询阻止。

#### `dns.proxy.blocked.response.TTL.in.seconds`

用户可以指定请求响应阻塞时返回的 TTL 值（生存时间）。

#### `dns.proxy.parallel.upstream.queries.enabled`

同时查询所有上游。 返回第一个响应。

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

用 SERVFAIL 数据包响应上游故障.

#### `dns.proxy.http3.enabled`

为 DNS-over-HTTPS 上游启用 HTTP/3 以加速连接。

#### `dns.proxy.block.encrypted.client.hello.response`

删除响应中的 Encrypted Client Hello 参数。

#### `dns.proxy.private.relay.sequoia.workaround.enabled`

如果用户启用防火墙，将阻止 macOS 私有代理域名，这将禁用「*私有代理*」功能。

启用此设置在一些情况下很有用，比如，当 macOS 私有代理被启动时，过滤无法正常工作，必须禁用。 在 macOS 14 及以前的版本中，当启用保护时，AdGuard 将自动禁用私有代理。 但从 macOS 15 开始，如果用户启用防火墙，就不能再这样做了。 启用此设置，即使防火墙已启用，用户也可以禁用私有代理，从而克服先前的限制。

### 隐身模式设置

#### `stealth.antidpi.http.split.fragment.size`

调整 HTTP 请求片段大小。 有效值：1–1500。 如果指定的大小无效，系统将使用默认值。

#### `stealth.antidpi.clienthello.split.fragment.size`

该设置指定 TCP 数据包碎片的大小，有助于避免深度包检测。 有效值：1–1500。 如果指定的大小无效，系统将使用默认值。

#### `stealth.antidpi.http.space.juggling`

在 HTTP 方法和 URL 之间添加额外的空格，并删除「Host:」字段后的空格。

#### `stealth.antidpi.split.delay.millisecond`

如果执行了分片，用户可以在此处指定发送第一个分片后的延迟（以毫秒为单位）。

### 订阅链接拦截设置（用户脚本和过滤器）

#### `subscription.link.interception.userscript`

激活此功能后可以让 AdGuard 自动拦截用户脚本的 URL 并打开安装窗口。

#### `subscription.link.interception.filter`

要 AdGuard 自动拦截订阅 URL（例如，abp:subscribe 等）并打开自定义过滤器设置窗口，请启动此功能。
