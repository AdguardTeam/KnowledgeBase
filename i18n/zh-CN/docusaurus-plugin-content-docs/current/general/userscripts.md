---
title: 用户脚本
sidebar_position: 5
toc_max_heading_level: 4
---

用户脚本（我们也称之为「扩展」）实质上是用 JavaScript 编写的小程序。 用户脚本修改或扩展一个或多个网站的功能。 许多 AdGuard 用户已经熟悉 AdGuard 助手、弹窗拦截器和 AdGuard Extra 等用户脚本。

:::note 支持的应用程序

AdGuard 可作为用户脚本管理器以显著扩展网站功能。 用户可以在我们的三款产品中添加自定义脚本或管理现有脚本：[Windows版 AdGuard](/adguard-for-windows/features/extensions)、[Android版 AdGuard](/adguard-for-android/features/settings#userscripts) 和 [Mac版 AdGuard](/adguard-for-mac/features/extensions)。

:::

## 推荐的 AdGuard 脚本

AdGuard 开发人员创建这些用户脚本，我们可以保证它们有效且安全。 还有其他人开发创建的自定义脚本，我们认为这些脚本也很好，很可靠。要多了解这些脚本，请[向下滚动到下一部份](#top-picks)。 用户还可以在下面找到一些[流行的脚本网站](#more-userscripts)。请记住，只要您从未知来源下载用户脚本，就会面临一定的风险，因为某些脚本可能对您的计算机造成危害。

### AdGuard Extra

该扩展可以在通常的过滤方法无法解决问题的情况下屏蔽广告。 AdGuard Extra 预装在所有 AdGuard 高级版本中，因此，无需安装其他软件。 不过，如果有用户想将 AdGuard Extra 与 AdGuard 浏览器扩展或其他广告拦截器一起使用，需要使用一个额外的扩展。 在 [GitHub](https://github.com/AdguardTeam/AdGuardExtra) 上了解有关此用户脚本的更多信息，以及如何安装它。

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard 弹窗拦截器

AdGuard 弹窗拦截器能屏蔽最恼人的广告类型之一，即弹出式广告。 在 [GitHub](https://github.com/AdguardTeam/PopupBlocker) 上了解有关此用户脚本、其主要功能以及安装方法的更多信息。

![AdGuard 弹窗拦截器](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard 助手（旧版）

这是一款自定义扩展，旨在直接在浏览器页面上管理过滤（手动屏蔽、排除网站等等）。

:::note

这是一个过时的助手版本，在较新的系统上使用它没有意义，因为它早已被[新版本的浏览器助手](https://adguard.com/adguard-assistant/overview.html)所取代。 不过，如果您的浏览器没有浏览器助手，旧版助手可能会有所帮助。 如果是这种情况，请在 [GitHub](https://github.com/AdguardTeam/AdguardAssistant) 上了解如何安装 AdGuard 助手。

:::

### 禁用 AMP

这是一个仅在 Android 版 AdGuard 中预安装的脚本。 它禁用 Google 搜索结果页面上的 AMP（加速移动页面）。 在 [GitHub](https://github.com/AdguardTeam/DisableAMP) 上了解有关此用户脚本的更多信息，以及如何安装它。

![禁用 AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## AdGuard 以外的最佳脚本选择{#top-picks}

以下用户脚本并非由 AdGuard 开发，因此我们无法 100% 保证其安全和/或始终有效。 不过，根据我们的经验，这些脚本值得推荐，因为它们都赢得了良好的声誉。

### Don't track me Google

该脚本移除 Google 搜索结果中链接的 Google 跟踪功能。 它加快搜索结果的加载速度，允许用户右键单击或点击复制链接 URL。

[在 GitHub 上](https://github.com/Rob--W/dont-track-me-google)可以查看其源代码。 该用户脚本可以从 [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) 上下载并安装在任何基于 AdGuard CoreLibs 的应用程序中。

### microShield

这是一个可以用于访问韩国和一些国际网站的用户定制的脚本。 microShield 用户脚本可以阻止 Ad-Shield 广告和反广告拦截器。 在 [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) 和 [AdShield Defuser](https://github.com/seia-soto/adshield-defuser) 网站上可以查看其原始源代码。 该用户脚本可以安装在基于 AdGuard CoreLibs 的应用程序、Violentmonkey、Tampermonkey 和 [quoid/userscripts](https://github.com/quoid/userscripts) 中。 在 [GitHub](https://github.com/List-KR/microShield) 上了解有关 microShield 的更多信息以及如何安装它。

## 在哪里查看更多自定义脚本{#more-userscripts}

由于用户脚本主要由爱好者创建，因此在安装时应小心谨慎。 任何来源不明的脚本都有潜在风险。 不过，也有大量有用的脚本。如果认真负责地选择，确实可以使网页更易于浏览。

下面我们将介绍一些最常用的用户脚本。

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) 是一个可以通过输入匹配的 URL 或域名来搜索用户脚本的网站。 该网站使用方便，可信度高，因为它只显示经过审核的网页脚本。

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) 是由 Stylish 创建者创建的用户脚本目录。 本目录中的脚本都经过审核。

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) 是一个以 nodeJS 编写的开源用户脚本目录。 其没有审核功能，因此请对任何可疑脚本保持警惕。

### 社区

如您想在用户脚本的帮助下个性化您的浏览器但遇到问题，您可在以下网站进行询问：

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## 开发

### 申请许可证

如果您正在开发自己的自定义脚本，并希望测试它与 AdGuard 配合使用，请申请获得 Beta 测试版许可证密钥。

要获取许可证，请发送电子邮件至 devteam@adguard.com 并附上以下信息：

**主题：**创建用户脚本的许可证请求

**正文：**请告知我们您正在开发的用户脚本。

[点击此处](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK)以发送邮件。

### 兼容性

#### 元数据块

##### 支持的属性

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

##### 不支持的属性

AdGuard 将忽略这些属性。

```text
@unwrap
```

#### 支持的 GM 函数

AdGuard 同时支持旧的 GM\_ 函数和使用 GM 对象的新 GM4 API。

##### 数值

:::note

所有列出的旧 Greasemonkey 函数都已过时，但仍受支持。

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

您可在[此处](https://wiki.greasespot.net/GM.info)找到关于 Greasemonkey API 的信息。

### 示例

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

## 用户样式

AdGuard 对用户样式提供有限的支持。 `@var` 和 `@advanced` 元数据， 以及 `@preprocessor` （ `default` 除外）元数据标签不受支持。

### 元数据

元数据使用 CSS 样式的注释编写，以 `===UserStyle===` 开头，以 `===/UserStyle===` 结尾。 用户脚本支持的所有元数据也同样支持用户样式，但其中有些标记没有意义，会被忽略。 不支持 `@var` 和 `@advanced` 标签。 `@preprocessor` 标签唯一支持的值是 `default`。

### 内容

用户样式的内容是 CSS，支持 [`@-moz-document`](https://developer.mozilla.org/en-US/docs/Web/CSS/@document) 规则。 `media-document()` 函数不受支持。 用户样式仅适用于符合一个或多个 `@-moz-document` 规则的页面。 如果用户样式不包含任何 `@-moz-document` 规则，无法应用它。

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
