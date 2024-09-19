---
title: 过滤器
sidebar_position: 1
---

:::info

这篇文章是关于 AdGuard 浏览器扩展，它只能保护用户的浏览器。 要全面保护设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

显然拦截广告是任何广告拦截器的主要功能，AdGuard 扩展程序也不例外。 广告拦截基于过滤器，即一种特殊语言编写的规则集。 这些规则指定哪些元素应该被屏蔽。 AdGuard 解释规则，并根据规则修改网络请求。 这样，用户就不会在网页上看到广告。

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

所有过滤器都根据其作用分组。 例如，有广告拦截过滤器、隐私保护过滤器、社交媒体相关过滤器等类别。 用户可以启用单个过滤器或一键启用整组过滤器。

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## 自定义过滤器

虽然其他过滤器组的功能或多或少可以预测，但一个名为「自定义」的组可能会引起额外的问题。

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

在此选项卡中，用户可以添加默认情况下扩展中不存在的过滤器。 互联网上有很多[公开的过滤器](https://filterlists.com)。 除此之外，您还可以创建和添加自己的过滤器。 其实，用户可以创建任意过滤器组并按照自己喜欢的方式自定义拦截广告。

要添加过滤器，只需要单击「添加自定义过滤器」，输入要添加的过滤器的 URL 或文件路径，然后单击「下一步」。

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## 用户规则 {#user-rules}

「用户规则」是另一个可以帮助用户自定义广告拦截的工具。

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

有几种方法来添加新规则。 第一个是，直接键入规则，但用户需要使用一定的[规则语法](/general/ad-filtering/create-own-filters)。

您也可以从文本文件导入现成的过滤器列表。 **请确保不同的规则用换行符分隔**。注意，导入现成的过滤器列表最好在「自定义过滤器」选项卡完成。

另外，您也可以导出自己的过滤规则。 此项适用于在浏览器或设备之间传输规则列表。

当您将一个网站添加到白名单（下文将详细介绍）或使用助手工具隐藏页面上的某个元素时，相应的规则也会保存在用户规则中。

## 白名单

「白名单」用于排除某些网站的过滤。 拦截规则不适用于列表中的网站。

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

「白名单」也可以反转使用：可以在除此列表的网站之外的任何地方放行广告。 为此，请激活「颠倒白名单」选项。

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

用户还可以导入和导出现有的白名单。 例如，如果您想在各个浏览器中应用相同的白名单，那么这个功能就很有用。
