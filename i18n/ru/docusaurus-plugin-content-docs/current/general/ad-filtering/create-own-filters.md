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

- Правила `$hls` разрешены только [**в доверенных фильтрах**](#trusted-filters).
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

Этот тип правил может быть использован [**только в доверенных фильтрах**](#trusted-filters).

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

`$removeparam` rules that do not have any [content type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

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

    is converted to

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

- Правила с модификатором `$removeparam` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).
- Правила с `$removeparam` совместимы с [базовыми модификаторами](#basic-rules-basic-modifiers), [модификаторами типа контента](#content-type-modifiers), а также с модификаторами `$important` и `$app`. Правила с любыми другими модификаторами считаются некорректными и не будут применены.

:::

:::info Совместимость

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

Этот модификатор полностью меняет поведение правила. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Функции**

- Правила с `$replace` применяются к любому текстовому ответу, но не применяются к binary (`media`, `image`, `object` и т. д.).
- `$replace` rules do not apply if the size of the original response is more than 10 MB.
- Правила с `$replace` обладают более высоким приоритетом, чем другие базовые правила (**включая** правила исключений). So if a request natches two different rules, one of which has the `$replace` modifier, this rule will be applied.
- Правила исключений уровня document с модификаторами `$content` или `$document` отменяют срабатывание правил `$replace`, даже если запрос им соответствует.
- Прочие правила исключений уровня document (с модификаторами `$generichide`, `$elemhide` или `$jsinject`) применяются вместе с правилами `$replace`. Это означает, что вы можете изменять содержимое страницы при помощи правила `$replace` и одновременно отменять косметические правила.

`$replace` value can be empty in the case of exception rules. See examples section for further information.

**Несколько правил, соответствующих одному запросу**

In case if multiple `$replace` rules match a single request, we will apply each of them. **Правила будут применяться в алфавитном порядке.**

**Синтаксис**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — регулярное выражение.
- **`replacement`** — строка, которая будет использована для замены строки в соответствии с `regexp`.
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, или `s` — режим одной строки.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. Например, экранированная запятая будет выглядеть так: `\,`.

**Примеры**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

У этого правила три части:

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

Правила с модификатором `$replace` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

Rules with `$replace` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Другие расширения не могут модифицировать содержимое страниц на сетевом уровне, поэтому там эти правила не работают.

:::

#### **`urltransform`** {#urltransform-modifier}

Правила `$urltransform` позволяют изменять URL-адрес запроса, заменяя текст, соответствующий регулярному выражению.

**Функции**

- `$urltransform` rules normally only apply to the path and query parts of the URL, see below for one exception.
- `$urltransform` не будет применяться, если исходный URL-адрес заблокирован другими правилами.
- `$urltransform` будет применяться перед правилами `$removeparam`.

Значение `$urltransform` может быть пустым для правил исключений.

**Несколько правил, соответствующих одному запросу**

Если несколько правил `$urltransform` соответствуют одному запросу, мы применим каждое из них. **Правила будут применяться в алфавитном порядке.**

**Синтаксис**

Синтаксис `$urltransform` аналогичен замене регулярными выражениями [в Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — регулярное выражение.
- **`replacement`** — строка, которая будет использована для замены строки в соответствии с `regexp`.
- **`modifiers `** — флаги регулярных выражений. Например, `i` — поиск без учёта регистра, или `s` — режим одной строки.

В значении `$urltransform` необходимо экранировать два символа: запятую `,` и знак доллара `$`. Use the backslash character `\` for this. Например, экранированная запятая будет выглядеть так: `\,`.

**Изменение происхождения**

:::info Совместимость

This section only applies to AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.17 or later.

:::

As stated above, normally `$urltransform` rules are only allowed to change the path and query parts of the URL. However, if the rule's `regexp` begins with the string `^http`, then the full URL is searched and can be modified by the rule. Such a rule will not be applied if the URL transformation can not be achieved via an HTTP redirect (for example, if the request's method is `POST`).

**Примеры**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

У этого правила три части:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2`, где `$` экранирован;
- `modifiers` (флаги регулярных выражений) — `i` для поиска без учёта регистра

**Несколько правил с `$urltransform`**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Правила 1 и 2 будут применены ко всем запросам, отправленным к `example.org`.
- Правило 2 отключено для запросов, соответствующих `||example.org/page/`, **но правило 1 при этом всё равно работает!**

**Повторное сопоставление правил после преобразования URL**

Если к запросу применяется правило `$urltransform`, все правила будут переоценены относительно нового URL.

Например, со следующими правилами:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

запрос к `https://example.com/firstpath` будет заблокирован перед отправкой.

However, `$urltransform` rules will **not be re-applied** in this case to avoid infinite recursion, e.g., with the following rules:

```adblock
||example.com/firstpath^$urltransform=/firstpath/secondpath/
||example.com/secondpath^$urltransform=/secondpath/firstpath/
```

the request to `https://example.com/firstpath` will be transformed to `https://example.com/secondpath` and the second rule will not be applied.

**Отключение правил с `$urltransform`**

- `@@||example.org^$urltransform` отключит все правила с `$urltransform`, где есть `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` отключит правило с `$urltransform=/Z/Y/` для любого запроса, соответствующего `||example.org^`.

Правила с `$urltransform` также можно отключить, используя правила-исключения `$document` и `$urlblock`. Но базовые правила исключений без модификаторов не могут этого сделать. Например, `@@||example.com^` не отключит `$urltransform=/X/Y/` для запросов к **example.com**, а `@@||example.com^$urlblock` отключит.

:::caution Ограничения

Правила с модификатором `$urltransform` могут быть использованы [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

:::

#### **`noop`** {#noop-modifier}

Модификатор `noop` не делает ничего и используется только для того, чтобы улучшить читаемость правил. Он состоит из последовательности символов нижнего подчёркивания (`_`) произвольной длины и может фигурировать в правиле так часто, как это необходимо.

**Примеры**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Совместимость

Правила с модификатором `noop` не поддерживаются в AdGuard Content Blocker.

:::

#### **`$empty` (устаревший)** {#empty-modifier}

:::caution Скоро устареет

Этот модификатор считается устаревшим. Вместо него теперь используется [модификатор `$redirect`](#redirect-modifier). Правила с `$empty` всё ещё поддерживаются и преобразуются в `$redirect=nooptext`, но в будущем перестанут поддерживаться.

:::

Обычно заблокированный запрос выглядит для браузера как ошибка сервера. В случае применения модификатора `$empty` AdGuard эмулирует пустой ответ сервера со статусом `200 OK`.

**Примеры**

- `||example.org^$empty` возвращает пустой ответ для всех запросов к домену `example.org` и всех его поддоменов.

:::info Совместимость

Правила с модификатором `$empty` не поддерживаются в AdGuard Content Blocker, AdGuard для iOS и AdGuard для Safari.

:::

#### **`$mp4` (устаревший)** {#mp4-modifier}

:::caution Скоро устареет

Этот модификатор считается устаревшим. Вместо него теперь используется [модификатор `$redirect`](#redirect-modifier). Правила с `$mp4` всё ещё поддерживаются и преобразуются в `$redirect=noopmp4-1s,media`, но в будущем перестанут поддерживаться.

:::

В качестве ответа на заблокированный запрос AdGuard возвращает короткую видео-заглушку.

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
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier)
- [`$to`](#to-modifier)
- ограниченные модификаторы [сontent-type](#content-type-modifiers) с `~`

При работе с исключаемым доменом, приложением, методом или типом содержимого мы добавляем **1 балл** за существование самого модификатора, независимо от количества исключаемых доменов или типов содержимого. Это связано с тем, что область действия правила и так бесконечно широка. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Defined content-type modifiers, defined methods, defined headers, $all, $popup, specific exceptions {#priority-category-2}

All valid content types:

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

Или правила, которые неявно добавляют модификатор `$document`:

- [`$popup`](#popup-modifier)

Или некоторые специальные исключения, которые неявно добавляют `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier)
- [`$elemhide`](#elemhide-modifier)
- [`$extension`](#extension-modifier)
- [`$genericblock`](#genericblock-modifier)
- [`$generichide`](#generichide-modifier)
- [`$jsinject`](#jsinject-modifier)
- [`$specifichide`](#specifichide-modifier)
- [`$urlblock`](#urlblock-modifier)

Или методы, разрешённые модификатором [`$method`](#method-modifier).

Или правила с [`$header`](#header-modifier).

Наличие любых модификаторов content-type добавляет `(50 + 50 / N)`, где `N` — количество модификаторов, например: `||example.com^$image,script` добавит `50 + 50 / 2 = 50 + 25 = 75` к общему весу правила.

The `$all` also belongs to this category, because it implicitly adds all content type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

К этой категории относится и `$popup`, так как в нём неявно добавляется модификатор `$document`. Аналогично, конкретные исключения добавляют `$document,subdocument`.

Если в правиле есть модификатор `$method` с разрешёнными методами, то он добавляет `(50 + 50 / N)`, где `N` — количество разрешённых методов, например: `||example.com^$method=GET|POST|PUT` добавит `50 + 50 / 3 = 50 + 16,6 = 67` к общему весу правила.

Если в правиле есть модификатор `$header`, то он добавляет `50`.

#### `$domain` или `$app` с разрешёнными доменами или приложениями {#priority-category-3}

Домены или приложения, указанные с помощью `$domain` и `$app` соответственно, добавят `100 + 100 / N`, где `N` — количество значений модификатора, например: `||example.com^$domain=example.com|example.org|example.net` добавит `100 + 100 / 3 = 135` или `||example.com^$app=org.example.app1|org.example.app2` добавит `100 + 100 / 2 = 100 + 51 = 151` или `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` добавит `100 + 100/1` (часть $domain) и `100 + 100/2` (часть $app) — в сумме `350`.

Значения модификаторов regexps или tld будут интерпретироваться как обычные записи вида `example.com` и считаться по одному, например: `||example.com^$domain=example.*` будет добавлено `100 + 100 / 1 = 200` или `||example.com^$domain=example.*|adguard.*` будет добавлено `100 + 100 / 2 = 150`.

#### Правила `$redirect` {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Каждое из них добавляет `10^3` к приоритету правила.

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

Каждое из них добавляет `10^4` к приоритету.

As well as exception with [`$document modifier`](#document-modifier): because it's an alias for `$elemhide,content,jsinject,urlblock,extension`. Оно добавит `10^4` для каждого модификатора из [верхнего списка](#priority-category-4), `10^4 * 5` в сумме.

In addition, each of these exceptions implicitly adds the two allowed content-type modifiers `$document,subdocument`.

#### Правила белого списка {#priority-category-5}

Модификатор `@@` добавляет `10^5` к приоритету правила.

#### Правила `$important` {#priority-category-7}

Модификатор [`$important`](#important-modifier) добавляет `10^6` к приоритету правила.

#### Правила, для которых нет веса приоритета {#priority-category-extra}

[Прочие модификаторы](#advanced-capabilities), которые должны выполнять дополнительную пост- или предобработку запросов, ничего не добавляют к приоритету правил.

:::note

Модификатор [`$replace`](#replace-modifier) имеет приоритет над всеми блокирующими правилами категорий 1–3, а также над правилами исключений из категорий 3–5, **, кроме** [`$content`](#content-modifier), поскольку исключение с модификатором `$content` отменяет все правила `$replace`.

:::

#### Примеры

1. `||example.com^`

    Вес правила без модификаторов: `1`.

1. `||example.com^$match-case`

    Вес правила: базовый вес + вес модификатора из [категории 1](#priority-category-1): `1 + 1 = 2`.

1. `||example.org^$removeparam=p`

    Вес правила: базовый вес + 0, так как $removeparam [не участвует](#priority-category-extra) в расчёте приоритета: `1 + 0 = 1`.

1. `||example.org^$document,redirect=nooptext`

    Вес правила: базовый вес + допустимый тип содержимого, [категория 3](#priority-category-3) + $redirect из [категория 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

1. `@@||example.org^$removeparam=p,document`

    Вес правила: базовый вес + правило белого списка, [категория 5](#priority-category-5) + 0, потому что $removeparam [не участвует](#priority-category-extra) в расчёте приоритета + разрешённый тип контента, [категория 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

1. `@@||example.com/ad/*$domain=example.org|example.net,important`

    Вес правила: базовый вес + правило белого списка, [категория 5](#priority-category-5) + важное правило, [категория 7](#priority-category-7) + разрешённые домены, [категория 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

1. `@@||example.org^$document` без дополнительных модификаторов — это псевдоним для `@@|||example.com^$elemhide,content,jsinject,urlblock,extension`

    Rule weight: base weight + specific exceptions, [category 4](#priority-category-4) + two allowed content types (document and subdocument), [category 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Rule weight: base weight + allowed content type, [category 2](#priority-category-2) + allowed domain, [category 3](#priority-category-3) + denyallow, [category 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — псевдоним для `||example.com^$document,subdocument,image,script,media и т. д. + $popup`

    Вес правила: базовый вес + всплывающее окно ([категория 1](#priority-category-1)) + разрешённые типы контента ([категория 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Другие правила {#non-basic-rules}

Базовых правил может быть недостаточно для блокировки рекламы. Иногда для этого требуется скрыть какой-нибудь элемент или изменить часть HTML-кода страницы, при этом ничего не сломав. Для этого предназначены правила, описанные в данном разделе.

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

Для работы с косметическими правилами необходимы знания HTML и CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Правила скрытия элементов {#cosmetic-elemhide-rules}

Правила скрытия элементов предназначены, как это следует из их названия, для скрытия элементов веб-страниц. По сути это аналогично применению стиля `{ display: none; }` к выбранному элементу.

Правила скрытия элементов работают по-разному, и их приоритет меняется [в зависимости от платформы](#cosmetic-rules-priority).

#### Синтаксис

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS-селектор](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), задающий элементы, которые должны быть скрыты.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило.

Если вы хотите ограничить область действия одним или более доменами, просто перечислите их через запятую. Например: `example.org,example.com##selector`.

Это правило будет работать также на всех поддоменах `example.org` и `example.com`.

Если вы хотите, чтобы правило не применялось к определённым доменам, начните доменное имя со знака `~`. Например: `~example.org##selector`.

Вы можете использовать оба подхода в одном правиле. Например, правило `example.org,~subdomain.example.org##domain` будет работать для домена `example.org` и всех его поддоменов, **кроме `subdomain.example.org`**.

:::note

Правила скрытия не зависят друг от друга. Если в фильтре есть правило `example.org##selector` и вы добавляете правило `~example.org##selector`, то оба этих правила будут применены независимо друг от друга.

:::

**Примеры**

- `example.com##div.textad` скроет элемент `div` с классом `textad` на домене `example.com` и всех его поддоменах.
- `example.com,example.org###adblock` скроет элемент с атрибутом `id` равным `adblock` на доменах `example.com`, `example.org` и всех их поддоменах.
- `~example.com##.textad` скроет элемент с классом `textad` на всех доменах, кроме `example.com` и всех его поддоменов.

**Ограничения**

Safari не поддерживает одновременно разрешённые и запрещённые домены. поэтому правила вида `example.org,~foo.example.org##.textad` не работают в AdGuard для Safari.

**Исключения**

Исключения могут отключать некоторые правила на определённых доменах. Они очень похожи на обычные правила-исключения, только вместо `##` нужно использовать `#@#`.

Например, в фильтре есть правило:

```adblock
##.textad
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@#.textad
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена. Это полностью отключит соответствующее правило CSS elemhide для ВСЕХ доменов:

```adblock
#@#.textad
```

Правило такого вида даст аналогичный результат:

```adblock
*#@#.textad
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

### CSS-правила {#cosmetic-css-rules}

Иногда недостаточно просто скрыть какой-либо элемент, чтобы заблокировать рекламу. Например, блокировка рекламного элемента может просто сломать вёрстку сайта. Для таких случаев AdGuard позволяет использовать гораздо более гибкие правила, чем обычные правила скрытия. С помощью таких правил вы можете добавить на страницу практически любой CSS-стиль.

**Синтаксис**

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

Это правило применит стиль `background-color: #333!important;` к элементу `body` для домена `example.com` и всех его поддоменов.

**Исключения**

По аналогии с правилами скрытия существует специальный тип правил, отключающий действие выбранного правила CSS-стилей для определённых доменов. Синтаксис правил-исключений практически такой же, только маркер `#$#` заменяется на `#@$#`.

Например, в фильтре есть правило:

```adblock
#$#.textad { visibility: hidden; }
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

Применять такие исключения рекомендуется только в случае, когда невозможно изменить само CSS-правило. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

:::caution Ограничения

Запрещено использование стилей, которые могут приводить к загрузке каких-либо ресурсов. Это означает, что нельзя использовать атрибуты типа `<url>`.

:::

:::info Совместимость

CSS-правила не поддерживаются в AdGuard Content Blocker.

CSS-правила работают по-разному, и их приоритет меняется [в зависимости от платформы](#cosmetic-rules-priority).

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

Возможностей CSS 3.0 не всегда хватает для блокировки рекламы. Чтобы решить эту проблему, AdGuard расширяет возможности CSS, добавляя поддержку новых псевдоэлементов. Мы разработали отдельную [библиотеку с открытым исходным кодом](https://github.com/AdguardTeam/ExtendedCss) для выбора нестандартных элементов и применения CSS-стилей с расширенными свойствами.

Идея расширенных возможностей заключается в возможности сопоставлять элементы DOM с селекторами на основе их собственного представления (стиль, текстовое содержимое и т. д.) или отношений с другими элементами. Также есть возможность применять стили с нестандартными свойствами CSS.

**Область применения**

Расширенные селекторы можно применять в любом косметическом правиле, будь то [правила скрытия](#cosmetic-elemhide-rules) или [CSS-правила](#cosmetic-css-rules).

:::info Совместимость

Правила с расширенными CSS-селекторами не поддерживаются в AdGuard Content Blocker.

:::

**Синтаксис**

Независимо от того, какие CSS-псевдоклассы вы используете в правилах, вы можете использовать специальные маркеры для принудительного применения этих правил с помощью ExtendedCss. Рекомендуется использовать эти маркеры для всех косметических расширенных CSS-правил, чтобы их было легче отличить.

Синтаксис расширенных CSS-правил:

- `#?#` — для скрытия элементов, `#@?#` — для исключений
- `#$?#` — для CSS-стилей, `#@$?#` — для исключений

**Настоятельно рекомендуем** использовать эти маркеры каждый раз, когда вы используете расширенный CSS-селектор.

**Примеры**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — это правило блокирует все элементы `div`, которые содержат дочерний элемент со ссылкой с атрибутами `[target="_blank"][rel="nofollow"]`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — это правило устанавливает стиль `display: none!important` для всех элементов `h3`, которые содержат слово `cookies`. При этом правило будет работать только для домена `example.com` и всех его поддоменов.
- `example.net#?#.banner:matches-css(width: 360px)` — это правило блокирует все элементы `.banner`, которые содержат стиль `width: 360px`. При этом правило будет работать только для домена `example.net` и всех его поддоменов.
- `example.net#@?#.banner:matches-css(width: 360px)` — это правило отменяет действие предыдущего правила.

Вы можете применять стандартные CSS-селекторы с помощью библиотеки ExtendedCss, используя маркер правила `#?#`. Например, `#?#div.banner`.

Больше [об отладке расширенных селекторов](#selectors-debugging-mode).

:::note

Некоторые псевдоклассы не требуют селектора перед ними. [Универсальный селектор](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` облегчает чтение расширенного селектора, хотя и не влияет на поведение при подборе. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)`, but the second one is more obvious.

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

**Синтаксис**

```text
[target]:has(selector)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
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

:::danger Старый синтаксис

[Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.

:::

#### Псевдокласс `:contains()` {#extended-css-contains}

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

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `match` — требуется, строка или регулярное выражение для соответствия элементу `textContent`. Также поддерживаются флаги регулярных выражений.

**Примеры**

Для таких DOM:

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

Выбран только `div` с `id=match`, так как следующий элемент не содержит текст, а `banner` — это часть кода, а не текст.

:::

:::danger Старый синтаксис

[Синтаксис обратной совместимости для `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) поддерживается, но **не рекомендуется**.

:::

#### Псевдокласс `:matches-css()` {#extended-css-matches-css}

Псевдокласс `:matches-css()` позволяет сопоставить элемент по свойствам его текущего стиля. Работа псевдокласса основана на использовании метода [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

**Синтаксис**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `pseudo-element` — необязательный, допустимый стандартный псевдоэлемент, например, `before`, `after`, `first-line` и т. д.
- `property` — требуется, название CSS-свойства, которое будет проверено у элемента
- `pattern` — требуется, шаблон значений, который использует то же простое сопоставление с подстановочными знаками, что и в основных правилах фильтрации URL-адресов, или регулярное выражение. Для этого типа соответствия AdGuard не обращает внимание на регистр. В случае с регулярными выражениями шаблон будет выглядеть так: `/regexp/`.

**Экранирование и снятие специальных символов**

Для **нерегулярных выражений** паттерны `(`,`)`,`[`,`]` должны быть **без экранирования**, например, `:matches-css(background-image:url(data:*))`.

Для **регулярных выражений** паттерны `\` должны быть **экранированы**, например, `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

**Примеры**

Для таких DOM:

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

`div`-элементы с псевдоэлементом `::before` и с указанным свойством `content` могут быть выбраны любым из этих расширенных селекторов:

```adblock
! паттерн строки
div:matches-css(before, content: block me)

! паттерн строки с подстановочным знаком
div:matches-css(before, content: block*)

! паттерн регулярного выражения
div:matches-css(before, content: /block me/)
```

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

:::info Совместимость

Устаревшие псевдоклассы `:matches-css-before()` и `:matches-css-after()` больше не рекомендуются, но по-прежнему поддерживаются для лучшей совместимости.

:::

:::danger Старый синтаксис

[Синтаксис обратной совместимости для `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) поддерживается, но **не рекомендуется**.

:::

#### Псевдокласс `:matches-attr()` {#extended-css-matches-attr}

Псевдокласс `:matches-attr()` позволяет выбрать элемент по его атрибутам, особенно если они рандомизированы.

**Синтаксис**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени атрибута
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения атрибута

**Экранирование специальных символов**

Для паттернов **регулярных выражений** `"` и `\` должны быть **экранированы**, например, `div:matches-attr(class=/[\\w]{5}/)`.

**Примеры**

`div:matches-attr("ad-link")` выбирает элемент `div#target1`:

```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` выбирает элемент `div#target2`:

```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` выбирает элемент `div#target3`:

```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` выбирает элемент `#target4`:

```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

#### Псевдокласс `:matches-property()` {#extended-css-property}

Псевдокласс `:matches-property()` позволяет выбирать элемент, сопоставляя его свойства.

**Синтаксис**

```text
[target]:matches-property("name"[="value"])
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `name` — требуется, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления имени свойства элемента
- `value` — необязательный, простая строка, *или* строка с подстановочным знаком, *или* регулярное выражение для сопоставления значения свойства элемента

**Экранирование специальных символов**

Для паттернов **регулярных выражений** `"` и `\` должны быть экранированы, например, `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Паттерны регулярных выражений поддерживаются в `name` для любого свойства в цепочке, например, `prop./^unit[\\d]{4}$/.type`.

:::

**Примеры**

Элемент с такими свойствами:

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

может быть выбран любым из этих расширенных селекторов:

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip Для разработчиков фильтров

Чтобы проверить свойства конкретного элемента, сделайте следующее:

1. Проверьте элемент страницы или выберите его в Инструментах разработчика браузера во вкладке `Элементы`
1. Запустите `console.dir($0)` во вкладке `Консоль`

:::

:::caution Ограничения

Паттерны регулярных выражений **не поддерживают** флаги.

:::

#### Псевдокласс `:xpath()` {#extended-css-xpath}

Псевдокласс `:xpath()` позволяет выбирать элементы согласно выражению XPath.

**Синтаксис**

```text
[target]:xpath(expression)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор
- `expression` — требуется, допустимое XPath выражение

##### Ограничения `:xpath()` {#extended-css-xpath-limitations}

`target` можно опустить, поэтому использовать его необязательно. Для любого другого псевдокласса это будет означать «применить ко *всем* узлам DOM», но в случае `:xpath()` это просто означает «применить к *целым* документам», и такое применение значительно замедляет выбор элементов. Вот почему такие правила, как `#?#:xpath(expression)`, ограничены поиском внутри тега `body`. Например, правило `#?#:xpath(//div[@data-st-area=\'Advert\'])` парсится как `#?#body:xpath(//div[@data-st- area=\'Advert\'])`.

Расширенные селекторы с `target`, определённым как *любой* селектор, — `*:xpath(expression)` — всё ещё можно использовать, но не рекомендуется. Поэтому следует уточнить `target`.

Корректно работает только в конце селектора, за исключением псевдокласса [:remove()](#remove-pseudos).

**Примеры**

`:xpath(//*[@class="banner"])` выбирает элемент `div#target1`:

```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` выбирает элемент `div#target2`:

```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```

#### Псевдокласс `:nth-ancestor()` {#extended-css-nth-ancestor}

Псевдокласс `:nth-ancestor()` позволяет искать *n-ного* предка по отношению к ранее выбранному элементу.

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

Псевдокласс `:nth-ancestor()` не поддерживается внутри аргумента псевдокласса [`:not()`](#extended-css-not).

**Примеры**

Для таких DOM:

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

`.child:nth-ancestor(1)` выбирает элемент `div#target1`, `div[class="inner"]:nth-ancestor(3)` выбирает элемент `div#target2`.

#### Псевдокласс `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Синтаксис**

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

Для таких DOM:

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

**Синтаксис**

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

Если используется псевдокласс `:remove()` или псевдосвойство `remove`, все свойства стиля игнорируются, кроме псевдосвойства [`debug`](#selectors-debug-mode).

**Примеры**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Правила с псевдосвойством `remove` должны использовать маркер `#$?#`: `$` для синтаксиса правил CSS-стиля, `?` для синтаксиса ExtendedCss.

:::

#### Псевдокласс `:is()` {#extended-css-is}

Псевдокласс `:is()` позволяет сопоставить любой элемент, который может быть выбран любым из переданных ему селекторов. Некорректные селекторы пропускаются, и псевдокласс работает с допустимыми селекторами без каких-либо ошибок. Наша реализация [нативного`:is()` псевдокласса](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Синтаксис**

```text
[target]:is(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — [*щадящий список*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) стандартных и расширенных селекторов. Для расширенных селекторов поддерживаются только составные селекторы, а не сложные.

##### Ограничения `:is()` {#extended-css-is-limitations}

Правила с псевдоклассом `:is()` должны использовать [нативную реализацию `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is), если они используют маркер `##` и если это возможно, то есть без других расширенных селекторов внутри. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

If the `:is()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:is(.locked)` works fine.

[Сложные селекторы](https://www.w3.org/TR/selectors-4/#complex) с расширенными псевдоклассами не поддерживаются в качестве аргумента `selectors` для псевдокласса `:is()` — разрешены только [составные](https://www.w3.org/TR/selectors-4/#compound). Ознакомьтесь с примерами, чтобы разобраться в деталях.

**Примеры**

`#container *:is(.inner, .footer)` выбирает только элемент `div#target1`:

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

Из-за ограничений `:is(*:not([class]) > .banner)'` не работает, но `:is(*:not([class]):has(> .banner))` можно использовать вместо него для выбора элемента `div#target2`:

```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```

#### Псевдокласс `:not()` {#extended-css-not}

Псевдокласс `:not()` позволяет выбрать элементы, которые *не соответствуют* селекторам, переданным в качестве аргумента. Неправильные селекторы аргументов не допускаются, и будет выдана ошибка. Наша реализация [псевдокласса`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Синтаксис**

```text
[target]:not(selectors)
```

- `target` — необязательный, стандартный или расширенный CSS-селектор, может быть пропущен для проверки *любых* элементов
- `selectors` — список стандартных или расширенных селекторов

##### Ограничения `:not()` {#extended-css-not-limitations}

Правила с псевдоклассом `:not()` должны использовать [нативную реализацию `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not), если они используют маркер `##` и если это возможно, то есть без других расширенных селекторов внутри. Чтобы принудительно применить правила ExtendedCss с `:not()`, используйте маркер `#?#`/`#$?#` явно.

Если `selectors` аргумент псевдокласса `:not()` — расширенный селектор, то из-за того, как псевдокласс `:not()` реализован в ExtendedCss 2.0, его невозможно применить к верхнему узлу DOM, который является `html`, т.е. `#?#html:not(<extended-selectors>)` не работает. Таким образом, если `target` не определён или определён как [универсальный селектор](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, применение расширенного псевдокласса ограничено **дочерними `html`-элементами**, например, правила `#?#:not(...)` и `#?#*:not(...)` парсятся как `#?#html *:not(...)`. Обратите внимание, что для стандартного аргумента селектора такого ограничения нет, т.е. `#?#html:not(.locked)` работает нормально.

Псевдокласс `:not()` рассматривается как стандартный псевдокласс CSS внутри аргумента псевдокласса [`:upward()`](#extended-css-upward), поскольку `:upward()` поддерживает только стандартные селекторы.

«Восходящие» псевдоклассы [`:nth-ancestor()`](#extended-css-nth-ancestor) и [`:upward()`](#extended-css-upward) не поддерживаются внутри аргумента `selectors` для псевдокласса `:not()`.

**Примеры**

`#container > *:not(h2, .text)` выбирает только элемент `div#target1`:

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

Псевдокласс `:if-not()` удалён и больше не поддерживается. Правила с ним не работают.

:::

Этот псевдокласс изначально был сокращением для `:not(:has())`. Он поддерживался ExtendedCss для лучшей совместимости с подписками на некоторые фильтры.

### Приоритет косметических правил {#cosmetic-rules-priority}

То, как применяются правила **скрытия элементов** и **CSS-правила**, зависит от платформы.

**В AdGuard для Windows, Mac и Android** мы используем таблицу стилей, встроенную в страницу. Приоритет у косметических правил такой же, как и у любых других таблиц стилей CSS на сайтах. Но есть ограничение: [правила скрытия элементов](#cosmetic-elemhide-rules) и [CSS-правила](#cosmetic-css-rules) не могут обходить встроенные стили. В таких случаях рекомендуется использовать расширенные селекторы или HTML-фильтрацию.

**В Браузерном расширении AdGuard** используются так называемые «пользовательские таблицы стилей». Их приоритет выше, даже чем у встроенных стилей.

**Расширенные CSS-селекторы** используют для работы JavaScript и добавляют встроенные стили сами, поэтому могут игнорировать любой стиль.

## Правила фильтрации HTML {#html-filtering-rules}

В большинстве случаев для фильтрации рекламы достаточно базовых и косметических правил. Но иногда необходимо изменить HTML-код самой страницы перед её загрузкой. Для этого применяются правила фильтрации HTML-контента. Они позволяют указать, какие HTML-элементы необходимо вырезать из страницы перед тем, как страница попадёт в браузер.

:::info Совместимость

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Такие правила не работают в расширениях для других браузеров, потому что они не могут модифицировать содержимое страниц на сетевом уровне.

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

- **`tagName`** — имя элемента в нижнем регистре, например, `div` или `script`.
- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Те же принципы, что и в [синтаксисе правил скрытия элементов](#cosmetic-elemhide-rules).
- **`attributes`** — список атрибутов, ограничивающих выбор элементов. `name` — имя атрибута, `value` — подстрока, которая содержится в значении атрибута.
- **`pseudoName`** — имя псевдокласса.
- **`pseudoArgs`** — аргументы псевдокласса, записанного в виде функции.
- **`combinator`** — оператор, который работает аналогично [CSS-комбинатору дочерних элементов](https://developer.mozilla.org/ru/docs/Web/CSS/Child_combinator): селектор справа от комбинатора будет относиться только к элементу, прямой родительский элемент которого соответствует селектору слева от комбинатора.

### Примеры

**HTML-код:**

```html
<script data-src="/banner.js"></script>
```

**Правило:**

```adblock
example.org$$script[data-src="banner"]
```

Это правило удалит из кода страниц все элементы `script` со значением `data-src`, содержащим подстроку `banner`. При этом правило будет работать только для домена `example.org` и всех его поддоменов.

### Специальные атрибуты

Помимо обычных атрибутов, значение которых проверяется у каждого элемента, существует набор специальных атрибутов правила, которые изменяют способ работы правила. Ниже мы перечислим все эти атрибуты:

#### `tag-content`

:::caution Скоро устареет

В будущем этот специальный атрибут может перестать поддерживаться. Предпочтительнее использовать псевдокласс `:contains()` там, где это возможно.

:::

Пожалуй, наиболее часто используемый специальный атрибут. Он ограничивает выбор теми элементами, внутренний HTML-код которых (innerHTML) содержит указанную подстроку.

Используйте `""` для экранирования `"`, например: `$$script[tag-content="alert(""this is ad"")"]`

Например, рассмотрим такой HTML-код:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Следующее правило удалит все `script` элементы с подстрокой `banner` в их коде:

```adblock
$$script[tag-content="banner"]
```

:::caution Ограничения

Специальный атрибут `tag-content` не должен появляться в селекторе слева от комбинатора `>`.

:::

#### `wildcard`

:::caution Скоро устареет

В будущем этот специальный атрибут может перестать поддерживаться. Предпочтительнее использовать псевдокласс `:contains()` там, где это возможно.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

Используйте `""` для экранирования `"`, например: `$$script[wildcard=""banner""]`

Например: `$$script[wildcard="*banner*text*"]`

Оно проверяет, что код элемента содержит две последовательные подстроки `banner` и `text`.

:::caution Ограничения

Специальный атрибут `wildcard` не должен появляться в селекторе слева от комбинатора `>`.

:::

#### `max-length`

:::caution Скоро устареет

В будущем этот специальный атрибут может перестать поддерживаться. Предпочтительнее использовать псевдокласс `:contains()` там, где это возможно.

:::

Задает максимальную длину содержимого HTML-элемента. Если этот параметр задан и длина содержимого превышает заданное значение, правило не применяется к элементу.

**Значение по умолчанию**

Если этот параметр не задан, то `max-length` считается равным 8192.

Например:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

Это правило удалит все элементы `div`, код которых содержит подстроку `banner` и длина которых не превышает `400` символов.

:::caution Ограничения

Специальный атрибут `max-length` не должен появляться в селекторе слева от комбинатора `>`.

:::

#### `min-length`

:::caution Скоро устареет

В будущем этот специальный атрибут может перестать поддерживаться. Предпочтительнее использовать псевдокласс `:contains()` там, где это возможно.

:::

Задаёт минимальную длину содержимого HTML-элемента. Если этот параметр задан, и длина содержимого меньше заданного значения — правило не применяется к элементу.

Например:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

Это правило удалит все элементы `div`, код которых содержит подстроку `banner` и длина которых превышает `400` символов.

:::caution Ограничения

Специальный атрибут `min-length` не должен появляться в селекторе слева от комбинатора `>`.

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

:::note Совместимость

`:-abp-contains()` и `:has-text()` являются синонимами `:contains()`.

:::

:::info Совместимость

The `:contains()` pseudo-class is supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13 or later.

:::

Требует, чтобы внутренний HTML-код элемента содержал указанный текст или соответствовал указанному регулярному выражению.

:::caution Ограничения

Псевдокласс `:contains()` не должен появляться в селекторе слева от комбинатора `>`.

:::

### Исключения

По аналогии с правилами скрытия, существует специальный тип правил, отключающий действие выбранного правила HTML-фильтрации для определённых доменов. Синтаксис правил-исключений такой же, только маркер `$$` заменяется на `$@$`.

Например, в фильтре есть правило:

```adblock
$$script[tag-content="banner"]
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com$@$script[tag-content="banner"]
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена.

```adblock
$@$script[tag-content="banner"]
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

## Правила JavaScript {#javascript-rules}

AdGuard поддерживает специальный тип правил, позволяющий вставить любой JavaScript-код на страницы сайтов.

Мы **настоятельно рекомендуем** использовать [скриптлеты](#scriptlets) вместо JavaScript-правил везде, где это возможно. JS-правила должны помочь в процессе отладки, но в качестве долгосрочного решения следует использовать скриптлеты.

**Синтаксис**

```text
rule = [domains] "#%#" script
```

- **`domains`** — ограничение на домены, на страницах которых будет применено правило. Строится по тем же правилам, что и в случае [правил скрытия элементов](#cosmetic-elemhide-rules).
- **`script`** — произвольный JavaScript-код **в одну строку**.

**Примеры**

- `example.org#%#window.__gaq = undefined;` выполняет код `window.__gaq = undefined;` на всех страницах сайта `example.org` и всех его поддоменах.

**Исключения**

По аналогии с правилами скрытия, существует специальный тип правил, отключающий действие выбранного javascript-правила фильтрации для определённых доменов. Синтаксис правил-исключений такой же, только маркер `#%#` заменяется на `#@%#`.

Например, в фильтре есть правило:

```adblock
#%#window.__gaq = undefined;
```

Если вы хотите отключить его для домена `example.com`, вы можете создать правило исключения:

```adblock
example.com#@%#window.__gaq = undefined;
```

В некоторых случаях может потребоваться отключение всех запрещающих правил. Например, на время тестирования. Для этого воспользуйтесь правилом исключения без указания домена.

```adblock
#@%#window.__gaq = undefined;
```

Применять такие исключения рекомендуется только в случае, когда изменить само правило скрытия невозможно. Во всех остальных случаях лучше изменить исходное правило, используя ограничение на домены.

:::caution Ограничения

Правила JavaScript можно использовать [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

JavaScript-правила не поддерживаются в AdGuard Content Blocker.

:::

## Правила скриптлета {#scriptlets}

Скриптлет — это функция JavaScript с расширенными возможностями для блокировки контента. Такие функции могут использоваться в декларативной манере в правилах фильтрации AdGuard.

:::note

AdGuard поддерживает множество различных скриптлетов. Чтобы добиться совместимости между различными блокировщиками, мы также поддерживаем синтаксис uBO и ABP.

:::

**Синтаксис правил блокировки**

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

**Синтаксис правил исключений**

Правила исключений могут отключать некоторые скриптлеты на определённых доменах. The syntax for exception scriptlet rules is similar to normal scriptlet rules but uses `#@%#` instead of `#%#`:

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

Подробнее [об отладке скриптлетов](#debug-scriptlets).

Более подробную информацию о скриптлетах можно найти [на GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Совместимость

Скриптлеты не поддерживаются в AdGuard Content Blocker.

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Предыдущие версии поддерживали только правила исключений, которые отключали определённые скриптлеты.

:::

### Доверенные скриптлеты {#trusted-scriptlets}

Доверенные скриптлеты — это [скриптлеты](#scriptlets) с расширенной функциональностью. У них тот же синтаксис и ограничения. У имён доверенных скриптлетов есть префикс `trust-`, например, `trust-set-cookie`, чтобы их было легко отличить от обычных скриптлетов.

:::note

Доверенные скриптлеты несовместимы с другими блокировщиками рекламы, кроме AdGuard.

:::

:::caution Ограничения

Доверенные скриптлеты можно использовать [**только в доверенных фильтрах**](#trusted-filters).

:::

:::info Совместимость

Доверенные скриптлеты не поддерживаются в AdGuard Content Blocker.

:::

Подробнее [об отладке скриптлетов](#debug-scriptlets).

Более подробную информацию о доверенных скриптлетах можно найти [на GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Модификаторы для небазовых правил {#non-basic-rules-modifiers}

Поведение любого правила можно изменить, используя модификаторы, описанные ниже.

**Синтаксис** {#non-basic-rules-modifiers-syntax}

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — набор модификаторов, описанных ниже.
- **`rule text`** — правило, которое нужно модифицировать.

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
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` применяет скриптлет `prevent-setInterval` только в браузере Safari на Mac.
- `[$app=org.example.app]#@#.textad` отключает все правила `##.textad` для всех доменов при использовании `org.example.app`.

:::info Совместимость

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.

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
- `[$url=||example.org^]###adblock` скрывает элемент с атрибутом `id` равным `adblock` в запросах к `example.org` и всем его поддоменам.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` скрывает `div` с классом `textad` в запросах ко всем доменам, соответствующим регулярному выражению `[a-z]+\.example\.com^`.

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

- [включать содержимое отдельного файла в фильтр](#include-directive)
- [применять правила в зависимости от типа блокировщика](#conditions-directive)
- [уточнять блокировщик контента для применения правил в Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Включение файла {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. Она поддерживает только файлы из того же источника, чтобы удостовериться, что разработчик фильтров является владельцем указанного файла. Включённый файл также может содержать директивы препроцессора (даже другие`!#include`-директивы). Блокировщики должны принимать во внимание случай рекурсивного использования `!#include` и внедрять защитный механизм.

**Синтаксис**

```adblock
!#include file_path
```

где `file_path` — абсолютный или относительный путь к файлу одного и того же источника, который должен быть включён.

Файлы должны находиться на том же домене, но могут быть расположены в другой директории.

Если включённый файл не найден или недоступен, не будут работать обновления всего фильтра.

Для локальных собственных фильтров ограничение на тот же источник не распространяется.

**Примеры**

URL фильтра: `https://example.org/path/filter.txt`

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

Разработчики фильтров могут использовать условия, чтобы подставлять нужные правила, в зависимости от типа блокировщика. Директива с условием, начинающаяся с директивы `!#if`, должна явно прерываться директивой `!#endif`. Условия поддерживают все основные логические операторы.

Есть два возможных сценария:

1. Если блокировщик рекламы встречает директиву `!#if` и не встречает директиву `!#else`, то он компилирует код между директивами `!#if` и `!#endif` только в том случае, если указанное условие истинно.

1. Если существует директива `!#else`, код между `!#if` и `!#else` будет скомпилирован, если условие истинно; в противном случае будет скомпилирован код между `!#else` и `!#endif`.

:::note

Пробелы имеют значение. `!#if` — это корректная директива, в то время как `!# if` — не корректная.

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
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
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

It is already supported for filter lists compiled by the [FiltersRegistry][], but it still may not be supported by AdGuard products when adding a filter list with `!#else` as a custom one. Следующие продукты будут поддерживать его в указанных версиях или более поздних версиях:

- AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13;
- Браузерное расширение AdGuard 4.2.208;
- AdGuard v1.11.16 for Safari.

:::

#### Правила фильтрации в Safari {#safari-affinity-directive}

Лимит каждого блокировщика контента Safari — 150 000 активных правил. Но в AdGuard для Safari и AdGuard для iOS мы разделили правила на 6 блокировщиков контента, тем самым увеличив лимит правил до 900 000.

Какие фильтры содержатся в каждом блокировщике контента:

- AdGuard General — Блокировка рекламы, Языковые
- AdGuard Privacy — Антитрекинг
- AdGuard Social — Виджеты социальных сетей, Раздражители
- AdGuard Security — Безопасность
- AdGuard Other — Другие
- AdGuard Custom — Собственные

Пользовательские правила и белый список добавляются в каждый блокировщик контента.

:::caution

Основной недостаток использования нескольких блокировщиков контента в том, что правила из разных блокировщиков применяются независимо друг от друга. На правила блокировки это не влияет, но с правилами разблокировки могут быть проблемы. Если правило блокировки есть в одном блокировщике контента, а исключение — в другом, то исключение не сработает. Разработчики фильтров используют `!#safari_cb_affinity`, чтобы указать, к какому блокировщику контента принадлежат правила.

:::

**Синтаксис**

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

Можно применить несколько подсказок.

#### Подсказка `NOT_OPTIMIZED`

Для каждого фильтра AdGuard существуют две версии: полная и оптимизированная. Оптимизированная версия намного легче и не содержит правил, которые не используются вообще или используются редко.

Частота использования правил определяется собранной [статистикой по рекламным фильтрам](../tracking-filter-statistics). Но оптимизация основана также на исходной конфигурации для каждого фильтра. Например, вот так это выглядит для Базового фильтра:

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

Другими словами, `percent` — это «уровень сжатия». Например, для Базового фильтра он настроен на 40%. Это означает, что алгоритм оптимизации должен убрать 60% правил.

В итоге, вот так выглядят версии Базового фильтра для Браузерного расширения AdGuard для Chrome:

- полная: https://filters.adtidy.org/extension/chromium/filters/2.txt
- оптимизированная: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**Если вы хотите добавить правило, которое не должно удаляться при оптимизации, используйте подсказку `NOT_OPTIMIZED`:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**А такое правило не будет оптимизировано только для AdGuard для Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### Подсказки `PLATFORM` и `NOT_PLATFORM`

Записи этого типа позволяют указывать платформу, для которой применяется правило. Ниже представлен список используемых платформ и ссылки на Базовый фильтр для каждой из них:

- `windows` — AdGuard для Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard для Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard для Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard для iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Браузерное расширение AdGuard для Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium` — Браузерное расширение AdGuard для Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

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

Хоть самые простые правила фильтрации и возможно придумать «в голове», для чего-то чуть более сложного вам потребуются дополнительная помощь в их отладке и повторении. Есть инструменты, которые помогут вам в этом. Вы можете использовать «Инструменты разработчика» в Chrome и их аналоги в других браузерах, но большинство продуктов AdGuard предоставляют и другой инструмент — Журнал фильтрации.

### Журнал фильтрации

Журнал фильтрации — продвинутый инструмент, который полезен в основном разработчикам фильтров. В нём отображаются все веб-запросы, проходящие через AdGuard, даётся исчерпывающая информация по каждому из них, предлагаются различные опции сортировки и другие полезные возможности.

В зависимости от того, какой продукт AdGuard вы используете, журнал фильтрации может находиться в разных местах.

- В **AdGuard для Windows** вы найдёте его во вкладке настроек *Антибаннер* или через меню трея
- В **AdGuard для Mac** он располагается в разделе *Настройки → Дополнительно → Журнал фильтрации*
- В **AdGuard для Android** его можно найти в разделе *Статистика → Недавняя активность*. *Доступ к недавней активности* также можно получить из *Помощника*
- В **Браузерном расширении AdGuard** он находится во вкладке настроек *Дополнительно*, а также доступен по клику правой кнопкой мыши по иконке расширения. Только веб-браузеры на основе Chromium и Firefox отображают применённые **правила скрытия элементов** (включая CSS, ExtCSS) и **JS-правила и скриптлеты** в своих Журналах фильтрации

:::note

В **AdGuard для iOS** и в **AdGuard для Safari** Журнал фильтрации отсутствует из-за особенностей реализации блокировщиков контента в Safari. AdGuard сам не видит веб-запросы и поэтому не может отображать их.

:::

### Режим отладки селекторов {#selectors-debug-mode}

Иногда может понадобиться проверить производительность того или иного селектора или таблицы стилей. Чтобы сделать это без непосредственного взаимодействия с JavaScript, вы можете использовать свойство стиля `debug`. Когда `ExtendedCss` встречает это свойство, он включает режим отладки для конкретного селектора или для всех селекторов, в зависимости от значения `debug`.

Откройте консоль браузера, находясь на веб-странице, чтобы посмотреть статистику по времени, затраченному на применение селектора(-ов). В режиме отладки следующая статистика отображается в виде объекта, где каждый из отлаживаемых селекторов является ключом, а значение — объектом с такими свойствами:

**Всегда выводится:**

- `selectorParsed` — text of the parsed selector, may differ from the input one
- `timings` — список узлов DOM, соответствующих селектору
    - `appliesCount` — общее количество раз, когда на странице был применён селектор
    - `appliesTimings` — время, которое ушло на применение селектора на странице, для каждого из случаев применения этого селектора (в миллисекундах)
    - `meanTiming` — среднее время, ушедшее на применение селектора на странице
    - `standardDeviation` — стандартное отклонение
    - `timingsSum` — общее время, ушедшее на все применения селектора на текущей странице

**Выводится только для удалённых псевдоэлементов:**

- `removed` — флаг, сигнализирующий об удалении элементов

**Выводится, если элементы не удалены:**

- `matchedElements` — список узлов DOM, соответствующих селектору
- `styleApplied` — объявление обработанного стиля правила, связанного с селектором

**Примеры**

**Отладка конкретного селектора:**

Когда значение свойства `debug` равно `true`, информация только по этому селектору будет отображена в консоли браузера.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Включение глобальной отладки:**

Когда значение свойства `debug` равно `global`, в консоли будет отображаться информация по всем CSS-селекторам, которые были применены на данной странице, для всех правил из любого из включённых фильтров.

```adblock
#$?#.banner { display: none; debug: global; }
```

**Тестирование расширенных селекторов без AdGuard**

ExtendedCss может быть выполнен на любой странице без использования какого-либо продукта AdGuard. Для этого скопируйте и запустите следующий код в консоли браузера:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Или установите пользовательский скрипт [ExtendedCssDebugger](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Теперь вы можете использовать `ExtendedCss` глобально и запустить его метод [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) как `Document.querySelectorAll()`.

**Примеры**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// массив HTMLElements, соответствующих `selector`, должен быть возвращён
ExtendedCss.query(selector);
```

### Отладка скриптлетов {#debug-scriptlets}

Если вы используете браузерное расширение AdGuard и хотите отладить правило [скриптлета](#scriptlets) или [доверенного скриптлета](#trusted-scriptlets), то можете получить дополнительную информацию, открыв журнал фильтрации. В этом случае скриптлеты перейдут в режим отладки и будут записывать больше информации в браузерную консоль.

Следующие скриптлеты разработаны специально для отладки:

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

Следующие скриптлеты тоже могут быть использованы для отладки:

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
- 🧩 — может быть уже реализован в nightly или бета-версиях, но пока не поддерживается в релизных версиях
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
