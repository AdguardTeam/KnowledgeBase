---
title: AdGuard ブラウザ拡張機能 MV3対応版
sidebar_position: 5
---

[Chrome has removed all remaining Manifest V2 (MV2) extensions from the Chrome Web Store](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), so Chrome users need an MV3 extension, compatible with Chrome’s new API Manifest V3. このトピックに関する当社の考えは、[当社のブログ](https://adguard.com/en/blog/tag/manifest-v3.html)で詳しく議論されています。

AdGuard ブラウザ拡張機能MV3対応版は、SNSウィジェット、バナー、動画広告をシームレスに処理しながら、広告やトラッカーを効果的にブロックします。 ほとんどのユーザーは操作上の違いに気付かないでしょうが、注意すべき制限や変更点がいくつかあります。

## AdGuard ブラウザ拡張機能MV3対応版はどこで入手できるのか

The **MV3 version** is our primary Chrome extension and is available in the
[Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3 builds are also published on [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) as `chrome-mv3.zip`.

The **MV3 beta** is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** was removed from the Chrome Web Store together with all
other MV2 extensions. MV2 keeps working in Firefox and in Chromium-based browsers that retained
support for it — see [How to keep using AdGuard after Chrome removed MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## 機能と設定における主な変更点

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

## 制限

### ルールとフィルタの最大数

Manifest V3 では、拡張子ごとに静的ルールと正規表現ルールの制限が課せられています。 これらの制限を超えた場合、ユーザーは通知を受け取ることができます。

![Rule limits \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

基本的に、Manifest V3 はルールを静的 (組み込み) と動的に分割し、厳格な制限を設けています。

**静的ルール:** 拡張機能ごとに最低**30,000**ルール、1ユーザーがインストールしたすべての拡張機能の累積上限は**330,000**

正規表現ルールの場合、**拡張子ごとに1,000**に制限されています。

同時に有効なフィルタの最大数は**50**です。

**動的ルール:** ルールの厳密な上限は**5,000**で、これには最大1,000個の正規表現ルールが含まれます。

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules and finally Custom filters.

> **変換されたルール**は、[宣言的コンバータ][github-declarative-converter]を使って
> \[DNR形式]に変換されたルールです。
> この変換プロセス中に、一部のルールが他のルールを上書きしたり (`$badfilter`)、一部のルールが結合されたり (`$removeparam`)して、順序がわずかに異なるルールのリストが生成され流ことがあります。
>
> この変換されたルールのリストから、AdGuardは5,000のルールだけを使用します。 それ以外のルールはエディタに表示されますが、適用されません。

Here’s how a rule with a basic modifier is converted to a declarative rule:

```adblock
||example.org^$script,third-party,domain=example.com
```

が以下のものに変化されます:

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

その他の例については、[GitHub][github-declarative-converter-examples] をご覧ください。

### ネットワークルール修飾子

ネットワークルール修飾子には制限があります。一部、MV3環境では実装できないルール修飾子が合ったり、制限付きでしか実装できないものがあります。

制限の詳細については、[GitHub][github-declarative-converter] を参照してください。
修飾子の詳細については、[ナレッジベース](/general/ad-filtering/create-own-filters)を参照してください。

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
