---
title: 高级（低级）设置指南
sidebar_position: 7
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

以前称为低级设置的「高级设置」主要包含超出普通用户能力的选项，并且在日常使用中不使用。 AdGuard Windows 版的设计允许用户不改变任何高级设置，而有效地使用软件。不过，高级设置在一些情况下或解决一个不常见的问题时为用户提供一些额外的功能。

:::caution

盲目地更改「*高级设置*」可能会导致 AdGuard 的运作问题，也会断开互联网连接或侵害安全和隐私。 只有用户确定自己在做什么或我们的支持团队要求这样做，用户才应该更改这些设置。

:::

## 如何转到高级设置

要进入「*高级设置*」，请在主窗口单击*「设置」→「常规设置」*，然后向下滚动到「*高级设置*」。 或者在托盘菜单中选择*「高级」→「高级设置…」*。

## 高级设置

一旦用户打开高级设置，会看到以下选项:

### 拦截 TCP 快速打开

如果启用，AdGuard 将阻止 Edge 浏览器中的 TCP 快速打开。 要应用设置，请重新启动浏览器。

### Use Encrypted Client Hello

每一个加密的互联网连接都有一个未加密的部分， 就是发送的第一个数据包，包含用户要连接的服务器名称。 Encrypted ClientHello（ECH）的技术能够解决该问题，成功加密最后一位未加密的信息。 To benefit from it, enable the *Use Encrypted Client Hello* option. 本功能使用本地 DNS 代理查找域名的 ECH 配置。 If it is found, Client Hello packet will be encrypted.

### 检查网站的证书透明度

基于 Chrome 证书透明度（英文：Chrome Certificate Transparency，简称：Chrome CT）政策验证域名内所有证书的真实性。 如果证书不符合 Chrome 证实透明化政策，AdGuard 将不过滤该网站。 而 Chrome 则会屏蔽它。

### 启用 SSL/TLS 证书撤销检查

启用后，此选项将运行异步 OCSP 检查，以检查网站的 SSL/TLS 证书是否被撤销。

如果在最短超时时间内完成 OCSP 检查，AdGuard 会立即应用检查结果；如果证书被撤销，则阻断连接，如果证书有效，则重新建立连接。

如果验证时间过长，AdGuard 将建立连接并在后台继续检查。 如果证书被撤销，当前和将来该域名的连接将被阻止。

### 在设置中显示 AdGuard VPN

启用此选项可让用户在设置中显示 AdGuard VPN 选项卡，以便轻松打开应用程序和产品的网站。

### 过滤时按完整路径排除应用

如果用户不想 AdGuard 过滤某款特定的应用程序流量，请指定应用程序的完整路径。这些应用程序将被排除在过滤之外。 请用分号分隔不同的路径。

### 启用 AdGuard 弹窗通知

启用此功能查看 AdGuard 弹出式通知。 通知不经常出现，只包含重要的信息。 用户还可以使用托盘菜单来召回最后的弹出通知。

### 自动截取过滤器订阅 URL

如果用户想让 AdGuard 自动拦截过滤器订阅 URL（如 `abp:subscribe` 等）并打开自定义过滤器安装对话框，请启用此功能。

### 过滤 HTTP/3

如果启用此设置，AdGuard 除过滤其他请求类型外，还会过滤通过 HTTP/3 发送的请求。

### 使用重定向驱动模式

如果启用该选项，AdGuard 将拦截所有流量，并将其重定向到本地代理服务器进行进一步过滤。

否则，AdGuard 将对所有流量进行实时过滤，而不进行重定向。 在这种情况下，系统将认为 AdGuard 是连接到互联网的唯一一款应用程序（其他应用程序的流量通过 AdGuard 路由）。 缺点是本功能会降低系统防火墙的有效性。 好处是这种方法工作起来快了一点。

### 随系统启动时显示主窗口

启用此选项可在加载系统后打开 AdGuard 主窗口。 Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*.

### 在系统启动时启用过滤

从 v7.12 版本开始，默认情况下，如果「AdGuard 随系统启动」选项被禁用，AdGuard 服务不会在操作系统启动后开始过滤流量。 这意味着，AdGuard 服务是以“待机”模式启动的。 启用此选项，使 AdGuard 过滤流量，即使应用程序没有启动。

:::note

在 v7.12 之前的版本，AdGuard 服务默认是以过滤模式启动的（即使是在「*AdGuard 随系统启动运行*」被禁用的情况下）。 如您满足旧版本的行为，则可开启此项。

:::

### 过滤 localhost 连接

如果用户希望 AdGuard 过滤环回（Loopback）连接，请选中复选框。 如果用户已安装 AdGuard VPN，此选项将始终处于开启状态，否则 AdGuard VPN 将无法工作。

### 从过滤中排除特定 IP 范围

如果用户不希望 AdGuard 过滤特定的子网，请启用此功能，并在下面**「无需进行过滤的 IP 范围」**指定 CIDR 表记中的 IP 范围（例如 98.51.100.14/24）。

### 启用 HAR 写入

此选项**仅用于调试目的**。 Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. 这个文件可以用 Fiddler 应用程序分析。 注意，这可能会显著降低网页加载速度。

### 在普通的 HTTP 请求中添加额外的空间

在 HTTP 方法和 URL 之间添加额外的空格，并在“主机”（Host）字段后删除空格以避免深度包检测。 例如，请求

`GET /foo/bar/ HTTP/1.1
Host: example.org`

将转换为

`GET /foo/bar/ HTTP/1.1
Host: example.org`

此选项仅在启用隐身模式的「*保护免受 DPI 影响*」选项时被应用。

### 调整初始 TLS 数据包的碎片大小

指定 TCP 数据包碎片的大小，避免深度包检测。 此选项仅影响安全（HTTPS）流量。

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

有效值：1–1500。 如果指定无效大小，将使用系统选择的数值。 此选项仅在启用隐身模式的「*保护免受 DPI 影响*」选项时被应用。

### 普通 HTTP 请求片段大小

调整 HTTP 请求片段大小。 此选项仅影响普通 HTTP 流量。 开启该选项后，AdGuard 会将初始数据包分成两部分：第一部分是指定的长度，第二部分是指定的长度，直到原始数据包的长度。

有效值：1–1500。 如果指定无效大小，将使用系统选择的数值。 此选项仅在启用隐身模式的「*保护免受 DPI 影响*」选项时被应用。

### 显示 QUIC

允许在过滤日志中显示 QUIC 协议记录。 仅适用于被阻止的请求。

### 启用 TCP 保活（keepalive）

定期在 IDLE 连接上发送 TCP 数据包，以确保它是保活的，并更新 NAT 超时。 此选项可用于绕过某些 ISP（互联网服务提供商）使用的严格的网络地址转换（NAT）设置。

### TCP 保活间隔

用户可以指定在发送 keepalive 探测之前的空闲时间段（以秒为单位）。 如指定为 0，则使用系统选择的数值。

:::note

此设置仅工作在「*启用 TCP 保活*」被开启的情况下。

:::

### TCP 保活超时

用户可以指定时间（以秒为单位），然后向没有响应的对等发送另一个 keepalive（保活）探测。 如果指定 0，使用系统选择的数值。

:::note

此设置仅工作在「*启用 TCP 保活*」被开启的情况下。

:::

### 拦截 Java

一些网站和 Web 服务仍然支持 Java 插件。 作为 Java 插件基础的 API 存在严重的安全漏洞。 出于安全考虑，可以禁用此类插件。 然而，即使用户决定使用*「拦截 Java」*选项，JavaScript 仍然会被启用。

### DNS 服务器的超时期限

用户可以指定 AdGuard 在使用后备服务器之前，等待选定 DNS 服务器响应的时间（以毫秒为单位）。 如果数值无效或为空，要使用的数值为 5000。

### 将 HTTP/3 用于 DNS-over-HTTPS

如果所选上游支持此协议，为 DNS-over-HTTPS 上游启用 HTTP/3 以加速连接。 这意味着，启用该选项并不能保证所有 DNS 请求都将通过 HTTP/3 发送。

### 使用备用 DNS 上游

如果所有 DNS 到所选上游请求失败，则正常查询将重新定向到后备上游。

### 并行查询 DNS 上游

所有的上游都是并行查询的。第一个响应会被返回。 由于 DNS 查询以并行方式处理，因此启用此功能可以提高上网速度。

### 始终响应故障的 DNS 查询

如果地址解析在每个转发的上游以及后备域名上失败，对 DNS 请求的响应将是 `SERVFAIL`。

### 启用安全 DNS 请求的过滤

除普通 DNS 请求外，AdGuard 将所用安全 DNS 请求都重新定向到本地 DNS 代理。

### host 规则的拦截模式

用户可以选择 AdGuard 将根据 [hosts 规则的语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax)对被 DNS 规则阻止的域名作出反应的方式。

- 将「REFUSED」的错误作出回应
- 将「NxDomain」的错误作出回应
- 使用自定义 IP 地址作出回应

### adblock 规则的拦截模式

用户可以选择 AdGuard 将根据 [ adblock 规则的语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax)对被 DNS 规则阻止的域名作出反应的方式。

- 将「REFUSED」的错误作出回应
- 将「NxDomain」的错误作出回应
- 使用自定义 IP 地址作出回应

### 自定义 IPv4 地址

如果在 host 规则的「拦截模式」或 adblock 规则的「拦截模式」中选择「自定义 IP 地址」，所有被阻止的「A」请求将返回该 IP 地址. 如果没有指定，AdGuard 将回复默认的「REFUSED」错误。

### 自定义 IPv6 地址

如果在 host 规则的「拦截模式」或 adblock 规则的「拦截模式」中选择「自定义 IP 地址」，所有被阻止的「AAAA」请求将返回该 IP 地址. 如果没有指定，AdGuard 将回复默认的「REFUSED」错误。

### 后备（Fallback）服务器

用户可以指定一个后备 DNS 服务器，如果主服务器未能在下一节指定的超时期限内做出响应，DNS 请求将被重新路由到后备服务器。 有三个选项可供选择：

- 不要使用后备服务器；
- 使用系统默认的服务器；
- 使用自定义服务器。

### 拦截 ECH

如果启用，AdGuard 将从响应中去除 Encrypted Client Hello 参数。

### 自定义后备服务器的列表

如果用户希望 AdGuard 使用自定义后备服务器，请在此部分列出它们，每行一个。

### 自定义 bootstrap 地址的列表

Bootstrap 是一个中间 DNS 服务器，用于获取用户在「*DNS 保护*」中选择的安全 DNS 服务器的 IP 地址。 当使用用字母表示服务器地址的协议（例如 DNS-over-TLS）时，需要这样的“中间立场”。 在这种情况下，bootstrap 充当翻译器，将字母转换为系统可以理解的数字。

默认情况下，使用系统 DNS 解析器，初始 bootstrap 请求通过端口53发出。 如果该方式不适合，请按从上到下的顺序列出将用于确定加密 DNS 服务器地址的 DNS 服务器的 IP 地址。 指定的 IP 地址将按列出的顺序应用。 如果用户指定的地址无效，或者没有指定地址，系统 IP 将被使用。

### DNS 排除项

所有对这里列出的域名的 DNS 请求将被重定向到系统默认的 DNS 服务器，而不是在应用程序设置中指定的 DNS 服务器。 此外，DNS 拦截规则将不会应用于此类请求。

### 从 DNS 过滤中排除指定的 Wi-Fi 网络名称（SSID）

DNS 保护将不包括列在本节中的 Wi-Fi 网络。 每行指定一个 Wi-Fi 网络名称（SSID）。 如果一个特定的 Wi-Fi 网络已经被 AdGuard Home 或其他 DNS 保护系统保护，此功能很实用。 在这种情况下，再次过滤 DNS 请求是多余的。
