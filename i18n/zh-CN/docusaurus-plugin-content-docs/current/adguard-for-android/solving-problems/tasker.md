---
title: Android 版 AdGuard 自动化方式
sidebar_position: 3
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

许多人选择 Android，是因为他们喜欢自定义设置并希望全面控制他们的设备。 如有些 AdGuard 用户对其默认行为不满意，也是完全正常的。 比方说，您要在某个应用启动时停止保护，然后在此应用关闭时再次重新启动它。 这是 Tasker 应用的工作。

## AdGuard 界面

目前有很多任务管理应用程序，例如 [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess)、[AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) 等等。 AdGuard 提供一个界面，允许这些应用程序设置各种自动化规则。

![自动化 *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

有了这个界面，任何应用程序都可以发送一条特殊 intent 消息（中文：“意图”），其中包含操作名称和一些必要的附加数据。 AdGuard 将查看 intent 消息并执行所需的操作。

### 安全问题

让一些随机应用程序管理 AdGuard 的工作是否危险？ 是的，这就是密码会跟 intent 消息一起发送的原因。 此密码将由 AdGuard 自动生成，但用户当然可以随时更改它。

### 可用操作

以下是 AdGuard 可以理解的包含在 intent 消息中的操作：

`start` 开始保护，不需要额外的数据；

`stop` 禁用保护，不需要额外的数据；

`pause` 暂停保护。 这与 `stop` 的区别在于，当用户点击暂停保护时，会出现重新启动保护的通知。 无需额外数据；

`update` 检查可用的过滤器和应用程序更新，不需要额外的数据；

-----

`dns_filtering` 打开或关闭 DNS 过滤。 需要额外的标志：

`enable:true` 或 `enable:false` 相应地启用或禁用 DNS 过滤。

`fake_dns` allows resolving DNS requests on the specified proxy server. This requires an extra flag:

`enable:true` or `enable:false` enables or disables the *Use FakeDNS* setting, respectively.

:::note

When the *Use FakeDNS* setting is enabled, *DNS Protection* will be automatically disabled. DNS requests won't be filtered locally.

:::

-----

`dns_server` 在 DNS 服务器之间切换时，需要包含额外的数据：

 `server:adguard dns` 切换到 AdGuard DNS 服务器；

:::note

支持的提供商名称完整列表可在我们的[已知 DNS 提供商列表](https://adguard-dns.io/kb/general/dns-providers/)中查看。

:::

 `server:custom` 切换到之前添加的名为 `custom` 的服务器；

 `server:tls://dns.adguard.com` 如果之前添加的服务器和提供商不包含具有相同地址的服务器，则创建一个新服务器并切换到该服务器。 否则，它会切换到相应的服务器。 You can add server addresses as IP ( regular DNS), `sdns://…` (DNSCrypt or DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) or `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` 创建一个用逗号分隔地址的服务器并切换到它。 通过`server:1.1.1.1, tls://1`.1.1 添加服务器时，先前添加的服务器将被移除。

 `server:system` 将 DNS 设置重置为默认的系统 DNS 服务器。

 -----

`proxy_state` 启用/禁用出站代理。 需要额外的标志：

`enable:true` 或 `enable:false` 相应地激活或停用出站代理。

-----

`proxy_default` 将之前添加的代理列表中的代理设置为默认代理，如果之前未添加服务器，则创建一个新的代理。

用户要指定其他数据：

`server:[name]` 其中`[name]` 是列表中的出站代理名称。

或者也可以手动配置服务器参数：

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`

`proxy_remove` 从先前添加的代理服务器列表中删除该代理服务器。

`server:[name]` 其中 `[name]` 是列表中的出站代理名称。

用户也可以手动配置移除参数：

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`

- **必填参数**：

`[type]` 代理服务器类型：

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]`，出站代理域名或 IP 地址；

`[port]`，出站代理端口（1 到 65535 之间的整数）；

- **可选参数**：

 `[login and password]` 仅在代理需要的情况下被使用。 设置 **SOCKS4** 时，该数据将被忽略；

 `[udp]` 仅适用于 **SOCKS5** 服务器类型并包含选项**通过 SOCKS5 的 UDP**。 有必要设置 **true 或 false** 值；

 `[trust]` 仅适用于 **HTTPS_CONNECT** 服务器类型，包括选项 **Trust any certificates**。 有必要设置 **true 或 false** 值。

:::note 示例

`按名称设置`：server:MyServer

`manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**别忘记把密码作为附加项，并提及软件包名称和类别。 您需要为每个 intent 消息都这样做。**

Extra: `password:*******`

Package: `com.adguard.android`

Class: `com.adguard.android.receiver.AutomationReceiver`

:::note

在 v4.0 之前，该类被称为 `com.adguard.android.receivers.AutomationReceiver` 但是后来我们将其名称更改为 `com.adguard.android.receiver.AutomationReceiver`。 如果用户使用过该功能，请留意并使用新的名称。

:::

### 在没有通知的情况下执行

如果不想接收通知，请在其中一个额外字段中添加 `quiet: true`。

### 示例

![自动化 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
