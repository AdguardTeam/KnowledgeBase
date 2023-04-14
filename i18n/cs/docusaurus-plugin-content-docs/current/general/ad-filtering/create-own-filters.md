---
title: Jak vytvářet vlastní filtry reklam
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

![Blocking by domain name](https://cdn.adtidy.org/content/kb/ad_blocker/general/0_blocking_domain.svg)

**Toto pravidlo blokuje:**

* `http://example.org/ad1.gif`
* `http://subdomain.example.org/ad1.gif`
* `https://ads.example.org:8000/`

**Toto pravidlo neblokuje:**

* `http://ads.example.org.us/ad1.gif`
* `http://example.com/redirect/http://ads.example.org/`

#### Blokování přesné adresy

![Blocking exact address](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Toto pravidlo blokuje:**

* `http://example.org/`

**Toto pravidlo neblokuje:**

* `https://example.org/banner/img`

#### Modifikátory základních pravidel

Pravidla filtrování podporují řadu modifikátorů, které umožňují doladit chování pravidla. Zde je příklad pravidla s několika jednoduchými modifikátory.

![Basic rule modifiers](https://cdn.adtidy.org/content/kb/ad_blocker/general/2_basic_rule_options.svg)

**Toto pravidlo blokuje:**

* `http://example.org/script.js`, pokud je tento skript načten z `example.com`.

**Toto pravidlo neblokuje:**

* `https://example.org/script.js`, pokud je tento skript načten z `example.org`.
* `https://example.org/banner.png`, protože se nejedná o skript.

#### Odblokování adresy

![](https://cdn.adtidy.org/content/kb/ad_blocker/general/3_basic_exception.svg)

**Toto pravidlo odblokuje:**

* `http://example.org/banner.png`, i když pro tuto adresu existuje pravidlo blokování.

> Pravidla blokování s modifikátorem [`$important`](#important-modifier) mohou přepsat výjimky.

#### Odblokování všeho na webové stránce

![Unblocking everything](https://cdn.adtidy.org/content/kb/ad_blocker/general/4_unblock_entire_website.svg)

**Toto pravidlo odblokuje**

* Zakáže všechna kosmetická pravidla na `example.com`.
* Odblokuje všechny požadavky odeslané z této webové stránky, i když existují pravidla blokování odpovídající těmto požadavkům.

#### Kosmetické pravidlo

![Cosmetic rule](https://cdn.adtidy.org/content/kb/ad_blocker/general/5_cosmetic_rules.svg)

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
> 3. V AdGuardu pro Windows, Mac a Android nemusí modifikátor `$popup` v některých případech detekovat vyskakovací okno a nebude zablokováno. Modifikátor `$popup` použije typ obsahu `document` se speciálním příznakem, který je předán blokovací stránce. Samotná blokovací stránka může provést některé kontroly a zavřít okno, pokud se skutečně jedná o vyskakovací okno. V opačném případě by se stránka měla načíst. Lze to kombinovat s dalšími modifikátory typu požadavku, jako je `$third-party` a `$important`. Blokovací stránka však nemusí v některých případech detekovat vyskakovací okno, proto se doporučuje místo toho použít uživatelský skript [AdGuard Blokátor vyskakovacích oken](https://github.com/AdguardTeam/PopupBlocker).

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
> Pravidla s modifikátorem `$specifichide` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

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
> Pravidla s modifikátorem `$replace` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Firefox. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

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

* `||example.org^$csp=frame-src 'none'` blokuje všechny obrázky na example.org a jejích subdoménách.
* `@@||example.org/page/*$csp=frame-src 'none'` zakáže všechna pravidla s modifikátorem `$csp` přesně odpovídajícím příznakem `frame-src 'none'` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo.
* `@@||example.org/page/*$csp` zakáže všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.
* `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` zakáže vložené skripty na všech stránkách odpovídajících vzoru pravidla.
* `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$csp` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

#### **`$permissions`** {#permissions-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

> Pro použití tohoto typu pravidel je nutné mít základní znalosti o vrstvě zabezpečení [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy).

U požadavků, které odpovídají pravidlu `$permissions`, AdGuard posiluje zásady funkcí odpovědi přidáním dalších zásad oprávnění, které se rovnají obsahu modifikátoru `$permissions`. Pravidla `$permissions` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Ostatní základní pravidla na to nemají žádný vliv, **kromě výjimek na úrovni dokumentu** (viz část s příklady).

> **Vícenásobná pravidla odpovídajících jednomu požadavku.**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$permissions`, použijem AdGuard každé z nich.

**Syntaxe**

Hodnota syntaxe `$permissions` je podobná [syntaxi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) záhlaví `Permissions-Policy` s jednou výjimkou: čárka, která odděluje několik prvků **MUSÍ** být uvozena — viz příklady níže. Seznam dostupných direktiv je k dispozici [zde](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

Hodnota `$permissions` může být v případě pravidel pro výjimky prázdná — viz příklady níže.

> **Omezení**
> 
> 1. Zakázané znaky v `$permissions` hodnotě: `$`;
> 2. `$permissions` je kompatibilní s omezeným seznamem modifikátorů: `$domain`, `$important`, a `$subdocument`.

**Příklady**

* `||example.org^$permissions=sync-xhrˇ=()` zakazuje synchronní požadavky `XMLHttpRequest` napříč `example.org`.
* `@@||example.org/page/*$permissions=sync-xhr=()` zakáže všechna pravidla s modifikátorem `$permissions` přesně odpovídajícím příznakem `sync-xhr=()` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo.
* `@@||example.org/page/*$permissions` zakáže všechna pravidla `$permissions` na všech stránkách odpovídajících vzoru pravidla.
* `$domain=example.org|example.com,permissions=oversized-images=()\; sync-script=()\; unsized-media=()` zakazuje nadměrné obrázky, synchronní skripty a nevhodné velikosti multimediálních prvků napříč `example.org` a `example.com`.
* `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$permission` na všech stránkách odpovídajících vzoru pravidla.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$permissions` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**.

#### **`$all`** {#all-modifier}

Modifikátor `$all` se skládá z modifikátorů [`$document`](#document-modifier), [`$popup`](#popup-modifier), [`$csp`](#csp-modifier). Např. pravidlo `||example.org^$all` se převádí na takovou sadu pravidel:
```
||example.org^$document,popup
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
||example.org^
```

#### **`$inline-script`** {#inline-script-modifier}

Modifikátor `$inline-script` je jakousi zkratkou pro modifikátor [`$csp`](#csp-modifier) s konkrétní hodnotou. Např. pravidlo `||example.org^$inline-script` se převádí na takovou sadu pravidel:
```
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

Modifikátor `$inline-font` je jakousi zkratkou pro modifikátor [`$csp`](#csp-modifier) s konkrétní hodnotou. Např. pravidlo `||example.org^$inline-font` se převádí na takovou sadu pravidel:
```
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$cookie`** {#cookie-modifier}

Modifikátor `$cookie` zcela mění chování pravidla. Namísto blokování požadavku, tento modifikátor potlačí nebo změní záhlaví `Cookie` a `Set-Cookie`.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$cookie`, použijeme každé z nich.

**Syntaxe**

```
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```
kde:
  * **`name`** — nepovinné, řetězec nebo regulární výraz pro přiřazení názvu cookie.
  * **`seconds`** — počet sekund aktuálního času pro posunutí data vypršení platnosti souboru cookie.
  * **`strategy`** — řetězec pro strategii použití cookie [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

Např.
```
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```
pokaždé, když AdGuard narazí na cookie s názvem `NAME` v požadavku na `example.org`, provede následující kroky:
  * Nastaví datum vypršení platnosti na aktuální čas plus `3600` sekund
  * Přiměje cookie použít "laxní" strategii [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

> **Uvození speciálních znaků**
> 
> Pokud je pro porovnání použit regulární výraz `name`, musí být dva znaky uvozeny: čárka `,` a znak dolaru `$`. Každý z nich označte zpětným lomítkem `\`. Např. uvozená čárka vypadá takto: `\,`.

**Příklady**

* `||example.org^$cookie` blokuje **všechny** soubory cookie nastavené doménou `example.org`; to je ekvivalent nastavení `maxAge=0`
* `$cookie=__cfduid` blokuje všude soubory cookie CloudFlare
* `$cookie=/__utm[a-z]/` blokuje všude soubory cookie Google Analytics
* `||facebook.com^$third-party,cookie=c_user` brání Facebooku ve sledování, i když jste přihlášeni

Pravidla `$cookie` nejsou ovlivněna pravidly pro běžné výjimky (`@@`), pokud se nejedná o výjimku `$document`. Aby bylo možné pravidlo `$cookie` zakázat, mělo by mít pravidlo výjimky také modifikátor `$cookie`. Jak to funguje:

* `@@||example.org^$cookie` odblokuje všechny soubory cookie nastavené doménou `example.org`
* `@@||example.org^$cookie=concept` odblokuje jeden soubor cookie s názvem `concept`
* `@@||example.org^$cookie=/^_ga_/` odblokuje každý soubor cookie, který odpovídá regulárnímu výrazu

> **Omezení**
> 
> Pravidla `$cookie` podporují omezený seznam modifikátorů: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$cookie` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

#### **`$network`** {#network-modifier}

Jedná se v podstatě o pravidla typu brány Firewall, která umožňují plně zablokovat nebo odblokovat přístup na zadanou vzdálenou adresu.

1. Pravidla `$network` odpovídají **pouze IP adresám**! Nelze je použít k zablokování nebo odblokování přístupu k doméně.
2. Chcete-li se shodovat s adresou IPv6, musíte použít sbalenou syntaxi, např. `[2001:4860:4860::8888]$network` namísto `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Pravidlo seznamu povolených `$network` způsobí, že AdGuard bude obcházet data odpovídajícího koncového bodu, např. nebude provádět žádné další filtrování.
4. Pokud část IP začíná a končí znakem `/`, je považována za regulární výraz.

> Pro lepší pochopení regulárních výrazů doporučujeme seznámit se s tímto [článkem](#regexp-support).

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

Tento modifikátor umožňuje zúžit pokrytí pravidla na konkrétní aplikaci (nebo seznam aplikací). V systémech Windows a Mac to nemusí být příliš důležité, ale v mobilních zařízeních, kde některá pravidla filtrování musí být specifická pro konkrétní aplikaci, je to velmi důležité.

* Android — použijte název balíčku aplikace, např. `org.example.app`.
* Windows — použijte název procesu, např. `chrome.exe`.
* Mac — použijte ID svazku nebo název procesu, např. `com.google.Chrome`.

> V případě počítače Mac můžete ID svazku nebo název procesu aplikace zjistit zobrazením příslušných podrobností o požadavku v záznamu filtrování.

**Příklady**

* `||baddomain.com^$app=org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z Android aplikace `org.example.app`.
* `||baddomain.com^$app=org.example.app1|org.example.app2` — stejné pravidlo, ale funguje jak pro `org.example.app1`, tak i pro `org.example.app2`.

Pokud chcete, aby se pravidlo nevztahovalo na určité aplikace, začněte název aplikace znakem `~`.

* `||baddomain.com^$app=~org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z jakékoli aplikace kromě `org.example.app`.
* `||baddomain.com^$app=~org.example.app1|~org.example.app2` — stejně jako výše, ale nyní jsou vyloučeny dvě aplikace: `org.example.app1` a `org.example.app2`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$app`.

#### **`$method`** {#method-modifier}

Tento modifikátor omezuje rozsah pravidla na požadavky, které používají zadanou sadu metod HTTP. Negované metody jsou povoleny. Metody musí být zadány malými písmeny, ale při porovnávání se nerozlišují velká a malá písmena.

**Příklady**

* `||evil.com^$method=get|head` blokuje pouze požadavky GET a HEAD na doméně `evil.com`.
* `||evil.com^$method=~post|~put` blokuje všechny požadavky kromě POST nebo PUT na doméně `evil.com`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> `$method` je k dispozici počínaje verzí CoreLibs v1.12.


#### **`$redirect`** {#redirect-modifier}

AdGuard je schopen přesměrovat webové požadavky na místní "zdroj".

**Syntaxe**

AdGuard používá stejnou syntaxi pravidel filtrování jako uBlock Origin. Je také kompatibilní s modifikátorem ABP `$rewrite=abp-resource`.

`$redirect` je modifikátor pro [základní pravidla filtrování](#basic-rules), takže pravidla s tímto modifikátorem podporují všechny ostatní základní modifikátory, jako jsou `$domain`, `$third-party`, `$script` atd.

> Hodnota modifikátoru `$redirect` musí být název zdroje, který bude použit pro přesměrování.

> `$redirect` je priorita pravidel vyšší než priorita běžných základních pravidel blokování. To znamená, že pokud existuje základní pravidlo blokování (i s modifikátorem `$important`), má před ním přednost pravidlo `$redirect`. Pokud existuje pravidlo seznamu povolených (`@@`) odpovídající stejné adrese URL, zakáže se i přesměrování (pokud není pravidlo `$redirect` označeno také jako `$important`).

##### Zakázání pravidel `$redirect`


* `||example.org/script.js$script,redirect=noopjs` — toto pravidlo přesměruje všechny požadavky na `example.org/script.js` na zdroj s názvem `noopjs`.
* `||example.org/test.mp4$media,redirect=noopmp4-1s` — toto pravidlo přesměruje všechny požadavky na `example.org/test.mp4` na zdroj s názvem `noopmp4-1s`.
* `@@||example.org^$redirect` zakáže všechna pravidla `$redirect` pro URL adresy, které odpovídají `||example.org^`.
* `@@||example.org^$redirect=nooptext` zakáže všechna pravidla s `$redirect=nooptext` pro všechny požadavky, které odpovídají `||example.org^`.

> Další informace o přesměrování a jeho použití jsou k dispozici na adrese [na GitHubu](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$redirect` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

#### **`$redirect-rule`** {#redirect-rule-modifier}

Toto je v podstatě alias [`$redirect`](#redirect-modifier), protože má stejné hodnoty "přesměrování" a logika je téměř podobná. Rozdíl je v tom, že `$redirect-rule` se použije pouze v případě, kdy je cílový požadavek blokován jiným základním pravidlem.

> Negace `$redirect-rule` funguje úplně stejně jako u běžných pravidel `$redirect`. Ještě více než to, bude `@@||example.org^$redirect` negovat jak pravidla `$redirect`, tak `$redirect-rule`.

**Příklady**

```
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

V tomto případě budou pouze požadavky na `example.org/script.js` "přesměrovány" na `noopjs`. Všechny ostatní požadavky na `example.org` zůstanou nedotčeny.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$redirect-rule` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

#### **`$denyallow`** {#denyallow-modifier}

Modifikátor `$denyallow` umožňuje vyhnout se vytváření dalších pravidel, pokud je potřeba zakázat určité pravidlo pro konkrétní domény. `$denyallow` odpovídá pouze cílovým doménám, nikoli doménám odkazujícím.

Přidání tohoto modifikátoru k pravidlu je ekvivalentní vyloučení domén podle shodného vzoru pravidla nebo přidání odpovídajících pravidel výjimek. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

> **Omezení**
> 
> * Vzor shody pravidla se nemůže zaměřit na žádné konkrétní domény, např. nemůže začínat `||`.
> * Domény v hodnotě modifikátoru nemohou být negovány, např. `$denyallow=~x.com`, nebo mít zástupný znak TLD, např. `$denyallow=x.*`.
> 
> Pravidla, která tato omezení porušují, jsou považována za neplatná.

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
> Pravidla s modifikátorem `$denyallow` nejsou Blokátorem obsahu AdGuard podporována.

#### **`$removeparam`** {#removeparam-modifier}

> `$queryprune` je alias `$removeparam`. Protože je `$queryprune` zastaralý, nepoužívejte jej a místo něj použijte `$removeparam`.

Pravidla s modifikátorem `$removeparam` jsou určena k odstranění parametrů dotazu z požadavků adres URL. Vezměte prosím na vědomí, že tato pravidla platí pouze pro `GET`, `HEAD`, `OPTIONS` a [někdy požadavky](#removeparam-modifier-compatibility) `POST`.

> Pravidla `$removeparam`, která neobsahují žádné modifikátory typu obsahu [](#content-type-modifiers), budou odpovídat pouze požadavkům, jejichž typem obsahu je `document`.

**Syntaxe**

**Základní syntaxe**

* `$removeparam=param` — odstraní parametr dotazu s názvem `param` z URL libovolného požadavku, např. požadavek na `http://example.com/page?param=1&another=2` bude transformován na `http://example.com/page?another=2`.

> Základní syntaxe `$removeparam` je podporována počínaje verzí [CoreLibs 1.7](https://adguard.com/en/blog/introducing-corelibs.html) a Rozšířením prohlížeče AdGuard v3.6.

**Regulární výrazy**

Regulární výrazy můžete použít také k porovnání parametrů dotazu a/nebo jejich hodnot:

* `$removeparam=/regexp/[options]` — odstraní parametry dotazu, které odpovídají regulárnímu výrazu `regexp` z adres URL jakéhokoli požadavku. Na rozdíl od základní syntaxe to znamená *"odebrat parametry dotazu normalizované na řetězec `name=value`, který odpovídá regulárnímu výrazu `regexp` "*. `[options]` zde je seznam možností regulárních výrazů. V současné době je jedinou podporovanou možností `i`, díky čemuž se nerozlišují malá a velká písmena.

> Syntaxe regulárních výrazů `$removeparam` bude podporována od CoreLibs v1.8 a Rozšíření prohlížeče AdGuard v4.0. Prozatím používejte zjednodušenou verzi: `$removeparam=param`.

> **Uvození speciálních znaků**
> 
> Nezapomeňte v regulárních výrazech uvodit speciální znaky jako `,`, `/` a `$`. Pro tento účel použijte znak `\`. Např. uvozená čárka by měla vypadat takto: `\,`.

> **Poznámka**
> 
> Pravidla typu regexp se zaměřují na název i hodnotu parametru. Aby se minimalizovala možnost chyb, je bezpečnější začínat každý regexp znakem `/^`, pokud se nezaměřujete výslovně na hodnoty parametrů.

> Pokusíme se automaticky detekovat a ignorovat neuvozený znak `$` pomocí jednoduchého pravidla: Nejedná se o oddělovač možností, pokud jsou všechny tři hodnoty pravdivé: 1. Vypadá to jako `$/`; 2. Nalevo od něj je další znak lomítka `/`; 3. Nalevo od tohoto znaku lomítka je další znak dolaru bez uvození `$`.

**Odebrat všechny parametry dotazu**

Chcete-li odstranit všechny parametry dotazu, zadejte samostatně `$removeparam`:

* `||example.org^$removeparam` — odstraní všechny parametry dotazu z adres URL odpovídajících `||example.org^`.

**Inverze**

Pro použití inverze použijte `~`:

* `$removeparam=~param` — odstraní všechny parametry dotazu s názvem odlišným od `param`.
* `$removeparam=~/regexp/` — odstraní všechny parametry dotazu, které neodpovídají regulárnímu výrazu `regexp`.

**Negace `$removeparam`**

Tento druh pravidel funguje v podstatě stejně jako u modifikátorů [`$csp`](#csp-modifier) a [`$redirect`](#redirect-modifier).

K negaci `$removeparam` použijte `@@`:

* `@@||example.org^$removeparam` neguje všechna pravidla `$removeparam` pro URL adresy, které odpovídají `||example.org^`.
* `@@||example.org^$removeparam=param` neguje všechna pravidla s `$removeparam=param` pro jakýkoliv požadavek, který odpovídá `||example.org^`.
* `@@||example.org^$removeparam=/regexp/` neguje všechna pravidla s `$removeparam=/regexp/` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$removeparam`, bude každé z nich použito jedno po druhém.

**Příklady**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

S těmito pravidly bude z jakéhokoli požadavku odstraněno [UTM parametrů](https://en.wikipedia.org/wiki/UTM_parameters), kromě toho, že požadavky na `example.com` nebudou odstraněny vůbec, např. `http://google.com/page?utm_source=s&utm_referrer= fb.com&utm_content=img` bude transformováno na `http://google.com/page`, ale `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` nebude ovlivněno pravidlem blokování.

* `$removeparam=utm_source` — odstraní parametr dotazu `utm_source` ze všech požadavků.

* `$removeparam=/utm_.*/` — odstraní všechny parametry `utm_* query` z URL libovolného požadavku, např. požadavek na `http://example.com/page?utm_source=test` bude transformován na `http://example.com/page`.

* `$removeparam=/^utm_source=campaign$/` — odstraní parametr dotazu `utm_source` s hodnotou rovnou `campaign`. Nemá vliv na ostatní parametry `utm_source`.

**Negace pravidla `$removeparam` a jeho nahrazení jiným pravidlem**

```
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

Díky těmto pravidlům budou ze všech požadavků odstraněny identifikátory kliknutí Google, Yandex a Facebook. Existuje jedna výjimka: Z požadavků na example.com nebude odstraněno Google Click ID (gclid).

**Negace pro všechny parametry `$removeparam`**

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

Díky těmto pravidlům budou zadané parametry UTM odstraněny ze všech požadavků s výjimkou požadavků na `example.org`.

> **Kompatibilita s jinými modifikátory**
> 
> Pravidla `$removeparam` jsou kompatibilní se [základními modifikátory](#basic-rules-common-modifiers), [modifikátory typu obsahu](#content-type-modifiers) a s modifikátory `$important` a `$app`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

> **Poznámka**
> 
> Pravidla `$removeparam` lze také zakázat pravidly výjimek `$document` a `$urlblock`. Základní pravidla pro výjimky bez modifikátorů to však nedělají. Např. `@@||example.com^` nezakáže `$removeparam=p` pro požadavky na **example.com**, ale `@@||example.com^$urlblock` ano.

> ##### **Kompatibilita s různými verzemi AdGuardu** {#removeparam-modifier-compatibility}
> 
> * Pravidla s modifikátorem `$removeparam` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.
> 
> * Typy požadavků `POST` podporuje pouze AdGuard pro Windows, Mac a Android ** s CoreLibs verze 1.10 nebo novější**.

> **Omezení**
> 
> Pravidla s modifikátorem `$removeparam` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

#### **`$removeheader`** {#removeheader-modifier}

Pravidla s modifikátorem `$removeheader` jsou určena k odstranění záhlaví z požadavků a odpovědí HTTP. Původní motivací pro tento typ pravidla je možnost zbavit se záhlaví `Refresh`, které se často používá k přesměrování uživatelů na nežádoucí místo. To však není jediný případ, kdy může být tento modifikátor užitečný.

Stejně jako `$csp`, `$redirect`, `$removeparam` a `$cookie` i tento modifikátor existuje samostatně, pravidla s ním nezávisí na běžných základních pravidlech, tj. pravidelná výjimka nebo pravidla blokování jej neovlivní. Ve výchozím nastavení ovlivňuje pouze záhlavíodpovědí. Můžete jej však také změnit tak, aby odstraňoval hlavičky z požadavků HTTP.

**Syntaxe**

**Základní syntaxe**

* `||example.org^$removeheader=header-name` odstraní **odpověď** záhlaví s názvem `header-name`
* `||example.org^$removeheader=request:header-name` odstraní **požadavek** záhlaví s názvem `header-name`

> `$removeheader` nerozlišuje velká a malá písmena, doporučujeme vždy používat malá písmena.

**Negace `$removeheader`**

Tento typ pravidel funguje v podstatě stejně jako u modifikátorů `$csp` a `$redirect`.

K negaci `$removeheader` použijte `@@`:

* `@@||example.org^$removeheader` neguje **všechna** pravidla `$removeheader` pro URL adresy, které odpovídají `||example.org^`.
* `@@||example.org^$removeheader=header` neguje všechna pravidla s `$removeheader=header` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

> Pravidla `$removeheader` lze také zakázat pravidly výjimek `$document` a `$urlblock`. Základní pravidla pro výjimky bez modifikátorů to však nedělají. Např. `@@||example.com^` nezakáže `$removeheader=p` pro požadavky na `example.com`, ale `@@||example.com^$urlblock` ano.

> **Vícenásobná pravidla odpovídajících jednomu požadavku**
> 
> V případě, že jednomu požadavku odpovídá více pravidel `$removeheader`, použijeme každé z nich.

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
> 3. Pravidla `$removeheader` nejsou kompatibilní s žádnými jinými modifikátory kromě `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, a [modifikátorů typu obsahu](#content-type-modifiers), např. `$script`, `$stylesheet`, atd. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

**Příklady**

* `||example.org^$removeheader=refresh` odstraní záhlaví `Refresh` ze všech HTTP odpovědí vrácených doménou `example.org` a jejími subdoménami.
* `||example.org^$removeheader=request:x-client-data` odstraní záhlaví `X-Client-Data` ze všech požadavků HTTP.
* Další blok pravidel odstraní záhlaví `Refresh` a `Location` ze všech odpovědí HTTP vrácených doménou `example.org` s výjimkou požadavků na `example.org/path/*`, u kterých nebudou odstraněny žádné záhlaví:
  ```
  ||example.org^$removeheader=refresh
  ||example.org^$removeheader=location
  @@||example.org/path/$removeheader
  ```

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$removeheader` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

#### **`$hls`** {#hls-modifier}

Pravidla `$hls` upravují odpověď na shodný požadavek. Jsou určena k pohodlnému odstraňování segmentů ze seznamů stop [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

> **Poznámka**
> 
> Slovo "segment" v tomto dokumentu znamená buď "mediální segment" nebo "seznam skladeb" jako součást "hlavního seznamu skladeb": pravidla `$hls` nerozlišují mezi "hlavním seznamem skladeb" a "mediálním seznamem skladeb".

**Syntaxe**

* `||example.org^$hls=urlpattern` odstraní segmenty, jejichž adresa URL odpovídá vzoru adresy URL `urlpattern`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\` uvnitř `urlpattern`.
* `||example.org^$hls=/regexp/options` odstraní segmenty, kde URL nebo jeden ze znaků (u určitých možností, pokud jsou přítomny) odpovídá regulárnímu výrazu `regexp`. K dispozici jsou tyto možnosti `options`:
  * `t` — namísto testování adresy URL segmentu otestujte každý znak segmentu podle regulárního výrazu. Segment se shodným znakem je odstraněn;
  * `i` — regulární výraz nerozlišuje velká a malá písmena.

> Znaky `/`, `$` a `,` musí být uvozeny pomocí `\` uvnitř `regexp`.

**Výjimky**

Základní výjimky URL nesmí zakázat pravidla s modifikátorem `$hls`. Lze je zakázat, jak je popsáno níže:
* `@@||example.org^$hls` zakáže všechna pravidla `$hls` pro odpovědi z URL odpovídajících `||example.org^`.
* `@@||example.org^$hls=text` zakáže všechna pravidla `$hls` s hodnotou modifikátoru `$hls` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

> Pravidla `$hls` lze také zakázat pravidly výjimek `$document`, `$content` a `$urlblock`.

> **Omezení**
> 
> * Pravidla `$hls` jsou povolena pouze v důvěryhodných filtrech.
> * Pravidla `$hls` nejsou kompatibilní s žádnými jinými modifikátory kromě `$domain`, `$third- party`, `$app`, `$important`, `$match- case` a `$xmlhttprequest`.
> * `$hls` pravidla platí pouze pro seznamy stop HLS, což je text kódovaný v UTF-8 začínající řádkem `#EXTM3U`. Jakákoli jiná odpověď nebude těmito pravidly upravena.
> * Pravidla `$hls` neplatí, pokud je velikost původní odpovědi větší než 3 MB.

> **Poznámka**
> 
> Když vícenásobná pravidla `$hls` odpovídají stejnému požadavku, jejich účinek je kumulativní.

**Příklady**

* `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` odstraní všechny segmenty se shodnou URL.
* `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` dosáhne víceméně téhož pomocí regulárního výrazu namísto vzoru URL.
* `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` odstraní všechny segmenty, které mají odpovídající znak.

**Anatomie seznamu stop HLS**

Rychlé shrnutí [specifikace](https://datatracker.ietf.org/doc/html/rfc8216):
1. Seznam stop HLS je kolekce textových řádků.
2. Řádek může být prázdný, komentář (začíná `#`), znak (také začíná `#`, lze jej rozpoznat pouze podle názvu) nebo URL.
3. Řádek URL se nazývá "segment".
4. Znaky se mohou vztahovat na jeden segment, tj. první řádek adresy URL za znakem, na všechny segmenty následující za znakem až do znaku se stejným názvem nebo na celý seznam skladeb.

Některé specifické body týkající se fungování pravidel `$hls`:
1. Při odstranění segmentu se odstraní také všechny znaky, které se vztahují pouze k tomuto segmentu.
2. Pokud se znak vztahuje na více segmentů a všechny tyto segmenty jsou odstraněny, je odstraněna i znak.
3. Protože neexistuje způsob, jak rozpoznat různé druhy znaků podle syntaxe, rozpoznáváme všechny znaky uvedené v RFC a některé nestandardní znaky, se kterými jsme se setkali v praxi. Všechny řádky začínající na `#`. Ty, které nejsou rozpoznány jako znak, jsou předány bez úprav a nejsou porovnávány s pravidly.
4. Nepřiřazujeme znaky, které se vztahují na celý seznam videí a pravidla `$hls` nelze použít k jejich odstranění, protože pravidla `$hls` jsou určena k odstranění segmentů. Pokud víte, co děláte, můžete pomocí pravidel `$replace` odstranit nebo přepsat pouze jeden znak ze seznamu skladeb.

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

Pravidla `$jsonprune` upravují odpověď na odpovídající požadavek odstraněním položek JSON, které odpovídají upravenému výrazu [JSONPath](https://goessner.net/articles/JsonPath/). Nemění odpovědi, které nejsou platnými dokumenty JSON.

> V AdGuardu pro Windows, Mac a Android **s CoreLibs verze 1.11 nebo novější**, podporuje `$jsonprune` také úpravu dokumentů JSONP (padded JSON).

**Syntaxe**

* `||example.org^$jsonprune=expression` odstraní z odpovědi položky, které odpovídají upravenému výrazu JSONPath `expression`.

> Vzhledem k tomu, jak funguje rozbor pravidel, musí být znaky `$` a `,` uvozeny pomocí `\` uvnitř `expression`.

Upravená syntaxe JSONPath má oproti původní následující rozdíly:

1.  Výrazy skriptů nejsou podporovány.
2.  Podporované výrazy filtrů jsou:
      * `?(has <key>)` — "true", pokud má aktuální objekt zadaný klíč.
      * `?(key-eq <key> <value>)` — "true", pokud má aktuální objekt zadaný klíč a jeho hodnota se rovná zadané hodnotě.
      * `?(key-substr <key> <value>)` — "true", pokud je zadaná hodnota podřetězcem hodnoty zadaného klíče aktuálního objektu.
3.  Mezery mimo řetězce s dvojitými nebo jednoduchými uvozovkami nemají žádný význam.
4.  Lze použít řetězce s dvojitými i jednoduchými uvozovkami.
5.  Výrazy končící na `..` nejsou podporovány.
6.  V hranatých závorkách lze zadat vícero dílků pole.

Existují různé online nástroje, které usnadňují práci s výrazy JSONPath:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Mějte však na paměti, že všechny implementace JSONPath mají jedinečné vlastnosti a jsou vzájemně nekompatibilní.

**Výjimky**

Základní výjimky URL nesmí zakázat pravidla s modifikátorem `$jsonprune`. Lze je zakázat, jak je popsáno níže:
* `@@||example.org^$jsonprune` zakáže všechna pravidla `$jsonprune` pro odpovědi z URL odpovídajících `||example.org^`.
* `@@||example.org^$jsonprune=text` zakáže všechna pravidla `$jsonprune` s hodnotou modifikátoru `$jsonprune` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

> Pravidla `$jsonprune` lze také zakázat pravidly výjimek `$document`, `$content` a `$urlblock`.

> **Omezení**
> 
> * Pravidla `$jsonprune` nejsou kompatibilní s žádnými jinými modifikátory kromě `$domain`, `$third- party`, `$app`, `$important`, `$match- case` a `$xmlhttprequest`.
> * Pravidla `$jsonprune` neplatí, pokud je velikost původní odpovědi větší než 3 MB.

> **Poznámka**
> 
> Když vícenásobná pravidla `$jsonprune` odpovídají stejnému požadavku, jsou seřazena v lexikografickém pořadí, první pravidlo je aplikováno na původní odpověď a každé ze zbývajících pravidel je aplikováno na výsledek použití předchozího.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$jsonprune` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.10 nebo novější**.

**Příklady**

* `||example.org^$jsonprune=\$..[one\, "two three"]` odstraní všechny výskyty klíčů "one" a "two three" kdekoli v dokumentu JSON.

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

* `||example.org^$jsonprune=\$.a[?(has ad_origin)]` odstraní všechny potomky `a`, které mají klíč `ad_origin`.

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

* `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` odstraní všechny položky, které jsou na úrovni vnoření 3 a mají vlastnost "Some key" rovnu "Some value".

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

**Vnořené výrazy JSONPath**

> V AdGuardu pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**, lze výrazy JSONPath použít jako klíče ve výrazech filtru.

* `||example.org^$jsonprune=\$.elems[?(má "\$.abc")]` odstraní všechny potomky `elems`, které mají vlastnost volitelnou výrazem JSONPath `$.abc`.

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

* `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` odstraní všechny potomky `elems`, které mají vlastnost volitelnou pomocí výrazu JSONPath `$.a.b.c` s hodnotou rovnou `"abc"`.

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

Modifikátor `noop` nedělá nic a lze jej použít pouze ke zvýšení čitelnosti pravidel. Skládá se ze sekvence znaků podtržítka (`_`) libovolné délky a může se v pravidle objevit tolikrát, kolikrát je potřeba.

**Příklady**

```
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `noop` nejsou Blokátorem obsahu AdGuard podporována.

#### **`$empty` (zastaralé)** {#empty-modifier}

> **Upozornění na vyřazení**
> 
> Tento modifikátor je zastaralý a nahrazuje jej modifikátor [`$redirect`](#redirect-modifier). Pravidla s modifikátorem `$empty` se nyní převádějí na `$redirect=nooptext`.

Obvykle se zablokované požadavky v prohlížeči tváří jako chyba serveru. Pokud použijete modifikátor `$empty`, AdGuard bude emulovat prázdnou odpověď ze serveru se stavem `200 OK`.

**Příklady**

* `||example.org^$empty` vrátí prázdnou odpověď na všechny požadavky na `example.org` a všechny subdomény.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$empty` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

#### **`$mp4` (zastaralé)** {#mp4-modifier}

> **Upozornění na vyřazení**
> 
> Tento modifikátor je zastaralý a nahrazuje jej modifikátor [`$redirect`](#redirect-modifier). Pravidla s modifikátorem `$mp4` se nyní převádějí na `$redirect=noopmp4-1s,media`.

Jako odpověď na zablokovaný požadavek vrátí AdGuard krátký zástupný videoklip.

**Příklady**

* `||example.com/videa/$mp4` zablokuje všechna stahování videa z `||example.com/videa/*` a změní odpověď na zástupný videoklip.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$mp4` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a Safari.

# Ostatní pravidla

Možnosti základních pravidel však nemusí být pro blokování reklam dostatečné. Někdy potřebujete skrýt prvek nebo změnit část kódu HTML webové stránky, aniž byste cokoli porušili. Pravidla popsaná v této části jsou vytvořena speciálně pro tento účel.


## Kosmetická pravidla {#cosmetic-rules}

> Práce s ostatními pravidly vyžaduje základní znalost HTML a CSS. Pokud se tedy chcete naučit, jak taková pravidla vytvářet, doporučujeme seznámit se s touto [dokumentací](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

### Pravidla pro skrytí prvků {#cosmetic-elemhide-rules}

Pravidla pro skrytí prvků slouží ke skrývání prvků webových stránek. Je to podobné jako použít styl `{ display: none; }` na vybraný prvek.

> Pravidla pro skrytí prvků mohou fungovat odlišně [v závislosti na platformě](#cosmetic-rules-priority).

#### Syntaxe {#non-basic-rules-modifiers-syntax}

```
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selektor](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) definuje prvky, které mají být skryty.
* **`domains`** — omezení domény pro dané pravidlo.

Pokud chcete omezit oblast použití pravidel na určité domény, stačí je zadat oddělené čárkami. Např.: `example.org,example.com##selector`.

> Toto pravidlo bude také použito na všechny subdomény `example.org` a `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`. Např.: `~example.org##selector`.

V jednom pravidle můžete použít oba přístupy. Např. `example.org,~subdomain.example.org##domain` bude fungovat pro `example.org` a všechny subdomény **kromě `subdomain.example.org`**.

> **Poznámka**
> 
> Pravidla pro skrývání prvků na sobě nejsou závislá. Pokud je ve filtru pravidlo `example.org##selector` a přidáte `~example.org##selector`, budou obě pravidla použita nezávisle.

**Příklady**

* `example.com##div.textad` — skryje `div` s třídou `textad` na doméně `example.com` a všech subdoménách.
* `example.com,example.org###adblock` — skryje prvek s atributem `id`, který se rovná `adblock` na `example.com`, `example.org` a všech subdoménách.
* `~example.com##.textad` — skryje prvek s třídou `textad` na všech doménách kromě `example.com` a jejích subdomén.

> **Omezení**
> 
> Safari nepodporuje povolené a omezené domény. Takže pravidla jako `example.org,~foo.example.org##.textad` jsou v AdGuardu pro Safari neplatná.

**Výjimky**

Výjimky mohou zakázat některá pravidla pro určité domény. Jsou velmi podobné běžným pravidlům výjimek, ale namísto `##` musíte použít `#@#`.

Ve filtru je např. pravidlo:
```
##.textad
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:
```
example.com#@#.textad
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény. Úplně zakáže odpovídající pravidlo CSS elemhide na VŠECH doménách:
```
#@#.textad
```

Toho lze dosáhnout přidáním tohoto pravidla:
```
*#@#.textad
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

### Pravidla CSS {#cosmetic-css-rules}

Někdy pouhé skrytí prvku k vyřešení reklamy nestačí. Např. zablokování prvku reklamy může jen narušit rozvržení stránky. V tomto případě může AdGuard použít pravidla, která jsou mnohem flexibilnější než pravidla pro skrývání. Pomocí těchto pravidel můžete v podstatě přidat na stránku libovolné styly CSS.

> **Omezení**
> 
> Styly, které vedou k načtení jakéhokoli zdroje, jsou zakázány. V podstatě to znamená, že ve stylu nelze použít žádný typ hodnoty `<url>`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla CSS nejsou Blokátorem obsahu AdGuard podporována.

> Pravidla CSS mohou fungovat odlišně [v závislosti na platformě](#cosmetic-rules-priority).

**Syntaxe**

```
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [selektor CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), který definuje prvky, na které chceme styl použít.
* **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#elemhide-syntax).
* **`style`** — styl CSS, který chceme použít na vybrané prvky.

**Příklady**

```
example.com#$#body { background-color: #333!important; }
```

Toto pravidlo použije styl `background-color: #333!important;` na prvek `body` na doménu `example.com` a všechny subdomény.

**Výjimky**

Stejně jako u skrývání prvků existuje typ pravidel, který zakáže vybrané pravidlo stylu CSS pro určité domény. Syntaxe pravidel pro výjimky je téměř stejná, stačí jen změnit `#$#` na `#@$#`.

Ve filtru je např. pravidlo:
```
#$#.textad { visibility: hidden; }
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:
```
example.com#@$#.textad { visibility: hidden; }
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo CSS. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

### Rozšířené CSS selektory {#extended-css-selectors}

* [Omezení](#extended-css-limitations)
* [Pseudo-třída `:has()`](#extended-css-has)
* [Pseudo-třída `:contains()`](#extended-css-contains)
* [Pseudo-třída `:matches-css()`](#extended-css-matches-css)
* [Pseudo-třída `:matches-attr()`](#extended-css-matches-attr)
* [Pseudo-třída `:matches-property()`](#extended-css-matches-property)
* [Pseudo-třída `:xpath()`](#extended-css-xpath)
* [Pseudo-třída `:nth-ancestor()`](#extended-css-nth-ancestor)
* [Pseudo-třída `:upward()`](#extended-css-upward)
* [Pseudo-třída `:remove()` a pseudo-vlastnost `remove`](#remove-pseudos)
* [Pseudo-třída `:is()`](#extended-css-is)
* [Pseudo-třída `:not()`](#extended-css-not)
* [Pseudo-třída `:if-not()` (zastaralé)](#extended-css-if-not)

CSS 3.0 ne vždy stačí k blokování reklam. AdGuard tento problém řeší rozšířením možností CSS o podporu nových pseudo-prvků. Vyvinuli jsme samostatnou [open-source knihovnu](https://github.com/AdguardTeam/ExtendedCss) pro výběr nestandardních prvků a aplikaci CSS stylů s rozšířenými vlastnostmi.

Myšlenkou rozšířených možností je možnost přiřazovat prvky DOM pomocí selektorů na základě jejich vlastní reprezentace (styl, textový obsah atd.) nebo vztahů s jinými prvky. Existuje také možnost použít styly s nestandardními vlastnostmi CSS.

> **Oblast použití**
> 
> Rozšířené selektory lze použít v jakémkoli kosmetickém pravidle, ať už se jedná o pravidla pro [skrytí prvků](#cosmetic-elemhide-rules) nebo [pravidla CSS](#cosmetic-css-rules).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla se selektory CSS nejsou Blokátorem obsahu AdGuard podporována.

**Syntaxe**

Bez ohledu na pseudo-třídy CSS, které v pravidle používáte, můžete pomocí speciálních znaků vynutit použití těchto pravidel pomocí ExtendedCss. Doporučujeme používat tyto znaky pro všechna rozšířená kosmetická pravidla CSS, aby bylo snazší je najít.

Syntaxe rozšířených pravidel CSS:

* `#?#` — pro skrytí prvku, `#@?#` — pro výjimky
* `#$?#` — pro pravidlo CSS, `#@$?#` — pro výjimky

**Důrazně doporučujeme** použít tyto znaky kdykoli, když používáte rozšířený selektor CSS.

**Příklady**

* `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — toto pravidlo blokuje všechny prvky `div` obsahující podřízený uzel, který má odkaz s atributy `[target="_blank"][rel="nofollow"]`. Pravidlo platí pouze pro `example.org` a její subdomény.
* `example.com#$?#h3:contains(cookies) { display: none!important; }` — toto pravidlo nastaví styl `display: none!important` všem prvkům `h3`, které obsahují slovo `cookies`. Pravidlo platí pouze pro `example.com` a všechny její subdomény.
* `example.net#?#.banner:matches-css(width: 360px)` — toto pravidlo blokuje všechny prvky `.banner` s vlastností stylu `width: 360px`. Pravidlo platí pouze pro `example.net` a její subdomény.
* `example.net#@?#.banner:matches-css(width: 360px)` — toto pravidlo zakáže předchozí pravidlo.

> Standardní CSS selektory můžete použít pomocí knihovny ExtendedCss pomocí znaku pravidla `#?#`, např. `#?#div.banner`.

Přečtěte si další informace o [ladění rozšířených selektorů](#selectors-debugging-mode).

> **Poznámka**
> 
> Některé pseudo-třídy před sebou selektor nevyžadují. Přesto přidání [univerzálního selektoru](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` usnadňuje čtení rozšířeného selektoru, i když nemá žádný vliv na chování při porovnávání. Takže selektor `#blok :has(> .inner)` funguje přesně jako `#blok *:has(> .inner)`, ale druhý je zřejmější.
> 
> Názvy pseudo-tříd nerozlišují malá a velká písmena, např. `:HAS()` funguje jako `:has()`. Přesto se běžně používají názvy s malými písmeny.

#### Limitace ExtendedCss {#extended-css-limitations}

1. CSS [komentáře](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) a [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) nejsou podporovány.

2. Konkrétní pseudo-třída může mít svá vlastní omezení: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).


#### Pseudo-třída `:has()` {#extended-css-has}

Návrh specifikace CSS 4.0 popisuje [`:has()`pseudo-třídu](https://www.w3.org/TR/selectors-4/#relational). Bohužel [to zatím není podporováno](https://caniuse.com/css-has) všemi oblíbenými prohlížeči.

> **Poznámka**
> 
> Pravidla s pseudo-třídou `:has()` by měla používat nativní implementaci [ `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has), pokud používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:has()`, použijte explicitně znak `#?#`/`#$?#`.

> **Kompatibilita s jinými pseudo-třídami**
> 
> Synonyma `:-abp-has()` podporují ExtendedCss pro lepší kompatibilitu.

> **Upozornění na vyřazení**
> 
> `:if()` již není podporováno jako synonymum pro `:has()`.

**Syntaxe**

```
[target]:has(selector)
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selector` — povinný, standardní nebo rozšířený selektor CSS

Pseudo-třída `:has()` vybere prvky `target`, které se hodí do `selector`. Také `selector` může začínat kombinátorem.

Seznam selektorů lze nastavit také v `selector`. V tomto případě se zatím porovnávají **všechny** selektory v seznamu. V budoucnu bude jako argument stanovena hodnota [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list).

##### `:has()` limitations {#extended-css-has-limitations}

> Použití pseudotřídy `:has()` je pro [některé případy omezeno (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54): - zakazuje `:has()` uvnitř pseudonymů akceptujících pouze složené selektory; - zakazuje `:has()` za běžnými pseudo-elementy.

> Nativní pseudo-třída `:has()` neumožňuje `:has()`, `:is()`, `:where()` uvnitř argumentu `:has()`, aby se zabránilo zvýšení složitosti zneplatnění `:has()` ([případ 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). ExtendedCss však dříve takové omezení nemělo a seznamy filtrů již taková pravidla obsahují, proto jsme toto omezení do ExtendedCss nepřidali a umožnili jsme používat `:has()` uvnitř `:has()`, jak to bylo možné dříve. Chcete-li to použít, stačí vynutit použití ExtendedCss nastavením znaku pravidla `#?#`/`#$?#`.

> Nativní implementace neumožňuje žádné použití `:scope` uvnitř argumentu `:has()` ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Přesto v seznamech filtrů některá taková pravidla existují: `div:has(:scope > a)`, která nadále podporujeme tím, že je jednoduše převedeme na `div:has(> a)`, jak se to dělalo dříve.

**Příklady**

`div:has(.banner)` vybere všechny prvky `div`, které **obsahují** prvek se třídou `banner`:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span class="banner">inner element</span>
</div>
```

`div:has(> .banner)` vybere všechny `prvky div`, které **obsahují prvek třídy** `banner` jako *přímý potomek* z `div`:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <p class="banner">child element</p>
</div>
```

`div:has(+ .banner)` vybere všechny prvky `div` **předcházející** prvek třídy `banner`, který *bezprostředně následuje* po `div` a oba jsou potomky stejného rodu:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<p class="banner">adjacent sibling</p>
<span>Not selected</span>
```

`div:has(~ .banner)` vybere všechny prvky `div` **předcházející** prvek třídy `banner`, který *následuje* `div`, ale *ne nutně bezprostředně* a oba jsou potomky stejného rodu:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected</div>
<span>Not selected</span>
<p class="banner">general sibling</p>
```

`div:has(span, .banner)` vybere všechny prvky `div`, které **obsahují** prvek se třídou `span` a `banner`:
```html
<!-- HTML code -->
<div>Not selected</div>
<div>Selected
  <span>child span</span>
  <p class="banner">child .banner</p>
</div>
```

> **Kompatibilita se starou syntaxí**
> 
> [Zpětně kompatibilní syntaxe pro `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) je podporována, ale **nedoporučuje se**.


#### Pseudo-třída `:contains()` {#extended-css-contains}

Princip pseudo-třídy `:contains()` je velmi jednoduchý: umožňuje vybrat prvky, které obsahují zadaný text nebo jejichž obsah odpovídá zadanému regulárnímu výrazu. Příznaky regexp jsou podporovány.

> **Poznámka**
> 
> Pseudo-třída `:contains()` používá pro porovnávání vlastnost prvku `textContent`, nikoliv `innerHTML`.

> **Kompatibilita s jinými pseudo-třídami**
> 
> Pro lepší kompatibilitu jsou podporována synonyma `:-abp-contains()` a `:has-text()`.

**Syntaxe**

```
[target]:contains(match)
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `shoda` — povinný, řetězec nebo regulární výraz pro shodu prvku `textContent`. Příznaky regulárních výrazů jsou podporovány.

**Příklady**

Pro DOM:
```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

prvek `div#match` lze vybrat pomocí kteréhokoli z těchto rozšířených selektorů:
```
! prostý text
div:contains(banner)

! regulární výraz
div:contains(/as .* banner/)

! regulární výraz s příznaky
div:contains(/it .* banner/gi)
```

> **Poznámka**
> 
> Vybrán je pouze `div` s `id=match`, protože další prvek neobsahuje žádný text a `banner` je součástí kódu, nikoli textu.

> **Kompatibilita se starou syntaxí**
> 
> [Zpětně kompatibilní syntaxe pro `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) je podporována, ale **nedoporučuje se**.


#### Pseudo-třída `:matches-css()` {#extended-css-matches-css}

Pseudo-třída `:matches-css()` umožňuje porovnat prvek podle jeho aktuálních vlastností stylu. Práce pseudo-třídy je založena na použití metody [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

**Syntaxe**

```
[target]:matches-css([pseudo-element, ] property: pattern)
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `pseudo-element` — volitelný, platný standardní pseudoprvek, např. `before`, `after`, `first-line` atd.
- `property` — povinný, název vlastnosti CSS, pro kterou se má prvek zkontrolovat
- `pattern` — povinný, vzor hodnoty, který používá stejnou jednoduchou shodu se zástupnými znaky jako v základních pravidlech filtrování adres URL NEBO regulární výraz. Při tomto typu porovnávání, AdGuard vždy porovnává bez ohledu na velikost písmen. V případě regulárního výrazu vypadá vzor takto: `/regexp/`.

> **Speciální znaky uvozené a neuvozené**
> 
> Všechny vzory **non-regexp** `(`,`)`,`[`,`]` musí být **neuvozeny**, např. `:matches-css(background-image:url(data:*))`.
> 
> Vzory **regexp** `\` by měly být **uvozeny**, např. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

> **Omezení**
> 
> Vzory regexp **nepodporují** příznaky.

**Příklady**

Pro DOM:
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

prvky `div` s pseudoprvkem `::before` a se zadanou vlastností `content` lze vybrat kterýmkoli z těchto rozšířených selektorů:
```
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

> **Kompatibilita s jinými pseudo-třídami**
> 
> Zastaralé pseudo-třídy `:matches-css-before()` a `:matches-css-after()` se již nedoporučují, ale stále jsou podporovány kvůli lepší kompatibilitě.

> **Kompatibilita se starou syntaxí**
> 
> [Zpětně kompatibilní syntaxe pro `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) je podporována, ale **nedoporučuje se**.


#### Pseudo-třída `:matches-attr()` {#extended-css-matches-attr}

Pseudo-třída `:matches-attr()` umožňuje vybrat prvek podle jeho atributů, zejména pokud jsou náhodné.

**Syntaxe**

```
[target]:matches-attr("name"[="value"])
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu názvu atributu
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu hodnoty atributu

> **Uvození speciálních znaků**
> 
> Pro vzory **regexp** `"` a `\` by mělo být **uvozeno**, např. `div:matches-attr(class=/[\\w]{5}/)`.

> **Omezení**
> 
> Vzory regexp **nepodporují** příznaky.

**Příklady**

`div:matches-attr("ad-link")` vybere prvek `div#target1`:
```html
<!-- HTML code -->
<div id="target1" ad-link="1random23-banner_240x400"></div>
```

`div:matches-attr("data-*"="adBanner")` vybere prvek `div#target2`:
```html
<!-- HTML code -->
<div id="target2" data-1random23="adBanner"></div>
```

`div:matches-attr(*unit*=/^click$/)` vybere prvek `div#target3`:
```html
<!-- HTML code -->
<div id="target3" random123-unit094="click"></div>
```

`*:matches-attr("/.{5,}delay$/"="/^[0-9]*$/")` vybere prvek `#target4`:
```html
<!-- HTML code -->
<div>
  <inner-random23 id="target4" nt4f5be90delay="1000"></inner-random23>
</div>
```


#### Pseudo-třída `:matches-property()` {#extended-css-property}

Pseudo-třída `:matches-property()` umožňuje vybrat prvek podle jeho vlastností.

**Syntaxe**

```
[target]:matches-property("name"[="value"])
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků

> **Uvození speciálních znaků**
> 
> Pro vzory **regexp** `"` a `\` by mělo být uvozeno, např. `div:matches-property(prop=/[\\w]{4}/)`.

> **Poznámka**
> 
> Vzory regexp jsou podporovány v `name` pro libovolnou vlastnost v řetězci, např. `prop./^unit[\\d]{4}$/.type`.

> **Omezení**
> 
> Vzory regexp **nepodporují** příznaky.

**Příklady**

Prvek s těmito vlastnostmi:
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

lze vybrat pomocí některého z těchto rozšířených selektorů:
```
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

> **Pro správce filtrů:**
> 
> Chcete-li zkontrolovat vlastnosti konkrétního prvku, postupujte takto: 1. Zkontrolujte prvek stránky nebo jej vyberte na kartě `Elements` v nástroji DevTools prohlížeče. 2. Spusťte `console.dir($0)` na kartě `Console`.


#### Pseudo-třída `:xpath()` {#extended-css-xpath}

Pseudo-třída `:xpath()` umožňuje vybrat prvek vyhodnocením výrazu XPath.

**Syntaxe**

```
[target]:xpath(expression)
```
- `target` — volitelný, standardní nebo rozšířený selektor CSS
- `expression` — povinný, platný výraz XPath

##### `:xpath()` limitations {#extended-css-xpath-limitations}

> `cíl` lze vynechat, takže je volitelný. Pro jakoukoli jinou pseudo-třídu by to znamenalo "aplikuj na *všechny* uzly DOM", ale v případě `:xpath()` to znamená jen "aplikuj na *celý* dokument", a takovéto použití výrazně zpomaluje výběr prvků. Proto jsou pravidla jako `#?#:xpath(expression)` omezena na nahlížení do znaku `body`. Např. pravidlo `#?#:xpath(//div[@data-st-area=\'Advert\'])` je analyzováno jako `#?#body:xpath(//div[@data-st- area=\'Advert\'])`.

> Rozšířené selektory s definovaným `target` jako *libovolný selektor* — `*:xpath(expression)` — lze stále použít, ale nedoporučuje se to, proto by měl být místo toho uveden `target`.

> Funguje správně pouze na konci selektoru, s výjimkou [pseudo-třídy :remove()](#remove-pseudos).

**Příklady**

`:xpath(//*[@class="banner"])` vybere prvek `div#target1`:
```html
<!-- HTML code -->
<div id="target1" class="banner"></div>
```

`:xpath(//*[@class="inner"]/..)` vybere prvek `div#target2`:
```html
<!-- HTML code -->
<div id="target2">
  <div class="inner"></div>
</div>
```


#### Pseudo-třída `:nth-ancestor()` {#extended-css-nth-ancestor}

Pseudo-třída `:nth-ancestor()` umožňuje vyhledat *nth* předka vzhledem k dříve vybranému prvku.

```
subject:nth-ancestor(n)
```
- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

**Syntaxe**

```
subject:nth-ancestor(n)
```
- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

> Pseudo-třída `:nth-ancestor()` není podporována v argumentu [pseudo-třídy `:not()`](#extended-css-not).

**Příklady**

Pro DOM:
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

`.child:nth-ancestor(1)` vybere prvek `div#target1`, `div[class="inner"]:nth-ancestor(3)` vybere prvek `div#target2`.


#### Pseudo-třída `:upward()` {#extended-css-upward}

Pseudo-třída `:upward()` umožňuje vyhledat předka vzhledem k dříve vybranému prvku.

**Syntaxe**

```
subject:upward(ancestor)
```
- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `ancestor` — povinný, specifikace pro předka prvku vybraného pomocí `subject`, lze nastavit jako:
  - *číslo* >= 1 a < 256 pro vzdálenost k požadovanému předkovi, stejně jako u položky [`:nth-ancestor()`](#extended-css-nth-ancestor)
  - *standardní selektor CSS* pro shodu nejbližšího předka

##### `:upward()` limitations {#extended-css-upward-limitations}

> Pseudo-třída `:nth-upward()` není podporována v argumentu [pseudo-třídy `:not()`](#extended-css-not).

**Příklady**

Pro DOM:
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

`.inner:upward(div[data])` vybere prvek `div#target1`, `.inner:upward(div[id])` vybere prvek `div#target2`, `.child:upward(1)` vybere prvek `div#target1`, `.inner:upward(3)` vybere prvek `div#target2`.


#### Pseudo-třída `:remove()` a pseudo-vlastnost `remove` {#remove-pseudos}

Někdy je nutné odpovídající prvek odstranit namísto jeho skrytí nebo použití vlastních stylů. Chcete-li to provést, můžete použít pseudo-třídu `:remove()` a také pseudo-vlastnost `remove`.

> **Pseudo-třídu `:remove()` lze umístit pouze na konec selektoru.**

**Syntaxe**

```
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```
- `selector` — povinný, standardní nebo rozšířený selektor CSS

##### `:remove()` a `remove` limitations {#extended-css-remove-limitations}

> Pseudo-třída `:remove()` je omezena tak, aby správně fungovala pouze na konci selektoru.

> Pro použití pseudo-třídy `:remove()` na libovolný prvek je třeba použít [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`. V opačném případě může být takový rozšířený selektor považován za neplatný, např. `.banner > :remove()` neplatí pro odstranění jakéhokoli podřízeného prvku třídy `banner`, takže by měl vypadat jako `.banner > *:remove()`.

> Pokud je použita pseudo-třída `:remove()` nebo pseudovlastnost `remove`, všechny vlastnosti stylu se ignorují kromě pseudovlastnosti [`debug`](#selectors-debug-mode).


**Příklady**
```
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

> **Poznámka**
> 
> Pravidla s pseudovlastností `remove` by měla používat znak `#$?#`: `$` pro syntaxi pravidel stylu CSS, `?` pro syntaxi ExtendedCss.


#### Pseudo-třída `:is()` {#extended-css-is}

Pseudo-třída `:is()` umožňuje porovnat jakýkoli prvek, který lze vybrat kterýmkoli ze selektorů, které jí byly předány. Neplatné selektory jsou přeskočeny a pseudo-třída se vypořádá s platnými selektory bez vyhození chyby. Naše implementace [nativní `:is()` pseudo-třídy](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntaxe**

```
[target]:is(selectors)
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selectors` — [*odpouštějící seznam selektorů*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) standardních nebo rozšířených selektorů. U rozšířených selektorů jsou podporovány pouze složené selektory, nikoli komplexní.

##### `:is()` limitations {#extended-css-is-limitations}

> Pravidla s pseudo-třídou `:is()` by měla používat nativní implementaci [ `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is), pokud pravidla používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:is()`, použijte explicitně znak `#?#`/`#$?#`.

> Pokud je argument `:is()` pseudo-třídy `selector` rozšířeným selektorem, vzhledem ke způsobu, jakým je v ExtendedCss v2.0 implementována pseudo-třída `:is()`, není možné ji použít na horní uzel DOM, kterým je `html`, tj. `#?#html:is(<extended-selectors>)` nefunguje. Pokud tedy `target` není definován nebo je definován jako [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, je rozšířené použití pseudo-třídy omezeno na **`html`potomky**, např. pravidla `#?#:is(...)` a `#?#*:is(...)` jsou analyzována jako `#?#html *:is(...)`. Upozorňujeme, že pro standardní argument selektoru takové omezení neexistuje, tj. `#?#html:is(.locked)` funguje bez problémů.

> [Komplexní selektory](https://www.w3.org/TR/selectors-4/#complex) s rozšířenými pseudo-třídami nejsou podporovány jako argument `selector` pro pseudo-třídu `:is()`, povoleny jsou pouze [složené](https://www.w3.org/TR/selectors-4/#compound). Další podrobnosti naleznete v příkladech níže.

**Příklady**

`#container *:is(.inner, .footer)` vybere pouze prvek `div#target1`:
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

Kvůli omezením `:is(*:not([class]) > .banner)'` nefunguje, ale lze místo něj použít `:is(*:not([class]):has(> .banner))` k výběru prvku `div#target2`:
```html
<!-- HTML code -->
<span class="span">text</span>
<div id="target2">
  <p class="banner">inner paragraph</p>
</div>
```


#### Pseudo-třída `:not()` {#extended-css-not}

Pseudo-třída `:not()` umožňuje vybrat prvky, které se *neshodují* se selektory předávanými jako argument. Neplatné selektory argumentů nejsou povoleny a je třeba vyhodit chybu. Naše implementace pseudo-třídy [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntaxe**

```
[target]:not(selectors)
```
- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selectors` — seznam standardních nebo rozšířených selektorů

##### `:not()` limitations {#extended-css-not-limitations}

> Pravidla s pseudo-třídou `:not()` by měla používat nativní implementaci [ `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not), pokud pravidla používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:not()`, použijte explicitně znak `#?#`/`#$?#`.

> Pokud je argument `:not()` pseudo-třídy `selector` rozšířeným selektorem, vzhledem ke způsobu, jakým je v ExtendedCss v2.0 implementována pseudo-třída `:not()`, není možné ji použít na horní uzel DOM, kterým je `html`, tj. `#?#html:not(<extended-selectors>)` nefunguje. Pokud tedy `target` není definován nebo je definován jako [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, je rozšířené použití pseudo-třídy omezeno na **`html`potomky**, např. pravidla `#?#:not(...)` a `#?#*:not(...)` jsou analyzována jako `#?#html *:not(...)`. Upozorňujeme, že pro standardní argument selektoru takové omezení neexistuje, tj. `#?#html:not(.locked)` funguje bez problémů.

> `:not()` je považována za standardní pseudo-třídu CSS uvnitř argumentu pseudo-třídy [`:upward()`](#extended-css-upward), protože `:upward()` podporuje pouze standardní selektory.

> "Up-looking" pseudotřídy, které jsou [`:nth-ancestor()`](#extended-css-nth-ancestor) a [`:upward()`](#extended-css-upward) nejsou podporovány uvnitř argumentu `selector` pro pseudo-třídu `:not()`.

**Příklady**

`#container > *:not(h2, .text)` vybere pouze prvek `div#target1`:
```html
<!-- HTML code -->
<div id="container">
  <h2>Header</h2>
  <div id="target1"></div>
  <span class="text">text</span>
</div>
```


#### Pseudo-třída `:if-not()` (zastaralé) {#extended-css-if-not}

> **Upozornění na vyřazení**
> 
> Pseudo-třída `:if-not()` je zastaralá a již není podporována. Pravidla s tímto modifikátorem jsou považována za neplatná.

Tato pseudo-třída byla v podstatě zkratkou pro `:not(:has())`. Byla podporována ExtendedCss pro lepší kompatibilitu s některými odběry filtrů.


### Přednost kosmetických pravidel {#cosmetic-rules-priority}

Způsob, jakým jsou aplikována pravidla **pro skrývání prvků** a **CSS**, je specifický pro danou platformu.

**V AdGuardu pro Windows, Mac a Android** používáme šablonu stylů vloženou do stránky. Priorita kosmetických pravidel je stejná jako u jakéhokoli jiného souboru stylů CSS na webových stránkách. Existují však omezení: [skrytí prvku](#elemhide-syntax) a [pravidla CSS](#cosmetic-css-rules) nemohou přepsat vložené styly. V takových případech se doporučuje použít rozšířené selektory nebo filtrování HTML.

**V Rozšíření prohlížeče AdGuard** se používají tzv. "soubory uživatelských stylů". Mají vyšší prioritu než řádkové styly.

**Rozšířené selektory CSS** používají k práci JavaScript a v podstatě samy přidávají vložený styl, takže mohou přepsat jakýkoli styl.

## HTML pravidla filtrování {#html-filtering-rules}

Ve většině případů stačí k filtrování reklam základní a kosmetická pravidla. Někdy je však nutné změnit kód HTML samotné stránky před jejím načtením. V takovém případě potřebujete pravidla pro filtrování obsahu HTML. Umožňují označit prvky HTML, které mají být vyříznuty před načtením stránky prohlížečem.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla filtrování HTML podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Firefox. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

**Syntaxe**

```
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

* **`tagName`** — název prvku s malými písmeny, např. `div` nebo `script`.
* **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [syntaxi pravidel pro skrývání prvků](#elemhide-syntax).
* **`atributy`** — seznam atributů, které limitují výběr prvků. `name` — název atributu, `value` — podřetězec, který je obsažen v hodnotě atributu.

**Příklady**

**Kód HTML:**
```html
<script data-src="/banner.js"></script>
```

**Pravidlo:**
```
example.org$$script[data-src="banner"]
```

Toto pravidlo odstraní všechny prvky `script` s atributem `data-src` obsahujícím podřetězec `banner`. Pravidlo platí pouze pro `example.org` a všechny její subdomény.

**Speciální atributy**

Kromě obvyklých atributů, jejichž hodnotu kontroluje každý prvek, existuje sada speciálních atributů, které mění způsob fungování pravidla. Níže je uveden seznam těchto atributů:

* **`tag-content`**

Jedná se o nejčastěji používaný speciální atribut. Omezí výběr na ty prvky, jejichž kód innerHTML obsahuje zadaný podřetězec.

> Měli byste použít `""` k uvození `"`, např.: `$$script[tag-content="alert(""this is ad"")"]`

Podívejte se například na tento HTML kód:
```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Následující pravidlo smaže všechny prvky `script` s podřetězcem `banner` v jejich kódu:
```
$$script[tag-content="banner"]
```

> **Vnořené prvky**
> 
> Pokud se jedná o více vnořených prvků a všechny spadají do stejného pravidla filtrování HTML, budou všechny odstraněny.

* **`wildcard`**

Tento speciální atribut funguje téměř jako `tag-content` a umožňuje kontrolovat kód dokumentu innerHTML. Pravidlo zkontroluje, zda kód HTML prvku odpovídá [vyhledávacímu vzoru](https://en.wikipedia.org/wiki/Glob_(programming)).

> Měli byste použít `""` k uvození `"`, např.: `$$script[wildcard=""banner""]`

Např.: `$$script[wildcard="*banner*text*"]`

Zkontroluje, zda kód prvku obsahuje dva po sobě jdoucí podřetězce `banner` a `text`.

* **`max-length`**

Určuje maximální délku obsahu prvku HTML. Pokud je tento parametr nastaven a délka obsahu přesahuje tuto hodnotu, pravidlo se na prvek nevztahuje.

> **Výchozí hodnota**
> 
> Pokud tento parametr není zadán, považuje se `max-lenght` za 8192.

Např:
```
$$div[tag-content="banner"][max-length="400"]
```
Toto pravidlo odstraní všechny prvky `div`, jejichž kód obsahuje podřetězec `banner` a jejichž délka nepřesahuje `400` znaků.

* **`min-length`**

Určuje minimální délku obsahu prvku HTML. Pokud je tento parametr nastaven a délka obsahu je menší než nastavená hodnota, pravidlo se na prvek nevztahuje.

Např:
```
$$div[tag-content="banner"][min-length="400"]
```

Toto pravidlo odstraní všechny prvky `div`, jejichž kód obsahuje podřetězec `banner` a jejichž délka přesahuje `400` znaků.

**Výjimky**

Podobně jako u pravidel skrývání existuje speciální typ pravidel, který zakáže vybrané pravidlo filtrování HTML pro určité domény. Syntaxe je stejná, jen je třeba změnit `$$` na `$@$`.

Ve filtru je např. pravidlo:
```
$$script[tag-content="banner"]
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:
```
example.com$@$script[tag-content="banner"]
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény.
```
$@$script[tag-content="banner"]
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

## Pravidla JavaScript {#javascript-rules}

AdGuard podporuje speciální typ pravidel, která umožňují vložit na webové stránky libovolný kód JavaScript.

> **Omezení**
> 
> Typ pravidel JavaScript lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla JavaScript nejsou Blokátorem obsahu AdGuard podporována.

**Důrazně doporučujeme** používat [skriptlety](#scriptlets) namísto pravidel JavaScript, kdykoli je to možné. Pravidla JS mají pomoci s laděním, ale jako dlouhodobé řešení by se mělo používat pravidlo skriptlet.

**Syntaxe**

```
rule = [domains]  "#%#" script
```

* **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#elemhide-syntax).
* **`skript`** — libovolný kód JavaScript **v jednom řetězci**.

**Příklady**

* `example.org#%#window.__gaq = undefined;` spustí kód `window.__gaq = undefined;` na všech stránkách na `example.org` a jejích subdoménách.

**Výjimky**

Podobně jako u pravidel skrývání existuje speciální typ pravidel, který zakáže vybrané pravidlo JavaScript pro určité domény. Syntaxe je stejná, jen je třeba změnit `#%#` na `#@%#`.

Ve filtru je např. pravidlo:
```
#%#window.__gaq = undefined;
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:
```
example.com#@%#window.__gaq = undefined;
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény.
```
#@%#window.__gaq = undefined;
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

## Pravidla skriptlet {#scriptlets}

Skriptlet je funkce JavaScript, která poskytuje rozšířené možnosti pro blokování obsahu. Tyto funkce lze v AdGuard pravidlech filtrování používat deklarativním způsobem.

> **Omezení**
> 
> Důvěryhodné skriplety lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

> **Poznámka**
> 
> AdGuard podporuje mnoho různých skriptletů. Abychom dosáhli kompatibility mezi blokátory, podporujeme také syntaxi uBO a ABP.

**Syntaxe**

```
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

* **`scriptletName`** — povinný, název skriptletu z knihovny skripletů AdGuard
* **`arguments`** — volitelnýný, seznam argumentů `string` (jiné typy argumentů nejsou podporovány)

**Příklady**

```
example.org#%#//scriptlet("abort-on-property-read", "alert")
```
Toto pravidlo bude aplikováno na `example.org` a subdomény a spustí skriptlet `abort-on-property-read` s parametrem `alert`.

Přečtěte si další informace o [ladění skripletů](#debug-scriptlets).

Další informace o skriptletech najdete na [GitHubu](https://github.com/AdguardTeam/Scriptlets#scriptlets).

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Skriplety nejsou Blokátorem obsahu AdGuard podporovány.

### Důvěryhodné skriptlety {#trusted-scriptlets}

Důvěryhodné skriptlety jsou skriptlety [](#scriptlets) s rozšířenou funkčností. Znamená to stejnou syntaxi a omezení. Názvy důvěryhodných skriptletů mají předponu `trusted-`, např. `trusted-set-cookie`, aby je bylo možné snadno odlišit od běžných skriptletů.

> **Poznámka**
> 
> Důvěryhodné skriptlety nejsou kompatibilní s jinými blokátory reklam kromě AdGuardu

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla důvěryhodných skripletů jsou nyní podporována AdGuardem pro Windows, Mac a Android ** s CoreLibs verze 1.10 nebo novější**.

Přečtěte si další informace o [ladění skripletů](#debug-scriptlets).

Další informace o důvěryhodných skriptletech najdete na [GitHubu](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifikátory pro ostatní typ pravidel

* [`$app`](#non-basic-app-modifier)
* [`$domain`](#non-basic-domain-modifier)
* [`$path`](#non-basic-path-modifier)
* [`$url`](#non-basic-url-modifier)

Každé pravidlo lze upravit pomocí modifikátorů popsaných v následujících odstavcích.

**Syntaxe**

```
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

* **`modifier`** — sada modifikátorů popsaných níže.
* **`rule text`** — pravidlo, které je třeba změnit.

Např.: `[$domain=example.com,app=test_app]##selector`.

V modifikátorech musí být uvozeny hodnoty následujících znaků: `[`, `]`, `,`a `\` (pokud se pro uvození nepoužívá). K uvození použijte `\`. Např. uvozená závorka vypadá takto: `\]`.

#### **`$app`** {#non-basic-app-modifier}

Modifikátor `$app` umožňuje zúžit pokrytí pravidla na konkrétní aplikaci, nebo seznam aplikací. Chování a syntaxe modifikátoru dokonale odpovídají příslušným [základním pravidlům modifikátoru `$app`](#app-modifier).

**Příklady**

* `[$app=org.example.app]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z `org.example.app` v aplikaci Android.
* `[$app=~org.example.app1|~org.example.app2]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z jakékoli aplikace kromě `org.example.app1` a `org.example.app2`.
* `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` použije skriplet `prevent-setInterval` pouze v prohlížeči Safari na počítači Mac.
* `[$app=org.example.app]#@#.textad` zakáže všechna pravidla `##.textad` pro všechny domény při použití `org.example.app`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Taková pravidla s modifikátorem `$app` podporuje AdGuard pro Windows, Mac a Android.

#### **`$domain`** {#non-basic-domain-modifier}

Modifikátor `$domain` omezuje oblast použití pravidla na seznam domén a jejich subdomén. Chování a syntaxe modifikátoru dokonale odpovídají příslušným [základním pravidlům modifikátoru `$domain`](#domain-modifier).

**Příklady**

* `[$domain=example.com]##.textad` — skryje `div` s třídou `textad` na doméně `example.com` a všech subdoménách.
* `[$domain=example.com|example.org]###adblock` — skryje prvek s atributem `id`, který se rovná `adblock` na `example.com`, `example.org` a všech subdoménách.
* `[$domain=~example.com]##.textad` — toto pravidlo skryje prvek `div` se třídou `textad` na všech doménách kromě `example.com` a jejích subdomén.

Vezměte prosím na vědomí, že existují 2 způsoby, jak určit omezení domény pro ostatní pravidla:
1. "klasický" způsob je zadat domény před masku pravidla a atributy: `example.com##.textad`;
2. přístup modifikátoru spočívá v určení domén pomocí modifikátoru `$domain`: `[$domain=example.com]##.textad`.

Pravidla s omezením domén smíšeného stylu jsou však považována za neplatná. Takže např. pravidlo `[$domain=example.org]example.com##.textad` bude zamítnuto.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Taková pravidla s modifikátorem `$domain` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

#### **`$path`** {#non-basic-path-modifier}

Modifikátor `$path` omezuje oblast použití pravidel na konkrétní umístění nebo stránky na webových stránkách.

**Syntaxe**

```
$path ["=" pattern]
```

`pattern` — volitelný, maska cesty, na kterou je pravidlo omezeno. Jeho syntaxe a chování jsou v podstatě stejné jako u [vzoru pro základní pravidla](#basic-rules-syntax). Můžete také použít [speciální znaky](#basic-rules-special-characters) s výjimkou `||`, což v tomto případě nemá smysl (viz příklady níže).

> Pokud není nastaven `pattern` pro `$path`, pravidlo bude platit pouze na hlavní stránce webu.

> Modifikátor `$path` odpovídá i řetězci dotazu.

> Modifikátor `$path` podporuje regulární výrazy [stejným způsobem](#regexp-support) jako základní pravidla.

**Příklady**

* `[$path=page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` nebo `/sub/page.html` nebo `/another_page.html`
* `[$path=/page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` nebo `/sub/page.html` jakékoliv domény kromě `/another_page.html`
* `[$path=|/page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` jakékoliv domény kromě `/sub/page.html`
* `[$path=/page.html|]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/sub/page.html` jakékoliv domény kromě `/page.html?<query>`
* `[$path=/page*.html]example.com##.textad` skryje `div` se třídou `textad` na `/page1.html` nebo `/page2.html` nebo jiné cestě shodné s `/page<...>.html` domény `example.com`
* `[$path]example.com##.textad` skryje `div` se třídou `textad` na hlavní stránce domény `example.com`
* `[$domain=example.com,path=/page.html]##.textad` skryje `div` se třídou `textad` na `page.html` domény `example.com` a všech subdoménách kromě `another_page.html`
* `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` skryje `div` se třídou `textad` na `/sub1/page.html` a `/sub2/page.html` jakékoliv domény (vezměte prosím na vědomí, že [ uvozuje speciální znak](#non-basic-rules-modifiers-syntax))

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$path` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

#### **`url`** {#non-basic-url-modifier}

Modifikátor `$url` omezuje oblast použití pravidla na adresy URL odpovídající zadané masce.

**Syntaxe**

```
url = pattern
```

kde `pattern` je v podstatě stejný jako [`pattern` základních pravidel](#basic-rules-syntax) za předpokladu, že [některé znaky](#non-basic-rules-modifiers-syntax) musí být uvozeny. Podporovány jsou také [speciální znaky](#basic-rules-special-characters) a [regulární výrazy](#regexp-support).

**Příklady**

* `[$url=||example.com/ads/*]##.textad` skryje `div` se třídou `textad` na adrese jako `http://example.com/ads/banner.jpg` a dokonce i `http://subdomain.example.com/ads/otherbanner.jpg`.
* `[$url=||example.org^]###adblock` skryje prvek s atributem `id`, který se rovná `adblock` na `example.org` a jejích subdoménách.
* `[$url=/\[az\]+\\.example\\.com^/]##.textad` skryje prvky třídy `div` `textad` pro všechny domény odpovídající regulárnímu výrazu `[a-z]+\. example\.com^`.

> **Kompatibilita s různými verzemi AdGuardu**
> 
> Pravidla s modifikátorem `$url` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**.

## Informace pro správce filtrů

Pokud spravujete filtr třetí strany, který je AdGuardu znám, mohly by vás zajímat informace uvedené v této části. Upozorňujeme, že nápovědy se použijí pouze na registrované filtry. Filtr je považován za registrovaný a známý pro AdGuard, pokud je přítomen v [indexu známých filtrů](https://filters.adtidy.org/extension/chromium/filters.json). Pokud chcete, aby byl váš filtr zaregistrován, odešlete žádost do [repozitáře AdguardFilters](https://github.com/AdguardTeam/AdguardFilters).

### Direktivy preprocesoru

Poskytujeme preprocesorové direktivy, které mohou být použity správci filtrů pro zlepšení kompatibility s různými blokátory reklam a poskytujeme:
* [zahrnutý soubor](#include-directive)
* [použití pravidel podmíněně podle typu blokátoru reklam](#conditions-directive)
* [zadání blokátor obsahu pro pravidla platná v Safari](#safari-affinity-directive)

> **Poznámka**
> 
> Jakákoli chyba v direktivě preprocesoru povede k tomu, že AdGuard selže při aktualizaci filtru stejným způsobem, jako kdyby adresa URL filtru byla nedostupná.

> Direktivy preprocesoru lze použít v uživatelských pravidlech nebo ve vlastních filtrech.

#### Zahrnutý soubor {#include-directive}

Direktiva `!#include` umožňuje zahrnout do filtru obsah zadaného souboru. Podporuje pouze soubory ze stejného původu, aby bylo zajištěno, že správce filtru má kontrolu nad zadaným souborem. Zahrnutý soubor může také obsahovat pre-direktivy (i další `!#include` direktivy). Blokátory reklam by měly zvážit případ rekurzivního `!#include` a implementovat ochranný mechanismus.

**Syntaxe**

```
!#include file_path
```

kde `file_path` je absolutní nebo relativní cesta k souboru stejného původu, který má být zahrnut.

> Soubory musí pocházet ze stejné domény, ale mohou být umístěny v jiné složce.

> Pokud obsažený soubor není nalezen nebo není k dispozici, celá aktualizace filtru by měla selhat.

> Omezení stejného původu by mělo být pro místní vlastní filtry zakázáno.

**Příklady**

URL filtru: `https://example.org/path/filter.txt`
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

#### Podmínky {#conditions-directive}

Správci filtrů mohou pomocí podmínek zadávat různá pravidla v závislosti na typu blokátoru reklam. Když se blokátor reklam setká s direktivou `!#if`, po které případně následuje direktiva `!#endif`, zkompiluje kód uvnitř bloku direktiv pouze v případě, že je zadaná podmínka pravdivá. Podmínka podporuje všechny základní logické operátory.

> Podmíněná direktiva začínající direktivou `!#if` musí být explicitně ukončena direktivou `!#endif`.

> Na mezerách záleží. `!#if` je platná direktiva, zatímco `!# if` není.

**Syntaxe**

```
!#if (conditions)
rules_list
!#endif
```
kde:
- `!#if (conditions)` — počátek blokování
- `conditions` — stejně jako v některých populárních programovacích jazycích jsou podmínky preprocesoru založeny na konstantách deklarovaných blokátory reklamy. Autoři blokátorů reklam si sami určují, jaké konstanty přesně deklarují. Přípustné hodnoty:
  - `adguard` vždy deklarováno; ukazuje správcům, že se jedná o jeden z produktů AdGuard; mělo by to stačit v 95 % případů
  - konstanty specifické pro daný produkt pro případy, kdy potřebujete, aby pravidlo fungovalo (nebo nefungovalo — pak je třeba před konstantou použít `!`) pouze v konkrétním produktu:
    - `adguard_app_windows` — AdGuard pro Windows
    - `adguard_app_mac` — AdGuard pro Mac
    - `adguard_app_android` — AdGuard pro Android
    - `adguard_app_ios` — AdGuard pro iOS
    - `adguard_ext_safari` — AdGuard pro Safari
    - `adguard_ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome (a prohlížeče založené na chromium, např. nový Microsoft Edge.)
    - `adguard_ext_firefox` — Rozšíření prohlížeče AdGuard pro Firefox
    - `adguard_ext_edge` — Rozšíření prohlížeče AdGuard pro starší Edge
    - `adguard_ext_opera` — Rozšíření prohlížeče AdGuard pro Operu
    - `adguard_ext_android_cb` — Blokátor obsahu AdGuard pro mobilní prohlížeče Samsung a Yandex
    - `ext_ublock` — speciální případ; ten je deklarován, když je verze filtru uBlock kompilována pomocí [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)
- `rules_list` — seznam pravidel
- `!#endif` — konec blokování

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

#### Afinita Safari {#safari-affinity-directive}

Safari je prohlížeč notoricky známý svým přísným maximálním limitem 150 tisíc pro pravidla filtrování v blokátorech obsahu. V aplikacích AdGuard pro Safari a AdGuard pro iOS je však maximální počet pravidel zvýšen na 300 tisíc rozdělením do několika blokátorů obsahu. Obecně platí, že několik kategorií filtrů je víceméně nezávislých, takže existují takové blokátory obsahu, které tyto kategorie obsahují:
- AdGuard General — Blokování reklam, jazykově specifické filtry
- AdGuard Privacy — Soukromí
- AdGuard Social — sociální widgety, obtěžování
- AdGuard Security — Zabezpečení
- AdGuard Other — Jiné
- AdGuard Custom — Vlastní

> `Uživatelská pravidla` a `Seznam povolených` jsou přidány do každého blokátoru obsahu.

Hlavním problémem při použití více blokátorů obsahu je, že pravidla uvnitř těchto blokátorů obsahu se nemohou navzájem ovlivňovat. To může vést k různým neočekávaným problémům. Správci filtrů tedy mohou použít `!#safari_cb_affinity` k definování afinity blokátorů obsahu Safari pro pravidla uvnitř blokování direktiv.

**Syntaxe**

```
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```
kde:
- `!#safari_cb_affinity(content_blockers)` — počátek blokování
- `content_blockers` — seznam blokátorů obsahu oddělený čárkami. Přípustné hodnoty:
  - `general` — blokátor obsahu AdGuard General
  - `privacy` — blokátor obsahu AdGuard Privacy
  - `social` — blokátor obsahu AdGuard Social
  - `security` — blokátor obsahu AdGuard Security
  - `other` — blokátor obsahu AdGuard Other
  - `custom` — blokátor obsahu AdGuard Custom
  - `all` — speciální klíčové slovo, které znamená, že pravidla musí být zahrnuta do **všech** blokátorů obsahu
- `rules_list` — seznam pravidel
- `!#safari_cb_affinity` — konec blokování

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

### Nápovědy

"Nápověda" je speciální komentář, instrukce pro kompilátor filtrů používaný na straně serveru (viz [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)).

**Syntaxe**

```
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

> Lze použít více nápověd.

#### Nápověda `NOT_OPTIMIZED`

Pro každý filtr sestavuje AdGuard dvě verze: plnou a optimalizovanou. Optimalizovaná verze je mnohem jednodušší a neobsahuje pravidla, která se nepoužívají vůbec nebo jen zřídka.

Frekvence používání pravidel vychází ze shromážděných statistik [pravidel filtrování](../tracking-filter-statistics). Optimalizace filtrů je však založena na více než na tom — některé filtry mají specifickou konfiguraci. Takto to vypadá pro Základní filtr:

```
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```
kde:
* **filter** — identifikátor filtru
* **percent** — očekávané procento optimalizace `~= (počet pravidel v optimalizovaném filtru) / (počet pravidel v původním filtru) * 100`
* **minPercent** — dolní mez hodnoty `percent`
* **maxPercent** — horní mez hodnoty `percent` value
* **strict** — pokud je `percent < minPercent` NEBO `percent > maxPercent` a je zapnutý přísný režim, pak by kompilace filtru měla selhat, jinak je nutné použít původní pravidla

> Jinými slovy, `percent` je "úroveň komprese". Například pro Základní filtr je nastavena na 40 %. To znamená, že optimalizační algoritmus by měl odstranit 60 % pravidel.

Nakonec zde jsou dvě verze základního filtru pro Rozšíření prohlížeče AdGuard:
- úplná: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimalizovaná: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**Pokud chcete přidat pravidlo, které by nemělo být při optimalizaci odstraněno, použijte nápovědu `NOT_OPTIMIZED`:**

```
!+ NOT_OPTIMIZED
||example.org^
```

**Toto pravidlo nebude optimalizováno pouze pro AdGuard pro Android:**

```
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### Nápověda `PLATFORM` a `NOT_PLATFORM`

Slouží k zadání platforem pro použití pravidel. Seznam existujících platforem a odkazy např. na Základní filtr:

* `windows` — AdGuard pro Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

* `mac` — AdGuard pro Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

* `android` — AdGuard pro Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

* `ios` — AdGuard pro iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

* `ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

* `ext_ff` — Rozšíření prohlížeče AdGuard pro Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

* `ext_edge` — Rozšíření prohlížeče AdGuard pro Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

* `ext_opera` — Rozšíření prohlížeče AdGuard pro Operu — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

* `ext_safari` — AdGuard pro Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

* `ext_android_cb` — Blokátor obsahu AdGuard — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

* `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Příklady**

Toto pravidlo bude dostupné pouze v AdGuardu pro Windows, Mac a Android:
```
!+ PLATFORM(windows,mac,android)
||example.org^
```

Toto pravidlo bude k dispozici pro všechny platformy kromě AdGuardu pro Safari, Blokátoru obsahu AdGuard a AdGuardu pro iOS:
```
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## Jak ladit pravidla filtrování

Jednoduchá pravidla filtrování je možné vytvořit "v hlavě", ale pro cokoli alespoň trochu složitějšího budete potřebovat další nástroje pro jejich ladění a iteraci. Existují nástroje, které vám s tím pomohou. V prohlížeči Chrome a jeho analogiích v ostatních prohlížečích můžete použít nástroj DevTools, ale většina produktů AdGuardu nabízí ještě jeden — Záznam filtrování.

### Záznam filtrování

Záznam filtrování je pokročilý nástroj, který bude užitečný především pro vývojáře filtrů. Obsahuje seznam všech webových požadavků, které procházejí skrze AdGuard, poskytuje vyčerpávající informace o každém z nich, nabízí několik možností třídění a další užitečné funkce.

V závislosti na tom, který AdGuard produkt používáte, se protokol filtrování může nacházet na různých místech.

* V **AdGuardu pro Windows** jej najdete na kartě *Blokátor reklam* nebo prostřednictvím nabídky na hlavním panelu;
* V **AdGuardu pro Mac** je pod *Nastavení → Pokročilé → Záznam filtrování*;
* V **AdGuardu pro Android** je to samostatná položka v postranním menu. Z Asistenta je také přístupný záznam filtrování pro konkrétní aplikaci nebo web.
* V **Rozšíření prohlížeče AdGuard** je přístupný z karty *Různé* nebo kliknutím pravým tlačítkem myši na ikonu rozšíření. Pouze prohlížeče založené na platformě Chromium a Firefox zobrazují použití **pravidel skrývání prvků** (včetně CSS, ExtCSS) a **pravidel JS a skripletů** v jejich záznamech filtrování.

> V **AdGuardu pro iOS** a v **AdGuardu pro Safari** Záznam filtrování neexistuje kvůli způsobu, jakým jsou v Safari implementovány blokátory obsahu. AdGuard tyto webové požadavky nevidí, a proto je nemůže zobrazit.

### Režim ladění selektorů {#selectors-debug-mode}

Někdy můžete potřebovat zkontrolovat výkonnost daného selektoru nebo souboru stylů. Abyste to mohli provést bez přímé interakce s JavaScript, můžete použít speciální vlastnost stylu `debug`. Když `ExtendedCss` splňuje tuto vlastnost, povolí režim ladění buď pro jeden selektor, nebo pro všechny selektory v závislosti na hodnotě `debug`.

Otevřete konzolu prohlížeče na webové stránce a zobrazte statistiky časování pro selektor(y), které zde byly použity. Režim ladění zobrazí následující statistiky jako objekt, kde každý z laděných selektorů je klíč a hodnota je objekt s těmito vlastnostmi:

**Vždy vytištěno:**
* `selectorParsed` — text případně parsovaného selektoru
* `timings` — seznam uzlů DOM odpovídajících selektoru
  * `appliesCount` — celkový počet použití selektoru na stránce
  * `appliesTimings` — doba, po kterou byl selektor na stránce použit, pro každý případ, kdy byl použit (v milisekundách)
  * `meanTiming` — průměrná doba, po kterou byl selektor na stránce použit
  * `standardDeviation` — standardní odchylka
  * `timingsSum` — celkový čas potřebný k použití selektoru na stránce ve všech instancích

**Vytištěno pouze pro odstranění pseudonymů:**
* `removed` — příznak, který signalizuje, zda jsme odstranili prvky

**Vytištěno, pokud prvky nejsou odstraněny:**
* `matchedElements` — seznam uzlů DOM odpovídajících selektoru
* `styleApplied` — parsovaná deklarace stylu pravidla související se selektorem

**Příklady**

**Ladění jednoho selektoru:**

Pokud je hodnota vlastnosti `debug` `true`, zobrazí se v konzole prohlížeče pouze informace o tomto selektoru.

```
#$?#.banner { display: none; debug: true; }
```

**Povolení globálního ladění:**

Pokud je hodnota vlastnosti `debug` `global`, konzola zobrazí informace o všech rozšířených selektorech CSS, které mají na aktuální stránce shodu pro všechna pravidla z libovolného povoleného filtru.

```
#$?#.banner { display: none; debug: global; }
```

**Testování rozšířených selektorů bez AdGuardu**

ExtendedCss lze spustit na libovolné stránce bez použití AdGuard produktu. Za tímto účelem byste měli zkopírovat a spustit následující kód v konzoli prohlížeče:

```js
!function(e,t,d){C=e.createElement(t),C.src=d,C.onload=function(){alert("ExtendedCss loaded successfully")},s=e.getElementsByTagName(t)[0],s?s.parentNode.insertBefore(C,s):(h=e.getElementsByTagName("head")[0],h.appendChild(C))}(document,"script","https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js");
```

Případně nainstalujte uživatelský skript [ExtendedCssDebugger](https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js).

Nyní můžete použít `ExtendedCss` z globálního rozsahu a spustit jeho metodu [`query()`](https://github.com/AdguardTeam/ExtendedCss#extended-css-query) jako `Document.querySelectorAll()`.

**Příklady**

```js
const selector = 'div.block:has=(.header:matches-css(after, content: Ads))';

// array of HTMLElements matched the `selector` is to be returned
ExtendedCss.query(selector);
```

### Ladění skriptletů {#debug-scriptlets}

Pokud používáte Rozšíření prohlížeče AdGuard a chcete vyladit pravidlo [skriptlet](#scriptlets) nebo [důvěryhodný skriptlet](#trusted-scriptlets), můžete získat další informace otevřením protokolu filtrování. V takovém případě se skriptlety přepnou do režimu ladění a v konzoli prohlížeče se zobrazí více informací.

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

## Hodně štěstí při vytváření filtrů!

Přejeme vám hodně štěstí při vytváření vlastních filtrů reklam.

Pokud potřebujete poradit, jak správně vytvořit vlastní filtry, naše fórum má [sekci](https://forum.adguard.com/index.php?forums/69/) věnovanou psaní vlastních pravidel filtrování.
