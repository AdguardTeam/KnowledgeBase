---
title: DNS 保护功能
sidebar_position: 4
---

:::info

本文适用于 Windows 版的 AdGuard v8.0，一款全面的广告拦截器，可在系统层面保护您的设备。 这是一个仍在开发中的 Beta 测试版本。 要试用，请下载 [适用于 Windows 的 AdGuard 测试版](https://agrd.io/windows_beta)。

:::

DNS 保护让用户对设备的网络连接方式拥有更多控制权。 它之所以有用，主要有三个原因：

## 1. 保护个人隐私，远离 ISP

每次打开一个网站（例如 `google.com`），浏览器都会向 DNS 服务器发送请求，以获取该网站对应的 IP 地址。 通常情况下，DNS 服务器属于用户的 ISP（互联网服务提供商），这意味着他们可以跟踪用户访问的网站。 如果您切换到其他 DNS 服务器（例如 AdGuard DNS），ISP 将无法再看到您的在线活动。

## 2. 加密 DNS 流量

DNS-over-TLS 和 DNS-over-HTTPS 等现代协议可确保您的 DNS 请求得到加密。 这能保护请求免遭攻击者拦截、篡改或窃听。

## 3. 在 DNS 级别拦截有害内容

DNS 保护可以在广告、跟踪器、钓鱼网站及其他有害或烦人内容加载到您的浏览器或应用之前，就将其过滤掉。 [了解有关 DNS 过滤的更多信息](https://adguard-dns.io/kb/general/dns-filtering/)。

![DNS 保护](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

在 DNS 保护中，您可以配置以下内容：

## 选择 DNS 服务器

![DNS 服务器](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

您可以从多个受信任的 DNS 提供商中进行选择。 AdGuard 自身针对不同需求提供多个选项：

- AdGuard DNS：拦截广告和跟踪器。

- AdGuard DNS 家庭保护版：拦截广告、跟踪器和成人内容。

- AdGuard DNS 非过滤版：提供安全可靠的连接，不进行任何过滤。

您可以使用我们的公共服务器之一，添加自己的自定义 DNS 服务器，或从我们列出的[受信任 DNS 提供商](https://adguard-dns.io/kb/general/dns-providers/)中选择其他选项。

## 添加 DNS 过滤器和规则

要微调保护，可以使用 [DNS 规则语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/)创建自己的 DNS 过滤器，或导入现成的 [DNS 过滤器](https://filterlists.com)。

此外，用户还可以根据需要创建自定义 DNS 规则来拦截、解除拦截或重定向域名。 请使用我们内置的规则构造器。
