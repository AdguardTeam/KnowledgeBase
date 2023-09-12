---
title: AdGuard 过滤器
sidebar_position: 2
---

:::info

本文介绍我们在 AdGuard 中开发并预装的过滤器。 To check them out, you can [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

本文介绍的是我们创建用于 AdGuard 和其他广告拦截软件（例如 uBlock Origin）的过滤器。 每个过滤器均代表一组文本格式的规则，AdGuard 应用和程序可使用这些规则来过滤广告和隐私威胁的内容（例如横幅、弹出式窗口、跟踪器等）。 过滤器包含基于其用途的规则列表。 语言过滤器包括互联网的相应语言的规则（例如，中文过滤器）。 基于特定任务的过滤器将完成特定任务的规则分组，例如社交媒体过滤器或跟踪保护过滤器。 启用或禁用过滤器让用户更轻松地同时处理整个规则列表。

## AdGuard 过滤器

- **基础过滤器**删除英文内容网站的广告。 最初是基于 [EasyList](https://easylist.to/) 并由我们修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **防跟踪保护过滤器** — 各种在线计数器和网络分析工具的综合列表。 用它来隐藏用户在网上的活动，避免跟踪。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **URL 跟踪过滤器**从网址中移除跟踪参数加强隐私保护。 当用户选择在隐身模式下拦截跟踪参数时，此过滤器将自动启用。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **社交媒体过滤器**此过滤器移除社交媒体小工具「点赞」和「分享」按钮及类似的元素。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **恼人广告过滤器**屏蔽网页上的恼人元素。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt) 包括以下 AdGuard 过滤器（所有过滤器都可以独立于烦恼过滤器启用）：
    - **Cookie 通知**在网页上拦截 Cookie 通知。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **弹出窗口**拦截各种对网站运行没有必要的弹窗。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **移动拦截程序横幅广告**阻止宣传网站移动应用的横幅。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **小工具**阻止第三方小工具：在线助手、实时客服支持聊天等 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **其他烦恼**阻止不属于流行的烦恼类别的元素。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)
- **解除搜索广告和自我推销过滤器**解除可能对用户有用的广告。 在[此页](../search-ads)上了解更多关于此过滤器的信息。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **俄语过滤器**删除俄语网站上的广告。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **德语过滤器**删除德语网站上的广告。 最初是基于 [EasyList Germany](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **法语过滤器**删除法语网站上的广告。 最初是基于 [Liste FR](https://forums.lanik.us/viewforum.php?f=91) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **日语过滤器**删除日语网站上的广告。 最初是基于 [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **荷兰语过滤器**删除荷兰语网站上的广告。 最初是基于 [EasyList Dutch](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **西班牙语/葡萄牙语过滤器**删除西班牙语和葡萄牙语网站上的广告。 最初是基于 [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **土耳其语过滤器**删除土耳其语网站上的广告。 由我们根据用户的反馈创建。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **中文过滤器**删除中文网站上的广告。 Originally based on the [EasyList China](https://github.com/easylist/easylistchina) filter and subsequently modified by us according to the complaints from users. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **实验性过滤器**，此过滤器设计用于在将某些有风险的过滤规则添加到基本过滤器之前对其进行测试。 如果这些规则执行没有任何问题，它们会被添加到主过滤器中。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **移动广告过滤器**拦截移动设备上的广告。 包含所有已知的移动广告网络。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **DNS 过滤器** — 此过滤器由其他几个过滤器 (AdGuard 基础过滤器、社交媒体过滤器、防跟踪保护过滤器、移动广告过滤器、EasyList 和 EasyPrivacy) 组成，并经过简化，以便更好地与 DNS 级别的广告拦截兼容。 [AdGuard DNS](https://adguard-dns.io/kb) 服务器使用此过滤器来拦截广告和跟踪器。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## AdGuard 过滤器政策

我们的过滤器政策定义在过滤器中添加和删除的规则，以及 AdGuard 过滤器应该拦截和不应该拦截的内容的规则。 阅读全文 [AdGuard 过滤政策](../filter-policy)了解详细信息。

## 为 AdGuard 过滤器做贡献

我们非常幸运的是，拥有一个不仅热爱 AdGuard，还能回馈社会的社区。 很多人以各种方式做志愿者，让其他用户使用 AdGuard 的体验更好。 您也可以加入他们的行列。 我们也乐于奖励最活跃的社区成员。 那么，您能做什么呢？

### 报告问题

我们依靠社区让我们知道过滤器的问题。 这样我们才能最有效地利用我们的时间，并保持过滤器的不断更新。 要提交报告，请使用[网络报告工具](https://agrd.io/report)。

### 建议过滤规则

您会在 [GitHub 过滤器仓库](https://github.com/AdguardTeam/AdguardFilters/issues)中发现大量未解决的问题。 每个问题都涉及到某个网站的问题 — 遗漏的广告、误报等。 请选择其中一个问题并在评论中提供您自己的规则。 AdGuard 过滤器工程师将审查您的建议，如果证明是正确的，您的规则将被添加到 AdGuard 过滤器中。

这里是 AdGuard 过滤规则语法的[官方文档](../create-own-filters)。 在您创建自己的过滤规则之前，请您阅读它。

### 其他贡献方式

我们有[专门的页面](https://adguard.com/contribute.html)您可以在其中详细了解如何参与 AdGuard 开发。
