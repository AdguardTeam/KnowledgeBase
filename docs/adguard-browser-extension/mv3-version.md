---
title: Manifest V3 version
sidebar_position: 5
---

As MV2 extensions are being phased out in the Chrome Web Store, Chrome users may need to switch to MV3 extensions that are compatible with Chrome’s new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Our MV3 extension effectively blocks ads and trackers while seamlessly managing social widgets, banners, and video ads. Most users will not notice any operational differences, but there are some limitations and changes to be aware of.

[Where to find our extensions](#where-to-find-our-extensions)

[Main changes in features and settings](#main-changes-in-features-and-settings)

[Limitations](#limitations)

[Maximum number of rules and filters](#maximum-number-of-rules-and-filters)

[Network rules](#network-rules)

## Where to find our extensions

The **MV3 version** has replaced our old extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

The **beta version of MV3** is still available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

The old beta extension has been renamed to [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) and will be supported until Google phases it out.

## Main changes in features and settings

- **No auto and manual filter updates.** The options *Auto-update filters* and *Check filters update* are no longer available in the *Filters* tab. Since some of the rules are now applied in DNR form, we can’t update filters on request, only through the full process of updating the extension along with the review in the stores.

- **Filtering log**

  ![Filtering log *border](https://cdn.adtidy.org/content/blog/new/log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “approximate rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. You’ll find detailed instructions on how to do this in a separate article.

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

**Static rules:** **30,000** rules per extension, with a cumulative limit of **330,000** for all extensions installed by a single user.

For regex rules, the limit is set at **1,000 per extension**.

The maximum number of simultaneously enabled filters is **50**.

**Dynamic rules:** a strict cap of **5,000** rules is imposed, which includes a maximum of 1,000 regex rules.

  If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first user rules, then allowlist, and finally — custom filters.

> **Converted rules** are rules that have been transformed to [DNR](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules) format using the [declarative converter](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter). During this conversion process, some rules may overwrite others (`badfilter`), some may be combined (`removeparame`), resulting in a list of rules with a slightly different order.
>
> From this list of converted rules, we will only use 5,000 rules. The rest of them will be displayed in the editor, but not applied.

### Network rules

Network rules have limitations: some types of rules cannot be implemented in MV3, or can only be implemented with restrictions.

Below is a list of modifiers that are supported, partially supported, or not supported at all. More details about the limitations are described on [GitHub](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#readme).

#### Supported basic modifiers

[**`$denyallow`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$denyallow)

  Example:

  ```adblock
  ||domain.com^$popup,third-party
  ```

  is converted to

  ```[
    {
      "id": 1,
      "action": {
        "type": "block"
      },
      "condition": {
        "urlFilter": "*",
        "initiatorDomains": [
          "a.com",
          "b.com"
        ],
        "excludedRequestDomains": [
          "x.com",
          "y.com"
        ],
        "resourceTypes": [
          "script"
        ]
      },
      "priority": 252
    }
  ]
  ```

[**`$important`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$important)

Example

Blocking rule will block all requests despite of the exception rule:

```bash
||example.org^$important
@@||example.org^
```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^"
  },
  "priority": 1000001
 },
 {
  "id": 2,
  "action": {
   "type": "allow"
  },
  "condition": {
   "urlFilter": "||example.org^"
  },
  "priority": 100001
 }
]
```

[**`$match-case`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$match-case)

Example

```*/BannerAd.gif$match-case```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "*/BannerAd.gif",
   "isUrlFilterCaseSensitive": true
  },
  "priority": 2
 }
]
```

[**`$method`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#method)

Example

```||evil.com^$method=~post|~put```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||evil.com^",
   "excludedRequestMethods": [
    "post",
    "put"
   ],
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ]
  },
  "priority": 2
 }
]
```

[**`$third-party`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$third-party)

Example

```||domain.com^$third-party```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||domain.com^",
   "domainType": "thirdParty",
   "isUrlFilterCaseSensitive": false
  },
  "priority": 2
 }
]
```

[**`$to`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#to)

Example

```/ads$to=~not.evil.com|evil.com```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "/ads",
   "requestDomains": [
    "evil.com"
   ],
   "excludedRequestDomains": [
    "not.evil.com"
   ],
   "isUrlFilterCaseSensitive": false,
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ]
  },
  "priority": 2
 }
]
```

#### Supported content type modifiers

[**`$document`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$document)

Example

```||example.com^$document```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.com^",
   "resourceTypes": [
    "main_frame"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$image`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$image)

Example

```||example.org^$image```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "image"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$stylesheet`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$stylesheet)

Example

```||example.org^$stylesheet```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "stylesheet"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$script`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$script)

Example

```||example.org^$script```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "script"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$object`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$object)

```||example.org^$object```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "object"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

**[`$font`](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$font)**

Example

```||example.org^$font```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "font"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$media`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$media)

```||example.org^$media```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "media"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$subdocument`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$subdocument)

Example

```||example.com^$subdocument```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.com^",
   "resourceTypes": [
    "sub_frame"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$ping`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$ping)

```||example.org^$ping```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "ping"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$xmlhttprequest`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$xmlhttprequest)

Example

```||example.org^$xmlhttprequest```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "xmlhttprequest"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

[**`$websocket`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#content_type_modifiers__$websocket)

Example

```||example.org^$websocket```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "websocket"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 101
 }
]
```

#### Supported advanced modifiers

[**`$csp`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#csp)

Allowlist rules are not supported.

Rules with the same matching condition are combined into one, but only within the scope of one static filter or within the scope of all dynamic rules (custom filters and user rules).

Example

```||example.org^$csp=frame-src 'none'```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "modifyHeaders",
   "responseHeaders": [
    {
     "operation": "append",
     "header": "Content-Security-Policy",
     "value": "frame-src 'none'"
    }
   ]
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ]
  },
  "priority": 1
 }
]
```

[**`$permissions`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#permissions)

Allowlist rules are not supported.

Example

```@@||example.org/page/*$permissions=sync-xhr=()```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "allow"
  },
  "condition": {
   "urlFilter": "||example.org/page/*",
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ]
  },
  "priority": 100001
 }
]
```

[**`$removeheader`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#removeheader)

Allowlist rules are not supported.

Rules with the same matching condition are combined into one, but only within the scope of one static filter or within the scope of all dynamic rules (custom filters and user rules).

Example

```||example.org^$removeheader=header-name```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "modifyHeaders",
   "responseHeaders": [
    {
     "header": "header-name",
     "operation": "remove"
    }
   ]
  },
  "condition": {
   "urlFilter": "||example.org^",
   "isUrlFilterCaseSensitive": false,
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ]
  },
  "priority": 1
 }
]
```

[**`$noop`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__noop)

Example

```bash
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$domain=example.org,___,~third-party
```

is converted to

```[
 {
  "id": 2,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.com",
   "domainType": "firstParty",
   "initiatorDomains": [
    "example.org"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 202
 }
]
```

[**`$empty`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$empty)

Example

```||example.org^$empty```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "redirect",
   "redirect": {
    "extensionPath": "/path/to/resources/nooptext.js"
   }
  },
  "condition": {
   "urlFilter": "||example.org^",
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1001
 }
]
```

[**`$mp4`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$mp4)

Supported but deprecated. Not recommended for use.

Example

```||example.com/videos/$mp4```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "redirect",
   "redirect": {
    "extensionPath": "/path/to/resources/noopmp4.mp4"
   }
  },
  "condition": {
   "urlFilter": "||example.com/videos/",
   "resourceTypes": [
    "media"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1101
 }
]
```

#### Partially supported basic modifiers

[**`$domain`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$domain)

Doesn’t support regexs and any tld domains.

Example

```||baddomain.com^$domain=~example.org```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||baddomain.com^",
   "excludedInitiatorDomains": [
    "example.org"
   ]
  },
  "priority": 2
 }
]
```

[**`$popup`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$popup)

Cannot be converted to MV3 Declarative Rule, but can be implemented on the content-script side.

Example:

```||domain.com^$popup```

is converted to

```[]```

[**`$jsinject`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$jsinject)

Supported but not implemented.

[**`$stealth`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$stealth)

[**`$urlblock`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$urlblock)

Supported but not implemented.

[**`$genericblock`, `$generichide`, `$specifichide`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$genericblock)

Supported but not implemented.

`$generichide` and `$specifichide` are not convertible to DNR in MV3, but in MV3 tswebextension uses content-script to request cosmetic rules from tsurlfilter's with MatchingResult.getCosmeticOption, where `$specifichide` and `$generichide` will be applied.

#### Partially supported advanced modifiers

[**`$all`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$all)

Example

```||example.org^$all```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org^",
   "resourceTypes": [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "media",
    "websocket",
    "other"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 55
 }
]
```

[**`$badfilter`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$badfilter)

In current implementation it works across all filters, but it does not cover rules with `$domain` instersections.

Example

```||example.com,image
||example.com$image,badfilter```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.com,image",
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1
 }
]
```

[**`$cookie`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$cookie)

The work of $cookie rules with parameters is done on the content script side. But since we can no longer hang a blocking listener on events, all of these actions happen asynchronously, and therefore not all changes to cookies will have time to be applied before they are sent to the server.

[**`$redirect`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$redirect)

Allowlist rules are not supported.

Example

```||example.org/test.mp4$media,redirect=noopmp4-1s```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "redirect",
   "redirect": {
    "extensionPath": "/path/to/resources/noopmp4.mp4"
   }
  },
  "condition": {
   "urlFilter": "||example.org/test.mp4",
   "resourceTypes": [
    "media"
   ],
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1101
 }
]
```

[**`$referrerpolicy`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#referrerpolicy)

Supported but not implemented.

[**`$removeparam`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$removeparam)

Allowlist rules are not supported.
Regexs, negation and allow-rules are not supported.
Rules with the same matching condition are combined into one, but only within the scope of one static filter or within the scope of all dynamic rules (custom filters and user rules).

Example

Group of similar `$removeparam` rules will be combined into one

```bash
||testcases.adguard.com$xmlhttprequest,removeparam=p1case1
||testcases.adguard.com$xmlhttprequest,removeparam=p2case1
||testcases.adguard.com$xmlhttprequest,removeparam=P3Case1
$xmlhttprequest,removeparam=p1case2
```

is converted to

```[
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
  },
  "priority": 101
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
  },
  "priority": 101
 }
]
```

#### Not supported basic modifiers

[**`$header`**](https://github.com/AdguardTeam/tsurlfilter/tree/release/v2.3-for-5.0/packages/tsurlfilter/src/rules/declarative-converter#basic_modifiers__$header)

Cannot be converted to MV3 Declarative Rule. In MV3, you can only modify headers. You cannot block requests based on request headers.

Example

```||example.com^$header=set-cookie```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.com^"
  },
  "priority": 51
 }
]
```

#### Not supported content type modifiers

Modifiers `$webrtc` and `$object-subrequest` are deprecated and it is recommended not to use them.

#### Not supported exception rules modifiers

[**`$content`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#exception_rules_modifiers__$content)

Not needed in Chrome, as it disables HTML and $replace filtering rules, which do not work in Chrome.

#### Not supported advanced modifiers

[**`$redirect-rule`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$redirect-rule)

Will be converted as `$redirect` rules.

Example

```bash
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

is converted to

```[
 {
  "id": 1,
  "action": {
   "type": "block"
  },
  "condition": {
   "urlFilter": "||example.org/script.js",
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1
 },
 {
  "id": 2,
  "action": {
   "type": "redirect",
   "redirect": {
    "extensionPath": "/path/to/resources/noopjs.js"
   }
  },
  "condition": {
   "urlFilter": "||example.org^",
   "isUrlFilterCaseSensitive": false
  },
  "priority": 1001
 }
]
```

[**`$replace`**](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#advanced_capabilities__$replace)

Only supported in extensions for the Firefox browser.

Modifiers **`$hls`**, **`$jsonprune`**, **`$network`** only work in apps.
