---
title: DNS 泄漏
sidebar_position: 9
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

Windows 版 AdGuard 让用户指定 DNS 服务器地址来解决查询，而不使用 ISP 提供的系统 DNS 服务器（如果未在系统中更改设置）。 使用非默认 DNS 服务器可以保护 DNS 流量不被互联网服务提供商拦截。 此外，选择一个进行加密和/或过滤的 DNS 服务器后，用户还可以获得另一层保护，防止恶意行为和恼人的广告。

许多 Windows 版 AdGuard 的用户都赞赏 DNS 保护功能。 But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. 在本文中，我们将解释为什么会发生这种情况以及如何避免它。

## Bootstrap DNS 地址

DNS 服务器地址可以写为 IP 或域名。 在 IP 地址的情况下没有什么困难：AdGuard 将 DNS 请求直接转发到 DNS 保护模块中指定的服务器。 不过，加密的 DNS 服务器地址（如 DoT 或 DoH）最常见的写法是域名。 在这种情况下，首先要解析加密的 DNS 服务器地址，因此 AdGuard 发送 DNS 查询到 Bootstrap（引导）地址，默认情况下是一个系统 DNS 服务器。 这种连接就是检查服务所认为的泄漏。

**要消除此泄漏，请执行以下操作：**

- 转到「*高级设置*」
- 向下滚动到「*自定义 Bootstrap 地址的列表*」部分
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- 单击「*保存*」

## 后备 DNS 服务器

有时，由于互联网连接不畅、默认服务器响应超时或其他服务器相关的问题，AdGuard 无法连接到指定服务器。 在这种情况下，软件将连接到后备服务器，默认情况下是系统 DNS 服务器。 检查部门也会将这种连接视为泄漏。

**要消除此泄漏，请执行以下操作：**

- 转到「*高级设置*」
- 向下滚动到「*后备服务器*」部分
- 勾选「*使用自定义服务器*」
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

或者

- 转到「*高级设置*」
- 向下滚动到「*后备服务器*」部分
- 勾选「*不要使用后备服务器*」

或者

- 转到「*高级设置*」
- 向下滚动到「*DNS 服务器的超时期限*」部分
- 输入任意大数
