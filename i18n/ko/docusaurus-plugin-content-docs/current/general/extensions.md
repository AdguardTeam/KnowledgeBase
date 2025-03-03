---
title: 확장 프로그램
sidebar_position: 6
---

## 유저스크립트

유저스크립트('확장 프로그램'이라고도 함)는 사실상 자바스크립트로 작성된 미니 프로그램입니다. 하나 이상의 웹사이트의 기능을 수정하거나 확장합니다. 많은 AdGuard 사용자는 이미 AdGuard 어시스턴트, 팝업 차단기 및 AdGuard Extra와 같은 유저스크립트에 익숙할 것입니다.

:::note 지원되는 앱

AdGuard는 유저스크립트 관리자 역할을 수행하여 웹사이트 기능을 크게 확장할 수 있습니다. 다음 제품에서 사용자 정의 스크립트를 추가하거나 기존 스크립트를 관리할 수 있습니다: [Windows용 AdGuard](/adguard-for-windows/features/extensions), [Android용 AdGuard](/adguard-for-android/features/settings#userscripts), [Mac용 AdGuard](/adguard-for-mac/features/extensions).

:::

### 권장 AdGuard 스크립트

이러한 유저스크립트는 AdGuard에서 개발되었습니다. 효과적이고 안전하게 작동한다는 것을 보장할 수 있습니다. 다른 사람들이 개발한 신뢰할 수 있는 유저스크립트도 있습니다. 이러한 스크립트를 확인하려면 [다음 섹션으로 스크롤](#top-picks)하세요. 아래에서 [인기 있는 스크립트 웹사이트](#more-userscripts)를 찾을 수도 있습니다. 그러나 출처를 알 수 없는 곳에서 유저스크립트를 다운로드하는 것은 위험할 수 있다는 점을 기억하세요. 일부 스크립트는 컴퓨터에 해로울 수 있기 때문입니다.

#### AdGuard Extra

일반적인 필터 기반 접근 방식으로는 충분하지 않은 어려운 경우에 광고를 차단하는 확장 프로그램입니다. AdGuard Extra는 iOS용 앱을 제외한 AdGuard 독립 실행형 앱에 사전 설치되어 제공되므로 활성화하기 위해 별도의 작업을 수행할 필요가 없습니다. 하지만 AdGuard 브라우저 확장 프로그램이나 다른 광고 차단기와 함께 사용하려면 추가 확장 프로그램을 사용해야 합니다. 이 사용자 스크립트에 대한 자세한 내용과 설치 방법은 [GitHub](https://github.com/AdguardTeam/AdGuardExtra)에서 확인할 수 있습니다.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard 팝업 차단기

이름 그대로 웹사이트에서 가장 성가신 광고 유형 중 하나인 팝업을 차단합니다. 이 사용자 스크립트, 주요 기능 및 설치에 대한 자세한 내용은 [GitHub](https://github.com/AdguardTeam/PopupBlocker)에서 확인하세요.

![AdGuard 팝업 차단기](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard 어시스턴트(이전 버전)

이 사용자 저의 확장 프로그램은 브라우저 페이지에서 직접 필터링(수동 차단, 허용 목록 등)을 제어할 수 있도록 설계되었습니다.

:::note

이 어시스턴트 버전은 이전 버전이며 본격적인 [브라우저 어시스턴트](https://adguard.com/adguard-assistant/overview.html)로 대체되었으므로 새 시스템에서 사용할 필요가 없습니다. 하지만 사용 중인 브라우저에 브라우저 어시스턴트가 없는 경우, 이전 어시스턴트가 도움이 될 수 있습니다. 이 경우, [GitHub](https://github.com/AdguardTeam/AdguardAssistant)에서 AdGuard 어시스턴트를 설치하는 방법을 알아보세요.

:::

#### AMP 비활성화

Android용 AdGuard에만 사전 설치된 스크립트입니다. Google 검색 결과 페이지에서 AMP(가속화된 모바일 페이지)를 비활성화합니다. 이 사용자 스크립트에 대한 자세한 내용과 설치 방법은 [GitHub](https://github.com/AdguardTeam/DisableAMP)에서 확인할 수 있습니다.

![AMP 비활성화](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### AdGuard 외부에서 추천하는 제품{#top-picks}

이 유저스크립트는 AdGuard에서 개발한 것이 아니므로, 항상 안전하고 제대로 작동한다고 보장할 수 없습니다.． 하지만 저희의 경험에 비추어 볼 때 모두 좋은 평판을 얻었기 때문에 추천할 만한 가치가 있습니다.

#### Don't track me Google

이 스크립트는 Google 검색 결과의 링크에서 Google의 추적 기능을 제거합니다. 검색 결과 로딩 속도가 빨라지고 마우스 오른쪽 버튼을 클릭하거나 탭하여 링크 URL을 복사할 수 있습니다.

소스 코드는 [Github](https://github.com/Rob--W/dont-track-me-google)에서 확인할 수 있습니다. 이 사용자 스크립트는 [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google)에서 다운로드하여 모든 AdGuard CoreLibs 기반 앱에 설치할 수 있습니다.

#### tinyShield

한국어 웹사이트 및 일부 해외 웹사이트 방문자를 위한 유저스크립트입니다. tinyShield 사용자 스크립트는 Ad-Shield 광고와 안티블록을 차단합니다. 이 유저스크립트는 AdGuard CoreLibs 기반 앱, Violentmonkey, Tampermonkey, [quoid/userscripts](https://github.com/quoid/userscripts)에 설치할 수 있습니다. tinyShield에 대한 자세한 내용과 설치 방법은 [GitHub](https://github.com/List-KR/tinyShield)에서 확인할 수 있습니다.

### 더 많은 유저스크립트는 어디서 구할 수 있나요?{#more-userscripts}

대부분의 경우 유저스크립트는 아마추어가 만들므로 특정 스크립트를 설치할 때 매우 주의해야 합니다. 출처를 알 수 없는 스크립트는 잠재적인 위험을 수반합니다. 하지만 신중하게 설치하면 일부 웹사이트를 더 편리하게 사용할 수 있는 흥미로운 스크립트가 많이 있습니다.

아래에서 가장 인기 있는 일부 유저스크립트 카탈로그에 대해 설명합니다.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone)은 일치하는 URL 또는 도메인을 입력하여 유저스크립트를 검색할 수 있는 웹사이트입니다. 이 웹사이트는 사용하기 쉽고 조정된 페이지의 스크립트만 표시되므로 신뢰도가 높습니다.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/)는 Stylish 크리에이터의 사용자 스크립트 카탈로그입니다. 이 카탈로그의 스크립트는 조정된 것이므로 신뢰도가 훨씬 높습니다.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/)는 nodeJS로 작성된 오픈 소스 유저스크립트 카탈로그입니다. 중재되지 않으므로 의심스러운 스크립트를 주시하세요.

#### 커뮤니티

유저스크립트로 브라우저를 맞춤 설정하는 아이디어가 마음에 드시고 질문이 있으시면 다음 웹사이트 중 한 곳에서 질문할 수 있습니다.

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### 개발

#### 라이선스 요청

자체 사용자 스크립트를 개발 중이고 AdGuard와 함께 작동하는 방식을 테스트하고 싶다면 [양식](https://surveys.adguard.com/en/for_developers_request/form.html)을 작성하여 라이선스를 요청할 수 있습니다.

#### 호환성

##### 메타데이터 블록

###### 지원되는 속성

- [`@name`](https://wiki.greasespot.net/Metadata_Block#@name)
- [`@namespace`](https://wiki.greasespot.net/Metadata_Block#@namespace)
- [`@description`](https://wiki.greasespot.net/Metadata_Block#@description)
- [`@version`](https://wiki.greasespot.net/Metadata_Block#@version)
- [`@match`](https://wiki.greasespot.net/Metadata_Block#@match)
- [`@include`](https://wiki.greasespot.net/Metadata_Block#@include)
- [`@exclude`](https://wiki.greasespot.net/Metadata_Block#@exclude)
- [`@grant`](https://wiki.greasespot.net/Metadata_Block#@grant)
- [`@connect`](https://www.tampermonkey.net/documentation.php#meta:connect)
- [`@require`](https://wiki.greasespot.net/Metadata_Block#@require)
- [`@resource`](https://wiki.greasespot.net/Metadata_Block#@resource)
- [`@downloadURL`](https://www.tampermonkey.net/documentation.php#meta:downloadURL)
- [`@updateURL`](https://www.tampermonkey.net/documentation.php#meta:updateURL)
- [`@homepage`, `@homepageURL`, `@source`, `@website`](https://www.tampermonkey.net/documentation.php#meta:homepage)
- [`@run-at`](https://wiki.greasespot.net/Metadata_Block#@run-at)
- [`@noframes`](https://wiki.greasespot.net/Metadata_Block#@noframes)
- [`@icon`, `@iconURL`, `@defaulticon`](https://www.tampermonkey.net/documentation.php#meta:icon)
- [`@icon64`, `@icon64URL`](https://www.tampermonkey.net/documentation.php#meta:icon64)

###### 지원되지 않는 속성

이러한 속성은 AdGuard에서 무시됩니다.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### 지원되는 GM 기능

AdGuard는 기존 GM\_ 기능과 GM 개체를 사용하는 새로운 GM4 API를 모두 지원합니다.

:::note

나열된 모든 이전 Greasemonkey 기능은 더 이상 사용되지 않지만 여전히 지원됩니다.

:::

- [`GM.info`, `GM_info`](https://wiki.greasespot.net/GM.info)
- [`GM.setValue`, `GM_setValue`](https://wiki.greasespot.net/GM.setValue)
- [`GM.getValue`, `GM_getValue`](https://wiki.greasespot.net/GM.getValue)
- [`GM.listValues`, `GM_listValues`](https://wiki.greasespot.net/GM.listValues)
- [`GM.deleteValue`, `GM_deleteValue`](https://wiki.greasespot.net/GM.deleteValue)
- [`GM.getResourceUrl`, `GM_getResourceURL`](https://wiki.greasespot.net/GM.getResourceUrl)
- [`GM.setClipboard`, `GM_setClipboard`](https://wiki.greasespot.net/GM.setClipboard)
- [`GM.xmlHttpRequest`, `GM_xmlhttpRequest`](https://wiki.greasespot.net/GM.xmlHttpRequest)
- [`GM.openInTab`, `GM_openInTab`](https://wiki.greasespot.net/GM.openInTab)
- [`GM.notification`](https://wiki.greasespot.net/GM.notification)
- [`unsafeWindow`](https://wiki.greasespot.net/UnsafeWindow)
- [`GM_getResourceText`](https://www.tampermonkey.net/documentation.php#api:GM_getResourceText)
- [`GM_addStyle`](https://www.tampermonkey.net/documentation.php#api:GM_addStyle)
- [`GM_log`](https://www.tampermonkey.net/documentation.php#api:GM_log)
- [`GM.addElement`, `GM_addElement`](https://www.tampermonkey.net/documentation.php#api:GM_addElement)

Greasemonkey API에 대한 자세한 내용은 [설명서](https://wiki.greasespot.net/Greasemonkey_Manual:API)에서 확인할 수 있습니다.

#### 예시

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
// @grant           GM_addElement
// @run-at          document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}()；
```

#### 신뢰할 수 있는 유형 API

AdGuard는 유저스크립트에서 신뢰할 수 있는 유형을 관리할 수 있는 `PolicyApi` 클래스의 인스턴스를 제공합니다.

이 클래스의 인스턴스는 유저스크립트에서 `ADG_policyApi` 변수를 사용하여 액세스할 수 있습니다.

##### 속성

- `name: string` — 정책의 이름(기본값은 `"AGPolicy"`입니다).
- `isSupported: boolean` — 현재 브라우저에서 신뢰할 수 있는 유형 API가 지원되는지 여부를 나타내는 플래그입니다.

##### 폴리필 메서드

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML)． 지원되지 않으면 `input: string`을 반환합니다.
- `[ADG_policyApi.createScript](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript)． 지원되지 않으면 `input: string\`을 반환합니다.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL)． 지원되지 않으면 `input: string`을 반환합니다.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType)． 지원되지 않으면 `null`을 반환합니다.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType)． 지원되지 않으면 `null`을 반환합니다.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML)． 지원되지 않으면 `false`를 반환합니다.
- `[ADG_policyApi.isScript](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript)． 지원되지 않으면 `false\`를 반환합니다.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL)． 지원되지 않으면 `false`를 반환합니다.

##### 추가 유형

```typescript
/**
 * Enum representation of the return values of the `getAttributeType` and
 * `getPropertyType` methods of the native Trusted Types API.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType}
 */
enum TrustedType {
    HTML = 'TrustedHTML',
    Script = 'TrustedScript',
    ScriptURL = 'TrustedScriptURL',
}

// You can access it like that inside of userscript
ADG_TrustedType.HTML // "TrustedHTML"

/**
 * Isomorphic trusted value type. If a browser supports the Trusted Types API, it will be one of the enum Trusted Types
 * (`TrustedHTML`, `TrustedScript` or `TrustedScriptURL`); otherwise, it will be regular `string`.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL}
 */
type TrustedValue = string | TrustedHTML | TrustedScript | TrustedScriptURL;
```

##### 추가 방법

```typescript
/**
 * Creates a Trusted Type depending on `type`:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - or returns `value` if none of them is applicable.
 *
 * @param type          Trusted Type.
 * @param value         Value from which a Trusted Type is created.
 * @param createArgs    Additional arguments to be passed to the function represented by `TrustedTypePolicy`.
 * @returns             Created value.
 */
function create(
    type: TrustedType,
    value: string,
    ...createArgs: unknown[]
): TrustedValue


// Example: Creates TrustedHTML
const trustedHTML = ADG_policyApi.create(ADG_TrustedType.HTML, '<div></div>');

/**
 * Converts `value` of `attribute` into one of the Trusted Types:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - or returns `value` if none of them is applicable.
 *
 * @param tagName       Name of an HTML tag.
 * @param attribute     Attribute.
 * @param value         Value of an attribute to be converted.
 * @param elementNS     Element namespace. If empty, defaults to the HTML namespace.
 * @param attrNS        Attribute namespace. If empty, defaults to null.
 * @param createArgs    Additional arguments to be passed to the function represented by `TrustedTypePolicy`.
 * @returns             Converted value.
 */
function convertAttributeToTrusted(
    tagName: string,
    attribute: string,
    value: string,
    elementNS?: string,
    attrNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Example: Converts to TrustedScriptURL
const trustedScriptURL = ADG_policyApi.convertAttributeToTrusted("script", "src", 'SOME_URL');
scriptElement.setAttribute("src", trustedScriptURL);

/**
 * Converts `value` of `property` into one of the Trusted Types:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - or returns `value` if none of them is applicable.
 *
 * @param tagName       Name of an HTML tag.
 * @param property      Property.
 * @param value         Value of a property to be converted.
 * @param elementNS     Element namespace. If empty, defaults to the HTML namespace.
 * @param createArgs    Additional arguments to be passed to the function represented by `TrustedTypePolicy`.
 * @returns             Converted value.
 */
function convertPropertyToTrusted(
    tagName: string,
    property: string,
    value: string,
    elementNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Example: Converts to TrustedHTML
divElement.innerHTML = ADG_policyApi.convertPropertyToTrusted("div", "innerHTML", "<div></div>");
```

## 유저스타일

유저스타일을 통해 사용자는 인기 있는 웹사이트의 모양을 변경할 수 있습니다.

AdGuard에는 유저스타일을 업로드하거나 직접 만들 수 있는 옵션이 있습니다. 이 기능은 고급 기능이므로 HTML과 CSS에 대한 어느 정도의 지식이 필요합니다.

:::info 지원되는 앱

현재 두 가지 AdGuard 앱으로 유저스타일을 생성하고 관리할 수 있습니다: Windows용 AdGuard(v7.19 이상) 및 Mac용 AdGuard(v2.16 이상). 또한, 이 새로운 기능을 Android용 AdGuard v4.8에 곧 구현할 계획입니다.

:::

이 기능은 실험적인 기능이므로 유저스타일을 추가하거나 생성하는 동안 문제가 발생하면 지원팀( <support@adguard.com>)으로 문의해 주세요.

### AdGuard에서 유저스타일을 설정하는 방법

다양한 웹사이트에서 유저스타일을 다운로드할 수 있습니다. 가장 인기 있는 유저스타일 웹사이트 중 하나는 [https://userstyles.world/](https://userstyles.world/explore)이며, 이 웹사이트를 AdGuard에서 유저스타일을 설정하는 방법에 대한 다음 지침의 예로 사용할 것입니다.

1. 위의 링크를 따라 원하는 유저스타일을 선택합니다.

2. 유저스타일 주소 옆의 **복사**를 클릭합니다.

3. AdGuard 설정 → **확장 프로그램**을 엽니다.

4. [+] 버튼을 누르고 유저스타일 링크를 붙여넣습니다.

5. 끝!

CSS 규칙에 익숙하다면 유저스타일을 직접 만들 수도 있습니다.

:::note

메타데이터에 `@var` 또는 `@advanced`가 포함된 유저스타일은 지원하지 않습니다. AdGuard는 `default` 값 없이 `@preprocessor`를 지원하지 않습니다.

:::

1. AdGuard 설정 → **확장 프로그램**을 엽니다.

2. [+] 버튼을 누르고 **유저스타일 생성** 옵션을 선택합니다. 화면에 새 창이 나타납니다.

3. 유저스타일을 만들려면 먼저 메타데이터와 함께 제목을 작성합니다.

 ```CSS
 /* ==UserStyle==
 @name New userstyle
 @version 1.0
 ==/UserStyle== */
 ```

4. 메타 데이터 뒤에 CSS 부분을 작성합니다. AdGuard는 (`@-moz-document domain(…), …`)와 일치하는 웹사이트 도메인 이름을 지원합니다. 예를 들어:

 ```CSS
 body {
   background: gray;
   }
 ```

 또는

 ```CSS
 @-moz-document domain('example.org'),
 domain('example.net'),
 domain('example.com') body {
   background: gray;
   }
 ```

5. 완료했으면 **저장 및 닫기**를 누릅니다. 새 유저스타일이 AdGuard에 성공적으로 추가되었습니다.

### 예시

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
