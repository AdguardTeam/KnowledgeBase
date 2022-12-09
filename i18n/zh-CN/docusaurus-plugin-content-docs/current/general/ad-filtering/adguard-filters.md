---
title: AdGuard 过滤器
sidebar_position: 2
---

本文介绍的是我们创建用于 AdGuard 和其他广告拦截软件（例如 uBlock Origin）的过滤器。 每个过滤器均代表一组文本格式的规则，AdGuard 应用和程序可使用这些规则来过滤广告和隐私威胁的内容（例如横幅、弹出式窗口、跟踪器等）。 过滤器包含基于其用途的规则列表。 语言过滤器包括互联网的相应语言的规则（例如，中文过滤器）。 基于特定任务的过滤器将完成特定任务的规则分组，例如社交媒体过滤器或跟踪保护过滤器。 启用或禁用过滤器让用户更轻松地同时处理整个规则列表。

## AdGuard 过滤器

* **Base filter** removes ads from websites with English content. 最初是基于 [EasyList](https://easylist.to/) 并由我们修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
* **防跟踪保护过滤器** — 各种在线计数器和网络分析工具的综合列表。 用它来隐藏用户在网上的活动，避免跟踪。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **URL Tracking filter** enhances privacy by removing tracking parameters from URLs. 当用户选择在隐身模式下拦截跟踪参数时，此过滤器将自动启用。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
* **Social media filter** removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **Annoyances filter** blocks irritating elements on web pages. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt) 包括以下 AdGuard 过滤器（所有过滤器都可以独立于烦恼过滤器启用）：
    * **Cookie Notices** blocks cookie notices on web pages. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    * **Popups** blocks all kinds of pop-ups that are not necessary for websites' operation. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    * **Mobile App Banners** blocks banners that promote mobile apps of websites. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    * **Widgets** blocks third-party widgets: online assistants, live support chats, etc. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    * **Other Annoyances** blocks elements that do not fall under the popular categories of annoyances. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)
* **Filter unblocking search ads and self-promotions** unblocks ads that may be useful to users. 在[此页](../search-ads)上了解更多关于此过滤器的信息。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **Russian filter** removes ads from websites in Russian. [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **German filter** removes ads from websites in German. 最初是基于 [EasyList Germany](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **French filter** removes ads from websites in French. 最初是基于 [Liste FR](https://forums.lanik.us/viewforum.php?f=91) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **Japanese filter** removes ads from websites in Japanese. 最初是基于 [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **Dutch filter** removes ads from websites in Dutch. 最初是基于 [EasyList Dutch](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **Spanish/Portuguese filter** removes ads from websites in Spanish and Portuguese. 最初是基于 [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **Turkish filter** removes ads from websites in Turkish. 由我们根据用户的反馈创建。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **Chinese filter** removes ads from websites in Chinese. 最初是基于 [EasyList China](http://abpchina.org/forum/forum.php) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **Experimental filter** serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. 如果这些规则执行没有任何问题，它们会被添加到主过滤器中。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **Mobile ads filter** blocks ads on mobile devices. 包含所有已知的移动广告网络。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **DNS 过滤器** — 此过滤器由其他几个过滤器 (AdGuard 基础过滤器、社交媒体过滤器、防跟踪保护过滤器、移动广告过滤器、EasyList 和 EasyPrivacy) 组成，并经过简化，以便更好地与 DNS 级别的广告拦截兼容。 [AdGuard DNS](https://adguard-dns.io/kb) 服务器使用此过滤器来拦截广告和跟踪器。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## AdGuard 过滤器政策

我们的过滤器政策定义在过滤器中添加和删除的规则，以及 AdGuard 过滤器应该拦截和不应该拦截的内容的规则。 阅读全文 [AdGuard 过滤政策](../filter-policy)了解详细信息。

## 为 AdGuard 过滤器做贡献

我们非常幸运的是，拥有一个不仅热爱 AdGuard，还能回馈社会的社区。 很多人以各种方式做志愿者，让其他用户使用 AdGuard 的体验更好。 您也可以加入他们的行列。 我们也乐于奖励最活跃的社区成员。 那么，您能做什么呢？

### 报告问题

我们依靠社区让我们知道过滤器的问题。 这样我们才能最有效地利用我们的时间，并保持过滤器的不断更新。 要提交报告，请使用[网络报告工具](https://agrd.io/report)。

### 建议过滤规则

您会在 [GitHub 过滤器仓库](https://github.com/AdguardTeam/AdguardFilters/issues)中发现大量未解决的问题。 每个问题都涉及到某个网站的问题 — 遗漏的广告、误报等。 请选择其中一个问题并在评论中提供您自己的规则。 AdGuard 过滤器工程师将审查您的建议，如果证明是正确的，您的规则将被添加到 AdGuard 过滤器中。

这里是 AdGuard 过滤规则语法的[官方文档](/general/ad-filtering/create-own-filters)。 在您创建自己的过滤规则之前，请您阅读它。

### 其他贡献方式

我们有[专门的页面](https://adguard.com/contribute.html)您可以在其中详细了解如何参与 AdGuard 开发。



