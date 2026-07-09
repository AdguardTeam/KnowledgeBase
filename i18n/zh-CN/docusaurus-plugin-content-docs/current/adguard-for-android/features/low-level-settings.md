---
title: 低级设置
sidebar_position: 5
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

## 如何进入低级设置

:::caution

更改「低级设置」会引起 AdGuard 的性能问题，中断互联网连接，或危及用户的安全和隐私。 仅在您是经验丰富的用户并且知道自己在做什么，或者如果我们的客户支持团队要求您这样做时，才更改低级设置。

:::

要转到「低级设置」，请打开 AdGuard 应用并点击屏幕右下角的齿轮图标。 然后转到「常规」→「高级」→「低级设置」。

## 低级设置

For AdGuard for Android v4.x we’ve completely redesigned the low-level settings. 我们重新整理了设置列表，将它们按主题分组，并优化了设置描述。 我们还添加了输入验证和其他安全措施。

### DNS 保护功能

#### 后备上游

在配置的服务器不可用时，用户可以在此处指定要使用的后备 DNS 解析器。 可用选项如下：

- 「_自动 DNS_」：如果用户想要使用系统 DNS 或 AdGuard DNS，请选择此选项。
- 「_无_」：如果用户不想使用任何后备上游，请选择此选项。
- 「_自定义 DNS_」：选择此选项并输入无加密的 DNS 服务器 IPv4 或 IPv6 地址，每行一个。 这些地址将被用作上游。

#### 后备域名

在这里，用户可以列出将被重定向到后备上游（如果可用）的域名。 您可以输入多个域，每行一个。 您可以使用有限的通配符。

#### 检测搜索域名

如果启用此选项，AdGuard 将检测 DNS 搜索域名并自动将它们重定向到后备上游（如果可用）。

#### Bootstrap 上游

用于加密 DNS 上游的 Bootstrap DNS，例如 DoH、DoT 和 DoQ 服务器。 可用选项如下：

- 「_自动 DNS_」：如果用户想要使用系统 DNS 或 AdGuard DNS，请选择此选项。 默认使用此选项。
- 「_自定义 DNS_」：选择此选项并输入无加密的 DNS 服务器 IPv4 或 IPv6 地址，每行一个。 这些地址将被用作 Bootstrap 上游。

#### adblock 规则的拦截模式

在这里，可以根据 adblock 规则语法（例如 `||example.org^`）指定被 DNS 规则阻止的域名的响应类型。 可用选项如下：

- _REFUSED_：用 REFUSED 响应。
- _NXDOMAIN_：用 NXDOMAIN 响应。
- _自定义 IP 地址_：选择此项以用自定义 IP 地址响应。 用户需要为被拦截的 A 请求输入一个 IPv4 地址，并为被拦截的 AAAA 请求输入一个 IPv6 地址。

#### host 规则的拦截模式

您可以在此处根据主机规则语法指定 DNS 规则阻止的域名响应类型（例如, `<ip> <domain> 0.0.0.0 example.com`）。

- _REFUSED_：用 REFUSED 响应。
- _NXDOMAIN_：用 NXDOMAIN 响应。
- _自定义 IP 地址_：选择此项以用自定义 IP 地址响应。 用户需要为被拦截的 A 请求输入一个 IPv4 地址，并为被拦截的 AAAA 请求输入一个 IPv6 地址。

#### DNS 请求超时

用户可以指定 AdGuard 等待每个 DNS 请求的超时时间（以毫秒为单位），然后再将其重定向到后备 DNS 解析器。 如果数值无效或为空，要使用的数值为 5000 毫秒。
如果您有多个上游，则后备 DNS 仅在每个上游的超时结束后使用。

#### 屏蔽的 TTL 应答

在这里用户可以设置被拦截域名记录的生存时间 (TTL)。 默认值为 3600 秒。

#### DNS 缓存大小

您可在此处指定缓存响应的最大数量。 默认值为 1000。

#### ECH 拦截

如果启用，AdGuard 将从 DNS 响应中去除 Encrypted Client Hello（ECH）参数。

#### 尝试使用 HTTP/3 作为 DNS-over-HTTPS 上游

如果启用，AdGuard 将使用 HTTP/3 来加速 DNS-over-HTTPS 上游的 DNS 查询解析。 否则，AdGuard 将恢复其默认行为，并使用 HTTP/2 发送 DNS-over-HTTPS 的所有 DNS 请求。

#### SERVFAIL 故障响应

如果启用，AdGuard 将在所有上游（包括后备）未能回复时向客户端发送一个 SERVFAIL 响应。 如果停用，软件将不会向客户端发送任何响应。

#### 对所有域名使用后备

如果启用，AdGuard 将为所有域名使用后备上游，包括非后备的。 否则，只有在启用相应选项的情况下，后备上游才会用于后备域和搜索域。

#### 验证 DNS 上游

如果启用，AdGuard 将在添加或更新自定义 DNS 服务器之前测试 DNS 上游。

#### 过滤安全 DNS

如果启用，AdGuard 将在无加密的 DNS 请求之外过滤加密的 DNS 请求。 加密的 DNS 流量主要来自 Chrome 和其他具有安全 DNS 设置的浏览器。

此设置有两种模式：

- **即时过滤**。 在此模式下，AdGuard 将过滤 DNS-over-HTTPS 流量，而不将其重定向到本地 DNS 代理。 软件将使用浏览器设置中指定的 DNS 服务器。

- **重定向到 DNS 代理**。 在此模式下，AdGuard 将把 DNS-over-HTTPS 请求重定向到本地 DNS 代理进行过滤。 软件将使用在 AdGuard 应用程序的 DNS 设置中选择的 DNS 服务器。

### 过滤

#### 捕获 HAR

如果启用，AdGuard 将以 HAR 1.2 格式将所有过滤的 HTTP 请求记录到应用缓存目录中的 “har” 子目录中。 这个文件可以用 Fiddler 工具分析。

此设置可能会减慢您的设备。 仅将其用于调试目的。

### HTTPS 过滤

#### Encrypted Client Hello

如果启用，AdGuard 将在必要时加密 ClientHellos。 使用此功能需要启用 HTTPS 过滤。 本功能使用本地 DNS 代理查找域名的 ECH 配置。 如果找到，将对 ClientHello 数据包进行加密。 请确保使用带有此功能的加密 DNS 服务器。

**关于 ClientHellos 和 ECH**：每一个加密的互联网连接都有一个未加密的部分。 就是发送的第一个数据包，包含用户要连接的服务器名称。 Encrypted Client Hello 技术旨在通过加密此数据包来解决此问题。

#### OCSP 检查

如果启用，AdGuard 将在连接到网站之前自动检查 SSL 证书的撤销状态。 使用此功能需要启用 HTTPS 过滤。

如果在规定的超时时间内完成检查，AdGuard 将在证书有效时允许连接，或者在证书被撤销时立即阻止连接。

如果验证时间过长，AdGuard 将允许连接，同时继续在后台检查证书状态。 如果证书被撤销，当前和将来该域名的连接将被阻止。

#### 过滤 HTTP/3

如果启用，AdGuard 除过滤其他请求类型外，还会过滤通过 HTTP/3 发送的请求。 使用此功能需要启用 HTTPS 过滤。

**关于 HTTP/3**：这是基于 QUIC 的 HTTP 协议的最新版本。

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### 出站代理

#### 显示「过滤 DNS 请求」设置

启用此功能后，「_过滤 DNS 请求_」开关将显示在「_添加代理服务器_」对话框中。 要访问对话框，请打开「**设置**」，然后转到「**过滤**」→「**网络**」→ 「_代理_\*」→「**代理服务器**」，并点击「**+ 添加代理服务器**」。 打开该开关可启用通过指定出站代理的 DNS 请求过滤。

### 防护

#### 端口范围

此设置允许用户指定应过滤的端口范围。 请输入端口范围，每行一个范围。 使用 `..` 指定范围。 例如，`80..5221`。

#### 记录已删除的 HTML 事件

如果启用，AdGuard 将在「_近期活动_」中写入关于已拦截 HTML 元素的信息。 要访问日志，请转到「**统计数字**」→「**近期活动**」。

#### 小脚本调试

如果启用此设置，应用将会在浏览器控制台中显示调试信息。 在此模式下，Scriptlets 中的调试被激活，浏览器会记录应用 Scriptlet 规则时发生的事件。

#### 排除的应用

此设置允许用户列出需要从 AdGuard 保护中排除的包和 UID。 输入包名称或 UID，每行一个。 您可以使用 `//` 进行注释。

#### QUIC 旁路包

用户可以在此处指定 AdGuard 应绕过 QUIC 流量的包名称。 输入包名称，每行一个。 您可以使用 `//` 进行注释。

#### 网络更改时重新配置自动代理

如果启用，当设备连接到另一个网络时，AdGuard 保护将重新启动，重新配置自动代理参数。 仅当「_路由模式_」设置为「_自动代理_」时，此设置才适用。

#### IPv6 过滤

如果启用，AdGuard 将在 IPv6 网络接口可用时过滤 IPv6 网络。

#### 无需进行过滤的 IPv4 范围

您可以在此列出需要从过滤中排除的 IPv4 范围。 每行输入一个 IP 范围。 您可以使用 `//` 进行注释。

#### 无需进行过滤的 IPv6 范围

用户可以在此列出需要从过滤中排除的 IPv6 范围。 每行输入一个 IP 范围。 您可以使用 `//` 进行注释。

#### 出站套接字的 TCP 保活

如果启用此设置，AdGuard 将在指定时间间隔后发送保活探测，以确保 TCP 连接仍然处于活动状态。 在尝试从服务器获取响应失败达到规定的次数后，系统会自动关闭 TCP 连接。

此设置允许您指定：

- **空闲时间**，以秒为单位，在发送 TCP 存活探测到外发套接字之前。 默认值为 0。 如果您遇到 NAT 问题，请将其设置为 20。
- 对无响应节点**保持存活探测的时间间隔**。 默认值为 0 秒。

### 本地 VPN 设置

#### 撤销 VPN 的恢复延迟

在这里，用户可以设置在 AdGuard 被第三方 VPN 应用程序撤销或删除 VPN 配置文件后尝试恢复 VPN 保护之前的延迟时间（以毫秒为单位）。 默认值为 5000 毫秒。

#### 为撤销的 VPN 恢复重新安排延迟

用户可以在此处设置 AdGuard 在被第三方 VPN 应用程序撤销或删除 VPN 配置文件后重新安排 VPN 保护恢复之前的延迟时间（以毫秒为单位）。 默认值为 5000 毫秒。

#### MTU

用户可以在此处设置 VPN 接口的最大传输单元 （MTU）。 这是您本地 VPN 中使用的数据包的最大大小。 推荐范围是 1500–1900.

#### 数据包捕获（PCAP）

此设置启用 TUN 接口的日志记录。 启用时，AdGuard 会在应用程序缓存目录中创建一个文件 `timestamp.pcap`，例如 1682599851461.pcap。 该文件列出通过 VPN 传输的所有网络数据包，可以使用 Wireshark 工具进行分析。

#### 将 Wi-Fi 网关接入 VPN 路由中

如果启用，在设备使用 Wi-Fi 时，网关 IP 地址将添加到 VPN 路由中。

#### IPv4 地址

用户可以在此处指定将用于创建 TUN 界面的 IP 地址。 默认值为 `172.18.11.218`。

#### 强制路由 LAN IPv4

如果启用此设置，AdGuard 将过滤所有 LAN 连接，包括本地 IPv4 网络流量，即使启用了「_路由所有 LAN IPv4 连接_」选项。

#### 路由所有 LAN IPv4 连接

如果启用此设置，AdGuard 将从简单网络过滤中排除局域网连接。 这对复杂的网络可能不起作用。 此设置仅适用于「_强制路由 LAN IPv4_」已停用的情况。

#### IPv6 地址

用户可以在此处输入将用于创建 TUN 接口的 IP 地址。 默认值为 `2001:db8:ad:0:ff::`。

### 其它

#### 在主屏幕上显示开发者工具

如果启用，AdGuard 将在应用主屏幕的右上角显示「**开发者工具**」图标。

**开发者工具**是 Android 版 AdGuard v4.3 及更高版本中的一个专用部分，旨在快速导航和在功能之间切换。 这使用户能够快速启用或停用自定义过滤器、访问日志记录、启用各种日志等。

#### 检测 Samsung Pay

如果启用，在打开 Samsung Pay 应用时将暂停 AdGuard 保护。 韩国用户需要此功能，因为在启用 AdGuard 时，他们会遇到[与 Samsung Pay 有关的问题](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea)。
