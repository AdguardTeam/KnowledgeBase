---
title: Chrome 版 AdGuard 浏览器扩展 MV3
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), so Chrome users need an MV3 extension, compatible with Chrome’s new API Manifest V3. 我们在[博客](https://adguard.com/zh_cn/blog/tag/manifest-v3.html)上详细讨论此主题。

我们的 MV3 扩展程序有效拦截广告和跟踪器，同时无缝管理社交小部件、横幅和视频广告。 大多数用户不会注意到任何操作差异，但需要注意一些限制和变化。

## 在哪里下载我们的扩展

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip`.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## 功能和设置的主要变化

- **Filter updates.** The options _Auto-update filters_ and _Check filters update_ are not available
  in the _Filters_ tab: rules that ship as part of the extension can be updated only together with a
  new extension version, after store review. Keep automatic extension updates enabled in your
  browser.

  Custom filters you add by URL update on their own, independently of extension updates.

- **AdGuard Quick Fixes filter.** Because built-in rules can’t be updated on request, the extension
  ships the _AdGuard Quick Fixes_ filter. It uses dynamic rules to react to newly introduced ads and
  broken websites between releases, so keep it enabled.

- **Filtering log**

  ![Filtering log \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “assumed rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a [separate article](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking protection_ (formerly known as _Stealth mode_)

  ![Tracking protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

  There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Phishing & malware protection_ is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate _Security_ filters in the _Filters_ tab.

  ![Security \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

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

如果超过此限制，将仅应用 **5,000 条转换后的规则**，顺序如下：首先是「允许列表」，然后是「用户规则」，最后是「自定义过滤器」。

> **转换后的规则**是使用[声明性转换器][github-declarative-converter]转换为 \[DNR 格式]的规则。
> 在转换过程中，一些规则会覆盖其他规则（`$badfilter`），一些规则会合并（`$removeparam`），从而导致规则列表的顺序略有不同。
>
> 在转换后的规则列表中，我们将仅使用 5,000 个规则。 其余规则将显示在编辑器中，但无法被应用。

Here’s how a rule with a basic modifier is converted to a declarative rule:

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
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
