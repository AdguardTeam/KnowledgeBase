---
title: 확장 프로그램
sidebar_position: 6
---

## 유저스크립트

유저스크립트('확장 프로그램'이라고도 함)는 사실상 자바스크립트로 작성된 미니 프로그램입니다. 하나 이상의 웹사이트의 기능을 수정하거나 확장합니다. 많은 AdGuard 사용자는 이미 AdGuard 어시스턴트, 팝업 차단기 및 AdGuard Extra와 같은 유저스크립트에 익숙할 것입니다.

:::note Supported apps

AdGuard는 유저스크립트 관리자 역할을 수행하여 웹사이트 기능을 크게 확장할 수 있습니다. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/features/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

### 권장 AdGuard 스크립트

이러한 유저스크립트는 AdGuard에서 개발되었습니다. 효과적이고 안전하게 작동한다는 것을 보장할 수 있습니다. For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you are exposing yourself to a certain risk, as some scripts may be harmful to your computer.

#### AdGuard Extra

일반적인 필터 기반 접근 방식으로는 충분하지 않은 어려운 경우에 광고를 차단하는 확장 프로그램입니다. AdGuard Extra comes pre-installed in AdGuard standalone apps, except for the one for iOS, so you don't need to do anything to enable it. 하지만 AdGuard 브라우저 확장 프로그램이나 다른 광고 차단기와 함께 사용하려면 추가 확장 프로그램을 사용해야 합니다. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard 팝업 차단기

The name speaks for itself: it blocks popups — one of the most annoying types of ads on websites. Learn more about this userscript, its key features, and installation on [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard 어시스턴트(이전 버전)

This custom extension is designed to control filtering directly from the browser page (manual blocking, allowlisting, etc.).

:::note

This version of Assistant is legacy and there is no point in using it on new systems, as it has been replaced with the full-fledged [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). However, the legacy Assistant may be useful if there is no Browser Assistant for your browser. If this is your case, you can learn how to install AdGuard Assistant on [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### AMP 비활성화

Android용 AdGuard에만 사전 설치된 스크립트입니다. Google 검색 결과 페이지에서 AMP(가속화된 모바일 페이지)를 비활성화합니다. Learn more about this userscript and how to install it on [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### AdGuard 외부에서 추천하는 제품{#top-picks}

These userscripts are not developed by AdGuard, and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation because they've all earned their good reputation.

#### Don't track me Google

이 스크립트는 Google 검색 결과의 링크에서 Google의 추적 기능을 제거합니다. 검색 결과 로딩 속도가 빨라지고 마우스 오른쪽 버튼을 클릭하거나 탭하여 링크 URL을 복사할 수 있습니다.

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

#### tinyShield

A userscript for people visiting Korean websites and some international websites. The tinyShield userscript blocks Ad-Shield ads and anti-adblocks. This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about tinyShield and how to install it on [GitHub](https://github.com/List-KR/tinyShield).

### 더 많은 유저스크립트는 어디서 구할 수 있나요?{#more-userscripts}

Since userscripts are mainly created by enthusiasts, you should be cautious when installing them. 출처를 알 수 없는 스크립트는 잠재적인 위험을 수반합니다. 하지만 신중하게 설치하면 일부 웹사이트를 더 편리하게 사용할 수 있는 흥미로운 스크립트가 많이 있습니다.

아래에서 가장 인기 있는 일부 유저스크립트 카탈로그에 대해 설명합니다.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high level of credibility as only scripts from moderated pages are displayed.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) is a userscript catalog of Stylish creators. The scripts in this catalog are moderated, so their credibility is much higher.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open-source userscript catalog written in nodeJS. It's not moderated, so keep an eye out for suspicious scripts.

#### 커뮤니티

If you like the idea of customizing your browser with userscripts and have questions, you can ask them on one of these websites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### 개발

#### 라이선스 요청

If you are developing your own userscript and want to test how it works with AdGuard, you can request a license by filling in [the form](https://surveys.adguard.com/en/for_developers_request/form.html).

#### 호환성

#### 메타데이터 블록

#### 지원되는 속성

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

#### 지원되지 않는 속성

이러한 속성은 AdGuard에서 무시됩니다.

```text
@unwrap
```

#### 지원되는 GM 기능

AdGuard는 기존 GM\_ 기능과 GM 개체를 사용하는 새로운 GM4 API를 모두 지원합니다.

#### 값

:::note

나열된 모든 이전 Greasemonkey 기능은 더 이상 사용되지 않지만 여전히 지원됩니다.

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
// @name 로캘이 영어이거나 알 수 없는 경우 사용자에게 표시되는 이름
// @name:ru 로캘이 러시아어일 때 사용자에게 표시되는 이름
// @description 로캘이 영어이거나 알 수 없는 경우 사용자에게 표시되는 설명
// @description:ru 로캘이 러시아어일 때 사용자에게 표시되는 설명
// @icon https://myhomepage.com/myuserscript.png
// @version 1.0.0.0
// @downloadURL https://dl.myhomepage.org/myuserscript.user.js
// @updateURL https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL https://myhomepage.com/myuserscript
// @include *
// @exclude *://website.com/*
// @resource https://myhomepage.com/myuserscript.css
// @require https://myhomepage.com/mylibrary.js
// @grant 속성:설정
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
!function(){(
    console.log("I am loaded!");
)}();
```

## 유저스타일

Userstyles allow users to change the appearance of popular websites.

AdGuard has the option to upload or create your own userstyles. This is an advanced feature, so you will need some knowledge of HTML and CSS.

:::info Supported apps

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard v4.8 for Android in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. 끝!

If you’re familiar with CSS rules, you can also create userstyles yourself.

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
