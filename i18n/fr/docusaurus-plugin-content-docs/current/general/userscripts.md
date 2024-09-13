---
title: Scripts utilisateur
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Ils modifient ou élargissent les fonctionnalités d'un ou plusieurs sites web. De nombreux utilisateurs d'AdGuard sont peut-être déjà familiers avec des scripts utilisateur tels que AdGuard Assistant, Popup Blocker et AdGuard Extra.

:::note Applications prises en charge

AdGuard peut accroître considérablement les fonctionnalités des sites web en agissant comme un gestionnaire de scripts utilisateur. Vous pouvez ajouter vos scripts personnalisés ou gérer ceux existants dans nos trois produits : [AdGuard pour Windows](/adguard-for-windows/features/extensions), [AdGuard pour Android](/adguard-for-android/features/settings#userscripts)et [AdGuard pour Mac](/adguard-for-mac/features/extensions).

:::

## Scripts AdGuard recommandés

Ces scripts utilisateur proviennent directement des développeurs AdGuard et nous pouvons garantir qu'ils sont efficaces et sûrs. Pour certains des scripts utilisateur développés par d'autres que nous considérons comme bons et fiables, [faites défiler jusqu'à la section suivante](#top-picks). Vous pouvez également trouver ci-dessous certains des [sites web populaires avec des scripts](#more-userscripts) , mais n'oubliez pas que chaque fois que vous téléchargez un script utilisateur à partir d'une source inconnue, vous vous exposez à un certain risque, car certains scripts peuvent être dangereux pour votre ordinateur.

### AdGuard Extra

Une extension qui bloque les publicités dans les cas difficiles où l'approche habituelle basée sur les filtres ne suffit pas. AdGuard Extra est préinstallée avec toutes les versions premium d'AdGuard, vous n'avez donc rien à faire pour l'activer. Cependant, si vous souhaitez l'utiliser avec l'extension de navigateur AdGuard ou tout autre bloqueur de publicités, vous devrez utiliser une extension supplémentaire. Apprenez-en plus sur ce script utilisateur et comment l'installer sur [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### Bloqueur AdGuard de fenêtres pop-up

Le nom parle de lui-même : il bloque les pop-ups, l'un des types de publicités les plus agaçants sur les pages web. Pour apprendre plus sur ce script utilisateur, ses principales fonctionnalités et la manière de l'installer, consultez [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![Bloqueur AdGuard de fenêtres pop-up](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### Assistant AdGuard (ancienne version)

Cette extension personnalisée est conçue pour contrôler le filtrage directement depuis la page du navigateur (blocage manuel, exclusion du site, etc.).

:::note

Cette version de l'assistant est obsolète et inutile à utiliser sur les nouveaux systèmes, puisqu'elle a été remplacée par l'[Assistant de navigateur](https://adguard.com/adguard-assistant/overview.html) complet séparé. Mais l'ancien Assistant peut être utile s'il n'y a pas d'Assistant de navigateur pour votre navigateur. Si c’est votre cas, vous pouvez apprendre comment installer l'Assistant AdGuard sur [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Désactiver AMP

Un script préinstallé uniquement dans AdGuard pour Android. Il désactive AMP (Accelerated Mobile Pages - pages mobiles accélérées) sur la page de résultats de recherche Google. Apprenez plus sur ce script utilisateur et comment l'installer sur [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Désactiver AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Meilleurs choix en dehors d'AdGuard{#top-picks}

Ces scripts utilisateur ne sont pas développés par AdGuard et nous ne pouvons donc pas garantir à 100 % qu'ils sont sûrs et/ou fonctionnent à tout moment. Cependant, d'après notre expérience, ils méritent une recommandation car ils ont tous gagné leur bonne réputation.

### Don't track me Google

Ce script supprime la fonctionnalité de suivi de Google des liens dans les résultats de recherche Google. Il accélère le chargement des résultats de recherche et vous permet de cliquer ou d'appuyer avec le bouton droit pour copier l'URL du lien.

Son code source est [disponible sur GitHub](https://github.com/Rob--W/dont-track-me-google). Ce script utilisateur peut être téléchargé depuis [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) et installé dans n'importe quelle application basée sur AdGuard CoreLibs.

### microShield

Un script utilisateur pour les personnes qui visitent des sites web coréens et certains sites web internationaux. Le script utilisateur microShield bloque la publicité Ad-Shield et l'anti-adblock. Son code source d'origine est disponible sur [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) et [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Ce script utilisateur peut être installé dans les applications basées sur AdGuard CoreLibs, Violentmonkey, Tampermonkey et [quoid/userscripts](https://github.com/quoid/userscripts). Apprenez-en davantage sur microShield et comment l'installer sur [GitHub](https://github.com/List-KR/microShield).

## Où trouver d'autres scripts utilisateur ?{#more-userscripts}

Les userscripts étant principalement créés par des passionnés, il faut être bien prudent lors de leur installation. Tout script provenant d'une source inconnue comporte un risque potentiel. Pourtant, il existe une grande variété de scripts intéressants qui, s’ils sont installés avec soin et de manière responsable, peuvent réellement rendre l’utilisation de certains sites web plus pratique.

Nous décrirons ici certains des catalogues de scripts utilisateur les plus populaires.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) est un catalogue de scripts utilisateur réalisé par les créateurs de Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) est un catalogue de scripts utilisateur open source écrit en nodeJS. Il n'y a pas de modération, alors restez attentif à tout script suspect.

### Communauté

Si vous aimez l’idée de personnifier votre navigateur à l’aide de scripts utilisateur et vous avez des questions, vous pouvez les poser sur l’un de ces sites :

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Développement

### Demande de licence

Si vous développez votre propre script personnalisé et souhaitez tester son fonctionnement avec AdGuard, demandez une clef de licence bêta pour l'application.

Pour l'obtenir, veuillez envoyer un email à devteam@adguard.com avec les informations suivantes :

**Objet :** Userscript author license request

**Message :** Veuillez nous parler des scripts utilisateur sur lesquels vous travaillez.

Voici un [lien d'envoi d'email](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Compatibilité

#### Bloc de métadonnées

##### Propriétés prises en charge

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

##### Propriétés non prises en charge

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Fonctions GM prises en charge

AdGuard prend en charge à la fois les anciennes fonctions GM\_ et la nouvelle API GM4 qui utilisent l'objet GM.

##### Valeurs

:::note

Toutes les anciennes fonctions Greasemonkey répertoriées sont obsolètes mais toujours prises en charge.

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

Vous trouverez [ici](https://wiki.greasespot.net/GM.info) plus d'informations sur l'API Greasemonkey.

### Exemple

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
