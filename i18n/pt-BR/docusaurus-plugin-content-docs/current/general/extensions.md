---
title: Extensões
sidebar_position: 6
---

## Userscripts

Userscripts (também chamados de "extensões") são, na verdade, miniprogramas escritos em JavaScript. Eles modificam ou ampliam a funcionalidade de um ou mais websites. Muitos usuários do AdGuard já podem estar familiarizados com scripts de usuário como o Assistente AdGuard, o Bloqueador de pop-ups e o AdGuard Extra.

:::note Aplicativos compatíveis

O AdGuard pode ampliar significativamente a funcionalidade de sites, agindo como um gerenciador de userscripts. Você pode adicionar seus scripts personalizados ou gerenciar os existentes em nossos três produtos: [AdGuard para Windows](/adguard-for-windows/features/extensions), [AdGuard para Android](/adguard-for-android/features/settings#userscripts) e [AdGuard para Mac](/adguard-for-mac/features/extensions).

:::

### Scripts recomendados do AdGuard

Esses scripts de usuário vêm diretamente dos desenvolvedores do AdGuard e podemos garantir que são eficazes e seguros. Para alguns dos userscripts desenvolvidos por terceiros que consideramos bons e confiáveis, [role para baixo até a próxima seção](#top-picks). Você também pode encontrar alguns dos [sites populares com scripts](#more-userscripts) abaixo, mas lembre-se de que sempre que você baixa um userscript de uma fonte desconhecida, você se expõe a um certo risco, pois alguns scripts podem ser prejudiciais para o seu computador.

#### AdGuard Extra

Uma extensão que bloqueia anúncios em casos difíceis, quando a abordagem usual baseada em filtros não é suficiente. O AdGuard Extra vem pré-instalado nos aplicativos autônomos do AdGuard, exceto no AdGuard para iOS, então você não precisa fazer nada para ativá-lo. No entanto, se quiser usá-lo junto com a extensão do navegador AdGuard ou qualquer outro bloqueador de anúncios, você precisará usar uma extensão adicional. Saiba mais sobre este userscript e como instalá-lo em [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### Bloqueador de pop-ups do AdGuard

O nome fala por si: ele bloqueia pop-ups, um dos tipos mais irritantes de anúncios em sites. Saiba mais sobre este userscript, seus recursos principais e a sua instalação no [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### Assistente AdGuard (versão antiga)

Esta extensão personalizada foi projetada para controlar a filtragem diretamente da página do navegador (bloqueio manual, exclusão de permitidos etc.).

:::note

Essa versão do Assistente é antiga e não faz sentido usá-la em novos sistemas, pois foi substituída pelo <a href="https://adguard.com/adguard-assistant/overview.html">Assistente de navegador</a>. Mas o Assistente antigo pode ser útil se não houver um Assistente de navegador para o seu navegador. Se este for o seu caso, você pode aprender como instalar o Assistente AdGuard no [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Disable AMP

Um script pré-instalado apenas no AdGuard para Android. Ele desativa o AMP (Accelerated Mobile Pages) na página de resultados de pesquisa do Google. Saiba mais sobre este userscript e como instalá-lo no [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Desativar AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Principais opções fora do AdGuard{#top-picks}

Esses userscripts não são desenvolvidos pela AdGuard e, portanto, não podemos dar 100% de garantia de que eles são seguros e/ou funcionam em todos os momentos. No entanto, de acordo com a nossa experiência, eles merecem uma recomendação, pois todos conquistaram uma boa reputação.

#### Don't track me Google

Este script remove o recurso de rastreamento do Google dos links nos resultados de pesquisa do Google. Ele acelera o carregamento dos resultados da pesquisa e permite clicar com o botão direito ou tocar para copiar o link do URL.

O código-fonte está [disponível no GitHub](https://github.com/Rob--W/dont-track-me-google). Este userscript pode ser baixado no [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e instalado em qualquer aplicativo baseado em AdGuard CoreLibs.

#### tinyShield

Um userscripts para pessoas que visitam sites coreanos e alguns sites internacionais. O userscript do tinyShield bloqueia anúncios do Ad-Shield e anti-adblocks. Este userscript pode ser instalado em aplicativos baseados no CoreLibs do AdGuard, Violentmonkey, Tampermonkey e [quoid/userscripts](https://github.com/quoid/userscripts). Saiba mais sobre o tinyShield e como instalá-lo no [GitHub](https://github.com/List-KR/tinyShield).

### Onde obter mais userscripts?{#more-userscripts}

Como os userscripts são criados principalmente por entusiastas, você deve ter cuidado ao instalá-los. Qualquer script de fonte desconhecida acarreta um risco potencial. No entanto, há uma grande variedade de scripts interessantes que, se instalados com cuidado e responsabilidade, podem realmente tornar o uso de alguns sites mais conveniente.

Aqui descreveremos alguns dos catálogos de userscript mais populares.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) é um site que permite a busca por userscripts inserindo uma URL ou domínio correspondente. O site é fácil de usar e tem um alto nível de credibilidade, já que apenas scripts de páginas moderadas são exibidos.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) é um catálogo de userscripts dos criadores do Stylish. Os scripts neste catálogo passam por moderação, então sua credibilidade é muito maior.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) é um catálogo de userscripts de código aberto escrito em nodeJS. Não é moderado, então fique atento a scripts suspeitos.

#### Comunidade

Se você gosta da ideia de personalizar seu navegador com userscripts e tem alguma dúvida, pode perguntar em um destes sites:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Desenvolvimento

#### Solicitar licença

Se você está desenvolvendo seu próprio userscript e quer testar como ele funciona com o AdGuard, pode solicitar uma licença preenchendo [o formulário](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibilidade

##### Bloqueio de metadados

###### Propriedades compatíveis

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

###### Propriedades não compatíveis

Essas propriedades serão simplesmente ignoradas pelo AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Funções GM compatíveis

O AdGuard oferece suporte às antigas funções GM\_ e à nova API GM4 que usa o objeto GM.

:::note

Todas as funções antigas do Greasemonkey listadas estão obsoletas, mas ainda são suportadas.

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

Você pode encontrar mais informações sobre a API do Greasemonkey em [seu manual](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Exemplo

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

AdGuard oferece uma instância da classe `PolicyApi` que permite gerenciar Trusted Types em seus scripts de usuário.

Você pode acessar a instância desta classe usando a variável `ADG_policyApi` em seu scripts de usuário.

##### Propriedades

- `name: string` — um nome da política (O padrão é `"AGPolicy"`).
- `isSupported: boolean` — um sinalizador que indica se a Trusted Types API é suportada pelo navegador atual.

##### Métodos polyfill

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Se não for suportado, retorna `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). Se não for suportado, retorna `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Se não for suportado, retorna `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Se não for suportado, retorna `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Se não for suportado, retorna `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Se não for suportado, retorna `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Se não for suportado, retorna `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Se não for suportado, retorna `false`.

##### Tipos adicionais

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

##### Métodos adicionais

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

:::info Compatibilidade

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

:::info Aplicativos compatíveis

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard for Android v4.8 in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

### How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyle websites is [https://userstyles.world/](https://userstyles.world/explore), which we will use as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

2. Click _Copy_ next to the userstyle address

3. Open AdGuard settings → _Extensions_

4. Press the [+] button and paste the userstyle link

5. Pronto!

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

4. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). Por exemplo:

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

### Exemplo

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
