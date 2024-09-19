---
title: Filtry
sidebar_position: 1
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Blokování reklam je jednoznačně klíčovou funkcí každého blokátoru reklam, Rozšířené prohlížeče AdGuard není výjimkou. Blokování reklam je založeno na filtrech — sadách pravidel napsaných ve speciálním jazyce. Tato pravidla určují, které prvky mají být blokovány a které ne. AdGuard interpretuje pravidla a na jejich základě upravuje webové požadavky. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Všechny filtry jsou seskupeny podle své role. Existují například kategorie filtrů pro blokování reklam, filtry pro ochranu soukromí, filtry související se sociálními médii atd. Můžete povolit jednotlivé filtry nebo celou skupinu najednou.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Vlastní filtry

While the features of other filter groups are more or less self-explanatory, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Na této kartě můžete přidat filtry, které ve výchozím nastavení rozšíření neobsahuje. Na internetu je k dispozici spousta [veřejně dostupných filtrů](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

Chcete-li přidat filtr, stačí kliknout na _Přidat vlastní filtr_, zadat adresu URL nebo cestu k souboru filtru, který chcete přidat a kliknout na _Další_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Uživatelská pravidla {#user-rules}

_Uživatelská pravidla_ jsou další nástroj, který vám pomůže přizpůsobit blokování reklam.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Nová pravidla lze přidávat několika způsoby. Nejjednodušší je prostě zadat pravidlo, ale vyžaduje to určitou znalost [syntaxe pravidel](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Dbejte na to, aby byla jednotlivá pravidla oddělena od sebe zalomením řádků.** Všimněte si, že import seznamu filtrů připravených k použití je vhodnější provést na kartě Vlastní filtry.

Kromě toho můžete exportovat vlastní pravidla filtrování. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

Když přidáte webovou stránku na Seznam povolených (více o tom níže), nebo použijete nástroj Asistent pro skrytí prvku na stránce, uloží se příslušné pravidlo také do _Uživatelských pravidel_.

## Seznam povolených

_Seznam povolených_ se používá k vyloučení určitých webových stránek z filtrování. Pravidla blokování se na webové stránky ze seznamu nevztahují.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

_Seznam povolených_ lze také obrátit: reklamy můžete odblokovat všude kromě webových stránek přidaných do tohoto seznamu. Chcete-li to provést, povolte možnost _Invertovat seznam povolených_.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Můžete také importovat a exportovat stávající seznamy povolených. To je užitečné například v případě, že chcete v každém prohlížeči použít stejná pravidla pro povolení.
