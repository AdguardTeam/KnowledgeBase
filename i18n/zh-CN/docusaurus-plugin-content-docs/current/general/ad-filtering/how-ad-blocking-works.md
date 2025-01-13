---
title: 广告拦截的工作方式
sidebar_position: 1
---

AdGuard 有众多广告拦截服务以适用于各种平台且各产品都有独特功能。 所有产品的共同点是拦截广告和跟踪器。 本文将由浅入深描述广告拦截的工作方式。

:::note

此处我们未涵盖 DNS 过滤。 这是不同的广告拦截方式，有其自己的利弊。 请跟随此链接[以了解更多关于 DNS 过滤的信息](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work)。

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 一般原则

过滤器列表，也称为过滤器，是任何广告拦截器的核心。 实际上，过滤器是用特殊语法编写的规则列表。 广告拦截器能“理解”此复杂的语法。 它们解释过滤规则并基于告知它们要做什么的规则执行网络流量动作：拦截特定元素，以某些方式更改网页等。

![广告拦截的工作方式](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## 过滤器列表

要更好的了解广告过滤，知晓过滤器工作原理尤为重要。

构成过滤器的过滤规则不会自动创建。 它们是由包括专业和业余维护者在内的过滤器维护者开发的，他们使用浏览器开发者控制台和其它工具（如 AdGuard 过滤日志）以确定拦截特定广告或跟踪器的规则。 此过程描述非常简单：某些广告难以拦截且需要多重规则，多次迭代并使用复杂语法。

即使规则最终添加到过滤器中，也不意味着它会永远存在。 因为广告在变，相同网站上提供相同广告的方式在变，过滤规则也须改变。 有时规则会过时，会出现新广告，或者需要新的过滤规则阻止同一广告。 过滤器通常由个人维护，但即使是维护人员团队，也不可能持续监视整个网络。 这就是为什么许多广告拦截器都有工具以帮助用户轻松报告他们遇到的任何与过滤器相关的问题。

![过滤器更新方案](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

AdGuard 用户[可以访问专门的网络报告工具](https://reports.adguard.com/new_issue.html)。 归功于用户的报告，过滤器开发者才可致力于他们的过滤器列表维护且不用刷网页寻找那些新旧未拦截的广告。

过滤器不仅可拦截广告，还能做更多。 There are filters that block tracking, social media widgets, and annoyances, such as cookie notices. 不同的用户可以选择不同的过滤器组合以匹配个人首选。 不少网站，如 [filterlists.com](https://filterlists.com/)，有专门的过滤器列表和巨大的数据库。

我们开发并维护[自己的过滤器列表集合](../adguard-filters)以供 AdGuard 或其它广告拦截器使用。

## 过滤规则类型

过滤规则的类型众多，用途不尽相同。 依赖于用户所用的广告拦截器，特别是操作系统，某些规则类型可能不受支持。

### 基本过滤规则

要在网页或应用程序中托管广告，必须首先从服务器加载它们。 为此，浏览器或应用程序要发送网络请求。 阻止广告出现在屏幕上的最基本方式就是拦截相应的请求防止其到达服务器，从而不会有“广告”响应。

基本上，所有 AdGuard 广告拦截产品都可依据活动的过滤规则拦截网络请求。 此方式对阻止广告非常有效，但其有些弊端。 最明显的就是：在进行拦截后，广告占据的位置就会残留有空白或被其它广告占据。

### 修饰过滤规则

各网页都有 Document Object Model（英文简称：DOM，中文：文档对象模型），一种包含网页结构和元素的 HTML 文档。 广告也是网页元素，所以都会记录到 DOM 内。 在过滤规则协助广告拦截器了解哪些部件是广告且需要移除，哪些部件是要保留之时，广告拦截器可移除部分 DOM 内容。

此方式允许用户避免以上提及的空白和广告残留，以及执行更多其它更负责的任务。

### HTML 过滤规则

在大多数情况下，以上提及的基本规则和修饰规则足以过滤广告。 不过，如果需要在加载页面之前更改页面的 HTML 代码，就需要针对 HTML 内容制定过滤规则。 这些规则允许在浏览器加载网页之前移除特定的 HTML 元素。

这些规则相当复杂，需要授予广告拦截器一定的访问权限，因此并非所有平台都支持这些规则。 当前这些规则仅工作于 AdGuard Firefox 附件以及运行于 Windows、Mac、Android 系统上的 AdGuard 应用程序。

:::info

还有其它类型的过滤规则，但用户需要有更高级的技术知识以理解其工作方式。 如果有兴趣， [请查看相应文章](../create-own-filters)了解过滤规则的综合指南。

:::

## Types of request handling in AdGuard

AdGuard handles requests according to filters, user rules and settings enabled by the user. As a result, a request can be blocked, modified, allowed or, when nothing is done to it, just processed.

Detailed information on how each request of yours has been handled by AdGuard can be found in the *Filtering log* (AdGuard for Windows, AdGuard for Mac, AdGuard Browser Extension) or *Recent activity* (AdGuard for iOS, AdGuard for Android).

Regarding AdGuard filters, you can also check [our filter policy](../filter-policy), which describes in detail what and why each of our filters blocks.

### Examples of blocked requests

AdGuard DNS filter blocks requests to ad domains, such as `ad.doubleclick.net`.

AdGuard Tracking Protection filter blocks tracking requests, such as `youtube.com/youtubei/log_event?`.

### Examples of allowed requests

AdGuard Base filter allows non-ad requests, such as `www.google.com/complete/search?q=`.

Filter unblocking search ads and self-promotion allows requests to search ad-related domains, such as `www.google.com/aclk?`.

Requests to websites that are added by the user to *Allowlist* are allowed.

### Examples of modified requests

Tracking protection feature with protection level set to *High* enables AdGuard URL Tracking filter which modifies requests by removing tracking parameters from them:

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` → `https://www.gog.com/game/spec_ops_the_line`

Please note that *modified* events you see in the Filtering log or Recent activity refer not only to the cases when a request is modified, but also when:

- something on the page is changed (usually by cosmetic rules)
- the response is modified
