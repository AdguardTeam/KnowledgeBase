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

### 使用 Encrypted ClientHello

每一个加密的互联网连接都有一个未加密的部分， 就是发送的第一个数据包，包含用户要连接的服务器名称。 Encrypted ClientHello（ECH）的技术能够解决该问题，成功加密最后一位未加密的信息。 要使用该功能，请启用「*使用 Encrypted ClientHello*」选项。 本功能使用本地 DNS 代理查找域名的 ECH 配置。 如果找到，将对 Client Hello 数据包进行加密。

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

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### 使用重定向驱动模式

如果启用该选项，AdGuard 将拦截所有流量，并将其重定向到本地代理服务器进行进一步过滤。

否则，AdGuard 将对所有流量进行实时过滤，而不进行重定向。 在这种情况下，系统将认为 AdGuard 是连接到互联网的唯一一款应用程序（其他应用程序的流量通过 AdGuard 路由）。 缺点是本功能会降低系统防火墙的有效性。 好处是这种方法工作起来快了一点。

### 随系统启动时显示主窗口

启用此选项可在加载系统后打开 AdGuard 主窗口。 该设置位于*设置 → 常规*，不会影响实际过滤服务是否启动。

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

此选项**仅用于调试目的**。 勾选复选框将使 AdGuard 创建一个以 HAR 1.2 格式包含有关所有经过过滤的 HTTP 请求信息的文件。 这个文件可以用 Fiddler 应用程序分析。 注意，这可能会显著降低网页加载速度。

### 在普通的 HTTP 请求中添加额外的空间

在 HTTP 方法和 URL 之间添加额外的空格，并在“主机”（Host）字段后删除空格以避免深度包检测。 例如，请求

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 调整初始 TLS 数据包的碎片大小

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. 如果指定无效大小，将使用系统选择的数值。 This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 普通 HTTP 请求片段大小

调整 HTTP 请求片段大小。 This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

有效值：1–1500。 如果指定无效大小，将使用系统选择的数值。 This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 显示 QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### 启用 TCP 保活（keepalive）

Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. 如果指定无效大小，将使用系统选择的数值。

### TCP 保活间隔

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP 保活超时

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### 拦截 Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### DNS 服务器的超时期限

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### 将 HTTP/3 用于 DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### 使用备用 DNS 上游

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### 并行查询 DNS 上游

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### 始终响应故障的 DNS 查询

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### 启用安全 DNS 请求的过滤

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### host 规则的拦截模式

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- 将「REFUSED」的错误作出回应
- 将「NxDomain」的错误作出回应
- 使用自定义 IP 地址作出回应

### adblock 规则的拦截模式

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- 将「REFUSED」的错误作出回应
- 将「NxDomain」的错误作出回应
- 使用自定义 IP 地址作出回应

### 自定义 IPv4 地址

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### 自定义 IPv6 地址

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### 后备（Fallback）服务器

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- 不要使用后备服务器；
- 使用系统默认的服务器；
- 使用自定义服务器。

### 拦截 ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### 自定义后备服务器的列表

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### 自定义 bootstrap 地址的列表

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS 排除项

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### 从 DNS 过滤中排除指定的 Wi-Fi 网络名称（SSID）

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
