---
title: 功能概览
sidebar_position: 1
---

:::info

这篇文章是关于 Safari 版的 AdGuard，用于保护用户的 Safari 浏览器。 如果需要保护整个设备，请前往[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

Safari 版 AdGuard 的设计符合 Apple 公司对广告拦截浏览器扩展的限制，是 Safari 上最受欢迎的广告拦截器。 Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## 常规 {#general}

![「常规」选项卡](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

第一个选项卡是「常规」屏幕，用户可以设置通知、更新间隔和系统启动时启动 AdGuard 等基本事项。 用户还可以选择在菜单栏中显示 AdGuard 图标。 用户还可以启动「[内容拦截器](#contentblockers)」来拦截广告、跟踪器和其他骚扰等。

## 过滤器 {#filters}

![「过滤器」选项卡](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

过滤器是用特殊语法编写的规则列表。 根据这些规则，内容拦截器可以过滤网络流量：拦截广告或对恶意网站的请求。

过滤器分为八个主题类别： *广告拦截、隐私、社交小工具、烦扰、安全、特定语言过滤器、自定义和其他过滤器*。

了解更多有关[AdGuard 过滤器](/general/ad-filtering/adguard-filters)或[一般广告过滤](/general/ad-filtering/how-ad-blocking-works)的信息。

在「过滤器」选项卡中，用户可以启用整个主题类别或单独的过滤器。 「过滤器」选项卡中的设置更改会影响「内容拦截器」部分（在「常规 」选项卡中）。

## 内容拦截器 {#contentblockers}

![「内容拦截器」选项卡](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

内容拦截器是一组过滤器。 与隐私相关的过滤器包含在内容拦截器中，其相应名称为「*AdGuard 隐私*」。

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[2019 年](https://adguard.com/en/blog/adguard-safari-1-5.html)，Apple 对 Safari 的广告拦截器设置限制，只允许它们同时使用 5 万个过滤规则。 由于这个数量不足以让一个广告拦截器提供良好的过滤质量（仅 AdGuard 基础过滤器就有 30,000 个过滤规则），我们将 AdGuard Safari 版分成六个内容拦截器，每个拦截器包含多达 50,000 个规则。

[2022年](https://adguard.com/en/blog/adguard-for-safari-1-11.html)，Apple 将每个内容拦截器的过滤规则数量限制提高到同时应用 15 万个规则。 关于 Safari 版 AdGuard，六种内容拦截器可以启用 900,000 个规则。

虽然数量限制提高了，但内容拦截器的结构却保持不变。

在「内容拦截器」选项卡中，用户可以看到哪些内容拦截器已启用，每个拦截器使用了多少规则，以及哪些过滤器正在运行。

:::tip

用户可以在「过滤器」选项卡中管理已启用的过滤器。 在「内容拦截器」部分，用户只能看到已启用过滤器的列表。

:::

### AdGuard 常规 {#adguard_general}

「*AdGuard 常规*」是一款内容拦截器，结合最基本的拦截广告过滤器。 我们建议始终启用「AdGuard 基础过滤器」。

### AdGuard 隐私 {#adguard_privacy}

「AdGuard 基础过滤器」内容拦截器是对抗计数器和其他网络分析工具的主要工具。 「*AdGuard 防跟踪保护过滤器*」 默认已启用。

### AdGuard 社交 {#adguard_social}

「*AdGuard 社交*」包含针对社交媒体按钮、小工具、脚本和图标的过滤器。 在本部分还可以找到用于其他“干扰”的过滤器，包括弹出式窗口、移动应用程序横幅、Cookie 通知等过滤器。 要启用它们，请在「过滤器」选项卡中找到「*社交插件*」。

### AdGuard 安全 {#adguard_security}

该内容拦截器整合了多个与安全相关的过滤器。 「*Malware Domains Blocklist*」阻止因传播恶意软件和间谍软件而臭名昭著的域名。 「*Spam404*」保护用户免受网络欺诈。 「*NoCoin Filter List*」会干扰基于浏览器的加密货币，如 Coinhive。

### AdGuard 其它 {#adguard_other}

「*AdGuard 其他*」包含具有各种功能的过滤器。 例如，它有一个过滤器，可以解除对搜索广告和自我推销广告的屏蔽。 在某些情况下，该过滤器有助于准确找到用户正在寻找的内容，因为这些广告比其他类型的广告更相关，干扰性更小。

:::note 免责声明

We don't have any 'acceptable ads' paid by advertisers. 不过，我们为用户提供查看「[拦截搜索广告和网站的自我推销](/general/ad-filtering/search-ads)」的选项。

:::

### AdGuard 自定义 {#adguard_custom}

![「自定义」选项卡](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

如果用户需要启用更多过滤器，可将其添加到「*AdGuard 自定义*」中。 要添加自定义过滤器，请在相关字段中输入 URL 或本地文件路径。 您可以在「[filterlists.com](https://filterlists.com/)」上查看新的过滤器。

## 用户规则 {#userrules}

用户规则可用于自定义广告拦截。 它们可以手动添加、导入，也可以在屏蔽页面元素时自动创建。 要添加自己的过滤规则，请查看「[特殊语法](/general/ad-filtering/create-own-filters)」。

## 关于 {#about}

![「关于」选项卡](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

在「关于」选项卡中，用户可以查看产品当前版本的信息以及法律文件链接。 此外，还有一个指向我们在 GitHub 上的存储库的链接。 用户可以在「关于」部分监控产品开发、创建功能请求和报告错误。

:::note 提醒

[在 App Store 上](https://apps.apple.com/app/adguard-for-safari/id1440147259)可以免费下载 Safari 版 AdGuard 。 详细的设置说明可查阅[知识库](../installation)。

:::
