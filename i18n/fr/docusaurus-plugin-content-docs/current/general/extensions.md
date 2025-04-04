---
title: Extensions
sidebar_position: 6
---

## Scripts utilisateur

Les scripts utilisateurs ou userscripts (que nous appelons aussi "extensions") sont, en fait, des miniprogrammes écrits en JavaScript. Ils modifient ou élargissent les fonctionnalités d'un ou plusieurs sites web. De nombreux utilisateurs d'AdGuard sont peut-être déjà familiers avec des scripts utilisateur tels que AdGuard Assistant, Popup Blocker et AdGuard Extra.

:::note Apps prises en charge

AdGuard peut accroître considérablement les fonctionnalités des sites web en agissant comme un gestionnaire de scripts utilisateur. Vous pouvez ajouter vos scripts personnalisés ou gérer ceux existants dans nos trois produits : [AdGuard pour Windows](/adguard-for-windows/features/extensions), [AdGuard pour Android](/adguard-for-android/features/settings#userscripts) et [AdGuard pour Mac](/adguard-for-mac/features/extensions).

:::

### Scripts AdGuard recommandés

Ces scripts utilisateur proviennent directement des développeurs AdGuard et nous pouvons garantir qu'ils sont efficaces et sûrs. Pour certains des scripts utilisateur développés par des tiers que nous considérons comme bons et fiables, [faites défiler jusqu'à la section suivante](#top-picks). Vous pouvez également trouver ci-dessous certains des [sites Web populaires avec des scripts](#more-userscripts), mais n'oubliez pas que chaque fois que vous téléchargez un script utilisateur à partir d'une source inconnue, vous vous exposez à un certain risque, car certains scripts peuvent être dangereux pour votre ordinateur.

#### AdGuard Extra

Une extension qui bloque les publicités dans les cas difficiles où l'approche habituelle basée sur les filtres ne suffit pas. AdGuard Extra est préinstallée dans les applications autonomes d'AdGuard, sauf pour celle d'iOS, vous n'avez donc rien à faire pour l'activer. Cependant, si vous souhaitez l'utiliser avec l'extension de navigateur AdGuard ou tout autre bloqueur de publicités, vous devrez utiliser une extension supplémentaire. Apprenez-en plus sur ce script utilisateur et comment l'installer sur [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### Bloqueur AdGuard de fenêtres pop-up

Le nom parle de lui-même : il bloque les pop-ups, un des types de publicité les plus agaçants sur les pages web. Apprenez plus sur ce script utilisateur, ses fonctionnalités clés et son installation sur [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Bloqueur AdGuard de fenêtres pop-up](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### Assistant AdGuard (ancienne version)

Cette extension personnalisée est conçue pour contrôler le filtrage directement depuis la page du navigateur (blocage manuel, inclusion dans la liste autorisée, etc.).

:::note

Cette version de l'Assistant est obsolète et inutile à utiliser sur les nouveaux systèmes, puisqu'elle a été remplacée par l'[Assistant de navigateur](https://adguard.com/adguard-assistant/overview.html) complet. Mais l'ancien Assistant peut être utile s'il n'y a pas d'Assistant de navigateur pour votre navigateur. Si c’est votre cas, vous pouvez apprendre comment installer l'Assistant AdGuard sur [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Désactiver AMP

Un script préinstallé uniquement dans AdGuard pour Android. Il désactive AMP (Accelerated Mobile Pages - pages mobiles accélérées) sur la page de résultats de recherche Google. Apprenez plus sur ce script utilisateur et comment l'installer sur [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Désactiver AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Meilleurs choix en dehors d'AdGuard{#top-picks}

Ces scripts utilisateur ne sont pas développés par AdGuard, et nous ne pouvons donc pas garantir à 100 % qu'ils sont sûrs et/ou fonctionnent à tout moment. Cependant, d'après notre expérience, ils méritent une recommandation car ils ont tous gagné leur bonne réputation.

#### Don't track me Google

Ce script supprime la fonctionnalité de suivi de Google des liens dans les résultats de recherche Google. Il accélère le chargement des résultats de recherche et vous permet de cliquer ou d'appuyer avec le bouton droit pour copier l'URL du lien.

Son code source est [disponible sur GitHub](https://github.com/Rob--W/dont-track-me-google). Ce script utilisateur peut être téléchargé depuis [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) et installé dans n'importe quelle application basée sur AdGuard CoreLibs.

#### tinyShield

Un script utilisateur pour les personnes visitant des sites web coréens et certains sites web internationaux. Le script utilisateur tinyShield bloque les publicités Ad-Shield et les anti-adblock. Ce script utilisateur peut être installé dans les applications basées sur AdGuard CoreLibs, Violentmonkey, Tampermonkey et [quoid/scripts utilisateur](https://github.com/quoid/userscripts). Apprenez plus sur tinyShield et comment l'installer sur [GitHub](https://github.com/List-KR/tinyShield).

### Où trouver d'autres scripts utilisateur ?{#more-userscripts}

Les scripts utilisateur étant principalement créés par des passionnés, il faut être bien prudent lors de leur installation. Tout script provenant d'une source inconnue comporte un risque potentiel. Pourtant, il existe une grande variété de scripts intéressants qui, s’ils sont installés avec soin et de manière responsable, peuvent réellement rendre l’utilisation de certains sites web plus pratique.

Nous décrirons ici certains des catalogues de scripts utilisateur les plus populaires.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) est un site Web qui permet de rechercher des scripts utilisateur en saisissant une URL ou un domaine correspondant. Le site Web est facile à utiliser et bénéficie d'une grande crédibilité, car seuls les scripts provenant des pages modérées sont affichés.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) est un catalogue de scripts utilisateur réalisé par les créateurs de Stylish. Les scripts de ce catalogue sont modérés, leur crédibilité est donc beaucoup plus élevée.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) est un catalogue de scripts utilisateur open source écrit en nodeJS. Il n'est pas modéré, donc méfiez-vous des scripts suspects.

#### Communauté

Si vous appréciez l’idée de personnaliser votre navigateur avec des scripts utilisateur et vous avez encore des questions, vous pouvez les poser sur l’un de ces sites Web :

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Développement

#### Demande de licence

Si vous développez votre propre script utilisateur et souhaitez tester son fonctionnement avec AdGuard, vous pouvez demander une licence en remplissant [le formulaire](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Compatibilité

##### Bloc de métadonnées

###### Propriétés prises en charge

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

###### Propriétés non prises en charge

Ces propriétés seront simplement ignorées par AdGuard.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Fonctions GM prises en charge

AdGuard prend en charge à la fois les anciennes fonctions GM\_ et la nouvelle API GM4 qui utilisent l'objet GM.

:::note

Toutes les anciennes fonctions Greasemonkey répertoriées sont obsolètes mais toujours prises en charge.

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

Vous pouvez trouver plus d'informations sur l'API Greasemonkey dans [son manuel](https://wiki.greasespot.net/Greasemonkey_Manual:API).

#### Exemple

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

#### API Trusted Types

AdGuard fournit une instance de la classe `PolicyApi` qui vous permet de gérer les Trusted Types dans vos scripts utilisateur.

Vous pouvez accéder à l'instance de cette classe en utilisant la variable `ADG_policyApi` dans votre script utilisateur.

##### Propriétés

- `name: string` — un nom de politique (Par défaut, c'est `"AGPolicy"`).
- `isSupported: boolean` — un indicateur indiquant si oui ou non l'API Trusted Types est prise en charge par le navigateur actuel.

##### Méthodes polyfillées

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Si non pris en charge, renvoie `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). Si non pris en charge, renvoie `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Si non pris en charge, renvoie `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Si non pris en charge, renvoie `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Si non pris en charge, renvoie `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Si non pris en charge, renvoie `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Si non pris en charge, renvoie `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Si non pris en charge, renvoie `false`.

##### Types supplémentaires

```typescript
/**
 * Représentation Enum des valeurs de retour des méthodes `getAttributeType` et
 * `getPropertyType` de l'API native Trusted Types.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType}
 */
enum TrustedType {
    HTML = 'TrustedHTML',
    Script = 'TrustedScript',
    ScriptURL = 'TrustedScriptURL',
}

// Vous pouvez y accéder comme ça dans un script utilisateur
ADG_TrustedType.HTML // "TrustedHTML"

/**
 * Type de valeur de confiance isomorphe. Si un navigateur prend en charge l'API Trusted Types, il sera l'un des Trusted Types enum
 * (`TrustedHTML`, `TrustedScript` ou `TrustedScriptURL`); sinon, ce sera une chaîne `string` normale.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScript}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL}
 */
type TrustedValue = string | TrustedHTML | TrustedScript | TrustedScriptURL;
```

##### Méthodes supplémentaires

```typescript
/**
 * Crée un Trusted Type en fonction du `type` :
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - ou retourne `value` si aucun d'eux n'est applicable.
 *
 * @param type          Trusted Type.
 * @param value         Valeur à partir de laquelle un type de confiance est créé.
 * @param createArgs    Arguments supplémentaires à passer à la fonction représentée par `TrustedTypePolicy`.
 * @returns             Valeur créée.
 */
function create(
    type: TrustedType,
    value: string,
    ...createArgs: unknown[]
): TrustedValue


// Exemple : Crée TrustedHTML
const trustedHTML = ADG_policyApi.create(ADG_TrustedType.HTML, '<div></div>');

/**
 * Convertit `value` de `attribute` en un des Trusted Type :
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - ou retourne `value` si aucun d'eux n'est applicable.
 *
 * @param tagName       Nom d'une balise HTML.
 * @param attribute     Attribut.
 * @param value         Valeur d'un attribut à convertir.
 * @param elementNS     Espace de noms de l'élément. S'il est vide, il retourne à l'espace de noms HTML par défaut.
 * @param attrNS        Espace de noms de l'attribut. S'il est vide, il retourne à null.
 * @param createArgs    Arguments supplémentaires à passer à la fonction représentée par `TrustedTypePolicy`.
 * @returns             Valeur convertie.
 */
function convertAttributeToTrusted(
    tagName: string,
    attribute: string,
    value: string,
    elementNS?: string,
    attrNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Exemple : Convertit en TrustedScriptURL
const trustedScriptURL = ADG_policyApi.convertAttributeToTrusted("script", "src", 'SOME_URL');
scriptElement.setAttribute("src", trustedScriptURL);

/**
 * Convertit `value` de `property` en un des Trusted Type :
 * - `TrustedHTML`
 * - `TrustedScript`
 * - `TrustedScriptURL`
 * - ou retourne `value` si aucun d'eux n'est applicable.
 *
 * @param tagName       Nom d'une balise HTML.
 * @param property      Propriété.
 * @param value         Valeur d'une propriété à convertir.
 * @param elementNS     Espace de noms de l'élément. S'il est vide, il retourne à l'espace de noms HTML par défaut.
 * @param createArgs    Arguments supplémentaires à passer à la fonction représentée par `TrustedTypePolicy`.
 * @returns             Valeur convertie.
 */
function convertPropertyToTrusted(
    tagName: string,
    property: string,
    value: string,
    elementNS?: string,
    ...createArgs: unknown[]
): TrustedValue

// Exemple : Convertit en TrustedHTML
divElement.innerHTML = ADG_policyApi.convertPropertyToTrusted("div", "innerHTML", "<div></div>");
```

## Styles utilisateur

Les styles utilisateur permettent aux utilisateurs de modifier l'apparence des sites Web populaires.

AdGuard vous offre la possibilité de téléverser ou de créer des styles d'utilisateur personnalisés. Ceci est une fonctionnalité avancée, donc vous aurez besoin de certaines connaissances en HTML et CSS.

:::info Apps prises en charge

Actuellement, deux applications AdGuard vous permettent de créer et de gérer des styles d'utilisateur : AdGuard pour Windows (v7.19 ou version ultérieure) et AdGuard pour Mac (v2.16 ou version ultérieure). Nous prévoyons également de mettre en œuvre cette nouvelle fonctionnalité dans AdGuard v4.8 pour Android prochainement.

:::

Il s'agit d'une fonctionnalité expérimentale, donc si vous rencontrez des problèmes lors de l'ajout ou de la création d'un style utilisateur, veuillez contacter notre équipe d'assistance au <support@adguard.com>.

### Comment configurer un style utilisateur dans AdGuard

Vous pouvez télécharger des styles d'utilisateur à partir de divers sites Web. L'un des sites Web les plus populaires offrant des styles utilisateur est [https://userstyles.world/](https://userstyles.world/explore), que nous utiliserons comme exemple pour les instructions suivantes sur la façon de configurer les styles utilisateur dans AdGuard.

1. Suivez le lien ci-dessus et choisissez le style d'utilisateur qui vous convient

2. Cliquez sur _Copier_ à côté de l'adresse du style utilisateur

3. Ouvrez les paramètres AdGuard → _Extensions_

4. Appuyez sur le bouton [+] et collez le lien du style utilisateur

5. C'est fait !

Si vous connaissez les règles CSS, vous pouvez créer des styles utilisateur vous-même.

:::note

Nous ne prenons pas en charge les styles utilisateur qui contiennent `@var` ou `@advanced` dans les métadonnées. AdGuard ne prend pas non plus en charge `@preprocessor` sans la valeur `default`.

:::

1. Ouvrez les paramètres AdGuard → _Extensions_

2. Appuyez sur le bouton [+] et choisissez l'option _Créer un style utilisateur_. Une nouvelle fenêtre apparaîtra sur votre écran

3. Pour créer un style utilisateur, écrivez d'abord le titre avec des métadonnées, par exemple

 ```CSS
 /* ==UserStyle==
 @name New userstyle
 @version 1.0
 ==/UserStyle== */
 ```

4. Écrivez la partie CSS après les métadonnées. AdGuard prend en charge la correspondance des noms de domaine de sites web (`@-moz-document domain(…), …`). Par exemple :

 ```CSS
 body {
   background: gray;
   }
 ```

 Ou :

 ```CSS
 @-moz-document domain('example.org'),
 domain('example.net'),
 domain('example.com') body {
   background: gray;
   }
 ```

5. Dès que vous avez terminé, appuyez sur _Enregistrer et Fermer_. Votre nouveau style utilisateur a été ajouté à AdGuard

### Exemple

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
