---
title: Filtros
sidebar_position: 1
---

:::info

Este artigo é sobre a extensão de navegador AdGuard, que protege apenas o seu navegador. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. Como resultado, você para de ver anúncios nas páginas da web que você acessa.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos os filtros são agrupados de acordo com sua função. Por exemplo, existem categorias para filtros de bloqueio de anúncios, filtros de proteção de privacidade, filtros relacionados a mídias sociais, etc. Você pode ativar filtros individuais ou um grupo de filtros de uma só vez.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtros personalizados

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Nesta aba, você pode adicionar filtros que não estão presentes na extensão por padrão. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Além disso, você pode criar e adicionar seus próprios filtros. Na verdade, você pode criar qualquer conjunto de filtros e personalizar o bloqueio de anúncios da maneira que desejar.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Existem várias maneiras de adicionar novas regras. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Você também pode importar uma lista de filtros pronta para uso de um arquivo de texto. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Além disso, você pode exportar suas próprias regras de filtragem. Esta opção é boa para transferir sua lista de regras entre navegadores ou dispositivos.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Lista de permissões

The _allowlist_ is used to exclude certain websites from filtering. As regras de bloqueio não se aplicam aos sites da lista.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Você também pode importar e exportar listas de permissões existentes. Isso é útil, por exemplo, se você deseja aplicar as mesmas regras de permissão em cada um dos seus navegadores.
