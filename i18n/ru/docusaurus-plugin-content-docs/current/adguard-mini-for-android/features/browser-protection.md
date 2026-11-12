---
title: Browser protection
sidebar_position: 2
---

:::info

This page is about AdGuard Mini for Android, which safeguards Samsung Browser and Yandex Browser and provides DNS protection. To protect your Android device entirely and get more advanced settings, [download AdGuard for Android](https://agrd.io/download-kb-adblock).

:::

Browser protection is the core filtering feature of AdGuard Mini for Android. It blocks ads on webpages in Samsung Browser and Yandex Browser.

AdGuard Mini works through the Content Blocking API, a browser technology that allows apps to block ads and apply filtering rules on webpages. This approach is fully in line with Google Play policies.

**How to enable Browser protection**

1. Open AdGuard Mini for Android and go to _Protection_ → _Browser protection_
2. Toggle on the browser you use
3. Confirm AdGuard as the ad blocker in the browser:

- Samsung Browser: open the browser menu, tap _Ad blockers_, and toggle on AdGuard
- Yandex Browser: go to browser _Settings_ → _Content blocking extensions_ and check that AdGuard is enabled.

![Browser protection](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/browser_protection.png)

Here you can also set up _Filters_ and _User rules_.

## Фильтры

Filters are lists of rules that tell AdGuard Mini for Android what to block or hide on webpages. They are organized into categories:

- **Ad blocking** blocks banners, popups, and other ads
- **Tracking protection** hides your online activity and personal data from web trackers (available in the [full version](https://adguard.com/license.html))
- **Social widgets** removes social media buttons and embedded widgets
- **Annoyances** hides cookie notices, newsletter popups, and other distracting elements
- **Security** blocks known malicious and suspicious domains
- **Language-specific** includes filters for specific languages and regions
- **Other** covers additional filtering cases
- **Custom filters** let you add any third-party filter list by URL for more targeted blocking (available in the [full version](https://adguard.com/license.html))

![Filters](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/filters.png)

To manage filters, go to _Protection_ → _Browser protection_ → _Filters_. Browse the categories and enable the filters you need. We recommend keeping _Ad blocking_ and your _Language-specific_ filters enabled.

## Пользовательские правила

User rules are custom filtering rules that let you adjust ad blocking yourself: disable filtering on a website that doesn’t work correctly, add a rule you got from support, or write your own rule for a specific page. They form your personal filter list, applied on top of the enabled filters, and use the same filtering rules syntax as all [AdGuard filters](https://adguard.com/kb/general/ad-filtering/create-own-filters/).

To add a rule, go to _Protection_ → _Browser protection_ → _User rules_.

![User rules](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/user_rules.png)

Keep in mind that _User rules_ apply to _Browser protection_, that is, to webpages in Samsung Browser and Yandex Browser. To block domains at the DNS level across the whole device, use [DNS user rules](/adguard-mini-for-android/features/dns-protection.md) instead. And if a rule you added breaks a website, simply disable or delete it in the _User rules_ list.
