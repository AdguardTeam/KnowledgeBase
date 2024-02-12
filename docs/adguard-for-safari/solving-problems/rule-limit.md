---
title: Rule limit issues
sidebar_position: 1
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari content blocker rule limit

AdGuard for Safari uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Currently, a maximum of 150,000 rules are allowed for each content blocking extension.

AdGuard for Safari has 6 content blockers:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Other
- AdGuard Custom

This makes a total of 900,000 filtering rules.

However, **an extension can contain up to 150,000 rules**. If you exceed this limit, some of the rules will not be applied. This may lead to incorrect blocking.

## How to check if you are exceeding the rule limit

 1. Open AdGuard for Safari app.
 2. Scroll down and click *Content blockers*.
 3. Below each content blocker, you can see the enabled filters and the number of active rules.
    ![Content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

If more than 150,000 rules are enabled in a content blocker, you may need to disable some filters or user rules from it. Go to *Filters*, select the problematic category, and disable the filters or user rules you don’t need.
