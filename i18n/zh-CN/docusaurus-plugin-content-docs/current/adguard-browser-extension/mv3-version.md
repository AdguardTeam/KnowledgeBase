---
title: Chrome 版 AdGuard 浏览器扩展 MV3
sidebar_position: 5
---

由于 Chrome 浏览器 Web Store 逐步淘汰 MV2 扩展，Chrome 浏览器用户可能需要改用与 Chrome 浏览器新 API Manifest V3 兼容的 MV3 扩展。 我们在[博客](https://adguard.com/zh_cn/blog/tag/manifest-v3.html)上详细讨论此主题。

我们的 MV3 扩展程序有效拦截广告和跟踪器，同时无缝管理社交小部件、横幅和视频广告。 大多数用户不会注意到任何操作差异，但需要注意一些限制和变化。

## 在哪里下载我们的扩展

**MV3 版本**已取代了 [Chrome Web 商店](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg)中的旧扩展程序。

**MV3 的 Beta 测试版**仍可以在 [Chrome Web 商店](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf)中找到。

旧的 Beta 测试版扩展将更名为 [**AdGuard 广告拦截器 MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl)，并且将一直受到支持，直到 Google 淘汰它。

## 功能和设置的主要变化

- **没有自动和手动过滤器更新**。「过滤器」选项卡中不再有「自动更新过滤器」和「检查过滤器更新」选项。 由于某些规则现在以 DNR 形式应用，因此我们无法根据请求更新过滤器，只能通过更新扩展程序以及商店中的评论的完整过程来更新。

- **过滤日志**

  ![过滤日志 \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  由于 DNR 限制，我们无法准确显示哪个规则有效，但我们将显示基于引擎数据的“假设的规则”。 如需获取准确信息，需要自行在浏览器中安装扩展程序的“解压”版本。 查看[另一篇文章](/adguard-browser-extension/solving-problems/debug-rules/)了解有关如何执行此操作的详细说明。

- **跟踪保护**（以前称为「隐形模式」）

  ![跟踪保护 \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  由于我们无法使用声明性规则设置 Cookie 的 TTL，因此没有「Cookie」部分，以及「自销毁第一方 Cookie」和「自销毁第三方 Cookies」。

- 常规设置中不再提供**网络钓鱼和恶意软件保护**。 要保护自己免受恶意网站和诈骗的侵害，请在「过滤器」选项卡中启用适当的「安全」过滤器。

  ![安全 \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## 限制

### 规则和过滤器的数量限制

Manifest V3 对每个扩展的静态规则和正则表达式规则施加限制。 超出这些数量限制后，用户会收到通知。

![规则数量限制 \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![扩展数量太多 \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

基本上，Manifest V3 将规则分为静态（内置）和动态，并有严格的限制。

**静态规则**：每个扩展程序至少 **30,000** 个规则，单个用户安装的所有扩展程序的累计限制为 **330,000** 个。

正则表达式规则，**每个扩展**的限制设置为 **1,000**。

同时启用的过滤器的最大数量为 **50** 个。

**动态规则**：严格限制 **5,000** 个规则，其中包括最多 1,000 个正则表达式规则。

如果超出此限制，则仅会按以下顺序应用 **5,000 个转换后的规则**：首先是白名单，然后是用户规则，自定义过滤器，最后是快速修复的过滤器。

> **转换后的规则**是使用[声明性转换器][github-declarative-converter]转换为 \[DNR 格式]的规则。
> 在转换过程中，一些规则会覆盖其他规则（`$badfilter`），一些规则会合并（`$removeparam`），从而导致规则列表的顺序略有不同。
>
> 在转换后的规则列表中，我们将仅使用 5,000 个规则。 其余规则将显示在编辑器中，但无法被应用。

以下是带有基本修饰符的规则如何转换为声明性规则：

```adblock
||example.org^$script,third-party,domain=example.com
```

转换为

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

在 [GitHub][github-declarative-converter-examples] 上找到更多示例。

### 网络规则修饰符

网络规则修饰符存在限制：其中一些无法在 MV3 中实现，或者受到一定的限制。

有关这些限制的更多详细信息，请访问 [GitHub][github-declarative-converter]。
有关修饰符的更多信息，请参阅我们的[知识库](/general/ad-filtering/create-own-filters)。

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
