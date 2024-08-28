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

- **No auto and manual filter updates.** The options *Auto-update filters* and *Check filters update* are no longer available in the *Filters* tab. Since some of the rules are now applied in DNR form, we can’t update filters on request, only through the full process of updating the extension along with the review in the stores.

- **Filtering log**

  ![Filtering log *border](https://cdn.adtidy.org/content/blog/new/log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “approximate rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a [separate article](adguard-browser-extension/solving-problems/debug-rules).

- *Tracking protection* (formerly known as *Stealth mode*)

  ![Tracking protection *border](https://cdn.adtidy.org/content/blog/new/tracking_screen.png)

  There are no *Cookies* section, along with *Self-destruction of first-party cookies* and *Self-destruction of third-party cookies* since we cannot set the TTL of cookies using declarative rules.

- *Phishing & malware protection* is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate filters in the *Security* tab.

  ![Security](https://cdn.adtidy.org/content/blog/new/security.png)

## Limitations

### Maximum number of rules and filters

Manifest V3 imposes limits on static and regex rules per extension. Users may receive notifications when these limits are exceeded.

![Rule limits *border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions *border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Basically, Manifest V3 divides rules into static (built-in) and dynamic, with strict limits in place.

**Static rules:** minimum **30,000** rules per extension, with a cumulative limit of **330,000** for all extensions installed by a single user.

For regex rules, the limit is set at **1,000 per extension**.

The maximum number of simultaneously enabled filters is **50**.

**Dynamic rules:** a strict cap of **5,000** rules is imposed, which includes a maximum of 1,000 regex rules.

  If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first allowlist, then user rules, and finally — custom filters.

> **Converted rules** are rules that have been transformed to [DNR](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules) format using the [declarative converter](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter). During this conversion process, some rules may overwrite others (`badfilter`), some may be combined (`removeparame`), resulting in a list of rules with a slightly different order.
>
> From this list of converted rules, we will only use 5,000 rules. The rest of them will be displayed in the editor, but not applied.

 Here's how a rule with a basic modifier is converted to a declarative rule:

  ```bash
  ||example.org^$script,third-party,domain=example.com
  ```

  is converted to

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

  More examples can be found on [GitHub](https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples).

### Network rules

Network rules have limitations: some types of rules cannot be implemented in MV3, or can only be implemented with restrictions.

Below is a list of modifiers that are supported, partially supported, or not supported at all. More details about the limitations can be found on [GitHub](https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter). For further information on modifiers, please refer to our [Knowledge base](/general/ad-filtering/create-own-filters/#basic-rules-basic-modifiers).

  | Basic modifiers | Supported | Not supported | Partially supported |
  | [**`$denyallow`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$denyallow) | ✅ |   |   |
  | [**`$important`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$important) | ✅ |   |   |
  | [**`$match-case`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$match-case) | ✅ |   |   |
  | [**`$method`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#method) | ✅ |   |   |
  | [**`$third-party`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$third-party) | ✅ |   |   |
  | [**`$to`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#to) | ✅ |   |   |
  | [**`$header`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$header) |  | ✅  |   |
  | [**`$domain`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$domain) |  |   | ✅ |
  | [**`$popup`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$popup) |  |   | ✅ |
  | [**`$jsinject`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$jsinject) |  |   | ✅ |
  | [**`$stealth`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$stealth) |  |   | ✅ |
  | [**`$urlblock`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$urlblock) |  |   | ✅ |
  | [**`$genericblock`, `$generichide`, `$specifichide`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$genericblock) |  |   | ✅ |

  | Content-type modifiers | Supported | Not supported | Partially supported |
  | [**`$document`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$document)| ✅ |   |   |
  | [**`$image`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$image)| ✅ |   |   |
  | [**`$stylesheet`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$stylesheet)| ✅ |   |   |
  | [**`$script`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$script)| ✅ |   |   |
  | [**`$object`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$object)| ✅ |   |   |
  | [**`$font`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$font)| ✅ |   |   |
  | [**`$media`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$media)| ✅ |   |   |
  | [**`$subdocument`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$subdocument)| ✅ |   |   |
  | [**`$ping`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$ping)| ✅ |   |   |
  | [**`$xmlhttprequest`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$xmlhttprequest)| ✅ |   |   |
  | [**`$websocket`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$websocket)| ✅ |   |   |

  | Advanced modifiers | Supported | Not supported | Partially supported |
  | [**`$csp`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#csp)| ✅ |   |   |
  | [**`$permissions`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#permissions)| ✅ |   |   |
  | [**`$removeheader`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#removeheader)| ✅ |   |   |
  | [**`$noop`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__noop)| ✅ |   |   |
  | [**`$redirect-rule`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$redirect-rule)|  | ✅ |   |
  | [**`$replace`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$replace)|  | ✅ |   |
  | **`$hls`**, **`$jsonprune`**, **`$network`** |  | ✅ |   |
  | [**`$all`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$all)|  |   | ✅ |
  | [**`$badfilter`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$badfilter)|  |   | ✅ |
  | [**`$cookie`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$cookie)|  |   | ✅ |
  | [**`$redirect`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$redirect)|  |   | ✅ |
  | [**`$referrerpolicy`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#referrerpolicy)|  |   | ✅ |
  | [**`$removeparam`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$removeparam)|  |   | ✅ |

  The exception rules modifier [**`$content`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$content) is also not supported.
