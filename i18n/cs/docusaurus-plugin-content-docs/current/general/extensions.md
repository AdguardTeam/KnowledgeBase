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

##### Blokování metadat

###### Podporované vlastnosti

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

###### Nepodporované vlastnosti

Tyto vlastnosti bude AdGuard jednoduše ignorovat.

- [`@unwrap`](https://www.tampermonkey.net/documentation.php#meta:unwrap)

##### Podporované funkce GM

AdGuard podporuje jak staré funkce GM\_, tak nové rozhraní GM4 API, které používá objekt GM.

:::note

Všechny uvedené staré funkce Greasemonkey jsou zastaralé, ale stále podporované.

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

Další informace o Greasemonkey API najdete v [jeho příručce](https://wiki.greasespot.net/Greasemonkey_Manual:API).

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
// @grant           GM_addElement
// @run-at          document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```

#### Důvěryhodné typy API

AdGuard poskytuje instanci třídu `PolicyApi`, která umožňuje spravovat důvěryhodné typy v uživatelských skriptech.

K instanci této třídy můžete přistupovat pomocí proměnné `ADG_policyApi` v uživatelském skriptu.

##### Vlastnosti

- `name: string` — název zásady (výchozí je `"AGPolicy"`).
- `isSupported: boolean` — příznak určující, zda je rozhraní API důvěryhodných typů podporováno aktuálním prohlížečem.

##### Metody s vícenásobným plněním

- [`ADG_policyApi.createHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createHTML). Pokud není podporováno, vrací `input: string`.
- [`ADG_policyApi.createScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScript). Pokud není podporováno, vrací `input: string`.
- [`ADG_policyApi.createScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy/createScriptURL). Pokud není podporováno, vrací `input: string`.
- [`ADG_policyApi.getAttributeType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getAttributeType). Pokud není podporováno, vrací `null`.
- [`ADG_policyApi.getPropertyType`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/getPropertyType). Pokud není podporováno, vrací `null`.
- [`ADG_policyApi.isHTML`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isHTML). Pokud není podporováno, vrací `false`.
- [`ADG_policyApi.isScript`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScript). Pokud není podporováno, vrací `false`.
- [`ADG_policyApi.isScriptURL`](https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicyFactory/isScriptURL). Pokud není podporováno, vrací `false`.

##### Další typy

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

##### Další metody

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

## Uživatelské styly

Uživatelské styly umožňují uživatelům změnit vzhled oblíbených webových stránek.

AdGuard má možnost nahrát nebo vytvořit vlastní uživatelské styly. Jedná se o pokročilou funkci, takže budete potřebovat určité znalosti HTML a CSS.

:::info Podporované aplikace

V současné době umožňují vytvářet a spravovat uživatelské styly dvě aplikace AdGuard: AdGuard pro Windows (verze 7.19 nebo novější) a AdGuard pro macOS (verze 2.16 nebo novější). Tuto novou funkci plánujeme v nejbližší době implementovat také do AdGuardu pro Android v4.8.

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
