---
title: Safari 防护
sidebar_position: 1
---

:::info

本文所述 AdGuard iOS 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

### 内容拦截器 {#content-blockers}

内容拦截器是过滤规则的“容器”，实际作用是拦截广告和跟踪。 iOS 版 AdGuard 包含六种内容阻止程序：常规、隐私、社交、安全、自定义和其他。 以前，Apple 只允许每个内容拦截器包含最多50万个过滤规则，但随着 iOS 15 的发布，上限已增至150万个。

所有内容拦截器、它们的状态、它们当前包含的主题过滤器以及使用的过滤规则总数都可以在相应屏幕上的「高级设置」（点击右下角的齿轮图标 →「常规」→「高级设置」→「内容拦截器」）。

![内容拦截器 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

保持启用所有内容拦截器，以获得最佳过滤质量。

:::

### 过滤器 {#filters}

内容拦截器的工作基于过滤器，有时也称为过滤器列表。 每个过滤器都对应一个过滤规则的列表。 如果用户在浏览时启用广告拦截器，它就会根据这些过滤规则不断检查所访问的页面和页面上的元素，并拦截任何符合规则的内容。 制定的规则可阻止广告、跟踪器等。

所有过滤器均按主题类别分组。 要查看这些类别的完整列表（不要与内容拦截器混淆），请通过点击盾牌图标打开「保护」部分，然后转到「Safari 保护」→「过滤器」。

![过滤器类型 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

共有 8 个类别，每个类别都包含多个过滤器，这些过滤器都有一个共同的目的，即阻止广告、社交媒体小工具、Cookie 通知、保护用户免受在线诈骗。 要确定哪些筛选器适合您的需要，请阅读它们的说明，并根据标签进行导航 (`ads`、`privacy`、`recommended` 等等)。

:::note

启用的过滤器越多，并不能保证广告越少。 同时启用大量不同的过滤器会降低广告拦截的质量。

:::

默认情况下，自定义过滤器类别为空，供用户按 URL 添加过滤器。 用户可以在互联网上找到过滤器，也可以尝试[自己创建一个](/general/ad-filtering/create-own-filters)。

### 用户规则 {#user-rules}

用户可以添加新规则，手动输入规则，也可以使用 Safari 中的 AdGuard 手动阻止工具。 使用此工具可以自定义 Safari 过滤，而无需添加整个过滤器列表。

了解关于[创建自己过滤规则的更多详情](/general/ad-filtering/create-own-filters)。 但请注意，其中许多功能无法在 iOS 上的 Safari 中运行。

![用户规则 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### 白名单 {#allowlist}

「Safari 保护」屏幕的第三部分。 如果用户想在某个网站上禁用广告拦截，白名单将有所帮助。 它让用户将域名和子域名添加到黑名单中。 AdGuard iOS 版具有导入/导出功能，因此可以轻松地将一台设备的白名单转移到另一台设备。
