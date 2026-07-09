---
title: Problémy s limity pravidel
sidebar_position: 1
---

:::info

Tento článek je o AdGuardu Mini pro Mac, který chrání pouze váš prohlížeč Safari. Chcete-li zcela ochránit svůj Mac, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limity pravidel pro blokování obsahu v Safari

AdGuard Mini pro Mac používá rozhraní API pro blokování obsahu k použití pravidel filtrování na stránky v prohlížeči Safari. V současné době je pro každé rozšíření blokování obsahu povoleno maximálně 150 000 pravidel.

AdGuard Mini pro Mac má 6 blokátorů obsahu:

- AdGuard – General
- AdGuard – Privacy
- AdGuard – Social
- AdGuard – Security
- AdGuard – Other
- AdGuard – Custom

Celkem tak vznikne 900000 pravidel filtrování.

Nicméně **jedno rozšíření může obsahovat až 150000 pravidel**. Pokud tento limit překročíte, některá pravidla se neuplatní. To může vést k nesprávnému blokování.

## Jak zkontrolovat překročení limitu pravidel

1. Otevřete aplikaci AdGuard Mini.
2. Přejděte do _nastavení_ → _rozšíření Safari_.
3. Pod každým rozšířením můžete vidět povolené filtry a počet aktivních pravidel.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Pokud je v blokátoru obsahu povoleno více než 150 000 pravidel, může být nutné zakázat některé filtry nebo uživatelská pravidla. Přejděte na _Filtry_, vyberte problematickou kategorii a zakažte filtry nebo uživatelská pravidla, která nepotřebujete.
