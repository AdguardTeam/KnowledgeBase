---
title: Kural sınırı sorunları
sidebar_position: 1
---

:::info

Bu makale, yalnızca Safari tarayıcınızı koruyan Safari için AdGuard hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Safari içerik engelleyici kural sınırı

Safari için AdGuard, filtreleme kurallarını Safari tarayıcısındaki sayfalara uygulamak için İçerik Engelleme API'sini kullanır. Şu anda, her bir içerik engelleme uzantısı için en fazla 150.000 kurala izin verilmektedir.

AdGuard for Safari has 6 content blockers:

- AdGuard Genel
- AdGuard Gizlilik
- AdGuard Sosyal
- AdGuard Güvenlik
- AdGuard Diğerleri
- AdGuard Özel

Bu da, toplam 900.000 filtreleme kuralı anlamına gelir.

Ancak, **bir uzantı 150.000'e kadar kural içerebilir**. If you exceed this limit, some of the rules will not be applied. This may lead to incorrect blocking.

## How to check if you are exceeding the rule limit

1. Safari için AdGuard uygulamasını açın.
2. Scroll down and click _Content blockers_.
3. Below each content blocker, you can see the enabled filters and the number of active rules.
    ![Content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

If more than 150,000 rules are enabled in a content blocker, you may need to disable some filters or user rules from it. Go to _Filters_, select the problematic category, and disable the filters or user rules you don’t need.
