---
title: Sådan hentes systemlogfiler
sidebar_position: 4
---

:::info

Denne artikel dækker AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og/eller filer tilgængelige i logfiler behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

Af og til er en alm. log måske utilstrækkelig til identificering af problemårsagen. I så fald er en systemlog nødvendig. Nedenfor er en vejledning til, hvordan den indsamles og hentes: Via Udviklerindstillinger og Logcat.

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi følger nøje vores [Fortrolighedspolitik](https://adguard.com/privacy/android.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logger til supportteamet, bedes filen gennemgået, da den kan indeholde ekstra oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefaler disse slettet først.

:::

## Optag en fejlrapport fra en enhed

Gør følgende for at generere en fejlrapport direkte fra enheden:

1. Sørg for, at [Udviklerindstillinger](https://developer.android.com/studio/run/device.html#developer-device-options) er aktiveret.

1. Tryk i **Udviklerindstillinger** på **Optag fejlrapport**.

    ![Fejlrapport *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Vælg den ønskede fejlrapporttype og tryk på **Rapportér**.

    :::note

    Efter et øjeblik ses en notifikation om, at fejlrapporten er klar (se Fig. 2).


:::

    ![Fejlrapport *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Tryk på notifikationen for at dele fejlrapporten.

    ![Fejlrapport *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Indsend denne log til supportteamet.

    :::note

    Supportteamet behandler sagen meget hurtigere, såfremt HelpDesk-sagsnummeret eller GitHub-problematiknummeret angives i supporthenvendelsen.


:::

## Optag en fejlrapport via Logcat

På enheder til og med Android 7 kan fejlrapporter ikke indsendes automatisk. Fejlrapporten kan så optages manuelt via Logcat — et standard Android-kommandolinjeværktøj, der dumper en log over systemmeddelelser.

Følg denne vejledning:

### Del 1: Klargør enheden

1. Aktivér Udviklertilstand på enheden. For at gøre dette: Gå til **Indstillinger** → **Om** → tryk på **Build-nummer** 7 gange.

1. Gå til **Udviklerindstillinger**.

1. Aktivér **USB-fejlfinding**.

1. Forøg størrelsen på **Logger-buffer** til 4MB pr. log-buffer.

4 MB burde være nok til lagring at de nødvendige logfiler, indtil den anden del (hentning af loggen fra enheden) kan udføres;

### Del 2: Genskab problematikken

Det er vigtigt at genskabe problematikken, efte den første del er udført.

1. Genskab problematikken.

1. Husk/notér genskabelsesdato og -tidspunkt og medtag disse i e-mailen til supporten senere.

### Del 3: Hent loggen

1. Tilslut via et USB-kabel enheden til en PC.

1. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Vælg det relevante download-link til operativsystemet fra afsnittet Downloads. Når der er trykket på linket, downloades en ZIP-fil. ADB-filerne (Android Debug Bridge) kan dernæst udpakkes fra ZIP-filen og gemmes, hvor det ønskes.

1. Test, om ADB fungerer korrekt: Tilslut Android-enheden til computeren via et USB-kabel, åbn en kommandoprompt, PowerShell eller Terminal og eksekvér flg. kommando:

    `adb devices`

    Et eksempel på et vellykket resultat:

    ![Trin 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Eksekvér dernæst flg. kommando (indsæt den relevante sti):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    E-mail den oprettede `txt`-fil samt tidspunktet, hvor problematikken blev genskabt (fra del 2), til supportteamet via [support@adguard.com](mailto:support@adguard.com).

### Alternativ måde til ROOT-brugere

1. Download og eksekvér [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Vælg menupunktet **Optag**. Vælg et navn til logfilen eller tryk blot på **OK**. Nu kan der trykkes på knappen **Hjem**, mens CatLog fortsætte optagelse af loggen i baggrunden.

1. Genskab problematikken.

1. Åbn CatLog og tryk på menupunktet **Stop optagelse**.

1. Indsend denne log til supportteamet.

:::note

Supportteamet behandler sagen meget hurtigere, såfremt HelpDesk-sagsnummeret eller GitHub-problematiknummeret angives i supporthenvendelsen.

:::
