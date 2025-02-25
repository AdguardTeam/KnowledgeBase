---
title: 网络钓鱼和恶意软件保护
sidebar_position: 3
---

遭遇网络钓鱼和恶意软件仍然是一个常见遇到问题。 要加强隐私安全，我们在 AdGuard 产品中加入了特殊过滤器，保护用户免受恶意网站和网络钓鱼网站的侵害。 迄今为止，我们已经分类了 1,500 多万个网站了，建立了一个包含 150 万个已知网络钓鱼和恶意软件网站的数据库。 AdGuard 利用该数据库检查用户访问的网站，保护用户免受在线威胁。

:::note 重要信息

我们不收集或使用用户访问网站的任何信息。

:::

## AdGuard 检查网站的方式

每次访问网站时，本地客户端都会以哈希值和哈希前缀的形式与我们的后台服务器交换信息。 根据这种交换，本地客户端确定该网站是否列在潜在危险网站数据库中。 应用程序和扩展程序的检查范围不同。

### 应用程序

AdGuard 检查页面和页面上加载的所有元素提供最佳保护。 AdGuard 使用散列前缀检查 URL 和域名，而不是完整的 URL，因此我们的服务器不会保留用户访问的网站信息，个人信息受100%的安全保护。 我们的服务器会响应 App 的查询，列出所有与散列前缀匹配的可能地址。 当根据哈希匹配检测到潜在威胁时，会立即阻止该网站。

![AdGuard 警告](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### 浏览器扩展 {#extension}

我们的浏览器扩展只能检查域名，无法检查完整的 URL， 或者子查询。 这意味着，如果页面上有潜在的恶意元素，即使页面本身来自安全域名，它们也会被加载 扩展无法进行它们的保护。 另一个需要注意的是，执行的检查是异步的，即在加载页面的同时进行，因此也有可能加载恶意软件。

## 在 AdGuard 设置钓鱼和恶意软件保护

- **Windows 版本**：启动「*设置*」菜单中的「*浏览安全*」模块。

    ![Windows 的浏览安全](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Mac 版本**：在「*首选项*」中启用「*安全*」模块

    ![Mac 的安全](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Android 版本**：在「*保护*」标签中打开「*浏览安全*」功能。

    ![Android 的浏览安全 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **iOS 版本**：虽然这个版本没有单独模块，但可以进入「*Safari 保护*」→「*过滤器*」→「*安全*」，然后开启可用的过滤器。 此外，启用「*DNS 保护*」并选择一个AdGuard DNS 服务器。

    ![iOS 的安全 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **浏览器扩展**：在「*设置*」选项卡中开启「*网络钓鱼和恶意软件保护*」。 要增强保护，请转到「*过滤器*」→「*安全*」并开启过滤器。

    ![钓鱼和恶意保护](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **私人 AdGuard DNS**：在「*安全*」下的「*服务器设置*」中启用恶意软件保护。

    ![DNS 的安全](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## 拦截的内容

我们维护两个主要过滤器：一个用于防范试图窃取用户凭证的网络钓鱼和欺诈网站，另一个用于阻止访问已知传播恶意软件的网站，这些恶意软件可能导致数据丢失、信息泄露或设备损坏。 这些过滤器还能保护用户免受各种欺诈网站的攻击。 更多详细信息，请参阅[维基百科](https://en.wikipedia.org/wiki/Phishing)上的这篇文章。

## 维护我们的过滤器

AdGuard 维护一个广泛的网络钓鱼和恶意软件网站数据库，并在发现新威胁时定期自动更新。 我们从各种可靠的高质量来源（包括公共来源和其他公司）收集信息，并将其汇总到一个危险网站的通用数据库中。

我们会自动分析有关可疑网站的投诉，并花时间对数据库进行更新，清除误报，并实施相关机制以防止今后出现误报。

### 帮助我们

我们非常感谢大家给予我们的帮助！ 如果有用户遇到钓鱼网站或恶意软件网站，请向 <support@adguard.com> 报告。

### 假阳性反应

偶尔会有一些非恶意网站被添加到 AdGuard 的过滤器中。 我们尽最大努力降低误报率，但误报依然可能发生。 如果有用户遇到 AdGuard 的错误行为，请通过 <support@adguard.com> 向我们的技术支持报告误报情况。

## 发现可疑网站

如果怀疑某个网站可能有危险，请先使用我们的[安全检查工具](https://reports.adguard.com/welcome.html)进行检查。

![安全检查](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
