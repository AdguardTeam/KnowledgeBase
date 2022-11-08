---
title: Пользовательские скрипты
sidebar_position: 5
---

Userscripts (we also call them "extensions") are, de-facto, mini-programs written in Javascript. They modify or extend the functionality of one or more websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.

### Supported apps

AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/overview.md), [AdGuard for Android](/adguard-for-android/overview.md) and [AdGuard for Mac](/adguard-for-mac/overview.md).

### Recommended AdGuard scripts

> These userscripts come directly from the AdGuard developers, and we can guarantee that they are effective and safe. Remember: whenever you download a userscript from an unknown source, you expose yourself to risk, as some scripts may be harmful to your computer. Get new scripts only from the sources you trust 100%. Furthermore, here are [some examples](#more-userscripts) of popular sites with scripts.

* **AdGuard Extra** — An extension that blocks advertising in difficult cases when the usual filter-based approach is not enough.

* **AdGuard Popup Blocker** — The name speaks for itself. It blocks popups - one of the most annoying types of ads on web pages.

* **AdGuard Assistant** (legacy version) — This custom extension is designed to control filtering directly from the browser page (manual blocking, exclusion of the site, etc.).

> Note that this version of Assistant is legacy and there is no point in using it on new systems, since it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/en/adguard-assistant/overview.html). But legacy Assistant might be of help if there is no Browser Assistant extension for your browser.

* **Disable AMP** — A script, pre-installed only in AdGuard for Android, that disables AMP (Accelerated Mobile Pages) on the Google search results page.

## Where can you get more userscripts?{#more-userscripts}

As userscripts are created mainly by enthusiasts, you should be cautious when installing them. Yet, there is a great variety of interesting scripts that can really make using some websites more convenient.

Here we will describe some of the most popular userscript catalogs.

### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) is a catalog of user styles, but it allows you to load them as userscripts. Thus, any user style can be installed via AdGuard. Be careful if you decide to install an unpopular script — there's a risk it might be harmful.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) is a userscript catalog by Stylish creators. Unlike the above-mentioned userstyles.org, the scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open source userscript catalog written in nodeJS. It doesn't have moderation so stay alert to any suspicious scripts.

### Community

If you like the idea of personifying your browser with the help of userscripts, and you have any questions, you can ask them on one of these websites:

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
// @run-at document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```
