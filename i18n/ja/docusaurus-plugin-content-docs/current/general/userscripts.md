---
title: ユーザースクリプト
sidebar_position: 5
toc_max_heading_level: 4
---

ユーザースクリプト（私たちは "エクステンション"とも呼んでいます）は、事実上、JavaScriptで書かれたミニプログラムです。 ユーザースクリプトは1つまたは複数のウェブサイトの機能を変更または拡張します。 AdGuardユーザーの多くは、「AdGuard アシスタント」「ポップアップブロッカー」「AdGuard Extra」などのユーザースクリプトをすでにご存知かもしれません。

:::note Supported apps

AdGuard はユーザースクリプトマネージャとして、ウェブサイトの機能を大幅に拡張することができます。 ３つのAdGuard製品（[AdGuard for Windows](/adguard-for-windows/features/extensions)、[AdGuard for Android](/adguard-for-android/features/settings#userscripts)、[AdGuard for Mac](/adguard-for-mac/features/extensions)）で、カスタムスクリプトを追加したり、既存のスクリプトを管理することができます。

:::

## お勧めのAdGuardスクリプト

これらのユーザースクリプトはAdGuardの開発者から直接提供されたもので、効果的で安全です。 他のユーザーによって開発されたユーザースクリプトのうち、AdGuardが優れていて信頼できると考えるものについては、[下のセクションにスクロールダウン](#top-picks)してください。 以下に、[いろんなスクリプトを紹介する人気ウェブサイトを](#more-userscripts)も載せていますが、未知のソースからユーザースクリプトをダウンロードする場合は、コンピュータに有害なスクリプトをダウンロードしてしまう可能性があり、一定のリスクに身をさらすことになることにご注意ください。

### AdGuard Extra

通常のフィルタベースアプローチでは不十分な場合に、広告をブロックしてくれる拡張機能。 AdGuard Extraは、AdGuardのすべてのプレミアム版にプリインストールされているため、有効にするために何もする必要はありません。 ただし、AdGuard ブラウザ拡張機能やその他の広告ブロッカーと一緒に使用したい場合は、追加の拡張機能を使用する必要があります。 このユーザースクリプトの詳細とインストール方法については[GitHub](https://github.com/AdguardTeam/AdGuardExtra)をご覧ください。

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard ポップアップブロッカー

その名の通り、ウェブページ上の最も迷惑な広告カテゴリのひとつであるポップアップ広告をブロックします。 このユーザースクリプトの詳細、主な機能、インストール方法については[GitHub](https://github.com/AdguardTeam/PopupBlocker)をご覧ください。

![AdGuard ポップアップブロッカー](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard アシスタント (レガシー版)

このカスタム拡張機能は、ブラウザのページから直接フィルタリングを制御することを可能にします（手動ブロック、サイトの除外などの管理）。

:::note

このバージョンのアシスタントはレガシー版であり、現在、本格的な新 [AdGuard ブラウザアシスタント](https://adguard.com/adguard-assistant/overview.html)に置き換えられているため、新しいシステムやデバイスで使用する意味はありません。 しかし、お使いのブラウザにAdGuardブラウザアシスタントがない場合は、レガシー版アシスタントが役に立つかもしれません。 このような場合は、[GitHub](https://github.com/AdguardTeam/AdguardAssistant)でAdGuard アシスタントのインストール方法をご確認いただけます。

:::

### AMPを無効化

Android版AdGuardにのみプリインストールされているスクリプト。 Google 検索結果ページで AMP (Accelerated Mobile Pages) を無効にします。 このユーザースクリプトの詳細とインストール方法については[GitHub](https://github.com/AdguardTeam/DisableAMP)をご覧ください。

![AMPを無効化](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## AdGuard以外でおすすめのスクリプト

これらのユーザースクリプトは、AdGuardによって開発されたものではないため、安全性および/または機能性することを100%保証することはできません。 しかし、私たちの経験では、以下のものは全部、良い評判を得ているので、推薦に値します。

### Don't track me Google

このスクリプトは、Googleの検索結果のリンクからGoogleのトラッキング機能を削除します。 検索結果の読み込みを高速化し、右クリックやタップでリンクURLをコピーできるようにします。

ソースコードは[GitHubで公開されています](https://github.com/Rob--W/dont-track-me-google)。 このユーザースクリプトは[GreasyForkから](https://greasyfork.org/en/scripts/428243-don-t-track-me-google)ダウンロードし、AdGuard CoreLibsベースのアプリにインストールすることができます。

### microShield

韓国のウェブサイトや一部の国際ウェブサイトを訪問する人のためのユーザースクリプト。 microShield ユーザースクリプトは、Ad-Shield 広告とアンチアドブロック（広告ブロック対策技術）をブロックします。 オリジナルのソースコードは、 [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) および [AdShield Defuser](https://github.com/seia-soto/adshield-defuser)で確認できます。 このユーザースクリプトは、AdGuard CoreLibsベースのアプリ、Violentmonkey、Tampermonkey、および[quoid/userscripts](https://github.com/quoid/userscripts)にインストールできます。 microShieldの詳細とインストール方法については、[GitHub](https://github.com/List-KR/microShield)をご覧ください。

## さらに多くのユーザースクリプトはどこで入手できますか？

ユーザースクリプトは主に愛好家によって作成されるため、インストールする際には注意が必要です。 未知のソースからのスクリプトは、潜在的なリスクを伴います。 しかし、注意深く責任を持ってインストールすれば、ウェブサイトの利用をより便利にしてくれる興味深いスクリプトは実に多種多様です。

以下で、最も人気なユーザースクリプト・カタログのいくつかをご紹介します。

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone)は、一致するURLまたはドメインを入力してユーザースクリプトを検索できるウェブサイトです。 このウェブサイトは使いやすく、モデレートされたページのスクリプトだけが表示されるため、信頼性も高いです。

### Greasy Fork

[Greasy Fork](https://greasyfork.org/)は、Stylishのクリエイターによるユーザースクリプトのカタログです。 このカタログに掲載されているスクリプトは、モデレーションを受けているため、その信頼性はさらに高いです。

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/)はnodeJSで書かれたオープンソースのユーザースクリプトカタログです。 モデレーションがないので、不審なスクリプトに注意してください。

### コミュニティ

ユーザースクリプトの助けを借りてブラウザを擬人化するというアイデアが好きな方で、何か質問がある場合は以下のウェブサイトのいずれかで質問することができます:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## 開発者向け

### AdGuardライセンスをリクエストする

独自のカスタムスクリプトを開発中で、AdGuardとの連携をテストしたい場合は、AdGuardアプリのベータ版ライセンスキーをリクエストしてください。

ご希望の方は、以下の情報を明記の上、devteam@adguard.com にご連絡ください:

**件名:** Userscript author license request

**本文:** 現在取り組んでいるユーザースクリプトについて教えてください（できれば英語でお願いします）。

よかったらこちらの[mailtoリンク](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK)もお使いください。

### 互換性

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

これらのプロパティは、AdGuardによって無視されます:

```text
@unwrap
```

#### Supported GM functions

AdGuard は、古い GM\_ 関数と、GM オブジェクトを使用する新しい GM4 API の両方をサポートしています。

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

Greasemonkey APIについての詳細は[こちら](https://wiki.greasespot.net/GM.info)をご覧ください。

### 例:

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

AdGuard製品では、ユーザースタイルを限定的にサポートしています。 `@var` および `@advanced` メタデータタグはサポートされていません。また、 `@preprocessor` メタデータタグの任意の値 ( `default`を除く) もサポートされていません。

### Metadata

メタデータブロックは、 `===UserStyle===` で始まり、 `===/UserStyle===`で終わる CSS スタイルのコメントを使用して記述されます。 ユーザースクリプトでサポートされているすべてのメタデータタグは、ユーザースタイルでもサポートされています。（一部のタグ意味ないため無視されますが。） `@var` および `@advanced` タグはサポートされていません。 `@preprocessor` タグでサポートされている値は、 `default` のみです。

### Content

ユーザースタイルのコンテンツは、 [`@-moz-document` @-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@document)をサポートするプレーン CSS です。 `media-document()` 関数はサポートされていません。 ユーザースタイルは、 `@-moz-document` ルールの 1 つ以上に一致するページにのみ適用されます。 ユーザースタイルに `@-moz-document` ルールが全く含まれていない場合は、そのユーザースタイルは適用されません。

### 例:

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
