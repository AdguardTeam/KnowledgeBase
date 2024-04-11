---
title: Filtry
sidebar_position: 2
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Všechny filtry jsou seskupeny podle své role. Existují například kategorie filtrů pro blokování reklam, filtry pro ochranu soukromí, filtry související se sociálními médii atd. Můžete povolit jednotlivé filtry nebo celou skupinu najednou.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Vlastní filtry

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Na této kartě můžete přidat filtry, které ve výchozím nastavení rozšíření neobsahuje. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Nová pravidla lze přidávat několika způsoby. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Kromě toho můžete exportovat vlastní pravidla filtrování. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Seznam povolených

The _allowlist_ is used to exclude certain websites from filtering. Pravidla blokování se na webové stránky ze seznamu nevztahují.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Můžete také importovat a exportovat stávající seznamy povolených. To je užitečné například v případě, že chcete v každém prohlížeči použít stejná pravidla pro povolení.
