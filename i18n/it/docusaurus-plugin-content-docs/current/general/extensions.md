---
title: Estensioni
sidebar_position: 6
---

## Script utente

Gli userscript (li chiamiamo anche "estensioni") sono, di fatto, miniprogrammi scritti in JavaScript. Essi, modificano o estendono la funzionalità di uno o più siti web. Molti utenti di AdGuard potrebbero già essere a conoscenza di certi userscript, come AdGuard Assistant, Popup Blocker e AdGuard Extra.

:::note App supportate

AdGuard può ampliare significativamente la funzionalità del sito web, agendo da gestore di userscript. Puoi aggiungere i tuoi script personali o gestire quelli esistenti nei nostri tre prodotti: [AdGuard per Windows](/adguard-for-windows/features/extensions), [AdGuard per Android](/adguard-for-android/features/settings#userscripts) e [AdGuard per Mac](/adguard-for-mac/features/extensions).

:::

### Script di AdGuard consigliati

Questi script utente provengono direttamente dagli sviluppatori di AdGuard e possiamo garantire che siano efficienti e sicuri. Per alcuni degli script utente sviluppati da altri che consideriamo buoni e affidabili, [scorri verso il basso fino alla sezione successiva](#top-picks). Di seguito puoi anche trovare alcuni dei [siti web popolari con script](#more-userscripts), ma ricorda che ogni volta che scarichi uno script utente da una fonte sconosciuta, ti esponi a un certo rischio, poiché alcuni script potrebbero essere dannosi al tuo computer.

#### AdGuard Extra

C'è un'estensione che blocca gli annunci in casi difficili, quando il solito approccio basato sui filtri non è sufficiente. AdGuard Extra è preinstallato nelle app autonome di AdGuard, tranne per quella per iOS, quindi, non devi fare nulla per abilitarla. Tuttavia, se desideri utilizzarla insieme all'Estensione di browser AdGuard o qualsiasi altro bloccatore di annunci, dovrai utilizzare un'ulteriore estensione. Scopri di più su questo script utente e su come installarlo su [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Popup Blocker

Il nome dice tutto: blocca i popup, uno dei tipi più fastidiosi di inserzioni sui siti web. Scopri di più su questo script utente, le sue caratteristiche principali e l'installazione su [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard Assistant (versione ereditaria)

Questa estensione personalizzata è progettata per controllare il filtraggio direttamente dalla pagina web (blocco manuale, inserimento nella lista consentita, etc.).

:::note

Nota che questa versione di Assistant è ereditaria e non ha senso utilizzarla sui nuovi sistemi, poiché è stata sostituita dal [Browser Assistant](https://adguard.com/adguard-assistant/overview.html) completo. Ma l'Assistant ereditario potrebbe tornare utile se non esiste alcun Browser Assistant per il tuo browser. Se questo è il tuo caso, puoi scoprire come installare AdGuard Assistant su [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Disable AMP

Uno script preinstallato soltanto su AdGuard per Android. Disabilita AMP (Pagine Mobili Accelerate) sulla pagina dei risultati di ricerca di Google. Scopri di più su questo script utente e su come installarlo su [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disabilita AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Le migliori scelte al di fuori di AdGuard{#top-picks}

Questi script utente non sono sviluppati da AdGuard e quindi non possiamo garantire al 100% che siano al sicuro e/o funzionino sempre. Tuttavia, secondo la nostra esperienza, meritano una raccomandazione poiché si sono tutti guadagnati una buona reputazione.

#### Don't track me Google

Questo script rimuove la funzionalità di monitoraggio di Google dai collegamenti nei risultati di ricerca di Google. Accelera il caricamento dei risultati di ricerca e consente di fare clic con il pulsante destro del mouse o toccare per copiare l'URL del collegamento.

Il suo codice iniziale è [disponibile su GitHub](https://github.com/Rob--W/dont-track-me-google). Questo script utente può essere scaricato da [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e installato in qualsiasi app basata su AdGuard CoreLibs.

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

Uno script utente per coloro che visitano siti web coreani e alcuni siti web internazionali. Lo script utente tinyShield blocca le inserzioni di Ad-Shield e gli anti-adblock. Questo script utente si può installare nelle app basate su AdGuard CoreLibs, Violentmonkey, Tampermonkey e [quoid/userscripts](https://github.com/quoid/userscripts). Scopri di più su tinyShield e su come installarlo su [GitHub](https://github.com/FilteringDev/tinyShield).

### Dove puoi ottenere altri script utente?{#more-userscripts}

Poiché gli script utente sono creati principalmente da appassionati, dovresti essere cauto quando li installi. Qualsiasi script proveniente da una fonte sconosciuta comporta un potenziale rischio. Tuttavia, esiste una grande varietà di script interessanti che, se installati con attenzione e responsabilità, possono davvero rendere più conveniente l'utilizzo di alcuni siti web.

Qui, descriveremo alcuni dei cataloghi di userscript più popolari.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) è un sito web che consente di cercare script utente immettendo un URL o un dominio corrispondente. Il sito web è facile da usare e ha un elevato livello di credibilità poiché vengono visualizzati solo i codici provenienti da pagine moderate.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) è un catalogo di script utente dai creatori di Stylish. Gli codici in questo catalogo sono moderati, quindi, la loro credibilità è molto più elevata.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) è un catalogo di script utente open source, scritto in nodeJS. Non è moderato, quindi fai attenzione a codici sospetti.

#### Comunità

Se ti piace l'idea di personalizzare il tuo browser con script utente e hai più domande, puoi porle su uno di questi siti web:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Sviluppo

#### Richiedi la licenza

Se stai sviluppando il tuo script utente e vuoi testare come funziona con AdGuard, puoi richiedere una licenza compilando [il modulo](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibilità

##### Blocco dei metadati

###### Proprietà supportate

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

###### Proprietà non supportate

Queste proprietà saranno semplicemente ignorate da AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Funzioni GM supportate

AdGuard supporta sia le vecchie funzionalità GM\_ che la nuova API GM4, che utilizza l'oggetto GM.

:::note

Tutte le funzionalità di Greasemonkey elencate sono deprecate, ma ancora supportate.

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

Puoi trovare ulteriori informazioni sull'API di Greasemonkey nel [suo manuale](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Esempio

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

#### API Trusted Types

AdGuard fornisce un'istanza della classe `PolicyApi` che consente di gestire i fiduciari nei tuoi script utente.

Puoi accedere all'istanza di questa classe usando la variabile `ADG_policyApi` nel tuo script utente.

##### Proprietà

- `name: string` — un nome per la politica (Predefinito è `"AGPolicy"`).
- `isSupported: boolean` — un flag che indica se l'API Trusted Types è supportata dal browser attuale.

##### Metodi polifunzionali

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Se non supportato, restituisce `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/it/docs/Web/API/TrustedTypePolicy/createScript). Se non supportato, restituisce `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Se non supportato, restituisce `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Se non supportato, restituisce `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Se non supportato, restituisce `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Se non supportato, restituisce `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Se non supportato, restituisce `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Se non supportato, restituisce `false`.

##### Tipi aggiuntivi

```typescript
/**
 * Rappresentazione Enum dei valori di ritorno dei metodi `getAttributeType` e
 * `getPropertyType` dell'API Trusted Types nativa.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType}
 */
enum TrustedType {
    HTML = 'TrustedHTML',
    Script = 'TrustedScript',
    ScriptURL = 'TrustedScriptURL',
}

// Puoi accedervi in questo modo all'interno del codice dell'utente
ADG_TrustedType.HTML // "TrustedHTML"

/**
 * Tipo di valore attendibile isomorfo. Se un browser supporta l'API Trusted Types, sarà uno dei tipi enum Trusted
 * (`TrustedHTML`, `TrustedScript` o `TrustedScriptURL`); altrimenti, sarà una stringa regolare.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL}
 */
type TrustedValue = string | TrustedHTML | TrustedScript | TrustedScriptURL;
```

##### Metodi aggiuntivi

```typescript
/**
 * Crea un Trusted Type a seconda di `tipo`:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - oppure restituisce `valore` se nessuno di essi è applicabile.
 *
 * @param tipo          Trusted Type.
 * @param valore        Valore da cui viene creato un Trusted Type.
 * @param creaArgs      Argomenti aggiuntivi da passare alla funzione rappresentata da `TrustedTypePolicy`.
 * @returns            Valore creato.
 */
function create(
    type: TrustedType,
    value: string,
    ...createArgs: unknown[]
): TrustedValue


// Esempio: Crea TrustedHTML
const trustedHTML = ADG_policyApi.create(ADG_TrustedType.HTML, '<div></div>');

/**
 * Converte `valore` di `attributo` in uno dei Tipi Affidabili:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - oppure restituisce `valore` se nessuno di essi è applicabile.
 *
 * @param tagName       Nome di un tag HTML.
 * @param property     Attributo.
 * @param value        Valore di un attributo da convertire.
 * @param elementNS     Spazio dei nomi dell'elemento. Se vuoto, usa come predefinito lo spazio dei nomi HTML.
 * @param attrNS        Spazio dei nomi dell'attributo. Se vuoto, predefinito a null.
 * @param createArgs      Argomenti aggiuntivi da passare alla funzione rappresentata da `TrustedTypePolicy`.
 * @returns            Valore convertito.
 */
function convertAttributeToTrusted(
    tagName: string,
    attribute: string,
    value: string,
    elementNS?: string,
    attrNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Esempio: Converte in TrustedScriptURL
const trustedScriptURL = ADG_policyApi.convertAttributeToTrusted("script", "src", 'SOME_URL');
scriptElement.setAttribute("src", trustedScriptURL);

/**
 * Converte `valore` di `proprietà` in uno dei Tipi Affidabili:
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - oppure restituisce `valore` se nessuno di essi è applicabile.
 *
 * @param tagName       Nome di un tag HTML.
 * @param property     Proprietà.
 * @param value        Valore di una proprietà da convertire.
 * @param elementNS     Spazio dei nomi dell'elemento. Se vuoto, usa come predefinito lo spazio dei nomi HTML.
 * @param createArgs      Argomenti aggiuntivi da passare alla funzione rappresentata da `TrustedTypePolicy`.
 * @returns            Valore convertito.
 */
function convertPropertyToTrusted(
    tagName: string,
    property: string,
    value: string,
    elementNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Esempio: Converte in TrustedHTML
divElement.innerHTML = ADG_policyApi.convertPropertyToTrusted("div", "innerHTML", "<div></div>");
```

#### Matching SPA sites

:::info Compatibilità

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

:::info App supportate

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard for Android v4.8 in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Fatto!

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

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). Ad esempio:

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

### Esempio

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
