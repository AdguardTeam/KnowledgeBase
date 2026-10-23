---
title: Filtry
sidebar_position: 2
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

- [Vlastní filtry](#custom-filters)
- [Uživatelská pravidla](#user-rules)
- [Seznam povolených](#allowlist)

Blokování reklam je jednoznačně klíčovou funkcí každého blokátoru reklam, Rozšíření prohlížeče AdGuard není výjimkou. Blokování reklam je založeno na filtrech — sadách pravidel napsaných ve speciálním jazyce. Tato pravidla určují, které prvky mají být blokovány a které ne. AdGuard interpretuje tato pravidla a na jejich základě upravuje webové požadavky. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filters.png)

Všechny filtry jsou seskupeny podle kategorií na základě jejich funkce:

- Blokování reklam: Blokování různých typů reklam
- Ochrana soukromí: Blokování online sledovacích nástrojů a analytických systémů pro ochranu dat
- Widgety sociálních sítí: Blokování prvků sociálních sítí, jako jsou tlačítka _Líbí se mi_ a _Sdílet_
- Obtěžující prvky: Blokování rušivých prvků na webu, jako jsou upozornění na soubory cookie, widgety třetích stran nebo vyskakovací okna přímo na stránce
- Zabezpečení: Blokování požadavků na phishingové a škodlivé webové stránky
- Ostatní: Obsahuje různé filtry, které nespadají do hlavních kategorií
- Jazykově specifické: Blokování reklam na webových stránkách v konkrétních jazycích
- Vlastní: Umožňuje přidat vlastní filtry z lokálního souboru nebo z URL adresy

Můžete aktivovat buď jednotlivé filtry, nebo celé skupiny najednou.

![Security filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Vlastní filtry {#custom-filters}

Zatímco funkce ostatních skupin filtrů jsou víceméně jasné, existuje skupina s názvem _Vlastní_, která může vyvolat další otázky.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/custom_filters.png)

Na této kartě můžete přidat filtry, které ve výchozím nastavení rozšíření neobsahuje. Na internetu je k dispozici spousta [veřejně dostupných filtrů](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

Chcete-li přidat filtr, stačí kliknout na _Přidat vlastní filtr_, zadat adresu URL nebo cestu k souboru filtru, který chcete přidat a kliknout na _Další_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_filter.png)

Vlastní filtry se aktualizují samostatně, díky čemuž je vaše ochrana účinná a aktuální, aniž by bylo nutné aktualizovat rozšíření.

## Uživatelská pravidla {#user-rules}

_Uživatelská pravidla_ jsou další nástroj, který vám pomůže přizpůsobit blokování reklam.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/user_rules.png)

Nová pravidla lze přidávat několika způsoby. Nejjednodušší je prostě zadat pravidlo, ale vyžaduje to určitou znalost [syntaxe pravidel](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Ujistěte se, že jednotlivá pravidla jsou oddělena zalomením řádků.**

:::note

Import seznamu filtrů připravených k použití je lepší provést na záložce _Vlastní filtry_.

:::

Můžete exportovat svá vlastní pravidla filtrování. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

Když přidáte webovou stránku na _Seznam povolených_, nebo použijete nástroj Asistent pro skrytí prvku na stránce, uloží se příslušné pravidlo také do _Uživatelských pravidel_.

## Seznam povolených {#allowlist}

_Seznam povolených_ se používá k vyloučení určitých webových stránek z filtrování. Na webové stránky uvedené v tomto seznamu se nevztahuje žádné z pravidel blokování.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allowlist.png)

_Seznam povolených_ lze také obrátit, což vám umožní odblokovat reklamy všude kromě webových stránek přidaných do tohoto seznamu. Chcete-li to provést, přejděte do části _Další nastavení_ a zapněte možnost _Invertovat seznam povolených_. Než se funkce aktivuje, zobrazí se potvrzovací dialogové okno, které vysvětlí její fungování a zabrání náhodné aktivaci.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/invert_allowlist_dialog.png)

Můžete také importovat a exportovat stávající seznamy povolených. To se hodí, pokud chcete ve všech svých prohlížečích použít stejná pravidla.
