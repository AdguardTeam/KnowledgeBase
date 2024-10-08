---
title: Пользовательские скрипты
sidebar_position: 5
toc_max_heading_level: 4
---

Пользовательские скрипты (мы также называем их «‎расширениями»‎) — это мини-программы, написанные на языке JavaScript. Они модифицируют или расширяют функциональность одного или нескольких сайтов. Многие пользователи AdGuard уже наверняка знакомы с такими расширениями, как Помощник AdGuard, Блокировщик всплывающей рекламы и AdGuard Extra.

:::note Поддерживаемые приложения

AdGuard может значительно расширять функциональность сайтов, работая как менеджер пользовательских скриптов. Добавлять собственные скрипты или управлять существующими вы можете в трёх наших продуктах: [AdGuard для Windows](/adguard-for-windows/features/extensions), [AdGuard для Android](/adguard-for-android/features/settings#userscripts) и [AdGuard для Mac](/adguard-for-mac/features/extensions).

:::

## Рекомендуемые скрипты AdGuard

Эти пользовательские скрипты разработаны в AdGuard, и мы можем гарантировать, что они эффективны и безопасны. Есть и другие пользовательские скрипты, разработанными другими людьми, которые мы считаем хорошими и надёжными. Чтобы ознакомиться с ними, [прокрутите страницу вниз до следующего раздела](#top-picks). Вы также можете найти некоторые [популярные сайты со скриптами](#more-userscripts) ниже, но помните, что всякий раз, когда вы загружаете пользовательский скрипт из неизвестного источника, вы подвергаете себя определённому риску, поскольку некоторые скрипты могут быть опасны для вашего компьютера.

### AdGuard Extra

Расширение, которое блокирует рекламу в сложных случаях, когда привычного подхода, основанного на фильтрах, недостаточно. AdGuard Extra предустановлен во всех премиум-версиях AdGuard, поэтому вам не нужно ничего делать для его включения. Однако, если вы хотите использовать его вместе с Браузерным расширением AdGuard или любым другим блокировщиком рекламы, вам понадобится дополнительное расширение. Узнайте больше об этом пользовательском скрипте и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### Блокировщик всплывающих окон

Он блокирует один из самых раздражающих типов рекламы — всплывающие окна. Узнайте больше об этом пользовательском скрипте, его ключевых функциях и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![Блокировщик всплывающих окон](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### Помощник AdGuard (устаревшая версия)

Расширение, предназначенное для управления фильтрацией прямо со страницы браузера (ручная блокировка, занесение сайта в исключения и т. д.).

:::note

Это устаревшая версия Помощника и нет смысла использовать её на новых системах, потому что её давно заменил [Браузерный Помощник](https://adguard.com/adguard-assistant/overview.html). Но старый Помощник может пригодиться, если для вашего браузера нет Браузерного помощника. Если это ваш случай, узнайте, как установить Помощник AdGuard [на GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Отключить AMP

Скрипт, который предустановлен только в AdGuard для Android. Он отключает AMP (Accelerated Mobile Pages или «ускоренные мобильные страницы») на странице результатов поиска Google. Узнайте больше об этом пользовательском скрипте и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/DisableAMP).

![Отключить AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Лучшие варианты вне AdGuard{#top-picks}

Эти пользовательские скрипты не разработаны AdGuard, поэтому мы не можем дать 100% гарантию, что они безопасны и/или работают всегда. Однако, исходя из нашего опыта, они заслуживают рекомендации, поскольку заслужили свою хорошую репутацию.

### Don't track me Google

Этот скрипт удаляет функцию отслеживания Google из ссылок в результатах поиска Google. Это ускоряет загрузку результатов поиска и позволяет скопировать URL-адрес ссылки, щёлкнув по нему правой кнопкой мыши или нажав на него.

Его исходный код [доступен на GitHub](https://github.com/Rob--W/dont-track-me-google). Этот пользовательский скрипт можно загрузить с [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) и установить в любое приложение AdGuard на базе CoreLibs.

### microShield

Пользовательский скрипт для тех, кто посещает корейские и некоторые международные сайты. Пользовательский скрипт microShield блокирует рекламу Ad-Shield и антиблокировщики рекламы. Его исходный код доступен на [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) и на [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Этот пользовательский скрипт можно установить в приложениях на основе AdGuard CoreLibs, Violentmonkey, Tampermonkey и [quoid/userscripts](https://github.com/quoid/userscripts). Узнайте больше о microShield и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/DisableAMP).

## Где взять больше пользовательских скриптов{#more-userscripts}

По большей части пользовательские скрипты создаются любителями, поэтому, устанавливая тот или иной скрипт, нужно быть очень осторожными. Любой скрипт из неизвестного источника несёт в себе потенциальный риск. Тем не менее, существует огромное количество интересных скриптов, которые, если установить их аккуратно и ответственно, могут действительно сделать использование некоторых сайтов более удобным.

Здесь мы опишем несколько популярных каталогов пользовательских скриптов.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) — это сайт, который позволяет искать пользовательские скрипты по URL или домену. Сайт простой в использовании и надёжный: скрипты отображаются только с модерируемых страниц.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) — каталог пользовательских скриптов от авторов Stylish. Скрипты в этом каталоге проходят модерацию.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) — каталог пользовательских скриптов с открытым кодом, написанный на nodeJS. В нём нет модерации, поэтому будьте внимательны к любым подозрительным скриптам.

### Сообщество

Если вы хотите персонализировать браузер при помощи пользовательских скриптов и у вас есть какие-либо вопросы на эту тему, задать их можно на любом из этих сайтов:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Разработка

### Запросить лицензию

Если вы разрабатываете свой пользовательский скрипт и хотите протестировать, как он работает с AdGuard, запросите бета-лицензию для приложения.

Для этого отправьте нам сообщение devteam@adguard.com со следующей информацией:

**Тема:** Запрос лицензии для автора пользовательского скрипта

**Текст письма:** Расскажите о пользовательском скрипте, над которым вы работаете.

Нажмите [сюда](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK), чтобы отправить письмо.

### Совместимость

#### Блок метаданных

##### Поддерживаемые свойства

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

##### Неподдерживаемые свойства

AdGuard проигнорирует эти свойства.

```text
@unwrap
```

#### Поддерживаемые функции GM

AdGuard поддерживает как старые функции GM\_, так и новый GM4 API, использующий объект GM.

##### Значения

:::note

Все перечисленные функции Greasemonkey устарели, но всё ещё поддерживаются.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Здесь](https://wiki.greasespot.net/GM.info) вы найдёте больше информации о Greasemonkey API.

### Пример

```javascript
// ==UserScript==
// @name Имя, которое показывается пользователю, если локаль английская или неизвестна
// @name:ru Имя, которое показывается пользователю, если локаль русская
// @description Описание, которое показывается пользователю, если локаль английская или неизвестна
// @description:ru Описание, которое показывается пользователю, если локаль русская
// @icon https://myhomepage.com/myuserscript.png
// @version 1.0.0.0
// @downloadURL https://dl.myhomepage.org/myuserscript.user.js
// @updateURL https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL https://myhomepage. com/myuserscript
// @include *
// @exclude *://website.com/*
// @resource https://myhomepage.com/myuserscript.css
// @require https://myhomepage. com/mylibrary.js
// @grant свойство: настройки
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_addStyle
// @grant GM_log
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @grant GM_info
// @grant GM_openInTab
// @grant GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
! function(){(
    console.log("I am loaded!");
)}();
```

## Пользовательские стили

Продукты AdGuard поддерживают пользовательские стили с ограничениями. Не поддерживаются теги метаданных `@var` и `@advanced`, а также любое значение тега метаданных `@preprocessor`, кроме `default`.

### Метаданные

Блок метаданных пишется с использованием комментариев в стиле CSS, начиная с `===UserStyle===` и заканчивая `===/UserStyle===`. Все теги метаданных, которые поддерживаются в пользовательских скриптах, поддерживаются и в пользовательских стилях, хотя некоторые из них не имеют смысла и игнорируются. Теги `@var` и `@advanced` не поддерживаются. Единственное поддерживаемое значение тега `@preprocessor` — `default`.

### Содержимое

Содержимое пользовательского стиля — это простой CSS с поддержкой [правила `@-moz-document`](https://developer.mozilla.org/en-US/docs/Web/CSS/@document). Функция `media-document()` не поддерживается. Пользовательский стиль будет применяться только к страницам, которые соответствуют одному или нескольким правилам `@-moz-document`. Если пользовательский стиль не содержит правил `@-moz-document`, он не будет применяться.

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
