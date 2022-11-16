---
title: Пользовательские скрипты
sidebar_position: 5
---

Пользовательские скрипты (мы также называем их «‎расширениями»‎) — это, по сути, мини-программы, написанные на языке Javascript. Они модифицируют или расширяют функциональность одного или нескольких сайтов. Многие пользователи AdGuard уже наверняка знакомы с такими расширениями, как Помощник AdGuard, Блокировщик всплывающей рекламы и AdGuard Extra.

### Поддерживаемые продукты

AdGuard может значительно расширять функциональность сайтов, работая как менеджер пользовательских скриптов. Добавлять собственные скрипты или управлять существующими вы можете в трёх наших продуктах: [AdGuard для Windows](/adguard-for-windows/overview.md), [AdGuard для Android](/adguard-for-android/overview.md) и [AdGuard для Mac](/adguard-for-mac/overview.md).

### Рекомендуемые скрипты AdGuard

> Эти пользовательские скрипты разработаны в AdGuard, и мы можем гарантировать, что они эффективны и безопасны. Помните: каждый раз, когда вы загружаете пользовательский скрипт из неизвестного источника, вы подвергаете себя риску, поскольку некоторые скрипты могут быть опасны для вашего компьютера. Старайтесь скачивать новые расширения только из проверенных источников, которым вы доверяете на 100%. Чуть позже мы приведём [несколько примеров](#more-userscripts) популярных сайтов.

* **AdGuard Extra** — расширение, которое блокирует рекламу в сложных случаях, когда привычного подхода, основанного на фильтрах, недостаточно.

* **Блокировщик всплывающей рекламы** — название скрипта говорит само за себя. Он блокирует один из самых раздражающих типов рекламы — всплывающие окна.

* **Помощник AdGuard** (старая версия) — расширение, предназначенное для управления фильтрацией прямо со страницы браузера (ручная блокировка, занесение сайта в исключения и т. д.).

> Обратите внимание, что это устаревшая версия Помощника и нет смысла использовать её на новых системах, потому что её давно заменил [Браузерный Помощник](https://adguard.com/ru/adguard-assistant/overview.html). Но старый Помощник может пригодиться, если для вашего браузера нет расширения Браузерного помощника.

* **Отключить AMP** — это скрипт, предустановленный только в AdGuard для Android, который отключает AMP (Accelerated Mobile Pages) на странице результатов поиска Google.

## Где взять больше пользовательских скриптов{#more-userscripts}

По большей части пользовательские скрипты создаются любителями, поэтому, устанавливая тот или иной скрипт, нужно быть очень осторожными. Тем не менее существует великое множество интересных скриптов, которые действительно могут сделать использование некоторых сайтов более удобным.

Здесь мы опишем несколько популярных каталогов пользовательских скриптов.

### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) — это каталог пользовательских стилей, но при этом он позволяет выгружать их в виде скриптов. Таким образом, через AdGuard можно установить любой пользовательский стиль. Будьте осторожны, скачивая малопопулярный скрипт — он может нести угрозу.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) — каталог пользовательских скриптов от авторов Stylish. Однако, в отличие от userstyles.org, скрипты в этом каталоге проходят модерацию, так что доверие к ним намного выше.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) — каталог пользовательских скриптов с открытым кодом, написанный на nodeJS. В нём нет модерации, поэтому будьте внимательны к любым подозрительным скриптам.

### Сообщество

Если вы хотите персонализировать браузер при помощи пользовательских скриптов и у вас есть какие-либо вопросы на эту тему, задать их можно на любом из этих сайтов:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Разработка

### Запросить лицензию

Если вы разрабатываете свой пользовательский скрипт и хотите протестировать его работу с AdGuard, запросите бета-лицензию на приложение.

Для этого отправьте нам сообщение devteam@adguard.com со следующей информацией:

**Тема:** Запрос лицензии для автора пользовательского скрипта

**Текст письма:** Расскажите о пользовательском скрипте, над которым вы работаете.

Нажмите [сюда](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK), чтобы отправить письмо.

### Совместимость

#### Блок метаданных

##### Поддерживаемые свойства

```
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

```
@unwrap
```

#### Поддерживаемые функции GM

AdGuard поддерживает как старые функции GM\_, так и новый GM4 API, использующий объект GM.

##### Значения

Обратите внимание, что все перечисленные функции Greasemonkey устарели, но всё ещё поддерживаются.

```
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
