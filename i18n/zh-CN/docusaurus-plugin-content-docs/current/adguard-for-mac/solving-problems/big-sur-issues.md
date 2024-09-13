---
title: Compatibility issues with different macOS versions
sidebar_position: 4
---

:::info

本文介绍 Mac 版 AdGuard。这是一款多功能广告拦截程序，可在系统级别保护设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 存在的问题

Apple 公司每年都会发布 macOS 的更新，推出创新解决方案并添加新的实用功能。 不过，有些改进，包括网络扩展 API（Big Sur）或 iCloud 专用代理（Monterey），给许多应用程序带来一些问题，AdGuard 也不例外。 在本文中，我们将介绍每个 macOS 版本特有的已知问题，以及解决这些问题的方式。

### Monterey 12：存在的问题

Apple 公司尚未解决这些问题，或者只解决了部分问题。

#### 与 iCloud 专用代理兼容

目前，AdGuard 和 iCloud 专用代理不能同时工作。 AdGuard 无法阻止广告，因为 iCloud 专用代理会在 AdGuard 过滤网络连接之前对流量进行加密。 当 iCloud 专用代理处于活动状态时，应用就无法进行过滤（包括本地过滤）。 因此，AdGuard 无法在 Safari 中过滤流量或执行 DNS 过滤。 这就是 AdGuard 默认使用「默认路由」功能，禁用 iCloud 专用代理的原因。

要深入了解这一问题，请阅读[本文](../icloud-private-relay)。

**建议的解决方案**

我们建议将 AdGuard 与更传统的 VPN 服务（如 [AdGuard VPN](https://adguard-vpn.com/)）一起使用。

**替代解决方案**

用户可以禁用 AdGuard，防止它使用「默认路由」功能。 前往「高级设置」→「`network.extension.monterey.force.split.tunnel`」进行设置。 请注意，启用此设置会导致上述问题。

![高级设置指南 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### 与保护邮件活动（Protect Mail Activity）的兼容性

Apple 邮件应用现于下载邮件图像时使用代理以隐藏用户的 IP 地址。 但如有启动的 VPN 连接，则它无法工作。 因其视 AdGuard 为 VPN，所以它不会自动预载图像。

要深入了解这一问题，请阅读[本文](../protect-mail-activity)。

**建议的解决方案**

此时，我们建议使用更传统的 VPN 服务，如 [AdGuard VPN](https://adguard-vpn.com/)，而不是较新的 Apple 隐私功能。

### Monterey 12、Big Sur 11.6 及更高版本：存在的问题

Apple 公司尚未解决这些问题，或者只解决了部分问题。

#### 与 Cisco AnyConnect 兼容

在「*网络扩展*」模式下，AdGuard 无法与 Cisco AnyConnect 一起工作。 用户必须将 AdGuard 切换到「*自动代理*」模式。 为此，请按照[以下说明](#automatic-proxy)执行操作。

#### 与 Flutter 兼容

这个问题在 2021 年 6 月发布的 Flutter 2.2 中得到了解决。 但要修复 Flutter 开发的应用程序，用户需要等待更新。

如果在 Monterey 或 Big Sur 上使用「网络扩展」模式下的 Flutter 和 AdGuard（或任何其他“透明代理”类型的应用程序），就会遇到问题：项目无法打开，Flutter 也将无法正常运行。 我们已经向 Apple 公司报告了这个错误。 同时，用户可以使用这些临时解决方案：

1. 在「[自动代理](#automatic-proxy)」模式下使用 AdGuard。

1. 禁用 SIP 并将 AdGuard 切换到内核扩展模式，如[此处](#kernel-extension)所述。

#### 使用旧版 API 的 VPN 应用程序

尽管 AdGuard 在系统设置中显示为 VPN，但与其他基于 VPN 的应用程序一起使用时应该不会引起任何冲突。 但是，如果使用的是在 App Store 以外下载的基于 VPN 的应用程序，有可能是具有旧 VPN API 的应用，因此需要将其排除在过滤范围之外：

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. 单击「*应用程序*」按钮。
1. 找到要排除的应用程序，取消选中旁边的复选框。

![过滤应用程序](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## 已修复的问题

Apple 公司现已修复了以下问题，但在旧版本的 macOS Big Sur 中用户还会遇到一些问题。

### 与 Little Snitch 5 兼容

目前，AdGuard 的「网络扩展」模式无法与 [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html) 兼容。 当这两个程序都在运行时，有可能会遇到各种应用程序的行为问题，即使它们没有被 AdGuard 过滤。 这个问题是由 Big Sur 中的一个错误造成的，我们已经向 Apple 公司通报这一情况。 这让我们相信，这个问题会在下一次更新中得到解决。

但是，禁用 Little Snitch 中的连接监控无法解决问题，因为该行为无法从系统内存中卸载 Little Snitch 扩展。 我们建议，至少在 Apple 修复该错误之前，切换到「[**自动代理**](#automatic-proxy)」过滤模式。

### 与本地代理的兼容性

:::note

现在，AdGuard 可以顺利过滤本地代理（在大多数情况下）。 如果用户在操作系统版本 11.1+ 或 Big Sur 11.0 中遇到任何问题，请从系统设置中移除本地代理，并按照以下说明在 AdGuard 中配置上游代理。

:::

在 Big Sur 的 AdGuard for Mac 中配置上游代理：

1. 打开 AdGuard 设置的*「首选项」→「网络」→「出站代理」*。
2. 根据代理类型选择 HTTP、HTTPS、SOCKS4 或 SOCKS5。
3. 填写以下字段：
    - `host` 是代理服务器的 IP 地址、
    - `port` 是代理服务器希望使用的端口号、
    - `user` 和 `password` 是代理的相应用户名和密码（如需要）。 如果不需要，忽略其中一个或两个。

如果您遇到任何问题，请通过 support@adguard.com 联系我们的技术支持。

#### 示例 1：配置上游 Shadowsocks 代理

下面举例说明如何为 [Shadowsocks](https://shadowsocks.org) 配置上游代理。

首先，用户需要一个能正常工作的代理服务器。 最有可能的是，您要设置它，可以使用这样一个 JSON 文件（`server` 和 `password` 值在此随机选择）：

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

请参阅 [Shadowsocks 网站](https://shadowsocks.org/guide/what-is-shadowsocks.html) 了解更多信息。

:::

然后，用户要在 Mac 上安装 Shadowsocks 客户端。 请确保在设置中选择「手动模式」或「自动模式」！ 如果您选择「全局模式」（或 11.1 之前 Big Sur 版本中的「自动模式」），配置将不起作用。

![在设置中选择手动模式或自动模式 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

现在进入*AdGuard 菜单 →「高级」→「高级设置」*，并将 `upstream.proxy` 设置的*数值*设置为 `socks5://localhost:1080`。 请注意，需要使用 JSON 文件中的 “local_port” 值。

由于 Shadowsocks 使用 SOCKS5，因此还需要将 AdGuard 高级设置中的 `upstream.proxy.socks5udp` 值设置为 `true`，以便 AdGuard 将 UDP 流量路由到代理服务器。

#### 示例 2：配置上游 Surge 代理

在 Big Sur v11.1+ 中，AdGuard 和 Surge 代理之间没有已知的冲突。 如果用户使用的是旧版本的 Big Sur（11.1 之前的版本），请检查右下角的「**系统代理**」是否已禁用。 否则，Surge 无法与 AdGuard 一起使用。 另一方面，「**增强模式**」可以在任何 Big Sur 版本中启用而不会引起冲突。

![配置上游 Surge 代理 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

请转到*「首选项」→「网络」→「出站代理」*并填写字段。 SOCKS5 代理类型：

- `host`：localhost
- `port`：6153 HTTP 代理类型：
- `host`：localhost
- `port`：6152

## 使用网络扩展的替代方案

我们无法预见到 Big Sur 或 Monterey 可能出现的所有问题，因为有无数不同的硬件/软件和设置配置。 如果您遇到任何兼容性问题，联系我们的支持团队前，请尝试使用以下解决方案。

### 使用「自动代理」过滤模式 {#automatic-proxy}

如果用户在 Big Sur 或 Monterey 上遇到的问题无法通过上述任何方法解决，您可以尝试将 AdGuard 切换到「*自动代理*」模式。

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. 单击「*选择模式...*」按钮。
1. 选择「*自动代理*」。

![将 AdGuard 切换到自动代理模式](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

现在，AdGuard 自动在 Mac 的网络设置中添加一个 **.pac** 文件。这样系统就会将 AdGuard 视为代理，并尝试通过 AdGuard 发送所有流量。

:::note

有些应用程序可能会忽略这一系统设置，其流量将不会被过滤。

:::

### 在 Big Sur 和 Monterey 中启用内核扩展 {#kernel-extension}

默认情况下，Big Sur 和 Monterey 禁用了旧内核扩展框架，因此 AdGuard 使用网络扩展框架。 这可能会导致兼容性问题，但要重新启用内核扩展，必须首先禁用系统完整性保护（英语：System Integrity Protection，英语缩写：SIP）。 要禁用 SIP，请按此说明操作：

1. Click the *Apple symbol* in the Menu bar.
1. 点击「*重启…*」。
1. 按住 *Command-R* 重启进入恢复模式。
1. 单击「*实用程序*」。
1. 选择「*终端*」。
1. 输入 `csrutil disable`。
1. 按键盘上的 *Return* 或 *Enter* 键。
1. 单击菜单栏中的 * Apple 符号*。
1. 点击「*重启…*」。

禁用 SIP 后，就可以启用内核扩展：

![启用内核扩展](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. 单击「*选择模式...*」按钮。
1. 选择「*内核扩展*」。
1. 确认要切换到内核扩展。

:::caution

不过，我们只建议在其他方法都失败的情况下使用上述方法，因为这可能会导致一些问题。

:::
