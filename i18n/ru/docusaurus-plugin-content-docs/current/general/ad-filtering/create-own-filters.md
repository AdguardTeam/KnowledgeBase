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

By default, such rules do not work for document requests. This means that the `||example.org^` rule will block a request made to `example.org` when you try to navigate to this domain from another website, but if you type `example.org` into the address bar and try to navigate to it, the website will open. To block the document request, you will need to use a rule with the [`$document` modifier](#document-modifier): `||example.org^$document`.

### Блокировка конкретного адреса

![Блокировка конкретного адреса](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Это правило блокирует:**

- `http://example.org/`

**Это правило не блокирует:**

- `https://example.org/banner/img`

### Модификаторы базовых правил {#basic-rule-modifiers}

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

Косметические правила применяются с использованием CSS — специального языка программирования, который понимает каждый браузер. В основном, он добавляет новый стиль CSS на сайт, цель которого — скрыть определённые элементы. Вы можете узнать больше о CSS в целом [здесь](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

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
- Базовые правила скрытия элементов [](#cosmetic-elemhide-rules) без расширенной поддержки CSS.

Из-за указанных выше ограничений AdGuard Content Blocker не будет упоминаться в примечаниях по совместимости.

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

- **`pattern`** — маска адреса. URL каждого запроса сопоставляется с этой маской. In the template, you can also use the special characters described [below](#basic-rules-special-characters). Note that AdGuard truncates URLs to a length of 4096 characters in order to speed up matching and avoid issues with ridiculously long URLs.
- **`@@`** — маркер, который используется для обозначения правил-исключений. С такого маркера должны начинаться правила, отключающие фильтрацию для запроса.
- **`modifiers`** — параметры, используемые для «уточнения»‎ базового правила. Некоторые параметры ограничивают область действия правила, а некоторые могут полностью изменить принцип его работы.

### Специальные символы {#basic-rules-special-characters}

- **`*`** — wildcard-символ. Используется, чтобы обозначить любой набор символов. Это может быть как пустая строка, так и строка любой длины.
- **`||`** — указание на применение правила к указанному домену и его поддоменам. Этот специальный символ позволяет не указывать конкретный протокол и поддомен в маске адреса. То есть `||` соответствует сразу `http://*.`, `https://*.`, `ws://*.` и `wss://*.`.
- **`^`** — указатель для разделительного символа. Разделителем может быть любой символ кроме буквы, цифры и следующих символов: `_` `-` `.` `%`. Например, в адресе `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3` жирным выделены разделительные символы. Конец адреса также принимается в качестве разделителя.
- **`|`** — указатель на начало или конец адреса. Значение зависит от расположения символов в маске. Например, правило `swf|` соответствует `http://example.com/annoyingflash.swf`, но не `http://example.com/swf/index.html`. `|http://example.org` соответствует `http://example.org`, но не `http://domain.com?url=http://example.org`.

:::note

`|`, `||`, `^` can only be used with rules that have a URL pattern. For example, `||example.com##.advert` is incorrect and will be ignored by the blocker.

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

- `||example.org^$third-party` — this rule blocks third-party requests to `example.org` and its subdomains.

- `@@||example.com$document ` — наиболее общее правило-исключение. Такое правило полностью отключает фильтрацию на домене `example.com` и всех его поддоменах. Существует ряд параметров, которые также можно использовать в правилах-исключениях. Более подробно о правилах-исключениях и параметрах, которые могут в таких правилах использоваться, написано [ниже](#exception-modifiers).

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

| Модификатор \ Продукты               | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] |     [AdGuard для iOS][ios-app]      |    [AdGuard для Safari][ext-saf]    | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------------:|:-------------------------------:|:-----------------------------:|:-----------------------------------:|:-----------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                 |               ✅                |                ❌                |               ❌               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$denyallow](#denyallow-modifier)     |               ✅                |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$domain](#domain-modifier)           |               ✅                |                ✅                |               ✅               | ✅ [*](#domain-modifier-limitations) | ✅ [*](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)           |               ✅                |                ⏳                |               ⏳               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$important](#important-modifier)     |               ✅                |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$match-case](#match-case-modifier)   |               ✅                |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ✅                 |
| [$method](#method-modifier)           |               ✅                |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$popup](#popup-modifier)             |              ✅ *               |                ✅                |               ✅               |                 ✅ *                 |                 ✅ *                 |                 ❌                 |
| [$third-party](#third-party-modifier) |               ✅                |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ✅                 |
| [$to](#to-modifier)                   |               ✅                |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
<!-- - 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions -->
- ⏳ — функция, которая реализована или планируется к реализации, но пока недоступна ни в одном продукте
- ❌ — не поддерживается

:::

#### **`$app`** {#app-modifier}

Этот модификатор ограничивает действие правила до конкретного приложения (или списка приложений). Это может быть не слишком важно для Windows и Mac, но это очень важно для мобильных устройств, где некоторые правила фильтрации должны быть связаны с конкретным приложением.

- Android — используйте имя пакета приложения, например, `org.example.app`.
- Windows — используйте имя процесса, например, `chrome.exe`.
- Mac — используйте bundle ID или имя процесса, например, `com.google.Chrome`.

На Mac вы можете найти bundle ID или имя процесса интересующего вас приложения в деталях соответствующих запросов в Журнале фильтрации.

**Примеры**

- `||baddomain.com^$app=org.example.app` — правило для блокировки запросов, которые соответствуют указанной маске и отправлены Android-приложением `org.example.app`.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — аналогичное правило, но оно работает как для приложения `org.example.app1`, так и для `org.example.app2`.

Если вы хотите, чтобы правило не применялось к определённым приложениям, начните название приложения с символа `~`.

- `||baddomain.com^$app=~org.example.app` — правило для блокировки запросов, соответствующих указанной маске и отправленных из любого приложения, кроме `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — аналогично, но в исключениях два приложения: `org.example.app1` и `org.example.app2`.

:::caution Ограничения

В модификаторе правила к приложениям нельзя добавлять подстановочный знак (*), например `$app=com.*.music`. Правила с таким модификатором считаются недействительными.

:::

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$app`.
- On Windows the process name is case-insensitive starting with AdGuard for Windows with [CoreLibs][] v1.12 or later.

:::

#### **`$denyallow`** {#denyallow-modifier}

Модификатор `$denyallow` позволяет избежать создания дополнительных правил, когда требуется отключить то или иное правило для определённых доменов. Модификатор `$denyallow` соответствует только целевым доменам, но не доменам реферера.

Добавление этого модификатора в правило равносильно исключению доменов при помощи паттерна правила либо при помощи добавления дополнительных правил-исключений. To add multiple domains to one rule, use the `|` character as a separator.

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
- Домены в значении модификатора не могут иметь отрицание (например, `$denyallow=~x.com`) или wildcard домена верхнего уровня `$denyallow=x.*`.

Правила, нарушающие эти ограничения, считаются недействительными.

:::

:::info Совместимость

Правила с модификатором `$denyallow` не поддерживаются в AdGuard для iOS, Safari и AdGuard Content Blocker.

:::

#### **`$domain`** {#domain-modifier}

`$domain` ограничивает область действия правила запросами, сделанными **с** указанных доменов и их поддоменов (как указано в HTTP-заголовке [Referer](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Referer)).

**Syntax**

Модификатор представляет собой список из одного или нескольких выражений, разделённых символом `|`, каждое из которых сопоставляется с доменом определённым образом в зависимости от его типа (см. ниже).

```text
domains = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_domain / any_tld_domain / regexp )
```

- **`Regular_domain`** — обычное доменное имя (`domain.com`). Соответствует указанному домену и его поддоменам. Сопоставляется лексикографически.
- **`any_tld_domain`** — доменное имя, оканчивающееся подстановочным знаком в качестве [публичного суффикса](https://publicsuffix.org/learn/), например, для `example.*` это `co.uk` в `example.co.uk`. Соответствует указанному домену и его поддоменам с любым публичным суффиксом. Сопоставляется лексикографически.
- **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

:::info

Правила с модификатором `$domain` в виде `regular_domain` или `any_tld_domain` поддерживаются всеми продуктами AdGuard.

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

В некоторых случаях модификатор `$domain` может соответствовать не только домену-рефереру, но и целевому домену. This happens when all the following conditions are met:

1. The request has the `document` content type
1. Шаблон правила не соответствует ни одному конкретному домену
1. Шаблон правила не содержит регулярных выражений
1. Модификатор `$domain` содержит только исключённые домены, например, `$domain=~example.org|~example.com`

Для сопоставления целевого домена должен выполняться следующий предикат:

```text
1 И ((2 И 3) ИЛИ 4)
```

То есть, если модификатор `$domain` содержит только исключённые домены, то правилу не нужно выполнять второе и третье условия, чтобы соответствовать целевому домену `$domain`.

Если какие-либо из условий выше не выполнены, но правило содержит модификатор [`$cookie`](#cookie-modifier) или [`$csp`](#csp-modifier), модификатор всё равно будет соответствовать целевому домену.

Если реферер соответствует правилу с `$domain`, которое явно исключает домен реферера, то правило не сработает, даже если целевой домен тоже ему соответствует. Это также касается правил с модификаторами [`$cookie`](#cookie-modifier) и [`$csp`](#csp-modifier).

**Примеры**

- `*$cookie,domain=example.org|example.com` заблокирует cookies для всех запросов от и к `example.org` и `example.com`.
- `*$document,domain=example.org|example.com` заблокирует все запросы от и к `example.org` и `example.com`.

В следующих примерах предполагается, что запросы отправляются от `http://example.org/page` (реферер), а целевой URL — `http://targetdomain.com/page`.

- `page$domain=example.org` сработает, так как соответствует рефереру.
- `page$domain=targetdomain.com` сработает, так как соответствует целевому домену и удовлетворяет всем требованиям, перечисленным выше.
- `||*page$domain=targetdomain.com` не сработает, так как шаблон `||*page` может указывать на конкретные домены, например, `example.page`.
- `||*page$domain=targetdomain.com,cookie` сработает, потому что правило содержит модификатор `$cookie`, несмотря на то, что шаблон `||*page` может соответствовать конкретным доменам.
- `/banner\d+/$domain=targetdomain.com` не сработает, поскольку правило содержит регулярное выражение.
- `page$domain=targetdomain.com|~example.org` не сработает, так как домен реферера явно исключён.

##### Ограничения модификатора `$domain` {#domain-modifier-limitations}

:::caution Ограничения

Safari не поддерживает одновременно разрешённые и запрещённые домены, поэтому правила вида `||baddomain.com^$domain=example.org|~foo.example.org` не работают в AdGuard для iOS и AdGuard для Safari.

:::

:::info Совместимость

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later.

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.12 or later the `$domain` modifier can be alternatively spelled as `$from`.

:::

#### **`$header`** {#header-modifier}

Модификатор `$header` позволяет сопоставлять HTTP-ответ, имеющий определённый заголовок, с определённым значением (опционально).

**Syntax**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

где:

- **`h_name`** (обязательно) — имя HTTP-заголовка. Сопоставляется без учёта регистра символов.
- **`h_value`** (опционально) — выражение для сопоставления значения HTTP-заголовка, может быть одним из:
    - **`string`** — последовательность символов. Лексикографически сопоставляется со значением заголовка;
    - **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

The modifier part, `":" h_value`, may be omitted. В этом случае модификатор сопоставляет только имя заголовка.

**Примеры**

- `||example.com^$header=set-cookie:foo` — блокирует запрос, ответ которого содержит заголовок `Set-Cookie` со значением `foo`.
- `||example.com^$header=set-cookie ` блокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` разблокирует запросы, ответы которых содержат заголовок `Set-Cookie` со значением `foo, bar$`.
- `@@||example.com^$header=set-cookie` разблокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.

:::info Совместимость

Rules with the `$header` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later.

:::

#### **`$important`** {#important-modifier}

The `$important` modifier applied to a rule increases its priority over rules without the identical modifier. Даже относительно базовых правил-исключений.

Перейдите [к приоритетам правил](#rule-priorities) для более подробной информации.

**Примеры**

```adblock
! блокирующее правило заблокирует все запросы, несмотря на правило-исключение
||example.org^$important
@@||example.org^
```

```adblock
! если правило-исключение тоже содержит модификатор `$important`, его приоритет будет выше, и запросы не будут заблокированы
||example.org^$important
@@||example.org^$important
```

#### **`$match-case`** {#match-case-modifier}

Этот модификатор определяет правило, которое применяется только к адресам с совпадением регистра символов. По умолчанию регистр символов не учитывается.

**Примеры**

- `*/BannerAd.gif$match-case `— такое правило будет блокировать `http://example.com/BannerAd.gif`, но не `http://example.com/bannerad.gif`.

:::info Совместимость

Rules with the `$match-case` are supported by AdGuard for iOS and AdGuard for Safari with SafariConverterLib v2.0.43 or later.

Все остальные продукты уже поддерживают этот модификатор.

:::

#### **`$method`** {#method-modifier}

Этот модификатор ограничивает область действия правила запросами, использующими указанный набор методов HTTP. Допускается инверсия (~). Методы должны быть указаны строчными буквами, но сопоставляются они без учёта регистра. Чтобы добавить несколько методов в одно правило, используйте в качестве разделителя вертикальную черту `|`.

**Примеры**

- `||evil.com^$method=get|head` блокирует только запросы GET и HEAD к `evil.com`.
- `||evil.com^$method=~post|~put` блокирует любые запросы к `evil.com`, кроме POST или PUT.
- `@@||evil.com$method=get` разблокирует только GET-запросы к `evil.com`.
- `@@||evil.com$method=~post` разблокирует любые запросы к `evil.com`, кроме POST.

:::caution Ограничения

Правила, где к одному методу применяется инверсия (~), а к другому нет, считаются недействительными. Так, например, правило `||evil.com^$method=get|~head` будет отклонено.

:::

:::info Совместимость

Rules with `$method` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.12 or later and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

:::

#### **`$popup`** {#popup-modifier}

AdGuard будет пытаться закрыть браузерную вкладку с любым адресом, подходящим под правило с этим модификатором. Обратите внимание, что закрыть можно не любую вкладку.

**Примеры**

- `||domain.com^$popup` — при попытке перехода на сайт `http://domain.com` с любой страницы в браузере, новая вкладка, в которой должен открыться указанный сайт, будет закрыта.

:::info Совместимость

- Модификатор `$popup` лучше всего работает в браузерном расширении AdGuard.
- В AdGuard для Safari и iOS `$popup`-правила просто заблокируют страницу.
- В AdGuard для Windows, Mac и Android модификатор `$popup` в некоторых случаях может не обнаружить всплывающее окно, и оно не будет заблокировано. Модификатор `$popup` применяет тип контента `document` со специальным флагом, который передаётся блокирующей странице. Блокирующая страница сама может провести некоторые проверки и закрыть окно, если это действительно всплывающее окно. В противном случае страница должна быть загружена. Его можно комбинировать с другими модификаторами типа request, такими как `$third-party` и `$important`.
- Правила с модификатором `$popup` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$third-party`** {#third-party-modifier}

Ограничение на сторонние или собственные запросы. Сторонним является запрос, отправленный с другого домена. Например, запрос к домену `example.org`, отправленный с домена `domain.com`, является сторонним.

:::note

Чтобы считаться таковым, сторонний запрос должен соответствовать одному из следующих условий:

1. Его реферер — это не поддомен целевого домена, или наоборот. Например, запрос к `subdomain.example.org`, отправленный с домена `example.org`, не является сторонним
1. Значение его заголовка `Sec-Fetch-Site` — `cross-site`

:::

**Примеры**

**`$third-party`:**

- `||domain.com^$third-party` — правило применяется на всех сайтах, кроме `domain.com` и его поддоменов. Пример стороннего запроса: `http://example.org/banner.jpg`.

Если указан модификатор `$~third-party`, то правило применяется только к запросам, которые не являются сторонними. То есть эти запросы отправлены с того же домена.

**`$~third-party`:**

- `||domain.com$~third-party` — this rule is applied exclusively to `domain.com`. Example of a non third-party request: `http://domain.com/icon.ico`.

:::note

Вы можете использовать более короткое название (псевдоним) вместо полного названия модификатора: `$3p`.

:::

#### **`$to`** {#to-modifier}

`$to` ограничивает область действия правила запросами, сделанными **на** указанные домены и их поддомены. To add multiple domains to one rule, use the `|` character as a separator.

**Примеры**

- `/ads$to=evil.com|evil.org` блокирует любые запросы к `evil.com` или `evil.org` и их поддоменам с путём, соответствующим `/ads`.
- `/ads$to=~not.evil.com|evil.com` блокирует любые запросы к `evil.com` и его поддоменам с путём, совпадающим с `/ads`, за исключением запросов к `not.evil.com` и его поддоменам.
- `/ads$to=~good.com|~good.org` блокирует любые запросы с путём, соответствующим `/ads`, за исключением запросов к `good.com` или `good.org` и их поддоменам.

:::caution Ограничения

[`$denyallow`](#denyallow-modifier) нельзя использовать вместе с `$to`. Его можно выразить инвертированным `$to`: `$denyallow=a.com|b.com` эквивалентно `$to=~a.com|~b.com`.

:::

:::info Совместимость

Rules with the `$to` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.12 or later and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

:::

### Модификаторы типа контента {#content-type-modifiers}

Существует целый набор модификаторов, которые ограничивают область применения правила только определённым типом контента. Эти модификаторы можно комбинировать, чтобы, например, распространить правило одновременно и на картинки, и на скрипты.

:::info Совместимость

Существует большая разница в том, как AdGuard определяет тип контента на разных платформах. В случае Браузерного расширения AdGuard, тип контента для каждого запроса предоставляется самим браузером. В случае AdGuard для Windows, Mac и Android для определения используется следующая методика: сначала мы пытаемся определить тип запроса по заголовку запроса `Sec-Fetch-Dest` или по расширению имени файла. Если запрос не заблокирован на этом этапе, то тип запроса уточняется с использованием заголовка `Content-Type` в начале ответа, полученного от сервера.

:::

**Примеры модификаторов типа контента**

- `||example.org^$image` — соответствует всем картинкам с домена `example.org`.
- `||example.org^$script,stylesheet` — соответствует всем скриптам и стилям с домена `example.org`.
- `||example.org^$~image,~script,~stylesheet` — соответствует всем запросам к домену `example.org`, кроме картинок, скриптов и стилей.

<!-- Please keep them sorted -->

| Модификатор \ Продукты                                      | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------------------------ |:------------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$document](#document-modifier)                              |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$font](#font-modifier)                                      |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$image](#image-modifier)                                    |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$media](#media-modifier)                                    |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$object](#object-modifier)                                  |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$other](#other-modifier)                                    |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$ping](#ping-modifier)                                      |              ✅ *               |                ✅                |               ✅               |             ❌              |               ❌               |                 ✅                 |
| [$script](#script-modifier)                                  |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$stylesheet](#stylesheet-modifier)                          |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$subdocument](#subdocument-modifier)                        |              ✅ *               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$websocket](#websocket-modifier)                            |               ✅                |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ✅                 |
| [$xmlhttprequest](#xmlhttprequest-modifier)                  |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$webrtc 🚫](#webrtc-modifier "удалён")                       |               ❌                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$object-subrequest 🚫](#object-subrequest-modifier "удалён") |               ❌                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается
- 🚫 — удалён и больше не поддерживается

:::

#### **`$document`** {#document-modifier}

Правило соответствует запросам основного документа страницы, т.е. HTML-документа, который загружается во вкладке браузера. Оно не подходит для iframe, для них существует модификатор [`$subdocument`](#subdocument-modifier).

По умолчанию AdGuard не блокирует запросы, которые загружаются во вкладке браузера (например, «обход основного фрейма»). Идея заключается в том, чтобы не препятствовать загрузке страниц, поскольку пользователь явно указал, что он хочет, чтобы эта страница была загружена. Однако, если использовать модификатор `$document`, то AdGuard не будет использовать эту логику и предотвратит загрузку страницы. Другими словами, заблокирует её.

Если этот модификатор используется в правиле-исключении (`@@`), то оно полностью отключает блокировку на соответствующих страницах. Это равносильно одновременному использованию модификаторов `$elemhide`, `$content`, `$urlblock`, `$jsinject` и `$extension`.

**Примеры**

- `@@||example.com^$document ` полностью отключает фильтрацию на всех страницах сайта `example.com` и всех его поддоменах.

- `||example.com^$document` блокирует запрос HTML-документа на `example.com` с помощью блокирующей страницы.
- `||example.com^$document,redirect=noopframe` перенаправляет запрос HTML-документа сайта `example.com` на пустой HTML-документ.
- `||example.com^$document,removeparam=test` removes `test` query parameter from HTML document request to `example.com`.
- `||example.com^$document,replace=/test1/test2/` replaces `test1` with `test2` in HTML document request to `example.com`.

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$doc`.

:::

#### **`$font`** {#font-modifier}

Правило соответствует запросам к файлам шрифтов (например, файлам с расширением `.woff`).

#### **`$image`** {#image-modifier}

Правило соответствует запросам к изображениям.

#### **`$media`** {#media-modifier}

Правило соответствует запросам к медиафайлам — музыке и видео, например файлам `.mp4`.

#### **`$object`** {#object-modifier}

Правило соответствует ресурсам плагинов браузера, например, Java или Flash.

#### **`$other`** {#other-modifier}

Правило применяется к запросам, тип которых не был определён или не соответствует перечисленным выше типам.

#### **`$ping`** {#ping-modifier}

Правило соответствует запросам, вызванным атрибутом `navigator.sendBeacon()` или `ping` в ссылках.

:::info Совместимость

AdGuard для Windows, Mac и Android часто не может точно определить `navigator.sendBeacon()`. Не рекомендуется использовать `$ping` в фильтрах, которые должны использоваться продуктами AdGuard на базе CoreLibs.

Правила с модификатором `$ping` не поддерживаются в AdGuard для Safari и iOS.

:::

#### **`$script`** {#script-modifier}

Правило соответствет запросам к файлам скриптов, например, javascript или vbscript.

#### **`$stylesheet`** {#stylesheet-modifier}

Правило соответствует запросам к файлам CSS-стилей.

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$css`.

:::

#### **`$subdocument`** {#subdocument-modifier}

Правило соответствует запросам к встроенным страницам — HTML-теги `frame` и `iframe`.

**Примеры**

- `||example.com^$subdocument` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и всем его поддоменам.
- `||example.com^$subdocument,domain=domain.com` блокирует запросы встроенных страниц (`frame` и `iframe`) к `example.com` и его поддоменам с `domain.com` и всех его поддоменов.

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$frame`.

:::

:::info Совместимость

В AdGuard для Windows, Mac и Android вложенные документы обнаруживаются по заголовку [Sec-Fetch-Dest][sec-fetch-dest-header], если он есть. В противном случае некоторые основные страницы могут рассматриваться как поддокументы.

Правила с модификатором `$subdocument` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$websocket`** {#websocket-modifier}

Правило применяется только к соединениям WebSocket.

:::info Совместимость

Модификатор `$websocket` поддерживается во всех продуктах AdGuard, кроме AdGuard Content Blocker. Что касается AdGuard для Safari и AdGuard для iOS, то они поддерживаются на устройствах с macOS Monterey (версия 12) и iOS 16 и выше.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

Правило применяется только к ajax-запросам (запросам, отправленным через объект JavaScript `XMLHttpRequest`).

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$xhr`.

:::

:::info Совместимость

AdGuard для Windows, Mac и Android часто не может точно определить этот тип модификатора и иногда определяет его как [`$other`](#other-modifier) или [`$script`](#script-modifier). Они могут надёжно обнаружить этот тип контента только при фильтрации современных браузеров, поддерживающих [Fetch metadata request headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header).

:::

#### **`$object-subrequest` (удалён)** {#object-subrequest-modifier}

:::danger Уведомление об удалении

Модификатор `$object-subrequest` удалён и больше не поддерживается. Правила с ним не работают. Правило соответствует запросам плагинов браузера (обычно это Flash).

:::

#### **`$webrtc` (удалён)** {#webrtc-modifier}

:::danger Уведомление об удалении

Этот модификатор удалён и больше не поддерживается. Правила с ним не работают. Если вы хотите блокировать WebRTC, рассмотрите возможность использования [скриптлета](#scriptlets) `nowebrtc`.

:::

Правило применяется только к WebRTC-соединениям.

**Примеры**

- `||example.com^$webrtc,domain=example.org` blocks webRTC connections to `example.com` from `example.org`.
- `@@*$webrtc,domain=example.org` — это правило отключает оболочку RTC для `example.org`.

### Модификаторы правил исключений {#exception-modifiers}

Правила исключений отключают действие других базовых правил для адресов, которым они соответствуют. Они начинаются с маркера `@@`. Для таких правил работают все базовые модификаторы, перечисленные выше. Также добавляется несколько специальных модификаторов, которые будут описаны ниже.

:::note Визуальное представление

Рекомендуем также прочитать [шпаргалку по фильтрам от Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), чтобы лучше понять, как строятся правила исключений.

:::

<!-- Please keep them sorted -->

| Модификатор \ Продукты                 | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| --------------------------------------- |:------------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$content](#content-modifier)           |               ✅                |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$elemhide](#elemhide-modifier)         |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$extension](#extension-modifier)       |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$jsinject](#jsinject-modifier)         |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$stealth](#stealth-modifier)           |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$urlblock](#urlblock-modifier)         |               ✅                |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$genericblock](#genericblock-modifier) |               ✅                |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$generichide](#generichide-modifier)   |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$specifichide](#specifichide-modifier) |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается

:::

#### **`$content`** {#content-modifier}

Отключает [HTML-фильтрацию](#html-filtering-rules), правила [`$hls`](#hls-modifier), [`$replace`](#replace-modifier)и [`$jsonprune`](#jsonprune-modifier) на страницах, соответствующих правилу.

**Примеры**

- `@@||example.com^$content` отключает все правила модификации контента на страницах `example.com` и всех его поддоменах.

#### **`$elemhide`** {#elemhide-modifier}

Отключает любые [косметические правила](#cosmetic-rules) на страницах, подходящих под правило.

**Примеры**

- `@@||example.com^$elemhide` отменяет все косметические правила для страниц на сайте `example.com` и на всех его поддоменах.

:::note

Вы можете использовать более короткое название (псевдоним) вместо полного названия модификатора: `$ehide`.

:::

#### **`$extension`** {#extension-modifier}

Отключает пользовательские скрипты — определённые или все для данного домена.

**Syntax**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` обозначает конкретное имя пользовательского скрипта, которое должно быть отключено модификатором. The modifier can contain any number of userscript names or none. В последнем случае модификатор отключает все пользовательские скрипты.

Имена пользовательских скриптов обычно содержат пробелы или другие специальные символы, поэтому необходимо заключать их в кавычки. Поддерживаются как одинарные (`'`), так и двойные (`"`) ASCII-кавычки. Несколько имён пользовательских скриптов должны быть разделены вертикальной чертой (`|`). Однако если имя пользовательского скрипта представляет собой одно слово без специальных символов, то его можно использовать без кавычек.

Вы также можете исключить пользовательский скрипт из фильтрации, добавив перед ним символ `~`. В этом случае пользовательский скрипт не будет отключён модификатором.

```adblock
$extension=~"userscript name"
```

:::note

Исключая пользовательский скрипт из фильтрации, обязательно выносите символ `~` за кавычки.

:::

Если имя пользовательского скрипта содержит кавычки (`"`), запятые (`,`) или вертикальную черту (`|`), они должны быть экранированы обратной косой чертой (`\`).

```adblock
$extension="userscript name\, with \"quote\""
```

**Примеры**

- `@@||example.com^$extension="AdGuard Assistant"` отключает пользовательский скрипт `AdGuard Assistant` на сайте `example.com`.
- `@@||example.com^$extension=MyUserscript` отключает пользовательский скрипт `MyUserscript` на сайте `example.com`.
- `@@||example.com^$extension='AdGuard Assistant'|'Popup Blocker'` отключает оба пользовательских скрипта `AdGuard Assistant` и `Popup Blocker` на сайте `example.com`.
- `@@||example.com^$extension=~"AdGuard Assistant"` отключает все пользовательские скрипты на сайте `example.com`, кроме `AdGuard Assistant`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"Popup Blocker"` отключает все пользовательские скрипты на сайте `example.com`, кроме `AdGuard Assistant` и `Popup Blocker`.
- `@@||example.com^$extension` — пользовательские скрипты не будут работать на страницах сайта `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` отключает пользовательский скрипт `AdGuard "Assistant"` на сайте `example.com`.

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$extension`.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Запрещает добавление javascript-кода на страницу. О скриптлетах и javascript-правилах речь пойдёт ниже.

**Примеры**

- `@@||example.com^$jsinject` отменяет все javascript-правила для страниц на сайте `example.com` и на всех его поддоменах.

#### **`$stealth`** {#stealth-modifier}

Отключает модуль «Антитрекинг»‎ для всех страниц и запросов, подходящих под это правило.

**Syntax**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

Здесь `opt(i)` обозначают опции «Антитрекинг»‎, отключаемые правилами. The modifier can contain any number of options (see below) or none. В последнем случае модификатор отключает модуль «Антитрекинг»‎ полностью.

Список доступных опций модификатора:

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

- `@@||example.com^$stealth` полностью отключает модуль «Антитрекинг» для запросов к `example.com` и поддоменам, кроме блокировки куки и скрытия параметров отслеживания (см.ниже).
- `@@||domain.com^$script,stealth,domain=example.com` отключает модуль «Антитрекинг» только для script-запросов к `domain.com` (и поддоменам) на `example.com` и всех его поддоменах.
- `@@||example.com^$stealth=3p-cookie|dpi` отключает блокировку сторонних куки-файлов и меры защиты от DPI для запросов к `example.com`.

:::note

Blocking cookies and removing tracking parameters is achieved by using rules with the [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) and [`$removeparam`](#removeparam-modifier) modifiers. Exception rules that contain only the `$stealth` modifier will not do these things. If you want to completely disable all Stealth mode features for a given domain, you must include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Ограничения

- Modifier options must be lowercase, i.e. `$stealth=DPI` will be rejected.
- Параметры модификатора не могут отрицаться, т.е. `$stealth=~3p-cookie` будет отклонён.

:::

:::info Совместимость

- Антитрекинг доступен в AdGuard для Windows, Mac и Android и в Браузерном расширении AdGuard. Все остальные продукты будут игнорировать правила с модификатором `$stealth`.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Отключает все правила [`$cookie`](#cookie-modifier) и блокировку всех запросов со страниц, соответствующих правилу.

**Примеры**

- `@@||example.com^$urlblock` — любые запросы, отправленные со страниц сайта `example.com` и всех его поддоменов, не будут блокироваться.

:::info Совместимость

В AdGuard для iOS и AdGuard для Safari правила `$urlblock` работают как [исключение $document](#document-modifier) — они разблокируют всё.

Правила с модификатором `$urlblock` не поддерживаются в AdGuard Content Blocker.

:::

#### Generic-правила {#exception-modifiers-generic-rules}

Перед тем, как перейти к описанию следующих модификаторов, необходимо ввести определение *generic-правил*. Правило относится к generic-правилам, если его действие не ограничено конкретными доменами. Также поддерживается wildcard-символ `*`.

Например, это generic-правила:

```adblock
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

А это уже не generic-правила:

```adblock
domain.com###banner
||domain.com^$domain=example.com
```

#### **`$genericblock`** {#genericblock-modifier}

Отключает все базовые правила generic на страницах, подходящих под правило-исключение.

**Примеры**

- `@@||example.com^$genericblock` отключает базовые правила generic на любых страницах `example.com` и всех поддоменах.

:::info Совместимость

В AdGuard для iOS и AdGuard для Safari правила `$genericblock` работают как [исключение $document](#document-modifier) — они разблокируют всё.

Правила с модификатором `$genericblock` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$generichide`** {#generichide-modifier}

Отключает все [косметические правила](#cosmetic-rules) generic на страницах, соответствующих правилу-исключению.

**Примеры**

- `@@||example.com^$generichide` отключает косметические правила generic на страницах сайта `example.com` и всех его поддоменах.

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$ghide`.

:::

#### **`specifichide`** {#specifichide-modifier}

Отключает все specific-правила скрытия элементов и CSS-правила, но не отключает general-правила. Имеет эффект, противоположный [`$generichide`](#generichide-modifier).

**Примеры**

- `@@||example.org^$specifichide` отключает `example.org##.banner`, но не `##.banner`.

:::note

Вы можете использовать более короткое имя (псевдоним) вместо полного имени модификатора: `$shide`.

:::

:::note

Все косметические правила, а не только specific, можно отключить модификатором [`$elemhide`](#elemhide-modifier).

:::

:::info Совместимость

Правила с модификатором `$specifichide` не поддерживаются в AdGuard для iOS, AdGuard для Safari и AdGuard Content Blocker.

:::

### Расширенные возможности {#advanced-modifiers}

Модификаторы, описанные в этом разделе, полностью меняют поведение базовых правил.

<!-- Please keep them sorted -->

| Модификатор \ Продукты                     | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------- |:------------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$xmlprune](#xmlprune-modifier)             |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       |               ✅                |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |               ✅                |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$urltransform](#urltransform-modifier)     |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [noop](#noop-modifier)                      |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "устарел")       |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "устарел")           |               ✅                |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
<!-- - 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions -->
- ⏳ — функция, которая реализована или планируется к реализации, но пока недоступна ни в одном продукте
- ❌ — не поддерживается
- 👎 — deprecated; still supported but will be removed in the future

:::

#### **`$all`** {#all-modifier}

`$all` modifier is made of [all content-types modifiers](#content-type-modifiers) and [`$popup`](#popup-modifier). E.g. rule `||example.org^$all` is converting into rule:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

This modifier cannot be used as an exception with the `@@` mark.

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

1. В правиле есть модификатор `$domain`
1. В модификаторе `$domain` нет отрицания домена `~`

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note that [wildcard-TLD logic](#wildcard-for-tld) works here as well.

**Примеры**

- `/some$domain=example.com|example.org|example.io` отключено для `example.com` правилом `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` и `/some$domain=example.io` полностью отключены правилом `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` полностью отключено правилом `/some$domain=example.*,badfilter`
- `/some$domain=example.*` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` НЕ отключено для `example.com` правилом `/some$domain=example.com|~example.org,badfilter`, поскольку значение модификатора `$domain` содержит отрицание домена

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

где:

- **`name`** — опционально, строка или регулярное выражение для сопоставления с именем куки.
- **`seconds`** — количество секунд, на которое сместится истечение срока действия куки.
- **`strategy`** — строка для стратегии [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) для использования куки.

For example,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:

- Установит дату истечения срока хранения на текущее время плюс `3600` секунд
- Позволяет куки использовать стратегию [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Escaping special characters**

If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` escape each of them. For example, escaped comma looks like this: `\,`.

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

:::caution Ограничения

`$cookie` rules support three types of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, and `$~third-party`.

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
- `$csp`-правила поддерживают ограниченный список модификаторов: `$domain`, `$important`, `$subdocument`.
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

Basic URL exceptions shall not disable rules with `$hls` modifier. They can be disabled as described below:

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

1. HLS-плейлист — это набор текстовых строк
1. Можно использовать пустую строку, комментарий (начинается с `#`), тег (тоже начинается с `#`, распознаётся по содержанию) или URL
1. Строка с URL называется сегментом
1. Тег может относиться к одному сегменту, т.е. к первой строке с URL, следующей после данного тега, ко всем последующим сегментам (пока не встретится тег с тем же названием) или ко всему плейлисту

Some points specific to the operation of `$hls` rules:

1. Когда сегмент удаляется, все теги, относящиеся только к нему, тоже удаляются
1. Теги, относящиеся к нескольким сегментам, удаляются, если все эти сегменты были удалены
1. Поскольку различные типы тегов невозможно распознать по синтаксису, мы распознаем все теги, указанные в RFC, плюс некоторые нестандартные теги, которые встречались нам в полевых условиях. Любые строки, начинающиеся с `#` и не распознанные как тег, пропускаются без модификации и не сопоставляются с правилами
1. Tags will not be matched if they apply to the entire playlist, and `$hls` rrules cannot be used to remove them, as these rule types are intended for segment removals. Если вы знаете, что делаете, вы можете использовать правила `$replace` для удаления или перезаписи только одного тега из плейлиста

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

- Правила `$hls` разрешены только [**в доверенных фильтрах**](#trusted-filters).
- Правила `$hls` совместимы с модификаторами `$domain`, `$third-party`, `$app`, `$important`, `$match-case` и `$xmlhttprequest`.
- Правила `$hls` применимы только к HLS-плейлистам, т. е. к тексту в кодировке UTF-8, начинающемуся со строки `#EXTM3U`. Никакие другие ответы не будут модифицированы этими правилами.
- `$hls` rules do not apply if the size of the original response is more than 10 MB.

:::

:::info Совместимость

Rules with the `$hls` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later.

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

1. Выражения на сценарном языке (script expressions) не поддерживаются
1. Поддерживаемые предикаты (filter expressions):
    - `?(has <key>)` — верно, если текущий объект содержит указанный ключ
    - `?(key-eq <key> <value>)` — верно, если текущий объект содержит указанный ключ и его значение равно указанному
    - `?(key-substr <key> <value>)` — верно, если указанное значение является подстрокой значения ключа текущего объекта
1. Пробелы вне двойных или одинарных кавычек игнорируются
1. Можно использовать строки как с двойными, так и с одинарными кавычками
1. Выражения, оканчивающиеся на `..`, не поддерживаются
1. Разрешено указывать несколько срезов массива (array slices) в квадратных скобках

There are various online tools that make working with JSONPath expressions more convenient:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations have unique features/quirks and are subtly incompatible with each other.

**Исключения**

Basic URL exceptions shall not disable rules with the `$jsonprune` modifier. They can be disabled as described below:

- `@@||example.org^$jsonprune` отключает все правила `$jsonprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$jsonprune=text` disables all `$jsonprune` rules with the value of the `$jsonprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

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
            "a": {"b": {"c": 123}},
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

- `$jsonprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- `$jsonprune` rules do not apply if the size of the original response is greater than 10 MB.

:::

:::info Совместимость

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

`$xmlprune` rules modify the response to a matching request by removing XML items that match an [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/) expression. The expression must return a [node-set](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). `$xmlprune` rules do not modify responses which are not well-formed XML documents.

**Syntax**

- `||example.org^$xmlprune=expression` removes items that match the XPath expression `expression` from the response.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

**Исключения**

Basic URL exceptions shall not disable rules with the `$xmlprune` modifier. They can be disabled as described below:

- `@@||example.org^$xmlprune` disables all `$xmlprune` rules for responses from URLs matching `||example.org^`.
- `@@||example.org^$xmlprune=text` disables all `$xmlprune` rules with the value of the `$xmlprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

`$xmlprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$xmlprune` rules match the same request, they are applied in lexicographical order.

:::

**Примеры**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` removes odd-numbered books from the bookstore.

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

- `||example.org^$xmlprune=/bookstore/book[year = 2003]` removes books from the year 2003 from the bookstore.

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

- `||example.org^$xmlprune=//*/@*` removes all attributes from all elements.

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

- `$xmlprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- `$xmlprune` rules do not apply if the size of the original response is greater than 10 MB.

:::

:::info Совместимость

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

This is basically a Firewall-like rule allowing to fully block or unblock access to a specified remote address.

1. Правила `$network` соответствуют **только IP-адресам**! Вы не можете использовать их, чтобы блокировать или разблокировать доступ к домену.
2. Чтобы сопоставить адрес IPv6, вы должны использовать сжатый синтаксис, например, использовать `[2001:4860:4860::8888]$network` вместо `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, hence there will be no further filtering at all.
4. Если часть IP начинается и заканчивается символом `/`, она рассматривается как регулярное выражение.

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

**Multiple rules matching a single request.**

In case if multiple `$permissions` rules match a single request, AdGuard will apply each of them.

**Syntax**

`$permissions` value syntax is similar to the `Permissions-Policy` header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) with one exception: comma that separates several features **MUST** be escaped — see examples below. The list of the available directives is available [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

`$permissions` value can be empty in the case of exception rules — see examples below.

**Примеры**

- `||example.org^$permissions=autoplay=()` запрещает автовоспроизведение медиафайлов, запрашиваемых через интерфейс `HTMLMediaElement` на сайте `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` отключает все правила с модификатором `$permissions`, в точности соответствующим `autoplay=()` на всех страницах, подходящих под паттерн правила. Например, правило выше.
- `@@||example.org/page/*$permissions` отключает все `$permissions`-правила на всех страницах, подходящих под паттерн правила.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` запрещает использование Storage Access API для запроса доступа к неразмеченным куки, а также использование устройств видеоввода на сайтах `example.org` и `example.com`.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$permission`-правила на всех страницах, подходящих под паттерн правила.

:::caution Ограничения

1. В модификаторе `$permissions` запрещён символ `$`
1. `$permissions` is compatible with three types of modifiers: `$domain`, `$important`, and `$subdocument`

:::

:::info Совместимость

Rules with the `$permissions` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later.

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

Перейдите [к приоритетам правил](#rule-priorities) для более подробной информации.

:::info Совместимость

- Правила с модификатором `$redirect` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и AdGuard для Safari.
- `$redirect` в uBlock Origin поддерживает указание приоритета, например, `$redirect=noopjs:42`. AdGuard не поддерживает его и вместо этого просто отбрасывает приоритетный постфикс.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

Перейдите [к приоритетам правил](#rule-priorities) для более подробной информации.

Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Примеры**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

:::info Совместимость

Rules with `$redirect-rule` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

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

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.12 or later.

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

- |`|example.org^$removeheader=refresh` убирает заголовок `Refresh` из всех HTTP-ответов, возвращённых `example.org` и его поддоменами.
- `||example.org^$removeheader=request:x-client-data` убирает заголовок `X-Client-Data` из всех HTTP-запросов.
- Данный блок правил убирает заголовки `Refresh` и `Location` из всех HTTP-ответов, возвращённых `example.org`, кроме запросов к `example.org/path/*`, для которого заголовки не будут убраны:

    ```adblock
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

:::caution Ограничения

This type of rules can be used [**only in trusted filters**](#trusted-filters).

1. Чтобы избежать потенциальных проблем с безопасностью, `$removeheader` не может убрать следующие заголовки:
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

1. Правила с `$removeheader` совместимы с модификаторами `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, а также [модификаторами типа контента](#content-type-modifiers), такими как `$script` и `$stylesheet`. Правила с другими модификаторами считаются некорректными и не будут применены.

:::

:::info Совместимость

Rules with `$removeheader` modifier are supported by AdGuard for Windows, Mac, and Android, and AdGuard Browser Extension for Chrome, Firefox, and Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

:::

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and sometimes `POST` requests.

`$removeparam` rules that do not have any [content type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

**Syntax**

**Basic syntax**

- `$removeparam=param` убирает параметр запроса с именем `param` из URL любого запроса. Например, запрос к `http://example.com/page?param=1&&another=2` будет преобразован в `http://example.com/page?another=2`.

:::note Compatibility

Rules with `$removeparam` modifier are supported by AdGuard for Windows, Mac and, Android with [CoreLibs][] v1.7 or later and AdGuard Browser Extension v3.6 or later.

:::

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

- `$removeparam=/regexp/[options]` убирает из URL-адреса любого запроса все параметры, соответствующие заданному регулярному выражению `regexp`. В отличие от базового синтаксиса, это означает *«‎убрать параметры запроса, нормализованные к строке `name=value`, которая соответствует `регулярному выражению`»*. `[options]` — это список опций регулярного выражения. На данный момент единственная поддерживаемая опция — это `i`, делающая соответствие нечувствительным к регистру.

**Escaping special characters**

Do not forget to escape special characters like `,`, `/` and `$` in the regular expressions. Use `\` character for that purpose. For example, an escaped comma should look like this: `\,`.

:::note

Regexp-type rules target both name and value of the parameter. To minimize mistakes, it is safer to start every regexp with `/^` unless you specifically target parameter values.

:::

We will try to detect and ignore unescaped `$` automatically using a simple rule of thumb — it is not an options delimiter if all three are true:

1. Есть сочетание `$/`
1. Слева от символа есть ещё один слеш `/`
1. Слева от этого слеша есть ещё один неэкранированный символ `$`

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

- `||example.org^$removeparam` удаляет все параметры запроса из URL-адресов, соответствующих правилу `||example.org^`.

**Inversion**

Use `~` to apply inversion:

- `$removeparam=~param` удаляет все параметры запроса, кроме `param`.
- `$removeparam=~/regexp/` удаляет все параметры запроса, которые не совпадают с заданным регулярным выражением `regexp`.

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

- `@@||example.org^$removeparam` не даёт применять правила с `$removeparam` для URL, соответствующих `example.org`.
- `@@||example.org^$removeparam=param` не даёт применять правила с `$removeparam=param` для запросов к `example.org`.
- `@@||example.org^$removeparam=/regexp/` не даёт применять правила с `$removeparam=/regexp/` для запросов к `example.org`.

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

- `$removeparam=/utm_.*/` удаляет все параметры `utm_*` из URL любого запроса. Например, запрос `http://example.com/page?utm_source=test` будет трансформирован в `http://example.com/page`.

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

:::caution Ограничения

- Правила с модификатором `$removeparam` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).
- Правила с `$removeparam` совместимы с [базовыми модификаторами](#basic-rules-basic-modifiers), [модификаторами типа контента](#content-type-modifiers), а также с модификаторами `$important` и `$app`. Правила с любыми другими модификаторами считаются некорректными и не будут применены.

:::

:::info Совместимость

- Правила с модификатором `$removeparam` поддерживаются в AdGuard для Windows, Mac и Android и Браузерном расширении AdGuard для Chrome, Firefox и Edge.
- `$removeparam` syntax for regular expressions is supported by AdGuard Browser Extension v4.0 and AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.8 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

- Правила с `$replace` применяются к любому текстовому ответу, но не применяются к binary (`media`, `image`, `object` и т. д.).
- `$replace` rules do not apply if the size of the original response is more than 10 MB.
- Правила с `$replace` обладают более высоким приоритетом, чем другие базовые правила (**включая** правила исключений). Если запрос соответствует двум различным правилам, одно из которых имеет модификатор `$replace`, применится именно это правило.
- Правила исключений уровня document с модификаторами `$content` или `$document` отменяют срабатывание правил `$replace`, даже если запрос им соответствует.
- Прочие правила исключений уровня document (с модификаторами `$generichide`, `$elemhide` или `$jsinject`) применяются вместе с правилами `$replace`. Это означает, что вы можете изменять содержимое страницы при помощи правила `$replace` и одновременно отменять косметические правила.

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
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, или `s` — режим одной строки.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Примеры**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:

- `regexp` (регулярное выражение) — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`
- `replacement` (замена) — `\$1<\/VAST>` где `$` экранируется
- `modifiers` (флаги регулярных выражений) — `i` для поиска без учёта регистра

You can see how this rule works here: http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Disabling `$replace` rules**

- `@@||example.org^$replace` отключит все правила с `$replace`, где есть `||example.org^`.
- `@@||example.org^$document` или `@@||example.org^$content` отключит все правила с `$replace`, **исходящие** со страниц домена `example.org`, **включая саму эту страницу**.

:::caution Ограничения

Rules with `$replace` modifier can be used [**only in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Rules with `$replace` modifier are supported by AdGuard for Windows, Mac, and Android and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

:::

#### **`urltransform`** {#urltransform-modifier}

The `$urltransform` rules allow you to modify the request URL by replacing the text matched by the regular expression.

**Features**

- `$urltransform` rules apply to any request URL text.
- `$urltransform` rules can also **modify the query part** of the URL.
- `$urltransform` will not be applied if the original URL is blocked by other rules.
- `$urltransform` will be applied before `$removeparam` rules.

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
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, или `s` — режим одной строки.

In the `$urltransform` value, two characters must be escaped: the comma `,` and the dollar sign `$`. Use the backslash character `\` for this. For example, an escaped comma looks like this: `\,`.

**Примеры**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

There are three parts in this rule:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2` where `$` is escaped;
- `modifiers` (флаги регулярных выражений) — `i` для поиска без учёта регистра

**Multiple `$urltransform` rules**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Re-matching rules after transforming the URL**

If the `$urltransform` rule is applied to a request, all the rules will be re-evaluated against the new URL.

E.g., with the following rules:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

the request to `https://example.com/firstpath` will be blocked before it is sent.

However, `$urltransform` rules will **not be re-applied** in this case to avoid infinite recursion, e.g., with the following rules:

```adblock
||example.com/firstpath^$urltransform=/firstpath/secondpath/
||example.com/secondpath^$urltransform=/secondpath/firstpath/
```

the request to `https://example.com/fisrtpath` will be transformed to `https://example.com/secondpath` and the second rule will not be applied.

**Disabling `$urltransform` rules**

- `@@||example.org^$urltransform` will disable all `$urltransform` rules matching `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` will disable the rule with `$urltransform=/Z/Y/` for any request matching `||example.org^`.

`$urltransform` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$urltransform=/X/Y/` for requests to **example.com**, but `@@||example.com^$urlblock` will.

:::caution Ограничения

Rules with the `$urltransform` modifier can be used [**only in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

:::

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of any length and can appear in a rule as many times as needed.

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

When two rules with the same priority match the same request, it depends on the filtering engine implementation which one will be selected.

:::

:::info

The concept of rule priorities becomes increasingly important in light of Manifest V3 as the existing rules need to be converted to declarativeNetRequest rules.

:::

#### Priority calculation

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

- [`$app`](#app-modifier) с приложениями, исключаемыми с помощью `~`
- [`$denyallow`](#denyallow-modifier)
- [`$domain`](#domain-modifier) с доменами, исключаемыми с помощью `~`
- [`$match-case`](#match-case-modifier)
- [`$method`](#method-modifier) с методами, исключаемыми с помощью `~`
- [`$third-party`](#third-party-modifier)
- [`$to`](#to-modifier)
- ограниченные модификаторы [сontent-type](#content-type-modifiers) с `~`

When dealing with a negated domain, app, method, or content-type, we add **1 point** for the existence of the modifier itself, regardless of the quantity of negated domains or content-types. This is because the rule's scope is already infinitely broad. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Defined content-type modifiers, defined methods, defined headers, $all, $popup, specific exceptions {#priority-category-2}

All allowed content types:

<!-- Please keep them sorted -->

- [`$document`](#document-modifier)
- [`$font`](#font-modifier)
- [`$image`](#image-modifier)
- [`$media`](#media-modifier)
- [`$object`](#object-modifier)
- [`$other`](#other-modifier)
- [`$ping`](#ping-modifier)
- [`$script`](#script-modifier)
- [`$stylesheet`](#stylesheet-modifier)
- [`$subdocument`](#subdocument-modifier)
- [`$websocket`](#websocket-modifier)
- [`$xmlhttprequest`](#xmlhttprequest-modifier)

This also includes rules that implicitly add all content types:

- [`$all`](#all-modifier);

Or rules that implicitly add the modifier `$document`:

- [`$popup`](#popup-modifier)

Or some specific exceptions that implicitly add `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier)
- [`$elemhide`](#elemhide-modifier)
- [`$extension`](#extension-modifier)
- [`$genericblock`](#genericblock-modifier)
- [`$generichide`](#generichide-modifier)
- [`$jsinject`](#jsinject-modifier)
- [`$specifichide`](#specifichide-modifier)
- [`$urlblock`](#urlblock-modifier)

Or allowed methods via [`$method`](#method-modifier).

Or rules with [`$header`](#header-modifier).

The presence of any content-type modifiers adds `(50 + 50 / N)`, where `N` is the number of modifiers present, for example: `||example.com^$image,script` will add `50 + 50 / 2 = 50 + 25 = 75` to the total weight of the rule.

The `$all` also belongs to this category, because it implicitly adds all content type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

The `$popup` also belongs to this category, because it implicitly adds the modifier `$document`. Similarly, specific exceptions add `$document,subdocument`.

If there is a `$method` modifier in the rule with allowed methods it adds `(50 + 50 / N)`, where `N` is the number of methods allowed, for example: `||example.com^$method=GET|POST|PUT` will add `50 + 50 / 3 = 50 + 16.6 = 67` to the total weight of the rule.

If there is a `$header` modifier in the rule it adds `50`.

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

- [`$content`](#content-modifier)
- [`$elemhide`](#elemhide-modifier)
- [`$extension`](#extension-modifier)
- [`$genericblock`](#genericblock-modifier)
- [`$generichide`](#generichide-modifier)
- [`$jsinject`](#jsinject-modifier)
- [`$specifichide`](#specifichide-modifier)
- [`$urlblock`](#urlblock-modifier)

Each of which adds `10^4` to the priority.

As well as exception with [`$document modifier`](#document-modifier): because it's an alias for `$elemhide,content,jsinject,urlblock,extension`. It will add `10^4` for each modifier from [the top list](#priority-category-4), `10^4 * 5` in total.

In addition, each of these exceptions implicitly adds the two allowed content-type modifiers `$document,subdocument`.

#### Правила белого списка {#priority-category-5}

Modifier `@@` adds `10^5` to rule priority.

#### Правила `$important` {#priority-category-7}

Modifier [`$important`](#important-modifier) adds `10^6` to rule priority.

#### Правила, для которых нет веса приоритета {#priority-category-extra}

[Other modifiers](#advanced-capabilities), which are supposed to perform additional post- or pre-processing of requests, do not add anything to the rules priority.

:::note

The [`$replace`](#replace-modifier) modifier takes precedence over all blocking rules of categories 1-3, as well as exception rules from categories 3-5, **except** [`$content`](#content-modifier), because an exception with the `$content` modifier overrides all `$replace` rules.

:::

#### Примеры

1. `||example.com^`

    Вес правила без модификаторов: `1`.

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

1. `@@||example.org^$document` без дополнительных модификаторов — это псевдоним для `@@|||example.com^$elemhide,content,jsinject,urlblock,extension`

    Rule weight: base weight + specific exceptions, [category 4](#priority-category-4) + two allowed content types (document and subdocument), [category 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Rule weight: base weight + allowed content type, [category 2](#priority-category-2) + allowed domain, [category 3](#priority-category-3) + denyallow, [category 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — alias to `||example.com^$document,subdocument,image,script,media,etc. + $popup`

    Rule weight: base weight + popup ([category 1](#priority-category-1)) + allowed content types ([category 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Другие правила {#non-basic-rules}

However, basic rules may not be enough to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

| Категории \ Продукты                         | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| --------------------------------------------- |:------------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [Скрытие элементов](#cosmetic-elemhide-rules) |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [CSS-правила](#cosmetic-css-rules)            |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Расширенный CSS](#extended-css-selectors)    |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Фильтрация HTML](#html-filtering-rules)      |               ✅                |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [JavaScript](#javascript-rules)               |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Скриптлеты](#scriptlets)                     |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |

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

- **`selector`** — [CSS-селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), задающий элементы, которые должны быть скрыты.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

This rule will be also applied to all subdomains of `example.org` and `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

:::note

Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

:::

**Примеры**

- `example.com##div.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `example.com,example.org###adblock` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `~example.com##.textad` — hides an element with the class `textad` at all domains, except `example.com` and its subdomains.

**Ограничения**

Safari does not support both permitted and restricted domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

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

- `#?#` — для скрытия элементов, `#@?#` — для исключений
- `#$?#` — для CSS-стилей, `#@$?#` — для исключений

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Примеры**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — это правило блокирует все элементы `div`, которые содержат дочерний элемент со ссылкой с атрибутами `[target="_blank"][rel="nofollow"]`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — это правило устанавливает стиль `display: none!important` для всех элементов `h3`, которые содержат слово `cookies`. При этом правило будет работать только для домена `example.com` и всех его поддоменов.
- `example.net#?#.banner:matches-css(width: 360px)` — это правило блокирует все элементы `.banner`, которые содержат стиль `width: 360px`. При этом правило будет работать только для домена `example.net` и всех его поддоменов.
- `example.net#@?#.banner:matches-css(width: 360px)` — это правило отменяет действие предыдущего правила.

You can apply standard CSS selectors using the ExtendedCss library by using the rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

:::note

Some pseudo-classes do not require selector before it. Still adding the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)` but second one is more obvious.

Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

:::

#### Ограничения ExtendedCss {#extended-css-limitations}

1. [CSS-комментарии](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) и [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) не поддерживаются.

2. У конкретного псевдокласса могут быть свои ограничения: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Псевдокласс `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

:::note

Rules with the `:has()` pseudo-class must use the [native implementation of `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) if they use `##` marker and if it is possible, i.e. with no other extended selectors inside. To force applying of ExtendedCss rules with `:has()`, use `#?#`/`#$?#` marker explicitly.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Уведомление об удалении

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Syntax**

```text
[target]:has(selector)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selector` — необходимый, стандартный или расширенный CSS-селектор

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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
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

! регулярное выражение
div:contains(/as .* banner/)

! регулярное выражение с флагами
div:contains(/it .* banner/gi)
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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `pseudo-element` — необязательный, допустимый стандартный псевдоэлемент, например, `before`, `after`, `first-line` и т. д.
- `property` — требуется, название CSS-свойства, которое будет проверено у элемента
- `pattern` — required, a value pattern that is using the same simple wildcard matching as in the basic url filtering rules OR a regular expression. Для этого типа соответствия AdGuard не обращает внимание на регистр. В случае с регулярными выражениями шаблон будет выглядеть так: `/regexp/`.

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
! паттерн строки
div:matches-css(before, content: block me)

! паттерн строки с подстановочным знаком
div:matches-css(before, content: block*)

! паттерн регулярного выражения
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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
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

:::tip For filters maintainers

To check properties of a specific element, do the following:

1. Проверьте элемент страницы или выберите его в Инструментах разработчика браузера во вкладке `Элементы`
1. Запустите `console.dir($0)` во вкладке `Консоль`

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
- `n` — обязателен. Число >= 1 и < 256, расстояние до нужного родителя от элемента, выбранного `subject`

**Syntax**

```text
subject:nth-ancestor(n)
```

- `subject` — required, standard or extended CSS selector
- `n` — обязателен. Число >= 1 и < 256, расстояние до нужного родителя от элемента, выбранного `subject`

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

- `subject` — стандартный или расширенный CSS-селектор, необходим
- `ancestor` — требуется, спецификация для предка элемента, выбранного `subject`, может быть задана как:
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

! псевдосвойство
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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — [*щадящий список*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) стандартных и расширенных селекторов. For extended selectors, only compound selectors are supported, not complex.

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

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
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

:::danger Уведомление об удалении

The `:if-not()` pseudo-class is removed and is no longer supported. Правила с ним не работают.

:::

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.

### Приоритет косметических правил {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, Mac, and Android**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#cosmetic-elemhide-rules) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser Extension**, the so called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## Правила фильтрации HTML {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

:::info Совместимость

HTML filtering rules are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

:::

### Syntax

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — имя элемента в нижнем регистре, например, `div` или `script`.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Те же принципы, что и в [синтаксисе правил скрытия элементов](#cosmetic-elemhide-rules).
- **`attributes`** — список атрибутов, ограничивающих выбор элементов. `name` — имя атрибута, `value` — подстрока, которая содержится в значении атрибута.
- **`pseudoName`** — имя псевдокласса.
- **`pseudoArgs`** — аргументы псевдокласса, записанного в виде функции.
- **`combinator`** — оператор, который работает аналогично [CSS-комбинатору дочерних элементов](https://developer.mozilla.org/ru/docs/Web/CSS/Child_combinator): селектор справа от комбинатора будет относиться только к элементу, прямой родительский элемент которого соответствует селектору слева от комбинатора.

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

### Специальные атрибуты

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

:::

#### `wildcard`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

You must use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It checks if the element code contains the two consecutive substrings `banner` and `text`.

:::caution Limitations

The `wildcard` special attribute must not appear in a selector to the left of a `>` combinator.

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

:::

### Псевдоклассы

#### `:contains()`

##### Syntax

```text
:contains(текст без кавычек)
```

или

```text
:contains(/reg(ular)?ex(pression)?/)
```

:::note Compatibility

`:-abp-contains()` and `:has-text()` are synonyms for `:contains()`.

:::

:::info Совместимость

The `:contains()` pseudo-class is supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13 or later.

:::

Requires that the inner HTML of the element contains the specified text or matches the specified regular expression.

:::caution Limitations

A `:contains()` pseudo-class must not appear in a selector to the left of a `>` combinator.

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

AdGuard supports a special type of rules that allows you to inject any javascript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```text
rule = [domains] "#%#" script
```

- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Строится по тем же правилам, что и в случае [правил скрытия элементов](#cosmetic-elemhide-rules).
- **`script`** — произвольный javascript-код **в одну строку**.

**Примеры**

- `example.org#%#window.__gaq = undefined;` выполняет код `window.__gaq = undefined;` на всех страницах сайта `example.org` и всех его поддоменах.

**Исключения**

Similar to hiding rules, there is a special type of rules that disable the selected javascript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

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

JavaScript rules can be used [**only in trusted filters**](#trusted-filters).

:::

:::info Совместимость

JavaScript rules are not supported by AdGuard Content Blocker.

:::

## Правила скриптлета {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

:::note

AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

:::

**Syntax**

```text
rule = [domains] "#%#//scriptlet(" scriptletName arguments ")"
```

- **`scriptletName`** (обязательно) — это имя скриптлета из библиотеки скриптлетов AdGuard
- **`arguments`** (опционально) — это список аргументов в формате `string` (другие типы аргументов не поддерживаются)

**Примеры**

```adblock
example.org#%#//scriptlet("abort-on-property-read", "alert")
```

This rule will be applied to `example.org` and subdomains pages and will execute the `abort-on-property-read` scriptlet with the `alert` parameter.

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Совместимость

Scriptlet rules are not supported by AdGuard Content Blocker.

:::

### Доверенные скриптлеты {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

:::note

Trusted scriptlets are not compatible with other ad blockers except AdGuard.

:::

:::caution Ограничения

Trusted scriptlets rules can be used [**only in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Trusted scriptlets rules are not supported by AdGuard Content Blocker.

:::

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Модификаторы для небазовых правил {#non-basic-rules-modifiers}

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax** {#non-basic-rules-modifiers-syntax}

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — набор модификаторов, описанных ниже.
- **`rule text`** — правило, которое нужно модифицировать.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Модификатор \ Продукты               | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |               ✅                |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |               ✅                |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |               ✅                |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ⏳ — реализован или планируется к реализации, но пока недоступен ни в одном продукте
- ❌ — не поддерживается

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Примеры**

- `[$app=org.example.app]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` применяет скриптлет `prevent-setInterval` только в браузере Safari на Mac.
- `[$app=org.example.app]#@#.textad` отключает все правила `##.textad` для всех доменов при использовании `org.example.app`.

:::info Совместимость

Such rules with `$app` modifier are supported by AdGuard for Windows, Mac, and Android.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Примеры**

- `[$domain=example.com]##.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `[$domain=example.com|example.org]` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `[$domain=~example.com]##.textad` скроет элементы `div` с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

There are 2 ways to specify domain restrictions for non-basic rules:

1. «классический»: обозначить ограничение на домены перед маской и атрибутами правила: `example.com##.textad`;
2. с помощью модификаторов: обозначить ограничение на домены через модификатор `$domain`: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

:::info Совместимость

Such rules with `$domain` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser Extension for Chrome, Firefox, Edge.

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

- `[$path=page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
- `[$path=/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
- `[$path=|/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
- `[$path=/page.html|]##.textad` hides a `div` with the class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>`
- `[$path=/page*.html]example.com##.textad` hides a `div` with the class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
- `[$path]example.com##.textad` hides a `div` with the class `textad` at the main page of `example.com`
- `[$domain=example.com,path=/page.html]##.textad` hides a `div` with the class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` hides a `div` with the class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please note the [escaped special characters](#non-basic-rules-modifiers-syntax))

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

- `[$url=||example.com/content/*]##div.textad` hides a `div` with the class `textad` at addresses like `https://example.com/content/article.html` and even `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` скрывает элемент с атрибутом `id` равным `adblock` в запросах к `example.org` и всем его поддоменам.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` скрывает `div` с классом `textad` в запросах ко всем доменам, соответствующим регулярному выражению `[a-z]+\.example\.com^`.

:::info Совместимость

Rules with the `$url` modifier are supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later.

:::

## Информация для разработчиков фильтров

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Директивы препроцессора

We provide preprocessor directives that can be used by filters maintainers to improve compatibility with different ad blockers and provide:

- [включать содержимое отдельного файла в фильтр](#include-directive)
- [применять правила в зависимости от типа блокировщика](#conditions-directive)
- [уточнять блокировщик контента для применения правил в Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Включение файла {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre- directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```adblock
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

The files must originate from the same domain but may be located in a different folder.

If included file is not found or unavailable, the whole filter update should fail.

Same-origin limitation should be disabled for local custom filters.

**Примеры**

Filter URL: `https://example.org/path/filter.txt`

```adblock
! Корректный (тот же источник):
!#include https://example.org/path/includedfile.txt
!
! Корректный (относительный путь):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Некорректный (другой источник):
!#include https://domain.com/path/includedfile.txt
```

#### Условия {#conditions-directive}

Filters maintainers can use conditions to supply different rules depending on the ad blocker type. A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive. Conditions support all basic logical operators.

There are two possible scenarios:

1. Если блокировщик рекламы встречает директиву `!#if` и не встречает директиву `!#else`, то он компилирует код между директивами `!#if` и `!#endif` только в том случае, если указанное условие истинно.

1. Если существует директива `!#else`, код между `!#if` и `!#else` будет скомпилирован, если условие истинно; в противном случае будет скомпилирован код между `!#else` и `!#endif`.

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
!#if (условия)
true_conditions_rules_list
!#else
false_conditions_rules_list
!#endif
```

где:

- `!#if (условия)` — начало блока при выполнении условий
- `conditions` — точно так же, как и в случае с некоторыми популярными языками программирования, условия препроцессинга основаны на константах, объявляемых блокировщиками. Разработчики блокировщиков самостоятельно определяют, какие именно константы объявлять. Возможные значения:
    - `adguard` объявляется всегда; даёт разработчикам фильтров понять, что это один из продуктов AdGuard; должно быть достаточно в 95% случаев
    - специфичные для конкретных продуктов константы, которые нужны в редких случаях, когда правило должно работать (или не работать — тогда перед константой используйте `!`) только для конкретного продукта:
        - `adguard_app_windows` — AdGuard для Windows
        - `adguard_app_mac` — AdGuard для Mac
        - `adguard_app_android` — AdGuard для Android
        - `adguard_app_ios` — AdGuard для iOS
        - `adguard_ext_safari` — AdGuard для Safari
        - `adguard_ext_chromium` — Браузерное расширение AdGuard для Chrome (и браузеры на основе Chrome, например, новый Microsoft Edge)
        - `adguard_ext_firefox` — Браузерное расширение AdGuard для Firefox
        - `adguard_ext_edge` — Браузерное расширение AdGuard для Edge Legacy
        - `adguard_ext_opera` — Браузерное расширение AdGuard для Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker для мобильных браузеров Samsung и Яндекс
        - `ext_ublock` — особый случай; эта константа объявляется, когда версия фильтра для uBlock компилируется при помощи [FiltersRegistry][]
        - `cap_html_filtering` — продукты, поддерживающие правила HTML-фильтрации: AdGuard для Windows, AdGuard для Mac и AdGuard для Android
- `!#else` — начало блока, когда условия ложны
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — списки правил
- `!#endif` — конец блока

**Примеры**

```adblock
! для всех продуктов AdGuard, кроме AdGuard для Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! директивы также можно совмещать
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

```adblock
!#if (adguard && !adguard_ext_safari)
! для всех продуктов AdGuard, кроме AdGuard для Safari
||example.org^$third-party
domain.com##div.ad
!#else
! только для AdGuard для Safari
||subdomain.example.org^$third-party
!#endif
```

:::info Совместимость

The `!#else` directive is supported by the [FiltersDownloader][gh-filters-downloader] v1.1.20 or later.

It is already supported for filter lists compiled by the [FiltersRegistry][], but it still may not be supported by AdGuard products when adding a filter list with `!#else` as a custom one. The following products will support it in the mentioned versions or later:

- AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13;
- Браузерное расширение AdGuard 4.2.208;
- AdGuard v1.11.16 for Safari.

:::

#### Правила фильтрации в Safari {#safari-affinity-directive}

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

где:

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
! чтобы не скрывать указанный элемент, который скрывается Базовым фильтром:
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

#### Подсказка `NOT_OPTIMIZED`

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```text
"filter": Базовый фильтр AdGuard,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```

где:

- **filter** — идентификатор фильтра
- **percent** — ожидаемый процент оптимизации `~= (количество правил в оптимизированном фильтре) / (количество правил в исходном фильтре) * 100`
- **minPercent** — нижняя граница значения `percent`
- **maxPercent** — верхняя граница значения `percent`
- **Strict** — если `percent < minPercent` или `percent > maxPercent` и включён режим Strict, то компиляция фильтра должна завершиться неудачно, в противном случае должны использоваться оригинальные правила

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

#### Подсказки `PLATFORM` и `NOT_PLATFORM`

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

- `windows` — AdGuard для Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard для Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard для Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard для iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Браузерное расширение AdGuard для Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — AdGuard Browser Extension for Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

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

## Отладка правил фильтрации

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Журнал фильтрации

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- В **AdGuard для Windows** вы найдёте его во вкладке настроек *Антибаннер* или через меню трея
- В **AdGuard для Mac** он располагается в разделе *Настройки → Дополнительно → Журнал фильтрации*
- В **AdGuard для Android** его можно найти в разделе *Статистика → Недавняя активность*. *Доступ к недавней активности* также можно получить из *Помощника*
- В **Браузерном расширении AdGuard** он находится во вкладке настроек *Дополнительно*, а также доступен по клику правой кнопкой мыши по иконке расширения. Only Chromium- and Firefox-based web browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs

:::note

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Режим отладки селекторов {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — окончательный текст селектора после парсинга
- `timings` — список узлов DOM, соответствующих селектору
    - `appliesCount` — общее количество раз, когда на странице был применён селектор
    - `appliesTimings` — время, которое ушло на применение селектора на странице, для каждого из случаев применения этого селектора (в миллисекундах)
    - `meanTiming` — среднее время, ушедшее на применение селектора на странице
    - `standardDeviation` — стандартное отклонение
    - `timingsSum` — общее время, ушедшее на все применения селектора на текущей странице

**Printed only for remove pseudos:**

- `removed` — flag to signal if elements were removed

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

// массив HTMLElements, соответствующих `selector`, должен быть возвращён
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
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) со специальным параметром `replacement`
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Легенда таблиц совместимости {#compatibility-tables-legend}

### Краткие обозначения продуктов {#what-product}

1. `Приложения CoreLibs` — AdGuard для Windows, AdGuard для Mac и AdGuard для Android
1. `AdGuard для Chromium` — Браузерное расширение AdGuard для Chrome и других браузеров на основе Chromium, таких как Microsoft Edge и Opera
1. `AdGuard для Firefox` — Браузерное расширение AdGuard для Firefox
1. `AdGuard для iOS` — AdGuard для iOS и AdGuard Pro для iOS (для мобильного браузера Safari)
1. `AdGuard для Safari` — AdGuard для веб-браузера Safari `AdGuard Content Blocker` — Content Blocker для мобильных браузеров Android: Samsung Internet и Яндекс Браузер

### Краткие обозначения совместимости {#what-compatibility}

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- 🧩 — может быть уже реализован в nightly или бета-версиях, но пока не поддерживается в релизных версиях
- ⏳ — реализован или планируется к реализации, но пока недоступен ни в одном продукте
- ❌ — не поддерживается
- 👎 — deprecated; still supported but will be removed in the future
- 🚫 — удалён и больше не поддерживается

:::

[cl-apps]: #what-product "AdGuard для Windows, Mac и Android"
[ext-chr]: #what-product "Браузерное расширение AdGuard для Chrome и других браузеров на основе Chromium"
[ext-ff]: #what-product "Браузерное расширение AdGuard для Firefox"
[ios-app]: #what-product "AdGuard для iOS и AdGuard Pro для iOS"
[ext-saf]: #what-product "AdGuard для Safari"
[and-cb]: #what-product "AdGuard Content Blocker для браузеров Samsung Internet and Яндекс на Android"

[sec-fetch-dest-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
[CoreLibs]: https://adguard.com/en/blog/introducing-corelibs.html
[TSUrlFilter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter#tsurlfilter
[TSWebExtension]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tswebextension#tswebextension
