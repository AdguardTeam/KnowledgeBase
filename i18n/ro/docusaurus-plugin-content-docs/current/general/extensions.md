---
title: Extensii
sidebar_position: 6
---

## Userscripts

Userscripts (pe care le numim și "extensii") sunt, de facto, miniprograme scrise în JavaScript. Ele modifică sau extind funcționalitatea unuia sau mai multor site-uri web. Mulți utilizatori AdGuard s-ar putea să fie deja familiarizați cu userscripts precum Asistentul AdGuard, Blocare Pop-up și AdGuard Extra.

:::note Aplicații suportate

AdGuard poate mări semnificativ funcționalitatea site-ului operând ca manager de userscript. Puteți adăuga scripturi personalizate sau gestiona cele existente în cele trei produse ale noastre: [AdGuard pentru Windows](/adguard-for-windows/features/extensions), [AdGuard pentru Android](/adguard-for-android/features/settings#userscripts) și [AdGuard pentru Mac](/adguard-for-mac/features/extensions).

:::

### Scripturi AdGuard recomandate

Aceste userscripts provin direct de la dezvoltatorii AdGuard și putem garanta că sunt eficiente și sigure. Pentru unele dintre userscripts-urile dezvoltate de alții pe care le considerăm bune și de încredere, [derulați în jos la secțiunea următoare](#top-picks). De asemenea, puteți găsi câteva dintre [site-urile populare cu scripturi](#more-userscripts) mai jos, dar amintiți-vă că ori de câte ori descărcați un userscript dintr-o sursă necunoscută, vă expuneți la un certain risc, deoarece unele scripturi pot fi dăunătoare pentru computerul dumneavoastră.

#### AdGuard Extra

O extensie care blochează reclamele în cazuri dificile când abordarea obișnuită bazată pe filtre nu este suficientă. AdGuard Extra vine preinstalat în aplicațiile AdGuard independente, cu excepția celor pentru iOS, astfel că nu trebuie să faceți nimic pentru a-l activa. Cu toate acestea, dacă doriți să-l folosiți împreună cu Extensia de browser AdGuard sau cu orice alt blocant de reclame, va trebui să folosiți o extensie suplimentară. Aflați mai multe despre acest userscript și despre cum să-l instalați pe [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### Blocant Pop-up AdGuard

Numele spune totul: blochează pop-up-urile — unul dintre cele mai enervante tipuri de reclame de pe site-uri. Aflați mai multe despre acest userscript, principalele sale caracteristici și instalare pe [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Blocant Pop-up AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### Asistentul AdGuard (versiune veche)

Această extensie personalizată este concepută pentru a controla filtrarea direct din pagina browser-ului (blocare manuală, permitere, etc.).

:::note

Această versiune a Asistentului este veche și nu are sens să o folosiți pe sistemele noi, deoarece a fost înlocuită cu [Asistentul Browser](https://adguard.com/adguard-assistant/overview.html). Cu toate acestea, Asistentul vechi poate fi util dacă nu există Asistent Browser pentru browserul dumneavoastră. Dacă acest lucru se aplică în cazul dumneavoastră, puteți învăța cum să instalați Asistentul AdGuard pe [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Disable AMP

Un script care este preinstalat numai în AdGuard pentru Android. Acesta dezactivează AMP (Pagini Mobile Accelerate) pe pagina de rezultate ale căutării Google. Aflați mai multe despre acest userscript și cum să-l instalați pe [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Cele mai bune alegeri dincolo de AdGuard{#top-picks}

These userscripts are not developed by AdGuard, and therefore we can't give a 100% guarantee that they are safe and/or work at all times. Cu toate acestea, din experiența noastră, merită o recomandare deoarece toate și-au câștigat o bună reputație.

#### Nu mă urmări Google

Acest script elimină caracteristica de urmărire a Google din linkurile din rezultatele căutării Google. Aceasta accelerează încărcarea rezultatelor căutării și permite să apăsați cu butonul drept al mouse-ului sau să atingeți pentru a copia URL-ul link-ului.

Codul său sursă este [disponibil pe GitHub](https://github.com/Rob--W/dont-track-me-google). Acest userscript poate fi descărcat de pe [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) și instalat în orice aplicație bazată pe AdGuard CoreLibs.

#### tinyShield

Un userscript pentru persoanele care vizitează site-uri coreene și unele site-uri internaționale. The tinyShield userscript blocks Ad-Shield ads and anti-adblocks. Acest userscript poate fi instalat în aplicațiile bazate pe AdGuard CoreLibs, Violentmonkey, Tampermonkey și [quoid/userscripts](https://github.com/quoid/userscripts). Learn more about tinyShield and how to install it on [GitHub](https://github.com/FilteringDev/tinyShield).

### De unde puteți obține mai multe userscripts?{#more-userscripts}

Deoarece userscripts-urile sunt create în principal de entuziaști, ar trebui să fiți precauți atunci când le instalați. Orice script dintr-o sursă necunoscută prezintă un risc potențial. Cu toate acestea, există o mare varietate de scripturi interesante care, dacă sunt instalate cu atenție și responsabilitate, pot face utilizarea unor site-uri web mult mai convenabilă.

Aici vom descrie câteva dintre cele mai populare cataloage de userscript.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) este un site web care permite căutarea de userscripts prin introducerea unui URL sau domeniu corespunzător. Site-ul este ușor de utilizat și are un nivel ridicat de credibilitate, deoarece sunt afișate doar scripturi de pe pagini moderate.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) este un catalog de userscripts al creatorilor Stylish. Scripturile din acest catalog sunt moderate, astfel că credibilitatea lor este mult mai mare.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) este un catalog open-source de userscripts scris în nodeJS. Nu este moderat, așa că fiți atenți la scripturile suspecte.

#### Comunitate

Dacă vă place ideea de a personaliza browserul dvs. cu userscripts și aveți întrebări, le puteți adresa pe unul dintre aceste site-uri:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Dezvoltare

#### Solicitați licență

If you are developing your own userscript and want to test how it works with AdGuard, you can request a license by filling in [the form](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibilitate

##### Metadata block

###### Proprietăți suportate

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

###### Proprietăți nesuportate

Aceste proprietăți vor fi pur și simplu ignorate de AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Funcții GM suportate

AdGuard suportă atât vechile funcții GM\_, cât și noul API GM4 care utilizează obiectul GM.

:::note

Toate funcțiile vechi listate Greasemonkey sunt depreciate, dar încă sunt suportate.

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

#### Exemplu

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

:::info Compatibilitate

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

:::info Aplicații suportate

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard for Android v4.8 in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Terminat!

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

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). De exemplu:

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

### Exemplu

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
