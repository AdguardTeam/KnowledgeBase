---
title: AdGuard szűrőszabályzat
sidebar_position: 6
---

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
- A tartalomhoz való hozzáférést biztosító intézkedések, mint például a fizetős falak, nem blokkolhatók
- A blokkolásgátló falak a következő esetekben blokkolva lesznek:
    - Agresszívan ragaszkodnak a reklámblokkoló letiltásához vagy eltávolításához, vagy ténylegesen megakadályozzák a weboldal használatát
    - Hibás és félrevezető leírásokat tartalmaznak a reklámblokkolók használatának lehetséges következményeiről
    - A látogatókat malvertising veszélyének teszik ki - amikor a blokkolatlan hirdetések kétes forrásból származnak
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

Ezt a szűrőt úgy tervezték, hogy blokkolja a cookie-kra vonatkozó értesítéseket és a cookie-kezelési platformokról (CMP-k) érkező kéréseket. Különféle módszerek alkalmazhatók a cookie-kra vonatkozó értesítésekre és a CMP-kre. A legtöbb esetben elegendő a megfelelő szkriptek egyszerű elrejtése vagy blokkolása. Ha azonban a webhely funkciói és a harmadik féltől származó tartalmak megjelenítése cookie-khoz való hozzájárulást igényel, a következő módszereket alkalmazzuk:

- A szkriptleteket a hozzájárulási kérés megkerülésére használják (gyakorlatilag nem alkalmazható olyan webhelyeken, ahol a döntés meghozataláig korlátozzák a harmadik féltől származó tartalom betöltését)
- Cookie vagy kulcs beállítása a webhely helyi tárolójában oly módon, hogy a szkript úgy tekintse, hogy a felhasználó választott
- A felhasználói művelet szimulálása egy olyan szabály segítségével, amely egy megadott gombra kattint, és a betöltés után 10 másodperccel megszakítja a végrehajtást. Két lehetőség lehetséges:
    - Elutasítás (a funkcionális cookie-k kivételével – a CMP-rendszertől függően) – a preferált opció, mivel kisebb a kockázata a további elemzőeszközök betöltésének
    - Elfogadás – ez a lehetőség utolsó lehetőségként használatos, ha más módszerek sikertelenek. Ebben az esetben a webhelyen további elemzőeszközök használatának ellenőrzése is megtörténik, amelyeket azután az **AdGuard Tracking Protection szűrő**blokkol

**Korlátozások és kivételek**

Egyes esetekben a szabályok hozzáadására vonatkozó döntést a szűrőfejlesztők önállóan hozzák meg; többnyire akkor, amikor a műveletek szimulációja során meghozott választás hatással lenne a webhely működésére (például előfordulhat, hogy az előzmények nem működnek, vagy a felhasználói beállítások nem menthetők egy ilyen webhelyen).

#### AdGuard Popups szűrő

Ez egy szűrő, amely blokkolja a weboldalak különféle előugró ablakait, amelyek nem szükségesek a webhely normál használatához, beleértve, de nem kizárólagosan:

- Push-értesítések fogadására vonatkozó engedélykérések
- Popupok és űrlapok hírekre, promóciókra és különböző eseményekre való feliratkozáshoz, beleértve a harmadik féltől származó csatornákat is (pl. Google News, Telegram)
- Popupok, amelyek a felhasználókat a hirdetésblokkoló kikapcsolására ösztönzik, és sértik a felhasználó magánéletét (a szűrő fejlesztőinek belátása szerint)
- Más típusú felugró ablakok, amelyek bosszanthatják a felhasználókat (a szűrő fejlesztőinek belátása szerint)

**Korlátozások és kivételek**

- A push-értesítések csak azokon az oldalakon vannak letiltva, ahol nem használják őket gyakorlati célokra. Például az e-mail webes kliensekben vagy a munkához használt eszközökben az ilyen értesítések nem lesznek blokkolva
- Néhány felugró ablak, amely nem tartozik a fent leírt kategóriákba, de mégis zavarja a felhasználó felhasználói élményét, szintén blokkolható. Például regisztrációs kérések egy webhelyen vagy felugró ablakok, amelyek bemutatják a webhely funkcióit. A döntést a szűrő fejlesztői hozzák meg
- Nem lehet megkerülni azokat a tartalomhozzáférési intézkedéseket, amelyek a tartalomhoz való hozzáférésért a felhasználótól fizetést kérnek

#### AdGuard Mobile App Banners szűrő

Ez egy szűrő, amely blokkolja azokat a szalaghirdetéseket és előugró ablakokat, amelyek mobilalkalmazások telepítésére ösztönzik a látogatókat.

**Korlátozások és kivételek**

A weboldalak fejlécében vagy menüjében elhelyezett bannerek nem blokkolhatók, ha nem animáltak, és nem foglalják el a felhasználható terület jelentős részét. Ha egy banner a láblécben található, a döntést a szűrőfejlesztők esetről esetre hozzák meg. A láblécben elhelyezett bannerek általában nem tűnnek ki más elemek közül, és nem zavaróak.

#### AdGuard Widgets szűrő

Ez egy szűrő, amely blokkolja a különféle widgeteket, amelyek nem elengedhetetlenek a webhelyek működéséhez vagy a velük való interakcióhoz:

- Widgetek tartalmi ajánlásokhoz - kapcsolódó cikkek, hasonló weboldalak, különböző személyre szabott ajánlások
- Olyan csevegőmodulok, amelyek nincsenek integrálva a tartalommal, és nem képezik az oldal fő tartalmát
- Marketing widgetek:
    - Csevegés az asszisztensekkel vagy robotokkal való kommunikációhoz
    - Widgetek termékajánlatokkal, amelyek megjelennek a felhasználó számára
    - Visszahívási űrlapok
- Egyéb widgetek, amelyeknek nincs külön kategóriájuk, de vizuálisan zavarhatják az oldalt. Például időjárási widgetek, valutaárfolyamok, álláshirdetések és adományok

**Korlátozások és kivételek**

Ez a szűrő nem blokkolja:

- Az oldal tartalmához szorosan kapcsolódó widgetek, mint például a kommentszekciók, élő chat streamek, kivéve a nem hivatalos streamekkel rendelkező oldalakon a moderálatlan chateket, amelyek gyakran tele vannak spamekkel és hasonló tartalmakkal
- Widgetek önreklámozáshoz és helyspecifikus promóciós tevékenységekhez
- Adományozási widgetek, kivéve azokat az eseteket, amikor az oldal jelentős részét foglalják el, és feltűnően kiemelkednek a tartalomból. A blokkolásról a szűrő fejlesztői döntenek

#### AdGuard Kellemetlenségek elleni szűrő

Ezt a szűrőt úgy tervezték, hogy blokkolja a zavaró elemeket, amelyek más szűrőkben nem szerepelnek, valamint különböző finomításokat alkalmazzon. Célja:

- Blokkolja a weboldalak önreklámozását (bármilyen típusú reklám, amely a weboldal tulajdonosának tulajdonában lévő árukat vagy szolgáltatásokat népszerűsíti anélkül, hogy harmadik féltől kereskedelmi ellentételezést kapna), ha azt zavaró elemnek tekintik
- Blokkolja a bosszantó elemeket, amelyek nem szerepelnek más kategóriákban
- Az oldalon végrehajtott műveletek blokkolásának feloldása, például a helyi menü megnyitása, szöveg kijelölése és másolása, ha blokkolva vannak
- Gyorsítsa fel a visszaszámláló időzítőket, amikor fájlokat tölt be weboldalakról, ha az ellenőrzést nem a kiszolgáló vezérli, vagy nem akadályozza
- Különböző szabályok alkalmazása, amelyek hasznosak lehetnek a szűrőfejlesztők számára. Például a webes hibakereső észlelésének blokkolása

**Korlátozások és kivételek**

Ez a szűrő tartalmazhat olyan szabályokat, amelyek nem minden felhasználó számára megfelelőek. Néha ajánlott ezt a szűrőt kikapcsolni. A szűrőhöz való szabály hozzáadásáról a szűrő fejlesztői döntenek szabályonként.

## Közössségi média szűrő

### Szűrők

Közösségi média szűrés:

- Közösségi média szűrés

### Ezeknek a szűrőknek a célja

Ez a szűrő blokkolja a harmadik fél webhelyein található közösségi média widgeteket, például a "Tetszik" és "Megosztás" gombokat, csoport widgeteket, ajánlásokat és hasonló widgeteket.

### Korlátozások és kivételek

A webhely funkcióinak vagy tartalmának részét képező widgetek, például a megjegyzések, beágyazott bejegyzések, szavazások, valamint a közösségi média bejelentkezési widgetek nincsenek letiltva. A weboldal közösségi médiaoldalaira mutató linkek szintén nem blokkolhatók.

## Egyéb szűrők

Ez a csoport olyan szűrőket tartalmaz, amelyek nem elengedhetetlenek a hirdetések blokkolásához.

### Terminológia

**Kontextuális reklám Az** az internetes reklámozás egy olyan fajtája, ahol a hirdetés az internetes oldalak tartalma, kiválasztott közönsége, helye, ideje vagy egyéb kontextusa alapján jelenik meg.

A **keresőhirdetés** a kontextuális hirdetések egyik alosztálya, ahol a hirdetések a látogató keresési lekérdezése alapján jelennek meg.

**A weboldalak önreklámozása** egy weboldal bannereit jelenti, amelyek a weboldal tulajdonosának tulajdonában lévő árukat és szolgáltatásokat népszerűsítik, és amelyekért nem kapnak ellentételezést harmadik felektől.

Az ilyen típusú hirdetésekkel kapcsolatos további részletekért olvassa el a [keresőhirdetésekről szóló cikket](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Szűrők

- Feloldó szűrő a keresési hirdetésekhez és az önpromóciókhoz
- AdGuard DNS-szűrő
- AdGuard Kísérleti szűrő

### Ezeknek a szűrőknek a célja

#### Feloldó szűrő a keresési hirdetésekhez és az önpromóciókhoz

Ez a szűrő feloldja a blokkolást:

- Kontextus szerinti hirdetés a keresési eredmények között keresőmotorok (például Google, Bing, Yandex, DuckDuckGo) használatakor
- Weboldalak önreklámozása

**Korlátozások és kivételek**

- A keresőreklámok blokkolása csak akkor oldódik fel, ha megfelelnek a felhasználó keresési lekérdezésének, mivel kontextusfüggőek. Ellenkező esetben a hirdetés blokkolva marad
- Az önreklámozás csak akkor oldható fel, ha megfelel a szűrési szabályzatnak. Az unblocking kérése elutasítható lehet a szűrőfejlesztők által
- Más hirdetések blokkolását nem oldjuk fel

#### AdGuard DNS-szűrő

Ezt a szűrőt az AdGuard DNS használja. Nem helyettesíti a reklámblokkoló szűrőket.

**Korlátozások és kivételek**

Ugyanaz, mint a hirdetésblokkoló szűrők esetében.

#### AdGuard Kísérleti szűrő

Ez a szűrő olyan szabályok tesztelésére és hibakeresésére szolgál, amelyek potenciálisan megzavarhatják a webhelyek működését. A szabályokat a szűrőfejlesztők adják hozzá, amikor egy adott megoldás tesztelésére van szükség. Mivel a szűrőt hibakeresési célokra tervezték, korlátozásai minimálisak.

**Korlátozások és kivételek**

- A szabályok nem sérthetik meg szándékosan a weboldalak funkcionalitását
- A szabályok nem oldhatják fel a reklámok blokkolását, és nem sérthetik meg más módon a Szabályzatot
