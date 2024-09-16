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

![Advanced Settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

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

尽管 AdGuard 在系统设置中显示为 VPN，但与其他基于 VPN 的应用程序一起使用时应该不会引起任何冲突。 不过，如果用户使用的是从 App Store 以外下载的基于 VPN 的应用程序，它有可能使用旧的 VPN API，用户必须将其排除在过滤之外：

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. 单击「*应用程序*」按钮。
1. 找到要排除的应用程序，取消选中旁边的复选框。

![Filtered applications](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## 已修复的问题

Apple 公司现已修复了以下问题，但在旧版本的 macOS Big Sur 中用户还会遇到一些问题。

### 与 Little Snitch 5 兼容

目前，AdGuard 的「网络扩展」模式无法与 [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html) 兼容。 当这两个程序都在运行时，有可能会遇到各种应用程序的行为问题，即使它们没有被 AdGuard 过滤。 这个问题是由 Big Sur 中的一个错误造成的，我们已经向 Apple 公司通报这一情况。 这让我们相信，这个问题会在下一次更新中得到解决。

请注意，这个问题无法通过禁用「Little Snitch」的连接监控来解决，因为这一操作并不能从系统中卸载「Little Snitch」的扩展。 我们建议，至少在 Apple 修复该错误之前，切换到「[**自动代理**](#automatic-proxy)」过滤模式。

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

您可以在 [Shadowsocks 网站](https://shadowsocks.org/guide/what-is-shadowsocks.html)上找到有关如何开始设置的更多信息。

:::

然后，用户要在 Mac 上安装 Shadowsocks 客户端。 请确保在设置中选择「手动模式」或「自动模式」！ 如果您选择「全局模式」（或 11.1 之前 Big Sur 版本中的「自动模式」），配置将不起作用。

![Select Manual Mode or Auto Mode in settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Now go to *AdGuard menu → Advanced → Advanced Settings...* and set the *Value* area of the `upstream.proxy` setting to `socks5://localhost:1080`. Notice that you need to use "local_port" value from the JSON file here.

Because Shadowsocks uses SOCKS5, you also need to set the value of the `upstream.proxy.socks5udp` setting in AdGuard Advanced Settings to `true` to make AdGuard route UDP traffic to the proxy server.

#### Example 2: Configuring an upstream Surge proxy

In Big Sur v11.1+, there are no known conflicts between AdGuard and Surge proxy. If you are using an older version of Big Sur (prior to 11.1), check that **System Proxy** in the bottom right corner is disabled. Otherwise, Surge won't work with AdGuard. On the other hand, **Enhanced Mode** can be enabled without causing a conflict in any Big Sur version.

![Configuring an upstream Surge proxy *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Now go to *Preferences → Network → Outbound proxy* and fill in the fields. For SOCKS5 proxy type:

- `host`: localhost
- `port`: 6153 For HTTP proxy type:
- `host`: localhost
- `port`: 6152

## Alternatives to using a Network Extension

It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first.

### Using "Automatic proxy" filtering mode {#automatic-proxy}

If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to *Automatic proxy* mode.

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. Click the *Select Mode...* button.
1. Select *Automatic Proxy*.

![Switch AdGuard to Automatic proxy mode](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Now AdGuard has automatically added a **.pac** file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard.

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Enabling Kernel Extension in Big Sur and Monterey {#kernel-extension}

By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*
1. Hold down *Command-R* to reboot into Recovery Mode.
1. Click *Utilities*.
1. Select *Terminal*.
1. Type `csrutil disable`.
1. Press *Return* or *Enter* on your keyboard.
1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*

Now that SIP is disabled, this is how you enable Kernel Extension:

![Enable Kernel Extension](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. 开启 AdGuard 菜单。
1. 选择「*首选项...*」。
1. 切换到「*网络*」选项卡。
1. Click the *Select Mode...* button.
1. Select *Kernel Extension*.
1. Confirm that you want to switch to Kernel Extension.

:::caution

However, we only recommend using this method if everything else fails, as this may lead to unexpected issues.

:::
