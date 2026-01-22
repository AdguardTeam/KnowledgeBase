---
title: Как составлять свои фильтры
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

В этой статье мы рассказываем, как писать пользовательские правила фильтрации для использования в продуктах AdGuard. Чтобы проверить правила, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Фильтр — это набор правил фильтрации рекламного контента (баннеров, всплывающих окон и тому подобного). В AdGuard есть список базовых фильтров, созданных нашей командой. Они постоянно дорабатываются и дополняются, и, как мы надеемся, удовлетворяют требованиям большинства пользователей.

В то же время AdGuard позволяет создавать пользовательские фильтры, используя те же типы правил, что и в наших фильтрах.

Для описания синтаксиса правил мы используем [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), но не всегда строго следуем этой спецификации.

:::info

Синтаксис правил AdGuard изначально основан на синтаксисе правил Adblock Plus. Позже мы расширили его новыми типами правил для лучшей фильтрации рекламы. Часть информации в этой статье об общих для ABP и AdGuard типах правил взята [из руководства Adblock Plus по написанию фильтров](https://adblockplus.org/en/filters).

:::

## Комментарии

Любая строка, начинающаяся с восклицательного знака, является комментарием. В списке правил она подсвечивается серым цветом. AdGuard будет игнорировать эту строку, так что можете спокойно писать там всё, что хотите. Комментарии обычно размещаются над правилами и описывают то, что они делают.

Например:

```adblock
! Это комментарий. Под этой строкой находится правило фильтрации.
||example.org^
```

## Примеры

### Блокировка по имени домена

![Блокировка по имени домена](https://cdn.adtidy.org/content/kb/ad_blocker/general/0_blocking_domain.svg)

**Это правило блокирует:**

- `http://example.org/ad1.gif`
- `http://subdomain.example.org/ad1.gif`
- `https://ads.example.org:8000/`

**Это правило не блокирует:**

- `http://ads.example.org.us/ad1.gif`
- `http://example.com/redirect/http://ads.example.org/`

По умолчанию такие правила не действуют для запросов документов. Это означает, что правило `||example.org^` будет блокировать запрос к `example.org`, когда вы попытаетесь перейти на этот домен с другого сайта, но если вы введёте `example.org` в адресную строку и попытаетесь перейти на него, сайт откроется. Чтобы заблокировать запрос документа, нужно использовать правило [с модификатором`$document`:](#document-modifier) `||example.org^$document`.

### Блокировка конкретного адреса

![Блокировка конкретного адреса](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Это правило блокирует:**

- `http://example.org/`

**Это правило не блокирует:**

- `https://example.org/banner/img`

### Модификаторы базовых правил {#basic-rule-modifiers-examples}

Правила фильтрации поддерживают множество модификаторов, которые позволяют вам точно настраивать поведение правила. Вот пример правила с некоторыми простыми модификаторами.

![Модификаторы базовых правил](https://cdn.adtidy.org/content/kb/ad_blocker/general/2_basic_rule_options.svg)

**Это правило блокирует:**

- `http://example.com/script.js`, если этот скрипт загружен с `example.com`.

**Это правило не блокирует:**

- `https://example.org/script.js` если этот скрипт загружен с `example.org`.
- `https://example.org/banner.png` потому что это не скрипт.

### Разблокировка адреса

![Разблокировка адреса](https://cdn.adtidy.org/content/kb/ad_blocker/general/3_basic_exception.svg)

**Это правило разблокирует:**

- `http://example.org/banner.png`, даже если для этого адреса есть правило блокировки.

Правила блокировки с модификатором [`$important`](#important-modifier) приоритетнее, чем обычные правила разблокировки.

### Разблокировка всего сайта

![Разблокировка всего сайта](https://cdn.adtidy.org/content/kb/ad_blocker/general/4_unblock_entire_website.svg)

**Это правило разблокирует**

- Оно отключает все косметические правила на `example.com`.
- Оно блокирует все запросы, отправленные с этого сайта, даже если есть правила блокировки, соответствующие этим запросам.

### Косметические правила

![Косметические правила](https://cdn.adtidy.org/content/kb/ad_blocker/general/5_cosmetic_rules.svg)

Косметические правила применяются с использованием CSS — специального языка программирования, который понимает каждый браузер. В основном, он добавляет новый стиль CSS на сайт, цель которого — скрыть определённые элементы. Вы можете [узнать больше о CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors) в целом.

AdGuard [расширяет возможности CSS](#extended-css-selectors) и позволяет разработчикам фильтров решать гораздо более сложные задачи. Но чтобы использовать эти расширенные правила, вы должны хорошо понимать, что такое CSS.

**Популярные CSS-селекторы**

| Имя                          | CSS-селектор                     | Описание                                                                                                                                                                                                            |
| ---------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Селектор ID                  | `#banners`                       | Выбирает все элементы, `id` которых равен `banners`.<br/>![Селектор ID](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png)                                                         |
| Селектор класса              | `.banners`                       | Выбирает все элементы с атрибутом `class`, содержащие `banners`.<br/>![Селектор класса](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png)                                      |
| Селектор атрибута            | `div[class="banners"]`           | Соответствует всем `div` элементам с атрибутом `class `, **равным** `banners`.<br/>![Селектор атрибута](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png)                          |
| Селектор вхождения подстроки | `div[class^="advert1"]`          | Выбирает все `div`-элементы, атрибут `class` которых **начинается** с `advert1`.<br/>![Селектор вхождения подстроки](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png)       |
| Селектор вхождения подстроки | `div[class$="banners_ads"]`      | Выбирает все `div`-элементы, атрибут `class` которых **заканчивается** на `banners_ads`.<br/>![Селектор вхождения подстроки](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Селектор вхождения подстроки | `a[href^="http://example.com/"]` | Выбирает все ссылки, загруженные с домена `http://example.com/`.<br/>![Селектор вхождения подстроки](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png)                             |
| Селектор атрибута            | `a[href="http://example.com/"]`  | Выбирает все ссылки, которые **точное соответствуют** `http://example.com/`.<br/>![Селектор атрибута](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png)                            |

## Ограничения и запреты

### Доверенные фильтры {#trusted-filters}

Некоторые правила можно использовать только в доверенных фильтрах. В эту категорию входят:

- Списки фильтров, [созданные командой AdGuard](../adguard-filters)
- Пользовательские списки фильтров, помеченные как `trusted` (доверенные)
- Пользовательские правила

### AdGuard Content Blocker

AdGuard Content Blocker — это расширение для браузеров Samsung и Яндекс, которое можно установить из Google Play. Его не следует путать с полнофункциональным AdGuard для Android, который можно загрузить только с [нашего сайта](https://adguard.com/adguard-android/overview.html). К сожалению, возможности AdGuard Content Blocker ограничены тем, что позволяют браузеры, а они поддерживают только старый синтаксис фильтров Adblock Plus:

- Базовые правила блокировки со следующими модификаторами: `$domain`, `$third-party` и [модификаторы типа контента](#content-type-modifiers).
- Базовые правила исключения со следующими модификаторами: `$document`, `$elemhide`.
- Базовые правила скрытия элементов [](#cosmetic-elemhide-rules) без поддержки расширенного CSS.

Из-за указанных выше ограничений AdGuard Content Blocker не будет упоминаться в примечаниях по совместимости.

### SafariConverterLib {#safari-converter-lib}

Конвертер Safari стремится поддерживать синтаксис правил фильтрации AdGuard, насколько это возможно, но всё же существуют ограничения и недостатки, которые трудно преодолеть.

#### Базовые (сетевые) правила

Конвертер Safari поддерживает значительное подмножество [базовых правил](#basic-rules) и, безусловно, самые важные их типы.

##### Поддержка с ограничениями {#safari-converter--basic--supported-with-limitations}

- [Правила регулярных выражений](#regexp-support) ограничены подмножеством регулярных выражений, которые [поддерживаются Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).

- `$domain` - [модификатор домена](#domain-modifier) поддерживается с несколькими ограничениями:

    - Невозможно смешивать разрешённые и запрещённые домены (например, `$domain=example.org|~sub.example.org`). Пожалуйста, проголосуйте за [запрос на добавление функции](https://bugs.webkit.org/show_bug.cgi?id=226076) в WebKit, чтобы снять это ограничение.
    - «Любой TLD» (т.е. `domain.*`) поддерживается не полностью. В текущей реализации конвертер просто заменяет `.*` на 100 самых популярных TLD. Эта реализация будет улучшена [в будущем](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732).
    - Использование регулярных выражений в `$domain` не поддерживается, но это также будет улучшено [в будущем](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732).

- `$denyallow` — этот модификатор поддерживается через преобразование правила `$denyallow` в набор правил (одно блокирующее правило + несколько разблокирующих).

  Из-за этого ограничения `$denyallow` разрешено использовать только когда у правила также есть модификатор `$domain`.

    - Общее правило `*$denyallow=x.com,image,domain=a.com` будет конвертировано в:

    ```adblock
    *$image,domain=a.com
    @@||x.com$image,domain=a.com
    ```

    - Правило `/banner.png$image,denyallow=test1.com|test2.com,domain=example.org` будет конвертировано в:

    ```adblock
    /banner.png$image,domain=example.org
    @@||test1.com/banner.png$image,domain=example.org
    @@||test1.com/*/banner.png$image,domain=example.org
    @@||test2.com/banner.png$image,domain=example.org
    @@||test2.com/*/banner.png$image,domain=example.org
    ```

    - Правило без `$domain` **не поддерживается**: `$denyallow=a.com|b.com`.

- `$popup` — правила всплывающих окон поддерживаются, но они по сути такие же, как и правила блокировки `$document`, и не попытаются закрыть вкладку.

- Правила исключений (`@@`) отключают косметическую фильтрацию на соответствующих доменах.

  Правила исключений в Safari зависят от типа правила `ignore-previous-rules`, поэтому для их работы мы должны расставить правила в определённом порядке. Правила исключений без модификаторов размещаются в конце списка и, следовательно, они отключают не только блокировку URL, но и косметические правила.

  Это ограничение может быть снято, если будет реализована [#70](https://github.com/AdguardTeam/SafariConverterLib/issues/70).

- `$urlblock`, `$genericblock` по сути то же самое, что и `$document`, т.е. оно отключает все виды фильтрации на сайтах.

  Эти ограничения могут быть сняты, когда [#69](https://github.com/AdguardTeam/SafariConverterLib/issues/69) и [#71](https://github.com/AdguardTeam/SafariConverterLib/issues/71) будут реализованы.

- `$content` не имеет смысла в случае Safari, поскольку правила HTML-фильтрации не поддерживаются, поэтому оно используется только для совместимости. Правила с модификатором `$content` ограничиваются типом `document`.

- `$specifichide` реализован путём сканирования существующих правил скрытия элементов и удаления целевого домена из их `if-domain`-массива.

    - Правила `$specifichide` ДОЛЖНЫ таргетироваться на домен, т.е. быть такими: `||example.org^$specifichide`. Правила с более специфичными шаблонами будут отклонены, т.е. `||example.org/path$specifichide` не будут поддерживаться.
    - Правила `$specifichide` охватывают только правила, таргетированные на тот же домен, что и само правило, поддомены игнорируются. Т.е. правило `@@||example.org^$specifichide` отключит `example.org##.banner`, но проигнорирует `sub.example.org##.banner`. Это ограничение может быть снято, если будет реализована [#72](https://github.com/AdguardTeam/SafariConverterLib/issues/72).

- Модификаторы `urlblock`, `genericblock`, `generichide`, `elemhide`, `specifichide` и `jsinject` могут использоваться только в качестве единственного модификатора в правиле. Это ограничение может быть снято в будущем: [#73](https://github.com/AdguardTeam/SafariConverterLib/issues/73).

- `$websocket` (полностью поддерживается начиная с Safari 15).

- `$ping` (полностью поддерживается начиная с Safari 14).

##### Не поддерживается

- `$app`
- `$header`
- `$method`
- `$strict-first-party` (будет поддерживаться в будущем: [#64](https://github.com/AdguardTeam/SafariConverterLib/issues/64))
- `$strict-third-party` (будет поддерживаться в будущем: [#65](https://github.com/AdguardTeam/SafariConverterLib/issues/65))
- `$to` (будет поддерживаться в будущем: [#60](https://github.com/AdguardTeam/SafariConverterLib/issues/60))
- `$extension`
- `$stealth`
- `$cookie` (частичная поддержка в будущем: [#54](https://github.com/AdguardTeam/SafariConverterLib/issues/54))
- `$csp`
- `$hls`
- `$inline-script`
- `$inline-font`
- `$jsonprune`
- `$xmlprune`
- `$network`
- `$permissions`
- `$redirect`
- `$redirect-rule`
- `$referrerpolicy`
- `$removeheader`
- `$removeparam`
- `$replace`
- `$urltransform`

#### Косметические правила {#cosmetic-rules-safari-limitations}

Конвертер Safari поддерживает большинство [косметических правил](#cosmetic-rules), хотя поддерживаются только правила сокрытия элементов с базовыми CSS-селекторами нативно через блокировку контента Safari, все остальные необходимо интерпретировать с помощью дополнительного расширения.

##### Ограничения косметических правил

- Ограничения для указания доменов такие же, как и у модификатора базовых правил `$domain`.

- [Небазовые модификаторы правил](#non-basic-rules-modifiers) поддерживаются с некоторыми ограничениями:

    - `$domain` — те же ограничения, что и везде.
    - `$path` — поддерживается, но если вы используете регулярные выражения, они будут ограничены подмножеством регулярных выражений, которые [поддерживаются Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).
    - `$url` — будет поддерживаться в будущем: [#68](https://github.com/AdguardTeam/SafariConverterLib/issues/68)

#### Правила скриптов/скриптлетов

Safari Converter полностью поддерживает как [правила скриптов](#javascript-rules), так и [правила скриптлетов](#scriptlets). Однако эти правила могут быть интерпретированы только отдельным расширением.

:::warning

Правила скриптлетов **очень важно** запускать как можно раньше после загрузки страницы. Причина в том, что они должны быть запущены раньше, чем скрипты страницы. К сожалению, в Safari всегда будет небольшая задержка, которая может снизить качество блокировки.

:::

#### Правила фильтрации HTML {#html-filtering-rules-safari-limitations}

[Правила HTML-фильтрации](#html-filtering-rules) **не поддерживаются** и не будут поддерживаться в будущем. К сожалению, Safari не предоставляет необходимых технических возможностей для их реализации.

## Базовые правила

Самые простые правила — это так называемые *Базовые правила*. Они используются для блокировки запросов к определённым URL-адресам. Либо, при наличии специального маркера @@ в начале правила, для разблокировки запроса. Основной принцип для этого типа правил достаточно прост: необходимо указать адрес и дополнительные параметры, которые ограничивают или расширяют область действия правила.

:::note Подзапросы

Базовые правила, блокирующие запросы, применяются только к **подзапросам**. Это означает, что они не будут блокировать загрузку страницы, если это не будет явно указано с помощью модификатора `$document`.

:::

:::note Статус ответа

Браузер определяет заблокированный подзапрос как выполненный с ошибкой.

:::

:::note Длина правила

Правила короче 4 символов считаются некорректными и игнорируются.

:::

### Синтаксис базовых правил {#basic-rules-syntax}

```text
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- **`pattern`** — маска адреса. URL каждого запроса сопоставляется с этой маской. В шаблоне также можно использовать специальные символы, описанные [ниже](#basic-rules-special-characters). Обратите внимание, что AdGuard обрезает URL до 4096 символов, чтобы ускорить сопоставление и избежать проблем с длинными URL.
- **`@@`** — маркер, который используется в правилах исключения. С такого маркера должны начинаться правила, отключающие фильтрацию для запроса.
- **`modifiers`** — параметры, используемые для «уточнения»‎ базового правила. Некоторые параметры ограничивают область действия правила, а некоторые могут полностью изменить принцип его работы.

### Специальные символы {#basic-rules-special-characters}

- **`*`** — wildcard-символ. Используется, чтобы обозначить любой набор символов. Это может быть как пустая строка, так и строка любой длины.
- **`||`** — указание на применение правила к указанному домену и его поддоменам. Этот специальный символ позволяет не указывать конкретный протокол и поддомен в маске адреса. То есть `||` соответствует сразу `http://*.`, `https://*.`, `ws://*.` и `wss://*.`.
- **`^`** — указатель для разделительного символа. Разделителем может быть любой символ кроме буквы, цифры и следующих символов: `_` `-` `.` `%`. Например, в адресе `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3` жирным выделены разделительные символы. Конец адреса также принимается в качестве разделителя.
- **`|`** — указатель на начало или конец адреса. Значение зависит от расположения символов в маске. Например, правило `swf|` соответствует `http://example.com/annoyingflash.swf`, но не `http://example.com/swf/index.html`. `|http://example.org` соответствует `http://example.org`, но не `http://domain.com?url=http://example.org`.

:::note

`|`, `||`, `^` можно использовать только в правилах, содержащих шаблон URL. Например, `||example.com##.advert` неверно и будет проигнорировано блокировщиком.

:::

:::note Визуальное представление

Рекомендуем также прочитать [шпаргалку по фильтрам от Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), чтобы лучше понять, как строятся такие правила.

:::

### Поддержка регулярных выражений {#regexp-support}

Если вы хотите добиться ещё большей гибкости при составлении правил, вы можете использовать [регулярные выражения](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) вместо упрощённой маски со специальными символами, которая используется по умолчанию.

:::caution Производительность

Такие правила работают медленнее обычных, поэтому рекомендуется избегать их или хотя бы ограничивать их область действия конкретными доменами.

:::

Чтобы блокировщик определил, что вы хотите использовать регулярное выражение, необходимо, чтобы `pattern` имел особый вид:

```text
pattern = "/" regexp "/"
```

Например, правило `/banner\d+/$third-party` применит регулярное выражение `banner\d+` ко всем сторонним запросам. Правила-исключения с использованием регулярных выражений выглядят вот так: `@@/banner\d+/`.

:::info Совместимость

AdGuard для Safari и AdGuard для iOS не полностью поддерживают регулярные выражения в силу ограничений [Content Blocking API](https://webkit.org/blog/3476/content-blockers-first-look/) (см. раздел The Regular expression format).

:::

### Поддержка wildcard для доменов верхнего уровня (TLD) {#wildcard-for-tld}

Wildcard-символы поддерживаются для TLD-доменов в шаблонах [косметических правил](#cosmetic-rules), правил [HTML-фильтрации](#html-filtering-rules) и [JavaScript](#javascript-rules).

Для косметических правил, например, `example.*##.banner`, несколько доменов будут сопоставлены благодаря части `.*`, т.е. `example.com`, `sub.example.net`, `example.co.uk` и т. д.

При составлении базовых правил вы можете использовать wildcard-символ для TLD только вместе с [модификатором `$domain`](#domain-modifier). Например, `||*/banners/*$image,domain=example.*`.

:::info Совместимость

В AdGuard для Windows, Mac и Android и в браузерном расширении AdGuard правила с подстановочным знаком `.*` соответствуют [любому публичному суффиксу (или eTLD)](https://publicsuffix.org/list/). Но для AdGuard для Safari и iOS [поддерживаемый список доменов верхнего уровня](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) ограничен из-за ограничений Safari.

:::

Правила с wildcard для доменов верхнего уровня не поддерживаются в AdGuard Content Blocker.

### Примеры базовых правил

- `||example.com/ads/*` — простое правило, которое соответствует адресам типа `http://example.com/ads/banner.jpg` и даже `http://subdomain.example.com/ads/otherbanner.jpg`.

- `||example.org^$third-party` — правило, которое блокирует сторонние запросы к домену `example.org` и его поддоменам.

- `@@||example.com$document ` — наиболее общее правило-исключение. Такое правило полностью отключает фильтрацию на домене `example.com` и всех его поддоменах. Существует ряд модификаторов, которые можно использовать в правилах исключений. Более подробно о правилах-исключениях и параметрах, которые могут в таких правилах использоваться, написано [ниже](#exception-modifiers).

### Модификаторы базовых правил

- [Базовые модификаторы](#basic-rules-basic-modifiers)
- [Модификаторы типа контента](#content-type-modifiers)
- [Модификаторы правил-исключений](#exception-modifiers)

:::note

Возможности, описанные в этом разделе, предназначены для опытных пользователей. Они расширяют возможности «Общих правил», но для их применения необходимо представлять, как работает браузер.

:::

Вы можете изменить поведение «общего правила», используя дополнительные модификаторы. Список этих параметров располагается в конце правила за знаком доллара `$` и разделяется запятыми.

Пример:

```adblock
||domain.com^$popup,third-party
```

### Базовые модификаторы {#basic-rules-basic-modifiers}

Приведённые ниже модификаторы самые простые и часто применяемые. В основном, они просто ограничивают сферу применения правила.

<!-- Please keep them sorted -->

| Модификатор \ Продукты                             |    [Приложения CoreLibs][cl-apps]     |    [AdGuard для Chromium][ext-chr]     |   [AdGuard для Chrome MV3][ext-mv3]    |     [AdGuard для Firefox][ext-ff]      |       [AdGuard для iOS][ios-app]       |    [AdGuard Mini for Mac][ext-saf]     | [AdGuard Content Blocker][and-cb] |
| --------------------------------------------------- |:-------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                               |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$denyallow](#denyallow-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$domain](#domain-modifier)                         |                   ✅                   |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) | ✅ [*[1]](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)                         |                   ✅                   | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    |                   ❌                    |                 ❌                 |
| [$important](#important-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$match-case](#match-case-modifier)                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$method](#method-modifier)                         |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    | ✅ [*[2]](#method-modifier-limitations) | ✅ [*[2]](#method-modifier-limitations) |                 ❌                 |
| [$popup](#popup-modifier)                           | ✅ [*[3]](#popup-modifier-limitations) |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  | ✅ [*[3]](#popup-modifier-limitations)  |                 ❌                 |
| [$strict-first-party](#strict-first-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$strict-third-party](#strict-third-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$third-party](#third-party-modifier)               |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$to](#to-modifier)                                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается

:::

#### **`$app`** {#app-modifier}

Этот модификатор ограничивает действие правила до конкретного приложения (или списка приложений). Это может быть не слишком важно для Windows и Mac, но это очень важно для мобильных устройств, где некоторые правила фильтрации должны быть связаны с конкретным приложением.

- Android — используйте имя пакета приложения, например, `org.example.app`.
- Windows — используйте имя процесса, например, `chrome.exe`.
- Mac — используйте bundle ID или имя процесса, например, `com.google.Chrome`.

На Mac вы можете найти bundle ID или имя процесса интересующего вас приложения в деталях соответствующих запросов в Журнале фильтрации.

**Синтаксис**

Модификатор представляет собой список из одного или нескольких выражений, каждое из которых сопоставляется с приложением определённым образом в зависимости от его типа. Эти выражения разделены символом `|`.

```text
applications = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_app / wildcard_app / regexp )
```

- **`regular_app`** — a regular application name (`example.app`). It corresponds to the specified application and is matched lexicographically.
- **`wildcard_app`** — an application name ending with a wildcard character `*`, such as `org.example.*` or `com.ad*`. It matches all applications whose names start with the specified prefix. Matching is done lexicographically.
- **`regexp`** — a regular expression that starts and ends with `/`. It works the same way as the basic URL rules, but the characters `/`, `$`, `,`, and `|` must be escaped with `\`.

**Примеры**

- `||baddomain.com^$app=org.example.app` — правило для блокировки запросов, которые соответствуют указанной маске и отправлены Android-приложением `org.example.app`.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — аналогичное правило, но оно работает как для приложения `org.example.app1`, так и для `org.example.app2`.

Если вы хотите, чтобы правило не применялось к определённым приложениям, начните название приложения с символа `~`.

- `||baddomain.com^$app=~org.example.app` — правило для блокировки запросов, соответствующих указанной маске и отправленных из любого приложения, кроме `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — аналогично, но в исключениях два приложения: `org.example.app1` и `org.example.app2`.

You can use wildcards in the `$app` modifier:

- `||baddomain.com^$app=org.example.*` — applies to all apps whose package names start with `org.example.`

You can use regular expressions in the `$app` modifier by enclosing them in forward slashes `/.../`. This allows for more flexible matching — for example, targeting a group of apps from the same publisher or matching complex patterns.

- `||baddomain.com^$app=/org\.example\.[a-z0-9_]+/` — applies to all apps whose package name starts with `org.example` (e.g. `org.example.app1`, `org.example.utility`, etc.).
- `||baddomain.com^$app=/^org\.example\.app\$\|^org\.example\.[ab].*/` — applies to `org.example.app` and to any app whose package starts with `org.example.a` or `org.example.b`.

The `$app` modifier supports combining all three types of entries — plain names, wildcards, and regular expressions — within the same rule, but it does not allow combining negated and non-negated expressions together.

- `||example.com^$app=org.example.app|org.example.*|/org\.example\.[a-z]+/` — applies to `org.example.app`, all matching `org.example.*` and `org.example.[a-z]+` apps.

:::caution Ограничения

- Apps in the modifier value cannot include a wildcard inside the string , e.g. `$app=com.*.music`. Use a regular expression instead: `$app=/com\..*\.music/`.
- You cannot combine negated (`~`) and non-negated expressions in the same `$app` modifier — this would be ambiguous.

:::

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$app`.
- On Windows the process name is case-insensitive starting with AdGuard for Windows with [CoreLibs][] v1.12 or later.
- Support for regular expressions and for combining different types of entries (plain names, wildcards, and regular expressions) in the `$app` modifier is available starting from CoreLibs v1.19 or later.

:::

#### **`$denyallow`** {#denyallow-modifier}

Модификатор `$denyallow` позволяет избежать создания дополнительных правил, когда требуется отключить то или иное правило для определённых доменов. Модификатор `$denyallow` соответствует только целевым доменам, но не доменам реферера.

Добавление этого модификатора в правило равносильно исключению доменов при помощи паттерна правила либо при помощи добавления дополнительных правил-исключений. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

**Примеры**

Это правило:

```adblock
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

эквивалентно этому правилу:

```adblock
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

или комбинации этих трёх:

```adblock
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

:::caution Ограничения

- Паттерн правила не может указывать на конкретные домены, например, не может начинаться с `||`.
- Домены в значении модификатора не могут быть отменены, например `$denyallow=~x.com`, или иметь подстановочный домен TLD, например `$denyallow=x.*`, или быть регулярным выражением, например `$denyallow=/\.(com\|org)/`.
- `$denyallow` не может использоваться вместе с [`$to`](#to-modifier). Его можно выразить инвертированным `$to`: `$denyallow=a.com|b.com` эквивалентно `$to=~a.com|~b.com`.

Правила, нарушающие эти ограничения, считаются недействительными.

:::

:::info Совместимость

Правила с модификатором `$denyallow` не поддерживаются в AdGuard для iOS, Safari и AdGuard Content Blocker.

:::

#### **`$domain`** {#domain-modifier}

`$domain` ограничивает область действия правила запросами, сделанными **с** указанных доменов и их поддоменов (как указано в HTTP-заголовке [Referer](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Referer)).

**Синтаксис**

Модификатор представляет собой список из одного или нескольких выражений, разделённых символом `|`, каждое из которых сопоставляется с доменом определённым образом в зависимости от его типа (см. ниже).

```text
domains = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_domain / any_tld_domain / regexp )
```

- **`Regular_domain`** — обычное доменное имя (`domain.com`). Соответствует указанному домену и его поддоменам. Сопоставляется лексикографически.
- **`any_tld_domain`** — доменное имя, оканчивающееся подстановочным знаком в качестве [публичного суффикса](https://publicsuffix.org/learn/), например, для `example.*` это `co.uk` в `example.co.uk`. Соответствует указанному домену и его поддоменам с любым публичным суффиксом. Сопоставляется лексикографически.
- **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных правилах URL, но символы `/`, `$`, `,` и `|` должны быть экранированы с помощью `\`.

:::info

Правила с модификатором `$domain` в виде `regular_domain` поддерживаются всеми продуктами AdGuard.

:::

**Примеры**

**Просто `$domain`:**

- `||baddomain.com^$domain=example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с домена `example.org` или его поддоменов.
- `||baddomain.com^$domain=example.org|example.com` — такое же правило, но срабатывать оно будет как для домена `example.org`, так и для `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`.

**`$domain` и инверсия `~`:**

- `||baddomain.com^$domain=example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с домена `example.org` или его поддоменов.
- `||baddomain.com^$domain=example.org|example.com` — такое же правило, но срабатывать оно будет как для домена `example.org`, так и для `example.com`.
- `||baddomain.com^$domain=~example.org` блокирует запросы, которые соответствуют указанной маске и отправлены с любого домена, кроме `example.org` и его поддоменов.
- `||baddomain.com^$domain=example.org|~foo.example.org` блокирует запросы, отправленные с домена `example.org` и всех его поддоменов, кроме `foo.example.org`.
- `||baddomain.com^$domain=/(^\|.+\.)example\.(com\|org)\$/` блокирует запросы, отправляемые с доменов `example.org` и `example.com` и всех их поддоменов.
- `||baddomain.com^$domain=~a.com|~b.*|~/(^\|.+\.)c\.(com\|org)\$/` блокирует запросы, отправленные с любых доменов, кроме `a.com`, `b` с любым публичным суффиксом (`b.com`, `b.co.uk`, и т.д.), `c.com`, `c.org` и их поддоменов.

**Модификатор `$domain`, соответствующий целевому домену:**

In some cases the `$domain` modifier can match not only the referrer domain, but also the target domain.

This happens when the rule has one of the following modifiers: [`$cookie`](#cookie-modifier), [`$csp`](#csp-modifier), [`$permissions`](#permissions-modifier), [`$removeparam`](#removeparam-modifier).

These modifiers will not be applied if the referrer matches a rule with `$domain` that explicitly excludes the referrer domain, even if the target domain also matches the rule.

**Примеры**

- `*$cookie,domain=example.org|example.com` заблокирует cookies для всех запросов от и к `example.org` и `example.com`.
- `*$document,domain=example.org|example.com` will block requests only from `example.org` and `example.com`, but not to them.

In the following examples it is implied that requests are sent from `http://example.org/page` (the referrer) and the target URL is `http://targetdomain.com/page`.

- `page$domain=example.org` сработает, так как соответствует рефереру.
- `page$domain=targetdomain.com` will not be matched because it does not match the referrer domain.
- `||*page$domain=targetdomain.com,cookie` will be matched because the rule contains `$cookie` modifier despite the pattern `||*page` may match specific domains.
- `page$domain=targetdomain.com|~example.org,cookie` will not be matched because the referrer domain is explicitly excluded.

##### Ограничения модификатора `$domain` {#domain-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3], `regexp` and `any_tld_domain` entries are not supported.

AdGuard for iOS and AdGuard for Safari support the `$domain` modifier but have some limitations. For more details, see the [SafariConverterLib section](#safari-converter--basic--supported-with-limitations).

Rules with `regexp` in the `$domain` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

:::info Совместимость

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.12 or later the `$domain` modifier can be alternatively spelled as `$from`.

:::

#### **`$header`** {#header-modifier}

The `$header` modifier allows matching the HTTP response having a specific header with (optionally) a specific value.

**Syntax**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

where:

- **`h_name`** (обязательно) — имя HTTP-заголовка. Сопоставляется без учёта регистра символов.
- **`h_value`** (опционально) — выражение для сопоставления значения HTTP-заголовка, может быть одним из:
    - **`string`** — последовательность символов. Лексикографически сопоставляется со значением заголовка;
    - **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

The modifier part, `":" h_value`, may be omitted. In that case, the modifier matches the header name only.

**Примеры**

- `||example.com^$header=set-cookie:foo` — блокирует запрос, ответ которого содержит заголовок `Set-Cookie` со значением `foo`.
- `||example.com^$header=set-cookie ` блокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` разблокирует запросы, ответы которых содержат заголовок `Set-Cookie` со значением `foo, bar$`.
- `@@||example.com^$header=set-cookie` разблокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.

##### Ограничения модификатора `$header` {#header-modifier-limitations}

:::caution Ограничения

1. The `$header` modifier can be matched only when headers are received. So if the request is blocked or redirected at an earlier stage, the modifier cannot be applied.

1. In AdGuard Browser Extension, the `$header` modifier is only compatible with [`$csp`](#csp-modifier), [`$removeheader`](#removeheader-modifier) (response headers only), [`$important`](#important-modifier), [`$badfilter`](#badfilter-modifier), [`$domain`](#domain-modifier), [`$third-party`](#third-party-modifier), [`$match-case`](#match-case-modifier), and [content-type modifiers](#content-type-modifiers) such as [`$script`](#script-modifier) and [`$stylesheet`](#stylesheet-modifier). The rules with other modifiers are considered invalid and will be discarded.

:::

:::info Совместимость

Rules with the `$header` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$important`** {#important-modifier}

The `$important` modifier applied to a rule increases its priority over rules without the identical modifier. Even over basic exception rules.

Go to [rules priorities](#rule-priorities) for more details.

**Примеры**

```adblock
! blocking rule will block all requests despite of the exception rule
||example.org^$important
@@||example.org^
```

```adblock
! if the exception rule also has `$important` modifier, it will prevail and requests won't be blocked
||example.org^$important
@@||example.org^$important
```

#### **`$match-case`** {#match-case-modifier}

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

**Примеры**

- `*/BannerAd.gif$match-case `— такое правило будет блокировать `http://example.com/BannerAd.gif`, но не `http://example.com/bannerad.gif`.

:::info Совместимость

Rules with the `$match-case` are supported by AdGuard for iOS and AdGuard for Safari with SafariConverterLib v2.0.43 or later.

All other products already support this modifier.

:::

#### **`$method`** {#method-modifier}

This modifier limits the rule scope to requests that use the specified set of HTTP methods. Negated methods are allowed. The methods must be specified in all lowercase characters, but are matched case-insensitively. To add multiple methods to one rule, use the vertical bar `|` as a separator.

**Примеры**

- `||evil.com^$method=get|head` блокирует только запросы GET и HEAD к `evil.com`.
- `||evil.com^$method=~post|~put` блокирует любые запросы к `evil.com`, кроме POST или PUT.
- `@@||evil.com$method=get` разблокирует только GET-запросы к `evil.com`.
- `@@||evil.com$method=~post` разблокирует любые запросы к `evil.com`, кроме POST.

:::caution Ограничения

1. In AdGuard for iOS and AdGuard Mini for Mac, the `$method` modifier does not support negation. Therefore, rules such as `$method=~get` are not supported.

1. Rules with a combination of negated and non-negated values are considered invalid. So, for example, the rule `||evil.com^$method=get|~head` will be ignored.

:::

:::info Совместимость

Rules with `$method` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

In AdGuard for iOS (v4.5.15 or later) and AdGuard Mini for Mac (v2.1 or later), the `$method` modifier is supported with limitations.

:::

#### **`$popup`** {#popup-modifier}

AdGuard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note that not all the tabs can be closed.

**Примеры**

- `||domain.com^$popup` — при попытке перехода на сайт `http://domain.com` с любой страницы в браузере, новая вкладка, в которой должен открыться указанный сайт, будет закрыта.

##### Ограничения модификатора `$popup` {#popup-modifier-limitations}

:::caution Limitations

1. The `$popup` modifier works best in AdGuard Browser Extension for Chromium-based browsers and Firefox.
1. In [AdGuard for Chrome MV3][ext-mv3] rules with the [`$popup`][popup-in-mv3] modifier would not work, so we disable converting them to declarative rules. We will try to use them only in our [TSUrlFilter][] engine and close new tabs programmatically.
1. In AdGuard for iOS and AdGuard for Safari, `$popup` rules simply block the page right away.
1. In AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux, the `$popup` modifier may not detect a popup in some cases and it will not be blocked. The `$popup` modifier applies the `document` content type with a special flag which is passed to a blocking page. Blocking page itself can do some checks and close the window if it is really a popup. Otherwise, page should be loaded. It can be combined with other request type modifiers, such as `$third-party`, `$strict-third-party`, `$strict-first-party`, and `$important`.

:::

:::info Совместимость

Rules with the `$popup` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$strict-first-party`** {#strict-first-party-modifier}

Works the same as the [`$~third-party`](#third-party-modifier) modifier, but only treats the request as first-party if the referrer and origin have exactly the same hostname.

Requests without a referrer are also treated as first-party requests, and the rules with the `$strict-first-party` modifier are applied to such requests.

**Примеры**

- domain.com$strict-first-party — это правило применяется только к `domain.com`. Например, запрос с домена `domain.com` к домену `http://domain.com/icon.ico` — это запрос первой стороны. Запрос от `sub.domain.com` к `http://domain.com/icon.ico` рассматривается как сторонний (в отличие от модификатора `$~third-party`).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict1p`.

:::

:::info Совместимость

Rules with the `$strict-first-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

Requests without a referrer are matched by rules with `$strict-first-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$strict-third-party`** {#strict-third-party-modifier}

Works the same as the [`$third-party`](#third-party-modifier) modifier but also treats requests from the domain to its subdomains and vice versa as third-party requests.

**Примеры**

- `||domain.com^$strict-third-party` — правило применяется на всех доменах, кроме `domain.com`. Пример стороннего запроса: `http://sub.domain.com/banner.jpg` (в отличие от модификатора `$third-party`).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict3p`.

:::

:::info Совместимость

Rules with the `$strict-third-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

:::

#### **`$third-party`** {#third-party-modifier}

A restriction on third-party and custom requests. A third-party request is a request from an external domain. For example, a request to `example.org` from `domain.com` is a third-party request.

:::note

To be considered as such, a third-party request should meet one of the following conditions:

1. Its referrer is not a subdomain of the target domain or vice versa. For example, a request to `subdomain.example.org` from `example.org` is not a third-party request
1. Its `Sec-Fetch-Site` header is set to `cross-site`

:::

**Примеры**

**`$third-party`:**

- `||domain.com^$third-party` — this rule applies to all domains except `domain.com` and its subdomains. The rule is never applied if there is no referrer. An example of a third-party request: `http://example.org/banner.jpg`.

If there is a `$~third-party` modifier, the rule is only applied to requests that are not from third parties. Which means they have to be sent from the same domain or shouldn't have a referrer at all.

**`$~third-party`:**

- `||domain.com$~third-party` — this rule applies only to `domain.com` and its subdomains. Example of a non third-party request: `http://sub.domain.com/icon.ico`.

Requests without a referrer are also treated as non third-party requests and the rules with the `$~third-party` modifier are applied to such requests.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$3p`.

:::

:::info Совместимость

Requests without a referrer are matched by rules with `$~third-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$to`** {#to-modifier}

`$to` limits the rule scope to requests made **to** the specified domains and their subdomains. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

**Примеры**

- `/ads$to=evil.com|evil.org` блокирует любые запросы к `evil.com` или `evil.org` и их поддоменам с путём, соответствующим `/ads`.
- `/ads$to=~not.evil.com|evil.com` блокирует любые запросы к `evil.com` и его поддоменам с путём, совпадающим с `/ads`, за исключением запросов к `not.evil.com` и его поддоменам.
- `/ads$to=~good.com|~good.org` блокирует любые запросы с путём, соответствующим `/ads`, за исключением запросов к `good.com` или `good.org` и их поддоменам.

:::caution Ограничения

[`$denyallow`](#denyallow-modifier) cannot be used together with `$to`. Его можно выразить инвертированным `$to`: `$denyallow=a.com|b.com` эквивалентно `$to=~a.com|~b.com`.

:::

:::info Совместимость

Rules with the `$to` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

:::

### Модификаторы типа контента {#content-type-modifiers}

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

:::info Совместимость

There is a big difference in how AdGuard determines the content type on different platforms. For AdGuard Browser Extension, content type for every request is provided by the browser. AdGuard for Windows, Mac, and Android use the following method: first, the apps try to determine the type of the request by the `Sec-Fetch-Dest` request header or by the filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

:::

**Examples of content-type modifiers**

- `||example.org^$image` — соответствует всем картинкам с домена `example.org`.
- `||example.org^$script,stylesheet` — соответствует всем скриптам и стилям с домена `example.org`.
- `||example.org^$~image,~script,~stylesheet` — соответствует всем запросам к домену `example.org`, кроме картинок, скриптов и стилей.

<!-- Please keep them sorted -->

| Модификатор \ Продукты                                      |       [Приложения CoreLibs][cl-apps]        | [AdGuard для Chromium][ext-chr] | [AdGuard для Chrome MV3][ext-mv3] | [AdGuard для Firefox][ext-ff] |        [AdGuard для iOS][ios-app]         |       [AdGuard для Safari][ext-saf]       | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------------------------ |:-------------------------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:-----------------------------------------:|:-----------------------------------------:|:---------------------------------:|
| [$document](#document-modifier)                              |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$font](#font-modifier)                                      |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$image](#image-modifier)                                    |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$media](#media-modifier)                                    |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$object](#object-modifier)                                  |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                 |
| [$other](#other-modifier)                                    |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$ping](#ping-modifier)                                      |    ✅ [*[1]](#ping-modifier-limitations)     |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                 |
| [$script](#script-modifier)                                  |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$stylesheet](#stylesheet-modifier)                          |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$subdocument](#subdocument-modifier)                        | ✅ [*[2]](#subdocument-modifier-limitations) |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$websocket](#websocket-modifier)                            |                      ✅                      |                ✅                |                 ✅                 |               ✅               | ✅ [*[3]](#websocket-modifier-limitations) | ✅ [*[3]](#websocket-modifier-limitations) |                 ❌                 |
| [$xmlhttprequest](#xmlhttprequest-modifier)                  |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$webrtc 🚫](#webrtc-modifier "удалён")                       |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                 |
| [$object-subrequest 🚫](#object-subrequest-modifier "удалён") |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается
- 🚫 — удалён и больше не поддерживается

:::

#### **`$document`** {#document-modifier}

The rule corresponds to the main frame document requests, i.e. HTML documents that are loaded in the browser tab. It does not match iframes, there is a [`$subdocument` modifier](#subdocument-modifier) for these.

By default, AdGuard does not block the requests that are loaded in the browser tab (e.g. "main frame bypass"). The idea is not to prevent pages from loading as the user clearly indicated that they want this page to be loaded. However, if the `$document` modifier is specified explicitly, AdGuard does not use that logic and prevents the page load. Instead, it responds with a "blocking page".

If this modifier is used with an exclusion rule (`@@`), it completely disables blocking on corresponding pages. It is equivalent to using `$elemhide`, `$content`, `$urlblock`, `$jsinject`, `$extension` modifiers simultaneously.

**Примеры**

- `@@||example.com^$document ` полностью отключает фильтрацию на всех страницах сайта `example.com` и всех его поддоменах.

- `||example.com^$document` блокирует запрос HTML-документа на `example.com` с помощью блокирующей страницы.
- `||example.com^$document,redirect=noopframe` перенаправляет запрос HTML-документа сайта `example.com` на пустой HTML-документ.
- `||example.com^$document,removeparam=test` удаляет параметр `test` из запроса HTML-документа к `example.com`.
- `||example.com^$document,replace=/test1/test2/` заменяет `test1` на `test2` в запросе HTML-документа к `example.com`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$doc`.

:::

#### **`$font`** {#font-modifier}

The rule corresponds to requests for fonts, e.g. `.woff` filename extension.

#### **`$image`** {#image-modifier}

The rule corresponds to images requests.

#### **`$media`** {#media-modifier}

The rule corresponds to requests for media files — music and video, e.g. `.mp4` files.

#### **`$object`** {#object-modifier}

The rule corresponds to browser plugins resources, e.g. Java or Flash.

:::info Совместимость

Rules with `$object` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

#### **`$other`** {#other-modifier}

The rule applies to requests for which the type has not been determined or does not match the types listed above.

#### **`$ping`** {#ping-modifier}

The rule corresponds to requests caused by either `navigator.sendBeacon()` or the `ping` attribute on links.

##### Ограничения модификатора `$ping` {#ping-modifier-limitations}

:::caution Limitations

AdGuard for Windows, Mac, and Android often cannot accurately detect `navigator.sendBeacon()`. Using `$ping` is not recommended in the filter lists that are supposed to be used by CoreLibs-based AdGuard products.

:::

:::info Совместимость

Rules with `$ping` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

#### **`$script`** {#script-modifier}

The rule corresponds to script requests, e.g. JavaScript, VBScript.

#### **`$stylesheet`** {#stylesheet-modifier}

The rule corresponds to CSS files requests.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$css`.

:::

#### **`$subdocument`** {#subdocument-modifier}

The rule corresponds to requests for built-in pages — HTML tags `frame` and `iframe`.

**Примеры**

- `||example.com^$subdocument` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и всем его поддоменам.
- `||example.com^$subdocument,domain=domain.com` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и его поддоменам с `domain.com` и всех его поддоменов.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$frame`.

:::

##### Ограничения модификатора `$subdocument` {#subdocument-modifier-limitations}

:::caution Limitations

In AdGuard for Windows, Mac, and Android subdocuments are being detected by the [Sec-Fetch-Dest header][] if it is present. Otherwise, some main pages may be treated as subdocuments.

:::

:::info Совместимость

Rules with `$subdocument` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$websocket`** {#websocket-modifier}

The rule applies only to WebSocket connections.

##### Ограничения модификатора `$websocket` {#websocket-modifier-limitations}

:::caution Limitations

For AdGuard for Safari and AdGuard for iOS, it is supported on devices with macOS Monterey (version 12) and iOS 16 or higher respectively.

:::

:::info Совместимость

`$websocket` modifier is supported in all AdGuard products except AdGuard Content Blocker.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

The rule applies only to ajax requests (requests sent via the JavaScript object `XMLHttpRequest`).

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$xhr`.

:::

:::info Совместимость

AdGuard for Windows, Mac, Android when filtering older browsers cannot accurately detect this type and sometimes detects it as [`$other`](#other-modifier) or [`$script`](#script-modifier). They can only reliably detect this content type when filtering modern browsers that support [Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header).

:::

#### **`$object-subrequest` (удалён)** {#object-subrequest-modifier}

:::danger Removal notice

`$object-subrequest` modifier is removed and is no longer supported. Rules with it are considered as invalid. The rule corresponds to requests by browser plugins (it is usually Flash).

:::

#### **`$webrtc` (удалён)** {#webrtc-modifier}

:::danger Removal notice

This modifier is removed and is no longer supported. Rules with it are considered as invalid. If you need to suppress WebRTC, consider using the `nowebrtc` [scriptlet](#scriptlets).

:::

The rule applies only to WebRTC connections.

**Примеры**

- `||example.com^$webrtc,domain=example.org` — это правило блокирует WebRTC-соединения c `example.com` от `example.org`.
- `@@*$webrtc,domain=example.org` — это правило отключает оболочку RTC для `example.org`.

### Модификаторы правил исключений {#exception-modifiers}

Exception rules disable the other basic rules for the addresses to which they correspond. They begin with a `@@` mark. All the basic modifiers listed above can be applied to them and they also have a few special modifiers.

:::note Визуальное представление

We recommend to get acquainted with [the Adblock Plus filter cheatsheet](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how exception rules should be made.

:::

<!-- Please keep them sorted -->

| Модификатор \ Продукты                 | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] |    [AdGuard для Chrome MV3][ext-mv3]     | [AdGuard для Firefox][ext-ff] |          [AdGuard для iOS][ios-app]          |        [AdGuard для Safari][ext-saf]         | [AdGuard Content Blocker][and-cb] |
| --------------------------------------- |:------------------------------:|:-------------------------------:|:----------------------------------------:|:-----------------------------:|:--------------------------------------------:|:--------------------------------------------:|:---------------------------------:|
| [$content](#content-modifier)           |               ✅                |                ❌                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$elemhide](#elemhide-modifier)         |               ✅                |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                 |
| [$extension](#extension-modifier)       |               ✅                |                ❌                |                    ❌                     |               ❌               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$jsinject](#jsinject-modifier)         |               ✅                |                ✅                | ✅ [*[1]](#jsinject-modifier-limitations) |               ✅               |                      ✅                       |                      ✅                       |                 ❌                 |
| [$stealth](#stealth-modifier)           |               ✅                |                ✅                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$urlblock](#urlblock-modifier)         |               ✅                |                ✅                |                    ❌                     |               ✅               |   ✅ [*[2]](#urlblock-modifier-limitations)   |   ✅ [*[2]](#urlblock-modifier-limitations)   |                 ❌                 |
| [$genericblock](#genericblock-modifier) |               ✅                |                ✅                |                    ✅                     |               ✅               | ✅ [*[3]](#genericblock-modifier-limitations) | ✅ [*[3]](#genericblock-modifier-limitations) |                 ❌                 |
| [$generichide](#generichide-modifier)   |               ✅                |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                 |
| [$specifichide](#specifichide-modifier) |               ✅                |                ✅                |                    ✅                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается

:::

:::info

By default, without specifying additional content type modifiers, exception rule modifiers override other basic rules only for main frame document requests (see [`$document`](#document-modifier) for more information about main frame document).

Например:

- Сайт `example.com` содержит `iframe`, указывающий на `example1.com.`.
- Применено правило `#%#//console.log('test')`.

In this case, the log will appear twice in the console: once for the main frame document and once for `iframe`.

If you add the `@@||example.com^$jsinject` rule, the log will appear only once for `iframe`.

:::

#### **`$content`** {#content-modifier}

Disables [HTML filtering](#html-filtering-rules), [`$hls`](#hls-modifier), [`$replace`](#replace-modifier), and [`$jsonprune`](#jsonprune-modifier) rules on the pages that match the rule.

**Примеры**

- `@@||example.com^$content` отключает все правила модификации контента на страницах `example.com` и всех его поддоменах.

#### **`$elemhide`** {#elemhide-modifier}

Disables any [cosmetic rules](#cosmetic-rules) on the pages matching the rule.

**Примеры**

- `@@||example.com^$elemhide` отменяет все косметические правила для страниц на сайте `example.com` и на всех его поддоменах.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ehide`.

:::

#### **`$extension`** {#extension-modifier}

Disables specific userscripts or all userscripts for a given domain.

**Syntax**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` stands for a specific userscript name to be disabled by the modifier. The modifier can contain any number of userscript names or none. In the latter case the modifier disables all the userscripts.

Userscript names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single (`'`) and double (`"`) ASCII quotes are supported. Multiple userscript names should be separated with a pipe (`|`). However, if a userscript name is a single word without any special characters, it can be used without quotes.

You can also exclude a userscript by adding a `~` character before it. In this case, the userscript will not be disabled by the modifier.

```adblock
$extension=~"userscript name"
```

:::note

When excluding a userscript, you must place `~` outside the quotes.

:::

If a userscript's name includes quotes (`"`), commas (`,`), or pipes (`|`), they must be escaped with a backslash (`\`).

```adblock
$extension="userscript name\, with \"quote\""
```

**Примеры**

- `@@||example.com^$extension="AdGuard Assistant"` отключает пользовательский скрипт `Помощник AdGuard` на сайте `example.com`.
- `@@||example.com^$extension=MyUserscript` отключает пользовательский скрипт `MyUserscript` на сайте `example.com`.
- `@@||example.com^$extension='AdGuard Assistant'|'AdGuard Popup Blocker'` отключает оба пользовательских скрипта `Помощник AdGuard` и `Блокировщик всплывающей рекламы от AdGuard` на сайте `example.com`.
- `@@||example.com^$extension=~"AdGuard Assistant"` отключает все пользовательские скрипты на сайте `example.com`, кроме `Помощника AdGuard`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"AdGuard Popup Blocker"` отключает все пользовательские скрипты на сайте `example.com`, кроме `Помощника AdGuard` и `Блокировщика всплывающей рекламы от AdGuard`.
- `@@||example.com^$extension` — пользовательские скрипты не будут работать на страницах сайта `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` отключает пользовательский скрипт `AdGuard "Assistant"` на сайте `example.com`.

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$extension`.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Forbids adding of JavaScript code to the page. You can read about scriptlets and javascript rules further.

**Примеры**

- `@@||example.com^$jsinject` отменяет все javascript-правила для страниц на сайте `example.com` и на всех его поддоменах.

##### Ограничения модификатора `$jsinject` {#jsinject-modifier-limitations}

:::info Limitations

Rules with the [`$jsinject`][jsinject-in-mv3] modifier cannot be converted to DNR in [AdGuard for Chrome MV3][ext-mv3]. We only use them in the [TSUrlFilter][] engine to disable some cosmetic rules.

:::

:::info Совместимость

The `$jsinject` modifier is not supported by AdGuard for Chrome MV3 ([yet][jsinject-in-mv3]) and AdGuard Content Blocker.

:::

#### **`$stealth`** {#stealth-modifier}

Disables the Tracking protection (formerly Stealth Mode) module for all corresponding pages and requests.

**Syntax**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` stand for certain Tracking protection options disabled by the modifier. The modifier can contain any number of specific options (see below) or none. In the latter case the modifier disables all the Tracking protection features.

The list of the available modifier options:

- `searchqueries` отключает опцию [**Скрывать поисковые запросы**](../../stealth-mode#searchqueries)
- `donottrack` отключает опцию [**Просить сайты не отслеживать вас**](../../stealth-mode#donottrack)
- `3p-cookie` отключает [**Самоуничтожение сторонних куки**](../../stealth-mode#3p-cookie)
- `1p-cookie` отключает [**Самоуничтожение куки сайта**](../../stealth-mode#1p-cookie)
- `3p-cache` отключает опцию [**Блокировать заголовки ETag и If-None-Match**](../../stealth-mode#3p-cache)
- `3p-auth` отключает опцию [**Блокировать сторонний заголовок авторизации**](../../stealth-mode#3p-auth)
- `webrtc` отключает опцию [**Блокировать WebRTC**](../../stealth-mode#webrtc)
- `push` отключает опцию [**Блокировать Push API**](../../stealth-mode#push)
- `location` отключает опцию [**Блокировать Location API**](../../stealth-mode#location)
- `flash` отключает опцию [**Блокировать Flash**](../../stealth-mode#flash)
- `java` отключает опцию [**Блокировать Java**](../../stealth-mode#java)
- `referrer` отключает опцию [**Скрывать Referer от третьих лиц**](../../stealth-mode#miscellaneous)
- `useragent` отключает опцию [**Скрывать User-Agent**](../../stealth-mode#useragent)
- `ip` отключает опцию [**Скрывать IP-адрес**](../../stealth-mode#ip)
- `xclientdata` отключает опцию [**Удалять заголовок X-Client-Data**](../../stealth-mode#xclientdata)
- `dpi` отключает опцию [**Защищать от DPI**](../../stealth-mode#dpi)

**Примеры**

- `@@||example.com^$stealth` полностью отключает Защиту от трекинга для запросов к `example.com` и поддоменам, кроме блокировки куки и скрытия параметров отслеживания (см. ниже).
- `@@||domain.com^$script,stealth,domain=example.com` отключает Защиту от трекинга только для script-запросов к `domain.com` и поддоменам на `example.com` и всех его поддоменах.
- `@@||example.com^$stealth=3p-cookie|dpi` отключает блокировку сторонних куки-файлов и меры защиты от DPI для запросов к `example.com`.

:::note

Blocking cookies and removing tracking parameters is achieved by using rules with the [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) and [`$removeparam`](#removeparam-modifier) modifiers. Exception rules that contain only the `$stealth` modifier will not do these things. If you want to completely disable all Tracking protection features for a given domain, you must include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Ограничения

- Параметры модификатора должны быть написаны строчными буквами, т. е. `$stealth=DPI` будет отклонено.
- Параметры модификатора не могут отрицаться, т.е. `$stealth=~3p-cookie` будет отклонён.
- Браузерное расширение AdGuard поддерживает только опции `searchqueries`, `donottrack`, `referrer`, `xclientdata`, `1p-cookie` и `3p-cookie`.

:::

:::info Совместимость

- Защита от трекинга доступна в AdGuard для Windows, AdGuard для Mac, AdGuard для Android и расширении AdGuard для Firefox и браузеров на базе Chromium, за исключением AdGuard для Chrome MV3. Все остальные продукты будут игнорировать правила с модификатором `$stealth`.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Disables blocking of all requests sent from the pages matching the rule and disables all [`$cookie`](#cookie-modifier) rules.

**Примеры**

- `@@||example.com^$urlblock` — любые запросы, отправленные со страниц сайта `example.com` и всех его поддоменов, не будут блокироваться.

##### Ограничения модификатора `$urlblock` {#urlblock-modifier-limitations}

:::caution Limitations

In AdGuard for iOS and AdGuard for Safari, rules with `$urlblock` work as [$document exclusion](#document-modifier) — unblock everything.

:::

:::info Совместимость

Rules with `$urlblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### Generic-правила {#exception-modifiers-generic-rules}

Before we can proceed to the next modifiers, we have to make a definition of *generic rules*. The rule is generic if it is not limited to specific domains. Wildcard character `*` is supported as well.

For example, these rules are generic:

```adblock
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

And these are not:

```adblock
domain.com###banner
||domain.com^$domain=example.com
```

#### **`$genericblock`** {#genericblock-modifier}

Disables generic basic rules on pages that correspond to exception rule.

**Примеры**

- `@@||example.com^$genericblock` отключает базовые правила generic на любых страницах `example.com` и всех поддоменах.

##### Ограничения модификатора `$genericblock` {#genericblock-modifier-limitations}

:::caution Limitations

In AdGuard for iOS and AdGuard for Safari, rules with `$genericblock` work as [$document exclusion](#document-modifier) — unblock everything.

:::

:::info Совместимость

Rules with `$genericblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### **`$generichide`** {#generichide-modifier}

Disables all generic [cosmetic rules](#cosmetic-rules) on pages that correspond to the exception rule.

**Примеры**

- `@@||example.com^$generichide` отключает косметические правила generic на страницах сайта `example.com` и всех его поддоменах.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$ghide`.

:::

#### **`specifichide`** {#specifichide-modifier}

Disables all specific element hiding and CSS rules, but not general ones. Has an opposite effect to [`$generichide`](#generichide-modifier).

**Примеры**

- `@@||example.org^$specifichide` отключает `example.org##.banner`, но не `##.banner`.

:::note

You may use a shorter name (alias) instead of using the full modifier name: `$shide`.

:::

:::note

All cosmetic rules — not just specific ones — can be disabled by [`$elemhide` modifier](#elemhide-modifier).

:::

:::info Совместимость

Rules with `$specifichide` modifier are not supported by AdGuard for iOS, AdGuard for Safari, and AdGuard Content Blocker.

:::

### Расширенные возможности {#advanced-modifiers}

These modifiers are able to completely change the behavior of basic rules.

<!-- Please keep them sorted -->

| Модификатор \ Продукты                     |       [Приложения CoreLibs][cl-apps]        |       [AdGuard для Chromium][ext-chr]        |      [AdGuard для Chrome MV3][ext-mv3]       |        [AdGuard для Firefox][ext-ff]         | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------- |:-------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |                      ✅                      |                      ✅                       |     ✅ [*[1]](#all-modifier-limitations)      |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |                      ✅                      |                      ✅                       |  ✅ [*[2]](#badfilter-modifier-limitations)   |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |                      ✅                      |                      ✅                       |    ✅ [*[3]](#cookie-modifier-limitations)    |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$xmlprune](#xmlprune-modifier)             |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       | ✅ [*[4]](#permissions-modifier-limitations) |                      ✅                       |                      ✅                       | ✅ [*[4]](#permissions-modifier-limitations)  |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |                      ✅                      |                      ✅                       |   ✅ [*[5]](#redirect-modifier-limitations)   |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |                      ✅                      |                      ✅                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |                      ✅                      | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |                      ✅                      |                      ✅                       | ✅ [*[6]](#removeparam-modifier-limitations)  |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$urltransform](#urltransform-modifier)     |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$reason](#reason-modifier)                 |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [noop](#noop-modifier)                      |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "устарел")       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "устарел")           |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается
- 👎 — устарел; всё ещё поддерживается, но в будущем будет удалён

:::

#### **`$all`** {#all-modifier}

`$all` modifier is made of [all content-types modifiers](#content-type-modifiers) and [`$popup`](#popup-modifier). E.g. rule `||example.org^$all` is converting into rule:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

:::caution Ограничения

This modifier cannot be used as an exception with the `@@` mark.

:::

##### Ограничения модификатора `$all` {#all-modifier-limitations}

:::caution Limitations

Since `$popup` is a part if `$all`, the `$all` modifier is not supported by AdGuard for Chrome MV3 because of [`$popup` modifier limitations](#popup-modifier-limitations).

:::

:::info Совместимость

Rules with `$all` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$badfilter`** {#badfilter-modifier}

The rules with the `$badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `$badfilter` rule (without the `$badfilter` modifier).

**Примеры**

- `||example.com$badfilter` отключает `||example.com`
- `||example.com$image,badfilter` отключает `||example.com$image`
- `@@||example.com$badfilter` отключает `@@||example.com`
- `||example.com$domain=domain.com,badfilter` отключает `||example.com$domain=domain.com`

Rules with `$badfilter` modifier can disable other basic rules for specific domains if they fulfill the following conditions:

1. The rule has a `$domain` modifier
1. The rule does not have a negated domain `~` in `$domain` modifier value

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note that [wildcard-TLD logic](#wildcard-for-tld) works here as well.

**Примеры**

- `/some$domain=example.com|example.org|example.io` отключено для `example.com` правилом `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` и `/some$domain=example.io` полностью отключены правилом `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` полностью отключено правилом `/some$domain=example.*,badfilter`
- `/some$domain=example.*` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` НЕ отключено для `example.com` правилом `/some$domain=example.com|~example.org,badfilter`, поскольку значение модификатора `$domain` содержит отрицание домена

##### Ограничения модификатора `$badfilter` {#badfilter-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] a rule with the `$badfilter` modifier is applied in DNR only if it fully cancels the source rule. We cannot calculate it if it is only partially canceled. [Examples][badfilter-in-mv3].

:::

:::info Совместимость

Rules with `$badfilter` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$cookie`** {#cookie-modifier}

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes AdGuard suppress or modify the `Cookie` and `Set-Cookie` headers.

**Multiple rules matching a single request**

In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

**Syntax**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

where:

- **`name`** — опционально, строка или регулярное выражение для сопоставления с именем куки.
- **`seconds`** — количество секунд, на которое сместится истечение срока действия куки.
- **`strategy`** — строка для стратегии [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite), которая будет применена к куки.

For example,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:

- Установит дату истечения срока хранения на текущее время плюс `3600` секунд
- Позволяет куки использовать стратегию [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Escaping special characters**

If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` to escape each of them. For example, escaped comma looks like this: `\,`.

**Примеры**

- `||example.org^$cookie` блокирует **все** куки, установленные `example.org`; это эквивалентно установке `maxAge=0`
- `$cookie=__cfduid` блокирует куки CloudFlare везде
- `$cookie=/__utm[a-z]/` блокирует куки Google Analytics везде
- `||facebook.com^$third-party,cookie=c_user` не позволяет Facebook отслеживать вас, даже если вы вошли в систему

There are two methods to deactivate `$cookie` rules: the primary method involves using an exception marked with `@@` — `@@||example.org^$cookie`. The alternative method employs a `$urlblock` exception (also included under the `$document` exception alias — `$elemhide,jsinject,content,urlblock,extension`). Here's how it works:

- `@@||example.org^$cookie` разблокирует все куки-файлы, установленные `example.org`
- `@@||example.org^$urlblock` разблокирует все файлы куки, установленные `example.org`, и отключает блокировку всех запросов, отправленных с `example.org`
- `@@||example.org^$cookie=concept` разблокирует один куки-файл с именем `concept`
- `@@||example.org^$cookie=/^_ga_/` разблокирует все куки, соответствующие регулярному выражению

##### Ограничения модификатора `$cookie` {#cookie-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] we delete cookies in 2 ways: from `content-script` side (to which we have access) and from `onBeforeSendHeaders` listener. Since `onBeforeSendHeaders` and other listeners are no longer blocking, we are not able to delete them in all cases. You can check if a rule works with [this test](https://testcases.agrd.dev/Filters/cookie-rules/test-cookie-rules).

:::

:::caution Ограничения

`$cookie` rules support these types of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`, `strict-third-party`, and `strict-first-party`.

:::

:::info Совместимость

Rules with `$cookie` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$csp`** {#csp-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

:::

For the requests matching a `$csp` rule, we will strengthen response security policy by enhancing the content security policy, similar to the content security policy of the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Multiple rules matching a single request**

In case if multiple `$csp` rules match a single request, we will apply each of them.

**Syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section below.

**Примеры**

- `||example.org^$csp=frame-src 'none'` запрещает все фреймы на example.org и его поддоменах.
- `@@||example.org/page/*$csp=frame-src 'none'` отключает все правила с модификатором `$csp`, в точности соответствующим `frame-src 'none'` на всех страницах, подходящих под паттерн правила. Например, правило выше.
- `@@||example.org/page/*$csp` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` отключает инлайн-скрипты на всех страницах, подходящих под паттерн правила.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.

:::caution Ограничения

- Некоторые символы запрещены в значении `$csp`: `,`, `$`.
- Правила `$csp` поддерживают три типа модификаторов: `$domain`, `$important` и `$subdocument`.
- Правила с директивами `report-*` считаются некорректными.

:::

:::info Совместимость

Rules with `$csp` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and AdGuard for Safari.

:::

#### **`$hls`** {#hls-modifier}

`$hls` rules modify the response of a matching request. They are intended as a convenient way to remove segments from [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

The word "segment" in this document means either a "Media Segment" or a "playlist" as part of a "Master Playlist": `$hls` rules do not distinguish between a "Master Playlist" and a "Media Playlist".

:::

**Syntax**

- `||example.org^$hls=urlpattern` удаляет сегменты, URL которых соответствует паттерну `urlpattern`. Паттерн работает так же, как в базовых URL-правилах, однако символы `/`, `$` и `,` в составе `urlpattern` необходимо экранировать с помощью `\`.
- `||example.org^$hls=/regexp/options` удаляет сегменты, в которых URL-адрес или один из тегов (для определённых параметров, если они есть) соответствуют регулярному выражению `regexp`. Доступные значения `options`:
    - `t` — вместо URL-адреса сегмента проверять каждый тег сегмента на соответствие регулярному выражению. Сегмент с соответствующим тегом будет удалён;
    - `i` — сделать регулярное выражение нечувствительным к регистру символов.

The characters `/`, `$` and `,` must be escaped with `\` inside `regexp`.

**Исключения**

Basic URL exceptions shall not disable rules with the `$hls` modifier. They can be disabled as described below:

- `@@||example.org^$hls` отключает все правила `$hls` для ответов от URL-адресов, соответствующих `||example.org^ URL`.
- `@@||example.org^$hls=text` отключает все правила `$hls`, у которых значение модификатора `$hls` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

:::tip

`$hls` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::

:::note

When multiple `$hls` rules match the same request, their effect is cumulative.

:::

**Примеры**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` удаляет все сегменты с соответствующим URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` делает почти то же самое, но с помощью регулярного выражения вместо URL-паттерна.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` удаляет все сегменты с соответствующим тегом.

**Anatomy of an HLS playlist**

A quick summary of the [specification](https://datatracker.ietf.org/doc/html/rfc8216):

1. An HLS playlist is a collection of text lines
1. A line may be empty, a comment (starts with `#`), a tag (also starts with `#`, can only be recognized by name) or a URL
1. A URL line is called a "segment"
1. Tags may apply to a single segment, i.e. the first URL line after the tag, to all segments following the tag and until the tag with the same name, or to the whole playlist

Some points specific to the operation of `$hls` rules:

1. When a segment is removed, all of the tags that apply only to that segment are also removed
1. When there is a tag that applies to multiple segments, and all of those segments are removed, the tag is also removed
1. Since there is no way to recognize different kinds of tags by syntax, we recognize all of the tags specified by the RFC, plus some non-standard tags that we have seen in the field. Any lines starting with `#` and not recognized as a tag are passed through without modification, and are not matched against the rules
1. Tags will not be matched if they apply to the entire playlist, and `$hls` rules cannot be used to remove them, as these rule types are intended for segment removals. If you know what you are doing, you can use `$replace` rules to remove or rewrite just a single tag from the playlist

**An example of a transformation done by the rules:**

<details>
<summary>Original response</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXTINF,5
preroll.ts
#UPLYNK-SEGMENT:abc123,ad
#UPLYNK-KEY:aabb1122
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

<details>
<summary>Applied rules</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Modified response</summary>

```text
#EXTM3U
#EXT-X-TARGETDURATION:10
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```

</details>

:::caution Ограничения

- Правила с модификатором `$hls` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).
- Правила `$hls` совместимы только с модификаторами `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила `$hls` применимы только к HLS-плейлистам, т. е. к тексту в кодировке UTF-8, начинающемуся со строки `#EXTM3U`. Никакие другие ответы не будут модифицированы этими правилами.
- Правила с `$hls` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$hls` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$inline-script`** {#inline-script-modifier}

The `$inline-script` modifier is designed to block inline JavaScript embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline ads or potentially malicious scripts. The rule `||example.org^$inline-script` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

The `$inline-font` modifier is designed to block inline fonts embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline fonts that could be used for data collection and fingerprinting. The rule `||example.org^$inline-font` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

`$jsonprune` rules modify the response to a matching request by removing JSON items that match a modified [JSONPath](https://goessner.net/articles/JsonPath/) expression. They do not modify responses which are not valid JSON documents.

In AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Syntax**

- `||example.org^$jsonprune=expression` удаляет из ответа элементы, соответствующие изменённому JSONPath-выражению `expression`.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

The modified JSONPath syntax has the following differences from the original:

1. Script expressions are not supported
1. The supported filter expressions are:
    - `?(has <key>)` — true if the current object has the specified key
    - `?(key-eq <key> <value>)` — true if the current object has the specified key, and its value is equal to the specified value
    - `?(key-substr <key> <value>)` — true if the specified value is a substring of the value of the specified key of the current object
1. Whitespace outside of double- or single-quoted strings has no meaning
1. Both double- and single-quoted strings can be used
1. Expressions ending with `..` are not supported
1. Multiple array slices can be specified in square brackets

There are various online tools that make working with JSONPath expressions more convenient:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations have unique features/quirks and are subtly incompatible with each other.

**Исключения**

Basic URL exceptions shall not disable rules with the `$jsonprune` modifier. They can be disabled as described below:

- `@@||example.org^$jsonprune` отключает все правила `$jsonprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$jsonprune=text` отключает все правила `$jsonprune`, у которых значение модификатора `$jsonprune` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

`$jsonprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$jsonprune` rules match the same request, they are sorted in lexicographical order, the first rule is applied to the original response, and each of the remaining rules is applied to the result of applying the previous one.

:::

**Примеры**

- `||example.org^$jsonprune=\$..[one\, "two three"]` удаляет все вхождения ключей one и two three в любом месте JSON-документа.

<details>
<summary>Input</summary>

```json
{
    "one": 1,
    "two": {
        "two three": 23,
        "four five": 45
    }
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "two": {
        "four five": 45
    }
}
```

</details>

- `||example.org^$jsonprune=\$.a[?(has ad_origin)]` удаляет всех прямых потомков `a`, которые обладают свойством `ad_origin`.

<details>
<summary>Input</summary>

```json
{
    "a": [
        {
            "ad_origin": "https://example.org",
            "b": 42
        },
        {
            "b": 1234
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "a": [
        {
            "b": 1234
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` удаляет все элементы на уровне вложенности 3, обладающие свойством Some key, равным Some value.

<details>
<summary>Input</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Nested JSONPath expressions**

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.11 or later, JSONPath expressions may be used as keys in filter expressions.

- `||example.org^$jsonprune=\$.elems[?(has "\$.a.b.c")]` удаляет всех прямых потомков `elems`, которые обладают свойством, выбираемым JSONPath-выражением `$.a.b.c`.

<details>
<summary>Input</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
            "k": "v"
        },
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "elems": [
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` удаляет всех прямых потомков `elems`, которые обладают свойством, выбираемым выражением JSONPath `$.a.b.c` со значением, равным `"abc"`.

<details>
<summary>Input</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        },
        {
            "a": {"b": {"c": "abc"}}
        }
    ]
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        }
    ]
}
```

</details>

:::caution Ограничения

- Правила `$jsonprune` совместимы только с этими модификаторами: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила с `$jsonprune` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

`$xmlprune` rules modify the response to a matching request by removing XML items that match an [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/) expression. The expression must return a [node-set](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). `$xmlprune` rules do not modify responses which are not well-formed XML documents.

**Syntax**

- `||example.org^$xmlprune=expression` удаляет из ответа элементы, соответствующие XPath-выражению `expression`.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

**Исключения**

Basic URL exceptions shall not disable rules with the `$xmlprune` modifier. They can be disabled as described below:

- `@@||example.org^$xmlprune` отключает все правила `$xmlprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$xmlprune=text` отключает все правила `$xmlprune`, у которых значение модификатора `$xmlprune` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

`$xmlprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$xmlprune` rules match the same request, they are applied in lexicographical order.

:::

**Примеры**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` удаляет книги с нечётными номерами из книжного магазина.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>



<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>



<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>
```

</details>

- `||example.org^$xmlprune=/bookstore/book[year = 2003]` удаляет книги за 2003 год из книжного магазина.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>





</bookstore>
```

</details>

- `||example.org^$xmlprune=//*/@*` удаляет все атрибуты из всех элементов.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore location="cy">

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book>
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

:::caution Ограничения

- Правила `$xmlprune` совместимы только с этими модификаторами: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила с `$xmlprune` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

This is basically a Firewall-like rule allowing to fully block or unblock access to a specified remote address.

1. `$network` rules match **IP addresses only**! You cannot use them to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, hence there will be no further filtering at all.
4. If the IP part starts and ends with `/` character, it is treated as a regular expression.

We recommend to get acquainted with this [article](#regexp-support) for better understanding of regular expressions.

:::caution Ограничения

The `$network` modifier can only be used in rules together with the `$app` and `$important` modifiers, and not with any other modifiers.

:::

**Примеры**

- `174.129.166.49:3478^$network` блокирует доступ к `174.129.166.49:3478` (но не к `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` блокирует доступ к `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` блокирует доступ к `174.129.166.49:*`.
- `@@174.129.166.49$network` заставляет AdGuard направлять трафик в конечную точку. Никакие другие правила применяться не будут.
- `/.+:3[0-9]{4}/$network` блокирует доступ к диапазанону портов 30000–39999.
- `/8.8.8.(:?8|4)/$network` блокирует доступ к `8.8.8.8` и к `8.8.8.4`.

:::info Совместимость

Only AdGuard for Windows, Mac, and Android are technically capable of using rules with `$network` modifier.

:::

#### **`$permissions`** {#permissions-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have a basic understanding of the [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) security layer.

:::

For the requests matching a `$permissions` rule, AdGuard strengthens response's permissions policy by adding an additional permission policy equal to the `$permissions` modifier contents. `$permissions` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Syntax**

`$permissions` value syntax is identical to that of the `Permissions-Policy` header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) with the following exceptions:

1. A comma that separates multiple features **MUST** be escaped — see examples below.
2. A pipe character (`|`) can be used instead of a comma to separate features.

Available directives are listed in the [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives) article.

`$permissions` value can be empty in the case of exception rules — see examples below.

**Примеры**

- `||example.org^$permissions=autoplay=()` запрещает автовоспроизведение медиафайлов, запрашиваемых через интерфейс `HTMLMediaElement` на сайте `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` отключает все правила с модификатором `$permissions`, в точности соответствующим `autoplay=()` на всех страницах, подходящих под паттерн правила. Например, правило выше. Важно отметить, что правило исключения действует только в случае **точного совпадения значений**. Например, если вы хотите отключить правило `$permissions=a=()\,b=()`, вам нужно правило исключения `@@$permissions=a=()\,b=()`, а **не** `@@$permissions=b=()\,a=()` **или** `@@$permissions=b=()`, потому что `b=()\,a=()` или `b=()` не совпадает с `a=()\,b=()`.
- `@@||example.org/page/*$permissions` отключает все `$permissions`-правила на всех страницах, подходящих под паттерн правила.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` запрещает использование Storage Access API для запроса доступа к неразмеченным куки, а также использование устройств видеоввода на сайтах `example.org` и `example.com`.
- `$domain=example.org|example.com,permissions=storage-access=()|camera=()` делает то же самое — вместо экранированной запятой для разделения функций можно использовать `|`.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$permission`-правила на всех страницах, подходящих под паттерн правила.

:::note

`$permissions` rules only take effect for main frame and sub frame requests. This means they are applied when a page is loaded or when an iframe is loaded.

:::

:::note

If there are multiple `$permissions` rules that match the same request, multiple `Permissions-Policy` headers will be added to the response for each rule with their `$permissions` value. So if you have two rules: `||example.org^$permissions=autoplay=()` and `||example.org^$permissions=geolocation=()\,camera=()` that match the same request, the response will contain two `Permissions-Policy` headers: `autoplay=()` and `geolocation=()\,camera=()`.

:::

##### Ограничения модификатора `$permissions` {#permissions-modifier-limitations}

:::caution Limitations

Firefox ignores the `Permissions-Policy` header. For more information, see [this issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1694922).

:::

:::caution Ограничения

1. Characters forbidden in the `$permissions` value: `$`.
2. `$permissions` is compatible with a limited set of modifiers: `$domain`, `$important`, `$subdocument`, and [content-type modifiers](#content-type-modifiers).
3. `$permissions` rules that do not have any [content-type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

:::

:::info Совместимость

- Rules with the `$permissions` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.
- Pipe separator `|` instead of escaped comma is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.14 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard is able to redirect web requests to a local "resource".

**Syntax**

AdGuard uses the same filtering rule syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

##### Отключение правил `$redirect`

- `||example.org/script.js$script,redirect=noopjs` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopmp4-1s`.
- `@@||example.org^$redirect` отключит все правила `$redirect` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$redirect=nooptext` отключит все правила с `$redirect=nooptext` для любого запроса, который соответствует `||example.org^`.

More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Приоритеты правил `$redirect` {#redirect-rule-priorities}

`$redirect` rules have higher priority than regular basic blocking rules. This means that if there is a basic blocking rule, the `$redirect` rule will override it. Allowlist rules with `@@` mark have higher priority than `$redirect` rules. If a basic rule with the `$important` modifier and the `$redirect` rule matches the same URL, the latter is overridden unless it's also marked as `$important`.

<!-- Please do not replace `>` by `→` -->

**In short: `$important` > `@@` > `$redirect` > `basic rules`.**

Go to [rules priorities](#rule-priorities) for more details.

##### Ограничения модификатора `$redirect` {#redirect-modifier-limitations}

:::caution Limitations

In [AdGuard for Chrome MV3][ext-mv3] allowlist rules with `$redirect` are not supported.

:::

:::info Совместимость

- Rules with `$redirect` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], and [AdGuard for Safari][ext-saf] .
- `$redirect` в uBlock Origin поддерживает указание приоритета, например, `$redirect=noopjs:42`. AdGuard не поддерживает его и вместо этого просто отбрасывает приоритетный постфикс.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

Go to [rules priorities](#rule-priorities) for more details.

Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Примеры**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

:::info Совместимость

Rules with `$redirect-rule` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], [AdGuard for Safari][ext-saf], and [AdGuard for Chrome MV3][ext-mv3]. [The discussion about adding support for `$redirect-rule` rules in Chrome MV3 extensions](https://github.com/w3c/webextensions/issues/493) is currently open.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

These rules allow overriding of a page's [referrer policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). Responses to matching requests will have all of their `Referrer-Policy` headers replaced with a single header with the value equal to the matching rule's modifier value. If the response carries an HTML document with a `<meta name="referrer"...` tag, the `content` attribute of the tag will also be replaced with the modifier value.

An exception rule with a modifier value disables the blocking rule with the same modifier value. An exception rule without a modifier value disables all matched referrer-policy rules.

If a request matches multiple `$referrerpolicy` rules not disabled by exceptions, only one of them (it is not specified which one) is applied. `$referrerpolicy` rules without specified [content-type modifiers](#content-type-modifiers) apply to `$document` and `$subdocument` content types.

**Примеры**

- `||example.com^$referrerpolicy=unsafe-url` переопределяет политику referrer для `example.com` с `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` отключает предыдущее правило.
- `@@||example.com/abcd.html^$referrerpolicy` отключает все правила `$referrerpolicy` на `example.com/abcd.html`.

:::info Совместимость

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later.

:::

#### **`$removeheader`** {#removeheader-modifier}

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

**Syntax**

**Basic syntax**

- `||example.org^$removeheader=header-name` убирает заголовок **ответа** с названием `header-name`
- `||example.org^$removeheader=request:header-name` убирает заголовок **запроса** с названием `header-name`

`$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

- `@@||example.org^$removeheader` отменяет **все** правила `$removeheader` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$removeheader=header` отменяет все правила с `$removeheader=header` для любого запроса, соответствующего `||example.org^`.

`$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers will not do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

:::note

In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

:::

**Примеры**

- `||example.org^$removeheader=refresh` убирает заголовок `Refresh` из всех HTTP-ответов, возвращённых `example.org` и его поддоменами.
- `||example.org^$removeheader=request:x-client-data` убирает заголовок `X-Client-Data` из всех HTTP-запросов.
- Данный блок правил убирает заголовки `Refresh` и `Location` из всех HTTP-ответов, возвращённых `example.org`, кроме запросов к `example.org/path/*`, для которого заголовки не будут убраны:

    ```adblock
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

##### Ограничения модификатора `$removeheader` {#removeheader-modifier-limitations}

:::caution Limitations

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Инверсия и правила белого списка не поддерживаются.
- Группа похожих правил `$removeheader` будет объединена в одно декларативное правило. Например:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeheader=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeheader=P2Case1
    $xmlhttprequest,removeheader=p1case2
    $xmlhttprequest,removeheader=P2case2
    ```

    преобразуется в

    ```bash
    [
      {
        "id": 1,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case1",
                "operation": "remove"
            },
            {
                "header": "P2Case1",
                "operation": "remove"
            },
          ]
        },
        "condition": {
          "urlFilter": "||testcases.adguard.com",
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      },
      {
        "id": 2,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case2",
                "operation": "remove"
            },
            {
                "header": "P2case2",
                "operation": "remove"
            }
          ]
        },
        "condition": {
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      }
    ]
    ```

:::

:::caution Ограничения

This type of rules can only be used [**in trusted filters**](#trusted-filters).

1. In order to avoid compromising the security `$removeheader` cannot remove headers from the list below:
    - `access-control-allow-origin`
    - `access-control-allow-credentials`
    - `access-control-allow-headers`
    - `access-control-allow-methods`
    - `access-control-expose-headers`
    - `access-control-max-age`
    - `access-control-request-headers`
    - `access-control-request-method`
    - `origin`
    - `timing-allow-origin`
    - `allow`
    - `cross-origin-embedder-policy`
    - `cross-origin-opener-policy`
    - `cross-origin-resource-policy`
    - `content-security-policy`
    - `content-security-policy-report-only`
    - `expect-ct`
    - `feature-policy`
    - `origin-isolation`
    - `strict-transport-security`
    - `upgrade-insecure-requests`
    - `x-content-type-options`
    - `x-download-options`
    - `x-frame-options`
    - `x-permitted-cross-domain-policies`
    - `x-powered-by`
    - `x-xss-protection`
    - `public-key-pins`
    - `public-key-pins-report-only`
    - `sec-websocket-key`
    - `sec-websocket-extensions`
    - `sec-websocket-accept`
    - `sec-websocket-protocol`
    - `sec-websocket-version`
    - `p3p`
    - `sec-fetch-mode`
    - `sec-fetch-dest`
    - `sec-fetch-site`
    - `sec-fetch-user`
    - `referrer-policy`
    - `content-type`
    - `content-length`
    - `accept`
    - `accept-encoding`
    - `host`
    - `connection`
    - `transfer-encoding`
    - `upgrade`

1. `$removeheader` rules are only compatible with `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and [content-type modifiers](#content-type-modifiers) such as `$script` and `$stylesheet`. The rules which have any other modifiers are considered invalid and will be discarded.

:::

:::info Совместимость

Rules with `$removeheader` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Chrome, Firefox, and Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

:::

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and sometimes `POST` requests.

**Syntax**

**Basic syntax**

- `$removeparam=param` убирает параметр запроса с именем `param` из URL любого запроса. Например, запрос к `http://example.com/page?param=1&&another=2` будет преобразован в `http://example.com/page?another=2`.

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

- `$removeparam=/regexp/[options]` убирает из URL-адреса любого запроса все параметры, соответствующие заданному регулярному выражению `regexp`. В отличие от базового синтаксиса, это означает *«‎убрать параметры запроса, нормализованные к строке `name=value`, которая соответствует `регулярному выражению`»*. `[options]` — это список опций регулярного выражения. На данный момент поддерживается только вариант `i`, который делает совпадение нечувствительным к регистру.

**Escaping special characters**

Special characters should be URL-encoded in a rule to correctly match the URL text.

For example, to remove `?$param=true`, you should use the `$removeparam=%24param` rule.

:::note

Spaces and commas should also be URL-encoded, otherwise the rule won't match the URL. However, `.`, `-`, `_`, and `~` should be used as they are, since they are not marked as reserved characters in URL encoding.

:::

Remember to escape special characters like `.` in the regular expressions. Use the `\` character to do this. For example, an escaped dot should look like this: `\.`.

:::note

Regexp-type rules apply to both the name and value of the parameter. To minimize errors, it is safer to start each regexp with `/^`, unless you are specifically targeting parameter values.

:::

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

- `||example.org^$removeparam` удаляет все параметры запроса из URL-адресов, соответствующих правилу `||example.org^`.

**Inversion**

Use `~` to apply inversion:

- `$removeparam=~param` удаляет все параметры запроса, кроме `param`.
- `$removeparam=~/regexp/` удаляет все параметры запроса, которые не совпадают с заданным регулярным выражением `regexp`.

:::note

If `~` does not appear at the beginning of the rule, it is treated as a symbol in the text.

:::

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

- `@@||example.org^$removeparam` не даёт применять правила с `$removeparam` для URL, соответствующих `||example.org^`.
- `@@||example.org^$removeparam=param` не даёт применять правила с `$removeparam=param` для запросов к `||example.org^`.
- `@@||example.org^$removeparam=/regexp/` не даёт применять правила с `$removeparam=/regexp/` для запросов к `||example.org^`.

**Multiple rules matching a single request**

In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

**Примеры**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` will not be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will not be affected by the blocking rule.

- `$removeparam=utm_source` удаляет параметр `utm_source` из всех запросов.

- `$removeparam=/utm_.*/` удаляет все параметры `utm_*query` из URL любого запроса. Например, запрос `http://example.com/page?utm_source=test` будет трансформирован в `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` удаляет параметр `utm_source` со значением `campaign`. Не затрагивает другие параметры `utm_source`.

**Negating one `$removeparam` rule and replacing it with a different rule**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There is one exception: Google Click ID (gclid) will not be removed from requests to example.com.

**Negating `$removeparam` for all parameters**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to `example.org`.

`$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

##### Ограничения модификатора `$removeparam` {#removeparam-modifier-limitations}

:::caution Limitations

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Регулярные выражения, отрицание и правила белого списка не поддерживаются.
- Группа похожих правил `$removeparam` будет объединена в одно. Пример:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeparam=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=p2case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=P3Case1
    $xmlhttprequest,removeparam=p1case2
    ```

    преобразуется в

    ```bash
    [
    {
      "id": 1,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case1",
          "p2case1",
          "P3Case1"
          ]
        }
        }
      }
      },
      "condition": {
      "urlFilter": "||testcases.adguard.com",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    },
    {
      "id": 4,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case2"
          ]
        }
        }
      }
      },
      "condition": {
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    }
    ]
    ```

:::

:::caution Ограничения

1. Rules with the `$removeparam` modifier can only be used [**in trusted filters**](#trusted-filters).
1. `$removeparam` rules are compatible with [basic modifiers](#basic-rules-basic-modifiers), [content-type modifiers](#content-type-modifiers), and with the `$important` and `$app` modifiers. Rules with any other modifiers are considered invalid and will be discarded.
1. `$removeparam` rules without [content type modifiers](#content-type-modifiers) will only match requests where the content type is `document`.

:::

:::info Совместимость

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

- Правила с `$replace` применяются к любому текстовому ответу, но не применяются к binary (`media`, `image`, `object` и т. д.).
- Правила с `$replace` не применяются к ответам размером больше 10 МБ.
- Правила с `$replace` обладают более высоким приоритетом, чем другие базовые правила, **включая** правила исключения. Если запрос соответствует двум различным правилам, одно из которых имеет модификатор `$replace`, применится именно это правило.
- Правила исключений уровня document с модификаторами `$content` или `$document` отменяют срабатывание правил `$replace`, даже если запрос им соответствует.
- Прочие правила исключений уровня document (с модификаторами `$generichide`, `$elemhide` или `$jsinject`) применяются вместе с правилами `$replace`. Это означает, что вы можете изменять содержимое страницы при помощи правила `$replace` и отключить косметические правила там же.

`$replace` value can be empty in the case of exception rules. See examples section for further information.

**Multiple rules matching a single request**

In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — регулярное выражение.
- **`replacement`** — строка, которая будет использована для замены строки в соответствии с `regexp`.
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, `s` — режим одной строки.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Примеры**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:

- `regexp` (регулярное выражение) — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `replacement` (замена) — `\$1<\/VAST>` где `$` экранируется;
- `modifiers` (флаги регулярных выражений) — `i` для поиска без учёта регистра.

You can see how this rule works here: http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Disabling `$replace` rules**

- `@@||example.org^$replace` отключит все правила `$replace`, соответствующие `||example.org^`.
- `@@||example.org^$document` или `@@||example.org^$content` отключит все правила `$replace`, **исходящие** со страниц домена `example.org`, **включая саму эту страницу**.

:::caution Ограничения

- Правила с модификатором `$replace` могут использоваться [**только в доверенных фильтрах**](#trusted-filters).
- Правила с `$replace` не применяются к ответам размером больше 10 МБ. Для Браузерного расширения AdGuard это ограничение действует начиная с версии 5.2.

:::

:::info Совместимость

Rules with `$replace` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

:::

#### **`$urltransform`** {#urltransform-modifier}

The `$urltransform` rules allow you to modify the request URL by replacing text matched by a regular expression.

**Features**

- Правила `$urltransform` обычно применяются только к частям URL-адреса, относящимся к пути и запросу, одно исключение см. ниже.
- `$urltransform` не будет применяться, если исходный URL-адрес заблокирован другими правилами.
- `$urltransform` будет применяться перед правилами `$removeparam`.

The `$urltransform` value can be empty for exception rules.

**Multiple rules matching a single request**

If multiple `$urltransform` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

`$urltransform` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — регулярное выражение.
- **`replacement`** — строка, которая будет использована для замены строки в соответствии с `regexp`.
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, `s` — режим одной строки.

In the `$urltransform` value, two characters must be escaped: the comma `,` and the dollar sign `$`. Use the backslash character `\` for this. For example, an escaped comma looks like this: `\,`.

**Changing the origin**

:::info Совместимость

This section only applies to AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.17 or later.

:::

As stated above, normally `$urltransform` rules are only allowed to change the path and query parts of the URL. However, if the rule's `regexp` begins with the string `^http`, then the full URL is searched and can be modified by the rule. Such a rule will not be applied if the URL transformation can not be achieved via an HTTP redirect (for example, if the request's method is `POST`).

**Примеры**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

There are three parts in this rule:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2`, где `$` экранируется;
- `modifiers` (флаги регулярных выражений) — `i` для поиска без учёта регистра.

**Multiple `$urltransform` rules**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Re-matching rules after transforming the URL**

After applying all matching `$urltransform` rules, the transformed request will be matched against all other rules:

E.g., with the following rules:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

the request to `https://example.com/firstpath` will be blocked.

**Disabling `$urltransform` rules**

- `@@||example.org^$urltransform` отключит все правила с `$urltransform`, где есть `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` отключит правило с `$urltransform=/Z/Y/` для любого запроса, соответствующего `||example.org^`.

`$urltransform` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$urltransform=/X/Y/` for requests to **example.com**, but `@@||example.com^$urlblock` will.

**The rule example for cleaning affiliate links**

Many websites use tracking URLs to monitor clicks before redirecting to the actual destination. These URLs contain marketing parameters and analytics tokens that can be removed to improve privacy.

Below is an example of how to obtain the clean destination link to bypass tracking websites and go directly to the destination.

In our example:

 1. The initial URL (with click tracking): `https://www.aff.example.com/visit?url=https%3A%2F%2Fwww.somestore.com%2F%26referrer%3Dhttps%3A%2F%2Fwww.aff.example.com%2F%26ref%3Dref-123`
 1. Tracking URL after decoding special characters: `https://www.aff.example.com/visit?url=https://www.somestore.com/`
 1. The website you want to visit: `https://www.somestore.com`

To clean the URL, we first need to decode special characters (like `%3A` → `:`, `%2F` → `/`, etc.) and extract the real URL from the tracking parameters. We will use the `$urltransform` modifier to do this. The following 4 rules replace URL-encoded symbols with their real characters:

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3A/:/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%2F/\//` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3F/?/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3D/=/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%26/&/`

After that, we need to write the rule that will block the tracking website and redirect you directly to the target address (somestore.com):

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com.*url=([^&]*).*/\$1/`

Tracking links will now be automatically cleaned up, allowing direct navigation to the destination website without tracking.

:::caution Ограничения

Rules with the `$urltransform` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$reason`** {#reason-modifier}

The `$reason` modifier allows you to add a custom explanation message that will be displayed on the blocking page when a request is blocked by this rule. This modifier only works with the `$document` content-type modifier.

**Character limitations and escaping requirements:**

- There is no maximum length limit for the reason text
- All characters are allowed in the reason text
- Special characters (such as quotes, commas, and backslashes) must be properly escaped using the backslash (`\`)

**Predefined localizable tokens:**

Instead of custom text, you can use predefined tokens that will be automatically localized:

- `malicious` — for malicious content
- `tracker` — for tracking content
- `disreputable` — for disreputable content

**Примеры**

```adblock
||example.com^$document,reason="Tracker"
||example.com^$document,reason="Malicious site blocked by security filter"
||ads.example.com^$document,reason="This site contains tracking scripts"
||malware.example.com^$document,reason="Site blocked: \"Known malware distributor\""
||tracking.example.com^$document,reason=disreputable
||analytics.example.com^$document,reason=tracker
```

:::info Совместимость

AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with CoreLibs v1.20 or later support rules with the `$reason` modifier. AdGuard Content Blocker does not support these rules.

:::

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of arbitrary length and can appear in a rule as often as needed.

**Примеры**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Совместимость

Rules with `noop` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$empty` (устаревший)** {#empty-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$empty` are still supported and being converted into `$redirect=nooptext` now but the support shall be removed in the future.

:::

Usually, blocked requests look like a server error to browser. If you use `$empty` modifier, AdGuard will emulate a blank response from the server with`200 OK` status.

**Примеры**

- `||example.org^$empty` возвращает пустой ответ для всех запросов к домену `example.org` и всех его поддоменов.

:::info Совместимость

Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$mp4` (устаревший)** {#mp4-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are still supported and being converted into `$redirect=noopmp4-1s,media` now but the support shall be removed in the future.

:::

As a response to blocked request AdGuard returns a short video placeholder.

**Примеры**

- `||example.com/videos/$mp4` блокирует загрузку видео с адресов `||example.com/videos/*` и заменяет ответ на видео-заглушку.

:::info Совместимость

Rules with `$mp4` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

### Приоритеты правил {#rule-priorities}

Each rule has its own priority, which is necessary when several rules match the request and the filtering engine needs to select one of them. Priority is measured by a positive integer.

:::note Collisions

When two rules with the same priority match the same request, the filter engine implementation determines which one is chosen.

:::

:::info

The concept of rule priorities becomes increasingly important in light of Manifest V3, as the existing rules need to be converted to declarativeNetRequest rules.

:::

#### Расчёт приоритетов

To calculate priority, we've categorized modifiers into different groups. These groups are ranked based on their priority, from lowest to highest. A modifier that significantly narrows the scope of a rule adds more weight to its total priority. Conversely, if a rule applies to a broader range of requests, its priority decreases.

It's worth noting that there are cases where a single-parameter modifier has a higher priority than multi-parameter ones. For instance, in the case of `$domain=example.com|example.org`, a rule that includes two domains has a slightly broader effective area than a rule with one specified domain, therefore its priority is lower.

The base priority of any rule is 1. If the calculated priority is a floating-point number, it will be **rounded up** to the smallest integer greater than or equal to the calculated priority.

:::info Совместимость

- The concept of priority has been introduced in [TSUrlFilter][] v2.1.0 and [CoreLibs][] v1.13. До этого в AdGuard не было специального алгоритма вычисления приоритетов, и обработка конфликтов могла отличаться в зависимости от продукта и версии AdGuard.
- AdGuard для iOS, Safari и AdGuard Content Blocker зависят от реализации браузера и не могут следовать указанным здесь правилам.

:::

:::note

Modifier aliases (`1p`, `3p`, etc.) are not included in these categories, however, they are utilized within the engine to compute the rule priority.

:::

#### Базовые модификаторы, наличие каждого добавляет 1 к приоритету {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) с исключаемыми приложениями с использованием `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$domain`](#domain-modifier) с исключаемыми доменами с использованием `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) с исключаемыми методами с использованием `~`,
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- ограниченные модификаторы [сontent-type](#content-type-modifiers) с `~`.

When dealing with a negated domain, app, method, or content-type, we add **1 point** for the existence of the modifier itself, regardless of the quantity of negated domains or content-types. This is because the rule's scope is already infinitely broad. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Определённые модификаторы content-type, методы, заголовки, $all, $popup, специальные исключения {#priority-category-2}

All valid content types:

<!-- Please keep them sorted -->

- [`$document`](#document-modifier),
- [`$font`](#font-modifier),
- [`$image`](#image-modifier),
- [`$media`](#media-modifier),
- [`$object`](#object-modifier),
- [`$other`](#other-modifier),
- [`$ping`](#ping-modifier),
- [`$script`](#script-modifier),
- [`$stylesheet`](#stylesheet-modifier),
- [`$subdocument`](#subdocument-modifier),
- [`$websocket`](#websocket-modifier),
- [`$xmlhttprequest`](#xmlhttprequest-modifier);

This also includes rules that implicitly add all content types:

- [`$all`](#all-modifier);

Or rules that implicitly add the modifier `$document`:

- [`$popup`](#popup-modifier);

Or some specific exceptions that implicitly add `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Or allowed methods via [`$method`](#method-modifier).

Or rules with [`$header`](#header-modifier).

The presence of any content-type modifiers adds `(50 + 50 / N)`, where `N` is the number of modifiers present, for example: `||example.com^$image,script` will add `50 + 50 / 2 = 50 + 25 = 75` to the total weight of the rule.

The `$all` also belongs to this category, because it implicitly adds all content-type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

The `$popup` also belongs to this category, because it implicitly adds the modifier `$document`. Similarly, specific exceptions add `$document,subdocument`.

If there is a `$method` modifier in the rule with allowed methods it adds `(50 + 50 / N)`, where `N` is the number of methods allowed, for example: `||example.com^$method=GET|POST|PUT` will add `50 + 50 / 3 = 50 + 16.6 = 67` to the total weight of the rule.

If there is a `$header` modifier in the rule, it adds `50`.

#### `$domain` или `$app` с разрешёнными доменами или приложениями {#priority-category-3}

Specified domains through `$domain` or specified applications through `$app` add `100 + 100 / N`, where `N` is the number of modifier values for example: `||example.com^$domain=example.com|example.org|example.net` will add `100 + 100 / 3 = 134.3 = 135` or `||example.com^$app=org.example.app1|org.example.app2` will add `100 + 100 / 2 = 151` or `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` will add `100 + 100/1` ($domain part) and `100 + 100/2` ($app part), totaling `350`.

Modifier values that are regexps or tld will be interpreted as normal entries of the form `example.com` and counted one by one, for example: `||example.com^$domain=example.*` will add `100 + 100 / 1 = 200` or `||example.com^$domain=example.*|adguard.*` will add `100 + 100 / 2 = 150`.

#### Правила `$redirect` {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Each of which adds `10^3` to rule priority.

#### Особые исключения {#priority-category-4}

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Each of which adds `10^4` to the priority.

As well as exception with [`$document modifier`](#document-modifier): because it's an alias for `$elemhide,content,jsinject,urlblock,extension`. It will add `10^4` for each modifier from [the top list](#priority-category-4), `10^4 * 5` in total.

In addition, each of these exceptions implicitly adds the two allowed content-type modifiers `$document,subdocument`.

#### Правила белого списка {#priority-category-5}

Modifier `@@` adds `10^5` to rule priority.

#### Правила `$important` {#priority-category-7}

Modifier [`$important`](#important-modifier) adds `10^6` to rule priority.

#### Правила, для которых нет веса приоритета {#priority-category-extra}

[Other modifiers](#advanced-capabilities), which are supposed to perform additional post- or pre-processing of requests, do not add anything to the rule priority.

:::note

The [`$replace`](#replace-modifier) modifier takes precedence over all blocking rules of categories 1–3, as well as exception rules from categories 3–5, **except** [`$content`](#content-modifier), because an exception with the `$content` modifier overrides all `$replace` rules.

:::

#### Примеры

1. `||example.com^`

    Weight of the rule without modifiers: `1`.

1. `||example.com^$match-case`

    Rule weight: base weight + weight of the modifier from [category 1](#priority-category-1): `1 + 1 = 2`.

1. `||example.org^$removeparam=p`

    Rule weight: base weight + 0, since $removeparam [is not involved](#priority-category-extra) in the priority calculation: `1 + 0 = 1`.

1. `||example.org^$document,redirect=nooptext`

    Rule weight: base weight + allowed content type, [category 3](#priority-category-3) + $redirect from [category 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

1. `@@||example.org^$removeparam=p,document`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + 0 because $removeparam [is not involved](#priority-category-extra) in the priority calculation + allowed content type, [category 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

1. `@@||example.com/ad/*$domain=example.org|example.net,important`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + important rule, [category 7](#priority-category-7) + allowed domains, [category 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

1. `@@||example.org^$document` without additional modifiers is an alias for `@@||example.com^$elemhide,content,jsinject,urlblock,extension`

    Rule weight: base weight + specific exceptions, [category 4](#priority-category-4) + two allowed content types (document and subdocument), [category 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Rule weight: base weight + allowed content type, [category 2](#priority-category-2) + allowed domain, [category 3](#priority-category-3) + denyallow, [category 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — alias to `||example.com^$document,subdocument,image,script,media,etc. + $popup`

    Rule weight: base weight + popup ([category 1](#priority-category-1)) + allowed content types ([category 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Другие правила {#non-basic-rules}

However, basic rules may not be enough to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

| Категории \ Продукты                         | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Chrome MV3][ext-mv3] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| --------------------------------------------- |:------------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [Скрытие элементов](#cosmetic-elemhide-rules) |               ✅                |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [CSS-правила](#cosmetic-css-rules)            |               ✅                |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Расширенный CSS](#extended-css-selectors)    |               ✅                |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Фильтрация HTML](#html-filtering-rules)      |               ✅                |                ❌                |                 ❌                 |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [JavaScript](#javascript-rules)               |               ✅                |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Скриптлеты](#scriptlets)                     |               ✅                |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ❌ — не поддерживается

:::

## Косметические правила {#cosmetic-rules}

:::info

Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Правила скрытия элементов {#cosmetic-elemhide-rules}

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

Element hiding rules may operate differently [depending on the platform](#cosmetic-rules-priority).

#### Syntax

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), определяет элементы, которые нужно скрыть.
- **`domains`** — доменное ограничение для правила.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

This rule will be also applied to all subdomains of `example.org` and `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

:::note

Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

:::

**Примеры**

- `example.com##div.textad` скроет элемент `div` с классом `textad` на домене `example.com` и всех его поддоменах.
- `example.com,example.org###adblock` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `~example.com##.textad` скроет элемент с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

**Ограничения**

Safari does not support both allowed and disallowed domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

**Исключения**

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:

```adblock
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:

```adblock
#@#.textad
```

The same can be achieved by adding this rule:

```adblock
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

### CSS-правила {#cosmetic-css-rules}

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With these rules you can basically add any CSS styles to the page.

**Syntax**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS-селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), определяющий элементы, к которым мы хотим применить стиль.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Строится по тем же правилам, что и в случае [правил скрытия элементов](#cosmetic-elemhide-rules).
- **`style`** — CSS-стиль, который мы хотим применить к выбранным элементам.

**Примеры**

```adblock
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

**Исключения**

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains. Exception rule syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:

```adblock
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Ограничения

Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

:::

:::info Совместимость

CSS rules are not supported by AdGuard Content Blocker.

CSS rules may operate differently [depending on the platform](#cosmetic-rules-priority).

:::

:::info Adblock Plus compatibility

In AdGuard products that use **CoreLibs version 1.18 or later**, you can also use element hiding rules to inject a `remove: true` declaration:

```adblock
example.org##body { remove: true; }
```

This usage is discouraged in favor of using [CSS rules](#cosmetic-css-rules) and is only supported for compatibility with filter lists written for Adblock Plus.

Element hiding exceptions (`#@#`) are matched by the selector part only, ignoring the declarations block part. For example, the above rule can be disabled by any of the following exception rules:

```adblock
example.org#@#body
example.org#@#body { remove: true; }
example.org#@#body{remove:true;}
```

:::

### Расширенные CSS-селекторы {#extended-css-selectors}

- [Ограничения](#extended-css-limitations)
- [Псевдокласс `:has()`](#extended-css-has)
- [Псевдокласс `:contains()`](#extended-css-contains)
- [Псевдокласс `:matches-css()`](#extended-css-matches-css)
- [Псевдокласс `:matches-attr()`](#extended-css-matches-attr)
- [Псевдокласс `:matches-property()`](#extended-css-property)
- [Псевдокласс `:xpath()`](#extended-css-xpath)
- [Псевдокласс `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Псевдокласс `:upward()`](#extended-css-upward)
- [Псевдокласс `:remove()` и псевдосвойство `remove`](#remove-pseudos)
- [Псевдокласс `:is()`](#extended-css-is)
- [Псевдокласс `:not()`](#extended-css-not)
- [Псевдокласс `:if-not()` (удалён)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

**Application area**

Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

:::info Совместимость

Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

:::

**Syntax**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

- `#?#` — для скрытия элемента, `#@?#` — для исключений
- `#$?#` — для CSS-правил, `#@$?#` — для исключений

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Примеры**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — это правило блокирует все `div` элементы, содержащие дочерний узел, который имеет связь с атрибутами `[target="_blank"][rel="nofollow"]`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — это правило устанавливает стиль `display: none!important` для всех элементов `h3`, которые содержат слово `cookies`. При этом правило будет работать только для домена `example.com` и всех его поддоменов.
- `example.net#?#.banner:matches-css(width: 360px)` — это правило блокирует все элементы `.banner`, которые содержат стиль `width: 360px`. При этом правило будет работать только для домена `example.net` и всех его поддоменов.
- `example.net#@?#.banner:matches-css(width: 360px)` — это правило отключает действие предыдущего правила.

You can apply standard CSS selectors using the ExtendedCss library by using the rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

:::note

Some pseudo-classes do not require selector before it. Still adding the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)`, but the second one is more obvious.

Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

:::

#### Ограничения ExtendedCss {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Псевдокласс `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

:::note

Rules with the `:has()` pseudo-class must use the [native implementation of `:has()`][native-has] if they use the `##` rule marker and if it is possible, i.e., there are no other extended CSS selectors inside. If it is not supported by the product (or by the browser in case of AdGuard Browser Extension), ExtendedCss implementation will be used automatically as a fallback, even for rules with the `##` marker.

AdGuard products support the native implementation of `:has()`:

- AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux **support** it with [CoreLibs][] v1.12 or later.
- AdGuard for iOS and AdGuard for Safari **support** it with [SafariConverterLib](#safari-converter-lib) v2.0.39 and [Safari browser v16.4][safari-16.4] or later.
- AdGuard Browser Extension **supports** it in v5.3 or later:
    - **Manifest V3** (Chromium-based): always uses native `:has()` by default.
    - **Manifest V2**: Detects native `:has()` support using `CSS.supports()` and falls back to ExtendedCss if the browser doesn’t support it natively.
- All other AdGuard products **do not support** it.

To force the ExtendedCss implementation of `:has()` to be used (regardless of native support), use the `#?#` or `#$?#` rule markers explicitly, e.g., `example.com#?#p:has(> a)` or `example.com#$?#div:has(> span) { display: none !important; }`.

And since the `:has()` pseudo-class cannot be nested within another `:has()` in native implementation, e.g. `div:has(p:has(a))`, it is always treated as extended in AdGuard Browser Extension.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Removal notice

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Syntax**

```text
[target]:has(selector)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `subject` — обязателен. Стандартный или расширенный CSS-селектор

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### Ограничения `:has()` {#extended-css-has-limitations}

Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- запретить `:has()` внутри псевдоселекторов, принимающих только составные селекторы;
- запретить `:has()` после обычных псевдоэлементов.

Native `:has()` pseudo-class does not allow `:has()`, `:is()`, `:where()` inside `:has()` argument to avoid increasing the `:has()` invalidation complexity ([case 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). But ExtendedCss did not have such limitation earlier and filter lists already contain such rules, so we have not added this limitation to ExtendedCss and allow to use `:has()` inside `:has()` as it was possible before. To use it, just force ExtendedCss usage by setting `#?#`/`#$?#` rule marker.

Native implementation does not allow any usage of `:scope` inside the `:has()` argument ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Still, there are some such rules in filter lists: `div:has(:scope a)` which we continue to support by simply converting them to `div:has(> a)`, as it used to be done previously.

**Примеры**

`div:has(.banner)` selects all `div` elements which **include** an element with the `banner` class:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span class="banner">inner element</span>
</div>
```

`div:has(> .banner)` selects all `div` elements which **include** an `banner` class element as a *direct child* of `div`:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <p class="banner">child element</p>
</div>
```

`div:has(+ .banner)` selects all `div` elements **preceding** `banner` class element which *immediately follows* the `div` and both are children of the same parent:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<p class="banner">adjacent sibling</p>
<span>Not selected</span>
```

`div:has(~ .banner)` selects all `div` elements **preceding** `banner` class element which *follows* the `div` but *not necessarily immediately* and both are children of the same parent:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<span>Not selected</span>
<p class="banner">general sibling</p>
```

`div:has(span, .banner)` selects all `div` elements which **include both** `span` element and `banner` class element:

```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span>child span</span>
  <p class="banner">child .banner</p>
</div>
```

:::danger Old syntax

[Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.

:::

#### Псевдокласс `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

:::note

The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntax**

```text
[target]:contains(match)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `match` — требуется, строка или регулярное выражение для соответствия элементу `textContent`. Также поддерживаются флаги регулярных выражений.

**Примеры**

For such DOM:

```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

the element `div#match` can be selected by any of these extended selectors:

```adblock
! plain text
div:contains(banner)

! regular expression
div:contains(/as .*banner/)

! regular expression with flags
div:contains(/it .*banner/gi)
```

:::note

Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

:::

:::danger Old syntax

[Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.

:::

#### Псевдокласс `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntax**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `pseudo-element` — необязательный, допустимый стандартный псевдоэлемент, например, `before`, `after`, `first-line` и т. д.
- `property` — требуется, название CSS-свойства, которое будет проверено у элемента
- `pattern` — требуется, шаблон значений, который использует то же простое сопоставление с подстановочными знаками, что и в основных правилах фильтрации URL-адресов, или регулярное выражение. При таком типе сопоставления AdGuard не учитывает регистр. В случае с регулярными выражениями шаблон будет выглядеть так: `/regexp/`.

**Special characters escaping and unescaping**

For **non-regexp** patterns `(`,`)`,`[`,`]` must be **unescaped**, e.g. `:matches-css(background-image:url(data:*))`.

For **regexp** patterns `\` should be **escaped**, e.g. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

**Примеры**

For such DOM:

```html
<!-- HTML code -->
<style type="text/css">
    #matched::before {
        content: "Block me"
    }
</style>
<div id="matched"></div>
<div id="not-matched"></div>
```

the `div` elements with pseudo-element `::before` and with specified `content` property can be selected by any of these extended selectors:

```adblock
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

:::caution Ограничения

Regexp patterns **do not support** flags.

:::

:::info Совместимость

Obsolete pseudo-classes `:matches-css-before()` and `:matches-css-after()` are no longer recommended but still are supported for better compatibility.

:::

:::danger Old syntax

[Backward compatible syntax for `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) is supported but **not recommended**.

:::

#### Псевдокласс `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows selecting an element by its attributes, especially if they are randomized.

**Syntax**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени атрибута
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения атрибута

**Escaping special characters**

For **regexp** patterns `"` and `\` should be **escaped**, e.g. `div:matches-attr(class=/[\\w]{5}/)`.

**Примеры**

`div:matches-attr("ad-link")` selects the element `div#target1`:

```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` selects the element `div#target2`:

```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` selects the element `div#target3`:

```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` selects the element `#target4`:

```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```

:::caution Ограничения

Regexp patterns **do not support** flags.

:::

#### Псевдокласс `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows selecting an element by matching its properties.

**Syntax**

```text
[target]:matches-property("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени свойства элемента
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения свойства элемента

**Escaping special characters**

For **regexp** patterns `"` and `\` must be escaped, e.g. `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Regexp patterns are supported in `name` for any property in chain, e.g. `prop./^unit[\\d]{4}$/.type`.

:::

**Примеры**

An element with such properties:

```javascript
divProperties = {
  id: 1,
  check: {
    track: true,
    unit_2random1: true,
  },
  memoizedProps: {
    key: null,
    tag: 12,
    _owner: {
      effectTag: 1,
      src: 'ad.com',
    },
  },
};
```

can be selected by any of these extended selectors:

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip For filter maintainers

To check properties of a specific element, do the following:

1. Inspect the page element or select it in `Elements` tab of browser DevTools
1. Run `console.dir($0)` in `Console` tab

:::

:::caution Ограничения

Regexp patterns **do not support** flags.

:::

#### Псевдокласс `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows selecting an element by evaluating an XPath expression.

**Syntax**

```text
[target]:xpath(expression)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор
- `expression` — требуется, допустимое XPath выражение

##### Ограничения `:xpath()` {#extended-css-xpath-limitations}

`target` can be omitted so it is optional. For any other pseudo-class that would mean "apply to *all* DOM nodes", but in case of `:xpath()` it just means "apply to the *whole* document", and such applying slows elements selecting significantly. That's why rules like `#?#:xpath(expression)` are limited to looking inside the `body` tag. For example, rule `#?#:xpath(//div[@data-st-area=\'Advert\'])` is parsed as `#?#body:xpath(//div[@data-st-area=\'Advert\'])`.

Extended selectors with defined `target` as *any* selector — `*:xpath(expression)` — can still be used but it is not recommended, so `target` should be specified instead.

Works properly only at the end of selector, except for [pseudo-class :remove()](#remove-pseudos).

**Примеры**

`:xpath(//*[@class="banner"])` selects the element `div#target1`:

```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` selects the element `div#target2`:

```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```

#### Псевдокласс `:nth-ancestor()` {#extended-css-nth-ancestor}

The `:nth-ancestor()` pseudo-class allows to lookup the *nth* ancestor relative to the previously selected element.

```text
subject:nth-ancestor(n)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

**Syntax**

```text
subject:nth-ancestor(n)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

##### Ограничения `:nth-ancestor()` {#extended-css-nth-ancestor-limitations}

The `:nth-ancestor()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Примеры**

For such DOM:

```html
<!-- HTML code -->
<div id="target1">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.child:nth-ancestor(1)` selects the element `div#target1`, `div[class="inner"]:nth-ancestor(3)` selects the element `div#target2`.

#### Псевдокласс `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Syntax**

```text
subject:upward(ancestor)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
- `ancestor` — обязателен. Спецификация для предка элемента, выбранного `subject`, может быть задана как:
    - *число* >= 1 и < 256 для указания расстояния до нужного предка, то же, что и [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *стандартный CSS-селектор* для поиска ближайшего предка

##### Ограничения `:upward()` {#extended-css-upward-limitations}

The `:upward()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Примеры**

For such DOM:

```html
<!-- HTML code -->
<div id="target1" data="true">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.inner:upward(div[data])` selects the element `div#target1`, `.inner:upward(div[id])` selects the element `div#target2`, `.child:upward(1)` selects the element `div#target1`, `.inner:upward(3)` selects the element `div#target2`.

#### Псевдокласс `:remove()` и псевдосвойство `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

**Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**

```text
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор

##### Ограничения `:remove()` и `remove` {#extended-css-remove-limitations}

The `:remove()` pseudo-class is limited to work properly only at the end of selector.

For applying the `:remove()` pseudo-class to any element, the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` should be used. Otherwise such extended selector may be considered as invalid, e.g. `.banner > :remove()` is not valid for removing any child element of `banner` class element, so it should look like `.banner > *:remove()`.

If the `:remove()` pseudo-class or the `remove` pseudo-property is used, all style properties are ignored except for the [`debug` pseudo-property](#selectors-debug-mode).

**Примеры**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Rules with the `remove` pseudo-property must use `#$?#` marker: `$` for CSS-style rule syntax, `?` for ExtendedCss syntax.

:::

#### Псевдокласс `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntax**

```text
[target]:is(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — [*щадящий список*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) стандартных или расширенных селекторов. Для расширенных селекторов поддерживаются только составные селекторы, а не сложные.

##### Ограничения `:is()` {#extended-css-is-limitations}

Rules with the `:is()` pseudo-class must use the [native implementation of `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

If the `:is()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:is(.locked)` works fine.

[Complex selectors](https://www.w3.org/TR/selectors-4/#complex) with extended pseudo-classes are not supported as `selectors` argument for `:is()` pseudo-class, only [compound ones](https://www.w3.org/TR/selectors-4/#compound) are allowed. Check examples below for more details.

**Примеры**

`#container *:is(.inner, .footer)` selects only the element `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <div data="true">
    <div>
      <div id="target1" class="inner"></div>
    </div>
  </div>
</div>
```

Due to limitations `:is(*:not([class]) > .banner)'` does not work but `:is(*:not([class]):has(> .banner))` can be used instead of it to select the element `div#target2`:

```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```

#### Псевдокласс `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as argument. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntax**

```text
[target]:not(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — список стандартных или расширенных селекторов

##### Ограничения `:not()` {#extended-css-not-limitations}

Rules with the `:not()` pseudo-class must use the [native implementation of `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:not()`, use `#?#`/`#$?#` marker explicitly.

If the `:not()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:not()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:not(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:not(...)` and `#?#*:not(...)` are parsed as `#?#html *:not(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:not(.locked)` works fine.

The `:not()` is considered as a standard CSS pseudo-class inside the argument of the [`:upward()` pseudo-class](#extended-css-upward) because `:upward()` supports only standard selectors.

"Up-looking" pseudo-classes which are [`:nth-ancestor()`](#extended-css-nth-ancestor) and [`:upward()`](#extended-css-upward) are not supported inside `selectors` argument for `:not()` pseudo-class.

**Примеры**

`#container > *:not(h2, .text)` selects only the element `div#target1`:

```html
<!-- HTML code -->
<div id="container">
  <h2>Header</h2>
  <div id="target1"></div>
  <span class="text">text</span>
</div>
```

#### Псевдокласс `:if-not()` (удалён) {#extended-css-if-not}

:::danger Removal notice

The `:if-not()` pseudo-class is removed and is no longer supported. Rules with it are considered as invalid.

:::

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.

### Приоритет косметических правил {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#cosmetic-elemhide-rules) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser Extension**, the so-called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## Правила фильтрации HTML {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

:::info Совместимость

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard for Linux, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

The syntax with an optional `value` in the attributes is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with CoreLibs v1.18 or later. It is also supported by AdGuard Browser Extension v5.2 or later. For the other products and previous versions `value` must **always** be specified. Otherwise, the rule will be treated as incorrect and ignored.

:::

### Syntax

Syntax supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard for Linux with CoreLibs, and AdGuard Browser Extension prior to v5.2:

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0[ = value0] "]" "[" name1[ = value2] "]" ... "[" nameN[ = valueN] "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — имя элемента в нижнем регистре, например, `div` или `script`.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Те же принципы, что и в [синтаксисе правил скрытия элементов](#cosmetic-elemhide-rules).
- **`attributes`** — список атрибутов, ограничивающих выбор элементов. `name` — обязателен, имя атрибута; `value` — необязательный (может быть не указан), подстрока, которая содержится в значении атрибута.
- **`pseudoName`** — имя псевдокласса.
- **`pseudoArgs`** — аргументы псевдокласса, записанного в виде функции.
- **`combinator`** — оператор, который работает аналогично [CSS-комбинатору дочерних элементов](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): то есть `selector` справа от `combinator` будет относиться только к элементу, прямой родительский элемент которого соответствует `selector` слева от `combinator`.

Syntax supported by AdGuard Browser Extension v5.3 or later:

```text
         rule = [domains] "$$" selector
      domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the element(s) to be removed from the HTML code before the page is loaded.
- **`domains`** — доменное ограничение для правила. Те же принципы, что и в [синтаксисе правил скрытия элементов](#cosmetic-elemhide-rules).

:::caution Limitations

The following limitations apply to AdGuard Browser Extension v5.3 and later:

- Pseudo-elements (e.g., `::before`, `::after`) are not supported, as they are not applicable in the context of HTML filtering.

:::

### Примеры

**HTML code:**

```html
<script data-src="/banner.js"></script>
```

**Rule:**

```adblock
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

If the value of the attribute is omitted in the rule, then the element will be removed if it contains the specified attribute, regardless of its value. This is also the way to remove the elements whose attributes don't have any value at all.

```html
<div some_attribute="some_value"></div>
<div some_attribute></div>
```

```adblock
example.org$$div[some_attribute]
```

This rule removes all `div` elements with the attribute `some_attribute` on `example.org` and all its subdomains. So, the both `div` elements from the example above will be removed.

### Special attributes {#html-filtering-rules--special-attributes}

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

#### `tag-content`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

You must use `""` to escape `"`, for instance: `$$script[tag-content="alert(""this is ad"")"]`

For example, take a look at this HTML code:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:

```adblock
$$script[tag-content="banner"]
```

:::caution Limitations

The `tag-content` special attribute must not appear in a selector to the left of a `>` combinator.

This limitation does not apply to AdGuard Browser Extension v5.3 or later.

:::

#### `wildcard`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

You must use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It checks if the element code contains the two consecutive substrings `banner` and `text`.

:::caution Limitations

The `wildcard` special attribute must not appear in a selector to the left of a `>` combinator.

This limitation does not apply to AdGuard Browser Extension v5.3 or later.

:::

#### `max-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value, a rule does not apply to the element.

**Default value**

If this parameter is not specified, the `max-length` is considered to be 8192.

Например:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

:::caution Limitations

The `max-length` special attribute must not appear in a selector to the left of a `>` combinator.

This limitation does not apply to AdGuard Browser Extension v5.3 or later.

:::

#### `min-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value, a rule does not apply to the element.

Например:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

:::caution Limitations

The `min-length` special attribute must not appear in a selector to the left of a `>` combinator.

This limitation does not apply to AdGuard Browser Extension v5.3 or later.

:::

### Pseudo-classes {#html-filtering-rules--pseudo-classes}

#### `:contains()` {#html-filtering-rules--contains}

##### Syntax

```text
:contains(unquoted text)
```

или

```text
:contains(/reg(ular )?ex(pression)?/)
```

:::note Compatibility

`:-abp-contains()` and `:has-text()` are synonyms for `:contains()`.

:::

:::info Совместимость

The `:contains()` pseudo-class is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard for Linux with [CoreLibs][] v1.13 or later, and AdGuard Browser Extension v5.3 or later.

:::

Requires that the inner HTML of the element contains the specified text or matches the specified regular expression.

:::caution Limitations

A `:contains()` pseudo-class must not appear in a selector to the left of a `>` combinator.

This limitation does not apply to AdGuard Browser Extension v5.3 or later.

:::

### Исключения

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains. The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:

```adblock
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## Правила JavaScript {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any JavaScript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```text
rule = [domains] "#%#" script
```

- **`domains`** — доменное ограничение для правила. Строится по тем же правилам, что и в случае [правил скрытия элементов](#cosmetic-elemhide-rules).
- **`script`** — произвольный JavaScript-код **в одну строку**.

**Примеры**

- `example.org#%#window.__gaq = undefined;` выполняет код `window.__gaq = undefined;` на всех страницах сайта `example.org` и всех его поддоменах.

**Исключения**

Similar to hiding rules, there is a special type of rules that disable the selected JavaScript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:

```adblock
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Ограничения

JavaScript rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Совместимость

JavaScript rules are not supported by AdGuard Content Blocker.

:::

## Правила скриптлета {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

:::note

AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

:::

**Blocking rules syntax**

```text
[domains]#%#//scriptlet(name[, arguments])
```

- `domains` — опционально, список доменов, к которым должно применяться правило;
- `scriptletName` — обязательно, имя скриптлета из библиотеки AdGuard Scriptlets;
- `arguments` — опционально, список аргументов в формате `string` (другие типы аргументов не поддерживаются).

**Примеры**

1. Apply the `abort-on-property-read` scriptlet on all pages of `example.org` and its subdomains, and pass it an `alert` argument:

    ```adblock
    example.org#%#//scriptlet('abort-on-property-read', 'alert')
    ```

1. Remove the `branding` class from all `div[class^="inner"]` elements on all pages of `example.org` and its subdomains:

    ```adblock
    example.org#%#//scriptlet('remove-class', 'branding', 'div[class^="inner"]')
    ```

**Exception rules syntax**

Exception rules can disable some scriptlets on particular domains. The syntax for exception scriptlet rules is similar to normal scriptlet rules but uses `#@%#` instead of `#%#`:

```text
[domains]#@%#//scriptlet([name[, arguments]])
```

- `domains` — опционально, список доменов, к которым должно применяться правило;
- `имя` — опционально, имя скриптлета, который следует исключить; если не задано, все скриптлеты не будут применены;
- `arguments` — опционально, список аргументов `string` для соответствия одному и тому же правилу блокировки и его отключения.

**Примеры**

1. Disable specific scriptlet rule so that only `abort-on-property-read` is applied only on `example.org` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read", "alert")
    ```

1. Disable all `abort-on-property-read` scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read")
    ```

1. Disable all scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet()
    ```

1. Apply `set-constant` and `set-cookie` to any web page, but due to special scriptlet exception rule only the `set-constant` scriptlet will be applied on `example.org` and its subdomains:

    ```adblock
    #%#//scriptlet('set-constant', 'adList', 'emptyArr')
    #%#//scriptlet('set-cookie', 'accepted', 'true')
    example.org#@%#//scriptlet('set-cookie')
    ```

1. Apply `adjust-setInterval` to any web page and `set-local-storage-item` on `example.com` and its subdomains, but there are also multiple scriptlet exception rules, so no scriptlet rules will be applied on `example.com` and its subdomains:

    ```adblock
    #%#//scriptlet('adjust-setInterval', 'count', '*', '0.001')
    example.com#%#//scriptlet('set-local-storage-item', 'ALLOW_COOKIES', 'false')
    example.com#@%#//scriptlet()
    ```

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Совместимость

Scriptlet rules are not supported by AdGuard Content Blocker.

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Previous versions only support exception rules that disable specific scriptlets.

:::

### Доверенные скриптлеты {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

:::note

Trusted scriptlets are not compatible with other ad blockers except AdGuard.

:::

:::caution Ограничения

Trusted scriptlets rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Trusted scriptlets rules are not supported by AdGuard Content Blocker.

:::

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Модификаторы для небазовых правил {#non-basic-rules-modifiers}

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax**

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — набор модификаторов, описанных ниже.
- **`rule text`** — правило, которое нужно модифицировать.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Модификатор \ Продукты               | [Приложения CoreLibs][cl-apps] |        [AdGuard для Chromium][ext-chr]        |        [AdGuard для Chrome MV3][ext-mv3]         |         [AdGuard для Firefox][ext-ff]         | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------------:|:---------------------------------------------:|:------------------------------------------------:|:---------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |               ✅                |                       ❌                       |                        ❌                         |                       ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |               ✅                |                       ✅                       | ✅ [*[1]](#non-basic-domain-modifier-limitations) |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |               ✅                |                       ✅                       |                        ❌                         |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |               ✅                | ✅ [*[3]](#non-basic-url-modifier-limitations) |  ✅ [*[3]](#non-basic-url-modifier-limitations)   | ✅ [*[3]](#non-basic-url-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Примеры**

- `[$app=org.example.app]example.com##.textad` скрывает `div` с классом `textad` на `example.com` и всех поддоменах в запросах, отправленных из приложения Android `org.example.app`.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` скрывает `div` с классом `textad` на `example.com` и всех поддоменах в запросах, отправленных из любого приложения, кроме `org.example.app1` и `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` применяет скриптлет `prevent-setInterval` только в браузере Safari на Mac.
- `[$app=org.example.app]#@#.textad` отключает все правила `##.textad` для всех доменов при использовании `org.example.app`.

:::info Совместимость

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Примеры**

- `[$domain=example.com]##.textad` скрывает элемент `div` с классом `textad` на домене `example.com` и всех его поддоменах.
- `[$domain=example.com|example.org]` скрывает элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `[$domain=~example.com]##.textad` скрывает `div`-элементы с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

There are 2 ways to specify domain restrictions for non-basic rules:

1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

### Небазовые ограничения модификатора `$domain` {#non-basic-domain-modifier-limitations}

:::caution Limitations

Since the non-basic `$domain` works the same as the basic one, it has the same [limitations](#domain-modifier-limitations).

:::

:::info Совместимость

Such rules with `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard Browser Extension for Chrome, Chrome MV3, Firefox, and Edge.

:::

### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntax**

```text
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

If `pattern` is not set for `$path`, rule will apply only on the main page of website.

`$path` modifier matches the query string as well.

`$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Примеры**

- `[$path=page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` или `/sub/page.html` или `/another_page.html`
- `[$path=/page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` или `/sub/page.html` любого домена, но не на `/another_page.html`
- `[$path=|/page.html]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/page.html?<query>` любого домена, но не на `/sub/page.html`
- `[$path=/page.html|]##.textad` скрывает `div` с классом `textad` на `/page.html` или `/sub/page.html` любого домена, но не на `/page.html?<query>`
- `[$path=/page*.html]example.com##.textad` скрывает `div` с классом `textad` на `/page1.html`, `/page2.html` или любом другом пути, соответствующем `/page<...>.html` сайта `example.com`
- `[$path]example.com##.textad` скрывает `div` с классом `textad` на главной странице `example.com`
- `[$domain=example.com,path=/page.html]##.textad` скрывает `div` с классом `textad` на `page.html` домена `example.com` и всех его поддоменах, но не на `another_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` скрывает `div` с классом `textad` как на `/sub1/page.html`, так и на `/sub2/page.html` любого домена (обратите внимание на [специальные экранированные символы](#non-basic-rules-modifiers-syntax))

#### `$path` modifier limitations {#non-basic-path-modifier-limitations}

:::caution Limitations

In AdGuard Browser Extension, the non-basic `$path` modifier is compatible with other non-basic modifiers only when it is placed last, e.g., `[$domain=/example.(com|org)/,path=/foo]##.ad`. Otherwise, it may not work as expected.

:::

:::info Совместимость

Rules with `$path` modifier are not supported by AdGuard Content Blocker.

:::

### **`$url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntax**

```text
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Примеры**

- `[$url=||example.com/content/*]##div.textad` скрывает `div` с классом `textad` в запросах, например, к `https://example.com/content/article.html` и `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` скрывает элемент с атрибутом `id` равным `adblock` в запросах к `example.org` и всем его поддоменам.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` скрывает `div`-элементы класса `textad` для всех доменов, соответствующих регулярному выражению `[a-z]+\.example\.com^`.

#### `$url` modifier limitations {#non-basic-url-modifier-limitations}

:::caution Limitations

In AdGuard Browser Extension, non-basic `$url` modifier is not compatible with domain-specific rules and other non-basic modifiers — [`$domain`](#non-basic-domain-modifier) and [`$path`](#non-basic-path-modifier). For example, the rule `[$url=/category/*]example.com###textad` will not be applied.

:::

:::info Совместимость

Rules with the `$url` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

## Информация для разработчиков фильтров

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Директивы препроцессора

We provide preprocessor directives that can be used by filter maintainers to improve compatibility with different ad blockers and provide:

- [включение файла](#include-directive)
- [условное применение правил по типу блокировщика рекламы](#conditions-directive)
- [указание блокировщика контента для правил, применяемых в Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Including a file {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```adblock
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

The files must originate from the same domain, but may be located in a different folder.

If included file is not found or unavailable, the whole filter update should fail.

Same-origin limitation should be disabled for local custom filters.

**Примеры**

Filter URL: `https://example.org/path/filter.txt`

```adblock
! Valid (same origin):
!#include https://example.org/path/includedfile.txt
!
! Valid (relative path):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Invalid (another origin):
!#include https://domain.com/path/includedfile.txt
```

#### Conditions {#conditions-directive}

Filter maintainers can use conditions to supply different rules depending on the ad blocker type. A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive. Conditions support all basic logical operators.

There are two possible scenarios:

1. When an ad blocker encounters an `!#if` directive and no `!#else` directive, it will compile the code between `!#if` and `!#endif` directives only if the specified condition is true.

1. If there is an `!#else` directive, the code between `!#if` and `!#else` will be compiled if the condition is true; otherwise, the code between `!#else` and `!#endif` will be compiled.

:::note

Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

:::

**Syntax**

```adblock
!#if (conditions)
rules_list
!#endif
```

или

```adblock
!#if (conditions)
true_conditions_rules_list
!#else
false_conditions_rules_list
!#endif
```

where:

- `!#if (условия)` — начало блока при выполнении условий
- `conditions` — точно так же, как и в случае с некоторыми популярными языками программирования, условия препроцессинга основаны на константах, объявляемых блокировщиками. Разработчики блокировщиков самостоятельно определяют, какие именно константы объявлять. Возможные значения:
    - `adguard` объявляется всегда; даёт разработчикам фильтров понять, что это один из продуктов AdGuard; должно быть достаточно в 95% случаев
    - специфичные для конкретных продуктов константы, которые нужны в редких случаях, когда правило должно работать (или не работать — тогда перед константой используйте `!`) только для конкретного продукта:
        - `adguard_app_windows` — AdGuard для Windows
        - `adguard_app_mac` — AdGuard для Mac
        - `adguard_app_cli` — AdGuard для Linux
        - `adguard_app_android` — AdGuard для Android
        - `adguard_app_ios` — AdGuard для iOS
        - `adguard_ext_safari` — AdGuard для Safari
        - `adguard_ext_chromium` — Браузерное расширение AdGuard для Chrome (и браузеров на основе Chrome, например, новый Microsoft Edge)
        - `adguard_ext_chromium_mv3` — [AdGuard for Chrome MV3][ext-mv3]
        - `adguard_ext_firefox` — Браузерное расширение AdGuard для Firefox
        - `adguard_ext_edge` — Браузерное расширение AdGuard для Edge Legacy
        - `adguard_ext_opera` — Браузерное расширение AdGuard для Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker для мобильных браузеров Samsung и Яндекс
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
        - `cap_html_filtering` — продукты, поддерживающие правила HTML-фильтрации: AdGuard для Windows, AdGuard для Mac, AdGuard для Android и AdGuard для Linux
- `!#else` — начало блока, когда условия ложны
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — списки правил
- `!#endif` — конец блока

**Примеры**

```adblock
! for all AdGuard products except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

```adblock
!#if (adguard && !adguard_ext_safari)
! for all AdGuard products except AdGuard for Safari
||example.org^$third-party
domain.com##div.ad
!#else
! for AdGuard for Safari only
||subdomain.example.org^$third-party
!#endif
```

:::info Совместимость

The `!#else` directive is supported by the [FiltersDownloader][gh-filters-downloader] v1.1.20 or later.

It is already supported for filter lists compiled by the [FiltersRegistry][], but it still may not be supported by AdGuard products when adding a filter list with `!#else` as a custom one. The following products will support it in the mentioned versions or later:

- AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13;
- Браузерное расширение AdGuard 4.2.208;
- AdGuard 1.11.16 для Safari.

:::

#### Safari affinity {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Блокировка рекламы, Языковые
- AdGuard Privacy — Антитрекинг
- AdGuard Social — Виджеты социальных сетей, Раздражители
- AdGuard Security — Безопасность
- AdGuard Other — Другие
- AdGuard Custom — Собственные

User rules and allowlist are added to every content blocker.

:::caution

The main disadvantage of using multiple content blockers is that rules from different blockers are applied independently. Blocking rules are not affected by this, but unblocking rules may cause problems. If a blocking rule is in one content blocker and an exception is in another, the exception will not work. Filter maintainers use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

:::

**Syntax**

```adblock
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```

where:

- `!#safari_cb_affinity(content_blockers)` — начало блока
- `content_blockers` — список блокировщиков контента, разделённых запятой. Возможные значения:
    - `general` — блокировщик контента AdGuard General
    - `privacy` — блокировщик контента AdGuard Privacy
    - `social` — блокировщик контента AdGuard Social
    - `security` — блокировщик контента AdGuard Security
    - `other` — блокировщик контента AdGuard Other
    - `custom` — блокировщик контента AdGuard Custom
    - `all` — специальное ключевое слово, которое означает, что правила должны быть включены во **все** блокировщики контента
- `rules_list` — список правил
- `!#safari_cb_affinity` — конец блока

**Примеры**

```adblock
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! to allowlist basic rule from AdGuard Tracking Protection filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Подсказки

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry][]).

**Syntax**

```adblock
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

Multiple hints can be applied.

#### `NOT_OPTIMIZED` hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```text
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```

where:

- **filter** — идентификатор фильтра
- **percent** — ожидаемый процент оптимизации `~= (количество правил в оптимизированном фильтре) / (количество правил в исходном фильтре) * 100`
- **minPercent** — нижняя граница значения `percent`
- **maxPercent** — верхняя граница значения `percent`
- **strict** — если включены `percent < minPercent` или `percent > maxPercent` и строгий режим, то компиляция фильтра должна завершиться неудачно, в противном случае должны использоваться оригинальные правила

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- полная: https://filters.adtidy.org/extension/chromium/filters/2.txt
- оптимизированная: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### `PLATFORM` and `NOT_PLATFORM` hints

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

- `windows` — AdGuard для Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard для Mac — [https://filters.adtidy.org/mac_v3/filters/2.txt](https://filters.adtidy.org/mac_v3/filters/2.txt)

- `cli` — AdGuard для Linux — [https://filters.adtidy.org/cli/filters/2.txt](https://filters.adtidy.org/cli/filters/2.txt)

- `android` — AdGuard для Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard для iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Браузерное расширение AdGuard для Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — Браузерное расширение AdGuard для Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

- `ext_ff` — Браузерное расширение AdGuard для Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — Браузерное расширение AdGuard для Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — Браузерное расширение AdGuard для Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard для Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

- `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Примеры**

This rule will be available only in AdGuard for Windows, Mac, Android:

```adblock
!+ PLATFORM(windows,mac,android)
||example.org^
```

Except for AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS, this rule is available on all platforms:

```adblock
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

#### `NOT_VALIDATE`

This hint is used to skip validation of the rule. It is useful for rules for which support has not yet been added to the filters compiler, or for rules that are incorrectly discarded.

**If you want to add a rule that should not be validated, use the `NOT_VALIDATE` hint:**

```adblock
!+ NOT_VALIDATE
||example.org^$newmodifier
```

## Отладка правил фильтрации

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Журнал фильтрации

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- В **AdGuard для Windows** вы найдёте его во вкладке настроек *Блокировка рекламы* или через меню трея
- В **AdGuard для Mac** он располагается в разделе *Настройки → Дополнительно → Журнал фильтрации*
- В **AdGuard для Android** его можно найти в разделе *Статистика → Недавняя активность*. *Доступ к недавней активности* также можно получить из *Помощника*
- В **Браузерном расширении AdGuard** он находится во вкладке настроек *Дополнительно*, а также доступен по клику правой кнопкой мыши по иконке расширения. Только веб-браузеры на основе Chromium и Firefox отображают применённые **правила скрытия элементов** (включая CSS, ExtCSS) и **JS-правила и скриптлеты** в своих Журналах фильтрации

:::note

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Режим отладки селекторов {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — текст разобранного селектора, может отличаться от входного
- `timings` — список узлов DOM, соответствующих селектору
    - `appliesCount` — общее количество раз, когда на странице был применён селектор
    - `appliesTimings` — время, которое ушло на применение селектора на странице, для каждого из случаев применения этого селектора (в миллисекундах)
    - `meanTiming` — среднее время, ушедшее на применение селектора на странице
    - `standardDeviation` — стандартное отклонение
    - `timingsSum` — общее время, ушедшее на все применения селектора на текущей странице

**Printed only for remove pseudos:**

- `removed` — флаг, сигнализирующий об удалении элементов

**Printed if elements are not removed:**

- `matchedElements` — список узлов DOM, соответствующих селектору
- `styleApplied` — объявление обработанного стиля правила, связанного с селектором

**Примеры**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```adblock
#$?#.banner { display: none; debug: global; }
```

**Testing extended selectors without AdGuard**

ExtendedCss can be executed on any page without using any AdGuard product. In order to do that you should copy and execute the following code in a browser console:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Alternatively, install the [ExtendedCssDebugger userscript](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Now you can now use the `ExtendedCss` from global scope, and run its method [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) as `Document.querySelectorAll()`.

**Примеры**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// array of HTMLElements matched the `selector` is to be returned
ExtendedCss.query(selector);
```

### Отладка скриптлетов {#debug-scriptlets}

If you are using AdGuard Browser Extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

The following scriptlets are especially developed for debug purposes:

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

The following scriptlets also may be used for debug purposes:

- [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#json-prune)
- [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-fetch)
- [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
- [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
- [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) с указанным параметром `replacement`
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Легенда таблиц совместимости {#compatibility-tables-legend}

### Краткие обозначения продуктов {#what-product}

1. `CoreLibs apps` — [AdGuard for Windows](/adguard-for-windows/features/home-screen), [AdGuard for Mac](/adguard-for-mac/features/main), [AdGuard for Android](/adguard-for-android/features/protection/ad-blocking), and [AdGuard for Linux](/adguard-for-linux)
1. `AdGuard for Chromium` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Chrome and other Chromium-based browsers such as Microsoft Edge and Opera
1. `AdGuard for Chrome MV3` — [AdGuard Browser Extension for Chrome MV3](/adguard-browser-extension/mv3-version)
1. `AdGuard for Firefox` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Firefox
1. `AdGuard for iOS` — [AdGuard for iOS](/adguard-for-ios/features/safari-protection) and AdGuard Pro for iOS (for mobile Safari browser)
1. `AdGuard for Safari` — [AdGuard for desktop Safari browser](/adguard-for-safari/features/general)
1. `AdGuard Content Blocker` — [Content Blocker](/adguard-content-blocker/overview) for Android mobile browsers: Samsung Internet and Yandex Browser

### Краткие обозначения совместимости {#what-compatibility}

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- 🧩 — может быть уже реализован в nightly- или бета-версиях, но пока не поддерживается в релизных версиях
- ⏳ — планируется к реализации, но пока недоступен ни в одном продукте
- ❌ — не поддерживается
- 👎 — устарел; всё ещё поддерживается, но в будущем будет удалён
- 🚫 — удалён и больше не поддерживается

:::

[popup-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#popup

[Sec-Fetch-Dest header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[badfilter-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#badfilter

[native-has]: https://developer.mozilla.org/docs/Web/CSS/:has
[safari-16.4]: https://www.webkit.org/blog/13966/webkit-features-in-safari-16-4/

[cl-apps]: #what-product "AdGuard для Windows, Mac, Linux и Android"
[ext-chr]: #what-product "Браузерное расширение AdGuard для Chrome и других браузеров на основе Chromium"
[ext-mv3]: #what-product "Браузерное расширение AdGuard MV3 для Chrome"
[ext-mv3]: #what-product "AdGuard Browser Extension for Chrome MV3"
[ext-ff]: #what-product "Браузерное расширение AdGuard для Firefox"
[ios-app]: #what-product "AdGuard для iOS и AdGuard Pro для iOS"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ext-saf]: #what-product "AdGuard для Safari"
[ext-saf]: #what-product "AdGuard для Safari"
[ext-saf]: #what-product "AdGuard for Safari"
[and-cb]: #what-product "AdGuard Content Blocker для браузеров Samsung Internet and Яндекс на Android"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
[CoreLibs]: https://adguard.com/en/blog/introducing-corelibs.html
[TSUrlFilter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter#tsurlfilter
[TSWebExtension]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tswebextension#tswebextension
