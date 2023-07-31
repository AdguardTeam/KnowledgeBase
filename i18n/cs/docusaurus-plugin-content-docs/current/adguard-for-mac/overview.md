---
title: Přehled funkcí
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

AdGuard pro Mac si jako jeden z našich hlavních produktů zaslouží podrobného průvodce. Rozhodli jsme se pomoci novým uživatelům a upozornit na některé jemnější, ale méně zřejmé body, které mohly uniknout i zkušeným fanouškům AdGuardu pro Mac.

AdGuard pro Mac je samostatný blokátor reklam pro macOS. Zatímco AdGuard pro Safari má [omezené možnosti blokování reklam](https://adguard.com/en/blog/youtube-ads-in-safari-explained.html) kvůli blokování obsahu v Safari, AdGuard pro Mac je plnohodnotný a může svým uživatelům nabídnout více. Provedeme vás hlavními funkcemi.

## Domovská stránka

![Domovská stránka *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Mainscreen.png)

Při spuštění se nejprve zobrazí obrazovka s velkým přepínačem zapnutí/vypnutí. Níže jsou zobrazeny různé statistiky (blokované reklamy, blokované slídiče, ušetřená data) od instalace nebo od posledního obnovení statistik.

Chcete-li začít konfigurovat AdGuard pro Mac, klikněte na ozubené kolečko v pravém horním rohu okna a vyberte možnost "Předvolby".

## Obecné předvolby

![Obecné](https://cdn.adtidy.org/content/kb/ad_blocker/mac/General.jpg)

Popisy pod názvy možností se zdají být srozumitelné, ale přesto:

**Automaticky aktivovat jazykově specifické filtry** Po zapnutí této možnosti nebudete muset při návštěvě cizí webové stránky ručně vybírat všechny filtry, což vám ušetří čas.

**Spustit AdGuard při přihlášení** Jednoduchá a pohodlná funkce, se kterou se nemusíte starat o to, zda máte nebo nemáte zapnutý blokátor reklam, a jen mít jistotu, že jsou reklamy vždy blokovány.

**Neblokovat reklamy ve vyhledávání a vlastní propagaci** Tato možnost může být užitečná pro online nakupující: místo přidání všech svých oblíbených e-shopů a stránek do seznamu povolených můžete jednoduše vyloučit [vlastní propagace a reklamy ve vyhledávání](/general/ad-filtering/search-ads) z filtrování. AdGuard je automaticky detekuje a nechá je být, zatímco odstraní všechny ostatní reklamy.

**Skrýt ikonu v panelu nabídek** Pokud ikonu v panelu nabídek vidět nechcete, existuje možnost ji skrýt. Nemusíte se však obávat: i když ji z panelu nabídek odstraníte, AdGuard bude nadále běžet na pozadí.

Z téhož okna máte přístup k výše zmíněnému seznamu povolených, do kterého můžete přidat webové stránky, které si nepřejete, aby AdGuard filtroval. Stačí kliknout na příslušné tlačítko v dolní části okna.

## Filtry

![Filtry](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Filters.jpg)

Hlavní hnací silou modulu pro blokování reklam jsou filtry. Chcete-li pochopit, jak filtrování funguje, seznamte se s naším [obsáhlým článkem](https://adguard.com/en/blog/how-ad-blocking-is-done.html). Seznamy filtrů jsou v podstatě soubory pravidel napsané ve speciálním jazyce a blokátor reklam je interpretem těchto pravidel, který je následně implementuje. Výsledkem je, že se vám na webových stránkách přestanou zobrazovat reklamy.

Některé seznamy filtrů (Základní filtr AdGuardu, Filtr obtěžování, EasyList atd.) jsou předinstalovány, zatímco jiné specifické seznamy přizpůsobené vašim preferencím lze stáhnout dodatečně a přidat do programu.

Kromě obecnějších a univerzálně použitelných filtrů (jako je Základní filtr) poskytuje AdGuard rozsáhlé množství filtrů pro každou příležitost:
* filtry zaměřené na prevenci sledování (jako je filtr Ochrany sledování),
* jazykově specifické filtry reklam, které blokují obsah ve vybraném jazyce,
* filtr Sociálních médií, který odstraňuje tlačítka "To se mi líbí" a "Sdílet",
* filtr Obtěžování pro upozornění na soubory cookie, vyskakovací okna na stránce a další podobné,
* a dokonce i filtr, který některé reklamy odblokovává, místo aby je blokoval — filtr pro reklamy ve vyhledávání a sebepropagaci.

Filtry AdGuardu jsou automaticky aktualizovány. Naši vývojáři je vytvářejí na základě zpětné vazby od uživatelů. Ostatním uživatelům AdGuardu (a výhledově i sobě) můžete kdykoli pomoci odesláním hlášení přímo z aplikace Asistent (je to opravdu praktické, o Asistentovi si povíme více dále) nebo z [webové stránky](https://agrd.io/report). Pokud se chcete dozvědět více o filtrech AdGuardu, zde je [několik informací](/general/ad-filtering/adguard-filters).

## Uživatelská pravidla

![Uživatelská pravidla](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Filters.jpg)

Další důležitou součástí modulu pro blokování reklam jsou jeho uživatelská pravidla. Pokud máte nějaké zkušenosti s kódováním a chcete si vytvořit vlastní pravidla, která by byla vhodnější než standardní filtry, které jsou již k dispozici, můžete si to vyzkoušet. Syntaxe, kterou AdGuard používá pro svá pravidla filtrování, je založena na syntaxi jakéhokoli jiného rozšíření pro blokování reklam, ale s významnými doplňky, které rozšiřují jeho možnosti. Celý proces psaní pravidel ve všech jeho nuancích je popsán v těchto obsáhlých návodech, takže pokud si chcete napsat nějaká vlastní pravidla a ověřit si, jak moc jste zdatní kodéři, stačí postupovat podle kroků, které jsme popsali v [tomto článku](/general/ad-filtering/create-own-filters).

## DNS

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/DNS.jpg)

DNS filtrování je jednou z nejužitečnějších funkcí, díky níž je veškerý provoz DNS šifrován. Pokud používáte výchozí DNS server poskytovaný poskytovatelem internetových služeb (ISP), je pravděpodobné, že vaše přenosy DNS nejsou šifrované a jsou náchylné k odposlechu a zcizení.

Na panelu DNS můžete vybrat DNS servery od známých poskytovatelů DNS nebo přidat vlastní DNS servery. Také můžete přidávat domény do seznamu DNS blokování nebo seznamu povolených a přidávat složitá pravidla pomocí syntaxe pravidel DNS. Nakonec můžete [přidat DNS filtry podle vlastního výběru](https://filterlists.com).

## Režim utajení

![Režim utajení](https://cdn.adtidy.org/content/kb/ad_blocker/mac/StealthMode.jpg)

Tento modul je velmi užitečný nástroj, který vám pomůže chránit vaše soukromí před webovými stránkami, které se o vás snaží uchovávat takové informace, jako je vaše IP adresa, parametry počítače, nastavení prohlížeče a dokonce i úvodní stránka, ze které jste byli přesměrováni, nemluvě o obsahu košíku, pokud mluvíme o webových obchodech. Pokud vás tento seznam informací, které mohou být sdíleny s pochybnými třetími stranami nepřiměje k zamyšlení, pak bychom mohli dodat, že ve většině případů získají také takové osobní údaje, jako je váš věk, roční příjem, zdravotní historie, fyzická adresa a jména vašich dětí. Režim utajení nejlépe odstraňuje nežádoucí soubory cookies nebo tajné vkládání sledovacích parametrů do prohlížeče.

Režim utajení obsahuje širokou škálu možností, které zajišťují jeho flexibilní konfiguraci. Jsou rozděleny do několika kategorií a pro nepřipraveného uživatele se mnohé z nich budou zdát nepřehledné a možná i složité. U každé možnosti jsme uvedli nápovědu, abychom tento nedostatek napravili — nápověda se zobrazí, když najedete na ikonu s otazníkem. Pokud se chcete o celém konceptu dozvědět více, doporučujeme vám přejít na [tento článek](/general/stealth-mode).

## Bezpečné prohlížení

![Zabezpečení](https://cdn.adtidy.org/content/kb/ad_blocker/mac/BrowsingSecurity.jpg)

Dále máme panel Zabezpečení, kde se nachází modul známý také jako Bezpečné prohlížení. Jedná se o ochranu před škodlivými a phishingovými webovými stránkami.

:::note

AdGuard není antivirus, ale zcela jiný program. Zobrazí vám varování, pokud se chystáte přejít na infikovanou doménu, ale nemůže vám zabránit ve stahování podezřelých souborů nebo vám pomoci vypořádat se s již existujícími viry. Phishing je velmi častý internetový podvod, jehož cílem je krádež osobních údajů (hesel, údajů o bankovních účtech atd.). Provádí se pomocí falešných webových stránek napodobujících oblíbené webové stránky nebo skutečné služby, jako jsou webové obchody nebo sociální sítě. Mnoho phishingových webových stránek má adresy URL, které se od skutečných liší jen několika symboly. Pokud uživatel zadá své údaje na takovém webu, určitě se dostanou do nesprávných rukou.

:::

Bezpečné prohlížení poskytuje silnou ochranu před takovými incidenty. Zároveň se nikam nepřenášejí osobní údaje uživatele a servery AdGuardu nevědí, které webové stránky uživatel navštěvuje, protože bezpečnostní kontrola se neprovádí prostřednictvím otevřené webové adresy (URL), ale pomocí hash prefixů (hash je určitá datová struktura, díky níž je každá adresa přidaná do základu jednoznačná).

Některé webové stránky nejsou samy o sobě škodlivé, ale mohou obsahovat prvky, které do jejich struktury zabudovaly jiné webové stránky. Na rozdíl od pluginů prohlížeče kontroluje modul Bezpečné prohlížení každý objekt zabudovaný do jakékoli webové stránky, čímž zajišťuje maximální ochranu.

Pokud nám chcete pomoci zdokonalit tento modul, můžete zaškrtnout spodní políčko na panelu u věty "Pomozte nám s vývojem filtrů Bezpečného prohlížení". Váš počítač nám tak bude moci posílat relevantní informace o podvodných webových stránkách, na které můžete narazit při surfování na webu a naši vývojáři se postarají o to, aby skončily uzamčené na konci vašeho seznamu zakázaných.

## Asistent prohlížeče

![Asistent](https://cdn.adtidy.org/content/kb/ad_blocker/mac/BrowserAssistant.jpg)

Hlavní funkcí AdGuard Asistenta prohlížeče je správa filtrování přímo z prohlížeče. Dříve to byl pouhý uživatelský skript začleněný do aplikace AdGuard pro Mac, který se pak stal plnohodnotným rozšířením prohlížeče. Další informace o [výhodách, které přináší](../browser-assistant).

![Assistant popup menu *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/safari_assistant_pop-up_menu.jpg)

Při první instalaci AdGuardu (během procesu zpracování) budete vyzváni k instalaci Asistenta prohlížeče pro váš výchozí prohlížeč. Pokud jste to nestihli, můžete si jej kdykoli stáhnout [pro jakýkoli prohlížeč](https://adguard.com/adguard-assistant/overview.html).

## Rozšíření

![Rozšíření](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Extensions.jpg)

Rozšíření jsou malé programy, které dělají přesně to, co naznačuje jejich název — rozšiřují funkce. AdGuard používá několik vlastních rozšíření, která se také nazývají uživatelské skripty, a rozšiřuje tak rozsah svých funkcí:

**1. Asistent AdGuardu** (zastaralá verze) Toto rozšíření pomáhá uživateli měnit základní nastavení AdGuardu v prohlížeči, aniž by bylo nutné otevírat samotnou aplikaci. Stejně jako Asistent prohlížeče funguje i zastaralý Asistent se všemi prohlížeči kompatibilními se systémem macOS. Díky tomuto malému nástroji můžete udělat několik věcí, aniž byste museli opustit prohlížeč: přidat určitou webovou stránku do seznamu "neblokovat", vybrat a zablokovat obzvláště obtěžující prvek na stránce, nahlásit webovou stránku, pokud se jí přesto podaří dostat k vám reklamy.

:::note

Tato verze Asistenta je starší a nemá smysl ji používat v nových systémech, protože byla nahrazena plnohodnotným Asistentem prohlížeče. Pokud však pro váš prohlížeč neexistuje rozšíření Asistent prohlížeče, může vám pomoci starší asistent.

:::

**2. AdGuard Extra** Toto rozšíření se používá k řešení složitějších případů blokování reklam, se kterými se můžete setkat. Doporučujeme vám, abyste ho měli vždy zapnuté, pokud k tomu nemáte vážný důvod.

**3. Blokátor vyskakovacích oken AdGuard** Zabraňuje otevírání všech těchto nepříjemných vyskakovacích oken při prohlížení webových stránek. Blokuje vyskakovací reklamy na webových stránkách.

Jednou z důležitých funkcí AdGuardu pro Mac je, že aplikace může fungovat jako správce uživatelských skriptů napříč prohlížeči. Můžete snadno přidávat libovolné skripty a spravovat stávající, aniž byste museli pokaždé přepínat prohlížeče.

## Síť

![Síť](https://cdn.adtidy.org/content/kb/ad_blocker/mac/NetworkFiltering.jpg)

Tento poslední panel je věnován filtrování sítě a najdete zde i další funkce. Doporučujeme povolit první dvě možnosti: "Automaticky filtrovat aplikace" a "Filtrovat protokol HTTPS". Ty jsou důležitým dodatečným opatřením pro lepší filtrování webového prostoru. HTTP je základním protokolem pro přenos informací přes Internet. Přenáší se přes něj většina dat včetně reklam, ale má jednu nevýhodu — připojení není šifrované. Díky funkci filtrování HTTPS, AdGuard filtruje nejen provoz HTTP, ale také provoz HTTPS (S znamená "secure").

K dispozici jsou také možnosti "Nefiltrovat webové stránky s certifikáty EV" a "Použít AdGuard jako HTTP proxy". Certifikáty SSL s rozšířeným ověřením (Extended Validation, EV) poskytují silnější bezpečnostní záruku; majitelé těchto webových stránek musí projít důkladným a celosvětově standardizovaným procesem ověřování identity definovaným v pokynech pro EV. To je důvod, proč někteří uživatelé webovým stránkám s takovými certifikáty důvěřují a raději je nefiltrují.

Pokud jde o druhou možnost — ano, ve skutečnosti můžete AdGuard používat jako běžný HTTP proxy. Veškerý provoz, který jím prochází, bude filtrován. Tento proxy server bude k dispozici také v lokální síti, takže jej můžete použít k filtrování provozu na jiných zařízeních, která jsou schopna proxy serveru přímo dosáhnout. Chcete-li filtrovat provoz na jiném zařízení připojeném k proxy serveru, musíte tam nainstalovat kořenový certifikát AdGuardu. Po konfiguraci proxy otevřete prohlížeč a přejděte na [tuto stránku](http://local.adguard.org/cert).

## Ostatní

Existují i další užitečné možnosti AdGuardu, které by v tomto článku neměly zůstat nepovšimnuty, protože výrazně přispívají k uživatelskému komfortu.

### Licence

Nejprve je tu karta Licence, kterou můžete otevřít z rozbalovací hlavní nabídky (ta se otevře po kliknutí na ikonu ozubeného kola v pravém horním rohu hlavního okna). Na této kartě můžete zjistit, jaký typ licence používáte, zkontrolovat její stav a dobu platnosti.

![Licence](https://cdn.adtidy.org/content/kb/ad_blocker/mac/License.jpg)

Na stejné kartě můžete pomocí příslušných tlačítek obnovit stav licence, obnovit licenci nebo resetovat licenční klíč.

### Podpora

Klikněte na ikonu ozubeného kola v pravém horním rohu, vyberte "Podpora" a budete moci odeslat hlášení o chybě nebo požadavek na funkci našemu týmu podpory. Nezapomeňte však přidat svůj skutečný e-mail, protože bez něj nebude zpráva odeslána.

![Podpora](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Support.jpg)

Chcete-li nahlásit nezablokovanou reklamu nebo nefunkční webové stránky, přejděte na odkaz nad oknem se zprávou, pro tyto typy problémů používáme samostatný nástroj pro hlášení.

Ke zprávě je možné připojit diagnostickou zprávu, stačí zaškrtnout políčko ve spodní části karty.

### Kontrola aktualizací

V neposlední řadě. Aktualizace filtrů a programů můžete zkontrolovat kliknutím na příslušné možnosti v rozbalovací nabídce (klikněte na ikonu ozubeného kola a zobrazí se vám).
