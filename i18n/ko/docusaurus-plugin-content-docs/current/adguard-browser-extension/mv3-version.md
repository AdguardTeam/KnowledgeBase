---
title: AdGuard Browser Extension for Chrome MV3
sidebar_position: 5
---

As MV2 extensions are being phased out in the Chrome Web Store, Chrome users may need to switch to MV3 extensions that are compatible with Chrome’s new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Our MV3 extension effectively blocks ads and trackers while seamlessly managing social widgets, banners, and video ads. Most users will not notice any operational differences, but there are some limitations and changes to be aware of.

## Where to find our extensions

The **MV3 version** will soon replace our old extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

The **beta version of MV3** will still be available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

The old beta extension will be renamed to [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) and will be supported until Google phases it out.

## Main changes in features and settings

- **No auto and manual filter updates.** The options _Auto-update filters_ and _Check filters update_ are no longer available in the _Filters_ tab. Since some of the rules are now applied in DNR form, we can’t update filters on request, only through the full process of updating the extension along with the review in the stores.

- **Filtering log**

  ![Filtering log \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “assumed rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a [separate article](/adguard-browser-extension/solving-problems/debug-rules).

- _Tracking protection_ (formerly known as _Stealth mode_)

  ![Tracking protection \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Phishing & malware protection_ is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate _Security_ filters in the _Filters_ tab.

  ![Security](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## 제한

### Maximum number of rules and filters

Manifest V3 imposes limits on static and regex rules per extension. Users may receive notifications when these limits are exceeded.

![Rule limits \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Basically, Manifest V3 divides rules into static (built-in) and dynamic, with strict limits in place.

**Static rules:** minimum **30,000** rules per extension, with a cumulative limit of **330,000** for all extensions installed by a single user.

For regex rules, the limit is set at **1,000 per extension**.

The maximum number of simultaneously enabled filters is **50**.

**Dynamic rules:** a strict cap of **5,000** rules is imposed, which includes a maximum of 1,000 regex rules.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first allowlist, then user rules, and finally — custom filters.

> **Converted rules** are rules that have been transformed
> to [DNR format] using the [declarative converter][github-declarative-converter].
> During this conversion process, some rules may overwrite others (`$badfilter`), some may be combined (`$removeparam`),
> resulting in a list of rules with a slightly different order.
>
> From this list of converted rules, we will only use 5,000 rules. The rest of them will be displayed in the editor, but not applied.

Here's how a rule with a basic modifier is converted to a declarative rule:

````
```bash
||example.org^$script,third-party,domain=example.com
```
````

is converted to

````
```bash
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
````

More examples can be found on [GitHub][github-declarative-converter-examples].

### Network rule modifiers

Network rule modifiers have limitations: some of them cannot be implemented in MV3, or can only be implemented with restrictions.

More details about the limitations can be found on [GitHub][github-declarative-converter].
For further information on modifiers, please refer to our [Knowledge base](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
