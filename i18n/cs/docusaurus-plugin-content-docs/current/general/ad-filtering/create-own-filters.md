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

### Modifikátory základních pravidel {#basic-rule-modifiers-examples}

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

### SafariConverterLib {#safari-converter-lib}

Safari Converter se snaží co nejvíce podporovat syntaxi pravidel filtrování AdGuard, ale stále existují omezení a nedostatky, které je těžké překonat.

#### Základní (síťová) pravidla

Safari Converter podporuje podstatnou podmnožinu [základních pravidel](#basic-rules) a určitě podporuje nejdůležitější typy těchto pravidel.

##### Podporováno s omezeními {#safari-converter--basic--supported-with-limitations}

- [Pravidla regulárních výrazů](#regexp-support) jsou omezena na podmnožinu regex [podporovanou prohlížečem Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).

- `$domain` - [modifikátor domén](#domain-modifier) je podporován s několika omezeními:

    - Není možné míchat povolené a zakázané domény (například `$domain=example.org|~sub.example.org`). Dejte prosím pozitivní hodnocení [žádosti o funkci](https://bugs.webkit.org/show_bug.cgi?id=226076) pro WebKit, aby toto omezení zrušil.
    - "Libovolná TLD" (tj. `domain.*`) není plně podporována. V současné implementaci konvertor pouze nahrazuje `.*` 100 nejoblíbenějšími TLD. Tato implementace bude v [budoucnu](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732) vylepšena.
    - Použití regulárních výrazů v `$domain` není podporováno, ale i to bude v [budoucnu](https://github.com/AdguardTeam/SafariConverterLib/issues/20#issuecomment-2532818732) vylepšeno.

- `$denyallow` - tento modifikátor je podporován převodem pravidla `$denyallow` na sadu pravidel (jedno pravidlo blokování + několik pravidel pro odblokování).

  Vzhledem k tomuto omezení `$denyallow` je povoleno pouze v případě, že pravidlo má také modifikátor `$domain`.

    - Generické pravidlo `*$denyallow=x.com,image,domain=a.com` bude převedeno na:

    ```adblock
    *$image,domain=a.com
    @@||x.com$image,domain=a.com
    ```

    - Pravidlo `/banner.png$image,denyallow=test1.com|test2.com,domain=example.org` bude převedeno na:

    ```adblock
    /banner.png$image,domain=example.org
    @@||test1.com/banner.png$image,domain=example.org
    @@||test1.com/*/banner.png$image,domain=example.org
    @@||test2.com/banner.png$image,domain=example.org
    @@||test2.com/*/banner.png$image,domain=example.org
    ```

    - Pravidlo bez `$domain`**není podporováno**: `$denyallow=a.com|b.com`.

- `$popup` - jsou podporována pravidla vyskakovacích oken, ale jsou v podstatě stejná jako pravidla pro `$document`-pravidla blokování a nepokusí se kartu zavřít.

- Pravidla výjimek`(@@`) zakazují kosmetické filtrování odpovídajících domén.

  Pravidla výjimek v Safari se spoléhají na typ pravidla `ignore-previous-rules`, takže aby to fungovalo, musíme pravidla seřadit v určitém pořadí. Pravidla výjimek bez modifikátorů jsou umístěna na konci seznamu a proto znemožňují nejen blokování URL, ale i kosmetická pravidla.

  Toto omezení může být zrušeno, pokud bude implementována položka [#70](https://github.com/AdguardTeam/SafariConverterLib/issues/70).

- `$urlblock`, `$genericblock` je v podstatě stejné jako `$document`, tj. zakáže všechny druhy filtrování webových stránek.

  Tato omezení mohou být zrušena, až budou zavedeny položky [#69](https://github.com/AdguardTeam/SafariConverterLib/issues/69) a [#71](https://github.com/AdguardTeam/SafariConverterLib/issues/71).

- `$content` nemá v případě Safari smysl, protože pravidla filtrování HTML nejsou podporována, takže je zde pouze pro účely kompatibility. Pravidla s `$content` jsou omezena na typ zdroje `document`.

- `$specifichide` je implementováno prohledáním existujících pravidel pro skrývání prvků a odstraněním cílové domény z jejich řady `if-domain`.

    - `$specifichide` pravidlo MUSÍ být zaměřeno na doménu, tj. musí vypadat takto: `||example.org^$specifichide`. Pravidla s konkrétnějšími vzory budou vyřazena, tj. `||example.org/path$specifichide` nebude podporováno.
    - `$specifichide` se vztahuje pouze na pravidla, která jsou zaměřena na stejnou doménu jako samotné pravidlo, subdomény jsou ignorovány. Tj. pravidlo `@@||example.org^$specifichide` zakáže `example.org##.banner`, ale bude ignorovat `sub.example.org##.banner`. Toto omezení může být zrušeno, pokud bude implementována položka [#72](https://github.com/AdguardTeam/SafariConverterLib/issues/72).

- Modifikátory `urlblock`, `genericblock`, `generichide`, `elemhide`, `specifichide` a `jsinject` lze v pravidle použít pouze jako jeden modifikátor. Toto omezení může být v budoucnu zrušeno: [#73](https://github.com/AdguardTeam/SafariConverterLib/issues/73).

- `$websocket` (plně podporováno od Safari 15).

- `$ping` (plně podporováno od Safari 14).

##### Nepodporováno

- `$app`
- `$header`
- `$method`
- `$strict-first-party` (bude podporováno v budoucnu: [#64](https://github.com/AdguardTeam/SafariConverterLib/issues/64))
- `$strict-third-party` (bude podporováno v budoucnu: [#65](https://github.com/AdguardTeam/SafariConverterLib/issues/65))
- `$to` (bude podporováno v budoucnu: [#60](https://github.com/AdguardTeam/SafariConverterLib/issues/60))
- `$extension`
- `$stealth`
- `$cookie` (bude částečně podporováno v budoucnu: [#54](https://github.com/AdguardTeam/SafariConverterLib/issues/54))
- `$csp`
- `$hls`
- `$inline-script`
- `$inline-font`
- `$jsonprune`
- `$xmlprune`
- `$network`
- `$permissions`
- `$redirect`
- `$redirect-rule`
- `$referrerpolicy`
- `$removeheader`
- `$removeparam`
- `$replace`
- `$urltransform`

#### Kosmetická pravidla {#cosmetic-rules-safari-limitations}

Safari Converter podporuje většinu [kosmetických pravidel](#cosmetic-rules) ačkoli jsou nativně podporována pouze pravidla skrývání prvků se základními selektory CSS prostřednictvím blokování obsahu v Safari, vše ostatní je třeba interpretovat dalším rozšířením.

##### Omezení kosmetických pravidel

- Pro zadávání domén platí stejná omezení jako pro modifikátor základních pravidel `$domain`.

- [Modifikátory jiných než základních pravidel](#non-basic-rules-modifiers) jsou podporovány s určitými omezeními:

    - `$domain` - stejná omezení jako všude jinde.
    - `$path` - podporováno, ale pokud použijete regulární výrazy, budou omezeny na podmnožinu regex [podporovanou prohlížečem Safari](https://developer.apple.com/documentation/safariservices/creating-a-content-blocker#Capture-URLs-by-pattern).
    - `$url` - bude podporováno v budoucnu: [#68](https://github.com/AdguardTeam/SafariConverterLib/issues/68)

#### Pravidla script/scriptlet

Safari Converter plně podporuje [pravidla script](#javascript-rules) a [pravidla scriplet](#scriptlets). Tato pravidla však lze vykládat pouze pomocí samostatného rozšíření.

:::varování

Pro pravidla scriplet je **velmi důležité** spustit je co nejdříve po načtení stránky. Důvodem je to, že je důležité, aby se spustil dříve než skripty stránky. V prohlížeči Safari bohužel vždy dochází k mírnému zpoždění, které může snížit kvalitu blokování.

:::

#### HTML pravidla filtrování {#html-filtering-rules-safari-limitations}

[Pravidla filtrování HTML](#html-filtering-rules) **nejsou**, a v budoucnu nebudou podporována. Safari bohužel neposkytuje potřebné technické možnosti pro jejich implementaci.

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
| [$strict-first-party](#strict-first-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$strict-third-party](#strict-third-party-modifier) |                   ✅                   |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                   ❌                    |                 ❌                 |
| [$third-party](#third-party-modifier)               |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                   ✅                    |                 ✅                 |
| [$to](#to-modifier)                                 |                   ✅                   |                   ✅                    |                   ✅                    |                   ✅                    |                   ❌                    |                   ❌                    |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno

:::

#### **`$app`** {#app-modifier}

Tento modifikátor umožňuje zúžit pokrytí pravidla na konkrétní aplikaci (nebo seznam aplikací). V systémech Windows a Mac to nemusí být příliš důležité, ale v mobilních zařízeních, kde některá pravidla filtrování musí být specifická pro konkrétní aplikaci, je to velmi důležité.

- Android — použijte název balíčku aplikace, např. `org.example.app`.
- Windows — použijte název procesu, např. `chrome.exe`.
- Mac — použijte ID svazku nebo název procesu, např. `com.google.Chrome`.

V případě počítače Mac můžete ID svazku nebo název procesu aplikace zjistit zobrazením příslušných podrobností o požadavku v záznamu filtrování.

**Syntaxe**

Modifikátor je seznam jednoho nebo více výrazů, z nichž každý je porovnáván s aplikací určitým způsobem v závislosti na svém typu. Tyto výrazy jsou odděleny symbolem `|`.

```text
applications = ["~"] entry_0 ["|" ["~"] entry_1 ["|" ["~"]entry_2 ["|" ... ["|" ["~"]entry_N]]]]
entry_i = ( regular_app / wildcard_app / regexp )
```

- **`regular_app`** — regulární název aplikace (`example.app`). Odpovídá zadané aplikaci a je přiřazen lexikograficky.
- **`wildcard_app`** — název aplikace končící zástupným znakem `*`, např. `org.example.*` nebo `com.ad*`. Odpovídá všem aplikacím, jejichž názvy začínají zadanou předponou. Porovnání se provádí lexikograficky.
- **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Funguje stejně jako v základních pravidlech URL, ale znaky `/`, `$`, `,` a `|` musí být uvozeny pomocí `\`.

**Příklady**

- `||baddomain.com^$app=org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z Android aplikace `org.example.app`.
- `||baddomain.com^$app=org.example.app1|org.example.app2` — stejné pravidlo, ale funguje jak pro `org.example.app1`, tak i pro `org.example.app2`.

Pokud chcete, aby se pravidlo nevztahovalo na určité aplikace, začněte název aplikace znakem `~`.

- `||baddomain.com^$app=~org.example.app` — pravidlo pro blokování požadavků, které odpovídají zadané masce a jsou odeslány z jakékoli aplikace kromě `org.example.app`.
- `||baddomain.com^$app=~org.example.app1|~org.example.app2` — stejně jako výše, ale nyní jsou vyloučeny dvě aplikace: `org.example.app1` a `org.example.app2`.

Zástupné znaky můžete použít v modifikátoru `$app`:

- `||baddomain.com^$app=org.example.*` — použije se pro všechny aplikace, jejichž názvy balíčků začínají na `org.example.`

V modifikátoru `$app` můžete použít regulární výrazy, které uzavřete do lomítek `/.../`. To umožňuje flexibilnější párování — například cílení na skupinu aplikací od stejného vydavatele nebo párování složitých vzorů.

- `||baddomain.com^$app=/org\.example\.[a-z0-9_]+/` — platí pro všechny aplikace, jejichž název balíčku začíná `org.example` (např. `org.example.app1`, `org.example.utility` atd.).
- `||baddomain.com^$app=/^org\.example\.app\$\|^org\.example\.[ab].*/` — platí pro `org.example.app` a pro všechny aplikace, jejichž balíček začíná `org.example.a` nebo `org.example.b`.

Modifikátor `$app` podporuje kombinování všech tří typů záznamů — prostých názvů, zástupných znaků a regulárních výrazů — v rámci stejného pravidla, ale neumožňuje kombinovat negované a nenegované výrazy dohromady.

- `||example.com^$app=org.example.app|org.example.*|/org\.example\.[a-z]+/` — platí pro `org.example.app`, všechny odpovídající aplikace `org.example.*` a `org.example.[a-z]+`.

:::caution Omezení

- Aplikace v hodnotě modifikátoru nemohou obsahovat zástupný znak uvnitř řetězce, např. `$app=com.*.music`. Použijte místo toho regulární výraz: `$app=/com\..*\.music/`.
- Nelze kombinovat negované (`~`) a nenegované výrazy ve stejném modifikátoru `$app` — bylo by to nejednoznačné.

:::

:::info Kompatibilita

- Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$app`.
- On Windows the process name is case-insensitive starting with AdGuard for Windows with [CoreLibs][] v1.12 or later.
- Podpora regulárních výrazů a kombinování různých typů záznamů (prosté názvy, zástupné znaky a regulární výrazy) v modifikátoru `$app` je k dispozici od verze CoreLibs v1.19 nebo novější.

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
- Domény v hodnotě modifikátoru nemohou být negovány, např. `$denyallow=~x.com`, nebo mít zástupný znak TLD, např. `$denyallow=x.*`, nebo být regulárním výrazem, např. `;$denyallow=/\.(com\|org)/`.
- `$denyallow` nelze použít společně s [`$to`](#to-modifier). Lze ji vyjádřit pomocí invertovaného `$to`: `$denyallow=a.com|b.com`, což je je ekvivalent k `$to=~a.com|~b.com`.

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
- **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Vzor funguje stejně jako v základních pravidlech URL, ale znaky `/`, `$`, `,` a `|` musí být uvozeny pomocí `\`.

:::info

Pravidla s modifikátorem `$domain` jako `regular_domain` jsou podporována všemi AdGuard produkty.

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

V některých případech může modifikátor `$domain` odpovídat nejen doméně odkazovače, ale také cílové doméně.

K tomu dochází, když pravidlo obsahuje jeden z následujících modifikátorů: [`$cookie`](#cookie-modifier), [`$csp`](#csp-modifier), [`$permissions`](#permissions-modifier), [`$removeparam`](#removeparam-modifier).

Tyto modifikátory nebudou použity, pokud odkazující doména odpovídá pravidlu s `$domain`, které výslovně vylučuje odkazující doménu, i když cílová doména také odpovídá pravidlu.

**Příklady**

- `*$cookie,domain=example.org|example.com` zablokuje soubory cookie pro všechny požadavky do a z domény `example.org` a `example.com`.
- `*$document,domain=example.org|example.com` zablokuje pouze požadavky z `example.org` a `example.com`, ale ne požadavky směřující na tyto domény.

V následujících příkladech se předpokládá, že požadavky jsou odesílány z adresy `http://example.org/page` (odkazující adresa), cílová adresa URL je `http://targetdomain.com/page`.

- `page$domain=example.org` bude přiřazena, protože odpovídá doméně odkazu.
- `page$domain=targetdomain.com` nebude odpovídat, protože neodpovídá doméně odkazujícího webu.
- `||*page$domain=targetdomain.com,cookie` bude odpovídat, protože pravidlo obsahuje modifikátor `$cookie`, i když vzor `||*page` může odpovídat konkrétním doménám.
- `page$domain=targetdomain.com|~example.org,cookie` nebude přiřazena, protože doména odkazu je výslovně vyloučena.

##### omezení modifikátoru `$domain` {#domain-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3], `regexp` and `any_tld_domain` entries are not supported.

AdGuard pro iOS a AdGuard pro Safari podporují modifikátor `$domain`, ale má některá omezení. Pro více informací navštivte [sekci SafariConverterLib](#safari-converter--basic--supported-with-limitations).

Pravidla s modifikátorem `regexp` v `$domain` nejsou podporována AdGuardem pro iOS a Safari.

:::

:::info Kompatibilita

Rules with regular expressions in the `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

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

- **`h_name`** — povinný název záhlaví HTTP. Je přizpůsoben případ od případu.
- **`h_value`** — nepovinný výraz odpovídající hodnotě záhlaví HTTP, může to být jeden z následujících výrazů:
    - **`string`** — posloupnost znaků. Porovnává se s hodnotou záhlaví lexikograficky;
    - **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\`.

Část modifikátoru `":" h_value` lze vynechat. V takovém případě modifikátor odpovídá pouze názvu záhlaví.

**Příklady**

- `||example.com^$header=set-cookie:foo` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající `foo`.
- `||example.com^$header=set-cookie` blokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.
- `@@||example.com^$header=set-cookie:/foo\, bar\$/` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s hodnotou odpovídající regulárnímu výrazu `foo, bar$`.
- `@@||example.com^$header=set-cookie` odblokuje požadavky, jejichž odpovědi mají hlavičku `Set-Cookie` s libovolnou hodnotou.

##### omezení modifikátoru `$header` {#header-modifier-limitations}

:::caution Omezení

1. Modifikátor `$header` lze porovnat pouze v případě, že jsou přijata záhlaví. Pokud je tedy požadavek zablokován nebo přesměrován v dřívější fázi, nelze modifikátor použít.

1. V Rozšíření prohlížeče AdGuard je modifikátor `$header` kompatibilní poze s [`$csp`](#csp-modifier), [`$removeheader`](#removeheader-modifier) (pouze hlavičky odpovědí), [`$important`](#important-modifier), [`$badfilter`](#badfilter-modifier), [`$domain`](#domain-modifier), [`$third-party`](#third-party-modifier), [`$match-case`](#match-case-modifier) s [content-type modifiers](#content-type-modifiers) jako [`$script`](#script-modifier) a [`$stylesheet`](#stylesheet-modifier). Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

:::

:::info Kompatibilita

Rules with the `$header` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

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

Pravidla s `$match-case` jsou podporována aplikací AdGuard pro iOS a AdGuard pro Safari s SafariConverterLib v2.0.43 nebo novějším.

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

Pravidla se smíšenými negovanými a nenegovanými hodnotami jsou považována za neplatná. Takže např. pravidlo `||evil.com^$method=get|~head` bude ignorováno.

:::

:::info Kompatibilita

Rules with `$method` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v2.1.1 or later.

:::

#### **`$popup`** {#popup-modifier}

AdGuard se pokusí zavřít kartu prohlížeče s jakoukoli adresou, která odpovídá pravidlu blokování s tímto modifikátorem. Upozorňujeme, že ne všechny karty lze zavřít.

**Příklady**

- `||domain.com^$popup` — pokud se pokusíte přejít na `http://domain.com/` z libovolné stránky v prohlížeči, nová karta, ve které má být zadaný web otevřen, bude tímto pravidlem zavřena.

##### omezení modifikátoru `$popup` {#popup-modifier-limitations}

:::caution Omezení

1. Modifikátor `$popup` funguje nejlépe v rozšíření prohlížeče AdGuard pro prohlížeče založené na Chromiu a Firefox.
1. In [AdGuard for Chrome MV3][ext-mv3] rules with the [`$popup`][popup-in-mv3] modifier would not work, so we disable converting them to declarative rules. We will try to use them only in our [TSUrlFilter][] engine and close new tabs programmatically.
1. V AdGuardu pro Safari a AdGuardu pro iOS, pravidla `$popup` stránku jednoduše a okamžitě zablokují.
1. V AdGuardu pro Windows, Mac, Android a Linux nemusí modifikátor `$popup` v některých případech detekovat vyskakovací okno a nebude zablokováno. Modifikátor `$popup` použije typ obsahu `document` se speciálním příznakem, který je předán blokovací stránce. Samotná blokovací stránka může provést některé kontroly a zavřít okno, pokud se skutečně jedná o vyskakovací okno. V opačném případě by se stránka měla načíst. Lze jej kombinovat s dalšími modifikátory typu požadavku, například `$third-party`, `$strict-third-party`, `$strict-first-party` a `$important`.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$popup` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$strict-first-party`** {#strict-first-party-modifier}

Funguje stejně jako modifikátor [`$~third-party`](#third-party-modifier), ale zachází s požadavkem jako s vlastním, pokud má odkazovač a původ naprosto stejný název hostitele.

Požadavky bez odkazovače jsou také považovány za vlastní požadavky a na tyto požadavky se vztahují pravidla s modifikátorem `$strict-first-party`.

**Příklady**

- domain.com$strict-first-party' – toto pravidlo platí pouze pro `domena.com`. Např. požadavek z `domain.com` na `http://domain.com/icon.ico` je požadavek vlastní. Požadavek z `sub.domain.com` na `http://domain.com/icon.ico` je považován za požadavek třetí strany (na rozdíl od modifikátoru `$~third-party`).

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$strict1p`.

:::

:::info Kompatibilita

Rules with the `$strict-first-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

Requests without a referrer are matched by rules with `$strict-first-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$strict-third-party`** {#strict-third-party-modifier}

Funguje stejně jako modifikátor [`$third-party`](#third-party-modifier), ale zpracovává požadavky z domény na její subdomény a naopak jako žádosti třetí strany.

**Příklady**

- `||domain.com^$strict-thirdparty` — toto pravidlo bude použito na všechny domény, kromě `domain.com`. Příklad požadavku třetí strany: `http://sub.domain.com/banner.jpg` (na rozdíl od modifikátoru `$third-party`).

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$strict3p`.

:::

:::info Kompatibilita

Rules with the `$strict-third-party` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later.

:::

#### **`$third-party`** {#third-party-modifier}

Omezení požadavků třetích stran a vlastních požadavků. Požadavek třetí strany je požadavek z externí domény. Např. požadavek na `example.org` z `domain.com` je požadavek třetí strany.

:::note

Aby mohla být žádost třetí strany považována za takovou, měla by splňovat jednu z následujících podmínek:

1. Její odkazující doména není subdoménou cílové domény nebo naopak. Např. požadavek na `subdomain.example.org` z `example.org` není požadavek třetí strany
1. Její záhlaví `Sec-Fetch-Site` je nastaveno na `cross-site`

:::

**Příklady**

**`$third-party`:**

- `||domain.com^$third-party` — toto pravidlo bude použito na všechny domény, kromě `domain.com` a její subdomény. Pravidlo se nikdy neuplatní, pokud neexistuje žádný odkazovač. Příklad požadavku třetí strany: `http://example.org/banner.jpg`.

Pokud existuje modifikátor `$third-party`, pravidlo se použije pouze na požadavky, které nejsou od třetích stran. To znamená, že musí být odeslány ze stejné domény nebo by neměly mít vůbec žádný odkazovač.

**`$~third-party`:**

- `||domain.com$~third-party` — toto pravidlo se vztahuje výhradně na `domain.com`. Příklad požadavku která není podán třetí stranou: `http://sub.domain.com/icon.ico`.

Požadavky bez odkazovače jsou rovněž považovány za požadavky, které nejsou požadavky třetích stran, a jsou na ně aplikována pravidla s modifikátorem `$~third-party`.

:::note

Místo plného názvu modifikátoru můžete použít kratší název (alias): `$3p`.

:::

:::info Kompatibilita

Requests without a referrer are matched by rules with `$~third-party` in AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.18 or later.

:::

#### **`$to`** {#to-modifier}

`$to` omezuje rozsah pravidla na požadavky **na** zadané domény a jejich subdomény. Chcete-li do jednoho pravidla přidat více domén, použijte jako oddělovací znak `|`.

**Příklady**

- `/ads$to=evil.com|evil.org` zablokuje jakýkoliv požadavek na `evil.com` nebo `evil.org` a jejich subdomény s cestou, která odpovídá `/ads`.
- `/ads$to=~not.evil.com|evil.com` zablokuje jakýkoliv požadavek na `evil.com` a její subdomény s cestou, která odpovídá `/ads`, kromě požadavků na `not.evil.com` a její subdomény.
- `/ads$to=~good.com|~good.org` zablokuje všechny požadavky s cestou, která odpovídá `/ads`, kromě požadavků na `good.com` nebo `good.org` a jejich subdomény.

:::caution Omezení

[`$denyallow`](#denyallow-modifier) nelze použít společně s `$to`. Lze ji vyjádřit pomocí invertovaného `$to`: `$denyallow=a.com|b.com`, což je je ekvivalent k `$to=~a.com|~b.com`.

:::

:::info Kompatibilita

Rules with the `$to` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later, and AdGuard Browser Extension with [TSUrlFilter][] v2.1.3 or later.

:::

### Modifikátory typu obsahu {#content-type-modifiers}

Existuje sada modifikátorů, které lze použít k omezení oblasti použití pravidla na určitý typ obsahu. Tyto modifikátory lze také kombinovat, aby zahrnovaly například obrázky i skripty.

:::info Kompatibilita

V tom, jak AdGuard určuje typ obsahu na různých platformách, existuje velký rozdíl. U Rozšíření prohlížeče AdGuard je typ obsahu pro každý požadavek poskytován prohlížečem. AdGuard pro Windows, Mac a Android používají následující metodu: nejprve se aplikace pokusí určit typ požadavku podle záhlaví požadavku `Sec-Fetch-Dest` nebo podle přípony názvu souboru. Pokud není požadavek v této fázi zablokován, určí se typ pomocí záhlaví `Content-Type` na začátku odpovědi serveru.

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
| [$object](#object-modifier)                                   |                      ✅                      |                ✅                |                 ✅                 |               ✅               |                     ❌                     |                     ❌                     |                 ✅                 |
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
- `||example.com^$document,removeparam=test` odebere parametr dotazu `test` z požadavku dokumentu HTML na `example.com`.
- `||example.com^$document,replace=/test1/test2/` nahradí `test1` za `test2` v požadavku na dokument HTML na `example.com`.

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

:::info Kompatibilita

Pravidla s modifikátorem `$object` nejsou podporována AdGuardem pro iOS a Safari.

:::

#### **`$other`** {#other-modifier}

Pravidlo se vztahuje na požadavky, jejichž typ nebyl určen nebo neodpovídá výše uvedeným typům.

#### **`$ping`** {#ping-modifier}

Pravidlo odpovídá požadavkům vyvolaným buď `navigator.sendBeacon()`, nebo atributem `ping` v odkazech.

##### omezení modifikátoru `$ping` {#ping-modifier-limitations}

:::caution Omezení

AdGuard pro Windows, Mac a Android často nedokáží přesně detekovat `navigator.sendBeacon()`. V seznamech filtrů, které mají používat AdGuard produkty založené na knihovně CoreLibs, se nedoporučuje používat `$ping`.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$ping` nejsou podporována AdGuardem pro iOS a Safari.

:::

#### **`$script`** {#script-modifier}

Pravidlo odpovídá požadavkům na skripty, např. JavaScript, VBScript.

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

##### omezení modifikátoru `$subdocument` {#subdocument-modifier-limitations}

:::caution Omezení

V AdGuardu pro Windows, Mac a Android jsou subdokumenty detekovány záhlavím [Sec-Fetch-Dest][], pokud je přítomno. V opačném případě mohou být některé hlavní stránky považovány za dílčí dokumenty.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$subdocument` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$websocket`** {#websocket-modifier}

Pravidlo se vztahuje pouze na připojení WebSocket.

##### omezení modifikátoru `$websocket` {#websocket-modifier-limitations}

:::caution Omezení

AdGuard pro Safari a AdGuard pro iOS je podporován na zařízeních se systémem macOS Monterey (verze 12), respektive iOS 16 a vyšší.

:::

:::info Kompatibilita

Modifikátor `$websocket` je podporován ve všech produktech AdGuardu kromě Blokátoru obsahu AdGuard.

:::

#### **`$xmlhttprequest`** {#xmlhttprequest-modifier}

Pravidlo se vztahuje pouze na požadavky ajax (požadavky odeslané prostřednictvím objektu JavaScript `XMLHttpRequest`).

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

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno

:::

:::info

Ve výchozím nastavení, bez zadání dalších modifikátorů typu obsahu, jsou modifikátory pravidel výjimek nadřazeny ostatním základním pravidlům pouze pro požadavky na dokument hlavního rámce (viz [`$document`](#document-modifier) pro více informací o dokumentu hlavního rámve).

Např:

- Webová stránka `example.com` obsahuje `iframe` odkazující na `example1.com`.
- Použije se pravidlo `#%#//console.log('test')`.

V tomto případě se log v konzole zobrazí dvakrát: jednou pro hlavní dokument rámce a jednou pro `iframe`.

Pokud přidáte pravidlo `@@|||example.com^$jsinject`, log se pro `iframe` zobrazí pouze jednou.

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
- `@@||example.com^$extension='AdGuard Assistant'|'AdGuard Popup Blocker'` zakáže uživatelské skripty `AdGuard asistent` a `Blokátor vyskakovacích okenAdGuard ` na `example.com`.
- `@@||example.com^$extension=~"AdGuard Assistant"` zakáže všechny uživatelské skripty na `example.com`, kromě `AdGuard asistenta`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"AdGuard Popup Blocker"` zakáže všechny uživatelské skripty na `example.com`, kromě `AdGuard asistenta` a `Blokátor vyskakovacích oken AdGuard`.
- `@@||example.com^$extension` žádné uživatelské skripty nebudou fungovat na `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` zakáže uživatelský skript `AdGuard "Asistant"` na `example.com`.

:::info Kompatibilita

- Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$extension`.
- Rules with `$extension` modifier with specific userscript name are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.13 or later.

:::

#### **`$jsinject`** {#jsinject-modifier}

Zakazuje přidávání JavaScript kódu na stránku. O pravidlech skripletů a javascriptu si můžete přečíst dále.

**Příklady**

- `@@||example.com^$jsinject` zakáže javasript na `example.com` a všech subdoménách.

##### omezení modifikátoru `$jsinject` {#jsinject-modifier-limitations}

:::info Omezení

Rules with the [`$jsinject`][jsinject-in-mv3] modifier cannot be converted to DNR in [AdGuard for Chrome MV3][ext-mv3]. We only use them in the [TSUrlFilter][] engine to disable some cosmetic rules.

:::

:::info Kompatibilita

Modifikátor `$jsinject` není podporován AdGuardem pro Chrome MV3 ([zatím][jsinject-in-mv3]) a Blokátorem obsahu AdGuard.

:::

#### **`$stealth`** {#stealth-modifier}

Zakáže modul Ochrana před sledováním (dříve Režim utajení) pro všechny odpovídající stránky a požadavky.

**Syntaxe**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` znamená určité možnosti Ochrany před sledováním deaktivované modifikátorem. Modifikátor může obsahovat libovolný počet specifických možností (viz níže) nebo žádnou. V druhém případě modifikátor vypne všechny funkce Ochrany před sledováním.

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

- `@@||example.com^$stealth` zakáže Ochranu před sledováním pro požadavky `example.com` (a subdomény) s výjimkou blokování cookies a skrytí sledovacích parametrů (viz níže).
- `@@||domain.com^$script,stealth,domain=example.com` zakáže Ochranu před sledováním pouze pro požadavky skriptů na `domain.com` (a subdoménách) na `example.com` a subdoménách.
- `@@||example.com^$stealth=3p-cookie|dpi` zakáže blokování cookies třetích stran a opatření pro oklamání DPI pro `example.com`.

:::note

Blokování cookies a odstranění sledovacích parametrů se provádí pomocí pravidel s modifikátory [`$cookie`](#cookie-modifier), [`$urltransform`](#urltransform-modifier) a [`$removeparam`](#removeparam-modifier). Pravidla výjimek, která obsahují pouze modifikátor `$stealth`, tyto věci neprovedou. Pokud chcete pro danou doménu zcela zakázat všechny funkce Ochrany před sledováním, musíte uvést všechny tři modifikátory: `@@||example.org^$stealth,removeparam,cookie`.

:::

:::caution Omezení

- Možnosti modifikátoru musí být psány malými písmeny, tj. `$stealth=DPI` budou zamítnuty.
- Možnosti modifikátoru nelze negovat, tj. `$stealth=~3p-cookie` bude zamítnuto.
- Rozšíření prohlížeče AdGuard podporuje pouze možnosti `searchqueries`, `donottrack`, `referrer`, `xclientdata`, `1p-cookie` a `3p-cookie`.

:::

:::info Kompatibilita

- Ochrana před sledováním (dříve Režim utajení) je k dispozici v AdGuardu pro Windows, AdGuardu pro macOS, AdGuardu pro Android a Rozšíření prohlížeče AdGuard pro Firefox a prohlížeče založené na Chromium, kromě AdGuardu pro Chrome Manifest MV3. Všechny ostatní produkty budou ignorovat pravidla s modifikátorem `$stealth`.
- Rules with `$stealth` modifier with specific options are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$urlblock`** {#urlblock-modifier}

Zakáže blokování všech požadavků odeslaných ze stránek, které odpovídají pravidlu a zakáže všechna pravidla [`$cookie`](#cookie-modifier).

**Příklady**

- `@@||example.com^$urlblock` — nebudou blokovány žádné požadavky odeslané z `example.com` a ze všech subdomén.

##### omezení modifikátoru `$urlblock` {#urlblock-modifier-limitations}

:::caution Omezení

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$urlblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$urlblock` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro Chrome MV3.

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

##### omezení modifikátoru `$genericblock` {#genericblock-modifier-limitations}

:::caution Omezení

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$genericblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$genericblock` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro Chrome MV3.

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

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Všechna kosmetická pravidla — nejen ta specifická — lze zakázat pomocí modifikátoru [`$elemhide`](#elemhide-modifier).

:::

:::info Kompatibilita

Pravidla s modifikátorem `$specifichide` nejsou AdGuardem pro iOS, Adguardem pro Safari a Blokátorem obsahu AdGuard podporována.

:::

### Pokročilé schopnosti {#advanced-modifiers}

Tyto modifikátory mohou zcela změnit chování základních pravidel.

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                     |        [Aplikace CoreLibs][cl-apps]         |       [AdGuard pro Chromium][ext-chr]        |      [AdGuard pro Chrome MV3][ext-mv3]       |        [AdGuard pro Firefox][ext-ff]         | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------------- |:-------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |                      ✅                      |                      ✅                       |     ✅ [*[1]](#all-modifier-limitations)      |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |                      ✅                      |                      ✅                       |  ✅ [*[2]](#badfilter-modifier-limitations)   |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |                      ✅                      |                      ✅                       |    ✅ [*[3]](#cookie-modifier-limitations)    |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$xmlprune](#xmlprune-modifier)             |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       | ✅ [*[4]](#permissions-modifier-limitations) |                      ✅                       |                      ✅                       | ✅ [*[4]](#permissions-modifier-limitations)  |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |                      ✅                      |                      ✅                       |   ✅ [*[5]](#redirect-modifier-limitations)   |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |                      ✅                      |                      ✅                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |                      ✅                      | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) | ✅ [*[7]](#removeheader-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |                      ✅                      |                      ✅                       | ✅ [*[6]](#removeparam-modifier-limitations)  |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |                      ✅                      |                      ❌                       |                      ❌                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$urltransform](#urltransform-modifier)     |                      ✅                      |                      ❌                       |                      ❌                       |                      ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$reason](#reason-modifier)                 |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [noop](#noop-modifier)                      |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "deprecated")    |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "deprecated")        |                      ✅                      |                      ✅                       |                      ✅                       |                      ✅                       |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno
- 👎 — zastaralé; stále podporovano, ale v budoucnu bude odstraněno

:::

#### **`$all`** {#all-modifier}

`$all` modifikátor je složen ze [všech modifikátorů typů obsahu](#content-type-modifiers) a [`$popup`](#popup-modifier). Např. pravidlo `||example.org^$all` se převádí na pravidlo:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

:::caution Omezení

Tento modifikátor nelze použít jako výjimku se znakem `@@`.

:::

##### omezení modifikátoru `$all` {#all-modifier-limitations}

:::caution Omezení

Vzhledem k tomu, že modifikátor `$popup` je součástí `$all`, modifikátor `$all` není podporován AdGuardem pro Chrome MV3 kcůli [`$popup` omezením modifikátoru](#popup-modifier-limitations).

:::

:::info Kompatibilita

Pravidla s modifikátorem `$all` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$badfilter`** {#badfilter-modifier}

Pravidla s modifikátorem `$badfilter` vypnou ostatní základní pravidla, na která se vztahují. To znamená, že text vypnutého pravidla by měl odpovídat textu pravidla `$badfilter` (bez modifikátoru `$badfilter`).

**Příklady**

- `||example.com$badfilter` zakáže `||example.com`
- `||example.com$image,badfilter` zakáže `||example.com$image`
- `@@||example.com$badfilter` zakáže `@@||example.com`
- `||example.com$domain=domain.com,badfilter` zakáže `||example.com$domain=domain.com`

Pravidla s modifikátorem `$badfilter` mohou zakázat další základní pravidla pro konkrétní domény, pokud splňují následující podmínky:

1. Pravidlo má modifikátor `$domain`
1. Pravidlo nemá hodnotu modifikátoru negované domény `~` v `$domain`

V takovém případě pravidlo `$badfilter` zakáže odpovídající pravidlo pro domény uvedené v pravidlech `$badfilter` i v základních pravidlech. Upozorňujeme, že [logika zástupných znaků TLD](#wildcard-for-tld) funguje i zde.

**Příklady**

- `/some$domain=example.com|example.org|example.io` je zakázána pro `example.com` pomocí `/some$domain=example.com,badfilter`
- `/some$domain=example.com|example.org|example.io` ije zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org` a `/some$domain=example.io` jsou kompletně zakázány pomocí `/some$domain=example.com|example.org|example.io,badfilter`
- `/some$domain=example.com|example.org|example.io` je kompletně zakázána pomocí `/some$domain=example.*,badfilter`
- `/some$domain=example.*` je zakázána pro `example.com` a `example.org` pomocí `/some$domain=example.com|example.org,badfilter`
- `/some$domain=example.com|example.org|example.io` NENÍ zakázána pro `example.com` pomocí `/some$domain=example.com|~example.org,badfilter`, protože hodnota modifikátoru `$domain` obsahuje negovanou doménu

##### omezení modifikátoru `$badfilter` {#badfilter-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] a rule with the `$badfilter` modifier is applied in DNR only if it fully cancels the source rule. Nemůžeme ho vypočítat, pokud je zrušeno pouze částečně. [Příklady][badfilter-in-mv3].

:::

:::info Kompatibilita

Pravidla s modifikátorem `$badfilter` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$cookie`** {#cookie-modifier}

Modifikátor `$cookie` zcela mění chování pravidla. Namísto blokování požadavku, tento modifikátor potlačí AdGuard nebo změní záhlaví `Cookie` a `Set-Cookie`.

**Vícenásobná pravidla odpovídajících jednomu požadavku**

V případě, že jednomu požadavku odpovídá více pravidel `$cookie`, použijeme každé z nich.

**Syntaxe**

```adblock
$cookie [= name[; maxAge = seconds [; sameSite = strategy ]]]
```

kde:

- **`name`** — nepovinné, řetězec nebo regulární výraz pro přiřazení názvu cookie.
- **`seconds`** — počet sekund aktuálního času pro posunutí data vypršení platnosti souboru cookie.
- **`strategy`** — řetězec pro strategii [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite), která se má použít na cookies.

Např.

```adblock
||example.org^$cookie=NAME;maxAge=3600;sameSite=lax
```

pokaždé, když AdGuard narazí na cookie s názvem `NAME` v požadavku na `example.org`, provede následující kroky:

- Nastaví datum vypršení platnosti na aktuální čas plus `3600` sekund
- Přiměje cookie použít "laxní" strategii [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

**Uvození speciálních znaků**

Pokud je pro porovnání použit regulární výraz `name`, musí být dva znaky uvozeny: čárka `,` a znak dolaru `$`. Každý z nich označte zpětným lomítkem `\`. Např. uvozená čárka vypadá takto: `\,`.

**Příklady**

- `||example.org^$cookie` blokuje **všechny** soubory cookie nastavené doménou `example.org`; to je ekvivalent nastavení `maxAge=0`
- `$cookie=__cfduid` blokuje všude soubory cookie CloudFlare
- `$cookie=/__utm[a-z]/` blokuje všude soubory cookie Google Analytics
- `||facebook.com^$third-party,cookie=c_user` brání Facebooku ve sledování, i když jste přihlášeni

Existují dva způsoby, jak deaktivovat pravidla `$cookie`: primární metoda zahrnuje použití výjimky označené `@@` — `@@||example.org^$cookie`. Alternativní metoda využívá výjimku `$urlblock` (také zahrnutou pod aliasem výjimky `$document` — `$elemhide,jsinject,content,urlblock,extension`). Funguje to takto:

- `@@||example.org^$cookie` odblokuje všechny soubory cookie nastavené doménou `example.org`
- `@@||example.org^$urlblock` odblokuje všechny cookies nastavené doménou `example.org` a zakáže blokování všech požadavků odeslaných z `example.org`
- `@@||example.org^$cookie=concept` odblokuje jeden soubor cookie s názvem `concept`
- `@@||example.org^$cookie=/^_ga_/` odblokuje každý soubor cookie, který odpovídá regulárnímu výrazu

##### omezení modifikátoru `$cookie` {#cookie-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] we delete cookies in 2 ways: from `content-script` side (to which we have access) and from `onBeforeSendHeaders` listener. Vzhledem k tomu, že `onBeforeSendHeaders` a další posluchači již nejsou blokováni, je nemůžeme ve všech případech smazat. Pomocí [tohoto testu](https://testcases.agrd.dev/Filters/cookie-rules/test-cookie-rules) můžete zkontrolovat, zda pravidlo funguje.

:::

:::caution Omezení

Pravidla `$cookie` podporují tři typy modifikátorů: `$domain`, `$~domain`, `$important`, `$third-party`, `$~third-party`, `strict-third-party` a `strict-first-party`.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$cookie` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

#### **`$csp`** {#csp-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, pravidlo nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

:::info

Pro použití tohoto typu pravidel je nutné mít základní znalosti o vrstvě zabezpečení [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

:::

U požadavků, které odpovídají pravidlu `$csp`, posílíme zásady zabezpečení odezvy posílením zásad zabezpečení obsahu, podobně jako u zásad zabezpečení obsahu modifikátoru obsahu `$csp`. Pravidla `$csp` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Mohou je ovlivnit **pouze výjimky na úrovni dokumentu** (viz část s příklady), ale žádná jiná základní pravidla.

**Vícenásobná pravidla odpovídajících jednomu požadavku**

V případě, že jednomu požadavku odpovídá více pravidel `$csp`, použijeme každé z nich.

**Syntaxe**

Syntaxe hodnoty `$csp` je podobná syntaxi záhlaví Content Security Policy.

Hodnota `$csp` může být v případě pravidel pro výjimky prázdná. Viz níže uvedený oddíl s příklady.

**Příklady**

- `||example.org^$csp=frame-src 'none'` blokuje všechny obrázky na example.org a jejích subdoménách.
- `@@||example.org/page/*$csp=frame-src 'none'` zakáže všechna pravidla s modifikátorem `$csp` přesně odpovídajícím příznakem `frame-src 'none'` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo.
- `@@||example.org/page/*$csp` zakáže všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.
- `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` zakáže vložené skripty na všech stránkách odpovídajících vzoru pravidla.
- `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$csp` na všech stránkách odpovídajících vzoru pravidla.

:::caution Omezení

- V hodnotě `$csp` je zakázáno několik znaků: `,`, `$`.
- `$csp` pravidla podporují tři typy modifikátorů: `$domain`, `$important`, `$subdocument`.
- Pravidla s direktivami `report-*` jsou považována za neplatná.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$csp` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

#### **`$hls`** {#hls-modifier}

Pravidla `$hls` upravují odpověď na shodný požadavek. Jsou určena k pohodlnému odstraňování segmentů ze seznamů stop [HLS playlists (RFC 8216)](https://datatracker.ietf.org/doc/html/rfc8216).

:::note

Slovo "segment" v tomto dokumentu znamená buď "mediální segment" nebo "seznam skladeb" jako součást "hlavního seznamu skladeb": pravidla `$hls` nerozlišují mezi "hlavním seznamem skladeb" a "mediálním seznamem skladeb".

:::

**Syntaxe**

- `||example.org^$hls=urlpattern` odstraní segmenty, jejichž adresa URL odpovídá vzoru adresy URL `urlpattern`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\` uvnitř `urlpattern`.
- `||example.org^$hls=/regexp/options` odstraní segmenty, kde URL nebo jeden ze znaků (u určitých možností, pokud jsou přítomny) odpovídá regulárnímu výrazu `regexp`. K dispozici jsou tyto možnosti `options`:
    - `t` — namísto testování adresy URL segmentu otestujte každý znak segmentu podle regulárního výrazu. Segment se shodným znakem je odstraněn;
    - `i` — regulární výraz nerozlišuje velká a malá písmena.

Znaky `/`, `$` a `,` musí být uvnitř `regexp` uvozeny pomocí `\`.

**Výjimky**

Základní výjimky URL nesmí zakázat pravidla s modifikátorem `$hls`. Lze je zakázat, jak je popsáno níže:

- `@@||example.org^$hls` zakáže všechna pravidla `$hls` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$hls=text` zakáže všechna pravidla `$hls` s hodnotou modifikátoru `$hls` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

:::tip

Pravidla `$hls` lze také zakázat pravidly výjimek `$document`, `$content` a `$urlblock`.

:::

:::note

Když vícenásobná pravidla `$hls` odpovídají stejnému požadavku, jejich účinek je kumulativní.

:::

**Příklady**

- `||example.org^$hls=\/videoplayback^?*&source=dclk_video_ads` odstraní všechny segmenty se shodnou URL.
- `||example.org^$hls=/\/videoplayback\/?\?.*\&source=dclk_video_ads/i` dosáhne víceméně téhož pomocí regulárního výrazu namísto vzoru URL.
- `||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t` odstraní všechny segmenty, které mají odpovídající znak.

**Anatomie seznamu stop HLS**

Stručné shrnutí [specifikace](https://datatracker.ietf.org/doc/html/rfc8216):

1. Seznam stop HLS je kolekce textových řádků
1. Řádek může být prázdný, komentář (začíná `#`), znak (také začíná `#`, lze jej rozpoznat pouze podle názvu) nebo URL
1. Řádek URL se nazývá "segment"
1. Znaky se mohou vztahovat na jeden segment, tj. první řádek adresy URL za znakem, na všechny segmenty následující za znakem až do znaku se stejným názvem nebo na celý seznam skladeb

Některé specifické body týkající se fungování pravidel `$hls`:

1. Při odstranění segmentu se odstraní také všechny znaky, které se vztahují pouze k tomuto segmentu
1. Pokud se znak vztahuje na více segmentů a všechny tyto segmenty jsou odstraněny, je odstraněna i znak
1. Protože neexistuje způsob, jak rozpoznat různé druhy znaků podle syntaxe, rozpoznáváme všechny znaky uvedené v RFC a některé nestandardní znaky, se kterými jsme se setkali v praxi. Všechny řádky začínající na `#`. Ty, které nejsou rozpoznány jako znak, jsou předány bez úprav a nejsou porovnávány s pravidly
1. Značky nebudou přiřazeny, pokud se vztahují na celý seznam stop a k jejich odstranění nelze použít pravidla `$hls`, protože tyto typy pravidel jsou určeny pro odstraňování segmentů. Pokud víte, co děláte, můžete pomocí pravidel `$replace` odstranit nebo přepsat pouze jeden znak ze seznamu skladeb

**Příklad transformace provedené podle pravidel:**

<details>
<summary>Původní odezva</summary>

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
<summary>Použitá pravidla</summary>

```adblock
||example.org^$hls=preroll
||example.org^$hls=/#UPLYNK-SEGMENT:.*\,ad/t
```

</details>

<details>
<summary>Modifikovaná odpověď</summary>

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

- Pravidla s modifikátorem `$hls` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
- `$hls` pravidla jsou kompatibilní pouze s těmito modifikátory: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` a `$xmlhttprequest`.
- `$hls` pravidla platí pouze pro seznamy stop HLS, což je text kódovaný v UTF-8 začínající řádkem `#EXTM3U`. Jakákoli jiná odpověď nebude těmito pravidly upravena.
- Pravidla `$hls` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$hls` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$inline-script`** {#inline-script-modifier}

Modifikátor `$inline-script` je určen k blokování in-line JavaScriptu vloženého do webové stránky pomocí zásad zabezpečení obsahu (CSP). Zlepšuje zabezpečení a soukromí tím, že zabraňuje použití in-line reklam nebo potenciálně škodlivých skriptů. Pravidlo `||example.org^$inline-script` se převádí na syntaxi pravidel CSP:

```adblock
||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$inline-font`** {#inline-font-modifier}

Modifikátor `$inline-font` je určen k blokování in-line fontů vložených do webové stránky pomocí zásad zabezpečení obsahu (CSP). Zlepšuje zabezpečení a soukromí tím, že zabraňuje použití in-line fontů, které by mohly být použity ke shromažďování dat a čtení digitálních otisků. Pravidlo `||example.org^$inline-font` se převádí na syntaxi pravidel CSP:

```adblock
||example.org^$csp=font-src 'self' 'unsafe-eval' http: https: data: blob: mediastream: filesystem:
```

#### **`$jsonprune`** {#jsonprune-modifier}

Pravidla `$jsonprune` upravují odpověď na odpovídající požadavek odstraněním položek JSON, které odpovídají upravenému výrazu [JSONPath](https://goessner.net/articles/JsonPath/). Nemění odpovědi, které nejsou platnými dokumenty JSON.

In AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.11 or later, `$jsonprune` also supports modifying JSONP (padded JSON) documents.

**Syntaxe**

- `||example.org^$jsonprune=expression` odstraní z odpovědi položky, které odpovídají upravenému výrazu JSONPath `expression`.

Vzhledem ke způsobu zpracování pravidel musí být znaky `$` a `,` uvnitř `výrazu` uvozeny pomocí `\`.

Upravená syntaxe JSONPath má oproti původní následující rozdíly:

1. Výrazy skriptů nejsou podporovány
1. Podporované výrazy filtrů jsou:
    - `?(has <key>)` — "true", pokud má aktuální objekt zadaný klíč
    - `?(key-eq <key> <value>)` — "true", pokud má aktuální objekt zadaný klíč a jeho hodnota se rovná zadané hodnotě
    - `?(key-substr <key> <value>)` — "true", pokud je zadaná hodnota podřetězcem hodnoty zadaného klíče aktuálního objektu
1. Mezery mimo řetězce s dvojitými nebo jednoduchými uvozovkami nemají žádný význam
1. Lze použít řetězce s dvojitými i jednoduchými uvozovkami
1. Výrazy končící na `..` nejsou podporovány
1. V hranatých závorkách lze zadat vícero dílků pole

Existují různé online nástroje, které usnadňují práci s výrazy JSONPath:

https://www.site24x7.com/tools/jsonpath-finder-validator.html https://jsonpathfinder.com/ https://jsonpath.com/

Mějte však na paměti, že všechny implementace JSONPath mají jedinečné vlastnosti a jsou vzájemně nekompatibilní.

**Výjimky**

Základní výjimky URL nesmí zakázat pravidla s modifikátorem `$jsonprune`. Lze je zakázat, jak je popsáno níže:

- `@@||example.org^$jsonprune` zakáže všechna pravidla `$jsonprune` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$jsonprune=text` zakáže všechna pravidla `$jsonprune` s hodnotou modifikátoru `$jsonprune` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

Pravidla `$jsonprune` lze také zakázat pravidly výjimek `$document`, `$content` a `$urlblock`.

:::note

Když vícenásobná pravidla `$jsonprune` odpovídají stejnému požadavku, jsou seřazena v lexikografickém pořadí, první pravidlo je aplikováno na původní odpověď a každé ze zbývajících pravidel je aplikováno na výsledek použití předchozího.

:::

**Příklady**

- `||example.org^$jsonprune=\$..[one\, "two three"]` odstraní všechny výskyty klíčů "one" a "two three" kdekoli v dokumentu JSON.

<details>
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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
<summary>Vstup</summary>

```json
{
    "a": {"b": {"c": {"Some key": "Some value"}, "d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Some value"}, {"Some key": "Other value"}]}
}
```

</details>

<details>
<summary>Výstup</summary>

```json
{
    "a": {"b": {"d": {"Some key": "Other value"}}},
    "e": {"f": [{"Some key": "Other value"}]}
}
```

</details>

**Vnořené výrazy JSONPath**

In AdGuard for Windows, Mac and Android with [CoreLibs][] v1.11 or later, JSONPath expressions may be used as keys in filter expressions.

- `||example.org^$jsonprune=\$.elems[?(má "\$.abc")]` odstraní všechny potomky `elems`, které mají vlastnost volitelnou výrazem JSONPath `$.abc`.

<details>
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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
<summary>Vstup</summary>

```json
{
    "elems": [
        {
            "a": {"b": {"c": 123}}
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

- `$jsonprune` pravidla jsou kompatibilní pouze s těmito modifikátory: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` a `$xmlhttprequest`.
- Pravidla `$jsonprune` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$jsonprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.10 or later.

:::

#### **`$xmlprune`** {#xmlprune-modifier}

Pravidla `$xmlprune` upravují odpověď na odpovídající požadavek odstraněním položek XML, které odpovídají upravenému výrazu[XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/). Výraz musí vrátit [node-set](https://www.w3.org/TR/1999/REC-xpath-19991116/#node-sets). `$xmlprune` pravidla neupravují odpovědi, které nejsou dobře formulovanými dokumenty XML.

**Syntaxe**

- `||example.org^$xmlprune=expression` odstraní z odpovědi položky, které odpovídají výrazu XPath `expression`.

Vzhledem ke způsobu zpracování pravidel musí být znaky `$` a `,` uvnitř `výrazu` uvozeny pomocí `\`.

**Výjimky**

Základní výjimky URL nesmí zakázat pravidla s modifikátorem `$xmlprune`. Lze je zakázat, jak je popsáno níže:

- `@@||example.org^$xmlprune` zakáže všechna pravidla `$xmlprune` pro odpovědi z URL odpovídajících `||example.org^`.
- `@@||example.org^$xmlprune=text` zakáže všechna pravidla `$xmlprune` s hodnotou modifikátoru `$xmlprune` shodným s `text` pro odpovědi z URL odpovídajících `||example.org^`.

Pravidla `$xmlprune` lze také zakázat pravidly výjimek `$document`, `$content` a `$urlblock`.

:::note

Když je více pravidel `$xmlprune` odpovídá stejnému požadavku, jsou použita v lexikografickém pořadí.

:::

**Příklady**

- `||example.org^$xmlprune=/bookstore/book[position() mod 2 = 1]` odstraní z knihkupectví knihy s lichými čísly.

<details>
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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
<summary>Vstup</summary>

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
<summary>Výstup</summary>

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

- `$xmlprune` pravidla jsou kompatibilní pouze s těmito modifikátory: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` a `$xmlhttprequest`.
- Pravidla `$xmlprune` neplatí, pokud je velikost původní odpovědi větší než 10 MB.

:::

:::info Kompatibilita

Rules with the `$xmlprune` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$network`** {#network-modifier}

Jedná se v podstatě o pravidla typu brány Firewall, která umožňují plně zablokovat nebo odblokovat přístup na zadanou vzdálenou adresu.

1. Pravidla `$network` odpovídají **pouze IP adresám**! Nelze je použít k zablokování nebo odblokování přístupu k doméně.
2. Chcete-li se shodovat s adresou IPv6, musíte použít sbalenou syntaxi, např. `[2001:4860:4860::8888]$network` namísto `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Pravidlo seznamu povolených `$network` způsobí, že AdGuard bude obcházet data odpovídajícího koncového bodu, proto nebude provádět žádné další filtrování.
4. Pokud část IP začíná a končí znakem `/`, je považována za regulární výraz.

Pro lepší pochopení regulárních výrazů doporučujeme seznámit se s tímto [článkem](#regexp-support).

:::caution Omezení

Modifikátor `$network` lze v pravidlech použít pouze společně s modifikátory `$app` a `$important`, nikoli s žádnými jinými modifikátory.

:::

**Příklady**

- `174.129.166.49:3478^$network` blokuje přístup k `174.129.166.49:3478` (ale ne k `174.129.166.49:34788`).
- `[2001:4860:4860::8888]:443^$network` blokuje přístup k `[2001:4860:4860::8888]:443`.
- `174.129.166.49$network` blokuje přístup k `174.129.166.49:*`.
- `@@174.129.166.49$network` způsobí, že AdGuard bude koncovému bodu předávat data. Žádná jiná pravidla se neuplatňují.
- `/.+:3[0-9]{4}/$network` blokuje přístup k libovolnému portu od 30000 do 39999.
- `/8.8.8.(:?8|4)/$network` blokuje přístup k `8.8.8.8` a `8.8.8.4`.

:::info Kompatibilita

Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$network`.

:::

#### **`$permissions`** {#permissions-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, pravidlo nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

:::info

Pro použití tohoto typu pravidel je nutné mít základní znalosti o vrstvě zabezpečení [Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy).

:::

U požadavků, které odpovídají pravidlu `$permissions`, AdGuard posiluje zásady funkcí odpovědi přidáním dalších zásad oprávnění, které se rovnají obsahu modifikátoru `$permissions`. Pravidla `$permissions` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Mohou je ovlivnit **pouze výjimky na úrovni dokumentu** (viz část s příklady), ale žádná jiná základní pravidla.

**Syntaxe**

Hodnota syntaxe `$permissions` je shodná se [syntaxí](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) záhlaví `Permissions-Policy` s následujícími výjimkami:

1. Čárka, která odděluje více prvků **MUSÍ být uvozena** – viz příklady níže.
2. Místo čárky lze pro oddělení funkcí použít znak `(|)`.

Seznam dostupných direktiv je k dispozici v [Zásadách oprávnění](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

Hodnota `$permissions` může být v případě pravidel pro výjimky prázdná — viz příklady níže.

**Příklady**

- `||example.org^$permissions=autoplay=()` zakáže automatické přehrávání médií vyžádaných prostřednictvím rozhraní `HTMLMediaElement` v rámci `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` zakáže všechna pravidla s modifikátorem `$permissions` přesně odpovídajícím příznakem `autoplay=()` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo. Je důležité si uvědomit, že pravidlo výjimky se projeví pouze v případě **přesné shody hodnot**. Pokud například chcete zakázat pravidlo `$permissions=a=()\,b=()`, potřebujete pravidlo výjimky `@@$permissions=a=()\,b=()` a **ne** `@@$permissions=b=()\,a=()` **ani** `@@$permissions=b=()`, protože `b=()\,a=()` nebo `b=()` neodpovídá `a=()\,b=()`.
- `@@||example.org/page/*$permissions` zakáže všechna pravidla `$permissions` na všech stránkách odpovídajících vzoru pravidla.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` zakáže použití API pro přístup k úložišti pro vyžádání přístupu k nerozděleným souborům cookies a používání vstupních zařízení videa napříč `example.org` a `example.com`.
- `$domain=example.org|example.com,permissions=storage-access=()|camera=()` dělá totéž — místo čárky lze k oddělení funkcí použít `|`.
- `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$permission` na všech stránkách odpovídajících vzoru pravidla.

:::note

Pravidla `$permissions` jsou účinná pouze pro požadavky hlavního rámce a vedlejšího rámce. To znamená, že se použijí při načtení stránky nebo iframe.

:::

:::note

Pokud existuje více pravidel `$permissions`, která odpovídají stejnému požadavku, bude do odpovědi přidáno více záhlaví `Permissions-Policy` pro každé pravidlo s jejich hodnotou `$permissions`. Pokud tedy máte dvě pravidla: `||example.org^$permissions=autoplay=()` a `||example.org^$permissions=geolocation=()\,camera=()`, která odpovídají stejnému požadavku, bude odpověď obsahovat dvě záhlaví `Permissions-Policy`: `autoplay=()` a `geolocation=()\,camera=()`.

:::

##### omezení modifikátoru `$permissions` {#permissions-modifier-limitations}

:::caution Omezení

Firefox ignoruje záhlaví `Permissions-Policy`. Další informace naleznete v [tomto hlášení](https://bugzilla.mozilla.org/show_bug.cgi?id=1694922).

:::

:::caution Omezení

1. Zakázané znaky v `$permissions` hodnotě: `$`.
2. `$permissions` je kompatibilní s omezenou sadou modifikátorů: `$domain`, `$important`, `$subdocument` a [modifikátory typu obsahu](#content-type-modifiers).
3. Pravidla `$permissions`, která neobsahují žádné modifikátory typu obsahu [](#content-type-modifiers), budou odpovídat pouze požadavkům, jejichž typem obsahu je `document`.

:::

:::info Kompatibilita

- Rules with the `$permissions` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.
- Pipe separator `|` instead of escaped comma is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.14 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

#### **`$redirect`** {#redirect-modifier}

AdGuard je schopen přesměrovat webové požadavky na místní "zdroj".

**Syntaxe**

AdGuard používá stejnou syntaxi pravidel filtrování jako uBlock Origin. Je také kompatibilní s modifikátorem ABP `$rewrite=abp-resource`.

`$redirect` je modifikátor pro [základní pravidla filtrování](#basic-rules), takže pravidla s tímto modifikátorem podporují všechny ostatní základní modifikátory, jako jsou `$domain`, `$third-party`, `$script` atd.

Hodnota modifikátoru `$redirect` musí být název zdroje, který bude použit pro přesměrování.

##### Zakázání pravidel `$redirect`

- `||example.org/script.js$script,redirect=noopjs` — toto pravidlo přesměruje všechny požadavky na `example.org/script.js` na zdroj s názvem `noopjs`.
- `||example.org/test.mp4$media,redirect=noopmp4-1s` — toto pravidlo přesměruje všechny požadavky na `example.org/test.mp4` na zdroj s názvem `noopmp4-1s`.
- `@@||example.org^$redirect` zakáže všechna pravidla `$redirect` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$redirect=nooptext` zakáže všechna pravidla s `$redirect=nooptext` pro všechny požadavky, které odpovídají `||example.org^`.

Další informace o přesměrování a použití jsou k dispozici [na GitHubu](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Priority pravidel `$redirect` {#redirect-rule-priorities}

Pravidla `$redirect` mají vyšší prioritu než běžná základní pravidla blokování. To znamená, že pokud existuje základní pravidlo blokování, pravidlo `$redirect` jej přepíše. Pravidla seznamu povolených se znakem `@@` mají vyšší prioritu než pravidla `$redirect`. Pokud se základní pravidlo s modifikátorem `$important` a pravidlem `$redirect` shoduje se stejnou adresou URL, je druhé pravidlo přepsáno, pokud není též označeno jako `$important`.

<!-- Please do not replace `>` by `→` -->

**Ve zkratce: `$important` > `@@` > `$redirect` > `basic rules`.**

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

##### omezení modifikátoru `$redirect` {#redirect-modifier-limitations}

:::caution Omezení

In [AdGuard for Chrome MV3][ext-mv3] allowlist rules with `$redirect` are not supported.

:::

:::info Kompatibilita

- Rules with `$redirect` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], and [AdGuard for Safari][ext-saf] .
- `$redirect` v uBlock Origin podporuje zadané priority, např. `$redirect=noopjs:42`. AdGuard to nepodporuje a místo toho pouze zahodí prioritní postfix.

:::

#### **`$redirect-rule`** {#redirect-rule-modifier}

Toto je v podstatě alias [`$redirect`](#redirect-modifier), protože má stejné hodnoty "přesměrování" a logika je téměř podobná. Rozdíl je v tom, že `$redirect-rule` se použije pouze v případě, kdy je cílový požadavek blokován jiným základním pravidlem.

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

Negace `$redirect-rule` funguje úplně stejně jako u běžných pravidel `$redirect`. Ještě více než to, bude `@@||example.org^$redirect` negovat jak pravidla `$redirect`, tak `$redirect-rule`.

**Příklady**

```adblock
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

V tomto případě budou pouze požadavky na `example.org/script.js` "přesměrovány" na `noopjs`. Všechny ostatní požadavky na `example.org` zůstanou nedotčeny.

:::info Kompatibilita

Rules with `$redirect-rule` modifier are not supported by [AdGuard Content Blocker][and-cb], [AdGuard for iOS][ios-app], [AdGuard for Safari][ext-saf], and [AdGuard for Chrome MV3][ext-mv3]. [Diskuse o přidání podpory pro pravidla `$redirect-rule` v rozšířeních Chrome MV3](https://github.com/w3c/webextensions/issues/493) je aktuálně otevřená.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

Tato pravidla umožňují přepsat [zásady odkazovačů](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) stránky. V odezvách na shodné požadavky budou všechny hlavičky `Referrer-Policy` nahrazeny jedinou hlavičkou s hodnotou rovnou hodnotě modifikátoru shodného pravidla. Pokud odezva obsahuje dokument HTML se značkou `<meta name="referrer"...`, atribut `content` značky bude také nahrazen hodnotou modifikátoru.

Pravidlo výjimky s hodnotou modifikátoru zakáže pravidlo blokování se stejnou hodnotou modifikátoru. Pravidlo výjimky bez hodnoty modifikátoru zakáže všechna odpovídající pravidla zásad odkazování.

Pokud požadavek odpovídá více pravidlům `$referrerpolicy`, která nejsou zakázána výjimkami, použije se pouze jedno z nich (není uvedeno, které). `$referrerpolicy` pravidla bez specifikovaných [modifikátorů typu obsahu](#content-type-modifiers) platí pro `$document` a `$subdocument` typy obsahu.

**Příklady**

- `||example.com^$referrerpolicy=unsafe-url` přepíše zásady odkazování pro `example.com` pomocí `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` zakáže předchozí pravidlo.
- `@@||example.com/abcd.html^$referrerpolicy` zakáže všechna pravidla `$referrerpolicy` na `example.com/abcd.html`.

:::info Kompatibilita

Rules with the `$referrerpolicy` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.12 or later.

:::

#### **`$removeheader`** {#removeheader-modifier}

Pravidla s modifikátorem `$removeheader` jsou určena k odstranění záhlaví z požadavků a odpovědí HTTP. Původní motivací pro tento typ pravidla je možnost zbavit se záhlaví `Refresh`, které se často používá k přesměrování uživatelů na nežádoucí místo. To však není jediný případ, kdy může být tento modifikátor užitečný.

Stejně jako `$csp`, `$redirect`, `$removeparam` a `$cookie` i tento modifikátor existuje samostatně, pravidla s ním nezávisí na běžných základních pravidlech, tj. pravidelná výjimka nebo pravidla blokování jej neovlivní. Ve výchozím nastavení ovlivňuje pouze záhlaví odpovědí. Můžete jej však také změnit tak, aby odstraňoval hlavičky z požadavků HTTP.

**Syntaxe**

**Základní syntaxe**

- `||example.org^$removeheader=header-name` odstraní **odpověď** záhlaví s názvem `header-name`
- `||example.org^$removeheader=request:header-name` odstraní **požadavek** záhlaví s názvem `header-name`

`$removeheader` nerozlišuje velká a malá písmena, doporučujeme vždy používat malá písmena.

**Negace `$removeheader`**

Tento typ pravidel funguje v podstatě stejně jako u modifikátorů `$csp` a `$redirect`.

K negaci `$removeheader` použijte `@@`:

- `@@||example.org^$removeheader` neguje **všechna** pravidla `$removeheader` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$removeheader=header` neguje všechna pravidla s `$removeheader=header` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

Pravidla `$removeheader` lze také zakázat pravidly výjimek `$document` a `$urlblock`. Základní pravidla pro výjimky bez modifikátorů to však nedělají. Např. `@@||example.com^` nezakáže `$removeheader=p` pro požadavky na `example.com`, ale `@@||example.com^$urlblock` ano.

:::note

V případě, že jednomu požadavku odpovídá více pravidel `$removeheader`, použijeme každé z nich.

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

##### omezení modifikátoru `$removeheader` {#removeheader-modifier-limitations}

:::caution Omezení

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Pravidla negace a seznamu povolených nejsou podporována.
- Skupina podobných `$removeheader` pravidel bude sloučena do jednoho dekorativního pravidla. Např:

    ```bash
    ||testcases.adguard.com$xmlhttprequest,removeheader=p1case1
    ||testcases.adguard.com$xmlhttprequest,removeheader=P2Case1
    $xmlhttprequest,removeheader=p1case2
    $xmlhttprequest,removeheader=P2case2
    ```

    je převedeno na

    ```bash
    [
      {
        "id": 1,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case1",
                "operation": "remove"
            },
            {
                "header": "P2Case1",
                "operation": "remove"
            },
          ]
        },
        "condition": {
          "urlFilter": "||testcases.adguard.com",
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      },
      {
        "id": 2,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            {
                "header": "p1case2",
                "operation": "remove"
            },
            {
                "header": "P2case2",
                "operation": "remove"
            }
          ]
        },
        "condition": {
          "resourceTypes": [
            "xmlhttprequest"
          ]
        }
      }
    ]
    ```

:::

:::caution Omezení

Tento typ pravidel lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

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

1. `$removeheader` pravidla jsou kompatibilní pouze s těmito modifikátory: `$domain`, `$third-party`, `$strict-third-party`, `$strict-first-party`, `$app`, `$important`, `$match-case` a [modifikátory typu obsahu](#content-type-modifiers) jako `$script` a `$stylesheet`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$removeheader` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` je alias `$removeparam`. Protože je `$queryprune` zastaralý, nepoužívejte jej a místo něj použijte `$removeparam`.

:::

Pravidla s modifikátorem `$removeparam` jsou určena k odstranění parametrů dotazu z požadavků adres URL. Upozorňujeme, že tato pravidla se vztahují pouze na požadavky `GET`, `HEAD`, `OPTIONS` a někdy `POST`.

**Syntaxe**

**Základní syntaxe**

- `$removeparam=param` odstraní parametr dotazu s názvem `param` z URL libovolného požadavku, např. požadavek na `http://example.com/page?param=1&another=2` bude transformován na `http://example.com/page?another=2`.

**Regulární výrazy**

Regulární výrazy můžete použít také k porovnání parametrů dotazu a/nebo jejich hodnot:

- `$removeparam=/regexp/[options]` — odstraní parametry dotazu, které odpovídají regulárnímu výrazu `regexp` z adres URL jakéhokoli požadavku. Na rozdíl od základní syntaxe to znamená *"odebrat parametry dotazu normalizované na řetězec `name=value`, který odpovídá regulárnímu výrazu `regexp` "*. `[options]` zde je seznam možností regulárních výrazů. V současné době je jedinou podporovanou možností `i`, díky čemuž se nerozlišují malá a velká písmena.

**Uvození speciálních znaků**

Speciální znaky by měly být v pravidle URL zakódovány, aby správně odpovídaly textu URL.

Například, pro odstranění `?$param=true` byste měli použít pravidlo `$removeparam=%24param`.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Mezery a čárky by měly být také zakódovány v adrese URL, jinak pravidlo nebude odpovídat adrese URL. Nicméně, znaky `.`, `-`, `_` a `~` by měly být používány tak, jak jsou, protože nejsou označeny jako rezervované znaky v kódování URL.

:::

Nezapomeňte v regulárních výrazech používat uvození speciálních znaků, jako je například `.`. K tomu použijte znak `\`. Např. uvozená tečka by měla vypadat takto: `\.`.

:::note

Pravidla typu regexp se vztahují na název i hodnotu parametru. Pro minimalizaci chyb je bezpečnější začínat každý regexp znakem `/^`, pokud se nezaměřujete konkrétně na hodnoty parametrů.

:::

**Odebrat všechny parametry dotazu**

Chcete-li odebrat všechny parametry dotazu, zadejte samostatně `$removeparam`:

- `||example.org^$removeparam` — odstraní všechny parametry dotazu z adres URL odpovídajících `||example.org^`.

**Inverze**

Pro použití inverze použijte `~`:

- `$removeparam=~param` — odstraní všechny parametry dotazu s názvem odlišným od `param`.
- `$removeparam=~/regexp/` — odstraní všechny parametry dotazu, které neodpovídají regulárnímu výrazu `regexp`.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Pokud se `~` neobjeví na začátku pravidla, považuje se za symbol v textu.

:::

**Negace `$removeparam`**

Tento druh pravidel funguje v podstatě stejně jako u modifikátorů [`$csp`](#csp-modifier) a [`$redirect`](#redirect-modifier).

K negaci `$removeparam` použijte `@@`:

- `@@||example.org^$removeparam` neguje všechna pravidla `$removeparam` pro URL adresy, které odpovídají `||example.org^`.
- `@@||example.org^$removeparam=param` neguje všechna pravidla s `$removeparam=param` pro jakýkoliv požadavek, který odpovídá `||example.org^`.
- `@@||example.org^$removeparam=/regexp/` neguje všechna pravidla s `$removeparam=/regexp/` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

**Vícenásobná pravidla odpovídajících jednomu požadavku**

V případě, že jednomu požadavku odpovídá více pravidel `$removeparam`, bude každé z nich použito jedno po druhém.

**Příklady**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

S těmito pravidly bude z jakéhokoli požadavku odstraněno [UTM parametrů](https://en.wikipedia.org/wiki/UTM_parameters), kromě toho, že požadavky na `example.com` nebudou odstraněny vůbec, např. `http://google.com/page?utm_source=s&utm_referrer= fb.com&utm_content=img` bude transformováno na `http://google.com/page`, ale `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` nebude ovlivněno pravidlem blokování.

- `$removeparam=utm_source` odstraní parametr dotazu `utm_source` ze všech požadavků.

- `$removeparam=/utm_.*/` odstraní všechny parametry `utm_* query` z URL libovolného požadavku, např. požadavek na `http://example.com/page?utm_source=test` bude transformován na `http://example.com/page`.

- `$removeparam=/^utm_source=campaign$/` odstraní parametr dotazu `utm_source` s hodnotou rovnou `campaign`. Nemá vliv na ostatní parametry `utm_source`.

**Negace pravidla `$removeparam` a jeho nahrazení jiným pravidlem**

```adblock
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

Díky těmto pravidlům budou ze všech požadavků odstraněny identifikátory kliknutí Google, Yandex a Facebook. Existuje jedna výjimka: Z požadavků na example.com nebude odstraněno Google Click ID (gclid).

**Negace pro všechny parametry `$removeparam`**

```adblock
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

Díky těmto pravidlům budou zadané parametry UTM odstraněny ze všech požadavků s výjimkou požadavků na `example.org`.

Pravidla `$removeparam` lze také zakázat pravidly výjimek `$document` a `$urlblock`. Základní pravidla pro výjimky bez modifikátorů to však nedělají. Např. `@@||example.com^` nezakáže `$removeparam=p` pro požadavky na **example.com**, ale `@@||example.com^$urlblock` ano.

##### omezení modifikátoru `$removeparam` {#removeparam-modifier-limitations}

:::caution Omezení

[AdGuard for Chrome MV3][ext-mv3] has some limitations:

- Regulární výrazy, negace a pravidla seznamu povolených nejsou podporovány.
- Skupina podobných `$removeparam` budou sloučena do jedné. Příklad:

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

1. Pravidla s modifikátorem `$removeparam` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
1. Pravidla `$removeparam` jsou kompatibilní se [základními modifikátory](#basic-rules-basic-modifiers), [modifikátory typu obsahu](#content-type-modifiers) a s modifikátory `$important` a `$app`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.
1. Pravidla `$removeparam`, která neobsahují žádné [modifikátory typu obsahu](#content-type-modifiers), budou odpovídat pouze požadavkům, jejichž typem obsahu je `document`.

:::

:::info Kompatibilita

- Rules with `$removeparam` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.7 or later, and AdGuard Browser Extension v3.6 or later.
- `$removeparam` syntax for regular expressions is supported AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with [CoreLibs][] v1.8 or later, and AdGuard Browser Extension v4.0 or later.
- `POST` request types are supported only by AdGuard for Windows, Mac, and Android with [CoreLibs][] v1.10 or later, and AdGuard Browser Extension with [TSWebExtension][] v0.4.6 or later.

:::

#### **`$replace`** {#replace-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý, pravidlo požadavek nezablokuje. Namísto toho bude odpověď upravena.

K použití modifikátoru `$replace` budete potřebovat určité znalosti regulárních výrazů.

**Funkce**

- Pravidla `$replace` platí pro jakoukoli textovou odpověď, ale neplatí pro binární (`media`, `image`, `object` atd.).
- Pravidla `$replace` neplatí, pokud je velikost původní odpovědi větší než 10 MB.
- Pravidla `$replace` mají vyšší prioritu než ostatní základní pravidla **včetně** pravidel výjimek. Pokud tedy požadavek odpovídá dvěma různým pravidlům, z nichž jedno má modifikátor `$replace`, použije se toto pravidlo.
- Pravidla výjimek na úrovni dokumentu s modifikátory `$content` nebo `$document` zakáží pravidla `$replace` pro požadavky, které jim odpovídají.
- Ostatní pravidla výjimek na úrovni dokumentu (`$generichide`, `$elemhide` nebo modifikátory `$jsinject`) se uplatňují vedle pravidel `$replace`. To znamená, že můžete upravit obsah stránky pomocí pravidla `$replace` a zároveň zde zakázat kosmetická pravidla.

Hodnota `$replace` může být v případě pravidel pro výjimky prázdná. Další informace naleznete v části Příklady.

**Vícenásobná pravidla odpovídajících jednomu požadavku**

V případě, že jednomu požadavku odpovídá více pravidel `$replace`, použijeme každé z nich. **Pořadí je stanoveno abecedně.**

**Syntaxe**

Obecně je syntaxe `$replace` podobná nahrazování regulárními výrazy v [Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
replace = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — regulární výraz.
- **`replacement`** — řetězec, který bude použit k nahrazení řetězce odpovídajícího `regexp`.
- **`modifiers`** — příznaky regulárního výrazu. Například `i` — necitlivé vyhledávání nebo `s` — jednořádkový režim.

V hodnotě `$replace` musí být dva znaky uvozeny: čárka `,` a znak dolaru `$`. Použijte pro to zpětné lomítko `\`. Např. uvozená čárka vypadá takto: `\,`.

**Příklady**

```adblock
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/i
```

Toto pravidlo má tři části:

- `regexp` — `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`;
- `replacement` — `\$1<\/VAST>` kde `$` je uvozeno;
- `modifiers` — `i` pro necitlivé vyhledávání.

Jak toto pravidlo funguje, se můžete podívat zde: http://regexr.com/3cesk

**Vícenásobná pravidla `$replace`**

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

- Jak pravidlo 1, tak pravidlo 2 se použijí na všechny požadavky odeslané na `example.org`.
- Pravidlo 2 je zakázáno pro požadavky odpovídající na `||example.org/page/`, **ale pravidlo 1 stále funguje!**

**Zakázání pravidel `$replace`**

- `@@||example.org^$replace` zakáže všechna pravidla `$replace` odpovídající na `||example.org^`.
- `@@||example.org^$document` nebo `@@||example.org^$content` zakáže všechna pravidla `$replace` **pocházející ze** stránek `example.org` **včetně stránky samotné**.

:::caution Omezení

- Pravidla s modifikátorem `$replace` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
- Pravidla `$replace` neplatí, pokud je velikost původní odpovědi větší než 10 MB. Pro rozšíření AdGuard platí toto omezení od verze 5.2 nebo novější.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$replace` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

:::

#### **`$urltransform`** {#urltransform-modifier}

Pravidla `$urltransform` vám umožňují upravit URL požadavku nahrazením textu, který odpovídá regulárnímu výrazu.

**Funkce**

- Pravidla `$urltransform` se obvykle vztahují pouze na části URL týkající se cesty a dotazu, viz níže jedna výjimka.
- `$urltransform` nebude použito, pokud je původní URL blokována jinými pravidly.
- `$urltransform` se použije před pravidly `$removeparam`.

Hodnota `$urltransform` může být pro pravidla výjimek prázdná.

**Vícenásobná pravidla odpovídajících jednomu požadavku**

Pokud jednomu požadavku odpovídá více pravidel `$urltransform`, použijeme každé z nich. **Pořadí je stanoveno abecedně.**

**Syntaxe**

`$urltransform` syntaxe je podobná nahrazování regulárními výrazy [v Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```text
urltransform = "/" regexp "/" replacement "/" modifiers
```

- **`regexp`** — regulární výraz.
- **`replacement`** — řetězec, který bude použit k nahrazení řetězce odpovídajícího `regexp`.
- **`modifiers`** — příznaky regulárního výrazu. Například `i` — necitlivé vyhledávání nebo `s` — jednořádkový režim.

V hodnotě `$urltransform` musí být dva znaky uvozeny: čárka `,` a znak dolaru `$`. K tomu použijte znak zpětného lomítka `\`. Např. uvozená čárka vypadá takto: `\,`.

**Změna původu**

:::info Kompatibilita

This section only applies to AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.17 or later.

:::

Jak bylo uvedeno výše, pravidla `$urltransform` mohou normálně měnit pouze část URL obsahující cestu a dotaz. Pokud však pravidlo `regexp` začíná řetězcem `^http`, pak se prohledává celá adresa URL a pravidlo ji může upravit. Takové pravidlo se neuplatní, pokud transformace adresy URL nelze dosáhnout přesměrováním HTTP (například pokud je metoda požadavku `POST`).

**Příklady**

```adblock
||example.org^$urltransform=/(pref\/).*\/(suf)/\$1\$2/i
```

Toto pravidlo má tři části:

- `regexp` — `(pref\/).*\/(suf)`;
- `replacement` — `\$1\$2` kde `$` je uvozeno;
- `modifiers` — `i` pro necitlivé vyhledávání.

**Vícenásobná pravidla `$urltransform`**

1. `||example.org^$urltransform=/X/Y/`
2. `||example.org^$urltransform=/Z/Y/`
3. `@@||example.org/page/*$urltransform=/Z/Y/`

- Jak pravidlo 1, tak pravidlo 2 se použijí na všechny požadavky odeslané na `example.org`.
- Pravidlo 2 je zakázáno pro požadavky odpovídající na `||example.org/page/`, **ale pravidlo 1 stále funguje!**

**Opětovná shoda pravidel po transformaci URL**

Po použití všech odpovídajících pravidel `$urltransform` bude transformovaný požadavek porovnán se všemi ostatními pravidly:

Např. s následujícími pravidly:

```adblock
||example.com^$urltransform=/firstpath/secondpath/
||example.com/secondpath^
```

požadavek na `https://example.com/firstpath` bude zablokován.

**Zakázání pravidel `$urltransform`**

- `@@||example.org^$urltransform` zakáže všechna pravidla `$urltransform` odpovídající na `||example.org^`.
- `@@||example.org^$urltransform=/Z/Y/` zakáže pravidlo s `$urltransform=/Z/Y/` pro jakýkoliv požadavek, který odpovídá `||example.org^`.

Pravidla `$urltransform` lze také zakázat pravidly výjimek `$document` a `$urlblock`. Základní pravidla pro výjimky bez modifikátorů to však nedělají. Např. `@@||example.com^` nezakáže `$urltransform=/X/Y/` pro požadavky na **example.com**, ale `@@||example.com^$urlblock` ano.

**Příklad pravidla pro čištění partnerských odkazů**

Mnoho webových stránek používá sledovací URL ke sledování kliknutí před přesměrováním na skutečný cíl. Tyto URL obsahují marketingové parametry a analytické tokeny, které lze odstranit, aby se zvýšila ochrana osobních údajů.

Níže je uveden příklad, jak získat čistý odkaz na cíl, abyste obešli sledovací webové stránky a přešli přímo na cíl.

V našem příkladu:

 1. Počáteční URL (se sledováním kliknutí): `https://www.aff.example.com/visit?url=https%3A%2F%2Fwww.somestore.com%2F%26referrer%3Dhttps%3A%2F%2Fwww.aff.example.com%2F%26ref%3Dref-123`
 1. Sledování URL po dekódování speciálních znaků: `https://www.aff.example.com/visit?url=https://www.somestore.com/`
 1. Webové stránky, které chcete navštívit: `https://www.somestore.com`

Abychom mohli vyčistit URL, musíme nejprve dekódovat speciální znaky (jako `%3A` → `:`, `%2F` → `/`, atd.) a získat skutečnou URL z parametrů sledování. K tomu použijeme modifikátor `$urltransform`. Následující 4 pravidla nahrazují symboly URL jejich skutečnými znaky:

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3A/:/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%2F/\//` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3F/?/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%3D/=/` `/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/%26/&/`

Poté musíme napsat pravidlo, které zablokuje sledovací webovou stránku a přesměruje vás přímo na cílovou adresu (somestore.com):

`/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com\/visit\?url=/$urltransform=/^https?:\/\/(?:[a-z0-9-]+\.)*?aff\.example\.com.*url=([^&]*).*/\$1/`

Sledovací odkazy se nyní automaticky vyčistí a umožní přímou navigaci na cílovou webovou stránku bez sledování.

:::caution Omezení

Pravidla s modifikátorem `$urltransform` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

:::

:::info Kompatibilita

Rules with the `$urltransform` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.15 or later.

:::

#### **`$reason`** {#reason-modifier}

Modifikátor `$reason` umožňuje přidat vlastní vysvětlující zprávu, která se zobrazí na blokovací stránce, když je požadavek tímto pravidlem blokován. Tento modifikátor funguje pouze s modifikátorem typu obsahu `$document`.

**Omezení počtu znaků a požadavky na únik:**

- Pro text s odůvodněním neexistuje žádné omezení maximální délky
- V textu důvodu jsou povoleny všechny znaky
- Zvláštní znaky (například uvozovky, čárky a zpětné lomítko) musí být správně uvozeny pomocí zpětného lomítka (`\`)

**Předdefinované lokalizovatelné tokeny:**

Místo vlastního textu můžete použít předdefinované tokeny, které budou automaticky lokalizovány:

- `malicious` — pro škodlivý obsah
- `tracker` — pro sledování obsahu
- `disreputable` — pro nedůvěryhodný obsah

**Příklady**

```adblock
||example.com^$document,reason="Tracker"
||example.com^$document,reason="Malicious site blocked by security filter"
||ads.example.com^$document,reason="This site contains tracking scripts"
||malware.example.com^$document,reason="Site blocked: \"Known malware distributor\""
||tracking.example.com^$document,reason=disreputable
||analytics.example.com^$document,reason=tracker
```

:::info Kompatibilita

AdGuard pro Windows, AdGuard pro Mac, AdGuard pro Android a AdGuard pro Linux s CoreLibs v1.20 nebo novější podporují pravidla s modifikátorem `$reason`. Blokátor obsahu AdGuard tato pravidla nepodporuje.

:::

#### **`noop`** {#noop-modifier}

Modifikátor `noop` nedělá nic a lze jej použít pouze ke zvýšení čitelnosti pravidel. Skládá se ze sekvence znaků podtržítka (`_`) libovolné délky a může se v pravidle objevit tolikrát, kolikrát je potřeba.

**Příklady**

```adblock
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

:::info Kompatibilita

Pravidla s modifikátorem `noop` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$empty` (zastaralé)** {#empty-modifier}

:::caution Upozornění na vyřazení

Tento modifikátor je zastaralý a nahrazuje jej modifikátor [`$redirect`](#redirect-modifier). Pravidla s `$empty` jsou stále podporována a nyní se převádějí na `$redirect=nooptext`, ale podpora bude v budoucnu odstraněna.

:::

Obvykle se zablokované požadavky v prohlížeči tváří jako chyba serveru. Pokud použijete modifikátor `$empty`, AdGuard bude emulovat prázdnou odpověď ze serveru se stavem `200 OK`.

**Příklady**

- `||example.org^$empty` vrátí prázdnou odpověď na všechny požadavky na `example.org` a všechny subdomény.

:::info Kompatibilita

Pravidla s modifikátorem `$empty` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

#### **`$mp4` (zastaralé)** {#mp4-modifier}

:::caution Upozornění na vyřazení

Tento modifikátor je zastaralý a nahrazuje jej modifikátor [`$redirect`](#redirect-modifier). Pravidla s `$mp4` jsou stále podporována a nyní se převádějí na `$redirect=noopmp4-1s,media`, ale podpora bude v budoucnu odstraněna.

:::

Jako odpověď na zablokovaný požadavek vrátí AdGuard krátký zástupný videoklip.

**Příklady**

- `||example.com/videa/$mp4` zablokuje všechna stahování videa z `||example.com/videa/*` a změní odpověď na zástupný videoklip.

:::info Kompatibilita

Pravidla s modifikátorem `$mp4` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

### Priority pravidel {#rule-priorities}

Každé pravidlo má svou vlastní prioritu, což je nutné v případě, že požadavku odpovídá několik pravidel a filtrovací nástroj musí vybrat jedno z nich. Priorita se měří kladným celým číslem.

:::note Kolize

Pokud stejnému požadavku odpovídají dvě pravidla se stejnou prioritou, implementace filtrovacího modulu určí, které z nich bude vybráno.

:::

:::info

Koncept priorit pravidel nabývá na významu ve světle Manifest V3, protože stávající pravidla je třeba převést na pravidla declarativeNetRequest.

:::

#### Výpočet priority

Pro výpočet priority jsme modifikátory rozdělili do různých skupin. Tyto skupiny jsou seřazeny podle priority od nejnižší po nejvyšší. Modifikátor, který výrazně zužuje oblast působnosti pravidla, zvyšuje jeho celkovou prioritu. Naopak, pokud se pravidlo vztahuje na širší okruh požadavků, jeho priorita se snižuje.

Stojí za zmínku, že existují případy, kdy má jednoparametrový modifikátor vyšší prioritu než víceparametrový. Například v případě `$domain=example.com|example.org` má pravidlo, které zahrnuje dvě domény o něco širší oblast účinnosti než pravidlo s jednou zadanou doménou, a proto je jeho priorita nižší.

Základní priorita každého pravidla je 1. Pokud je vypočtená priorita číslo s pohyblivou řádovou čárkou, bude **zaokrouhlena nahoru** na nejmenší celé číslo větší nebo rovno vypočtené prioritě.

:::info Kompatibilita

- The concept of priority has been introduced in [TSUrlFilter][] v2.1.0 and [CoreLibs][] v1.13. Dříve neměl AdGuard žádný speciální algoritmus pro výpočet priorit a zpracování kolizí se mohlo lišit v závislosti na produktu a verzi AdGuardu.
- Aplikace AdGuard pro iOS, Safari a Blokátor obsahu AdGuard se spoléhají na implementaci prohlížečů a nemohou dodržovat zde uvedená pravidla.

:::

:::note

Aliasy modifikátorů (`1p`, `3p` atd.) nejsou do těchto kategorií zahrnuty, nicméně jsou v rámci enginu využívány pro výpočet priority pravidla.

:::

#### Základní modifikátory, přítomnost každého z nich přidává 1 k prioritě {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) s negovanými aplikacemi za použití `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$domain`](#domain-modifier) s negovanými doménami pomocí `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) s negovanými metodami pomocí `~`,
- [`$strict-first-party`](#strict-first-party-modifier),
- [`$strict-third-party`](#strict-third-party-modifier),
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- omezené [typy obsahu](#content-type-modifiers) s `~`.

Při práci s negovanou doménou, aplikací, metodou nebo typem obsahu přidáváme **1 bod** za existenci samotného modifikátoru bez ohledu na množství negovaných domén nebo typů obsahu. Je to proto, že oblast působnosti tohoto pravidla je již nyní nekonečně široká. Jednoduše řečeno, zákazem více domén, typů obsahu, metod nebo aplikací se rozsah pravidla zmenší jen minimálně.

#### Definované modifikátory typu obsahu, definované metody, definovaná záhlaví, $all, $popup, specifické výjimky {#priority-category-2}

Všechny platné typy obsahu:

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

Patří sem také pravidla, která implicitně přidávají všechny typy obsahu:

- [`$all`](#all-modifier);

Nebo pravidla, která implicitně přidávají modifikátor `$document`:

- [`$popup`](#popup-modifier);

Nebo některé speciální výjimky, které implicitně přidávají `$document,subdocument`:

<!-- Please keep them sorted -->

- [`$content`](#content-modifier),
- [`$elemhide`](#elemhide-modifier),
- [`$extension`](#extension-modifier),
- [`$genericblock`](#genericblock-modifier),
- [`$generichide`](#generichide-modifier),
- [`$jsinject`](#jsinject-modifier),
- [`$specifichide`](#specifichide-modifier),
- [`$urlblock`](#urlblock-modifier);

Nebo povolené metody skrze [`$method`](#method-modifier).

Nebo pravidla s [`$header`](#header-modifier).

Přítomnost jakýchkoli modifikátorů typu obsahu přidává `(50 + 50 / N)`, kde `N` je např. počet přítomných modifikátorů: `||example.com^$image,skript` přidá `50 + 50 / 2 = 50 + 25 = 75` k celkové váze pravidla.

Do této kategorie patří také `$all`, protože implicitně přidává všechny modifikátory typu obsahu, např. `$document,subdocument,image,script,media,<etc>` + `$popup`.

Do této kategorie patří i `$popup`, protože implicitně přidává modifikátor `$document`. Podobně specifické výjimky přidávají `$document,subdocument`.

Pokud je v pravidle s povolenými metodami modifikátor `$method`, přidává `(50 + 50 / N)`, kde `N` je počet povolených metod, např.: `||example.com^$method= GET|POST|PUT` přidává `50 + 50 / 3 = 50 + 16,6 = 67` k celkové váze pravidla.

Pokud je v pravidle modifikátor `$header`, přidává se `50`.

#### `$domain` nebo `$app` s povolenými doménami nebo aplikacemi {#priority-category-3}

Zadané domény prostřednictvím `$domain` nebo zadané aplikace prostřednictvím `$app` přidávají `100 + 100 / N`, kde `N` je např. počet hodnot modifikátoru: `||example.com^$domain=example.com|example.org|example.net` přidává `100 + 100 / 3 = 134,3 = 135` nebo `||example.com^$app=org.example.app1|org.example.app2` sečte `100 + 100 / 2 = 151` nebo `||example.com^$domain=example.com,app=org.example.app1|org.example.app2` sečte `100 + 100/1` ($domain část) a `100 + 100/2` ($app část), celkem `350`.

Hodnoty modifikátorů, které jsou regexp nebo tld, budou interpretovány jako normální položky ve tvaru `example.com` a budou počítány po jedné, např.: `||example.com^$domain=example.*` sečte `100 + 100 / 1 = 200` nebo `||example.com^$domain=example.*|adguard.*` sečte `100 + 100 / 2 = 150`.

#### Pravidla `$redirect` {#priority-category-6}

<!-- Please keep them sorted -->

- [`$redirect`](#redirect-modifier),
- [`$redirect-rule`](#redirect-rule-modifier).

Každé z nich přidává `10^3` k prioritě pravidla.

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

Každá z nich přidává `10^4` k prioritě.

Stejně jako výjimka s modifikátorem [`$document`](#document-modifier): protože je to alias pro `$elemhide,content,jsinject,urlblock,extension`. Přidá `10^4` pro každý modifikátor z [horního seznamu](#priority-category-4), celkem `10^4 * 5`.

Každá z těchto výjimek navíc implicitně přidává dva povolené modifikátory typu obsahu `$document,subdocument`.

#### Pravidla seznamu povolených {#priority-category-5}

Modifikátor `@@` přidává `10^5` k prioritě pravidla.

#### Pravidla `$important` {#priority-category-7}

Modifikátor [`$important`](#important-modifier) přidává `10^6` k prioritě pravidla.

#### Pravidla, pro která není stanovena váha priority {#priority-category-extra}

[Ostatní modifikátory](#advanced-capabilities), které mají provádět dodatečné následné nebo předběžné zpracování požadavků, nepřidávají nic k prioritě pravidel.

:::note

Modifikátor [`$replace`](#replace-modifier) má přednost před všemi pravidly blokování kategorií 1-3, stejně jako před pravidly výjimek z kategorií 3-5, **kromě** [`$content`](#content-modifier), protože výjimka s modifikátorem `$content` má přednost před všemi pravidly `$replace`.

:::

#### Příklady

1. `||example.com^`

    Váha pravidla bez modifikátorů: `1`.

1. `||example.com^$match-case`

    Váha pravidla: základní + váha modifikátoru z [kategorie 1](#priority-category-1): `1 + 1 = 2`.

1. `||example.org^$removeparam=p`

    Váha pravidla: základní váha + 0, protože $removeparam [není zahrnuto](#priority-category-extra) do výpočtu priority: `1 + 0 = 1`.

1. `||example.org^$document,redirect=nooptext`

    Váha pravidla: základní + povolený typ obsahu, [kategorie 3](#priority-category-3) + $redirect z [kategorie 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

1. `@@||example.org^$removeparam=p,document`

    Váha pravidla: základní váha + pravidlo seznamu povolených [kategorie 5](#priority-category-5) + 0, protože $removeparam [není zapojeno](#priority-category-extra) do výpočtu priority + povolený typ obsahu [kategorie 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

1. `@@||example.com/ad/*$domain=example.org|example.net,important`

    Váha pravidla: základní váha + pravidlo seznamu povolených [kategorie 5](#priority-category-5) + důležité pravidlo [kategorie 7](#priority-category-7) + povolené domény [kategorie 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

1. `@@||example.org^$document` bez dalších modifikátorů je aliasem pro `@@||example.com^$elemhide,content,jsinject,urlblock,extension`

    Váha pravidla: základní váha + specifické výjimky, [kategorie 4](#priority-category-4) + dva povolené typy obsahu (dokument a subdokument) [kategorie 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

1. `*$script,domain=a.com,denyallow=x.com|y.com`

    Váha pravidla: základní váha + povolený typ obsahu [kategorie 2](#priority-category-2) + povolená doména, [kategorie 3](#priority-category-3) + denyallow [kategorie 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

1. `||example.com^$all` — alias na `||example.com^$document,subdocument,image,script,media,etc. + $popup`

    Váha pravidla: základní váha + vyskakovací okno ([kategorie 1](#priority-category-1)) + povolené typy obsahu ([kategorie 2](#priority-category-2)): `1 + 1 + (50 + 50/12) = 55`.

## Ostatní pravidla {#non-basic-rules}

Základní pravidla však nemusí k blokování reklam stačit. Někdy potřebujete skrýt prvek nebo změnit část kódu HTML webové stránky, aniž byste cokoli porušili. Pravidla popsaná v této části jsou vytvořena speciálně pro tento účel.

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

Práce s ostatními pravidly vyžaduje základní znalost HTML a CSS. Pokud se tedy chcete naučit, jak taková pravidla vytvářet, doporučujeme seznámit se s touto [dokumentací](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

:::

### Pravidla pro skrytí prvků {#cosmetic-elemhide-rules}

Pravidla pro skrytí prvků slouží ke skrývání prvků webových stránek. Je to podobné jako použít styl `{ display: none; }` na vybraný prvek.

Pravidla pro skrytí prvků mohou fungovat odlišně [v závislosti na platformě](#cosmetic-rules-priority).

#### Syntaxe

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selektor`** — [CSS selektor](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) definuje prvky, které mají být skryty.
- **`domains`** — omezení domény pro dané pravidlo.

Pokud chcete omezit oblast použití pravidel na určité domény, stačí je zadat oddělené čárkami. Např.: `example.org,example.com##selector`.

Toto pravidlo bude také použito na všechny subdomény `example.org` a `example.com`.

Pokud chcete, aby se pravidlo nevztahovalo na určité domény, začněte název domény znakem `~`. Např.: `~example.org##selector`.

V jednom pravidle můžete použít oba přístupy. Např. `example.org,~subdomain.example.org##domain` bude fungovat pro `example.org` a všechny subdomény **kromě `subdomain.example.org`**.

:::note

Pravidla pro skrývání prvků na sobě nejsou závislá. Pokud je ve filtru pravidlo `example.org##selector` a přidáte `~example.org##selector`, budou obě pravidla použita nezávisle.

:::

**Příklady**

- `example.com##div.textad` — skryje `div` s třídou `textad` na doméně `example.com` a všech subdoménách.
- `example.com,example.org###adblock` — skryje prvek s atributem `id`, který se rovná `adblock` na `example.com`, `example.org` a všech subdoménách.
- `~example.com##.textad` — skryje prvek s třídou `textad` na všech doménách kromě `example.com` a jejích subdomén.

**Omezení**

Safari nepodporuje povolené i zakázané domény. Takže pravidla jako `example.org,~foo.example.org##.textad` jsou v AdGuardu pro Safari neplatná.

**Výjimky**

Výjimky mohou zakázat některá pravidla pro určité domény. Jsou velmi podobné běžným pravidlům výjimek, ale namísto `##` musíte použít `#@#`.

Ve filtru je např. pravidlo:

```adblock
##.textad
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:

```adblock
example.com#@#.textad
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény. Úplně zakáže odpovídající pravidlo CSS elemhide na VŠECH doménách:

```adblock
#@#.textad
```

Toho lze dosáhnout přidáním tohoto pravidla:

```adblock
*#@#.textad
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

### Pravidla CSS {#cosmetic-css-rules}

Někdy pouhé skrytí prvku k vyřešení reklamy nestačí. Např. zablokování prvku reklamy může jen narušit rozvržení stránky. V tomto případě může AdGuard použít pravidla, která jsou mnohem flexibilnější než pravidla pro skrývání. Pomocí těchto pravidel můžete v podstatě přidat na stránku libovolné styly CSS.

**Syntaxe**

```text
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selektor`** — [CSS selektor](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) definuje prvky, na které chceme styl použít.
- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#cosmetic-elemhide-rules).
- **`style`** — styl CSS, který chceme použít na vybrané prvky.

**Příklady**

```adblock
example.com#$#body { background-color: #333!important; }
```

Toto pravidlo použije styl `background-color: #333!important;` na prvek `body` na doménu `example.com` a všechny subdomény.

**Výjimky**

Stejně jako u skrývání prvků existuje typ pravidel, který zakáže vybrané pravidlo stylu CSS pro určité domény. Syntaxe pravidel pro výjimky je téměř stejná, stačí jen změnit `#$#` na `#@$#`.

Ve filtru je např. pravidlo:

```adblock
#$#.textad { visibility: hidden; }
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:

```adblock
example.com#@$#.textad { visibility: hidden; }
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo CSS. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

:::caution Omezení

Styly, které vedou k načtení jakéhokoli zdroje, jsou zakázány. V podstatě to znamená, že ve stylu nelze použít žádný typ hodnoty `<url>`.

:::

:::info Kompatibilita

Pravidla CSS nejsou Blokátorem obsahu AdGuard podporována.

Pravidla CSS mohou fungovat odlišně [v závislosti na platformě](#cosmetic-rules-priority).

:::

:::info Kompatibilita s Adblock Plus

V produktech AdGuardu, které používají **CoreLibs verze 1.18 nebo novější**, můžete také použít pravidla pro skrytí prvků k vložení deklarace `remove: true`:

```adblock
example.org##body { remove: true; }
```

Toto použití se nedoporučuje, protože je lepší používat [pravidla CSS](#cosmetic-css-rules), a je podporováno pouze z důvodu kompatibility se seznamy filtrů napsanými pro Adblock Plus.

Výjimky skrytí prvků (`#@#`) jsou porovnávány pouze podle části selektoru, přičemž část bloku deklarací je ignorována. Například výše uvedené pravidlo lze deaktivovat pomocí kterékoli z následujících výjimek:

```adblock
example.org#@#body
example.org#@#body { remove: true; }
example.org#@#body{remove:true;}
```

:::

### Rozšířené CSS selektory {#extended-css-selectors}

- [Omezení](#extended-css-limitations)
- [Pseudo-třída `:has()`](#extended-css-has)
- [Pseudo-třída `:contains()`](#extended-css-contains)
- [Pseudo-třída `:matches-css()`](#extended-css-matches-css)
- [Pseudo-třída `:matches-attr()`](#extended-css-matches-attr)
- [Pseudo-třída `:matches-property()`](#extended-css-property)
- [Pseudo-třída `:xpath()`](#extended-css-xpath)
- [Pseudo-třída `:nth-ancestor()`](#extended-css-nth-ancestor)
- [Pseudo-třída `:upward()`](#extended-css-upward)
- [Pseudo-třída `:remove()` a pseudo-vlastnost `remove`](#remove-pseudos)
- [Pseudo-třída `:is()`](#extended-css-is)
- [Pseudo-třída `:not()`](#extended-css-not)
- [Pseudo-třída `:if-not()` (odstraněno)](#extended-css-if-not)

CSS 3.0 ne vždy stačí k blokování reklam. AdGuard tento problém řeší rozšířením možností CSS o podporu nových pseudo-prvků. Vyvinuli jsme samostatnou [open-source knihovnu](https://github.com/AdguardTeam/ExtendedCss) pro výběr nestandardních prvků a aplikaci CSS stylů s rozšířenými vlastnostmi.

Myšlenkou rozšířených možností je možnost přiřazovat prvky DOM pomocí selektorů na základě jejich vlastní reprezentace (styl, textový obsah atd.) nebo vztahů s jinými prvky. Existuje také možnost použít styly s nestandardními vlastnostmi CSS.

**Oblast použití**

Rozšířené selektory lze použít v jakémkoli kosmetickém pravidle, ať už se jedná o pravidla pro [skrytí prvků](#cosmetic-elemhide-rules) nebo [pravidla CSS](#cosmetic-css-rules).

:::info Kompatibilita

Pravidla se selektory CSS nejsou Blokátorem obsahu AdGuard podporována.

:::

**Syntaxe**

Bez ohledu na pseudo-třídy CSS, které v pravidle používáte, můžete pomocí speciálních znaků vynutit použití těchto pravidel pomocí ExtendedCss. Doporučujeme používat tyto znaky pro všechna rozšířená kosmetická pravidla CSS, aby bylo snazší je najít.

Syntaxe rozšířených pravidel CSS:

- `#?#` — pro skrytí prvku, `#@?#` — pro výjimky
- `#$?#` — pro pravidlo CSS, `#@$?#` — pro výjimky

**Důrazně doporučujeme** použít tyto znaky kdykoli, když používáte rozšířený selektor CSS.

**Příklady**

- `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — toto pravidlo blokuje všechny prvky `div` obsahující podřízený uzel, který má odkaz s atributy `[target="_blank"][rel="nofollow"]`. Pravidlo platí pouze pro `example.org` a její subdomény.
- `example.com#$?#h3:contains(cookies) { display: none!important; }` — toto pravidlo nastaví styl `display: none!important` všem prvkům `h3`, které obsahují slovo `cookies`. Pravidlo platí pouze pro `example.com` a všechny její subdomény.
- `example.net#?#.banner:matches-css(width: 360px)` — toto pravidlo blokuje všechny prvky `.banner` s vlastností stylu `width: 360px`. Pravidlo platí pouze pro `example.net` a její subdomény.
- `example.net#@?#.banner:matches-css(width: 360px)` — toto pravidlo zakáže předchozí pravidlo.

Standardní CSS selektory můžete použít pomocí knihovny ExtendedCss pomocí znaku pravidla `#?#`, např. `#?#div.banner`.

Přečtěte si další informace o [ladění rozšířených selektorů](#selectors-debugging-mode).

:::note

Některé pseudo-třídy před sebou selektor nevyžadují. Přesto přidání [univerzálního selektoru](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*` usnadňuje čtení rozšířeného selektoru, i když nemá žádný vliv na chování při porovnávání. Takže selektor `#blok :has(> .inner)` funguje přesně jako `#blok *:has(> .inner)`, ale druhý je zřejmější.

Názvy pseudo-tříd nerozlišují malá a velká písmena, např. `:HAS()` funguje jako `:has()`. Přesto se běžně používají názvy s malými písmeny.

:::

#### Limitace ExtendedCss {#extended-css-limitations}

1. CSS [komentáře](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) a [at-pravidla](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) nejsou podporovány.

2. Konkrétní pseudot-řída může mít svá vlastní omezení: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations) a [`:remove()`](#extended-css-remove-limitations).

#### Pseudo-třída `:has()` {#extended-css-has}

Návrh specifikace CSS 4.0 popisuje [`:has()` pseudo-třídu](https://www.w3.org/TR/selectors-4/#relational). Bohužel [to zatím není podporováno](https://caniuse.com/css-has) všemi oblíbenými prohlížeči.

:::note

Pravidla s pseudo-třídou `:has()` musí používat nativní implementaci [ `:has()`][native-has], pokud používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. If it is not supported by the product (or by the browser in case of AdGuard Browser Extension), ExtendedCss implementation will be used automatically as a fallback, even for rules with the `##` marker.

AdGuard products support the native implementation of `:has()`:

- AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux **support** it with [CoreLibs][] v1.12 or later.
- AdGuard for iOS and AdGuard for Safari **support** it with [SafariConverterLib](#safari-converter-lib) v2.0.39 and [Safari browser v16.4][safari-16.4] or later.
- AdGuard Browser Extension **supports** it in v5.3 or later:
    - **Manifest V3** (Chromium-based): always uses native `:has()` by default.
    - **Manifest V2**: Detects native `:has()` support using `CSS.supports()` and falls back to ExtendedCss if the browser doesn’t support it natively.
- All other AdGuard products **do not support** it.

To force the ExtendedCss implementation of `:has()` to be used (regardless of native support), use the `#?#` or `#$?#` rule markers explicitly, e.g., `example.com#?#p:has(> a)` or `example.com#$?#div:has(> span) { display: none !important; }`.

And since the `:has()` pseudo-class cannot be nested within another `:has()` in native implementation, e.g. `div:has(p:has(a))`, it is always treated as extended in AdGuard Browser Extension.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-has()` is supported by ExtendedCss for better compatibility.

:::danger Upozornění na odstranění

`:if()` is no longer supported as a synonym for `:has()`.

:::

**Syntaxe**

```text
[target]:has(selector)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `selector` — povinný, standardní nebo rozšířený selektor CSS

The pseudo-class `:has()` selects the `target` elements that fit to the `selector`. Also the `selector` can start with a combinator.

A selector list can be set in `selector` as well. In this case **all** selectors in the list are being matched for now. In the future it will be fixed for [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list) as argument.

##### `:has()` limitations {#extended-css-has-limitations}

Usage of the `:has()` pseudo-class is [restricted for some cases (2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- zakazuje `:has()` uvnitř pseudo akceptující pouze složené selektory;
- zakazuje `:has()` po běžných pseudoprvcích.

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

#### Pseudo-třída `:contains()` {#extended-css-contains}

The `:contains()` pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regexp flags are supported.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

The `:contains()` pseudo-class uses the `textContent` element property for matching, not the `innerHTML`.

:::

**Compatibility with other pseudo-classes**

Synonyms `:-abp-contains()` and `:has-text()` are supported for better compatibility.

**Syntaxe**

```text
[target]:contains(match)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `shoda` — povinný, řetězec nebo regulární výraz pro shodu prvku `textContent`. Příznaky regulárních výrazů jsou podporovány.

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

! regulární výraz
div:contains(/as .*banner/)

! regulární výraz s příznaky
div:contains(/it .*banner/gi)
```

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Only the `div` with `id=match` is selected because the next element does not contain any text, and `banner` is a part of code, not a text.

:::

:::danger Old syntax

[Backward compatible syntax for `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) is supported but **not recommended**.

:::

#### Pseudo-třída `:matches-css()` {#extended-css-matches-css}

The `:matches-css()` pseudo-class allows to match the element by its current style properties. The work of the pseudo-class is based on using the [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method.

**Syntaxe**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `pseudo-element` — volitelný, platný standardní pseudoprvek, např. `before`, `after`, `first-line` atd.
- `property` — povinný, název vlastnosti CSS, pro kterou se má prvek zkontrolovat
- `pattern` — povinný, vzor hodnoty, který používá stejnou jednoduchou shodu se zástupnými znaky jako v základních pravidlech filtrování adres URL nebo regulární výraz. Při tomto typu porovnávání, AdGuard vždy porovnává bez ohledu na velikost písmen. V případě regulárního výrazu vypadá vzor takto: `/regexp/`.

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

#### Pseudo-třída `:matches-attr()` {#extended-css-matches-attr}

The `:matches-attr()` pseudo-class allows selecting an element by its attributes, especially if they are randomized.

**Syntaxe**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu názvu atributu
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu hodnoty atributu

**Uvození speciálních znaků**

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

#### Pseudo-třída `:matches-property()` {#extended-css-property}

The `:matches-property()` pseudo-class allows selecting an element by matching its properties.

**Syntaxe**

```text
[target]:matches-property("name"[="value"])
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků

**Uvození speciálních znaků**

For **regexp** patterns `"` and `\` must be escaped, e.g. `div:matches-property(prop=/[\\w]{4}/)`.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

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

1. Zkontrolujte prvek stránky nebo jej vyberte na kartě `Elements` v nástroji DevTools prohlížeče
1. Spusťte `console.dir($0)` na kartě `Console`

:::

:::caution Omezení

Regexp patterns **do not support** flags.

:::

#### Pseudo-třída `:xpath()` {#extended-css-xpath}

The `:xpath()` pseudo-class allows selecting an element by evaluating an XPath expression.

**Syntaxe**

```text
[target]:xpath(expression)
```

- `target` — volitelný, standardní nebo rozšířený selektor CSS
- `expression` — povinný, platný výraz XPath

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

#### Pseudo-třída `:nth-ancestor()` {#extended-css-nth-ancestor}

The `:nth-ancestor()` pseudo-class allows to lookup the *nth* ancestor relative to the previously selected element.

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

**Syntaxe**

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — required, number >= 1 and < 256, distance to the needed ancestor from the element selected by `subject`

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

#### Pseudo-třída `:upward()` {#extended-css-upward}

The `:upward()` pseudo-class allows to lookup the ancestor relative to the previously selected element.

**Syntaxe**

```text
subject:upward(ancestor)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `ancestor` — povinný, specifikace pro předka prvku vybraného pomocí `subject`, lze nastavit jako:
    - *číslo* >= 1 a < 256 pro vzdálenost k požadovanému předkovi, stejně jako u položky [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *standardní selektor CSS* pro shodu nejbližšího předka

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

#### Pseudo-třída `:remove()` a pseudo-vlastnost `remove` {#remove-pseudos}

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use the `:remove()` pseudo-class as well as the `remove` pseudo-property.

**Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntaxe**

```text
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```

- `selector` — povinný, standardní nebo rozšířený selektor CSS

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

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Rules with the `remove` pseudo-property must use `#$?#` marker: `$` for CSS-style rule syntax, `?` for ExtendedCss syntax.

:::

#### Pseudo-třída `:is()` {#extended-css-is}

The `:is()` pseudo-class allows to match any element that can be selected by any of selectors passed to it. Invalid selectors are skipped and the pseudo-class deals with valid ones with no error thrown. Our implementation of the [native `:is()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntaxe**

```text
[target]:is(selectors)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `selektory` — [*šetrný seznam*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) standardních nebo rozšířených selektorů. U rozšířených selektorů jsou podporovány pouze složené selektory, nikoli komplexní.

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

#### Pseudo-třída `:not()` {#extended-css-not}

The `:not()` pseudo-class allows to select elements which are *not matched* by selectors passed as argument. Invalid argument selectors are not allowed and error is to be thrown. Our implementation of the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

**Syntaxe**

```text
[target]:not(selectors)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být přeskočen pro kontrolu *libovolného* prvku
- `selectors` — seznam standardních nebo rozšířených selektorů

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

#### Pseudo-třída `:if-not()` (odstraněno) {#extended-css-if-not}

:::danger Upozornění na odstranění

The `:if-not()` pseudo-class is removed and is no longer supported. Pravidla s tímto modifikátorem jsou považována za neplatná.

:::

This pseudo-class was basically a shortcut for `:not(:has())`. It was supported by ExtendedCss for better compatibility with some filters subscriptions.

### Přednost kosmetických pravidel {#cosmetic-rules-priority}

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](#cosmetic-elemhide-rules) and [CSS rules](#cosmetic-css-rules) cannot override inline styles. In such cases, it is recommended to use extended selectors or HTML filtering.

**In AdGuard Browser Extension**, the so-called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use JavaScript to work and basically add an inline style themselves, therefore they can override any style.

## HTML pravidla filtrování {#html-filtering-rules}

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

:::info Kompatibilita

HTML filtering rules are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard for Linux, and AdGuard Browser Extension for Firefox. Such rules do not work in extensions for other browsers because they are unable to modify content on network level.

The syntax with an optional `value` in the attributes is supported by AdGuard for Windows, AdGuard for Mac, and AdGuard for Android with CoreLibs v1.18 or later. It is also supported by AdGuard Browser Extension v5.2 or later. For the other products and previous versions `value` must **always** be specified. Otherwise, the rule will be treated as incorrect and ignored.

:::

### Syntaxe

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0[ = value0] "]" "[" name1[ = value2] "]" ... "[" nameN[ = valueN] "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — název prvku s malými písmeny, např. `div` nebo `script`.
- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [syntaxi pravidel pro skrývání prvků](#cosmetic-elemhide-rules).
- **`attributes`** — seznam atributů, které limitují výběr prvků. `name` — povinný údaj, název atributu; `value` — nepovinný údaj (nemusí být uveden), podřetězec, který je obsažen v hodnotě atributu.
- **`pseudoName`** — název pseudotřídy.
- **`pseudoArgs`** — argumenty pseudotřídy typu funkce.
- **`combinator`** — operátor, který funguje podobně jako podřízený kombinátor [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): to znamená, že `selector` napravo od `combinator` bude odpovídat pouze prvku, jehož přímý původce odpovídá `selector` vlevo z `combinator`.

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

If the value of the attribute is omitted in the rule, then the element will be removed if it contains the specified attribute, regardless of its value. This is also the way to remove the elements whose attributes don't have any value at all.

```html
<div some_attribute="some_value"></div>
<div some_attribute></div>
```

```adblock
example.org$$div[some_attribute]
```

This rule removes all `div` elements with the attribute `some_attribute` on `example.org` and all its subdomains. So, the both `div` elements from the example above will be removed.

### Speciální atributy {#html-filtering-rules--special-attributes}

In addition to usual attributes, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

#### `tag-content`

:::caution Upozornění na vyřazení

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

:::caution Upozornění na vyřazení

This special attribute may become unsupported in the future. Prefer using the `:contains()` pseudo-class where it is available.

:::

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

You must use `""` to escape `"`, for instance: `$$script[wildcard=""banner""]`

For example: `$$script[wildcard="*banner*text*"]`

It checks if the element code contains the two consecutive substrings `banner` and `text`.

:::caution Omezení

The `wildcard` special attribute must not appear in a selector to the left of a `>` combinator.

:::

#### `max-length`

:::caution Upozornění na vyřazení

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

:::caution Upozornění na vyřazení

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

### Pseudotřídy {#html-filtering-rules--pseudo-classes}

#### `:contains()` {#html-filtering-rules--contains}

##### Syntaxe

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

The `:contains()` pseudo-class is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.13 or later.

:::

Requires that the inner HTML of the element contains the specified text or matches the specified regular expression.

:::caution Omezení

A `:contains()` pseudo-class must not appear in a selector to the left of a `>` combinator.

:::

### Výjimky

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains. The syntax is the same, you just have to change `$$` to `$@$`.

Ve filtru je např. pravidlo:

```adblock
$$script[tag-content="banner"]
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:

```adblock
example.com$@$script[tag-content="banner"]
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény.

```adblock
$@$script[tag-content="banner"]
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

## Pravidla JavaScript {#javascript-rules}

AdGuard supports a special type of rules that allows you to inject any JavaScript code to websites pages.

We **strongly recommend** using [scriptlets](#scriptlets) instead of JavaScript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

**Syntaxe**

```text
rule = [domains] "#%#" script
```

- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#cosmetic-elemhide-rules).
- **`skript`** — libovolný kód JavaScript **v jednom řetězci**.

**Příklady**

- `example.org#%#window.__gaq = undefined;` spustí kód `window.__gaq = undefined;` na všech stránkách na `example.org` a jejích subdoménách.

**Výjimky**

Similar to hiding rules, there is a special type of rules that disable the selected JavaScript rule for particular domains. The syntax is the same, you just have to change `#%#` to `#@%#`.

Ve filtru je např. pravidlo:

```adblock
#%#window.__gaq = undefined;
```

Pokud to chcete zakázat pro `example.com`, můžete vytvořit pravidlo výjimky:

```adblock
example.com#@%#window.__gaq = undefined;
```

Někdy může být nutné zakázat všechna pravidla omezení. Např. k provádění testů. Za tímto účelem použijte pravidlo výjimky bez zadání domény.

```adblock
#@%#window.__gaq = undefined;
```

Tento druh výjimek doporučujeme používat pouze v případě, že není možné změnit samotné pravidlo skrývání. V ostatních případech je lepší změnit původní pravidlo pomocí omezení domény.

:::caution Omezení

JavaScript rules can only be used [**in trusted filters**](#trusted-filters).

:::

:::info Kompatibilita

JavaScript rules are not supported by AdGuard Content Blocker.

:::

## Pravidla skriptlet {#scriptlets}

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

AdGuard supports a lot of different scriptlets. In order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

:::

**Blocking rules syntax**

```text
[domains]#%#//scriptlet(name[, arguments])
```

- `domains` — volitelné, seznam domén, na které se má pravidlo vztahovat;
- `name` — povinné, název skriptletu z knihovny AdGuard Scriptlets;
- `arguments` — volitelnýný, seznam argumentů `string` (jiné typy argumentů nejsou podporovány).

**Příklady**

1. Použijte skriptlet `abort-on-property-read` na všech stránkách `example.org` a jejích subdoménách a předejte mu argument `alert`:

    ```adblock
    example.org#%#//scriptlet('abort-on-property-read', 'alert')
    ```

1. Odstraňte třídu `branding` ze všech prvků `div[class^="inner"]` na všech stránkách `example.org` a jejích subdoménách:

    ```adblock
    example.org#%#//scriptlet('remove-class', 'branding', 'div[class^="inner"]')
    ```

**Exception rules syntax**

Exception rules can disable some scriptlets on particular domains. The syntax for exception scriptlet rules is similar to normal scriptlet rules but uses `#@%#` instead of `#%#`:

```text
[domains]#@%#//scriptlet([name[, arguments]])
```

- `domains` — volitelné, seznam domén, na které se má pravidlo vztahovat;
- `name` — volitelné, název skriptletu, který se má z použití vynechat; pokud není nastaven, nebudou použity všechny skriptlety;
- `arguments` — volitelné, seznam `string` argumentů, které odpovídají stejnému pravidlu blokování a zakazují ho.

**Příklady**

1. Zakázat specifické pravidlo skriptletu tak, aby se pouze `abort-on-property-read` použilo pouze na `example.org` a její subdomény:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read", "alert")
    ```

1. Zakázat všechny skriptlety `abort-on-property-read` pro `example.com` a její subdomény:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet("abort-on-property-read")
    ```

1. Zakázat všechny skriptlety pro `example.com` a její subdomény:

    ```adblock
    example.org,example.com#%#//scriptlet("abort-on-property-read", "alert")
    example.com#@%#//scriptlet()
    ```

1. Použijte `set-constant` a `set-cookie` na libovolnou webovou stránku, ale vzhledem ke speciálnímu pravidlu výjimky pro skriplety bude na `stránce example.org` a jejích subdoménách použito pouze `set-constant`:

    ```adblock
    #%#//scriptlet('set-constant', 'adList', 'emptyArr')
    #%#//scriptlet('set-cookie', 'accepted', 'true')
    example.org#@%#//scriptlet('set-cookie')
    ```

1. Použijte `adjust-setInterval` na libovolnou webovou stránku a `set-local-storage-item` na `example.com` a jejích subdoménách, ale existuje také několik pravidel pro výjimky skriptletů, takže na `example.com` a jejích subdoménách nebudou použita žádná pravidla pro skriptlety:

    ```adblock
    #%#//scriptlet('adjust-setInterval', 'count', '*', '0.001')
    example.com#%#//scriptlet('set-local-storage-item', 'ALLOW_COOKIES', 'false')
    example.com#@%#//scriptlet()
    ```

Learn more about [how to debug scriptlets](#debug-scriptlets).

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Kompatibilita

Scriptlet rules are not supported by AdGuard Content Blocker.

The full syntax of scriptlet exception rules is supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.16 or later, and AdGuard Browser Extension for Chrome, Firefox, and Edge with [TSUrlFilter][] v3.0 or later. Previous versions only support exception rules that disable specific scriptlets.

:::

### Důvěryhodné skriptlety {#trusted-scriptlets}

Trusted scriptlets are [scriptlets](#scriptlets) with extended functionality. It means the same syntax and restrictions. Trusted scriptlet names are prefixed with `trusted-`, e.g. `trusted-set-cookie`, to be easily distinguished from common scriptlets.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

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

**Syntaxe**

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — sada modifikátorů popsaných níže.
- **`rule text`** — pravidlo, které je třeba změnit.

For example, `[$domain=example.com,app=test_app]##selector`.

In the modifiers values, the following characters must be escaped: `[`, `]`, `,`, and `\` (unless it is used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like this: `\]`.

| Modifikátor \ Produkty               | [Aplikace CoreLibs][cl-apps] |        [AdGuard pro Chromium][ext-chr]        |        [AdGuard pro Chrome MV3][ext-mv3]         |         [AdGuard pro Firefox][ext-ff]         | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------- |:----------------------------:|:---------------------------------------------:|:------------------------------------------------:|:---------------------------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |              ✅               |                       ❌                       |                        ❌                         |                       ❌                       |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |              ✅               |                       ✅                       | ✅ [*[1]](#non-basic-domain-modifier-limitations) |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |              ✅               |                       ✅                       |                        ❌                         |                       ✅                       |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |              ✅               | ✅ [*[2]](#non-basic-url-modifier-limitations) |  ✅ [*[2]](#non-basic-url-modifier-limitations)   | ✅ [*[2]](#non-basic-url-modifier-limitations) |             ❌              |               ❌               |                 ❌                 |

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- ❌ — nepodporováno

:::

### **`$app`** {#non-basic-app-modifier}

`$app` modifier lets you narrow the rule coverage down to a specific application or a list of applications. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$app` modifier](#app-modifier).

**Příklady**

- `[$app=org.example.app]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z `org.example.app` v aplikaci Android.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z jakékoli aplikace kromě `org.example.app1` a `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` použije skriplet `prevent-setInterval` pouze v prohlížeči Safari na počítači Mac.
- `[$app=org.example.app]#@#.textad` zakáže všechna pravidla `##.textad` pro všechny domény při použití `org.example.app`.

:::info Kompatibilita

Such rules with `$app` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux.

:::

### **`$domain`** {#non-basic-domain-modifier}

`$domain` modifier limits the rule application area to a list of domains and their subdomains. The modifier's behavior and syntax perfectly match the corresponding [basic rules `$domain` modifier](#domain-modifier).

**Příklady**

- `[$domain=example.com]##.textad` — skryje `div` s třídou `textad` na doméně `example.com` a všech subdoménách.
- `[$domain=example.com|example.org]###adblock` — skryje prvek s atributem `id`, který se rovná `adblock` na `example.com`, `example.org` a všech subdoménách.
- `[$domain=~example.com]##.textad` — toto pravidlo skryje prvek `div` se třídou `textad` na všech doménách kromě `example.com` a jejích subdomén.

There are 2 ways to specify domain restrictions for non-basic rules:

1. "klasický" způsob je zadat domény před masku pravidla a atributy: `example.com##.textad`;
2. přístup modifikátoru spočívá v určení domén pomocí modifikátoru `$domain`: `[$domain=example.com]##.textad`.

But rules with mixed style domains restriction are considered invalid. So, for example, the rule `[$domain=example.org]example.com##.textad` will be ignored.

### Nezákladní omezení modifikátoru `$domain` {#non-basic-domain-modifier-limitations}

:::caution Omezení

Since the non-basic `$domain` works the same as the basic one, it has the same [limitations](#domain-modifier-limitations).

:::

:::info Kompatibilita

Such rules with `$domain` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, AdGuard Browser Extension for Chrome, Chrome MV3, Firefox, and Edge.

:::

### **`$path`** {#non-basic-path-modifier}

`$path` modifier limits the rule application area to specific locations or pages on websites.

**Syntaxe**

```text
$path ["=" pattern]
```

`pattern` — optional, a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).

If `pattern` is not set for `$path`, rule will apply only on the main page of website.

`$path` modifier matches the query string as well.

`$path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

**Příklady**

- `[$path=page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` nebo `/sub/page.html` nebo `/another_page.html`
- `[$path=/page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` nebo `/sub/page.html` jakékoliv domény kromě `/another_page.html`
- `[$path=|/page.html]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/page.html?<query>` jakékoliv domény kromě `/sub/page.html`
- `[$path=/page.html|]##.textad` skryje `div` se třídou `textad` na `/page.html` nebo `/sub/page.html` jakékoliv domény kromě `/page.html?<query>`
- `[$path=/page*.html]example.com##.textad` skryje `div` se třídou `textad` na `/page1.html` nebo `/page2.html` nebo jiné cestě shodné s `/page<...>.html` domény `example.com`
- `[$path]example.com##.textad` skryje `div` se třídou `textad` na hlavní stránce domény `example.com`
- `[$domain=example.com,path=/page.html]##.textad` skryje `div` se třídou `textad` na `page.html` domény `example.com` a všech subdoménách kromě `another_page.html`
- `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` skryje `div` se třídou `textad` na `/sub1/page.html` a `/sub2/page.html` jakékoliv domény (vezměte prosím na vědomí, že [ uvozuje speciální znak](#non-basic-rules-modifiers-syntax))

:::info Kompatibilita

Rules with `$path` modifier are not supported by AdGuard Content Blocker.

:::

### **`$url`** {#non-basic-url-modifier}

`$url` modifier limits the rule application area to URLs matching the specified mask.

**Syntaxe**

```text
url = pattern
```

where `pattern` is pretty much the same as [`pattern` of the basic rules](#basic-rules-syntax) assuming that [some characters](#non-basic-rules-modifiers-syntax) must be escaped. The [special characters](#basic-rules-special-characters) and [regular expressions](#regexp-support) are supported as well.

**Příklady**

- `[$url=||example.com/content/*]##div.textad` skryje `div` se třídou `textad` na adrese jako `https://example.com/content/article.html` a dokonce i `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` skryje prvek s atributem `id`, který se rovná `adblock` na `example.org` a jejích subdoménách.
- `[$url=/\[az\]+\\.example\\.com^/]##.textad` skryje prvky třídy `div` `textad` pro všechny domény odpovídající regulárnímu výrazu `[a-z]+\. example\.com^`.

#### omezení modifikátoru `$url` {#non-basic-url-modifier-limitations}

:::caution Omezení

In AdGuard Browser Extension, non-basic `$url` modifier is not compatible with domain-specific rules and other non-basic modifiers — [`$domain`](#non-basic-domain-modifier) and [`$path`](#non-basic-path-modifier). For example, the rule `[$url=/category/*]example.com###textad` will not be applied.

:::

:::info Kompatibilita

Rules with the `$url` modifier are supported by AdGuard for Windows, AdGuard for Mac, AdGuard for Android, and AdGuard for Linux with [CoreLibs][] v1.11 or later, and AdGuard Browser Extension with [TSUrlFilter][] v3.0.0 or later.

:::

## Informace pro správce filtrů

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json). If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

### Direktivy preprocesoru

We provide preprocessor directives that can be used by filter maintainers to improve compatibility with different ad blockers and provide:

- [zahrnutý soubor](#include-directive)
- [použití pravidel podmíněně podle typu blokátoru reklam](#conditions-directive)
- [zadání blokátoru obsahu pro pravidla platná v Safari](#safari-affinity-directive)

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Any mistake in a preprocessor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

Preprocessor directives can be used in the user rules or in the custom filters.

:::

#### Zahrnutý soubor {#include-directive}

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntaxe**

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

1. Pokud blokátor reklamy narazí na direktivu `!#if` a ne `!#else`, zkompiluje kód mezi direktivami `!#if` a `!#endif` pouze v případě, že je zadaná podmínka pravdivá.

1. Pokud existuje direktiva `!#else`, bude zkompilován kód mezi `!#if` a `!#else`, pokud je podmínka pravdivá; v opačném případě bude zkompilován kód mezi `!#else` a `!#endif`.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

:::

**Syntaxe**

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

- `!#if (conditions)` — začátek bloku při splnění podmínek
- `conditions` — stejně jako v některých populárních programovacích jazycích jsou podmínky preprocesoru založeny na konstantách deklarovaných blokátory reklamy. Autoři blokátorů reklam si sami určují, jaké konstanty přesně deklarují. Přípustné hodnoty:
    - `adguard` vždy deklarováno; ukazuje správcům, že se jedná o jeden z produktů AdGuard; mělo by to stačit v 95 % případů
    - konstanty specifické pro daný produkt pro případy, kdy potřebujete, aby pravidlo fungovalo (nebo nefungovalo — pak je třeba před konstantou použít `!`) pouze v konkrétním produktu:
        - `adguard_app_windows` — AdGuard pro Windows
        - `adguard_app_mac` — AdGuard pro Mac
        - `adguard_app_cli` — AdGuard pro Linux
        - `adguard_app_android` — AdGuard pro Android
        - `adguard_app_ios` — AdGuard pro iOS
        - `adguard_ext_safari` — AdGuard pro Safari
        - `adguard_ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome (a prohlížeče založené na chromium, např. nový Microsoft Edge.)
        - `adguard_ext_chromium_mv3` — [AdGuard for Chrome MV3][ext-mv3]
        - `adguard_ext_firefox` — Rozšíření prohlížeče AdGuard pro Firefox
        - `adguard_ext_edge` — Rozšíření prohlížeče AdGuard pro starší Edge
        - `adguard_ext_opera` — Rozšíření prohlížeče AdGuard pro Operu
        - `adguard_ext_android_cb` — Blokátor obsahu AdGuard pro mobilní prohlížeče Samsung a Yandex
        - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry][]
        - `cap_html_filtering` — produkty, které podporují pravidla filtrování HTML: AdGuard pro Windows, AdGuard pro macOS, AdGuard pro Android a AdGuard pro Linux
- `!#else` — začátek bloku při nesplnění podmínek
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — seznamy pravidel
- `!#endif` — konec blokování

**Příklady**

```adblock
! pro všechny produkty AdGuardu kromě AdGuardu pro Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```adblock
! direktivy lze dokonce kombinovat
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
- Rozšíření prohlížeče AdGuard v4.2.208;
- AdGuard pro Safari v1.11.16.

:::

#### Afinita Safari {#safari-affinity-directive}

Safari's limit for each content blocker is 150,000 active rules. But in AdGuard for Safari and AdGuard for iOS, we've split the rules into 6 content blockers, thus increasing the rule limit to 900,000.

Here is the composition of each content blocker:

- AdGuard General — Blokování reklam, jazykově specifické filtry
- AdGuard Privacy — Soukromí
- AdGuard Social — Sociální widgety, obtěžování
- AdGuard Security — Zabezpečení
- AdGuard Other — Jiné
- AdGuard Custom — Vlastní

User rules and allowlist are added to every content blocker.

:::caution

The main disadvantage of using multiple content blockers is that rules from different blockers are applied independently. Blocking rules are not affected by this, but unblocking rules may cause problems. If a blocking rule is in one content blocker and an exception is in another, the exception will not work. Filter maintainers use `!#safari_cb_affinity` to define Safari content blocker affinity for the rules inside of the directive block.

:::

**Syntaxe**

```adblock
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

```adblock
! pro zobrazení konkrétního prvku, který je skryt základním filtrem AdGuardu:
!#safari_cb_affinity(Obecné)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! pro seznam povolených základních pravidel z filtru AdGuard Tracking Protection:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Nápovědy

"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry][]).

**Syntaxe**

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

- **filter** — identifikátor filtru
- **percent** — očekávané procento optimalizace `~= (počet pravidel v optimalizovaném filtru) / (počet pravidel v původním filtru) * 100`
- **minPercent** — dolní mez hodnoty `percent`
- **maxPercent** — horní mez hodnoty `percent` value
- **strict** — pokud je `percent < minPercent` NEBO `percent > maxPercent` a je zapnutý přísný režim, pak by kompilace filtru měla selhat, jinak je nutné použít původní pravidla

In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard Browser Extension:

- úplná: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimalizovaná: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

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

- `windows` — AdGuard pro Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard pro Mac — [https://filters.adtidy.org/mac_v3/filters/2.txt](https://filters.adtidy.org/mac_v3/filters/2.txt)

- `cli` — AdGuard pro Linux — [https://filters.adtidy.org/cli/filters/2.txt](https://filters.adtidy.org/cli/filters/2.txt)

- `android` — AdGuard pro Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard pro iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_chromium_mv3` — Rozšíření prohlížeče AdGuard pro Chrome MV3 — [https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt](https://filters.adtidy.org/extension/chromium-mv3/filters/2.txt)

- `ext_ff` — Rozšíření prohlížeče AdGuard pro Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — Rozšíření prohlížeče AdGuard pro Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — Rozšíření prohlížeče AdGuard pro Operu — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard pro Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — Blokátor obsahu AdGuard — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

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

#### `NOT_VALIDATE`

This hint is used to skip validation of the rule. It is useful for rules for which support has not yet been added to the filters compiler, or for rules that are incorrectly discarded.

**If you want to add a rule that should not be validated, use the `NOT_VALIDATE` hint:**

```adblock
!+ NOT_VALIDATE
||example.org^$newmodifier
```

## Jak ladit pravidla filtrování

It may be possible to create simple filtering rules "in your head" but for anything even slightly more complicated you will need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers but most AdGuard products provide another one — Filtering log.

### Záznam filtrování

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you are using, Filtering log can be located in different places.

- V **AdGuardu pro Windows** jej najdete na kartě *Blokátor reklam* nebo prostřednictvím nabídky na hlavním panelu
- V **AdGuardu pro Mac** je pod *Nastavení → Pokročilé → Záznam filtrování*
- V **AdGuardu pro Android** je pod *Statistiky → Nedávná aktivita*. *Nedávná aktivita* je také přístupná z *Asistenta*
- V **Rozšíření prohlížeče AdGuard** je přístupný z karty *Různé* nebo kliknutím pravým tlačítkem myši na ikonu rozšíření. Pouze prohlížeče založené na platformě Chromium a Firefox zobrazují použití **pravidel skrývání prvků** (včetně CSS, ExtCSS) a **pravidel JS a skripletů** v jejich záznamech filtrování

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

In **AdGuard for iOS** and **AdGuard for Safari**, Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard does not see the web requests and therefore cannot display them.

:::

### Režim ladění selektorů {#selectors-debug-mode}

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with JavaScript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debugging mode either for a single selector or for all selectors, depending on the `debug` value.

Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats as object where each of the debugged selectors are keys, and value is an object with such properties:

**Always printed:**

- `selectorParsed` — text parsovaného selektoru se může lišit od vstupního textu
- `timings` — seznam uzlů DOM odpovídajících selektoru
    - `appliesCount` — celkový počet použití selektoru na stránce
    - `appliesTimings` — doba, po kterou byl selektor na stránce použit, pro každý případ, kdy byl použit (v milisekundách)
    - `meanTiming` — průměrná doba, po kterou byl selektor na stránce použit
    - `standardDeviation` — standardní odchylka
    - `timingsSum` — celkový čas potřebný k použití selektoru na stránce ve všech instancích

**Printed only for remove pseudos:**

- `removed` — příznak signalizující, zda byly prvky odstraněny

**Printed if elements are not removed:**

- `matchedElements` — seznam uzlů DOM odpovídajících selektoru
- `styleApplied` — parsovaná deklarace stylu pravidla související se selektorem

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
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) se specifickým parametrem `replacement`
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Legenda tabulek kompatibility {#compatibility-tables-legend}

### Zkratky produktů {#what-product}

1. `Aplikace CoreLibs` — [AdGuard pro Windows](/adguard-for-windows/features/home-screen), [AdGuard pro Mac](/adguard-for-mac/features/main), [AdGuard pro Android](/adguard-for-android/features/protection/ad-blocking) a [AdGuard pro Linux](/adguard-for-linux)
1. `AdGuard pro Chromium` — [Rozšíření prohlížeče AdGuard](/adguard-browser-extension/availability) pro Chrome a další prohlížeče založené na Chromium, např. nový Microsoft Edge a Opera
1. `Adguard pro Chrome MV3` — [Rozšíření prohlížeče AdGuard pro Chrome MV3](/adguard-browser-extension/mv3-version)
1. `Adguard pro Firefox` — [Rozšíření prohlížeče AdGuard](/adguard-browser-extension/availability) pro Firefox
1. `AdGuard pro iOS` — [AdGuard pro iOS](/adguard-for-ios/features/safari-protection) a AdGuard pro iOS Pro (pro mobilní prohlížeč Safari)
1. `AdGuard pro Safari` — [AdGuard pro desktopový prohlížeč Safari](/adguard-for-safari/features/general)
1. `Blokátor obsahu AdGuard` — [blokátor obsahu](/adguard-content-blocker/overview) pro mobilní prohlížeče Android: Samsung Internet a Yandex Browser

### Zkratky kompatibility {#what-compatibility}

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- 🧩 — může být již implementováno ve verzích nightly nebo beta, ale není ještě podporováno ve verzích pro vydání
- ⏳ - funkce, jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno
- 👎 — zastaralé; stále podporovano, ale v budoucnu bude odstraněno
- 🚫 — odstraněno a již nepodporováno

:::

[popup-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#popup

[Sec-Fetch-Dest]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[jsinject-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#jsinject

[badfilter-in-mv3]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#badfilter

[native-has]: https://developer.mozilla.org/docs/Web/CSS/:has
[safari-16.4]: https://www.webkit.org/blog/13966/webkit-features-in-safari-16-4/

[cl-apps]: #what-product "AdGuard pro Windows, Mac, Linux a Android"
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
