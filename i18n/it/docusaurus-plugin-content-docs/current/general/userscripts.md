---
title: Userscripts
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Essi, modificano o estendono la funzionalità di uno o più siti web. Molti utenti di AdGuard potrebbero già essere a conoscenza di certi userscript, come AdGuard Assistant, Popup Blocker e AdGuard Extra.

:::note App supportate

AdGuard può ampliare significativamente la funzionalità del sito web, agendo da gestore di userscript. Puoi aggiungere i tuoi script personalizzati o gestire quelli esistenti nei nostri tre prodotti: [AdGuard per Windows](/adguard-for-windows/features/extensions), [AdGuard per Android](/adguard-for-android/features/settings#userscripts) e [AdGuard per Mac](/adguard-for-mac/features/extensions).

:::

## Script di AdGuard consigliati

Questi script utente provengono direttamente dagli sviluppatori di AdGuard e possiamo garantire che siano efficienti e sicuri. Per alcuni degli script utente sviluppati da altri che consideriamo buoni e affidabili, [scorri verso il basso fino alla sezione successiva](#top-picks). Di seguito puoi anche trovare alcuni dei [siti web popolari con script](#more-userscripts), ma ricorda che ogni volta che scarichi uno script utente da una fonte sconosciuta, ti esponi a un certo rischio, poiché alcuni script potrebbero essere dannosi al tuo computer.

### AdGuard Extra

C'è un'estensione che blocca gli annunci in casi difficili, quando il solito approccio basato sui filtri non è sufficiente. AdGuard Extra è preinstallato in tutte le versioni premium di AdGuard, quindi, non devi fare nulla per abilitarla. Tuttavia, se desideri utilizzarla insieme all'Estensione di browser AdGuard o qualsiasi altro bloccatore di annunci, dovrai utilizzare un'ulteriore estensione. Scopri di più su questo script utente e su come installarlo, su [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard Popup Blocker

Il nome dice tutto: blocca i popup, uno dei tipi più fastidiosi di annunci sulle pagine web. Scopri di più su questo script utente, sulle sue funzionalità principali e su come installarlo, su [GitHub](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard Assistant (versione ereditaria)

Questa estensione personalizzata è progettata per controllare il filtraggio direttamente dalla pagina web (blocco manuale, esclusione del sito, etc.).

:::note

Questa versione di Assistant è ereditaria e non ha senso utilizzarla sui nuovi sistemi, poiché è stata sostituita dalla versione completa di [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). Ma l'Assistant ereditario potrebbe tornare utile se non esiste alcun Browser Assistant per il tuo browser. Se questo è il tuo caso, puoi scoprire come installare AdGuard Assistant su [GitHub](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Disable AMP

Uno script preinstallato soltanto su AdGuard per Android. Disabilita AMP (Pagine Mobili Accelerate) sulla pagina dei risultati di ricerca di Google. Scopri di più su questo script utente e su come installarlo, su [GitHub](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Le migliori scelte al di fuori di AdGuard{#top-picks}

Questi script utente non sono sviluppati da AdGuard e quindi non possiamo garantire al 100% che siano sicuri e/o funzionino sempre. Tuttavia, secondo la nostra esperienza, meritano una raccomandazione poiché si sono tutti guadagnati una buona reputazione.

### Don't track me Google

Questo script rimuove la funzionalità di monitoraggio di Google dai collegamenti nei risultati di ricerca di Google. Accelera il caricamento dei risultati di ricerca e consente di fare clic con il pulsante destro del mouse o toccare per copiare l'URL del collegamento.

Il suo codice sorgente è [disponibile su GitHub](https://github.com/Rob--W/dont-track-me-google). Questo script utente può essere scaricato da [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) e installato in qualsiasi app basata su AdGuard CoreLibs.

### microShield

Uno script utente per coloro che visitano siti web coreani e alcuni siti web internazionali. Lo script utente microShield blocca gli annunci di Ad-Shield e l'anti-blocco degli annunci. Il suo codice sorgente originali è disponibile su [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) e su [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Questo script utente si può installare nelle app basate su AdGuard CoreLibs, Violentmonkey, Tampermonkey e [quoid/userscripts](https://github.com/quoid/userscripts). Scopri di più su microShield e su come installarlo su [GitHub](https://github.com/List-KR/microShield).

## Dove puoi ottenere altri userscript?{#more-userscripts}

Poiché gli script utente sono creati principalmente da appassionati, dovresti essere cauto quando li installi. Qualsiasi script proveniente da una fonte sconosciuta comporta un potenziale rischio. Tuttavia, esiste una grande varietà di script interessanti che, se installati con attenzione e responsabilità, possono davvero rendere più conveniente l'utilizzo di alcuni siti web.

Qui, descriveremo alcuni dei cataloghi di userscript più popolari.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) è un catalogo di userscript dai creatori di Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) è un catalogo di userscript open source, scritto in nodeJS. Non prevede moderazione, quindi stai attento a eventuali script sospetti.

### Comunità

Se ti piace l'idea di personalizzare il tuo browser con l'aiuto degli userscript e hai qualsiasi domanda, puoi porle su uno di questi siti web:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Sviluppo

### Richiedi la licenza

Se stai sviluppando il tuo script personalizzato e desideri testare come funziona con AdGuard, richiedi una chiave di licenza beta per l'app.

Per ottenerla, sei pregato di inviare un'email a devteam@adguard.com con le seguenti informazioni:

**Soggetto:** Userscript author license request

**Corpo:** Sei pregato di parlarci degli userscript a cui stai lavorando.

Ecco il [link per inviare la mail](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Compatibilità

#### Blocco dei metadati

##### Proprietà supportate

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

##### Proprietà non supportate

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Funzioni GM supportate

AdGuard supporta sia le vecchie funzionalità GM\_ che la nuova API GM4, che utilizza l'oggetto GM.

##### Valori

:::note

Tutte le funzionalità di Greasemonkey elencate sono deprecate, ma ancora supportate.

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

[Qui](https://wiki.greasespot.net/GM.info) puoi trovare ulteriori informazioni sull'API di Greasemonkey.

### Esempio

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
