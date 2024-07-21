---
title: 低级设置
sidebar_position: 6
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 如何进入低级设置

:::caution

更改「*低级设置*」可能会导致 AdGuard 的性能出现问题，也可能会断开网络连接或侵害安全和隐私。 如果您知道自己在设置什么，或者是我们的客户支持要求您这样做，请打开此部分。

:::

要转到「*低级设置*」，请打开 AdGuard 应用并点击屏幕右下角的齿轮图标。 然后进入转到「*常规」→「高级」→「低级设置」*。

## 低级设置

在 4.0 版的 AdGuard Android 版中，我们彻底重新设计了低级设置：将它们划分为主题块，使它们更加清晰，添加对输入值和其他安全阀的验证，删除并添加一些设置。

### DNS 保护功能

#### 后备上游

在配置的服务器不可用时，用户可以在此处指定要使用的后备 DNS 解析器。 共有三个选项：「*自动 DNS*」「*无*」和「*自定义 DNS*」。 如果用户未指定后备服务器，软件将使用「*自动 DNS*」，是指系统 DNS 或 AdGuard DNS。 「*无*」意味着没有后备服务器。 选择「*自定义 DNS*」，用户可以列出作为上游使用的 IPv4 和 IPv6 服务器地址。

#### 后备域名

在这里，用户可以列出将直接转发到后备上游（如果存在）的域名。

#### 检测搜索域名

如果启用此选项，AdGuard 将检测搜索域名并自动将它们转发到后备上游。

#### Bootstrap 上游

DoH、DoT 和 DoQ 服务器的 Bootstrap DNS。 默认使用的是「*自动 DNS*」即系统 DNS 或 AdGuard DNS。 选择「*自定义 DNS*」，可以列出作为 Bootstrap 上游使用的 IPv4 和 IPv6 服务器地址。

#### adblock 规则的拦截模式

在这里，可以根据 adblock 规则语法（例如 `||example.org^`）指定被 DNS 规则阻止的域名的响应类型。

- 用 REFUSED 响应
- 返回 NXDOMAIN 响应
- 响应自定义 IP 地址（可在此处指定 IPv4 和 IPv6 地址）

#### host 规则的拦截模式

您可以在此处根据主机规则语法指定 DNS 规则阻止的域名响应类型（例如 `<ip> <domain> 0.0.0.0 example.com`）。

- 用 REFUSED 响应
- 返回 NXDOMAIN 响应
- 响应自定义 IP 地址（可在此处指定 IPv4 和 IPv6 地址）

#### DNS 请求超时

用户可以指定 AdGuard 在使用后备服务器之前，等待选定 DNS 服务器响应的时间（以毫秒为单位）。 如果数值无效或为空，要使用的数值为 5000。

#### 屏蔽的 TTL 应答

用户可以在这里指定请求响应阻塞时返回的 TTL（生存时间）值。

#### DNS 缓存大小

您可在此处指定缓存响应的最大数量。 默认值为 1000。

#### ECH 拦截

如果启用，AdGuard 会从 DNS 响应中去除 Encrypted Client Hello 参数。

#### 忽略不可用的出站代理

如果启用此设置，AdGuard 将在出站代理不可用时直接发送 DNS 请求。

#### 为 DNS-over-HTTPS 上游试用 HTTP/3

如果启用此设置，AdGuard 将使用 HTTP/3 加速 DoH 上游的 DNS 查询解析。 否则，AdGuard 将恢复其默认行为，并使用 HTTP/2 发送 DNS-over-HTTPS 的所有 DNS 请求。

#### SERVFAIL 故障响应

如果启用此设置，若所有上游（包括后备上游）都无法响应，AdGuard 将向客户端发送 SERVFAIL 响应。

#### 对非后备域名使用后备功能

如果启用此设置，AdGuard 将对所有域名使用后备上游。 否则，只有在启用了相应选项的情况下，后备上游才会用于后备域和搜索域。

#### 验证 DNS 上游

如果启用此设置，AdGuard 将在添加或更新自定义 DNS 服务器之前测试 DNS 上游。

#### Filter secure DNS

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### 过滤

#### 捕获 HAR

如果启用此设置，AdGuard 将捕获 HAR 文件。 它会在应用程序缓存目录内创建一个名为「har」的目录，并将 HAR 1.2 格式的所有已过滤 HTTP 请求信息储存在那里，这些信息可通过 Fiddler 程序进行分析。

仅将其用于调试目的！

### HTTPS 过滤

#### Encrypted Client Hello

每一个加密的互联网连接都有一个未加密的部分， 就是发送的第一个数据包，包含用户要连接的服务器名称。 Encrypted ClientHello（ECH）的技术能够解决该问题，成功加密最后一位未加密的信息。 要使用该功能，请启用「*Encrypted ClientHello*」选项。 本功能使用本地 DNS 代理查找域名的 ECH 配置。 如果找到，将对 ClientHello 数据包进行加密。

#### OCSP 检查

如果启用此设置，AdGuard 将执行异步 OCSP 检查，以获取网站 SSL 证书的吊销状态。

如果在规定的超时时间内完成OCSP检查，AdGuard将立即阻止连接（如果证书被吊销）或建立连接（如果证书有效）。

如果验证时间过长，AdGuard 将允许连接，同时继续在后台检查证书状态。 如果证书被撤销，当前和将来该域名的连接将被阻止。

#### 重定向 DNS-over-HTTPS 请求

如果启用此设置，除了无加密 DNS 请求外，AdGuard 还会将 DNS-over-HTTPS 请求重定向到本地 DNS 代理。 我们建议禁用后备上游，并仅使用加密的 DNS 服务器，以保护隐私。

#### 过滤 HTTP/3

如果启用此设置，AdGuard 除过滤其他请求类型外，还会过滤通过 HTTP/3 发送的请求。

### 出站代理

#### 显示「过滤 DNS 请求」设置

如果启用此功能，「*过滤 DNS 请求*」开关将显示在「*添加代理服务器*」对话框中。 使用它可以过滤通过指定代理的 DNS 请求。

### 防护

#### 端口范围

用户可以在此处指定应过滤的端口范围。

#### 记录已删除的 HTML 事件

如果启用此设置，AdGuard 将在「*最近活动*」中记录被阻止的 HTML 元素。

#### Scriplet 调试

如果启用此设置，Scriptlets 中的调试将被激活，浏览器日志将记录 Scriptlets 规则的应用情况。

#### 排除的应用

您可以在此处列出要从 AdGuard 保护中排除的包名称和 UID。

#### QUIC 旁路包

用户可以在此处指定 AdGuard 应绕过 QUIC 流量的包名称。

#### 网络更改时重新配置自动代理

如果启用此设置，当设备连接到另一个网络时，AdGuard 保护将重新启动，重新配置自动代理设置。 仅当「*路由模式*」设置为「*自动代理*」时，此设置才适用。

#### IPv6 过滤

如果启用此设置，AdGuard 将在 IPv6 网络接口可用时过滤 IPv6 网络。

#### 无需进行过滤的 IPv4 范围

本节中列出的 IPv4 范围的过滤已禁用。

#### 无需进行过滤的 IPv6 范围

本节所列 IPv6 范围的过滤功能已禁用。

#### 出站套接字的 TCP 保活

如果启用此设置，AdGuard 将在指定时间段后发送保活探测，以确保 TCP 连接处于活动状态。 在这里，用户可以指定启动保活探测之前的空闲时间以及对无响应对等方进行保活探测之间的时间。

在尝试从服务器获取响应失败达到规定的次数后，系统会自动关闭 TCP 连接。

### 本地 VPN 设置

#### 撤销 VPN 的恢复延迟

在这里，用户可以设置在 AdGuard 被第三方 VPN 应用程序撤销或删除 VPN 配置文件后尝试恢复 VPN 保护之前的延迟时间（以毫秒为单位）。 默认值为 5000 毫秒。

#### 为撤销的 VPN 恢复重新安排延迟

用户可以在此处设置 AdGuard 在被第三方 VPN 应用程序撤销或删除 VPN 配置文件后重新安排 VPN 保护恢复之前的延迟时间（以毫秒为单位）。 默认值为 5000 毫秒。

#### 最大传输单元（MTU）

用户可以在此处设置 VPN 接口的最大传输单元 （MTU）。 推荐范围是 1500–1900.

#### 自动恢复 VPN 连接

如果启用此设置，AdGuard 的本地 VPN 将在因网络缺失、系留或低功耗模式而关闭后自动重新启用。

#### 数据包捕获（PCAP）

如果启用此设置，AdGuard 将在应用程序缓存目录中创建文件 `timestamp.pcap` （例如 1682599851461.pcap）。 该文件列出了通过 VPN 传输的所有网络数据包，可以使用 Wireshark 程序进行分析。

#### 将 Wi-Fi 网关接入 VPN 路由中

如果启用此设置，在使用 Wi-Fi 时，网关 IP 地址将添加到 VPN 路由中。

#### IPv4 地址

用户可以在此处输入将用于创建 TUN 接口的 IP 地址。 默认情况下，地址是 `172.18.11.218`。

#### 强制路由 LAN IPv4

如果启用此设置，AdGuard 将过滤所有 LAN 连接，包括本地 IPv4 网络流量，即使启用了 *路由所有 LAN IPv4 连接* 选项。

#### 路由所有 LAN IPv4 连接

如果启用此设置，AdGuard 将从简单网络过滤中排除局域网连接。 这对复杂的网络可能不起作用。 此设置仅适用于「*强制路由 LAN IPv4*」已禁用的情况。

#### IPv6 地址

用户可以在此处输入将用于创建 TUN 接口的 IP 地址。 默认情况下，地址是 `2001:db8:ad:0:ff::`。

### 其它

#### 检测 Samsung Pay

如果启用此设置，在使用 Samsung Pay 时将暂停 AdGuard 保护。 韩国用户需要此功能，因为启用 AdGuard 后，他们在使用 [Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) 时遇到了问题。
