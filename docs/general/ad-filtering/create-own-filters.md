---
title: How to create your own ad filters
sidebar_position: 5
---

A filter is a set of filtering rules applied to specific content, such as banners or pop-ups. AdGuard has a list of standard filters created by our team. We constantly improve and update them, striving to meet the needs of most of our users.

At the same time, AdGuard allows you to create your own custom filters using the same types of rules that we have in our filters.

To describe the syntax of our filtering rules, we use [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), but we do not always strictly follow this specification.

> Originally, the AdGuard's syntax was based on the syntax of Adblock Plus rules. Later, we extended it with new types of rules for better ad filtering. Some parts of this article about the rules common both to AdGuard and ABP were taken from [this article](https://adblockplus.org/en/filters).

## Comments

Any line that starts with an exclamation mark is a comment. In the list of rules it is displayed in gray color. AdGuard will ignore this line, so you can write anything you want. Comments are usually placed above the rules and used to describe what a rule does.

For example:

```
! This is the comment. Under this line there is an actual filtering rule.
||example.org^
```

## Examples

#### Blocking by domain name

![Blocking by domain name](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/0_blocking_domain.svg)

**This rule blocks:**

* `http://example.org/ad1.gif`
* `http://subdomain.example.org/ad1.gif`
* `https://ads.example.org:8000/`

**This rule does not block:**

* `http://ads.example.org.us/ad1.gif`
* `http://example.com/redirect/http://ads.example.org/`

#### Blocking exact address

![Blocking exact address](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/1_exact_address.svg)

**This rule blocks:**

* `http://example.org/`

**This rule does not block:**

* `https://example.org/banner/img`

#### Basic rule modifiers

Filtering rules support numerous modifiers that allow you to fine-tune the rule behavior. Here is an example of a rule with some simple modifiers.

![Basic rule modifiers](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/2_basic_rule_options.svg)

**This rule blocks:**

* `http://example.org/script.js` if this script is loaded from `example.com`.

**This rule does not block:**

* `https://example.org/script.js` if this script is loaded from `example.org`.
* `https://example.org/banner.png` because it is not a script.

#### Unblocking an address

![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/3_basic_exception.svg)

**This rule unblocks:**

* `http://example.org/banner.png` even if there is a blocking rule for this address.

> Blocking rules with [`$important`](#important-modifier) modifier can override exceptions.

#### Unblocking everything on a website

![Unblocking everything](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/4_unblock_entire_website.svg)

**This rule unblocks**

* It disables all cosmetic rules on `example.com`.
* It unblocks all requests sent from this website even if there is are blocking rules matching these requests.

#### Cosmetic rule

![Cosmetic rule](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/5_cosmetic_rules.svg)

Cosmetic rules are based on using a special language named CSS, which every browser understands. Basically, it adds a new CSS style to the website which purpose is to hide particular elements. You can learn more about CSS in general [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

> AdGuard [extends CSS](#extended-css-selectors) and lets filters developers handle much more complicated cases. However, to use these extended rules, you need to be fluent in regular CSS.

**Popular CSS selectors**

| Name | CSS selector | Description |
| ------| ------ | ----------- |
| ID selector | `#banners`   | Matches all elements with `id` attribute equal to `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png) |
| Class selector | `.banners`   | Matches all elements with `class` attribute containing `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png) |
| Attribute selector | `div[class="banners"]`   | Matches all `div` elements with `class` attribute **exactly equal** to `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png) |
| Attribute substring selector | `div[class^="advert1"]`   | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`   | Matches all `div` elements which `class` attribute **ends with** the `banners_ads` string.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Attribute substring selector | `a[href^="http://example.com/"]`   | Matches all links that are loaded from `http://example.com/` domain.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png) |
| Attribute selector | `a[href="http://example.com/"]`   | Matches all links to **exactly** the `http://example.com/` address.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png) |

## Restrictions

#### Trusted filters {#trusted-filters}

Some rules can be used only in trusted filters. This category includes:
> * filter lists [created by the AdGuard team](../adguard-filters),
> * custom filter lists installed as `trusted`,
> * user rules.

## Basic rules

The most simple rules are so-called *Basic rules*. They are used to block requests to specific URLs. Or to unblock it, if there is a special marker "@@" at the beginning of the rule. The basic principle for this type of rules is quite simple: you have to specify the address and additional parameters that limit or expand the scope of the rule.

> **Sub-requests**
>
> Basic rules for blocking requests are applied only to **sub-requests**. That means they will not block the loading of the page.

> **Response status**
>
> Browser detects a blocked request as completed with an error.

### Basic rules syntax {#basic-rules-syntax}

```
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* **`pattern`** — an address mask. Every request URL is collated to this mask. You can also use special characters in the template, their description is [below](#basic-rules-special-characters). Note that AdGuard trims URLs to a length of 4096 characters in order to speed up matching and avoid issues with ridiculously long URLs.
* **`@@`** — a marker that is used in rules of exception. To turn off filtering for a request, start your rule with this marker.
* **`modifiers`** — parameters that "clarify" the basic rule. Some of them limit the scope of the rule and some can completely change they way it works.

### Special characters {#basic-rules-special-characters}

* **`*`** — a wildcard character. It is used to represent "any set of characters". This can also be an empty string or a string of any length.
* **`||`** — matching the beginning of an address. With this character you do not have to specify a particular protocol and subdomain in address mask. It means, `||` stands for `http://*.`, `https://*.`, `ws://*.`, `wss://*.` at once.
* **`^`** — a separator character mark. Separator character is any character, but a letter, a digit, or one of the following: `_` `-` `.` `%`. In this example separator characters are shown in bold: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. The end of the address is also accepted as separator.
* **`|`** — a pointer to the beginning or the end of address. The value depends on the character placement in the mask. For example, a rule `swf|` corresponds to `http://example.com/annoyingflash.swf` , but not to `http://example.com/swf/index.html`. `|http://example.org` corresponds to `http://example.org`, but not to `http://domain.com?url=http://example.org`.

> **Visual representation**
>
> We also recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how such rules should be made.

### Regular expressions support {#regexp-support}

If you want even more flexibility in making rules, you can use [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) instead of a default simplified mask with special characters.

> **Performance**
>
> Rules with regular expressions work more slowly, therefore it is recommended to avoid them or to limit their scope to specific domains.

If you want a blocker to determine a regular expression, the `pattern` has to look like this:
```
pattern = "/" regexp "/"
```

For example, `/banner\d+/$third-party` this rule will apply the regular expression `banner\d+` to all third-party requests. Exclusion rule with regular expression looks like this: `@@/banner\d+/`.

> **Compatibility with different versions of AdGuard**
>
> AdGuard Safari and AdGuard for iOS do not fully support regular expressions because of [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

### Wildcard support for TLD (top-level domains) {#wildcard-for-tld}

Wildcard characters are supported for TLDs of the domains in patterns of [cosmetic](#cosmetic-rules), [HTML filtering](#html-filtering-rules) and [JavaScript](#javascript-rules) rules.

For cosmetic rules, e.g. `example.*##.banner`, multiple domains are matched due to the part `.*`, i.e. `example.com`, `sub.example.net`, `example.co.uk`, etc.

For basic rules the described logic is applicable only for the domains specified in [`$domain` modifier](#domain-modifier), e.g. `||*/banners/*$image,domain=example.*`.

> **Compatibility with different versions of AdGuard**
>
> In AdGuard for Windows, Mac, Android, and AdGuard Browser extension rules with wildcard `.*` match any [public suffix (or eTLD)](https://publicsuffix.org/list/). But for AdGuard for Safari and iOS [the supported list of top-level domains](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) is limited due to Safari limitations.
>
> Rules with wildcard for TLD are not supported by AdGuard Content Blocker.

### Basic rules examples

* `||example.com/ads/*` — a simple rule, which corresponds to addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.

* `||example.org^$third-party` —  this rule blocks third-party requests to `example.org` and its subdomains.

* `@@||example.com$document` — general exception rule. It completely disables filtering for `example.com` and all subdomains. There is a number of modifiers which can be used in exception rules. For more details, please follow the link [below](#exception-modifiers).

### Basic rules modifiers

* [Basic modifiers](#basic-rules-basic-modifiers)
* [Content type modifiers](#content-type-modifiers)
* [Exception modifiers](#exception-modifiers)

> **Note**
>
> The features described in this section are intended for experienced users. They extend capabilities of "Basic rules", but in order to use them you need to have a basic understanding of the way your browser works.

You can change the behavior of a "basic rule" by using additional modifiers. Modifiers should be located in the end of the rule after a `$` sign and be separated by commas.

Example:
```
||domain.com^$popup,third-party
```

#### Basic modifiers {#basic-rules-basic-modifiers}

* [`$domain`](#domain-modifier)
* [`$third-party`](#third-party-modifier)
* [`$popup`](#popup-modifier)
* [`$match-case`](#match-case-modifier)
* [`$header`](#header-modifier)

The following modifiers are the most simple and frequently used.

#### **`$domain`** {#domain-modifier}

`$domain` limits the rule application area to a list of domains and their subdomains. To add multiple domains to one rule, use the `|`  character as a separator.

**Examples**

**Just `$domain`:**

* `||baddomain.com^$domain=example.org` blocks requests that match the specified mask, and are sent from domain `example.org` or its subdomains.
* `||baddomain.com^$domain=example.org|example.com` — the same rule, but it works for both `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign.

**`$domain` and negation `~`:**

* `||baddomain.com^$domain=~example.org` blocks requests matching the pattern sent from any domain except `example.org` and its subdomains.
* `||baddomain.com^$domain=example.org|~foo.example.org` blocks requests sent from `example.org` and its subdomains, except the subdomain `foo.example.org`.

**`$domain` modifier matching target domain:**

In some cases the `$domain` modifier can match not only the referrer domain, but also the target domain. This happens when all of the following is true:

1) The request has `document` content type.
2) The rule pattern does not match any particular domains.
3) The rule pattern does not contain regular expressions.
4) The `$domain` modifier contains only excluded domains, e.g. `$domain=~example.org|~example.com`.

The following predicate should be satisfied to perform a target domain matching: `1 AND ((2 AND 3) OR 4)`. That is, if the modifier `$domain` contains only excluded domains, then the rule does not need to meet the second and third conditions to match the target domain against the modifier `$domain`.

If some of the conditions above are not met but the rule contains [`$cookie`](#cookie-modifier) or [`$csp`](#csp-modifier) modifier, the target domain will still be matched.

If the referrer matches a rule with `$domain` that explicitly excludes the referrer domain, then the rule will not be applied even if the target domain also matches the rule. This affects rules with [`$cookie`](#cookie-modifier) and [`$csp`](#csp-modifier) modifiers, too.

**Examples**

* `*$cookie,domain=example.org|example.com` will block cookies for all requests to and from `example.org` and `example.com`.
* `*$document,domain=example.org|example.com` will block all requests to and from `example.org` and `example.com`.

In the following examples it is implied that requests are sent from `http://example.org/page`(the referrer) and the target URL is `http://targetdomain.com/page`.

* `page$domain=example.org` will be matched, as it matches the referrer domain.
* `page$domain=targetdomain.com` will be matched, as it matches the target domain and satisfies all requirements mentioned above.
* `||*page$domain=targetdomain.com` will not be matched, as the pattern `||*page` matches specific domains.
* `||*page$domain=targetdomain.com,cookie` will be matched despite the pattern `||*page` matches specific domains because it contains `$cookie` modifier.
* `/banner\d+/$domain=targetdomain.com` will not be matched as it contains a regular expression.
* `page$domain=targetdomain.com|~example.org` will not be matched because the referrer domain is explicitly excluded.

> **Limitations**
>
> Safari does not support the simultaneous use of allowed and disallowed domains, so rules like `||baddomain.com^$domain=example.org|~foo.example.org` will not work in AdGuard for Safari.

#### **`$third-party`** {#third-party-modifier}

A restriction of third-party and own requests. A third-party request is a request from a different domain. For example, a request to `example.org`, from `domain.com` is a third-party request.

> To be considered as such, a third-party request should meet one of the following conditions:
> 1) Its referrer is not a subdomain of the target domain or the other way round. For example, a request to `subdomain.example.org` from `example.org` is not a third-party request.
> 2) Its `Sec-Fetch-Site` header is set to `cross-site`.
If there is a `$third-party` modifier, the rule is only applied to third-party requests.

**Examples**

**`$third-party`:**

* `||domain.com^$third-party` — this rule applies to all domains, except `domain.com` and its subdomains. A third-party request example: `http://example.org/banner.jpg`.

If there is a `$~third-party` modifier, the rule is only applied to the requests that are not from third-party. Which means, they have to be sent from the same domain.

**`$~third-party`:**

* `||domain.com$~third-party` — this rule is applied to `domain.com`, but not to the other domains. Example of a request that is not a third-party request: `http://domain.com/icon.ico`.

#### **`$popup`** {#popup-modifier}

AdGuard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note that not all the tabs can be closed.

**Examples**

* `||domain.com^$popup` — if you try to go to `http://domain.com/` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

> It may not work if the popped up page is cached by the browser. It also will not work with some tricky popup methods. In such cases, it is better to use [AdGuard Popup Blocker](https://github.com/AdguardTeam/PopupBlocker) extension.

> **Note**
>
> Unlike with AdGuard Browser extension, `$popup` modifier is very unreliable when used with AdGuard for Windows, Mac and Android. In AdGuard for Safari and iOS, `$popup` rules will simply block the page right away.

#### **`$match-case`** {#match-case-modifier}

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

**Examples**

* `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

#### **`$header`** {#header-modifier}

The `$header` modifier allows matching the HTTP response having a specific header with (optionally) a specific value.

**Syntax**

```
$header "=" h_name [":" h_value]
h_value = string / regexp
```

where:
  * **`h_name`** — required, an HTTP header name. It is matched case-insesitively.
  * **`h_value`** — optional, an HTTP header value matching expression, it may be one of the following:
    * **`string`** — a sequence of characters. It is matched against the header value lexicographically;
    * **`regexp`** — a regular expression, starts and ends with `/`. The pattern works the same way as in the basic URL rules, but the characters `/`, `$` and `,` must be escaped with `\`.

The modifier `":" h_value` part may be omitted. In that case the modifier matches the header name only.

> **Compatibility with different versions of AdGuard**
>
> Rules with the `$header` modifier are supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.11 or later**.

**Examples**

* `||example.com^$header=set-cookie:foo` blocks requests which responses have the `Set-Cookie` header with the value matching `foo` literally.
* `||example.com^$header=set-cookie` blocks requests which responses have the `Set-Cookie` header with any value.
* `@@||example.com^$header=set-cookie:/foo\, bar\$/` unblocks requests which responses have the `Set-Cookie` header with value matching the `foo, bar$` regular expression.
* `@@||example.com^$header=set-cookie` unblocks requests which responses have a `Set-Cookie` header with any value.

#### Restriction by content type {#content-type-modifiers}

* [`$document`](#document-modifier)
* [`$image`](#image-modifier)
* [`$stylesheet`](#stylesheet-modifier)
* [`$script`](#script-modifier)
* [`$object`](#object-modifier)
* [`$font`](#font-modifier)
* [`$media`](#media-modifier)
* [`$subdocument`](#subdocument-modifier)
* [`$ping`](#ping-modifier)
* [`$xmlhttprequest`](#xmlhttprequest-modifier)
* [`$websocket`](#websocket-modifier)
* [`$other`](#other-modifier)
* [`$object-subrequest` (deprecated)](#object-subrequest-modifier)
* [`$webrtc` (deprecated)](#webrtc-modifier)

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

> **Compatibility with different versions of AdGuard**
>
> There is a big difference in how AdGuard determines the content type on different platforms. For AdGuard Browser extension, content type for every request is provided by browser. AdGuard for Windows, Mac, Android use following method: first we try to determine the type of the request by the `Sec-Fetch-Dest` request header or by the filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

**Content type modifiers examples**

* `||example.org^$image` — corresponds to all images from `example.org`.
* `||example.org^$script,stylesheet` — corresponds to all the scripts and styles from `example.org`.
* `||example.org^$~image,~script,~stylesheet` — corresponds to all requests to `example.org` except for the images, scripts and styles.

#### **`$document`** {#document-modifier}

The rule corresponds to the main frame document requests, i.e. HTML documents that are loaded in the browser tab. It does not match iframes, there is a [`$subdocument` modifier](#subdocument-modifier) for these.

By default, AdGuard does not block the requests that are loaded in the browser tab (e.g. "main frame bypass"). The idea is not to prevent pages from loading as the user clearly indicated that they want this page to be loaded. However, if the `$document` modifier is specified explicitly, AdGuard does not use that logic and prevents the page load. Instead, it responds with a "blocking page".

If this modifier is used with an exclusion rule (`@@`), it completely disables blocking on corresponding pages. It is equivalent to using `$elemhide`, `$content`, `$urlblock`, `$jsinject`, and `$extension` modifiers simultaneously.

**Examples**

* `@@||example.com^$document` completely disables filtering on all pages at `example.com` and all subdomains.
* `@@||example.com^$document,~extension` completely disables blocking on any pages at `example.com` and all subdomains, but continues to run userscripts there.

* `||example.com^$document` blocks HTML document request to `example.com` with a blocking page.
* `||example.com^$document,redirect=noopframe` redirects HTML document request to `example.com` to an empty html document.
* `||example.com^$document,removeparam=test` removes `test` query parameter from HTML document request to  `example.com`.
* `||example.com^$document,replace=/test1/test2/` replaces `test1` with `test2` in  HTML document request to `example.com`.

> **Compatibility with different versions of AdGuard**
>
> Blocking rules with `$document` modifier are not supported by AdGuard Content Blocker.

#### **`$image`** {#image-modifier}

The rule corresponds to images requests.

#### **`$stylesheet`** {#stylesheet-modifier}

The rule corresponds to CSS files requests.

#### **`$script`** {#script-modifier}

The rule corresponds to script requests, e.g. javascript, vbscript.

#### **`$object`** {#object-modifier}

The rule corresponds to browser plugins resources, e.g. Java or Flash.

#### **`$font`** {#font-modifier}

The rule corresponds to requests for fonts, e.g. `.woff` filename extension.

#### **`$media`** {#media-modifier}

The rule corresponds to requests for media files — music and video, e.g. `.mp4` files.

#### **`$subdocument`** {#subdocument-modifier}

The rule corresponds to requests for built-in pages — HTML tags `frame` and `iframe`.

**Examples**

* `||example.com^$subdocument` blocks built-in page requests (`frame` and `iframe`) to `example.com` and all its subdomains anywhere.
* `||example.com^$subdocument,domain=domain.com` blocks built-in page requests (`frame` и `iframe`) to `example.com` (and its subdomains) from `domain.com` and all its subdomains.

#### **`$ping`** {#ping-modifier}

The rule corresponds to requests caused by either `navigator.sendBeacon()` or the `ping` attribute on links.

> **Compatibility with different versions of AdGuard**
>
> AdGuard for Windows, Mac, Android often cannot accurately detect `navigator.sendBeacon()`. For reliable detection, use AdGuard Browser extension.

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

The rule applies only to ajax requests (requests sent via javascript object `XMLHttpRequest`).

> **Compatibility with different versions of AdGuard**
>
> AdGuard for Windows, Mac, Android often cannot accurately detect this type and sometimes detects it as [`$other`](#other-modifier) or [`$script`](#script-modifier). For reliable detection, use AdGuard Browser extension.

#### **`$websocket`** {#websocket-modifier}

The rule applies only to WebSocket connections.

> **Compatibility with different versions of AdGuard**
>
> AdGuard for Safari and iOS cannot properly apply rules with `websocket` modifier due to Safari limitations.

#### **`$other`** {#other-modifier}

The rule applies to requests for which the type has not been determined or does not match the types listed above.

#### **`$webrtc` (deprecated)** {#webrtc-modifier}

> **Deprecation notice**
>
> This modifier is deprecated and no longer supported. Rules with it are considered as invalid.
> If you need to suppress WebRTC, consider using the `nowebrtc` [scriptlet](#scriptlets).

The rule applies only to WebRTC connections.

**Examples**

* `||example.com^$webrtc,domain=example.org` blocks webRTC connections to `example.com` for `example.org`.
* `@@*$webrtc,domain=example.org` disables the RTC wrapper for `example.org`.

#### **`$object-subrequest` (deprecated)** {#object-subrequest-modifier}

> **Deprecation notice**
>
> `$object-subrequest` modifier is deprecated and no longer supported. Rules with it are considered as invalid.
> The rule corresponds to requests by browser plugins (it is usually Flash).

#### Exception modifiers {#exception-modifiers}

* [`$elemhide`](#elemhide-modifier)
* [`$content`](#content-modifier)
* [`$jsinject`](#jsinject-modifier)
* [`$urlblock`](#urlblock-modifier)
* [`$extension`](#extension-modifier)
* [`$stealth`](#stealth-modifier)
* [`$specifichide`](#specifichide-modifier)
* [Generic rules](#exception-modifiers-generic-rules)
  * [`$generichide`](#generichide-modifier)
  * [`$generichide`](#generichide-modifier)

Exception rules disable the other basic rules for the addresses to which they correspond. They begin with a `@@` mark. All the basic modifiers listed above can be applied to them and they also have a few special modifiers.

> **Visual representation**
>
> We recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how exception rules should be made.

#### **`$elemhide`** {#elemhide-modifier}

Disables any [cosmetic rules](#cosmetic-rules) on the pages matching the rule.

**Examples**

* `@@||example.com^$elemhide` disables all cosmetic rules on pages at `example.com` and all subdomains.

#### **`$content`** {#content-modifier}

Disables [HTML filtering](#html-filtering-rules) and [`$replace`](#replace-modifier) rules on the pages that match the rule.

**Examples**

* `@@||example.com^$content` disables all HTML filtering rules and replace rules on pages at `example.com` and all its subdomains.

#### **`$jsinject`** {#jsinject-modifier}

Forbids adding of javascript code to the page. You can read about javascript rules further.

**Examples**

* `@@||example.com^$jsinject` disables javascript on pages at `example.com` and all subdomains.

#### **`$urlblock`** {#urlblock-modifier}

Disables blocking of all requests sent from the pages matching the rule.

**Examples**

* `@@||example.com^$urlblock` — any requests sent from the pages at `example.com` and all subdomains are not going to be blocked.

#### **`$extension`** {#extension-modifier}

Disables all userscripts on the pages matching this rule.

**Examples**

* `@@||example.com^$extension` — userscripts will not work on all pages of the `example.com` website.

> **Compatibility with different versions of AdGuard**
>
> Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$extension` modifier.

#### **`$stealth`** {#stealth-modifier}

Disables the Stealth Mode module for all corresponding pages and requests.

**Syntax**

```
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` stand for certain Stealth Mode options disabled by the modifier. The modifier can contain any number of options (see below) or not contain them at all. In the latter case the modifier disables all the Stealth Mode features.

The list of the available modifier options:

* `searchqueries` disables [**Hide your search queries**](../../stealth-mode#searchqueries) option
* `donottrack` disables [**Send Do-Not-Track header**](../../stealth-mode#donottrack) option
* `3p-cookie` disables [**Self-destructing third-party cookies**](../../stealth-mode#3p-cookie) option
* `1p-cookie` disables [**Self-destructing first-party cookies**](../../stealth-mode#1p-cookie) option
* `3p-cache` disables [**Disable cache for third-party requests**](../../stealth-mode#3p-cache) option
* `3p-auth` disables [**Block third-party Authorization header**](../../stealth-mode#3p-auth) option
* `webrtc` disables [**Block WebRTC**](../../stealth-mode#webrtc) option
* `push` disables [**Block Push API**](../../stealth-mode#push) option
* `location` disables [**Block Location API**](../../stealth-mode#location) option
* `flash` disables [**Block Flash**](../../stealth-mode#flash) option
* `java` disables [**Block Java**](../../stealth-mode#java) option
* `referrer` disables [**Hide Referrer from third parties**](../../stealth-mode#miscellaneous) option
* `useragent` disables [**Hide your User-Agent**](../../stealth-mode#useragent) option
* `ip` disables [**Hide your IP address**](../../stealth-mode#ip) option
* `xclientdata` disables [**Remove X-Client-Data header from HTTP requests**](../../stealth-mode#xclientdata) option
* `dpi` disables [**Protect from DPI**](../../stealth-mode#dpi) option

**Examples**

* `@@||example.com^$stealth` disables Stealth Mode for `example.com` (and subdomains) requests, except for blocking cookies and hiding tracking parameters (see below).
* `@@||domain.com^$script,stealth,domain=example.com` disables Stealth Mode only for script requests to `domain.com` (and its subdomains) on `example.com` and all its subdomains.
* `@@||example.com^$stealth=3p-cookie|dpi` disables blocking third-party cookies and DPI fooling measures for `example.com`.

> **Note**
>
> Blocking cookies and removing tracking parameters is achieved by using rules with [`$cookie`](#cookie-modifier) and [`$removeparam`](#removeparam-modifier) modifiers. Exception rules with only `$stealth` modifier will not do those things. If you want to completely disable all Stealth Mode features for a given domain, you need to include all three modifiers:
> `@@||example.org^$stealth,removeparam,cookie`

> **Compatibility with different versions of AdGuard**
>
> * Stealth Mode is available in AdGuard for Windows, Mac, Android, and AdGuard Browser extension. All other products will ignore the rules with `$stealth` modifier.
> * `$stealth` modifier with specific options is supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10 or later**.

#### **`specifichide`** {#specifichide-modifier}

Disables all specific element hiding and CSS rules, but not general ones. Has an opposite effect to [`$generichide`](#generichide-modifier).

**Examples**

* `@@||example.org^$specifichide` disables `example.org##.banner` but not `##.banner`.

> **Note**
>
> All cosmetic rules — not just specific ones — can be disabled by [`$elemhide` modifier](#elemhide-modifier).

> **Compatibility with different versions of AdGuard**
>
> Rules with `$specifichide` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### Generic rules {#exception-modifiers-generic-rules}

Before we can proceed to the next modifiers, we have to make a definition of _generic rules_. The rule is generic if it is not limited to specific domains.
Wildcard character `*` is supported as well.

For example, these rules are generic:
```
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

And these are not:
```
domain.com###banner
||domain.com^$domain=example.com
```

##### **`$generichide`** {#generichide-modifier}

Disables all generic [cosmetic rules](#cosmetic-rules) on pages that correspond to exception rule.

**Examples**

* `@@||example.com^generichide` — disables generic cosmetic rules on any pages at `example.com` and all subdomains.

##### **`$genericblock`** {#generichide-modifier}

Disables generic basic rules on pages that correspond to exception rule.

**Examples**

* `@@||example.com^$genericblock` — disables generic basic rules on any pages at `example.com` and all subdomains.

### Advanced capabilities

* [`$important`](#important-modifier)
* [`$badfilter`](#badfilter-modifier)
* [`$replace`](#replace-modifier)
* [`$csp`](#csp-modifier)
* [`$all`](#all-modifier)
* [`$inline-script`](#inline-script-modifier)
* [`$inline-font`](#inline-font-modifier)
* [`$cookie`](#cookie-modifier)
* [`$network`](#network-modifier)
* [`$app`](#app-modifier)
* [`$redirect`](#redirect-modifier)
* [`$redirect-rule`](#redirect-rule-modifier)
* [`$denyallow`](#denyallow-modifier)
* [`$removeparam`](#removeparam-modifier)
* [`$removeheader`](#removeheader-modifier)
* [`$hls`](#hls-modifier)
* [`$jsonprune`](#jsonprune-modifier)
* [`noop`](#noop-modifier)
* [`$empty` (deprecated)](#empty-modifier)
* [`$mp4` (deprecated)](#mp4-modifier)

These modifiers are able to completely change the behaviour of basic rules.

#### **`$important`** {#important-modifier}

The `$important` modifier applied to a rule increases its priority over any other rule without `$important` modifier. Even over basic exception rules.

**Examples**

```
! blocking rule will block all requests despite of the exception rule
||example.org^$important
@@||example.org^
```

```
! if the exception rule also has `$important` modifier it will prevail, so no requests will not be blocked
||example.org^$important
@@||example.org^$important
```

```
! if a document-level exception rule is applied to the document, the `$important` modifier will be ignored;
! so if a request to `example.org` is sent from the `test.org` domain, the blocking rule will not be applied despite it has the `$important` modifier
||example.org^$important
@@||test.org^$document
```

#### **`$badfilter`** {#badfilter-modifier}

The rules with the `$badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `$badfilter` rule (without the `$badfilter` modifier).

**Examples**

* `||example.com$badfilter` disables `||example.com`
* `||example.com$image,badfilter` disables `||example.com$image`
* `@@||example.com$badfilter` disables `@@||example.com`
* `||example.com$domain=domain.com,badfilter` disables `||example.com$domain=domain.com`

Rules with `$badfilter` modifier can disable other basic rules for specific domains if they fulfill the following conditions:
1. The rule has a `$domain` modifier.
2. The rule does not have a negated domain `~` in `$domain` modifier value.

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note that [wildcard-TLD logic](#wildcard-for-tld) works here as well.

**Examples**

* `/some$domain=example.com|example.org|example.io` is disabled for `example.com` by `/some$domain=example.com,badfilter`
* `/some$domain=example.com|example.org|example.io` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org` and `/some$domain=example.io` are disabled completely by `/some$domain=example.com|example.org|example.io,badfilter`
* `/some$domain=example.com|example.org|example.io` is disabled completely by `/some$domain=example.*,badfilter`
* `/some$domain=example.*` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org|example.io` is NOT disabled for `example.com` by `/some$domain=example.com|~example.org,badfilter` because the value of `$domain` modifier contains a negated domain

> **Compatibility with different versions of AdGuard**
>
> Rules with `$badfilter` modifier are not supported by AdGuard Content Blocker.

#### **`$replace`** {#replace-modifier}

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

> You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

* `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc).
* `$replace` rules do not apply if the size of the original response is more than 3MB.
* `$replace` rules have a higher priority than other basic rules (**including** exception rules). So if a request corresponds to two different rules one of which has the `$replace` modifier, this rule will be applied.
* Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
* Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page content with a `$replace` rule and disable cosmetic rules there at the same time.

> `$replace` value can be empty in the case of exception rules. See examples section for further information.

> **Multiple rules matching a single request**
>
> In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```
replace = "/" regexp "/" replacement "/" modifiers
```

* **`regexp`** — a regular expression.
* **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
* **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Examples**

```
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:
* `regexp` - `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
* `replacement` — `\$1<\/VAST>` where `$` is escaped;
* `modifiers` — `i` for insensitive search.

You can see how this rule works here:
http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

* Both rule 1 and 2 will be applied to all requests sent to `example.org`.
* Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Disabling `$replace` rules**

* `@@||example.org^$replace` will disable all `$replace` rules matching `||example.org^`.
* `@@||example.org^$document` or `@@||example.org^$content` will disable all `$replace` rules **originated from** pages of `example.org` **including the page itself**.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$replace` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

> **Restrictions**
>
> Rules with `$replace` modifier can be used [**only in trusted filters**](#trusted-filters).

#### **`$csp`** {#csp-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, it will not block the matching request. The response headers are going to be modified instead.

> In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

For the requests matching a `$csp` rule, we will strengthen response security policy by enhancing the content security policy, similar to the content security policy of the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. Other basic rules have no influence on it **save for document-level exceptions** (see the examples section below).

> **Multiple rules matching a single request**
>
> In case if multiple `$csp` rules match a single request, we will apply each of them.

**Syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section below.

> **Limitations**
>
> 1. There are a few characters forbidden in the `$csp` value: `,`, `$`.
> 2. `$csp` rules support limited list of modifiers: `$domain`, `$important`, `$subdocument`.
> 3. Rules with `report-*` directives are considered invalid.

**Examples**

* `||example.org^$csp=frame-src 'none'` blocks all frames on example.org and its subdomains.
* `@@||example.org/page/*$csp=frame-src 'none'` disables all rules with the `$csp` modifier exactly matching `frame-src 'none'` on all the pages matching the rule pattern. For instance, the rule above.
* `@@||example.org/page/*$csp` disables all the `$csp` rules on all the pages matching the rule pattern.
* `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` disables inline scripts on all the pages matching the rule pattern.
* `@@||example.org^$document` or `@@||example.org^$urlblock` disables all the `$csp` rules on all the pages matching the rule pattern.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$csp` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$all`** {#all-modifier}

`$all` modifier is made of [`$document`](#document-modifier), [`$popup`](#popup-modifier), [`$csp`](#csp-modifier) modifiers. E.g. rule `||example.org^$all` is converting into such set of rules:
```
||example.org^$document,popup
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^
```

#### **`$inline-script`** {#inline-script-modifier}

`$inline-script` modifier is a sort of a shortcut for [`$csp`](#csp-modifier) modifier with specific value. E.g. the rule `||example.org^$inline-script` is converting into such a rule:
```
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

`$inline-font` modifier is a sort of a shortcut for [`$csp`](#csp-modifier) modifier with specific value. E.g. the rule `||example.org^$inline-font` is converting into such a rule:
```
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$cookie`** {#cookie-modifier}

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes us suppress or modify the `Cookie` and `Set-Cookie` headers.

> **Multiple rules matching a single request**
>
> In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

**Syntax**

```
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```
where:
  * **`name`** — optional, string or regular expression to match cookie name.
  * **`seconds`** — number of seconds for current time to offset the expiration date of cookie.
  * **`strategy`** — string for [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) strategy to make cookie use.

For example
```
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```
every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:
  * Set its expiration date to current time plus `3600` seconds
  * Makes the cookie use [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) "lax" strategy.

> **Escaping special characters**
>
> If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use  backslash `\` escape each of them. For example, escaped comma looks like this: `\,`.

**Examples**

* `||example.org^$cookie` blocks **all** cookies set by `example.org`; this is an equivalent to setting `maxAge=0`
* `$cookie=__cfduid` blocks CloudFlare cookie everywhere
* `$cookie=/__utm[a-z]/` blocks Google Analytics cookies everywhere
* `||facebook.com^$third-party,cookie=c_user` prevents Facebook from tracking you even if you are logged in

`$cookie` rules are not affected by regular exception rules (`@@`) unless it is a `$document` exception. In order to disable a `$cookie` rule, the exception rule should also have a `$cookie` modifier. How it works:

* `@@||example.org^$cookie` unblocks all cookies set by `example.org`
* `@@||example.org^$cookie=concept` unblocks a single cookie named `concept`
* `@@||example.org^$cookie=/^_ga_/` unblocks every cookie that matches the regular expression

> **Limitations**
>
> `$cookie` rules support a limited list of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$cookie` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$network`** {#network-modifier}

This is basically a Firewall-kind of rules allowing to fully block or unblock access to a specified remote address.

1. `$network` rules match **IP addresses only**! You cannot use them to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, e.g. there will be no further filtering at all.
4. If the IP part starts and ends with `/` character, it is treated as a regular expression.

> We recommend to get acquainted with this [article](#regexp-support), for better understanding of regular expressions.

**Examples**

* `174.129.166.49:3478^$network` blocks access to `174.129.166.49:3478` (but not to `174.129.166.49:34788`).
* `[2001:4860:4860::8888]:443^$network` blocks access to `[2001:4860:4860::8888]:443`.
* `174.129.166.49$network` blocks access to `174.129.166.49:*`.
* `@@174.129.166.49$network` makes AdGuard bypass data to the endpoint. No other rules will be applied.
* `/.+:3[0-9]{4}/$network` blocks access to any port from 30000 to 39999.
* `/8.8.8.(:?8|4)/$network` blocks access to both `8.8.8.8` and `8.8.8.4`.

> **Compatibility with different versions of AdGuard**
>
> Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$network` modifier.

#### **`$app`** {#app-modifier}

This modifier lets you narrow the rule coverage down to a specific application (or a list of applications). This might be not too important on Windows and Mac, but this is very important on mobile where some of the filtering rules must be application-specific.

* Android — use the app package name, e.g. `org.example.app`.
* Windows — use the process name, e.g. `chrome.exe`.
* Mac — use the bundle ID or the process name, e.g. `com.google.Chrome`.

> For Mac, you can find out the bundle ID or the process name of the app by viewing the respective request details in the Filtering log.

**Examples**

* `||baddomain.com^$app=org.example.app` — a rule to block requests that match the specified mask, and are sent from the `org.example.app` Android app.
* `||baddomain.com^$app=org.example.app1|org.example.app2` — the same rule, but it works for both `org.example.app1` and `org.example.app2` apps.

If you want the rule not to be applied to certain apps, start the app name with `~` sign.

* `||baddomain.com^$app=~org.example.app` — a rule to block requests that match the specified mask, and are sent from any app save for the `org.example.app`.
* `||baddomain.com^$app=~org.example.app1|~org.example.app2` — same as above, but now two apps are excluded: `org.example.app1` and `org.example.app2`.

> **Compatibility with different versions of AdGuard**
>
> Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$app` modifier.

#### **`$redirect`** {#redirect-modifier}

AdGuard is able to redirect web requests to a local "resource".

**Syntax**

AdGuard uses the same filtering rules syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

> The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

> `$redirect` rules' priority is higher than the regular basic blocking rules' priority. This means that if there is a basic blocking rule (even with `$important` modifier), `$redirect` rule will prevail over it. If there is an allowlist (`@@`) rule matching the same URL, it will disable redirecting as well (unless the `$redirect` rule is also marked as `$important`).

##### Disabling `$redirect` rules


* `||example.org/script.js$script,redirect=noopjs` — this rule redirects all requests to `example.org/script.js` to the resource named `noopjs`.
* `||example.org/test.mp4$media,redirect=noopmp4-1s` — this rule redirects all requests to `example.org/test.mp4` to the resource named `noopmp4-1s`.
* `@@||example.org^$redirect` will disable all `$redirect` rules for URLs that match `||example.org^`.
* `@@||example.org^$redirect=nooptext` will disable all rules with `$redirect=nooptext` for any request that matches `||example.org^`.

> More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

> **Compatibility with different versions of AdGuard**
>
> Rules with `$redirect` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

> Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Examples**

```
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$redirect-rule` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$denyallow`** {#denyallow-modifier}

`$denyallow` modifier allows to avoid creating additional rules when it is needed to disable a certain rule for specific domains. `$denyallow` matches only target domains and not referrer domains.

Adding this modifier to a rule is equivalent to excluding the domains by the rule's matching pattern or to adding the corresponding exclusion rules. To add multiple domains to one rule, use the `|`  character as a separator.

> **Restrictions**
>
> * The rule's matching pattern cannot target any specific domains, e.g. it cannot start with `||`.
> * Domains in the modifier value cannot be negated, e.g. `$denyallow=~x.com`, or have a wildcard TLD, e.g. `$denyallow=x.*`.
>
> The rules which violate these restrictions are considered invalid.

**Examples**

This rule:
```
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

is equivalent to this one:
```
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

or to the combination of these three:
```
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

> **Compatibility with different versions of AdGuard**
>
> Rules with `$denyallow` modifier are not supported by AdGuard Content Blocker.

#### **`$removeparam`** {#removeparam-modifier}

> `$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and [sometimes](#removeparam-modifier-compatibility) `POST` requests.

> `$removeparam` rules that do not have any [content type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

**Syntax**

**Basic syntax**

* `$removeparam=param` — removes query parameter with the name `param` from URLs of any request, e.g. a request to `http://example.com/page?param=1&another=2` will be transformed to `http://example.com/page?another=2`.

> `$removeparam` basic syntax is supported starting with v1.7 of [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) and v3.6 of AdGuard Browser Extension.

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

* `$removeparam=/regexp/[options]` — removes query parameters that matches the `regexp` regular expression from URLs of any request. Unlike basic syntax, it means *"remove query parameters normalized to a `name=value` string which match the `regexp` regular expression"*. `[options]` here is the list of regular expression options. At the moment, the only supported option is `i` which makes matching case-insensitive.

> `$removeparam` syntax for regular expressions will be supported starting with v1.8 of CoreLibs and v4.0 of AdGuard Browser Extension. For now, use the simplified version: `$removeparam=param`.

> **Escaping special characters**
>
> Do not forget to escape special characters like `,`, `/` and `$` in the regular expressions. Use `\` character for that purpose. For example, an escaped comma should look like this: `\,`.

> **Note**
>
> Regexp-type rules target both name and value of the parameter. In order to minimize the chance of mistakes, it is safer to start every regexp with `/^` unless you specifically target parameter values.

> We will try to detect and ignore unescaped `$` automatically using a simple rule of thumb:
> It is not an options delimiter if all three are true:
> 1. It looks like `$/`;
> 2. There is another slash character `/` to the left of it;
> 3. There is another unescaped dollar sign `$` to the left of that slash character.

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

* `||example.org^$removeparam` — removes all query parameters from URLs matching `||example.org^`.

**Inversion**

Use `~` to apply inversion:

* `$removeparam=~param` — removes all query parameters with the name different from `param`.
* `$removeparam=~/regexp/` — removes all query parameters that do not match the `regexp` regular expression.

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

* `@@||example.org^$removeparam` negates all `$removeparam` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeparam=param` negates the rule with `$removeparam=param` for any request matching `||example.org^`.
* `@@||example.org^$removeparam=/regexp/` negates the rule with `$removeparam=/regexp/` for any request matching `||example.org^`.

> **Multiple rules matching a single request**
>
> In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

**Examples**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` will not be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will not be affected by the blocking rule.

* `$removeparam=utm_source` — removes `utm_source` query parameter from all requests.

* `$removeparam=/utm_.*/` — removes all `utm_* query` parameters from URL queries of any request, e.g. a request to `http://example.com/page?utm_source=test` will be transformed to `http://example.com/page`.

* `$removeparam=/^utm_source=campaign$/` — removes `utm_source` query parameter with the value equal to `campaign`. It does not touch other `utm_source` parameters.

**Negating one `$removeparam` rule and replacing it with a different rule**

```
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There is one exception: Google Click ID (gclid) will not be removed from requests to example.com.

**Negating `$removeparam` for all parameters**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to `example.org`.

> **Compatibility with other modifiers**
>
> `$removeparam` rules are compatible with [basic modifiers](#basic-rules-common-modifiers), [content type modifiers](#content-type-modifiers), and with `$important` and `$app` modifiers. The rules which have any other modifiers are considered invalid and will be discarded.

> **Note**
>
> `$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

> ##### **Compatibility with different versions of AdGuard** {#removeparam-modifier-compatibility}
>
> * Rules with `$removeparam` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard browser extensions for Chrome, Firefox, Edge.
>
> * `POST` request types are supported only by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10 or later**.

> **Restrictions**
>
> Rules with `$removeparam` modifier can be used [**only in trusted filters**](#trusted-filters).

#### **`$removeheader`** {#removeheader-modifier}

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

**Syntax**

**Basic syntax**

* `||example.org^$removeheader=header-name` removes a **response** header called `header-name`
* `||example.org^$removeheader=request:header-name` removes a **request** header called `header-name`

> `$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

* `@@||example.org^$removeheader` negates **all** `$removeheader` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeheader=header` negates the rule with `$removeheader=header` for any request matching `||example.org^`.

> `$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers will not do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

> **Multiple rules matching a single request**
>
> In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

> **Restrictions**
>
> 1. This type of rules can be used [**only in trusted filters**](#trusted-filters).
>
> 2. In order to avoid compromising the security `$removeheader` cannot remove headers from the list below:
>   * `access-control-allow-origin`
>   * `access-control-allow-credentials`
>   * `access-control-allow-headers`
>   * `access-control-allow-methods`
>   * `access-control-expose-headers`
>   * `access-control-max-age`
>   * `access-control-request-headers`
>   * `access-control-request-method`
>   * `origin`
>   * `timing-allow-origin`
>   * `allow`
>   * `cross-origin-embedder-policy`
>   * `cross-origin-opener-policy`
>   * `cross-origin-resource-policy`
>   * `content-security-policy`
>   * `content-security-policy-report-only`
>   * `expect-ct`
>   * `feature-policy`
>   * `origin-isolation`
>   * `strict-transport-security`
>   * `upgrade-insecure-requests`
>   * `x-content-type-options`
>   * `x-download-options`
>   * `x-frame-options`
>   * `x-permitted-cross-domain-policies`
>   * `x-powered-by`
>   * `x-xss-protection`
>   * `public-key-pins`
>   * `public-key-pins-report-only`
>   * `sec-websocket-key`
>   * `sec-websocket-extensions`
>   * `sec-websocket-accept`
>   * `sec-websocket-protocol`
>   * `sec-websocket-version`
>   * `p3p`
>   * `sec-fetch-mode`
>   * `sec-fetch-dest`
>   * `sec-fetch-site`
>   * `sec-fetch-user`
>   * `referrer-policy`
>   * `content-type`
>   * `content-length`
>   * `accept`
>   * `accept-encoding`
>   * `host`
>   * `connection`
>   * `transfer-encoding`
>   * `upgrade`
>
> 3. `$removeheader` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and [content type modifiers](#content-type-modifiers), e.g. `$script`, `$stylesheet`, etc. The rules which have any other modifiers are considered invalid and will be discarded.

**Examples**

* `||example.org^$removeheader=refresh` removes `Refresh` header from all HTTP responses returned by `example.org` and its subdomains.
* `||example.org^$removeheader=request:x-client-data` removes `X-Client-Data` header from all HTTP requests.
* Next block of rules removes `Refresh` and `Location` headers from all HTTP responses returned by `example.org` save for requests to `example.org/path/*`, for which no headers will be removed:
  ```
  ||example.org^$removeheader=refresh
  ||example.org^$removeheader=location
  @@||example.org/path/$removeheader
  ```

> **Compatibility with different versions of AdGuard**
>
> Rules with `$removeheader` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`$hls`** {#hls-modifier}

`$hls` rules modify the response of a matching request. They are intended as a convenient way to remove segments from [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

> **Note**
>
> The word "segment" in this document means either a "Media Segment" or a "playlist" as part of a "Master Playlist": `$hls` rules do not distinguish between a "Master Playlist" and a "Media Playlist".

**Syntax**

* `||example.org^$hls=urlpattern` removes segments whose URL matches the URL pattern `urlpattern`. The pattern works just like the one in basic URL rules, however, the characters `/`, `$` and `,` must be escaped with `\` inside `urlpattern`.
* `||example.org^$hls=/regexp/options` removes segments where the URL or one of the tags (for certain options, if present) is matched by the regular expression `regexp`. Available `options` are:
  * `t` — instead of testing the segment's URL, test each of the segment's tags against the regular expression. A segment with a matching tag is removed;
  * `i` — make the regular expression case-insensitive.

> The characters `/`, `$` and `,` must be escaped with `\` inside `regexp`.

**Exceptions**

Basic URL exceptions shall not disable rules with `$hls` modifier. They can be disabled as described below:
* `@@||example.org^$hls` disables all `$hls` rules for responses from URLs matching `||example.org^`.
* `@@||example.org^$hls=text` disables all `$hls` rules with the value of the `$hls` modifier equal to `text` for responses from URLs matching `||example.org^`.

> `$hls` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

> **Restrictions**
>
> * `$hls` rules are only allowed in trusted filters.
> * `$hls` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
> * `$hls` rules only apply to HLS playlists, which are UTF-8 encoded text starting with the line `#EXTM3U`. Any other response will not be modified by these rules.
> * `$hls` rules do not apply if the size of the original response is more than 3 MB.

> **Note**
>
> When multiple `$hls` rules match the same request, their effect is cumulative.

**Examples**

* `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` removes all segments with the matching URL.
* `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` achieves more or less the same with a regular expression instead of a URL pattern.
* `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` removes all segments which have the matching tag.

**Anatomy of an HLS playlist**

A quick summary of the [specification](https://datatracker.ietf.org/doc/html/rfc8216):
1. An HLS playlist is a collection of text lines.
2. A line may be empty, a comment (starts with `#`), a tag (also starts with `#`, can only be recognized by name) or a URL.
3. A URL line is called a "segment".
4. Tags may apply to a single segment, i.e. the first URL line after the tag, to all segments following the tag and until the tag with the same name, or to the whole playlist.

Some points specific to the operation of `$hls` rules:
1. When a segment is removed, all of the tags that apply only to that segment are also removed.
2. When there is a tag that applies to multiple segments, and all of those segments are removed, the tag is also removed.
3. Since there is no way to recognize different kinds of tags by syntax, we recognize all of the tags specified by the RFC, plus some non-standard tags that we have seen in the field. Any lines starting with `#` and not recognized as a tag are passed through without modification, and are not matched against the rules.
4. We do not match tags that apply to the whole playlist, and `$hls` rules can not be used to remove them, since `$hls` rules are intended for removing segments. If you know what you are doing, you can use `$replace` rules to remove or rewrite just a single tag from the playlist.

**An example of a transformation done by the rules:**

<details>
<summary>Original response</summary>

```
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

```
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```
</details>

<details>
<summary>Modified response</summary>

```
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

> **Compatibility with different versions of AdGuard**
>
> Rules with the `$hls` modifier are supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10 or later**.

#### **`$jsonprune`** {#jsonprune-modifier}

`$jsonprune` rules modify the JSON response of a matching request by removing JSON items that match a modified
[JSONPath](https://goessner.net/articles/JsonPath/) expression. They do not modify responses which are not valid JSON.

**Syntax**

* `||example.org^$jsonprune=expression` removes items that match the modified JSONPath expression `expression` from the response.

> Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

The modified JSONPath syntax has the following differences from the original:
1. Script expressions are not supported.
2. The supported filter expressions are:
  * `?(has <key>)` — true if the current object has the specified key.
  * `?(key-eq <key> <value>)` — true if the current object has the specified key, and its value is equal to the specified value.
  * `?(key-substr <key> <value>)` — true if the specified value is a substring of the value of the specified key of the current object.
3. Whitespace outside of double- or single-quoted strings has no meaning.
4. Both double- and single-quoted strings can be used.
5. Expressions ending with `..` are not supported.
6. Multiple array slices can be specified in square brackets.

There are various online tools for testing JSONPath expressions, e.g.
https://jsonpath.herokuapp.com/
https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations on this planet have unique features/quirks and are subtly incompatible with each other.

**Exceptions**

Basic URL exceptions shall not disable rules with `$jsonprune` modifier. They can be disabled as described below:
* `@@||example.org^$jsonprune` disables all `$jsonprune` rules for responses from URLs matching `||example.org^`.
* `@@||example.org^$jsonprune=text` disable all `$jsonprune` rules with the value of the `$jsonprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

> `$jsonprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

> **Restrictions**
>
> * `$jsonprune` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
> * `$jsonprune` rules do not apply if the size of the original response is more than 3 MB.

> **Note**
>
> When multiple `$jsonprune` rules match the same request, they are sorted in lexicographical order, the first rule is applied to the original response, and each of the remaining rules is applied to the result of applying the previous one.

**Examples**

* `||example.org^$jsonprune=\$..[one\, "two three"]` removes all occurrences of the keys "one" and "two three" anywhere in the JSON document.
* `||example.org^$jsonprune=\$.a[?(has ad_origin)]` removes all children of `a` that have an `ad_origin` key.
* `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` removes all items that are at nesting level 3 and have a property "Some key" equal to "Some value".

> **Compatibility with different versions of AdGuard**
>
> Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, Mac and Android, **running CoreLibs version 1.10 or later**.

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of any length and can appear in a rule as many times as needed.

**Examples**

```
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

> **Compatibility with different versions of AdGuard**
>
> Rules with `noop` modifier are not supported by AdGuard Content Blocker.

#### **`$empty` (deprecated)** {#empty-modifier}

> **Deprecation notice**
>
> This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$empty` are converting into `$redirect=nooptext` now.

Usually, blocked requests look like a server error to browser. If you use `$empty` modifier, AdGuard will emulate a blank response from the server with` 200 OK` status.

**Examples**

* `||example.org^$empty` returns an empty response to all requests to `example.org` and all subdomains.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$mp4` (deprecated)** {#mp4-modifier}

> **Deprecation notice**
>
> This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are converting into `$redirect=noopmp4-1s,media` now.

As a response to blocked request AdGuard returns a short video placeholder.

**Examples**

* `||example.com/videos/$mp4` blocks all video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

> **Compatibility with different versions of AdGuard**
>
> Rules with `$mp4` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

# Non-basic rules

However, the capabilities of the basic rules may not be sufficient to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.


## Cosmetic rules {#cosmetic-rules}

> Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

### Element hiding rules {#cosmetic-elemhide-rules}

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

> Element hiding rules may operate differently [depending on the platform](#cosmetic-rules-priority).

#### Syntax {#non-basic-rules-modifiers-syntax}

```
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
* **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

> This rule will be also applied to all subdomains of `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign. For example:
`~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

> **Note**
>
> Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

**Examples**

* `example.com##div.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` — hides an element with a class `textad` at all domains, except `example.com` and its subdomains.

> **Limitations**
>
> Safari does not support both permitted and restricted domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

**Exceptions**

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:
```
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:
```
#@#.textad
```

The same can be achieved by adding this rule:
```
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

### CSS rules {#cosmetic-css-rules}

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With this rules you can basically add any CSS styles to the page.

> **Restrictions**
>
> Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

> **Compatibility with different versions of AdGuard**
>
> CSS rules are not supported by AdGuard Content Blocker.

> CSS rules may operate differently [depending on the platform](#cosmetic-rules-priority).

**Syntax**

```
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), that defines the elements we want to apply the style to.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`style`** — CSS style, that we want to apply to selected elements.

**Examples**

```
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

**Exceptions**

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains.
Exception rules syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:
```
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

### Extended CSS selectors {#extended-css-selectors}

* [Limitations](#extended-css-limitations)
* [Pseudo-class `:has()`](#extended-css-has)
* [Pseudo-class `:contains()`](#extended-css-contains)
* [Pseudo-class `:matches-css()`](#extended-css-matches-css)
* [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
* [Pseudo-class `:matches-property()`](#extended-css-matches-property)
* [Pseudo-class `:xpath()`](#extended-css-xpath)
* [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
* [Pseudo-class `:upward()`](#extended-css-upward)
* [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
* [Pseudo-class `:is()`](#extended-css-is)
* [Pseudo-class `:not()`](#extended-css-not)
* [Pseudo-class `:if-not()` (deprecated)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

> **Application area**
>
> Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

> **Compatibility with different versions of AdGuard**
>
> Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

**Syntax**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

* `#?#` — for element hiding, `#@?#` — for exceptions
* `#$?#` — for CSS rules, `#@$?#` — for exceptions

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Examples**

* `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
* `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
* `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
* `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

> You can apply standard CSS selectors using the ExtendedCss library by using a rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

> **Note**
>
> Some pseudo-classes do not require selector before it. Still adding a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)` but second one is more obvious.
>
> Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

#### ExtendedCss Limitations {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations:
[`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).


#### Pseudo-class `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

> **Note**
>
> Rules with the `:has()` pseudo-class should use the [native implementation of `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) if they use `##` marker and if it is possible, i.e. with no other extended selectors inside. To force applying of ExtendedCss rules with `:has()`, use `#?#`/`#$?#` marker explicitly.

> **Compatibility with other pseudo-classes**
>
> Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

> **Deprecation notice**
>
> `:if()` is no longer supported as a synonym for `:has()`.

**Syntax**

```
[target]:has(selector)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selector` — required, standard or extended CSS selector

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### `:has()` limitations {#extended-css-has-limitations}

> Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):
> - disallow `:has()` inside the pseudos accepting only compound selectors;
> - disallow `:has()` after regular pseudo-elements.

> Native `:has()` pseudo-class does not allow `:has()`, `:is()`, `:where()` inside `:has()` argument to avoid increasing the `:has()` invalidation complexity ([case 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). But ExtendedCss did not have such limitation earlier and filter lists already contain such rules, so we have not added this limitation to ExtendedCss and allow to use `:has()` inside `:has()` as it was possible before. To use it, just force ExtendedCss usage by setting `#?#`/`#$?#` rule marker.

> Native implementation does not allow any usage of `:scope` inside `:has()` argument ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Still, there are some such rules in filter lists: `div:has(:scope > a)` which we continue to support by simply converting them to `div:has(> a)`, as it used to be done previously.

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

> **Compatibility with old syntax**
>
> [Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.


#### Pseudo-class `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

> **Note**
>
> The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

> **Compatibility with other pseudo-classes**
>
> Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntax**

```
[target]:contains(match)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `match` — required, string or regular expression for matching element `textContent`. Regular expression flags are supported.

**Examples**

For such DOM:
```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

the element `div#match` can be selected by any on these extended selectors:
```
! plain text
div:contains(banner)

! regular expression
div:contains(/as .* banner/)

! regular expression with flags
div:contains(/it .* banner/gi)
```

> **Note**
>
> Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

> **Compatibility with old syntax**
>
> [Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.


#### Pseudo-class `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntax**

```
[target]:matches-css([pseudo-element, ] property: pattern)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `pseudo-element` — optional, valid standard pseudo-element, e.g. `before`, `after`, `first-line`, etc.
- `property` — required, a name of CSS property to check the element for
- `pattern` —  required, a value pattern that is using the same simple wildcard matching as in the basic url filtering rules OR a regular expression. For this type of matching, AdGuard always does matching in a case-insensitive manner. In the case of a regular expression, the pattern looks like `/regexp/`.

> **Special characters escaping and unescaping**
>
> For **non-regexp** patterns `(`,`)`,`[`,`]` must be **unescaped**,
> e.g. `:matches-css(background-image:url(data:*))`.
>
> For **regexp** patterns `\` should be **escaped**,
> e.g. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

> **Restrictions**
>
> Regexp patterns **do not support** flags.

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
```
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

> **Compatibility with other pseudo-classes**
>
> Obsolete pseudo-classes `:matches-css-before()` and `:matches-css-after()` are no longer recommended but still are supported for better compatibility.

> **Compatibility with old syntax**
>
> [Backward compatible syntax for `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) is supported but **not recommended**.


#### Pseudo-class `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows to select an element by its attributes, especially if they are randomized.

**Syntax**

```
[target]:matches-attr("name"[="value"])
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for attribute name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for attribute value matching

> **Escaping special characters**
>
> For **regexp** patterns `"` and `\` should be **escaped**,
> e.g. `div:matches-attr(class=/[\\w]{5}/)`.

> **Restrictions**
>
> Regexp patterns **do not support** flags.

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


#### Pseudo-class `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows to select an element by matching its properties.

**Syntax**

```
[target]:matches-property("name"[="value"])
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for element property name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for element property value matching

> **Escaping special characters**
>
> For **regexp** patterns `"` and `\` should be escaped,
> e.g. `div:matches-property(prop=/[\\w]{4}/)`.

> **Note**
>
> Regexp patterns are supported in `name` for any property in chain,
> e.g. `prop./^unit[\\d]{4}$/.type`.

> **Restrictions**
>
> Regexp patterns **do not support** flags.

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
```
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

> **For filters maintainers:**
>
> To check properties of a specific element, do the following:
> 1. Inspect the page element or select it in `Elements` tab of browser DevTools.
> 2. Run `console.dir($0)` in `Console` tab.


#### Pseudo-class `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows to select an element by evaluating an XPath expression.

**Syntax**

```
[target]:xpath(expression)
```
- `target`- optional, standard or extended CSS selector
- `expression` — required, valid XPath expression

##### `:xpath()` limitations {#extended-css-xpath-limitations}

> `target` can be omitted so it is optional. For any other pseudo-class that would mean "apply to *all* DOM nodes", but in case of `:xpath()` it just means "apply to the *whole* document", and such applying slows elements selecting significantly. That's why rules like `#?#:xpath(expression)` are limited to looking inside the `body` tag. For example, rule `#?#:xpath(//div[@data-st-area=\'Advert\'])` is parsed as `#?#body:xpath(//div[@data-st-area=\'Advert\'])`.

> Extended selectors with defined `target` as *any* selector — `*:xpath(expression)` — can still be used but it is not recommended, so `target` should be specified instead.

> Works properly only at the end of selector, except of [pseudo-class :remove()](#remove-pseudos).

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

```
subject:nth-ancestor(n)
```
- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

**Syntax**

```
subject:nth-ancestor(n)
```
- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

> The `:nth-ancestor()` pseudo-class is not supported inside argument of the [`:not()` pseudo-class](#extended-css-not).

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

`.child:nth-ancestor(1)` selects the element `div#target1`,
`div[class="inner"]:nth-ancestor(3)` selects the element `div#target2`.


#### Pseudo-class `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Syntax**

```
subject:upward(ancestor)
```
- `subject` — required, standard or extended CSS selector
- `ancestor` — required, specification for the ancestor of the element selected by `subject`, can be set as:
  - *number* >= 1 and < 256 for distance to the needed ancestor, same as [`:nth-ancestor()`](#extended-css-nth-ancestor)
  - *standard CSS selector* for matching closest ancestor

##### `:upward()` limitations {#extended-css-upward-limitations}

> The `:upward()` pseudo-class is not supported inside argument of the [`:not()` pseudo-class](#extended-css-not).

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

`.inner:upward(div[data])` selects the element `div#target1`,
`.inner:upward(div[id])` selects the element `div#target2`,
`.child:upward(1)` selects the element `div#target1`,
`.inner:upward(3)` selects the element `div#target2`.


#### Pseudo-class `:remove()` and pseudo-property `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

> **Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**

```
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```
- `selector` — required, standard or extended CSS selector

##### `:remove()` and `remove` limitations {#extended-css-remove-limitations}

> The `:remove()` pseudo-class is limited to work properly only at the end of selector.

> For applying the `:remove()` pseudo-class to any element, a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` should be used. Otherwise such extended selector may be considered as invalid, e.g. `.banner > :remove()` is not valid for removing any child element of `banner` class element, so it should look like `.banner > *:remove()`.

> If the `:remove()` pseudo-class or the `remove` pseudo-property is used, all style properties are ignored except of the [`debug` pseudo-property](#selectors-debug-mode).


**Examples**
```
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

> **Note**
>
> Rules with the `remove` pseudo-property should use `#$?#` marker: `$` for CSS style rules syntax, `?` for ExtendedCss syntax.


#### Pseudo-class `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntax**

```
[target]:is(selectors)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selectors` — [*forgiving selector list*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) of standard or extended selectors. For extended selectors only compound selectors are supported, not complex.

##### `:is()` limitations {#extended-css-is-limitations}

> Rules with the `:is()` pseudo-class should use the [native implementation of `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

> If the `:is()` pseudo-class argument `selectors` is an extended selectors, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector arg, i.e. `#?#html:is(.locked)` works fine.

> [Complex selectors](https://www.w3.org/TR/selectors-4/#complex) with extended pseudo-classes are not supported as `selectors` argument for `:is()` pseudo-class, only [compound ones](https://www.w3.org/TR/selectors-4/#compound) are allowed. It is [one of known issues](#known-issues). Check examples below for more details.

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

Due to limitations `:is(*:not([class]) > .banner)'` does not work
but `:is(*:not([class]):has(> .banner))` can be used instead of it to select the element `div#target2`:
```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```


#### Pseudo-class `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as arg. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntax**

```
[target]:not(selectors)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selectors` — selector list of standard or extended selectors

##### `:not()` limitations {#extended-css-not-limitations}

> Rules with the `:not()` pseudo-class should use the [native implementation of `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:not()`, use `#?#`/`#$?#` marker explicitly.

> If the `:not()` pseudo-class argument `selectors` is an extended selectors, due to the way how the `:not()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:not(<extended-selectors>)` does not work. So if `target` is not defined or defined as a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:not(...)` and `#?#*:not(...)` are parsed as `#?#html *:not(...)`. Please note that there is no such limitation for a standard selector arg, i.e. `#?#html:not(.locked)` works fine.

> The `:not()` is considered as a standard CSS pseudo-class inside argument of the [`:upward()` pseudo-class](#extended-css-upward) because `:upward()` supports only standard selectors.

> "Up-looking" pseudo-classes which are [`:nth-ancestor()`](#extended-css-nth-ancestor) and [`:upward()`](#extended-css-upward) are not supported inside `selectors` argument for `:not()` pseudo-class. It is [one of known issues](#known-issues).

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


#### Pseudo-class `:if-not()` (deprecated) {#extended-css-if-not}

> **Deprecation notice**
>
> The `:if-not()` pseudo-class is deprecated and no longer supported. Rules with it are considered as invalid.

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.


### Cosmetic rules priority {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, Mac, and Android**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#elemhide-syntax) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser extension**, the so called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## HTML filtering rules {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

> **Compatibility with different versions of AdGuard**
>
> HTML filtering rules are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

**Syntax**

```
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

* **`tagName`** — name of the element in lower case, for example, `div` or `script`.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules syntax](#elemhide-syntax).
* **`attributes`** — a list of attributes, that limit the elements selection. `name` — attribute name, `value` — substring, that is contained in attribute value.

**Examples**

**HTML code:**
```html
<script data-src="/banner.js"></script>
```

**Rule:**
```
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

**Special attributes**

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

* **`tag-content`**

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

> You should use `""` to escape `"`, for instance:
> `$$script[tag-content="alert(""this is ad"")"]`

For example, take a look at this HTML code:
```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:
```
$$script[tag-content="banner"]
```

> **Nested elements**
>
> If we are dealing with multiple nested elements and they all fall within the same HTML filtering rule, they all are going to be deleted.

* **`wildcard`**

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

> You should use `""` to escape `"`, for instance:
> `$$script[wildcard=""banner""]`

For example:
`$$script[wildcard="*banner*text*"]`

It will check, if the code of element contains two consecutive substrings `banner` and `text`.

* **`max-length`**

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value, a rule does not apply to the element.

> **Default value**
>
> If this parameter is not specified, the `max-length` is considered to be 8192.

For example:
```
$$div[tag-content="banner"][max-length="400"]
```
This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

* **`min-length`**

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value, a rule does not apply to the element.

For example:
```
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

**Exceptions**

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains.
The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:
```
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## JavaScript rules {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any javascript code to websites pages.

> **Restrictions**
>
> JavaScript rules can be used [**only in trusted filters**](#trusted-filters).

> **Compatibility with different versions of AdGuard**
>
> JavaScript rules are not supported by AdGuard Content Blocker.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```
rule = [domains]  "#%#" script
```

* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`script`** — arbitrary javascript code **in one string**.

**Examples**

* `example.org#%#window.__gaq = undefined;` executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

**Exceptions**

Similar to hiding rules, there is a special type of rules that disable the selected javascript rule for particular domains.
The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:
```
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## Scriptlet rules {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

> **Restrictions**
>
> Trusted scriptlets rules can be used [**only in trusted filters**](#trusted-filters).

> **Note**
>
> AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

**Syntax**

```
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

* **`scriptletName`** — required, a name of the scriptlet from AdGuard's Scriptlets library
* **`arguments`** — optional, a list of `string` arguments (no other types of arguments are supported)

**Examples**

```
example.org#%#//scriptlet("abort-on-property-read", "alert")
```
This rule will be applied to `example.org` and subdomains pages and will execute the `abort-on-property-read` scriptlet with the `alert` parameter.

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

> **Compatibility with different versions of AdGuard**
>
> Scriptlet rules are not supported by AdGuard Content Blocker.

### Trusted scriptlets {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

> **Note**
>
> Trusted scriptlets are not compatible with other ad blockers except AdGuard

> **Compatibility with different versions of AdGuard**
>
> Trusted scriptlets rules are now supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10.141 or later**.

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifiers for non-basic type of rules

* [`$app`](#non-basic-app-modifier)
* [`$domain`](#non-basic-domain-modifier)
* [`$path`](#non-basic-path-modifier)
* [`$url`](#non-basic-url-modifier)

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax**

```
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

* **`modifier`** — set of the modifiers described below.
* **`rule text`** — a rule to be modified.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values of the following characters must be escaped: `[`, `]`, `,`, and `\` (unless
it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like
this: `\]`.

#### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications.
The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Examples**

* `[$app=org.example.app]example.com##.textad` hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
* `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
* `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` applies scriptlet `prevent-setInterval` only in Safari browser on Mac.
* `[$app=org.example.app]#@#.textad` disables all `##.textad` rules for all domains while using `org.example.app`.

> **Compatibility with different versions of AdGuard**
>
> Such rules with `$app` modifier are supported by AdGuard for Windows, Mac and Android.

#### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains.
The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Examples**

* `[$domain=example.com]##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `[$domain=example.com|example.org]###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `[$domain=~example.com]##.textad` — this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

Please note that there are 2 ways to specify domain restrictions for non-basic rules:
1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule
`[$domain=example.org]example.com##.textad` will be rejected.

> **Compatibility with different versions of AdGuard**
>
> Such rules with `$domain` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntax**

```
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

> If `pattern` is not set for `$path`, rule will apply only on the main page of website.

> `$path` modifier matches the query string as well.

> `$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Examples**

* `[$path=page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
* `[$path=/page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
* `[$path=|/page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
* `[$path=/page.html|]##.textad` hides a `div` with a class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>`
* `[$path=/page*.html]example.com##.textad` hides a `div` with a class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
* `[$path]example.com##.textad` hides a `div` with a class `textad` at the main page of `example.com`
* `[$domain=example.com,path=/page.html]##.textad` hides a `div` with a class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
* `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` hides a `div` with a class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please note the [escaped special characters](#non-basic-rules-modifiers-syntax))

> **Compatibility with different versions of AdGuard**
>
> Rules with `$path` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntax**

```
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped.
The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Examples**

* `[$url=||example.com/ads/*]##.textad` hides a `div` with a class `textad` at addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.
* `[$url=||example.org^]###adblock` hides an element with attribute `id` equal to `adblock` at `example.org` and its subdomains.
* `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` hides `div` elements of the class `textad` for all domains matching the regular expression `[a-z]+\.example\.com^`.

> **Compatibility with different versions of AdGuard**
>
> Rules with the `$url` modifier are supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.11 or later**.

## Information for filters maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Preprocessor directives

We provide preprocessor directives that can be used by filters maintainers to improve compatibility with different ad blockers and provide:
* [including a file](#include-directive)
* [applying rules conditionally by ad blocker type](#conditions-directive)
* [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

> **Note**
>
> Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

> Preprocessor directives can be used in the User Rules or in the custom filters.

#### Including a file {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre- directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

> The files must originate from the same domain but may be located in a different folder.

> If included file is not found or unavailable, the whole filter update should fail.

> Same-origin limitation should be disabled for local custom filters.

**Examples**

Filter URL: `https://example.org/path/filter.txt`
```
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

Filters maintainers can use conditions to supply different rules depending on the ad blocker type. When an adblocker encounters an `!#if` directive, followed eventually by an `!#endif` directive, it will compile the code inside of the directives block only if the specified condition is true. Condition supports all the basic logical operators.

> A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive.

> Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

**Syntax**

```
!#if (conditions)
rules_list
!#endif
```
where:
- `!#if (conditions)` — start of the block
- `conditions` — just like in some popular programming languages, preprocessor conditions are based on constants declared by ad blockers. Ad blocker authors define on their own what exact constants do they declare. Possible values:
  - `adguard` always declared; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
  - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
    - `adguard_app_windows` — AdGuard for Windows
    - `adguard_app_mac` — AdGuard for Mac
    - `adguard_app_android` — AdGuard for Android
    - `adguard_app_ios` — AdGuard for iOS
    - `adguard_ext_safari` — AdGuard for Safari
    - `adguard_ext_chromium` — AdGuard Browser extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
    - `adguard_ext_firefox` — AdGuard Browser extension for Firefox
    - `adguard_ext_edge` — AdGuard Browser extension for Edge Legacy
    - `adguard_ext_opera` — AdGuard Browser extension for Opera
    - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
    - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)
- `rules_list` — list of rules
- `!#endif` — end of the block

**Examples**

```
! for all AdGuard products except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

#### Safari affinity {#safari-affinity-directive}

Safari is notoriously known for its harsh 150k max limit for filtering rules in content blockers. But in AdGuard for Safari and AdGuard for iOS max rule count is raised to 300k by splitting them into several content blockers. Generally, several filters categories are more or less independent, so there is such content blockers with such categories included:
- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

> `User rules` and `Allowlist` are added to every content blocker.

The main issue with using multiple content blockers is that rules inside these content blockers cannot influence each other. This may lead to different unexpected issues. So filters maintainers may use `!#safari_cb_affinity` to define Safari content blockers affinity for the rules inside of the directive block.

**Syntax**

```
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

```
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```
! to allowlist basic rule from AdGuard Tracking Protection filter filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Hints

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)).

**Syntax**

```
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

> Multiple hints can be applied.

#### `NOT_OPTIMIZED` hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```
where:
* **filter** — filter identifier
* **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
* **minPercent** — lower bound of `percent` value
* **maxPercent** — upper bound of `percent` value
* **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

> In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser extension:
- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### `PLATFORM` and `NOT_PLATFORM` hints

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

* `windows` — AdGuard for Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

* `mac` — AdGuard for Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

* `android` — AdGuard for Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

* `ios` — AdGuard for iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

* `ext_chromium` — AdGuard Browser extension for Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

* `ext_ff` — AdGuard Browser extension for Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

* `ext_edge` — AdGuard Browser extension for Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

* `ext_opera` — AdGuard Browser extension for Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

* `ext_safari` — AdGuard for Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

* `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

* `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Examples**

This rule will be available only in AdGuard for Windows, Mac, Android:
```
!+ PLATFORM(windows,mac,android)
||example.org^
```

This rule will be available for every platform except AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS:
```
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## How to debug filtering rules

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Filtering log

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

* In **AdGuard for Windows** you will find it inside *Ad Blocker* tab or via the tray menu;
* In **AdGuard for Mac** it is under *Settings > Advanced > Filtering log*;
* In **AdGuard for Android** it is a separate item in the side menu, also filtering log for a specific app or website is accessible from the Assistant.
* In **AdGuard Browser extension** it is accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs.

> In **AdGuard for iOS** and in **AdGuard for Safari** Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

### Selectors debugging mode {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**
* `selectorParsed` — text of eventually parsed selector
* `timings` — list of DOM nodes matched by the selector
  * `appliesCount` — total number of times that the selector has been applied on the page
  * `appliesTimings` — time that it took to apply the selector on the page, for each of the instances that it has been applied (in milliseconds)
  * `meanTiming` — mean time that it took to apply the selector on the page
  * `standardDeviation` — standard deviation
  * `timingsSum` — total time it took to apply the selector on the page across all instances

**Printed only for remove pseudos:**
* `removed` — flag to signal if elements we removed

**Printed if elements are not removed:**
* `matchedElements` — list of DOM nodes matched by the selector
* `styleApplied` — parsed rule style declaration related to the selector

**Examples**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```
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

If you are using AdGuard Browser extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

The following scriptlets are especially developed for debug purposes:

* [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#debug-current-inline-script)
* [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#debug-on-property-read)
* [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#abort-on-property-write)
* [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-addEventListener)
* [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-on-stack-trace)
* [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-eval)
* [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log)

The following scriptlets also may be used for debug purposes:

* [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#json-prune)
* [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-fetch)
* [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-requestanimationframe)
* [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-setinterval)
* [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-settimeout)
* [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-window-open) with specified `replacement` parameter
* [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-xhr)
* [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets#trusted-replace-fetch-response)
* [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets#trusted-replace-xhr-response)

## Good luck with creating filters!

We wish you luck with creating you own ad filters.

If you need an advice on how to create your own filters properly, our forum has a [special section](https://forum.adguard.com/index.php?forums/69/) dedicated to writing your own filtering rules.
