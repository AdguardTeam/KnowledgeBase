---
title: Пользовательские скрипты
sidebar_position: 5
toc_max_heading_level: 4
---

Пользовательские скрипты (мы также называем их «‎расширениями»‎) — это, по сути, мини-программы, написанные на языке JavaScript. Они модифицируют или расширяют функциональность одного или нескольких сайтов. Многие пользователи AdGuard уже наверняка знакомы с такими расширениями, как Помощник AdGuard, Блокировщик всплывающей рекламы и AdGuard Extra.

:::note Поддерживаемые приложения

AdGuard может значительно расширять функциональность сайтов, работая как менеджер пользовательских скриптов. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

## Рекомендуемые скрипты AdGuard

Эти пользовательские скрипты разработаны в AdGuard, и мы можем гарантировать, что они эффективны и безопасны. For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you expose yourself to a certain risk, as some scripts may be harmful to your computer.

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

## Top picks outside AdGuard{#top-picks}

These userscripts are not developed by AdGuard and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation as they've all earned their good reputation.

### Don't track me Google

This script removes Google's tracking feature from the links in Google search results. It speeds up the loading of search results and allows you to right-click or tap to copy the link URL.

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

### microShield

Пользовательский скрипт для тех, кто посещает корейские и некоторые международные сайты. Пользовательский скрипт microShield блокирует рекламу Ad-Shield и антиблокировщики рекламы. Его исходный код доступен на [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) и на [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Этот пользовательский скрипт можно установить в приложениях на основе AdGuard CoreLibs, Violentmonkey, Tampermonkey и [quoid/userscripts](https://github.com/quoid/userscripts). Узнайте больше о microShield и о том, как его установить, [на GitHub](https://github.com/AdguardTeam/DisableAMP).

## Где взять больше пользовательских скриптов{#more-userscripts}

As userscripts are mainly created by enthusiasts, you should be cautious when installing them. Any script from an unknown source carries a potential risk. Yet, there is a great variety of interesting scripts that, if installed carefully and responsibly, can really make using some websites more convenient.

Здесь мы опишем несколько популярных каталогов пользовательских скриптов.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) — каталог пользовательских скриптов от авторов Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

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
