---
title: Problémy s limity pravidel
sidebar_position: 1
---

:::info

Tento článek je o AdGuardu Mini pro Mac, který chrání pouze váš prohlížeč Safari. Chcete-li zcela ochránit svůj Mac, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limity pravidel pro blokování obsahu v Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. V současné době je pro každé rozšíření blokování obsahu povoleno maximálně 150 000 pravidel.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard – General
- AdGuard – Privacy
- AdGuard – Social
- AdGuard – Security
- AdGuard – Other
- AdGuard – Custom

Celkem tak vznikne 900000 pravidel filtrování.

However, **one extension can contain only up to 150,000 rules**. Pokud tento limit překročíte, některá pravidla se neuplatní. To může vést k nesprávnému blokování.

## Jak zkontrolovat překročení limitu pravidel

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Pokud je v blokátoru obsahu povoleno více než 150 000 pravidel, může být nutné zakázat některé filtry nebo uživatelská pravidla. Přejděte na _Filtry_, vyberte problematickou kategorii a zakažte filtry nebo uživatelská pravidla, která nepotřebujete.
