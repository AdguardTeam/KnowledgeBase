---
title: Jak vytvářet vlastní filtry reklam
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

V tomto článku vysvětlíme, jak napsat vlastní pravidla filtrování pro použití v produktech AdGuardu. Chcete-li otestovat svá pravidla, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Filtr je sada pravidel filtrování aplikovaných na konkrétní obsah, například bannery nebo vyskakovací okna. AdGuard má seznam standardních filtrů vytvořených naším týmem. Neustále je vylepšujeme, aktualizujeme a snažíme se vyhovět potřebám většiny našich uživatelů.

AdGuard zároveň umožňuje vytvářet vlastní filtry pomocí stejných typů pravidel, které máme v našich filtrech.

K popisu syntaxe našich pravidel filtrování používáme [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), ale ne vždy se touto specifikací striktně řídíme.

:::info

Původně byla syntaxe AdGuardu založena na syntaxi pravidel Adblock Plus. Později jsme ji rozšířili o nové typy pravidel pro lepší filtrování reklam. Některé části tohoto článku o pravidlech společných pro AdGuard i ABP byly převzaty z [příručka Adblock Plus o tom, jak psát filtry](https://adblockplus.org/en/filters).

:::

## Komentáře

Každý řádek začínající vykřičníkem je komentář. V seznamu pravidel je zobrazen šedou barvou. AdGuard bude tento řádek ignorovat, takže můžete napsat cokoli chcete. Komentáře se obvykle umísťují nad pravidla a slouží k popisu toho, co pravidlo dělá.

Např:

```adblock
! Toto je komentář. Pod tímto řádkem se nachází skutečné pravidlo filtrování.
||example.org^
```

## Příklady

### Blokování podle názvu domény

![Blocking by domain name](https://cdn.adtidy.org/content/kb/ad_blocker/general/0_blocking_domain.svg)

**Toto pravidlo blokuje:**

- `http://example.org/ad1.gif`
- `http://subdomain.example.org/ad1.gif`
- `https://ads.example.org:8000/`

**Toto pravidlo neblokuje:**

- `http://ads.example.org.us/ad1.gif`
- `http://example.com/redirect/http://ads.example.org/`

Ve výchozím nastavení tato pravidla pro žádosti o dokumenty nefungují. To znamená, že pravidlo `||example.org^` zablokuje požadavek na `example.org` při pokusu o přechod na tuto doménu z jiné webové stránky, ale pokud do adresního řádku zadáte `example.org` a pokusíte se na doménu přejít, webová stránka se otevře. Chcete-li zablokovat žádost o dokument, budete muset použít pravidlo s modifikátorem [`$document`](#document-modifier): `||example.org^$document`.

### Blokování přesné adresy

![Blocking exact address](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Toto pravidlo blokuje:**

- `http://example.org/`

**Toto pravidlo neblokuje:**

- `https://example.org/banner/img`

### Modifikátory základních pravidel {#basic-rule-modifiers}

Pravidla filtrování podporují řadu modifikátorů, které umožňují doladit chování pravidla. Zde je příklad pravidla s několika jednoduchými modifikátory.

![Modifikátory základních pravidel](https://cdn.adtidy.org/content/kb/ad_blocker/general/2_basic_rule_options.svg)

**Toto pravidlo blokuje:**

- `http://example.org/script.js`, pokud je tento skript načten z `example.com`.

**Toto pravidlo neblokuje:**

- `https://example.org/script.js`, pokud je tento skript načten z `example.org`.
- `https://example.org/banner.png`, protože se nejedná o skript.

### Odblokování adresy

![Odblokování adresy](https://cdn.adtidy.org/content/kb/ad_blocker/general/3_basic_exception.svg)

**Toto pravidlo odblokuje:**

- `http://example.org/banner.png`, i když pro tuto adresu existuje pravidlo blokování.

Pravidla blokování s modifikátorem [`$important`](#important-modifier) mohou přepsat výjimky.

### Odblokování celé webové stránky

![Odblokování celé webové stránky](https://cdn.adtidy.org/content/kb/ad_blocker/general/4_unblock_entire_website.svg)

**Toto pravidlo odblokuje**

- Zakáže všechna kosmetická pravidla na `example.com`.
- Odblokuje všechny požadavky odeslané z této webové stránky, i když existují pravidla blokování odpovídající těmto požadavkům.

### Kosmetické pravidlo

![Cosmetic rule](https://cdn.adtidy.org/content/kb/ad_blocker/general/5_cosmetic_rules.svg)

Kosmetická pravidla jsou založena na použití speciálního jazyka CSS, kterému rozumí každý prohlížeč. V podstatě přidává na webové stránky nový styl CSS, jehož účelem je skrýt určité prvky. Více o CSS obecně se můžete dozvědět [zde](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

AdGuard [rozšiřuje CSS](#extended-css-selectors) a umožňuje tak vývojářům filtrů řešit mnohem složitější případy. Abyste však mohli tato rozšířená pravidla používat, musíte ovládat běžný jazyk CSS.

**Oblíbené selektory CSS**

| Název                        | Selektor CSS                     | Popis                                                                                                                                                                                                                  |
| ---------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID selector                  | `#banners`                       | Shoduje se se všemi prvky s atributem `id` rovným `banners`.<br/>![ID selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_id_selector.png)                                                    |
| Class selector               | `.banners`                       | Shoduje se se všemi prvky s atributem `class` obsahujícím `banners`.<br/>![Class selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_selector.png)                                      |
| Attribute selector           | `div[class="banners"]`           | Shoduje se se všemi prvky `div` s atributem `class` **přesně rovným** k `banners`.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr.png)                        |
| Attribute substring selector | `div[class^="advert1"]`          | Shoduje se se všemi prvky `div` s atributem `class` **začínajícím na** řetězec `advert1`.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`      | Shoduje se se všemi prvky `div` s atributem `class` **končícím na** řetězec `banners_ads`.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png)  |
| Attribute substring selector | `a[href^="http://example.com/"]` | Shoduje se se všemi odkazy načtenými z domény `http://example.com/`.<br/>![Attribute substring selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_start.png)                            |
| Attribute selector           | `a[href="http://example.com/"]`  | Shoduje se se všemi odkazy **exactly** adresy `http://example.com/`.<br/>![Attribute selector](https://cdn.adtidy.org/public/Adguard/kb/en/rules_syntax/css_attr_equal.png)                                      |

## Omezení a restrikce

### Důvěryhodné filtry {#trusted-filters}

Některá pravidla lze použít pouze v důvěryhodných filtrech. Tato kategorie zahrnuje:

- seznamy filtrů [vytvořené týmem AdGuard](../adguard-filters),
- seznamy vlastních filtrů nainstalované jako `trusted`,
- uživatelská pravidla.

### Blokátor obsahu AdGuard

Blokátor obsahu AdGuard je rozšíření pro prohlížeče Samsung a Yandex, které lze nainstalovat z Google Play. Nesmí se zaměňovat s plně funkčním nástrojem AdGuard pro Android, který lze stáhnout pouze z [našich stránek](https://adguard.com/adguard-android/overview.html). Bohužel, funkce Blokátoru obsahu AdGuard jsou omezeny tím, co prohlížeče umožňují a podporují pouze starou syntaxi filtrů Adblock Plus:

- Základní pravidla blokování s následujícími modifikátory: `$domain`, `$third-party`, [modifikátory typu obsahu](#content-type-modifiers).
- Základní pravidla výjimek s následujícími modifikátory: `$document`, `$elemhide`.
- Základní pravidla [pro skrývání prvků](#cosmetic-elemhide-rules) bez rozšířené podpory CSS.

Vzhledem k výše uvedeným omezením nebude Blokátor obsahu AdGuard uveden v poznámkách ke kompatibilitě.

## Základní pravidla

Nejjednoduššími pravidly jsou tzv. *základní pravidla*. Slouží k blokování požadavků na konkrétní adresy URL. Nebo je odblokují, pokud je na začátku pravidla speciální znak "@@". Základní princip tohoto typu pravidel je poměrně jednoduchý: je třeba zadat adresu a další parametry, které omezují nebo rozšiřují rozsah pravidla.

:::note Dílčí požadavky

Základní pravidla pro blokování požadavků se vztahují pouze na **dílčí požadavky**. To znamená, že nebudou blokovat načítání stránky, pokud není výslovně zadána pomocí modifikátoru `$document`.

:::

:::note Stav odpovědi

Prohlížeč rozpozná zablokovaný požadavek jako dokončený s chybou.

:::

:::note Délka pravidla

Pravidla kratší než 4 znaky jsou považována za nesprávná a budou ignorována.

:::

### Syntaxe základních pravidel {#basic-rules-syntax}

```text
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- **`pattern`** — maska adresy. Každá adresa URL požadavku je přiřazena k této masce. V šabloně můžete také použít speciální znaky popsané [níže](#basic-rules-special-characters). Vezměte na vědomí, že AdGuard zkracuje adresy URL na délku 4096 znaků, aby urychlil porovnávání a předešel problémům s nesmyslně dlouhými adresami URL.
- **`@@`** — znak, který se používá v pravidlech výjimek. Chcete-li filtrování požadavku vypnout, začněte pravidlo touto značkou.
- **`modifiers`** — parametry, které "objasňují" základní pravidlo. Některé z nich omezují rozsah pravidel a některé mohou zcela změnit jejich fungování.

### Speciální znaky {#basic-rules-special-characters}

- **`*`** — zástupný znak. Používá se k reprezentaci libovolné sady znaků. Může to být také prázdný řetězec nebo řetězec libovolné délky.
- **`||`** — indikace o použití pravidla na zadanou doménu a její subdomény. S tímto znakem nemusíte v masce adresy zadávat konkrétní protokol a subdoménu. Tj., že `||` znamená `http://*.`, `https://*.`, `ws://*.`, `wss://*.` najednou.
- **`^`** — oddělovací znak. Oddělovací znak je libovolný znak, mimo písmeno, číslice nebo jeden z následujících znaků: `_` `-` `.` `%`. V tomto příkladu jsou oddělovací znaky zobrazeny tučně: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. Konec adresy je také akceptován jako oddělovací znak.
- **`|`** — ukazatel na začátku nebo konci adresy. Hodnota závisí na umístění znaku v masce. Např. pravidlo `swf|` odpovídá `http://example.com/annoyingflash.swf`, ale neodpovídá `http://example.com/swf/index.html`. `|http://example.org` odpovídá `http://example.org`, ale ne `http://domain.com?url=http://example.org`.

:::note

`|`, `||`, `^` lze použít pouze u pravidel se vzorem URL. Např. `||example.com##.advert` je nesprávný a bude blokátorem ignorován.

:::

:::note Vizuální znázornění

Doporučujeme také seznámit se s [přehledem filtrů Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), abyste lépe pochopili, jak taková pravidla vytvářet.

:::

### Podpora regulárních výrazů {#regexp-support}

Pokud chcete ještě větší flexibilitu při vytváření pravidel, můžete použít [regulární výrazy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) namísto výchozí zjednodušené masky se speciálními znaky.

:::caution Výkon

Pravidla s regulárními výrazy pracují pomaleji, proto se jim doporučuje vyhnout nebo omezit jejich rozsah na určité domény.

:::

Pokud chcete, aby blokátor určil regulární výraz, musí `pattern` vypadat takto:

```text
pattern = "/" regexp "/"
```

Např. pravidlo `/banner\d+/$third-party` použije regulární výraz `banner\d+` na všechny požadavky třetích stran. Pravidlo výjimky s regulárním výrazem vypadá takto: `@@/banner\d+/`.

:::info Kompatibilita

AdGuard pro Safari a AdGuard pro iOS plně nepodporují regulární výrazy kvůli [omezení API pro blokování obsahu](https://webkit.org/blog/3476/content-blockers-first-look/) (hledejte sekci "Formát regulárního výrazu").

:::

### Podpora zástupných znaků pro TLD (domény nejvyšší úrovně) {#wildcard-for-tld}

Zástupné znaky jsou podporovány pro TLD domén ve vzorech [kosmetických](#cosmetic-rules), [filtrování HTML](#html-filtering-rules) a pravidel [JavaScript](#javascript-rules).

V případě kosmetických pravidel, např. `example.*##.banner`, je díky znaku `.*`, tj. `example.com`, `sub.example.net`, `example.co.uk`, atd. přiřazeno více domén.

Pro základní pravidla platí popsaná logika pouze pro domény uvedené v [`$domain` modifikátoru](#domain-modifier), např. `||*/banners/*$image,domain=example.*`.

:::info Kompatibilita

V AdGuardu pro Windows, Mac, Android a v pravidlech rozšíření prohlížeče AdGuard se zástupným znakem `.*`, odpovídá jakékoli veřejné příponě [(nebo eTLD)](https://publicsuffix.org/list/). Pro AdGuard pro Safari a iOS [je však seznam podporovaných domén nejvyšší úrovně](https://github.com/AdguardTeam/SafariConverterLib/blob/v2.0.31/Sources/ContentBlockerConverter/Compiler/BlockerEntryFactory.swift#L44) omezen kvůli omezením v Safari.

:::

Pravidla se zástupným znakem pro TLD nejsou podporována Blokátorem obsahu AdGuard.

### Příklady základních pravidel

- `||example.com/ads/*` — jednoduché pravidlo, které odpovídá adresám typu `http://example.com/ads/banner.jpg` a dokonce i `http://subdomain.example.com/ads/otherbanner.jpg`.

- `||example.org^$third-party` — toto pravidlo blokuje požadavky třetích stran na `example.org` a jejím subdoménám.

- `@@||example.com$document` — obecné pravidlo výjimky. Zcela vypne filtrování pro `example.com` a všechny subdomény. V pravidlech pro výjimky lze použít řadu modifikátorů. Pro více podrobností klikněte na [odkaz ](#exception-modifiers) níže.

### Modifikátory základních pravidel

- [Základní modifikátory](#basic-rules-basic-modifiers)
- [Modifikátory typu obsahu](#content-type-modifiers)
- [Modifikátory výjimek](#exception-modifiers)

:::note

Funkce popsané v této části jsou určeny pro zkušené uživatele. Rozšiřují možnosti "základních pravidel", ale abyste je mohli používat, musíte mít základní znalosti o fungování prohlížeče.

:::

Chování "základního pravidla" můžete změnit pomocí dalších modifikátorů. Modifikátory by měly být umístěny na konci pravidla za znakem `$` a odděleny čárkami.

Příklad:

```adblock
||domain.com^$popup,third-party
```

### Základní modifikátory {#basic-rules-basic-modifiers}

Následující modifikátory jsou nejjednodušší a nejčastěji používané. V podstatě jen omezují rozsah použití pravidel.

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                             |     [Aplikace CoreLibs][cl-apps]      |    [AdGuard pro Chromium][ext-chr]     |   [AdGuard pro Chrome MV3][ext-mv3]    |     [AdGuard pro Firefox][ext-ff]      |       [AdGuard pro iOS][ios-app]       |     [AdGuard pro Safari][ext-saf]      | [Blokátor obsahu AdGuard][and-cb] |
| --------------------------------------------------- |:-------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:--------------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                               |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$denyallow](#denyallow-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$domain](#domain-modifier)                         |                   ✅                   |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) |                   ✅                    | ✅ [*[1]](#domain-modifier-limitations) | ✅ [*[1]](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)                         |                   ✅                   | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    | ✅ [*[2]](#header-modifier-limitations) |                   ❌                    |                   ❌                    |                 ❌                 |
| [$important](#important-modifier)                   |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ❌                 |
| [$match-case](#match-case-modifier)                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$method](#method-modifier)                         |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$popup](#popup-modifier)                           | ✅ [*[3]](#popup-modifier-limitations) |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  |                   ✅                    | ✅ [*[3]](#popup-modifier-limitations)  | ✅ [*[3]](#popup-modifier-limitations)  |                 ❌                 |
| [$strict-first-party](#strict-first-party-modifier) |                   ⏳                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$strict-third-party](#strict-third-party-modifier) |                   ⏳                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$third-party](#third-party-modifier)               |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$to](#to-modifier)                                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ⏳ - funkce, jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno

:::

#### **`$app`** {#app-modifier}

Tento modifikátor umožňuje zúžit pokrytí pravidla na konkrétní aplikaci (nebo seznam aplikací). V systémech Windows a Mac to nemusí být příliš důležité, ale v mobilních zařízeních, kde některá pravidla filtrování musí být specifická pro konkrétní aplikaci, je to velmi důležité.

- Android — použijte název balíčku aplikace, např. `org.example.app`.
- Windows — použijte název procesu, např. `chrome.exe`.
- Mac — použijte ID svazku nebo název procesu, např. `com.google.Chrome`.

V případě počítače Mac můžete ID svazku nebo název procesu aplikace zjistit zobrazením příslušných podrobností o požadavku v záznamu filtrování.

**Příklady**

- `||baddomain.com^$app=org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z Android aplikace `org.example.app`.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — stejné pravidlo, ale funguje jak pro `org.example.app1`, tak i pro `org.example.app2`.

Pokud chcete, aby se pravidlo nevztahovalo na určité aplikace, začněte název aplikace znakem `~`.

- `||baddomain.com^$app=~org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z jakékoli aplikace kromě `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — stejně jako výše, ale nyní jsou vyloučeny dvě aplikace: `org.example.app1` a `org.example.app2`.

:::caution Omezení

Aplikace v hodnotě modifikátoru nemohou mít zástupný znak, např. `$app=com.*.music`. Pravidla s takovým modifikátorem jsou považována za neplatná.

:::

:::info Kompatibilita

- Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$app`.
- On Windows the process name is case-insensitive starting with AdGuard for Windows with [CoreLibs][] v1.12 or later.

:::

#### **`$denyallow`** {#denyallow-modifier}

Modifikátor `$denyallow` umožňuje vyhnout se vytváření dalších pravidel, pokud je potřeba zakázat určité pravidlo pro konkrétní domény. `$denyallow` odpovídá pouze cílovým doménám, nikoli doménám odkazujícím.

Přidání tohoto modifikátoru k pravidlu je ekvivalentní vyloučení domén podle shodného vzoru pravidla nebo přidání odpovídajících pravidel výjimek. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

**Příklady**

Toto pravidlo:

```adblock
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

odpovídá tomuto:

```adblock
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

nebo kombinaci těchto tří:

```adblock
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

:::caution Omezení

- Vzor shody pravidla se nemůže zaměřit na žádné konkrétní domény, např. nemůže začínat `||`.
- Domains in the modifier value cannot be negated, e.g. `$denyallow=~x.com`, or have a wildcard TLD, e.g. `$denyallow=x.*`, or be a regular expression, e.g. `$denyallow=/\.(com\|org)/`.
- `$denyallow` cannot be used together with [`$to`](#to-modifier). It can be expressed with inverted `$to`: `$denyallow=a.com|b.com` is equivalent to `$to=~a.com|~b.com`.

Pravidla, která tato omezení porušují, jsou považována za neplatná.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$denyallow` nejsou AdGuardem pro iOS, Safari a Blokátorem obsahu AdGuard podporována.

:::

#### **`$domain`** {#domain-modifier}

`$domain` omezuje rozsah pravidla na požadavky **ze zadaných domén** a jejich subdomén (jak je uvedeno v záhlaví [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) HTTP).

**Syntaxe**

Modifikátor je seznam jednoho nebo více výrazů oddělených symbolem `|`, z nichž každý je porovnáván s doménou určitým způsobem v závislosti na svém typu (viz níže).

```text
domains = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_domain / any_tld_domain / regexp )
```

- **`regular_domain`** — běžný název domény (`domain.com`). Odpovídá zadané doméně a jejím subdoménám. Shoduje se lexikograficky.
- **`any_tld_domain`** — název domény zakončený zástupným znakem jako [veřejná přípona](https://publicsuffix.org/learn/), např. pro `example.*` je to `co.uk` v `example.co.uk`. Odpovídá zadané doméně a jejím subdoménám s libovolnou veřejnou příponou. Shoduje se lexikograficky.
- **`regexp`** — regulární výraz, který začíná a končí znakem `/`. The pattern works the same way as in the basic URL rules, but the characters `/`, `$`, `,`, and `|` must be escaped with `\`.

:::info

Rules with `$domain` modifier as `regular_domain` are supported by all AdGuard products.

:::

**Příklady**

**Jen `$domain`:**

- `||baddomain.com^$domain=example.org` blokuje požadavky, které odpovídají zadané masce a jsou odeslány z domény `example.org` nebo jejích subdomén.
- `||baddomain.com^$domain=example.org|example.com` — stejné pravidlo, ale funguje jak pro `example.org`, tak i pro `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`.

**`$domain` a negace `~`:**

- `||baddomain.com^$domain=example.org` blokuje požadavky, které odpovídají zadané masce a jsou odeslány z domény `example.org` nebo jejích subdomén.
- `||baddomain.com^$domain=example.org|example.com` — stejné pravidlo, ale funguje jak pro `example.org`, tak i pro `example.com`.
- `||baddomain.com^$domain=~example.org` blokuje požadavky, které odpovídají vzoru a jsou odeslané z jakékoli domény kromě `example.org` a jejích subdomén.
- `||baddomain.com^$domain=example.org|~foo.example.org` blokuje požadavky odeslané z `example.org` a jích subdomén, kromě subdomény `foo.example.org`.
- `||baddomain.com^$domain=/(^\|.+\.)example\.(com\|org)\$/` blokuje požadavky odeslané z `example.org` a `example.com` a všech jejích subdomén.
- `||baddomain.com^$domain=~a.com|~b.*|~/(^\|.+\.)c\.(com\|org)\$/` blokuje požadavky odeslané z `a.com`, `b` s libovolnou veřejnou příponou (`b.com`, `b.co.uk`, etc.), `c.com`, `c.org`, a jejich subdomén.

**`$domain` modifikátor odpovídající cílové doméně:**

V některých případech může modifikátor `$domain` odpovídat nejen doméně odkazovače, ale také cílové doméně. K tomu dojde, pokud jsou splněny všechny následující podmínky:

1. Požadavek má typ obsahu `document`
1. Vzor pravidla neodpovídá žádné konkrétní doméně
1. Vzor pravidla neobsahuje regulární výrazy
1. Modifikátor `$domain` obsahuje pouze domény ve výjimkách, např. `$domain=~example.org|~example.com`

Následující predikát by měl být splněn, aby bylo možné provést porovnání cílové domény:

```text
1 AND ((2 AND 3) OR 4)
```

To znamená, že pokud modifikátor `$domain` obsahuje pouze domény ve výjimkách, pak pravidlo nemusí splňovat druhou a třetí podmínku, aby se cílová doména shodovala s modifikátorem `$domain`.

Pokud některé z výše uvedených podmínek nejsou splněny, ale pravidlo obsahuje modifikátor [`$cookie`](#cookie-modifier) nebo [`$csp`](#csp-modifier), cílová doména bude přesto přiřazena.

Pokud odkazující doména odpovídá pravidlu s `$domain`, které výslovně vylučuje doménu odkazujícího serveru, pravidlo se nepoužije, i když cílová doména také odpovídá pravidlu. To má vliv i na pravidla s modifikátory [`$cookie`](#cookie-modifier) a [`$csp`](#csp-modifier).

**Příklady**

- `*$cookie,domain=example.org|example.com` zablokuje soubory cookie pro všechny požadavky do a z domény `example.org` a `example.com`.
- `*$document,domain=example.org|example.com` zablokuje všechny požadavky do a z domény `example.org` a `example.com`.

V následujících příkladech se předpokládá, že požadavky jsou odesílány z adresy `http://example.org/page` (odkazující adresa), cílová adresa URL je `http://targetdomain.com/page`.

- `page$domain=example.org` bude přiřazena, protože odpovídá doméně odkazu.
- `page$domain=targetdomain.com` bude přiřazena, protože odpovídá cílové doméně a splňuje všechny výše uvedené požadavky.
- `||*page$domain=targetdomain.com` nebude přiřazena, protože vzor `||*page` odpovídá konkrétním doménám, např. `example.page`.
- `||*page$domain=targetdomain.com,cookie` bude přiřazena, protože pravidlo obsahuje modifikátor `$cookie`, přestože vzor `||*page` může odpovídat konkrétním doménám.
- `/banner\d+/$domain=targetdomain.com` nebude přiřazena, protože obsahuje regulární výraz.
- `page$domain=targetdomain.com|~example.org` nebude přiřazena, protože doména odkazu je výslovně vyloučena.

##### omezení modifikátoru `$domain` {#domain-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] `regexp` and `any_tld domains` are not supported.

:::

:::caution Omezení

Safari nepodporuje současné použití povolených a zakázaných domén, takže pravidla jako `||baddomain.com^$domain=example.org|~foo.example.org` nebudou v AdGuardu pro iOS a AdGuardu pro Safari fungovat.

:::

:::info Kompatibilita

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.12 or later the `$domain` modifier can be alternatively spelled as `$from`.

:::

#### **`$header`** {#header-modifier}

Modifikátor `$header` umožňuje porovnat odpověď HTTP se specifickým záhlavím s (volitelně) specifickou hodnotou.

**Syntaxe**

```text
$header "=" h_name [":" h_value]
h_value = string / regexp
```

kde:

- **`h_name`** — povinný název záhlaví HTTP. It is matched case-insensitively.
- **`h_value`** — nepovinný výraz odpovídající hodnotě záhlaví HTTP, může to být jeden z následujících výrazů:
    - **`string`** — posloupnost znaků. Porovnává se s hodnotou záhlaví lexikograficky;
    - **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\`.

Část modifikátoru `":" h_value` lze vynechat. V takovém případě modifikátor odpovídá pouze názvu záhlaví.

**Příklady**

- `||example.com^$header=set-cookie:foo` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající `foo`.
- `||example.com^$header=set-cookie` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající regulárnímu výrazu `foo, bar$`.
- `@@||example.com^$header=set-cookie` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.

##### `$header` modifier limitations {#header-modifier-limitations}

:::caution Omezení

1. The `$header` modifier can be matched only when headers are received. So if the request is blocked or redirected at an earlier stage, the modifier cannot be applied.
1. In Adguard Browser Extension, the `$header` modifier is only compatible with [`$csp`](#csp-modifier), [`$removeheader`](#removeheader-modifier), [`$important`](#important-modifier), and [`$badfilter`](#badfilter-modifier).

:::

:::info Kompatibilita

Rules with the `$header` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$important`** {#important-modifier}

Modifikátor `$important` použitý na pravidlo zvyšuje jeho prioritu oproti pravidlům bez stejného modifikátoru. Dokonce i přes základní pravidla výjimek.

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

**Příklady**

```adblock
! pravidlo blokování zablokuje všechny požadavky navzdory pravidlu výjimky
||example.org^$important
@@||example.org^
```

```adblock
! pokud má pravidlo výjimky také modifikátor `$important`, bude mít přednost a žádné požadavky nebudou blokovány
||example.org^$important
@@||example.org^$important
```

#### **`$match-case`** {#match-case-modifier}

Tento modifikátor definuje pravidlo, které se vztahuje pouze na adresy odpovídající danému případu. Výchozí pravidla nerozlišují velká a malá písmena.

**Příklady**

- `*/BannerAd.gif$match-case` — toto pravidlo zablokuje `http://example.com/BannerAd.gif`, ale ne `http://example.com/bannerad.gif`.

:::info Kompatibilita

Rules with the `$match-case` are supported by AdGuard for iOS and AdGuard for Safari with SafariConverterLib v2.0.43 or later.

Všechny ostatní produkty již tento modifikátor podporují.

:::

#### **`$method`** {#method-modifier}

Tento modifikátor omezuje rozsah pravidla na požadavky, které používají zadanou sadu metod HTTP. Negované metody jsou povoleny. Metody musí být zadány malými písmeny, ale při porovnávání se nerozlišují velká a malá písmena. Chcete-li do jednoho pravidla přidat více metod, použijte jako oddělovací znak svislou čáru `|`.

**Příklady**

- `||evil.com^$method=get|head` blokuje pouze požadavky GET a HEAD na doméně `evil.com`.
- `||evil.com^$method=~post|~put` blokuje všechny požadavky na doméně `evil.com` kromě POST nebo PUT.
- `@@||evil.com$method=get` odblokuje pouze požadavky GET na doméně `evil.com`.
- `@@||evil.com$method=~post` odblokuje jakékoliv požadavky na doméně `evil.com` kromě POST.

:::caution Omezení

Pravidla se smíšenými negovanými a negovanými hodnotami jsou považována za neplatná. So, for example, the rule `||evil.com^$method=get|~head` will be ignored.

:::

:::info Kompatibilita

Rules with `$method` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

:::

#### **`$popup`** {#popup-modifier}

AdGuard se pokusí zavřít kartu prohlížeče s jakoukoli adresou, která odpovídá pravidlu blokování s tímto modifikátorem. Upozorňujeme, že ne všechny karty lze zavřít.

**Příklady**

- `||domain.com^$popup` — pokud se pokusíte přejít na `http://domain.com/` z libovolné stránky v prohlížeči, nová karta, ve které má být zadaný web otevřen, bude tímto pravidlem zavřena.

##### `$popup` modifier limitations {#popup-modifier-limitations}

:::caution Omezení

1. The `$popup` modifier works best in AdGuard Browser Extension for Chromium-based browsers and Firefox.
1. In [AdGuard for Chrome MV3][ext-mv3] rules with the [`$popup`][popup-in-mv3] modifier would not work, so we disable converting them to declarative rules. We will try to use them only in our [TSUrlFilter][] engine and close new tabs programmatically.
1. In AdGuard for iOS and AdGuard for Safari, `$popup` rules simply block the page right away.
1. In AdGuard for Windows, AdGuard for Mac, and AdGuard for Android, the `$popup` modifier may not detect a popup in some cases and it will not be blocked. The `$popup` modifier applies the `document` content type with a special flag which is passed to a blocking page. Samotná blokovací stránka může provést některé kontroly a zavřít okno, pokud se skutečně jedná o vyskakovací okno. V opačném případě by se stránka měla načíst. It can be combined with other request type modifiers, such as `$third-party`, `$strict-third-party`, `$strict-first-party`, and `$important`.

:::

:::info Kompatibilita

Rules with the `$popup` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$strict-first-party`** {#strict-first-party-modifier}

Works the same as the [`$~third-party`](#third-party-modifier) modifier, but only treats the request as first-party if the referrer and origin have exactly the same hostname.

**Příklady**

- domain.com$strict-first-party' — this rule applies only to `domain.com`. For example, a request from `domain.com` to `http://domain.com/icon.ico` is a first-party request. A request from `sub.domain.com` to `http://domain.com/icon.ico` is treated as a third-party one (as opposed to the `$~third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict1p`.

:::

:::info Kompatibilita

Rules with the `$strict-first-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later.

:::

#### **`$strict-third-party`** {#strict-third-party-modifier}

Works the same as the [`$third-party`](#third-party-modifier) modifier but also treats requests from the domain to its subdomains and vice versa as third-party requests.

**Příklady**

- `||domain.com^$strict-third-party` — this rule applies to all domains except `domain.com`. An example of a third-party request: `http://sub.domain.com/banner.jpg` (as opposed to the `$third-party` modifier).

:::note

You can use a shorter name (alias) instead of using the full modifier name: `$strict3p`.

:::

:::info Kompatibilita

Rules with the `$strict-third-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later.

:::

#### **`$third-party`** {#third-party-modifier}

A restriction on third-party and custom requests. A third-party request is a request from an external domain. Např. požadavek na `example.org` z `domain.com` je požadavek třetí strany.

:::note

Aby mohla být žádost třetí strany považována za takovou, měla by splňovat jednu z následujících podmínek:

1. Její odkazující doména není subdoménou cílové domény nebo naopak. Např. požadavek na `subdomain.example.org` z `example.org` není požadavek třetí strany
1. Její záhlaví `Sec-Fetch-Site` je nastaveno na `cross-site`

:::

**Příklady**

**`$third-party`:**

- `||domain.com^$third-party` — toto pravidlo bude použito na všechny domény, kromě `domain.com` a její subdomény. Příklad požadavku třetí strany: `http://example.org/banner.jpg`.

Pokud existuje modifikátor `$third-party`, pravidlo se použije pouze na požadavky, které nejsou od třetích stran. To znamená, že musí být odeslány ze stejné domény.

**`$~third-party`:**

- `||domain.com$~third-party` — toto pravidlo se vztahuje výhradně na `domain.com`. Příklad požadavku která není podán třetí stranou: `http://domain.com/icon.ico`.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$3p`.

:::

#### **`$to`** {#to-modifier}

`$to` omezuje rozsah pravidla na požadavky **na** zadané domény a jejich subdomény. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

**Příklady**

- `/ads$to=evil.com|evil.org` zablokuje jakýkoliv požadavek na `evil.com` nebo `evil.org` a jejich subdomény s cestou, která odpovídá `/ads`.
- `/ads$to=~not.evil.com|evil.com` zablokuje jakýkoliv požadavek na `evil.com` a její subdomény s cestou, která odpovídá `/ads`, kromě požadavků na `not.evil.com` a její subdomény.
- `/ads$to=~good.com|~good.org` zablokuje všechny požadavky s cestou, která odpovídá `/ads`, kromě požadavků na `good.com` nebo `good.org` a jejich subdomény.

:::caution Omezení

[`$denyallow`](#denyallow-modifier) cannot be used together with `$to`. It can be expressed with inverted `$to`: `$denyallow=a.com|b.com` is equivalent to `$to=~a.com|~b.com`.

:::

:::info Kompatibilita

Rules with the `$to` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

:::

### Modifikátory typu obsahu {#content-type-modifiers}

Existuje sada modifikátorů, které lze použít k omezení oblasti použití pravidla na určitý typ obsahu. Tyto modifikátory lze také kombinovat, aby zahrnovaly například obrázky i skripty.

:::info Kompatibilita

V tom, jak AdGuard určuje typ obsahu na různých platformách, je velký rozdíl. U Rozšíření prohlížeče AdGuard je typ obsahu pro každý požadavek poskytován prohlížečem. AdGuard pro Windows, Mac a Android používají následující metodu: nejprve se aplikace pokusí určit typ požadavku podle záhlaví požadavku `Sec-Fetch-Dest` nebo podle přípony názvu souboru. Pokud není požadavek v této fázi zablokován, určí se typ pomocí záhlaví `Content-Type` na začátku odpovědi serveru.

:::

**Příklady modifikátorů typu obsahu**

- `||example.org^$image` — odpovídá všem obrázkům z `example.org`.
- `||example.org^$script,stylesheet` — odpovídá všem skriptům a stylům z `example.org`.
- `||example.org^$~image,~script,~stylesheet` — odpovídá všem požadavkům na `example.org` kromě obrázků, skriptů a stylů.

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                                       |        [Aplikace CoreLibs][cl-apps]         | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Chrome MV3][ext-mv3] | [AdGuard pro Firefox][ext-ff] |        [AdGuard pro iOS][ios-app]         |       [AdGuard pro Safari][ext-saf]       | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------------------------------- |:-------------------------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:-----------------------------------------:|:-----------------------------------------:|:---------------------------------:|
| [$document](#document-modifier)                               |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$font](#font-modifier)                                       |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$image](#image-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$media](#media-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$object](#object-modifier)                                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$other](#other-modifier)                                     |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$ping](#ping-modifier)                                       |    ✅ [*[1]](#ping-modifier-limitations)     |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                 |
| [$script](#script-modifier)                                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$stylesheet](#stylesheet-modifier)                           |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$subdocument](#subdocument-modifier)                         | ✅ [*[2]](#subdocument-modifier-limitations) |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ❌                 |
| [$websocket](#websocket-modifier)                             |                      ✅                      |                ✅                |                 ✅                 |               ✅               | ✅ [*[3]](#websocket-modifier-limitations) | ✅ [*[3]](#websocket-modifier-limitations) |                 ❌                 |
| [$xmlhttprequest](#xmlhttprequest-modifier)                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ✅                     |                     ✅                     |                 ✅                 |
| [$webrtc 🚫](#webrtc-modifier "removed")                       |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                 |
| [$object-subrequest 🚫](#object-subrequest-modifier "removed") |                      ❌                      |                ❌                |                 ❌                 |               ❌               |                     ❌                     |                     ❌                     |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno
- 🚫 — odstraněno a již nepodporováno

:::

#### **`$document`** {#document-modifier}

Pravidlo odpovídá požadavkům na dokument hlavního rámce, tj. dokumenty HTML načtené na kartě prohlížeče. Neodpovídá hodnotám iframe, pro ten existuje modifikátor [`$subdocument`](#subdocument-modifier).

Ve výchozím nastavení AdGuard neblokuje požadavky, které se načítají na kartě prohlížeče (např. "obcházení hlavního rámce"). Cílem není zabránit načtení stránek, protože uživatel jasně uvedl, že chce, aby se tato stránka načetla. Pokud je však modifikátor `$document` zadán explicitně, AdGuard tuto logiku nepoužije a zabrání načtení stránky. Místo toho se zobrazí "blokační stránka".

Pokud je tento modifikátor použit s pravidlem výjimky (`@@`), zcela zakáže blokování na příslušných stránkách. Je to ekvivalentní použití modifikátorů `$elemhide`, `$content`, `$urlblock`, `$jsinject`, `$extension` současně.

**Příklady**

- `@@||example.com^$document` zcela zakáže filtrování všech stránek na `example.com` a všech subdoménách.

- `||example.com^$document` zablokuje požadavek na dokument HTML na `example.com` pomocí blokační stránky.
- `||example.com^$document,redirect=noopframe` přesměruje požadavek na HTML dokument na `example.com` na prázdný HTML dokument.
- `||example.com^$document,removeparam=test` removes `test` query parameter from HTML document request to `example.com`.
- `||example.com^$document,replace=/test1/test2/` replaces `test1` with `test2` in HTML document request to `example.com`.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$doc`.

:::

#### **`$font`** {#font-modifier}

Pravidlo odpovídá požadavkům na písma, např. s příponou `.woff`.

#### **`$image`** {#image-modifier}

Pravidlo odpovídá požadavkům na obrázky.

#### **`$media`** {#media-modifier}

Pravidlo odpovídá požadavkům na mediální soubory — hudbu a video, např. soubory `.mp4`.

#### **`$object`** {#object-modifier}

Pravidlo odpovídá prostředkům pluginů prohlížeče, např. Java nebo Flash.

#### **`$other`** {#other-modifier}

Pravidlo se vztahuje na požadavky, jejichž typ nebyl určen nebo neodpovídá výše uvedeným typům.

#### **`$ping`** {#ping-modifier}

Pravidlo odpovídá požadavkům vyvolaným buď `navigator.sendBeacon()`, nebo atributem `ping` v odkazech.

##### `$ping` modifier limitations {#ping-modifier-limitations}

:::caution Omezení

AdGuard pro Windows, Mac a Android často nedokáží přesně detekovat `navigator.sendBeacon()`. V seznamech filtrů, které mají používat AdGuard produkty založené na knihovně CoreLibs, se nedoporučuje používat `$ping`.

:::

:::info Kompatibilita

Rules with `$ping` modifier are not supported by AdGuard for Safari and AdGuard for iOS.

:::

#### **`$script`** {#script-modifier}

Pravidlo odpovídá požadavkům na skripty, např. javascript, vbscript.

#### **`$stylesheet`** {#stylesheet-modifier}

Pravidlo odpovídá požadavkům na soubory CSS.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$css`.

:::

#### **`$subdocument`** {#subdocument-modifier}

Pravidlo odpovídá požadavkům na vestavěné stránky — značky HTML `frame` a `iframe`.

**Příklady**

- `||example.com^$subdocument` blokuje integrované požadavky (`frame` a `iframe`) na `example.com` a všechny její subdomény kdekoli.
- `||example.com^$subdocument,domain=domain.com` blokuje integrované požadavky (`frame` и `iframe`) na `example.com` (a její subdomény) z `domain.com` a všech jejích subdomén.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$frame`.

:::

##### `$subdocument` modified limitations {#subdocument-modifier-limitations}

:::caution Omezení

In AdGuard for Windows, Mac, and Android subdocuments are being detected by the [Sec-Fetch-Dest header][] if it is present. V opačném případě mohou být některé hlavní stránky považovány za dílčí dokumenty.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$subdocument` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$websocket`** {#websocket-modifier}

Pravidlo se vztahuje pouze na připojení WebSocket.

##### `$websocket` modifier limitations {#websocket-modifier-limitations}

:::caution Omezení

For AdGuard for Safari and AdGuard for iOS, it is supported on devices with macOS Monterey (version 12) and iOS 16 or higher respectively.

:::

:::info Kompatibilita

Modifikátor `$websocket` je podporován ve všech produktech AdGuardu kromě Blokátoru obsahu AdGuard.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

Pravidlo se vztahuje pouze na požadavky ajax (požadavky odeslané prostřednictvím objektu javascript `XMLHttpRequest`).

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$xhr`.

:::

:::info Kompatibilita

AdGuard pro Windows, Mac a Android při filtrování starších prohlížečů nedokáže přesně detekovat tento typ a někdy jej detekuje jako [`$other`](#other-modifier) nebo [`$script`](#script-modifier). Tento typ obsahu mohou spolehlivě detekovat pouze při filtrování moderních prohlížečů, které podporují [Záhlaví požadavku na načtení metadat](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header).

:::

#### **`$object-subrequest` (odstraněno)** {#object-subrequest-modifier}

:::danger Upozornění na odstranění

Modifikátor `$object-subrequest` je odstraněn a již není podporován. Pravidla s tímto modifikátorem jsou považována za neplatná. Pravidlo odpovídá požadavkům pluginů prohlížeče (obvykle se jedná o Flash).

:::

#### **`$webrtc` (odstraněno)** {#webrtc-modifier}

:::danger Upozornění na odstranění

Tento modifikátor je odstraněn a již není podporován. Pravidla s tímto modifikátorem jsou považována za neplatná. Pokud potřebujete potlačit WebRTC, zvažte použít `nowebrtc` [scriptlet](#scriptlets).

:::

Pravidlo se vztahuje pouze na připojení WebRTC.

**Příklady**

- `||example.com^$webrtc,domain=example.org` blokuje připojení webRTC na `example.com` z `example.org`.
- `@@*$webrtc,domain=example.org` zakáže RTC wrapper pro `example.org`.

### Modifikátory pravidel pro výjimky {#exception-modifiers}

Pravidla výjimek deaktivují ostatní základní pravidla pro adresy, kterým odpovídají. Začínají značkou `@@`. Lze na ně aplikovat všechny výše uvedené základní modifikátory a mají také několik speciálních modifikátorů.

:::note Vizuální znázornění

Doporučujeme také seznámit se s [přehledem filtrů Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), abyste lépe pochopili, jak pravidla výjimek vytvářet.

:::

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                 | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] |    [AdGuard pro Chrome MV3][ext-mv3]     | [AdGuard pro Firefox][ext-ff] |          [AdGuard pro iOS][ios-app]          |        [AdGuard pro Safari][ext-saf]         | [Blokátor obsahu AdGuard][and-cb] |
| --------------------------------------- |:----------------------------:|:-------------------------------:|:----------------------------------------:|:-----------------------------:|:--------------------------------------------:|:--------------------------------------------:|:---------------------------------:|
| [$content](#content-modifier)           |              ✅               |                ❌                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$elemhide](#elemhide-modifier)         |              ✅               |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                 |
| [$extension](#extension-modifier)       |              ✅               |                ❌                |                    ❌                     |               ❌               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$jsinject](#jsinject-modifier)         |              ✅               |                ✅                | ✅ [*[1]](#jsinject-modifier-limitations) |               ✅               |                      ✅                       |                      ✅                       |                 ❌                 |
| [$stealth](#stealth-modifier)           |              ✅               |                ✅                |                    ❌                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |
| [$urlblock](#urlblock-modifier)         |              ✅               |                ✅                |                    ❌                     |               ✅               |   ✅ [*[2]](#urlblock-modifier-limitations)   |   ✅ [*[2]](#urlblock-modifier-limitations)   |                 ❌                 |
| [$genericblock](#genericblock-modifier) |              ✅               |                ✅                |                    ✅                     |               ✅               | ✅ [*[3]](#genericblock-modifier-limitations) | ✅ [*[3]](#genericblock-modifier-limitations) |                 ❌                 |
| [$generichide](#generichide-modifier)   |              ✅               |                ✅                |                    ✅                     |               ✅               |                      ✅                       |                      ✅                       |                 ✅                 |
| [$specifichide](#specifichide-modifier) |              ✅               |                ✅                |                    ✅                     |               ✅               |                      ❌                       |                      ❌                       |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno

:::

#### **`$content`** {#content-modifier}

Zakáže [filtrování HTML](#html-filtering-rules), pravidla [`$hls`](#hls-modifier), [`$replace`](#replace-modifier) a [`$jsonprune`](#jsonprune-modifier) na stránkách, které odpovídají pravidlu.

**Příklady**

- `@@||example.com^$content` zakáže všechna pravidla pro úpravu obsahu na stránkách `example.com` a všech jích subdoménách.

#### **`$elemhide`** {#elemhide-modifier}

Zakáže jakákoliv [kosmetická pravidla](#cosmetic-rules) na stránkách odpovídajících pravidlu.

**Příklady**

- `@@||example.com^$elemhide` zakáže všechna kosmetická pravidla na `example.com` a všech subdoménách.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$ehide`.

:::

#### **`$extension`** {#extension-modifier}

Zakáže konkrétní uživatelské skripty nebo všechny uživatelské skripty pro danou doménu.

**Syntaxe**

```text
$extension[="userscript_name1"[|"userscript_name2"[|"userscript_name3"[...]]]]
```

`userscript_name(i)` označuje konkrétní název uživatelského skriptu, který má být modifikátorem zakázán. Modifikátor může obsahovat libovolný počet názvů uživatelských skriptů nebo žádný. V druhém případě modifikátor zakáže všechny uživatelské skripty.

Názvy uživatelských skriptů obvykle obsahují mezery nebo jiné speciální znaky, proto byste měli název uzavřít do uvozovek. Podporovány jsou jednoduché (`'`) i dvojité (`"`) uvozovky ASCII. Více názvů uživatelských skriptů by mělo být odděleno svislou čarou (`|`). Pokud je však název uživatelského skriptu tvořen jedním slovem bez speciálních znaků, lze jej použít bez uvozovek.

Uživatelské skripty můžete také vyloučit přidáním znaku `~` před hodnotu. V tomto případě nebude uživatelský skript modifikátorem zakázán.

```adblock
$extension=~"userscript name"
```

:::note

Když vyloučíte uživatelský skript, musíte umístit znak `~` mimo uvozovky.

:::

Pokud název uživatelského skriptu obsahuje uvozovky (`"`), čárky (`,`) nebo svislé čáry (`|`), musí být uvozen zpětným lomítkem (`\`).

```adblock
$extension="userscript name\, with \"quote\""
```

**Příklady**

- `@@||example.com^$extension="AdGuard Assistant"` zakáže uživatelský skript `AdGuard asistent` na `example.com`.
- `@@||example.com^$extension=MyUserscript` zakáže uživatelský skript `MyUserscript` na `example.com`.
- `@@||example.com^$extension='AdGuard Assistant'|'AdGuard Popup Blocker'` disables both `AdGuard Assistant` and `AdGuard Popup Blocker` userscripts on `example.com` website.
- `@@||example.com^$extension=~"AdGuard Assistant"` zakáže všechny uživatelské skripty na `example.com`, kromě `AdGuard asistenta`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"AdGuard Popup Blocker"` disables all user scripts on `example.com` website, except `AdGuard Assistant` and `AdGuard Popup Blocker`.
- `@@||example.com^$extension` žádné uživatelské skripty nebudou fungovat na `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` zakáže uživatelský skript `AdGuard "Asistant"` na `example.com`.

:::info Kompatibilita

- Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$extension`.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Forbids adding of JavaScript code to the page. O pravidlech skripletů a javascriptu si můžete přečíst dále.

**Příklady**

- `@@||example.com^$jsinject` zakáže javasript na `example.com` a všech subdoménách.

##### `$jsinject` modifier limitations {#jsinject-modifier-limitations}

:::info Limitations

Rules with the [`$jsinject`][jsinject-in-mv3] modifier cannot be converted to DNR in [AdGuard for Chrome MV3][ext-mv3]. We only use them in the [TSUrlFilter][] engine to disable some cosmetic rules.

:::

:::info Kompatibilita

The `$jsinject` modifier is not supported by AdGuard for Chrome MV3 ([yet][jsinject-in-mv3]) and AdGuard Content Blocker.

:::

#### **`$stealth`** {#stealth-modifier}

Disables the Tracking protection (formerly Stealth Mode) module for all corresponding pages and requests.

**Syntax**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` stand for certain Tracking protection options disabled by the modifier. The modifier can contain any number of specific options (see below) or none. In the latter case the modifier disables all the Tracking protection features.

Seznam dostupných možností modifikátoru:

- `searchqueries` zakáže možnost [**Skrýt vyhledávací dotazy**](../../stealth-mode#searchqueries)
- `donottrack` zakáže možnost [**Požádat webové stránky, aby vás nesledovaly**](../../stealth-mode#donottrack)
- `3p-cookie` zakáže možnost [**Automatické odstranění cookies třetích stran**](../../stealth-mode#3p-cookie)
- `1p-cookie` zakáže možnost [**Automatické odstranění cookies aktuální stránky**](../../stealth-mode#1p-cookie)
- `3p-cache` zakáže možnost [**Zakázat mezipaměť pro požadavky třetích stran**](../../stealth-mode#3p-cache)
- `3p-auth` zakáže možnost [**Blokovat autorizační hlavičku třetích stran**](../../stealth-mode#3p-auth)
- `webrtc` zakáže možnost [**Blokovat WebRTC**](../../stealth-mode#webrtc)
- `push` zakáže možnost [**Blokovat Push API**](../../stealth-mode#push)
- `location` zakáže možnost [**Blokovat lokalizační API**](../../stealth-mode#location)
- `flash` zakáže možnost [**Blokovat Flash**](../../stealth-mode#flash)
- `java` zakáže možnost [**Blokovat Java**](../../stealth-mode#java)
- `referrer` zakáže možnost [**Skrýt třetím stranám referenční ID**](../../stealth-mode#miscellaneous)
- `useragent` zakáže možnost [**Skrýt agenta (identifikaci) Vašeho prohlížeče**](../../stealth-mode#useragent)
- `ip` zakáže možnost [**Skrýt IP adresu**](../../stealth-mode#ip)
- `xclientdata` zakáže možnost [**Odstranit X-Client-Data hlavičku z požadavků HTTP**](../../stealth-mode#xclientdata)
- `dpi` zakáže možnost [**Ochrana před DPI**](../../stealth-mode#dpi)

**Příklady**

- `@@||example.com^$stealth` disables Tracking protection for `example.com` (and subdomains) requests, except for blocking cookies and hiding tracking parameters (see below).
- `@@||domain.com^$script,stealth,domain=example.com` disables Tracking protection only for script requests to `domain.com` (and its subdomains) on `example.com` and all its subdomains.
- `@@||example.com^$stealth=3p-cookie|dpi` zakáže blokování cookies třetích stran a opatření pro oklamání DPI pro `example.com`.

:::note

Blokování cookies a odstranění sledovacích parametrů se provádí pomocí pravidel s modifikátory [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) a [`$removeparam`](#removeparam-modifier). Pravidla výjimek, která obsahují pouze modifikátor `$stealth`, tyto věci neprovedou. If you want to completely disable all Tracking protection features for a given domain, you must include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Omezení

- Možnosti modifikátoru musí být psány malými písmeny, tj. `$stealth=DPI` budou zamítnuty.
- Možnosti modifikátoru nelze negovat, tj. `$stealth=~3p-cookie` bude zamítnuto.
- AdGuard Browser Extension supports only `searchqueries`, `donottrack`, `referrer`, `xclientdata`, `1p-cookie` and `3p-cookie` options.

:::

:::info Kompatibilita

- Tracking protection (formerly Stealth Mode) is available in AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox and Chromium-based browsers, except AdGuard for Chrome MV3. Všechny ostatní produkty budou ignorovat pravidla s modifikátorem `$stealth`.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Zakáže blokování všech požadavků odeslaných ze stránek, které odpovídají pravidlu a zakáže všechna pravidla [`$cookie`](#cookie-modifier).

**Příklady**

- `@@||example.com^$urlblock` — nebudou blokovány žádné požadavky odeslané z `example.com` a ze všech subdomén.

##### `$urlblock` modifier limitations {#urlblock-modifier-limitations}

:::caution Omezení

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$urlblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

:::

:::info Kompatibilita

Rules with `$urlblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### Generická pravidla {#exception-modifiers-generic-rules}

Než budeme moci přistoupit k dalším modifikátorům, musíme provést definici *generických pravidel*. Pravidlo je generické, pokud není omezeno na konkrétní domény. Podporován je také zástupný znak `*`.

Například tato pravidla jsou generická:

```adblock
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

A tato nejsou:

```adblock
domain.com###banner
||domain.com^$domain=example.com
```

#### **`$genericblock`** {#genericblock-modifier}

Zakáže generická základní pravidla na stránkách, které odpovídají pravidlu výjimky.

**Příklady**

- `@@||example.com^$genericblock` zakáže generická základní pravidla na `example.com` a všech subdoménách.

##### `$genericblock` modifier limitations {#genericblock-modifier-limitations}

:::caution Omezení

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$genericblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

:::

:::info Kompatibilita

Rules with `$genericblock` modifier are not supported by AdGuard Content Blocker, and AdGuard for Chrome MV3.

:::

#### **`$generichide`** {#generichide-modifier}

Zakáže všechna generická [kosmetická pravidla](#cosmetic-rules) na stránkách, které odpovídají pravidlu výjimky.

**Příklady**

- `@@||example.com^$generichide` zakáže všechna kosmetická pravidla na `example.com` a jejích subdoménách.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$ghide`.

:::

#### **`specifichide`** {#specifichide-modifier}

Zakáže všechna specifická pravidla pro skrývání prvků a CSS, ale ne obecná pravidla. Má opačný účinek než [`$generichide`](#generichide-modifier).

**Příklady**

- `@@||example.org^$specifichide` zakáže `example.org##.banner`, ale ne `##.banner`.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$shide`.

:::

:::note

Všechna kosmetická pravidla — nejen ta specifická — lze zakázat pomocí modifikátoru [`$elemhide`](#elemhide-modifier).

:::

:::info Kompatibilita

Pravidla s modifikátorem `$specifichide` nejsou AdGuardem pro iOS, Adguardem pro Safari a Blokátorem obsahu AdGuard podporována.

:::

### Pokročilé schopnosti {#advanced-modifiers}

Tyto modifikátory mohou zcela změnit chování základních pravidel.

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                     |        [Aplikace CoreLibs][cl-apps]         | [AdGuard pro Chromium][ext-chr] |      [AdGuard pro Chrome MV3][ext-mv3]      |        [AdGuard pro Firefox][ext-ff]        | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------------- |:-------------------------------------------:|:-------------------------------:|:-------------------------------------------:|:-------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |                      ✅                      |                ✅                |     ✅ [*[1]](#all-modifier-limitations)     |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |                      ✅                      |                ✅                |  ✅ [*[2]](#badfilter-modifier-limitations)  |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |                      ✅                      |                ✅                |   ✅ [*[3]](#cookie-modifier-limitations)    |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$xmlprune](#xmlprune-modifier)             |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       | ✅ [*[4]](#permissions-modifier-limitations) |                ✅                |                      ✅                      | ✅ [*[4]](#permissions-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |                      ✅                      |                ✅                |  ✅ [*[5]](#redirect-modifier-limitations)   |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |                      ✅                      |                ✅                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |                      ✅                      |                ❌                |                      ⏳                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |                      ✅                      |                ✅                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |                      ✅                      |                ✅                | ✅ [*[6]](#removeparam-modifier-limitations) |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |                      ✅                      |                ❌                |                      ❌                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$urltransform](#urltransform-modifier)     |                      ✅                      |                ❌                |                      ❌                      |                      ❌                      |             ❌              |               ❌               |                 ❌                 |
| [noop](#noop-modifier)                      |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "deprecated")    |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "deprecated")        |                      ✅                      |                ✅                |                      ✅                      |                      ✅                      |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ⏳ - funkce, jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno
- 👎 — deprecated; still supported but will be removed in the future

:::

#### **`$all`** {#all-modifier}

`$all` modifier is made of [all content-types modifiers](#content-type-modifiers) and [`$popup`](#popup-modifier). E.g. rule `||example.org^$all` is converting into rule:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

:::caution Omezení

This modifier cannot be used as an exception with the `@@` mark.

:::

##### `$all` modifier limitations {#all-modifier-limitations}

:::caution Omezení

Since `$popup` is a part if `$all`, the `$all` modifier is not supported by AdGuard for Chrome MV3 because of [`$popup` modifier limitations](#popup-modifier-limitations).

:::

:::info Kompatibilita

Rules with `$all` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$badfilter`** {#badfilter-modifier}

The rules with the `$badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `$badfilter` rule (without the `$badfilter` modifier).

**Příklady**

- `||example.com$badfilter` zakáže `||example.com`
- `||example.com$image,badfilter` zakáže `||example.com$image`
- `@@||example.com$badfilter` zakáže `@@||example.com`
- `||example.com$domain=domain.com,badfilter` zakáže `||example.com$domain=domain.com`

Rules with `$badfilter` modifier can disable other basic rules for specific domains if they fulfill the following conditions:

1. Pravidlo má modifikátor `$domain`
1. Pravidlo nemá hodnotu modifikátoru negované domény `~` v `$domain`

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note that [wildcard-TLD logic](#wildcard-for-tld) works here as well.

**Příklady**

- `/some$domain=example.com|example.org|example.io` je zakázána pro `example.com` pomocí `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` ije zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` a `/some$domain=example.io` jsou kompletně zakázány pomocí `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` je kompletně zakázána pomocí `/some$domain=example.*,badfilter`
- `/some$domain=example.*` je zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` NENÍ zakázána pro `example.com` pomocí `/some$domain=example.com|~example.org,badfilter`, protože hodnota modifikátoru `$domain` obsahuje negovanou doménu

##### `$badfilter` modifier limitations {#badfilter-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] a rule with the `$badfilter` modifier is applied in DNR only if it fully cancels the source rule. We cannot calculate it if it is only partially canceled. [Examples](https://github.com/AdguardTeam/tsurlfilter/tree/epic/tswebextension/packages/tsurlfilter/src/rules/declarative-converter#badfilter)

:::

:::info Kompatibilita

Rules with `$badfilter` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$cookie`** {#cookie-modifier}

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes AdGuard suppress or modify the `Cookie` and `Set-Cookie` headers.

**Multiple rules matching a single request**

In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

**Syntax**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

kde:

- **`name`** — nepovinné, řetězec nebo regulární výraz pro přiřazení názvu cookie.
- **`seconds`** — počet sekund aktuálního času pro posunutí data vypršení platnosti souboru cookie.
- **`strategy`** — string for [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) strategy to be applied to the cookie.

For example,

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:

- Nastaví datum vypršení platnosti na aktuální čas plus `3600` sekund
- Přiměje cookie použít "laxní" strategii [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Escaping special characters**

If regular expression `name` is used for matching, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` to escape each of them. For example, escaped comma looks like this: `\,`.

**Příklady**

- `||example.org^$cookie` blokuje **všechny** soubory cookie nastavené doménou `example.org`; to je ekvivalent nastavení `maxAge=0`
- `$cookie=__cfduid` blokuje všude soubory cookie CloudFlare
- `$cookie=/__utm[a-z]/` blokuje všude soubory cookie Google Analytics
- `||facebook.com^$third-party,cookie=c_user` brání Facebooku ve sledování, i když jste přihlášeni

There are two methods to deactivate `$cookie` rules: the primary method involves using an exception marked with `@@` — `@@||example.org^$cookie`. The alternative method employs a `$urlblock` exception (also included under the `$document` exception alias — `$elemhide,jsinject,content,urlblock,extension`). Here's how it works:

- `@@||example.org^$cookie` odblokuje všechny soubory cookie nastavené doménou `example.org`
- `@@||example.org^$urlblock` odblokuje všechny cookies nastavené doménou `example.org` a zakáže blokování všech požadavků odeslaných z `example.org`
- `@@||example.org^$cookie=concept` odblokuje jeden soubor cookie s názvem `concept`
- `@@||example.org^$cookie=/^_ga_/` odblokuje každý soubor cookie, který odpovídá regulárnímu výrazu

##### `$cookie` modifier limitations {#cookie-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] we delete cookies in 2 ways: from `content-script` side (to which we have access) and from `onBeforeSendHeaders` listener. Since `onBeforeSendHeaders` and other listeners are no longer blocking, we are not able to delete them in all cases. You can check if a rule works with [this test](https://testcases.agrd.dev/Filters/cookie-rules/test-cookie-rules).

:::

:::caution Omezení

`$cookie` rules support these types of modifiers: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`, `strict-third-party`, and `strict-first-party`.

:::

:::info Kompatibilita

Rules with `$cookie` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$csp`** {#csp-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

:::

For the requests matching a `$csp` rule, we will strengthen response security policy by enhancing the content security policy, similar to the content security policy of the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Multiple rules matching a single request**

In case if multiple `$csp` rules match a single request, we will apply each of them.

**Syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section below.

**Příklady**

- `||example.org^$csp=frame-src 'none'` blokuje všechny obrázky na example.org a jejích subdoménách.
- `@@||example.org/page/*$csp=frame-src 'none'` zakáže všechna pravidla s modifikátorem `$csp` přesně odpovídajícím příznakem `frame-src 'none'` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo.
- `@@||example.org/page/*$csp` zakáže všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` zakáže vložené skripty na všech stránkách odpovídajících vzoru pravidla.
- `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.

:::caution Omezení

- V hodnotě `$csp` je zakázáno několik znaků: `,`, `$`.
- `$csp` rules support three types of modifiers: `$domain`, `$important`, `$subdocument`.
- Pravidla s direktivami `report-*` jsou považována za neplatná.

:::

:::info Kompatibilita

Rules with `$csp` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS and AdGuard for Safari.

:::

#### **`$hls`** {#hls-modifier}

`$hls` rules modify the response of a matching request. They are intended as a convenient way to remove segments from [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

The word "segment" in this document means either a "Media Segment" or a "playlist" as part of a "Master Playlist": `$hls` rules do not distinguish between a "Master Playlist" and a "Media Playlist".

:::

**Syntax**

- `||example.org^$hls=urlpattern` odstraní segmenty, jejichž adresa URL odpovídá vzoru adresy URL `urlpattern`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\` uvnitř `urlpattern`.
- `||example.org^$hls=/regexp/options` odstraní segmenty, kde URL nebo jeden ze znaků (u určitých možností, pokud jsou přítomny) odpovídá regulárnímu výrazu `regexp`. K dispozici jsou tyto možnosti `options`:
    - `t` — namísto testování adresy URL segmentu otestujte každý znak segmentu podle regulárního výrazu. Segment se shodným znakem je odstraněn;
    - `i` — regulární výraz nerozlišuje velká a malá písmena.

The characters `/`, `$` and `,` must be escaped with `\` inside `regexp`.

**Výjimky**

Basic URL exceptions shall not disable rules with `$hls` modifier. They can be disabled as described below:

- `@@||example.org^$hls` zakáže všechna pravidla `$hls` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$hls=text` zakáže všechna pravidla `$hls` s hodnotou modifikátoru `$hls` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

:::tip

`$hls` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::

:::note

When multiple `$hls` rules match the same request, their effect is cumulative.

:::

**Příklady**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` odstraní všechny segmenty se shodnou URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` dosáhne víceméně téhož pomocí regulárního výrazu namísto vzoru URL.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` odstraní všechny segmenty, které mají odpovídající znak.

**Anatomy of an HLS playlist**

A quick summary of the [specification](https://datatracker.ietf.org/doc/html/rfc8216):

1. Seznam stop HLS je kolekce textových řádků
1. Řádek může být prázdný, komentář (začíná `#`), znak (také začíná `#`, lze jej rozpoznat pouze podle názvu) nebo URL
1. Řádek URL se nazývá "segment"
1. Znaky se mohou vztahovat na jeden segment, tj. první řádek adresy URL za znakem, na všechny segmenty následující za znakem až do znaku se stejným názvem nebo na celý seznam skladeb

Some points specific to the operation of `$hls` rules:

1. Při odstranění segmentu se odstraní také všechny znaky, které se vztahují pouze k tomuto segmentu
1. Pokud se znak vztahuje na více segmentů a všechny tyto segmenty jsou odstraněny, je odstraněna i znak
1. Protože neexistuje způsob, jak rozpoznat různé druhy znaků podle syntaxe, rozpoznáváme všechny znaky uvedené v RFC a některé nestandardní znaky, se kterými jsme se setkali v praxi. Všechny řádky začínající na `#`. Ty, které nejsou rozpoznány jako znak, jsou předány bez úprav a nejsou porovnávány s pravidly
1. Tags will not be matched if they apply to the entire playlist, and `$hls` rules cannot be used to remove them, as these rule types are intended for segment removals. Pokud víte, co děláte, můžete pomocí pravidel `$replace` odstranit nebo přepsat pouze jeden znak ze seznamu skladeb

**An example of a transformation done by the rules:**

<details>
<summary>Original response</summary>

```text
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
<summary>Applied rules</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Modified response</summary>

```text
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

:::caution Omezení

- Rules with the `$hls` modifier can only be used [**in trusted filters**](#trusted-filters).
- `$hls` rules are compatible with the modifiers `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest` only.
- `$hls` pravidla platí pouze pro seznamy stop HLS, což je text kódovaný v UTF-8 začínající řádkem `#EXTM3U`. Jakákoli jiná odpověď nebude těmito pravidly upravena.
- Pravidla `$hls` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$hls` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later.

:::

#### **`$inline-script`** {#inline-script-modifier}

The `$inline-script` modifier is designed to block inline JavaScript embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline ads or potentially malicious scripts. The rule `||example.org^$inline-script` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

The `$inline-font` modifier is designed to block inline fonts embedded into the web page, using Content Security Policy (CSP). It improves security and privacy by preventing application of inline fonts that could be used for data collection and fingerprinting. The rule `||example.org^$inline-font` is converting into the CSP-syntax rule:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

`$jsonprune` rules modify the response to a matching request by removing JSON items that match a modified [JSONPath](https://goessner.net/articles/JsonPath/) expression. They do not modify responses which are not valid JSON documents.

In AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Syntax**

- `||example.org^$jsonprune=expression` odstraní z odpovědi položky, které odpovídají upravenému výrazu JSONPath `expression`.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

The modified JSONPath syntax has the following differences from the original:

1. Výrazy skriptů nejsou podporovány
1. Podporované výrazy filtrů jsou:
    - `?(has <key>)` — "true", pokud má aktuální objekt zadaný klíč
    - `?(key-eq <key> <value>)` — "true", pokud má aktuální objekt zadaný klíč a jeho hodnota se rovná zadané hodnotě
    - `?(key-substr <key> <value>)` — "true", pokud je zadaná hodnota podřetězcem hodnoty zadaného klíče aktuálního objektu
1. Mezery mimo řetězce s dvojitými nebo jednoduchými uvozovkami nemají žádný význam
1. Lze použít řetězce s dvojitými i jednoduchými uvozovkami
1. Výrazy končící na `..` nejsou podporovány
1. V hranatých závorkách lze zadat vícero dílků pole

There are various online tools that make working with JSONPath expressions more convenient:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Keep in mind, though, that all JSONPath implementations have unique features/quirks and are subtly incompatible with each other.

**Výjimky**

Basic URL exceptions shall not disable rules with the `$jsonprune` modifier. They can be disabled as described below:

- `@@||example.org^$jsonprune` zakáže všechna pravidla `$jsonprune` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$jsonprune=text` zakáže všechna pravidla `$jsonprune` s hodnotou modifikátoru `$jsonprune` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

`$jsonprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$jsonprune` rules match the same request, they are sorted in lexicographical order, the first rule is applied to the original response, and each of the remaining rules is applied to the result of applying the previous one.

:::

**Příklady**

- `||example.org^$jsonprune=\$..[one\, "two three"]` odstraní všechny výskyty klíčů "one" a "two three" kdekoli v dokumentu JSON.

<details>
<summary>Input</summary>

```json
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
<summary>Output</summary>

```json
{
    "two": {
        "four five": 45
    }
}
```

</details>

- `||example.org^$jsonprune=\$.a[?(has ad_origin)]` odstraní všechny potomky `a`, které mají klíč `ad_origin`.

<details>
<summary>Input</summary>

```json
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
<summary>Output</summary>

```json
{
    "a": [
        {
            "b": 1234
        }
    ]
}
```

</details>

- `||example.org^$jsonprune=\$.*.*[?(key-eq 'Some key' 'Some value')]` odstraní všechny položky, které jsou na úrovni vnoření 3 a mají vlastnost "Some key" rovnu "Some value".

<details>
<summary>Input</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>Output</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Nested JSONPath expressions**

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.11 or later, JSONPath expressions may be used as keys in filter expressions.

- `||example.org^$jsonprune=\$.elems[?(má "\$.abc")]` odstraní všechny potomky `elems`, které mají vlastnost volitelnou výrazem JSONPath `$.abc`.

<details>
<summary>Input</summary>

```json
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
<summary>Output</summary>

```json
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

- `||example.org^$jsonprune=\$.elems[?(key-eq "\$.a.b.c" "abc")]` odstraní všechny potomky `elems`, které mají vlastnost volitelnou pomocí výrazu JSONPath `$.a.b.c` s hodnotou rovnou `"abc"`.

<details>
<summary>Input</summary>

```json
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
<summary>Output</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
        }
    ]
}
```

</details>

:::caution Omezení

- `$jsonprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- Pravidla `$jsonprune` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

`$xmlprune` rules modify the response to a matching request by removing XML items that match an [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/) expression. The expression must return a [node-set](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). `$xmlprune` rules do not modify responses which are not well-formed XML documents.

**Syntax**

- `||example.org^$xmlprune=expression` odstraní z odpovědi položky, které odpovídají výrazu XPath `expression`.

Due to the way rule parsing works, the characters `$` and `,` must be escaped with `\` inside `expression`.

**Výjimky**

Basic URL exceptions shall not disable rules with the `$xmlprune` modifier. They can be disabled as described below:

- `@@||example.org^$xmlprune` zakáže všechna pravidla `$xmlprune` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$xmlprune=text` zakáže všechna pravidla `$xmlprune` s hodnotou modifikátoru `$xmlprune` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

`$xmlprune` rules can also be disabled by `$document`, `$content` and `$urlblock` exception rules.

:::note

When multiple `$xmlprune` rules match the same request, they are applied in lexicographical order.

:::

**Příklady**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` odstraní z knihkupectví knihy s lichými čísly.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>



<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>



<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>
```

</details>

- `||example.org^$xmlprune=/bookstore/book[year = 2003]` odstraní knihy z roku 2003 z knihkupectví.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>

  <book category="web">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
  </book>

  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>





</bookstore>
```

</details>

- `||example.org^$xmlprune=//*/@*` odstraní všechny atributy ze všech prvků.

<details>
<summary>Input</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore location="cy">

  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

<details>
<summary>Output</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

  <book>
    <title>Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>

</bookstore>
```

</details>

:::caution Omezení

- `$xmlprune` rules are only compatible with these modifiers: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and `$xmlhttprequest`.
- Pravidla `$xmlprune` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

This is basically a Firewall-like rule allowing to fully block or unblock access to a specified remote address.

1. Pravidla `$network` odpovídají **pouze IP adresám**! Nelze je použít k zablokování nebo odblokování přístupu k doméně.
2. Chcete-li se shodovat s adresou IPv6, musíte použít sbalenou syntaxi, např. `[2001:4860:4860::8888]$network` namísto `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Pravidlo seznamu povolených `$network` způsobí, že AdGuard bude obcházet data odpovídajícího koncového bodu, proto nebude provádět žádné další filtrování.
4. Pokud část IP začíná a končí znakem `/`, je považována za regulární výraz.

We recommend to get acquainted with this [article](#regexp-support) for better understanding of regular expressions.

:::caution Omezení

The `$network` modifier can only be used in rules together with the `$app` and `$important` modifiers, and not with any other modifiers.

:::

**Příklady**

- `174.129.166.49:3478^$network` blokuje přístup k `174.129.166.49:3478` (ale ne k `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` blokuje přístup k `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` blokuje přístup k `174.129.166.49:*`.
- `@@174.129.166.49$network` způsobí, že AdGuard bude koncovému bodu předávat data. Žádná jiná pravidla se neuplatňují.
- `/.+:3[0-9]{4}/$network` blokuje přístup k libovolnému portu od 30000 do 39999.
- `/8.8.8.(:?8|4)/$network` blokuje přístup k `8.8.8.8` a `8.8.8.4`.

:::info Kompatibilita

Only AdGuard for Windows, Mac, and Android are technically capable of using rules with `$network` modifier.

:::

#### **`$permissions`** {#permissions-modifier}

This modifier completely changes the rule behavior. If it is applied to a rule, the rule will not block the matching request. Response headers will be modified instead.

:::info

In order to use this type of rules, it is required to have a basic understanding of the [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) security layer.

:::

For the requests matching a `$permissions` rule, AdGuard strengthens response's permissions policy by adding an additional permission policy equal to the `$permissions` modifier contents. `$permissions` rules are applied independently from any other rule type. **Only document-level exceptions** can influence it (see the examples section), but no other basic rules.

**Syntax**

`$permissions` value syntax is identical to that of the `Permissions-Policy` header [syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) with the following exceptions:

1. A comma that separates multiple features **MUST** be escaped — see examples below.
2. A pipe character (`|`) can be used instead of a comma to separate features.

The list of available directives is available [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

`$permissions` value can be empty in the case of exception rules — see examples below.

**Příklady**

- `||example.org^$permissions=autoplay=()` zakáže automatické přehrávání médií vyžádaných prostřednictvím rozhraní `HTMLMediaElement` v rámci `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` zakáže všechna pravidla s modifikátorem `$permissions` přesně odpovídajícím příznakem `autoplay=()` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo. It is important to note that the exception rule only takes effect in the case of an **exact value match**. For example, if you want to disable the rule  `$permissions=a=()\,b=()`, you need exception rule `@@$permissions=a=()\,b=()`, and **not** `@@$permissions=b=()\,a=()`, **nor** `@@$permissions=b=()` because `b=()\,a=()` or `b=()` does not match with `a=()\,b=()`.
- `@@||example.org/page/*$permissions` zakáže všechna pravidla `$permissions` na všech stránkách odpovídajících vzoru pravidla.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` zakáže použití API pro přístup k úložišti pro vyžádání přístupu k nerozděleným souborům cookies a používání vstupních zařízení videa napříč `example.org` a `example.com`.
- `$domain=example.org|example.com,permissions=storage-access=()|camera=()` does the same — a `|` can be used to separate the features instead of an escaped comma.
- `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$permission` na všech stránkách odpovídajících vzoru pravidla.

:::note

`$permissions` rules only take effect for main frame and sub frame requests. This means they are applied when a page is loaded or when an iframe is loaded.

:::

:::note

If there are multiple `$permissions` rules that match the same request, multiple `Permissions-Policy` headers will be added to the response for each rule with their `$permissions` value. So if you have two rules: `||example.org^$permissions=autoplay=()` and `||example.org^$permissions=geolocation=()\,camera=()` that match the same request, the response will contain two `Permissions-Policy` headers: `autoplay=()` and `geolocation=()\,camera=()`.

:::

##### `$permissions` modifier limitations {#permissions-modifier-limitations}

:::caution Omezení

Firefox ignores the `Permissions-Policy` header. For more information, see [this issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1694922).

:::

:::caution Omezení

1. Characters forbidden in the `$permissions` value: `$`.
2. `$permissions` is compatible with a limited set of modifiers: `$domain`, `$important`, `$subdocument`, and [content-type modifiers](#content-type-modifiers).
3. `$permissions` rules that do not have any [content-type modifiers](#content-type-modifiers) will match only requests where content type is `document`.

:::

:::info Kompatibilita

- Rules with the `$permissions` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.
- Pipe separator `|` instead of escaped comma is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.14 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard is able to redirect web requests to a local "resource".

**Syntax**

AdGuard uses the same filtering rule syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

##### Zakázání pravidel `$redirect`

- `||example.org/script.js$script,redirect=noopjs` — toto pravidlo přesměruje všechny požadavky na `example.org/script.js` na zdroj s názvem `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — toto pravidlo přesměruje všechny požadavky na `example.org/test.mp4` na zdroj s názvem `noopmp4-1s`.
- `@@||example.org^$redirect` zakáže všechna pravidla `$redirect` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$redirect=nooptext` zakáže všechna pravidla s `$redirect=nooptext` pro všechny požadavky, které odpovídají `||example.org^`.

More information on redirects and their usage is available [on GitHub](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Priority pravidel `$redirect` {#redirect-rule-priorities}

`$redirect` rules have higher priority than regular basic blocking rules. This means that if there is a basic blocking rule, the `$redirect` rule will override it. Allowlist rules with `@@` mark have higher priority than `$redirect` rules. If a basic rule with the `$important` modifier and the `$redirect` rule matches the same URL, the latter is overridden unless it's also marked as `$important`.

<!-- Please do not replace `>` by `→` -->

**In short: `$important` > `@@` > `$redirect` > `basic rules`.**

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

##### `$redirect` modifier limitations {#redirect-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] allowlist rules with `$redirect` are not supported.

:::

:::info Kompatibilita

- Rules with `$redirect` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], and [AdGuard for Safari][ext-saf] .
- `$redirect` v uBlock Origin podporuje zadané priority, např. `$redirect=noopjs:42`. AdGuard to nepodporuje a místo toho pouze zahodí prioritní postfix.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

This is basically an alias to [`$redirect`](#redirect-modifier) since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

**Příklady**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected" to `noopjs`. All other requests to `example.org` will be kept intact.

:::info Kompatibilita

Rules with `$redirect-rule` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], [AdGuard for Safari][ext-saf], and [AdGuard for Chrome MV3][ext-mv3]. [The discussion about adding support for `$redirect-rule` rules in Chrome MV3 extensions](https://github.com/w3c/webextensions/issues/493) is currently open.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

These rules allow overriding of a page's [referrer policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). Responses to matching requests will have all of their `Referrer-Policy` headers replaced with a single header with the value equal to the matching rule's modifier value. If the response carries an HTML document with a `<meta name="referrer"...` tag, the `content` attribute of the tag will also be replaced with the modifier value.

An exception rule with a modifier value disables the blocking rule with the same modifier value. An exception rule without a modifier value disables all matched referrer-policy rules.

If a request matches multiple `$referrerpolicy` rules not disabled by exceptions, only one of them (it is not specified which one) is applied. `$referrerpolicy` rules without specified [content-type modifiers](#content-type-modifiers) apply to `$document` and `$subdocument` content types.

**Příklady**

- `||example.com^$referrerpolicy=unsafe-url` přepíše zásady odkazování pro `example.com` pomocí `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` zakáže předchozí pravidlo.
- `@@||example.com/abcd.html^$referrerpolicy` zakáže všechna pravidla `$referrerpolicy` na `example.com/abcd.html`.

:::info Kompatibilita

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.12 or later.

:::

#### **`$removeheader`** {#removeheader-modifier}

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

**Syntax**

**Basic syntax**

- `||example.org^$removeheader=header-name` odstraní **odpověď** záhlaví s názvem `header-name`
- `||example.org^$removeheader=request:header-name` odstraní **požadavek** záhlaví s názvem `header-name`

`$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

- `@@||example.org^$removeheader` neguje **všechna** pravidla `$removeheader` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$removeheader=header` neguje všechna pravidla s `$removeheader=header` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

`$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers will not do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

:::note

In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

:::

**Příklady**

- `||example.org^$removeheader=refresh` odstraní záhlaví `Refresh` ze všech HTTP odpovědí vrácených doménou `example.org` a jejími subdoménami.
- `||example.org^$removeheader=request:x-client-data` odstraní záhlaví `X-Client-Data` ze všech požadavků HTTP.
- Další blok pravidel odstraní záhlaví `Refresh` a `Location` ze všech odpovědí HTTP vrácených doménou `example.org` s výjimkou požadavků na `example.org/path/*`, u kterých nebudou odstraněny žádné záhlaví:

    ```adblock
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

:::caution Omezení

This type of rules can only be used [**in trusted filters**](#trusted-filters).

1. Aby nedošlo k narušení bezpečnosti, nelze z níže uvedeného seznamu odstranit záhlaví `$removeheader`:
    - `access-control-allow-origin`
    - `access-control-allow-credentials`
    - `access-control-allow-headers`
    - `access-control-allow-methods`
    - `access-control-expose-headers`
    - `access-control-max-age`
    - `access-control-request-headers`
    - `access-control-request-method`
    - `origin`
    - `timing-allow-origin`
    - `allow`
    - `cross-origin-embedder-policy`
    - `cross-origin-opener-policy`
    - `cross-origin-resource-policy`
    - `content-security-policy`
    - `content-security-policy-report-only`
    - `expect-ct`
    - `feature-policy`
    - `origin-isolation`
    - `strict-transport-security`
    - `upgrade-insecure-requests`
    - `x-content-type-options`
    - `x-download-options`
    - `x-frame-options`
    - `x-permitted-cross-domain-policies`
    - `x-powered-by`
    - `x-xss-protection`
    - `public-key-pins`
    - `public-key-pins-report-only`
    - `sec-websocket-key`
    - `sec-websocket-extensions`
    - `sec-websocket-accept`
    - `sec-websocket-protocol`
    - `sec-websocket-version`
    - `p3p`
    - `sec-fetch-mode`
    - `sec-fetch-dest`
    - `sec-fetch-site`
    - `sec-fetch-user`
    - `referrer-policy`
    - `content-type`
    - `content-length`
    - `accept`
    - `accept-encoding`
    - `host`
    - `connection`
    - `transfer-encoding`
    - `upgrade`

1. `$removeheader` rules are only compatible with `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case`, and [content type modifiers](#content-type-modifiers) such as `$script` and `$stylesheet`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

:::

:::info Kompatibilita

Rules with `$removeheader` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Chrome, Firefox, and Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` is an alias of `$removeparam`. Since `$queryprune` is deprecated, avoid using it and use `$removeparam` instead.

:::

Rules with `$removeparam` modifier are intended to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, `OPTIONS`, and sometimes `POST` requests.

**Syntax**

**Basic syntax**

- `$removeparam=param` odstraní parametr dotazu s názvem `param` z URL libovolného požadavku, např. požadavek na `http://example.com/page?param=1&another=2` bude transformován na `http://example.com/page?another=2`.

**Regular expressions**

You can also use regular expressions to match query parameters and/or their values:

- `$removeparam=/regexp/[options]` — odstraní parametry dotazu, které odpovídají regulárnímu výrazu `regexp` z adres URL jakéhokoli požadavku. Na rozdíl od základní syntaxe to znamená *"odebrat parametry dotazu normalizované na řetězec `name=value`, který odpovídá regulárnímu výrazu `regexp` "*. `[options]` zde je seznam možností regulárních výrazů. V současné době je jedinou podporovanou možností `i`, díky čemuž se nerozlišují malá a velká písmena.

**Escaping special characters**

Do not forget to escape special characters like `,`, `/` and `$` in the regular expressions. Use `\` character for that purpose. For example, an escaped comma should look like this: `\,`.

:::note

Regexp-type rules target both name and value of the parameter. To minimize mistakes, it is safer to start every regexp with `/^` unless you specifically target parameter values.

:::

We will try to detect and ignore unescaped `$` automatically using a simple rule of thumb — it is not an options delimiter if all three are true:

1. Vypadá to jako `$/`
1. Nalevo od něj je další znak lomítka `/`
1. Nalevo od tohoto znaku lomítka je další znak dolaru bez uvození `$`

**Remove all query parameters**

Specify naked `$removeparam` to remove all query parameters:

- `||example.org^$removeparam` — odstraní všechny parametry dotazu z adres URL odpovídajících `||example.org^`.

**Inversion**

Use `~` to apply inversion:

- `$removeparam=~param` — odstraní všechny parametry dotazu s názvem odlišným od `param`.
- `$removeparam=~/regexp/` — odstraní všechny parametry dotazu, které neodpovídají regulárnímu výrazu `regexp`.

**Negating `$removeparam`**

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

- `@@||example.org^$removeparam` neguje všechna pravidla `$removeparam` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$removeparam=param` neguje všechna pravidla s `$removeparam=param` pro jakýkoliv požadavek, který odpovídá `||example.org^`.
- `@@||example.org^$removeparam=/regexp/` neguje všechna pravidla s `$removeparam=/regexp/` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

**Multiple rules matching a single request**

In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

**Příklady**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` will not be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will not be affected by the blocking rule.

- `$removeparam=utm_source` odstraní parametr dotazu `utm_source` ze všech požadavků.

- `$removeparam=/utm_.*/` odstraní všechny parametry `utm_* query` z URL libovolného požadavku, např. požadavek na `http://example.com/page?utm_source=test` bude transformován na `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` odstraní parametr dotazu `utm_source` s hodnotou rovnou `campaign`. Nemá vliv na ostatní parametry `utm_source`.

**Negating one `$removeparam` rule and replacing it with a different rule**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There is one exception: Google Click ID (gclid) will not be removed from requests to example.com.

**Negating `$removeparam` for all parameters**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to `example.org`.

`$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

##### `$removeparam` modifier limitations {#removeparam-modifier-limitations}

:::caution Omezení

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Regular expressions, negation and allowlist rules are not supported.
- Group of similar `$removeparam` rules will be combined into one. Příklad:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeparam=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=p2case1
    ||testcases.adguard.com$xmlhttprequest,removeparam=P3Case1
    $xmlhttprequest,removeparam=p1case2
    ```

    je převedeno na

    ```bash
    [
    {
      "id": 1,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case1",
          "p2case1",
          "P3Case1"
          ]
        }
        }
      }
      },
      "condition": {
      "urlFilter": "||testcases.adguard.com",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    },
    {
      "id": 4,
      "action": {
      "type": "redirect",
      "redirect": {
        "transform": {
        "queryTransform": {
          "removeParams": [
          "p1case2"
          ]
        }
        }
      }
      },
      "condition": {
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "isUrlFilterCaseSensitive": false
      }
    }
    ]
    ```

:::

:::caution Omezení

1. Rules with the `$removeparam` modifier can only be used [**in trusted filters**](#trusted-filters).
1. `$removeparam` rules are compatible with [basic modifiers](#basic-rules-basic-modifiers), [content-type modifiers](#content-type-modifiers), and with the `$important` and `$app` modifiers. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.
1. `$removeparam` rules without [content type modifiers](#content-type-modifiers) will only match requests where the content type is `document`.

:::

:::info Kompatibilita

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

You will need some knowledge of regular expressions to use `$replace` modifier.

**Features**

- `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc.).
- `$replace` rules do not apply if the size of the original response is more than 10 MB.
- `$replace` rules have a higher priority than other basic rules (**including** exception rules). So if a request natches two different rules, one of which has the `$replace` modifier, this rule will be applied.
- Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
- Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page content with a `$replace` rule and disable cosmetic rules there at the same time.

`$replace` value can be empty in the case of exception rules. See examples section for further information.

**Multiple rules matching a single request**

In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

In general, `$replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$replace` value, two characters must be escaped: comma `,` and dollar sign `$`. Use backslash `\` for it. For example, an escaped comma looks like this: `\,`.

**Příklady**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

There are three parts in this rule:

- `regexp` — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `replacement` — `\$1<\/VAST>` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

You can see how this rule works here: http://regexr.com/3cesk

**Multiple `$replace` rules**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Disabling `$replace` rules**

- `@@||example.org^$replace` will disable all `$replace` rules matching `||example.org^`.
- `@@||example.org^$document` or `@@||example.org^$content` will disable all `$replace` rules **originated from** pages of `example.org` **including the page itself**.

:::caution Omezení

Rules with the `$replace` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Kompatibilita

Rules with `$replace` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on the network level.

:::

#### **`$urltransform`** {#urltransform-modifier}

The `$urltransform` rules allow you to modify the request URL by replacing text matched by a regular expression.

**Features**

- `$urltransform` rules normally only apply to the path and query parts of the URL, see below for one exception.
- `$urltransform` will not be applied if the original URL is blocked by other rules.
- `$urltransform` will be applied before `$removeparam` rules.

The `$urltransform` value can be empty for exception rules.

**Multiple rules matching a single request**

If multiple `$urltransform` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

**Syntax**

`$urltransform` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — a regular expression.
- **`replacement`** — a string that will be used to replace the string corresponding to `regexp`.
- **`modifiers`** — a regular expression flags. For example, `i` — insensitive search, or `s` — single-line mode.

In the `$urltransform` value, two characters must be escaped: the comma `,` and the dollar sign `$`. Use the backslash character `\` for this. For example, an escaped comma looks like this: `\,`.

**Changing the origin**

:::info Kompatibilita

This section only applies to AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.17 or later.

:::

As stated above, normally `$urltransform` rules are only allowed to change the path and query parts of the URL. However, if the rule's `regexp` begins with the string `^http`, then the full URL is searched and can be modified by the rule. Such a rule will not be applied if the URL transformation can not be achieved via an HTTP redirect (for example, if the request's method is `POST`).

**Příklady**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

There are three parts in this rule:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2` where `$` is escaped;
- `modifiers` — `i` for insensitive search.

**Multiple `$urltransform` rules**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Both rule 1 and 2 will be applied to all requests sent to `example.org`.
- Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**

**Re-matching rules after transforming the URL**

After applying all matching `$urltransform` rules, the transformed request will be matched against all other rules:

E.g., with the following rules:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

the request to `https://example.com/firstpath` will be blocked.

**Disabling `$urltransform` rules**

- `@@||example.org^$urltransform` will disable all `$urltransform` rules matching `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` will disable the rule with `$urltransform=/Z/Y/` for any request matching `||example.org^`.

`$urltransform` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers do not do that. For example, `@@||example.com^` will not disable `$urltransform=/X/Y/` for requests to **example.com**, but `@@||example.com^$urlblock` will.

:::caution Omezení

Rules with the `$urltransform` modifier can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Kompatibilita

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.15 or later.

:::

#### **`noop`** {#noop-modifier}

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of arbitrary length and can appear in a rule as often as needed.

**Příklady**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Kompatibilita

Rules with `noop` modifier are not supported by AdGuard Content Blocker.

:::

#### **`$empty` (zastaralé)** {#empty-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$empty` are still supported and being converted into `$redirect=nooptext` now but the support shall be removed in the future.

:::

Usually, blocked requests look like a server error to browser. If you use `$empty` modifier, AdGuard will emulate a blank response from the server with`200 OK` status.

**Příklady**

- `||example.org^$empty` returns an empty response to all requests to `example.org` and all subdomains.

:::info Kompatibilita

Rules with `$empty` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

#### **`$mp4` (zastaralé)** {#mp4-modifier}

:::caution Deprecation notice

This modifier is deprecated in favor of the [`$redirect` modifier](#redirect-modifier). Rules with `$mp4` are still supported and being converted into `$redirect=noopmp4-1s,media` now but the support shall be removed in the future.

:::

As a response to blocked request AdGuard returns a short video placeholder.

**Příklady**

- `||example.com/videos/$mp4` blocks all video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

:::info Kompatibilita

Rules with `$mp4` modifier are not supported by AdGuard Content Blocker, AdGuard for iOS, and AdGuard for Safari.

:::

### Priority pravidel {#rule-priorities}

Each rule has its own priority, which is necessary when several rules match the request and the filtering engine needs to select one of them. Priority is measured by a positive integer.

:::note Collisions

When two rules with the same priority match the same request, the filter engine implementation determines which one is chosen.

:::

:::info

The concept of rule priorities becomes increasingly important in light of Manifest V3, as the existing rules need to be converted to declarativeNetRequest rules.

:::

#### Výpočet priority

To calculate priority, we've categorized modifiers into different groups. These groups are ranked based on their priority, from lowest to highest. A modifier that significantly narrows the scope of a rule adds more weight to its total priority. Conversely, if a rule applies to a broader range of requests, its priority decreases.

It's worth noting that there are cases where a single-parameter modifier has a higher priority than multi-parameter ones. For instance, in the case of `$domain=example.com|example.org`, a rule that includes two domains has a slightly broader effective area than a rule with one specified domain, therefore its priority is lower.

The base priority of any rule is 1. If the calculated priority is a floating-point number, it will be **rounded up** to the smallest integer greater than or equal to the calculated priority.

:::info Kompatibilita

- The concept of priority has been introduced in [TSUrlFilter][] v2.1.0 and [CoreLibs][] v1.13. Before that AdGuard didn't have any special priority computation algorithm and collisions handling could be different depending on AdGuard product and version.
- AdGuard for iOS, Safari, and AdGuard Content Blocker rely on the browsers implementation and they cannot follow the rules specified here.

:::

:::note

Modifier aliases (`1p`, `3p`, etc.) are not included in these categories, however, they are utilized within the engine to compute the rule priority.

:::

#### Základní modifikátory, přítomnost každého z nich přidává 1 k prioritě {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) with negated applications using `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$domain`](#domain-modifier) with negated domains using `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) with negated methods using `~`,
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- restricted [content-types](#content-type-modifiers) with `~`.

When dealing with a negated domain, app, method, or content-type, we add **1 point** for the existence of the modifier itself, regardless of the quantity of negated domains or content-types. This is because the rule's scope is already infinitely broad. Put simply, by prohibiting multiple domains, content-types, methods or apps, the scope of the rule becomes only minimally smaller.

#### Definované modifikátory typu obsahu, definované metody, definovaná záhlaví, $all, $popup, specifické výjimky {#priority-category-2}

All valid content types:

<!-- Please keep them sorted -->

- [`$document`](#document-modifier),
- [`$font`](#font-modifier),
- [`$image`](#image-modifier),
- [`$media`](#media-modifier),
- [`$object`](#object-modifier),
- [`$other`](#other-modifier),
- [`$ping`](#ping-modifier),
- [`$script`](#script-modifier),
- [`$stylesheet`](#stylesheet-modifier),
- [`$subdocument`](#subdocument-modifier),
- [`$websocket`](#websocket-modifier),
- [`$xmlhttprequest`](#xmlhttprequest-modifier);

This also includes rules that implicitly add all content types:

- [`$all`](#all-modifier);

Or rules that implicitly add the modifier `$document`:

- [`$popup`](#popup-modifier);

Or some specific exceptions that implicitly add `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Or allowed methods via [`$method`](#method-modifier).

Or rules with [`$header`](#header-modifier).

The presence of any content-type modifiers adds `(50 + 50 / N)`, where `N` is the number of modifiers present, for example: `||example.com^$image,script` will add `50 + 50 / 2 = 50 + 25 = 75` to the total weight of the rule.

The `$all` also belongs to this category, because it implicitly adds all content type modifiers, e.g., `$document,subdocument,image,script,media,<etc>` + `$popup`.

The `$popup` also belongs to this category, because it implicitly adds the modifier `$document`. Similarly, specific exceptions add `$document,subdocument`.

If there is a `$method` modifier in the rule with allowed methods it adds `(50 + 50 / N)`, where `N` is the number of methods allowed, for example: `||example.com^$method=GET|POST|PUT` will add `50 + 50 / 3 = 50 + 16.6 = 67` to the total weight of the rule.

If there is a `$header` modifier in the rule, it adds `50`.

#### `$domain` nebo `$app` s povolenými doménami nebo aplikacemi {#priority-category-3}

Specified domains through `$domain` or specified applications through `$app` add `100 + 100 / N`, where `N` is the number of modifier values for example: `||example.com^$domain=example.com|example.org|example.net` will add `100 + 100 / 3 = 134.3 = 135` or `||example.com^$app=org.example.app1|org.example.app2` will add `100 + 100 / 2 = 151` or `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` will add `100 + 100/1` ($domain part) and `100 + 100/2` ($app part), totaling `350`.

Modifier values that are regexps or tld will be interpreted as normal entries of the form `example.com` and counted one by one, for example: `||example.com^$domain=example.*` will add `100 + 100 / 1 = 200` or `||example.com^$domain=example.*|adguard.*` will add `100 + 100 / 2 = 150`.

#### Pravidla `$redirect` {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Each of which adds `10^3` to rule priority.

#### Specifické výjimky {#priority-category-4}

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Each of which adds `10^4` to the priority.

As well as exception with [`$document modifier`](#document-modifier): because it's an alias for `$elemhide,content,jsinject,urlblock,extension`. It will add `10^4` for each modifier from [the top list](#priority-category-4), `10^4 * 5` in total.

In addition, each of these exceptions implicitly adds the two allowed content-type modifiers `$document,subdocument`.

#### Pravidla seznamu povolených {#priority-category-5}

Modifier `@@` adds `10^5` to rule priority.

#### Pravidla `$important` {#priority-category-7}

Modifier [`$important`](#important-modifier) adds `10^6` to rule priority.

#### Pravidla, pro která není stanovena váha priority {#priority-category-extra}

[Other modifiers](#advanced-capabilities), which are supposed to perform additional post- or pre-processing of requests, do not add anything to the rules priority.

:::note

The [`$replace`](#replace-modifier) modifier takes precedence over all blocking rules of categories 1-3, as well as exception rules from categories 3-5, **except** [`$content`](#content-modifier), because an exception with the `$content` modifier overrides all `$replace` rules.

:::

#### Příklady

1. `||example.com^`

    Weight of the rule without modifiers: `1`.

1. `||example.com^$match-case`

    Rule weight: base weight + weight of the modifier from [category 1](#priority-category-1): `1 + 1 = 2`.

1. `||example.org^$removeparam=p`

    Rule weight: base weight + 0, since $removeparam [is not involved](#priority-category-extra) in the priority calculation: `1 + 0 = 1`.

1. `||example.org^$document,redirect=nooptext`

    Rule weight: base weight + allowed content type, [category 3](#priority-category-3) + $redirect from [category 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

1. `@@||example.org^$removeparam=p,document`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + 0 because $removeparam [is not involved](#priority-category-extra) in the priority calculation + allowed content type, [category 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

1. `@@||example.com/ad/*$domain=example.org|example.net,important`

    Rule weight: base weight + allowlist rule, [category 5](#priority-category-5) + important rule, [category 7](#priority-category-7) + allowed domains, [category 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

1. `@@||example.org^$document` without additional modifiers is an alias for `@@||example.com^$elemhide,content,jsinject,urlblock,extension`

    Rule weight: base weight + specific exceptions, [category 4](#priority-category-4) + two allowed content types (document and subdocument), [category 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Rule weight: base weight + allowed content type, [category 2](#priority-category-2) + allowed domain, [category 3](#priority-category-3) + denyallow, [category 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — alias to `||example.com^$document,subdocument,image,script,media,etc. + $popup`

    Rule weight: base weight + popup ([category 1](#priority-category-1)) + allowed content types ([category 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Ostatní pravidla {#non-basic-rules}

However, basic rules may not be enough to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

| Kategorie \ Produkty                    | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Chrome MV3][ext-mv3] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ---------------------------------------- |:----------------------------:|:-------------------------------:|:---------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [Skrytí prvků](#cosmetic-elemhide-rules) |              ✅               |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [Pravidla CSS](#cosmetic-css-rules)      |              ✅               |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Rozšířené CSS](#extended-css-selectors) |              ✅               |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [HTML filtrování](#html-filtering-rules) |              ✅               |                ❌                |                 ❌                 |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [JavaScript](#javascript-rules)          |              ✅               |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Scriptlety](#scriptlets)                |              ✅               |                ✅                |                 ✅                 |               ✅               |             ✅              |               ✅               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ❌ — nepodporováno

:::

## Kosmetická pravidla {#cosmetic-rules}

:::info

Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Pravidla pro skrytí prvků {#cosmetic-elemhide-rules}

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

Element hiding rules may operate differently [depending on the platform](#cosmetic-rules-priority).

#### Syntax

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
- **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

This rule will be also applied to all subdomains of `example.org` and `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`. For example: `~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

:::note

Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

:::

**Příklady**

- `example.com##div.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `example.com,example.org###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `~example.com##.textad` — hides an element with the class `textad` at all domains, except `example.com` and its subdomains.

**Omezení**

Safari does not support both allowed and disallowed domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

**Výjimky**

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:

```adblock
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:

```adblock
#@#.textad
```

The same can be achieved by adding this rule:

```adblock
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

### Pravidla CSS {#cosmetic-css-rules}

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With these rules you can basically add any CSS styles to the page.

**Syntax**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), that defines the elements we want to apply the style to.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`style`** — CSS style, that we want to apply to selected elements.

**Příklady**

```adblock
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

**Výjimky**

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains. Exception rule syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:

```adblock
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Omezení

Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

:::

:::info Kompatibilita

CSS rules are not supported by AdGuard Content Blocker.

CSS rules may operate differently [depending on the platform](#cosmetic-rules-priority).

:::

### Rozšířené CSS selektory {#extended-css-selectors}

- [Omezení](#extended-css-limitations)
- [Pseudo-class `:has()`](#extended-css-has)
- [Pseudo-class `:contains()`](#extended-css-contains)
- [Pseudo-třída `:matches-css()`](#extended-css-matches-css)
- [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
- [Pseudo-class `:matches-property()`](#extended-css-property)
- [Pseudo-class `:xpath()`](#extended-css-xpath)
- [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Pseudo-class `:upward()`](#extended-css-upward)
- [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
- [Pseudo-class `:is()`](#extended-css-is)
- [Pseudo-class `:not()`](#extended-css-not)
- [Pseudo-class `:if-not()` (removed)](#extended-css-if-not)

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. We have developed a separate [open-source library](https://github.com/AdguardTeam/ExtendedCss) for non-standard element selecting and applying CSS styles with extended properties.

The idea of extended capabilities is an opportunity to match DOM elements with selectors based on their own representation (style, text content, etc.) or relations with other elements. There is also an opportunity to apply styles with non-standard CSS properties.

**Application area**

Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

:::info Kompatibilita

Rules with extended CSS selectors are not supported by AdGuard Content Blocker.

:::

**Syntax**

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to force applying these rules by ExtendedCss. It is recommended to use these markers for all extended CSS cosmetic rules so that it was easier to find them.

The syntax for extended CSS rules:

- `#?#` — for element hiding, `#@?#` — for exceptions
- `#$?#` — for CSS rules, `#@$?#` — for exceptions

We **strongly recommend** using these markers any time when you use an extended CSS selector.

**Příklady**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
- `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
- `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

You can apply standard CSS selectors using the ExtendedCss library by using the rule marker `#?#`, e.g. `#?#div.banner`.

Learn more about [how to debug extended selectors](#selectors-debugging-mode).

:::note

Some pseudo-classes do not require selector before it. Still adding the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` makes an extended selector easier to read, even though it has no effect on the matching behavior. So selector `#block :has(> .inner)` works exactly like `#block *:has(> .inner)`, but the second one is more obvious.

Pseudo-class names are case-insensitive, e.g. `:HAS()` works as `:has()`. Still the lower-case names are used commonly.

:::

#### Limitace ExtendedCss {#extended-css-limitations}

1. CSS [comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) and [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are not supported.

2. Specific pseudo-class may have its own limitations: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Pseudo-třída `:has()` {#extended-css-has}

Draft CSS 4.0 specification describes the [`:has()` pseudo-class](https://www.w3.org/TR/selectors-4/#relational). Unfortunately, [it is not yet supported](https://caniuse.com/css-has) by all popular browsers.

:::note

Rules with the `:has()` pseudo-class must use the [native implementation of `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) if they use `##` marker and if it is possible, i.e. with no other extended selectors inside. To force applying of ExtendedCss rules with `:has()`, use `#?#`/`#$?#` marker explicitly.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Upozornění na odstranění

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Syntax**

```text
[target]:has(selector)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selector` — required, standard or extended CSS selector

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### `:has()` limitations {#extended-css-has-limitations}

Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- disallow `:has()` inside the pseudos accepting only compound selectors;
- disallow `:has()` after regular pseudo-elements.

Native `:has()` pseudo-class does not allow `:has()`, `:is()`, `:where()` inside `:has()` argument to avoid increasing the `:has()` invalidation complexity ([case 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). But ExtendedCss did not have such limitation earlier and filter lists already contain such rules, so we have not added this limitation to ExtendedCss and allow to use `:has()` inside `:has()` as it was possible before. To use it, just force ExtendedCss usage by setting `#?#`/`#$?#` rule marker.

Native implementation does not allow any usage of `:scope` inside the `:has()` argument ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Still, there are some such rules in filter lists: `div:has(:scope a)` which we continue to support by simply converting them to `div:has(> a)`, as it used to be done previously.

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

:::danger Old syntax

[Backward compatible syntax for `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) is supported but **not recommended**.

:::

#### Pseudo-class `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

:::note

The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntax**

```text
[target]:contains(match)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `match` — required, string or regular expression for matching element `textContent`. Regular expression flags are supported.

**Příklady**

For such DOM:

```html
<!-- HTML code -->
<div>Not selected</div>
<div id="match">Selected as IT contains "banner"</div>
<div>Not selected <div class="banner"></div></div>
```

the element `div#match` can be selected by any of these extended selectors:

```adblock
! prostý text
div:contains(banner)

! regular expression
div:contains(/as .*banner/)

! regular expression with flags
div:contains(/it .*banner/gi)
```

:::note

Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

:::

:::danger Old syntax

[Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.

:::

#### Pseudo-třída `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntax**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `pseudo-element` — optional, valid standard pseudo-element, e.g. `before`, `after`, `first-line`, etc.
- `property` — required, a name of CSS property to check the element for
- `pattern` — required, a value pattern that is using the same simple wildcard matching as in the basic URL filtering rules or a regular expression. For this type of matching, AdGuard always does matching in a case-insensitive manner. In the case of a regular expression, the pattern looks like `/regexp/`.

**Special characters escaping and unescaping**

For **non-regexp** patterns `(`,`)`,`[`,`]` must be **unescaped**, e.g. `:matches-css(background-image:url(data:*))`.

For **regexp** patterns `\` should be **escaped**, e.g. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

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

```adblock
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

:::caution Omezení

Regexp patterns **do not support** flags.

:::

:::info Kompatibilita

Obsolete pseudo-classes `:matches-css-before()` and `:matches-css-after()` are no longer recommended but still are supported for better compatibility.

:::

:::danger Old syntax

[Backward compatible syntax for `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) is supported but **not recommended**.

:::

#### Pseudo-class `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows selecting an element by its attributes, especially if they are randomized.

**Syntax**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for attribute name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for attribute value matching

**Escaping special characters**

For **regexp** patterns `"` and `\` should be **escaped**, e.g. `div:matches-attr(class=/[\\w]{5}/)`.

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

:::caution Omezení

Regexp patterns **do not support** flags.

:::

#### Pseudo-class `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows selecting an element by matching its properties.

**Syntax**

```text
[target]:matches-property("name"[="value"])
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `name` — required, simple string *or* string with wildcard *or* regular expression for element property name matching
- `value` — optional, simple string *or* string with wildcard *or* regular expression for element property value matching

**Escaping special characters**

For **regexp** patterns `"` and `\` must be escaped, e.g. `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Regexp patterns are supported in `name` for any property in chain, e.g. `prop./^unit[\\d]{4}$/.type`.

:::

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

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip For filter maintainers

To check properties of a specific element, do the following:

1. Inspect the page element or select it in `Elements` tab of browser DevTools
1. Run `console.dir($0)` in `Console` tab

:::

:::caution Omezení

Regexp patterns **do not support** flags.

:::

#### Pseudo-třída `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows selecting an element by evaluating an XPath expression.

**Syntax**

```text
[target]:xpath(expression)
```

- `target`- optional, standard or extended CSS selector
- `expression` — required, valid XPath expression

##### `:xpath()` limitations {#extended-css-xpath-limitations}

`target` can be omitted so it is optional. For any other pseudo-class that would mean "apply to *all* DOM nodes", but in case of `:xpath()` it just means "apply to the *whole* document", and such applying slows elements selecting significantly. That's why rules like `#?#:xpath(expression)` are limited to looking inside the `body` tag. For example, rule `#?#:xpath(//div[@data-st-area=\'Advert\'])` is parsed as `#?#body:xpath(//div[@data-st-area=\'Advert\'])`.

Extended selectors with defined `target` as *any* selector — `*:xpath(expression)` — can still be used but it is not recommended, so `target` should be specified instead.

Works properly only at the end of selector, except for [pseudo-class :remove()](#remove-pseudos).

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

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

**Syntax**

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

The `:nth-ancestor()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

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

```text
subject:upward(ancestor)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `ancestor` — required, specification for the ancestor of the element selected by `subject`, can be set as:
    - *number* >= 1 and < 256 for distance to the needed ancestor, same as [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *standard CSS selector* for matching closest ancestor

##### `:upward()` limitations {#extended-css-upward-limitations}

The `:upward()` pseudo-class is not supported inside the argument of the [`:not()` pseudo-class](#extended-css-not).

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

**Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**

```text
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```

- `selector` — required, standard or extended CSS selector

##### `:remove()` a `remove` limitations {#extended-css-remove-limitations}

The `:remove()` pseudo-class is limited to work properly only at the end of selector.

For applying the `:remove()` pseudo-class to any element, the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` should be used. Otherwise such extended selector may be considered as invalid, e.g. `.banner > :remove()` is not valid for removing any child element of `banner` class element, so it should look like `.banner > *:remove()`.

If the `:remove()` pseudo-class or the `remove` pseudo-property is used, all style properties are ignored except for the [`debug` pseudo-property](#selectors-debug-mode).

**Příklady**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Rules with the `remove` pseudo-property must use `#$?#` marker: `$` for CSS-style rule syntax, `?` for ExtendedCss syntax.

:::

#### Pseudo-class `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntax**

```text
[target]:is(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — [*forgiving selector list*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) of standard or extended selectors. For extended selectors, only compound selectors are supported, not complex.

##### `:is()` limitations {#extended-css-is-limitations}

Rules with the `:is()` pseudo-class must use the [native implementation of `:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:is()`, use `#?#`/`#$?#` marker explicitly.

If the `:is()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:is()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:is(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:is(...)` and `#?#*:is(...)` are parsed as `#?#html *:is(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:is(.locked)` works fine.

[Complex selectors](https://www.w3.org/TR/selectors-4/#complex) with extended pseudo-classes are not supported as `selectors` argument for `:is()` pseudo-class, only [compound ones](https://www.w3.org/TR/selectors-4/#compound) are allowed. Check examples below for more details.

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

```text
[target]:not(selectors)
```

- `target` — optional, standard or extended CSS selector, can be skipped for checking *any* element
- `selectors` — list of standard or extended selectors

##### `:not()` limitations {#extended-css-not-limitations}

Rules with the `:not()` pseudo-class must use the [native implementation of `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) if rules use `##` marker and it is possible, i.e. with no other extended selectors inside. To force applying ExtendedCss rules with `:not()`, use `#?#`/`#$?#` marker explicitly.

If the `:not()` pseudo-class argument `selectors` is an extended selector, due to the way how the `:not()` pseudo-class is implemented in ExtendedCss v2.0, it is impossible to apply it to the top DOM node which is `html`, i.e. `#?#html:not(<extended-selectors>)` does not work. So if `target` is not defined or defined as the [universal selector](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, the extended pseudo-class applying is limited to **`html`'s children**, e.g. rules `#?#:not(...)` and `#?#*:not(...)` are parsed as `#?#html *:not(...)`. Please note that there is no such limitation for a standard selector argument, i.e. `#?#html:not(.locked)` works fine.

The `:not()` is considered as a standard CSS pseudo-class inside the argument of the [`:upward()` pseudo-class](#extended-css-upward) because `:upward()` supports only standard selectors.

"Up-looking" pseudo-classes which are [`:nth-ancestor()`](#extended-css-nth-ancestor) and [`:upward()`](#extended-css-upward) are not supported inside `selectors` argument for `:not()` pseudo-class.

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

#### Pseudo-class `:if-not()` (removed) {#extended-css-if-not}

:::danger Upozornění na odstranění

The `:if-not()` pseudo-class is removed and is no longer supported. Pravidla s tímto modifikátorem jsou považována za neplatná.

:::

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.

### Přednost kosmetických pravidel {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, Mac, and Android**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#cosmetic-elemhide-rules) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser Extension**, the so called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## HTML pravidla filtrování {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

:::info Kompatibilita

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

:::

### Syntax

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — name of the element in lower case, for example, `div` or `script`.
- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rule syntax](#cosmetic-elemhide-rules).
- **`attributes`** — a list of attributes that limit the selection of elements. `name` — attribute name, `value` — substring, that is contained in attribute value.
- **`pseudoName`** — the name of a pseudo-class.
- **`pseudoArgs`** — the arguments of a function-style pseudo-class.
- **`combinator`** — an operator that works similarly to the [CSS child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): that is, the `selector` on the right of the `combinator` will only match an element whose direct parent matches the `selector` on the left of the `combinator`.

### Příklady

**HTML code:**

```html
<script data-src="/banner.js"></script>
```

**Rule:**

```adblock
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

### Speciální atributy

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

#### `tag-content`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

You must use `""` to escape `"`, for instance: `$$script[tag-content="alert(""this is ad"")"]`

For example, take a look at this HTML code:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:

```adblock
$$script[tag-content="banner"]
```

:::caution Omezení

The `tag-content` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `wildcard`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

You must use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It checks if the element code contains the two consecutive substrings `banner` and `text`.

:::caution Omezení

The `wildcard` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `max-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value, a rule does not apply to the element.

**Default value**

If this parameter is not specified, the `max-length` is considered to be 8192.

Např:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

:::caution Omezení

The `max-length` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `min-length`

:::caution Deprecation notice

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class with a regular expression where it is available.

:::

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value, a rule does not apply to the element.

Např:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

:::caution Omezení

The `min-length` special attribute must not appear in a selector to the left of a `>` combinator.

:::

### Pseudotřídy

#### `:contains()`

##### Syntax

```text
:contains(unquoted text)
```

nebo

```text
:contains(/reg(ular )?ex(pression)?/)
```

:::note Compatibility

`:-abp-contains()` and `:has-text()` are synonyms for `:contains()`.

:::

:::info Kompatibilita

The `:contains()` pseudo-class is supported by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13 or later.

:::

Requires that the inner HTML of the element contains the specified text or matches the specified regular expression.

:::caution Omezení

A `:contains()` pseudo-class must not appear in a selector to the left of a `>` combinator.

:::

### Výjimky

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains. The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:

```adblock
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

## Pravidla JavaScript {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any JavaScript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntax**

```text
rule = [domains] "#%#" script
```

- **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#cosmetic-elemhide-rules).
- **`script`** — arbitrary JavaScript code **in one string**.

**Příklady**

- `example.org#%#window.__gaq = undefined;` executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

**Výjimky**

Similar to hiding rules, there is a special type of rules that disable the selected javascript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:

```adblock
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:

```adblock
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.

```adblock
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

:::caution Omezení

JavaScript rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Kompatibilita

JavaScript rules are not supported by AdGuard Content Blocker.

:::

## Pravidla skriptlet {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

:::note

AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

:::

**Blocking rules syntax**

```text
[domains]#%#//scriptlet(name[, arguments])
```

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — required, a name of the scriptlet from AdGuard Scriptlets library;
- `arguments` — optional, a list of `string` arguments (no other types of arguments are supported).

**Příklady**

1. Apply the `abort-on-property-read` scriptlet on all pages of `example.org` and its subdomains, and pass it an `alert` argument:

    ```adblock
    example.org#%#//scriptlet('abort-on-property-read', 'alert')
    ```

1. Remove the `branding` class from all `div[class^="inner"]` elements on all pages of `example.org` and its subdomains:

    ```adblock
    example.org#%#//scriptlet('remove-class', 'branding', 'div[class^="inner"]')
    ```

**Exception rules syntax**

Exception rules can disable some scriptlets on particular domains. The syntax for exception scriptlet rules is similar to normal scriptlet rules but uses `#@%#` instead of `#%#`:

```text
[domains]#@%#//scriptlet([name[, arguments]])
```

- `domains` — optional, a list of domains where the rule should be applied;
- `name` — optional, a name of the scriptlet to except from the applying; if not set, all scriptlets will not be applied;
- `arguments` — optional, a list of `string` arguments to match the same blocking rule and disable it.

**Příklady**

1. Disable specific scriptlet rule so that only `abort-on-property-read` is applied only on `example.org` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read", "alert")
    ```

1. Disable all `abort-on-property-read` scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read")
    ```

1. Disable all scriptlets for `example.com` and its subdomains:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet()
    ```

1. Apply `set-constant` and `set-cookie` to any web page, but due to special scriptlet exception rule only the `set-constant` scriptlet will be applied on `example.org` and its subdomains:

    ```adblock
    #%#//scriptlet('set-constant', 'adList', 'emptyArr')
    #%#//scriptlet('set-cookie', 'accepted', 'true')
    example.org#@%#//scriptlet('set-cookie')
    ```

1. Apply `adjust-setInterval` to any web page and `set-local-storage-item` on `example.com` and its subdomains, but there are also multiple scriptlet exception rules, so no scriptlet rules will be applied on `example.com` and its subdomains:

    ```adblock
    #%#//scriptlet('adjust-setInterval', 'count', '*', '0.001')
    example.com#%#//scriptlet('set-local-storage-item', 'ALLOW_COOKIES', 'false')
    example.com#@%#//scriptlet()
    ```

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Kompatibilita

Scriptlet rules are not supported by AdGuard Content Blocker.

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Previous versions only support exception rules that disable specific scriptlets.

:::

### Důvěryhodné skriptlety {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

:::note

Trusted scriptlets are not compatible with other ad blockers except AdGuard.

:::

:::caution Omezení

Trusted scriptlets rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Kompatibilita

Trusted scriptlets rules are not supported by AdGuard Content Blocker.

:::

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about trusted scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifikátory pro ostatní typ pravidel {#non-basic-rules-modifiers}

Each rule can be modified using the modifiers described in the following paragraphs.

**Syntax** {#non-basic-rules-modifiers-syntax}

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — set of the modifiers described below.
- **`rule text`** — a rule to be modified.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Modifikátor \ Produkty               | [Aplikace CoreLibs][cl-apps] |        [AdGuard pro Chromium][ext-chr]        |        [AdGuard pro Chrome MV3][ext-mv3]         |         [AdGuard pro Firefox][ext-ff]         | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------- |:----------------------------:|:---------------------------------------------:|:------------------------------------------------:|:---------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |              ✅               |                       ❌                       |                        ❌                         |                       ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |              ✅               |                       ✅                       | ✅ [*[1]](#non-basic-domain-modifier-limitations) |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |              ✅               |                       ✅                       |                        ❌                         |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |              ✅               | ✅ [*[2]](#non-basic-url-modifier-limitations) |  ✅ [*[2]](#non-basic-url-modifier-limitations)   | ✅ [*[2]](#non-basic-url-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Příklady**

- `[$app=org.example.app]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` hides a `div` with the class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` applies scriptlet `prevent-setInterval` only in Safari browser on Mac.
- `[$app=org.example.app]#@#.textad` disables all `##.textad` rules for all domains while using `org.example.app`.

:::info Kompatibilita

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Příklady**

- `[$domain=example.com]##.textad` — hides a `div` with the class `textad` at `example.com` and all subdomains.
- `[$domain=example.com|example.org]###adblock` — hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
- `[$domain=~example.com]##.textad` — this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

There are 2 ways to specify domain restrictions for non-basic rules:

1. the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`;
2. the modifier approach is to specify domains via `$domain` modifier: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

### Non-basic `$domain` modifier limitations {#non-basic-domain-modifier-limitations}

:::caution Omezení

Since the non-basic `$domain` works the same as the basic one, it has the same [limitations](#domain-modifier-limitations).

:::

:::info Kompatibilita

Such rules with `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard Browser Extension for Chrome, for Chrome MV3, Firefox, and Edge.

:::

### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntax**

```text
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

If `pattern` is not set for `$path`, rule will apply only on the main page of website.

`$path` modifier matches the query string as well.

`$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Příklady**

- `[$path=page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
- `[$path=/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
- `[$path=|/page.html]##.textad` hides a `div` with the class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
- `[$path=/page.html|]##.textad` hides a `div` with the class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>`
- `[$path=/page*.html]example.com##.textad` hides a `div` with the class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
- `[$path]example.com##.textad` hides a `div` with the class `textad` at the main page of `example.com`
- `[$domain=example.com,path=/page.html]##.textad` hides a `div` with the class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` hides a `div` with the class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please note the [escaped special characters](#non-basic-rules-modifiers-syntax))

:::info Kompatibilita

Rules with `$path` modifier are not supported by AdGuard Content Blocker.

:::

### **`$url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntax**

```text
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Příklady**

- `[$url=||example.com/content/*]##div.textad` hides a `div` with the class `textad` at addresses like `https://example.com/content/article.html` and even `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` hides an element with attribute `id` equal to `adblock` at `example.org` and its subdomains.
- `[$url=/\[a-z\]+\\.example\\.com^/]##.textad` hides `div` elements of the class `textad` for all domains matching the regular expression `[a-z]+\.example\.com^`.

#### `$url` modifier limitations {#non-basic-url-modifier-limitations}

:::caution Omezení

In AdGuard Browser Extension, non-basic `$url` modifier is not compatible with domain-specific rules and other non-basic modifiers — [`$domain`](#non-basic-domain-modifier) and [`$path`](#non-basic-path-modifier). For example, the rule `[$url=/category/*]example.com###textad` will not be applied.

:::

:::info Kompatibilita

Rules with the `$url` modifier are supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

## Information for filter maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Direktivy preprocesoru

We provide preprocessor directives that can be used by filter maintainers to improve compatibility with different ad blockers and provide:

- [including a file](#include-directive)
- [applying rules conditionally by ad blocker type](#conditions-directive)
- [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

:::note

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Zahrnutý soubor {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**

```adblock
!#include file_path
```

where `file_path` is a same origin absolute or relative file path to be included.

The files must originate from the same domain, but may be located in a different folder.

If included file is not found or unavailable, the whole filter update should fail.

Same-origin limitation should be disabled for local custom filters.

**Příklady**

Filter URL: `https://example.org/path/filter.txt`

```adblock
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

Filter maintainers can use conditions to supply different rules depending on the ad blocker type. A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive. Conditions support all basic logical operators.

There are two possible scenarios:

1. When an ad blocker encounters an `!#if` directive and no `!#else` directive, it will compile the code between `!#if` and `!#endif` directives only if the specified condition is true.

1. If there is an `!#else` directive, the code between `!#if` and `!#else` will be compiled if the condition is true; otherwise, the code between `!#else` and `!#endif` will be compiled.

:::note

Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

:::

**Syntax**

```adblock
!#if (conditions)
rules_list
!#endif
```

nebo

```adblock
!#if (conditions)
true_conditions_rules_list
!#else
false_conditions_rules_list
!#endif
```

kde:

- `!#if (conditions)` — start of the block when conditions are true
- `conditions` — just like in some popular programming languages, preprocessor conditions are based on constants declared by ad blockers. Authors of ad blockers define on their own what exact constants they declare. Possible values:
    - `adguard` always declared; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
    - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
        - `adguard_app_windows` — AdGuard for Windows
        - `adguard_app_mac` — AdGuard for Mac
        - `adguard_app_android` — AdGuard for Android
        - `adguard_app_ios` — AdGuard for iOS
        - `adguard_ext_safari` — AdGuard for Safari
        - `adguard_ext_chromium` — AdGuard Browser Extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
        - `adguard_ext_chromium_mv3` — [AdGuard for Chrome MV3][ext-mv3]
        - `adguard_ext_firefox` — AdGuard Browser Extension for Firefox
        - `adguard_ext_edge` — AdGuard Browser Extension for Edge Legacy
        - `adguard_ext_opera` — AdGuard Browser Extension for Opera
        - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
        - `cap_html_filtering` — products that support HTML filtering rules: AdGuard for Windows, AdGuard for Mac, and AdGuard for Android
- `!#else` — start of the block when conditions are false
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — lists of rules
- `!#endif` — end of the block

**Příklady**

```adblock
! for all AdGuard products except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

```adblock
!#if (adguard && !adguard_ext_safari)
! pro všechny produkty AdGuardu kromě AdGuardu pro Safari
||example.org^$third-party
domain.com##div.ad
!#else
! pouze pro AdGuard pro Safari
||subdomena.example.org^$third-party
!#endif
```

:::info Kompatibilita

The `!#else` directive is supported by the [FiltersDownloader][gh-filters-downloader] v1.1.20 or later.

It is already supported for filter lists compiled by the [FiltersRegistry][], but it still may not be supported by AdGuard products when adding a filter list with `!#else` as a custom one. The following products will support it in the mentioned versions or later:

- AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.13;
- AdGuard Browser Extension v4.2.208;
- AdGuard v1.11.16 for Safari.

:::

#### Afinita Safari {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

User rules and allowlist are added to every content blocker.

:::caution

The main disadvantage of using multiple content blockers is that rules from different blockers are applied independently. Blocking rules are not affected by this, but unblocking rules may cause problems. If a blocking rule is in one content blocker and an exception is in another, the exception will not work. Filter maintainers use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

:::

**Syntax**

```adblock
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

```adblock
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! to allowlist basic rule from AdGuard Tracking Protection filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Nápovědy

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry][]).

**Syntax**

```adblock
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

Multiple hints can be applied.

#### Nápověda `NOT_OPTIMIZED`

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](../tracking-filter-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```text
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```

kde:

- **filter** — filter identifier
- **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
- **minPercent** — lower bound of `percent` value
- **maxPercent** — upper bound of `percent` value
- **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**If you want to add a rule which should not be removed at optimization use the `NOT_OPTIMIZED` hint:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule will not be optimized only for AdGuard for Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### Nápověda `PLATFORM` a `NOT_PLATFORM`

Used to specify the platforms to apply the rules. List of existing platforms and links to Base filter, for example, for each of them:

- `windows` — AdGuard for Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard for Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard for Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard for iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — AdGuard Browser Extension for Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — AdGuard Browser Extension for Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

- `ext_ff` — AdGuard Browser Extension for Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — AdGuard Browser Extension for Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — AdGuard Browser Extension for Opera — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard for Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — AdGuard Content Blocker — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

- `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Příklady**

This rule will be available only in AdGuard for Windows, Mac, Android:

```adblock
!+ PLATFORM(windows,mac,android)
||example.org^
```

Except for AdGuard for Safari, AdGuard Content Blocker, and AdGuard for iOS, this rule is available on all platforms:

```adblock
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## Jak ladit pravidla filtrování

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Záznam filtrování

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- In **AdGuard for Windows**, you can find it in the *Ad Blocker* tab or via the tray menu
- In **AdGuard for Mac**, it is located in *Settings → Advanced → Filtering log*
- In **AdGuard for Android**, you can find it under *Statistics → Recent activity*. *Recent activity* can also be accessed from the *Assistant*
- In **AdGuard Browser Extension**, it is accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based web browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs

:::note

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Režim ladění selektorů {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — text of the parsed selector, may differ from the input one
- `timings` — list of DOM nodes matched by the selector
    - `appliesCount` — total number of times that the selector has been applied on the page
    - `appliesTimings` — time that it took to apply the selector on the page, for each of the instances that it has been applied (in milliseconds)
    - `meanTiming` — mean time that it took to apply the selector on the page
    - `standardDeviation` — standard deviation
    - `timingsSum` — total time it took to apply the selector on the page across all instances

**Printed only for remove pseudos:**

- `removed` — flag to signal if elements were removed

**Printed if elements are not removed:**

- `matchedElements` — list of DOM nodes matched by the selector
- `styleApplied` — parsed rule style declaration related to the selector

**Příklady**

**Debugging a single selector:**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug:**

When the value of the `debug` property is `global`, the console will display information about all extended CSS selectors that have matches on the current page, for all the rules from any of the enabled filters.

```adblock
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

### Ladění skriptletů {#debug-scriptlets}

If you are using AdGuard Browser Extension and want to debug a [scriptlet](#scriptlets) or a [trusted scriptlet](#trusted-scriptlets) rule, you can get additional information by opening the Filtering log. In that case, scriptlets will switch to debug mode and there will be more information in the browser console.

The following scriptlets are especially developed for debug purposes:

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

The following scriptlets also may be used for debug purposes:

- [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#json-prune)
- [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-fetch)
- [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
- [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
- [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) with specified `replacement` parameter
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Legenda tabulek kompatibility {#compatibility-tables-legend}

### Zkratky produktů {#what-product}

1. `CoreLibs apps` — [AdGuard for Windows](/adguard-for-windows/features/home-screen), [AdGuard for Mac](/adguard-for-mac/features/main), and [AdGuard for Android](/adguard-for-android/features/protection/ad-blocking)
1. `AdGuard for Chromium` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Chrome and other Chromium-based browsers such as Microsoft Edge, Opera
1. `AdGuard for Chrome MV3` — [AdGuard Browser Extension for Chrome MV3](/adguard-browser-extension/mv3-version)
1. `AdGuard for Firefox` — [AdGuard Browser Extension](/adguard-browser-extension/availability) for Firefox
1. `AdGuard for iOS` — [AdGuard for iOS](/adguard-for-ios/features/safari-protection) and AdGuard Pro for iOS (for mobile Safari browser)
1. `AdGuard for Safari` — [AdGuard for desktop Safari browser](/adguard-for-safari/features/general)
1. `AdGuard Content Blocker` — [Content Blocker](/adguard-content-blocker/overview) for Android mobile browsers: Samsung Internet and Yandex Browser

### Zkratky kompatibility {#what-compatibility}

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions
- ⏳ - funkce, jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno
- 👎 — deprecated; still supported but will be removed in the future
- 🚫 — odstraněno a již nepodporováno

:::

[popup-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/epic/tswebextension/packages/tsurlfilter/src/rules/declarative-converter#popup

[Sec-Fetch-Dest header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[cl-apps]: #what-product "AdGuard for Windows, Mac, Android"
[ext-chr]: #what-product "AdGuard Browser Extension for Chrome and other Chromium-based browsers"
[ext-mv3]: #what-product "Rozšíření prohlížeče AdGuard pro Chrome MV3"
[ext-mv3]: #what-product "AdGuard Browser Extension for Chrome MV3"
[ext-ff]: #what-product "AdGuard Browser Extension for Firefox"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ext-saf]: #what-product "AdGuard pro Safari"
[ext-saf]: #what-product "AdGuard for Safari"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
[CoreLibs]: https://adguard.com/en/blog/introducing-corelibs.html
[TSUrlFilter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter#tsurlfilter
[TSWebExtension]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tswebextension#tswebextension
