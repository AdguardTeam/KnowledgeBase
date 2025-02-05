---
title: Rozšíření
sidebar_position: 6
---

## Uživatelské skripty

Uživatelské skripty (říkáme jim také "rozšíření") jsou de facto miniprogramy napsané v jazyce JavaScript. Upravují nebo rozšiřují funkce jedné nebo více webových stránek. Mnoho uživatelů AdGuardu již možná zná uživatelské skripty jako AdGuard asistent, Blokátor vyskakovacích oken a AdGuard Extra.

:::note Podporované aplikace

AdGuard může výrazně rozšířit funkčnost webových stránek tím, že funguje jako správce uživatelských skriptů. V našich třech produktech můžete přidávat vlastní skripty nebo spravovat ty stávající: [AdGuard pro Windows](/adguard-for-windows/features/extensions), [AdGuard pro Android](/adguard-for-android/features/settings#userscripts) a [AdGuard pro macOS](/adguard-for-mac/features/extensions).

:::

### Doporučené skripty AdGuardu

Tyto uživatelské skripty pocházejí přímo od vývojářů AdGuardu a můžeme zaručit, že jsou účinné a bezpečné. Některé uživatelské skripty vyvinuté jinými uživateli, které považujeme za dobré a spolehlivé, najdete [v další další sekci](#top-picks). Níže najdete také některé z [populárních webových stránek se skripty](#more-userscripts), ale nezapomeňte, že kdykoli stahujete uživatelský skript z neznámého zdroje, vystavujete se určitému riziku, protože některé skripty mohou být pro váš počítač škodlivé.

#### AdGuard Extra

Rozšíření, které blokuje reklamu v obtížných případech, kdy běžný přístup založený na filtru nestačí. AdGuard Extra je předinstalován v samostatných aplikacích AdGuard, s výjimkou aplikace pro iOS, takže pro jeho aktivaci nemusíte nic dělat. Pokud jej však chcete používat společně s Rozšířením prohlížeče AdGuard nebo jiným blokátorem reklam, musíte použít další rozšíření. Více informací o tomto uživatelském skriptu a jeho instalaci najdete na [GitHub](https://github.com/AdguardTeam/AdGuardExtra).

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard blokátor vyskakovacích oken

Název mluví sám za sebe: blokuje vyskakovací okna — jeden z nejotravnějších typů reklam na webových stránkách. Více informací o tomto uživatelském skriptu, jeho klíčových funkcích a instalaci najdete na [GitHubu](https://github.com/AdguardTeam/PopupBlocker).

![AdGuard Popup Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard asistent (starší verze)

Toto vlastní rozšíření je určeno k ovládání filtrování přímo ze stránky prohlížeče (ruční blokování, vyloučení webu atd.).

:::note

Tato verze Asistenta je starší a nemá smysl ji používat v nových systémech, protože byla nahrazena plnohodnotným [Asistentem prohlížeče](https://adguard.com/adguard-assistant/overview.html). Starší asistent však může být užitečný, pokud pro váš prohlížeč není k dispozici asistent prohlížeče. Pokud je to váš případ, můžete se dozvědět, jak nainstalovat Asistenta AdGuard na [GitHubu](https://github.com/AdguardTeam/AdguardAssistant).

:::

#### Zakázat AMP

Skript, který je předinstalován pouze v aplikaci AdGuard pro Android. Zakáže AMP (Accelerated Mobile Pages) na stránce s výsledky vyhledávání Google. Více informací o tomto uživatelském skriptu a jeho instalaci najdete na [GitHubu](https://github.com/AdguardTeam/DisableAMP).

![Disable AMP](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Nejlepší výběry mimo AdGuard{#top-picks}

Tyto uživatelské skripty nebyly vyvinuty AdGuardem, a proto nemůžeme poskytnout 100% záruku, že jsou bezpečné a/nebo vždy fungují. Podle našich zkušeností si však doporučení zaslouží, protože všechny si svou dobrou pověst zaslouží.

#### Don't track me Google

Tento skript odstraní z odkazů ve výsledcích vyhledávání Google funkci sledování. Urychluje načítání výsledků vyhledávání a umožňuje kliknutím pravým tlačítkem myši nebo klepnutím zkopírovat adresu URL odkazu.

Jeho zdrojový kód je [k dispozici na GitHubu](https://github.com/Rob--W/dont-track-me-google). Tento uživatelský skript lze stáhnout ze stránek [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) a nainstalovat do libovolné aplikace založené na AdGuard CoreLibs.

#### tinyShield

Uživatelský skript pro lidi, kteří navštěvují korejské a některé mezinárodní webové stránky. Uživatelský skript tinyShield blokuje Ad-Shield a anti-adblock. Tento uživatelský skript lze nainstalovat v AdGuard CoreLibs, Violentmonkey, Tampermonkey a [quoid/userscripts](https://github.com/quoid/userscripts). Více informací o skriptu microShield a jeho instalaci najdete na [GitHubu](https://github.com/List-KR/tinyShield).

### Kde můžete získat další uživatelské skripty?{#more-userscripts}

Protože uživatelské skripty vytvářejí především nadšenci, měli byste být při jejich instalaci opatrní. Každý skript z neznámého zdroje představuje potenciální riziko. Přesto existuje celá řada zajímavých skriptů, které při pečlivé a zodpovědné instalaci mohou skutečně zpříjemnit používání některých webových stránek.

Zde popíšeme některé z nejoblíbenějších katalogů uživatelských skriptů.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) je webová stránka, která umožňuje vyhledávat uživatelské skripty zadáním odpovídající adresy URL nebo domény. Webové stránky se snadno používají a mají vysokou úroveň důvěryhodnosti, protože se na nich zobrazují pouze skripty z moderovaných stránek.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) je katalog uživatelských skriptů tvůrců Stylish. Skripty v tomto katalogu jsou moderovany, takže jejich důvěryhodnost je mnohem vyšší.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) je open-source katalog uživatelských skriptů napsaný v nodeJS. Není moderován, takže si dávejte pozor na podezřelé skripty.

#### Komunita

Pokud se vám líbí myšlenka přizpůsobení prohlížeče pomocí uživatelských skriptů a máte dotazy, můžete je položit na jedné z těchto webových stránek:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Vývoj

#### Žádost o licenci

Pokud vyvíjíte vlastní uživatelský skript a chcete si vyzkoušet, jak funguje s AdGuardem, můžete požádat o licenci vyplněním [formuláře](https://surveys.adguard.com/en/for_developers_request/form.html).

#### Kompatibilita

#### Blokování metadat

#### Podporované vlastnosti

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

#### Nepodporované vlastnosti

Tyto vlastnosti bude AdGuard jednoduše ignorovat.

```text
@unwrap
```

#### Podporované funkce GM

AdGuard podporuje jak staré funkce GM\_, tak nové rozhraní GM4 API, které používá objekt GM.

#### Hodnoty

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

#### Příklad

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

## Uživatelské styly

Uživatelské styly umožňují uživatelům změnit vzhled oblíbených webových stránek.

AdGuard má možnost nahrát nebo vytvořit vlastní uživatelské styly. Jedná se o pokročilou funkci, takže budete potřebovat určité znalosti HTML a CSS.

:::info Podporované aplikace

V současné době umožňují vytvářet a spravovat uživatelské styly dvě aplikace AdGuard: AdGuard pro Windows (verze 7.19 nebo novější) a AdGuard pro macOS (verze 2.16 nebo novější). Tuto novou funkci plánujeme v nejbližší době implementovat také do AdGuardu v4.8 pro Android.

:::

Jedná se o experimentální funkci, takže pokud se při přidávání nebo vytváření uživatelského stylu setkáte s jakýmikoli problémy, kontaktujte prosím náš tým podpory na <support@adguard.com>.

### Jak nastavit uživatelský styl v AdGuardu

Uživatelské styly si můžete stáhnout z různých webových stránek. Jednou z nejoblíbenějších webových stránek s uživatelskými styly je [https://userstyles.world/](https://userstyles.world/explore), kterou použijeme jako příklad pro následující pokyny, jak nastavit uživatelský styl v AdGuardu.

1. Přejděte na výše uvedený odkaz a vyberte si uživatelský styl, který se vám líbí

2. Klikněte na _Kopírovat_ vedle adresy uživatelského stylu

3. Otevřete nastavení AdGuardu → _Rozšíření_

4. Stiskněte tlačítko [+] a vložte odkaz na uživatelský styl

5. Hotovo!

Pokud znáte pravidla CSS, můžete si uživatelské styly vytvořit sami.

:::note

Nepodporujeme uživatelské styly, které v metadatech obsahují `@var` nebo `@advanced`. AdGuard také nepodporuje `@preprocessor` bez hodnoty `default`.

:::

1. Otevřete nastavení AdGuardu → _Rozšíření_

2. Stiskněte tlačítko [+] a vyberte možnost _Vytvořit uživatelský styl_. Na obrazovce se zobrazí nové okno

3. Chcete-li vytvořit uživatelský styl, napište nejprve název s metadaty, např.

   ```CSS
   /* ==UserStyle==
   @name New userstyle
   @version 1.0
   ==/UserStyle== */
   ```

4. Část CSS zapište až za metadata. AdGuard podporuje porovnávání názvů domén webových stránek (`@-moz-document domain(...), ...`). Např:

   ```CSS
   body {
     background: gray;
     }
   ```

   nebo:

   ```CSS
   @-moz-document domain('example.org'),
   domain('example.net'),
   domain('example.com') body {
     background: gray;
     }
   ```

5. Po dokončení stiskněte tlačítko _Uložit a zavřít_. Váš nový uživatelský styl byl úspěšně přidán do AdGuardu

### Příklad

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
