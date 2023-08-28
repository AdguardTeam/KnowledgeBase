---
title: Filtry AdGuardu
sidebar_position: 2
---

:::info

Tento článek je věnován filtrům, které vyvíjíme a které jsou předinstalovány v AdGuardu. Chcete-li je zkontrolovat, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Tento článek je o filtrech, které vytváříme pro použití v AdGuardu a jiném softwaru pro blokování reklam (např. uBlock Origin). Filtry jsou sady pravidel v textovém formátu, které aplikace a programy AdGuard používají k filtrování reklamy a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče. Filtry obsahují seznamy pravidel podle jejich účelu. Jazykově specifické filtry obsahují pravidla pro příslušné jazykové segmenty internetu (např. německý filtr). Filtry založené na úkolech sdružují pravidla, která plní konkrétní úkol, např. filtr sociálních médií nebo filtr ochrany sledování. Povolení nebo zakázání filtru usnadňuje práci s celým seznamem pravidel najednou.

## Filtry AdGuardu

- **Základní filtr** odstraňuje reklamy z webových stránek s obsahem v angličtině. Vychází z [EasyList](https://easylist.to/) a je námi upraven. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **Filtr ochrany sledování** — komplexní seznam různých online čítačů a nástrojů pro analýzu webu. Pomocí něj můžete skrýt své akce online a vyhnout se sledování. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **Filtr sledování URL** zvyšuje soukromí odstraněním sledovacích parametrů z adres URL. Pokud se uživatel rozhodne blokovat parametry sledování ve Režimu utajení, bude tento filtr automaticky povolen. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **Filtr sociálních médií** odstraňuje četná tlačítka "Like" a "Tweet" a další integrace sociálních médií na oblíbených webových stránkách. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **Filtr obtěžování** blokuje obtěžující prvky na webových stránkách. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt) Obsahuje následující filtry AdGuard (všechny lze povolit odděleně od Filtru obtěžování):
    - **Upozornění na soubory cookies:** blokuje upozornění na soubory cookie na webových stránkách. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Vyskakovací okna:** blokuje všechny druhy vyskakovacích oken, které nejsou nutné pro provoz webových stránek. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Bannery mobilních aplikací:** blokuje bannery, které propagují mobilní aplikace webových stránek. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widgety:** blokuje widgety třetích stran, online asistenty, chaty živé podpory atd. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Ostatní obtěžování:** blokuje prvky, které nespadají do kategorií obtěžování. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)
- **Filtr odblokování reklam ve vyhledávání a vlastní propagace** odblokuje reklamy, které mohou být pro uživatele užitečné. Více informací o tomto filtru najdete na [této stránce](../search-ads). [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Ruský filtr** odstraňuje reklamy z webových stránek s obsahem v ruštině. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **Německý filtr** odstraňuje reklamy z webových stránek s obsahem v němčině. Založen na filtru [EasyList Germany](https://easylist.to/) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **Francouzský filtr** odstraňuje reklamy z webových stránek s obsahem v francouzštině. Založen na filtru [Liste FR](https://forums.lanik.us/viewforum.php?f=91) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Japonský filtr** odstraňuje reklamy z webových stránek s obsahem v japonštině. Založen na filtru [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Holandský filtr** odstraňuje reklamy z webových stránek s obsahem v holandštině. Založen na filtru [EasyList Dutch](https://easylist.to/) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Španělský/Portugalský filtr** odstraňuje reklamy z webových stránek s obsahem ve španělštině a portugalštině. Založen na filtru [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Turecký filtr** odstraňuje reklamy z webových stránek s obsahem v turečtině. Vytvořen námi na základě stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Čínský filtr** odstraňuje reklamy z webových stránek s obsahem v čínštině. Založen na filtru [EasyList China](https://github.com/easylist/easylistchina) a následně námi upraven podle stížností uživatelů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Experimentální filtr** slouží k testování některých nových pravidel filtrování, která mohou potenciálně způsobovat konflikty a narušovat práci webových stránek. Pokud tato pravidla fungují bez problémů, přidají se do hlavních filtrů. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Filtr mobilních reklam** blokuje reklamy v mobilních zařízeních. Obsahuje všechny známé sítě mobilní reklamy. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **DNS filtr** — (Základní filtrAdGuard, Filtr sociálních médií, Filtr ochrany sledování, Filtr mobilních reklam, EasyList a EasyPrivacy), který je zjednodušený pro lepší kompatibilitu s blokováním reklamy na úrovni DNS. Tento filtr používá servery [AdGuard DNS](https://adguard-dns.io/kb) k blokování reklam a sledování. [Zobrazit pravidla](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## Zásady AdGuard filtrů

Naše zásady filtrování definují, co mají filtry AdGuard blokovat a co ne a také pravidla pro přidávání a odebírání pravidel z filtrů. Pro podrobné informace si přečtěte celý text [Zásad AdGuard filtrů](../filter-policy).

## Přispět k rozvoji filtrů AdGuardu

Jsme obdařeni jedinečnou komunitou, která nejenže miluje AdGuard, ale také jej vylepšuje. Mnoho lidí se různými způsoby dobrovolně podílí na zlepšování uživatelského komfortu AdGuardu pro všechny. Jste vítáni, abyste se připojili ke skupině a přispěli ke změně. Uděláme, co je v našich silách a rádi odměníme nejaktivnější komunitu. Tak, co můžete udělat?

### Nahlásit problém

Spoléháme na to, že nás komunita upozorní na problémy s našimi filtry. To nám pomáhá efektivněji využívat čas a udržovat filtry neustále aktualizované. Chcete-li nahlásit problém, použijte tento [webový nástroj](https://agrd.io/report).

### Navrhnout pravidla filtrování

V repozitáři filtrů na GitHubu [najdete mnoho otevřených problémů](https://github.com/AdguardTeam/AdguardFilters/issues). Každý z nich se týká problému s webovou stránkou, např. přehlédnuté reklamy nebo falešného pozitivního výsledku. Vyberte si, co chcete a navrhněte vlastní pravidla v komentářích. Technici AdGuard filtrů vaše návrhy posoudí a v případě schválení přidají vaše pravidla do filtrů AdGuardu.

Zde je oficiální dokumentace o [syntaxi pravidel](../create-own-filters) AdGuard filtrování. Pozorně si ji přečtěte: pomůže vám vytvořit vlastní pravidla filtrování.

### Další způsoby, jak přispět

Zde je [vyhrazená stránka](https://adguard.com/contribute.html) pro lidi, kteří chtějí přispívat do AdGuardu jinými způsoby.
