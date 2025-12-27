---
title: Расширения
sidebar_position: 6
---

## Пользовательские скрипты

Пользовательские скрипты (мы также называем их «‎расширениями»‎) — это мини-программы, написанные на языке JavaScript. Они модифицируют или расширяют функциональность одного или нескольких сайтов. Многие пользователи AdGuard уже наверняка знакомы с такими расширениями, как Помощник AdGuard, Блокировщик всплывающих окон и AdGuard Extra.

:::note Поддерживаемые приложения

AdGuard может значительно расширять функциональность сайтов, работая как менеджер пользовательских скриптов. Вы можете добавлять собственные скрипты или управлять существующими в наших трёх продуктах: [AdGuard для Windows](/adguard-for-windows/features/extensions), [AdGuard для Android](/adguard-for-android/features/settings#userscripts) и [AdGuard для Mac](/adguard-for-mac/features/extensions).

:::

### Рекомендуемые скрипты AdGuard

Эти пользовательские скрипты разработаны в AdGuard, и мы можем гарантировать, что они эффективны и безопасны. Есть и другие пользовательские скрипты, разработанными другими людьми, которые мы считаем хорошими и надёжными. Чтобы ознакомиться с ними, прокрутите страницу вниз [до следующего раздела[(#top-picks). Вы также можете найти [популярные сайты со скриптами](#more-userscripts) ниже. Помните, что скачивать пользовательские скрипты из неизвестных источников может быть небезопасно.

#### AdGuard Extra

Расширение, которое блокирует рекламу в сложных случаях, когда привычного подхода, основанного на фильтрах, недостаточно. AdGuard Extra предустановлен и включён по умолчанию в AdGuard для Windows, AdGuard для Mac и AdGuard для Android (в платной версии). Если вы хотите использовать AdGuard Extra вместе с Браузерным расширением AdGuard или любым другим блокировщиком рекламы, вам понадобится установить отдельное расширение. [На GitHub](https://github.com/AdguardTeam/AdGuardExtra) есть подробности об этом пользовательском скрипте и о том, как его установить.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### Блокировщик всплывающих окон

Этот пользовательский скрипт блокирует один из самых раздражающих типов рекламы — всплывающие окна. [На GitHub](https://github.com/AdguardTeam/PopupBlocker) есть подробности об этом пользовательском скрипте и о том, как его установить.

![Блокировщик всплывающих окон AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### Помощник AdGuard (устаревшая версия)

Это расширение предназначено для управления фильтрацией прямо со страницы браузера: например, оно позволяет заблокировать элементы вручную или добавить сайт в белый список.

:::note

Это устаревшая версия Помощника. Её нет смысла использовать на новых системах, потому что её давно заменил полнноценный [Браузерный помощник](https://adguard.com/adguard-assistant/overview.html). Но предыдущая версия Помощника может пригодиться, если для вашего браузера нет Браузерного помощника. Если это ваш случай, перейдите [на GitHub](https://github.com/AdguardTeam/AdguardAssistant), чтобы установить Помощник AdGuard.

:::

#### Отключить AMP

Скрипт, который предустановлен только в AdGuard для Android. Он отключает AMP (Accelerated Mobile Pages или «ускоренные мобильные страницы») на странице результатов поиска Google. [На GitHub](https://github.com/AdguardTeam/DisableAMP) есть подробности об этом пользовательском скрипте и о том, как его установить.

![Отключить AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Лучшие варианты вне AdGuard{#top-picks}

Эти пользовательские скрипты не разработаны AdGuard, поэтому мы не можем дать 100% гарантию, что они безопасны и/или работают всегда. Однако, исходя из нашего опыта, они заслуживают рекомендации, поскольку заслужили свою хорошую репутацию.

#### Don't track me Google

Этот скрипт удаляет функцию отслеживания Google из ссылок в результатах поиска Google. Это ускоряет загрузку результатов поиска и позволяет скопировать URL-адрес ссылки, щёлкнув по нему правой кнопкой мыши или нажав на него.

Его исходный код [доступен на GitHub](https://github.com/Rob--W/dont-track-me-google). Этот пользовательский скрипт можно скачать [с сайта GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) и установить с помощью любого приложения AdGuard на основе CoreLibs (AdGuard для Windows, AdGuard для Mac и AdGuard для Android).

#### SponsorBlock

SponsorBlock пропускает спонсорские сегменты в видеороликах YouTube. Он экономит время, сразу переходя к основному содержимому, и удаляет прерывания от рекламы и саморекламы.

:::info

Этот юзерскрипт работает исключительно в наших десктопных приложениях — AdGuard для Windows и AdGuard для Mac.

:::

Чтобы попробовать:

1. Перейдите по ссылке [https://mchangrh.github.io/sb.js/](https://mchangrh.github.io/sb.js/).
2. Нажмите **Сгенерировать ссылку**.
3. Скопируйте появившуюся ссылку.
4. Откройте AdGuard и перейдите в **Расширения → Добавить расширение → Импорт из файла или URL**.
5. Вставьте скопированную ссылку и подтвердите.

#### tinyShield

Пользовательский скрипт для тех, кто посещает корейские и некоторые международные сайты. Скрипт блокирует рекламу Ad-Shield и программы, обходящие блокировщики рекламы. Этот пользовательский скрипт можно установить с помощью приложений AdGuard на основе CoreLibs, а также с помощью Violentmonkey, Tampermonkey и [quoid/userscripts](https://github.com/quoid/userscripts). [На GitHub](https://github.com/FilteringDev/tinyShield) есть подробности об этом пользовательском скрипте и о том, как его установить.

### Где взять больше пользовательских скриптов{#more-userscripts}

По большей части пользовательские скрипты создаются любителями, поэтому, устанавливая тот или иной скрипт, нужно быть очень осторожными. Любой скрипт из неизвестного источника несёт в себе потенциальный риск. Тем не менее, существует огромное количество интересных скриптов, которые, если установить их аккуратно и ответственно, могут сделать сайты удобнее.

Здесь мы опишем несколько популярных каталогов пользовательских скриптов.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) — это сайт, который позволяет искать пользовательские скрипты по URL или домену. Сайт простой в использовании и надёжный: он отображает скрипты только с модерируемых страниц.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) — это каталог пользовательских скриптов от создателей Stylish. Скрипты в этом каталоге проходят модерацию.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) — каталог пользовательских скриптов с открытым кодом, разработанный с использованием Node.js. Он не модерируется, поэтому проверяйте скрипты внимательно.

#### Сообщество

Если вы хотите персонализировать браузер при помощи пользовательских скриптов и у вас есть вопросы на эту тему, задать их можно на любом из этих сайтов:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Разработка

#### Запросить лицензию

Если вы разрабатываете собственный пользовательский скрипт и хотите протестировать, как он работает с AdGuard, вы можете запросить лицензию, заполнив [форму](https://surveys.adguard.com/ru/for_developers_request/form.html).

#### Совместимость

##### Блок метаданных

###### Поддерживаемые свойства

- [`@name`](https://wiki.greasespot.net/Metadata_Block#@name)
- [`@namespace`](https://wiki.greasespot.net/Metadata_Block#@namespace)
- [`@description`](https://wiki.greasespot.net/Metadata_Block#@description)
- [`@version`](https://wiki.greasespot.net/Metadata_Block#@version)
- [`@match`](https://wiki.greasespot.net/Metadata_Block#@match)
- [`@include`](https://wiki.greasespot.net/Metadata_Block#@include)
- [`@exclude`](https://wiki.greasespot.net/Metadata_Block#@exclude)
- [`@grant`](https://wiki.greasespot.net/Metadata_Block#@grant)
- [`@connect`](https://www.tampermonkey.net/documentation.php#meta:connect)
- [`@require`](https://wiki.greasespot.net/Metadata_Block#@require)
- [`@resource`](https://wiki.greasespot.net/Metadata_Block#@resource)
- [`@downloadURL`](https://www.tampermonkey.net/documentation.php#meta:downloadURL)
- [`@updateURL`](https://www.tampermonkey.net/documentation.php#meta:updateURL)
- [`@homepage`, `@homepageURL`, `@source`, `@website`](https://www.tampermonkey.net/documentation.php#meta:homepage)
- [`@run-at`](https://wiki.greasespot.net/Metadata_Block#@run-at)
- [`@noframes`](https://wiki.greasespot.net/Metadata_Block#@noframes)
- [`@icon`, `@iconURL`, `@defaulticon`](https://www.tampermonkey.net/documentation.php#meta:icon)
- [`@icon64`, `@icon64URL`](https://www.tampermonkey.net/documentation.php#meta:icon64)

###### Неподдерживаемые свойства

AdGuard проигнорирует эти свойства.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Поддерживаемые функции GM

AdGuard поддерживает как старые функции GM\_, так и новый GM4 API, использующий объект GM.

:::note

Все перечисленные функции Greasemonkey устарели, но всё ещё поддерживаются.

:::

- [`GM.info`, `GM_info`](https://wiki.greasespot.net/GM.info)
- [`GM.setValue`, `GM_setValue`](https://wiki.greasespot.net/GM.setValue)
- [`GM.getValue`, `GM_getValue`](https://wiki.greasespot.net/GM.getValue)
- [`GM.listValues`, `GM_listValues`](https://wiki.greasespot.net/GM.listValues)
- [`GM.deleteValue`, `GM_deleteValue`](https://wiki.greasespot.net/GM.deleteValue)
- [`GM.getResourceUrl`, `GM_getResourceURL`](https://wiki.greasespot.net/GM.getResourceUrl)
- [`GM.setClipboard`, `GM_setClipboard`](https://wiki.greasespot.net/GM.setClipboard)
- [`GM.xmlHttpRequest`, `GM_xmlhttpRequest`](https://wiki.greasespot.net/GM.xmlHttpRequest)
- [`GM.openInTab`, `GM_openInTab`](https://wiki.greasespot.net/GM.openInTab)
- [`GM.notification`](https://wiki.greasespot.net/GM.notification)
- [`unsafeWindow`](https://wiki.greasespot.net/UnsafeWindow)
- [`GM_getResourceText`](https://www.tampermonkey.net/documentation.php#api:GM_getResourceText)
- [`GM_addStyle`](https://www.tampermonkey.net/documentation.php#api:GM_addStyle)
- [`GM_log`](https://www.tampermonkey.net/documentation.php#api:GM_log)
- [`GM.addElement`, `GM_addElement`](https://www.tampermonkey.net/documentation.php#api:GM_addElement)
- [`window.onurlchange`](https://www.tampermonkey.net/documentation.php#api:window.onurlchange)

Подробную информацию об API Greasemonkey можно найти в [руководстве](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Пример

```javascript
// ==UserScript==
// @name            Name as shown to the user when locale is english or unknown
// @name:ru         Name as shown to the user when locale is russian
// @description     Description as shown to the user when locale is english or unknown
// @description:ru  Description as shown to the user when locale is russian
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @grant           GM_addElement
// @run-at          document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```

#### Trusted Types API

AdGuard предоставляет экземпляр класса `PolicyApi`, который позволяет управлять Trusted Types в ваших пользовательских скриптах.

Вы можете получить доступ к экземпляру этого класса, используя переменную `ADG_policyApi` в пользовательском скрипте.

##### Свойства

- `name: string` — название политики (по умолчанию `AGPolicy`).
- `isSupported: boolean` — флаг, указывающий, поддерживается ли API Trusted Types текущим браузером.

##### Методы с полифилом

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Если не поддерживается, возвращает `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). Если не поддерживается, возвращает `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Если не поддерживается, возвращает `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Если не поддерживается, возвращает `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Если не поддерживается, возвращает `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Если не поддерживается, возвращает `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Если не поддерживается, возвращает `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Если не поддерживается, возвращает `false`.

##### Дополнительные типы

```typescript
/**
 * Перечисление, представляющее возвращаемые значения методов `getAttributeType` и
 * `getPropertyType` нативного API Trusted Types.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType}
 */
enum TrustedType {
    HTML = 'TrustedHTML',
    Script = 'TrustedScript',
    ScriptURL = 'TrustedScriptURL',
}

// Вы можете получить доступ к нему следующим образом внутри пользовательского скрипта
ADG_TrustedType.HTML // "TrustedHTML"

/**
 * Изоморфный тип доверенного значения. Если браузер поддерживает API Trusted Types, это будет один из перечисленных Trusted Types
 * (`TrustedHTML`, `TrustedScript` или `TrustedScriptURL`); в противном случае это будет обычная строка `string`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL}
 */
type TrustedValue = string | TrustedHTML | TrustedScript | TrustedScriptURL;
```

##### Дополнительные методы

```typescript
/**
 * Создаёт доверенный тип в зависимости от `type`:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - или возвращает `value`, если ни один из них не подходит.
 *
 * @param type          Доверенный тип.
 * @param value         Значение, из которого создаётся доверенный тип.
 * @param createArgs    Дополнительные аргументы, передаваемые в функцию, представленную `TrustedTypePolicy`.
 * @returns             Созданное значение.
 */
function create(
    type: TrustedType,
    value: string,
    ...createArgs: unknown[]
): TrustedValue


// Пример: Создаёт TrustedHTML
const trustedHTML = ADG_policyApi.create(ADG_TrustedType.HTML, '<div></div>');

/**
 * Конвертирует `value` атрибута `attribute` в один из доверенных типов:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - или возвращает `value`, если ни один из них не подходит.
 *
 * @param tagName       Имя HTML-тега.
 * @param attribute     Атрибут.
 * @param value         Значение атрибута для конвертирования.
 * @param elementNS     Пространство имён элемента. Если не указано, по умолчанию используется пространство имён HTML.
 * @param attrNS        Пространство имён атрибута. Если не указано, по умолчанию null.
 * @param createArgs    Дополнительные аргументы, передаваемые в функцию, представленную `TrustedTypePolicy`.
 * @returns             Конвертированное значение.
 */
function convertAttributeToTrusted(
    tagName: string,
    attribute: string,
    value: string,
    elementNS?: string,
    attrNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Пример: Конвертирует в TrustedScriptURL
const trustedScriptURL = ADG_policyApi.convertAttributeToTrusted("script", "src", 'SOME_URL');
scriptElement.setAttribute("src", trustedScriptURL);

/**
 * Конвертирует `value` свойства `property` в один из доверенных типов:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - или возвращает `value`, если ни один из них не подходит.
 *
 * @param tagName       Имя HTML-тега.
 * @param property      Свойство.
 * @param value         Значение свойства для конвертирования.
 * @param elementNS     Пространство имён элемента. Если не указано, по умолчанию используется пространство имён HTML.
 * @param createArgs    Дополнительные аргументы, передаваемые в функцию, представленную `TrustedTypePolicy`.
 * @returns             Конвертированное значение.
 */
function convertPropertyToTrusted(
    tagName: string,
    property: string,
    value: string,
    elementNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Пример: Конвертирует в TrustedHTML
divElement.innerHTML = ADG_policyApi.convertPropertyToTrusted("div", "innerHTML", "<div></div>");
```

#### Взаимодействие со SPA-сайтами

:::info Совместимость

Этот раздел относится только к AdGuard для Windows, AdGuard для Mac, AdGuard для Android и AdGuard для Linux с [CoreLibs] версии 1.19 или более поздней.

:::

Многие современные сайты, такие как YouTube, используют возможности [одностраничных приложений (Single Page Application, SPA)](https://en.wikipedia.org/wiki/Single-page_application). В отличие от традиционных веб-приложений, такая страница не перезагружается при переходе между страницами. Вместо этого содержимое обновляется динамически с помощью JavaScript, что обеспечивает более плавное взаимодействие с пользователем.

На подобных сайтах пользовательскитй скрипт запускается только один раз, когда директивы `@match` или `@include` совпадают (если только не совпала директива `@exclude`). Из-за особенностей одностраничных приложений (SPA) скрипт не может быть повторно вызван при последующих изменениях страницы, так как глобальный контекст JavaScript остаётся неизменным. Чтобы решить эту проблему, пользовательские скрипты могут использовать директиву `@grant window.onurlchange`.

```javascript
// ==UserScript==
// @name SPA
// @namespace spa
// @version 1.0.0
// @match https://*/*
// @grant window.onurlchange
// @run-at document-start
// ==/UserScript==

// via window.onurlchange
window.onurlchange = (event) => {
    console.log('URL changed to:', event.url);
};

// via window.addEventListener('urlchange')
window.addEventListener('urlchange', (event) => {
    console.log('URL changed to:', event.url);
});
```

Это позволит пользовательским скриптам отслеживать изменения URL и соответствующим образом их обрабатывать.

:::note

Событие `urlchange` срабатывает только при полном изменении URL, например, при изменении пути или запроса, но не при изменении фрагмента (хеша).
Примеры:

- Переход с `https://example.com/page1` на `https://example.com/page2` вызовет событие.
- Переход с `https://example.com/page1?query=1` на `https://example.com/page1?query=2` вызовет событие.
- Переход с `https://example.com/page1#section1` на `https://example.com/page1#section2` **НЕ** вызовет событие.

:::

:::note

API `window.onurlchange` и `window.addEventListener(\'urlchange\', ...)` являются нестандартными. Чтобы использовать их, вы должны явно предоставить разрешение в вашем польщовательском скрипте с помощью `@grant window.onurlchange`.

:::

Если сайт использует хеш-маршрутизацию, пользовательские скрипты могут использовать нативное DOM-событие [`hashchange`](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event):

```javascript
// ==UserScript==
// @name SPA
// @namespace spa
// @version 1.0.0
// @match https://*/*
// @run-at document-start
// ==/UserScript==

// via window.onhashchange
window.onhashchange = (event) => {
    console.log(`Hash changed from "${event.oldURL}" to "${event.newURL}"`);
};

// via window.addEventListener('hashchange')
window.addEventListener('hashchange', (event) => {
    console.log(`Hash changed from "${event.oldURL}" to "${event.newURL}"`);
});
```

## Пользовательские стили

Пользовательские стили позволяют изменять внешний вид популярных сайтов.

В AdGuard есть возможность загружать или создавать собственные пользовательские стили. Это продвинутая функция, поэтому вам понадобятся некоторые знания HTML и CSS.

:::info Поддерживаемые приложения

Сейчас создавать и управлять пользовательскими стилями можно в двух приложениях AdGuard: AdGuard для Windows (версии 7.19 или выше) и AdGuard для Mac (версии 2.16 или выше). Мы также планируем добавить эту функцию в AdGuard 4.8 для Android в ближайшем будущем.

:::

Это экспериментальная функция. Поэтому, если вы столкнётесь с проблемами при добавлении или создании пользовательского стиля, пожалуйста, напишите нашей команде поддержки на почту <support@adguard.com>.

### Как настроить пользовательский стиль в AdGuard

Вы можете скачивать пользовательские стили с разных сайтов. Один из самых популярных сайтов — [https://userstyles.world/](https://userstyles.world/explore). Возьмём его в качестве примера.

1. Перейдите по ссылке выше и выберите пользовательский стиль, который вам нравится

2. Нажмите _Copy_ (Копировать) рядом с URL-адресом стиля

3. Откройте настройки AdGuard → _Расширения_

4. Нажмите на кнопку [+] и вставьте ссылку на пользовательский стиль

5. Готово!

Если вы знакомы с правилами CSS, вы также можете создавать пользовательские стили самостоятельно.

:::note

Мы не поддерживаем пользовательские стили, которые содержат `@var` или `@advanced` в метаданных. AdGuard также не поддерживает `@preprocessor` без значения `default`.

:::

1. Откройте настройки AdGuard → _Расширения_

2. Нажмите на кнопку [+] и выберите опцию _Создать стиль_. Откроется новое окно

3. Чтобы создать пользовательский стиль, сначала напишите заголовок с метаданными, например:

   ```CSS
   /* ==UserStyle==
   @name New userstyle
   @version 1.0
   ==/UserStyle== */
   ```

4. После метаданных добавьте сам пользовательский стиль на основе CSS. AdGuard поддерживает доменные имена, соответствующие (`@-moz-document domain(…), …`). Например:

   ```CSS
   body {
     background: gray;
     }
   ```

   Или:

   ```CSS
   @-moz-document domain('example.org'),
   domain('example.net'),
   domain('example.com') body {
     background: gray;
     }
   ```

5. Когда закончите, нажмите _Сохранить и закрыть_. Готово, пользовательский стиль добавлен в AdGuard

### Пример

```css
/* ==UserStyle==
@name         Example userstyle
@namespace    https://example.org/userstyle
@homepageURL  https://example.org/userstyle
@version      1.0.0
@license      Other
@description  This is an example
@author       example
@preprocessor default
==/UserStyle== */
@-moz-document regexp("https?\:\/\/(www\.)?example\.(org|com).*") {
    body {
        background-color: #000000 !important;
    }
}
```

[CoreLibs]: https://github.com/AdguardTeam/CoreLibs
