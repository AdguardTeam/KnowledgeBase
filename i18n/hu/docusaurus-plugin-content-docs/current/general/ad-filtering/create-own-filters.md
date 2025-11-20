---
title: How to create your own ad filters
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

In this article, we explain how to write custom filtering rules for use in AdGuard products. To test your rules, you can [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

A filter is a set of filtering rules applied to specific content, such as banners or popups. AdGuard has a list of standard filters created by our team. We constantly improve and update them, striving to meet the needs of most of our users.

At the same time, AdGuard allows you to create your own custom filters using the same types of rules that we have in our filters.

To describe the syntax of our filtering rules, we use [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), but we do not always strictly follow this specification.

:::info

Originally, the AdGuard's syntax was based on the syntax of Adblock Plus rules. Later, we extended it with new types of rules for better ad filtering. Some parts of this article about the rules common both to AdGuard and ABP were taken from [the Adblock Plus guide on how to write filters](https://adblockplus.org/en/filters).

:::

## Comments

Any line that starts with an exclamation mark is a comment. In the list of rules it is displayed in gray color. AdGuard will ignore this line, so you can write anything you want. Comments are usually placed above the rules and used to describe what a rule does.

For example:

```adblock
! This is the comment. Below this line, there is an actual filtering rule.
||example.org^
```

## Examples

### Blocking by domain name

![Blocking by domain name](https://cdn.adtidy.org/content/kb/ad_blocker/general/0_blocking_domain.svg)

**This rule blocks:**

- `http://example.org/ad1.gif`
- `http://subdomain.example.org/ad1.gif`
- `https://ads.example.org:8000/`

**This rule does not block:**

- `http://ads.example.org.us/ad1.gif`
- `http://example.com/redirect/http://ads.example.org/`

By default, such rules do not work for document requests. This means that the `||example.org^` rule will block a request made to `example.org` when you try to navigate to this domain from another website, but if you type `example.org` into the address bar and try to navigate to it, the website will open. To block the document request, you will need to use a rule with the [`$document` modifier](#document-modifier): `||example.org^$document`.

### Blocking exact address

![Blocking exact address](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**This rule blocks:**

- `http://example.org/`

**This rule does not block:**

- `https://example.org/banner/img`

### Basic rule modifiers {#basic-rule-modifiers-examples}

Filtering rules support numerous modifiers that allow you to fine-tune the rule behavior. Here is an example of a rule with some simple modifiers.

![Basic rule modifiers](https://cdn.adtidy.org/content/kb/ad_blocker/general/2_basic_rule_options.svg)

**This rule blocks:**

- `http://example.org/script.js` if this script is loaded from `example.com`.

**This rule does not block:**

- `https://example.org/script.js` if this script is loaded from `example.org`.
- `https://example.org/banner.png` because it is not a script.

### Unblocking an address

![Unblocking an address](https://cdn.adtidy.org/content/kb/ad_blocker/general/3_basic_exception.svg)

**This rule unblocks:**

- `http://example.org/banner.png` even if there is a blocking rule for this address.

Blocking rules with [`$important`](#important-modifier) modifier can override exceptions.

### Unblocking an entire website

![Unblocking an entire website](https://cdn.adtidy.org/content/kb/ad_blocker/general/4_unblock_entire_website.svg)

**This rule unblocks**

- It disables all cosmetic rules on `example.com`.
- It unblocks all requests sent from this website even if there is are blocking rules matching these requests.

### Cosmetic rule

![Cosmetic rule](https://cdn.adtidy.org/content/kb/ad_blocker/general/5_cosmetic_rules.svg)

Cosmetic rules are based on using a special language named CSS, which every browser understands. Basically, it adds a new CSS style to the website which purpose is to hide particular elements. You can [learn more about CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors) in general.

AdGuard [extends CSS](#extended-css-selectors) and lets filters developers handle much more complicated cases. However, to use these extended rules, you need to be fluent in regular CSS.

**Popular CSS selectors**

| Name                         | CSS selector                     | Description                                                                                                                                                                                                           |
| ---------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID selector                  | `#banners`                       | Matches all elements with `id` attribute equal to `banners`.<br/>![ID selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png)                                                   |
| Class selector               | `.banners`                       | Matches all elements with `class` attribute containing `banners`.<br/>![Class selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png)                                        |
| Attribute selector           | `div[class="banners"]`           | Matches all `div` elements with `class` attribute **exactly equal** to `banners`.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png)                        |
| Attribute substring selector | `div[class^="advert1"]`          | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`      | Matches all `div` elements which `class` attribute **ends with** the `banners_ads` string.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Attribute substring selector | `a[href^="http://example.com/"]` | Matches all links that are loaded from `http://example.com/` domain.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png)                           |
| Attribute selector           | `a[href="http://example.com/"]`  | Matches all links to **exactly** the `http://example.com/` address.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png)                                      |

## Restrictions and limitations

### Trusted filters {#trusted-filters}

Some rules can be used only in trusted filters. This category includes:

- filter lists [created by the AdGuard team](../adguard-filters),
- custom filter lists installed as `trusted`,
- user rules.

### AdGuard Tartalomblokkoló

AdGuard Content Blocker is an extension for Samsung and Yandex browsers that can be installed from Google Play. It is not to be confused with the fully functional AdGuard for Android that can only be downloaded from [our website](https://adguard.com/adguard-android/overview.html). Unfortunately, AdGuard Content Blocker capabilities are limited by what the browsers allow and they only support an old Adblock Plus filters syntax:

- Basic blocking rules with the following modifiers: `$domain`, `$third-party`, [content-type modifiers](#content-type-modifiers).
- Basic exception rules with the following modifiers: `$document`, `$elemhide`.
- Basic [element hiding rules](#cosmetic-elemhide-rules) with no extended CSS support.

Because of the limitations above AdGuard Content Blocker will not be mentioned in the compatibility notes.

### SafariConverterLib {#safari-converter-lib}

Safari Converter aims to support AdGuard filtering rules syntax as much as possible, but still there are limitations and shortcomings that are hard to overcome.

#### Basic (network) rules

Safari Converter supports a substantial subset of [basic rules](#basic-rules) and certainly supports the most important types of those rules.

##### Supported with limitations {#safari-converter--basic--supported-with-limitations}

- [Regular expression rules](#regexp-support) are limited to the subset of regex that is [supported by Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).

- `$domain` - [domain modifier](#domain-modifier) is supported with several limitations:

    - It's impossible to mix allowed and disallowed domains (like `$domain=example.org|~sub.example.org`). Please upvote the [feature request](https://bugs.webkit.org/show_bug.cgi?id=226076) to WebKit to lift this limitation.
    - "Any TLD" (i.e. `domain.*`) is not fully supported. In the current implementation the converter just replaces `.*` with top 100 popular TLDs. This implementation will be improved [in the future](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732).
    - Using regular expressions in `$domain` is not supported, but it also will be improved [in the future](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732).

- `$denyallow` - this modifier is supported via converting `$denyallow` rule to a set of rules (one blocking rule + several unblocking rules).

  Due to that limitation `$denyallow` is only allowed when the rule also has `$domain` modifier.

    - Generic rule `*$denyallow=x.com,image,domain=a.com` will be converted to:

    ```adblock
    *$image,domain=a.com
    @@||x.com$image,domain=a.com
    ```

    - Rule `/banner.png$image,denyallow=test1.com|test2.com,domain=example.org` will be converted to:

    ```adblock
    /banner.png$image,domain=example.org
    @@||test1.com/banner.png$image,domain=example.org
    @@||test1.com/*/banner.png$image,domain=example.org
    @@||test2.com/banner.png$image,domain=example.org
    @@||test2.com/*/banner.png$image,domain=example.org
    ```

    - Rule without `$domain` is **not supported**: `$denyallow=a.com|b.com`.

- `$popup` - popup rules are supported, but they're basically the same as `$document`-blocking rules and will not attempt to close the tab.

- Exception rules (`@@`) disable cosmetic filtering on matching domains.

  Exception rules in Safari rely on the rule type `ignore-previous-rules` so to make it work we have to order the rules in a specific order. Exception rules without modifiers are placed at the end of the list and therefore they disable not just URL blocking, but cosmetic rules as well.

  This limitation may be lifted if [#70](https://github.com/AdguardTeam/SafariConverterLib/issues/70) is implemented.

- `$urlblock`, `$genericblock` is basically the same as `$document`, i.e. it disables all kinds of filtering on websites.

  These limitations may be lifted when [#69](https://github.com/AdguardTeam/SafariConverterLib/issues/69) and [#71](https://github.com/AdguardTeam/SafariConverterLib/issues/71) are implemented.

- `$content` makes no sense in the case of Safari since HTML filtering rules are not supported so it's there for compatibility purposes only. Rules with `$content` modifier are limited to `document` resource type.

- `$specifichide` is implemented by scanning existing element hiding rules and removing the target domain from their `if-domain` array.

    - `$specifichide` rules MUST target a domain, i.e. be like this: `||example.org^$specifichide`. Rules with more specific patterns will be discarded, i.e. `||example.org/path$specifichide` will not be supported.
    - `$specifichide` rules only cover rules that target the same domain as the rule itself, subdomains are ignored. I.e. the rule `@@||example.org^$specifichide` will disable `example.org##.banner`, but will ignore `sub.example.org##.banner`. This limitation may be lifted if [#72](https://github.com/AdguardTeam/SafariConverterLib/issues/72) is implemented.

- `urlblock`, `genericblock`, `generichide`, `elemhide`, `specifichide`, and `jsinject` modifiers can be used only as a single modifier in a rule. This limitation may be lifted in the future: [#73](https://github.com/AdguardTeam/SafariConverterLib/issues/73).

- `$websocket` (fully supported starting with Safari 15).

- `$ping` (fully supported starting with Safari 14).

##### Not supported

- `$app`
- `$header`
- `$method`
- `$strict-first-party` (to be supported in the future: [#64](https://github.com/AdguardTeam/SafariConverterLib/issues/64))
- `$strict-third-party` (to be supported in the future: [#65](https://github.com/AdguardTeam/SafariConverterLib/issues/65))
- `$to` (to be supported in the future: [#60](https://github.com/AdguardTeam/SafariConverterLib/issues/60))
- `$extension`
- `$stealth`
- `$cookie` (partial support in the future: [#54](https://github.com/AdguardTeam/SafariConverterLib/issues/54))
- `$csp`
- `$hls`
- `$inline-script`
- `$inline-font`
- `$jsonprune`
- `$xmlprune`
- `$network`
- `$permissions`
- `$redirect`
- `$redirect-rule`
- `$referrerpolicy`
- `$removeheader`
- `$removeparam`
- `$replace`
- `$urltransform`

#### Cosmetic rules {#cosmetic-rules-safari-limitations}

Safari Converter supports most of the [cosmetic rules](#cosmetic-rules) although only element hiding rules with basic CSS selectors are supported natively via Safari Content Blocking, everything else needs to be interpreted by an additional extension.

##### Limitations of cosmetic rules

- Specifying domains is subject to the same limitations as the `$domain` modifier of basic rules.

- [Non-basic rules modifiers](#non-basic-rules-modifiers) are supported with some limitations:

    - `$domain` - the same limitations as everywhere else.
    - `$path` - supported, but if you use regular expressions, they will be limited to the subset of regex that is [supported by Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).
    - `$url` - to be supported in the future: [#68](https://github.com/AdguardTeam/SafariConverterLib/issues/68)

#### Script/scriptlet rules

Safari Converter fully supports both [script rules](#javascript-rules) and [scriptlet rules](#scriptlets). However, these rules can only be interpreted by a separate extension.

:::warning

For scriptlet rules, it is **very important** that they are run as early as possible when the page loads. The reason for that is that it's important to run them before the page scripts. Unfortunately, with Safari there will always be a slight delay that can decrease the quality of blocking.

:::

#### HTML filtering rules {#html-filtering-rules-safari-limitations}

[HTML filtering rules](#html-filtering-rules) are **not supported** and will not be supported in the future. Unfortunately, Safari does not provide necessary technical capabilities to implement them.

## Basic rules

The most simple rules are so-called *Basic rules*. They are used to block requests to specific URLs. Or to unblock it, if there is a special marker "@@" at the beginning of the rule. The basic principle for this type of rules is quite simple: you have to specify the address and additional parameters that limit or expand the rule scope.

:::note Sub-requests

Basic rules for blocking requests are applied only to **sub-requests**. That means they will not block the loading of the page unless it is explicitly specified with a `$document` modifier.

:::

:::note Response status

Browser detects a blocked request as completed with an error.

:::

:::note Rule length

Rules shorter than 4 characters are considered incorrect and will be ignored.

:::

### Basic rule syntax {#basic-rules-syntax}

```text
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- **`pattern`** — an address mask. Every request URL is collated to this mask. In the template, you can also use the special characters described [below](#basic-rules-special-characters). Note that AdGuard truncates URLs to a length of 4096 characters in order to speed up matching and avoid issues with ridiculously long URLs.
- **`@@`** — a marker that is used in rules of exception. To turn off filtering for a request, start your rule with this marker.
- **`modifiers`** — parameters that "clarify" the basic rule. Some of them limit the rule scope and some can completely change they way it works.

### Special characters {#basic-rules-special-characters}

- **`*`** — a wildcard character. It is used to represent any set of characters. This can also be an empty string or a string of any length.
- **`||`** — an indication to apply the rule to the specified domain and its subdomains. With this character, you do not have to specify a particular protocol and subdomain in address mask. It means that `||` stands for `http://*.`, `https://*.`, `ws://*.`, `wss://*.` at once.
- **`^`** — a separator character mark. Separator character is any character, but a letter, a digit, or one of the following: `_` `-` `.` `%`. In this example separator characters are shown in bold: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. The end of the address is also accepted as separator.
- **`|`** — a pointer to the beginning or the end of address. The value depends on the character placement in the mask. For example, a rule `swf|` corresponds to `http://example.com/annoyingflash.swf` , but not to `http://example.com/swf/index.html`. `|http://example.org` corresponds to `http://example.org`, but not to `http://domain.com?url=http://example.org`.

:::note

`|`, `||`, `^` can only be used with rules that have a URL pattern. For example, `||example.com##.advert` is incorrect and will be ignored by the blocker.

:::

:::note Visual representation

We also recommend to get acquainted with [the Adblock Plus filter cheatsheet](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how such rules should be made.

:::

### Regular expressions support {#regexp-support}

If you want even more flexibility in making rules, you can use [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) instead of a default simplified mask with special characters.

:::caution Performance

Rules with regular expressions work more slowly, therefore it is recommended to avoid them or to limit their scope to specific domains.

:::

If you want a blocker to determine a regular expression, the `pattern` has to look like this:

```text
pattern = "/" regexp "/"
```

For example, `/banner\d+/$third-party` this rule will apply the regular expression `banner\d+` to all third-party requests. Exclusion rule with regular expression looks like this: `@@/banner\d+/`.

:::info Compatibility

AdGuard Safari and AdGuard for iOS do not fully support regular expressions because of [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

:::

### Wildcard support for TLD (top-level domains) {#wildcard-for-tld}

Wildcard characters are supported for TLDs of the domains in patterns of [cosmetic](#cosmetic-rules), [HTML filtering](#html-filtering-rules) and [JavaScript](#javascript-rules) rules.

For cosmetic rules, e.g. `example.*##.banner`, multiple domains are matched due to the part `.*`, i.e. `example.com`, `sub.example.net`, `example.co.uk`, etc.

For basic rules the described logic is applicable only for the domains specified in [`$domain` modifier](#domain-modifier), e.g. `||*/banners/*$image,domain=example.*`.

:::info Compatibility

In AdGuard for Windows, Mac, Android, and AdGuard Browser Extension rules with wildcard `.*` match any [public suffix (or eTLD)](https://publicsuffix.org/list/). But for AdGuard for Safari and iOS [the supported list of top-level domains](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) is limited due to Safari limitations.

:::

Rules with wildcard for TLD are not supported by AdGuard Content Blocker.

### Basic rule examples

- `||example.com/ads/*` — a simple rule, which corresponds to addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.

- `||example.org^$third-party` — this rule blocks third-party requests to `example.org` and its subdomains.

- `@@||example.com$document` — general exception rule. It completely disables filtering for `example.com` and all subdomains. There is a number of modifiers which can be used in exception rules. For more details, please follow the link [below](#exception-modifiers).

### Basic rule modifiers

- [Basic modifiers](#basic-rules-basic-modifiers)
- [Content-type modifiers](#content-type-modifiers)
- [Exception modifiers](#exception-modifiers)

:::note

The features described in this section are intended for experienced users. They extend capabilities of "Basic rules", but in order to use them you need to have a basic understanding of the way your browser works.

:::

You can change the behavior of a "basic rule" by using additional modifiers. Modifiers should be located in the end of the rule after a `$` sign and be separated by commas.

Example:

```adblock
||domain.com^$popup,third-party
```

### Basic modifiers {#basic-rules-basic-modifiers}

The following modifiers are the most simple and frequently used. Basically, they just limit the scope of rule application.

<!-- Please keep them sorted -->

| Modifier \ Products                                |       [CoreLibs apps][cl-apps]        |    [AdGuard for Chromium][ext-chr]     |   [AdGuard for Chrome MV3][ext-mv3]    |     [AdGuard for Firefox][ext-ff]      |       [AdGuard for iOS][ios-app]       |     [AdGuard for Safari][ext-saf]      | [AdGuard Tartalomblokkoló][and-cb] |
| --------------------------------------------------- |:-------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:----------------------------------:|
| [$app](#app-modifier)                               |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                  |
| [$denyallow](#denyallow-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                  |
| [$domain](#domain-modifier)                         |                   ✅                   |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) | ✅ [*[1]](#domain-modifier-limitations) |                 ✅                  |
| [$header](#header-modifier)                         |                   ✅                   | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    |                   ❌                    |                 ❌                  |
| [$important](#important-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                  |
| [$match-case](#match-case-modifier)                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                  |
| [$method](#method-modifier)                         |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                  |
| [$popup](#popup-modifier)                           | ✅ [*[3]](#popup-modifier-limitations) |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  | ✅ [*[3]](#popup-modifier-limitations)  |                 ❌                  |
| [$strict-first-party](#strict-first-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                  |
| [$strict-third-party](#strict-third-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                  |
| [$third-party](#third-party-modifier)               |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                  |
| [$to](#to-modifier)                                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                  |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported

:::

#### **`$app`** {#app-modifier}

This modifier lets you narrow the rule coverage down to a specific application (or a list of applications). This might be not too important on Windows and Mac, but this is very important on mobile devices where some of the filtering rules must be app-specific.

- Android — use the app package name, e.g. `org.example.app`.
- Windows — use the process name, e.g. `chrome.exe`.
- Mac — use the bundle ID or the process name, e.g. `com.google.Chrome`.

For Mac, you can find out the bundle ID or the process name of the app by viewing the respective request details in the Filtering log.

**Syntax**

The modifier is a list of one or more expressions, each of which is matched against an application in a particular way depending on its type. These expressions are separated by the `|` symbol.

```text
applications = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_app / wildcard_app / regexp )
```

- **`regular_app`** — a regular application name (`example.app`). It corresponds to the specified application and is matched lexicographically.
- **`wildcard_app`** — an application name ending with a wildcard character `*`, such as `org.example.*` or `com.ad*`. It matches all applications whose names start with the specified prefix. Matching is done lexicographically.
- **`regexp`** — a regular expression that starts and ends with `/`. It works the same way as the basic URL rules, but the characters `/`, `$`, `,`, and `|` must be escaped with `\`.

**Examples**

- `||baddomain.com^$app=org.example.app` — a rule to block requests that match the specified mask and are sent from the `org.example.app` Android app.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — the same rule but it works for both `org.example.app1` and `org.example.app2` apps.

If you want the rule not to be applied to certain apps, start the app name with the `~` sign.

- `||baddomain.com^$app=~org.example.app` — a rule to block requests that match the specified mask and are sent from any app except for the `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — same as above, but now two apps are excluded: `org.example.app1` and `org.example.app2`.

You can use wildcards in the `$app` modifier:

- `||baddomain.com^$app=org.example.*` — applies to all apps whose package names start with `org.example.`

You can use regular expressions in the `$app` modifier by enclosing them in forward slashes `/.../`. This allows for more flexible matching — for example, targeting a group of apps from the same publisher or matching complex patterns.

- `||baddomain.com^$app=/org\.example\.[a-z0-9_]+/` — applies to all apps whose package name starts with `org.example` (e.g. `org.example.app1`, `org.example.utility`, etc.).
- `||baddomain.com^$app=/^org\.example\.app\$\|^org\.example\.[ab].*/` — applies to `org.example.app` and to any app whose package starts with `org.example.a` or `org.example.b`.

The `$app` modifier supports combining all three types of entries — plain names, wildcards, and regular expressions — within the same rule, but it does not allow combining negated and non-negated expressions together.

- `||example.com^$app=org.example.app|org.example.*|/org\.example\.[a-z]+/` — applies to `org.example.app`, all matching `org.example.*` and `org.example.[a-z]+` apps.

:::caution Restrictions

- Apps in the modifier value cannot include a wildcard inside the string , e.g. `$app=com.*.music`. Use a regular expression instead: `$app=/com\..*\.music/`.
- You cannot combine negated (`~`) and non-negated expressions in the same `$app` modifier — this would be ambiguous.

:::

:::info Compatibility

- Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$app` modifier.
- On Windows the process name is case-insensitive starting with AdGuard for Windows with [CoreLibs][] v1.12 or later.
- Support for regular expressions and for combining different types of entries (plain names, wildcards, and regular expressions) in the `$app` modifier is available starting from CoreLibs v1.19 or later.

:::

#### **`$denyallow`** {#denyallow-modifier}

`$denyallow` modifier allows to avoid creating additional rules when it is needed to disable a certain rule for specific domains. `$denyallow` matches only target domains and not referrer domains.

Adding this modifier to a rule is equivalent to excluding the domains by the rule's matching pattern or to adding the corresponding exclusion rules. To add multiple domains to one rule, use the `|` character as a separator.

**Examples**

This rule:

```adblock
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

is equivalent to this one:

```adblock
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

or to the combination of these three:

```adblock
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

:::caution Restrictions

- The rule's matching pattern cannot target any specific domains, e.g. it cannot start with `||`.
- Domains in the modifier value cannot be negated, e.g. `$denyallow=~x.com`, or have a wildcard TLD, e.g. `$denyallow=x.*`, or be a regular expression, e.g. `$denyallow=/\.(com\|org)/`.
- `$denyallow` cannot be used together with [`$to`](#to-modifier). It can be expressed with inverted `$to`: `$denyallow=a.com|b.com` is equivalent to `$to=~a.com|~b.com`.

The rules which violate these restrictions are considered invalid.

:::

:::info Compatibility

Rules with `$denyallow` modifier are not supported by AdGuard for iOS, Safari, and AdGuard Content Blocker.

:::

#### **`$domain`** {#domain-modifier}

`$domain` limits the rule scope to requests made **from** the specified domains and their subdomains (as indicated by the [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) HTTP header).

**Syntax**

The modifier is a list of one or more expressions separated by the `|` symbol, each of which is matched against a domain in a particular way depending on its type (see below).

```text
domains = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_domain / any_tld_domain / regexp )
```

- **`regular_domain`** — a regular domain name (`domain.com`). Corresponds the specified domain and its subdomains. It is matched lexicographically.
- **`any_tld_domain`** — a domain name ending with a wildcard character as a [public suffix](https://publicsuffix.org/learn/), e.g. for `example.*` it is `co.uk` in `example.co.uk`. Corresponds to the specified domain and its subdomains with any public suffix. It is matched lexicographically.
- **`regexp`** — a regular expression, starts and ends with `/`. The pattern works the same way as in the basic URL rules, but the characters `/`, `$`, `,`, and `|` must be escaped with `\`.

:::info

Rules with `$domain` modifier as `regular_domain` are supported by all AdGuard products.

:::

**Examples**

**Just `$domain`:**

- `||baddomain.com^$domain=example.org` blocks requests that match the specified mask, and are sent from domain `example.org` or its subdomains.
- `||baddomain.com^$domain=example.org|example.com` — the same rule, but it works for both `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign.

**`$domain` and negation `~`:**

- `||baddomain.com^$domain=example.org` blocks requests that match the specified mask and are sent from the `example.org` domain or its subdomains.
- `||baddomain.com^$domain=example.org|example.com` — the same rule, but it works for both `example.org` and `example.com`.
- `||baddomain.com^$domain=~example.org` blocks requests matching the pattern sent from any domain except `example.org` and its subdomains.
- `||baddomain.com^$domain=example.org|~foo.example.org` blocks requests sent from `example.org` and its subdomains, except the subdomain `foo.example.org`.
- `||baddomain.com^$domain=/(^\|.+\.)example\.(com\|org)\$/` blocks requests sent from `example.org` and `example.com` domains and all their subdomains.
- `||baddomain.com^$domain=~a.com|~b.*|~/(^\|.+\.)c\.(com\|org)\$/` blocks requests sent from any domains, except `a.com`, `b` with any public suffix (`b.com`, `b.co.uk`, etc.), `c.com`, `c.org`, and their subdomains.

**`$domain` modifier matching target domain:**

In some cases the `$domain` modifier can match not only the referrer domain, but also the target domain.

This happens when the rule has one of the following modifiers: [`$cookie`](#cookie-modifier), [`$csp`](#csp-modifier), [`$permissions`](#permissions-modifier), [`$removeparam`](#removeparam-modifier).

These modifiers will not be applied if the referrer matches a rule with `$domain` that explicitly excludes the referrer domain, even if the target domain also matches the rule.

**Examples**

- `*$cookie,domain=example.org|example.com` will block cookies for all requests to and from `example.org` and `example.com`.
- `*$document,domain=example.org|example.com` will block requests only from `example.org` and `example.com`, but not to them.

In the following examples it is implied that requests are sent from `http://example.org/page` (the referrer) and the target URL is `http://targetdomain.com/page`.

- `page$domain=example.org` will be matched, as it matches the referrer domain.
- `page$domain=targetdomain.com` will not be matched because it does not match the referrer domain.
- `||*page$domain=targetdomain.com,cookie` will be matched because the rule contains `$cookie` modifier despite the pattern `||*page` may match specific domains.
- `page$domain=targetdomain.com|~example.org,cookie` will not be matched because the referrer domain is explicitly excluded.

##### `$domain` modifier limitations {#domain-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3], `regexp` and `any_tld_domain` entries are not supported.

AdGuard for iOS and AdGuard for Safari support the `$domain` modifier but have some limitations. For more details, see the [SafariConverterLib section](#safari-converter--basic--supported-with-limitations).

Rules with `regexp` in the `$domain` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

:::info Compatibility

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.12 or later the `$domain` modifier can be alternatively spelled as `$from`.

:::

#### **`$header`** {#header-modifier}

The `$header` modifier allows matching the HTTP response having a specific header with (optionally) a specific value.

**Syntax**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

where:

- **`h_name`** — required, an HTTP header name. It is matched case-insensitively.
- **`h_value`** — optional, an HTTP header value matching expression, it may be one of the following:
    - **`string`** — a sequence of characters. It is matched against the header value lexicographically;
    - **`regexp`** — a regular expression, starts and ends with `/`. The pattern works the same way as in the basic URL rules, but the characters `/`, `$` and `,` must be escaped with `\`.

The modifier part, `":" h_value`, may be omitted. In that case, the modifier matches the header name only.

**Examples**

- `||example.com^$header=set-cookie:foo` blocks requests whose responses have the `Set-Cookie` header with the value matching `foo` literally.
- `||example.com^$header=set-cookie` blocks requests whose responses have the `Set-Cookie` header with any value.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` unblocks requests whose responses have the `Set-Cookie` header with value matching the `foo, bar$` regular expression.
- `@@||example.com^$header=set-cookie` unblocks requests whose responses have a `Set-Cookie` header with any value.

##### `$header` modifier limitations {#header-modifier-limitations}

:::caution Restrictions

1. The `$header` modifier can be matched only when headers are received. So if the request is blocked or redirected at an earlier stage, the modifier cannot be applied.

1. In AdGuard Browser Extension, the `$header` modifier is only compatible with [`$csp`](#csp-modifier), [`$removeheader`](#removeheader-modifier) (response headers only), [`$important`](#important-modifier), [`$badfilter`](#badfilter-modifier), [`$domain`](#domain-modifier), [`$third-party`](#third-party-modifier), [`$match-case`](#match-case-modifier), and [content-type modifiers](#content-type-modifiers) such as [`$script`](#script-modifier) and [`$stylesheet`](#stylesheet-modifier). The rules with other modifiers are considered invalid and will be discarded.

:::

:::info Compatibility

Rules with the `$header` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$important`** {#important-modifier}

The `$important` modifier applied to a rule increases its priority over rules without the identical modifier. Even over basic exception rules.

Go to [rules priorities](#rule-priorities) for more details.

**Examples**

```adblock
! blocking rule will block all requests despite of the exception rule
||example.org^$important
@@||example.org^
```

```adblock
! if the exception rule also has `$important` modifier, it will prevail and requests won't be blocked
||example.org^$important
@@||example.org^$important
```

#### **`$match-case`** {#match-case-modifier}

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

**Examples**

- `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

:::info Compatibility

Rules with the `$match-case` are supported by AdGuard for iOS and AdGuard for Safari with SafariConverterLib v2.0.43 or later.

All other products already support this modifier.

:::

#### **`$method`** {#method-modifier}

This modifier limits the rule scope to requests that use the specified set of HTTP methods. Negated methods are allowed. The methods must be specified in all lowercase characters, but are matched case-insensitively. To add multiple methods to one rule, use the vertical bar `|` as a separator.

**Examples**

- `||evil.com^$method=get|head` blocks only GET and HEAD requests to `evil.com`.
- `||evil.com^$method=~post|~put` blocks any requests to `evil.com` except POST or PUT.
- `@@||evil.com$method=get` unblocks only GET requests to `evil.com`.
- `@@||evil.com$method=~post` unblocks any requests to `evil.com` except POST.

:::caution Restrictions

Rules with mixed negated and not negated values are considered invalid. So, for example, the rule `||evil.com^$method=get|~head` will be ignored.

:::

:::info Compatibility

Rules with `$method` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

:::

#### **`$popup`** {#popup-modifier}

AdGuard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note that not all the tabs can be closed.

**Examples**

- `||domain.com^$popup` — if you try to go to `http://domain.com/` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

##### `$popup` modifier limitations {#popup-modifier-limitations}

:::caution Limitations

1. The `$popup` modifier works best in AdGuard Browser Extension for Chromium-based browsers and Firefox.
1. In [AdGuard for Chrome MV3][ext-mv3] rules with the [`$popup`][popup-in-mv3] modifier would not work, so we disable converting them to declarative rules. We will try to use them only in our [TSUrlFilter][] engine and close new tabs programmatically.
1. In AdGuard for iOS and AdGuard for Safari, `$popup` rules simply block the page right away.
1. In AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux, the `$popup` modifier may not detect a popup in some cases and it will not be blocked. The `$popup` modifier applies the `document` content type with a special flag which is passed to a blocking page. Blocking page itself can do some checks and close the window if it is really a popup. Otherwise, page should be loaded. It can be combined with other request type modifiers, such as `$third-party`, `$strict-third-party`, `$strict-first-party`, and `$important`.

:::

:::info Compatibility

Rules with the `$popup` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$strict-first-party`** {#strict-first-party-modifier}

Works the same as the [`$~third-party`](#third-party-modifier) modifier, but only treats the request as first-party if the referrer and origin have exactly the same hostname.

Requests without a referrer are also treated as first-party requests, and the rules with the `$strict-first-party` modifier are applied to such requests.

**Examples**

- domain.com$strict-first-party' — this rule applies only to `domain.com`. For example, a request from `domain.com` to `http://domain.com/icon.ico` is a first-party request. A request from `sub.domain.com` to `http://domain.com/icon.ico` is treated as a third-party one (as opposed to the `$~third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict1p`.

:::

:::info Compatibility

Rules with the `$strict-first-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

Requests without a referrer are matched by rules with `$strict-first-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$strict-third-party`** {#strict-third-party-modifier}

Works the same as the [`$third-party`](#third-party-modifier) modifier but also treats requests from the domain to its subdomains and vice versa as third-party requests.

**Examples**

- `||domain.com^$strict-third-party` — this rule applies to all domains except `domain.com`. An example of a third-party request: `http://sub.domain.com/banner.jpg` (as opposed to the `$third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict3p`.

:::

:::info Compatibility

Rules with the `$strict-third-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

:::

#### **`$third-party`** {#third-party-modifier}

A restriction on third-party and custom requests. A third-party request is a request from an external domain. For example, a request to `example.org` from `domain.com` is a third-party request.

:::note

To be considered as such, a third-party request should meet one of the following conditions:

1. Its referrer is not a subdomain of the target domain or vice versa. For example, a request to `subdomain.example.org` from `example.org` is not a third-party request
1. Its `Sec-Fetch-Site` header is set to `cross-site`

:::

**Examples**

**`$third-party`:**

- `||domain.com^$third-party` — this rule applies to all domains except `domain.com` and its subdomains. The rule is never applied if there is no referrer. An example of a third-party request: `http://example.org/banner.jpg`.

If there is a `$~third-party` modifier, the rule is only applied to requests that are not from third parties. Which means they have to be sent from the same domain or shouldn't have a referrer at all.

**`$~third-party`:**

- `||domain.com$~third-party` — this rule applies only to `domain.com` and its subdomains. Example of a non third-party request: `http://sub.domain.com/icon.ico`.

Requests without a referrer are also treated as non third-party requests and the rules with the `$~third-party` modifier are applied to such requests.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$3p`.

:::

:::info Compatibility

Requests without a referrer are matched by rules with `$~third-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$to`** {#to-modifier}

`$to` limits the rule scope to requests made **to** the specified domains and their subdomains. To add multiple domains to one rule, use the `|` character as a separator.

**Examples**

- `/ads$to=evil.com|evil.org` blocks any request to `evil.com` or `evil.org` and their subdomains with a path matching `/ads`.
- `/ads$to=~not.evil.com|evil.com` blocks any request to `evil.com` and its subdomains, with a path matching `/ads`, except requests to `not.evil.com` and its subdomains.
- `/ads$to=~good.com|~good.org` blocks any request with a path matching `/ads`, except requests to `good.com` or `good.org` and their subdomains.

:::caution Restrictions

[`$denyallow`](#denyallow-modifier) cannot be used together with `$to`. It can be expressed with inverted `$to`: `$denyallow=a.com|b.com` is equivalent to `$to=~a.com|~b.com`.

:::

:::info Compatibility

Rules with the `$to` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

:::

### Content-type modifiers {#content-type-modifiers}

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

:::info Compatibility

There is a big difference in how AdGuard determines the content type on different platforms. For AdGuard Browser Extension, content type for every request is provided by the browser. AdGuard for Windows, Mac, and Android use the following method: first, the apps try to determine the type of the request by the `Sec-Fetch-Dest` request header or by the filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

:::

**Examples of content-type modifiers**

- `||example.org^$image` — corresponds to all images from `example.org`.
- `||example.org^$script,stylesheet` — corresponds to all the scripts and styles from `example.org`.
- `||example.org^$~image,~script,~stylesheet` — corresponds to all requests to `example.org` except for the images, scripts and styles.

<!-- Please keep them sorted -->

| Modifier \ Products                                          |          [CoreLibs apps][cl-apps]           | [AdGuard for Chromium][ext-chr] | [AdGuard for Chrome MV3][ext-mv3] | [AdGuard for Firefox][ext-ff] |        [AdGuard for iOS][ios-app]         |       [AdGuard for Safari][ext-saf]       | [AdGuard Tartalomblokkoló][and-cb] |
| ------------------------------------------------------------- |:-------------------------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:-----------------------------------------:|:-----------------------------------------:|:----------------------------------:|
| [$document](#document-modifier)                               |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                  |
| [$font](#font-modifier)                                       |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$image](#image-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$media](#media-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$object](#object-modifier)                                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                  |
| [$other](#other-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                  |
| [$ping](#ping-modifier)                                       |    ✅ [*[1]](#ping-modifier-limitations)     |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                  |
| [$script](#script-modifier)                                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$stylesheet](#stylesheet-modifier)                           |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$subdocument](#subdocument-modifier)                         | ✅ [*[2]](#subdocument-modifier-limitations) |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                  |
| [$websocket](#websocket-modifier)                             |                      ✅                      |                ✅                |                 ✅                 |               ✅               | ✅ [*[3]](#websocket-modifier-limitations) | ✅ [*[3]](#websocket-modifier-limitations) |                 ❌                  |
| [$xmlhttprequest](#xmlhttprequest-modifier)                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                  |
| [$webrtc 🚫](#webrtc-modifier "removed")                       |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                  |
| [$object-subrequest 🚫](#object-subrequest-modifier "removed") |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                  |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported
- 🚫 — removed and no longer supported

:::

#### **`$document`** {#document-modifier}

The rule corresponds to the main frame document requests, i.e. HTML documents that are loaded in the browser tab. It does not match iframes, there is a [`$subdocument` modifier](#subdocument-modifier) for these.

By default, AdGuard does not block the requests that are loaded in the browser tab (e.g. "main frame bypass"). The idea is not to prevent pages from loading as the user clearly indicated that they want this page to be loaded. However, if the `$document` modifier is specified explicitly, AdGuard does not use that logic and prevents the page load. Instead, it responds with a "blocking page".

If this modifier is used with an exclusion rule (`@@`), it completely disables blocking on corresponding pages. It is equivalent to using `$elemhide`, `$content`, `$urlblock`, `$jsinject`, `$extension` modifiers simultaneously.

**Examples**

- `@@||example.com^$document` completely disables filtering on all pages at `example.com` and all subdomains.

- `||example.com^$document` blocks HTML document request to `example.com` with a blocking page.
- `||example.com^$document,redirect=noopframe` redirects HTML document request to `example.com` to an empty html document.
- `||example.com^$document,removeparam=test` removes `test` query parameter from HTML document request to `example.com`.
- `||example.com^$document,replace=/test1/test2/` replaces `test1` with `test2` in HTML document request to `example.com`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$doc`.

:::

#### **`$font`** {#font-modifier}

The rule corresponds to requests for fonts, e.g. `.woff` filename extension.

#### **`$image`** {#image-modifier}

The rule corresponds to images requests.

#### **`$media`** {#media-modifier}

The rule corresponds to requests for media files — music and video, e.g. `.mp4` files.

#### **`$object`** {#object-modifier}

The rule corresponds to browser plugins resources, e.g. Java or Flash.

:::info Compatibility

Rules with `$object` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

#### **`$other`** {#other-modifier}

The rule applies to requests for which the type has not been determined or does not match the types listed above.

#### **`$ping`** {#ping-modifier}

The rule corresponds to requests caused by either `navigator.sendBeacon()` or the `ping` attribute on links.

##### `$ping` modifier limitations {#ping-modifier-limitations}

:::caution Limitations

AdGuard for Windows, Mac, and Android often cannot accurately detect `navigator.sendBeacon()`. Using `$ping` is not recommended in the filter lists that are supposed to be used by CoreLibs-based AdGuard products.

:::

:::info Compatibility

Rules with `$ping` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

#### **`$script`** {#script-modifier}

The rule corresponds to script requests, e.g. JavaScript, VBScript.

#### **`$stylesheet`** {#stylesheet-modifier}

The rule corresponds to CSS files requests.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$css`.

:::

#### **`$subdocument`** {#subdocument-modifier}

The rule corresponds to requests for built-in pages — HTML tags `frame` and `iframe`.

**Examples**

- `||example.com^$subdocument` blocks built-in page requests (`frame` and `iframe`) to `example.com` and all its subdomains anywhere.
- `||example.com^$subdocument,domain=domain.com` blocks built-in page requests (`frame` и `iframe`) to `example.com` (and its subdomains) from `domain.com` and all its subdomains.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$frame`.

:::

##### `$subdocument` modifier limitations {#subdocument-modifier-limitations}

:::caution Limitations

In AdGuard for Windows, Mac, and Android subdocuments are being detected by the [Sec-Fetch-Dest header][] if it is present. Otherwise, some main pages may be treated as subdocuments.

:::

:::info Compatibility

Rules with `$subdocument` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$websocket`** {#websocket-modifier}

The rule applies only to WebSocket connections.

##### `$websocket` modifier limitations {#websocket-modifier-limitations}

:::caution Limitations

For AdGuard for Safari and AdGuard for iOS, it is supported on devices with macOS Monterey (version 12) and iOS 16 or higher respectively.

:::

:::info Compatibility

`$websocket` modifier is supported in all AdGuard products except AdGuard Content Blocker.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

The rule applies only to ajax requests (requests sent via the JavaScript object `XMLHttpRequest`).

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$xhr`.

:::

:::info Compatibility

AdGuard for Windows, Mac, Android when filtering older browsers cannot accurately detect this type and sometimes detects it as [`$other`](#other-modifier) or [`$script`](#script-modifier). They can only reliably detect this content type when filtering modern browsers that support [Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header).

:::

#### **`$object-subrequest` (removed)** {#object-subrequest-modifier}

:::danger Removal notice

`$object-subrequest` modifier is removed and is no longer supported. Rules with it are considered as invalid. The rule corresponds to requests by browser plugins (it is usually Flash).

:::

#### **`$webrtc` (removed)** {#webrtc-modifier}

:::danger Removal notice

This modifier is removed and is no longer supported. Rules with it are considered as invalid. If you need to suppress WebRTC, consider using the `nowebrtc` [scriptlet](#scriptlets).

:::

The rule applies only to WebRTC connections.

**Examples**

- `||example.com^$webrtc,domain=example.org` blocks webRTC connections to `example.com` from `example.org`.
- `@@*$webrtc,domain=example.org` disables the RTC wrapper for `example.org`.

### Exception rules modifiers {#exception-modifiers}

Exception rules disable the other basic rules for the addresses to which they correspond. They begin with a `@@` mark. All the basic modifiers listed above can be applied to them and they also have a few special modifiers.

:::note Visual representation

We recommend to get acquainted with [the Adblock Plus filter cheatsheet](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how exception rules should be made.

:::

<!-- Please keep them sorted -->

| Modifier \ Products                    | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] |    [AdGuard for Chrome MV3][ext-mv3]     | [AdGuard for Firefox][ext-ff] |          [AdGuard for iOS][ios-app]          |        [AdGuard for Safari][ext-saf]         | [AdGuard Tartalomblokkoló][and-cb] |
| --------------------------------------- |:------------------------:|:-------------------------------:|:----------------------------------------:|:-----------------------------:|:--------------------------------------------:|:--------------------------------------------:|:----------------------------------:|
| [$content](#content-modifier)           |            ✅             |                ❌                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                  |
| [$elemhide](#elemhide-modifier)         |            ✅             |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                  |
| [$extension](#extension-modifier)       |            ✅             |                ❌                |                    ❌                     |               ❌               |                      ❌                       |                      ❌                       |                 ❌                  |
| [$jsinject](#jsinject-modifier)         |            ✅             |                ✅                | ✅ [*[1]](#jsinject-modifier-limitations) |               ✅               |                      ✅                       |                      ✅                       |                 ❌                  |
| [$stealth](#stealth-modifier)           |            ✅             |                ✅                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                  |
| [$urlblock](#urlblock-modifier)         |            ✅             |                ✅                |                    ❌                     |               ✅               |   ✅ [*[2]](#urlblock-modifier-limitations)   |   ✅ [*[2]](#urlblock-modifier-limitations)   |                 ❌                  |
| [$genericblock](#genericblock-modifier) |            ✅             |                ✅                |                    ✅                     |               ✅               | ✅ [*[3]](#genericblock-modifier-limitations) | ✅ [*[3]](#genericblock-modifier-limitations) |                 ❌                  |
| [$generichide](#generichide-modifier)   |            ✅             |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                  |
| [$specifichide](#specifichide-modifier) |            ✅             |                ✅                |                    ✅                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                  |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported

:::

:::info

By default, without specifying additional content type modifiers, exception rule modifiers override other basic rules only for main frame document requests (see [`$document`](#document-modifier) for more information about main frame document).

For example:

- The website `example.com` contains an `iframe` pointing to `example1.com`.
- The rule `#%#//console.log('test')` is applied.

In this case, the log will appear twice in the console: once for the main frame document and once for `iframe`.

If you add the `@@||example.com^$jsinject` rule, the log will appear only once for `iframe`.

:::

#### **`$content`** {#content-modifier}

Disables [HTML filtering](#html-filtering-rules), [`$hls`](#hls-modifier), [`$replace`](#replace-modifier), and [`$jsonprune`](#jsonprune-modifier) rules on the pages that match the rule.

**Examples**

- `@@||example.com^$content` disables all content modifying rules on pages at `example.com` and all its subdomains.

#### **`$elemhide`** {#elemhide-modifier}

Disables any [cosmetic rules](#cosmetic-rules) on the pages matching the rule.

**Examples**

- `@@||example.com^$elemhide` disables all cosmetic rules on pages at `example.com` and all subdomains.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ehide`.

:::

#### **`$extension`** {#extension-modifier}

Disables specific userscripts or all userscripts for a given domain.

**Syntax**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` stands for a specific userscript name to be disabled by the modifier. The modifier can contain any number of userscript names or none. In the latter case the modifier disables all the userscripts.

Userscript names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single (`'`) and double (`"`) ASCII quotes are supported. Multiple userscript names should be separated with a pipe (`|`). However, if a userscript name is a single word without any special characters, it can be used without quotes.

You can also exclude a userscript by adding a `~` character before it. In this case, the userscript will not be disabled by the modifier.

```adblock
$extension=~"userscript name"
```

:::note

When excluding a userscript, you must place `~` outside the quotes.

:::

If a userscript's name includes quotes (`"`), commas (`,`), or pipes (`|`), they must be escaped with a backslash (`\`).

```adblock
$extension="userscript name\, with \"quote\""
```

**Examples**

- `@@||example.com^$extension="AdGuard Assistant"` disables the `AdGuard Assistant` userscript on `example.com` website.
- `@@||example.com^$extension=MyUserscript` disables the `MyUserscript` userscript on `example.com` website.
- `@@||example.com^$extension='AdGuard Assistant'|'AdGuard Popup Blocker'` disables both `AdGuard Assistant` and `AdGuard Popup Blocker` userscripts on `example.com` website.
- `@@||example.com^$extension=~"AdGuard Assistant"` disables all user scripts on `example.com` website, except `AdGuard Assistant`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"AdGuard Popup Blocker"` disables all user scripts on `example.com` website, except `AdGuard Assistant` and `AdGuard Popup Blocker`.
- `@@||example.com^$extension` no userscript will work on webpages on `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` disables the `AdGuard "Assistant"` userscript on `example.com` website.

:::info Compatibility

- Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$extension` modifier.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Forbids adding of JavaScript code to the page. You can read about scriptlets and javascript rules further.

**Examples**

- `@@||example.com^$jsinject` disables javascript on pages at `example.com` and all subdomains.

##### `$jsinject` modifier limitations {#jsinject-modifier-limitations}

:::info Limitations

Rules with the [`$jsinject`][jsinject-in-mv3] modifier cannot be converted to DNR in [AdGuard for Chrome MV3][ext-mv3]. We only use them in the [TSUrlFilter][] engine to disable some cosmetic rules.

:::

:::info Compatibility

The `$jsinject` modifier is not supported by AdGuard for Chrome MV3 ([yet][jsinject-in-mv3]) and AdGuard Content Blocker.

:::

#### **`$stealth`** {#stealth-modifier}

Disables the Tracking protection (formerly Stealth Mode) module for all corresponding pages and requests.

**Syntax**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` stand for certain Tracking protection options disabled by the modifier. The modifier can contain any number of specific options (see below) or none. In the latter case the modifier disables all the Tracking protection features.

The list of the available modifier options:

- `searchqueries` disables [**Hide your search queries**](../../stealth-mode#searchqueries) option
- `donottrack` disables [**Ask websites not to track you**](../../stealth-mode#donottrack) option
- `3p-cookie` disables [**Self-destructing third-party cookies**](../../stealth-mode#3p-cookie) option
- `1p-cookie` disables [**Self-destructing first-party cookies**](../../stealth-mode#1p-cookie) option
- `3p-cache` disables [**Disable cache for third-party requests**](../../stealth-mode#3p-cache) option
- `3p-auth` disables [**Block third-party Authorization header**](../../stealth-mode#3p-auth) option
- `webrtc` disables [**Block WebRTC**](../../stealth-mode#webrtc) option
- `push` disables [**Block Push API**](../../stealth-mode#push) option
- `location` disables [**Block Location API**](../../stealth-mode#location) option
- `flash` disables [**Block Flash**](../../stealth-mode#flash) option
- `java` disables [**Block Java**](../../stealth-mode#java) option
- `referrer` disables [**Hide Referer from third parties**](../../stealth-mode#miscellaneous) option
- `useragent` disables [**Hide your User-Agent**](../../stealth-mode#useragent) option
- `ip` disables [**Hide your IP address**](../../stealth-mode#ip) option
- `xclientdata` disables [**Remove X-Client-Data header from HTTP requests**](../../stealth-mode#xclientdata) option
- `dpi` disables [**Protect from DPI**](../../stealth-mode#dpi) option

**Examples**

- `@@||example.com^$stealth` disables Tracking protection for `example.com` (and subdomains) requests, except for blocking cookies and hiding tracking parameters (see below).
- `@@||domain.com^$script,stealth,domain=example.com` disables Tracking protection only for script requests to `domain.com` (and its subdomains) on `example.com` and all its subdomains.
- `@@||example.com^$stealth=3p-cookie|dpi` disables blocking third-party cookies and DPI fooling measures for `example.com`.

:::note

Blocking cookies and removing tracking parameters is achieved by using rules with the [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) and [`$removeparam`](#removeparam-modifier) modifiers. Exception rules that contain only the `$stealth` modifier will not do these things. If you want to completely disable all Tracking protection features for a given domain, you must include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Restrictions

- Modifier options must be lowercase, i.e. `$stealth=DPI` will be rejected.
- Modifier options cannot be negated, i.e. `$stealth=~3p-cookie` will be rejected.
- AdGuard Browser Extension supports only `searchqueries`, `donottrack`, `referrer`, `xclientdata`, `1p-cookie` and `3p-cookie` options.

:::

:::info Compatibility

- Tracking protection (formerly Stealth Mode) is available in AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox and Chromium-based browsers, except AdGuard for Chrome MV3. All other products will ignore the rules with `$stealth` modifier.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Disables blocking of all requests sent from the pages matching the rule and disables all [`$cookie`](#cookie-modifier) rules.

**Examples**

- `@@||example.com^$urlblock` — any requests sent from the pages at `example.com` and all subdomains are not going to be blocked.

##### `$urlblock` modifier limitations {#urlblock-modifier-limitations}

:::caution Limitations

In AdGuard for iOS and AdGuard for Safari, rules with `$urlblock` work as [$document exclusion](#document-modifier) — unblock everything.

:::

:::info Compatibility

Rules with `$urlblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### Generic rules {#exception-modifiers-generic-rules}

Before we can proceed to the next modifiers, we have to make a definition of *generic rules*. The rule is generic if it is not limited to specific domains. Wildcard character `*` is supported as well.

For example, these rules are generic:

```adblock
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

And these are not:

```adblock
domain.com###banner
||domain.com^$domain=example.com
```

#### **`$genericblock`** {#genericblock-modifier}

Disables generic basic rules on pages that correspond to exception rule.

**Examples**

- `@@||example.com^$genericblock` disables generic basic rules on any pages at `example.com` and all subdomains.

##### `$genericblock` modifier limitations {#genericblock-modifier-limitations}

:::caution Limitations

In AdGuard for iOS and AdGuard for Safari, rules with `$genericblock` work as [$document exclusion](#document-modifier) — unblock everything.

:::

:::info Compatibility

Rules with `$genericblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### **`$generichide`** {#generichide-modifier}

Disables all generic [cosmetic rules](#cosmetic-rules) on pages that correspond to the exception rule.

**Examples**

- `@@||example.com^$generichide` disables generic cosmetic rules on any pages at `example.com` and its subdomains.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ghide`.

:::

#### **`specifichide`** {#specifichide-modifier}

Disables all specific element hiding and CSS rules, but not general ones. Has an opposite effect to [`$generichide`](#generichide-modifier).

**Examples**

- `@@||example.org^$specifichide` disables `example.org##.banner` but not `##.banner`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$shide`.

:::

:::note

All cosmetic rules — not just specific ones — can be disabled by [`$elemhide` modifier](#elemhide-modifier).

:::

:::info Compatibility

Rules with `$specifichide` modifier are not supported by AdGuard for iOS, AdGuard for Safari, and AdGuard Content Blocker.

:::

### Advanced capabilities {#advanced-modifiers}

These modifiers are able to completely change the behavior of basic rules.

<!-- Please keep them sorted -->

| Modifier \ Products                        |          [CoreLibs apps][cl-apps]           |       [AdGuard for Chromium][ext-chr]        |      [AdGuard for Chrome MV3][ext-mv3]       |        [AdGuard for Firefox][ext-ff]         | [AdGuard for iOS][ios-app] | [AdGuard for Safari][ext-saf] | [AdGuard Tartalomblokkoló][and-cb] |
| ------------------------------------------- |:-------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------:|:-----------------------------:|:----------------------------------:|
| [$all](#all-modifier)                       |                      ✅                      |                      ✅                       |     ✅ [*[1]](#all-modifier-limitations)      |                      ✅                       |             ✅              |               ✅               |                 ❌                  |
| [$badfilter](#badfilter-modifier)           |                      ✅                      |                      ✅                       |  ✅ [*[2]](#badfilter-modifier-limitations)   |                      ✅                       |             ✅              |               ✅               |                 ❌                  |
| [$cookie](#cookie-modifier)                 |                      ✅                      |                      ✅                       |    ✅ [*[3]](#cookie-modifier-limitations)    |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$csp](#csp-modifier)                       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$hls](#hls-modifier)                       |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$inline-font](#inline-font-modifier)       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$inline-script](#inline-script-modifier)   |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$jsonprune](#jsonprune-modifier)           |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$xmlprune](#xmlprune-modifier)             |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$network](#network-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$permissions](#permissions-modifier)       | ✅ [*[4]](#permissions-modifier-limitations) |                      ✅                       |                      ✅                       | ✅ [*[4]](#permissions-modifier-limitations)  |             ❌              |               ❌               |                 ❌                  |
| [$redirect](#redirect-modifier)             |                      ✅                      |                      ✅                       |   ✅ [*[5]](#redirect-modifier-limitations)   |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$redirect-rule](#redirect-rule-modifier)   |                      ✅                      |                      ✅                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$referrerpolicy](#referrerpolicy-modifier) |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$removeheader](#removeheader-modifier)     |                      ✅                      | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) |             ❌              |               ❌               |                 ❌                  |
| [$removeparam](#removeparam-modifier)       |                      ✅                      |                      ✅                       | ✅ [*[6]](#removeparam-modifier-limitations)  |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$replace](#replace-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$urltransform](#urltransform-modifier)     |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$reason](#reason-modifier)                 |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                  |
| [noop](#noop-modifier)                      |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                  |
| [$empty 👎](#empty-modifier "deprecated")    |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |
| [$mp4 👎](#mp4-modifier "deprecated")        |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                  |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported
- 👎 — deprecated; still supported but will be removed in the future

:::

#### **`$all`** {#all-modifier}

`$all` modifier is made of [all content-types modifiers](#content-type-modifiers) and [`$popup`](#popup-modifier). E.g. rule `||example.org^$all` is converting into rule:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

:::caution Restrictions

This modifier cannot be used as an exception with the `@@` mark.

:::

##### `$all` modifier limitations {#all-modifier-limitations}

:::caution Limitations

Since `$popup` is a part if `$all`, the `$all` modifier is not supported by AdGuard for Chrome MV3 because of [`$popup` modifier limitations](#popup-modifier-limitations).

:::

:::info Compatibility

Rules with `$all` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$badfilter`** {#badfilter-modifier}

The rules with the `$badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `$badfilter` rule (without the `$badfilter` modifier).

**Examples**

- `||example.com$badfilter` disables `||example.com`
- `||example.com$image,badfilter` disables `||example.com$image`
- `@@||example.com$badfilter` disables `@@||example.com`
- `||example.com$domain=domain.com,badfilter` disables `||example.com$domain=domain.com`

Rules with `$badfilter` modifier can disable other basic rules for specific domains if they fulfill the following conditions:

1. The rule has a `$domain` modifier
1. The rule does not have a negated domain `~` in `$domain` modifier value

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note that [wildcard-TLD logic](#wildcard-for-tld) works here as well.

**Examples**

- `/some$domain=example.com|example.org|example.io` is disabled for `example.com` by `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` and `/some$domain=example.io` are disabled completely by `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` is disabled completely by `/some$domain=example.*,badfilter`
- `/some$domain=example.*` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` is NOT disabled for `example.com` by `/some$domain=example.com|~example.org,badfilter` because the value of `$domain` modifier contains a negated domain

##### `$badfilter` modifier limitations {#badfilter-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] a rule with the `$badfilter` modifier is applied in DNR only if it fully cancels the source rule. We cannot calculate it if it is only partially canceled. [Examples][badfilter-in-mv3].

:::

:::info Compatibility

Rules with `$badfilter` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$cookie`** {#cookie-modifier}

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes AdGuard suppress or modify the `Cookie` and `Set-Cookie` headers.

**Multiple rules matching a single request**

In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

**Syntax**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

where:

- **`name`** — optional, string or regular expression to match cookie name.
- **`seconds`** — number of seconds for current time to offset the expiration date of cookie.
- **`strategy`** — string for [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) strategy to be applied to the cookie.

For example,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:

- Set its expiration date to current time plus `3600` seconds
- Makes the cookie use [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) "lax" strategy.

**Escaping special characters**

If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` to escape each of them. For example, escaped comma looks like this: `\,`.

**Examples**

- `||example.org^$cookie` blocks **all** cookies set by `example.org`; this is an equivalent to setting `maxAge=0`
- `$cookie=__cfduid` blocks CloudFlare cookie everywhere
- `$cookie=/__utm[a-z]/` blocks Google Analytics cookies everywhere
- `||facebook.com^$third-party,cookie=c_user` prevents Facebook from tracking you even if you are logged in

There are two methods to deactivate `$cookie` rules: the primary method involves using an exception marked with `@@` — `@@||example.org^$cookie`. The alternative method employs a `$urlblock` exception (also included under the `$document` exception alias — `$elemhide,jsinject,content,urlblock,extension`). Here's how it works:

- `@@||example.org^$cookie` unblocks all cookies set by `example.org`
- `@@||example.org^$urlblock` unblocks all cookies set by `example.org` and disables blocking of all requests sent from `example.org`
- `@@||example.org^$cookie=concept` unblocks a single cookie named `concept`
- `@@||example.org^$cookie=/^_ga_/` unblocks every cookie that matches the regular expression

##### `$cookie` modifier limitations {#cookie-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] we delete cookies in 2 ways: from `content-script` side (to which we have access) and from `onBeforeSendHeaders` listener. Since `onBeforeSendHeaders` and other listeners are no longer blocking, we are not able to delete them in all cases. You can check if a rule works with [this test](https://testcases.agrd.dev/Filters/cookie-rules/test-cookie-rules).

:::

:::caution Restrictions

`$cookie` rules support these types of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`, `strict-third-party`, and `strict-first-party`.

:::

:::info Compatibility

Rules with `$cookie` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$csp`** {#csp-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

:::

For the requests matching a `$csp` rule, we will strengthen response security policy by enhancing the content security policy, similar to the content security policy of the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Multiple rules matching a single request**

In case if multiple `$csp` rules match a single request, we will apply each of them.

**Syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section below.

**Examples**

- `||example.org^$csp=frame-src 'none'` blocks all frames on example.org and its subdomains.
- `@@||example.org/page/*$csp=frame-src 'none'` disables all rules with the `$csp` modifier exactly matching `frame-src 'none'` on all the pages matching the rule pattern. For instance, the rule above.
- `@@||example.org/page/*$csp` disables all the `$csp` rules on all the pages matching the rule pattern.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` disables inline scripts on all the pages matching the rule pattern.
- `@@||example.org^$document` or `@@||example.org^$urlblock` disables all the `$csp` rules on all the pages matching the rule pattern.

:::caution Restrictions

- There are a few characters forbidden in the `$csp` value: `,`, `$`.
- `$csp` rules support three types of modifiers: `$domain`, `$important`, `$subdocument`.
- Rules with `report-*` directives are considered invalid.

:::

:::info Compatibility

Rules with `$csp` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and AdGuard for Safari.

:::

#### **`$hls`** {#hls-modifier}

`$hls` rules modify the response of a matching request. They are intended as a convenient way to remove segments from [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

The word "segment" in this document means either a "Media Segment" or a "playlist" as part of a "Master Playlist": `$hls` rules do not distinguish between a "Master Playlist" and a "Media Playlist".

:::

**Syntax**

- `||example.org^$hls=urlpattern` removes segments whose URL matches the URL pattern `urlpattern`. The pattern works just like the one in basic URL rules, however, the characters `/`, `$` and `,` must be escaped with `\` inside `urlpattern`.
- `||example.org^$hls=/regexp/options` removes segments where the URL or one of the tags (for certain options, if present) is matched by the regular expression `regexp`. Available `options` are:
    - `t` — instead of testing the segment's URL, test each of the segment's tags against the regular expression. A segment with a matching tag is removed;
    - `i` — make the regular expression case-insensitive.

The characters `/`, `$` and `,` must be escaped with `\` inside `regexp`.

**Exceptions**

Basic URL exceptions shall not disable rules with the `$hls` modifier. They can be disabled as described below:

- `@@||example.org^$hls` disables all `$hls` rules for responses from URLs matching `||example.org^`.
- `@@||example.org^$hls=text` disables all `$hls` rules with the value of the `$hls` modifier equal to `text` for responses from URLs matching `||example.org^`.

:::tip

`$hls` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::

:::note

When multiple `$hls` rules match the same request, their effect is cumulative.

:::

**Examples**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` removes all segments with the matching URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` achieves more or less the same with a regular expression instead of a URL pattern.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` removes all segments which have the matching tag.

**Anatomy of an HLS playlist**

A quick summary of the [specification](https://datatracker.ietf.org/doc/html/rfc8216):

1. An HLS playlist is a collection of text lines
1. A line may be empty, a comment (starts with `#`), a tag (also starts with `#`, can only be recognized by name) or a URL
1. A URL line is called a "segment"
1. Tags may apply to a single segment, i.e. the first URL line after the tag, to all segments following the tag and until the tag with the same name, or to the whole playlist

Some points specific to the operation of `$hls` rules:

1. When a segment is removed, all of the tags that apply only to that segment are also removed
1. When there is a tag that applies to multiple segments, and all of those segments are removed, the tag is also removed
1. Since there is no way to recognize different kinds of tags by syntax, we recognize all of the tags specified by the RFC, plus some non-standard tags that we have seen in the field. Any lines starting with `#` and not recognized as a tag are passed through without modification, and are not matched against the rules
1. Tags will not be matched if they apply to the entire playlist, and `$hls` rules cannot be used to remove them, as these rule types are intended for segment removals. If you know what you are doing, you can use `$replace` rules to remove or rewrite just a single tag from the playlist

**An example of a transformation done by the rules:**

<details>
<summary>Original response</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXTINF,5
preroll.ts
#UPLYNK-SEGMENT:abc123,ad
#UPLYNK-KEY:aabb1122
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

<details>
<summary>Applied rules</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Modified response</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

:::caution Restrictions

- Rules with the `$hls` modifier can only be used [**in trusted filters**](#trusted-filters).
- `$hls` rules are compatible with the modifiers `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest` only.
- `$hls` rules only apply to HLS playlists, which are UTF-8 encoded text starting with the line `#EXTM3U`. Any other response will not be modified by these rules.
- `$hls` rules do not apply if the size of the original response is more than 10 MB.

:::

:::info Compatibility

Rules with the `$hls` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$inline-script`** {#inline-script-modifier}

The `$inline-script` modifier is designed to block inline JavaScript embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline ads or potentially malicious scripts. The rule `||example.org^$inline-script` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

The `$inline-font` modifier is designed to block inline fonts embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline fonts that could be used for data collection and fingerprinting. The rule `||example.org^$inline-font` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

`$jsonprune` rules modify the response to a matching request by removing JSON items that match a modified [JSONPath](https://goessner.net/articles/JsonPath/) expression. They do not modify responses which are not valid JSON documents.

In AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Syntax**

- `||example.org^$jsonprune=expression` removes items that match the modified JSONPath expression `expression` from the response.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

The modified JSONPath syntax has the following differences from the original:

1. Script expressions are not supported
1. The supported filter expressions are:
    - `?(has <key>)` — true if the current object has the specified key
    - `?(key-eq <key> <value>)` — true if the current object has the specified key, and its value is equal to the specified value
    - `?(key-substr <key> <value>)` — true if the specified value is a substring of the value of the specified key of the current object
1. Whitespace outside of double- or single-quoted strings has no meaning
1. Both double- and single-quoted strings can be used
1. Expressions ending with `..` are not supported
1. Multiple array slices can be specified in square brackets

There are various online tools that make working with JSONPath expressions more convenient:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations have unique features/quirks and are subtly incompatible with each other.

**Exceptions**

Basic URL exceptions shall not disable rules with the `$jsonprune` modifier. They can be disabled as described below:

- `@@||example.org^$jsonprune` disables all `$jsonprune` rules for responses from URLs matching `||example.org^`.
- `@@||example.org^$jsonprune=text` disables all `$jsonprune` rules with the value of the `$jsonprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

`$jsonprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$jsonprune` rules match the same request, they are sorted in lexicographical order, the first rule is applied to the original response, and each of the remaining rules is applied to the result of applying the previous one.

:::

**Examples**

- `||example.org^$jsonprune=\$..[one\, "two three"]` removes all occurrences of the keys "one" and "two three" anywhere in the JSON document.

<details>
<summary>Input</summary>

```json
{
    "one": 1,
    "two": {
        "two three": 23,
        "four five": 45
    }
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "two": {
        "four five": 45
    }
}
```

</details>

- `||example.org^$jsonprune=\$.a[?(has ad_origin)]` removes all children of `a` that have an `ad_origin` key.

<details>
<summary>Input</summary>

```json
{
    "a": [
        {
            "ad_origin": "https://example.org",
            "b": 42
        },
        {
            "b": 1234
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "a": [
        {
            "b": 1234
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` removes all items that are at nesting level 3 and have a property "Some key" equal to "Some value".

<details>
<summary>Input</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Nested JSONPath expressions**

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.11 or later, JSONPath expressions may be used as keys in filter expressions.

- `||example.org^$jsonprune=\$.elems[?(has "\$.a.b.c")]` removes all children of `elems` which have a property selectable by the JSONPath expression `$.a.b.c`.

<details>
<summary>Input</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
            "k": "v"
        },
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "elems": [
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` removes all children of `elems` which have a property selectable by the JSONPath expression `$.a.b.c` with a value equal to `"abc"`.

<details>
<summary>Input</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        },
        {
            "a": {"b": {"c": "abc"}}
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        }
    ]
}
```

</details>

:::caution Restrictions

- `$jsonprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- `$jsonprune` rules do not apply if the size of the original response is greater than 10 MB.

:::

:::info Compatibility

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

`$xmlprune` rules modify the response to a matching request by removing XML items that match an [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/) expression. The expression must return a [node-set](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). `$xmlprune` rules do not modify responses which are not well-formed XML documents.

**Syntax**

- `||example.org^$xmlprune=expression` removes items that match the XPath expression `expression` from the response.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

**Exceptions**

Basic URL exceptions shall not disable rules with the `$xmlprune` modifier. They can be disabled as described below:

- `@@||example.org^$xmlprune` disables all `$xmlprune` rules for responses from URLs matching `||example.org^`.
- `@@||example.org^$xmlprune=text` disables all `$xmlprune` rules with the value of the `$xmlprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

`$xmlprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$xmlprune` rules match the same request, they are applied in lexicographical order.

:::

**Examples**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` removes odd-numbered books from the bookstore.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>



<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>



<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>
```

</details>

- `||example.org^$xmlprune=/bookstore/book[year = 2003]` removes books from the year 2003 from the bookstore.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>





</bookstore>
```

</details>

- `||example.org^$xmlprune=//*/@*` removes all attributes from all elements.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore location="cy">

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book>
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

:::caution Restrictions

- `$xmlprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- `$xmlprune` rules do not apply if the size of the original response is greater than 10 MB.

:::

:::info Compatibility

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

This is basically a Firewall-like rule allowing to fully block or unblock access to a specified remote address.

1. `$network` rules match **IP addresses only**! You cannot use them to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, hence there will be no further filtering at all.
4. If the IP part starts and ends with `/` character, it is treated as a regular expression.

We recommend to get acquainted with this [article](#regexp-support) for better understanding of regular expressions.

:::caution Restrictions

The `$network` modifier can only be used in rules together with the `$app` and `$important` modifiers, and not with any other modifiers.

:::

**Examples**

- `174.129.166.49:3478^$network` blocks access to `174.129.166.49:3478` (but not to `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` blocks access to `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` blocks access to `174.129.166.49:*`.
- `@@174.129.166.49$network` makes AdGuard bypass data to the endpoint. No other rules will be applied.
- `/.+:3[0-9]{4}/$network` blocks access to any port from 30000 to 39999.
- `/8.8.8.(:?8|4)/$network` blocks access to both `8.8.8.8` and `8.8.8.4`.

:::info Compatibility

Only AdGuard for Windows, Mac, and Android are technically capable of using rules with `$network` modifier.

:::

#### **`$permissions`** {#permissions-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have a basic understanding of the [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) security layer.

:::

For the requests matching a `$permissions` rule, AdGuard strengthens response's permissions policy by adding an additional permission policy equal to the `$permissions` modifier contents. `$permissions` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Syntax**

`$permissions` value syntax is identical to that of the `Permissions-Policy` header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) with the following exceptions:

1. A comma that separates multiple features **MUST** be escaped — see examples below.
2. A pipe character (`|`) can be used instead of a comma to separate features.

Available directives are listed in the [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives) article.

`$permissions` value can be empty in the case of exception rules — see examples below.

**Examples**

- `||example.org^$permissions=autoplay=()` disallows autoplay media requested through the `HTMLMediaElement` interface across `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` disables all rules with the `$permissions` modifier exactly matching `autoplay=()` on all the pages matching the rule pattern. For instance, the rule above. It is important to note that the exception rule only takes effect in the case of an **exact value match**. For example, if you want to disable the rule  `$permissions=a=()\,b=()`, you need exception rule `@@$permissions=a=()\,b=()`, and **not** `@@$permissions=b=()\,a=()`, **nor** `@@$permissions=b=()` because `b=()\,a=()` or `b=()` does not match with `a=()\,b=()`.
- `@@||example.org/page/*$permissions` disables all the `$permissions` rules on all the pages matching the rule pattern.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` disallows using the Storage Access API to request access to unpartitioned cookies and using video input devices across `example.org` and `example.com`.
- `$domain=example.org|example.com,permissions=storage-access=()|camera=()` does the same — a `|` can be used to separate the features instead of an escaped comma.
- `@@||example.org^$document` or `@@||example.org^$urlblock` disables all the `$permission` rules on all the pages matching the rule pattern.

:::note

`$permissions` rules only take effect for main frame and sub frame requests. This means they are applied when a page is loaded or when an iframe is loaded.

:::

:::note

If there are multiple `$permissions` rules that match the same request, multiple `Permissions-Policy` headers will be added to the response for each rule with their `$permissions` value. So if you have two rules: `||example.org^$permissions=autoplay=()` and `||example.org^$permissions=geolocation=()\,camera=()` that match the same request, the response will contain two `Permissions-Policy` headers: `autoplay=()` and `geolocation=()\,camera=()`.

:::

##### `$permissions` modifier limitations {#permissions-modifier-limitations}

:::caution Limitations

Firefox ignores the `Permissions-Policy` header. For more information, see [this issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1694922).

:::

:::caution Restrictions

1. Characters forbidden in the `$permissions` value: `$`.
2. `$permissions` is compatible with a limited set of modifiers: `$domain`, `$important`, `$subdocument`, and [content-type modifiers](#content-type-modifiers).
3. `$permissions` rules that do not have any [content-type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

:::

:::info Compatibility

- Rules with the `$permissions` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.
- Pipe separator `|` instead of escaped comma is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.14 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard is able to redirect web requests to a local "resource".

**Syntax**

AdGuard uses the same filtering rule syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

##### Disabling `$redirect` rules

- `||example.org/script.js$script,redirect=noopjs` — this rule redirects all requests to `example.org/script.js` to the resource named `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — this rule redirects all requests to `example.org/test.mp4` to the resource named `noopmp4-1s`.
- `@@||example.org^$redirect` will disable all `$redirect` rules for URLs that match `||example.org^`.
- `@@||example.org^$redirect=nooptext` will disable all rules with `$redirect=nooptext` for any request that matches `||example.org^`.

More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Priorities of `$redirect` rules {#redirect-rule-priorities}

`$redirect` rules have higher priority than regular basic blocking rules. This means that if there is a basic blocking rule, the `$redirect` rule will override it. Allowlist rules with `@@` mark have higher priority than `$redirect` rules. If a basic rule with the `$important` modifier and the `$redirect` rule matches the same URL, the latter is overridden unless it's also marked as `$important`.

<!-- Please do not replace `>` by `→` -->

**In short: `$important` > `@@` > `$redirect` > `basic rules`.**

Go to [rules priorities](#rule-priorities) for more details.

##### `$redirect` modifier limitations {#redirect-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] allowlist rules with `$redirect` are not supported.

:::

:::info Compatibility

- Rules with `$redirect` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], and [AdGuard for Safari][ext-saf] .
- `$redirect` in uBlock Origin supports specifying priority, e.g. `$redirect=noopjs:42`. AdGuard does not support it and instead just discards the priority postfix.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

Go to [rules priorities](#rule-priorities) for more details.

Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Examples**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

:::info Compatibility

Rules with `$redirect-rule` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], [AdGuard for Safari][ext-saf], and [AdGuard for Chrome MV3][ext-mv3]. [The discussion about adding support for `$redirect-rule` rules in Chrome MV3 extensions](https://github.com/w3c/webextensions/issues/493) is currently open.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

These rules allow overriding of a page's [referrer policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). Responses to matching requests will have all of their `Referrer-Policy` headers replaced with a single header with the value equal to the matching rule's modifier value. If the response carries an HTML document with a `<meta name="referrer"...` tag, the `content` attribute of the tag will also be replaced with the modifier value.

An exception rule with a modifier value disables the blocking rule with the same modifier value. An exception rule without a modifier value disables all matched referrer-policy rules.

If a request matches multiple `$referrerpolicy` rules not disabled by exceptions, only one of them (it is not specified which one) is applied. `$referrerpolicy` rules without specified [content-type modifiers](#content-type-modifiers) apply to `$document` and `$subdocument` content types.

**Examples**

- `||example.com^$referrerpolicy=unsafe-url` overrides the referrer policy for `example.com` with `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` disables the previous rule.
- `@@||example.com/abcd.html^$referrerpolicy` disables all `$referrerpolicy` rules on `example.com/abcd.html`.

:::info Compatibility

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later.

:::

#### **`$removeheader`** {#removeheader-modifier}

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

**Syntax**

**Basic syntax**

- `||example.org^$removeheader=header-name` removes a **response** header called `header-name`
- `||example.org^$removeheader=request:header-name` removes a **request** header called `header-name`

`$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

- `@@||example.org^$removeheader` negates **all** `$removeheader` rules for URLs that match `||example.org^`.
- `@@||example.org^$removeheader=header` negates the rule with `$removeheader=header` for any request matching `||example.org^`.

`$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers will not do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

:::note

In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

:::

**Examples**

- `||example.org^$removeheader=refresh` removes `Refresh` header from all HTTP responses returned by `example.org` and its subdomains.
- `||example.org^$removeheader=request:x-client-data` removes `X-Client-Data` header from all HTTP requests.
- Next block of rules removes `Refresh` and `Location` headers from all HTTP responses returned by `example.org` save for requests to `example.org/path/*`, for which no headers will be removed:

    ```adblock
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

##### `$removeheader` modifier limitations {#removeheader-modifier-limitations}

:::caution Limitations

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Negation and allowlist rules are not supported.
- Group of similar `$removeheader` rules will be combined into one declarative rule. For example:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeheader=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeheader=P2Case1
    $xmlhttprequest,removeheader=p1case2
    $xmlhttprequest,removeheader=P2case2
    ```

    is converted to

    ```bash
    [
      {
        "id": 1,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case1",
                "operation": "remove"
            },
            {
                "header": "P2Case1",
                "operation": "remove"
            },
          ]
        },
        "condition": {
          "urlFilter": "||testcases.adguard.com",
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      },
      {
        "id": 2,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case2",
                "operation": "remove"
            },
            {
                "header": "P2case2",
                "operation": "remove"
            }
          ]
        },
        "condition": {
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      }
    ]
    ```

:::

:::caution Restrictions

This type of rules can only be used [**in trusted filters**](#trusted-filters).

1. In order to avoid compromising the security `$removeheader` cannot remove headers from the list below:
    - `access-control-allow-origin`
    - `access-control-allow-credentials`
    - `access-control-allow-headers`
    - `access-control-allow-methods`
    - `access-control-expose-headers`
    - `access-control-max-age`
    - `access-control-request-headers`
    - `access-control-request-method`
    - `origin`
    - `timing-allow-origin`
    - `allow`
    - `cross-origin-embedder-policy`
    - `cross-origin-opener-policy`
    - `cross-origin-resource-policy`
    - `content-security-policy`
    - `content-security-policy-report-only`
    - `expect-ct`
    - `feature-policy`
    - `origin-isolation`
    - `strict-transport-security`
    - `upgrade-insecure-requests`
    - `x-content-type-options`
    - `x-download-options`
    - `x-frame-options`
    - `x-permitted-cross-domain-policies`
    - `x-powered-by`
    - `x-xss-protection`
    - `public-key-pins`
    - `public-key-pins-report-only`
    - `sec-websocket-key`
    - `sec-websocket-extensions`
    - `sec-websocket-accept`
    - `sec-websocket-protocol`
    - `sec-websocket-version`
    - `p3p`
    - `sec-fetch-mode`
    - `sec-fetch-dest`
    - `sec-fetch-site`
    - `sec-fetch-user`
    - `referrer-policy`
    - `content-type`
    - `content-length`
    - `accept`
    - `accept-encoding`
    - `host`
    - `connection`
    - `transfer-encoding`
    - `upgrade`

1. `$removeheader` rules are only compatible with `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and [content-type modifiers](#content-type-modifiers) such as `$script` and `$stylesheet`. The rules which have any other modifiers are considered invalid and will be discarded.

:::

:::info Compatibility

Rules with `$removeheader` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Chrome, Firefox, and Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

:::

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and sometimes `POST` requests.

**Syntax**

**Basic syntax**

- `$removeparam=param` removes query parameter with the name `param` from URLs of any request, e.g. a request to `http://example.com/page?param=1&another=2` will be transformed into `http://example.com/page?another=2`.

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

- `$removeparam=/regexp/[options]` — removes query parameters that matches the `regexp` regular expression from URLs of any request. Unlike basic syntax, it means *"remove query parameters normalized to a `name=value` string which match the `regexp` regular expression"*. `[options]` here is the list of regular expression options. At the moment, the only supported option is `i` which makes matching case-insensitive.

**Escaping special characters**

Special characters should be URL-encoded in a rule to correctly match the URL text.

For example, to remove `?$param=true`, you should use the `$removeparam=%24param` rule.

:::note

Spaces and commas should also be URL-encoded, otherwise the rule won't match the URL. However, `.`, `-`, `_`, and `~` should be used as they are, since they are not marked as reserved characters in URL encoding.

:::

Remember to escape special characters like `.` in the regular expressions. Use the `\` character to do this. For example, an escaped dot should look like this: `\.`.

:::note

Regexp-type rules apply to both the name and value of the parameter. To minimize errors, it is safer to start each regexp with `/^`, unless you are specifically targeting parameter values.

:::

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

- `||example.org^$removeparam` — removes all query parameters from URLs matching `||example.org^`.

**Inversion**

Use `~` to apply inversion:

- `$removeparam=~param` — removes all query parameters with the name different from `param`.
- `$removeparam=~/regexp/` — removes all query parameters that do not match the `regexp` regular expression.

:::note

If `~` does not appear at the beginning of the rule, it is treated as a symbol in the text.

:::

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

- `@@||example.org^$removeparam` negates all `$removeparam` rules for URLs that match `||example.org^`.
- `@@||example.org^$removeparam=param` negates the rule with `$removeparam=param` for any request matching `||example.org^`.
- `@@||example.org^$removeparam=/regexp/` negates the rule with `$removeparam=/regexp/` for any request matching `||example.org^`.

**Multiple rules matching a single request**

In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

**Examples**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` will not be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will not be affected by the blocking rule.

- `$removeparam=utm_source` removes `utm_source` query parameter from all requests.

- `$removeparam=/utm_.*/` removes all `utm_* query` parameters from URL queries of any request, e.g. a request to `http://example.com/page?utm_source=test` will be transformed to `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` removes `utm_source` query parameter with the value equal to `campaign`. It does not touch other `utm_source` parameters.

**Negating one `$removeparam` rule and replacing it with a different rule**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There is one exception: Google Click ID (gclid) will not be removed from requests to example.com.

**Negating `$removeparam` for all parameters**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to `example.org`.

`$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

##### `$removeparam` modifier limitations {#removeparam-modifier-limitations}

:::caution Limitations

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Regular expressions, negation and allowlist rules are not supported.
- Group of similar `$removeparam` rules will be combined into one. Example:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeparam=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=p2case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=P3Case1
    $xmlhttprequest,removeparam=p1case2
    ```

    is converted to

    ```bash
    [
    {
      "id": 1,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case1",
          "p2case1",
          "P3Case1"
          ]
        }
        }
      }
      },
      "condition": {
      "urlFilter": "||testcases.adguard.com",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    },
    {
      "id": 4,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case2"
          ]
        }
        }
      }
      },
      "condition": {
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    }
    ]
    ```

:::

:::caution Restrictions

1. Rules with the `$removeparam` modifier can only be used [**in trusted filters**](#trusted-filters).
1. `$removeparam` rules are compatible with [basic modifiers](#basic-rules-basic-modifiers), [content-type modifiers](#content-type-modifiers), and with the `$important` and `$app` modifiers. Rules with any other modifiers are considered invalid and will be discarded.
1. `$removeparam` rules without [content type modifiers](#content-type-modifiers) will only match requests where the content type is `document`.

:::

:::info Compatibility

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

- `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc.).
- `$replace` rules do not apply if the size of the original response is more than 10 MB.
- `$replace` rules have a higher priority than other basic rules, **including** exception rules. So if a request matches two different rules, one of which has the `$replace` modifier, this rule will be applied.
- Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
- Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page content with a `$replace` rule and disable cosmetic rules there at the same time.

`$replace` value can be empty in the case of exception rules. See examples section for further information.

**Multiple rules matching a single request**

In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Examples**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:

- `regexp` — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `replacement` — `\$1<\/VAST>` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

You can see how this rule works here: http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Disabling `$replace` rules**

- `@@||example.org^$replace` will disable all `$replace` rules matching `||example.org^`.
- `@@||example.org^$document` or `@@||example.org^$content` will disable all `$replace` rules **originated from** pages of `example.org` **including the page itself**.

:::caution Restrictions

- Rules with the `$replace` modifier can only be used [**in trusted filters**](#trusted-filters).
- `$replace` rules do not apply if the size of the original response is more than 10 MB. For AdGuard Browser Extension, this limit applies starting from v5.2 or later.

:::

:::info Compatibility

Rules with `$replace` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

:::

#### **`$urltransform`** {#urltransform-modifier}

The `$urltransform` rules allow you to modify the request URL by replacing text matched by a regular expression.

**Features**

- `$urltransform` rules normally only apply to the path and query parts of the URL, see below for one exception.
- `$urltransform` will not be applied if the original URL is blocked by other rules.
- `$urltransform` will be applied before `$removeparam` rules.

The `$urltransform` value can be empty for exception rules.

**Multiple rules matching a single request**

If multiple `$urltransform` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

`$urltransform` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$urltransform` value, two characters must be escaped: the comma `,` and the dollar sign `$`. Use the backslash character `\` for this. For example, an escaped comma looks like this: `\,`.

**Changing the origin**

:::info Compatibility

This section only applies to AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.17 or later.

:::

As stated above, normally `$urltransform` rules are only allowed to change the path and query parts of the URL. However, if the rule's `regexp` begins with the string `^http`, then the full URL is searched and can be modified by the rule. Such a rule will not be applied if the URL transformation can not be achieved via an HTTP redirect (for example, if the request's method is `POST`).

**Examples**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

There are three parts in this rule:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

**Multiple `$urltransform` rules**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Re-matching rules after transforming the URL**

After applying all matching `$urltransform` rules, the transformed request will be matched against all other rules:

E.g., with the following rules:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

the request to `https://example.com/firstpath` will be blocked.

**Disabling `$urltransform` rules**

- `@@||example.org^$urltransform` will disable all `$urltransform` rules matching `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` will disable the rule with `$urltransform=/Z/Y/` for any request matching `||example.org^`.

`$urltransform` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$urltransform=/X/Y/` for requests to **example.com**, but `@@||example.com^$urlblock` will.

**The rule example for cleaning affiliate links**

Many websites use tracking URLs to monitor clicks before redirecting to the actual destination. These URLs contain marketing parameters and analytics tokens that can be removed to improve privacy.

Below is an example of how to obtain the clean destination link to bypass tracking websites and go directly to the destination.

In our example:

 1. The initial URL (with click tracking): `https://www.aff.example.com/visit?url=https%3A%2F%2Fwww.somestore.com%2F%26referrer%3Dhttps%3A%2F%2Fwww.aff.example.com%2F%26ref%3Dref-123`
 1. Tracking URL after decoding special characters: `https://www.aff.example.com/visit?url=https://www.somestore.com/`
 1. The website you want to visit: `https://www.somestore.com`

To clean the URL, we first need to decode special characters (like `%3A` → `:`, `%2F` → `/`, etc.) and extract the real URL from the tracking parameters. We will use the `$urltransform` modifier to do this. The following 4 rules replace URL-encoded symbols with their real characters:

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3A/:/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%2F/\//` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3F/?/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3D/=/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%26/&/`

After that, we need to write the rule that will block the tracking website and redirect you directly to the target address (somestore.com):

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com.*url=([^&]*).*/\$1/`

Tracking links will now be automatically cleaned up, allowing direct navigation to the destination website without tracking.

:::caution Restrictions

Rules with the `$urltransform` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Compatibility

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$reason`** {#reason-modifier}

The `$reason` modifier allows you to add a custom explanation message that will be displayed on the blocking page when a request is blocked by this rule. This modifier only works with the `$document` content-type modifier.

**Character limitations and escaping requirements:**

- There is no maximum length limit for the reason text
- All characters are allowed in the reason text
- Special characters (such as quotes, commas, and backslashes) must be properly escaped using the backslash (`\`)

**Predefined localizable tokens:**

Instead of custom text, you can use predefined tokens that will be automatically localized:

- `malicious` — for malicious content
- `tracker` — for tracking content
- `disreputable` — for disreputable content

**Examples**

```adblock
||example.com^$document,reason="Tracker"
||example.com^$document,reason="Malicious site blocked by security filter"
||ads.example.com^$document,reason="This site contains tracking scripts"
||malware.example.com^$document,reason="Site blocked: \"Known malware distributor\""
||tracking.example.com^$document,reason=disreputable
||analytics.example.com^$document,reason=tracker
```

:::info Compatibility

AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with CoreLibs v1.20 or later support rules with the `$reason` modifier. AdGuard Content Blocker does not support these rules.

:::

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of arbitrary length and can appear in a rule as often as needed.

**Examples**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Compatibility

Rules with `noop` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$empty` (deprecated)** {#empty-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$empty` are still supported and being converted into `$redirect=nooptext` now but the support shall be removed in the future.

:::

Usually, blocked requests look like a server error to browser. If you use `$empty` modifier, AdGuard will emulate a blank response from the server with`200 OK` status.

**Examples**

- `||example.org^$empty` returns an empty response to all requests to `example.org` and all subdomains.

:::info Compatibility

Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$mp4` (deprecated)** {#mp4-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are still supported and being converted into `$redirect=noopmp4-1s,media` now but the support shall be removed in the future.

:::

As a response to blocked request AdGuard returns a short video placeholder.

**Examples**

- `||example.com/videos/$mp4` blocks all video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

:::info Compatibility

Rules with `$mp4` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

### Rule priorities {#rule-priorities}

Each rule has its own priority, which is necessary when several rules match the request and the filtering engine needs to select one of them. Priority is measured by a positive integer.

:::note Collisions

When two rules with the same priority match the same request, the filter engine implementation determines which one is chosen.

:::

:::info

The concept of rule priorities becomes increasingly important in light of Manifest V3, as the existing rules need to be converted to declarativeNetRequest rules.

:::

#### Priority calculation

To calculate priority, we've categorized modifiers into different groups. These groups are ranked based on their priority, from lowest to highest. A modifier that significantly narrows the scope of a rule adds more weight to its total priority. Conversely, if a rule applies to a broader range of requests, its priority decreases.

It's worth noting that there are cases where a single-parameter modifier has a higher priority than multi-parameter ones. For instance, in the case of `$domain=example.com|example.org`, a rule that includes two domains has a slightly broader effective area than a rule with one specified domain, therefore its priority is lower.

The base priority of any rule is 1. If the calculated priority is a floating-point number, it will be **rounded up** to the smallest integer greater than or equal to the calculated priority.

:::info Compatibility

- The concept of priority has been introduced in [TSUrlFilter][] v2.1.0 and [CoreLibs][] v1.13. Before that AdGuard didn't have any special priority computation algorithm and collisions handling could be different depending on AdGuard product and version.
- AdGuard for iOS, Safari, and AdGuard Content Blocker rely on the browsers implementation and they cannot follow the rules specified here.

:::

:::note

Modifier aliases (`1p`, `3p`, etc.) are not included in these categories, however, they are utilized within the engine to compute the rule priority.

:::

#### Basic modifiers, the presence of each adds 1 to the priority {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) with negated applications using `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$domain`](#domain-modifier) with negated domains using `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) with negated methods using `~`,
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- restricted [content-types](#content-type-modifiers) with `~`.

When dealing with a negated domain, app, method, or content-type, we add **1 point** for the existence of the modifier itself, regardless of the quantity of negated domains or content-types. This is because the rule's scope is already infinitely broad. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Defined content-type modifiers, defined methods, defined headers, $all, $popup, specific exceptions {#priority-category-2}

All valid content types:

<!-- Please keep them sorted -->

- [`$document`](#document-modifier),
- [`$font`](#font-modifier),
- [`$image`](#image-modifier),
- [`$media`](#media-modifier),
- [`$object`](#object-modifier),
- [`$other`](#other-modifier),
- [`$ping`](#ping-modifier),
- [`$script`](#script-modifier),
- [`$stylesheet`](#stylesheet-modifier),
- [`$subdocument`](#subdocument-modifier),
- [`$websocket`](#websocket-modifier),
- [`$xmlhttprequest`](#xmlhttprequest-modifier);

This also includes rules that implicitly add all content types:

- [`$all`](#all-modifier);

Or rules that implicitly add the modifier `$document`:

- [`$popup`](#popup-modifier);

Or some specific exceptions that implicitly add `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Or allowed methods via [`$method`](#method-modifier).

Or rules with [`$header`](#header-modifier).

The presence of any content-type modifiers adds `(50 + 50 / N)`, where `N` is the number of modifiers present, for example: `||example.com^$image,script` will add `50 + 50 / 2 = 50 + 25 = 75` to the total weight of the rule.

The `$all` also belongs to this category, because it implicitly adds all content-type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

The `$popup` also belongs to this category, because it implicitly adds the modifier `$document`. Similarly, specific exceptions add `$document,subdocument`.

If there is a `$method` modifier in the rule with allowed methods it adds `(50 + 50 / N)`, where `N` is the number of methods allowed, for example: `||example.com^$method=GET|POST|PUT` will add `50 + 50 / 3 = 50 + 16.6 = 67` to the total weight of the rule.

If there is a `$header` modifier in the rule, it adds `50`.

#### `$domain` or `$app` with allowed domains or applications {#priority-category-3}

Specified domains through `$domain` or specified applications through `$app` add `100 + 100 / N`, where `N` is the number of modifier values for example: `||example.com^$domain=example.com|example.org|example.net` will add `100 + 100 / 3 = 134.3 = 135` or `||example.com^$app=org.example.app1|org.example.app2` will add `100 + 100 / 2 = 151` or `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` will add `100 + 100/1` ($domain part) and `100 + 100/2` ($app part), totaling `350`.

Modifier values that are regexps or tld will be interpreted as normal entries of the form `example.com` and counted one by one, for example: `||example.com^$domain=example.*` will add `100 + 100 / 1 = 200` or `||example.com^$domain=example.*|adguard.*` will add `100 + 100 / 2 = 150`.

#### `$redirect` rules {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Each of which adds `10^3` to rule priority.

#### Specific exceptions {#priority-category-4}

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Each of which adds `10^4` to the priority.

As well as exception with [`$document modifier`](#document-modifier): because it's an alias for `$elemhide,content,jsinject,urlblock,extension`. It will add `10^4` for each modifier from [the top list](#priority-category-4), `10^4 * 5` in total.

In addition, each of these exceptions implicitly adds the two allowed content-type modifiers `$document,subdocument`.

#### Allowlist rules {#priority-category-5}

Modifier `@@` adds `10^5` to rule priority.

#### `$important` rules {#priority-category-7}

Modifier [`$important`](#important-modifier) adds `10^6` to rule priority.

#### Rules for which there is no priority weight {#priority-category-extra}

[Other modifiers](#advanced-capabilities), which are supposed to perform additional post- or pre-processing of requests, do not add anything to the rule priority.

:::note

The [`$replace`](#replace-modifier) modifier takes precedence over all blocking rules of categories 1–3, as well as exception rules from categories 3–5, **except** [`$content`](#content-modifier), because an exception with the `$content` modifier overrides all `$replace` rules.

:::

#### Examples

1. `||example.com^`

    Weight of the rule without modifiers: `1`.

1. `||example.com^$match-case`

    Rule weight: base weight + weight of the modifier from [category 1](#priority-category-1): `1 + 1 = 2`.

1. `||example.org^$removeparam=p`

    Rule weight: base weight + 0, since $removeparam [is not involved](#priority-category-extra) in the priority calculation: `1 + 0 = 1`.

1. `||example.org^$document,redirect=nooptext`

    Rule weight: base weight + allowed content type, [category 3](#priority-category-3) + $redirect from [category 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

1. `@@||example.org^$removeparam=p,document`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + 0 because $removeparam [is not involved](#priority-category-extra) in the priority calculation + allowed content type, [category 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

1. `@@||example.com/ad/*$domain=example.org|example.net,important`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + important rule, [category 7](#priority-category-7) + allowed domains, [category 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

1. `@@||example.org^$document` without additional modifiers is an alias for `@@||example.com^$elemhide,content,jsinject,urlblock,extension`

    Rule weight: base weight + specific exceptions, [category 4](#priority-category-4) + two allowed content types (document and subdocument), [category 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Rule weight: base weight + allowed content type, [category 2](#priority-category-2) + allowed domain, [category 3](#priority-category-3) + denyallow, [category 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — alias to `||example.com^$document,subdocument,image,script,media,etc. + $popup`

    Rule weight: base weight + popup ([category 1](#priority-category-1)) + allowed content types ([category 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Non-basic rules {#non-basic-rules}

However, basic rules may not be enough to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

| Categories \ Products                     | [CoreLibs apps][cl-apps] | [AdGuard for Chromium][ext-chr] | [AdGuard for Chrome MV3][ext-mv3] | [AdGuard for Firefox][ext-ff] | [AdGuard for iOS][ios-app] | [AdGuard for Safari][ext-saf] | [AdGuard Tartalomblokkoló][and-cb] |
| ------------------------------------------ |:------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:----------------------------------:|
| [Element hiding](#cosmetic-elemhide-rules) |            ✅             |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ✅                  |
| [CSS rules](#cosmetic-css-rules)           |            ✅             |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                  |
| [Extended CSS](#extended-css-selectors)    |            ✅             |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                  |
| [HTML filtering](#html-filtering-rules)    |            ✅             |                ❌                |                 ❌                 |               ✅               |             ❌              |               ❌               |                 ❌                  |
| [JavaScript](#javascript-rules)            |            ✅             |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                  |
| [Scriptlets](#scriptlets)                  |            ✅             |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                  |

:::note

- ✅ — fully supported
- ❌ — not supported

:::

## Cosmetic rules {#cosmetic-rules}

:::info

Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Element hiding rules {#cosmetic-elemhide-rules}

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

Element hiding rules may operate differently [depending on the platform](#cosmetic-rules-priority).

#### Syntax

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
- **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

This rule will be also applied to all subdomains of `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

:::note

Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

:::

**Examples**

- `example.com##div.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `example.com,example.org###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `~example.com##.textad` — hides an element with the class `textad` at all domains, except `example.com` and its subdomains.

**Limitations**

Safari does not support both allowed and disallowed domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

**Exceptions**

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:

```adblock
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:

```adblock
#@#.textad
```

The same can be achieved by adding this rule:

```adblock
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

### CSS rules {#cosmetic-css-rules}

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With these rules you can basically add any CSS styles to the page.

**Syntax**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), that defines the elements we want to apply the style to.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`style`** — CSS style, that we want to apply to selected elements.

**Examples**

```adblock
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

**Exceptions**

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains. Exception rule syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:

```adblock
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Restrictions

Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

:::

:::info Compatibility

CSS rules are not supported by AdGuard Content Blocker.

CSS rules may operate differently [depending on the platform](#cosmetic-rules-priority).

:::

:::info Adblock Plus compatibility

In AdGuard products that use **CoreLibs version 1.18 or later**, you can also use element hiding rules to inject a `remove: true` declaration:

```adblock
example.org##body { remove: true; }
```

This usage is discouraged in favor of using [CSS rules](#cosmetic-css-rules) and is only supported for compatibility with filter lists written for Adblock Plus.

Element hiding exceptions (`#@#`) are matched by the selector part only, ignoring the declarations block part. For example, the above rule can be disabled by any of the following exception rules:

```adblock
example.org#@#body
example.org#@#body { remove: true; }
example.org#@#body{remove:true;}
```

:::

### Extended CSS selectors {#extended-css-selectors}

- [Limitations](#extended-css-limitations)
- [Pseudo-class `:has()`](#extended-css-has)
- [Pseudo-class `:contains()`](#extended-css-contains)
- [Pseudo-class `:matches-css()`](#extended-css-matches-css)
- [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
- [Pseudo-class `:matches-property()`](#extended-css-property)
- [Pseudo-class `:xpath()`](#extended-css-xpath)
- [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Pseudo-class `:upward()`](#extended-css-upward)
- [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
- [Pseudo-class `:is()`](#extended-css-is)
- [Pseudo-class `:not()`](#extended-css-not)
- [Pseudo-class `:if-not()` (removed)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

**Application area**

Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

:::info Compatibility

Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

:::

**Syntax**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

- `#?#` — for element hiding, `#@?#` — for exceptions
- `#$?#` — for CSS rules, `#@$?#` — for exceptions

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Examples**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
- `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
- `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

You can apply standard CSS selectors using the ExtendedCss library by using the rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

:::note

Some pseudo-classes do not require selector before it. Still adding the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)`, but the second one is more obvious.

Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

:::

#### ExtendedCss Limitations {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Pseudo-class `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

:::note

Rules with the `:has()` pseudo-class must use the [native implementation of `:has()`][native-has] if they use the `##` rule marker and if it is possible, i.e., there are no other extended CSS selectors inside. If it is not supported by the product, ExtendedCss implementation will be used even for rules with the `##` marker.

Currently, not all AdGuard products support the native implementation of `:has()` yet:

- AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux **do support** it with [CoreLibs][] v1.12 or later.
- AdGuard for iOS and AdGuard for Safari **do support** it with [SafariConverterLib](#safari-converter-lib) v2.0.39 and [Safari browser v16.4][safari-16.4].
- AdGuard Browser Extension **does not support** it yet, but it is [planned][AdguardBrowserExtension#2587].

To force the ExtendedCss implementation of `:has()` to be used, use the `#?#` or `#$?#` rule markers explicitly, e.g., `example.com#?#p:has(> a)` or `example.com#$?#div:has(> span) { display: none !important; }`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Removal notice

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Syntax**

```text
[target]:has(selector)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selector` — required, standard or extended CSS selector

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### `:has()` limitations {#extended-css-has-limitations}

Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- disallow `:has()` inside the pseudos accepting only compound selectors;
- disallow `:has()` after regular pseudo-elements.

Native `:has()` pseudo-class does not allow `:has()`, `:is()`, `:where()` inside `:has()` argument to avoid increasing the `:has()` invalidation complexity ([case 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). But ExtendedCss did not have such limitation earlier and filter lists already contain such rules, so we have not added this limitation to ExtendedCss and allow to use `:has()` inside `:has()` as it was possible before. To use it, just force ExtendedCss usage by setting `#?#`/`#$?#` rule marker.

Native implementation does not allow any usage of `:scope` inside the `:has()` argument ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Still, there are some such rules in filter lists: `div:has(:scope a)` which we continue to support by simply converting them to `div:has(> a)`, as it used to be done previously.

**Examples**

`div:has(.banner)` selects all `div` elements which **include** an element with the `banner` class:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span class="banner">inner element</span>
</div>
```

`div:has(> .banner)` selects all `div` elements which **include** an `banner` class element as a *direct child* of `div`:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <p class="banner">child element</p>
</div>
```

`div:has(+ .banner)` selects all `div` elements **preceding** `banner` class element which *immediately follows* the `div` and both are children of the same parent:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<p class="banner">adjacent sibling</p>
<span>Not selected</span>
```

`div:has(~ .banner)` selects all `div` elements **preceding** `banner` class element which *follows* the `div` but *not necessarily immediately* and both are children of the same parent:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<span>Not selected</span>
<p class="banner">general sibling</p>
```

`div:has(span, .banner)` selects all `div` elements which **include both** `span` element and `banner` class element:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span>child span</span>
  <p class="banner">child .banner</p>
</div>
```

:::danger Old syntax

[Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.

:::

#### Pseudo-class `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

:::note

The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntax**

```text
[target]:contains(match)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `match` — required, string or regular expression for matching element `textContent`. Regular expression flags are supported.

**Examples**

For such DOM:

```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

the element `div#match` can be selected by any of these extended selectors:

```adblock
! plain text
div:contains(banner)

! regular expression
div:contains(/as .*banner/)

! regular expression with flags
div:contains(/it .*banner/gi)
```

:::note

Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

:::

:::danger Old syntax

[Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.

:::

#### Pseudo-class `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntax**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `pseudo-element` — optional, valid standard pseudo-element, e.g. `before`, `after`, `first-line`, etc.
- `property` — required, a name of CSS property to check the element for
- `pattern` — required, a value pattern that is using the same simple wildcard matching as in the basic URL filtering rules or a regular expression. For this type of matching, AdGuard always does matching in a case-insensitive manner. In the case of a regular expression, the pattern looks like `/regexp/`.

**Special characters escaping and unescaping**

For **non-regexp** patterns `(`,`)`,`[`,`]` must be **unescaped**, e.g. `:matches-css(background-image:url(data:*))`.

For **regexp** patterns `\` should be **escaped**, e.g. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

**Examples**

For such DOM:

```html
<!-- HTML code -->
<style type="text/css">
    #matched::before {
        content: "Block me"
    }
</style>
<div id="matched"></div>
<div id="not-matched"></div>
```

the `div` elements with pseudo-element `::before` and with specified `content` property can be selected by any of these extended selectors:

```adblock
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

:::caution Restrictions

Regexp patterns **do not support** flags.

:::

:::info Compatibility

Obsolete pseudo-classes `:matches-css-before()` and `:matches-css-after()` are no longer recommended but still are supported for better compatibility.

:::

:::danger Old syntax

[Backward compatible syntax for `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) is supported but **not recommended**.

:::

#### Pseudo-class `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows selecting an element by its attributes, especially if they are randomized.

**Syntax**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for attribute name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for attribute value matching

**Escaping special characters**

For **regexp** patterns `"` and `\` should be **escaped**, e.g. `div:matches-attr(class=/[\\w]{5}/)`.

**Examples**

`div:matches-attr("ad-link")` selects the element `div#target1`:

```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` selects the element `div#target2`:

```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` selects the element `div#target3`:

```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` selects the element `#target4`:

```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```

:::caution Restrictions

Regexp patterns **do not support** flags.

:::

#### Pseudo-class `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows selecting an element by matching its properties.

**Syntax**

```text
[target]:matches-property("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for element property name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for element property value matching

**Escaping special characters**

For **regexp** patterns `"` and `\` must be escaped, e.g. `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Regexp patterns are supported in `name` for any property in chain, e.g. `prop./^unit[\\d]{4}$/.type`.

:::

**Examples**

An element with such properties:

```javascript
divProperties = {
  id: 1,
  check: {
    track: true,
    unit_2random1: true,
  },
  memoizedProps: {
    key: null,
    tag: 12,
    _owner: {
      effectTag: 1,
      src: 'ad.com',
    },
  },
};
```

can be selected by any of these extended selectors:

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip For filter maintainers

To check properties of a specific element, do the following:

1. Inspect the page element or select it in `Elements` tab of browser DevTools
1. Run `console.dir($0)` in `Console` tab

:::

:::caution Restrictions

Regexp patterns **do not support** flags.

:::

#### Pseudo-class `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows selecting an element by evaluating an XPath expression.

**Syntax**

```text
[target]:xpath(expression)
```

- `target`- optional, standard or extended CSS selector
- `expression` — required, valid XPath expression

##### `:xpath()` limitations {#extended-css-xpath-limitations}

`target` can be omitted so it is optional. For any other pseudo-class that would mean "apply to *all* DOM nodes", but in case of `:xpath()` it just means "apply to the *whole* document", and such applying slows elements selecting significantly. That's why rules like `#?#:xpath(expression)` are limited to looking inside the `body` tag. For example, rule `#?#:xpath(//div[@data-st-area=\'Advert\'])` is parsed as `#?#body:xpath(//div[@data-st-area=\'Advert\'])`.

Extended selectors with defined `target` as *any* selector — `*:xpath(expression)` — can still be used but it is not recommended, so `target` should be specified instead.

Works properly only at the end of selector, except for [pseudo-class :remove()](#remove-pseudos).

**Examples**

`:xpath(//*[@class="banner"])` selects the element `div#target1`:

```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` selects the element `div#target2`:

```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```

#### Pseudo-class `:nth-ancestor()` {#extended-css-nth-ancestor}

The `:nth-ancestor()` pseudo-class allows to lookup the *nth* ancestor relative to the previously selected element.

```text
subject:nth-ancestor(n)
```

- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

**Syntax**

```text
subject:nth-ancestor(n)
```

- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

The `:nth-ancestor()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Examples**

For such DOM:

```html
<!-- HTML code -->
<div id="target1">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.child:nth-ancestor(1)` selects the element `div#target1`, `div[class="inner"]:nth-ancestor(3)` selects the element `div#target2`.

#### Pseudo-class `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Syntax**

```text
subject:upward(ancestor)
```

- `subject` — required, standard or extended CSS selector
- `ancestor` — required, specification for the ancestor of the element selected by `subject`, can be set as:
    - *number* >= 1 and < 256 for distance to the needed ancestor, same as [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *standard CSS selector* for matching closest ancestor

##### `:upward()` limitations {#extended-css-upward-limitations}

The `:upward()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Examples**

For such DOM:

```html
<!-- HTML code -->
<div id="target1" data="true">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.inner:upward(div[data])` selects the element `div#target1`, `.inner:upward(div[id])` selects the element `div#target2`, `.child:upward(1)` selects the element `div#target1`, `.inner:upward(3)` selects the element `div#target2`.

#### Pseudo-class `:remove()` and pseudo-property `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

**Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**

```text
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```

- `selector` — required, standard or extended CSS selector

##### `:remove()` and `remove` limitations {#extended-css-remove-limitations}

The `:remove()` pseudo-class is limited to work properly only at the end of selector.

For applying the `:remove()` pseudo-class to any element, the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` should be used. Otherwise such extended selector may be considered as invalid, e.g. `.banner > :remove()` is not valid for removing any child element of `banner` class element, so it should look like `.banner > *:remove()`.

If the `:remove()` pseudo-class or the `remove` pseudo-property is used, all style properties are ignored except for the [`debug` pseudo-property](#selectors-debug-mode).

**Examples**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Rules with the `remove` pseudo-property must use `#$?#` marker: `$` for CSS-style rule syntax, `?` for ExtendedCss syntax.

:::

#### Pseudo-class `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntax**

```text
[target]:is(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — [*forgiving selector list*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) of standard or extended selectors. For extended selectors, only compound selectors are supported, not complex.

##### `:is()` limitations {#extended-css-is-limitations}

Rules with the `:is()` pseudo-class must use the [native implementation of `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

If the `:is()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:is(.locked)` works fine.

[Complex selectors](https://www.w3.org/TR/selectors-4/#complex) with extended pseudo-classes are not supported as `selectors` argument for `:is()` pseudo-class, only [compound ones](https://www.w3.org/TR/selectors-4/#compound) are allowed. Check examples below for more details.

**Examples**

`#container *:is(.inner, .footer)` selects only the element `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <div data="true">
    <div>
      <div id="target1" class="inner"></div>
    </div>
  </div>
</div>
```

Due to limitations `:is(*:not([class]) > .banner)'` does not work but `:is(*:not([class]):has(> .banner))` can be used instead of it to select the element `div#target2`:

```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```

#### Pseudo-class `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as argument. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntax**

```text
[target]:not(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — list of standard or extended selectors

##### `:not()` limitations {#extended-css-not-limitations}

Rules with the `:not()` pseudo-class must use the [native implementation of `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:not()`, use `#?#`/`#$?#` marker explicitly.

If the `:not()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:not()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:not(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:not(...)` and `#?#*:not(...)` are parsed as `#?#html *:not(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:not(.locked)` works fine.

The `:not()` is considered as a standard CSS pseudo-class inside the argument of the [`:upward()` pseudo-class](#extended-css-upward) because `:upward()` supports only standard selectors.

"Up-looking" pseudo-classes which are [`:nth-ancestor()`](#extended-css-nth-ancestor) and [`:upward()`](#extended-css-upward) are not supported inside `selectors` argument for `:not()` pseudo-class.

**Examples**

`#container > *:not(h2, .text)` selects only the element `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <h2>Header</h2>
  <div id="target1"></div>
  <span class="text">text</span>
</div>
```

#### Pseudo-class `:if-not()` (removed) {#extended-css-if-not}

:::danger Removal notice

The `:if-not()` pseudo-class is removed and is no longer supported. Rules with it are considered as invalid.

:::

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.

### Cosmetic rules priority {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#cosmetic-elemhide-rules) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser Extension**, the so-called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## HTML filtering rules {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

:::info Compatibility

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard for Linux, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

The syntax with an optional `value` in the attributes is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with CoreLibs v1.18 or later. It is also supported by AdGuard Browser Extension v5.2 or later. For the other products and previous versions `value` must **always** be specified. Otherwise, the rule will be treated as incorrect and ignored.

:::

### Syntax

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0[ = value0] "]" "[" name1[ = value2] "]" ... "[" nameN[ = valueN] "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — name of the element in lower case, for example, `div` or `script`.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rule syntax](#cosmetic-elemhide-rules).
- **`attributes`** — a list of attributes that limit the selection of elements. `name` — required, attribute name; `value` — optional (may not be specified), substring that is contained in attribute value.
- **`pseudoName`** — the name of a pseudo-class.
- **`pseudoArgs`** — the arguments of a function-style pseudo-class.
- **`combinator`** — an operator that works similarly to the [CSS child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): that is, the `selector` on the right of the `combinator` will only match an element whose direct parent matches the `selector` on the left of the `combinator`.

### Examples

**HTML code:**

```html
<script data-src="/banner.js"></script>
```

**Rule:**

```adblock
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

If the value of the attribute is omitted in the rule, then the element will be removed if it contains the specified attribute, regardless of its value. This is also the way to remove the elements whose attributes don't have any value at all.

```html
<div some_attribute="some_value"></div>
<div some_attribute></div>
```

```adblock
example.org$$div[some_attribute]
```

This rule removes all `div` elements with the attribute `some_attribute` on `example.org` and all its subdomains. So, the both `div` elements from the example above will be removed.

### Special attributes {#html-filtering-rules--special-attributes}

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

#### `tag-content`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

You must use `""` to escape `"`, for instance: `$$script[tag-content="alert(""this is ad"")"]`

For example, take a look at this HTML code:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:

```adblock
$$script[tag-content="banner"]
```

:::caution Limitations

The `tag-content` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `wildcard`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

You must use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It checks if the element code contains the two consecutive substrings `banner` and `text`.

:::caution Limitations

The `wildcard` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `max-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value, a rule does not apply to the element.

**Default value**

If this parameter is not specified, the `max-length` is considered to be 8192.

For example:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

:::caution Limitations

The `max-length` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `min-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value, a rule does not apply to the element.

For example:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

:::caution Limitations

The `min-length` special attribute must not appear in a selector to the left of a `>` combinator.

:::

### Pseudo-classes {#html-filtering-rules--pseudo-classes}

#### `:contains()` {#html-filtering-rules--contains}

##### Syntax

```text
:contains(unquoted text)
```

or

```text
:contains(/reg(ular )?ex(pression)?/)
```

:::note Compatibility

`:-abp-contains()` and `:has-text()` are synonyms for `:contains()`.

:::

:::info Compatibility

The `:contains()` pseudo-class is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.13 or later.

:::

Requires that the inner HTML of the element contains the specified text or matches the specified regular expression.

:::caution Limitations

A `:contains()` pseudo-class must not appear in a selector to the left of a `>` combinator.

:::

### Exceptions

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains. The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:

```adblock
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## JavaScript rules {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any JavaScript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```text
rule = [domains] "#%#" script
```

- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`script`** — arbitrary JavaScript code **in one string**.

**Examples**

- `example.org#%#window.__gaq = undefined;` executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

**Exceptions**

Similar to hiding rules, there is a special type of rules that disable the selected JavaScript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:

```adblock
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Restrictions

JavaScript rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Compatibility

JavaScript rules are not supported by AdGuard Content Blocker.

:::

## Scriptlet rules {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

:::note

AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

:::

**Blocking rules syntax**

```text
[domains]#%#//scriptlet(name[, arguments])
```

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — required, a name of the scriptlet from the AdGuard Scriptlets library;
- `arguments` — optional, a list of `string` arguments (no other types of arguments are supported).

**Examples**

1. Apply the `abort-on-property-read` scriptlet on all pages of `example.org` and its subdomains, and pass it an `alert` argument:

    ```adblock
    example.org#%#//scriptlet('abort-on-property-read', 'alert')
    ```

1. Remove the `branding` class from all `div[class^="inner"]` elements on all pages of `example.org` and its subdomains:

    ```adblock
    example.org#%#//scriptlet('remove-class', 'branding', 'div[class^="inner"]')
    ```

**Exception rules syntax**

Exception rules can disable some scriptlets on particular domains. The syntax for exception scriptlet rules is similar to normal scriptlet rules but uses `#@%#` instead of `#%#`:

```text
[domains]#@%#//scriptlet([name[, arguments]])
```

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — optional, a name of the scriptlet to except from the applying; if not set, all scriptlets will not be applied;
- `arguments` — optional, a list of `string` arguments to match the same blocking rule and disable it.

**Examples**

1. Disable specific scriptlet rule so that only `abort-on-property-read` is applied only on `example.org` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read", "alert")
    ```

1. Disable all `abort-on-property-read` scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read")
    ```

1. Disable all scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet()
    ```

1. Apply `set-constant` and `set-cookie` to any web page, but due to special scriptlet exception rule only the `set-constant` scriptlet will be applied on `example.org` and its subdomains:

    ```adblock
    #%#//scriptlet('set-constant', 'adList', 'emptyArr')
    #%#//scriptlet('set-cookie', 'accepted', 'true')
    example.org#@%#//scriptlet('set-cookie')
    ```

1. Apply `adjust-setInterval` to any web page and `set-local-storage-item` on `example.com` and its subdomains, but there are also multiple scriptlet exception rules, so no scriptlet rules will be applied on `example.com` and its subdomains:

    ```adblock
    #%#//scriptlet('adjust-setInterval', 'count', '*', '0.001')
    example.com#%#//scriptlet('set-local-storage-item', 'ALLOW_COOKIES', 'false')
    example.com#@%#//scriptlet()
    ```

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Compatibility

Scriptlet rules are not supported by AdGuard Content Blocker.

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Previous versions only support exception rules that disable specific scriptlets.

:::

### Trusted scriptlets {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

:::note

Trusted scriptlets are not compatible with other ad blockers except AdGuard.

:::

:::caution Restrictions

Trusted scriptlets rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Compatibility

Trusted scriptlets rules are not supported by AdGuard Content Blocker.

:::

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifiers for non-basic type of rules {#non-basic-rules-modifiers}

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax**

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — set of the modifiers described below.
- **`rule text`** — a rule to be modified.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Modifier \ Products                  | [CoreLibs apps][cl-apps] |        [AdGuard for Chromium][ext-chr]        |        [AdGuard for Chrome MV3][ext-mv3]         |         [AdGuard for Firefox][ext-ff]         | [AdGuard for iOS][ios-app] | [AdGuard for Safari][ext-saf] | [AdGuard Tartalomblokkoló][and-cb] |
| ------------------------------------- |:------------------------:|:---------------------------------------------:|:------------------------------------------------:|:---------------------------------------------:|:--------------------------:|:-----------------------------:|:----------------------------------:|
| [$app](#non-basic-app-modifier)       |            ✅             |                       ❌                       |                        ❌                         |                       ❌                       |             ❌              |               ❌               |                 ❌                  |
| [$domain](#non-basic-domain-modifier) |            ✅             |                       ✅                       | ✅ [*[1]](#non-basic-domain-modifier-limitations) |                       ✅                       |             ✅              |               ✅               |                 ❌                  |
| [$path](#non-basic-path-modifier)     |            ✅             |                       ✅                       |                        ❌                         |                       ✅                       |             ✅              |               ✅               |                 ❌                  |
| [$url](#non-basic-url-modifier)       |            ✅             | ✅ [*[2]](#non-basic-url-modifier-limitations) |  ✅ [*[2]](#non-basic-url-modifier-limitations)   | ✅ [*[2]](#non-basic-url-modifier-limitations) |             ❌              |               ❌               |                 ❌                  |

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- ❌ — not supported

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Examples**

- `[$app=org.example.app]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` applies scriptlet `prevent-setInterval` only in Safari browser on Mac.
- `[$app=org.example.app]#@#.textad` disables all `##.textad` rules for all domains while using `org.example.app`.

:::info Compatibility

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Examples**

- `[$domain=example.com]##.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `[$domain=example.com|example.org]###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `[$domain=~example.com]##.textad` — this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

There are 2 ways to specify domain restrictions for non-basic rules:

1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

### Non-basic `$domain` modifier limitations {#non-basic-domain-modifier-limitations}

:::caution Limitations

Since the non-basic `$domain` works the same as the basic one, it has the same [limitations](#domain-modifier-limitations).

:::

:::info Compatibility

Such rules with `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard Browser Extension for Chrome, Chrome MV3, Firefox, and Edge.

:::

### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntax**

```text
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

If `pattern` is not set for `$path`, rule will apply only on the main page of website.

`$path` modifier matches the query string as well.

`$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Examples**

- `[$path=page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
- `[$path=/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
- `[$path=|/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
- `[$path=/page.html|]##.textad` hides a `div` with the class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>`
- `[$path=/page*.html]example.com##.textad` hides a `div` with the class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
- `[$path]example.com##.textad` hides a `div` with the class `textad` at the main page of `example.com`
- `[$domain=example.com,path=/page.html]##.textad` hides a `div` with the class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` hides a `div` with the class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please note the [escaped special characters](#non-basic-rules-modifiers-syntax))

:::info Compatibility

Rules with `$path` modifier are not supported by AdGuard Content Blocker.

:::

### **`$url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntax**

```text
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Examples**

- `[$url=||example.com/content/*]##div.textad` hides a `div` with the class `textad` at addresses like `https://example.com/content/article.html` and even `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` hides an element with attribute `id` equal to `adblock` at `example.org` and its subdomains.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` hides `div` elements of the class `textad` for all domains matching the regular expression `[a-z]+\.example\.com^`.

#### `$url` modifier limitations {#non-basic-url-modifier-limitations}

:::caution Limitations

In AdGuard Browser Extension, non-basic `$url` modifier is not compatible with domain-specific rules and other non-basic modifiers — [`$domain`](#non-basic-domain-modifier) and [`$path`](#non-basic-path-modifier). For example, the rule `[$url=/category/*]example.com###textad` will not be applied.

:::

:::info Compatibility

Rules with the `$url` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

## Information for filter maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Preprocessor directives

We provide preprocessor directives that can be used by filter maintainers to improve compatibility with different ad blockers and provide:

- [including a file](#include-directive)
- [applying rules conditionally by ad blocker type](#conditions-directive)
- [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Including a file {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```adblock
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

The files must originate from the same domain, but may be located in a different folder.

If included file is not found or unavailable, the whole filter update should fail.

Same-origin limitation should be disabled for local custom filters.

**Examples**

Filter URL: `https://example.org/path/filter.txt`

```adblock
! Valid (same origin):
!#include https://example.org/path/includedfile.txt
!
! Valid (relative path):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Invalid (another origin):
!#include https://domain.com/path/includedfile.txt
```

#### Conditions {#conditions-directive}

Filter maintainers can use conditions to supply different rules depending on the ad blocker type. A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive. Conditions support all basic logical operators.

There are two possible scenarios:

1. When an ad blocker encounters an `!#if` directive and no `!#else` directive, it will compile the code between `!#if` and `!#endif` directives only if the specified condition is true.

1. If there is an `!#else` directive, the code between `!#if` and `!#else` will be compiled if the condition is true; otherwise, the code between `!#else` and `!#endif` will be compiled.

:::note

Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

:::

**Syntax**

```adblock
!#if (conditions)
rules_list
!#endif
```

or

```adblock
!#if (conditions)
true_conditions_rules_list
!#else
false_conditions_rules_list
!#endif
```

where:

- `!#if (conditions)` — start of the block when conditions are true
- `conditions` — just like in some popular programming languages, preprocessor conditions are based on constants declared by ad blockers. Authors of ad blockers define on their own what exact constants they declare. Possible values:
    - `adguard` always declared; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
    - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
        - `adguard_app_windows` — AdGuard for Windows
        - `adguard_app_mac` — AdGuard for Mac
        - `adguard_app_cli` — AdGuard for Linux
        - `adguard_app_android` — AdGuard for Android
        - `adguard_app_ios` — AdGuard for iOS
        - `adguard_ext_safari` — AdGuard for Safari
        - `adguard_ext_chromium` — AdGuard Browser Extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
        - `adguard_ext_chromium_mv3` — [AdGuard for Chrome MV3][ext-mv3]
        - `adguard_ext_firefox` — AdGuard Browser Extension for Firefox
        - `adguard_ext_edge` — AdGuard Browser Extension for Edge Legacy
        - `adguard_ext_opera` — AdGuard Browser Extension for Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
        - `cap_html_filtering` — products that support HTML filtering rules: AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux
- `!#else` — start of the block when conditions are false
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — lists of rules
- `!#endif` — end of the block

**Examples**

```adblock
! for all AdGuard products except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

```adblock
!#if (adguard && !adguard_ext_safari)
! for all AdGuard products except AdGuard for Safari
||example.org^$third-party
domain.com##div.ad
!#else
! for AdGuard for Safari only
||subdomain.example.org^$third-party
!#endif
```

:::info Compatibility

The `!#else` directive is supported by the [FiltersDownloader][gh-filters-downloader] v1.1.20 or later.

It is already supported for filter lists compiled by the [FiltersRegistry][], but it still may not be supported by AdGuard products when adding a filter list with `!#else` as a custom one. The following products will support it in the mentioned versions or later:

- AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13;
- AdGuard Browser Extension v4.2.208;
- AdGuard for Safari v1.11.16.

:::

#### Safari affinity {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

User rules and allowlist are added to every content blocker.

:::figyelem

The main disadvantage of using multiple content blockers is that rules from different blockers are applied independently. Blocking rules are not affected by this, but unblocking rules may cause problems. If a blocking rule is in one content blocker and an exception is in another, the exception will not work. Filter maintainers use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

:::

**Syntax**

```adblock
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```

where:

- `!#safari_cb_affinity(content_blockers)` — start of the block
- `content_blockers` — comma-separated list of content blockers. Possible values:
    - `general` — AdGuard General content blocker
    - `privacy` — AdGuard Privacy content blocker
    - `social` — AdGuard Social content blocker
    - `security` — AdGuard Security content blocker
    - `other` — AdGuard Other content blocker
    - `custom` — AdGuard Custom content blocker
    - `all` — special keyword that means that the rules must be included into **all** content blockers
- `rules_list` — list of rules
- `!#safari_cb_affinity` — end of the block

**Examples**

```adblock
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! to allowlist basic rule from AdGuard Tracking Protection filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Hints

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry][]).

**Syntax**

```adblock
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

Multiple hints can be applied.

#### `NOT_OPTIMIZED` hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```text
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```

where:

- **filter** — filter identifier
- **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
- **minPercent** — lower bound of `percent` value
- **maxPercent** — upper bound of `percent` value
- **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### `PLATFORM` and `NOT_PLATFORM` hints

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

- `windows` — AdGuard for Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard for Mac — [https://filters.adtidy.org/mac_v3/filters/2.txt](https://filters.adtidy.org/mac_v3/filters/2.txt)

- `cli` — AdGuard for Linux — [https://filters.adtidy.org/cli/filters/2.txt](https://filters.adtidy.org/cli/filters/2.txt)

- `android` — AdGuard for Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard for iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — AdGuard Browser Extension for Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — AdGuard Browser Extension for Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

- `ext_ff` — AdGuard Browser Extension for Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — AdGuard Browser Extension for Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — AdGuard Browser Extension for Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard for Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

- `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Examples**

This rule will be available only in AdGuard for Windows, Mac, Android:

```adblock
!+ PLATFORM(windows,mac,android)
||example.org^
```

Except for AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS, this rule is available on all platforms:

```adblock
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

#### `NOT_VALIDATE`

This hint is used to skip validation of the rule. It is useful for rules for which support has not yet been added to the filters compiler, or for rules that are incorrectly discarded.

**If you want to add a rule that should not be validated, use the `NOT_VALIDATE` hint:**

```adblock
!+ NOT_VALIDATE
||example.org^$newmodifier
```

## How to debug filtering rules

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Filtering log

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- In **AdGuard for Windows**, you can find it in the *Ad Blocker* tab or via the tray menu
- In **AdGuard for Mac**, it is located in *Settings → Advanced → Filtering log*
- In **AdGuard for Android**, you can find it under *Statistics → Recent activity*. *Recent activity* can also be accessed from the *Assistant*
- In **AdGuard Browser Extension**, it is accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based web browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs

:::note

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Selectors debugging mode {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — text of the parsed selector, may differ from the input one
- `timings` — list of DOM nodes matched by the selector
    - `appliesCount` — total number of times that the selector has been applied on the page
    - `appliesTimings` — time that it took to apply the selector on the page, for each of the instances that it has been applied (in milliseconds)
    - `meanTiming` — mean time that it took to apply the selector on the page
    - `standardDeviation` — standard deviation
    - `timingsSum` — total time it took to apply the selector on the page across all instances

**Printed only for remove pseudos:**

- `removed` — flag to signal if elements were removed

**Printed if elements are not removed:**

- `matchedElements` — list of DOM nodes matched by the selector
- `styleApplied` — parsed rule style declaration related to the selector

**Examples**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```adblock
#$?#.banner { display: none; debug: global; }
```

**Testing extended selectors without AdGuard**

ExtendedCss can be executed on any page without using any AdGuard product. In order to do that you should copy and execute the following code in a browser console:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Alternatively, install the [ExtendedCssDebugger userscript](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Now you can now use the `ExtendedCss` from global scope, and run its method [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) as `Document.querySelectorAll()`.

**Examples**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// array of HTMLElements matched the `selector` is to be returned
ExtendedCss.query(selector);
```

### Debugging scriptlets {#debug-scriptlets}

If you are using AdGuard Browser Extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

The following scriptlets are especially developed for debug purposes:

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

The following scriptlets also may be used for debug purposes:

- [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#json-prune)
- [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-fetch)
- [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
- [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
- [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) with specified `replacement` parameter
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Compatibility tables legend {#compatibility-tables-legend}

### Product shortcuts {#what-product}

1. `CoreLibs apps` — [AdGuard for Windows](/adguard-for-windows/features/home-screen), [AdGuard for Mac](/adguard-for-mac/features/main), [AdGuard for Android](/adguard-for-android/features/protection/ad-blocking), and [AdGuard for Linux](/adguard-for-linux)
1. `AdGuard for Chromium` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Chrome and other Chromium-based browsers such as Microsoft Edge and Opera
1. `AdGuard for Chrome MV3` — [AdGuard Browser Extension for Chrome MV3](/adguard-browser-extension/mv3-version)
1. `AdGuard for Firefox` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Firefox
1. `AdGuard for iOS` — [AdGuard for iOS](/adguard-for-ios/features/safari-protection) and AdGuard Pro for iOS (for mobile Safari browser)
1. `AdGuard for Safari` — [AdGuard for desktop Safari browser](/adguard-for-safari/features/general)
1. `AdGuard Content Blocker` — [Content Blocker](/adguard-content-blocker/overview) for Android mobile browsers: Samsung Internet and Yandex Browser

### Compatibility shortcuts {#what-compatibility}

:::note

- ✅ — fully supported
- ✅ * — supported, but reliability may vary or limitations may occur; check the modifier description for more details
- 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions
- ⏳ — feature that is planned to be implemented but is not yet available in any product
- ❌ — not supported
- 👎 — deprecated; still supported but will be removed in the future
- 🚫 — removed and no longer supported

:::

[popup-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#popup

[Sec-Fetch-Dest header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[badfilter-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#badfilter

[native-has]: https://developer.mozilla.org/docs/Web/CSS/:has
[safari-16.4]: https://www.webkit.org/blog/13966/webkit-features-in-safari-16-4/
[AdguardBrowserExtension#2587]: https://github.com/AdguardTeam/AdguardBrowserExtension/issues/2587

[cl-apps]: #what-product "AdGuard for Windows, Mac, Linux, Android"
[ext-chr]: #what-product "AdGuard Browser Extension for Chrome and other Chromium-based browsers"
[ext-mv3]: #what-product "AdGuard Browser Extension for Chrome MV3"
[ext-ff]: #what-product "AdGuard Browser Extension for Firefox"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ext-saf]: #what-product "AdGuard for Safari"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
[CoreLibs]: https://adguard.com/en/blog/introducing-corelibs.html
[TSUrlFilter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter#tsurlfilter
[TSWebExtension]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tswebextension#tswebextension
