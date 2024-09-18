---
title: 유저스크립트
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. 하나 이상의 웹사이트의 기능을 수정하거나 확장합니다. 많은 AdGuard 사용자는 이미 AdGuard 어시스턴트, 팝업 차단기 및 AdGuard Extra와 같은 유저스크립트에 익숙할 것입니다.

:::note 지원되는 앱

AdGuard는 유저스크립트 관리자 역할을 수행하여 웹사이트 기능을 크게 확장할 수 있습니다. 사용자 정의 스크립트를 추가하거나 기존 스크립트를 [Windows용 AdGuard](/adguard-for-windows/features/extensions), [Android용 AdGuard](/adguard-for-android/features/settings#userscripts) 및 [Mac용 AdGuard](/adguard-for-mac/features/extensions)에서 관리할 수 있습니다.

:::

## 권장 AdGuard 스크립트

이러한 유저스크립트는 AdGuard에서 개발되었습니다. 효과적이고 안전하게 작동한다는 것을 보장할 수 있습니다. 다른 사람이 개발한 유저스크립트 중 훌륭하고 신뢰할 수 있는 일부 유저스크립트를 보려면 [다음 섹션으로 스크롤하세요](#top-picks). 아래에서 [스크립트가 있는 인기 웹사이트](#more-userscripts)를 찾을 수도 있지만, 일부 스크립트는 컴퓨터에 유해할 수 있으므로 알 수 없는 출처에서 유저스크립트를 다운로드할 때마다 특정 위험에 노출될 수 있다는 점을 기억하세요.

### AdGuard Extra

일반적인 필터 기반 접근 방식으로는 충분하지 않은 어려운 경우에 광고를 차단하는 확장 프로그램입니다. AdGuard Extra는 모든 프리미엄 AdGuard 버전에 사전 설치되어 제공되므로 활성화하기 위해 별도의 작업을 수행할 필요가 없습니다. 하지만 AdGuard 브라우저 확장 프로그램이나 다른 광고 차단기와 함께 사용하려면 추가 확장 프로그램을 사용해야 합니다. 이 유저스크립트에 대한 자세한 내용과 설치 방법은 [GitHub](https://github.com/AdguardTeam/AdGuardExtra)에서 확인할 수 있습니다.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard 팝업 차단기

AdGuard 팝업 차단기는 웹 페이지에서 가장 성가신 광고 유형 중 하나인 팝업을 차단합니다. [GitHub](https://github.com/AdguardTeam/PopupBlocker)에서 이 유저스크립트의 주요 기능과 설치 방법에 대해 자세히 알아보세요.

![AdGuard 팝업 차단기](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard 어시스턴트(이전 버전)

이 확장 프로그램은 브라우저 페이지에서 직접 필터링(수동 차단, 사이트 제외 등)을 제어할 수 있도록 설계되었습니다.

:::note

이 어시스턴트 버전은 이전 버전이며 본격적인 [브라우저 어시스턴트로](https://adguard.com/adguard-assistant/overview.html) 대체되었으므로 새 시스템에서 사용할 필요가 없습니다. 하지만 사용 중인 브라우저에 브라우저 어시스턴트가 없는 경우, 이전 어시스턴트가 도움이 될 수 있습니다. [GitHub](https://github.com/AdguardTeam/AdguardAssistant)에서 AdGuard 어시스턴트를 설치하는 방법을 알아보세요.

:::

### AMP 비활성화

Android용 AdGuard에만 사전 설치된 스크립트입니다. Google 검색 결과 페이지에서 AMP(가속화된 모바일 페이지)를 비활성화합니다. 이 유저스크립트에 대한 자세한 내용과 설치 방법은 [GitHub](https://github.com/AdguardTeam/DisableAMP)에서 확인할 수 있습니다.

![AMP 비활성화](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## AdGuard 외부에서 추천하는 제품{#top-picks}

이러한 유저스크립트는 AdGuard에서 개발한 것이 아니므로 항상 안전하게 작동한다고 100% 보장할 수 없습니다. 하지만 저희의 경험에 비추어 볼 때 모두 좋은 평판을 얻었기 때문에 추천할 만한 가치가 있습니다.

### Don't track me Google

이 스크립트는 Google 검색 결과의 링크에서 Google의 추적 기능을 제거합니다. 검색 결과 로딩 속도가 빨라지고 마우스 오른쪽 버튼을 클릭하거나 탭하여 링크 URL을 복사할 수 있습니다.

소스 코드는 [GitHub](https://github.com/Rob--W/dont-track-me-google)에서 확인할 수 있습니다. 이 유저스크립트는 [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google)에서 다운로드하여 모든 AdGuard CoreLibs 기반 앱에 설치할 수 있습니다.

### microShield

한국어 웹사이트 및 일부 해외 웹사이트 방문자를 위한 유저스크립트입니다. microShield 유저스크립트는 Ad-Shield 광고 및 안티블록을 차단합니다. 원본 소스 코드는 [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) 및 [AdShield Defuser](https://github.com/seia-soto/adshield-defuser)에서 확인할 수 있습니다. 이 유저스크립트는 AdGuard CoreLibs 기반 앱, Violentmonkey, Tampermonkey, [quoid/userscripts](https://github.com/quoid/userscripts)에 설치할 수 있습니다. [GitHub](https://github.com/List-KR/microShield)에서 microShield에 대한 자세한 내용과 설치 방법을 알아보세요.

## 더 많은 유저스크립트는 어디서 구할 수 있나요?{#more-userscripts}

대부분의 경우 유저스크립트는 아마추어가 만들므로 특정 스크립트를 설치할 때 매우 주의해야 합니다. 출처를 알 수 없는 스크립트는 잠재적인 위험을 수반합니다. 하지만 신중하게 설치하면 일부 웹사이트를 더 편리하게 사용할 수 있는 흥미로운 스크립트가 많이 있습니다.

아래에서 가장 인기 있는 일부 유저스크립트 카탈로그에 대해 설명합니다.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/)는 Stylish 크리에이터의 유저스크립트 카탈로그입니다. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/)는 nodeJS로 작성된 오픈 소스 유저스크립트 카탈로그입니다. 검토가 없으므로 의심스러운 스크립트에 주의하세요.

### 커뮤니티

사용자 스크립트를 통해 브라우저를 의인화하는 아이디어가 마음에 드시고 궁금한 점이 있으시면 다음 웹사이트에서 질문할 수 있습니다.

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## 개발

### 라이선스 요청

자체 사용자 정의 스크립트를 개발 중이고 AdGuard와 함께 작동하는 방식을 테스트하려면 앱의 베타 라이선스 키를 요청하세요.

라이선스 키를 받으려면 다음 정보를 포함하여 devteam@adguard.com으로 이메일을 보내주십시오.

**제목:** 유저스크립트 작성자 라이선스 요청

**본문:** 작업 중인 유저스크립트에 대해 알려주세요.

이메일을 보내려면 [여기](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK)를 클릭하세요.

### 호환성

#### 메타데이터 블록

##### 지원되는 속성

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

##### 지원되지 않는 속성

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### 지원되는 GM 기능

AdGuard는 기존 GM\_ 기능과 GM 개체를 사용하는 새로운 GM4 API를 모두 지원합니다.

##### 값

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

[여기](https://wiki.greasespot.net/GM.info)에서 Greasemonkey API에 대한 자세한 정보를 확인할 수 있습니다.

### 예시

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
