---
title: Filtry
sidebar_position: 2
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

- [Custom filters](#custom-filters)
- [User rules](#user-rules)
- [Allowlist](#allowlist)

Blocking ads is the core functionality of any ad blocker, and AdGuard Browser Extension is no exception. Blokování reklam je založeno na filtrech — sadách pravidel napsaných ve speciálním jazyce. These rules define which page elements should be blocked and which should not. AdGuard interprets these rules and modifies web requests accordingly. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filters.png)

Všechny filtry jsou seskupeny podle kategorií na základě jejich funkce:

- Ad blocking: Block various types of advertisements
- Privacy: Block online trackers and analytical systems to protect your data
- Social widgets: Block social media elements like _Like_ and _Share_ buttons
- Annoyances: Block irritating web elements, such as cookie notices, third-party widgets, or in-page popups
- Security: Block requests to phishing and malicious websites
- Other: Contain miscellaneous filters that do not fit into the main categories
- Language-specific: Block ads on websites in specific languages
- Custom: Allow you to add your own filters from a local file or URL

You can enable either individual filters or entire groups at once.

![Security filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Custom filters {#custom-filters}

Zatímco funkce ostatních skupin filtrů jsou víceméně jasné, existuje skupina s názvem _Vlastní_, která může vyvolat další otázky.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/custom_filters.png)

In this tab, you can add filters that are not included in the extension by default. Na internetu je k dispozici spousta [veřejně dostupných filtrů](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

Chcete-li přidat filtr, stačí kliknout na _Přidat vlastní filtr_, zadat adresu URL nebo cestu k souboru filtru, který chcete přidat a kliknout na _Další_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_filter.png)

Vlastní filtry se aktualizují samostatně, díky čemuž je vaše ochrana účinná a aktuální, aniž by bylo nutné aktualizovat rozšíření.

## Uživatelská pravidla {#user-rules}

_Uživatelská pravidla_ jsou další nástroj, který vám pomůže přizpůsobit blokování reklam.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/user_rules.png)

Nová pravidla lze přidávat několika způsoby. Nejjednodušší je prostě zadat pravidlo, ale vyžaduje to určitou znalost [syntaxe pravidel](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Make sure that different rules are separated by line breaks.**

:::note

Import seznamu filtrů připravených k použití je lepší provést na záložce _Vlastní filtry_.

:::

You can export your own filtering rules. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

When you add a website to _Allowlist_ or use the Assistant tool to hide an element on a page, the corresponding rule is automatically saved in _User rules_.

## Seznam povolených {#allowlist}

_Allowlist_ is used to exclude specific websites from filtering. None of the blocking rules will apply to the websites on this list.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allowlist.png)

_Allowlist_ can also be inverted, allowing you to unblock ads everywhere except on the websites added to this list. To do this, go to _Additional settings_ and enable  _Invert Allowlist_. Before it activates, a confirmation dialog will appear to explain how it works and prevent accidental activation.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/invert_allowlist_dialog.png)

Můžete také importovat a exportovat stávající seznamy povolených. It is useful if you want to apply the same rules across all your browsers.
