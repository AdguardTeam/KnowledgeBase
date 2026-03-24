---
title: Zásady AdGuard filtrů
sidebar_position: 6
---

::::::note Odmítnutí odpovědnosti

Před povolením filtrů si pečlivě přečtěte tyto zásady filtrování.

Používání blokátoru reklam AdGuard, AdGuard DNS a jejich filtrů může ovlivnit fungování webových stránek a služeb třetích stran. Jste odpovědní za prostudování a dodržování zásad a podmínek všech webových stránek nebo služeb, které používáte.

Před povolením filtrů poskytovaných třetími stranami souhlasíte s tím, že si přečtete jejich příslušné podmínky a učiníte informované rozhodnutí o jejich používání. AdGuard nenese odpovědnost za to, jak fungují filtry třetích stran ani za obsah jejich podmínek, a jejich přítomnost v produktech AdGuard neznamená doporučení k jejich používání.

:::

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
- Nástražné prvky, které používá více známých skriptů pro detekci blokování reklam ke zjištění přítomnosti blokátoru reklam za různými účely, včetně změny způsobu zobrazování reklam, snímání digitálních otisků atd.
- Vlastní reklama webu, pokud byla zablokována obecnými pravidly filtrování (viz *Omezení a výjimky*)
- Anti-adblock skripty, které brání používání stránek (viz *Omezení a výjimky*)
- Reklama vložená malwarem, pokud jsou poskytnuty podrobné informace o způsobu jejího načtení nebo krocích pro reprodukci
- Nežádoucí těžba kryptoměn — skripty, které těží kryptoměny bez souhlasu uživatele

### Omezení a výjimky

- Vlastní reklama webu by neměla být záměrně blokována. Pokud je však blokování způsobeno obecnými pravidly filtrování, nemělo by být odblokováno
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- Anti-adblock budou blokovány v následujících případech:
    - Agresivně trvají na vypnutí nebo odstranění blokátoru reklam nebo účinně brání používání webových stránek
    - Obsahují nesprávné a zavádějící popisy možných důsledků používání blokátorů reklamy
    - Vystavují návštěvníky riziku malvertisingu — když povolené reklamy pocházejí z pochybných zdrojů
    - They violate or negatively impact user privacy
- Neblokujeme zprávy o detekci blokování reklam, které splňují alespoň jedno z následujících kritérií:
    - Umožňují používání webových stránek a nepřekrývají značné množství obsahu
    - Poskytují alternativu k deaktivaci blokátoru reklam, protože tato alternativa neohrožuje soukromí ani bezpečnost uživatelů
    - Umožňují uživateli přejít k obsahu webové stránky
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
- Detekce blokátoru reklam pro účely sledování
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

**Widget** — prvek uživatelského rozhraní, který rozšiřuje funkčnost webové stránky. Webové widgety jsou integrovány do webových stránek a mohou obsahovat interaktivní prvky, jako jsou tlačítka, formuláře nebo bannery. Mohou uživatelům poskytnout přístup ke konkrétním službám nebo obsahu, aniž by uživatelé museli přecházet na jiné stránky.

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

Tento filtr je navržen tak, aby blokoval oznámení o souborech cookies i požadavky platforem pro správu souborů cookies (CMP). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Omezení a výjimky**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Popups filter

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Omezení a výjimky**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard Mobile App Banners filter

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Omezení a výjimky**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Widgets filter

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Omezení a výjimky**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard Other Annoyances filter

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Omezení a výjimky**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Filtry sociálních médií

### Filtry

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Účel těchto filtrů

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Omezení a výjimky

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Ostatní filtry

This group contains filters that are not essential for blocking advertisements.

### Terminologie

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtry

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### Účel těchto filtrů

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Omezení a výjimky**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Omezení a výjimky**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Omezení a výjimky**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
