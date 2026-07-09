---
title: AdGuard szűrőszabályzat
sidebar_position: 6
---

:::note Disclaimer

Please read this filter policy carefully before enabling any filters.

Using AdGuard Ad Blocker, AdGuard DNS, and their filters may affect how third-party websites and services function. You are responsible for reviewing and following the policies and terms of any websites or services you use.

Before enabling filters provided by third parties, you agree to review their applicable terms and make an informed decision about using them. AdGuard is not responsible for how third-party filters operate or what their terms contain, and their presence in AdGuard products is not a recommendation to use them.

:::

Az AdGuard-nál már régóta követünk bizonyos elveket a szűrők készítése során, amelyeket a szűrők leírásával együtt az alábbiakban ismertetünk szűrési irányelvünk részeként.

## Közös kritériumok

Ezek a kritériumok minden szűrő szabályaira egyformán vonatkoznak.

- Egy adott webhelyre vonatkozó szabályok csak megfelelő forgalom esetén lesznek hozzáadva. A forgalmat nyilvános statisztikák (ha rendelkezésre állnak) vagy közvetett mutatók, például a közösségi hálózatokon feliratkozók száma alapján határozzák meg. Egy webhely forgalma akkor tekinthető elegendőnek, ha eléri a havi 100 000 látogatást. Megfontoljuk egy szabály hozzáadását egy kevésbé népszerű webhelyhez, de a végső döntést a szűrők fejlesztői hozzák meg. Az alacsony látogatottságú oldalakat még mindig ellenőrizni kell a harmadik féltől származó elemző és reklámhálózatok tekintetében
- A tartalomfarmokról (olyan webhelyek, amelyek nagy mennyiségű tartalmat állítanak elő, elsősorban a keresési eredményekben való jó láthatóság elérése és a hirdetési bevételek elérése érdekében) a szűrőfejlesztők döntenek a tartalom minőségétől függően

A szűrési szabályokra vonatkozó minőségi követelmények:

- A szabályok nem befolyásolhatják negatívan a weboldalak teljesítményét
- A feloldási szabályoknak a lehető legpontosabbaknak kell lenniük, hogy elkerüljék a szükségtelen dolgok feloldását
- A JavaScript-szabályokat a lehető legtakarékosabban kell használni, és csak akkor, ha a hirdetések blokkolása lehetetlen nélkülük

## Tartalomblokkoló szűrők

### Terminológia

Az **Ad blocker** egy szoftver- vagy hardvereszköz, amelyet a weboldalakon megjelenő hirdetések és egyéb elemek szűrésére, elrejtésére vagy blokkolására terveztek. A hirdetésblokkolók célja a felhasználói élmény javítása, az oldalak betöltési idejének csökkentése, az internetes forgalom csökkentése, a hirdetések blokkolása, a személyes adatok védelme a webhelyek böngészése és az alkalmazások használata közben, valamint a bosszantó elemek blokkolása.

A **szűrő** (vagy egy **szűrőlista**) olyan szűrési szabályok halmaza, amelyek célja a tartalom szűrése, valamint a különféle típusú hirdetések és más típusú tartalmak blokkolása. hirdetésblokkolók. Ezek a szűrők általában a webböngésző, a programok vagy a DNS-kiszolgáló szintjén működnek.

Az **Anti-adblock** egy olyan technológia, amelyet webhelyek vagy alkalmazások használnak, hogy észleljék a hirdetésblokkolást, és különböző módon reagáljanak rá: nyomon követve, újra beszúrva a hirdetéseket, ösztönözve a hirdetésblokkolók (úgynevezett „hirdetésblokkoló falak”) letiltására. ”). A blokkolásgátlók különböző típusúak lehetnek:

- Anti-hirdetésszűrő, ami blokkolja a weboldal tartalmát anélkül, hogy alternatívát kínálna: ahhoz, hogy továbbra is használja az oldalt, a felhasználónak ki kell kapcsolnia a hirdetésszűrőt az oldalon
- „Reklámblokkoló fal” alternatív lehetőségekkel, például előfizetés vásárlásával a hirdetésblokkoló használatának folytatásához
- Tájékoztató üzenetek, amelyek nem köteleznek cselekvésre: a felhasználókat arra kérik, hogy kapcsolják ki a hirdetésblokkolót, de ezek az üzenetek bezárhatók, így a felhasználók korlátozás nélkül használhatják az oldalt
- Alternatív hirdetések megvalósítása a hirdetésblokkolók használatára válaszul: a webhelyek alternatív hirdetést vezetnek be, amikor hirdetésblokkolókat észlelnek
- Paywall: a tartalom monetizálásának olyan módszere, ahol a tartalom részben vagy teljesen el van rejtve a felhasználók elől, és egy üzenet arra kéri őket, hogy a hozzáférésért előfizetést vásároljanak

### Szűrők

Az AdGuard hirdetésblokkoló szűrői a következők:

- AdGuard Alap szűrő
- AdGuard Mobile App Banners szűrő
- Regionális szűrők nyelvi elvek szerint - kínai, holland, francia, német, japán, orosz, spanyol/portugál, török, német, ukrán és orosz

### Ezeknek a szűrőknek a célja

- A **Az** alapszűrő célja, hogy blokkolja a hirdetéseket az angol nyelvű webhelyeken és azokon, amelyekhez nincs külön szűrő. Általános szűrési szabályokat is tartalmaz, amelyek nyelvtől függetlenül minden webhelyre vonatkoznak
- A **mobilhirdetések szűrője** blokkolja a hirdetéseket a weboldalak mobilverzióiban és a mobilalkalmazásokban. Nincs nyelvi szegmentálás
- **A** regionális szűrők ugyanazt az irányelvet követik, mint a **Alapszűrő**, de bizonyos nyelvű webhelyekre korlátozva

A hirdetésblokkoló szűrők célja, hogy blokkoljanak mindenféle hirdetést olyan webhelyeken, alkalmazásokban és bizonyos eszközökön, amelyek hirdetéseket tölthetnek be az internetről:

- Bannerek - a weboldalak különböző részein képként megjelenő hirdetések
- Teaserek - szöveges vagy grafikus, gyakran animált hirdetések, amelyek célja, hogy a látogatókat felkeltsék az érdeklődést (szenzációs címek, figyelemfelkeltő képek) és a bannerre való kattintásra késztessék őket (clickbait)
- Szöveges hirdetések - szöveges hirdetések, beleértve a linkeket is
- Modális hirdetések - az aktuális tartalom felett hirtelen megjelenő reklámok modális ablakok formájában
- Popunders - reklámok, amelyek egy külön ablakban nyílnak meg az aktuális ablak alatt, ha az oldalon bárhol rákattintanak
- Kattintás alapú hirdetés – olyan mechanizmusok, amelyek kattintás után automatikusan átirányítják a felhasználókat egy másik webhelyre
- A webhely tartalmának álcázott hirdetések, amelyekre kattintva reklámozott termékeket vagy nem kapcsolódó tartalmakat tartalmazó oldalak nyílnak meg
- Videóhirdetések - videótartalomba vagy különálló hirdetési elemekbe ágyazott hirdetési videók a weboldalakon és alkalmazásokban
- Interaktív hirdetések – olyan hirdetések, amelyekkel a felhasználók interakcióba léphetnek (pl. játékok és felmérések, amelyek befejezése után a hirdetett elem megnyílik)
- Közbeiktatott hirdetések – teljes képernyős hirdetések mobileszközökön, amelyek lefedik az alkalmazás vagy a webböngésző felületét
- Nagy tereket elfoglaló vagy a háttérből kiemelkedő, a látogatók figyelmét felkeltő hirdetésmaradványok (kivéve az alig észrevehető vagy észrevehetetlen hirdetéseket)
- Anti-adblock reklám - alternatív reklámok megjelenítése az oldalon, ha a fő reklám blokkolva van
- Csali elemek, amelyeket több ismert hirdetésblokkoló szkript használ a hirdetésblokkoló jelenlétének észlelésére különböző célok érdekében, beleértve a hirdetések megjelenítési módjának megváltoztatását, az ujjlenyomat-vételt stb.
- A webhely saját hirdetése, ha azt az általános szűrési szabályok letiltották (lásd *Korlátozások és kivételek*)
- Hirdetésblokkoló szkriptek, amelyek megakadályozzák a webhely használatát (lásd: *Korlátozások és kivételek*)
- Rosszindulatú program által beoltott reklám, ha részletes információ áll rendelkezésre a betöltési módról vagy a reprodukálás lépéseiről
- Nem kívánt bányászat - a felhasználó beleegyezése nélkül kriptovalutát bányászó szkriptek

### Korlátozások és kivételek

- Az oldal saját hirdetéseit nem szabad szándékosan blokkolni. Nem szabad azonban feloldani a blokkolást, ha a blokkolást általános szűrési szabályok okozzák
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- A blokkolásgátló falak a következő esetekben blokkolva lesznek:
    - Agresszívan ragaszkodnak a reklámblokkoló letiltásához vagy eltávolításához, vagy ténylegesen megakadályozzák a weboldal használatát
    - Hibás és félrevezető leírásokat tartalmaznak a reklámblokkolók használatának lehetséges következményeiről
    - A látogatókat malvertising veszélyének teszik ki - amikor a blokkolatlan hirdetések kétes forrásból származnak
    - They violate or negatively impact user privacy
- Nem blokkoljuk azokat a hirdetésblokkoló-észlelő üzeneteket, amelyek megfelelnek a következő feltételek legalább egyikének:
    - Lehetővé teszik a webhely használatát, és nem takarják el a jelentős mennyiségű tartalommal
    - Alternatív megoldást kínálnak a hirdetésblokkoló letiltására, mivel ez az alternatíva nem veszélyezteti a felhasználók magánéletét vagy biztonságát
    - Lehetővé teszik a felhasználó számára, hogy továbblépjen a weboldal tartalmára
    - Előfordulhat, hogy egyes örökölt szabályok továbbra is blokkolják azokat az üzeneteket, amelyek megfelelnek egy vagy több kritériumnak. Ha azonosítják, az ilyen szabályokat a jelen szabályzat szerint kezeljük
- A bányászati poolok nem kerülnek blokkolásra, ha nyilvánosak és nem kizárólag rosszindulatú célokra használják őket

## Nyomkövetés elleni szűrők

### Terminológia

**Nyomon követés** - a felhasználókra és a weboldalakkal és alkalmazásokkal való interakcióikra vonatkozó adatok nyomon követése és gyűjtése marketingcélokból, valamint a weboldalak vagy alkalmazások működésére vonatkozó telemetria megszerzése a működésük elemzése céljából. Ez a folyamat magában foglalja a meglátogatott oldalak, az eltöltött idő, a weboldal elemeivel való interakció (pl. kattintások, űrlapok kitöltése) és egyéb mérőszámok nyomon követését. Lehetővé teszi a webhely- és alkalmazástulajdonosok számára, hogy jobban megértsék a felhasználói viselkedést, optimalizálják a funkcionalitást és adaptálják marketingstratégiáikat. A nyomon követést a teljesítmény és a használati minták nyomon követésére, valamint a problémák azonosítására is használják, így a fejlesztők rendelkezésére állnak a weboldal vagy alkalmazás stabilitásának és minőségének javításához szükséges adatok. Még ha a megszerzett adatok nem is fedik fel egy személy személyazonosságát, az ilyen tevékenységek akkor is nyomon követésnek minősülnek.

**Tracker** - egy weboldalon vagy alkalmazásban használt szoftver, amelynek célja, hogy információkat gyűjtsön a működésükről és a látogatók tevékenységeiről. Nyomon követi a felhasználó és a weboldal vagy alkalmazás közötti interakciókat, rögzíti az oldalmegtekintések, az eltöltött idő, a kattintások, az űrlapok beküldése és egyéb események adatait. Célja, hogy a webhelyek és alkalmazások tulajdonosai számára eszközt biztosítson a felhasználói viselkedés elemzéséhez, a felhasználói élmény javításához, valamint a tartalom és a hirdetések optimalizálásához.

**URL-követési paraméter** - a cím egy része, amelyet az elemzőrendszerek a linkekhez adnak hozzá, vagy amely a weboldalak egyes linkjeiben van jelen. Kérelem esetén ezt az URL-követési paramétert feldolgozhatja egy elemzőrendszer vagy webhely háttérrendszere, amely információkat nyer ki belőle. Például az URL-követési paraméterek információkat továbbíthatnak a kattintásokról vagy a hirdetési kampányokról. Az URL nyomkövetési paramétereket csalásvédelmi vagy botészlelő rendszerek is használhatják.

**Sütik** - fájlok, amelyeket a webhelyek küldenek az eszközökre és tárolnak azokon. Ezek a fájlok különféle információkat tartalmaznak – mind az oldal működéséhez az eszközön, mind pedig elemzési célokra használhatók – egyedi azonosítókat, amelyek a látogatói tevékenység nyomon követésére szolgálnak a webhelyen, hirdetési paraméterek stb.

### Szűrők

AdGuard Követés Elleni szűrő:

- AdGuard Követés Elleni szűrő
- AdGuard URL Követés szűrő

### E szűrők célja

A **Követés elleni szűrő** célja, hogy blokkolja a felhasználók személyes adatait gyűjtő nyomkövetőket, és javítsa a felhasználók magánéletét.

Amit blokkol:

- Az analitikai rendszerek szkriptjei
- Weboldalak és alkalmazások saját nyomkövető szkriptjei
- Álcázott CNAME-követők
- Nyomkövető sütik
- Nyomkövető pixelek
- A böngészők nyomkövető API-jai
- A hirdetésblokkoló észlelése nyomon követési célból
- Privacy Sandbox funkció a Google Chrome-ban és a nyomkövetéshez használt villáiban (Google Topics API, Protected Audience API)

A **URL-követő szűrő** célja a nyomkövetési paraméterek eltávolítása a webcímekről

### Korlátozások és kivételek

A nyomkövető védelmi szűrők nem blokkolhatják a nyomkövetőt, ha a blokkolás megzavarná a webhely megfelelő működését:

- Botok és csalás elleni védelem, ha ez zavarja az oldal használatát. Például PerimeterX vagy hCaptcha esetén a blokkolás problémákat okoz, amikor a webhely captcha segítségével próbálja meg igazolni látogatóját
- A hibakövető rendszerek, például a Sentry vagy a Bugsnag nincsenek blokkolva

## Kellemetlenség szűrő

A bosszantó szűrőket úgy tervezték, hogy javítsák a webhelyek használhatóságát azáltal, hogy blokkolják az olyan oldalakon lévő elemeket, amelyek nem reklámok, de elvonják a figyelmet és zavarják a webhely interakcióját vagy tartalomfogyasztását – ilyenek például a különféle modális ablakok és interaktív űrlapok, cookie-k engedélyezésére vonatkozó értesítések és kérések, mobilalkalmazások szalaghirdetései, és különféle widgetek.

### Terminológia

**Cookie-figyelmeztetés** — egy űrlap, amely leírja a cookie-k típusait és használatát a webhelyen. A cookie-értesítés akkor jelenik meg, amikor a felhasználó felkeresi a webhelyet, amely tájékoztatja a felhasználót arról, hogy a webhely cookie-kat vagy más nyomkövetési technológiákat használ személyes adatok gyűjtésére és felhasználására, és elmagyarázza, hogy az összegyűjtött információkat miért és kivel osztják meg.

**CMP (Consent Management Platform)** – szoftver, amely segít a webhelyeknek megfelelni a cookie-használati szabályoknak. A CMP-k a felhasználói hozzájárulás megszerzéséig korlátozzák a cookie-k használatát, lehetővé téve a felhasználóknak bizonyos cookie-k elfogadását és az adatvédelmi beállítások kezelését.

**Widget** — egy felhasználói felület elem, amely kiterjeszti a webhely funkcionalitását. A webes widgetek a weboldalakba integrálódnak, és tartalmazhatnak interaktív elemeket, például gombokat, űrlapokat vagy bannereket. Hozzáférést biztosíthatnak a felhasználóknak bizonyos szolgáltatásokhoz vagy tartalmakhoz anélkül, hogy más oldalakra kellene navigálniuk.

**Popup** - az aktuális weboldal felett megjelenő ablak. További információk, hirdetések, értesítések vagy adatbeviteli űrlapok megjelenítésére szolgál. Az előugró ablakok általában blokkolják az oldal fő tartalmának megtekintését, és felhasználói beavatkozást igényelnek a bezáráshoz, ami bosszantó lehet.

### Szűrők

A jobb testreszabás érdekében a bosszúságszűrőket céljuk szerint osztják fel:

- AdGuard Cookie értesítések szűrő
- AdGuard Popups szűrő
- AdGuard Mobile App Banners szűrő
- AdGuard Widgets szűrő
- AdGuard Egyéb Kellemetlenségek elleni szűrő
- AdGuard Annoyances szűrő – egy kombinált szűrő, amely mind az 5 speciális bosszúságszűrőt tartalmazza

### Ezeknek a szűrőknek a célja

#### AdGuard Cookie értesítések szűrő

Ezt a szűrőt úgy tervezték, hogy blokkolja a cookie-kra vonatkozó értesítéseket és a cookie-kezelési platformokról (CMP-k) érkező kéréseket. Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Korlátozások és kivételek**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Popups szűrő

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Korlátozások és kivételek**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard Mobile App Banners szűrő

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Korlátozások és kivételek**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Widgets szűrő

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Korlátozások és kivételek**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard Kellemetlenségek elleni szűrő

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Korlátozások és kivételek**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Közössségi média szűrő

### Szűrők

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Ezeknek a szűrőknek a célja

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Korlátozások és kivételek

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Egyéb szűrők

This group contains filters that are not essential for blocking advertisements.

### Terminológia

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Szűrők

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### Ezeknek a szűrőknek a célja

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Korlátozások és kivételek**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Korlátozások és kivételek**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Korlátozások és kivételek**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
