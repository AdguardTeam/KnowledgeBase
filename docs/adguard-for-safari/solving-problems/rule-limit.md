---
title: Rule limit issues
sidebar_position: 1
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari content blocker rule limit

Safari Content Blocker functionality is an indispensable tool for ad-blocking in Safari: it gives a way to apply filtering rules to pages accessed in Safari. Currently, as stated in the Safari Content Blocking API documentation, up to 150k rules is allowed in one content blocker.

AdGuard for Safari has 6 content blockers:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Other
- AdGuard Custom

That means user can use up to 900k filtering rules total.

However, **you can only have up to 150k in one content blocker**. If you exceed that limit, part of the rules will not be applied and that could lead to some things not being blocked.

## How to check that if you are exceeding rule limit

 1. Open AdGuard for Safari settings by clicking its icon beside the Safari's search bar.
 2. Scroll down and click *Content blockers*.
 3. Under each content blocker, you can see the number of enabled rules and enabled filters.
    ![Content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

 If a content blocker has more than 150,000 rules, go to *Filters* tab, select a filter category and disable filters or user rules you don't need.
