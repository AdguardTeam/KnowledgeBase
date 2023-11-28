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

### Blokování přesné adresy

![Blocking exact address](https://cdn.adtidy.org/content/kb/ad_blocker/general/1_exact_address.svg)

**Toto pravidlo blokuje:**

- `http://example.org/`

**Toto pravidlo neblokuje:**

- `https://example.org/banner/img`

### Modifikátory základních pravidel

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

### Syntaxe základních pravidel {#basic-rules-syntax}

```text
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- **`pattern`** — maska adresy. Každá adresa URL požadavku je přiřazena k této masce. V šabloně můžete použít i speciální znaky, jejichž popis je uveden [pod tímto odkazem](#basic-rules-special-characters). Vezměte na vědomí, že AdGuard zkracuje adresy URL na délku 4096 znaků, aby urychlil porovnávání a předešel problémům s nesmyslně dlouhými adresami URL.
- **`@@`** — znak, který se používá v pravidlech výjimek. Chcete-li filtrování požadavku vypnout, začněte pravidlo touto značkou.
- **`modifiers`** — parametry, které "objasňují" základní pravidlo. Některé z nich omezují rozsah pravidel a některé mohou zcela změnit jejich fungování.

### Speciální znaky {#basic-rules-special-characters}

- **`*`** — zástupný znak. Používá se k reprezentaci libovolné sady znaků. Může to být také prázdný řetězec nebo řetězec libovolné délky.
- **`||`** — indikace o použití pravidla na zadanou doménu a její subdomény. S tímto znakem nemusíte v masce adresy zadávat konkrétní protokol a subdoménu. Tj., že `||` znamená `http://*.`, `https://*.`, `ws://*.`, `wss://*.` najednou.
- **`^`** — oddělovací znak. Oddělovací znak je libovolný znak, mimo písmeno, číslice nebo jeden z následujících znaků: `_` `-` `.` `%`. V tomto příkladu jsou oddělovací znaky zobrazeny tučně: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. Konec adresy je také akceptován jako oddělovací znak.
- **`|`** — ukazatel na začátku nebo konci adresy. Hodnota závisí na umístění znaku v masce. Např. pravidlo `swf|` odpovídá `http://example.com/annoyingflash.swf`, ale neodpovídá `http://example.com/swf/index.html`. `|http://example.org` odpovídá `http://example.org`, ale ne `http://domain.com?url=http://example.org`.

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

### Omezení uplatňování pravidel {#rules-restrictions}

Pravidla, která odpovídají libovolně velkému počtu adres URL, jsou považována za nesprávná a budou ignorována. K tomu může dojít, pokud pravidlo neobsahuje masku nebo pokud maska odpovídá jakékoli URL s určitým protokolem.

Toto pravidlo bude ignorováno:

```text
|http://$replace=/a/b/
```

Toto omezení lze obejít použitím regulárního výrazu `/.*/` uvnitř masky.

Toto pravidlo nebude ignorováno:

```text
/.*/$replace=/a/b/
```

**Výjimky**

Tato validace pravidel se nepoužije v následujících případech:

1. Pravidlo obsahuje modifikátor [`$domain`](#domain-modifier), který ukazuje na konkrétní seznam domén

    Tato pravidla nebudou ignorována:

    ```text
    $domain=example.com,script
    $domain=example.*,script
    ```

    Toto pravidlo bude ignorováno z důvodu doménové negace, která způsobuje příliš široký rozsah použití pravidla:

    ```text
    $domain=~example.com,script
    ```

1. Pravidlo obsahuje modifikátor [`$app`](#app-modifier), který ukazuje na konkrétní seznam aplikací

    Toto pravidlo nebude ignorováno:

    ```text
    $app=curl,document
    ```

    Toto pravidlo bude ignorováno z důvodu negace aplikace, která způsobuje příliš široký rozsah použití pravidla:

    ```text
    $app=~curl,document
    ```

1. Pravidlo obsahuje jeden nebo více modifikátorů z [`$cookie`](#cookie-modifier), [`$removeparam`](#removeparam-modifier), [`$removeheader`](#removeheader-modifier), [`$stealth`](#stealth-modifier)

    Tato pravidla nebudou ignorována:

    ```text
    $removeparam=cx_recsWidget
    $cookie=ibbid
    $removeheader=location
    $stealth
    ```

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

- `||example.org^$third-party` —  toto pravidlo blokuje požadavky třetích stran na `example.org` a jejím subdoménám.

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

| Modifikátor \ Produkty               | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] |     [AdGuard pro iOS][ios-app]      |    [AdGuard pro Safari][ext-saf]    | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:-----------------------------------:|:-----------------------------------:|:---------------------------------:|
| [$app](#app-modifier)                 |              ✅               |                ❌                |               ❌               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$denyallow](#denyallow-modifier)     |              ✅               |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$domain](#domain-modifier)           |              ✅               |                ✅                |               ✅               | ✅ [*](#domain-modifier-limitations) | ✅ [*](#domain-modifier-limitations) |                 ✅                 |
| [$header](#header-modifier)           |              ✅               |                ⏳                |               ⏳               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$important](#important-modifier)     |              ✅               |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ❌                 |
| [$match-case](#match-case-modifier)   |              ✅               |                ✅                |               ✅               |                  ⏳                  |                  ⏳                  |                 ✅                 |
| [$method](#method-modifier)           |              ⏳               |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |
| [$popup](#popup-modifier)             |             ✅ *              |                ✅                |               ✅               |                 ✅ *                 |                 ✅ *                 |                 ❌                 |
| [$third-party](#third-party-modifier) |              ✅               |                ✅                |               ✅               |                  ✅                  |                  ✅                  |                 ✅                 |
| [$to](#to-modifier)                   |              ⏳               |                ✅                |               ✅               |                  ❌                  |                  ❌                  |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
<!-- - 🧩 — may already be implemented in nightly or beta versions but is not yet supported in release versions -->
- ⏳ — funkce, která byla implementována nebo jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
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
- V systému Windows se v názvu procesu nerozlišují velká a malá písmena, počínaje verzí AdGuard pro Windows, která má pod kapotou knihovnu CoreLibs v1.12.

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
- Domény v hodnotě modifikátoru nemohou být negovány, např. `$denyallow=~x.com`, nebo mít zástupný znak TLD, např. `$denyallow=x.*`.

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
- **`regexp`** — regulární výraz, který začíná a končí znakem `/`. Vzor funguje stejně jako v základních pravidlech pro URL adresy, ale znaky `/`, `$` a `,` musí být uvozeny pomocí `\`.

:::info

Pravidla s modifikátorem `$domain` jako `regular_domain` nebo `any_tld_domain` jsou podporována všemi AdGuard produkty.

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

V některých případech může modifikátor `$domain` odpovídat nejen doméně odkazovače, ale také cílové doméně. K tomu dojde, pokud platí všechny následující podmínky:

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

Safari nepodporuje současné použití povolených a zakázaných domén, takže pravidla jako `||baddomain.com^$domain=example.org|~foo.example.org` nebudou v AdGuardu pro iOS a AdGuardu pro Safari fungovat.

:::

:::info Kompatibilita

Pravidla s regulárním výrazem `$domain` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs v11 nebo novější**.

V AdGuardu pro Windows, Mac a Android **s CoreLibs v1.12 nebo novějším** může být modifikátor `$domain` alternativně zapsán jako `$from`.

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

:::info Kompatibilita

Pravidla s modifikátorem `$header` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.11 nebo novější.

:::

#### **`$important`** {#important-modifier}

Modifikátor `$important` použitý na pravidlo zvyšuje jeho prioritu před jakýmkoli jiným pravidlem bez modifikátoru `$important`. Dokonce i přes základní pravidla výjimek.

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

Pravidla s `$match-case` jsou podporována aplikací AdGuard pro iOS a AdGuard pro Safari s **SafariConverterLib v2.0.43 nebo novějším**.

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

Pravidla se smíšenými negovanými a negovanými hodnotami jsou považována za neplatná. Takže např. pravidlo `||evil.com^$method=get|~head` bude zamítnuto.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$method` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.12 nebo novější a Rozšířením prohlížeče AdGuard pro Chrome, Firefox a Edge s filtrem TSUrlFilter v2.1.1 nebo novějším.

:::

#### **`$popup`** {#popup-modifier}

AdGuard se pokusí zavřít kartu prohlížeče s jakoukoli adresou, která odpovídá pravidlu blokování s tímto modifikátorem. Upozorňujeme, že ne všechny karty lze zavřít.

**Příklady**

- `||domain.com^$popup` — pokud se pokusíte přejít na `http://domain.com/` z libovolné stránky v prohlížeči, nová karta, ve které má být zadaný web otevřen, bude tímto pravidlem zavřena.

:::info Kompatibilita

- Modifikátor `$popup` funguje nejlépe v Rozšíření prohlížeče AdGuard.
- V AdGuardu pro Safari a iOS, pravidla `$popup` stránku jednoduše a okamžitě zablokují.
- V AdGuardu pro Windows, Mac a Android nemusí modifikátor `$popup` v některých případech detekovat vyskakovací okno a nebude zablokováno. Modifikátor `$popup` použije typ obsahu `document` se speciálním příznakem, který je předán blokovací stránce. Samotná blokovací stránka může provést některé kontroly a zavřít okno, pokud se skutečně jedná o vyskakovací okno. V opačném případě by se stránka měla načíst. Lze to kombinovat s dalšími modifikátory typu požadavku, jako je `$third-party` a `$important`.
- Pravidla s modifikátorem `$popup` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$third-party`** {#third-party-modifier}

Omezení požadavků třetích stran a vlastních požadavků. Požadavek třetí strany je požadavek z jiné domény. Např. požadavek na `example.org` z `domain.com` je požadavek třetí strany.

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

- `||domain.com$~third-party` — toto pravidlo se použije pro `domain.com`, ale ne pro ostatní domény. Příklad požadavku, který není požadavkem třetí strany: `http://domain.com/icon.ico`.

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

[`$denyallow`](#denyallow-modifier) nelze použít společně s `$to`. Lze ji vyjádřit pomocí invertovaného `$to`: `$denyallow=a.com|b.com`, což je je ekvivalent k `$to=~a.com|~b.com`.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$to` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.12 nebo novější a Rozšířením prohlížeče AdGuard s filtrem TSUrlFilter v2.1.3 nebo novějším.

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

| Modifikátor \ Produkty                                       | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$document](#document-modifier)                               |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$font](#font-modifier)                                       |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$image](#image-modifier)                                     |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$media](#media-modifier)                                     |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$object](#object-modifier)                                   |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$other](#other-modifier)                                     |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$ping](#ping-modifier)                                       |             ✅ *              |                ✅                |               ✅               |             ❌              |               ❌               |                 ✅                 |
| [$script](#script-modifier)                                   |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$stylesheet](#stylesheet-modifier)                           |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$subdocument](#subdocument-modifier)                         |             ✅ *              |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$websocket](#websocket-modifier)                             |              ✅               |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ✅                 |
| [$xmlhttprequest](#xmlhttprequest-modifier)                   |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$webrtc 🚫](#webrtc-modifier "removed")                       |              ❌               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$object-subrequest 🚫](#object-subrequest-modifier "removed") |              ❌               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |

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

#### **`$other`** {#other-modifier}

Pravidlo se vztahuje na požadavky, jejichž typ nebyl určen nebo neodpovídá výše uvedeným typům.

#### **`$ping`** {#ping-modifier}

Pravidlo odpovídá požadavkům vyvolaným buď `navigator.sendBeacon()`, nebo atributem `ping` v odkazech.

:::info Kompatibilita

AdGuard pro Windows, Mac a Android často nedokáží přesně detekovat `navigator.sendBeacon()`. V seznamech filtrů, které mají používat AdGuard produkty založené na knihovně CoreLibs, se nedoporučuje používat `$ping`.

Pravidla s modifikátorem `$ping` nejsou podporována AdGuardem pro iOS a Safari.

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

:::info Kompatibilita

V AdGuardu pro Windows, macOS a Android jsou vnořené dokumenty detekovány hlavičkou [Sec-Fetch-Dest][sec-fetch-dest-header] pokud je přítomna. V opačném případě mohou být některé hlavní stránky považovány za dílčí dokumenty.

Pravidla s modifikátorem `$subdocument` nejsou Blokátorem obsahu AdGuard podporována.

:::

#### **`$websocket`** {#websocket-modifier}

Pravidlo se vztahuje pouze na připojení WebSocket.

:::info Kompatibilita

Modifikátor `$websocket` je podporován ve všech produktech AdGuardu kromě Blokátoru obsahu AdGuard. Pokud jde o AdGuard pro Safari a AdGuard pro iOS, je podporován v zařízeních s macOS Monterey (verze 12) a iOS 16 nebo novějším.

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

- `||example.com^$webrtc,domain=example.org` blokuje připojení webRTC na `example.com` pro `example.org`.
- `@@*$webrtc,domain=example.org` zakáže RTC wrapper pro `example.org`.

### Modifikátory pravidel pro výjimky {#exception-modifiers}

Pravidla výjimek deaktivují ostatní základní pravidla pro adresy, kterým odpovídají. Začínají značkou `@@`. Lze na ně aplikovat všechny výše uvedené základní modifikátory a mají také několik speciálních modifikátorů.

:::note Vizuální znázornění

Doporučujeme také seznámit se s [přehledem filtrů Adblock Plus](https://adblockplus.org/filter-cheatsheet#blocking), abyste lépe pochopili, jak pravidla výjimek vytvářet.

:::

<!-- Please keep them sorted -->

| Modifikátor \ Produkty                 | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| --------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$content](#content-modifier)           |              ✅               |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$elemhide](#elemhide-modifier)         |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$extension](#extension-modifier)       |              ✅               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$jsinject](#jsinject-modifier)         |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$stealth](#stealth-modifier)           |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$urlblock](#urlblock-modifier)         |              ✅               |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$genericblock](#genericblock-modifier) |              ✅               |                ✅                |               ✅               |            ✅ *             |              ✅ *              |                 ❌                 |
| [$generichide](#generichide-modifier)   |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [$specifichide](#specifichide-modifier) |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

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

`userscript_name(i)` označuje konkrétní název uživatelského skriptu, který má být modifikátorem zakázán. Modifikátor může obsahovat libovolný počet názvů uživatelských skriptů nebo je nemusí obsahovat vůbec. V druhém případě modifikátor zakáže všechny uživatelské skripty.

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
- `@@||example.com^$extension='AdGuard Assistant'|'Popup Blocker'` zakáže uživatelské skripty `AdGuard asistent` a `Blokátor vyskakovacích oken` na `example.com`.
- `@@||example.com^$extension=~"AdGuard Assistant"` zakáže všechny uživatelské skripty na `example.com`, kromě `AdGuard asistenta`.
- `@@||example.com^$extension=~"AdGuard Assistant"|~"Popup Blocker"` zakáže všechny uživatelské skripty na `example.com`, kromě `AdGuard asistenta` a `Blokátor vyskakovacích oken`.
- `@@||example.com^$extension` žádné uživatelské skripty nebudou fungovat na `example.com`.
- `@@||example.com^$extension="AdGuard \"Assistant\""` zakáže uživatelský skript `AdGuard "Asistant"` na `example.com`.

:::info Kompatibilita

- Pouze AdGuard pro Windows, Mac a Android jsou technicky schopné používat pravidla s modifikátorem `$extension`.
- Modifikátor se specifickým názvem uživatelského skriptu `$extension` je podporován AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.13 nebo novější**.

Pravidla s modifikátorem `$extension` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.13 nebo novější.

:::

#### **`$jsinject`** {#jsinject-modifier}

Zakazuje přidávání javascriptového kódu na stránku. O pravidlech skripletů a javascriptu si můžete přečíst dále.

**Příklady**

- `@@||example.com^$jsinject` zakáže javasript na `example.com` a všech subdoménách.

#### **`$stealth`** {#stealth-modifier}

Zakáže modul Režim utajení pro všechny odpovídající stránky a požadavky.

**Syntaxe**

```text
$stealth [= opt1 [| opt2 [| opt3 [...]]]]
```

`opt(i)` znamená určité možnosti Režimu utajení deaktivované modifikátorem. Modifikátor může obsahovat libovolný počet možností (viz níže) nebo je nemusí obsahovat vůbec. V druhém případě modifikátor vypne všechny funkce Režimu utajení.

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

- `@@||example.com^$stealth` zakáže Režim utajení pro požadavky `example.com` (a subdomény) s výjimkou blokování cookies a skrytí sledovacích parametrů (viz níže).
- `@@||domain.com^$script,stealth,domain=example.com` zakáže Režim utajení pouze pro požadavky skriptů na `domain.com` (a subdoménách) na `example.com` a subdoménách.
- `@@||example.com^$stealth=3p-cookie|dpi` zakáže blokování cookies třetích stran a opatření pro oklamání DPI pro `example.com`.

:::note

Blokování cookies a odstranění sledovacích parametrů se provádí pomocí pravidel s modifikátory [`$cookie`](#cookie-modifier) a [`$removeparam`](#removeparam-modifier). Pravidla výjimek pouze s modifikátorem `$stealth` tyto věci neudělají. Pokud chcete pro danou doménu zcela zakázat všechny funkce Režimu utajení, musíte uvést všechny tři modifikátory: `@@||example.org^$stealth,removeparam,cookie`

:::

:::caution Omezení

- Možnosti modifikátoru by měly být psány malými písmeny, tj. `$stealth=DPI` budou zamítnuty.
- Možnosti modifikátoru nelze negovat, tj. `$stealth=~3p-cookie` bude zamítnuto.

:::

:::info Kompatibilita

- Režim utajení je k dispozici v AdGuardu pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard. Všechny ostatní produkty budou ignorovat pravidla s modifikátorem `$stealth`.
- Pravidla s modifikátorem `$stealth` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.10 nebo novější.

:::

#### **`$urlblock`** {#urlblock-modifier}

Zakáže blokování všech požadavků odeslaných ze stránek, které odpovídají pravidlu a zakáže všechna pravidla [`$cookie`](#cookie-modifier).

**Příklady**

- `@@||example.com^$urlblock` — nebudou blokovány žádné požadavky odeslané z `example.com` a ze všech subdomén.

:::info Kompatibilita

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$urlblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

Pravidla s modifikátorem `$urlblock` nejsou Blokátorem obsahu AdGuard podporována.

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

:::info Kompatibilita

V AdGuardu pro iOS a AdGuardu pro Safari fungují pravidla `$genericblock` jako [$document exclusion](#document-modifier) — odblokování všeho.

Pravidla s modifikátorem `$genericblock` nejsou Blokátorem obsahu AdGuard podporována.

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

| Modifikátor \ Produkty                     | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$all](#all-modifier)                       |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$badfilter](#badfilter-modifier)           |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$cookie](#cookie-modifier)                 |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$csp](#csp-modifier)                       |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$hls](#hls-modifier)                       |              ✅               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$inline-font](#inline-font-modifier)       |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$inline-script](#inline-script-modifier)   |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$jsonprune](#jsonprune-modifier)           |              ✅               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$network](#network-modifier)               |              ✅               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$permissions](#permissions-modifier)       |              ✅               |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |
| [$redirect](#redirect-modifier)             |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$redirect-rule](#redirect-rule-modifier)   |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$referrerpolicy](#referrerpolicy-modifier) |              🧩               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$removeheader](#removeheader-modifier)     |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$removeparam](#removeparam-modifier)       |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$replace](#replace-modifier)               |              ✅               |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [noop](#noop-modifier)                      |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$empty 👎](#empty-modifier "deprecated")    |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [$mp4 👎](#mp4-modifier "deprecated")        |              ✅               |                ✅                |               ✅               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- 🧩 — může být již implementováno ve verzích nightly nebo beta, ale není ještě podporováno ve verzích pro vydání
- ❌ — nepodporováno
- 👎 — zastaralé; stále podporovano, ale v budoucnu bude odstraněno

:::

#### **`$all`** {#all-modifier}

`$all` modifikátor je složen ze [všech modifikátorů typů obsahu](#content-type-modifiers) a [`$popup`](#popup-modifier). Např. pravidlo `||example.org^$all` se převádí na pravidlo:

```adblock
||example.org^$document,subdocument,font,image,media,object,other,ping,script,stylesheet,websocket,xmlhttprequest,popup
```

Tento modifikátor nelze použít jako výjimku se znakem `@@`.

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
- **`strategy`** — řetězec pro strategii použití cookie [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

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

:::caution Omezení

Pravidla `$cookie` podporují omezený seznam modifikátorů: `$domain`, `$~domain`, `$important`, `$third-party` a `$~third-party`.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$cookie` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

#### **`$csp`** {#csp-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý na pravidlo, pravidlo nezablokuje odpovídající požadavek. Namísto toho se upraví záhlaví odpovědí.

:::info

Pro použití tohoto typu pravidel je nutné mít základní znalosti o vrstvě zabezpečení [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

:::

U požadavků, které odpovídají pravidlu `$csp`, posílíme zásady zabezpečení odezvy posílením zásad zabezpečení obsahu, podobně jako u zásad zabezpečení obsahu modifikátoru obsahu `$csp`. Pravidla `$csp` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Ostatní základní pravidla na to nemají žádný vliv, **kromě výjimek na úrovni dokumentu** (viz část s příklady níže).

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
- Pravidla `$csp` podporují omezený seznam modifikátorů: `$domain`, `$important`, `$subdocument`.
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

Znaky `/`, `$` a `,` musí být uvozeny pomocí `\` uvnitř `regexp`.

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

Rychlé shrnutí [specifikace](https://datatracker.ietf.org/doc/html/rfc8216):

1. Seznam stop HLS je kolekce textových řádků
1. Řádek může být prázdný, komentář (začíná `#`), znak (také začíná `#`, lze jej rozpoznat pouze podle názvu) nebo URL
1. Řádek URL se nazývá "segment"
1. Znaky se mohou vztahovat na jeden segment, tj. první řádek adresy URL za znakem, na všechny segmenty následující za znakem až do znaku se stejným názvem nebo na celý seznam skladeb

Některé specifické body týkající se fungování pravidel `$hls`:

1. Při odstranění segmentu se odstraní také všechny znaky, které se vztahují pouze k tomuto segmentu
1. Pokud se znak vztahuje na více segmentů a všechny tyto segmenty jsou odstraněny, je odstraněna i znak
1. Protože neexistuje způsob, jak rozpoznat různé druhy znaků podle syntaxe, rozpoznáváme všechny znaky uvedené v RFC a některé nestandardní znaky, se kterými jsme se setkali v praxi. Všechny řádky začínající na `#`. Ty, které nejsou rozpoznány jako znak, jsou předány bez úprav a nejsou porovnávány s pravidly
1. Nepřiřazujeme znaky, které se vztahují na celý seznam videí a pravidla `$hls` nelze použít k jejich odstranění, protože pravidla `$hls` jsou určena k odstranění segmentů. Pokud víte, co děláte, můžete pomocí pravidel `$replace` odstranit nebo přepsat pouze jeden znak ze seznamu skladeb

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

- Pravidla `$hls` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
- Pravidla `$hls` jsou kompatibilní pouze s modifikátory `$domain`, `$third- party`, `$app`, `$important`, `$match- case` a `$xmlhttprequest`.
- `$hls` pravidla platí pouze pro seznamy stop HLS, což je text kódovaný v UTF-8 začínající řádkem `#EXTM3U`. Jakákoli jiná odpověď nebude těmito pravidly upravena.
- Pravidla `$hls` neplatí, pokud je velikost původní odpovědi větší než 3 MB.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$hls` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.10 nebo novější**.

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

V AdGuardu pro Windows, Mac a Android **s CoreLibs v1.11 nebo novější**, podporuje `$jsonprune` také úpravu dokumentů JSONP (padded JSON).

**Syntaxe**

- `||example.org^$jsonprune=expression` odstraní z odpovědi položky, které odpovídají upravenému výrazu JSONPath `expression`.

Vzhledem k tomu, jak funguje rozbor pravidel, musí být znaky `$` a `,` uvozeny pomocí `\` uvnitř `expression`.

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

V AdGuardu pro Windows, Mac a Android, **s knihovnou CoreLibs v1.11 nebo novější**, lze výrazy JSONPath použít jako klíče ve výrazech filtru.

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

- Pravidla `$jsonprune` jsou kompatibilní s těmito specifickými modifikátory `$domain`, `$third-party`, `$app`, `$important`, `$match-case` a `$xmlhttprequest`.
- Pravidla `$jsonprune` neplatí, pokud je velikost původní odpovědi větší než 3 MB.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$jsonprune` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.10 nebo novější**.

:::

#### **`$network`** {#network-modifier}

Jedná se v podstatě o pravidla typu brány Firewall, která umožňují plně zablokovat nebo odblokovat přístup na zadanou vzdálenou adresu.

1. Pravidla `$network` odpovídají **pouze IP adresám**! Nelze je použít k zablokování nebo odblokování přístupu k doméně.
2. Chcete-li se shodovat s adresou IPv6, musíte použít sbalenou syntaxi, např. `[2001:4860:4860::8888]$network` namísto `[2001:4860:4860:0:0:0:0:8888]$network`.
3. Pravidlo seznamu povolených `$network` způsobí, že AdGuard bude obcházet data odpovídajícího koncového bodu, např. nebude provádět žádné další filtrování.
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

U požadavků, které odpovídají pravidlu `$permissions`, AdGuard posiluje zásady funkcí odpovědi přidáním dalších zásad oprávnění, které se rovnají obsahu modifikátoru `$permissions`. Pravidla `$permissions` jsou aplikována nezávisle na jakémkoli jiném typu pravidla. Ostatní základní pravidla na to nemají žádný vliv, **kromě výjimek na úrovni dokumentu** (viz část s příklady).

**Vícenásobná pravidla odpovídajících jednomu požadavku.**

V případě, že jednomu požadavku odpovídá více pravidel `$permissions`, použijem AdGuard každé z nich.

**Syntaxe**

Hodnota syntaxe `$permissions` je podobná [syntaxi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy) záhlaví `Permissions-Policy` s jednou výjimkou: čárka, která odděluje několik prvků **MUSÍ** být uvozena — viz příklady níže. Seznam dostupných direktiv je k dispozici [zde](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).

Hodnota `$permissions` může být v případě pravidel pro výjimky prázdná — viz příklady níže.

**Příklady**

- `||example.org^$permissions=autoplay=()` zakáže automatické přehrávání médií vyžádaných prostřednictvím rozhraní `HTMLMediaElement` v rámci `example.org`.
- `@@||example.org/page/*$permissions=autoplay=()` zakáže všechna pravidla s modifikátorem `$permissions` přesně odpovídajícím příznakem `autoplay=()` na všech stránkách odpovídajících vzoru pravidla. Např. výše uvedené pravidlo.
- `@@||example.org/page/*$permissions` zakáže všechna pravidla `$permissions` na všech stránkách odpovídajících vzoru pravidla.
- `$domain=example.org|example.com,permissions=storage-access=()\, camera=()` zakáže použití API pro přístup k úložišti pro vyžádání přístupu k nerozděleným souborům cookies a používání vstupních zařízení videa napříč `example.org` a `example.com`.
- `@@||example.org^$document` nebo `@@||example.org^$urlblock` zakáží všechna pravidla `$permission` na všech stránkách odpovídajících vzoru pravidla.

:::caution Omezení

1. Zakázané znaky v `$permissions` hodnotě: `$`
1. `$permissions` je kompatibilní s omezeným seznamem modifikátorů: `$domain`, `$important`, a `$subdocument`

:::

:::info Kompatibilita

Pravidla s modifikátorem `$permissions` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**.

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

Další informace o přesměrování a jeho použití jsou k dispozici na adrese [na GitHubu](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

##### Priority pravidel `$redirect` {#redirect-rule-priorities}

Pravidla `$redirect` mají vyšší prioritu než běžná základní pravidla blokování. To znamená, že pokud existuje základní pravidlo blokování, pravidlo `$redirect` jej přepíše. Pravidla seznamu povolených se znakem `@@` mají vyšší prioritu než pravidla `$redirect`. Pokud se základní pravidlo s modifikátorem `$important` a pravidlem `$redirect` shoduje se stejnou adresou URL, je druhé pravidlo přepsáno, pokud není též označeno jako `$important`.

<!-- Please do not replace `>` by `→` -->

**Ve zkratce: `$important` > `@@` > `$redirect` > `basic rules`.**

Další podrobnosti najdete v [prioritách pravidel](#rule-priorities).

:::info Kompatibilita

- Pravidla s modifikátorem `$redirect` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.
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

Pravidla s modifikátorem `$redirect-rule` nejsou podporována Blokátorem obsahu AdGuard, AdGuardem pro iOS a AdGuardem pro Safari.

:::

#### **`$referrerpolicy`** {#referrerpolicy-modifier}

Tato pravidla umožňují přepsat [zásadu odkazování stránky](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy). V odezvách na shodné požadavky budou všechny hlavičky `Referrer-Policy` nahrazeny jedinou hlavičkou s hodnotou rovnou hodnotě modifikátoru shodného pravidla. Pokud odezva obsahuje dokument HTML se značkou `<meta name="referrer"...`, atribut `content` značky bude také nahrazen hodnotou modifikátoru.

Pravidlo výjimky s hodnotou modifikátoru zakáže pravidlo blokování se stejnou hodnotou modifikátoru. Pravidlo výjimky bez hodnoty modifikátoru zakáže všechna odpovídající pravidla zásad odkazování.

Pokud požadavek odpovídá více pravidlům `$referrerpolicy`, která nejsou zakázána výjimkami, použije se pouze jedno z nich (není uvedeno, které).

**Příklady**

- `||example.com^$referrerpolicy=unsafe-url` přepíše zásady odkazování pro `example.com` pomocí `unsafe-url`.
- `@@||example.com^$referrerpolicy=unsafe-url` zakáže předchozí pravidlo.
- `@@||example.com/abcd.html^$referrerpolicy` zakáže všechna pravidla `$referrerpolicy` na `example.com/abcd.html`.

:::caution Omezení

Pravidla `$referrerpolicy` jsou kompatibilní pouze s modifikátory typu obsahu `$document` a `$subdocument` [](#content-type-modifiers).

:::

:::info Kompatibilita

Pravidla s modifikátorem `$referrerpolicy` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.12 nebo novější**.

:::

#### **`$removeheader`** {#removeheader-modifier}

Pravidla s modifikátorem `$removeheader` jsou určena k odstranění záhlaví z požadavků a odpovědí HTTP. Původní motivací pro tento typ pravidla je možnost zbavit se záhlaví `Refresh`, které se často používá k přesměrování uživatelů na nežádoucí místo. To však není jediný případ, kdy může být tento modifikátor užitečný.

Stejně jako `$csp`, `$redirect`, `$removeparam` a `$cookie` i tento modifikátor existuje samostatně, pravidla s ním nezávisí na běžných základních pravidlech, tj. pravidelná výjimka nebo pravidla blokování jej neovlivní. Ve výchozím nastavení ovlivňuje pouze záhlavíodpovědí. Můžete jej však také změnit tak, aby odstraňoval hlavičky z požadavků HTTP.

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

1. Pravidla `$removeheader` jsou kompatibilní s `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, a [modifikátory typu obsahu,](#content-type-modifiers) jako např. `$script` a `$stylesheet`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

:::

:::info Kompatibilita

Pravidla s modifikátorem `$removeheader` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

:::

#### **`$removeparam`** {#removeparam-modifier}

:::note

`$queryprune` je alias `$removeparam`. Protože je `$queryprune` zastaralý, nepoužívejte jej a místo něj použijte `$removeparam`.

:::

Pravidla s modifikátorem `$removeparam` jsou určena k odstranění parametrů dotazu z požadavků adres URL. Vezměte prosím na vědomí, že tato pravidla platí pouze pro `GET`, `HEAD`, `OPTIONS` a někdy požadavky `POST`.

Pravidla `$removeparam`, která neobsahují žádné modifikátory typu obsahu [](#content-type-modifiers), budou odpovídat pouze požadavkům, jejichž typem obsahu je `document`.

**Syntaxe**

**Základní syntaxe**

- `$removeparam=param` odstraní parametr dotazu s názvem `param` z URL libovolného požadavku, např. požadavek na `http://example.com/page?param=1&another=2` bude transformován na `http://example.com/page?another=2`.

:::note Kompatibilita

Pravidla s modifikátorem `$removeparam` jsou podporována AdGuardem pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.7 nebo novější a Rozšířením prohlížeče AdGuard v3.6 nebo novějším.

:::

**Regulární výrazy**

Regulární výrazy můžete použít také k porovnání parametrů dotazu a/nebo jejich hodnot:

- `$removeparam=/regexp/[options]` — odstraní parametry dotazu, které odpovídají regulárnímu výrazu `regexp` z adres URL jakéhokoli požadavku. Na rozdíl od základní syntaxe to znamená *"odebrat parametry dotazu normalizované na řetězec `name=value`, který odpovídá regulárnímu výrazu `regexp` "*. `[options]` zde je seznam možností regulárních výrazů. V současné době je jedinou podporovanou možností `i`, díky čemuž se nerozlišují malá a velká písmena.

**Uvození speciálních znaků**

Nezapomeňte v regulárních výrazech uvodit speciální znaky jako `,`, `/` a `$`. Pro tento účel použijte znak `\`. Např. uvozená čárka by měla vypadat takto: `\,`.

:::note

Pravidla typu regexp se zaměřují na název i hodnotu parametru. Aby se minimalizovala možnost chyb, je bezpečnější začínat každý regexp znakem `/^`, pokud se nezaměřujete výslovně na hodnoty parametrů.

:::

Pokusíme se automaticky detekovat a ignorovat neuvozený znak `$` pomocí jednoduchého pravidla — nejedná se o oddělovač možností, pokud jsou všechny tři hodnoty pravdivé:

1. Vypadá to jako `$/`
1. Nalevo od něj je další znak lomítka `/`
1. Nalevo od tohoto znaku lomítka je další znak dolaru bez uvození `$`

**Odebrat všechny parametry dotazu**

Chcete-li odstranit všechny parametry dotazu, zadejte samostatně `$removeparam`:

- `||example.org^$removeparam` — odstraní všechny parametry dotazu z adres URL odpovídajících `||example.org^`.

**Inverze**

Pro použití inverze použijte `~`:

- `$removeparam=~param` — odstraní všechny parametry dotazu s názvem odlišným od `param`.
- `$removeparam=~/regexp/` — odstraní všechny parametry dotazu, které neodpovídají regulárnímu výrazu `regexp`.

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

:::caution Omezení

- Pravidla s modifikátorem `$removeparam` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).
- Pravidla `$removeparam` jsou kompatibilní se [základními modifikátory](#basic-rules-basic-modifiers), [modifikátory typu obsahu](#content-type-modifiers) a s modifikátory `$important` a `$app`. Pravidla s jinými modifikátory jsou považována za neplatná a budou vyřazena.

:::

:::info Kompatibilita

- Pravidla s modifikátorem `$removeparam` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.
- Syntaxe `$removeparam` pro regulární výrazy je podporována Rozšířením prohlížeče AdGuard v4.0 a AdGuardem pro Windows, Mac a Android **s CoreLibs verze 1.8 nebo novější**.
- Typy požadavků `POST` podporuje pouze AdGuard pro Windows, Mac a Android s [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) v1.10 nebo novější.

:::

#### **`$replace`** {#replace-modifier}

Tento modifikátor zcela mění chování pravidla. Pokud je použitý, pravidlo požadavek nezablokuje. Namísto toho bude odpověď upravena.

K použití modifikátoru `$replace` budete potřebovat určité znalosti regulárních výrazů.

**Funkce**

- Pravidla `$replace` platí pro jakoukoli textovou odpověď, ale neplatí pro binární (`media`, `image`, `object` atd.).
- Pravidla `$replace` neplatí, pokud je velikost původní odpovědi větší než 3 MB.
- Pravidla `$replace` mají vyšší prioritu než ostatní základní pravidla (**včetně** pravidel výjimek). Pokud tedy požadavek odpovídá dvěma různým pravidlům, z nichž jedno má modifikátor `$replace`, použije se toto pravidlo.
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
- `modifikátory` — `i` pro necitlivé vyhledávání.

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

Pravidla s modifikátorem `$replace` lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

:::

:::info Kompatibilita

Pravidla s modifikátorem `$replace` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Firefox. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

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

Když dvě pravidla se stejnou prioritou odpovídají stejnému požadavku, záleží na filtrování implementace nástroje, které bude vybráno.

:::

:::info

Koncept priorit pravidel nabývá na významu ve světle Manifest V3, protože stávající pravidla je třeba převést na pravidla declarativeNetRequest.

:::

#### Výpočet priority

Pro výpočet priority jsme modifikátory rozdělili do různých skupin. Tyto skupiny jsou seřazeny podle priority od nejnižší po nejvyšší. Modifikátor, který výrazně zužuje oblast působnosti pravidla, zvyšuje jeho celkovou prioritu. Naopak, pokud se pravidlo vztahuje na širší okruh požadavků, jeho priorita se snižuje.

Stojí za zmínku, že existují případy, kdy má jednoparametrový modifikátor vyšší prioritu než víceparametrový. Například v případě `$domain=example.com|example.org` má pravidlo, které zahrnuje dvě domény o něco širší oblast účinnosti než pravidlo s jednou zadanou doménou, a proto je jeho priorita nižší.

Základní priorita každého pravidla je 1. Pokud je vypočtená priorita číslo s pohyblivou řádovou čárkou, bude **zaokrouhlena nahoru** na nejmenší celé číslo větší nebo rovno vypočtené prioritě.

:::info Kompatibilita

- Koncept priority byl zaveden ve verzích tsurlfilter v2.1.0 a CoreLibs v1.13. Dříve neměl AdGuard žádný speciální algoritmus pro výpočet priorit a zpracování kolizí se mohlo lišit v závislosti na produktu a verzi AdGuardu.
- Aplikace AdGuard pro iOS, Safari a Blokátor obsahu AdGuard se spoléhají na implementaci prohlížečů a nemohou dodržovat zde uvedená pravidla.

:::

:::note

Aliasy modifikátorů (`1p`, `3p` atd.) nejsou do těchto kategorií zahrnuty, nicméně jsou v rámci enginu využívány pro výpočet priority pravidla.

:::

#### Základní modifikátory, přítomnost každého z nich přidává 1 k prioritě {#priority-category-1}

<!-- Please keep them sorted -->

- [`$app`](#app-modifier) s negovanými aplikacemi pomocí `~`,
- [`$denyallow`](#denyallow-modifier),
- [`$dnsrewrite`](#dnsrewrite-modifier),
- [`$domain`](#domain-modifier) s negovanými doménami pomocí `~`,
- [`$match-case`](#match-case-modifier),
- [`$method`](#method-modifier) s negovanými metodami pomocí `~`,
- [`$third-party`](#third-party-modifier),
- [`$to`](#to-modifier),
- omezené [typy obsahu](#content-type-modifiers) s `~`.

Při práci s negovanou doménou, aplikací, metodou nebo typem obsahu přidáváme **1 bod** za existenci samotného modifikátoru bez ohledu na množství negovaných domén nebo typů obsahu. Je to proto, že oblast působnosti tohoto pravidla je již nyní nekonečně široká. Jednoduše řečeno, zákazem více domén, typů obsahu, metod nebo aplikací se rozsah pravidla zmenší jen minimálně.

#### Definované modifikátory typu obsahu, definované metody, definovaná záhlaví, $popup, speciální výjimky {#priority-category-2}

Všechny povolené typy obsahu:
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

Také zahrnuje pravidla, která implicitně přidávají modifikátor `$document`:

- [`$popup`](#popup-modifier);

Nebo speciální výjimky, které implicitně přidávají `$document,subdocument`:

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

Přítomnost jakýchkoli modifikátorů typu obsahu přidává `(50 + 50 / N)`, kde `N` je např. počet přítomných modifikátorů: `||example.com^$image,skript` přidá `50 + 50 / 2 = 50 + 25 = 75` k celkové váze pravidla. Do této kategorie patří i `$popup`, protože implicitně přidává modifikátor `$document`. Podobně specifické výjimky přidávají `$document,subdocument`.

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

**Příklad 1**

`||example.com^`

Váha pravidla bez modifikátorů: `1`.

**Příklad 2**

`||example.com^$match-case`

Váha pravidla: základní + váha modifikátoru z [kategorie 1](#priority-category-1): `1 + 1 = 2`.

**Příklad 3**

`||example.org^$removeparam=p`

Váha pravidla: základní váha + 0, protože $removeparam [není zahrnuto](#priority-category-extra) do výpočtu priority: `1 + 0 = 1`.

**Příklad 4**

`||example.org^$document,redirect=nooptext`

Váha pravidla: základní + povolený typ obsahu, [kategorie 3](#priority-category-3) + $redirect z [kategorie 6](#priority-category-6): `1 + (100 + 100 / 1) + 1000 = 1201`.

**Příklad 5**

`@@||example.org^$removeparam=p,document`

Váha pravidla: základní váha + pravidlo seznamu povolených [kategorie 5](#priority-category-5) + 0, protože $removeparam [není zapojeno](#priority-category-extra) do výpočtu priority + povolený typ obsahu [kategorie 2](#priority-category-2): `1 + 10000 + 0 + (50 + 50 / 1) = 10101`.

**Příklad 6**

`@@||example.com/ad/*$domain=example.org|example.net,important`

Váha pravidla: základní váha + pravidlo seznamu povolených [kategorie 5](#priority-category-5) + důležité pravidlo [kategorie 7](#priority-category-7) + povolené domény [kategorie 3](#priority-category-3): `1 + 10000 + 1000000 + (100 + 100 / 2) = 1010152`.

**Příklad 7**

`@@||example.org^$document` bez dalších modifikátorů je aliasem pro `@@||example.com^$elemhide,content,jsinject,urlblock,extension`

Váha pravidla: základní váha + specifické výjimky, [kategorie 4](#priority-category-4) + dva povolené typy obsahu (dokument a subdokument) [kategorie 2](#priority-category-2): `1 + 10000 * 4 + (50 + 50 / 2) = 40076`.

**Příklad 8**

`*$script,domain=a.com,denyallow=x.com|y.com`

Váha pravidla: základní váha + povolený typ obsahu [kategorie 2](#priority-category-2) + povolená doména, [kategorie 3](#priority-category-3) + denyallow [kategorie 1](#priority-category-1): `1 + (50 + 50/1) + (100 + 100 / 1) + 1 = 303`.

**Příklad 9**

`||example.com^$all` (alias to `||example.com^$document,subdocument,image,script,media,etc. + $popup`)

Váha pravidla: základní + povolený typ obsahu, [kategorie 2](#priority-category-2): `1 + (50 + 50/12) = 55`.

## Ostatní pravidla {#non-basic-rules}

Základní pravidla však nemusí k blokování reklam stačit. Někdy potřebujete skrýt prvek nebo změnit část kódu HTML webové stránky, aniž byste cokoli porušili. Pravidla popsaná v této části jsou vytvořena speciálně pro tento účel.

| Kategorie \ Produkty                    | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ---------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [Skrytí prvků](#cosmetic-elemhide-rules) |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ✅                 |
| [Pravidla CSS](#cosmetic-css-rules)      |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Rozšířené CSS](#extended-css-selectors) |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [HTML filtrování](#html-filtering-rules) |              ✅               |                ❌                |               ✅               |             ❌              |               ❌               |                 ❌                 |
| [JavaScript](#javascript-rules)          |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [Scriptlety](#scriptlets)                |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |

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

#### Syntaxe {#non-basic-rules-modifiers-syntax}

```text
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

- **`selector`** — [CSS selektor](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) definuje prvky, které mají být skryty.
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

Safari nepodporuje povolené a omezené domény. Takže pravidla jako `example.org,~foo.example.org##.textad` jsou v AdGuardu pro Safari neplatná.

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

- **`selector`** — [selektor CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), který definuje prvky, na které chceme styl použít.
- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#elemhide-syntax).
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

1. CSS [komentáře](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments) a [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) nejsou podporovány.

2. Konkrétní pseudo-třída může mít svá vlastní omezení: [`:has()`](#extended-css-has-limitations), [`:xpath()`](#extended-css-xpath-limitations), [`:nth-ancestor()`](#extended-css-nth-ancestor-limitations), [`:upward()`](#extended-css-upward-limitations), [`:is()`](#extended-css-is-limitations), [`:not()`](#extended-css-not-limitations), and [`:remove()`](#extended-css-remove-limitations).

#### Pseudo-třída `:has()` {#extended-css-has}

Návrh specifikace CSS 4.0 popisuje [`:has()` pseudo-třídu](https://www.w3.org/TR/selectors-4/#relational). Bohužel [to zatím není podporováno](https://caniuse.com/css-has) všemi oblíbenými prohlížeči.

:::note

Pravidla s pseudo-třídou `:has()` by měla používat nativní implementaci [ `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has), pokud používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:has()`, použijte explicitně znak `#?#`/`#$?#`.

:::

**Kompatibilita s jinými pseudo-třídami**

Synonyma `:-abp-has()` podporují ExtendedCss pro lepší kompatibilitu.

:::danger Upozornění na odstranění

`:if()` již není podporováno jako synonymum pro `:has()`.

:::

**Syntaxe**

```text
[target]:has(selector)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selector` — povinný, standardní nebo rozšířený selektor CSS

Pseudo-třída `:has()` vybere prvky `target`, které se hodí do `selector`. Také `selector` může začínat kombinátorem.

Seznam selektorů lze nastavit také v `selector`. V tomto případě se zatím porovnávají **všechny** selektory v seznamu. V budoucnu bude jako argument stanovena hodnota [`<forgiving-relative-selector-list>`](https://www.w3.org/TR/selectors-4/#typedef-forgiving-relative-selector-list).

##### `:has()` limitations {#extended-css-has-limitations}

Použití pseudotřída `:has()` je v některých případech [(2, 3)](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54):

- zakazuje `:has()` uvnitř pseudo akceptující pouze složené selektory;
- zakazuje `:has()` po běžných pseudoprvcích.

Nativní pseudo-třída `:has()` neumožňuje `:has()`, `:is()`, `:where()` uvnitř argumentu `:has()`, aby se zabránilo zvýšení složitosti zneplatnění `:has()` ([případ 1](https://bugs.chromium.org/p/chromium/issues/detail?id=669058#c54)). ExtendedCss však dříve takové omezení nemělo a seznamy filtrů již taková pravidla obsahují, proto jsme toto omezení do ExtendedCss nepřidali a umožnili jsme používat `:has()` uvnitř `:has()`, jak to bylo možné dříve. Chcete-li to použít, stačí vynutit použití ExtendedCss nastavením znaku pravidla `#?#`/`#$?#`.

Nativní implementace neumožňuje žádné použití `:scope` uvnitř argumentu `:has()` ([[1]](https://github.com/w3c/csswg-drafts/issues/7211), [[2]](https://github.com/w3c/csswg-drafts/issues/6399)). Přesto v seznamech filtrů některá taková pravidla existují: `div:has(:scope a)`, která nadále podporujeme tím, že je jednoduše převedeme na `div:has(> a)`, jak se to dělalo dříve.

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

:::danger Stará syntaxe

[Zpětně kompatibilní syntaxe pro `:has()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-has) je podporována, ale **nedoporučuje se**.

:::

#### Pseudo-třída `:contains()` {#extended-css-contains}

Princip pseudo-třídy `:contains()` je velmi jednoduchý: umožňuje vybrat prvky, které obsahují zadaný text nebo jejichž obsah odpovídá zadanému regulárnímu výrazu. Příznaky regexp jsou podporovány.

:::note

Pseudo-třída `:contains()` používá pro porovnávání vlastnost prvku `textContent`, nikoliv `innerHTML`.

:::

**Kompatibilita s jinými pseudo-třídami**

Pro lepší kompatibilitu jsou podporována synonyma `:-abp-contains()` a `:has-text()`.

**Syntaxe**

```text
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

```adblock
! prostý text
div:contains(banner)

! regulární výraz
div:contains(/as .* banner/)

! regulární výraz s příznaky
div:contains(/it .* banner/gi)
```

:::note

Vybrán je pouze `div` s `id=match`, protože další prvek neobsahuje žádný text a `banner` je součástí kódu, nikoli textu.

:::

:::danger Stará syntaxe

[Zpětně kompatibilní syntaxe pro `:contains()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-contains) je podporována, ale **nedoporučuje se**.

:::

#### Pseudo-třída `:matches-css()` {#extended-css-matches-css}

Pseudo-třída `:matches-css()` umožňuje porovnat prvek podle jeho aktuálních vlastností stylu. Práce pseudo-třídy je založena na použití metody [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

**Syntaxe**

```text
[target]:matches-css([pseudo-element, ] property: pattern)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `pseudo-element` — volitelný, platný standardní pseudoprvek, např. `before`, `after`, `first-line` atd.
- `property` — povinný, název vlastnosti CSS, pro kterou se má prvek zkontrolovat
- `pattern` — povinný, vzor hodnoty, který používá stejnou jednoduchou shodu se zástupnými znaky jako v základních pravidlech filtrování adres URL NEBO regulární výraz. Při tomto typu porovnávání, AdGuard vždy porovnává bez ohledu na velikost písmen. V případě regulárního výrazu vypadá vzor takto: `/regexp/`.

**Speciální znaky uvozené a neuvozené**

Všechny vzory **non-regexp** `(`,`)`,`[`,`]` musí být **neuvozeny**, např. `:matches-css(background-image:url(data:*))`.

Vzory **regexp** `\` by měly být **uvozeny**, např. `:matches-css(background-image: /^url\\("data:image\\/gif;base64.+/)`.

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

```adblock
! string pattern
div:matches-css(before, content: block me)

! string pattern with wildcard
div:matches-css(before, content: block*)

! regular expression pattern
div:matches-css(before, content: /block me/)
```

:::caution Omezení

Vzory regexp **nepodporují** příznaky.

:::

:::info Kompatibilita

Zastaralé pseudo-třídy `:matches-css-before()` a `:matches-css-after()` se již nedoporučují, ale stále jsou podporovány kvůli lepší kompatibilitě.

:::

:::danger Stará syntaxe

[Zpětně kompatibilní syntaxe pro `:matches-css()`](https://github.com/AdguardTeam/ExtendedCss#old-syntax-matches-css) je podporována, ale **nedoporučuje se**.

:::

#### Pseudo-třída `:matches-attr()` {#extended-css-matches-attr}

Pseudo-třída `:matches-attr()` umožňuje vybrat prvek podle jeho atributů, zejména pokud jsou náhodné.

**Syntaxe**

```text
[target]:matches-attr("name"[="value"])
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu názvu atributu
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro shodu hodnoty atributu

**Uvození speciálních znaků**

Pro vzory **regexp** `"` a `\` by mělo být **uvozeno**, např. `div:matches-attr(class=/[\\w]{5}/)`.

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

:::caution Omezení

Vzory regexp **nepodporují** příznaky.

:::

#### Pseudo-třída `:matches-property()` {#extended-css-property}

Pseudo-třída `:matches-property()` umožňuje vybrat prvek podle jeho vlastností.

**Syntaxe**

```text
[target]:matches-property("name"[="value"])
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `name` — povinný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků
- `value` — volitelný, jednoduchý řetězec *nebo* řetězec se zástupným znakem *nebo* regulární výraz pro porovnávání názvů vlastností prvků

**Uvození speciálních znaků**

Pro vzory **regexp** `"` a `\` by mělo být uvozeno, např. `div:matches-property(prop=/[\\w]{4}/)`.

:::note

Vzory regexp jsou podporovány v `name` pro libovolnou vlastnost v řetězci, např. `prop./^unit[\\d]{4}$/.type`.

:::

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

```adblock
div:matches-property(check.track)

div:matches-property("check./^unit_.{4,8}$/")

div:matches-property("check.unit_*"=true)

div:matches-property(memoizedProps.key="null")

div:matches-property(memoizedProps._owner.src=/ad/)
```

:::tip Pro správce filtrů

Chcete-li zkontrolovat vlastnosti konkrétního prvku, postupujte takto:

1. Zkontrolujte prvek stránky nebo jej vyberte na kartě `Elements` v nástroji DevTools prohlížeče
1. Spusťte `console.dir($0)` na kartě `Console`

:::

:::caution Omezení

Vzory regexp **nepodporují** příznaky.

:::

#### Pseudo-třída `:xpath()` {#extended-css-xpath}

Pseudo-třída `:xpath()` umožňuje vybrat prvek vyhodnocením výrazu XPath.

**Syntaxe**

```text
[target]:xpath(expression)
```

- `target` — volitelný, standardní nebo rozšířený selektor CSS
- `expression` — povinný, platný výraz XPath

##### `:xpath()` limitations {#extended-css-xpath-limitations}

`target` lze vynechat, takže je volitelný. Pro jakoukoli jinou pseudo-třídu by to znamenalo "aplikuj na *všechny* uzly DOM", ale v případě `:xpath()` to znamená jen "aplikuj na *celý* dokument", a takovéto použití výrazně zpomaluje výběr prvků. Proto jsou pravidla jako `#?#:xpath(expression)` omezena na nahlížení do znaku `body`. Např. pravidlo `#?#:xpath(//div[@data-st-area=\'Advert\'])` je analyzováno jako `#?#body:xpath(//div[@data-st- area=\'Advert\'])`.

Rozšířené selektory s definovaným `target` jako *libovolný selektor* — `*:xpath(expression)` — lze stále použít, ale nedoporučuje se to, proto by měl být místo toho uveden `target`.

Funguje správně pouze na konci selektoru, s výjimkou [pseudo-třídy :remove()](#remove-pseudos).

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

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

**Syntaxe**

```text
subject:nth-ancestor(n)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `n` — povinné, číslo >= 1 a < 256, vzdálenost k potřebnému předkovi od prvku vybraného pomocí `subject`

##### `:nth-ancestor()` limitations {#extended-css-nth-ancestor-limitations}

Pseudo-třída `:nth-ancestor()` není podporována v argumentu [pseudo-třídy `:not()`](#extended-css-not).

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

```text
subject:upward(ancestor)
```

- `subjectr` — povinný, standardní nebo rozšířený selektor CSS
- `ancestor` — povinný, specifikace pro předka prvku vybraného pomocí `subject`, lze nastavit jako:
    - *číslo* >= 1 a < 256 pro vzdálenost k požadovanému předkovi, stejně jako u položky [`:nth-ancestor()`](#extended-css-nth-ancestor)
    - *standardní selektor CSS* pro shodu nejbližšího předka

##### `:upward()` limitations {#extended-css-upward-limitations}

Pseudo-třída `:nth-upward()` není podporována v argumentu [pseudo-třídy `:not()`](#extended-css-not).

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

**Pseudo-třídu `:remove()` lze umístit pouze na konec selektoru.**

**Syntaxe**

```text
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```

- `selector` — povinný, standardní nebo rozšířený selektor CSS

##### `:remove()` a `remove` limitations {#extended-css-remove-limitations}

Pseudo-třída `:remove()` je omezena tak, aby správně fungovala pouze na konci selektoru.

Pro použití pseudo-třídy `:remove()` na libovolný prvek je třeba použít [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`. V opačném případě může být takový rozšířený selektor považován za neplatný, např. `.banner > :remove()` neplatí pro odstranění jakéhokoli podřízeného prvku třídy `banner`, takže by měl vypadat jako `.banner > *:remove()`.

Pokud je použita pseudo-třída `:remove()` nebo pseudovlastnost `remove`, všechny vlastnosti stylu se ignorují kromě pseudovlastnosti [`debug`](#selectors-debug-mode).

**Příklady**

```adblock
div.banner:remove()
div:has(> div[ad-attr]):remove()

div:contains(advertisement) { remove: true; }
div[class]:has(> a > img) { remove: true; }
```

:::note

Pravidla s pseudovlastností `remove` by měla používat znak `#$?#`: `$` pro syntaxi pravidel stylu CSS, `?` pro syntaxi ExtendedCss.

:::

#### Pseudo-třída `:is()` {#extended-css-is}

Pseudo-třída `:is()` umožňuje porovnat jakýkoli prvek, který lze vybrat kterýmkoli ze selektorů, které jí byly předány. Neplatné selektory jsou přeskočeny a pseudo-třída se vypořádá s platnými selektory bez vyhození chyby. Naše implementace [nativní `:is()` pseudo-třídy](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).

**Syntaxe**

```text
[target]:is(selectors)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selectors` — [*odpouštějící seznam selektorů*](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list) standardních nebo rozšířených selektorů. U rozšířených selektorů jsou podporovány pouze složené selektory, nikoli komplexní.

##### `:is()` limitations {#extended-css-is-limitations}

Pravidla s pseudo-třídou `:is()` by měla používat nativní implementaci [ `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is), pokud pravidla používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:is()`, použijte explicitně znak `#?#`/`#$?#`.

Pokud je argument `:is()` pseudo-třídy `selector` rozšířeným selektorem, vzhledem ke způsobu, jakým je v ExtendedCss v2.0 implementována pseudo-třída `:is()`, není možné ji použít na horní uzel DOM, kterým je `html`, tj. `#?#html:is(<extended-selectors>)` nefunguje. Pokud tedy `target` není definován nebo je definován jako [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, je rozšířené použití pseudo-třídy omezeno na **`html`potomky**, např. pravidla `#?#:is(...)` a `#?#*:is(...)` jsou analyzována jako `#?#html *:is(...)`. Upozorňujeme, že pro standardní argument selektoru takové omezení neexistuje, tj. `#?#html:is(.locked)` funguje bez problémů.

[Komplexní selektory](https://www.w3.org/TR/selectors-4/#complex) s rozšířenými pseudo-třídami nejsou podporovány jako argument `selector` pro pseudo-třídu `:is()`, povoleny jsou pouze [složené](https://www.w3.org/TR/selectors-4/#compound). Další podrobnosti naleznete v příkladech níže.

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

```text
[target]:not(selectors)
```

- `target` — nepovinný, standardní nebo rozšířený selektor CSS může být vynechán pro kontrolu *libovolného* prvku
- `selectors` — seznam standardních nebo rozšířených selektorů

##### `:not()` limitations {#extended-css-not-limitations}

Pravidla s pseudo-třídou `:not()` by měla používat nativní implementaci [ `:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not), pokud pravidla používají znak `##` a pokud je to možné, tj. bez dalších rozšířených selektorů uvnitř. Chcete-li vynutit použití pravidel ExtendedCss s `:not()`, použijte explicitně znak `#?#`/`#$?#`.

Pokud je argument `:not()` pseudo-třídy `selector` rozšířeným selektorem, vzhledem ke způsobu, jakým je v ExtendedCss v2.0 implementována pseudo-třída `:not()`, není možné ji použít na horní uzel DOM, kterým je `html`, tj. `#?#html:not(<extended-selectors>)` nefunguje. Pokud tedy `target` není definován nebo je definován jako [univerzální selektor](https://www.w3.org/TR/selectors-4/#the-universal-selector) `*`, je rozšířené použití pseudo-třídy omezeno na **`html`potomky**, např. pravidla `#?#:not(...)` a `#?#*:not(...)` jsou analyzována jako `#?#html *:not(...)`. Upozorňujeme, že pro standardní argument selektoru takové omezení neexistuje, tj. `#?#html:not(.locked)` funguje bez problémů.

`:not()` je považována za standardní pseudo-třídu CSS uvnitř argumentu pseudo-třídy [`:upward()`](#extended-css-upward), protože `:upward()` podporuje pouze standardní selektory.

"Up-looking" pseudotřídy, které jsou [`:nth-ancestor()`](#extended-css-nth-ancestor) a [`:upward()`](#extended-css-upward) nejsou podporovány uvnitř argumentu `selector` pro pseudo-třídu `:not()`.

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

#### Pseudo-třída `:if-not()` (odstraněno) {#extended-css-if-not}

:::danger Upozornění na odstranění

Pseudo-třída `:if-not()` je odstraněna a již není podporována. Pravidla s tímto modifikátorem jsou považována za neplatná.

:::

Tato pseudo-třída byla v podstatě zkratkou pro `:not(:has())`. Byla podporována ExtendedCss pro lepší kompatibilitu s některými odběry filtrů.

### Přednost kosmetických pravidel {#cosmetic-rules-priority}

Způsob, jakým jsou aplikována pravidla **pro skrývání prvků** a **CSS**, je specifický pro danou platformu.

**V AdGuardu pro Windows, Mac a Android** používáme šablonu stylů vloženou do stránky. Priorita kosmetických pravidel je stejná jako u jakéhokoli jiného souboru stylů CSS na webových stránkách. Existují však omezení: [skrytí prvku](#elemhide-syntax) a [pravidla CSS](#cosmetic-css-rules) nemohou přepsat vložené styly. V takových případech se doporučuje použít rozšířené selektory nebo filtrování HTML.

**V Rozšíření prohlížeče AdGuard** se používají tzv. "soubory uživatelských stylů". Mají vyšší prioritu než řádkové styly.

**Rozšířené selektory CSS** používají k práci JavaScript a v podstatě samy přidávají vložený styl, takže mohou přepsat jakýkoli styl.

## HTML pravidla filtrování {#html-filtering-rules}

Ve většině případů stačí k filtrování reklam základní a kosmetická pravidla. Někdy je však nutné změnit kód HTML samotné stránky před jejím načtením. V takovém případě potřebujete pravidla pro filtrování obsahu HTML. Umožňují označit prvky HTML, které mají být vyříznuty před načtením stránky prohlížečem.

:::info Kompatibilita

Pravidla filtrování HTML podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Firefox. Taková pravidla v rozšířeních pro jiné prohlížeče nefungují, protože nemohou měnit obsah na úrovni sítě.

:::

### Syntaxe

```text
     selector = [tagName] [attributes] [pseudoClasses]
   combinator = ">"
         rule = [domains] "$$" selector *(combinator selector)
      domains = [domain0, domain1[, ...[, domainN]]]
   attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
pseudoClasses = pseudoClass *pseudoClass
  pseudoClass = ":" pseudoName [ "(" pseudoArgs ")" ]
```

- **`tagName`** — název prvku s malými písmeny, např. `div` nebo `script`.
- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [syntaxi pravidel pro skrývání prvků](#elemhide-syntax).
- **`attributes`** — seznam atributů, které limitují výběr prvků. `name` — název atributu, `value` — podřetězec, který je obsažen v hodnotě atributu.
- **`pseudoName`** — název pseudotřídy.
- **`pseudoArgs`** — argumenty pseudotřídy typu funkce.
- **`combinator`** — operátor, který funguje podobně jako podřízený kombinátor [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator): to znamená, že `selector` napravo od `combinator` bude odpovídat pouze prvku, jehož přímý původce odpovídá `selector` vlevo z `combinator`.

### Příklady

**Kód HTML:**

```html
<script data-src="/banner.js"></script>
```

**Pravidlo:**

```adblock
example.org$$script[data-src="banner"]
```

Toto pravidlo odstraní všechny prvky `script` s atributem `data-src` obsahujícím podřetězec `banner`. Pravidlo platí pouze pro `example.org` a všechny její subdomény.

### Speciální atributy

Kromě obvyklých atributů, jejichž hodnotu kontroluje každý prvek, existuje sada speciálních atributů, které mění způsob fungování pravidla. Níže je uveden seznam těchto atributů:

#### `tag-content`

:::caution Upozornění na vyřazení

Tento speciální atribut může být v budoucnu nepodporován. Raději použijte pseudotřídu `:contains()`, pokud je k dispozici.

:::

Jedná se o nejčastěji používaný speciální atribut. Omezí výběr na ty prvky, jejichž kód innerHTML obsahuje zadaný podřetězec.

Měli byste použít `""` k uvození `"`>, např.: `$$script[tag-content="alert(""this is ad"")"]`

Podívejte se například na tento HTML kód:

```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Následující pravidlo smaže všechny prvky `script` s podřetězcem `banner` v jejich kódu:

```adblock
$$script[tag-content="banner"]
```

:::caution Omezení

Speciální atribut `tag-content` se nesmí objevit v selektoru nalevo od kombinátoru `>`.

:::

#### `wildcard`

:::caution Upozornění na vyřazení

Tento speciální atribut může být v budoucnu nepodporován. Raději použijte pseudotřídu `:contains()`, pokud je k dispozici.

:::

Tento speciální atribut funguje téměř jako `tag-content` a umožňuje kontrolovat kód dokumentu innerHTML. Pravidlo zkontroluje, zda kód HTML prvku odpovídá [vyhledávacímu vzoru](https://en.wikipedia.org/wiki/Glob_(programming)).

Měli byste použít `""` k uvození `"`, např.: `$$script[wildcard=""banner""]`

Např.: `$$script[wildcard="*banner*text*"]`

Zkontroluje, zda kód prvku obsahuje dva po sobě jdoucí podřetězce `banner` a `text`.

:::caution Omezení

Speciální atribut `wildcard` se nesmí objevit v selektoru nalevo od kombinátoru `>`.

:::

#### `max-length`

:::caution Upozornění na vyřazení

Tento speciální atribut může být v budoucnu nepodporován. Raději použijte pseudotřídu `:contains()` s regulárním výrazem, pokud je k dispozici.

:::

Určuje maximální délku obsahu prvku HTML. Pokud je tento parametr nastaven a délka obsahu přesahuje tuto hodnotu, pravidlo se na prvek nevztahuje.

**Výchozí hodnota**

Pokud tento parametr není zadán, považuje se `max-lenght` za 8192.

Např:

```adblock
$$div[tag-content="banner"][max-length="400"]
```

Toto pravidlo odstraní všechny prvky `div`, jejichž kód obsahuje podřetězec `banner` a jejichž délka nepřesahuje `400` znaků.

:::caution Omezení

Speciální atribut `max-length` se nesmí objevit v selektoru nalevo od kombinátoru `>`.

:::

#### `min-length`

:::caution Upozornění na vyřazení

Tento speciální atribut může být v budoucnu nepodporován. Raději použijte pseudotřídu `:contains()` s regulárním výrazem, pokud je k dispozici.

:::

Určuje minimální délku obsahu prvku HTML. Pokud je tento parametr nastaven a délka obsahu je menší než nastavená hodnota, pravidlo se na prvek nevztahuje.

Např:

```adblock
$$div[tag-content="banner"][min-length="400"]
```

Toto pravidlo odstraní všechny prvky `div`, jejichž kód obsahuje podřetězec `banner` a jejichž délka přesahuje `400` znaků.

:::caution Omezení

Speciální atribut `min-length` se nesmí objevit v selektoru nalevo od kombinátoru `>`.

:::

### Pseudotřídy

#### `:contains()`

##### Syntaxe

```text
:contains(unquoted text)
```

nebo

```text
:contains(/reg(ular )?ex(pression)?/)
```

:::note Kompatibilita

`:-abp-contains()` a `:has-text()` jsou synonyma pro `:contains()`.

:::

:::info Kompatibilita

Pseudotřída `:contains()` je podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.13 nebo novější**.

:::

Vyžaduje, aby vnitřní HTML prvku obsahovalo zadaný text nebo odpovídalo zadanému regulárnímu výrazu.

:::caution Omezení

Pseudotřída `:contains()` se nesmí objevit v selektoru nalevo od kombinátoru `>`.

:::

### Výjimky

Podobně jako u pravidel skrývání existuje speciální typ pravidel, který zakáže vybrané pravidlo filtrování HTML pro určité domény. Syntaxe je stejná, jen je třeba změnit `$$` na `$@$`.

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

AdGuard podporuje speciální typ pravidel, která umožňují vložit na webové stránky libovolný kód JavaScript.

**Důrazně doporučujeme** používat [skriptlety](#scriptlets) namísto pravidel JavaScript, kdykoli je to možné. Pravidla JS mají pomoci s laděním, ale jako dlouhodobé řešení by se mělo používat pravidlo skriptlet.

**Syntaxe**

```text
rule = [domains]  "#%#" script
```

- **`domains`** — omezení domény pro dané pravidlo. Stejné zásady jako v [pravidlech pro skrývání prvků](#elemhide-syntax).
- **`skript`** — libovolný kód JavaScript **v jednom řetězci**.

**Příklady**

- `example.org#%#window.__gaq = undefined;` spustí kód `window.__gaq = undefined;` na všech stránkách na `example.org` a jejích subdoménách.

**Výjimky**

Podobně jako u pravidel skrývání existuje speciální typ pravidel, který zakáže vybrané pravidlo JavaScript pro určité domény. Syntaxe je stejná, jen je třeba změnit `#%#` na `#@%#`.

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

Typ pravidel JavaScript lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

:::

:::info Kompatibilita

Pravidla JavaScript nejsou Blokátorem obsahu AdGuard podporována.

:::

## Pravidla skriptlet {#scriptlets}

Skriptlet je funkce JavaScript, která poskytuje rozšířené možnosti pro blokování obsahu. Tyto funkce lze v AdGuard pravidlech filtrování používat deklarativním způsobem.

:::note

AdGuard podporuje mnoho různých skriptletů. Abychom dosáhli kompatibility mezi blokátory, podporujeme také syntaxi uBO a ABP.

:::

**Syntaxe**

```text
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

- **`scriptletName`** — povinný, název skriptletu z knihovny skripletů AdGuard
- **`arguments`** — volitelnýný, seznam argumentů `string` (jiné typy argumentů nejsou podporovány)

**Příklady**

```adblock
example.org#%#//scriptlet("abort-on-property-read", "alert")
```

Toto pravidlo bude aplikováno na `example.org` a subdomény a spustí skriptlet `abort-on-property-read` s parametrem `alert`.

Přečtěte si další informace o [ladění skripletů](#debug-scriptlets).

Další informace o skriptletech najdete na [GitHubu](https://github.com/AdguardTeam/Scriptlets#scriptlets).

:::info Kompatibilita

Skriplety nejsou Blokátorem obsahu AdGuard podporovány.

:::

### Důvěryhodné skriptlety {#trusted-scriptlets}

Důvěryhodné skriptlety jsou skriptlety [](#scriptlets) s rozšířenou funkčností. Znamená to stejnou syntaxi a omezení. Názvy důvěryhodných skriptletů mají předponu `trusted-`, např. `trusted-set-cookie`, aby je bylo možné snadno odlišit od běžných skriptletů.

:::note

Důvěryhodné skriptlety nejsou kompatibilní s jinými blokátory reklam kromě AdGuardu.

:::

:::caution Omezení

Důvěryhodné skriplety lze použít [**pouze v důvěryhodných filtrech**](#trusted-filters).

:::

:::info Kompatibilita

Důvěryhodné skriplety nejsou Blokátorem obsahu AdGuard podporovány.

:::

Přečtěte si další informace o [ladění skripletů](#debug-scriptlets).

Další informace o důvěryhodných skriptletech najdete na [GitHubu](https://github.com/AdguardTeam/Scriptlets#trusted-scriptlets).

## Modifikátory pro ostatní typ pravidel {#non-basic-rules-modifiers}

Každé pravidlo lze upravit pomocí modifikátorů popsaných v následujících odstavcích.

**Syntaxe**

```text
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

- **`modifier`** — sada modifikátorů popsaných níže.
- **`rule text`** — pravidlo, které je třeba změnit.

Např.: `[$domain=example.com,app=test_app]##selector`.

V modifikátorech musí být uvozeny hodnoty následujících znaků: `[`, `]`, `,`a `\` (pokud se pro uvození nepoužívá). K uvození použijte `\`. Např. uvozená závorka vypadá takto: `\]`.

| Modifikátor \ Produkty               | [Aplikace CoreLibs][cl-apps] | [AdGuard pro Chromium][ext-chr] | [AdGuard pro Firefox][ext-ff] | [AdGuard pro iOS][ios-app] | [AdGuard pro Safari][ext-saf] | [Blokátor obsahu AdGuard][and-cb] |
| ------------------------------------- |:----------------------------:|:-------------------------------:|:-----------------------------:|:--------------------------:|:-----------------------------:|:---------------------------------:|
| [$app](#non-basic-app-modifier)       |              ✅               |                ❌                |               ❌               |             ❌              |               ❌               |                 ❌                 |
| [$domain](#non-basic-domain-modifier) |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$path](#non-basic-path-modifier)     |              ✅               |                ✅                |               ✅               |             ✅              |               ✅               |                 ❌                 |
| [$url](#non-basic-url-modifier)       |              ✅               |                ⏳                |               ⏳               |             ❌              |               ❌               |                 ❌                 |

:::note

- ✅ — plně podporováno
- ⏳ — funkce, která byla implementována nebo jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno

:::

### **`$app`** {#non-basic-app-modifier}

Modifikátor `$app` umožňuje zúžit pokrytí pravidla na konkrétní aplikaci, nebo seznam aplikací. Chování a syntaxe modifikátoru dokonale odpovídají příslušným [základním pravidlům modifikátoru `$app`](#app-modifier).

**Příklady**

- `[$app=org.example.app]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z `org.example.app` v aplikaci Android.
- `[$app=~org.example.app1|~org.example.app2]example.com##.textad` skryje `div` s třídou `textad` na `example.com` a všech subdoménách v požadavcích odeslaných z jakékoli aplikace kromě `org.example.app1` a `org.example.app2`.
- `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')` použije skriplet `prevent-setInterval` pouze v prohlížeči Safari na počítači Mac.
- `[$app=org.example.app]#@#.textad` zakáže všechna pravidla `##.textad` pro všechny domény při použití `org.example.app`.

:::info Kompatibilita

Taková pravidla s modifikátorem `$app` podporuje AdGuard pro Windows, Mac a Android.

:::

### **`$domain`** {#non-basic-domain-modifier}

Modifikátor `$domain` omezuje oblast použití pravidla na seznam domén a jejich subdomén. Chování a syntaxe modifikátoru dokonale odpovídají příslušným [základním pravidlům modifikátoru `$domain`](#domain-modifier).

**Příklady**

- `[$domain=example.com]##.textad` — skryje `div` s třídou `textad` na doméně `example.com` a všech subdoménách.
- `[$domain=example.com|example.org]###adblock` — skryje prvek s atributem `id`, který se rovná `adblock` na `example.com`, `example.org` a všech subdoménách.
- `[$domain=~example.com]##.textad` — toto pravidlo skryje prvek `div` se třídou `textad` na všech doménách kromě `example.com` a jejích subdomén.

Existují 2 způsoby, jak určit omezení domény pro ostatní pravidla:

1. "klasický" způsob je zadat domény před masku pravidla a atributy: `example.com##.textad`;
2. přístup modifikátoru spočívá v určení domén pomocí modifikátoru `$domain`: `[$domain=example.com]##.textad`.

Pravidla s omezením domén smíšeného stylu jsou však považována za neplatná. Takže např. pravidlo `[$domain=example.org]example.com##.textad` bude zamítnuto.

:::info Kompatibilita

Taková pravidla s modifikátorem `$domain` podporuje AdGuard pro Windows, Mac, Android a Rozšíření prohlížeče AdGuard pro Chrome, Firefox a Edge.

:::

### **`$path`** {#non-basic-path-modifier}

Modifikátor `$path` omezuje oblast použití pravidel na konkrétní umístění nebo stránky na webových stránkách.

**Syntaxe**

```text
$path ["=" pattern]
```

`pattern` — volitelný, maska cesty, na kterou je pravidlo omezeno. Jeho syntaxe a chování jsou v podstatě stejné jako u [vzoru pro základní pravidla](#basic-rules-syntax). Můžete také použít [speciální znaky](#basic-rules-special-characters) s výjimkou `||`, což v tomto případě nemá smysl (viz příklady níže).

Pokud není nastaven `pattern` pro `$path`, pravidlo bude platit pouze na hlavní stránce webu.

Modifikátor `$path` odpovídá i řetězci dotazu.

Modifikátor `$path` podporuje regulární výrazy [stejným způsobem](#regexp-support) jako základní pravidla.

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

Pravidla s modifikátorem `$path` nejsou Blokátorem obsahu AdGuard podporována.

:::

### **`$url`** {#non-basic-url-modifier}

Modifikátor `$url` omezuje oblast použití pravidla na adresy URL odpovídající zadané masce.

**Syntaxe**

```text
url = pattern
```

kde `pattern` je v podstatě stejný jako [`pattern` základních pravidel](#basic-rules-syntax) za předpokladu, že [některé znaky](#non-basic-rules-modifiers-syntax) musí být uvozeny. Podporovány jsou také [speciální znaky](#basic-rules-special-characters) a [regulární výrazy](#regexp-support).

**Příklady**

- `[$url=||example.com/content/*]##div.textad` skryje `div` se třídou `textad` na adrese jako `https://example.com/content/article.html` a dokonce i `https://subdomain.example.com/content/article.html`.
- `[$url=||example.org^]###adblock` skryje prvek s atributem `id`, který se rovná `adblock` na `example.org` a jejích subdoménách.
- `[$url=/\[az\]+\\.example\\.com^/]##.textad` skryje prvky třídy `div` `textad` pro všechny domény odpovídající regulárnímu výrazu `[a-z]+\. example\.com^`.

:::info Kompatibilita

Pravidla s modifikátorem `$url` jsou podporována AdGuardem pro Windows, Mac a Android, **s knihovnou CoreLibs verze 1.11 nebo novější**.

:::

## Informace pro správce filtrů

Pokud spravujete filtr třetí strany, který je AdGuardu znám, mohly by vás zajímat informace uvedené v této části. Upozorňujeme, že nápovědy se použijí pouze na registrované filtry. Filtr je považován za registrovaný a známý pro AdGuard, pokud je přítomen v [indexu známých filtrů](https://filters.adtidy.org/extension/chromium/filters.json). Pokud chcete, aby byl váš filtr zaregistrován, odešlete žádost do [repozitáře AdguardFilters](https://github.com/AdguardTeam/AdguardFilters).

### Direktivy preprocesoru

Poskytujeme preprocesorové direktivy, které mohou být použity správci filtrů pro zlepšení kompatibility s různými blokátory reklam a poskytujeme:

- [zahrnutý soubor](#include-directive)
- [použití pravidel podmíněně podle typu blokátoru reklam](#conditions-directive)
- [zadání blokátor obsahu pro pravidla platná v Safari](#safari-affinity-directive)

:::note

Jakákoli chyba v direktivě preprocesoru povede k tomu, že AdGuard selže při aktualizaci filtru stejným způsobem, jako kdyby adresa URL filtru byla nedostupná.

Direktivy preprocesoru lze použít v uživatelských pravidlech nebo ve vlastních filtrech.

:::

#### Zahrnutý soubor {#include-directive}

Direktiva `!#include` umožňuje zahrnout do filtru obsah zadaného souboru. Podporuje pouze soubory ze stejného původu, aby bylo zajištěno, že správce filtru má kontrolu nad zadaným souborem. Zahrnutý soubor může také obsahovat pre-direktivy (i další `!#include` direktivy). Blokátory reklam by měly zvážit případ rekurzivního `!#include` a implementovat ochranný mechanismus.

**Syntaxe**

```adblock
!#include file_path
```

kde `file_path` je absolutní nebo relativní cesta k souboru stejného původu, který má být zahrnut.

Soubory musí pocházet ze stejné domény, ale mohou být umístěny v jiné složce.

Pokud obsažený soubor není nalezen nebo není k dispozici, celá aktualizace filtru by měla selhat.

Omezení stejného původu by mělo být pro místní vlastní filtry zakázáno.

**Příklady**

URL filtru: `https://example.org/path/filter.txt`

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

Správci filtrů mohou pomocí podmínek zadávat různá pravidla v závislosti na typu blokátoru reklam. Podmíněná direktiva začínající direktivou `!#if` musí být explicitně ukončena direktivou `!#endif`. Podmínky podporují všechny základní logické operátory.

Existují dva možné scénáře:

1. Pokud blokátor reklamy narazí na direktivu `!#if` a ne `!#else`, zkompiluje kód mezi direktivami `!#if` a `!#endif` pouze v případě, že je zadaná podmínka pravdivá.

1. Pokud existuje direktiva `!#else`, bude zkompilován kód mezi `!#if` a `!#else`, pokud je podmínka pravdivá; v opačném případě bude zkompilován kód mezi `!#else` a `!#endif`.

:::note

Na mezerách záleží. `!#if` je platná direktiva, zatímco `!# if` není.

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
        - `adguard_app_android` — AdGuard pro Android
        - `adguard_app_ios` — AdGuard pro iOS
        - `adguard_ext_safari` — AdGuard pro Safari
        - `adguard_ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome (a prohlížeče založené na chromium, např. nový Microsoft Edge.)
        - `adguard_ext_firefox` — Rozšíření prohlížeče AdGuard pro Firefox
        - `adguard_ext_edge` — Rozšíření prohlížeče AdGuard pro starší Edge
        - `adguard_ext_opera` — Rozšíření prohlížeče AdGuard pro Operu
        - `adguard_ext_android_cb` — Blokátor obsahu AdGuard pro mobilní prohlížeče Samsung a Yandex
        - `ext_ublock` — speciální případ; ten je deklarován, když je verze filtru uBlock kompilována pomocí [FiltersRegistry][]
- `!#else` — začátek bloku při nesplnění podmínek
- `rules_list`, `true_conditions_rules_list`, `false_conditions_rules_list` — seznamy pravidel
- `!#endif` — konec blokování

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

Direktivu `!#else` podporují [FiltersDownloader][gh-filters-downloader] v1.1.20 nebo novější.

Je již podporována pro seznamy filtrů sestavené pomocí [FiltersRegistry][], ale stále nemusí být podporována produkty AdGuardu při přidání seznamu filtrů s `!#else` jako vlastních. Následující produkty ji budou podporovat ve zmíněných nebo novějších verzích:

- AdGuard pro Windows, macOS a Android s knihovnou CoreLibs v1.13;
- Rozšíření prohlížeče AdGuard v4.2.208;
- AdGuard pro Safari v1.11.16.

:::

#### Afinita Safari {#safari-affinity-directive}

Limit Safari pro každý blokátor obsahu je 150 000 aktivních pravidel. V aplikacích AdGuard pro Safari a AdGuard pro iOS jsme však pravidla rozdělili do 6 blokátorů obsahu, čímž jsme zvýšili limit pravidel na 900 000.

Zde je složení jednotlivých blokátorů obsahu:

- AdGuard General — Blokování reklam, jazykově specifické filtry
- AdGuard Privacy — Soukromí
- AdGuard Social — sociální widgety, obtěžování
- AdGuard Security — Zabezpečení
- AdGuard Other — Jiné
- AdGuard Custom — Vlastní

Uživatelská pravidla a Seznam povolených jsou přidány do každého blokátoru obsahu.

:::caution

Hlavní nevýhodou používání více blokátorů obsahu je, že pravidla různých blokátorů se uplatňují nezávisle. Na pravidla blokování to nemá vliv, ale pro pravidla odblokování mohou způsobit problémy. Pokud je pravidlo blokování v jednom blokátoru obsahu a výjimka v jiném, výjimka nebude fungovat. Správci filtrů používají `!#safari_cb_affinity` k definování afinity blokátorů obsahu Safari pro pravidla uvnitř blokování direktiv.

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
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```

```adblock
! to allowlist basic rule from AdGuard Tracking Protection filter filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

### Nápovědy

"Nápověda" je speciální komentář, instrukce pro kompilátor filtrů používaný na straně serveru (viz [FiltersRegistry][]).

**Syntaxe**

```adblock
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```

Lze použít více nápověd.

#### Nápověda `NOT_OPTIMIZED`

Pro každý filtr sestavuje AdGuard dvě verze: plnou a optimalizovanou. Optimalizovaná verze je mnohem jednodušší a neobsahuje pravidla, která se nepoužívají vůbec nebo jen zřídka.

Frekvence používání pravidel vychází ze shromážděných statistik [pravidel filtrování](../tracking-filter-statistics). Optimalizace filtrů je však založena na více než na tom — některé filtry mají specifickou konfiguraci. Takto to vypadá pro Základní filtr:

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

Jinými slovy, `percent` je "úroveň komprese". Například pro Základní filtr je nastavena na 40 %. To znamená, že optimalizační algoritmus by měl odstranit 60 % pravidel.

Nakonec zde jsou dvě verze základního filtru pro Rozšíření prohlížeče AdGuard:

- úplná: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimalizovaná: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

**Pokud chcete přidat pravidlo, které by nemělo být při optimalizaci odstraněno, použijte nápovědu `NOT_OPTIMIZED`:**

```adblock
!+ NOT_OPTIMIZED
||example.org^
```

**Toto pravidlo nebude optimalizováno pouze pro AdGuard pro Android:**

```adblock
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

#### Nápověda `PLATFORM` a `NOT_PLATFORM`

Slouží k zadání platforem pro použití pravidel. Seznam existujících platforem a odkazy např. na Základní filtr:

- `windows` — AdGuard pro Windows — [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

- `mac` — AdGuard pro Mac — [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

- `android` — AdGuard pro Android — [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

- `ios` — AdGuard pro iOS — [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

- `ext_chromium` — Rozšíření prohlížeče AdGuard pro Chrome — [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

- `ext_ff` — Rozšíření prohlížeče AdGuard pro Firefox — [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

- `ext_edge` — Rozšíření prohlížeče AdGuard pro Edge — [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

- `ext_opera` — Rozšíření prohlížeče AdGuard pro Operu — [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

- `ext_safari` — AdGuard pro Safari — [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

- `ext_android_cb` — Blokátor obsahu AdGuard — [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

- `ext_ublock` — uBlock Origin — [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

**Příklady**

Toto pravidlo bude dostupné pouze v AdGuardu pro Windows, Mac a Android:

```adblock
!+ PLATFORM(windows,mac,android)
||example.org^
```

Toto pravidlo bude k dispozici pro všechny platformy kromě AdGuardu pro Safari, Blokátoru obsahu AdGuard a AdGuardu pro iOS:

```adblock
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```

## Jak ladit pravidla filtrování

Jednoduchá pravidla filtrování je možné vytvořit "v hlavě", ale pro cokoli alespoň trochu složitějšího budete potřebovat další nástroje pro jejich ladění a iteraci. Existují nástroje, které vám s tím pomohou. V prohlížeči Chrome a jeho analogiích v ostatních prohlížečích můžete použít nástroj DevTools, ale většina produktů AdGuardu nabízí ještě jeden — Záznam filtrování.

### Záznam filtrování

Záznam filtrování je pokročilý nástroj, který bude užitečný především pro vývojáře filtrů. Obsahuje seznam všech webových požadavků, které procházejí skrze AdGuard, poskytuje vyčerpávající informace o každém z nich, nabízí několik možností třídění a další užitečné funkce.

V závislosti na tom, který AdGuard produkt používáte, se protokol filtrování může nacházet na různých místech.

- V **AdGuardu pro Windows** jej najdete na kartě *Blokátor reklam* nebo prostřednictvím nabídky na hlavním panelu
- V **AdGuardu pro Mac** je pod *Nastavení → Pokročilé → Záznam filtrování*
- V **AdGuardu pro Android** je pod *Statistiky → Nedávná aktivita*. *Nedávná aktivita* je také přístupná z *Asistenta*
- V **Rozšíření prohlížeče AdGuard** je přístupný z karty *Různé* nebo kliknutím pravým tlačítkem myši na ikonu rozšíření. Pouze prohlížeče založené na platformě Chromium a Firefox zobrazují použití **pravidel skrývání prvků** (včetně CSS, ExtCSS) a **pravidel JS a skripletů** v jejich záznamech filtrování

:::note

V **AdGuardu pro iOS** a **AdGuardu pro Safari** Záznam filtrování neexistuje kvůli způsobu, jakým jsou v Safari implementovány blokátory obsahu. AdGuard tyto webové požadavky nevidí, a proto je nemůže zobrazit.

:::

### Režim ladění selektorů {#selectors-debug-mode}

Někdy můžete potřebovat zkontrolovat výkonnost daného selektoru nebo souboru stylů. Abyste to mohli provést bez přímé interakce s JavaScript, můžete použít speciální vlastnost stylu `debug`. Když `ExtendedCss` splňuje tuto vlastnost, povolí režim ladění buď pro jeden selektor, nebo pro všechny selektory v závislosti na hodnotě `debug`.

Otevřete konzolu prohlížeče na webové stránce a zobrazte statistiky časování pro selektor(y), které zde byly použity. Režim ladění zobrazí následující statistiky jako objekt, kde každý z laděných selektorů je klíč a hodnota je objekt s těmito vlastnostmi:

**Vždy vytištěno:**

- `selectorParsed` — text případně parsovaného selektoru
- `timings` — seznam uzlů DOM odpovídajících selektoru
    - `appliesCount` — celkový počet použití selektoru na stránce
    - `appliesTimings` — doba, po kterou byl selektor na stránce použit, pro každý případ, kdy byl použit (v milisekundách)
    - `meanTiming` — průměrná doba, po kterou byl selektor na stránce použit
    - `standardDeviation` — standardní odchylka
    - `timingsSum` — celkový čas potřebný k použití selektoru na stránce ve všech instancích

**Vytištěno pouze pro odstranění pseudonymů:**

- `removed` — příznak, který signalizuje, zda jsme odstranili prvky

**Vytištěno, pokud prvky nejsou odstraněny:**

- `matchedElements` — seznam uzlů DOM odpovídajících selektoru
- `styleApplied` — parsovaná deklarace stylu pravidla související se selektorem

**Příklady**

**Ladění jednoho selektoru:**

Pokud je hodnota vlastnosti `debug` `true`, zobrazí se v konzole prohlížeče pouze informace o tomto selektoru.

```adblock
#$?#.banner { display: none; debug: true; }
```

**Povolení globálního ladění:**

Pokud je hodnota vlastnosti `debug` `global`, konzola zobrazí informace o všech rozšířených selektorech CSS, které mají na aktuální stránce shodu pro všechna pravidla z libovolného povoleného filtru.

```adblock
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

- [`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
- [`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
- [`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
- [`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
- [`log-on-stack-trace`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-on-stack-trace)
- [`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
- [`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

Následující skriptlety lze také použít pro účely ladění:

- [`json-prune`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#json-prune)
- [`prevent-fetch`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-fetch)
- [`prevent-requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
- [`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
- [`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)
- [`prevent-window-open`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-window-open) se specifikovaným parametrem `replacement`
- [`prevent-xhr`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-xhr)
- [`trusted-replace-fetch-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-fetch-response)
- [`trusted-replace-xhr-response`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#trusted-replace-xhr-response)

## Legenda tabulek kompatibility {#compatibility-tables-legend}

### Zkratky produktů {#what-product}

1. `aplikací CoreLibs` — AdGuard pro Windows, AdGuard pro Mac a AdGuard pro Android
1. `AdGuard pro Chromium` — Rozšíření prohlížeče AdGuard pro Chrome a další prohlížeče založené na Chromium, např. nový Microsoft Edge, Opera
1. `Adguard pro Firefox` — Rozšíření prohlížeče AdGuard pro Firefox
1. `AdGuard pro iOS` — AdGuard pro iOS a AdGuard pro iOS Pro (pro mobilní prohlížeč Safari)
1. `AdGuard pro Safari` — AdGuard pro stolní prohlížeč Safari `AdGuard Content Blocker` — Content Blocker pro mobilní prohlížeče Android: Samsung Internet a Yandex Browser

### Zkratky kompatibility {#what-compatibility}

:::note

- ✅ — plně podporováno
- ✅ * — podporováno, ale spolehlivost se může lišit nebo se mohou vyskytnout omezení; více informací naleznete v popisu modifikátoru
- 🧩 — může být již implementováno ve verzích nightly nebo beta, ale není ještě podporováno ve verzích pro vydání
- ⏳ — funkce, která byla implementována nebo jejíž implementace se plánuje, ale zatím není k dispozici v žádném produktu
- ❌ — nepodporováno
- 👎 — zastaralé; stále podporovano, ale v budoucnu bude odstraněno
- 🚫 — odstraněno a již nepodporováno

:::

[cl-apps]: #what-product "AdGuard for Windows, Mac, Android"
[ext-chr]: #what-product "AdGuard Browser Extension for Chrome and other Chromium-based browsers"
[ext-ff]: #what-product "AdGuard Browser Extension for Firefox"
[ios-app]: #what-product "AdGuard for iOS and AdGuard Pro for iOS"
[ext-saf]: #what-product "AdGuard pro Safari"
[and-cb]: #what-product "AdGuard Content Blocker for Samsung Internet and Yandex Browser on Android"

[sec-fetch-dest-header]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
[gh-filters-downloader]: https://github.com/AdguardTeam/FiltersDownloader
[FiltersRegistry]: https://github.com/AdguardTeam/FiltersRegistry
