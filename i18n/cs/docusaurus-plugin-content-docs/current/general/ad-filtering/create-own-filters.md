---
title: Jak vytvořit vaše vlastní filtry reklam
sidebar_position: 5
---

Filtr je sada pravidel filtrování aplikovaných na konkrétní obsah, například bannery nebo vyskakovací okna. AdGuard má seznam standardních filtrů vytvořených naším týmem. Neustále je vylepšujeme, aktualizujeme a snažíme se vyhovět potřebám většiny našich uživatelů.

AdGuard zároveň umožňuje vytvářet vlastní filtry pomocí stejných typů pravidel, které máme v našich filtrech.

K popisu syntaxe našich pravidel filtrování používáme [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), ale ne vždy se touto specifikací striktně řídíme.

> Původně byla syntaxe AdGuardu založena na syntaxi pravidel Adblock Plus. Později jsme ji rozšířili o nové typy pravidel pro lepší filtrování reklam. Některé části tohoto článku o pravidlech společných pro AdGuard i ABP byly převzaty z [tohoto článku](https://adblockplus.org/en/filters).

## Komentáře

Každý řádek začínající vykřičníkem je komentář. V seznamu pravidel je zobrazen šedou barvou. AdGuard bude tento řádek ignorovat, takže můžete napsat cokoli chcete. Komentáře se obvykle umísťují nad pravidla a slouží k popisu toho, co pravidlo dělá.

Např:

```
! Toto je komentář. Pod tímto řádkem se nachází skutečné pravidlo filtrování.
||example.org^
```

## Příklady

#### Blokování podle názvu domény

![Blocking by domain name](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/0_blocking_domain.svg)

**Toto pravidlo blokuje:**

* `http://example.org/ad1.gif`
* `http://subdomain.example.org/ad1.gif`
* `https://ads.example.org:8000/`

**Toto pravidlo neblokuje:**

* `http://ads.example.org.us/ad1.gif`
* `http://example.com/redirect/http://ads.example.org/`

#### Blokování přesné adresy

![Blocking exact address](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/1_exact_address.svg)

**Toto pravidlo blokuje:**

* `http://example.org/`

**Toto pravidlo neblokuje:**

* `https://example.org/banner/img`

#### Modifikátory základních pravidel

Pravidla filtrování podporují řadu modifikátorů, které umožňují doladit chování pravidla. Zde je příklad pravidla s několika jednoduchými modifikátory.

![Basic rule modifiers](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/2_basic_rule_options.svg)

**Toto pravidlo blokuje:**

* `http://example.org/script.js`, pokud je tento skript načten z `example.com`.

**Toto pravidlo neblokuje:**

* `https://example.org/script.js`, pokud je tento skript načten z `example.org`.
* `https://example.org/banner.png`, protože se nejedná o skript.

#### Odblokování adresy

![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/3_basic_exception.svg)

**Toto pravidlo odblokuje:**

* `http://example.org/banner.png`, i když pro tuto adresu existuje pravidlo blokování.

> Pravidla blokování s modifikátorem [`$important`](#important-modifier) mohou přepsat výjimky.

#### Odblokování všeho na webové stránce

![Unblocking everything](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/4_unblock_entire_website.svg)

**Toto pravidlo odblokuje**

* Zakáže všechna kosmetická pravidla na `example.com`.
* Odblokuje všechny požadavky odeslané z této webové stránky, i když existují pravidla blokování odpovídající těmto požadavkům.

#### Kosmetické pravidlo

![Cosmetic rule](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/5_cosmetic_rules.svg)

Kosmetická pravidla jsou založena na použití speciálního jazyka CSS, kterému rozumí každý prohlížeč. V podstatě přidává na webové stránky nový styl CSS, jehož účelem je skrýt určité prvky. Více o CSS obecně se můžete dozvědět [zde](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

> AdGuard [rozšiřuje CSS](#extended-css-selectors) a umožňuje tak vývojářům filtrů řešit mnohem složitější případy. Abyste však mohli tato rozšířená pravidla používat, musíte ovládat běžný jazyk CSS.

**Oblíbené selektory CSS**

| Název                        | Selektor CSS                     | Popis                                                                                                                                                                                     |
| ---------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID selector                  | `#banners`                       | Matches all elements with `id` attribute equal to `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png)                                  |
| Class selector               | `.banners`                       | Matches all elements with `class` attribute containing `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png)                          |
| Attribute selector           | `div[class="banners"]`           | Matches all `div` elements with `class` attribute **exactly equal** to `banners`.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png)              |
| Attribute substring selector | `div[class^="advert1"]`          | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`      | Matches all `div` elements which `class` attribute **ends with** the `banners_ads` string.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Attribute substring selector | `a[href^="http://example.com/"]` | Matches all links that are loaded from `http://example.com/` domain.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png)                           |
| Attribute selector           | `a[href="http://example.com/"]`  | Matches all links to **exactly** the `http://example.com/` address.<br/>![](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png)                            |

## Omezení

#### Důvěryhodné filtry {#trusted-filters}

Některá pravidla lze použít pouze v důvěryhodných filtrech. Tato kategorie zahrnuje:
> * seznamy filtrů [vytvořené týmem AdGuard](../adguard-filters),
> * seznamy vlastních filtrů nainstalované jako `trusted`,
> * uživatelská pravidla.

## Základní pravidla

Nejjednoduššími pravidly jsou tzv. *základní pravidla*. Slouží k blokování požadavků na konkrétní adresy URL. Nebo je odblokují, pokud je na začátku pravidla speciální znak "@@". Základní princip tohoto typu pravidel je poměrně jednoduchý: je třeba zadat adresu a další parametry, které omezují nebo rozšiřují rozsah pravidla.

> **Dílčí požadavky**
> 
> Základní pravidla pro blokování požadavků se vztahují pouze na **dílčí požadavky**. To znamená, že nebudou blokovat načítání stránky.

> **Stav odpovědi**
> 
> Prohlížeč rozpozná zablokovaný požadavek jako dokončený s chybou.

### Syntaxe základních pravidel {#basic-rules-syntax}

```
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* **`pattern`** — maska adresy. Každá adresa URL požadavku je přiřazena k této masce. V šabloně můžete použít i speciální znaky, jejichž popis je uveden [pod tímto odkazem](#basic-rules-special-characters). Vezměte na vědomí, že AdGuard zkracuje adresy URL na délku 4096 znaků, aby urychlil porovnávání a předešel problémům s nesmyslně dlouhými adresami URL.
* **`@@`** — znak, který se používá v pravidlech výjimek. Chcete-li filtrování požadavku vypnout, začněte pravidlo touto značkou.
* **`modifiers`** — parametry, které "objasňují" základní pravidlo. Některé z nich omezují rozsah pravidel a některé mohou zcela změnit jejich fungování.

### Speciální znaky {#basic-rules-special-characters}

* **`*`** — zástupný znak. Používá se k reprezentaci "libovolné sady znaků". Může to být také prázdný řetězec nebo řetězec libovolné délky.
* **`||`** — odpovídá začátku adresy. S tímto znakem nemusíte v masce adresy zadávat konkrétní protokol a subdoménu. Tj., že `||` znamená `http://*.`, `https://*.`, `ws://*.`, `wss://*.` najednou.
* **`^`** — oddělovací znak. Oddělovací znak je libovolný znak, mimo písmeno, číslice nebo jeden z následujících znaků: `_` `-` `.` `%`. V tomto příkladu jsou oddělovací znaky zobrazeny tučně: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. Konec adresy je také akceptován jako oddělovací znak.
* **`|`** — ukazatel na začátku nebo konci adresy. Hodnota závisí na umístění znaku v masce. Např. pravidlo `swf|` odpovídá `http://example.com/annoyingflash.swf`, ale neodpovídá `http://example.com/swf/index.html`. `|http://example.org` odpovídá `http://example.org`, ale ne `http://domain.com?url=http://example.org`.

> **Vizuální znázornění**
> 
> Doporučujeme také seznámit se s [tímto článkem](https://adblockplus.org/filter-cheatsheet#blocking), abyste lépe pochopili, jak taková pravidla vytvářet.

### Podpora regulárních výrazů {#regexp-support}

Pokud chcete ještě větší flexibilitu při vytváření pravidel, můžete použít [regulární výrazy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) namísto výchozí zjednodušené masky se speciálními znaky.

> **Výkon**
> 
> Pravidla s regulárními výrazy pracují pomaleji, proto se jim doporučuje vyhnout nebo omezit jejich rozsah na určité domény.

Pokud chcete, aby blokátor určil regulární výraz, musí `pattern` vypadat takto:
```
pattern = "/" regexp "/"
```

Např. pravidlo `/banner\d+/$third-party` použije regulární výraz `banner\d+` na všechny požadavky třetích stran. Pravidlo výjimky s regulárním výrazem vypadá takto: `@@/banner\d+/`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> AdGuard pro Safari a AdGuard pro iOS plně nepodporují regulární výrazy kvůli [omezení API pro blokování obsahu](https://webkit.org/blog/3476/content-blockers-first-look/) (hledejte sekci "Formát regulárního výrazu").

### Podpora zástupných znaků pro TLD (domény nejvyšší úrovně) {#wildcard-for-tld}

Zástupné znaky jsou podporovány pro TLD domén ve vzorech [kosmetických](#cosmetic-rules), [filtrování HTML](#html-filtering-rules) a pravidel [JavaScript](#javascript-rules).

V případě kosmetických pravidel, např. `example.*##.banner`, je díky znaku `.*`, tj. `example.com`, `sub.example.net`, `example.co.uk`, atd. přiřazeno více domén.

Pro základní pravidla platí popsaná logika pouze pro domény uvedené v [`$domain` modifikátoru](#domain-modifier), např. `||*/banners/*$image,domain=example.*`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> V AdGuardu pro Windows, Mac, Android a v pravidlech rozšíření prohlížeče AdGuard se zástupným znakem `.*`, odpovídá jakékoli veřejné příponě [(nebo eTLD)](https://publicsuffix.org/list/). Pro AdGuard pro Safari a iOS [je však seznam podporovaných domén nejvyšší úrovně](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) omezen kvůli omezením v Safari.
> 
> Pravidla se zástupným znakem pro TLD nejsou podporována Blokátorem obsahu AdGuard.

### Příklady základních pravidel

* `||example.com/ads/*` — jednoduché pravidlo, které odpovídá adresám typu `http://example.com/ads/banner.jpg` a dokonce i `http://subdomain.example.com/ads/otherbanner.jpg`.

* `||example.org^$third-party` —  toto pravidlo blokuje požadavky třetích stran na `example.org` a jejím subdoménám.

* `@@||example.com$document` — obecné pravidlo výjimky. Zcela vypne filtrování pro `example.com` a všechny subdomény. V pravidlech pro výjimky lze použít řadu modifikátorů. Pro více podrobností klikněte na [odkaz ](#exception-modifiers) níže.

### Modifikátory základních pravidel

* [Základní modifikátory](#basic-rules-basic-modifiers)
* [Modifikátory typu obsahu](#content-type-modifiers)
* [Modifikátory výjimek](#exception-modifiers)

> **Poznámka**
> 
> Funkce popsané v této části jsou určeny pro zkušené uživatele. Rozšiřují možnosti "základních pravidel", ale abyste je mohli používat, musíte mít základní znalosti o fungování prohlížeče.

Chování "základního pravidla" můžete změnit pomocí dalších modifikátorů. Modifikátory by měly být umístěny na konci pravidla za znakem `$` a odděleny čárkami.

Příklad:
```
||domain.com^$popup,third-party
```

#### Základní modifikátory {#basic-rules-basic-modifiers}

* [`$domain`](#domain-modifier)
* [`$to`](#to-modifier)
* [`$third-party`](#third-party-modifier)
* [`$popup`](#popup-modifier)
* [`$match-case`](#match-case-modifier)
* [`$header`](#header-modifier)

Následující modifikátory jsou nejjednodušší a nejčastěji používané.

#### **`$domain`** {#domain-modifier}

`$domain` omezuje rozsah pravidla na požadavky **ze zadaných domén** a jejich subdomén (jak je uvedeno v záhlaví [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) HTTP). Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

**Příklady**

**Jen `$domain`:**

* `||baddomain.com^$domain=example.org` blokuje požadavky, které odpovídají zadané masce a jsou odeslány z domény `example.org` nebo jejích subdomén.
* `||baddomain.com^$domain=example.org|example.com` — stejné pravidlo, ale funguje jak pro `example.org`, tak i pro `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`.

**`$domain` a negace `~`:**

* `||baddomain.com^$domain=~example.org` blokuje požadavky, které odpovídají vzoru a jsou odeslané z jakékoli domény kromě `example.org` a jejích subdomén.
* `||baddomain.com^$domain=example.org|~foo.example.org` blokuje požadavky odeslané z `example.org` a jích subdomén, kromě subdomény `foo.example.org`.

**`$domain` modifikátor odpovídající cílové doméně:**

V některých případech může modifikátor `$domain` odpovídat nejen doméně odkazovače, ale také cílové doméně. K tomu dojde, pokud platí všechny následující podmínky:

1. Požadavek má typ obsahu `document`.
1. Vzor pravidla neodpovídá žádné konkrétní doméně.
1. Vzor pravidla neobsahuje regulární výrazy.
1. Modifikátor `$domain` obsahuje pouze domény ve výjimkách, např. `$domain=~example.org|~example.com`.

Následující predikát by měl být splněn, aby bylo možné provést porovnání cílové domény:
```
1 AND ((2 AND 3) OR 4)
```
To znamená, že pokud modifikátor `$domain` obsahuje pouze domény ve výjimkách, pak pravidlo nemusí splňovat druhou a třetí podmínku, aby se cílová doména shodovala s modifikátorem `$domain`.

Pokud některé z výše uvedených podmínek nejsou splněny, ale pravidlo obsahuje modifikátor [`$cookie`](#cookie-modifier) nebo [`$csp`](#csp-modifier), cílová doména bude přesto přiřazena.

Pokud odkazující doména odpovídá pravidlu s `$domain`, které výslovně vylučuje doménu odkazujícího serveru, pravidlo se nepoužije, i když cílová doména také odpovídá pravidlu. To má vliv i na pravidla s modifikátory [`$cookie`](#cookie-modifier) a [`$csp`](#csp-modifier).

**Příklady**

* `*$cookie,domain=example.org|example.com` zablokuje soubory cookie pro všechny požadavky do a z domény `example.org` a `example.com`.
* `*$document,domain=example.org|example.com` zablokuje všechny požadavky do a z domény `example.org` a `example.com`.

V následujících příkladech se předpokládá, že požadavky jsou odesílány z adresy `http://example.org/page` (odkazující adresa), cílová adresa URL je `http://targetdomain.com/page`.

* `page$domain=example.org` bude přiřazena, protože odpovídá doméně odkazu.
* `page$domain=targetdomain.com` bude přiřazena, protože odpovídá cílové doméně a splňuje všechny výše uvedené požadavky.
* `||*page$domain=targetdomain.com` nebude přiřazena, protože vzor `||*page` odpovídá konkrétním doménám.
* `||*page$domain=targetdomain.com,cookie` bude přiřazena navzdory vzoru `||*page` shodným se specifickými doménami, protože obsahuje modifikátor `$cookie`.
* `/banner\d+/$domain=targetdomain.com` nebude přiřazena, protože obsahuje regulární výraz.
* `page$domain=targetdomain.com|~example.org` nebude přiřazena, protože doména odkazu je výslovně vyloučena.

> **Omezení**
> 
> Safari nepodporuje současné použití povolených a zakázaných domén, takže pravidla jako `||baddomain.com^$domain=example.org|~foo.example.org` nebudou v AdGuardu pro Safari fungovat.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Počínaje verzí CoreLibs v1.12 lze modifikátor `$domain` alternativně napsat jako `$from`.

#### **`$to`** {#to-modifier}

`$to` omezuje rozsah pravidla na požadavky **na** zadané domény a jejich subdomény. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

**Příklady**

* `/ads$to=evil.com|evil.org` zablokuje jakýkoliv požadavek na `evil.com` nebo `evil.org` a jejich subdomény s cestou, která odpovídá `/ads`.
* `/ads$to=~not.evil.com|evil.com` zablokuje jakýkoliv požadavek na `evil.com` a její subdomény s cestou, která odpovídá `/ads`, kromě požadavků na `not.evil.com` a její subdomény.
* `/ads$to=~good.com|~good.org` zablokuje všechny požadavky s cestou, která odpovídá `/ads`, kromě požadavků na `good.com` nebo `good.org` a jejich subdomény.

> **Kompatibilita s jinými modifikátory**
> 
> [`$denyallow`](#denyallow-modifier) nelze použít společně s `$to`. Lze ji vyjádřit pomocí invertovaného `$to`: `$denyallow=a.com|b.com`, což je je ekvivalent k `$to=~a.com|~b.com`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> `$to` je k dispozici počínaje verzí CoreLibs v1.12.

#### **`$third-party`** {#third-party-modifier}

Omezení požadavků třetích stran a vlastních požadavků. Požadavek třetí strany je požadavek z jiné domény. Např. požadavek na `example.org` z `domain.com` je požadavek třetí strany.

> **Poznámka**
> 
> Aby mohla být žádost třetí strany považována za takovou, měla by splňovat jednu z následujících podmínek: 1. Její odkazující doména není subdoménou cílové domény nebo naopak. Např. požadavek na `subdomain.example.org` z `example.org` není požadavek třetí strany. 1. Její záhlaví `Sec-Fetch-Site` je nastaveno na `cross-site`. Pokud existuje modifikátor `$third-party`, pravidlo se použije pouze na požadavky třetích stran.

**Příklady**

**`$third-party`:**

* `||domain.com^$third-party` — toto pravidlo bude použito na všechny domény, kromě `domain.com` a její subdomény. Příklad požadavku třetí strany: `http://example.org/banner.jpg`.

Pokud existuje modifikátor `$third-party`, pravidlo se použije pouze na požadavky, které nejsou od třetí strany. To znamená, že musí být odeslány ze stejné domény.

**`$~third-party`:**

* `||domain.com$~third-party` — toto pravidlo se použije pro `domain.com`, ale ne pro ostatní domény. Příklad požadavku, který není požadavkem třetí strany: `http://domain.com/icon.ico`.

#### **`$popup`** {#popup-modifier}

AdGuard se pokusí zavřít kartu prohlížeče s jakoukoli adresou, která odpovídá pravidlu blokování s tímto modifikátorem. Upozorňujeme, že ne všechny karty lze zavřít.

> **Poznámka**
> 
> Pokud je zobrazená stránka uložena v mezipaměti prohlížeče, nemusí to fungovat.

**Příklady**

* `||domain.com^$popup` — pokud se pokusíte přejít na `http://domain.com/` z libovolné stránky v prohlížeči, nová karta, ve které má být zadaný web otevřen, bude tímto pravidlem zavřena.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> 1. Modifikátor `$popup` funguje nejlépe v Rozšíření prohlížeče AdGuard.
> 2. V AdGuardu pro Safari a iOS, pravidla `$popup` stránku jednoduše a okamžitě zablokují.
> 3. V AdGuardu pro Windows, Mac a Android nemusí modifikátor `$popup` v některých případech detekovat vyskakovací okno a nebude zablokováno. `$popup` modifier applies the `document` content type with a special flag which is passed to a blocking page. Blocking page itself can do some checks and close the window if it is really a popup. Otherwise, page should be loaded. It can be combined with other request type modifiers, such as `$third-party` and `$important`. However, the blocking page may not detect a popup in some cases, so it is recommended to use [AdGuard Popup Blocker](https://github.com/AdguardTeam/PopupBlocker) userscript instead.

#### **`$match-case`** {#match-case-modifier}

Tento modifikátor definuje pravidlo, které se vztahuje pouze na adresy odpovídající danému případu. Výchozí pravidla nerozlišují velká a malá písmena.

**Příklady**

* `*/BannerAd.gif$match-case` — toto pravidlo zablokuje `http://example.com/BannerAd.gif`, ale ne `http://example.com/bannerad.gif`.

#### **`$header`** {#header-modifier}

Modifikátor `$header` umožňuje porovnat odpověď HTTP se specifickým záhlavím s (volitelně) specifickou hodnotou.

**Syntaxe**

```
$header "=" h_name [":" h_value]
h_value = string / regexp
```

kde:
  * **`h_name`** — povinný název záhlaví HTTP. Je přizpůsoben případ od případu.
  * **`h_value`** — nepovinný výraz odpovídající hodnotě záhlaví HTTP, může to být jeden z následujících výrazů:
    * **`string`** — posloupnost znaků. Porovnává se s hodnotou záhlaví lexikograficky;
    * **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\`.

Část modifikátoru `":" h_value` lze vynechat. V takovém případě modifikátor odpovídá pouze názvu záhlaví.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$header` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**.

**Příklady**

* `||example.com^$header=set-cookie:foo` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající `foo`.
* `||example.com^$header=set-cookie` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.
* `@@||example.com^$header=set-cookie:/foo\, bar\$/` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající regulárnímu výrazu `foo, bar$`.
* `@@||example.com^$header=set-cookie` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.

#### Omezení podle typu obsahu {#content-type-modifiers}

* [`$document`](#document-modifier)
* [`$image`](#image-modifier)
* [`$stylesheet`](#stylesheet-modifier)
* [`$script`](#script-modifier)
* [`$object`](#object-modifier)
* [`$font`](#font-modifier)
* [`$media`](#media-modifier)
* [`$subdocument`](#subdocument-modifier)
* [`$ping`](#ping-modifier)
* [`$xmlhttprequest`](#xmlhttprequest-modifier)
* [`$websocket`](#websocket-modifier)
* [`$other`](#other-modifier)
* [`$object-subrequest` (zastaralé)](#object-subrequest-modifier)
* [`$webrtc` (zastaralé)](#webrtc-modifier)

Existuje sada modifikátorů, které lze použít k omezení oblasti použití pravidla na určitý typ obsahu. Tyto modifikátory lze také kombinovat, aby zahrnovaly například obrázky i skripty.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> V tom, jak AdGuard určuje typ obsahu na různých platformách, je velký rozdíl. U Rozšíření prohlížeče AdGuard je typ obsahu pro každý požadavek poskytován prohlížečem. AdGuard pro Windows, Mac a Android používají následující metodu: nejprve se pokusíme určit typ požadavku podle záhlaví požadavku `Sec-Fetch-Dest` nebo podle přípony názvu souboru. Pokud není požadavek v této fázi zablokován, určí se typ pomocí záhlaví `Content-Type` na začátku odpovědi serveru.

**Příklady modifikátorů typu obsahu**

* `||example.org^$image` — odpovídá všem obrázkům z `example.org`.
* `||example.org^$script,stylesheet` — odpovídá všem skriptům a stylům z `example.org`.
* `||example.org^$~image,~script,~stylesheet` — odpovídá všem požadavkům na `example.org` kromě obrázků, skriptů a stylů.

#### **`$document`** {#document-modifier}

Pravidlo odpovídá požadavkům na dokument hlavního rámce, tj. dokumenty HTML načtené na kartě prohlížeče. Neodpovídá hodnotám iframe, pro ten existuje modifikátor [`$subdocument`](#subdocument-modifier).

Ve výchozím nastavení AdGuard neblokuje požadavky, které se načítají na kartě prohlížeče (např. "obcházení hlavního rámce"). Cílem není zabránit načtení stránek, protože uživatel jasně uvedl, že chce, aby se tato stránka načetla. Pokud je však modifikátor `$document` zadán explicitně, AdGuard tuto logiku nepoužije a zabrání načtení stránky. Místo toho se zobrazí "blokační stránka".

Pokud je tento modifikátor použit s pravidlem výjimky (`@@`), zcela zakáže blokování na příslušných stránkách. Je to ekvivalentní použití modifikátorů `$elemhide`, `$content`, `$urlblock`, `$jsinject` a `$extension` současně.

**Příklady**

* `@@||example.com^$document` zcela zakáže filtrování všech stránek na `example.com` a všech subdoménách.
* `@@||example.com^$document,~extension` zcela zakáže blokování na všech stránkách na `example.com` a všech subdoménách, ale nadále tam spouští uživatelské skripty.

* `||example.com^$document` zablokuje požadavek na dokument HTML na `example.com` pomocí blokační stránky.
* `||example.com^$document,redirect=noopframe` přesměruje požadavek na HTML dokument na `example.com` na prázdný HTML dokument.
* `||example.com^$document,removeparam=test` odebere parametr dotazu `test` z požadavku dokumentu HTML na `example.com`.
* `||example.com^$document,replace=/test1/test2/` nahradí `test1` za `test2` v požadavku na dokument HTML na `example.com`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla blokování s modifikátorem `$document` nejsou Blokátorem obsahu AdGuard podporována.

#### **`$image`** {#image-modifier}

Pravidlo odpovídá požadavkům na obrázky.

#### **`$stylesheet`** {#stylesheet-modifier}

Pravidlo odpovídá požadavkům na soubory CSS.

#### **`$script`** {#script-modifier}

Pravidlo odpovídá požadavkům na skripty, např. javascript, vbscript.

#### **`$object`** {#object-modifier}

Pravidlo odpovídá prostředkům pluginů prohlížeče, např. Java nebo Flash.

#### **`$font`** {#font-modifier}

Pravidlo odpovídá požadavkům na písma, např. s příponou `.woff`.

#### **`$media`** {#media-modifier}

Pravidlo odpovídá požadavkům na mediální soubory — hudbu a video, např. soubory `.mp4`.

#### **`$subdocument`** {#subdocument-modifier}

Pravidlo odpovídá požadavkům na vestavěné stránky — značky HTML `frame` a `iframe`.

**Příklady**

* `||example.com^$subdocument` blokuje integrované požadavky (`frame` a `iframe`) na `example.com` a všechny její subdomény kdekoli.
* `||example.com^$subdocument,domain=domain.com` blokuje integrované požadavky (`frame` и `iframe`) na `example.com` (a její subdomény) z `domain.com` a všech jejích subdomén.

#### **`$ping`** {#ping-modifier}

Pravidlo odpovídá požadavkům vyvolaným buď `navigator.sendBeacon()`, nebo atributem `ping` v odkazech.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> AdGuard pro Windows, Mac a Android často nedokáží přesně detekovat `navigator.sendBeacon()`. Pro spolehlivou detekci použijte Rozšíření prohlížeče AdGuard.

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

Pravidlo se vztahuje pouze na požadavky ajax (požadavky odeslané prostřednictvím objektu javascript `XMLHttpRequest`).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> AdGuard pro Windows, Mac a Android často nedokáží tento typ přesně detekovat a někdy jej detekují jako [`$other`](#other-modifier) nebo [`$script`](#script-modifier). Pro spolehlivou detekci použijte Rozšíření prohlížeče AdGuard.

#### **`$websocket`** {#websocket-modifier}

Pravidlo se vztahuje pouze na připojení WebSocket.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Modifikátor `$websocket` je podporován ve všech produktech AdGuardu kromě Blokátoru obsahu AdGuard. Pokud jde o AdGuard pro Safari a AdGuard pro iOS, je podporován v zařízeních s macOS Monterey (verze 12) a iOS 16 nebo novějším.

#### **`$other`** {#other-modifier}

Pravidlo se vztahuje na požadavky, jejichž typ nebyl určen nebo neodpovídá výše uvedeným typům.

#### **`$webrtc` (zastaralé)** {#webrtc-modifier}

> **Upozornění na vyřazení**
> 
> Tento modifikátor je zastaralý a již není podporován. Pravidla s tímto modifikátorem jsou považována za neplatná. Pokud potřebujete potlačit WebRTC, zvažte použít `nowebrtc` [scriptlet](#scriptlets).

Pravidlo se vztahuje pouze na připojení WebRTC.

**Příklady**

* `||example.com^$webrtc,domain=example.org` blokuje připojení webRTC na `example.com` pro `example.org`.
* `@@*$webrtc,domain=example.org` zakáže RTC wrapper pro `example.org`.

#### **`$object-subrequest` (zastaralé)** {#object-subrequest-modifier}

> **Upozornění na vyřazení**
> 
> Modifikátor `$object-subrequest` je zastaralý a již není podporován. Pravidla s tímto modifikátorem jsou považována za neplatná. Pravidlo odpovídá požadavkům pluginů prohlížeče (obvykle se jedná o Flash).

#### Modifikátory výjimek {#exception-modifiers}

* [`$elemhide`](#elemhide-modifier)
* [`$content`](#content-modifier)
* [`$jsinject`](#jsinject-modifier)
* [`$urlblock`](#urlblock-modifier)
* [`$extension`](#extension-modifier)
* [`$stealth`](#stealth-modifier)
* [`$specifichide`](#specifichide-modifier)
* [Generická pravidla](#exception-modifiers-generic-rules)
  * [`$generichide`](#generichide-modifier)
  * [`$genericblock`](#genericblock-modifier)

Pravidla výjimek deaktivují ostatní základní pravidla pro adresy, kterým odpovídají. Začínají značkou `@@`. Lze na ně aplikovat všechny výše uvedené základní modifikátory a mají také několik speciálních modifikátorů.

> **Vizuální znázornění**
> 
> Doporučujeme také seznámit se s [tímto článkem](https://adblockplus.org/filter-cheatsheet#blocking), abyste lépe pochopili, jak taková pravidla vytvářet.

#### **`$elemhide`** {#elemhide-modifier}

Zakáže jakákoliv [kosmetická pravidla](#cosmetic-rules) na stránkách odpovídajících pravidlu.

**Příklady**

* `@@||example.com^$elemhide` zakáže všechna kosmetická pravidla na `example.com` a všech subdoménách.

#### **`$content`** {#content-modifier}

Zakáže [filtrování HTML](#html-filtering-rules) a pravidla [`$replace`](#replace-modifier) na stránkách, které odpovídají pravidlu.

**Příklady**

* `@@||example.com^$content` zakáže všechna pravidla filtrování HTML a pravidla nahrazování na `example.com` a všech jejích subdoménách.

#### **`$jsinject`** {#jsinject-modifier}

Zakazuje přidávání javascriptového kódu na stránku. O pravidlech javascriptu si můžete přečíst dále.

**Příklady**

* `@@||example.com^$jsinject` zakáže javasript na `example.com` a všech subdoménách.

#### **`$urlblock`** {#urlblock-modifier}

Zakáže blokování všech požadavků odeslaných ze stránek odpovídajících pravidlu.

**Příklady**

* `@@||example.com^$urlblock` — nebudou blokovány žádné požadavky odeslané z `example.com` a ze všech subdomén.

#### **`$extension`** {#extension-modifier}

Zakáže všechny uživatelské skripty na stránkách odpovídajících tomuto pravidlu.

**Příklady**

* `@@||example.com^$extension` — uživatelské skripty nebudou fungovat na všech stránkách `example.com`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$extension`.

#### **`$stealth`** {#stealth-modifier}

Zakáže modul Režim utajení pro všechny odpovídající stránky a požadavky.

**Syntaxe**

```
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` znamená určité možnosti Režimu utajení deaktivované modifikátorem. Modifikátor může obsahovat libovolný počet možností (viz níže) nebo je nemusí obsahovat vůbec. V druhém případě modifikátor vypne všechny funkce Režimu utajení.

Seznam dostupných možností modifikátoru:

* `searchqueries` zakáže možnost [**Skrýt vyhledávací dotazy**](../../stealth-mode#searchqueries)
* `donottrack` zakáže možnost [**Odeslat záhlaví Do-Not-Track**](../../stealth-mode#donottrack)
* `3p-cookie` zakáže možnost [**Automatické odstranění cookies třetích stran**](../../stealth-mode#3p-cookie)
* `1p-cookie` zakáže možnost [**Automatické odstranění cookies aktuální stránky**](../../stealth-mode#1p-cookie)
* `3p-cache` zakáže možnost [**Zakázat mezipaměť pro požadavky třetích stran**](../../stealth-mode#3p-cache)
* `3p-auth` zakáže možnost [**Blokovat autorizační hlavičku třetích stran**](../../stealth-mode#3p-auth)
* `webrtc` zakáže možnost [**Blokovat WebRTC**](../../stealth-mode#webrtc)
* `push` zakáže možnost [**Blokovat Push API**](../../stealth-mode#push)
* `location` zakáže možnost [**Blokovat lokalizační API**](../../stealth-mode#location)
* `flash` zakáže možnost [**Blokovat Flash**](../../stealth-mode#flash)
* `java` zakáže možnost [**Blokovat Java**](../../stealth-mode#java)
* `referrer` zakáže možnost [**Skrýt třetím stranám referenční ID**](../../stealth-mode#miscellaneous)
* `useragent` zakáže možnost [**Skrýt agenta (identifikaci) Vašeho prohlížeče**](../../stealth-mode#useragent)
* `ip` zakáže možnost [**Skrýt IP adresu**](../../stealth-mode#ip)
* `xclientdata` zakáže možnost [**Odstranit X-Client-Data hlavičku z požadavků HTTP**](../../stealth-mode#xclientdata)
* `dpi` zakáže možnost [**Ochrana před DPI**](../../stealth-mode#dpi)

**Příklady**

* `@@||example.com^$stealth` zakáže Režim utajení pro požadavky `example.com` (a subdomény) s výjimkou blokování cookies a skrytí sledovacích parametrů (viz níže).
* `@@||domain.com^$script,stealth,domain=example.com` zakáže Režim utajení pouze pro požadavky skriptů na `domain.com` (a subdoménách) na `example.com` a subdoménách.
* `@@||example.com^$stealth=3p-cookie|dpi` zakáže blokování cookies třetích stran a opatření pro oklamání DPI pro `example.com`.

> **Poznámka**
> 
> Blokování cookies a odstranění sledovacích parametrů se provádí pomocí pravidel s modifikátory [`$cookie`](#cookie-modifier) a [`$removeparam`](#removeparam-modifier). Pravidla výjimek pouze s modifikátorem `$stealth` tyto věci neudělají. Pokud chcete pro danou doménu zcela zakázat všechny funkce Režimu utajení, musíte uvést všechny tři modifikátory: `@@||example.org^$stealth,removeparam,cookie`

> **Kompatibilita s různými verzemi AdGuardu**
> 
> * Režim utajení je k dispozici v AdGuardu pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard. Všechny ostatní produkty budou ignorovat pravidla s modifikátorem `$stealth`.
> * Modifikátor `$stealth` je podporován AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.10 nebo novější**.

#### **`specifichide`** {#specifichide-modifier}

Zakáže všechna specifická pravidla pro skrývání prvků a CSS, ale ne obecná pravidla. Má opačný účinek než [`$generichide`](#generichide-modifier).

**Příklady**

* `@@||example.org^$specifichide` zakáže `example.org##.banner`, ale ne `##.banner`.

> **Poznámka**
> 
> Všechna kosmetická pravidla — nejen ta specifická — lze zakázat pomocí modifikátoru [`$elemhide`](#elemhide-modifier).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$specifichide` podporuje AdGuard pro Windows, Mac, Android a Pozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

#### Generická pravidla {#exception-modifiers-generic-rules}

Než budeme moci přistoupit k dalším modifikátorům, musíme provést definici _generických pravidel_. Pravidlo je generické, pokud není omezeno na konkrétní domény. Podporován je také zástupný znak `*`.

Například tato pravidla jsou generická:
```
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

A tato nejsou:
```
domain.com###banner
||domain.com^$domain=example.com
```

##### **`$generichide`** {#generichide-modifier}

Zakáže všechna generická [kosmetická pravidla](#cosmetic-rules) na stránkách, které odpovídají pravidlu výjimky.

**Příklady**

* `@@||example.com^generichide` — zakáže všechna kosmetická pravidla na `example.com` a všech subdoménách.

##### **`$genericblock`** {#genericblock-modifier}

Zakáže generická základní pravidla na stránkách, které odpovídají pravidlu výjimky.

**Příklady**

* `@@||example.com^$genericblock` — zakáže generická základní pravidla na `example.com` a všech subdoménách.

### Pokročilé schopnosti

* [`$important`](#important-modifier)
* [`$badfilter`](#badfilter-modifier)
* [`$replace`](#replace-modifier)
* [`$csp`](#csp-modifier)
* [`$permissions`](#permissions-modifier)
* [`$all`](#all-modifier)
* [`$inline-script`](#inline-script-modifier)
* [`$inline-font`](#inline-font-modifier)
* [`$cookie`](#cookie-modifier)
* [`$network`](#network-modifier)
* [`$app`](#app-modifier)
* [`$method`](#method-modifier)
* [`$redirect`](#redirect-modifier)
* [`$redirect-rule`](#redirect-rule-modifier)
* [`$denyallow`](#denyallow-modifier)
* [`$removeparam`](#removeparam-modifier)
* [`$removeheader`](#removeheader-modifier)
* [`$hls`](#hls-modifier)
* [`$jsonprune`](#jsonprune-modifier)
* [`noop`](#noop-modifier)
* [`$empty` (zastaralé)](#empty-modifier)
* [`$mp4` (zastaralé)](#mp4-modifier)

Tyto modifikátory mohou zcela změnit chování základních pravidel.

#### **`$important`** {#important-modifier}

Modifikátor `$important` použitý na pravidlo zvyšuje jeho prioritu před jakýmkoli jiným pravidlem bez modifikátoru `$important`. Dokonce i přes základní pravidla výjimek.

**Příklady**

```
! pravidlo blokování zablokuje všechny požadavky navzdory pravidlu výjimky
||example.org^$important
@@||example.org^
```

```
! pokud má pravidlo výjimky také modifikátor `$important`, bude mít přednost, takže žádné požadavky nebudou blokovány
||example.org^$important
@@||example.org^$important
```

```
! pokud je na dokument použito pravidlo výjimky na úrovni dokumentu, modifikátor `$important` bude ignorován;
! takže pokud je požadavek na `example.org` odeslán z domény `test.org`, pravidlo blokování se nepoužije, přestože má modifikátor `$important`.
||example.org^$important
@@||test.org^$document
```

#### **`$badfilter`** {#badfilter-modifier}

Pravidla s modifikátorem `$badfilter` vypnou ostatní základní pravidla, na která se vztahují. To znamená, že text vypnutého pravidla by měl odpovídat textu pravidla `$badfilter` (bez modifikátoru `$badfilter`).

**Příklady**

* `||example.com$badfilter` zakáže `||example.com`
* `||example.com$image,badfilter` zakáže `||example.com$image`
* `@@||example.com$badfilter` zakáže `@@||example.com`
* `||example.com$domain=domain.com,badfilter` zakáže `||example.com$domain=domain.com`

Pravidla s modifikátorem `$badfilter` mohou zakázat další základní pravidla pro konkrétní domény, pokud splňují následující podmínky:
1. Pravidlo má modifikátor `$domain`.
2. Pravidlo nemá hodnotu modifikátoru negované domény `~` v `$domain`.

V takovém případě pravidlo `$badfilter` zakáže odpovídající pravidlo pro domény uvedené v pravidlech `$badfilter` i v základních pravidlech. Upozorňujeme, že [logika zástupných znaků TLD](#wildcard-for-tld) funguje i zde.

**Příklady**

* `/some$domain=example.com|example.org|example.io` je zakázána pro `example.com` pomocí `/some$domain=example.com,badfilter`
* `/some$domain=example.com|example.org|example.io` ije zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org` a `/some$domain=example.io` jsou kompletně zakázány pomocí `/some$domain=example.com|example.org|example.io,badfilter`
* `/some$domain=example.com|example.org|example.io` je kompletně zakázána pomocí `/some$domain=example.*,badfilter`
* `/some$domain=example.*` je zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org|example.io` NENÍ zakázána pro `example.com` pomocí `/some$domain=example.com|~example.org,badfilter`, protože hodnota modifikátoru `$domain` obsahuje negovanou doménu

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$badfilter` nejsou Blokátorem obsahu AdGuard podporována.

#### **`$replace`** {#replace-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý, pravidlo požadavek nezablokuje. Namísto toho bude odpověď upravena.

> K použití modifikátoru `$replace` budete potřebovat určité znalosti regulárních výrazů.

**Funkce**

* Pravidla `$replace` platí pro jakoukoli textovou odpověď, ale neplatí pro binární (`media`, `image`, `object` atd.).
* Pravidla `$replace` neplatí, pokud je velikost původní odpovědi větší než 3 MB.
* Pravidla `$replace` mají vyšší prioritu než ostatní základní pravidla (**včetně** pravidel výjimek). Pokud tedy požadavek odpovídá dvěma různým pravidlům, z nichž jedno má modifikátor `$replace`, použije se toto pravidlo.
* Pravidla výjimek na úrovni dokumentu s modifikátory `$content` nebo `$document` zakáží pravidla `$replace` pro požadavky, které jim odpovídají.
* Ostatní pravidla výjimek na úrovni dokumentu (`$generichide`, `$elemhide` nebo modifikátory `$jsinject`) se uplatňují vedle pravidel `$replace`. To znamená, že můžete upravit obsah stránky pomocí pravidla `$replace` a zároveň zde zakázat kosmetická pravidla.

> Hodnota `$replace` může být v případě pravidel pro výjimky prázdná. Další informace naleznete v části Příklady.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$replace`, použijeme každé z nich. **Pořadí je stanoveno abecedně.**

**Syntaxe**

Obecně je syntaxe `$replace` podobná nahrazování regulárními výrazy v [Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```
replace = "/" regexp "/" replacement "/" modifiers
```

* **`regexp`** — regulární výraz.
* **`replacement`** — řetězec, který bude použit k nahrazení řetězce odpovídajícího `regexp`.
* **`modifiers`** — příznaky regulárního výrazu. Například `i` — necitlivé vyhledávání nebo `s` — jednořádkový režim.

V hodnotě `$replace` musí být dva znaky uvozeny: čárka `,` a znak dolaru `$`. Použijte pro to zpětné lomítko `\`. Např. uvozená čárka vypadá takto: `\,`.

**Příklady**

```
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

Toto pravidlo má tři části:
* `regexp` - `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
* `replacement` — `\$1<\/VAST>` kde `$` je uvozeno;
* `modifikátory` — `i` pro necitlivé vyhledávání.

Jak toto pravidlo funguje, se můžete podívat zde: http://regexr.com/3cesk

**Vícenásobná pravidla `$replace`**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

* Jak pravidlo 1, tak pravidlo 2 se použijí na všechny požadavky odeslané na `example.org`.
* Pravidlo 2 je zakázáno pro požadavky odpovídající na `||example.org/page/`, **ale pravidlo 1 stále funguje!**

**Zakázání pravidel `$replace`**

* `@@||example.org^$replace` zakáže všechna pravidla `$replace` odpovídající na `||example.org^`.
* `@@||example.org^$document` nebo `@@||example.org^$content` zakáže všechna pravidla `$replace` **pocházející ze** stránek `example.org` **včetně stránky samotné**.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$replace` podporuje AdGuard pro Windows, Mac, Android a Pozšíření prohlížeče AdGuard pro Firefox. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

> **Omezení**
> 
> Pravidla s modifikátorem `$replace` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

#### **`$csp`** {#csp-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

> Pro použití tohoto typu pravidel je nutné mít základní znalosti o vrstvě zabezpečení [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

U požadavků, které odpovídají pravidlu `$csp`, posílíme zásady zabezpečení odezvy posílením zásad zabezpečení obsahu, podobně jako u zásad zabezpečení obsahu modifikátoru obsahu `$csp`. Pravidla `$csp` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Ostatní základní pravidla na to nemají žádný vliv, **kromě výjimek na úrovni dokumentu** (viz část s příklady níže).

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$csp`, použijeme každé z nich.

**Syntaxe**

Syntaxe hodnoty `$csp` je podobná syntaxi záhlaví Content Security Policy.

Hodnota `$csp` může být v případě pravidel pro výjimky prázdná. Viz níže uvedený oddíl s příklady.

> **Omezení**
> 
> 1. V hodnotě `$csp` je zakázáno několik znaků: `,`, `$`.
> 2. Pravidla `$csp` podporují omezený seznam modifikátorů: `$domain`, `$important`, `$subdocument`.
> 3. Pravidla s direktivami `report-*` jsou považována za neplatná.

**Příklady**

* `||example.org^$csp=frame-src 'none'` blocks all frames on example.org and its subdomains.
* `@@||example.org/page/*$csp=frame-src 'none'` disables all rules with the `$csp` modifier exactly matching `frame-src 'none'` on all the pages matching the rule pattern. For instance, the rule above.
* `@@||example.org/page/*$csp` disables all the `$csp` rules on all the pages matching the rule pattern.
* `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` disables inline scripts on all the pages matching the rule pattern.
* `@@||example.org^$document` or `@@||example.org^$urlblock` disables all the `$csp` rules on all the pages matching the rule pattern.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$csp` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$permissions`** {#permissions-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

> In order to use this type of rules, it is required to have the basic understanding of the [Feature Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) security layer.

For the requests matching a `$permissions` rule, AdGuard strengthens response's feature policy by adding additional feature policy equal to the `$permissions` modifier contents. `$permissions` rules are applied independently from any other rule type. Other basic rules have no influence on it **save for document-level exceptions** (see the examples section).

> **Multiple rules matching a single request.**
> 
> In case if multiple `$permissions` rules match a single request, AdGuard will apply each of them.

**Syntax**

`$permissions` value syntax is similar to the `Permissions-Policy` (or `Feature-Policy`) header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy). The list of the available directives is available [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

`$permissions` value can be empty in the case of exception rules — see examples below.

> **Omezení**
> 
> 1. Two characters are forbidden in the `$permissions` value: `,` and `$`;
> 2. `$permissions` is compatible with the limited list of modifiers: `$domain`, `$important`, and `$subdocument`.

**Příklady**

* `||example.org^$permissions=sync-xhr 'none'` disallows synchronous `XMLHttpRequest` requests across `example.org`.
* `@@||example.org/page/*$permissions=sync-xhr 'none'` disables all rules with the `$permissions` modifier exactly matching `sync-xhr 'none'` on all the pages matching the rule pattern. For instance, the rule above.
* `@@||example.org/page/*$permissions` disables all the `$permissions` rules on all the pages matching the rule pattern.
* `$domain=example.org|example.com,permission=oversized-images 'none'; sync-script 'none'; unsized-media 'none';` disallows oversized images, synchronous scripts and unsized media features across `example.org` and `example.com`.
* `@@||example.org^$document` or `@@||example.org^$urlblock` disables all the `$permission` rules on all the pages matching the rule pattern.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with the `$permissions` modifier are supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.11 or later**.

#### **`$all`** {#all-modifier}

`$all` modifier is made of [`$document`](#document-modifier), [`$popup`](#popup-modifier), [`$csp`](#csp-modifier) modifiers. E.g. rule `||example.org^$all` is converting into such set of rules:
```
||example.org^$document,popup
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^
```

#### **`$inline-script`** {#inline-script-modifier}

`$inline-script` modifier is a sort of a shortcut for [`$csp`](#csp-modifier) modifier with specific value. E.g. the rule `||example.org^$inline-script` is converting into such a rule:
```
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

`$inline-font` modifier is a sort of a shortcut for [`$csp`](#csp-modifier) modifier with specific value. E.g. the rule `||example.org^$inline-font` is converting into such a rule:
```
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$cookie`** {#cookie-modifier}

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes us suppress or modify the `Cookie` and `Set-Cookie` headers.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

**Syntax**

```
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```
kde:
  * **`name`** — optional, string or regular expression to match cookie name.
  * **`seconds`** — number of seconds for current time to offset the expiration date of cookie.
  * **`strategy`** — string for [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) strategy to make cookie use.

For example
```
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```
every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:
  * Set its expiration date to current time plus `3600` seconds
  * Makes the cookie use [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) "lax" strategy.

> **Escaping special characters**
> 
> If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use  backslash `\` escape each of them. For example, escaped comma looks like this: `\,`.

**Příklady**

* `||example.org^$cookie` blocks **all** cookies set by `example.org`; this is an equivalent to setting `maxAge=0`
* `$cookie=__cfduid` blocks CloudFlare cookie everywhere
* `$cookie=/__utm[a-z]/` blocks Google Analytics cookies everywhere
* `||facebook.com^$third-party,cookie=c_user` prevents Facebook from tracking you even if you are logged in

`$cookie` rules are not affected by regular exception rules (`@@`) unless it is a `$document` exception. In order to disable a `$cookie` rule, the exception rule should also have a `$cookie` modifier. How it works:

* `@@||example.org^$cookie` unblocks all cookies set by `example.org`
* `@@||example.org^$cookie=concept` unblocks a single cookie named `concept`
* `@@||example.org^$cookie=/^_ga_/` unblocks every cookie that matches the regular expression

> **Omezení**
> 
> `$cookie` rules support a limited list of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$cookie` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$network`** {#network-modifier}

This is basically a Firewall-kind of rules allowing to fully block or unblock access to a specified remote address.

1. `$network` rules match **IP addresses only**! You cannot use them to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, e.g. there will be no further filtering at all.
4. If the IP part starts and ends with `/` character, it is treated as a regular expression.

> We recommend to get acquainted with this [article](#regexp-support), for better understanding of regular expressions.

**Příklady**

* `174.129.166.49:3478^$network` blokuje přístup k `174.129.166.49:3478` (ale ne k `174.129.166.49:34788`).
* `[2001:4860:4860::8888]:443^$network` blokuje přístup k `[2001:4860:4860::8888]:443`.
* `174.129.166.49$network` blokuje přístup k `174.129.166.49:*`.
* `@@174.129.166.49$network` způsobí, že AdGuard bude koncovému bodu předávat data. Žádná jiná pravidla se neuplatňují.
* `/.+:3[0-9]{4}/$network` blokuje přístup k libovolnému portu od 30000 do 39999.
* `/8.8.8.(:?8|4)/$network` blokuje přístup k `8.8.8.8` a `8.8.8.4`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$network`.

#### **`$app`** {#app-modifier}

This modifier lets you narrow the rule coverage down to a specific application (or a list of applications). This might be not too important on Windows and Mac, but this is very important on mobile where some of the filtering rules must be application-specific.

* Android — use the app package name, e.g. `org.example.app`.
* Windows — use the process name, e.g. `chrome.exe`.
* Mac — use the bundle ID or the process name, e.g. `com.google.Chrome`.

> For Mac, you can find out the bundle ID or the process name of the app by viewing the respective request details in the Filtering log.

**Příklady**

* `||baddomain.com^$app=org.example.app` — a rule to block requests that match the specified mask, and are sent from the `org.example.app` Android app.
* `||baddomain.com^$app=org.example.app1|org.example.app2` — the same rule, but it works for both `org.example.app1` and `org.example.app2` apps.

If you want the rule not to be applied to certain apps, start the app name with `~` sign.

* `||baddomain.com^$app=~org.example.app` — a rule to block requests that match the specified mask, and are sent from any app save for the `org.example.app`.
* `||baddomain.com^$app=~org.example.app1|~org.example.app2` — same as above, but now two apps are excluded: `org.example.app1` and `org.example.app2`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Only AdGuard for Windows, Mac, Android are technically capable of using rules with `$app` modifier.

#### **`$method`** {#method-modifier}

This modifier limits the rule scope to requests that use the specified set of HTTP methods. Negated methods are allowed. The methods must be specified in all lowercase characters, but are matched case-insensitively.

**Příklady**

* `||evil.com^$method=get|head` blocks only GET and HEAD requests to `evil.com`.
* `||evil.com^$method=~post|~put` blocks any requests except POST or PUT to `evil.com`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> `$method` is available starting with CoreLibs v1.12.


#### **`$redirect`** {#redirect-modifier}

AdGuard is able to redirect web requests to a local "resource".

**Syntax**

AdGuard uses the same filtering rules syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

> The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

> `$redirect` rules' priority is higher than the regular basic blocking rules' priority. This means that if there is a basic blocking rule (even with `$important` modifier), `$redirect` rule will prevail over it. If there is an allowlist (`@@`) rule matching the same URL, it will disable redirecting as well (unless the `$redirect` rule is also marked as `$important`).

##### Disabling `$redirect` rules


* `||example.org/script.js$script,redirect=noopjs` — this rule redirects all requests to `example.org/script.js` to the resource named `noopjs`.
* `||example.org/test.mp4$media,redirect=noopmp4-1s` — this rule redirects all requests to `example.org/test.mp4` to the resource named `noopmp4-1s`.
* `@@||example.org^$redirect` will disable all `$redirect` rules for URLs that match `||example.org^`.
* `@@||example.org^$redirect=nooptext` will disable all rules with `$redirect=nooptext` for any request that matches `||example.org^`.

> More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$redirect` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

> Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Příklady**

```
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$redirect-rule` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$denyallow`** {#denyallow-modifier}

`$denyallow` modifier allows to avoid creating additional rules when it is needed to disable a certain rule for specific domains. `$denyallow` matches only target domains and not referrer domains.

Adding this modifier to a rule is equivalent to excluding the domains by the rule's matching pattern or to adding the corresponding exclusion rules. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

> **Omezení**
> 
> * The rule's matching pattern cannot target any specific domains, e.g. it cannot start with `||`.
> * Domains in the modifier value cannot be negated, e.g. `$denyallow=~x.com`, or have a wildcard TLD, e.g. `$denyallow=x.*`.
> 
> The rules which violate these restrictions are considered invalid.

**Příklady**

Toto pravidlo:
```
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

odpovídá tomuto:
```
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

nebo kombinaci těchto tří:
```
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$denyallow` modifier are not supported by AdGuard Content Blocker.

#### **`$removeparam`** {#removeparam-modifier}

> `$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and [sometimes](#removeparam-modifier-compatibility) `POST` requests.

> `$removeparam` rules that do not have any [content type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

**Syntax**

**Basic syntax**

* `$removeparam=param` — removes query parameter with the name `param` from URLs of any request, e.g. a request to `http://example.com/page?param=1&another=2` will be transformed to `http://example.com/page?another=2`.

> `$removeparam` basic syntax is supported starting with v1.7 of [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) and v3.6 of AdGuard Browser Extension.

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

* `$removeparam=/regexp/[options]` — removes query parameters that matches the `regexp` regular expression from URLs of any request. Unlike basic syntax, it means *"remove query parameters normalized to a `name=value` string which match the `regexp` regular expression"*. `[options]` here is the list of regular expression options. At the moment, the only supported option is `i` which makes matching case-insensitive.

> `$removeparam` syntax for regular expressions will be supported starting with v1.8 of CoreLibs and v4.0 of AdGuard Browser Extension. For now, use the simplified version: `$removeparam=param`.

> **Escaping special characters**
> 
> Do not forget to escape special characters like `,`, `/` and `$` in the regular expressions. Use `\` character for that purpose. For example, an escaped comma should look like this: `\,`.

> **Poznámka**
> 
> Regexp-type rules target both name and value of the parameter. In order to minimize the chance of mistakes, it is safer to start every regexp with `/^` unless you specifically target parameter values.

> We will try to detect and ignore unescaped `$` automatically using a simple rule of thumb: It is not an options delimiter if all three are true: 1. It looks like `$/`; 2. There is another slash character `/` to the left of it; 3. There is another unescaped dollar sign `$` to the left of that slash character.

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

* `||example.org^$removeparam` — removes all query parameters from URLs matching `||example.org^`.

**Inversion**

Use `~` to apply inversion:

* `$removeparam=~param` — removes all query parameters with the name different from `param`.
* `$removeparam=~/regexp/` — removes all query parameters that do not match the `regexp` regular expression.

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

* `@@||example.org^$removeparam` negates all `$removeparam` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeparam=param` negates the rule with `$removeparam=param` for any request matching `||example.org^`.
* `@@||example.org^$removeparam=/regexp/` negates the rule with `$removeparam=/regexp/` for any request matching `||example.org^`.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

**Příklady**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` will not be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will not be affected by the blocking rule.

* `$removeparam=utm_source` — removes `utm_source` query parameter from all requests.

* `$removeparam=/utm_.*/` — removes all `utm_* query` parameters from URL queries of any request, e.g. a request to `http://example.com/page?utm_source=test` will be transformed to `http://example.com/page`.

* `$removeparam=/^utm_source=campaign$/` — removes `utm_source` query parameter with the value equal to `campaign`. It does not touch other `utm_source` parameters.

**Negating one `$removeparam` rule and replacing it with a different rule**

```
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There is one exception: Google Click ID (gclid) will not be removed from requests to example.com.

**Negating `$removeparam` for all parameters**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to `example.org`.

> **Kompatibilita s jinými modifikátory**
> 
> `$removeparam` rules are compatible with [basic modifiers](#basic-rules-common-modifiers), [content type modifiers](#content-type-modifiers), and with `$important` and `$app` modifiers. The rules which have any other modifiers are considered invalid and will be discarded.

> **Poznámka**
> 
> `$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

> ##### **Compatibility with different versions of AdGuard** {#removeparam-modifier-compatibility}
> 
> * Rules with `$removeparam` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard browser extensions for Chrome, Firefox, Edge.
> 
> * `POST` request types are supported only by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10 or later**.

> **Omezení**
> 
> Rules with `$removeparam` modifier can be used [**only in trusted filters**](#trusted-filters).

#### **`$removeheader`** {#removeheader-modifier}

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

**Syntax**

**Basic syntax**

* `||example.org^$removeheader=header-name` removes a **response** header called `header-name`
* `||example.org^$removeheader=request:header-name` removes a **request** header called `header-name`

> `$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

* `@@||example.org^$removeheader` negates **all** `$removeheader` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeheader=header` negates the rule with `$removeheader=header` for any request matching `||example.org^`.

> `$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers will not do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

> **Omezení**
> 
> 1. Tento typ pravidel lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
> 
> 2. Aby nedošlo k narušení bezpečnosti, nelze z níže uvedeného seznamu odstranit záhlaví `$removeheader`:
>     
>     * `access-control-allow-origin`
>     * `access-control-allow-credentials`
>     * `access-control-allow-headers`
>     * `access-control-allow-methods`
>     * `access-control-expose-headers`
>     * `access-control-max-age`
>     * `access-control-request-headers`
>     * `access-control-request-method`
>     * `origin`
>     * `timing-allow-origin`
>     * `allow`
>     * `cross-origin-embedder-policy`
>     * `cross-origin-opener-policy`
>     * `cross-origin-resource-policy`
>     * `content-security-policy`
>     * `content-security-policy-report-only`
>     * `expect-ct`
>     * `feature-policy`
>     * `origin-isolation`
>     * `strict-transport-security`
>     * `upgrade-insecure-requests`
>     * `x-content-type-options`
>     * `x-download-options`
>     * `x-frame-options`
>     * `x-permitted-cross-domain-policies`
>     * `x-powered-by`
>     * `x-xss-protection`
>     * `public-key-pins`
>     * `public-key-pins-report-only`
>     * `sec-websocket-key`
>     * `sec-websocket-extensions`
>     * `sec-websocket-accept`
>     * `sec-websocket-protocol`
>     * `sec-websocket-version`
>     * `p3p`
>     * `sec-fetch-mode`
>     * `sec-fetch-dest`
>     * `sec-fetch-site`
>     * `sec-fetch-user`
>     * `referrer-policy`
>     * `content-type`
>     * `content-length`
>     * `accept`
>     * `accept-encoding`
>     * `host`
>     * `connection`
>     * `transfer-encoding`
>     * `upgrade`
> 3. `$removeheader` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and [content type modifiers](#content-type-modifiers), e.g. `$script`, `$stylesheet`, etc. The rules which have any other modifiers are considered invalid and will be discarded.

**Příklady**

* `||example.org^$removeheader=refresh` removes `Refresh` header from all HTTP responses returned by `example.org` and its subdomains.
* `||example.org^$removeheader=request:x-client-data` removes `X-Client-Data` header from all HTTP requests.
* Next block of rules removes `Refresh` and `Location` headers from all HTTP responses returned by `example.org` save for requests to `example.org/path/*`, for which no headers will be removed:
  ```
  ||example.org^$removeheader=refresh
  ||example.org^$removeheader=location
  @@||example.org/path/$removeheader
  ```

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$removeheader` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`$hls`** {#hls-modifier}

`$hls` rules modify the response of a matching request. They are intended as a convenient way to remove segments from [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

> **Poznámka**
> 
> The word "segment" in this document means either a "Media Segment" or a "playlist" as part of a "Master Playlist": `$hls` rules do not distinguish between a "Master Playlist" and a "Media Playlist".

**Syntax**

* `||example.org^$hls=urlpattern` removes segments whose URL matches the URL pattern `urlpattern`. The pattern works just like the one in basic URL rules, however, the characters `/`, `$` and `,` must be escaped with `\` inside `urlpattern`.
* `||example.org^$hls=/regexp/options` removes segments where the URL or one of the tags (for certain options, if present) is matched by the regular expression `regexp`. Available `options` are:
  * `t` — instead of testing the segment's URL, test each of the segment's tags against the regular expression. A segment with a matching tag is removed;
  * `i` — make the regular expression case-insensitive.

> The characters `/`, `$` and `,` must be escaped with `\` inside `regexp`.

**Exceptions**

Basic URL exceptions shall not disable rules with `$hls` modifier. They can be disabled as described below:
* `@@||example.org^$hls` disables all `$hls` rules for responses from URLs matching `||example.org^`.
* `@@||example.org^$hls=text` disables all `$hls` rules with the value of the `$hls` modifier equal to `text` for responses from URLs matching `||example.org^`.

> `$hls` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

> **Omezení**
> 
> * `$hls` rules are only allowed in trusted filters.
> * `$hls` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
> * `$hls` rules only apply to HLS playlists, which are UTF-8 encoded text starting with the line `#EXTM3U`. Any other response will not be modified by these rules.
> * `$hls` rules do not apply if the size of the original response is more than 3 MB.

> **Poznámka**
> 
> When multiple `$hls` rules match the same request, their effect is cumulative.

**Příklady**

* `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` removes all segments with the matching URL.
* `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` achieves more or less the same with a regular expression instead of a URL pattern.
* `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` removes all segments which have the matching tag.

**Anatomy of an HLS playlist**

A quick summary of the [specification](https://datatracker.ietf.org/doc/html/rfc8216):
1. An HLS playlist is a collection of text lines.
2. A line may be empty, a comment (starts with `#`), a tag (also starts with `#`, can only be recognized by name) or a URL.
3. A URL line is called a "segment".
4. Tags may apply to a single segment, i.e. the first URL line after the tag, to all segments following the tag and until the tag with the same name, or to the whole playlist.

Some points specific to the operation of `$hls` rules:
1. When a segment is removed, all of the tags that apply only to that segment are also removed.
2. When there is a tag that applies to multiple segments, and all of those segments are removed, the tag is also removed.
3. Since there is no way to recognize different kinds of tags by syntax, we recognize all of the tags specified by the RFC, plus some non-standard tags that we have seen in the field. Any lines starting with `#` and not recognized as a tag are passed through without modification, and are not matched against the rules.
4. We do not match tags that apply to the whole playlist, and `$hls` rules can not be used to remove them, since `$hls` rules are intended for removing segments. If you know what you are doing, you can use `$replace` rules to remove or rewrite just a single tag from the playlist.

**Příklad transformace provedené podle pravidel:**

<details>
<summary>Původní odezva</summary>

```
#EXTM3U
#EXT-X-TARGETDURATION:10
#EXTINF,5
preroll.ts
#UPLYNK-SEGMENT:abc123,ad
#UPLYNK-KEY:aabb1122
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```
</details>

<details>
<summary>Použitá pravidla</summary>

```
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```
</details>

<details>
<summary>Modifikovaná odpověď</summary>

```
#EXTM3U
#EXT-X-TARGETDURATION:10
#UPLYNK-SEGMENT:abc123,segment
#UPLYNK-KEY:ccdd2233
#EXT-X-DISCONTINUITY
#EXTINF,10
01.ts
#EXTINF,10
02.ts
#EXT-X-ENDLIST
```
</details>

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$hls` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.10 nebo novější**.

#### **`$jsonprune`** {#jsonprune-modifier}

`$jsonprune` rules modify the response to a matching request by removing JSON items that match a modified [JSONPath](https://goessner.net/articles/JsonPath/) expression. They do not modify responses which are not valid JSON documents.

> In AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.11 or later**, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Syntax**

* `||example.org^$jsonprune=expression` removes items that match the modified JSONPath expression `expression` from the response.

> Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

The modified JSONPath syntax has the following differences from the original:

1.  Script expressions are not supported.
2.  The supported filter expressions are:
      * `?(has <key>)` — true if the current object has the specified key.
      * `?(key-eq <key> <value>)` — true if the current object has the specified key, and its value is equal to the specified value.
      * `?(key-substr <key> <value>)` — true if the specified value is a substring of the value of the specified key of the current object.
3.  Whitespace outside of double- or single-quoted strings has no meaning.
4.  Both double- and single-quoted strings can be used.
5.  Expressions ending with `..` are not supported.
6.  Multiple array slices can be specified in square brackets.

There are various online tools that make working with JSONPath expressions more convenient:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations have unique features/quirks and are subtly incompatible with each other.

**Exceptions**

Basic URL exceptions shall not disable rules with `$jsonprune` modifier. They can be disabled as described below:
* `@@||example.org^$jsonprune` disables all `$jsonprune` rules for responses from URLs matching `||example.org^`.
* `@@||example.org^$jsonprune=text` disable all `$jsonprune` rules with the value of the `$jsonprune` modifier equal to `text` for responses from URLs matching `||example.org^`.

> `$jsonprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

> **Omezení**
> 
> * `$jsonprune` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
> * `$jsonprune` rules do not apply if the size of the original response is more than 3 MB.

> **Poznámka**
> 
> When multiple `$jsonprune` rules match the same request, they are sorted in lexicographical order, the first rule is applied to the original response, and each of the remaining rules is applied to the result of applying the previous one.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, Mac and Android, **running CoreLibs version 1.10 or later**.

**Příklady**

* `||example.org^$jsonprune=\$..[one\, "two three"]` removes all occurrences of the keys "one" and "two three" anywhere in the JSON document.

<details>
<summary>Vstup</summary>

```
{
    "one": 1,
    "two": {
        "two three": 23,
        "four five": 45
    }
}
```

</details>

<details>
<summary>Výstup</summary>

```
{
    "two": {
        "four five": 45
    }
}
```

</details>

* `||example.org^$jsonprune=\$.a[?(has ad_origin)]` removes all children of `a` that have an `ad_origin` key.

<details>
<summary>Vstup</summary>

```
{
    "a": [
        {
            "ad_origin": "https://example.org",
            "b": 42
        },
        {
            "b": 1234
        }
    ]
}
```

</details>

<details>
<summary>Výstup</summary>

```
{
    "a": [
        {
            "b": 1234
        }
    ]
}
```

</details>

* `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` removes all items that are at nesting level 3 and have a property "Some key" equal to "Some value".

<details>
<summary>Vstup</summary>

```
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>Výstup</summary>

```
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Nested JSONPath expressions**

> In AdGuard for Windows, Mac and Android, **running CoreLibs version 1.11 or later**, JSONPath expressions may be used as keys in filter expressions.

* `||example.org^$jsonprune=\$.elems[?(has "\$.a.b.c")]` removes all children of `elems` which have a property selectable by the JSONPath expression `$.a.b.c`.

<details>
<summary>Vstup</summary>

```
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
            "k": "v"
        },
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

<details>
<summary>Výstup</summary>

```
{
    "elems": [
        {
            "d": {"e": {"f": 123}},
            "k1": "v1"
        }
    ]
}
```

</details>

* `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` removes all children of `elems` which have a property selectable by the JSONPath expression `$.a.b.c` with a value equal to `"abc"`.

<details>
<summary>Vstup</summary>

```
{
    "elems": [
        {
            "a": {"b": {"c": 123}},
        },
        {
            "a": {"b": {"c": "abc"}}
        }
    ]
}
```

</details>

<details>
<summary>Výstup</summary>

```
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        }
    ]
}
```

</details>

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of any length and can appear in a rule as many times as needed.

**Příklady**

```
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `noop` modifier are not supported by AdGuard Content Blocker.

#### **`$empty` (zastaralé)** {#empty-modifier}

> **Upozornění na vyřazení**
> 
> This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$empty` are converting into `$redirect=nooptext` now.

Usually, blocked requests look like a server error to browser. If you use `$empty` modifier, AdGuard will emulate a blank response from the server with`200 OK` status.

**Příklady**

* `||example.org^$empty` returns an empty response to all requests to `example.org` and all subdomains.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

#### **`$mp4` (deprecated)** {#mp4-modifier}

> **Upozornění na vyřazení**
> 
> This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are converting into `$redirect=noopmp4-1s,media` now.

As a response to blocked request AdGuard returns a short video placeholder.

**Příklady**

* `||example.com/videos/$mp4` blocks all video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$mp4` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and Safari.

# Non-basic rules

However, the capabilities of the basic rules may not be sufficient to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.


## Cosmetic rules {#cosmetic-rules}

> Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

### Element hiding rules {#cosmetic-elemhide-rules}

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

> Element hiding rules may operate differently [depending on the platform](#cosmetic-rules-priority).

#### Syntax {#non-basic-rules-modifiers-syntax}

```
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
* **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

> This rule will be also applied to all subdomains of `example.org` and `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

> **Poznámka**
> 
> Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

**Příklady**

* `example.com##div.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` — hides an element with a class `textad` at all domains, except `example.com` and its subdomains.

> **Omezení**
> 
> Safari does not support both permitted and restricted domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

**Exceptions**

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:
```
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:
```
#@#.textad
```

The same can be achieved by adding this rule:
```
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

### CSS rules {#cosmetic-css-rules}

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With this rules you can basically add any CSS styles to the page.

> **Omezení**
> 
> Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> CSS rules are not supported by AdGuard Content Blocker.

> CSS rules may operate differently [depending on the platform](#cosmetic-rules-priority).

**Syntax**

```
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), that defines the elements we want to apply the style to.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`style`** — CSS style, that we want to apply to selected elements.

**Příklady**

```
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

**Exceptions**

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains. Exception rules syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:
```
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

### Extended CSS selectors {#extended-css-selectors}

* [Omezení](#extended-css-limitations)
* [Pseudo-class `:has()`](#extended-css-has)
* [Pseudo-class `:contains()`](#extended-css-contains)
* [Pseudo-class `:matches-css()`](#extended-css-matches-css)
* [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
* [Pseudo-class `:matches-property()`](#extended-css-matches-property)
* [Pseudo-class `:xpath()`](#extended-css-xpath)
* [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
* [Pseudo-class `:upward()`](#extended-css-upward)
* [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
* [Pseudo-class `:is()`](#extended-css-is)
* [Pseudo-class `:not()`](#extended-css-not)
* [Pseudo-class `:if-not()` (deprecated)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

> **Application area**
> 
> Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

**Syntax**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

* `#?#` — for element hiding, `#@?#` — for exceptions
* `#$?#` — for CSS rules, `#@$?#` — for exceptions

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Příklady**

* `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
* `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
* `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
* `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

> You can apply standard CSS selectors using the ExtendedCss library by using a rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

> **Poznámka**
> 
> Some pseudo-classes do not require selector before it. Still adding a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)` but second one is more obvious.
> 
> Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

#### ExtendedCss Limitations {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).


#### Pseudo-class `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

> **Poznámka**
> 
> Rules with the `:has()` pseudo-class should use the [native implementation of `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) if they use `##` marker and if it is possible, i.e. with no other extended selectors inside. To force applying of ExtendedCss rules with `:has()`, use `#?#`/`#$?#` marker explicitly.

> **Compatibility with other pseudo-classes**
> 
> Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

> **Upozornění na vyřazení**
> 
> `:if()` is no longer supported as a synonym for `:has()`.

**Syntax**

```
[target]:has(selector)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selector` — required, standard or extended CSS selector

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### `:has()` limitations {#extended-css-has-limitations}

> Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54): - disallow `:has()` inside the pseudos accepting only compound selectors; - disallow `:has()` after regular pseudo-elements.

> Native `:has()` pseudo-class does not allow `:has()`, `:is()`, `:where()` inside `:has()` argument to avoid increasing the `:has()` invalidation complexity ([case 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). But ExtendedCss did not have such limitation earlier and filter lists already contain such rules, so we have not added this limitation to ExtendedCss and allow to use `:has()` inside `:has()` as it was possible before. To use it, just force ExtendedCss usage by setting `#?#`/`#$?#` rule marker.

> Native implementation does not allow any usage of `:scope` inside `:has()` argument ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Still, there are some such rules in filter lists: `div:has(:scope > a)` which we continue to support by simply converting them to `div:has(> a)`, as it used to be done previously.

**Příklady**

`div:has(.banner)` selects all `div` elements which **include** an element with the `banner` class:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span class="banner">inner element</span>
</div>
```

`div:has(> .banner)` selects all `div` elements which **include** an `banner` class element as a *direct child* of `div`:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <p class="banner">child element</p>
</div>
```

`div:has(+ .banner)` selects all `div` elements **preceding** `banner` class element which *immediately follows* the `div` and both are children of the same parent:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<p class="banner">adjacent sibling</p>
<span>Not selected</span>
```

`div:has(~ .banner)` selects all `div` elements **preceding** `banner` class element which *follows* the `div` but *not necessarily immediately* and both are children of the same parent:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<span>Not selected</span>
<p class="banner">general sibling</p>
```

`div:has(span, .banner)` selects all `div` elements which **include both** `span` element and `banner` class element:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span>child span</span>
  <p class="banner">child .banner</p>
</div>
```

> **Compatibility with old syntax**
> 
> [Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.


#### Pseudo-class `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

> **Poznámka**
> 
> The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

> **Compatibility with other pseudo-classes**
> 
> Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntax**

```
[target]:contains(match)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `match` — required, string or regular expression for matching element `textContent`. Regular expression flags are supported.

**Příklady**

For such DOM:
```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

the element `div#match` can be selected by any on these extended selectors:
```
! plain text
div:contains(banner)

! regular expression
div:contains(/as .* banner/)

! regular expression with flags
div:contains(/it .* banner/gi)
```

> **Poznámka**
> 
> Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

> **Compatibility with old syntax**
> 
> [Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.


#### Pseudo-class `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntax**

```
[target]:matches-css([pseudo-element, ] property: pattern)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `pseudo-element` — optional, valid standard pseudo-element, e.g. `before`, `after`, `first-line`, etc.
- `property` — required, a name of CSS property to check the element for
- `pattern` —  required, a value pattern that is using the same simple wildcard matching as in the basic url filtering rules OR a regular expression. For this type of matching, AdGuard always does matching in a case-insensitive manner. In the case of a regular expression, the pattern looks like `/regexp/`.

> **Special characters escaping and unescaping**
> 
> For **non-regexp** patterns `(`,`)`,`[`,`]` must be **unescaped**, e.g. `:matches-css(background-image:url(data:*))`.
> 
> For **regexp** patterns `\` should be **escaped**, e.g. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

> **Omezení**
> 
> Regexp patterns **do not support** flags.

**Příklady**

For such DOM:
```html
<!-- HTML code -->
<style type="text/css">
    #matched::before {
        content: "Block me"
    }
</style>
<div id="matched"></div>
<div id="not-matched"></div>
```

the `div` elements with pseudo-element `::before` and with specified `content` property can be selected by any of these extended selectors:
```
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

> **Compatibility with other pseudo-classes**
> 
> Obsolete pseudo-classes `:matches-css-before()` and `:matches-css-after()` are no longer recommended but still are supported for better compatibility.

> **Compatibility with old syntax**
> 
> [Backward compatible syntax for `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) is supported but **not recommended**.


#### Pseudo-class `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows to select an element by its attributes, especially if they are randomized.

**Syntax**

```
[target]:matches-attr("name"[="value"])
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for attribute name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for attribute value matching

> **Escaping special characters**
> 
> For **regexp** patterns `"` and `\` should be **escaped**, e.g. `div:matches-attr(class=/[\\w]{5}/)`.

> **Omezení**
> 
> Regexp patterns **do not support** flags.

**Příklady**

`div:matches-attr("ad-link")` selects the element `div#target1`:
```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` selects the element `div#target2`:
```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` selects the element `div#target3`:
```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` selects the element `#target4`:
```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```


#### Pseudo-class `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows to select an element by matching its properties.

**Syntax**

```
[target]:matches-property("name"[="value"])
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for element property name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for element property value matching

> **Escaping special characters**
> 
> For **regexp** patterns `"` and `\` should be escaped, e.g. `div:matches-property(prop=/[\\w]{4}/)`.

> **Poznámka**
> 
> Regexp patterns are supported in `name` for any property in chain, e.g. `prop./^unit[\\d]{4}$/.type`.

> **Omezení**
> 
> Regexp patterns **do not support** flags.

**Příklady**

An element with such properties:
```javascript
divProperties = {
  id: 1,
  check: {
    track: true,
    unit_2random1: true,
  },
  memoizedProps: {
    key: null,
    tag: 12,
    _owner: {
      effectTag: 1,
      src: 'ad.com',
    },
  },
};
```

can be selected by any of these extended selectors:
```
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

> **For filters maintainers:**
> 
> To check properties of a specific element, do the following: 1. Inspect the page element or select it in `Elements` tab of browser DevTools. 2. Run `console.dir($0)` in `Console` tab.


#### Pseudo-class `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows to select an element by evaluating an XPath expression.

**Syntax**

```
[target]:xpath(expression)
```
- `target`- optional, standard or extended CSS selector
- `expression` — required, valid XPath expression

##### `:xpath()` limitations {#extended-css-xpath-limitations}

> `target` can be omitted so it is optional. For any other pseudo-class that would mean "apply to *all* DOM nodes", but in case of `:xpath()` it just means "apply to the *whole* document", and such applying slows elements selecting significantly. That's why rules like `#?#:xpath(expression)` are limited to looking inside the `body` tag. For example, rule `#?#:xpath(//div[@data-st-area=\'Advert\'])` is parsed as `#?#body:xpath(//div[@data-st-area=\'Advert\'])`.

> Extended selectors with defined `target` as *any* selector — `*:xpath(expression)` — can still be used but it is not recommended, so `target` should be specified instead.

> Works properly only at the end of selector, except for [pseudo-class :remove()](#remove-pseudos).

**Příklady**

`:xpath(//*[@class="banner"])` selects the element `div#target1`:
```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` selects the element `div#target2`:
```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```


#### Pseudo-class `:nth-ancestor()` {#extended-css-nth-ancestor}

The `:nth-ancestor()` pseudo-class allows to lookup the *nth* ancestor relative to the previously selected element.

```
subject:nth-ancestor(n)
```
- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

**Syntax**

```
subject:nth-ancestor(n)
```
- `subject` — required, standard or extended CSS selector
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

> The `:nth-ancestor()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Příklady**

For such DOM:
```html
<!-- HTML code -->
<div id="target1">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.child:nth-ancestor(1)` selects the element `div#target1`, `div[class="inner"]:nth-ancestor(3)` selects the element `div#target2`.


#### Pseudo-class `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Syntax**

```
subject:upward(ancestor)
```
- `subject` — required, standard or extended CSS selector
- `ancestor` — required, specification for the ancestor of the element selected by `subject`, can be set as:
  - *number* >= 1 and < 256 for distance to the needed ancestor, same as [`:nth-ancestor()`](#extended-css-nth-ancestor)
  - *standard CSS selector* for matching closest ancestor

##### `:upward()` limitations {#extended-css-upward-limitations}

> The `:upward()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

**Příklady**

For such DOM:
```html
<!-- HTML code -->
<div id="target1" data="true">
  <div class="child"></div>

  <div id="target2">
    <div>
      <div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</div>
```

`.inner:upward(div[data])` selects the element `div#target1`, `.inner:upward(div[id])` selects the element `div#target2`, `.child:upward(1)` selects the element `div#target1`, `.inner:upward(3)` selects the element `div#target2`.


#### Pseudo-class `:remove()` and pseudo-property `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

> **Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**

```
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```
- `selector` — required, standard or extended CSS selector

##### `:remove()` and `remove` limitations {#extended-css-remove-limitations}

> The `:remove()` pseudo-class is limited to work properly only at the end of selector.

> For applying the `:remove()` pseudo-class to any element, a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` should be used. Otherwise such extended selector may be considered as invalid, e.g. `.banner > :remove()` is not valid for removing any child element of `banner` class element, so it should look like `.banner > *:remove()`.

> If the `:remove()` pseudo-class or the `remove` pseudo-property is used, all style properties are ignored except for the [`debug` pseudo-property](#selectors-debug-mode).


**Příklady**
```
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

> **Poznámka**
> 
> Rules with the `remove` pseudo-property should use `#$?#` marker: `$` for CSS style rules syntax, `?` for ExtendedCss syntax.


#### Pseudo-class `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntax**

```
[target]:is(selectors)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selectors` — [*forgiving selector list*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) of standard or extended selectors. For extended selectors only compound selectors are supported, not complex.

##### `:is()` limitations {#extended-css-is-limitations}

> Rules with the `:is()` pseudo-class should use the [native implementation of `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

> If the `:is()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:is(.locked)` works fine.

> [Complex selectors](https://www.w3.org/TR/selectors-4/#complex) with extended pseudo-classes are not supported as `selectors` argument for `:is()` pseudo-class, only [compound ones](https://www.w3.org/TR/selectors-4/#compound) are allowed. Check examples below for more details.

**Příklady**

`#container *:is(.inner, .footer)` selects only the element `div#target1`:
```html
<!-- HTML code -->
<div id="container">
  <div data="true">
    <div>
      <div id="target1" class="inner"></div>
    </div>
  </div>
</div>
```

Due to limitations `:is(*:not([class]) > .banner)'` does not work but `:is(*:not([class]):has(> .banner))` can be used instead of it to select the element `div#target2`:
```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```


#### Pseudo-class `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as argument. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntax**

```
[target]:not(selectors)
```
- `target` — optional, standard or extended CSS selector, can be missed for checking *any* element
- `selectors` — list of standard or extended selectors

##### `:not()` limitations {#extended-css-not-limitations}

> Rules with the `:not()` pseudo-class should use the [native implementation of `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:not()`, use `#?#`/`#$?#` marker explicitly.

> If the `:not()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:not()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:not(<extended-selectors>)` does not work. So if `target` is not defined or defined as a [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:not(...)` and `#?#*:not(...)` are parsed as `#?#html *:not(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:not(.locked)` works fine.

> The `:not()` is considered as a standard CSS pseudo-class inside the argument of the [`:upward()` pseudo-class](#extended-css-upward) because `:upward()` supports only standard selectors.

> "Up-looking" pseudo-classes which are [`:nth-ancestor()`](#extended-css-nth-ancestor) and [`:upward()`](#extended-css-upward) are not supported inside `selectors` argument for `:not()` pseudo-class.

**Příklady**

`#container > *:not(h2, .text)` selects only the element `div#target1`:
```html
<!-- HTML code -->
<div id="container">
  <h2>Header</h2>
  <div id="target1"></div>
  <span class="text">text</span>
</div>
```


#### Pseudo-class `:if-not()` (zastaralé) {#extended-css-if-not}

> **Upozornění na vyřazení**
> 
> The `:if-not()` pseudo-class is deprecated and is no longer supported. Pravidla s tímto modifikátorem jsou považována za neplatná.

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.


### Cosmetic rules priority {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, Mac, and Android**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#elemhide-syntax) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser extension**, the so called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## HTML filtering rules {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> HTML filtering rules are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

**Syntax**

```
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

* **`tagName`** — name of the element in lower case, for example, `div` or `script`.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules syntax](#elemhide-syntax).
* **`attributes`** — a list of attributes, that limit the elements selection. `name` — attribute name, `value` — substring, that is contained in attribute value.

**Příklady**

**HTML code:**
```html
<script data-src="/banner.js"></script>
```

**Rule:**
```
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

**Special attributes**

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

* **`tag-content`**

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

> You should use `""` to escape `"`, for instance: `$$script[tag-content="alert(""this is ad"")"]`

For example, take a look at this HTML code:
```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:
```
$$script[tag-content="banner"]
```

> **Nested elements**
> 
> If we are dealing with multiple nested elements and they all fall within the same HTML filtering rule, they all are going to be deleted.

* **`wildcard`**

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

> You should use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It will check, if the code of element contains two consecutive substrings `banner` and `text`.

* **`max-length`**

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value, a rule does not apply to the element.

> **Default value**
> 
> If this parameter is not specified, the `max-length` is considered to be 8192.

Např:
```
$$div[tag-content="banner"][max-length="400"]
```
This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

* **`min-length`**

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value, a rule does not apply to the element.

Např:
```
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

**Exceptions**

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains. The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:
```
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## JavaScript rules {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any javascript code to websites pages.

> **Omezení**
> 
> JavaScript rules can be used [**only in trusted filters**](#trusted-filters).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> JavaScript rules are not supported by AdGuard Content Blocker.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```
rule = [domains]  "#%#" script
```

* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`script`** — arbitrary javascript code **in one string**.

**Příklady**

* `example.org#%#window.__gaq = undefined;` executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

**Exceptions**

Similar to hiding rules, there is a special type of rules that disable the selected javascript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:
```
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## Scriptlet rules {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

> **Omezení**
> 
> Trusted scriptlets rules can be used [**only in trusted filters**](#trusted-filters).

> **Poznámka**
> 
> AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

**Syntax**

```
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

* **`scriptletName`** — required, a name of the scriptlet from AdGuard's Scriptlets library
* **`arguments`** — optional, a list of `string` arguments (no other types of arguments are supported)

**Příklady**

```
example.org#%#//scriptlet("abort-on-property-read", "alert")
```
This rule will be applied to `example.org` and subdomains pages and will execute the `abort-on-property-read` scriptlet with the `alert` parameter.

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Scriptlet rules are not supported by AdGuard Content Blocker.

### Trusted scriptlets {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

> **Poznámka**
> 
> Trusted scriptlets are not compatible with other ad blockers except AdGuard

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Trusted scriptlets rules are now supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.10.141 or later**.

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifiers for non-basic type of rules

* [`$app`](#non-basic-app-modifier)
* [`$domain`](#non-basic-domain-modifier)
* [`$path`](#non-basic-path-modifier)
* [`$url`](#non-basic-url-modifier)

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax**

```
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

* **`modifier`** — set of the modifiers described below.
* **`rule text`** — a rule to be modified.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values of the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

#### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Příklady**

* `[$app=org.example.app]example.com##.textad` hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
* `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
* `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` applies scriptlet `prevent-setInterval` only in Safari browser on Mac.
* `[$app=org.example.app]#@#.textad` disables all `##.textad` rules for all domains while using `org.example.app`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Such rules with `$app` modifier are supported by AdGuard for Windows, Mac and Android.

#### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Příklady**

* `[$domain=example.com]##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `[$domain=example.com|example.org]###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `[$domain=~example.com]##.textad` — this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

Please note that there are 2 ways to specify domain restrictions for non-basic rules:
1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be rejected.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Such rules with `$domain` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntax**

```
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

> If `pattern` is not set for `$path`, rule will apply only on the main page of website.

> `$path` modifier matches the query string as well.

> `$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Příklady**

* `[$path=page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
* `[$path=/page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
* `[$path=|/page.html]##.textad` hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
* `[$path=/page.html|]##.textad` hides a `div` with a class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>`
* `[$path=/page*.html]example.com##.textad` hides a `div` with a class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
* `[$path]example.com##.textad` hides a `div` with a class `textad` at the main page of `example.com`
* `[$domain=example.com,path=/page.html]##.textad` hides a `div` with a class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
* `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` hides a `div` with a class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please note the [escaped special characters](#non-basic-rules-modifiers-syntax))

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with `$path` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard Browser extension for Chrome, Firefox, Edge.

#### **`url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntax**

```
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Příklady**

* `[$url=||example.com/ads/*]##.textad` hides a `div` with a class `textad` at addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.
* `[$url=||example.org^]###adblock` hides an element with attribute `id` equal to `adblock` at `example.org` and its subdomains.
* `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` hides `div` elements of the class `textad` for all domains matching the regular expression `[a-z]+\.example\.com^`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Rules with the `$url` modifier are supported by AdGuard for Windows, Mac, and Android, **running CoreLibs version 1.11 or later**.

## Information for filters maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Preprocessor directives

We provide preprocessor directives that can be used by filters maintainers to improve compatibility with different ad blockers and provide:
* [including a file](#include-directive)
* [applying rules conditionally by ad blocker type](#conditions-directive)
* [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

> **Poznámka**
> 
> Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

> Preprocessor directives can be used in the User Rules or in the custom filters.

#### Including a file {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre- directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

> The files must originate from the same domain but may be located in a different folder.

> If included file is not found or unavailable, the whole filter update should fail.

> Same-origin limitation should be disabled for local custom filters.

**Příklady**

Filter URL: `https://example.org/path/filter.txt`
```
! Valid (same origin):
!#include https://example.org/path/includedfile.txt
!
! Valid (relative path):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Invalid (another origin):
!#include https://domain.com/path/includedfile.txt
```

#### Conditions {#conditions-directive}

Filters maintainers can use conditions to supply different rules depending on the ad blocker type. When an adblocker encounters an `!#if` directive, followed eventually by an `!#endif` directive, it will compile the code inside of the directives block only if the specified condition is true. Condition supports all the basic logical operators.

> A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive.

> Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

**Syntax**

```
!#if (conditions)
rules_list
!#endif
```
kde:
- `!#if (conditions)` — start of the block
- `conditions` — just like in some popular programming languages, preprocessor conditions are based on constants declared by ad blockers. Ad blocker authors define on their own what exact constants do they declare. Possible values:
  - `adguard` always declared; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
  - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
    - `adguard_app_windows` — AdGuard for Windows
    - `adguard_app_mac` — AdGuard for Mac
    - `adguard_app_android` — AdGuard for Android
    - `adguard_app_ios` — AdGuard for iOS
    - `adguard_ext_safari` — AdGuard for Safari
    - `adguard_ext_chromium` — AdGuard Browser extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
    - `adguard_ext_firefox` — AdGuard Browser extension for Firefox
    - `adguard_ext_edge` — AdGuard Browser extension for Edge Legacy
    - `adguard_ext_opera` — AdGuard Browser extension for Opera
    - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
    - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)
- `rules_list` — list of rules
- `!#endif` — end of the block

**Příklady**

```
! for all AdGuard products except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

#### Safari affinity {#safari-affinity-directive}

Safari is notoriously known for its harsh 150k max limit for filtering rules in content blockers. But in AdGuard for Safari and AdGuard for iOS max rule count is raised to 300k by splitting them into several content blockers. Generally, several filters categories are more or less independent, so there is such content blockers with such categories included:
- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

> `User rules` and `Allowlist` are added to every content blocker.

The main issue with using multiple content blockers is that rules inside these content blockers cannot influence each other. This may lead to different unexpected issues. So filters maintainers may use `!#safari_cb_affinity` to define Safari content blockers affinity for the rules inside of the directive block.

**Syntax**

```
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```
kde:
- `!#safari_cb_affinity(content_blockers)` — start of the block
- `content_blockers` — comma-separated list of content blockers. Possible values:
  - `general` — AdGuard General content blocker
  - `privacy` — AdGuard Privacy content blocker
  - `social` — AdGuard Social content blocker
  - `security` — AdGuard Security content blocker
  - `other` — AdGuard Other content blocker
  - `custom` — AdGuard Custom content blocker
  - `all` — special keyword that means that the rules must be included into **all** content blockers
- `rules_list` — list of rules
- `!#safari_cb_affinity` — end of the block

**Příklady**

```
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```
! to allowlist basic rule from AdGuard Tracking Protection filter filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Hints

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)).

**Syntax**

```
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

> Multiple hints can be applied.

#### `NOT_OPTIMIZED` hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```
kde:
* **filter** — filter identifier
* **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
* **minPercent** — lower bound of `percent` value
* **maxPercent** — upper bound of `percent` value
* **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

> In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser extension:
- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### `PLATFORM` and `NOT_PLATFORM` hints

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

* `windows` — AdGuard for Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

* `mac` — AdGuard for Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

* `android` — AdGuard for Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

* `ios` — AdGuard for iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

* `ext_chromium` — AdGuard Browser extension for Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

* `ext_ff` — AdGuard Browser extension for Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

* `ext_edge` — AdGuard Browser extension for Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

* `ext_opera` — AdGuard Browser extension for Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

* `ext_safari` — AdGuard for Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

* `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

* `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Příklady**

This rule will be available only in AdGuard for Windows, Mac, Android:
```
!+ PLATFORM(windows,mac,android)
||example.org^
```

This rule will be available for every platform except AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS:
```
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## How to debug filtering rules

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Záznam filtrování

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

* In **AdGuard for Windows** you will find it inside *Ad Blocker* tab or via the tray menu;
* In **AdGuard for Mac** it is under *Settings → Advanced → Filtering log*;
* In **AdGuard for Android** it is a separate item in the side menu, also filtering log for a specific app or website is accessible from the Assistant.
* In **AdGuard Browser extension** it is accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs.

> In **AdGuard for iOS** and in **AdGuard for Safari** Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

### Selectors debugging mode {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**
* `selectorParsed` — text of eventually parsed selector
* `timings` — list of DOM nodes matched by the selector
  * `appliesCount` — total number of times that the selector has been applied on the page
  * `appliesTimings` — time that it took to apply the selector on the page, for each of the instances that it has been applied (in milliseconds)
  * `meanTiming` — mean time that it took to apply the selector on the page
  * `standardDeviation` — standard deviation
  * `timingsSum` — total time it took to apply the selector on the page across all instances

**Printed only for remove pseudos:**
* `removed` — flag to signal if elements we removed

**Printed if elements are not removed:**
* `matchedElements` — list of DOM nodes matched by the selector
* `styleApplied` — parsed rule style declaration related to the selector

**Příklady**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```
#$?#.banner { display: none; debug: global; }
```

**Testing extended selectors without AdGuard**

ExtendedCss can be executed on any page without using any AdGuard product. In order to do that you should copy and execute the following code in a browser console:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Alternatively, install the [ExtendedCssDebugger userscript](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Now you can now use the `ExtendedCss` from global scope, and run its method [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) as `Document.querySelectorAll()`.

**Příklady**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// array of HTMLElements matched the `selector` is to be returned
ExtendedCss.query(selector);
```

### Debugging scriptlets {#debug-scriptlets}

If you are using AdGuard Browser extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

Následující skriptlety jsou speciálně vyvinuty zejména pro účely ladění:

* [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#debug-current-inline-script)
* [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#debug-on-property-read)
* [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#abort-on-property-write)
* [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-addEventListener)
* [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-on-stack-trace)
* [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log-eval)
* [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#log)

Následující skriptlety lze také použít pro účely ladění:

* [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#json-prune)
* [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-fetch)
* [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-requestanimationframe)
* [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-setinterval)
* [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-settimeout)
* [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-window-open) se specifikovaným parametrem `replacement`
* [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets#prevent-xhr)
* [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets#trusted-replace-fetch-response)
* [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets#trusted-replace-xhr-response)

## Good luck with creating filters!

We wish you luck with creating you own ad filters.

If you need an advice on how to create your own filters properly, our forum has a [special section](https://forum.adguard.com/index.php?forums/69/) dedicated to writing your own filtering rules.
