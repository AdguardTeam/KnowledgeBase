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

#### tinyShield

Uno script utente per coloro che visitano siti web coreani e alcuni siti web internazionali. Lo script utente tinyShield blocca le inserzioni di Ad-Shield e gli anti-adblock. Questo script utente si può installare nelle app basate su AdGuard CoreLibs, Violentmonkey, Tampermonkey e [quoid/userscripts](https://github.com/quoid/userscripts). Scopri di più su tinyShield e su come installarlo su [GitHub](https://github.com/List-KR/tinyShield).

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

You can find more information about Greasemonkey API in [its manual](https://wiki.greasespot.net/Greasemonkey_Manual:API).

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

## Stili utente

Gli stili utente consentono agli utenti di modificare l'aspetto dei siti web popolari.

AdGuard ha l'opzione di caricare o creare i propri stili utente. Questa è una funzione avanzata, quindi avrai bisogno di alcune conoscenze di HTML e CSS.

:::info App supportate

Attualmente, due app AdGuard consentono di creare e gestire stili utente: AdGuard per Windows (v7.19 o successivo) e AdGuard per macOS (v2.16 o successivo). Prevediamo anche di implementare questa nuova funzionalità in AdGuard v4.8 per Android nel prossimo futuro.

:::

Questa è una funzione sperimentale, quindi se incontri problemi durante l'aggiunta o la creazione di stile utente, ti preghiamo di contattare la nostra assistenza all'indirizzo <support@adguard.com>.

### Come impostare uno stile utente in AdGuard

Puoi scaricare stili utente da vari siti web. Uno dei siti web di stile utente più popolari è [https://userstyles.world/](https://userstyles.world/explore), che useremo come esempio per le seguenti istruzioni su come impostare lo stile utente in AdGuard.

1. Segui il link sopra e scegli lo stile utente che ti piace

2. Clicca su _Copia_ accanto all'indirizzo dello stile utente

3. Apri le impostazioni di AdGuard → _Estensioni_

4. Premi il pulsante [+] e incolla il link del stile utente

5. Fatto!

Se conosci le regole CSS, puoi anche creare stili utente da solo.

:::note

Non forniamo assistenza per gli stili utente che contengono `@var` o `@advanced` nei metadati. AdGuard non supporta inoltre `@preprocessor` senza il valore `default`.

:::

1. Apri le impostazioni di AdGuard → _Estensioni_

2. Premi il pulsante [+] e scegli l'opzione _Crea stile utente_. Si aprirà una nuova finestra sullo schermo

3. Per creare uno stile utente, prima scrivi il titolo con i metadati, ad esempio

 ```CSS
 /* ==UserStyle==
 @name New userstyle
 @version 1.0
 ==/UserStyle== */
 ```

4. Scrivi la parte CSS dopo i meta dati. AdGuard supporta la corrispondenza dei nomi di dominio dei siti web (`@-moz-document domain(…), …`). Ad esempio:

 ```CSS
 body {
   background: gray;
   }
 ```

 O:

 ```CSS
 @-moz-document domain('example.org'),
 domain('example.net'),
 domain('example.com') body {
   background: gray;
   }
 ```

5. Una volta terminato, premi _Salva e Chiudi_. Il tuo nuovo stile utente è stato aggiunto con successo a AdGuard

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
