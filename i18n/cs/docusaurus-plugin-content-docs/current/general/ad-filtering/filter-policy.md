---
title: Zásady AdGuard filtrů
sidebar_position: 6
---

V AdGuardu se při vytváření filtrů dlouhodobě řídíme určitými zásadami, které jsou spolu s popisem filtrů uvedeny níže jako součást našich zásad filtrování.

## Společná kritéria

Tato kritéria platí stejně pro pravidla všech filtrů.

- Pravidla pro konkrétní web budou přidána pouze v případě dostatečného množství provozu. Provoz se určuje podle veřejných statistik (pokud jsou k dispozici) nebo nepřímých ukazatelů, jako je počet odběratelů na sociálních sítích. Návštěvnost stránek je považována za dostatečnou, pokud mají 100000 návštěv za měsíc. Přidání pravidla pro stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na vývojářích filtrů. Stránky s nízkou návštěvností by měly být stále kontrolovány pro analytické a reklamní sítě třetích stran
- O obsahových farmách (webových stránkách, které produkují velké množství obsahu zaměřeného především na dosažení vysoké viditelnosti ve výsledcích vyhledávání a generování příjmů z reklamy) rozhodují tvůrci filtrů v závislosti na kvalitě obsahu

Požadavky na kvalitu pravidel filtrování:

- Pravidla by neměla mít negativní dopad na webové stránky z hlediska výkonu
- Pravidla pro odblokování musí být co nejkonkrétnější, aby nedošlo k odblokování něčeho nepotřebného
- Pravidla JavaScript by se měla používat co nejšetrněji a pouze v případě, že bez nich není možné blokovat reklamy

## Filtry blokování reklam

### Terminologie

**Blokátor reklamy** je softwarový nebo hardwarový nástroj určený k filtrování, skrývání nebo blokování reklam a dalších prvků na webových stránkách. Blokátory reklam jsou vytvořeny s cílem zlepšit uživatelský komfort, zkrátit dobu načítání stránek, snížit spotřebu internetového provozu, blokovat reklamy, zvýšit soukromí při procházení webových stránek a používání aplikací a blokovat obtěžující prvky.

**Filtr** (nebo **seznam filtrů**) je sada pravidel filtrování určená k filtrování obsahu a blokování různých typů reklam a dalších typů obsahu pomocí blokátorů reklam. Tyto filtry obvykle fungují na úrovni webového prohlížeče, programů nebo DNS serveru.

**Anti-adblock** je technologie používaná webovými stránkami nebo aplikacemi, která má za cíl detekovat blokování reklam a reagovat na něj různými způsoby: sledováním, opětovným vkládáním reklam, nabádáním k vypnutí blokování reklam (tzv. "adblock walls"). Anti-adblocks mohou být různých typů:

- Anti-adblock, který blokuje obsah webové stránky, aniž by nabízel alternativu: aby uživatel mohl pokračovat v používání stránky, musí na ní vypnout blokátor reklam
- “Anti-adblock wall” s nabídkou alternativních možností, jako je zakoupení předplatného pro další používání blokátoru reklam
- Informační zprávy, které nevyžadují žádnou akci: uživatelé jsou vyzváni k vypnutí blokování reklam, ale tyto zprávy lze zavřít, což uživatelům umožní pokračovat v prohlížení webu bez omezení
- Zavedení alternativní reklamy v reakci na používání blokátorů reklam: weby zavádějí alternativní reklamu, když jsou detekovány blokátory reklam
- Paywall: způsob zpeněžení obsahu, kdy je obsah před uživateli částečně nebo úplně skrytý, přičemž je uživatel vyzván k zakoupení předplatného

### Filtry

Mezi AdGuard filtry blokující reklamy patří:

- Základní filtr AdGuardu
- Filtr mobilních reklam AdGuard
- Regionální filtry rozdělené podle jazyků — čínština, holandština, francouzština, němčina, japonština, ruština, španělština/portugalština, turečtina a ukrajinština

### Účel těchto filtrů

- **Základní filtr** je určen k blokování reklam na anglicky psaných webových stránkách a na těch, pro které neexistuje samostatný filtr. Obsahuje také obecná pravidla filtrování, která platí pro všechny weby bez ohledu na jazyk
- **Filtr mobilních reklam** blokuje reklamy na mobilních verzích webových stránek a v mobilních aplikacích. Neexistuje žádná segmentace na základě jazyka
- **Regionální filtry** se řídí stejnými zásadami jako **Základní filtr**, ale jsou omezeny na webové stránky v konkrétních jazycích

Cílem filtrů pro blokování reklam je blokovat všechny typy reklam na webových stránkách, v aplikacích a v některých zařízeních, která mohou načítat reklamy z internetu:

- Bannery — reklamy zobrazené jako obrázky v různých částech webových stránek
- Upoutávky — textové nebo grafické reklamy, často animované, které mají návštěvníky zaujmout (senzační titulky, obrázky poutající pozornost) a přimět je ke kliknutí na banner (clickbait)
- Textové reklamy — reklama ve formě textu včetně odkazů
- Modální reklamy — reklama, která se náhle objeví nad aktuálním obsahem v podobě modálních oken
- Vyskakovací okna — reklama, která se po kliknutí kdekoli na stránce otevře v samostatném okně pod aktuálním oknem
- Přesměrovaná reklama — mechanismy, které uživatele po kliknutí automaticky přesměrují na jiný web
- Reklamy maskované jako obsah webu, které po kliknutí otevřou stránky s propagovanými produkty nebo nesouvisejícím obsahem
- Videoreklamy — reklamní videa vložená do videoobsahu nebo do samostatných reklamních prvků na webových stránkách a v aplikacích
- Interaktivní reklamy — reklamy, s nimiž mohou uživatelé interagovat (např. hry a průzkumy, po jejichž dokončení se otevře inzerovaný předmět)
- Vsunuté reklamy — reklamy přes celou obrazovku na mobilních zařízeních, které zakrývají rozhraní aplikace nebo webového prohlížeče
- Pozůstatky reklam, které zabírají velké plochy nebo vyčnívají na pozadí a přitahují pozornost návštěvníků (kromě těch sotva znatelných nebo nepřehlédnutelných)
- Anti-adblock reklama — alternativní reklama zobrazovaná na webu, když je hlavní reklama blokována
- Vlastní reklama webu, pokud byla zablokována obecnými pravidly filtrování (viz *Omezení a výjimky*)
- Anti-adblock skripty, které brání používání stránek (viz *Omezení a výjimky*)
- Reklama vložená malwarem, pokud jsou poskytnuty podrobné informace o způsobu jejího načtení nebo krocích pro reprodukci
- Nežádoucí těžba kryptoměn — skripty, které těží kryptoměny bez souhlasu uživatele

### Omezení a výjimky

- Vlastní reklama webu by neměla být záměrně blokována. Pokud je však blokování způsobeno obecnými pravidly filtrování, nemělo by být odblokováno
- Oprávnění pro přístup k obsahu, jako jsou paywally, nejsou blokována
- Anti-adblock budou blokovány v následujících případech:
    - Agresivně trvají na vypnutí nebo odstranění blokátoru reklam nebo účinně brání používání webových stránek
    - Obsahují nesprávné a zavádějící popisy možných důsledků používání blokátorů reklamy
    - Vystavují návštěvníky riziku malvertisingu — když povolené reklamy pocházejí z pochybných zdrojů
- Neblokujeme zprávy o detekci blokování reklam, které splňují alespoň jedno z následujících kritérií:
    - Umožňují používání webových stránek a nepřekrývají značné množství obsahu
    - Poskytují alternativu k deaktivaci blokátoru reklam, protože tato alternativa neohrožuje soukromí ani bezpečnost uživatelů
    - Umožňují uživateli přejít k obsahu webové stránky nebo nabízejí proveditelnou výměnu hodnot, která neohrožuje soukromí nebo bezpečnost uživatele
    - Některá starší pravidla mohou nadále blokovat zprávy, které splňují jedno nebo více z těchto kritérií. Pokud budou taková pravidla identifikována, bude s nimi nakládáno v souladu s těmito zásadami
- Prostory pro těžbu kryptoměn nejsou blokovány, pokud jsou veřejné a nejsou používány výhradně ke škodlivým účelům

## Filtr ochrany sledování

### Terminologie

**Sledování** — proces sledování a shromažďování údajů o uživatelích a jejich interakcích s webovými stránkami a aplikacemi pro marketingové účely, jakož i získávání telemetrie o fungování webových stránek nebo aplikací za účelem analýzy jejich fungování. Tento proces obsahuje sledování navštívených stránek, stráveného času, interakce s prvky webu (např. kliknutí, odeslání formuláře) a další metriky. Umožňuje provozovatelům webových stránek a aplikací lépe porozumět chování uživatelů, optimalizovat funkce a přizpůsobit marketingové strategie. Sledování se také používá ke sledování výkonu, vzorců používání a identifikaci problémů, což vývojářům poskytuje potřebné údaje ke zlepšení stability a kvality webových stránek nebo aplikací. I když získané údaje nemohou odhalit totožnost osoby, jsou tyto činnosti stále považovány za sledování.

**Slídič** — software používaný na webových stránkách nebo v aplikacích a určený ke shromažďování informací o jejich provozu a činnostech návštěvníků. Sleduje interakci uživatele s webovou stránkou nebo aplikací a zaznamenává údaje o zobrazení stránek, stráveném čase, kliknutích, odeslání formuláře a dalších událostech. Jeho účelem je poskytnout provozovatelům webových stránek a aplikací nástroj pro analýzu chování uživatelů, zlepšení uživatelských zážitků a optimalizaci obsahu a reklamy.

**Parametr sledování URL** — část adresy, kterou analytické systémy přidávají k odkazům nebo která se vyskytuje v některých odkazech na webových stránkách. Po odeslání požadavku může tento parametr sledování URL zpracovat pozadí analytického systému nebo webové stránky, který z něj získá informace. Například parametry sledování URL mohou přenášet informace o kliknutích nebo reklamních kampaních. Parametry sledování URL mohou také používat systémy ochrany proti podvodům nebo detekce botů.

**Cookies** — soubory, které webové stránky odesílají a ukládají do zařízení. Tyto soubory obsahují různé informace — jak nezbytné pro fungování webu v zařízení, tak používané pro analytické účely — jedinečné identifikátory používané ke sledování aktivity návštěvníků webu, parametry reklamy a další.

### Filtry

AdGuard filtr ochrany sledování obsahují:

- AdGuard filtr ochrany sledování
- AdGuard filtr sledování URL

### Účel těchto filtrů

**Filtr ochrany sledování** je určen k blokování slídičů, kteří shromažďují osobní údaje uživatelů a k posílení jejich soukromí.

Co je blokováno:

- Skripty analytických systémů
- Vlastní sledovací skripty webových stránek a aplikací
- Maskované slídiče CNAME
- Sledovací cookies
- Sledovací pixely
- Sledovací API prohlížečů
- Funkce Privacy Sandbox v Google Chrome a jeho odnože používané pro sledování (Google Topics API, Protected Audience API)

**Filtr sledování URL** je určen k odstranění sledovacích parametrů z webových adres

### Omezení a výjimky

Filtry ochrany sledování by neměly blokovat slídiče, pokud by blokování narušilo správné fungování webu:

- Ochrana Anti-bot a podvodům, pokud narušuje používání webu. Například s blokováním PerimeterX nebo hCaptcha způsobuje problémy, když se web pokouší ověřit návštěvníka pomocí captcha
- Systémy pro sledování chyb, jako je Sentry nebo Bugsnag nejsou blokovány

## Filtry obtěžování

Filtry obtěžování jsou navrženy tak, aby zlepšily použitelnost webových stránek blokováním prvků na stránkách, které nejsou reklamou, ale ruší a narušují interakci s webem nebo konzumaci obsahu — jako jsou různá modální okna a interaktivní formuláře, oznámení a žádosti o souhlas s cookies, bannery mobilních aplikací a různé widgety.

### Terminologie

**Upozornění na soubory cookies** — formulář, který popisuje typy a použití souborů cookies na webových stránkách. Při návštěvě webové stránky se zobrazí upozornění na soubory cookies, které uživatele informuje o tom, že webová stránka používá soubory cookies nebo jiné sledovací technologie ke shromažďování a používání osobních údajů, a vysvětluje, proč a komu jsou shromážděné informace poskytovány.

**CMP (Consent Management Platform)** — software, který pomáhá webovým stránkám dodržovat pravidla používání souborů cookies. CMP omezují používání souborů cookies, dokud uživatel nezíská souhlas, a poskytují uživatelům možnost přijmout určité soubory cookies a spravovat nastavení ochrany osobních údajů.

**Widget**  — prvek uživatelského rozhraní, který rozšiřuje funkčnost webové stránky. Webové widgety jsou integrovány do webových stránek a mohou obsahovat interaktivní prvky, jako jsou tlačítka, formuláře nebo bannery. Mohou uživatelům poskytnout přístup ke konkrétním službám nebo obsahu, aniž by uživatelé museli přecházet na jiné stránky.

**Vyskakovací okno** — okno, které se zobrazí nad aktuální webovou stránkou. Je určeno k zobrazení dalších informací, reklam, oznámení nebo formulářů pro zadávání dat. Vyskakovací okna obvykle blokují zobrazení hlavního obsahu stránky a pro zavření vyžadují akci uživatele, což může být nepříjemné.

### Filtry

Pro lepší přizpůsobení jsou filtry obtěžování rozděleny podle účelu:

- AdGuard Cookie Notices filter
- AdGuard Popups filter
- AdGuard Mobile App Banners filter
- AdGuard Widgets filter
- AdGuard Other Annoyances filter
- AdGuard Annoyances filter — kombinovaný filtr, který obsahuje všech 5 speciálních filtrů obtěžování

### Účel těchto filtrů

#### AdGuard Cookie Notices filter

Tento filtr je navržen tak, aby blokoval oznámení o souborech cookies i požadavky platforem pro správu souborů cookies (CMP). Na oznámení o cookiess a CMP lze použít různé metody. Ve většině případů stačí příslušné skripty jednoduše skrýt nebo zablokovat. Pokud však funkce webu a zobrazování obsahu třetích stran vyžadují souhlas se soubory cookies, používají se následující metody:

- Skriptlety se používají k obejití žádosti o souhlas (prakticky nepoužitelné na webech s omezením načítání obsahu třetích stran, dokud není učiněno rozhodnutí)
- Nastavení souboru cookies nebo klíče v místním úložišti webu takovým způsobem, aby skript považoval volbu uživatele za provedenou
- Simulace akce uživatele pomocí pravidla, které klikne na zadané tlačítko a přeruší jeho provádění 10 sekund po načtení. Jsou možné dvě možnosti:
    - Odmítnout (s výjimkou funkčních souborů cookies — v závislosti na systému CMP) — preferovaná možnost, protože je menší riziko na načtení dalších analytických nástrojů
    - Přijmout — tato možnost se používá jako poslední možnost, pokud jiné metody selžou. V tomto případě je web navíc kontrolován na použití analytických nástrojů, které jsou pak blokovány filtrem **AdGuard Tracking Protection**

**Omezení a výjimky**

V některých případech rozhodují o přidání pravidel nezávisle na sobě vývojáři filtrů; většinou tehdy, pokud by volba provedená při simulaci akcí ovlivnila funkčnost webu (například by nemusela fungovat historie nebo by se na takovém webu neukládala uživatelská nastavení).

#### AdGuard Popups filter

Jedná se o filtr, který blokuje různá vyskakovací okna na webových stránkách, která nejsou nezbytná pro běžné používání webu, mimo jiné:

- Žádosti o povolení přijímat oznámení push
- Vyskakovací okna a formuláře pro přihlášení k odběru novinek, propagačních akcí a různých událostí, včetně kanálů třetích stran pro jejich příjem (jako jsou Google News, Telegram)
- Vyskakovací okna, která nabádají uživatele k deaktivaci blokování reklam a porušují soukromí uživatele (podle zvážení vývojářů filtru)
- Jiné typy vyskakovacích oken, které mohou uživatele obtěžovat (podle zvážení vývojářů filtrů)

**Omezení a výjimky**

- Oznámení Push jsou blokována pouze na stránkách, kde se nepoužívají k praktickým účelům. Například v e-mailových webových klientech nebo nástrojích používaných pro pracovní účely nebudou tato oznámení blokována
- Některá vyskakovací okna, která nespadají do výše popsaných kategorií, ale přesto narušují uživatelský zážitek, mohou být také zablokována. Například výzvy k registraci na webu nebo vyskakovací okna, která představují funkce webu. O tom rozhodují vývojáři filtrů
- Opatření pro přístup k obsahu, která vyžadují, aby uživatel za přístup k obsahu zaplatil, nesmí být obcházena

#### AdGuard Mobile App Banners filter

Jedná se o filtr, který blokuje bannery a vyskakovací okna vybízející návštěvníky k instalaci mobilních aplikací.

**Omezení a výjimky**

Bannery umístěné v záhlaví nebo v menu webových stránek nejsou blokovány, pokud nejsou animované a nezabírají významnou část využitelného prostoru. Pokud je banner umístěn v zápatí, rozhodují vývojáři filtrů případ od případu. Bannery v zápatí obvykle nevyčnívají z ostatních prvků a nepůsobí rušivě.

#### AdGuard Widgets filter

Jedná se o filtr, který blokuje různé widgety, které nejsou nezbytné pro fungování webu nebo pro interakci s ním:

- Widgety pro doporučení obsahu — související články, podobné webové stránky, různá personalizovaná doporučení
- Widgety chatu, které nejsou integrovány do obsahu a nejsou hlavním obsahem stránky
- Marketingové widgety:
    - Chaty pro komunikaci s asistenty nebo boty
    - Widgety s doporučeními produktů, které se zobrazují uživateli
    - Formuláře pro zpětné volání
- Ostatní widgety, které nemají samostatnou kategorii, ale mohou stránku vizuálně znepřehlednit. Například widgety počasí, směnné kurzy, nabídky práce a dary

**Omezení a výjimky**

Tento filtr neblokuje:

- Widgety úzce související s obsahem stránky, jako jsou sekce komentářů, živé chaty s výjimkou nemoderovaných chatů na stránkách s neoficiálními chaty, které jsou často plné spamu a podobného obsahu
- Widgety pro vlastní propagaci a propagační aktivity na konkrétních stránkách
- Dárcovské widgety s výjimkou případů, kdy zabírají významnou část stránky a výrazně se odlišují od obsahu. O blokování rozhodují vývojáři filtrů

#### AdGuard Other Annoyances filter

Tento filtr je určen k blokování nepříjemných prvků, které nejsou zahrnuty v jiných filtrech a k použití různých úprav. Jeho účelem je:

- Blokovat sebepropagaci webových stránek (jakýkoli typ reklamy propagující zboží nebo služby vlastněné majitelem stránek, aniž by obdržel komerční kompenzaci od třetí strany), pokud je považována za obtěžující prvek
- Blokovat obtěžujíci prvky, které nejsou zahrnuty v jiných kategoriích
- Odblokovat akce na stránce, jako je otevření kontextové nabídky, výběr a kopírování textu, pokud jsou blokovány
- Zrychlit časovače odpočítávání při načítání souborů z webových stránek, pokud kontrola není řízena serverem nebo jí nic nebrání
- Použít různá pravidla, která mohou být užitečná pro vývojáře filtrů. Například blokování detekce webového ladění

**Omezení a výjimky**

Tento filtr může obsahovat pravidla, která nejsou vhodná pro všechny uživatele. Někdy se doporučuje tento filtr vypnout. O přidání pravidel do tohoto filtru rozhodují vývojáři filtru na základě jednotlivých pravidel.

## Filtry sociálních médií

### Filtry

Filtr sociálních médií AdGuard obsahuje:

- Filtr sociálních médií AdGuard

### Účel těchto filtrů

Tento filtr zablokuje widgety sociálních médií na webových stránkách třetích stran, například tlačítka "Like" a "Share", widgety skupin, doporučující a podobné widgety.

### Omezení a výjimky

Widgety, které jsou součástí funkcí nebo obsahu webových stránek, jako jsou komentáře, vložené příspěvky, ankety a widgety pro přihlášení do sociálních sítí, nejsou blokovány. Odkazy na stránky sociálních sítích také nejsou blokovány.

## Ostatní filtry

Tato skupina obsahuje filtry, které nejsou pro blokování reklam nezbytné.

### Terminologie

**Kontextová reklama** je typ internetové reklamy, kdy se reklama zobrazuje na základě obsahu, vybraného publika, místa, času nebo jiného kontextu internetových stránek.

**Reklama ve vyhledávání** je podtřída kontextové reklamy, kde se reklamy zobrazují na základě vyhledávacího dotazu návštěvníka.

**Vlastní propagace webových stránek** označuje bannery na webových stránkách propagující zboží a služby vlastněné majitelem stránek, za které nedostává odměnu od třetích stran.

Podrobnější informace o těchto typech reklamy naleznete v [článku Reklamy ve vyhledávání](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtry

- Filtr pro odblokování užitečných reklam
- Filtr AdGuard DNS
- Experimentální filtr AdGuard

### Účel těchto filtrů

#### Filtr pro odblokování užitečných reklam

Tento filtr odblokuje:

- Kontextovou reklamu ve výsledcích vyhledávání při použití vyhledávačů (například Google, Bing, Yandex, DuckDuckGo)
- Vlastní propagaci webových stránek

**Omezení a výjimky**

- Reklama ve vyhledávání je odblokována pouze v případě, že odpovídá vyhledávacímu dotazu uživatele, protože je kontextová. V opačném případě zůstane reklama zablokována
- Vlastní propagace je odblokována pouze v případě, že je v souladu se zásadami filtrování. Vývojáři filtrů mohou žádost o odblokování zamítnout
- Jakákoli jiná reklama nebude odblokována

#### Filtr AdGuard DNS

Tento filtr se používá v AdGuard DNS. Nenahrazuje filtry pro blokování reklam.

**Omezení a výjimky**

Stejné jako u filtrů pro blokování reklam.

#### Experimentální filtr AdGuard

Tento filtr je určen k testování a ladění pravidel, která mohou potenciálně narušit funkčnost webových stránek. Pravidla přidávají vývojáři filtrů, když je potřeba otestovat určité řešení. Protože je filtr určen pro účely ladění, jsou jeho omezení minimální.

**Omezení a výjimky**

- Pravidla by neměla výslovně porušovat funkčnost webových stránek
- Pravidla by neměla odblokovávat reklamy nebo jinak porušovat zásady
