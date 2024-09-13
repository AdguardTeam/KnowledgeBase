---
title: Tvary množného čísla
sidebar_position: 4
---


Mezi světovými jazyky je mnoho rozdílů. Jedním z těchto rozdílů je používání množného čísla, které může způsobit velké potíže při překladech.

Důrazně doporučujeme, abyste si tento článek řádně přečetli a dozvěděli se více o tvarech množného čísla a jejich použití v překladech AdGuardu.

## Co znamenají tvary množného čísla? {#plurals}

Podstatná jména v různých jazycích mohou mít několik tvarů množného čísla. Jejich použití závisí na počtu věcí, o kterých mluvíte.

Např. anglická slova mají dva slovní tvary, když se o něčem mluví v jednotném čísle, např. *'one star'* a v množném čísle — *'two stars'*. Je jedno, jestli řeknete pět, dvacet šest nebo třeba pět set třicet dva hvězdiček — koncové "s" zůstane stejné. Některé jazyky však mohou obsahovat pouze jeden nebo více tvarů množného čísla.

Na rozdíl od angličtiny má polština tři tvary množného čísla podstatných jmen. Jeden z nich se používá, když se mluví o něčem v jednotném čísle, druhý tvar se používá v množném čísle, ale s číslovkami končícími na 2–4, s výjimkou 12–14, a třetí tvar — pro slova s jinými číslovkami před nimi.

Podívejte se na tento obrázek. Zde vidíte skupiny číslovek, které určují tvar slova, když před ním stojíte.

![Polish](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Pro lepší pochopení si udělejme malou paralelu mezi angličtinou a polštinou:

      Anglická verze:                                                 Polské ekvivalenty:
    
      1. form — It takes one hour.                                     1. form — Zajmuje to godzinę.
      2. form — It takes two hours.                                    2. form — Zajmuje to dwie godziny.
      3. form — It takes five hours.                                   3. form — Zajmuje to pięć godzin.

Nyní je zřejmé, že polské slovo *"godzinę"* (hodina) má tři různé podoby, zatímco anglické slovo mění svůj tvar s danými číslovkami pouze dvakrát.

Kromě polštiny existuje mnoho dalších jazyků, které mají tři a více tvarů množného čísla, například ruština, srbština, slovenština, čeština atd. Ne všechny se však řídí stejným pravidlem. Proto je důležité vědět, kolik má váš jazyk množných čísel a jak je správně používat.

## Kde se můžete dozvědět o počtu tvarů množného čísla? {#where-to-learn}

Když se setkáte s překladem, který vyžaduje použití množného čísla, možná si hned neuvědomíte, kolik slovních tvarů váš jazyk obsahuje.

Zde je několik zdrojů informací, které můžete použít.

[Průvodce překlady](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) obsahuje široký seznam jazyků. Počet tvarů množného čísla pro různé jazyky se zobrazuje takto: `nplurals=2`, `nplurals=4` atd. The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

Informace o tvarech množného čísla můžete také získat v databázi [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). Pravidla CLDR pro množné číslo uvádějí další slovní tvar pro desetinná čísla (1,5; 2,3; 100,1…), ale v překladech AdGuardu je nepoužíváme.

## Množná čísla v překladech AdGuardu {#translations}

Nejprve bychom chtěli zmínit, že ne každý překlad AdGuardu vyžaduje použití množného čísla.

V současné době máme na Crowdinu 4 typy řetězců, které zahrnují použití množného čísla.

Pojďme se na ně podívat blíže.

### 1. Fráze s řetězcovými klíči končícími na `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

Většina z nich je zastoupena v projektu `AdGuard pro Windows` a skládá se pouze z jednoho nebo dvou slov:

- `days;`
- `extensions;`
- `hours`

Věnujte prosím pozornost řetězcovým klíčům těchto frází a poli "Context", kde najdete několik důležitých poznámek k množnému číslu. Řetězcové klíče mohou obsahovat slova `Singular`, `Dual`, `Plural` (např.`FormatDayDeclensionDual`). V tomto případě byste měli ponechat příslušný tvar množného čísla tak, jak je uveden v klíči.

### 2. Řetězce s podstatnými jmény v jednotném a množném čísle oddělené čárkami {#2type}

Tento druh řetězců je většinou soustředěn v projektu `AdGuard pro Android`.

Podívejte se na příklad:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Pokud ve vašem jazyce existují 3 tvary množného čísla podstatných jmen (jako v polštině), napište všechny tvary množného čísla oddělené čárkami.

`hour, hours — godzinę, godziny, godzin`

V případě, že má podstatné jméno pouze 2 tvary, není třeba psát stejný tvar dvakrát (*typicky pouze pro tento typ řetězců s množným číslem!*). Nebude však chybou, když tvar zopakujete dvakrát.

### 3. Řetězce, které používají vzor vyvinutý společností Crowdin {#3type}

Jedná se o uživatelsky nejpřívětivější schéma překladu řetězců s množným číslem.

Crowdin navrhuje uživatelům, aby přeložili určité množství frází s různými tvary množného čísla.

Pokud váš jazyk poskytuje pouze jeden tvar množného čísla, zobrazí se pouze jedna věta k překladu. V případě tří nebo více tvarů vám Crowdin poskytne řetězec rozdělený na další dva nebo tři řetězce k překladu.

Např:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Při překladu těchto řetězců a jejich schvalování buďte pozorní. Pokud netušíte, co pole "Other" znamená, vložte stejný tvar, jaký je v poli "Many". Překlady polí "Many" a "Other" mohou být stejné.

### 4. Řetězce se šablonami oddělenými svislými čarami {#4type}

Jedná se o nejsložitější typ řetězců AdGuardu, který se většinou používá v projektu `AdGuard Websites`.

Věnujte zvýšenou pozornost svislému znaménku mezi větami a **%count%** zástupným znakům v originálních frázích — pomůže vám identifikovat fráze, kde překlad vyžaduje použití tvarů množného čísla.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Představte si, že máte před sebou takový řetězec: `Standardní licence pro %count% počítač | Standardní licence pro %count% počítače`.

Co byste měli vědět, abyste ho správně přeložili?

Věty, které jsou rozděleny svislými čarami, nazvěme **"šablony"**, protože vlastně slouží jako šablony pro věty s různými čísly.

Vraťme se k příkladu, protože anglický jazyk obsahuje pouze dva tvary, měly by existovat dvě šablony:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

kde **šablona 1** je Standard license for *%count%* computer,

a **šablona 2** je Standard license for *%count%* computers,

Další důležitou věcí, které byste měli věnovat pozornost jsou zástupné znaky **%count%**, které se jako obvykle nacházejí před slovy, která definují. Namísto **%count%** se zde zobrazí různá čísla v závislosti na tom, které šablony jsou vybrány.

V situaci s jiným jazykem, který má, řekněme, tři tvary množného čísla, by měly existovat tři šablony se dvěma svislými čarami mezi nimi.

Když například přeložíme výše uvedenou frázi do slovenštiny, která má podle pravidla [Průvodce překlady](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) tři slovní druhy, bude správný překlad vypadat takto:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovak](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

V tomto případě vidíme tři šablony, které obsahují tři tvary slova *"počítač"* (computer) ve slovenštině.

*Pokud budeme ignorovat jeden z tvarů a místo tří šablon použijeme pro slovenštinu pouze dvě, systém nebude schopen pro určitá čísla* vybrat vhodnou šablonu a ve výsledku budeme mít ve větách gramatické chyby jako v angličtině: *Standard license for 5 computer*.
> **Vždy používejte tolik tvarů, kolik jich je ve vašem jazyce, i když samotné slovo má méně tvarů.**

Například srbské slovo *"računar"* (computer) má pouze dva tvary. V srbštině však existují 3 tvary množného čísla.

![Serbian](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Překlad z angličtiny do srbštiny by tedy měl znít:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

I když je zřejmé, že poslední dvě šablony se neliší, je velmi důležité toto pravidlo dodržet: **Počet šablon by měl odpovídat počtu tvarů množného čísla příslušného jazyka!** (typicky pro tento typ řetězců s množným číslem).

### Krátké shrnutí {#summury}

Při překladu projektů AdGuardu věnujte zvýšenou pozornost frázím, které vyžadují použití tvarů množného čísla.

Zatímco první tři typy těchto řetězců jsou víceméně snadno proveditelné, čtvrtý typ vyžaduje větší ostražitost.

A ještě jednou: pokud narazíte na originální frázi se dvěma důležitými prvky: **svislá čára** a **%count%** zástupné znaky, udělejte prosím následující:

- Řiďte se pravidlem množného čísla jazyka, do kterého překládáte;

Počet vašich šablon by měl odpovídat počtu tvarů množného čísla, které váš jazyk obsahuje, a to i v případech, kdy některá slova mají sama o sobě méně tvarů. Dva tvary množného čísla — dvě šablony v překladu; pět tvarů množného čísla — pět šablon atd.

- Nezapomeňte mezi šablonami použít svislou čáru, jak je znázorněno v původních řetězcích;

- Nepřekládejte, nevyplňujte ani nemažte zástupné znaky **%count%**.

Dodržováním těchto jednoduchých pravidel pomůžete vývojářům AdGuardu vyhnout se mnoha zbytečným komplikacím během procesu překládání.
