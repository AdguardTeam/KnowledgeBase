---
title: AdGuard-filterpolitik
sidebar_position: 6
---

:::note Ansvarsfraskrivelse

Læs venligst denne filterpolitik omhyggeligt inden aktivering af filtre.

Brug af AdGuard Ad Blocker, AdGuard DNS og deres filtre kan påvirke, hvordan tredjepartswebsteder og -tjenester fungerer. Brugeren er ansvarlig for at gennemgå samt følge politikkerne og betingelserne for alle websteder/tjeneste, som benyttes.

Inden aktivering af filtre leveret af tredjeparter, accepterer brugeren at gennemgå deres gældende vilkår og træffe en informeret beslutning om brugen af dem. AdGuard er ikke ansvarlig for, hvordan tredjepartsfiltre fungerer, eller hvad deres vilkår indeholder, og deres tilstedeværelse i AdGuard-produkter er ikke en anbefaling til brug af dem.

:::

Hos AdGuard har vi længe fulgt visse principper ved oprettelsen af vores filtre, som sammen med filterbeskrivelser er skitseret nedenfor som en del af vores filtreringspolitik.

## Fælles kriterier

Disse kriterier anvendes ligeligt på reglerne for alle filtre.

- Regler for et specifikt websted tilføjes kun, hvis der er tilstrækkelig trafik. Trafikken bestemmes af offentlige statistikker (hvis tilgængelige) eller indirekte indikatorer, såsom antallet af abonnenter på sociale netværk. En websteds trafik anses for tilstrækkelig, når det har 100.000 månedlige besøgende. Vi vil overveje at tilføje en regel for et websted, der ikke er så populært, men den endelige beslutning er op til filterudviklerne. Websteder med lav trafik bør stadig tjekkes for tredjepartsanalyse- og reklamenetværk
- Beslutningen om indholdsfarme (websteder, som producerer store mængder indhold, primært rettet mod at opnå høj synlighed i søgeresultater og generere reklameindtægter) træffes af filterudviklere afhængigt af kvaliteten af indholdet

Kvalitetskrav til filtreringsregler:

- Regler bør ikke påvirke webstederne negativt ift. ydeevne
- Afblokeringsregler skal være så specifikke som muligt for at undgå afblokering af noget unødvendigt
- JavaScript-regler bør bruges så lidt som muligt, og kun hvis det er umuligt at blokere annoncer uden dem

## Adblockerfiltre

### Terminologi

En **Adblocker** er et software- eller hardwareværktøj designet til at filtrere, skjule eller blokere annoncer og andre elementer på websider. Adblockere er skabt til at forbedre brugeroplevelsen, reducere sideindlæsningstider, reducere internettrafikforbrug, blokere annoncer og forbedre fortroligheden, mens websteder gennemses og applikationer bruges, samt til at blokerer irriterende elementer.

Et **filter** (eller en **filterliste**) er et sæt filtreringsregler designet til at filtrere indhold og blokere forskellige typer reklamer og andre indholdstyper vha. adblockere. Disse filtre fungerer normalt på niveau med webbrowseren, programmerne eller DNS-serveren.

**Anti-adblock** er en teknologi brugt af websteder eller applikationer mhp. at registrere adblocking og reagere herpå på forskellige måder: Sporing, genindsættelse af annoncer, tilskyndelse til at deaktivere adblocking (såkaldte "adblock walls"). Forskellige typer af Anti-adblocks findes:

- Anti-adblock, der blokerer webstedsindhold uden at tilbyde et alternativ: For fortsat brug af webstedet, skal brugeren deaktivere adblocking under besøget
- "Anti-adblock wall" med alternative muligheder, såsom køb af abonnement for fortsat brug af adblockeren
- Informationsmeddelelser, som ikke forpligter til handling: Brugere anmodes om at deaktivere adblocking, men disse meddelelser kan lukkes, hvorefter brugerne kan fortsætte med at bruge webstedet uden restriktioner
- Implementering af alternativ annoncering som reaktion på brug af adblocking: Websteder introducerer alternativ annoncering, når adblockere detekteres
- Paywall: En metode til indtægtsgenerering på indhold, hvor indholdet er delvist eller helt skjult for brugerne, med en meddelelse, der beder dem købe et abonnement for at få adgang

### Filtre

AdGuard-adblockingfiltre omfatter:

- AdGuard Basisfilter
- AdGuard Mobilannoncefilter
- Regionale filtre opdelt efter sprogprincip — fransk, hollandsk, japansk, kinesisk, russisk, spansk/portugisisk, tysk, tyrkisk og ukrainsk

### Formålet med disse filtre

- **Basisfilter** er designet til at blokere annoncer på engelsksprogede websteder og dem, hvor der ikke er et separat filter. Den indeholder også generelle filtreringsregler gældende for alle websteder uanset sprog
- **Mobilannoncefilter** blokerer annoncer på mobilversioner af websteder og i mobil-apps. Der sker ingen segmentering baseret på sprog
- **Regionale filtre** følger samme politik som **Basisfilter**, dog begrænset til websteder på bestemte sprog

Målet med adblockingfiltre er at blokere alle typer reklame på websteder, apps og visse enheder, som kan indlæse annoncer fra internet:

- Bannere — reklame vist som billeder på forskellige dele af websider
- Teasere — tekst- eller grafikannoncer, ofte animerede, designet til at fascinere besøgende (sensationelle overskrifter, opmærksomhedsfangende billeder) og få dem til at klikke på banneret (clickbait)
- Tekstannoncer — reklame i form af tekst, herunder links
- Viduesannoncer — reklame, der pludselig vises over aktuelt indhold i form af vinduer, som kræver interaktion
- Popunders — reklame, der åbner i et separat vindue under det aktuelle, når der klikkes hvor som helst på siden
- Omdirigeringsreklame — mekanismer, som automatisk omdirigerer brugere til andet websted efter et klik
- Annoncer forklædt som webstedsindhold, som, når der klikkes, åbner sider med promoverede produkter eller ikke-relateret indhold
- Videoannoncer — reklamevideoer indlejret i videoindhold eller i separate annonceelementer på websteder og apps
- Interaktive annoncer — annoncer brugere kan interagere med (f.eks. spil og undersøgelser, hvorefter det annoncerede element åbner)
- Mellemliggende annoncer — fuldskærmsannoncer på mobilenheder, som dækker appens eller webbrowserens brugerflade
- Annoncerester, som optager større områder eller skiller sig ud i baggrunden og tiltrækker besøgendes opmærksomhed (undtagen de knapt synlige eller umærkelige)
- Anti-adblock reklame — alternativ reklame vist på webstedet, når den hovedobjektet blokeres
- Lokkemadelementer brugt af flere kendte adblockdetekteringsscripts til at detektere en adblocker-tilstedeværelse til forskellige mål, herunder ændring af den måde, annoncer vises på, fingerprinting mv.
- Webstedets egen reklame såfremt blokeret af generelle filtreringsregler (se *Begrænsninger og undtagelser*)
- Anti-adblock scripts, som forhindrer webstedsbrug (se *Begrænsninger og undtagelser*)
- Reklame injiceret af malware, hvis detaljerede oplysninger om dens indlæsningsmetode eller trin til reproduktion er angivet
- Uønsket mining — scripts, som miner kryptovaluta uden brugersamtykke

### Begrænsninger og undtagelser

- Webstedets egen reklame bør ikke bevidst blokeres. Den bør dog ikke afblokeres, hvis blokeringen skyldes generelle filtreringsregler
- Indholdsadgangsforanstaltninger, såsom betalingsmure, blokeres ikke af adblockingfiltre. De kan dog blive blokeret af sporingsbeskyttelsefiltre, hvis deres operation resulterer i en brugerfortrolighedsovertrædelse
- Anti-adblock mure blokeres i flg. tilfælde:
    - Ved aggressiv insisteren på at deaktivere eller fjerne adblockeren eller effektiv forhindring af webstedsbrugen
    - Ved indehold af forkerte og vildledende beskrivelser af mulige konsekvenser af adblockerbrug
    - Ved at sætte besøgende i fare for malvertising — når ublokerede reklame stammer fra tvivlsomme kilder
    - De krænker eller påvirker brugerfortroligheden negativt
- Vi blokerer ikke adblocker-detekteringsmeddelelser, som opfylder mindst ét af flg. kriterier:
    - De tillader brugen af webstedet og overlejrer ikke hovedparten af indholdet
    - De giver et alternativ til deaktivering af en adbloker, såfremt dette alternativ ikke bringer brugernes fortrolighed eller sikkerhed i fare
    - De lader brugeren fortsætte til webstedsindholdet eller tilbyder en mulig værdiudveksling, der ikke bringer brugerens fortrolighed eller sikkerhed i fare
    - Visse ældre regler kan dog fortsat blokere meddelelser, som opfylder et eller flere af disse kriterier. Hvis de identificeres, vil sådanne regler blive håndteret i overensstemmelse med denne politik
- Mining pools blokeres ikke, hvis de er offentlige og ikke udelukkende bruges til ondsindede formål

## Sporingsbeskyttelsesfiltre

### Terminologi

**Sporing** — proces, der overvåger og indsamler data om brugere og deres interaktioner med websteder og applikationer til markedsføringsformål, samt for at opnå telemetri om funktionen af websteder eller applikationer med det formål at analysere deres drift. Denne proces omfatter sporing af besøgte sider, tidsforbrug, interaktion med webstedselementer (f.eks. klik, formularindsendelser) og andre målingsdata. Det giver websteds- og applikationsejere mulighed for bedre at forstå brugeradfærd, optimere funktionalitet og tilpasse marketingstrategier. Sporing bruges også til at monitorere ydeevne, brugsmønstre samt problemidentifikation, hvilket giver udviklere de nødvendige data til at forbedre stabiliteten og kvaliteten af webstedet eller applikationen. Selvom de indhentede data ikke kan afsløre en persons identitet, anses sådanne handlinger stadig for sporing.

**Tracker** — software, brugt på et websted eller i en applikation, designet til indsamling af oplysninger om deres drift og besøgendes handlinger. Den sporer brugerinteraktion med webstedet eller applikationen, registrerer data om sidevisninger, tidsforbrug, klik, formularindsendelser og andre begivenheder. Dens formål er at give websteds- og applikationsejere et værktøj til at analysere brugeradfærd, forbedre brugeroplevelsen samt optimere indhold og reklame.

**URL-sporingsparameter** — del af webadressen føjet til links af analysesystemer eller til stede i visse links på websider. Når der foretages en forespørgsel, kan denne URL-sporingsparameter behandles af en analysesystem- eller websted-backend, der så udtrækker information herfra. URL-sporingsparametre kan f.eks. overføre oplysninger om klik eller annoncekampagner. URL-sporingsparametre kan også bruges af svindelbeskyttelses- eller botdetekteringssystemer.

**Cookies** — filer, som websteder sender til, og gemmer på, enheder. Disse filer indeholder forskellige oplysninger — både nødvendige for, at webstedet fungerer på enheden samt til analyseformål — unikke identifikatorer, som bruges til at spore besøgendes aktivitet på webstedet, reklameparametre mv.

### Filtre

AdGuard-sporingsbeskyttelsesfiltre omfatter:

- AdGuard Sporingsbeskyttelsesfilter
- AdGuard Mail Sporingsbeskyttelsesfilter
- AdGuard URL-sporingsfilter

### Formålet med disse filtre

**Sporingsbeskyttelsesfilter** er designet til at blokere trackere, som indsamler brugeres personlige data samt til at forbedre brugernes fortrolighed.

Hvad der blokeres:

- Analysesystemers scripts
- Websteders og applikationers egne sporingsscripts
- Maskerede CNAME-trackere
- Sporingscookies
- Sporingspixels
- Webbrowseres sporings-API'er
- Detektering af adblockeren til sporingsformål
- Privacy Sandbox-funktionalitet i Google Chrome og dens gafler brugt til sporing (Google Topics API, Protected Audience API)

**URL-sporingsfilteret** er designet til at fjerne sporingsparametre fra webadresser

Filteret **Mail Sporingsbeskyttelse** blokerer sporingspixels indlejret i e-mails for at forhindre afsendere i at monitorere, hvornår beskederne åbnes.

### Begrænsninger og undtagelser

Sporingsbeskyttelsesfiltre bør ikke blokere en tracker, såfremt blokering vil hindre webstedets korrekte funktion:

- Anti-bots og svindelbeskyttelse, hvis det forstyrrer brugen af webstedet. F.eks. forårsager blokering med PerimeterX eller hCaptcha problemer, når webstedet forsøger at bekræfte en besøgende med en captcha
- Fejlsporingssystemer, såsom Sentry eller Bugsnag, blokeres ikke

## Irritationsfiltre

Irritationsfiltre er designet til at forbedre websteders anvendelighed ved på sider at blokere elementer, som ikke er reklamer, men blot distraherer og forstyrrer webstedsinteraktion eller indholdsbrug — såsom forskellige interaktionsvinduer og -formularer, meddelelser og anmodninger om cookiesamtykke, bannere til mobil-apps og forskellige widgets.

### Terminologi

**Cookie-meddelelse** — en formular, der beskriver typen og brugen af cookies på et websted. En cookie-meddelelse vises, når en bruger besøger et websted og informerer denne om, at webstedet bruger cookies eller andre sporingsteknologier til indsamling og brug af personlige oplysninger, samt forklarer, hvorfor og med hvem, de indsamlede oplysninger deles.

**CMP (Consent Management Platform)** — software, der hjælper websteder med at overholde reglerne for brug af cookies. CMP'er begrænser brugen af cookies, indtil brugerens samtykke er opnået, hvilket lader brugeren acceptere visse cookies samt håndtere fortrolighedsindstillinger.

**Widget** — et brugerfladeelement, der udvider funktionaliteten af et websted. Web-widgets er integreret i websider og kan indeholde interaktive elementer, såsom knapper, formularer eller bannere. De kan give brugere adgang til bestemte tjenester eller indhold uden at skulle navigere til andre sider.

**Popup** — et vindue, der vises over den aktuelle webside. Det er beregnet til at vise yderligere information, annoncer, meddelelser eller dataindtastningsformularer. Pop op-vinduer blokerer normalt sidens hovedindhold og kræver, at brugeren lukker dem, hvilket kan være irriterende.

### Filtre

For bedre tilpasning er irritationsfiltre opdelt jf. efter deres formål:

- AdGuard Cookie Notices-filter
- AdGuard Pop op-filter
- AdGuard Mobil-app bannerfilter
- AdGuard Widget-filter
- AdGuard Andre irritationsfilter
- AdGuard Irritationsfilter — et kombineret filter indeholdende alle 5 specialiserede irritationsfiltre

### Formålet med disse filtre

#### AdGuard Cookie Notices-filter

Dette filter er designet til at blokere både cookiemeddelelser og anmodninger fra cookiehåndteringsplatforme (CMP'er). Afhængigt af et websteds implementering af sin samtykkemekanisme, kan forskellige metoder anvendes.

I de fleste tilfælde er det tilstrækkeligt at skjule eller blokere de korresponderende scripts. Når et websted imidlertid kræver en cookie-beslutning, for at bestemte funktioner eller tredjepartsindhold kan fungere, håndterer filteret automatisk forespørgslen via alternative metoder.

Når det er muligt, afvises uvæsentlige cookies som standard. Er dette ikke teknisk muligt, og samtykke skal tildeles, for at webstedet kan fungere korrekt, gennemgås webstedet desuden for analyserværktøjer og sporingsteknologier, som derefter blokeres af **filteret i AdGuard Sporingsbeskyttelse**.

**Begrænsninger og undtagelser**

I nogle tilfælde træffes beslutningen om at tilføje regler uafhængigt af filterudviklere; fortrinsvis, når det foretagne valg ved handlingssimulering ville påvirke webstedsfunktionaliteten (f.eks. at historikken måske ikke fungerer eller brugerindstillingerne måske ikke gemmes på et sådant websted).

#### AdGuard Pop op-filter

Dette er et filter, der på websider blokerer forskellige pop op-vinduer, som er unødvendige for normal brug af webstedet, inkl. men ikke begrænset til:

- Anmodninger om tilladelse til at modtage push-beskeder
- Pop op-vinduer og formularer til at abonnere på nyheder, kampagner og forskellige begivenheder, herunder tredjepartskanaler til at modtage dem (såsom Google News, Telegram)
- Pop op-vinduer, som opfordrer brugere til at deaktivere adblockere og krænke brugernes fortrolighed (efter filterudviklernes skøn)
- Andre typer pop op-vinduer, som kan irritere brugere (efter filterudvikleres skøn)

**Begrænsninger og undtagelser**

- Push-meddelelser blokeres kun på websteder, hvor de ikke bruges til praktiske formål. I f.eks. e-mailwebklienter eller værktøjer brugt til arbejdsformål blokeres sådanne meddelelser ikke
- Visse pop op-vinduer, som ikke falder ind under ovenfor beskrevne kategorier, men som stadig forstyrrer brugerens oplevelse, kan også blive blokeret. F.eks. registreringsprompter på et websted eller pop op-vinduer, som præsenterer webstedets funktioner. Beslutningen træffes af filterudviklere
- Indholdsadgangsforanstaltninger, som beder brugeren betale for at få adgang til indholdet, må ikke omgås

#### AdGuard Mobil-app bannerfilter

Dette er et filter, der blokerer bannere og pop op-vinduer, som opfordrer besøgende til at installere mobil-apps.

**Begrænsninger og undtagelser**

Bannere placeret i webstedsoverskrifter eller -menuer blokeres ikke, hvis de ikke er animerede og ikke optager en væsentlig del af den brugbare plads. Er et banner placeret i sidefoden, træffes beslutningen af filterudviklere fra gang til gang. Normalt skiller bannere i sidefoden sig ikke ud fra andre elementer og er ikke distraherende.

#### AdGuard Widget-filter

Dette er et filter, der blokerer forskellige widgets, som ikke er afgørende for hverken webstedsfunktion eller interaktion:

- Widgets til indholdsanbefalinger — relaterede artikler, lign. websteder, forskellige personlige anbefalinger
- Chat-widgets, som ikke er integreret med indholdet og ikke er hovedindholdet på siden
- Markedsførings-widgets:
    - Chats til kommunikation med assistenter eller bots
    - Widgets med produktanbefalinger vist for brugeren
    - Tilbagekaldsformularer
- Andre widgets uden nogen separat kategori, men som visuelt kan gøre siden rodet. F.eks. vejr-widgets, valutakurser, jobannoncer og donationer

**Begrænsninger og undtagelser**

Dette filter blokerer ikke:

- Widgets tæt relateret til sideindholdet, såsom kommentarsektioner, live chat-streams, undtagen umodererede chats på websteder med uofficielle streams, som ofte er fyldt med spam og lign. indhold
- Widgets til selvpromovering og webstedspecifikke, salgsfremmende aktiviteter
- Donations-widgets, undtagen de tilfælde, hvor de optager en betydelig del af siden og skiller sig mærkbart ud fra det øvrige indhold. Blokeringsbeslutningen træffes af filterudviklere

#### AdGuard Andre irritationsfilter

Dette filter er designet til at blokere irriterende elementer ikke inkluderet i andre filtre, samt til at anvende forskellige tilpasninger. Dets formål er at:

- Blokere webstedsselvpromovering (enhver form for reklame, der promoverer varer/tjenester ejet af webstedsejeren, uden at modtage kommerciel kompensation fra en tredjepart), hvis det anses for at være et irriterende element
- Blokere irriterende elementer ikke inkluderet i andre kategorier
- Afblokere handlinger på siden, såsom at åbne kontekstmenuen, vælge og kopiere tekst, hvis de er blokeret
- Accelerere nedtællingstimere ved indlæsning af filer fra websteder, hvis tjekket ikke styres af serveren eller ikke hindres
- Anvende forskellige regler, som kan være nyttige for filterudviklere. F.eks. blokering af webfejlretningsdetektering

**Begrænsninger og undtagelser**

Dette filter kan indeholde regler, som ikke er egnede for alle brugere. I visse tilfælde anbefales det at deaktivere dette filter. Beslutninger om at føje regler til dette filter træffes af filterudviklere på en regel-for-regel basis.

## Sociale medier-filtre

### Filtre

AdGuard Social Media-filtre omfatter:

- AdGuard Social Media-filter

### Formålet med disse filtre

Dette filter blokerer sociale medier-widgets, såsom "Like"- og "Del"-knapper, gruppe- og anbefalings-widgets o.lign., på tredjepartswebsteder.

### Begrænsninger og undtagelser

Widgets, som er en del af webstedsfunktionaliteten eller -indholdetet, såsom kommentarer, indlejrede indlæg, afstemninger, samt login-widgets til sociale medier, blokeres ikke. Links til webstedets sociale medier-sider blokeres heller ikke.

## Andre filtre

Denne gruppe indeholder filtre, som ikke er essentielle for at blokere annoncer.

### Terminologi

**Kontekstuel reklame** er en type internetreklame, hvor reklamen vises baseret på indhold, udvalgt målgruppe, sted, tidspunkt eller anden kontekst på internetsider.

**Søgereklame** er en underklasse af kontekstuel reklame, hvor reklamer vises baseret på den besøgendes søgeforespørgsel.

**Selvpromovering af websteder** henviser til bannere på et websted, som promoverer varer og tjenester ejet af webstedsejeren, og som der ikke modtages kompensation for fra tredjeparter.

Se [artiklen om søgeannoncer](https://adguard.com/kb/general/ad-filtering/search-ads/) for flere detaljer om disse annoncetyper.

### Filtre

- Filter, der afblokerer søgeannoncer og selvpromovering
- AdGuard DNS-filter
- AdGuard Experimental-filter

### Formålet med disse filtre

#### Filter, der afblokerer søgeannoncer og selvpromovering

Dette filter afblokerer:

- Kontekstuel annoncering i søgeresultater ved brug af søgemaskiner (såsom Google, Bing, Yandex, DuckDuckGo)
- Webstedsselvpromovering

**Begrænsninger og undtagelser**

- Søgereklame afblokeres kun, hvis den svarer til brugerens søgeforespørgsel, da den er kontekstuel. Ellers forbliver reklamen blokeret
- Selvpromovering afblokeres kun, hvis den overholder filterpolitikken. En anmodning om afblokering kan afvises af filterudviklere
- Enhver anden reklame afblokeres ikke

#### AdGuard DNS-filter

Dette filter bruges i AdGuard DNS. Det er ikke en erstatning for adblockingfiltre.

**Begrænsninger og undtagelser**

Samme som for adblockingfiltre.

#### AdGuard Experimental-filter

Dette filter er beregnet til aftestning af og fejlfinding i regler, som potentielt kan ødelægge webstedsfunktionalitet. Regler tilføjes af filterudviklere ved behov for aftestning af en bestemt løsning. Da filteret er designet til fejlsøgningsformål, er dets begrænsninger minimale.

**Begrænsninger og undtagelser**

- Regler bør ikke tilsigtet bryde webstedsfunktionaliteten
- Regler bør ikke afblokerer reklamer eller på anden måde overtræde politikken

## Sådan bestrides en blokeringsregel

AdGuard-filterlister vedligeholdes ikke kun af AdGuard-teamet, men også af fællesskabsbidragsydere. Anses en blokeringsregel for at overtræde de principper, som er beskrevet i denne filterpolitik, kan dem bestrides ved at oprette en problematik på GitHub.

Før indsendelse af en indsigelse, sørg for at have gennemlæst denne politik grundigt. Ved gennemgant af anmeldelsen vil filtervedligeholdere vurdere, om reglen overholder de ovenfor beskrevne kriterier, så din forklaring bør henvise til denne politik, når det er muligt.

### Sådan indsendes en indsigelse

En indsigelse kan indsendes ved brug af [vores anmeldelsesværktøj](https://reports.adguard.com/new_issue.html). Se trin-for-trin-vejledningen i vores [dedikerede artikel](https://adguard.com/kb/guides/report-website/).

Alternativt kan anmeldelse ske via GitHub:

1. Gå til [AdGuard Filters GitHub-repo](https://github.com/AdguardTeam/AdguardFilters/issues) og opret en ny problematik.
2. Vælg skabelonen **Anmeld et problem med AdGuard**.
3. Udfyld skabelonen med så mange opkysninger som muligt.

Anmeldelsen bør indeholde:

- URL til det berørte websted.
- En klar beskrivelse af, hvad der blokeres.
- Blokeringsreglen, såfremt den relevante regel er kendt.
- Trin til genskabelse af problemet.
- Skærmfotos eller anden dokumentation, der, om muligt, illustrerer problemet.
- En detaljeret forklaring af, **hvorfor reglen ikke anses for at overholde denne filterpolitik**. Henvis, når muligt, til det relevante afsnit eller princip i politikken, som reglen angiveligt overtræder.

### Hvad kendetegner en god indsigelse?

Blot at angive uenighed med en blokeringsregel, er normalt ikke nok. For at hjælpe vedligeholdere med at vurdere anmeldelsen, forklar hvorfor reglen er i konflikt med blokeringspolitikken, fremfor hvorfor man personligt ville foretrække en anden adfærd.

Menes f.eks. at en regel blokerer indhold, som ikke bør blokeres under denne politik, beskriv da, hvilket politikkriterium der gælder, og hvordan reglen ikke opfylder det. Jo mere specifik og velunderbygget anmeldelsen er, desto nemmere vil det være for vedligeholdere at gennemgå anmodningen og afgøre, hvorvidt reglen bør ændres.
