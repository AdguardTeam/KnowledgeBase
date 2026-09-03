---
title: Erweiterungen
sidebar_position: 6
---

## Benutzerskripte

Benutzerskripte (wir nennen sie auch „Erweiterungen“) sind im Grunde genommen in JavaScript geschriebene Miniprogramme. Sie ändern oder erweitern die Funktionalität einer oder mehrerer Websites. Viele AdGuard-Benutzer sind vielleicht bereits mit Benutzerskripten wie AdGuard Assistant, Popup Blocker und AdGuard Extra vertraut.

:::note Unterstützte Apps

AdGuard kann die Funktionalität einer Website erheblich erweitern, indem er als Benutzer-Script-Verwaltung fungiert. You can add your custom scripts or manage the existing ones in our three products: [AdGuard for Windows](/adguard-for-windows/protection/extensions), [AdGuard for Android](/adguard-for-android/features/settings#userscripts), and [AdGuard for Mac](/adguard-for-mac/features/extensions).

:::

### Empfohlene AdGuard-Skripte

Diese Benutzerskripte stammen direkt von AdGuard und wir können garantieren, dass sie effektiv und sicher sind. Für einige der von anderen entwickelten Benutzerskripte, die wir für gut und zuverlässig halten, [blättern Sie nach unten zum nächsten Abschnitt](#top-picks). Sie können auch einige der [beliebten Websites mit Skripten](#more-userscripts) unten finden, aber bedenken Sie, dass Sie sich einem gewissen Risiko aussetzen, wenn Sie ein Benutzerskript von einer unbekannten Quelle herunterladen, da einige Skripte schädlich für Ihren Computer sein können.

#### AdGuard Extra

Eine Erweiterung, die Werbung in schwierigen Fällen blockiert, wenn der übliche filterbasierte Ansatz nicht ausreicht. AdGuard Extra ist in den Einzelanwendungen von AdGuard vorinstalliert, mit Ausnahme der Anwendung für iOS, sodass Sie nichts tun müssen, um es zu aktivieren. Wenn Sie es jedoch zusammen mit AdGuard Browsererweiterung oder einem anderen Werbeblocker verwenden möchten, müssen Sie eine zusätzliche Erweiterung verwenden. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/AdGuardExtra) über dieses Benutzerskript und wie man es installiert.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Pop-up-Blocker

Der Name spricht für sich selbst: Es sperrt Popups — eine der lästigsten Arten von Werbung auf Websites. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/PopupBlocker) über dieses Benutzerskript, dessen Hauptmerkmale und Installation.

![AdGuard Pop-up-Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard-Assistent (alte Version)

Diese benutzerdefinierte Erweiterung wurde entwickelt, um das Filtern direkt von der Browserseite aus zu steuern (manuelles Sperren, Zulassen von Listen usw.).

:::note

Diese Version des Assistenten ist veraltet und es ergibt keinen Sinn, sie auf neuen Systemen zu verwenden, da sie durch den vollwertigen [Browser-Assistenten] (https://adguard.com/adguard-assistant/overview.html) ersetzt wurde. Der bisherige Assistent kann jedoch nützlich sein, wenn es keinen Browser-Assistenten für Ihren Browser gibt. Wenn dies bei Ihnen der Fall ist, können Sie auf [GitHub](https://github.com/AdguardTeam/AdguardAssistant) erfahren, wie Sie den AdGuard Assistenten installieren.

:::

#### AMP deaktivieren

Ein Skript, das nur in AdGuard für Android vorinstalliert ist. Es deaktiviert AMP (Accelerated Mobile Pages) auf der Google-Suchergebnisseite. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/DisableAMP) über dieses Benutzerskript und wie man es installiert.

![AMP deaktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Beste Tipps außerhalb von AdGuard{#top-picks}

Diese Benutzerskripte werden nicht von AdGuard entwickelt und daher können wir keine 100%ige Garantie geben, dass sie sicher sind und/oder jederzeit funktionieren. Unserer Erfahrung nach verdienen sie jedoch eine Empfehlung, weil sie alle ihren guten Ruf verdient haben.

#### Don't track me Google

Dieses Skript entfernt die Tracking-Funktion von Google aus den Links in den Google-Suchergebnissen. Sie beschleunigt das Laden der Suchergebnisse und ermöglicht es Ihnen, mit der rechten Maustaste zu klicken oder zu tippen, um die Link-URL zu kopieren.

Der Quellcode ist [auf GitHub verfügbar](https://github.com/Rob--W/dont-track-me-google). Dieses Benutzerskript kann von [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) heruntergeladen und in jeder AdGuard CoreLibs-basierten Anwendung installiert werden.

#### SponsorBlock

SponsorBlock überspringt bezahlte Werbeblöcke in YouTube-Videos. Dadurch wird Zeit gespart, da Sie direkt zum Hauptinhalt gelangen und keine Unterbrechungen durch Werbung und Eigenwerbung mehr auftreten.

:::info

Dieses Benutzerskript kann ausschließlich auf unseren Desktop-Anwendungen AdGuard für Windows und AdGuard für Mac genutzt werden.

:::

Zum Ausprobieren:

1. Öffnen Sie [https://mchangrh.github.io/sb.js/](https://mchangrh.github.io/sb.js/).
2. Klicken Sie auf **Generate link**.
3. Kopieren Sie den angezeigten Link.
4. Öffnen Sie AdGuard und wechseln Sie zu **Erweiterungen → Erweiterung hinzufügen → Aus Datei oder URL importieren**.
5. Fügen Sie den kopierten Link ein und bestätigen Sie.

#### tinyShield

tinyShield is primarily designed for Korean websites protected by Ad-Shield, but it also supports many international websites that use the same ad anti-adblocking technology. This userscript can be installed in AdGuard CoreLibs-based apps, Violentmonkey, Tampermonkey, and [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about tinyShield and how to install it on [GitHub](https://github.com/FilteringDev/tinyShield).

### Wo kann man weitere Benutzerskripte erhalten? {#more-userscripts}

Da Benutzerskripte hauptsächlich von Enthusiasten erstellt werden, sollten Sie bei deren Installation vorsichtig sein. Jedes Skript aus einer unbekannten Quelle birgt ein potenzielles Risiko. Es gibt jedoch eine Vielzahl interessanter Skripte, die, wenn sie sorgfältig und verantwortungsbewusst installiert werden, die Nutzung einiger Websites wirklich bequemer machen können.

Im Folgenden werden einige der beliebtesten Benutzerskript-Kataloge beschrieben.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) ist eine Website, die die Suche nach Benutzerskripten durch Eingabe einer passenden URL oder Domain ermöglicht. Die Website ist einfach zu bedienen und hat ein hohes Maß an Glaubwürdigkeit, da nur Skripte von moderierten Seiten angezeigt werden.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) ist ein Benutzerskript-Katalog von Stylish-Entwicklern. Die Skripte in diesem Katalog werden moderiert, so dass ihre Glaubwürdigkeit entsprechend höher ist.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) ist ein quelloffener Benutzerskript-Katalog, der in nodeJS geschrieben ist. Dieser Katalog wird nicht moderiert, achten Sie also auf verdächtige Skripte.

#### NamuLink

[NamuLink](https://github.com/FilteringDev/NamuLink) is an open-source userscript that removes Naver PowerLink advertisements from NamuWiki by bypassing the site's advanced link obfuscation mechanisms. The project is maintained by the AdGuard team and the broader ad-blocking community.

#### Community

If you like the idea of customizing your browser with userscripts and have questions, you can ask them on one of these websites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Development

#### Request license

If you are developing your own userscript and want to test how it works with AdGuard, you can request a license by filling in [the form](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibility

##### Metadata block

###### Supported properties

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

###### Unsupported properties

These properties will be simply ignored by AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Supported GM functions

AdGuard supports both old GM\_ functions and new GM4 API that use GM object.

:::note

All listed old Greasemonkey functions are deprecated but still supported.

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
- [`window.onurlchange`](https://www.tampermonkey.net/documentation.php#api:window.onurlchange)

You can find more information about Greasemonkey API in [its manual](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Beispiel

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
// @grant           window.onurlchange
// @run-at          document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```

#### Trusted Types API

AdGuard provides an instance of the `PolicyApi` class that allows you to manage Trusted Types in your userscripts.

You can access the instance of this class by using the `ADG_policyApi` variable in your userscript.

##### Properties

- `name: string` — a name of the policy (Default is `"AGPolicy"`).
- `isSupported: boolean` — a flag indicating whether or not the Trusted Types API is supported by the current browser.

##### Polyfilled methods

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). If not supported, returns `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). If not supported, returns `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). If not supported, returns `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). If not supported, returns `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). If not supported, returns `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). If not supported, returns `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). If not supported, returns `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). If not supported, returns `false`.

##### Additional Types

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

##### Additional methods

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

#### Matching SPA sites

:::info Compatibility

This section only applies to AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs] v1.19 or later.

:::

Many modern websites, such as YouTube, utilize [Single Page Application (SPA)](https://en.wikipedia.org/wiki/Single-page_application) capabilities. Unlike traditional web applications, the page does not reload when navigating between pages. Instead, the content is updated dynamically using JavaScript, allowing for a smoother user experience.

On such websites, a userscript is invoked only once when the `@match` or `@include` directives are matched (unless `@exclude` is matched). Due to the nature of SPAs, the userscript cannot be re-invoked on subsequent page changes because the global JavaScript context remains the same. To address this issue, userscripts can use the `@grant window.onurlchange` directive.

```javascript
// ==UserScript==
// @name SPA
// @namespace spa
// @version 1.0.0
// @match https://*/*
// @grant window.onurlchange
// @run-at document-start
// ==/UserScript==

// via window.onurlchange
window.onurlchange = (event) => {
    console.log('URL changed to:', event.url);
};

// via window.addEventListener('urlchange')
window.addEventListener('urlchange', (event) => {
    console.log('URL changed to:', event.url);
});
```

This will allow userscripts to listen for URL changes and handle them accordingly.

:::note

The `urlchange` event is only triggered for full URL changes, such as a change in the path or query, but not for fragment (hash) changes.
Examples:

- Navigation from `https://example.com/page1` to `https://example.com/page2` will trigger the event.
- Navigation from `https://example.com/page1?query=1` to `https://example.com/page1?query=2` will trigger the event.
- Navigation from `https://example.com/page1#section1` to `https://example.com/page1#section2` will **NOT** trigger the event.

:::

:::note

The `window.onurlchange` and `window.addEventListener('urlchange', ...)` APIs are non-standard. To use them, you must explicitly grant them in your userscript with `@grant window.onurlchange`.

:::

If a website uses hash routing, userscripts can use the native DOM [`hashchange` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event):

```javascript
// ==UserScript==
// @name SPA
// @namespace spa
// @version 1.0.0
// @match https://*/*
// @run-at document-start
// ==/UserScript==

// via window.onhashchange
window.onhashchange = (event) => {
    console.log(`Hash changed from "${event.oldURL}" to "${event.newURL}"`);
};

// via window.addEventListener('hashchange')
window.addEventListener('hashchange', (event) => {
    console.log(`Hash changed from "${event.oldURL}" to "${event.newURL}"`);
});
```

## Userstyles

Userstyles allow users to change the appearance of popular websites.

AdGuard has the option to upload or create your own userstyles. This is an advanced feature, so you will need some knowledge of HTML and CSS.

:::info Unterstützte Apps

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard for Android v4.8 in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at [support@adguard.com](mailto:support@adguard.com).

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Fertig!

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

[CoreLibs]: https://github.com/AdguardTeam/CoreLibs
