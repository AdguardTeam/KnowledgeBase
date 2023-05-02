---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard nabízí řadu softwarových produktů, které blokují reklamy a slídiče na různých platformách. Jedním z nejoblíbenějších produktů AdGuardu je bezplatné rozšíření, které funguje v pěti oblíbených prohlížečích: Chrome, Firefox, Edge, Opera a Yandex Browser. Rozšíření prohlížeče obsahují základní funkce pro blokování reklam, ale nelze je srovnávat s plnohodnotnými programy pro stolní počítače, jako jsou např. [AdGuard pro Windows](/adguard-for-windows/overview) a [AdGuard pro macOS](/adguard-for-mac/overview).

![Rozšíření prohlížeče AdGuard pro Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Dostupnost {#br-extension}

[Rozšíření prohlížeče AdGuard](https://adguard.com/en/adguard-browser-extension/overview.html) je k dispozici pro většinu známých prohlížečů. Snadno jej najdete v internetovém obchodě svého prohlížeče nebo na našich oficiálních stránkách.

![Dostupné pro většinu oblíbených prohlížečů *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

> Máme samostatné rozšíření pro Safari. Od vydání [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html) se u většiny rozšíření pro blokování reklam objevily velké problémy, a mnoho z nich přestalo fungovat. Museli jsme vyvinout samostatné rozšíření [pro Safari](/adguard-for-safari/overview), které má oproti rozšíření popsanému v tomto článku některé odlišnosti.

**Nezapomeňte, že funkčnost každého rozšíření je přísně omezena možnostmi prohlížeče.** Pokud tedy chcete získat plnohodnotnou ochranu, zvažte instalaci samostatného programu pro svůj počítač. Zde je [důvod, proč](#comparison).

## Blokování reklam {#adblocker}

Blokování reklam je jednoznačně klíčovou funkcí každého blokátoru reklam a AdGuard není výjimkou. Rozšíření úspěšně zablokuje reklamy na jakékoli stránce v prohlížeči. Blokování reklam je založeno na tzv. seznamech filtrů nebo jednoduše na [filtrech](/general/ad-filtering/how-ad-blocking-works). Filtry lze povolit nebo zakázat v nastavení rozšíření. Blokování reklam si můžete přizpůsobit aktivací konkrétních filtrů.

### Filtry {#filters}

Seznamy filtrů jsou v podstatě soubory pravidel zapsané ve speciálním jazyce. Váš blokátor reklam interpretuje pravidla a uplatňuje je. V důsledku toho se na vašich webových stránkách přestanou zobrazovat reklamy.

![Filtry *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Všechny filtry jsou seskupeny podle své role. Existují například kategorie filtrů pro blokování reklam, filtry pro ochranu soukromí, filtry související se sociálními médii atd. Můžete povolit jednotlivé filtry nebo celou skupinu najednou.

![Filtry pro blokování reklam *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Vlastní filtry {#custom}

Zatímco vlastnosti ostatních skupin filtrů jsou víceméně předvídatelné, existuje skupina s názvem *Vlastní*, která může vyvolat další otázky.

![Vlastní filtry *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

Na této kartě můžete přidat filtry, které ve výchozím nastavení rozšíření neobsahuje. Na internetu je k dispozici spousta [veřejně dostupných filtrů](https://filterlists.com). Navíc můžete vytvářet a přidávat vlastní filtry. Ve skutečnosti si můžete vytvořit libovolnou sadu filtrů a přizpůsobit blokování reklam podle svých představ.

Chcete-li přidat filtr, stačí kliknout na *Přidat vlastní filtr*, zadat adresu URL nebo cestu k souboru filtru, který chcete přidat a kliknout na *Další*.

![Přidat vlastní filtr *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Uživatelská pravidla {#user-rules}

*Uživatelská pravidla* jsou další nástroj, který vám pomůže přizpůsobit blokování reklam.

![Uživatelská pravidla *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Nová pravidla lze přidávat několika způsoby. Nejjednodušší je prostě zadat pravidlo, to ale vyžaduje určitou znalost [syntaxe pravidel](/general/ad-filtering/create-own-filters).

Seznam filtrů připravený k použití můžete importovat také z textového souboru. **Dbejte na to, aby byla jednotlivá pravidla oddělena od sebe zalomením řádků.** Všimněte si, že import seznamu filtrů připravených k použití je vhodnější provést na kartě [Vlastní filtry](#custom).

Kromě toho můžete exportovat vlastní pravidla filtrování. Tato možnost je vhodná pro přenos seznamu pravidel mezi prohlížeči nebo zařízeními.

Když přidáte webovou stránku na Seznam povolených (více o tom [níže](#allowlist)), nebo použijete nástroj Asistent pro skrytí prvku na stránce, uloží se příslušné pravidlo také do *Uživatelských pravidel*.

### Seznam povolených {#allowlist}

*Seznam povolených* se používá k vyloučení určitých webových stránek z filtrování. Pravidla blokování se na webové stránky ze seznamu nevztahují.

![Seznam povolených *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

*Seznam povolených* lze také obrátit: reklamy můžete odblokovat všude kromě webových stránek přidaných do tohoto seznamu. Chcete-li to provést, povolte možnost *Invertovat seznam povolených*.

![Invertovat seznam povolených *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Můžete také importovat a exportovat stávající seznamy povolených. To je užitečné například v případě, že chcete v každém prohlížeči použít stejná pravidla pro povolení.

## Režim utajení {#stealth-mode}

*Režim utajení* má zajistit ochranu citlivých osobních údajů před online slídiči a podvodníky.

![Režim utajení *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

V Režimu utajení můžete zabránit tomu, aby webová stránka viděla vyhledávací dotazy, které jste použili k jejímu nalezení na internetu, automaticky odstranit soubory cookies třetích stran a vlastní soubory cookies webové stránky atd. Všem těmto funkcím je věnován [zvláštní článek](/general/stealth-mode).

> Všimněte si, že některé možnosti *Režimu utajení* dostupné v plnohodnotných aplikacích nejsou v rozšířeních prohlížeče z důvodu technických omezení k dispozici.

## Další funkce a možnosti {#other}

Kromě velkých klíčových modulů rozšíření prohlížeče AdGuard existuje několik dalších specifických funkcí, které lze konfigurovat na kartách *Obecné* a *Další nastavení* v nastavení rozšíření.

### Obecné {#general}

Na kartě *Obecné* můžete povolit reklamy ve vyhledávání a vlastní propagaci webových stránek [](/general/ad-filtering/search-ads), povolit automatickou aktivaci filtrů pro jednotlivé jazyky, určit interval aktualizace filtrů atd.

![Obecné *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Kromě toho zde můžete zapnout [*ochranu proti krádeži identity a malwaru*](/general/browsing-security).

Konfiguraci nastavení můžete uložit kliknutím na tlačítko *Exportovat nastavení*. Nastavení se uloží jako soubor .json. Chcete-li nahrát dříve uloženou konfiguraci nastavení, použijte funkci *Importovat nastavení*. Můžete to použít i k rychlému přepínání mezi různými profily nastavení nebo dokonce k přenosu konfigurací nastavení mezi různými prohlížeči.

### Další nastavení {#misc}

Sekce *Další nastavení* obsahuje řadu různých nastavení, která souvisejí s procesem blokování reklam a použitelností aplikace.

![Další nastavení *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

Na této kartě můžete aktivovat optimalizované filtry, zapnout oznámení o aktualizacích rozšíření, otevřít *Záznam filtrování* nebo vymazat statistiky blokovaných reklam a slídičů.

Kromě toho nám můžete pomoci s vývojem filtrů zasíláním statistik o použitých pravidlech: které z nich se spouští, na kterých webových stránkách a jak často. Tato možnost je ve výchozím nastavení vypnutá, protože neshromažďujeme údaje uživatelů bez jejich souhlasu. Pokud ji zapnete, budou všechna data přísně anonymizovaná.

### Informace {#about}

V sekci *Informace* najdete informace o aktuální verzi, odkazy na smlouvu EULA a zásady ochrany osobních údajů a na úložiště rozšíření prohlížeče na GitHubu.

![Informace *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Hlavní nabídka rozšíření {#main-menu}

Hlavní stránka rozšíření je přístupná po kliknutí na ikonu rozšíření na panelu nástrojů prohlížeče.

![Hlavní nabídka *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

Na hlavní stránce můžete ručně skrýt libovolný prvek na libovolné stránce (příslušné pravidlo bude přidáno do *Uživatelských pravidel*), otevřít *Záznam filtrování* a zobrazit kompletní informace o provozu prohlížeče a blokovat požadavky za chodu nebo se podívat na zprávu o zabezpečení webové stránky. Kromě toho můžete podat stížnost na jakoukoli webovou stránku (například pokud jsou na stránce zobrazené reklamy, naši technici filtrů zprávu přezkoumají a problém vyřeší) a zobrazit statistiky použitých pravidel blokování.

Všechny webové požadavky provedené prohlížečem se zobrazují v *Záznamu filtrování* spolu s podrobnými informacemi o každém požadavku. *Záznam filtrování* umožňuje například snadno sledovat požadavky blokované Rozšířením prohlížeče AdGuard. Kromě toho vám umožňuje zablokovat jakýkoli požadavek nebo přidat dříve zablokovaný požadavek na seznam povolených pouze dvěma kliknutími. *Záznam filtrování* vám také nabízí širokou škálu možností pro třídění webových požadavků, což může být užitečné při vytváření vlastních pravidel filtrování. *Záznam filtrování* můžete otevřít výběrem příslušné položky v hlavní nabídce nebo na stránce nastavení (na kartě "Další nastavení").

Kliknutím na ikony v pravém horním rohu hlavní nabídky rozšíření můžete otevřít nastavení rozšíření nebo pozastavit ochranu.

## Rozšíření prohlížeče AdGuard vs. Plnohodnotná aplikace {#comparison}

Hlavní výhodou plnohodnotných programů AdGuard oproti rozšířením prohlížeče je, že tyto programy mohou blokovat reklamy v každém prohlížeči a téměř ve všech aplikacích. Můžete používat různé prohlížeče současně, aplikace bude stejně dobře filtrovat reklamy a online hrozby ve všech z nich.

Druhý rozdíl spočívá v tom, že možnosti blokátorů reklam založených na rozšířeních jsou přísně omezeny pokyny prohlížeče. Rozšíření prohlížeče musí být v souladu se zásadami prohlížečů, kde může být blokování reklam omezeno. Některé typy pravidel filtrování tedy rozšíření nepodporují. Funkce desktopových aplikací nejsou omezené, takže mají lepší kvalitu filtrování.

Zatímco Rozšíření prohlížeče AdGuard je zdarma, snadno se instaluje a obsahuje filtry pro blokování reklam a boj proti online hrozbám, plnohodnotné aplikace jsou výkonnější a mají seznam pokročilých funkcí. Všechny rozdíly najdete ve srovnávací tabulce níže.

![Rozšíření vs. aplikace *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – v rámci omezení prohlížeče a pouze v prohlížeči, ve kterém je nainstalováno;

`2` – rozšíření není schopno detekovat požadavky od jiných rozšíření. Pokud škodlivé nebo sledovací rozšíření odešle na svůj server požadavek na zobrazení reklamy nebo sledování vaší aktivity, Rozšíření prohlížeče AdGuard nebude schopno tento požadavek zablokovat;

`3` – ne všechny typy reklam a hrozeb lze blokovat pomocí rozšíření prohlížeče z důvodu určitých omezení prohlížeče. Některé prvky se mohou dostat na stránku a zpomalit proces načítání. Kromě toho aplikace AdGuard na rozdíl od blokátorů reklam v prohlížeči blokuje reklamy ještě před jejich načtením do prohlížeče. To šetří provoz a zrychluje načítání stránek.
