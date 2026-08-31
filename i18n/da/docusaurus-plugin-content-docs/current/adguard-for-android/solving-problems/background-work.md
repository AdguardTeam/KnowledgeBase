---
title: Sådan beskyttes AdGuard mod at blive deaktiveret af systemet
sidebar_position: 8
---

:::info

Denne artikel dækker AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

I nogle tilfælde forbliver apps ikke i baggrunden ("levende" eller i dvaletilstand) grundet Android OS-optimeringsfunktionen eller den såkaldte "strømsparetilstand" — denne funktion kan standse baggrunds-apps. Det kan være ubelejligt at genstarte dem, hver gang de er blevet lukket. For at undgå lukning af baggrunds-apps, så følg de trin, vi har beskrevet separat for hver producent (version) af Android OS. Vejledningerne til de forskellige producenter er dog for det meste er ret ens.

## Asus

Oplysninger om Asus-enheder er stadig langt fra udtømmende, så der kan være flere problemer end anført her. Vi vil opdatere denne del af artiklen, når vi ved mere.

Hovedkilden til potentielle problemer med baggrundsoperation på Asus-enheder er forbundet med optimerings-appen, Power Master. Den er præinstalleret og har ret aggressive standardindstillinger, f.eks. at blokere apps i at starte og at standse baggrundsopgaver, når skærmen slukker. For at sikre, at app-baggrundsbehandling fungerer, skal flg. opsættes:

1. Gå til **Mobilhåndtering** → **PowerMaster** → **Indstillinger** (eller **Batterisparevalg**) → Fjern markeringen **Ryd op under suspenderingstilstand**

1. Gå til **Mobilhåndtering** → **PowerMaster** → **Indstillinger** (eller **Batterysparevalg**) → Fjern markeringen i **Autoafvis apps i at autostarte**

Alternativt, i stedet for helt at afmarkerer **Autoafvis apps i at autostarte**, gå til **Indstillinger** → **Batterisparevalg** → **Autostarthåndttering** → **AdGuard** og afmarkér den.

## Xiaomi

Enheder fra Xiaomi (og især MIUI) er blandt de mest besværlige, når det gælder baggrundsdrift. De er kendt for at begrænse baggrundsprocesser og har i tilgift ikke-standardiserede tilladelser med mangel på ordentlig dokumentation. Nogle gange fungerer apps bare ikke korrekt på Xiaomi-mobiler, hvilket der ikke kan gøres meget ved. Nedenfor er nogle handlinger, som kan forsøges ved problemer med AdGuards baggrundsdrift på forskellige Xiaomi-enheder.

### MIUI 13+ og HyperOS

Der er, afhængigt af MIUI- og HyperOS-versionerne, to måder at ændre batterioptimeringsindstillingerne på mobilen og udføre adblocking mere effektivt.

Valgmulighed 1

1. Gå til **Indstillinger** → **Apps** → **Tilladelser** → **Baggrundsautostart** og tillad AdGuard at køre i baggrunden

1. Returnér til **Indstillinger** → **Apps** → **Håndtér apps** → **AdGuard** og afmarkér **Pausér app, hvis ubrugt**

1. Gå til **Batterisparer** og tryk på **Ingen begrænsninger**

Valgmulighed 2

1. Gå til **Indstillinger** → **Apps** → **Håndtér apps** → **AdGuard** og slå **Autostart** til

1. Gå til **Batterisparer** og tryk på **Ingen begrænsninger**

Udført! AdGuard er nu sat op til at fungere i baggrunden.

### MIUI 12.0.8

Gør flg. for at lade AdGuard-appen operere uhindret i baggrunden:

I **Indstillinger** → **Apps** → **Håndtér apps** → rul ned og find **AdGuard** og sæt **Autostart** til "Til".

![Xiaomi-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Rul ned til **Batterisparer**, tryk på den og sæt den til "Ingen restriktioner”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

Under **Øvrige tilladelser**, sæt alle tilgængelige tilladelser til "Til”

Kør **Sikkerheds-appen**.

Tryk på **Tandhjul**-ikonet øverste til højre på skærmen.

![MIUI-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tryk på **Boost hastighed** i Funktionsindstillinger.

![MIUI-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Klik på **Lås apps**.

![MIUI-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Sæt på skærmen **Lås apps** kontakten ud for AdGuard-appen til Til.

![MIUI-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Det er det hele! AdGuard-appen er nu fastgjort.

### MIUI 12

Gå til **Indstillinger** → **Apps** → **Håndtér apps** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Sæt Autostart til "Til”
- Sæt alle tilgængelige tilladelser i Øvrige tilladelser til "Til”
- Sæt Batterisparer til **Ingen restriktioner**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Start nu den aktive app-håndtering ved at stryge op fra bunden af skærmen, og kig efter AdGuard-appen.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tryk og hold på den, indtil en menu vises. Vælg et låseikon.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Låseikonet bør vises over app-vinduet.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

For at lade appen køre i baggrunden, opsæt dens indstillinger således:

- Sæt Autostart til "Til”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Indstillinger** → **Batteri og ydeevne** → slå funktionen **Batterisparer** fra

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Then open **App battery saver** settings → **AdGuard** → **No restrictions**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Alle modeller

Flg. trin bør udføres på alle Xiaomi-enheder, som vedvarende standser AdGuard-appen:

#### Strømstyring

Aktivér:

- **Indstillinger** → **Avancerede indstillinger** → **Batterihåndtering** → sæt **Strømskema** til **Ydelse**
- **Enhedsindstillinger** → **Avancerede indstillinger** → **Batterihåndtering** → **Beskyttede apps** – AdGuard skal være **Beskyttet**
- **Enhedsindstillinger** → **Apps** → **AdGuard** → **Batteri** → **Strømkrævende prompt** og **Fortsæt med at køre efter skærmen slukkker**
- **Indstillinger** → **Yderligere indstillinger** → **Batteri og Ydelse** → **Håndtér apps' strømforbrug**, og her:

1. Slå Strømsparetilstande "Fra”
1. Vælg flg. muligheder: **Spar strøm i baggrunden** → **Vælg apps** → **AdGuard** → **Baggrundsindstillinger** → **Ingen restriktioner**

#### App-batterisparer

Sæt **Sikkerhed** → **Batteri** → **App-batterisparer** → **AdGuard** til **Ingen restriktion**

#### App-fastgørelse

For at opsætte AdGuards baggrundsdrift på Xiaomi-enheder, vær opmærksom på Batteri og Tilladelser.

- Tryk på knappen **Seneste opgaver** og stryg AdGuard nedad for at gøre mulighederne *synlige* (som vist på skærmfotoet):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tryk på **lås**-ikonet. Dette vil forhindre Xiaomi i at lukke AdGuard automatisk. Det bør se således ud:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Gå til **Batteri**

- Vælg **strømsparer**-appen

- Find og vælg **AdGuard**

- Opsæt flg. **Baggrundsindstillinger**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Gå til **Tilladelser**

- Vælg **Autostart**

- Sørg for, at autostartfunktionen er aktiveret for AdGuard:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

På mange Samsung-enheder vil apps, som er ubrugte i 3 dage, ikke kunne startes i baggrunden. For at forhindre dette, bør valgmulighederne **Adaptivt batteri** og **Sæt apps til at sove** deaktiveres, hvor det er muligt. Bemærk, at en app- eller OS-opdatering ofte returneres disse indstillinger til deres standardværdier og skal slås fra igen.

### Android 11+

I Android 11 forhindrer Samsung som standard apps (inkl. AdGuard) i at operere i baggrunden, medmindre de undtages fra batterioptimeringer. For at sikre, at AdGuard ikke standses i baggrunden:

1. Lås AdGuard i **Seneste apps**: Åbn **Seneste apps**, find AdGuard og tryk og hold på AdGuard app-ikonet.

1. Sådan vil AdGuard kunne fungere korrekt:

    Gå til **Indstillinger** → **Apps** → **AdGuard** → **Batteri** → **Optimér strømforbrug**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Vælg **Alle** i rullemenuen. Find dernæst AdGuard på listen og sæt dens tilstand til **Optimér ikke** (kan på visse modeller være en kontakt, der skal slås fra).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    På nogle enheder kan den relevante indstilling have et andet navn og/eller placering. Blandt de mulige stier er **Indstillinger** → **Apps** → (⁝)-menu → **Særlig adgang** → **Optimere batteribrug**. Find AdGuard på listen og afmarkér den.

1. Deaktivere automatisk optimering:

    Åbn **Batteri** → (⁝)-menu → **Automatisering** og slå her alle indstillingerne fra.

    Igen, den præcise sti kan variere. F.eks. skal man på visse enheder gå til mobilens **Indstillinger** → **Enhedspleje** → (⁝)-menu → **Avanceret** og deaktivere **Auto-optimering** og **Optimere indstillinger**.

1. Har mobilen denne indstilling, deaktivér **Adaptivt batteri**:

    Åbn mobilens **Indstillinger** → **Batteri** → **Flere batteriindstillinger** og slå **Adaptivt batteri** fra

1. Deaktivér **Sovende apps** (det præcise navn på denne indstilling og stien hertil kan variere afhængigt af enhed):

    Åbn mobilens **Indstillinger** → **Batteri** → **Baggrundsbrugsgrænser** og slå **Sæt ubrugte apps i slumretilstand** fra

Opleves fortsat problemer, prøv disse ekstra batterioptimeringsjusteringer:

 1. Gå til **Indstillinger** → **Apps** → **AdGuard** → **Batteri** og slå **Optimeret** til:

    ![Optimerede indstillinger *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Gå til **Indstillinger** → **Batteri** → **Baggrundsbrugsgrænser** → **Auto-slumre aldrig apps**:

    ![Auto-slumre aldrig apps *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Vælg AdGuard fra apps-listen. Ses den ikke, gå tilbage til trin 1 og sikre, at batteritilstanden *Optimeret* er slået til:

    ![Vælg appen *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 og 10

- Gå til **Enhedsindstillinger** → **Enhedspleje**, tryk på punktet **Batteri**, gå til (⁝)**-3-priksmenuen** → **indstillinger** og afmarkér **Slumre ubrugte apps** samt **Autodeaktivere ubrugte apps**.

- I **Enhedsindstillinger** → **Apps** → **Slumre som Android** → **Batteri**, tjek, at **Baggrundsrestriktioner** er sat til **App kan bruge batteri i baggrunden** for AdGuard.

- Fjern AdGuard fra **Slumrende apps**:

    1. Gå til **Enhedsindstillinger** → **Enhedspleje**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tryk på **Batteri**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tryk på **3-priksmenuen** → **Indstillinger**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tryk på **Slumrende apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Væk AdGuard via papirkurvsikonet:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Ældre Samsung-enheder

På ældre Samsung-enheder er der ikke noget stort behov for at opsætte baggrundsdrift, men opleves det, at AdGuard-appen lukkes eller forsvinder fra de seneste opgaver efter et stykke tid, så gør flg.:

- Tryk på knappen **Seneste opgaver** og dernæst på ikonet **Yderligere indstillinger**. Det bør se således ud:

 ![Samsung-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tryk på **Lås apps**:

 ![Samsung-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung-indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei og deres Android-tilpasning **EMUI** hører til de mest problematiske på markedet mht. ikke-standardiserede baggrundsprocesbegrænsninger. I standardindstillingen vil stort set alle apps med baggrundsaktiviteter løbe ind i problemer og i sidste ende fejlfungere.

### App-start på visse EMUI 8-, 9- og 10-enheder (Huawei P20/P20 Lite/Mate 10…)

Denne funktion kan være, eller ikke være, tilgængelig på alle enheder eller kan have en anden betegnelse.

1. Gå til telefon **Indstillinger** → **Batteri** → **App-start**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Deaktivér **Håndtér alle automatisk**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Sæt AdGuard til **Håndtér manuelt** og slå alle kontakter Til.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Deaktivér **Opstartshåndtering**, der forhindrer apps i at køre automatisk, efter mobilen er startet op.

    Gå til **Indstillinger** → **Alle** → **Opstartshåndtering** → slå AdGuard Fra

    For pålidelig baggrundsoperation skal **PowerGenie** muligvis afinstalleres som beskrevet nedenfor.

### EMUI 9+-enheder og PowerGenie

:::note

På mobiler med EMUI 9+ (Android P+) findes en task killer-app kaldet PowerGenie, der tvinger alle apps, som ikke er hvidlistet af Huawei, til at lukke uden at give brugerne nogen valgmulighed. Se nedenfor, hvordan den afinstalleres.

:::

Huawei er ekstremt opfindsomme mht. at forårsage fejlfunktion af apps på deres enheder. Ud over alle de nedenfor beskrevne ikke-standardiserede strømstyringsforanstaltninger, introducerede de en task killer-app indbygget direkte i EMUI 9 på Android Pie.

Den kaldes **PowerGenie** og standser alle apps, som ikke er på dens hvidliste. Brugeren kan ikke selv føje apps til denne prædefinerede hvidliste. Det betyder, at korrekt app-funktionalitet på Huawei kun kan opnås ved at afinstallere PowerGenie.

Desværre er dette en system-app, der kun kan afinstalleres helt vha. ADB (Android Debug Bridge).

:::note Kilde

[XDA-forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Det er nødvendigt at**:

Dette er ubekræftet, men en mulighed kan være blot at deaktivere PowerGenie i **Telefonindstillinger** → **Apps**. Findes denne indstilling i enhedsindstillingerne, kan flg. trin overspringes. Deaktivering vil dog skulle foretages efter hver genstart af enheden. Følg denne vejledning, hvis en sådan indstilling ikke findes:

1. [Installér ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) på en computer.

1. Tilslut mobilen via et datakabel.

1. Aktivér [Udviklerindstillinger](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivér **USB-fejlfinding** i Udviklerindstillinger på mobilen.

1. Eksekvér flg. kommandoer på computeren:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Stoppes AdGuard stadig, prøv også at eksekvere:

`adb shell pm stopservice hwPfwService`

### EMUI 6+-enheder (samt visse EMUI 5-enheder)

- **Enhedsindstillinger** → **Avancerede indstillinger** → **Batterihåndtering** → sæt **Strømskema** til **Ydelse**;
- **Enhedsindstillinger** → **Avancerede indstillinger** → **Batterihåndtering** → **Beskyttede apps** – sæt AdGuard til **Beskyttet**;
- **Enhedsindstillinger** → **Apps** → **Din app** → **Batteri** → **Strømintensiv prompt** `[afmarkér]` og **Fortsæt med at køre, når skærmen er slukket** `[markér]`;
- **Enhedsindstillinger** → **Apps** → **Avanceret (nederst)** → **Ignorere optimeringer** → tryk på Tilladt → **Alle apps** → find AdGuard på listen og indstil til **Tillad**.

#### Huawei P9 Plus

Åbn enhedsindstillinger → **Apps** → **Indstillinger** → **Særlig adgang** → **Ignorere batterioptimering** → vælg **Tillad** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite og Huawei Mate 9 Pro

Åbn enhedsindstillinger → **Batteri** → **App-start** og sæt AdGuard til **Håndtere manuelt**, og sørg for, at alt er slået til.

### Huawei P20/P20 Lite/Mate 10

**Enhedsindstillinger** → **Batteri** → **App-start** og sæt AdGuard til **Håndtere manuelt**, og sørg for, at alt er slået til. For pålidelig baggrundsoperation skal PowerGenie muligvis afinstalleres som beskrevet ovenfor.

### Tidlig Huawei

Ældre Huawei-enheder er de nemmeste at opsætte. Det er nok at udføre to enkle trin for at låse AdGuard i baggrunden, så den ikke afsluttes af strømsparerfunktionen eller baggrundsprocesterminatoren.

- Tryk på knappen **Seneste opgaver**:

    ![Huawei seneste apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei-lås *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

For at opsætte AdGuards baggrundsdrift mere effektivt, bør flg. ligeledes gøres i enhedsindstillingerne:

- Gå til **Indstillinger** → åbn **Batterihåndtering** → sæt **Strømskema** til **Ydelse**;
- Vælg dernæst **Beskyttede apps** i **Batterihåndtering**, og tjek hér, at AdGuard er Beskyttet;
- Gå fra hovedindstillingerne til **Apps** og tryk på AdGuard → vælg **Batteri** → aktivér **Strømkrævende prompt** og **Fortsæt med at køre efter skærmen slukkes**;
- Åbn dernæst i afsnittet → **Apps** **Indstillinger** (nederst) → **Særlig adgang** → vælg **Ignorere batterioptimering** → tryk på **Tilladte** → **Alle apps** → find AdGuard på listen og sæt den til **Nægt**.

## Meizu

Meizu har næsten samme tilgang til baggrundsprocesbegrænsninger som Huawei og Xiaomi. Så deaktivering af baggrundsdrift for AdGuard (og andre apps) kan hindres ved at justere flg. indstillinger:

- Gå til **Avancerede indstillinger** → åbn **Batterihåndtering** → sæt **Strømskema** til **Ydelse**;
- Vælg dernæst **Beskyttede apps** i **Batterihåndtering**, og tjek hér, at AdGuard er Beskyttet;
- Gå til afsnittet **Apps** og tryk på AdGuard → vælg **Batteri** → aktivér **Strømkrævende prompt** og **Fortsæt med at køre efter skærmen slukkkes**.

## Nokia

Nokia-enheder med Android 9+ har **Evenwell Power saver** deaktiveret, hvilket var hovedsynderen mht. at standse baggrundsprocesser. Standses AdGuard stadig på en Nokia-mobil, tjek den [gamle vejledning](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Installér ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) på en computer;

1. Tilslut enheden med et datakabel;

1. Aktivér [Udviklerindstillinger](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivér **USB-fejlfinding** i enhedens Udviklerindstillinger;

1. Afinstallér pakken **com.evenwell.emm** via flg. ADB-kommandoer:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 og 5.1

På disse enheder findes en task killer kaldet **DuraSpeed**, der afslutter alle baggrundsapps. Den kan ikke afinstalleres eller deaktiveres på normal vis. Disse handlinger kræver ADB, og selv da, genaktiveres DuraSpeed efter en genstart. En tasker-app, såsom [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid), kræves derfor for automatisk DuraSpeed-deaktivering.

1. [Installér ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) på en computer;

1. Tilslut enheden med et datakabel;

1. Aktivér [Udviklerindstillinger](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivér **USB-fejlfinding** i enhedens Udviklerindstillinger;

1. Tildel MacroDroid (eller anden automatiserings-app) rettighed til at skrive til det globale indstillingslager ved brug af denne kommando:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Opret en opgave, der udløses af **Device Boot** og udfører flg.:

    - Systemindstilling: Angiv **Global**, navn `setting.duraspeed.enabled`, værdi **-1**
    - Systemindstilling: Angiv **System**, navn `setting.duraspeed.enabled`, værdi **-1**
    - Systemindstilling: Angiv **Global**, navn `setting.duraspeed.enabled`, værdi **-0**
    - Systemindstilling: Angiv **System**, navn `setting.duraspeed.enabled`, værdi **-0**

    ![Nokia-tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Begge indstillingstyperne **Global** og **System** behøves. Skærmfotoet viser kun Global som et eksempel.


:::

### Andre Nokia-modeller

- Gå til telefon **Indstillinger** → **Apps** → **Vis alle apps**.

- Tryk på menuen øverst til højre → **Vis system**.

Find **Strømsparer-appen** på listen, vælg den og tryk på **Gennemtving lukning**. Den forbliver stoppet et stykke tid, men genstarter på et tidspunkt.

AdGuard burde nu fungere normalt og bruge standard Android-batterioptimeringer, indtil Power Saver genstarter.

En alternativ, mere permanent løsning til mere teknologikyndige brugere:

1. [Installér ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) på en computer;

1. Tilslut enheden med et datakabel;

1. Aktivér [Udviklerindstillinger](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivér **USB-fejlfinding** i enhedens Udviklerindstillinger;

1. Afinstallér pakken **com.evenwell.powersaving.g3** via flg. ADB-kommandoer:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Nogle gange standses baggrundstjenester (inkl. tilgængelighedstjenester, som derfor skal genaktiveres), når skærmen slukkes. Dette kan indtil videre omgås således:

Gå til **Sikkerhedscenter** → tryk på **Fortrolighedstilladelser** → **Opstartshåndtering** og tillad her AdGuard-appen at køre i baggrunden.

Andre løsninger:

- Fastgør AdGuard til Seneste apps-skærmen
- Aktivér AdGuard på app-listen i sikkerheds-appens "opstartshåndtering" og "flydende app-liste" (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Slå batterioptimeringer fra

## OnePlus

### OxygenOS

Enheder udstyret med OxygenOS er de mest problematiske med dets OS-specifikke cache-rensning og RAM-frigivelse, inkl. OS-optimering. Derudover kan OxygenOS afbryde AdGuards drift, hvis den ikke anvendes i et stykke tid. Følg disse trin for at undgå sådanne uønskede konsekvenser.

#### Låsning af appen

- Go to **Settings**

- **Batteri** → **Batterioptimering**

- Find AdGuard

- Tryk på den og vælg indstillingen **Optimér ikke**

- Tryk på **Færdig** for at gemme

- Åbn menuen for seneste apps (som vist på skærmfotoet):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lås AdGuard-appen:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

På visse OnePlus-mobiler findes også funktionerne kaldet App Auto-Launch og Deep Optimization, som grundlæggende forhindrer apps i at operere i baggrunden. Deaktivér den for AdGuard.

:::

#### Batterioptimering

- Åbn enhedsindstillinger → **Batteri** → **Batterioptimering** → skift til listen **Alle apps** (øverste menu) → vælg AdGuard → aktivér **Optimér ikke**

- Åbn enhedsindstillinger → **Batteri** → **Batterioptimering** → (⁝) 3-priksmenu → **Avanceret optimering** → Deaktivér Dyb optimering

#### App-autostart

App-autostart (på visse OnePlus-mobiler) forhindrer grundlæggende apps i at operere i baggrunden. Deaktivér den for AdGuard.

#### Forbedret/Avanceret optimering

OnePlus 6 og senere:

- Åbn **Systemindstillinger** → **Batteri** → **Batterioptimering** → (⁝) 3-priksmenu → **Avanceret optimering**
- Deaktivér **Dyb optimering**/**Adaptivt batteri**
- Deaktivér **Slumre standby-optimering**. OnePlus forsøger at lære, hvornår brugeren normalt sover, og i de perioder deaktiverer den så mobilens netværksforbindelser. Denne indstilling forhindrer levering af push-notifikationer.

OnePlus op til 6:

- Deaktivér under **Systemindstillinger** → **Batteri** → **Batterioptimering** → (⁝) 3-priksmenu → **Forbedret optimering**.

#### Rydningsadfærd for Seneste apps

Normalt lukkes en app ikke, når den stryges væk. På OnePlus kan det dog forholde sig anderledes. Rydningsadfærdshåndteringen for Seneste app kan være opsat på en måde, så apps, som stryges væk, afsluttes. For at returnere den til "normal" tilstand:

Gå til **Indstillinger** → **Avanceret** → **Seneste app-håndtering** → Skift til **Normal rydning**

### ColorOS

På enheder, som kører ColorOS, kan systemet også aggressivt begrænse baggrundsprocesser. For at sikre at AdGuard fungerer korrekt i baggrunden, skal flg. indstillinger opsættes:

- Åbn **Systemindstillinger** → **Batteri → Batteritilstand** og vælg **Høj ydeevnetilstand**

![Høj ydeevnetilstand *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/high_performance_mode.jpg)

- Gå til **Apps → App-håndtering → AdGuard → Batteriforbrug** og vælg **Tillad baggrundsaktivitet**

![Tillad baggrundsaktivitet *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/allow_background_activity.jpg)

- Gå til **Apps → Auto-start** og slå kontakten for AdGuard til

![Auto-start *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/auto_launch.jpg)

- Sådan fastlåses AdGuard i menuen **Seneste apps**:

    - Åbn skærmen **Seneste apps**
    - Stryg AdGuard-app-kortet ned for at rastlåse det i hukommelsen

## Sony

Sony var den første mobil-OS udvikler til at introducere ikke-standard baggrundsprocesoptimering. Den kaldes **Stamina-tilstand** og lukker øjeblikkeligt alle baggrundsprocesser, hvis den aktiv. For at løse dette:

Gå til **Indstillinger** → **Batteri** → Deaktivér **STAMINA-tilstand**

![Sony Stamina-tilstand *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

I Android 11+ findes der, på samme skærm som STAMINA-tilstand, en indstilling kaldet **Adaptivt batteri**, der også bør deaktiveres.

AdGuard skal også sættes til at være Undtaget fra Strømsparer-funktionen:

**Systemindstillinger** → **Apps og Notifikationer** → **Avanceret** → **Speciel app-adgang til** → **Strømbesparende funktion** → skift AdGuard til **Undtaget**

## Wiko

Wiko-enheder er problematiske mht. ikke-standardiserede baggrundsprocesoptimeringer. Gør flg. for at lade AdGuard operere i baggrunden:

- Gå til **Telefonassistent** → **Batteri** → slå **Økotilstand** fra
- Gå tilbage, og gå til **Manuel tilstand**
- Tryk på **Tandhjulsikonet** øverst til højre → **Hvidliste for baggrunds-apps** → vælg **AdGuard**

## Android-fabriksopsatte enheder Pixel/Nexus/Nubia/Essential

Android fabriks-OS er normalt ikke i konflikt med apps, som opererer i baggrunden, men opleves problemer, så aktivér tilstanden **Altid-til VPN**.

- Gå til **Indstillinger** → **Netværk og Internet**

    ![Standard netværk *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tryk på **VPN** og vælg **AdGuard**

    ![Standard VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Opsæt tilstanden **Altid-til VPN**

    ![Stock AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

På enheder, som kører Realme UI 4.0, er der tre nøgleopsætninger til at sikre, at AdGuard fungerer korrekt i baggrunden.

1. Opsætning af AdGuard-appen:

    - Langt tryk på AdGuard-ikonet
    - Vælg i den viste menuen **App-info**
    - Gå til **Batteriforbrug** og aktivér alle indstillinger:
        - Tillad baggrundsaktivitet
        - Tillad forgrundsaktivitet
        - Tillad auto-start
    - Rul i afsnittet **App info** ned og deaktivér indstillingen **Pausér app-aktivitet, hvis inaktiv**

    ![Altid-til VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Opsætning af batteriet:

    - Gå til **Indstillinger → Batteri → Flere indstillinger → Optimér batteribrug**
    - Find AdGuard på listen og aktivér **Optimér ikke**
    - Tjek under **Andre indstillinger** afsnittet **App Hurtig-frys** og deaktivér den for AdGuard

    ![Altid-til VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. Aktivér *Altid-til VPN* for AdGuard:

    - Gå til **Indstillinger → Forbindelse og deling → VPN**
    - Find **AdGuard** og aktivér indstillingen **Altid-til VPN**

    ![Altid-til VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

På Motorola-enheder er der fire nøgleopsætninger til at sikre, at AdGuard fungerer korrekt i baggrunden.

1. Tillad brug i baggrunden:

   - Gå til **Indstillinger → Apps** og find **AdGuard**
   - Gå til **Indstillinger → Apps → Batteriforbrug for apps** og find AdGuard
   - Slå **Tillad baggrundsbatteriforbrug** til eller vælg **Ubegrænset** afhængigt af Android-versionen

1. Fjern rrstriktioner for baggrundsaktivitet:

   - Go to **Settings**
   - Rul ned, og tryk på **Apps og notifikationer**
   - Find **AdGuard** og åbn **Avanceret → Batteri**
   - Tryk på **Baggrundsrestriktion** eller **Baggrundsgrænser**
   - Står der **Baggrundsaktivitet er begrænset**, tryk på det og tryk dernæst på **Fjern**

1. Håndtering af baggrunds-apps:

   - Gå til **Indstillinger → Batteri → Baggrunds-app-forbrug**
   - Aktivér indstillingen **Håndtér baggrunds-apps**
   - Vælg i den viste menu fanen **Apps**
   - Find **AdGuard** på listen, og tryk på den
   - I dialogen **Optimér batteribrug**, vælg **Tillad altid**

    ![Tillad altid *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/motorolla-background-app-use.png)

1. Deaktivering af Adaptivt batteri:

   - Gå til **Indstillinger → Batteri**
   - Slå indstillingen **Adaptivt batteri** fra

## ZTE

ZTE-enheder, som kører under MyOS-operativsystemet, har en aggressiv tilgang til baggrundsprocesser. Følg disse trin for at forhindre, at AdGuard lukkes automatisk af AI Control:

- Gå til **Indstillinger → Batteri → App-håndtering**
- Slå **AI Control** fra
- Vælg **Manuel håndtering**
- Find **AdGuard** på listen, og indstil **Baggrundsoperation** til **Tillad**

## Infinix

Infinix-enheder anvender strikse batteri- og strømspareregler, som kan afbryde AdGuards baggrundsoperation. Følg disse trin for at sikre stabil beskyttelse ved at forhindre, at AdGuard lukkes automatisk af systemet:

1. Deaktivér beskyttelse og luk AdGuard-appen.

1. Gå til systemindstillinger → *App-håndtering* → *App-liste* → *AdGuard* → *Batteri* og aktivér *Tillad baggrundsforbrug*. Gå dernæst til indstillingen *Tillad baggrundsforbrug*, og skift tilstanden til *Ubegrænset*.

    ![Tillad baggrundsforbrug *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_allow.png)

1. Åbn systemindstillinger → *App-håndtering* → *Autostart-håndtering* og aktivér *AdGuard*.

    ![Autostart-håndtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_app_launch.png)

1. Gå til systemindstillinger → *Batteri og strømbesparelse* → *Strømsparer* og deaktivér *Batterisparer*.

1. Fra fanen <em x-id=\"3\">Batteri og Strømbesparelse</em>, find <em x-id=\"3\">AdGuard</em> og vælg <em x-id=\"3\">Ingen restriktioner</em>.

    ![Strømbesparelseshåndtering til apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_power_saving.png)

1. Gå til *App-håndtering* → *Særlig app-adgang* → *Batterioptimering*. Vælg øverst på skærmen *Alle apps* fra rullemenuen, tryk på *AdGuard*, og sæt den til *Ikke optimeret*.

    ![Batterioptimering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_not_optimized.png)
