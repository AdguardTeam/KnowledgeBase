---
title: 设置
sidebar_position: 2
---

:::info

本文适用于 Windows 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

「设置」是最需要关注的部分。 用户可以在此处配置本应用以完全符合您的需求：仅拦截困扰您的广告，使用受信任提供商的 DNS 服务器，移除第三方 Cookie 等等。

![设置 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### 常规设置

用户可以在此处设置语言和主题（暗色或亮色），开启 AdGuard 随系统启动运行，静寂自动更新，选择更新通道和过滤器更新检查时间间隔。 Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![高级设置 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

在屏幕的最底部，可以找到「高级设置」。 无意识的更改某些高级设置可能会引起 AdGuard 出现性能问题，中断因特网连接或危及您的安全和隐私。 这就是为什么我们建议用户仅在自己知道在做什么或我们的支持团队要求的情况下才打开此部分。 如您想知道在「高级设置」中可以设置什么，请阅读[专门文章](/adguard-for-windows/solving-problems/low-level-settings.md)。

### 广告拦截器

此为 Windows 版 AdGuard 的主模块，可从用户访问的网站上和设备上安装的应用内移除广告。 要过来广告和威胁隐私的内容，如横幅，弹窗或跟踪器，AdGuard 使用不同的过滤器：用[特定语法](/general/ad-filtering/create-own-filters)编写的有类似用途的规则组。 要了解什么是过滤器及其工作原理，请阅读[本文](/general/ad-filtering/how-ad-blocking-works)。

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

在广告拦截器模块中，可以进行以下设置：

- 开启自动激活特定语言的过滤器
- 禁用[搜索广告和自我推销](/general/ad-filtering/search-ads)拦截
- disable ads in the Start menu on Windows 11,
- 激活预安装的过滤器，如「AdGuard 基础过滤器」
- 点击「添加过滤器」按钮从列表上安装过滤器或添加自定义过滤器
- 使用「过滤器编辑器」按钮更改现有规则组
- 点击「过滤日志」按钮以查看由浏览器和您系统上已安装应用的所有请求。 用户可以在过滤日志创建自定义规则以拦截或取消任何请求的拦截
- 用自己编写的规则，导入的规则或用 AdGuard 助手扩展创建的规则组成过滤器。

在开始手动编写自己的规则之前，请阅读我们详细的[语法指南](/general/ad-filtering/create-own-filters)。

### 隐身模式

众多网站收集其访问者的信息，如他们的 IP 地址，所用浏览器和操作系统的信息，屏幕分辨率，甚至是用户从何重新定向而至。 某些网站使用 Cookie 标记浏览器并保存个人设置，用户首选项或在用户下次访问时“识别”您。 隐身模式保护个人信息免受如数据/统计收集系统的侵害。

![隐身模式 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

用户可以灵活调整隐身模式的工作方式：例如，可以阻止网站接收您在因特网查找它时所用的搜索请求，自动删除第三方和网站自身的 Cookie，禁用可用于跟踪用户行踪的位置共享。

要了解关于隐身模式及其选项的更多信息，请阅读[此文章](/general/stealth-mode)。

### 浏览安全

「浏览安全」功能针对恶意网站和钓鱼网站提供给用户强力保护。 AdGuard Windows 版并非反病毒软件。 软件无法阻止已开始下载的病毒或删除现有病毒。 但如您要访问一个已添加到我们的“不受信任的站点”数据库中的网站，或者从此类网站下载文件，软件会发出警告。 您可[在专门文章内](/general/browsing-security)找到关于此模块工作方式的更多信息。

在此模块内，用户可以进行以下设置：

- 开启对恶意和钓鱼网站的拦截请求的通知，
- 激活声音通知，
- 同意向 AdGuard 服务器提交匿名安全相关信息，以帮助我们保持恶意和钓鱼网站数据库最新状态。

![浏览安全 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

要了解更多关于「浏览安全」功能的信息，请阅读[此文章](/general/browsing-security)。

### DNS 保护

有三个重要原因值得用户探索 DNS 保护设置。 首先，避免受到您 ISP 的跟踪。 每次用户打开网站，例如 google.com，浏览器都会给 DNS 服务器发送请求以获取相应网站的 IP 地址。 通常，DNS 服务器属于您的 ISP，这使他们能够跟踪用户的在线活动。 第二，加密 DNS 流量。 第三，[在 DNS 级别上屏蔽内容](https://adguard-dns.io/kb/general/dns-filtering/)。

![DNS 保护 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

在 Windows 版 AdGuard 的 DNS 保护模块内，用户可以从已知的 DNS 提供商内选择 DNS 服务器，包括可以拦截广告和跟踪器的 [AdGuard DNS](https://adguard-dns.io/kb/)，还可拦截成人内容的 AdGuard DNS 家庭保护，或提供安全可靠连接但不过滤任何内容的 AdGuard DNS 无过滤。 用户也可以添加自定义 DNS 服务器。 还可以使用 [DNS 规则语法](https://adguard-dns.io/kb/general/dns-filtering-syntax/)添加自定义规则。 如有必要，用户可以添加[自己选择的 DNS 过滤器](https://filterlists.com)。

### 家长控制

有几个网站应该限制儿童使用电脑访问。 此任务由家长控制完成。

![家长控制 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

此模块检查浏览器打开的网页内容，过滤儿童不宜的内容：成人图像和文字、粗俗语言、暴力、毒品宣传等。 家长控制设置受密码保护，孩子无法绕过限制。 此模块不仅拦截对不良网站的指向，也可从搜索结果中移除儿童不宜的链接。

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. 用户也可以选中「阻止下载可执行文件」以防止儿童在计算机上下载和安装软件。 「家长控制」模块有多个选项：用户可以选择「家长控制」保护特定的 Windows 用户，设置密码保护 AdGuard 设置以防更改。

![家长控制 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### 浏览器助手

![浏览器助手 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

用户可以在此选项页上轻松处理已安装的 AdGuard 浏览器助手，其主功能是从浏览器内直接管理过滤。 我们在[单独的文章](/adguard-for-windows/browser-assistant.md)内解释其工作方式以及如您的浏览器没有浏览器助手要如何处理。
