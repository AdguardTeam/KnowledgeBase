---
title: Kural sınırı sorunları
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari içerik engelleyici kural sınırı

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Şu anda, her bir içerik engelleme uzantısı için en fazla 150.000 kurala izin verilmektedir.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Genel
- AdGuard Gizlilik
- AdGuard Sosyal
- AdGuard Güvenlik
- AdGuard Diğerleri
- AdGuard Özel

Bu da, toplam 900.000 filtreleme kuralı anlamına gelir.

However, **one extension can contain only up to 150,000 rules**. If you exceed this limit, some of the rules will not be applied. This may lead to incorrect blocking.

## How to check if you are exceeding the rule limit

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

If more than 150,000 rules are enabled in a content blocker, you may need to disable some filters or user rules from it. Go to _Filters_, select the problematic category, and disable the filters or user rules you don’t need.
