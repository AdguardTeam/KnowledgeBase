---
title: 设置
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

「设置」是最需要关注的部分。 用户可以在此处配置本应用以完全符合您的需求：仅拦截困扰您的广告，使用受信任提供商的 DNS 服务器，移除第三方 Cookie 等等。

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### 常规设置

用户可以在此处设置语言和主题（暗色或亮色），开启 AdGuard 随系统启动运行，静寂自动更新，选择更新通道和过滤器更新检查时间间隔。 如果 Windows 版 AdGuard 无法正常工作，而支持团队要求用户[收集「调试日志」](/adguard-for-windows/solving-problems/adguard-logs.md)，那么「设置」也是要查看的地方。

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

在屏幕的最底部，可以找到「高级设置」。 Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

此为 Windows 版 AdGuard 的主模块，可从用户访问的网站上和设备上安装的应用内移除广告。 要过来广告和威胁隐私的内容，如横幅，弹窗或跟踪器，AdGuard 使用不同的过滤器：用[特定语法](/general/ad-filtering/create-own-filters)编写的有类似用途的规则组。 要了解什么是过滤器及其工作原理，请阅读[本文](/general/ad-filtering/how-ad-blocking-works)。

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- 开启自动激活特定语言的过滤器。
- 禁用[搜索广告和自我推销](/general/ad-filtering/search-ads)拦截。
- 禁用 Windows 11 开始菜单中的广告。
- 激活预安装的过滤器，如「AdGuard 基础过滤器」。
- 点击「添加过滤器」按钮从列表上安装过滤器或添加自定义过滤器。
- 使用「过滤器编辑器」按钮更改现有规则组。
- 点击「过滤日志」按钮以查看由浏览器和您系统上已安装应用的所有请求。 用户可以在过滤日志创建自定义规则以拦截或取消任何请求的拦截。
- 用自己编写的规则，导入的规则或用 AdGuard 助手扩展创建的规则组成过滤器。

在开始手动编写自己的规则之前，请阅读我们详细的[语法指南](/general/ad-filtering/create-own-filters)。

### Tracking protection

众多网站收集其访问者的信息，如他们的 IP 地址，所用浏览器和操作系统的信息，屏幕分辨率，甚至是用户从何重新定向而至。 Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

用户可以灵活调整隐身模式的工作方式：例如，可以阻止网站接收您在因特网查找它时所用的搜索请求，自动删除第三方和网站自身的 Cookie，禁用可用于跟踪用户行踪的位置共享。

要了解关于隐身模式及其选项的更多信息，请阅读[此文章](/general/stealth-mode)。

### 浏览安全

「浏览安全」功能针对恶意网站和钓鱼网站提供给用户强力保护。 AdGuard Windows 版并非反病毒软件。 It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. 您可[在专门文章内](/general/browsing-security)找到关于此模块工作方式的更多信息。

在此模块内，用户可以进行以下设置：

- 开启对恶意和钓鱼网站的拦截请求的通知，
- 激活声音通知，
- 同意向 AdGuard 服务器提交匿名安全相关信息，以帮助我们保持恶意和钓鱼网站数据库最新状态。

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

要了解更多关于「浏览安全」功能的信息，请阅读[此文章](/general/browsing-security)。

### DNS 保护

有三个重要原因值得用户探索 DNS 保护设置。 首先，避免受到您 ISP 的跟踪。 每次用户打开网站，例如 google.com，浏览器都会给 DNS 服务器发送请求以获取相应网站的 IP 地址。 通常，DNS 服务器属于您的 ISP，这使他们能够跟踪用户的在线活动。 第二，加密 DNS 流量。 第三，[在 DNS 级别上屏蔽内容](https://adguard-dns.io/kb/general/dns-filtering/)。

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

在 AdGuard Windows 版的 DNS 保护模块中，用户可以从知名 DNS 提供商中选择 DNS 服务器，包括可以拦截广告和跟踪器的 AdGuard DNS，还可拦截成人内容的 AdGuard DNS 家庭保护，或提供安全可靠连接但不过滤任何内容的 AdGuard DNS 无过滤。 您也可以使用 [DNS 规则语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/) 添加自定义 DNS 服务器和规则。 如有必要，用户可以添加[自己选择的 DNS 过滤器](https://filterlists.com)。

从 v7.20 版本开始，您还可以通过从预置的可信过滤器列表中选择来轻松添加过滤器。 为了方便用户使用，它们被分为四类：

- **常规**：拦截广告和跟踪器。
- **区域**：在特定语言的网站上拦截广告和跟踪器。
- **安全**：屏蔽钓鱼和不可靠的网站。
- **其他**：涵盖不适合上述类别的特殊用例。

![DNS 过滤 \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### 家长控制

有一些网站不适合儿童访问，建议在儿童使用的电脑上对其进行访问限制。 This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

此模块检查浏览器打开的网页内容，过滤儿童不宜的内容：成人图像和文字、粗俗语言、暴力、毒品宣传等。 家长控制设置受密码保护，孩子无法绕过限制。 此模块不仅拦截对不良网站的指向，也可从搜索结果中移除儿童不宜的链接。

在「家长控制」模块，用户可以开启「安全搜索」，管理「黑名单」和「白名单」以自定义此选项的工作方式。 用户也可以选中「阻止下载可执行文件」以防止儿童在计算机上下载和安装软件。 「家长控制」模块有多个选项：用户可以选择「家长控制」保护特定的 Windows 用户，设置密码保护 AdGuard 设置以防更改。

### 浏览器助手

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
