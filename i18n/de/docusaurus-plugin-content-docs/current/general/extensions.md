---
title: Erweiterungen
sidebar_position: 6
---

## Benutzerskripte

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Sie ändern oder erweitern die Funktionalität einer oder mehrerer Websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.

:::note Supported apps

AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

### Empfohlene AdGuard-Skripte

Diese Benutzerskripte stammen direkt von AdGuard und wir können garantieren, dass sie effektiv und sicher sind. For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you are exposing yourself to a certain risk, as some scripts may be harmful to your computer.

#### AdGuard Extra

Eine Erweiterung, die Werbung in schwierigen Fällen blockiert, wenn der übliche filterbasierte Ansatz nicht ausreicht. AdGuard Extra comes pre-installed in AdGuard standalone apps, except for the one for iOS, so you don't need to do anything to enable it. Wenn Sie es jedoch zusammen mit AdGuard Browsererweiterung oder einem anderen Werbeblocker verwenden möchten, müssen Sie eine zusätzliche Erweiterung verwenden. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Pop-up-Blocker

The name speaks for itself: it blocks popups — one of the most annoying types of ads on websites. Learn more about this userscript, its key features, and installation on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard-Assistent (alte Version)

This custom extension is designed to control filtering directly from the browser page (manual blocking, allowlisting, etc.).

:::note

This version of Assistant is legacy and there is no point in using it on new systems, as it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). However, the legacy Assistant may be useful if there is no Browser Assistant for your browser. If this is your case, you can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### AMP deaktivieren

Ein Skript, das nur in AdGuard für Android vorinstalliert ist. Es deaktiviert AMP (Accelerated Mobile Pages) auf der Google-Suchergebnisseite. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Top picks outside AdGuard{#top-picks}

These userscripts are not developed by AdGuard, and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation because they've all earned their good reputation.

#### Don't track me Google

This script removes Google's tracking feature from the links in Google search results. It speeds up the loading of search results and allows you to right-click or tap to copy the link URL.

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

#### microShield

A userscript for people visiting Korean websites and some international websites. The microShield userscript blocks Ad-Shield ads and anti-adblocks. Its original source code is available at [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) and [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about microShield and how to install it on [GitHub](https://github.com/List-KR/microShield).

### Wo kann man weitere Benutzerskripte erhalten? {#more-userscripts}

Since userscripts are mainly created by enthusiasts, you should be cautious when installing them. Any script from an unknown source carries a potential risk. Yet, there is a great variety of interesting scripts that, if installed carefully and responsibly, can really make using some websites more convenient.

Im Folgenden werden einige der beliebtesten Benutzerskript-Kataloge beschrieben.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high level of credibility as only scripts from moderated pages are displayed.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) is a userscript catalog of Stylish creators. The scripts in this catalog are moderated, so their credibility is much higher.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open-source userscript catalog written in nodeJS. It's not moderated, so keep an eye out for suspicious scripts.

#### Community

If you like the idea of customizing your browser with userscripts and have questions, you can ask them on one of these websites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Entwicklung

#### Lizenz anfordern

If you are developing your own custom script and want to test how it works with AdGuard, you can request a beta license key for the app.

Um sie zu erhalten, senden Sie bitte eine E-Mail an devteam@adguard.com mit den folgenden Informationen:

**Subject:** Userscript author license request

**Body:** Please tell us about the userscripts you are working on.

Here is a [mailto link](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request\&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

#### Kompatibilität

#### Metadaten-Block

#### Unterstützte Eigenschaften

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

#### Nicht unterstützte Eigenschaften

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Unterstützte GM-Funktionen

AdGuard unterstützt sowohl die alten GM\_-Funktionen als auch die neue GM4-API, die das GM-Objekt verwendet.

#### Werte

:::note

Alle aufgeführten früheren Greasemonkey-Funktionen sind veraltet, werden aber weiterhin unterstützt.

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

#### Beispiel

```javascript
// ==Benutzerskript==
// @name            Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema Englisch oder unbekannt ist
// @name:ru         Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
// @description     Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema englisch oder unbekannt ist
// @description:ru  Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
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

## Userstyles

Userstyles allow users to customize their online experience. Whether you’re looking to change the appearance of a website or automate repetitive tasks, styles offer a world of possibilities.

AdGuard has the option to upload or create your own userstyles. This is an advanced feature, so you will need some knowledge of HTML and CSS.

:::info Supported apps

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard v4.8 for Android in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Right-click the _Install_ button and choose _Copy Link Address_

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Fertig!

If you’re familiar with CSS rules, you can also create the userstyles yourself.

:::note

We don’t support userstyles that contain `@var` or `@advanced` in the metadata. AdGuard also doesn’t support `@preprocessor` without the `default` value.

:::

1. Open AdGuard settings → _Extensions_

2. Press the [+] button and choose the _Create userstyle_ option. A new window will appear on your screen

3. To create a userstyle, first write the title with metadata, for example

   ```CSS
   /* ==UserStyle==
   @name New userstyle
   @version 1.0
   ==/UserStyle== */
   ```

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). Zum Beispiel:

   ```CSS
   body {
     background: gray;
     }
   ```

   Or:

   ```CSS
   @-moz-document domain('example.org'),
   domain('example.net'),
   domain('example.com') body {
     background: gray;
     }
   ```

5. Once you’re finished, press _Save and Close_. Your new userstyle has been successfully added to AdGuard

### Beispiel

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
