---
title: Extensiones
sidebar_position: 6
---

## Userscripts

Los scripts de usuario (también los llamamos "extensiones") son, de facto, miniprogramas escritos en JavaScript. Modifican o amplían la funcionalidad de uno o más sitios web. Es posible que muchos usuarios de AdGuard ya estén familiarizados con scripts de usuario como AdGuard Assistant, Popup Blocker y AdGuard Extra.

:::note Aplicaciones compatibles

AdGuard puede ampliar significativamente la funcionalidad del sitio web al actuar como administrador de scripts de usuario. Puedes agregar tus scripts personalizados o administrar los existentes en nuestros tres productos: [AdGuard para Windows](/adguard-for-windows/features/extensions), [AdGuard para Android](/adguard-for-android/features/settings#userscripts) y [AdGuard para Mac](/adguard-for-mac/features/extensions).

:::

### Scripts de AdGuard recomendados

Estos scripts de usuario provienen directamente de los desarrolladores de AdGuard y podemos garantizar que son efectivos y seguros. Para algunos de los scripts de usuario desarrollados por terceros que consideramos buenos y confiables, [desplázate hacia abajo hasta la siguiente sección](#top-picks). También puedes encontrar algunos de los [sitios web populares con scripts](#more-userscripts) a continuación, pero recuerda que cada vez que descargas un script de usuario de una fuente desconocida, te expones a cierto riesgo, ya que algunos scripts pueden ser dañinos a tu computadora.

#### AdGuard Extra

Una extensión que bloquea anuncios en casos difíciles cuando el enfoque habitual basado en filtros no es suficiente. AdGuard Extra viene preinstalado en las apps independientes de AdGuard, excepto en la de iOS, por lo que no necesitas hacer nada para habilitarlo. Sin embargo, si deseas utilizarlo junto con la extensión de navegador AdGuard o cualquier otro bloqueador de anuncios, necesitarás utilizar una extensión adicional. Más información sobre este scripts de usuario y cómo instalarlo en [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Popup Blocker

El nombre habla por sí solo: bloquea las ventanas emergentes, uno de los tipos de anuncios más molestos en los sitios web. Más información sobre este scripts de usuario, sus características clave y instalación en [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Bloqueador de ventanas emergentes AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard Assistant (versión antigua)

Esta extensión personalizada está diseñada para controlar el filtrado directamente desde la página del navegador (bloqueo manual, inclusión en lista de permitidos etc.).

:::note

Esta versión del Asistente de AdGuard es antigua y no tiene sentido usarla en sistemas nuevos, ya que ha sido reemplazada por el [Asistente de navegador](https://adguard.com/adguard-assistant/overview.html), más completo. Pero el Asistente antiguo puede ser útil si no hay un Asistente para tu navegador. Si este es tu caso, puedes aprender cómo instalar el Asistente AdGuard en [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Disable AMP

Un script que sólo está preinstalado en AdGuard para Android. Desactiva AMP (Accelerated Mobile Pages) en la página de resultados de búsqueda de Google. Obtén más información sobre este scripts de usuario y cómo instalarlo en [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Deshabilitar AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Mejores opciones fuera de AdGuard{#top-picks}

AdGuard no desarrolla estos scripts de usuario y, por lo tanto, no podemos ofrecer una garantía del 100% de que sean seguros y/o funcionen en todo el tiempo. Sin embargo, según nuestra experiencia, merecen una recomendación, ya que todos se han ganado su buena reputación.

#### Don't track me Google

Este script elimina la función de seguimiento de Google de los enlaces en los resultados de búsqueda de Google. Acelera la carga de los resultados de búsqueda y te permite hacer clic derecho o tocar para copiar la URL del enlace.

Su código fuente está [disponible en GitHub](https://github.com/Rob--W/dont-track-me-google). Este scripts de usuario se puede descargar de [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e instalar en cualquier app basada en AdGuard CoreLibs.

#### SponsorBlock

SponsorBlock skips sponsored segments in YouTube videos. It saves time by jumping straight to the main content and removes interruptions from ads and self-promotions.

:::info

This userscript runs exclusively on our desktop applications, AdGuard for Windows and AdGuard for Mac.

:::

To try it out:

1. Go to [https://mchangrh.github.io/sb.js/](https://mchangrh.github.io/sb.js/).
2. Click **Generate link**.
3. Copy the link that appears.
4. Open AdGuard and go to **Extensions → Add extension → Import from file or URL**.
5. Paste the copied link and confirm.

#### tinyShield

Un script de usuario para personas que visitan sitios web coreanos y algunos sitios web internacionales. El script de usuario de tinyShield bloquea los anuncios de Ad-Shield y los antibloqueos de anuncios. Este script de usuario se puede instalar en aplicaciones basadas en AdGuard CoreLibs, Violentmonkey, Tampermonkey y [quoid/userscripts](https://github.com/quoid/userscripts). Obtén más información sobre tinyShield y cómo instalarlo en [GitHub](https://github.com/List-KR/tinyShield).

### ¿Dónde conseguir más scripts de usuario?{#more-userscripts}

Como los scripts de usuario son creados principalmente por entusiastas, debes tener cuidado al instalarlos. Cualquier script de fuente desconocida conlleva un riesgo potencial. Sin embargo, existe una gran variedad de scripts interesantes que, si se instalan con cuidado y responsabilidad, pueden hacer que el uso de algunos sitios web sea más conveniente.

Aquí describiremos algunos de los catálogos de scripts de usuario más populares.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) es un sitio web que permite buscar scripts de usuario ingresando una URL o dominio coincidente. El sitio web es fácil de usar y tiene un alto nivel de credibilidad, ya que sólo se muestran los scripts de páginas moderadas.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) es un catálogo de scripts de usuario de los creadores de Stylish. Los scripts de este catálogo pasan por moderación, por lo que su credibilidad es mucho mayor.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) es un catálogo de scripts de usuario de código abierto escrito en nodeJS. No está moderado, así que esté atento a los scripts sospechosos.

#### Comunidad

Si te gusta la idea de personalizar tu navegador con scripts de usuario y tienes alguna duda, puedes preguntarlo en uno de estos sitios web:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Desarrollo

#### Solicitar licencia

Si estás desarrollando tu propio script de usuario y quieres probar cómo funciona con AdGuard, puedes solicitar una licencia completando el [formulario](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibilidad

##### Bloqueo de metadatos

###### Propiedades compatibles

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

###### Propiedades no compatibles

Estas propiedades serán simplemente ignoradas por AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Funciones GM compatibles

AdGuard admite tanto las funciones GM\_ antiguas como la nueva API GM4 que utiliza objetos GM.

:::note

Todas las funciones antiguas de Greasemonkey enumeradas están obsoletas pero aún son compatibles.

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

Puedes encontrar más información sobre la API de Greasemonkey en [su manual](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Ejemplo

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

AdGuard proporciona una instancia de la clase `PolicyApi` que permite administrar Trusted Types en tus scripts de usuario.

Puedes acceder a la instancia de esta clase utilizando la variable `ADG_policyApi` en tu script de usuario.

##### Propiedades

- `nombre: cadena` — un nombre de la política (Predeterminado es `"AGPolicy"`).
- `isSupported: boolean` — una bandera que indica si la Trusted Types API es soportada por el navegador actual.

##### Métodos polyfill

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Si no se admite, devuelve `input: cadena`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). If not supported, returns `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Si no se admite, devuelve `input: cadena`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Si no se admite, devuelve `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Si no se admite, devuelve `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Si no se admite, devuelve `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Si no se admite, devuelve `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Si no se admite, devuelve `false`.

##### Características adicionales

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

##### Métodos adicionales

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

:::info Compatibilidad

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

:::info Aplicaciones compatibles

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard for Android v4.8 in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. ¡Listo!

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

### Ejemplo

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
