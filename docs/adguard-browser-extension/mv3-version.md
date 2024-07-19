---
title: MV3 version
sidebar_position: 5
---

As MV2 extensions are being phased out in the Chrome Web Store, Chrome users may need to switch to MV3 extensions that are compatible with Chrome’s new API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Our MV3 extension effectively blocks ads and trackers while seamlessly managing social widgets, banners, and video ads. Most users will not notice any operational differences, but there are some limitations and changes to be aware of.

## Where to find our extensions

The **MV3 version** has replaced our old extension in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

The **beta version of MV3** is still available in the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

The old beta extension has been renamed to [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) and will be supported until Google phases it out.

## Main changes in features and setting

- **No auto and manual filter updates.** The options *Auto-update filters* and *Check filters update* are no longer available in the *Filters* tab. Since some of the rules are now applied in DNR form, we can’t update filters on request, only through the full process of updating the extension along with the review in the stores.

  > In the future, we want to implement differential filter updates, similar to our MV2 extension. When we add this, the manual and automatic update options will return.

- **Service worker functionality.** Chrome has implemented a workaround so that service worker doesn’t go to sleep. Why is this important?

   When the service worker is inactive, it affects the way rules are applied, with a few seconds of delay and glitches. The Chrome workaround helps with this problem, but it is not a foolproof solution. Chrome can always remove the workaround and the glitching will return. We are working on our own solution to reduce the glitching delay to a minimum, but it will still be more noticeable and slower than it was in MV2.

- **Filtering log**

  ![Filtering log *border](https://cdn.adtidy.org/content/blog/new/log.png)

  Due to DNR restrictions, we can’t show exactly which rule worked, but we will provide an “approximate rule that was triggered” based on our engine. For precise information, you’ll need to install the “unpacked” form of the extension in your browser yourself. That is, you need to clone [our repository](https://github.com/AdguardTeam/AdguardBrowserExtension/tree/v5.0), “build” the extension, switch the browser to Developer mode, and only in this case you will be able to use the tools for debugging filters.

- **Statistics**

  ![Statistics *mobile](https://cdn.adtidy.org/content/blog/new/stats.png)

  The new stats screen displays categorized URLs by company and requests sent. All data is handled on the client side, and we do not store any request information. We only show which request was sent to which company.

- The *Tracking protection* tab (formerly known as *Stealth mode*)

  ![Tracking protection *border](https://cdn.adtidy.org/content/blog/new/tracking_screen.png)

  There are no *Cookies* section, along with *Self-destruction of first-party cookies* and *Self-destruction of third-party cookies* since we cannot set the TTL of cookies using declarative rules.

- *Phishing & malware protection* is no longer available in the general settings. To protect yourself from malicious websites and scams, enable the appropriate filters in the *Security* tab.

  ![Security](https://cdn.adtidy.org/content/blog/new/security.png)

## Limitations

### Maximum numbers of rules and filters

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

Certain rule types may have limitations or cannot be fully implemented in MV3. For example, [allowrules are not supported for certain modifiers](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#allowrules). Some modifiers are not supported at all, e.g. `$header`, `$content`, and `$redirect-rule`. More details about the restrictions are described on [GitHub](https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#readme).
