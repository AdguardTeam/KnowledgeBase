---
title: Uzantılar
sidebar_position: 6
---

## Kullanıcı Betikleri

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. They modify or extend the functionality of one or more websites. Many AdGuard users may be already familiar with such userscripts as AdGuard Assistant, Popup Blocker, and AdGuard Extra.

:::note Desteklenen uygulamalar

AdGuard can significantly broaden website functionality by acting as a userscript manager. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

### Önerilen AdGuard betikleri

Bu kullanıcı betikleri doğrudan AdGuard geliştiricilerinden gelmektedir, bunların etkili ve güvenli olduğunu garanti edebiliriz. For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you are exposing yourself to a certain risk, as some scripts may be harmful to your computer.

#### AdGuard Extra

Normal filtre tabanlı yaklaşımın yeterli olmadığı zor durumlarda reklamları engelleyen bir uzantı. AdGuard Extra comes pre-installed in AdGuard standalone apps, except for the one for iOS, so you don't need to do anything to enable it. However, if you want to use it alongside AdGuard Browser Extension or any other ad blocker, you'll need to use an additional extension. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Açılır Pencere Engelleyici

The name speaks for itself: it blocks popups — one of the most annoying types of ads on websites. Learn more about this userscript, its key features, and installation on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard Assistant (legacy version)

This custom extension is designed to control filtering directly from the browser page (manual blocking, allowlisting, etc.).

:::note

This version of Assistant is legacy and there is no point in using it on new systems, as it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). However, the legacy Assistant may be useful if there is no Browser Assistant for your browser. If this is your case, you can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### AMP'yi devre dışı bırak

Yalnızca Android için AdGuard'da önceden yüklenmiş olan bir betik. Google arama sonuçları sayfasında AMP'yi (Hızlandırılmış Mobil Sayfalar) devre dışı bırakır. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### AdGuard dışında en çok tercih edilenler{#top-picks}

These userscripts are not developed by AdGuard, and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation because they've all earned their good reputation.

#### Beni izleme Google

Bu betik, Google arama sonuçlarındaki bağlantılardan Google'ın izleyici özelliğini kaldırır. It speeds up the loading of search results and allows you to right-click or tap to copy the link URL.

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

#### tinyShield

A userscript for people visiting Korean websites and some international websites. The tinyShield userscript blocks Ad-Shield ads and anti-adblocks. This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). tinyShield hakkında daha fazla bilgi edinin ve [GitHub'da](https://github.com/List-KR/tinyShield) nasıl yükleneceğini öğrenin.

### Where can you get more userscripts?{#more-userscripts}

Since userscripts are mainly created by enthusiasts, you should be cautious when installing them. Any script from an unknown source carries a potential risk. Yet, there is a great variety of interesting scripts that, if installed carefully and responsibly, can really make using some websites more convenient.

Here we will describe some of the most popular userscript catalogs.

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

### Development

#### Lisans talep et

Kendi kullanıcı betiğinizi geliştiriyorsanız ve bunun AdGuard ile nasıl çalıştığını test etmek istiyorsanız, [formu](https://surveys.adguard.com/en/for_developers_request/form.html) doldurarak lisans talebinde bulunabilirsiniz.

#### Compatibility

#### Metadata block

#### Supported properties

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

#### Unsupported properties

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Supported GM functions

AdGuard supports both old GM\_ functions and new GM4 API that use GM object.

#### Values

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

#### Örnek

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

## Kullanıcı stilleri

Kullanıcı stilleri, kullanıcıların popüler sitelerin görünümünü değiştirmesine olanak tanır.

AdGuard has the option to upload or create your own userstyles. This is an advanced feature, so you will need some knowledge of HTML and CSS.

:::info Desteklenen uygulamalar

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard v4.8 for Android in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Kullanıcı stili adresinin yanındaki _Kopyala_ öğesine tıklayın

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Tamamlandı!

Eğer CSS kurallarına aşinaysanız, kullanıcı stillerini kendiniz de oluşturabilirsiniz.

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

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). Örneğin:

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

### Örnek

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
