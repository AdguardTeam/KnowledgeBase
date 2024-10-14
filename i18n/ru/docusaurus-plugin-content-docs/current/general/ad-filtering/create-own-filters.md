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
- Базовые правила скрытия элементов [](#cosmetic-elemhide-rules) без поддержки расширенного CSS.

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

- **`pattern`** — маска адреса. URL каждого запроса сопоставляется с этой маской. В шаблоне также можно использовать специальные символы, описанные [ниже](#basic-rules-special-characters). Обратите внимание, что AdGuard обрезает URL до 4096 символов, чтобы ускорить сопоставление и избежать проблем с длинными URL.
- **`@@`** — маркер, который используется для обозначения правил-исключений. С такого маркера должны начинаться правила, отключающие фильтрацию для запроса.
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

| Модификатор \ Продукты                             |    [Приложения CoreLibs][cl-apps]     |    [AdGuard для Chromium][ext-chr]     |   [AdGuard for Chrome MV3][ext-mv3]    |     [AdGuard для Firefox][ext-ff]      |       [AdGuard для iOS][ios-app]       |     [AdGuard для Safari][ext-saf]      | [AdGuard Content Blocker][and-cb] |
| --------------------------------------------------- |:-------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                               |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$denyallow](#denyallow-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$domain](#domain-modifier)                         |                   ✅                   |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) | ✅ [*[1]](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)                         |                   ✅                   | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    |                   ❌                    |                 ❌                 |
| [$important](#important-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$match-case](#match-case-modifier)                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$method](#method-modifier)                         |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$popup](#popup-modifier)                           | ✅ [*[3]](#popup-modifier-limitations) |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  | ✅ [*[3]](#popup-modifier-limitations)  |                 ❌                 |
| [$strict-first-party](#strict-first-party-modifier) |                   ⏳                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$strict-third-party](#strict-third-party-modifier) |                   ⏳                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$third-party](#third-party-modifier)               |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$to](#to-modifier)                                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ⏳ — feature that is planned to be implemented but is not yet available in any product
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
- **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. The pattern works the same way as in the basic URL rules, but the characters `/`, `$`, `,`, and `|` must be escaped with `\`.

:::info

Rules with `$domain` modifier as `regular_domain` are supported by all AdGuard products.

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

В некоторых случаях модификатор `$domain` может соответствовать не только домену-рефереру, но и целевому домену. Это происходит при соблюдении всех условий:

1. Тип контента запроса — `document`
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

In [AdGuard for Chrome MV3][ext-mv3] `regexp` and `any_tld domains` are not supported.

:::

:::caution Ограничения

Safari не поддерживает одновременно разрешённые и запрещённые домены, поэтому правила вида `||baddomain.com^$domain=example.org|~foo.example.org` не работают в AdGuard для iOS и AdGuard для Safari.

:::

:::info Совместимость

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.12 or later the `$domain` modifier can be alternatively spelled as `$from`.

:::

#### **`$header`** {#header-modifier}

Модификатор `$header` позволяет сопоставлять HTTP-ответ, имеющий определённый заголовок, с определённым значением (опционально).

**Синтаксис**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

где:

- **`h_name`** (обязательно) — имя HTTP-заголовка. Сопоставляется без учёта регистра символов.
- **`h_value`** (опционально) — выражение для сопоставления значения HTTP-заголовка, может быть одним из:
    - **`string`** — последовательность символов. Лексикографически сопоставляется со значением заголовка;
    - **`regexp`** — регулярное выражение, начинается и заканчивается символом `/`. Паттерн работает так же, как и в основных URL-правилах, но символы `/`, `$` и `,` должны быть экранированы с помощью `\`.

Часть модификатора со значением заголовка `":" h_value` может быть опущена. В этом случае модификатор сопоставляет только имя заголовка.

**Примеры**

- `||example.com^$header=set-cookie:foo` — блокирует запрос, ответ которого содержит заголовок `Set-Cookie` со значением `foo`.
- `||example.com^$header=set-cookie ` блокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` разблокирует запросы, ответы которых содержат заголовок `Set-Cookie` со значением `foo, bar$`.
- `@@||example.com^$header=set-cookie` разблокирует запрос, ответ которого содержит заголовок `Set-Cookie` с любым значением.

##### Ограничения модификатора `$header` {#header-modifier-limitations}

:::caution Ограничения

1. The `$header` modifier can be matched only when headers are received. So if the request is blocked or redirected at an earlier stage, the modifier cannot be applied.
1. In Adguard Browser Extension, the `$header` modifier is only compatible with [`$csp`](#csp-modifier), [`$removeheader`](#removeheader-modifier), [`$important`](#important-modifier), and [`$badfilter`](#badfilter-modifier).

:::

:::info Совместимость

Rules with the `$header` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$important`** {#important-modifier}

Модификатор `$important`, применённый к правилу, повышает его приоритет по сравнению с правилами без такого модификатора. Даже относительно базовых правил-исключений.

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

Правила с `$match-case` поддерживаются в AdGuard для iOS и AdGuard для Safari с SafariConverterLib версии 2.0.43 или выше.

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

Правила, где к одному методу применяется инверсия (~), а к другому нет, считаются недействительными. Так, например, правило `||evil.com^$method=get|~head` будет проигнорировано.

:::

:::info Совместимость

Rules with `$method` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

:::

#### **`$popup`** {#popup-modifier}

AdGuard будет пытаться закрыть браузерную вкладку с любым адресом, подходящим под правило с этим модификатором. Обратите внимание, что закрыть можно не любую вкладку.

**Примеры**

- `||domain.com^$popup` — при попытке перехода на сайт `http://domain.com` с любой страницы в браузере, новая вкладка, в которой должен открыться указанный сайт, будет закрыта.

##### Ограничения модификатора `$popup` {#popup-modifier-limitations}

:::caution Ограничения

1. The `$popup` modifier works best in AdGuard Browser Extension for Chromium-based browsers and Firefox.
1. In [AdGuard for Chrome MV3][ext-mv3] rules with the [`$popup`][popup-in-mv3] modifier would not work, so we disable converting them to declarative rules. We will try to use them only in our [TSUrlFilter][] engine and close new tabs programmatically.
1. В AdGuard для iOS и AdGuard для Safari `$popup`-правила просто заблокируют страницу.
1. В AdGuard для Windows, AdGuard для Mac и AdGuard для Android модификатор `$popup` в некоторых случаях может не обнаружить всплывающее окно, и оно не будет заблокировано. Модификатор `$popup` применяет тип контента `document` со специальным флагом, который передаётся блокирующей странице. Блокирующая страница сама может провести некоторые проверки и закрыть окно, если это действительно всплывающее окно. В противном случае страница должна быть загружена. It can be combined with other request type modifiers, such as `$third-party`, `$strict-third-party`, `$strict-first-party`, and `$important`.

:::

:::info Совместимость

Правила с модификатором `$popup` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$strict-first-party`** {#strict-first-party-modifier}

Works the same as the [`$~third-party`](#third-party-modifier) modifier, but only treats the request as first-party if the referrer and origin have exactly the same hostname.

**Примеры**

- domain.com$strict-first-party' — this rule applies only to `domain.com`. Например, запрос с домена `domain.com` к домену `http://domain.com/icon.ico` — это запрос первой стороны. A request from `sub.domain.com` to `http://domain.com/icon.ico` is treated as a third-party one (as opposed to the `$~third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict1p`.

:::

:::info Совместимость

Rules with the `$strict-first-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later.

:::

#### **`$strict-third-party`** {#strict-third-party-modifier}

Works the same as the [`$third-party`](#third-party-modifier) modifier but also treats requests from the domain to its subdomains and vice versa as third-party requests.

**Примеры**

- `||domain.com^$strict-third-party` — правило применяется на всех доменах, кроме `domain.com`. An example of a third-party request: `http://sub.domain.com/banner.jpg` (as opposed to the `$third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict3p`.

:::

:::info Совместимость

Rules with the `$strict-third-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later.

:::

#### **`$third-party`** {#third-party-modifier}

A restriction on third-party and custom requests. A third-party request is a request from an external domain. Например, запрос к домену `example.org`, отправленный с домена `domain.com`, является сторонним.

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

- `||domain.com$~third-party` — это правило применяется исключительно к `domain.com`. Example of a non third-party request: `http://domain.com/icon.ico`.

:::note

Вы можете использовать более короткое название (псевдоним) вместо полного названия модификатора: `$3p`.

:::

#### **`$to`** {#to-modifier}

`$to` ограничивает область действия правила запросами, сделанными **на** указанные домены и их поддомены. Чтобы добавить несколько доменов в одно правило, используйте символ `|` в качестве разделителя.

**Примеры**

- `/ads$to=evil.com|evil.org` блокирует любые запросы к `evil.com` или `evil.org` и их поддоменам с путём, соответствующим `/ads`.
- `/ads$to=~not.evil.com|evil.com` блокирует любые запросы к `evil.com` и его поддоменам с путём, совпадающим с `/ads`, за исключением запросов к `not.evil.com` и его поддоменам.
- `/ads$to=~good.com|~good.org` блокирует любые запросы с путём, соответствующим `/ads`, за исключением запросов к `good.com` или `good.org` и их поддоменам.

:::caution Ограничения

[`$denyallow`](#denyallow-modifier) не может использоваться вместе с `$to`. Его можно выразить инвертированным `$to`: `$denyallow=a.com|b.com` эквивалентно `$to=~a.com|~b.com`.

:::

:::info Совместимость

Rules with the `$to` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

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

| Модификатор \ Продукты                                      |       [Приложения CoreLibs][cl-apps]        | [AdGuard для Chromium][ext-chr] | [AdGuard for Chrome MV3][ext-mv3] | [AdGuard для Firefox][ext-ff] |        [AdGuard для iOS][ios-app]         |       [AdGuard для Safari][ext-saf]       | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------------------------ |:-------------------------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:-----------------------------------------:|:-----------------------------------------:|:---------------------------------:|
| [$document](#document-modifier)                              |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$font](#font-modifier)                                      |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$image](#image-modifier)                                    |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$media](#media-modifier)                                    |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$object](#object-modifier)                                  |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
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

Правило соответствует запросам основного документа страницы, т.е. HTML-документа, который загружается во вкладке браузера. Оно не подходит для iframe, для них существует модификатор [`$subdocument`](#subdocument-modifier).

По умолчанию AdGuard не блокирует запросы, которые загружаются во вкладке браузера (например, «обход основного фрейма»). Идея заключается в том, чтобы не препятствовать загрузке страниц, поскольку пользователь явно указал, что он хочет, чтобы эта страница была загружена. Однако, если использовать модификатор `$document`, то AdGuard не будет использовать эту логику и предотвратит загрузку страницы. Другими словами, заблокирует её.

Если этот модификатор используется в правиле-исключении (`@@`), то оно полностью отключает блокировку на соответствующих страницах. Это равносильно одновременному использованию модификаторов `$elemhide`, `$content`, `$urlblock`, `$jsinject` и `$extension`.

**Примеры**

- `@@||example.com^$document ` полностью отключает фильтрацию на всех страницах сайта `example.com` и всех его поддоменах.

- `||example.com^$document` блокирует запрос HTML-документа на `example.com` с помощью блокирующей страницы.
- `||example.com^$document,redirect=noopframe` перенаправляет запрос HTML-документа сайта `example.com` на пустой HTML-документ.
- `||example.com^$document,removeparam=test` удаляет параметр `test` из запроса HTML-документа к `example.com`.
- `||example.com^$document,replace=/test1/test2/` заменяет `test1` на `test2` в запросе HTML-документа к `example.com`.

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

##### `$ping` modifier limitations {#ping-modifier-limitations}

:::caution Ограничения

AdGuard для Windows, Mac и Android часто не может точно определить `navigator.sendBeacon()`. Не рекомендуется использовать `$ping` в фильтрах, которые должны использоваться продуктами AdGuard на базе CoreLibs.

:::

:::info Совместимость

Rules with `$ping` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

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

##### `$subdocument` modified limitations {#subdocument-modifier-limitations}

:::caution Ограничения

In AdGuard for Windows, Mac, and Android subdocuments are being detected by the [Sec-Fetch-Dest header][] if it is present. В противном случае некоторые основные страницы могут рассматриваться как поддокументы.

:::

:::info Совместимость

Правила с модификатором `$subdocument` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$websocket`** {#websocket-modifier}

Правило применяется только к соединениям WebSocket.

##### `$websocket` modifier limitations {#websocket-modifier-limitations}

:::caution Ограничения

For AdGuard for Safari and AdGuard for iOS, it is supported on devices with macOS Monterey (version 12) and iOS 16 or higher respectively.

:::

:::info Совместимость

Модификатор `$websocket` поддерживается во всех продуктах AdGuard, кроме AdGuard Content Blocker.

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

- `||example.com^$webrtc,domain=example.org` — это правило блокирует WebRTC-соединения c `example.com` от `example.org`.
- `@@*$webrtc,domain=example.org` — это правило отключает оболочку RTC для `example.org`.

### Модификаторы правил исключений {#exception-modifiers}

Правила исключений отключают действие других базовых правил для адресов, которым они соответствуют. Они начинаются с маркера `@@`. Для таких правил работают все базовые модификаторы, перечисленные выше. Также добавляется несколько специальных модификаторов, которые будут описаны ниже.

:::note Визуальное представление

Рекомендуем также прочитать [шпаргалку по фильтрам от Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), чтобы лучше понять, как строятся правила исключений.

:::

<!-- Please keep them sorted -->

| Модификатор \ Продукты                 | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] |    [AdGuard for Chrome MV3][ext-mv3]     | [AdGuard для Firefox][ext-ff] |          [AdGuard для iOS][ios-app]          |        [AdGuard для Safari][ext-saf]         | [AdGuard Content Blocker][and-cb] |
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

**Синтаксис**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` обозначает конкретное имя пользовательского скрипта, которое должно быть отключено модификатором. Модификатор может содержать любое количество имён пользовательских скриптов или не содержать их вовсе. В последнем случае модификатор отключает все пользовательские скрипты.

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
- `@@||example.com^$extension='AdGuard Assistant'|'AdGuard Popup Blocker'` disables both `AdGuard Assistant` and `AdGuard Popup Blocker` userscripts on `example.com` website.
- `@@||example.com^$extension=~"AdGuard Assistant"` отключает все пользовательские скрипты на сайте `example.com`, кроме `AdGuard Assistant`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"AdGuard Popup Blocker"` disables all user scripts on `example.com` website, except `AdGuard Assistant` and `AdGuard Popup Blocker`.
- `@@||example.com^$extension` — пользовательские скрипты не будут работать на страницах сайта `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` отключает пользовательский скрипт `AdGuard "Assistant"` на сайте `example.com`.

:::info Совместимость

- Только AdGuard для Windows, Mac и Android имеют технические возможности для поддержки правил с модификатором `$extension`.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Forbids adding of JavaScript code to the page. О скриптлетах и javascript-правилах речь пойдёт ниже.

**Примеры**

- `@@||example.com^$jsinject` отменяет все javascript-правила для страниц на сайте `example.com` и на всех его поддоменах.

##### `$jsinject` modifier limitations {#jsinject-modifier-limitations}

:::info Limitations

Rules with the [`$jsinject`][jsinject-in-mv3] modifier cannot be converted to DNR in [AdGuard for Chrome MV3][ext-mv3]. We only use them in the [TSUrlFilter][] engine to disable some cosmetic rules.

:::

:::info Совместимость

The `$jsinject` modifier is not supported by AdGuard for Chrome MV3 ([yet][jsinject-in-mv3]) and AdGuard Content Blocker.

:::

#### **`$stealth`** {#stealth-modifier}

Disables the Tracking protection (formerly Stealth Mode) module for all corresponding pages and requests.

**Синтаксис**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` stand for certain Tracking protection options disabled by the modifier. Модификатор может содержать любое количество опций (см. ниже) или не содержать их вовсе. In the latter case the modifier disables all the Tracking protection features.

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

- `@@||example.com^$stealth` disables Tracking protection for `example.com` (and subdomains) requests, except for blocking cookies and hiding tracking parameters (see below).
- `@@||domain.com^$script,stealth,domain=example.com` disables Tracking protection only for script requests to `domain.com` (and its subdomains) on `example.com` and all its subdomains.
- `@@||example.com^$stealth=3p-cookie|dpi` отключает блокировку сторонних куки-файлов и меры защиты от DPI для запросов к `example.com`.

:::note

Блокировка куки и удаление параметров отслеживания достигается с помощью правил с модификаторами [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) и [`$removeparam`](#removeparam-modifier). Правила-исключения, которые содержат только модификатор `$stealth`, не будут выполнять эти действия. If you want to completely disable all Tracking protection features for a given domain, you must include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Ограничения

- Параметры модификатора должны быть написаны строчными буквами, т. е. `$stealth=DPI` будет отклонено.
- Параметры модификатора не могут отрицаться, т.е. `$stealth=~3p-cookie` будет отклонён.
- Браузерное расширение AdGuard поддерживает только опции `searchqueries`, `donottrack`, `referrer`, `xclientdata`, `1p-cookie` и `3p-cookie`.

:::

:::info Совместимость

- Tracking protection (formerly Stealth Mode) is available in AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox and Chromium-based browsers, except AdGuard for Chrome MV3. Все остальные продукты будут игнорировать правила с модификатором `$stealth`.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Отключает все правила [`$cookie`](#cookie-modifier) и блокировку всех запросов со страниц, соответствующих правилу.

**Примеры**

- `@@||example.com^$urlblock` — любые запросы, отправленные со страниц сайта `example.com` и всех его поддоменов, не будут блокироваться.

##### `$urlblock` modifier limitations {#urlblock-modifier-limitations}

:::caution Ограничения

В AdGuard для iOS и AdGuard для Safari правила `$urlblock` работают как [исключение $document](#document-modifier) — они разблокируют всё.

:::

:::info Совместимость

Rules with `$urlblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

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

##### `$genericblock` modifier limitations {#genericblock-modifier-limitations}

:::caution Ограничения

В AdGuard для iOS и AdGuard для Safari правила `$genericblock` работают как [исключение $document](#document-modifier) — они разблокируют всё.

:::

:::info Совместимость

Rules with `$genericblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

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

| Модификатор \ Продукты                     |       [Приложения CoreLibs][cl-apps]        | [AdGuard для Chromium][ext-chr] |      [AdGuard for Chrome MV3][ext-mv3]      |        [AdGuard для Firefox][ext-ff]        | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------------- |:-------------------------------------------:|:-------------------------------:|:-------------------------------------------:|:-------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |                      ✅                      |                ✅                |     ✅ [*[1]](#all-modifier-limitations)     |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |                      ✅                      |                ✅                |  ✅ [*[2]](#badfilter-modifier-limitations)  |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |                      ✅                      |                ✅                |   ✅ [*[3]](#cookie-modifier-limitations)    |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$xmlprune](#xmlprune-modifier)             |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       | ✅ [*[4]](#permissions-modifier-limitations) |                ✅                |                      ✅                      | ✅ [*[4]](#permissions-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |                      ✅                      |                ✅                |  ✅ [*[5]](#redirect-modifier-limitations)   |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |                      ✅                      |                ✅                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |                      ✅                      |                ❌                |                      ⏳                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |                      ✅                      |                ✅                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |                      ✅                      |                ✅                | ✅ [*[6]](#removeparam-modifier-limitations) |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |                      ✅                      |                ❌                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$urltransform](#urltransform-modifier)     |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [noop](#noop-modifier)                      |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "устарел")       |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "устарел")           |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ⏳ — feature that is planned to be implemented but is not yet available in any product
- ❌ — не поддерживается
- 👎 — устарел; всё ещё поддерживается, но в будущем будет удалён

:::

#### **`$all`** {#all-modifier}

Модификатор `$all` состоит из [всех модификаторов content-type](#content-type-modifiers) и [`$popup`](#popup-modifier). Например, правило `||example.org^$all` конвертируется в правило:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

:::caution Ограничения

Этот модификатор нельзя использовать как исключение с маркером `@@`.

:::

##### `$all` modifier limitations {#all-modifier-limitations}

:::caution Ограничения

Since `$popup` is a part if `$all`, the `$all` modifier is not supported by AdGuard for Chrome MV3 because of [`$popup` modifier limitations](#popup-modifier-limitations).

:::

:::info Совместимость

Правила с модификатором `$all` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$badfilter`** {#badfilter-modifier}

Правила, содержащие модификатор `$badfilter`, отключают другие базовые правила, на которые они ссылаются. Это означает, что текст отключённого правила должен соответствовать тексту `$badfilter`-правила (за исключением самого модификатора `$badfilter`).

**Примеры**

- `||example.com$badfilter` отключает `||example.com`
- `||example.com$image,badfilter` отключает `||example.com$image`
- `@@||example.com$badfilter` отключает `@@||example.com`
- `||example.com$domain=domain.com,badfilter` отключает `||example.com$domain=domain.com`

Правила с модификатором `$badfilter` могут отключать другие базовые правила для определённых доменов, если они соответствуют следующим условиям:

1. В правиле есть модификатор `$domain`
1. В модификаторе `$domain` нет отрицания домена `~`

В этом случае, правило с `$badfilter` отключит соответствующее базовое правило для доменов, указанных как в правиле с `$badfilter`, так и в базовом правиле. Обратите внимание, что [логика wildcard для доменов верхнего уровня (TLD)](#wildcard-for-tld) здесь также применима.

**Примеры**

- `/some$domain=example.com|example.org|example.io` отключено для `example.com` правилом `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` и `/some$domain=example.io` полностью отключены правилом `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` полностью отключено правилом `/some$domain=example.*,badfilter`
- `/some$domain=example.*` отключено для `example.com` и `example.org` правилом `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` НЕ отключено для `example.com` правилом `/some$domain=example.com|~example.org,badfilter`, поскольку значение модификатора `$domain` содержит отрицание домена

##### `$badfilter` modifier limitations {#badfilter-modifier-limitations}

:::caution Ограничения

In [AdGuard for Chrome MV3][ext-mv3] a rule with the `$badfilter` modifier is applied in DNR only if it fully cancels the source rule. We cannot calculate it if it is only partially canceled. [Examples](https://github.com/AdguardTeam/tsurlfilter/tree/epic/tswebextension/packages/tsurlfilter/src/rules/declarative-converter#badfilter)

:::

:::info Совместимость

Правила с модификатором `$badfilter` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$cookie`** {#cookie-modifier}

Модификатор `$cookie` полностью меняет поведение правила. Вместо того, чтобы блокировать запрос, этот модификатор позволяет AdGuard блокировать или изменять заголовки `Cookie` или `Set-Cookie`.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил `$cookie` соответствуют одному запросу, мы применим каждое из них по очереди.

**Синтаксис**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

где:

- **`name`** — опционально, строка или регулярное выражение для сопоставления с именем куки.
- **`seconds`** — количество секунд, на которое сместится истечение срока действия куки.
- **`strategy`** — string for [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) strategy to be applied to the cookie.

Например,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

каждый раз, когда AdGuard встречает куки с именем `NAME` в запросе к `example.org`, он будет делать следующее:

- Установит дату истечения срока хранения на текущее время плюс `3600` секунд
- Позволяет куки использовать стратегию [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Экранирование специальных символов**

Если для сопоставления используется регулярное выражение `name`, необходимо экранировать два символа: запятую `,` и знак доллара `$`. Use backslash `\` to escape each of them. Например, экранированная запятая будет выглядеть так: `\,`.

**Примеры**

- `||example.org^$cookie` блокирует **все** куки, установленные `example.org`; это эквивалентно установке `maxAge=0`
- `$cookie=__cfduid` блокирует куки CloudFlare везде
- `$cookie=/__utm[a-z]/` блокирует куки Google Analytics везде
- `||facebook.com^$third-party,cookie=c_user` не позволяет Facebook отслеживать вас, даже если вы вошли в систему

Существует два способа деактивации правил `$cookie`: основной предполагает использование исключения с `@@` — `@@||example.org^$cookie`. Альтернативный метод использует исключение `$urlblock` (также входящее в псевдоним исключения `$document` — `$elemhide,jsinject,content,urlblock,extension`). Вот как это работает:

- `@@||example.org^$cookie` разблокирует все куки-файлы, установленные `example.org`
- `@@||example.org^$urlblock` разблокирует все файлы куки, установленные `example.org`, и отключает блокировку всех запросов, отправленных с `example.org`
- `@@||example.org^$cookie=concept` разблокирует один куки-файл с именем `concept`
- `@@||example.org^$cookie=/^_ga_/` разблокирует все куки, соответствующие регулярному выражению

##### `$cookie` modifier limitations {#cookie-modifier-limitations}

:::caution Ограничения

In [AdGuard for Chrome MV3][ext-mv3] we delete cookies in 2 ways: from `content-script` side (to which we have access) and from `onBeforeSendHeaders` listener. Since `onBeforeSendHeaders` and other listeners are no longer blocking, we are not able to delete them in all cases. You can check if a rule works with [this test](https://testcases.agrd.dev/Filters/cookie-rules/test-cookie-rules).

:::

:::caution Ограничения

`$cookie` rules support these types of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`, `strict-third-party`, and `strict-first-party`.

:::

:::info Совместимость

Правила с модификатором `$cookie` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и AdGuard для Safari.

:::

#### **`$csp`** {#csp-modifier}

Этот модификатор полностью меняет поведение правила. Когда он применяется, правило не блокирует запрос. Вместо этого будут изменены заголовки ответа.

:::info

Чтобы использовать правила этого типа, необходимо базовое понимание слоя безопасности [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

:::

Для запросов, подходящих под `$csp`-правило, мы усилим политику безопасности ответа, добавив дополнительную политику, равнозначную содержимому модификатора `$csp`. Правила `$csp` применяются независимо от правил любого другого типа. На него могут повлиять **только исключения на уровне документа** (см. раздел с примерами), но никак не другие базовые правила.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил `$csp` соответствуют одному запросу, мы применим каждое из них.

**Синтаксис**

Синтаксис значений `$csp` похож на синтаксис заголовков Политики Безопасности Контента.

Значение `$csp` может быть пустым в случае правил-исключений. См. примеры ниже.

**Примеры**

- `||example.org^$csp=frame-src 'none'` запрещает все фреймы на example.org и его поддоменах.
- `@@||example.org/page/*$csp=frame-src 'none'` отключает все правила с модификатором `$csp`, в точности соответствующим `frame-src 'none'` на всех страницах, подходящих под паттерн правила. Например, правило выше.
- `@@||example.org/page/*$csp` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` отключает инлайн-скрипты на всех страницах, подходящих под паттерн правила.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$csp`-правила на всех страницах, подходящих под паттерн правила.

:::caution Ограничения

- Некоторые символы запрещены в значении `$csp`: `,`, `$`.
- `$csp` rules support three types of modifiers: `$domain`, `$important`, `$subdocument`.
- Правила с директивами `report-*` считаются некорректными.

:::

:::info Совместимость

Правила с модификатором `$csp` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и AdGuard для Safari.

:::

#### **`$hls`** {#hls-modifier}

Правила `$hls` модифицируют ответ на соответствующий правилу запрос. Они предназначены для удаления сегментов из [HLS-плейлистов (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

Слово segment в документации означает Media Segment или playlist (как часть Master Playlist): с точки зрения правил `$hls`, Master Playlist и Media Playlist неразличимы.

:::

**Синтаксис**

- `||example.org^$hls=urlpattern` удаляет сегменты, URL которых соответствует паттерну `urlpattern`. Паттерн работает так же, как в базовых URL-правилах, однако символы `/`, `$` и `,` в составе `urlpattern` необходимо экранировать с помощью `\`.
- `||example.org^$hls=/regexp/options` удаляет сегменты, в которых URL-адрес или один из тегов (для определённых параметров, если они есть) соответствуют регулярному выражению `regexp`. Доступные значения `options`:
    - `t` — вместо URL-адреса сегмента проверять каждый тег сегмента на соответствие регулярному выражению. Сегмент с соответствующим тегом будет удалён;
    - `i` — сделать регулярное выражение нечувствительным к регистру символов.

Символы `/`, `$` и `,` должны быть экранированы символом `\` внутри `regexp`.

**Исключения**

Базовые URL-исключения не должны отключать правила с модификатором `$hls`. Отключить их можно следующим образом:

- `@@||example.org^$hls` отключает все правила `$hls` для ответов от URL-адресов, соответствующих `||example.org^ URL`.
- `@@||example.org^$hls=text` отключает все правила `$hls`, у которых значение модификатора `$hls` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

:::tip

`$hls` также можно отключить с помощью правил-исключений с модификаторами `$document`, `$content` и `$urlblock`.

:::

:::note

Если несколько правил `$hls` соответствуют одному и тому же запросу, их эффект суммируется.

:::

**Примеры**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` удаляет все сегменты с соответствующим URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` делает почти то же самое, но с помощью регулярного выражения вместо URL-паттерна.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` удаляет все сегменты с соответствующим тегом.

**О формате HLS-плейлистов**

Краткое описание [спецификации](https://datatracker.ietf.org/doc/html/rfc8216):

1. HLS-плейлист — это набор текстовых строк
1. Можно использовать пустую строку, комментарий (начинается с `#`), тег (тоже начинается с `#`, распознаётся по содержанию) или URL
1. Строка с URL называется сегментом
1. Тег может относиться к одному сегменту, т.е. к первой строке с URL, следующей после данного тега, ко всем последующим сегментам (пока не встретится тег с тем же названием) или ко всему плейлисту

Замечания, касающиеся правил `$hls`:

1. Когда сегмент удаляется, все теги, относящиеся только к нему, тоже удаляются
1. Теги, относящиеся к нескольким сегментам, удаляются, если все эти сегменты были удалены
1. Поскольку различные типы тегов невозможно распознать по синтаксису, мы распознаем все теги, указанные в RFC, плюс некоторые нестандартные теги, которые встречались нам в полевых условиях. Любые строки, начинающиеся с `#` и не распознанные как тег, пропускаются без модификации и не сопоставляются с правилами
1. Tags will not be matched if they apply to the entire playlist, and `$hls` rules cannot be used to remove them, as these rule types are intended for segment removals. Если вы знаете, что делаете, вы можете использовать правила `$replace` для удаления или перезаписи только одного тега из плейлиста

**Пример работы правил:**

<details>
<summary>Исходный ответ</summary>

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
<summary>Применённые правила</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Модифицированный ответ</summary>

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

- Rules with the `$hls` modifier can only be used [**in trusted filters**](#trusted-filters).
- `$hls` rules are compatible with the modifiers `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest` only.
- Правила `$hls` применимы только к HLS-плейлистам, т. е. к тексту в кодировке UTF-8, начинающемуся со строки `#EXTM3U`. Никакие другие ответы не будут модифицированы этими правилами.
- Правила с `$hls` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$hls` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later.

:::

#### **`$inline-script`** {#inline-script-modifier}

Модификатор `$inline-script` предназначен для блокировки встроенного в страницу кода JavaScript с использованием политики безопасности контента (CSP). Он повышает безопасность, не позволяя загружать встроенную рекламу или потенциально вредоносные скрипты. Правило `||example.org^$inline-script` конвертируется в правило синтаксиса CSP:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

Модификатор `$inline-font` предназначен для блокировки встроенных в страницу шрифтов с использованием политики безопасности контента (CSP). Он повышает безопасность, не позволяя загружать встроенные шрифты, которые могут использоваться для сбора данных и фингерпринтинга. Правило `||example.org^$inline-font` конвертируется в правило синтаксиса CSP:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

Правила `$jsonprune` модифицируют ответ на соответствующий запрос, удаляя JSON-элементы, которые соответствуют модифицированному выражению [JSONPath](https://goessner.net/articles/JsonPath/). Эти правила не изменяют ответы, которые не являются действительными JSON-документами.

In AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Синтаксис**

- `||example.org^$jsonprune=expression` удаляет из ответа элементы, соответствующие изменённому JSONPath-выражению `expression`.

Из-за особенностей работы парсинга правил символы `$` и `,` внутри `expression` должны экранироваться символом `\`.

Модифицированный синтаксис JSONPath имеет следующие отличия от оригинального:

1. Выражения на сценарном языке (script expressions) не поддерживаются
1. Поддерживаемые предикаты (filter expressions):
    - `?(has <key>)` — верно, если текущий объект содержит указанный ключ
    - `?(key-eq <key> <value>)` — верно, если текущий объект содержит указанный ключ и его значение равно указанному
    - `?(key-substr <key> <value>)` — верно, если указанное значение является подстрокой значения ключа текущего объекта
1. Пробелы вне двойных или одинарных кавычек игнорируются
1. Можно использовать строки как с двойными, так и с одинарными кавычками
1. Выражения, оканчивающиеся на `..`, не поддерживаются
1. Разрешено указывать несколько срезов массива (array slices) в квадратных скобках

Существуют различные онлайн-инструменты, которые делают работу с выражениями JSONPath удобнее:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Обратите внимание, что различные имплементации JSONPath обладают уникальными особенностями и могут быть несовместимы друг с другом.

**Исключения**

Базовые URL-исключения не должны отключать правила с модификатором `$jsonprune`. Отключить их можно следующим образом:

- `@@||example.org^$jsonprune` отключает все правила `$jsonprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$jsonprune=text` отключает все правила `$jsonprune`, у которых значение модификатора `$jsonprune` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

`$jsonprune` также можно отключить с помощью правил-исключений с модификаторами `$document`, `$content` и `$urlblock`.

:::note

Когда одному и тому же запросу соответствует несколько правил с модификатором `$jsonprune`, они сортируются в лексикографическом порядке: первое правило применяется к исходному ответу, а каждое из оставшихся правил применяется к результату применения предыдущего.

:::

**Примеры**

- `||example.org^$jsonprune=\$..[one\, "two three"]` удаляет все вхождения ключей one и two three в любом месте JSON-документа.

<details>
<summary>До</summary>

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
<summary>После</summary>

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
<summary>До</summary>

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
<summary>После</summary>

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
<summary>До</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>После</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Вложенные выражения JSONPath**

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.11 or later, JSONPath expressions may be used as keys in filter expressions.

- `||example.org^$jsonprune=\$.elems[?(has "\$.a.b.c")]` удаляет всех прямых потомков `elems`, которые обладают свойством, выбираемым JSONPath-выражением `$.a.b.c`.

<details>
<summary>До</summary>

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
<summary>После</summary>

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
<summary>До</summary>

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
<summary>После</summary>

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

- `$jsonprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- Правила с `$jsonprune` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

Правила `$xmlprune` модифицируют ответ на соответствующий запрос, удаляя XML-элементы, которые соответствуют модифицированному выражению [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/). Выражение должно возвращать [набор узлов](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). Правила `$xmlprune` не изменяют ответы, которые не являются правильно сформированными XML-документами.

**Синтаксис**

- `||example.org^$xmlprune=expression` удаляет из ответа элементы, соответствующие XPath-выражению `expression`.

Из-за особенностей работы парсинга правил символы `$` и `,` внутри `expression` должны экранироваться символом `\`.

**Исключения**

Базовые URL-исключения не должны отключать правила с модификатором `$xmlprune`. Отключить их можно следующим образом:

- `@@||example.org^$xmlprune` отключает все правила `$xmlprune` для ответов от URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$xmlprune=text` отключает все правила `$xmlprune`, у которых значение модификатора `$xmlprune` равно `text`, для ответов с URL-адресов, соответствующих `||example.org^ URL`.

`$xmlprune` также можно отключить с помощью правил-исключений с модификаторами `$document`, `$content` и `$urlblock`.

:::note

Если одному и тому же запросу соответствует несколько правил `$xmlprune`, они применяются в лексикографическом порядке.

:::

**Примеры**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` removes odd-numbered books from the bookstore.

<details>
<summary>До</summary>

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
<summary>После</summary>

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
<summary>До</summary>

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
<summary>После</summary>

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
<summary>До</summary>

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
<summary>После</summary>

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

- `$xmlprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- Правила с `$xmlprune` не применяются к ответам размером больше 10 МБ.

:::

:::info Совместимость

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

По сути, это правила типа Firewall, позволяющие полностью блокировать или разблокировать доступ к указанному удалённому адресу.

1. Правила `$network` соответствуют **только IP-адресам**! Вы не можете использовать их, чтобы блокировать или разблокировать доступ к домену.
2. Чтобы сопоставить адрес IPv6, вы должны использовать сжатый синтаксис, например, использовать `[2001:4860:4860::8888]$network` вместо `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Правило белого списка `$network` заставляет AdGuard обходить данные до соответствующей конечной точки, поэтому никакой дальнейшей фильтрации не будет.
4. Если часть IP начинается и заканчивается символом `/`, она рассматривается как регулярное выражение.

Рекомендуем ознакомиться [с этой статьёй](#regexp-support) для лучшего понимания регулярных выражений.

:::caution Ограничения

Модификатор `$network` можно использовать в правилах только вместе с модификаторами `$app` и `$important`, но не с какими-либо другими модификаторами.

:::

**Примеры**

- `174.129.166.49:3478^$network` блокирует доступ к `174.129.166.49:3478` (но не к `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` блокирует доступ к `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` блокирует доступ к `174.129.166.49:*`.
- `@@174.129.166.49$network` заставляет AdGuard направлять трафик в конечную точку. Никакие другие правила применяться не будут.
- `/.+:3[0-9]{4}/$network` блокирует доступ к диапазанону портов 30000–39999.
- `/8.8.8.(:?8|4)/$network` блокирует доступ к `8.8.8.8` и к `8.8.8.4`.

:::info Совместимость

Только в AdGuard для Windows, Mac и Android есть технические возможности для поддержки правил с модификатором `$network`.

:::

#### **`$permissions`** {#permissions-modifier}

Этот модификатор полностью меняет поведение правила. Когда он применяется, правило не блокирует запрос. Вместо этого будут изменены заголовки ответа.

:::info

Чтобы использовать правила этого типа, необходимо базовое понимание слоя безопасности [Feature Policy](https://developer.mozilla.org/ru/docs/Web/HTTP/Permissions_Policy).

:::

Для запросов, соответствующих правилу `$permissions`, AdGuard усиливает «политику функций» ответа, добавляя дополнительную политику, равную содержимому модификатора `$permissions`. Правила `$permissions` применяются независимо от правил любого другого типа. На него могут повлиять **только исключения на уровне документа** (см. раздел с примерами), но никак не другие базовые правила.

**Синтаксис**

`$permissions` value syntax is identical to that of the `Permissions-Policy` header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) with the following exceptions:

1. A comma that separates multiple features **MUST** be escaped — see examples below.
2. A pipe character (`|`) can be used instead of a comma to separate features.

The list of available directives is available [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

`$permissions` value can be empty in the case of exception rules — see examples below.

**Примеры**

- `||example.org^$permissions=autoplay=()` запрещает автовоспроизведение медиафайлов, запрашиваемых через интерфейс `HTMLMediaElement` на сайте `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` отключает все правила с модификатором `$permissions`, в точности соответствующим `autoplay=()` на всех страницах, подходящих под паттерн правила. Например, правило выше. It is important to note that the exception rule only takes effect in the case of an **exact value match**. For example, if you want to disable the rule  `$permissions=a=()\,b=()`, you need exception rule `@@$permissions=a=()\,b=()`, and **not** `@@$permissions=b=()\,a=()`, **nor** `@@$permissions=b=()` because `b=()\,a=()` or `b=()` does not match with `a=()\,b=()`.
- `@@||example.org/page/*$permissions` отключает все `$permissions`-правила на всех страницах, подходящих под паттерн правила.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` запрещает использование Storage Access API для запроса доступа к неразмеченным куки, а также использование устройств видеоввода на сайтах `example.org` и `example.com`.
- `$domain=example.org|example.com,permissions=storage-access=()|camera=()` does the same — a `|` can be used to separate the features instead of an escaped comma.
- `@@||example.org^$document` или `@@||example.org^$urlblock` отключает все `$permission`-правила на всех страницах, подходящих под паттерн правила.

:::note

`$permissions` rules only take effect for main frame and sub frame requests. This means they are applied when a page is loaded or when an iframe is loaded.

:::

:::note

If there are multiple `$permissions` rules that match the same request, multiple `Permissions-Policy` headers will be added to the response for each rule with their `$permissions` value. So if you have two rules: `||example.org^$permissions=autoplay=()` and `||example.org^$permissions=geolocation=()\,camera=()` that match the same request, the response will contain two `Permissions-Policy` headers: `autoplay=()` and `geolocation=()\,camera=()`.

:::

##### `$permissions` modifier limitations {#permissions-modifier-limitations}

:::caution Ограничения

Firefox ignores the `Permissions-Policy` header. For more information, see [this issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1694922).

:::

:::caution Ограничения

1. В модификаторе `$permissions` запрещён символ `$`.
2. `$permissions` is compatible with a limited set of modifiers: `$domain`, `$important`, `$subdocument`, and [content-type modifiers](#content-type-modifiers).
3. Правила с модификатором `$permissions`, не содержащие [модификаторов типа контента](#content-type-modifiers), будут соответствовать только тем запросам, которые имеют тип контента `document`.

:::

:::info Совместимость

- Rules with the `$permissions` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.
- Pipe separator `|` instead of escaped comma is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.14 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard способен перенаправлять веб-запросы на локальный «ресурс».

**Синтаксис**

AdGuard использует тот же синтаксис правил фильтрации, что и uBlock Origin. Также он совместим с модификатором ABP `$rewrite=abp-resource`.

`$redirect` — это модификатор для [базовых правил фильтрации](#basic-rules), поэтому правила с этим модификатором поддерживают остальные базовые модификаторы, такие как `$domain`, `$third-party`, `$script` и т. д.

Значение модификатора `$redirect` должно быть именем ресурса, который будет использован для переадресации.

##### Отключение правил `$redirect`

- `||example.org/script.js$script,redirect=noopjs` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — это правило перенаправляет все запросы к `example.org/script.js` на ресурс с именем `noopmp4-1s`.
- `@@||example.org^$redirect` отключит все правила `$redirect` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$redirect=nooptext` отключит все правила с `$redirect=nooptext` для любого запроса, который соответствует `||example.org^`.

More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Приоритеты правил `$redirect` {#redirect-rule-priorities}

У правил с `$redirect` более высокий приоритет, чем у обычных базовых правил блокировки. Это означает, что если существует базовое правило блокировки, то правило `$redirect` будет его отменять. У правил белого списка с пометкой `@@` более высокий приоритет, чем у правил `$redirect`. Если базовое правило с модификатором `$important` и правило `$redirect` соответствуют одному и тому же URL-адресу, последнее переопределяется, если оно также не помечено как `$important`.

<!-- Please do not replace `>` by `→` -->

**`$important` > `@@` > `$redirect` > `базовые правила`.**

Перейдите [к приоритетам правил](#rule-priorities) для более подробной информации.

##### `$redirect` modifier limitations {#redirect-modifier-limitations}

:::caution Ограничения

In [AdGuard for Chrome MV3][ext-mv3] allowlist rules with `$redirect` are not supported.

:::

:::info Совместимость

- Rules with `$redirect` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], and [AdGuard for Safari][ext-saf] .
- `$redirect` в uBlock Origin поддерживает указание приоритета, например, `$redirect=noopjs:42`. AdGuard не поддерживает его и вместо этого просто отбрасывает приоритетный постфикс.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

По сути это другое имя [`$redirect`](#redirect-modifier), поскольку он имеет те же значения «перенаправления» и почти аналогичную логику. Разница в том, что `$redirect-rule` применяется только в том случае, если целевой запрос заблокирован другим базовым правилом.

Перейдите [к приоритетам правил](#rule-priorities) для более подробной информации.

Отключение `$redirect-rule` работает точно так же, как для обычных правил `$redirect`. Даже более того, `@@||example.org^$redirect` будет отключать как правило `$redirect`, так и `$redirect-rule`.

**Примеры**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

В этом случае только запросы к `example.org/script.js` будут перенаправлены на `noopjs`. Все остальные запросы к `example.org` останутся без изменений.

:::info Совместимость

Rules with `$redirect-rule` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], [AdGuard for Safari][ext-saf], and [AdGuard for Chrome MV3][ext-mv3]. [The discussion about adding support for `$redirect-rule` rules in Chrome MV3 extensions](https://github.com/w3c/webextensions/issues/493) is currently open.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

These rules allow overriding of a page's [referrer policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). В ответах на соответствующие запросы все заголовки `Referrer-Policy` заменит один заголовок со значением, равным значению модификатора правила сопоставления. Если ответ содержит HTML-документ с тегом `<meta name="referrer"...`, то атрибут `content` этого тега также будет заменён на значение модификатора.

Правило исключения со значением модификатора отключает правило блокировки с тем же значением. Правило исключения без значения модификатора отключает все совпадающие правила referrer-policy.

Если запрос соответствует нескольким правилам `$referrerpolicy`, не отключённым исключениями, то применяется только одно из них (какое именно — не уточняется). Правила `$referrerpolicy` без указанных [модификаторов типа контента](#content-type-modifiers) применяются к типам контента `$document` и `$subdocument`.

**Примеры**

- `||example.com^$referrerpolicy=unsafe-url` переопределяет политику referrer для `example.com` с `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` отключает предыдущее правило.
- `@@||example.com/abcd.html^$referrerpolicy` отключает все правила `$referrerpolicy` на `example.com/abcd.html`.

:::info Совместимость

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later.

:::

#### **`$removeheader`** {#removeheader-modifier}

Правила с модификатором `$removeheader` предназначены для того, чтобы убирать заголовки HTTP-запросов и ответов. Изначальная мотивация для создания этого типа правил заключалась в том, чтобы иметь возможность избавиться от заголовка `Refresh`, который часто используется для перенаправления пользователей на нежелательную страницу. Однако применение данного модификатора не ограничивается этим случаем.

Как и в случае с `$csp`, `$redirect`, `$removeparam` и `$cookie`, этот модификатор существует независимо, правила с ним не зависят от обычных базовых правил, то есть регулярные выражения или блокирующие правила никак на них не повлияют. По умолчанию они работают только применительно к заголовкам ответов. Но вы также можете изменить его, чтобы удалить заголовки из HTTP-запросов.

**Синтаксис**

**Базовый синтаксис**

- `||example.org^$removeheader=header-name` убирает заголовок **ответа** с названием `header-name`
- `||example.org^$removeheader=request:header-name` убирает заголовок **запроса** с названием `header-name`

`$removeheader` нечувствителен к регистру, но мы настоятельно рекомендуем всегда использовать нижний регистр.

**Отрицание `$removeheader`**

Этот тип правил работает почти так же, как и с модификаторами `$csp` и `$redirect`.

Используйте `@@`, чтобы отменить `$removeheader`:

- `@@||example.org^$removeheader` отменяет **все** правила `$removeheader` для URL-адресов, соответствующих `||example.org^`.
- `@@||example.org^$removeheader=header` отменяет все правила с `$removeheader=header` для любого запроса, соответствующего `||example.org^`.

Правила с `$removeheader` также можно отключить, используя правила-исключения `$document` и `$urlblock`. Но базовые правила-исключения без модификаторов не смогут этого сделать. Например, `@@||example.com^` не отключит `$removeheader=p` для запросов к `example.com`, а `@@||example.com^$urlblock` отключит.

:::note

В случае, когда несколько правил с `$removeheader` соответствуют одному запросу, мы будем применять их все по очереди.

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

:::caution Ограничения

This type of rules can only be used [**in trusted filters**](#trusted-filters).

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

1. `$removeheader` rules are only compatible with `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and [content type modifiers](#content-type-modifiers) such as `$script` and `$stylesheet`. Правила с другими модификаторами считаются некорректными и не будут применены.

:::

:::info Совместимость

Rules with `$removeheader` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Chrome, Firefox, and Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

Модификатор `$removeparam` — это полный аналог модификатора `$queryprune`. Поскольку модификатор `$queryprune` считается устаревшим, рекомендуем везде использовать только модификатор `$removeparam`.

:::

Правила с модификатором `$removeparam` предназначены для того, чтобы убирать параметры запроса из URL-адресов. Обратите внимание, что такие правила применяются только к запросам `GET`, `HEAD`, `OPTIONS` и иногда к `POST`.

**Синтаксис**

**Базовый синтаксис**

- `$removeparam=param` убирает параметр запроса с именем `param` из URL любого запроса. Например, запрос к `http://example.com/page?param=1&&another=2` будет преобразован в `http://example.com/page?another=2`.

**Регулярные выражения**

Вы также можете использовать регулярные выражения, чтобы выбрать нужные параметры запроса или их значения:

- `$removeparam=/regexp/[options]` убирает из URL-адреса любого запроса все параметры, соответствующие заданному регулярному выражению `regexp`. В отличие от базового синтаксиса, это означает *«‎убрать параметры запроса, нормализованные к строке `name=value`, которая соответствует `регулярному выражению`»*. `[options]` — это список опций регулярного выражения. На данный момент единственная поддерживаемая опция — это `i`, делающая соответствие нечувствительным к регистру.

**Экранирование специальных символов**

Не забывайте экранировать специальные символы, такие как `,`, `/` и `$` в регулярных выражениях. Используйте для этого символ `\`. Например, экранированная запятая должна выглядеть так: `\,`.

:::note

Правила с регулярными выражениями относятся как к названию, так и к значению параметра. Чтобы свести к минимуму ошибки, рекомендуем начинать регулярное выражение с `/^`, если только вы не хотите специально работать со значениями параметров.

:::

Мы стараемся обнаруживать и игнорировать неэкранированные символы `$` автоматически. По умолчанию не считаем символ разделителем, если верны три условия:

1. Есть сочетание `$/`
1. Слева от символа есть ещё один слеш `/`
1. Слева от этого слеша есть ещё один неэкранированный символ `$`

**Удалите все параметры запроса**

Укажите «‎голый» `$removeparam`, чтобы удалить все параметры запроса:

- `||example.org^$removeparam` удаляет все параметры запроса из URL-адресов, соответствующих правилу `||example.org^`.

**Инверсия**

Используйте `~`, чтобы применить инверсию:

- `$removeparam=~param` удаляет все параметры запроса, кроме `param`.
- `$removeparam=~/regexp/` удаляет все параметры запроса, которые не совпадают с заданным регулярным выражением `regexp`.

**Исключение правил с `$removeparam`**

Этот тип правил работает практически так же, как и в случае с модификаторами [`$csp`](#csp-modifier) и [`$redirect`](#redirect-modifier).

Используйте `@@`, чтобы исключить правило с `$removeparam`:

- `@@||example.org^$removeparam` не даёт применять правила с `$removeparam` для URL, соответствующих `example.org`.
- `@@||example.org^$removeparam=param` не даёт применять правила с `$removeparam=param` для запросов к `example.org`.
- `@@||example.org^$removeparam=/regexp/` не даёт применять правила с `$removeparam=/regexp/` для запросов к `example.org`.

**Несколько правил, соответствующих одному запросу**

В случае, когда несколько правил с `$removeparam` соответствуют одному запросу, они все будут применены по очереди.

**Примеры**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

С помощью этих правил некоторые [UTM-параметры](https://ru.wikipedia.org/wiki/UTM-метки) будут удалены из любого запроса, за исключением запросов к `example.com`, которые не будут удалены вообще. Например, `http://google.com/page?utm_source=s&utm_referrer= fb.com&utm_content=img` будет преобразован в `http://google.com/page`, но на `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` правило блокировки не повлияет.

- `$removeparam=utm_source` удаляет параметр `utm_source` из всех запросов.

- `$removeparam=/utm_.*/` удаляет все параметры `utm_*` из URL любого запроса. Например, запрос `http://example.com/page?utm_source=test` будет трансформирован в `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` удаляет параметр `utm_source` со значением `campaign`. Не затрагивает другие параметры `utm_source`.

**Исключение правила с `$removeparam` и замена его другим**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

Эти правила удаляют Click ID Google, Яндекса и Facebook. Есть одно исключение: Google Click ID (gclid) не будет удалён из запросов к example.com.

**Исключение правила с `$removeparam` для всех параметров**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

Эти правила удаляют указанные UTM-параметры из всех запросов, кроме запросов к `example.org`.

Правила с `$removeparam` также можно отключить с помощью правил исключений с `$document` и `$urlblock`. Но базовые правила исключений без модификаторов не могут этого сделать. Например, `@@||example.com^` не отключит `$removeparam=p` для запросов к **example.com**, а вот `@@||example.com^$urlblock` — отключит.

##### `$removeparam` modifier limitations {#removeparam-modifier-limitations}

:::caution Ограничения

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Regular expressions, negation and allowlist rules are not supported.
- Group of similar `$removeparam` rules will be combined into one. Пример:

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
1. `$removeparam` rules are compatible with [basic modifiers](#basic-rules-basic-modifiers), [content-type modifiers](#content-type-modifiers), and with the `$important` and `$app` modifiers. Правила с любыми другими модификаторами считаются некорректными и не будут применены.
1. `$removeparam` rules without [content type modifiers](#content-type-modifiers) will only match requests where the content type is `document`.

:::

:::info Совместимость

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

Этот модификатор полностью меняет поведение правила. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

- `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc.).
- `$replace` rules do not apply if the size of the original response is more than 10 MB.
- `$replace` rules have a higher priority than other basic rules (**including** exception rules). So if a request natches two different rules, one of which has the `$replace` modifier, this rule will be applied.
- Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
- Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page content with a `$replace` rule and disable cosmetic rules there at the same time.

`$replace` value can be empty in the case of exception rules. See examples section for further information.

**Несколько правил, соответствующих одному запросу**

In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Синтаксис**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Примеры**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:

- `regexp` — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `replacement` — `\$1<\/VAST>` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

You can see how this rule works here: http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Disabling `$replace` rules**

- `@@||example.org^$replace` will disable all `$replace` rules matching `||example.org^`.
- `@@||example.org^$document` or `@@||example.org^$content` will disable all `$replace` rules **originated from** pages of `example.org` **including the page itself**.

:::caution Ограничения

Rules with the `$replace` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Rules with `$replace` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

:::

#### **`$urltransform`** {#urltransform-modifier}

The `$urltransform` rules allow you to modify the request URL by replacing text matched by a regular expression.

**Features**

- `$urltransform` rules normally only apply to the path and query parts of the URL, see below for one exception.
- `$urltransform` will not be applied if the original URL is blocked by other rules.
- `$urltransform` will be applied before `$removeparam` rules.

The `$urltransform` value can be empty for exception rules.

**Несколько правил, соответствующих одному запросу**

If multiple `$urltransform` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Синтаксис**

`$urltransform` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$urltransform` value, two characters must be escaped: the comma `,` and the dollar sign `$`. Use the backslash character `\` for this. For example, an escaped comma looks like this: `\,`.

**Changing the origin**

:::info Совместимость

This section only applies to AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.17 or later.

:::

As stated above, normally `$urltransform` rules are only allowed to change the path and query parts of the URL. However, if the rule's `regexp` begins with the string `^http`, then the full URL is searched and can be modified by the rule. Such a rule will not be applied if the URL transformation can not be achieved via an HTTP redirect (for example, if the request's method is `POST`).

**Примеры**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

There are three parts in this rule:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

**Multiple `$urltransform` rules**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Re-matching rules after transforming the URL**

After applying all matching `$urltransform` rules, the transformed request will be matched against all other rules:

E.g., with the following rules:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

the request to `https://example.com/firstpath` will be blocked.

**Disabling `$urltransform` rules**

- `@@||example.org^$urltransform` will disable all `$urltransform` rules matching `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` will disable the rule with `$urltransform=/Z/Y/` for any request matching `||example.org^`.

`$urltransform` rules can also be disabled by `$document` and `$urlblock` exception rules. Но базовые правила исключений без модификаторов не могут этого сделать. For example, `@@||example.com^` will not disable `$urltransform=/X/Y/` for requests to **example.com**, but `@@||example.com^$urlblock` will.

:::caution Ограничения

Rules with the `$urltransform` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Совместимость

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

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

- `||example.org^$empty` returns an empty response to all requests to `example.org` and all subdomains.

:::info Совместимость

Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$mp4` (устаревший)** {#mp4-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are still supported and being converted into `$redirect=noopmp4-1s,media` now but the support shall be removed in the future.

:::

As a response to blocked request AdGuard returns a short video placeholder.

**Примеры**

- `||example.com/videos/$mp4` blocks all video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

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

#### Priority calculation

To calculate priority, we've categorized modifiers into different groups. These groups are ranked based on their priority, from lowest to highest. A modifier that significantly narrows the scope of a rule adds more weight to its total priority. Conversely, if a rule applies to a broader range of requests, its priority decreases.

It's worth noting that there are cases where a single-parameter modifier has a higher priority than multi-parameter ones. For instance, in the case of `$domain=example.com|example.org`, a rule that includes two domains has a slightly broader effective area than a rule with one specified domain, therefore its priority is lower.

The base priority of any rule is 1. If the calculated priority is a floating-point number, it will be **rounded up** to the smallest integer greater than or equal to the calculated priority.

:::info Совместимость

- The concept of priority has been introduced in [TSUrlFilter][] v2.1.0 and [CoreLibs][] v1.13. Before that AdGuard didn't have any special priority computation algorithm and collisions handling could be different depending on AdGuard product and version.
- AdGuard for iOS, Safari, and AdGuard Content Blocker rely on the browsers implementation and they cannot follow the rules specified here.

:::

:::note

Modifier aliases (`1p`, `3p`, etc.) are not included in these categories, however, they are utilized within the engine to compute the rule priority.

:::

#### Базовые модификаторы, наличие каждого добавляет 1 к приоритету {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) with negated applications using `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$domain`](#domain-modifier) with negated domains using `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) with negated methods using `~`,
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- restricted [content-types](#content-type-modifiers) with `~`.

When dealing with a negated domain, app, method, or content-type, we add **1 point** for the existence of the modifier itself, regardless of the quantity of negated domains or content-types. This is because the rule's scope is already infinitely broad. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Defined content-type modifiers, defined methods, defined headers, $all, $popup, specific exceptions {#priority-category-2}

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

The `$all` also belongs to this category, because it implicitly adds all content type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

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

[Other modifiers](#advanced-capabilities), which are supposed to perform additional post- or pre-processing of requests, do not add anything to the rules priority.

:::note

The [`$replace`](#replace-modifier) modifier takes precedence over all blocking rules of categories 1-3, as well as exception rules from categories 3-5, **except** [`$content`](#content-modifier), because an exception with the `$content` modifier overrides all `$replace` rules.

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

| Категории \ Продукты                         | [Приложения CoreLibs][cl-apps] | [AdGuard для Chromium][ext-chr] | [AdGuard for Chrome MV3][ext-mv3] | [AdGuard для Firefox][ext-ff] | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
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

#### Синтаксис

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
- **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

This rule will be also applied to all subdomains of `example.org` and `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

:::note

Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

:::

**Примеры**

- `example.com##div.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `example.com,example.org###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `~example.com##.textad` — hides an element with the class `textad` at all domains, except `example.com` and its subdomains.

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

**Синтаксис**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), that defines the elements we want to apply the style to.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`style`** — CSS style, that we want to apply to selected elements.

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
- [Pseudo-class `:has()`](#extended-css-has)
- [Pseudo-class `:contains()`](#extended-css-contains)
- [Псевдокласс `:matches-css()`](#extended-css-matches-css)
- [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
- [Pseudo-class `:matches-property()`](#extended-css-property)
- [Pseudo-class `:xpath()`](#extended-css-xpath)
- [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Pseudo-class `:upward()`](#extended-css-upward)
- [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
- [Pseudo-class `:is()`](#extended-css-is)
- [Pseudo-class `:not()`](#extended-css-not)
- [Pseudo-class `:if-not()` (removed)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

**Application area**

Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

:::info Совместимость

Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

:::

**Синтаксис**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

- `#?#` — for element hiding, `#@?#` — for exceptions
- `#$?#` — for CSS rules, `#@$?#` — for exceptions

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Примеры**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
- `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
- `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

You can apply standard CSS selectors using the ExtendedCss library by using the rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

:::note

Some pseudo-classes do not require selector before it. Still adding the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)`, but the second one is more obvious.

Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

:::

#### Ограничения ExtendedCss {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Pseudo-class `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

:::note

Rules with the `:has()` pseudo-class must use the [native implementation of `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) if they use `##` marker and if it is possible, i.e. with no other extended selectors inside. To force applying of ExtendedCss rules with `:has()`, use `#?#`/`#$?#` marker explicitly.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Уведомление об удалении

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Синтаксис**

```text
[target]:has(selector)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selector` — required, standard or extended CSS selector

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### Ограничения `:has()` {#extended-css-has-limitations}

Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- disallow `:has()` inside the pseudos accepting only compound selectors;
- disallow `:has()` after regular pseudo-elements.

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

#### Pseudo-class `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

:::note

The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Синтаксис**

```text
[target]:contains(match)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `match` — required, string or regular expression for matching element `textContent`. Regular expression flags are supported.

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
div:contains(/as .*banner/)

! регулярное выражение с флагами
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

**Синтаксис**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `pseudo-element` — optional, valid standard pseudo-element, e.g. `before`, `after`, `first-line`, etc.
- `property` — required, a name of CSS property to check the element for
- `pattern` — required, a value pattern that is using the same simple wildcard matching as in the basic URL filtering rules or a regular expression. For this type of matching, AdGuard always does matching in a case-insensitive manner. In the case of a regular expression, the pattern looks like `/regexp/`.

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

#### Pseudo-class `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows selecting an element by its attributes, especially if they are randomized.

**Синтаксис**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for attribute name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for attribute value matching

**Экранирование специальных символов**

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

#### Pseudo-class `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows selecting an element by matching its properties.

**Синтаксис**

```text
[target]:matches-property("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for element property name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for element property value matching

**Экранирование специальных символов**

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

#### Pseudo-class `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows selecting an element by evaluating an XPath expression.

**Синтаксис**

```text
[target]:xpath(expression)
```

- `target`- optional, standard or extended CSS selector
- `expression` — required, valid XPath expression

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

#### Pseudo-class `:nth-ancestor()` {#extended-css-nth-ancestor}

The `:nth-ancestor()` pseudo-class allows to lookup the *nth* ancestor relative to the previously selected element.

```text
subject:nth-ancestor(n)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
- `n` — обязателен. Число >= 1 и < 256, расстояние до нужного родителя от элемента, выбранного `subject`

**Синтаксис**

```text
subject:nth-ancestor(n)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
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

#### Pseudo-class `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Синтаксис**

```text
subject:upward(ancestor)
```

- `subject` — обязателен. Стандартный или расширенный CSS-селектор
- `ancestor` — required, specification for the ancestor of the element selected by `subject`, can be set as:
    - *number* >= 1 and < 256 for distance to the needed ancestor, same as [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *standard CSS selector* for matching closest ancestor

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

#### Pseudo-class `:remove()` and pseudo-property `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

**Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Синтаксис**

```text
! pseudo-class
selector:remove()

! псевдосвойство
selector { remove: true; }
```

- `selector` — required, standard or extended CSS selector

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

#### Pseudo-class `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Синтаксис**

```text
[target]:is(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — [*forgiving selector list*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) of standard or extended selectors. For extended selectors, only compound selectors are supported, not complex.

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

#### Pseudo-class `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as argument. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Синтаксис**

```text
[target]:not(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — list of standard or extended selectors

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

#### Pseudo-class `:if-not()` (removed) {#extended-css-if-not}

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

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

:::

### Синтаксис

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — name of the element in lower case, for example, `div` or `script`.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rule syntax](#cosmetic-elemhide-rules).
- **`attributes`** — a list of attributes that limit the selection of elements. `name` — attribute name, `value` — substring, that is contained in attribute value.
- **`pseudoName`** — the name of a pseudo-class.
- **`pseudoArgs`** — the arguments of a function-style pseudo-class.
- **`combinator`** — an operator that works similarly to the [CSS child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): that is, the `selector` on the right of the `combinator` will only match an element whose direct parent matches the `selector` on the left of the `combinator`.

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

:::caution Ограничения

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

:::caution Ограничения

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

:::caution Ограничения

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

:::caution Ограничения

The `min-length` special attribute must not appear in a selector to the left of a `>` combinator.

:::

### Псевдоклассы

#### `:contains()`

##### Синтаксис

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

:::caution Ограничения

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

AdGuard supports a special type of rules that allows you to inject any JavaScript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Синтаксис**

```text
rule = [domains] "#%#" script
```

- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`script`** — arbitrary JavaScript code **in one string**.

**Примеры**

- `example.org#%#window.__gaq = undefined;` executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

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

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — required, a name of the scriptlet from AdGuard Scriptlets library;
- `arguments` — optional, a list of `string` arguments (no other types of arguments are supported).

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

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — optional, a name of the scriptlet to except from the applying; if not set, all scriptlets will not be applied;
- `arguments` — optional, a list of `string` arguments to match the same blocking rule and disable it.

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

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Previous versions only support exception rules that disable specific scriptlets.

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

**Syntax** {#non-basic-rules-modifiers-syntax}

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — set of the modifiers described below.
- **`rule text`** — a rule to be modified.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Модификатор \ Продукты               | [Приложения CoreLibs][cl-apps] |        [AdGuard для Chromium][ext-chr]        |        [AdGuard for Chrome MV3][ext-mv3]         |         [AdGuard для Firefox][ext-ff]         | [AdGuard для iOS][ios-app] | [AdGuard для Safari][ext-saf] | [AdGuard Content Blocker][and-cb] |
| ------------------------------------- |:------------------------------:|:---------------------------------------------:|:------------------------------------------------:|:---------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |               ✅                |                       ❌                       |                        ❌                         |                       ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |               ✅                |                       ✅                       | ✅ [*[1]](#non-basic-domain-modifier-limitations) |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |               ✅                |                       ✅                       |                        ❌                         |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |               ✅                | ✅ [*[2]](#non-basic-url-modifier-limitations) |  ✅ [*[2]](#non-basic-url-modifier-limitations)   | ✅ [*[2]](#non-basic-url-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- ❌ — не поддерживается

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Примеры**

- `[$app=org.example.app]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` applies scriptlet `prevent-setInterval` only in Safari browser on Mac.
- `[$app=org.example.app]#@#.textad` disables all `##.textad` rules for all domains while using `org.example.app`.

:::info Совместимость

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Примеры**

- `[$domain=example.com]##.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `[$domain=example.com|example.org]###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `[$domain=~example.com]##.textad` — this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

There are 2 ways to specify domain restrictions for non-basic rules:

1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

### Non-basic `$domain` modifier limitations {#non-basic-domain-modifier-limitations}

:::caution Ограничения

Since the non-basic `$domain` works the same as the basic one, it has the same [limitations](#domain-modifier-limitations).

:::

:::info Совместимость

Such rules with `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard Browser Extension for Chrome, for Chrome MV3, Firefox, and Edge.

:::

### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Синтаксис**

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

**Синтаксис**

```text
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Примеры**

- `[$url=||example.com/content/*]##div.textad` hides a `div` with the class `textad` at addresses like `https://example.com/content/article.html` and even `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` hides an element with attribute `id` equal to `adblock` at `example.org` and its subdomains.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` hides `div` elements of the class `textad` for all domains matching the regular expression `[a-z]+\.example\.com^`.

#### `$url` modifier limitations {#non-basic-url-modifier-limitations}

:::caution Ограничения

In AdGuard Browser Extension, non-basic `$url` modifier is not compatible with domain-specific rules and other non-basic modifiers — [`$domain`](#non-basic-domain-modifier) and [`$path`](#non-basic-path-modifier). For example, the rule `[$url=/category/*]example.com###textad` will not be applied.

:::

:::info Совместимость

Rules with the `$url` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

## Information for filter maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Директивы препроцессора

We provide preprocessor directives that can be used by filter maintainers to improve compatibility with different ad blockers and provide:

- [including a file](#include-directive)
- [applying rules conditionally by ad blocker type](#conditions-directive)
- [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Включение файла {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Синтаксис**

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

Filter maintainers can use conditions to supply different rules depending on the ad blocker type. A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive. Conditions support all basic logical operators.

There are two possible scenarios:

1. When an ad blocker encounters an `!#if` directive and no `!#else` directive, it will compile the code between `!#if` and `!#endif` directives only if the specified condition is true.

1. If there is an `!#else` directive, the code between `!#if` and `!#else` will be compiled if the condition is true; otherwise, the code between `!#else` and `!#endif` will be compiled.

:::note

Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

:::

**Синтаксис**

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

- `!#if (conditions)` — start of the block when conditions are true
- `conditions` — just like in some popular programming languages, preprocessor conditions are based on constants declared by ad blockers. Authors of ad blockers define on their own what exact constants they declare. Possible values:
    - `adguard` always declared; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
    - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
        - `adguard_app_windows` — AdGuard for Windows
        - `adguard_app_mac` — AdGuard for Mac
        - `adguard_app_android` — AdGuard for Android
        - `adguard_app_ios` — AdGuard for iOS
        - `adguard_ext_safari` — AdGuard for Safari
        - `adguard_ext_chromium` — AdGuard Browser Extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
        - `adguard_ext_firefox` — AdGuard Browser Extension for Firefox
        - `adguard_ext_edge` — AdGuard Browser Extension for Edge Legacy
        - `adguard_ext_opera` — AdGuard Browser Extension for Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
        - `cap_html_filtering` — products that support HTML filtering rules: AdGuard for Windows, AdGuard for Mac, and AdGuard for Android
- `!#else` — start of the block when conditions are false
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — lists of rules
- `!#endif` — end of the block

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
- AdGuard Browser Extension v4.2.208;
- AdGuard v1.11.16 for Safari.

:::

#### Правила фильтрации в Safari {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

User rules and allowlist are added to every content blocker.

:::caution

The main disadvantage of using multiple content blockers is that rules from different blockers are applied independently. Blocking rules are not affected by this, but unblocking rules may cause problems. If a blocking rule is in one content blocker and an exception is in another, the exception will not work. Filter maintainers use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

:::

**Синтаксис**

```adblock
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```

где:

- `!#safari_cb_affinity(content_blockers)` — start of the block
- `content_blockers` — comma-separated list of content blockers. Possible values:
    - `general` — AdGuard General content blocker
    - `privacy` — AdGuard Privacy content blocker
    - `social` — AdGuard Social content blocker
    - `security` — AdGuard Security content blocker
    - `other` — AdGuard Other content blocker
    - `custom` — AdGuard Custom content blocker
    - `all` — special keyword that means that the rules must be included into **all** content blockers
- `rules_list` — list of rules
- `!#safari_cb_affinity` — end of the block

**Примеры**

```adblock
! чтобы не скрывать указанный элемент, который скрывается Базовым фильтром:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! чтобы разблокировать запрос, который блокируется Фильтром счётчиков и систем аналитики:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Подсказки

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry][]).

**Синтаксис**

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

- **filter** — filter identifier
- **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
- **minPercent** — lower bound of `percent` value
- **maxPercent** — upper bound of `percent` value
- **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

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

- `windows` — AdGuard for Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard for Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard for Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard for iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — AdGuard Browser Extension for Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — AdGuard Browser Extension for Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

- `ext_ff` — AdGuard Browser Extension for Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — AdGuard Browser Extension for Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — AdGuard Browser Extension for Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard for Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

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

- In **AdGuard for Windows**, you can find it in the *Ad Blocker* tab or via the tray menu
- In **AdGuard for Mac**, it is located in *Settings → Advanced → Filtering log*
- In **AdGuard for Android**, you can find it under *Statistics → Recent activity*. *Recent activity* can also be accessed from the *Assistant*
- In **AdGuard Browser Extension**, it is accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based web browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs

:::note

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Режим отладки селекторов {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — text of the parsed selector, may differ from the input one
- `timings` — list of DOM nodes matched by the selector
    - `appliesCount` — total number of times that the selector has been applied on the page
    - `appliesTimings` — time that it took to apply the selector on the page, for each of the instances that it has been applied (in milliseconds)
    - `meanTiming` — mean time that it took to apply the selector on the page
    - `standardDeviation` — standard deviation
    - `timingsSum` — total time it took to apply the selector on the page across all instances

**Printed only for remove pseudos:**

- `removed` — flag to signal if elements were removed

**Printed if elements are not removed:**

- `matchedElements` — list of DOM nodes matched by the selector
- `styleApplied` — parsed rule style declaration related to the selector

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
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) with specified `replacement` parameter
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Легенда таблиц совместимости {#compatibility-tables-legend}

### Краткие обозначения продуктов {#what-product}

1. `CoreLibs apps` — [AdGuard for Windows](/adguard-for-windows/features/home-screen), [AdGuard for Mac](/adguard-for-mac/features/main), and [AdGuard for Android](/adguard-for-android/features/protection/ad-blocking)
1. `AdGuard for Chromium` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Chrome and other Chromium-based browsers such as Microsoft Edge, Opera
1. `AdGuard for Chrome MV3` — [AdGuard Browser Extension for Chrome MV3](/adguard-browser-extension/mv3-version)
1. `AdGuard for Firefox` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Firefox
1. `AdGuard for iOS` — [AdGuard for iOS](/adguard-for-ios/features/safari-protection) and AdGuard Pro for iOS (for mobile Safari browser)
1. `AdGuard for Safari` — [AdGuard for desktop Safari browser](/adguard-for-safari/features/general)
1. `AdGuard Content Blocker` — [Content Blocker](/adguard-content-blocker/overview) for Android mobile browsers: Samsung Internet and Yandex Browser

### Краткие обозначения совместимости {#what-compatibility}

:::note

- ✅ — полностью поддерживается
- ✅ * — поддерживается, но надёжность может быть разной или могут возникнуть ограничения; ознакомьтесь с описанием модификатора для получения подробной информации
- 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions
- ⏳ — feature that is planned to be implemented but is not yet available in any product
- ❌ — не поддерживается
- 👎 — устарел; всё ещё поддерживается, но в будущем будет удалён
- 🚫 — удалён и больше не поддерживается

:::

[popup-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/epic/tswebextension/packages/tsurlfilter/src/rules/declarative-converter#popup

[Sec-Fetch-Dest header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[cl-apps]: #what-product "AdGuard для Windows, Mac и Android"
[ext-chr]: #what-product "Браузерное расширение AdGuard для Chrome и других браузеров на основе Chromium"
[ext-mv3]: #what-product "Браузерное расширение AdGuard MV3 для Chrome"
[ext-mv3]: #what-product "AdGuard Browser Extension for Chrome MV3"
[ext-ff]: #what-product "Браузерное расширение AdGuard для Firefox"
[ios-app]: #what-product "AdGuard для iOS и AdGuard Pro для iOS"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ext-saf]: #what-product "AdGuard для Safari"
[ext-saf]: #what-product "AdGuard for Safari"
[and-cb]: #what-product "AdGuard Content Blocker для браузеров Samsung Internet and Яндекс на Android"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
[CoreLibs]: https://adguard.com/en/blog/introducing-corelibs.html
[TSUrlFilter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter#tsurlfilter
[TSWebExtension]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tswebextension#tswebextension
