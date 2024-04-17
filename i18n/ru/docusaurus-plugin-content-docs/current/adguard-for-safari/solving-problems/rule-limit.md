---
title: Rule limit issues
sidebar_position: 1
---

:::info

Эта статья об AdGuard для Safari, которое защищает только этот браузер. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari content blocker rule limit

AdGuard for Safari uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Currently, a maximum of 150,000 rules are allowed for each content-blocking extension.

AdGuard for Safari has 6 content blockers:

- AdGuard Основные
- AdGuard Конфиденциальность
- AdGuard Виджеты соцсетей
- AdGuard Безопасность
- AdGuard Другие
- AdGuard Пользовательские

This makes a total of 900,000 filtering rules.

However, **an extension can contain up to 150,000 rules**. If you exceed this limit, some of the rules will not be applied. This may lead to incorrect blocking.

## How to check if you are exceeding the rule limit

1. Open AdGuard for Safari app.
2. Scroll down and click _Content blockers_.
3. Below each content blocker, you can see the enabled filters and the number of active rules.
   ![Content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

If more than 150,000 rules are enabled in a content blocker, you may need to disable some filters or user rules from it. Go to _Filters_, select the problematic category, and disable the filters or user rules you don’t need.
