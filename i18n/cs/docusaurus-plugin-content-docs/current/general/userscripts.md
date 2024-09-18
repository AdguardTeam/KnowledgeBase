---
title: Uživatelské skripty
sidebar_position: 5
toc_max_heading_level: 4
---

Userscripts (we also call them "extensions") are, de facto, miniprograms written in JavaScript. Upravují nebo rozšiřují funkce jedné nebo více webových stránek. Mnoho uživatelů AdGuardu již možná zná uživatelské skripty jako AdGuard asistent, Blokátor vyskakovacích oken a AdGuard Extra.

:::notePodporované aplikace

AdGuard může výrazně rozšířit funkčnost webových stránek tím, že funguje jako správce uživatelských skriptů. V našich třech produktech můžete přidávat vlastní skripty nebo spravovat ty stávající: [AdGuard pro Windows](/adguard-for-windows/features/extensions), [AdGuard pro Android](/adguard-for-android/features/settings#userscripts) a [AdGuard pro macOS](/adguard-for-mac/features/extensions).

:::

## Doporučené skripty AdGuardu

Tyto uživatelské skripty pocházejí přímo od vývojářů AdGuardu a můžeme zaručit, že jsou účinné a bezpečné. For some of the userscripts developed by others that we consider good and reliable, [scroll down to the next section](#top-picks). You can also find some of the [popular websites with scripts](#more-userscripts) below, but remember that whenever you download a userscript from an unknown source, you expose yourself to a certain risk, as some scripts may be harmful to your computer.

### AdGuard Extra

Rozšíření, které blokuje reklamu v obtížných případech, kdy běžný přístup založený na filtru nestačí. AdGuard Extra je předinstalován ve všech prémiových verzích AdGuardu, takže pro jeho aktivaci nemusíte nic dělat. Pokud jej však chcete používat společně s Rozšířením prohlížeče AdGuard nebo jiným blokátorem reklam, musíte použít další rozšíření. Více informací o tomto uživatelském skriptu a jeho instalaci najdete na [GitHubu](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

### AdGuard blokátor vyskakovacích oken

Název mluví sám za sebe: blokuje vyskakovací okna — jeden z nejotravnějších typů reklam na webových stránkách. Více informací o tomto uživatelském skriptu, jeho klíčových funkcích a o tom, jak jej nainstalovat najdete na [GitHubu](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard blokátor vyskakovacích oken](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

### AdGuard asistent (starší verze)

Toto vlastní rozšíření je určeno k ovládání filtrování přímo ze stránky prohlížeče (ruční blokování, vyloučení webu atd.).

:::note

Tato verze Asistenta je starší a nemá smysl ji používat v nových systémech, protože byla nahrazena plnohodnotným [Asistentem prohlížeče](https://adguard.com/adguard-assistant/overview.html). Pokud však pro váš prohlížeč neexistuje Asistent prohlížeče, může vám pomoci starší asistent. Pokud je to váš případ, můžete se dozvědět, jak nainstalovat AdGuard asistent na [GitHubu](https://github.com/AdguardTeam/AdguardAssistant).

:::

### Zakázat AMP

Skript, který je předinstalován pouze v aplikaci AdGuard pro Android. Zakáže AMP (Accelerated Mobile Pages) na stránce s výsledky vyhledávání Google. Více informací o tomto uživatelském skriptu a jeho instalaci najdete na [GitHubu](https://github.com/AdguardTeam/DisableAMP).

![Zakázat AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

## Top picks outside AdGuard{#top-picks}

These userscripts are not developed by AdGuard and therefore we can't give a 100% guarantee that they are safe and/or work at all times. However, in our experience they deserve a recommendation as they've all earned their good reputation.

### Don't track me Google

This script removes Google's tracking feature from the links in Google search results. It speeds up the loading of search results and allows you to right-click or tap to copy the link URL.

Its source code is [available on GitHub](https://github.com/Rob--W/dont-track-me-google). This userscript can be downloaded from [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) and installed in any AdGuard CoreLibs-based app.

### microShield

Uživatelský skript pro lidi, kteří navštěvují korejské a některé mezinárodní webové stránky. Uživatelský skript microShield blokuje Ad-Shield a anti-adblock. Jeho původní zdrojový kód je k dispozici na [asdefuser](https://github.com/seia-soto/userscripts/tree/master/sources/asdefuser) a [AdShield Defuser](https://github.com/seia-soto/adshield-defuser). Tento uživatelský skript lze nainstalovat v AdGuard CoreLibs, Violentmonkey, Tampermonkey a [quoid/userscripts](https://github.com/quoid/userscripts). Více informací o tomto uživatelském skriptu a jeho instalaci najdete na [GitHubu](https://github.com/List-KR/microShield).

## Kde můžete získat další uživatelské skripty?{#more-userscripts}

As userscripts are mainly created by enthusiasts, you should be cautious when installing them. Any script from an unknown source carries a potential risk. Yet, there is a great variety of interesting scripts that, if installed carefully and responsibly, can really make using some websites more convenient.

Zde popíšeme některé z nejoblíbenějších katalogů uživatelských skriptů.

### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) is a website that allows searching for userscripts by entering a matching URL or domain. The website is easy to use and has a high credibility, since only scripts from moderated pages are displayed.

### Greasy Fork

[Greasy Fork](https://greasyfork.org/) je katalog uživatelských skriptů od tvůrců Stylish. The scripts in this catalog undergo moderation, so their credibility is much higher.

### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) je open source katalog uživatelských skriptů napsaný v nodeJS. Není moderován, takže si dávejte pozor na podezřelé skripty.

### Komunita

Pokud se vám myšlenka personifikace prohlížeče pomocí uživatelských skriptů líbí a máte nějaké dotazy, můžete je položit na jedné z těchto webových stránek:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

## Vývoj

### Žádost o licenci

Pokud vyvíjíte vlastní skript a chcete si vyzkoušet, jak s AdGuardem funguje, požádejte o licenční klíč pro beta verzi aplikace.

Chcete-li ji získat, zašlete e-mail na adresu devteam@adguard.com a uveďte následující informace:

**Předmět:** Žádost o autorskou licenci uživatelského skriptu

**Popis:** Řekněte nám prosím o uživatelských skriptech, na kterých pracujete.

Zde je [odkaz](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

### Kompatibilita

#### Blokování metadat

##### Podporované vlastnosti

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

##### Nepodporované vlastnosti

These properties will be simply ignored by AdGuard.

```text
@unwrap
```

#### Podporované funkce GM

AdGuard podporuje jak staré funkce GM\_, tak nové rozhraní GM4 API, které používá objekt GM.

##### Hodnoty

:::note

Všechny uvedené staré funkce Greasemonkey jsou zastaralé, ale stále podporované.

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

[Zde](https://wiki.greasespot.net/GM.info) najdete další informace o rozhraní Greasemonkey API.

### Příklad

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
