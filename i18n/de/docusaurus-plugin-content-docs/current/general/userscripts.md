---
title: Benutzerskripte
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de-facto, mini-programs written in JavaScript. They modify or extend the functionality of one or more websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.

:::note Supported apps

AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/overview), [AdGuard for Android](/adguard-for-android/overview), and [AdGuard for Mac](/adguard-for-mac/overview).

:::

## Recommended AdGuard scripts

These userscripts come directly from the AdGuard developers, and we can guarantee that they are effective and safe. Remember: whenever you download a userscript from an unknown source, you expose yourself to risk, as some scripts may be harmful to your computer. Get new scripts only from the sources you trust 100%. Furthermore, here are [some examples](#more-userscripts) of popular sites with scripts.

### AdGuard Extra

An extension that blocks ads in difficult cases when the usual filter-based approach is not enough. AdGuard Extra comes pre-installed with all premium AdGuard versions, so you don't need to do anything to enable it. However, if you want to use it alongside AdGuard Browser Extension or any other ad blocker, you'll need to use an additional extension. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard Popup Blocker

The name speaks for itself: it blocks pop-ups — one of the most annoying types of ads on web pages. Learn more about this userscript, its key features, and how to install it on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard Assistant (legacy version)

This custom extension is designed to control filtering directly from the browser page (manual blocking, exclusion of the site, etc.).

:::note

This version of Assistant is legacy and there is no point in using it on new systems, since it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). But the legacy Assistant might be of help if there is no Browser Assistant for your browser. If this is your case, your can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Disable AMP

A script that is only pre-installed in AdGuard for Android. It disables AMP (Accelerated Mobile Pages) on the Google search results page. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### microShield

A userscript for people who visit Korean websites and some international websites. The microShield userscript blocks Ad-Shield advertisement and anti-adblock. Its original source code is available at [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) and [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about microShield and how to install it on [GitHub](https://github.com/List-KR/microShield).

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

## Development

### Request license

If you are developing your own custom script and want to test how it works with AdGuard, request a beta license key for the app.

To get it, please send an email to devteam@adguard.com with the following information:

**Subject:** Userscript author license request

**Body:** Please tell us about the userscripts you are working on.

Here is a [mailto link](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Compatibility

#### Metadata block

##### Supported properties

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

##### Unsupported properties

These properties will be simply ignored by Adguard.

```text
@unwrap
```

#### Supported GM functions

AdGuard supports both old GM\_ functions and new GM4 API that use GM object.

##### Values

:::note

All listed old Greasemonkey functions are deprecated but still supported.

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

[Here](https://wiki.greasespot.net/GM.info) you can find more information about Greasemonkey API.

### Example

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
