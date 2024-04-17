---
title: Фильтры
sidebar_position: 1
---

:::info

Эта статья о Браузерном расширении AdGuard, которое защищает только ваш браузер. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. В результате вы перестаёте видеть рекламу на сайтах.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Фильтры сгруппированы в соответствии с их ролью. Например, существуют фильтры, блокирующие рекламу или удаляющие виджеты социальных сетей, фильтры для защиты конфиденциальности и т. п. Вы можете включить как отдельные фильтры, так и всю группу сразу.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Собственные фильтры

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

В этой вкладке вы можете добавить фильтры, которых нет в расширении по умолчанию. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Кроме того, вы можете создавать и добавлять свои собственные фильтры. Фактически, вы можете создать любой набор фильтров и настроить блокировку рекламы так, как вам нравится.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Вы можете добавить новые правила несколькими способами. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Вы также можете импортировать готовый список фильтров из текстового файла. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Кроме того, вы можете экспортировать собственные правила фильтрации. Этот вариант удобен для переноса списка правил между браузерами или устройствами.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Белый список

The _allowlist_ is used to exclude certain websites from filtering. Правила блокировки не применяются к сайтам из списка.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Также вы можете импортировать и экспортировать существующие белые списки. Это полезно, например, если вы хотите применять одинаковые правила в каждом из ваших браузеров.
