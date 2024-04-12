---
title: Filtros
sidebar_position: 1
---

:::info

Este artículo trata sobre la extensión del navegador de AdGuard, que protege solo tu navegador. Para proteger todo su dispositivo, [descarca la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. Como resultado, dejarás de ver anuncios en tus páginas web.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Todos los filtros se agrupan según tu función. Por ejemplo, existen categorías para filtros de bloqueo de publicidad, filtros de protección de la privacidad, filtros relacionados con las redes sociales, etc. Puedes habilitar filtros individuales o todo el grupo a la vez.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtros personalizados

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

En esta pestaña, puedes agregar filtros que no están presentes en la extensión de forma predeterminada. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Además, puedes crear y agregar tus propios filtros. De hecho, puedes crear cualquier conjunto de filtros y personalizar el bloqueo de anuncios a tu gusto.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Hay varias formas de añadir nuevas normas. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

También puedes importar una lista de filtros lista para usar desde un archivo de texto. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Además, puedes exportar tus propias reglas de filtrado. Esta opción es buena para transferir tu lista de reglas entre navegadores o dispositivos.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Lista de permitido

The _allowlist_ is used to exclude certain websites from filtering. Las reglas de bloqueo no se aplican a los sitios web de la lista.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

También puedes importar y exportar listas de permitidos existentes. Es útil, por ejemplo, si deseas aplicar las mismas reglas de permitidos en cada uno de tus navegadores.
