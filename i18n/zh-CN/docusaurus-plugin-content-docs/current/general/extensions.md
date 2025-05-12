---
title: 浏览器扩展
sidebar_position: 6
---

## 用户脚本

用户脚本（我们也称之为「扩展」）实质上是用 JavaScript 编写的小程序。 用户脚本修改或扩展一个或多个网站的功能。 许多 AdGuard 用户已经熟悉 AdGuard 助手、弹窗拦截器和 AdGuard Extra 等用户脚本。

:::note 支持的应用

AdGuard 可作为用户脚本管理器以显著扩展网站功能。 您可以在我们的三款产品中添加自定义脚本或管理现有脚本：[AdGuard Windows 版](/adguard-for-windows/features/extensions)、[AdGuard Android 版](/adguard-for-android/features/settings#userscripts) 和 [AdGuard Mac 版](/adguard-for-mac/features/extensions)。

:::

### 推荐的 AdGuard 脚本

AdGuard 开发人员创建这些用户脚本，我们可以保证它们有效且安全。 对于我们认为优秀且可靠的其他开发者所开发的用户脚本，请[向下滚动至下一节](#top-picks)。 用户还可以在下方找到一些[热门网站及其脚本](#more-userscripts)，但请记住，每当从不知名来源下载用户脚本时，您都面临一定风险，因为某些脚本可能对电脑有害。

#### AdGuard Extra

该扩展可以在通常的过滤方法无法解决问题的情况下屏蔽广告。 AdGuard Extra 已预装在除 iOS 版外的所有 AdGuard 独立应用中，因此用户无需进行任何操作即可启用它。 不过，如果有用户想将 AdGuard Extra 与 AdGuard 浏览器扩展或其他广告拦截器一起使用，需要使用一个额外的扩展。 了解更多关于此用户脚本及其安装方法，请访问 [GitHub](https://github.com/AdguardTeam/AdGuardExtra)。

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard 弹窗拦截器

如其名所示：它拦截弹出窗口，这是网站上最令人烦恼的广告类型之一。 了解更多关于此用户脚本的信息、其主要功能以及在 [GitHub](https://github.com/AdguardTeam/PopupBlocker)上的安装方法。

![AdGuard 弹窗广告过滤器](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard 助手（旧版）

此自定义扩展旨在直接从浏览器页面控制过滤（手动阻止、白名单等）。

:::note

此版本的助手已过时，在新系统上使用它毫无意义，因为它已被功能齐全的[浏览器助手](https://adguard.com/adguard-assistant/overview.html)所取代。 然而，如果您的浏览器没有浏览器助手，旧版助手可能仍有用处。 如果情况如此，您可以学习如何在 [GitHub](https://github.com/AdguardTeam/AdguardAssistant) 上安装 AdGuard 助手。

:::

#### Disable AMP

这是一个仅在 Android 版 AdGuard 中预安装的脚本。 它禁用 Google 搜索结果页面上的 AMP（加速移动页面）。 了解更多关于此用户脚本及其安装方法，请访问 [GitHub](https://github.com/AdguardTeam/DisableAMP)。

![关闭 AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### AdGuard 以外的最佳脚本选择{#top-picks}

这些用户脚本并非由 AdGuard 开发，因此我们无法百分之百保证它们的安全性或始终正常运作。 然而，根据我们的经验，它们值得被推荐，因为它们都已经赢得了良好的声誉。

#### Don't track me Google

该脚本移除 Google 搜索结果中链接的 Google 跟踪功能。 它加快搜索结果的加载速度，允许用户右键单击或点击复制链接 URL。

其源代码[可在 GitHub 上获取](https://github.com/Rob--W/dont-track-me-google)。 这个用户脚本可以从 [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) 下载，并安装在任何基于 AdGuard CoreLibs 的应用程序中。

#### tinyShield

一个适用于访问韩国网站和一些国际网站的用户脚本。 tinyShield 用户脚本可以屏蔽 Ad-Shield 广告和反广告拦截功能。 这个用户脚本可以安装在基于 AdGuard CoreLibs 的应用程序、Violentmonkey、Tampermonkey 以及 [quoid/userscripts](https://github.com/quoid/userscripts) 中。 了解更多关于 tinyShield 的信息以及如何在 [GitHub](https://github.com/List-KR/tinyShield) 上安装它。

### 在哪里查看更多自定义脚本{#more-userscripts}

由于用户脚本主要由爱好者创建，因此在安装时应保持谨慎。 任何来源不明的脚本都有潜在风险。 不过，也有大量有用的脚本。如果认真负责地选择，确实可以使网页更易于浏览。

下面我们将介绍一些最常用的用户脚本。

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) 是一个网站，它允许通过输入匹配的 URL 或域名来搜索用户脚本。 该网站使用方便，可信度高，因为它只显示经过审核的网页脚本。

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) 是一个由 Stylish 创作者提供的用户脚本目录。 该目录中的脚本经过审核，因此其可信度大大提高。

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) 是一个用 nodeJS 编写的开源用户脚本目录。 它没有经过审核，因此请注意可疑的脚本。

#### 社区

如您想在用户脚本的帮助下自定义您的浏览器并有任何问题，可以在以下网站进行询问：

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### 开发

#### 申请许可证

如果您开发自己的用户脚本并希望测试它与 AdGuard 的工作方式，可以通过填写[表单](https://surveys.adguard.com/en/for_developers_request/form.html)请求许可证。

#### 兼容性

##### 元数据块

###### 支持的属性

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

###### 不支持的属性

AdGuard 将忽略这些属性。

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### 支持的 GM 函数

AdGuard 同时支持旧的 GM\_ 函数和使用 GM 对象的新 GM4 API。

:::note

所有列出的旧 Greasemonkey 函数都已过时，但仍受支持。

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

您可以在[手册](https://wiki.greasespot.net/Greasemonkey_Manual:API)中找到有关 Greasemonkey API 的更多信息。

#### 示例

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
)}();
```

#### Trusted Types API

AdGuard 提供一个 `PolicyApi` 类的实例，允许用户管理用户脚本中的 Trusted Types。

您可以使用用户脚本中的 `ADG_policyApi` 变量访问此类的实例。

##### 属性

- `name: string` —— 政策的名称（默认是 `"AGPolicy"`）。
- `isSupported: boolean` —— 一个标志，指示当前浏览器是否支持 Trusted Types API。

##### 多填充方法

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML)。 如果不支持，请返回 `input: string`。
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript)。 如果不支持，请返回 `input: string`。
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL)。 如果不支持，请返回 `input: string`。
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType)。 如果不支持，请返回 `null`。
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType)。 如果不支持，请返回 `null`。
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML)。 如果不支持，请返回 `false`。
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript)。 如果不支持，请返回 `false`。
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL)。 如果不支持，请返回 `false`。

##### 其他类型

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

##### 其他操作

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

## 用户样式

用户样式允许用户更改流行网站的外观。

AdGuard 提供上传或创建自定义用户样式的选项。 这是一项高级功能，因此用户需要具备一些 HTML 和 CSS 的知识。

:::info 支持的应用

目前，有两款 AdGuard 应用程序允许用户创建和管理用户样式：AdGuard Windows 版（v7.19 或更高版本）和 AdGuard Mac 版（v2.16 或更高版本）。 我们还计划在不久的将来在 AdGuard v4.8 Android 版中实现这一新功能。

:::

这是一项实验性功能，因此如果您在添加或创建用户样式时遇到任何问题，请联系我们的支持团队：<support@adguard.com>。

### 如何在 AdGuard 中设置用户样式

用户可以从各种网站下载用户样式。 最受欢迎的用户样式网站之一是 [https://userstyles.world/](https://userstyles.world/explore)，我们将以它为例，说明如何在 AdGuard 中设置用户样式。

1. 点击上面的链接并选择您喜欢的用户样式。

2. 点击「_复制_」旁边的用户样式地址。

3. 打开 AdGuard 设置 →「_扩展_」

4. 按下 [+] 按钮并粘贴用户样式链接。

5. 完成！

如果您熟悉 CSS 规则，可以自己创建用户样式。

:::note

我们不支持包含 `@var` 或 `@advanced` 的用户样式的元数据。 AdGuard 也不支持没有 `default` 值的 `@preprocessor`。

:::

1. 打开 AdGuard 设置 →「_扩展_」

2. 按下 [+] 按钮并选择「_创建用户样式_」选项。 您的屏幕上将出现一个新窗口。

3. 要创建用户样式，请先写下带有元数据的标题，例如：

 ```CSS
 /* ==UserStyle==
 @name New userstyle
 @version 1.0
 ==/UserStyle== */
 ```

4. 在元数据之后编写 CSS 部分。 AdGuard 支持网站域名匹配 (`@-moz-document domain(…), …`)。 例如：

 ```CSS
 body {
   background: gray;
   }
 ```

 或者：

 ```CSS
 @-moz-document domain('example.org'),
 domain('example.net'),
 domain('example.com') body {
   background: gray;
   }
 ```

5. 完成后，请按「_保存并关闭_」。 您的新用户样式已成功添加到 AdGuard。

### 示例

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
