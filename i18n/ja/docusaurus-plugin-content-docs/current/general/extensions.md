---
title: 拡張機能
sidebar_position: 6
---

## ユーザースクリプト

ユーザースクリプト（私たちは "エクステンション"とも呼んでいます）は、事実上、JavaScriptで書かれたミニプログラムです。 ユーザースクリプトは1つまたは複数のウェブサイトの機能を変更または拡張します。 AdGuardユーザーの多くは、「AdGuard アシスタント」「ポップアップブロッカー」「AdGuard Extra」などのユーザースクリプトをすでにご存知かもしれません。

:::note Supported apps

AdGuard はユーザースクリプトマネージャとして、ウェブサイトの機能を大幅に拡張することができます。 You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

### お勧めのAdGuardスクリプト

これらのユーザースクリプトはAdGuardの開発者から直接提供されたもので、効果的で安全です。 For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you are exposing yourself to a certain risk, as some scripts may be harmful to your computer.

#### AdGuard Extra

通常のフィルタベースアプローチでは不十分な場合に、広告をブロックしてくれる拡張機能。 AdGuard Extra comes pre-installed in AdGuard standalone apps, except for the one for iOS, so you don't need to do anything to enable it. ただし、AdGuard ブラウザ拡張機能やその他の広告ブロッカーと一緒に使用したい場合は、追加の拡張機能を使用する必要があります。 Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard ポップアップブロッカー

The name speaks for itself: it blocks popups — one of the most annoying types of ads on websites. Learn more about this userscript, its key features, and installation on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard アシスタント (レガシー版)

This custom extension is designed to control filtering directly from the browser page (manual blocking, allowlisting, etc.).

:::note

This version of Assistant is legacy and there is no point in using it on new systems, as it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). However, the legacy Assistant may be useful if there is no Browser Assistant for your browser. If this is your case, you can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### AMPを無効化

Android版AdGuardにのみプリインストールされているスクリプト。 Google 検索結果ページで AMP (Accelerated Mobile Pages) を無効にします。 Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### AdGuard以外でおすすめのスクリプト

These userscripts are not developed by AdGuard, and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation because they've all earned their good reputation.

#### Don't track me Google

このスクリプトは、Googleの検索結果のリンクからGoogleのトラッキング機能を削除します。 検索結果の読み込みを高速化し、右クリックやタップでリンクURLをコピーできるようにします。

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

#### microShield

A userscript for people visiting Korean websites and some international websites. The microShield userscript blocks Ad-Shield ads and anti-adblocks. Its original source code is available at [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) and [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about microShield and how to install it on [GitHub](https://github.com/List-KR/microShield).

### さらに多くのユーザースクリプトはどこで入手できますか？

Since userscripts are mainly created by enthusiasts, you should be cautious when installing them. 未知のソースからのスクリプトは、潜在的なリスクを伴います。 しかし、注意深く責任を持ってインストールすれば、ウェブサイトの利用をより便利にしてくれる興味深いスクリプトは実に多種多様です。

以下で、最も人気なユーザースクリプト・カタログのいくつかをご紹介します。

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high level of credibility as only scripts from moderated pages are displayed.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) is a userscript catalog of Stylish creators. The scripts in this catalog are moderated, so their credibility is much higher.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open-source userscript catalog written in nodeJS. It's not moderated, so keep an eye out for suspicious scripts.

#### コミュニティ

If you like the idea of customizing your browser with userscripts and have questions, you can ask them on one of these websites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### 開発者向け

#### AdGuardライセンスをリクエストする

If you are developing your own custom script and want to test how it works with AdGuard, you can request a beta license key for the app.

ご希望の方は、以下の情報を明記の上、devteam@adguard.com にご連絡ください:

**Subject:** Userscript author license request

**Body:** Please tell us about the userscripts you are working on.

Here is a [mailto link](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request\&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

#### 互換性

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

これらのプロパティは、AdGuardによって無視されます:

```text
@unwrap
```

#### Supported GM functions

AdGuard は、古い GM\_ 関数と、GM オブジェクトを使用する新しい GM4 API の両方をサポートしています。

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

#### Example

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

## ユーザースタイル

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

5. 完了です！

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

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). For example:

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

### Example

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
