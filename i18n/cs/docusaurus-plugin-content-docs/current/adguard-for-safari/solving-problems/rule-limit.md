---
title: Problémy s limity pravidel
sidebar_position: 1
---

:::info

Tento článek je o AdGuardu pro Safari, který chrání pouze váš prohlížeč Safari. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limity pravidel pro blokování obsahu v Safari

AdGuard pro Safari používá rozhraní API pro blokování obsahu k použití pravidel filtrování na stránky v prohlížeči Safari. V současné době je pro každé rozšíření blokování obsahu povoleno maximálně 150 000 pravidel.

AdGuard pro Safari má 6 blokátorů obsahu:

- AdGuard – General
- AdGuard – Privacy
- AdGuard – Social
- AdGuard – Security
- AdGuard – Other
- AdGuard – Custom

Celkem tak vznikne 900000 pravidel filtrování.

Nicméně **rozšíření může obsahovat až 150 000 pravidel**. Pokud tento limit překročíte, některá pravidla se neuplatní. To může vést k nesprávnému blokování.

## Jak zkontrolovat překročení limitu pravidel

1. Otevřete aplikaci AdGuard pro Safari.
2. Přejděte dolů a klikněte na _Blokátory obsahu_.
3. Pod každým blokátorem obsahu můžete vidět povolené filtry a počet aktivních pravidel.
 ![Content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Pokud je v blokátoru obsahu povoleno více než 150 000 pravidel, může být nutné zakázat některé filtry nebo uživatelská pravidla. Přejděte na _Filtry_, vyberte problematickou kategorii a zakažte filtry nebo uživatelská pravidla, která nepotřebujete.
