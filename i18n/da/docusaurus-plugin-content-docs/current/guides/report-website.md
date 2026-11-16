---
title: Sådan indrapporteres websteder og apps
sidebar_position: 3
---


Ved brug af adblockere kan visse websteder fejlfungere eller have ødelagte sideelementer. Disse problemer kan opstå grundet en række faktorer:

- Forkerte brugerregler;
- Ændrede algoritmer for annoncetilføjelser;
- Tilføjede filtre/udvidelser fra tredjepartsudviklere;
- Forfatterne af et af filtrene begik en fejl ved oprettelsen af reglen;
- Genindsættelse af annoncer. Find mere om denne metode på vores [blog](https://adguard.com/en/blog/ad-reinsertion.html).

Hjælp os gerne ved at udfylde en formular med eksempler på annoncer, der er stødt på. For at gøre dette, følg vejledningen for det aktuelle OS.

## Anmeld et websted {#report}

:::note

Når en klage indsendes via appen eller AdGuard Browser Assistent, udfyldes alle oplysninger automatisk. Skærmfotos skal dog oprettes manuelt og dernæst vedhæftes. Anvendes et [direkte link](https://reports.adguard.com/new_issue.html), skal data dog angives manuelt.

:::

For at anmelde en genindsættelse af en annonce eller forkert visning af et websted:

### Browserudvidelse {#extension}

- Åbn webbrowserudvidelsesindstillingerne ved at klikke på det relevante ikon;
- Klik på **Anmeld et problem**:

![extension_issue *mobile_border](https://cdn.adtidy.org/blog/new/5si74extension.png)

- Når formularen er udfyldt, oprettes der automatisk en problematik på [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Der vil også være et link til at monitorere fremskridt hen imod løsningen af problematikken.

### Windows {#windows}

- Åbn [AdGuard Browser Assistent](/adguard-for-windows/browser-assistant) og tryk på **Anmeld et problem**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Udfyld formularen til anmeldelse af en klage;
- Når formularen er udfyldt, oprettes der automatisk en problematik på [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Der vil også være et link til at monitorere fremskridt hen imod løsningen af problematikken.

### Android {#android}

- Åbn AdGuard-indstillingerne;
- Vælg **Support**, dernæst **Anmeld forkert blokering**:

![android *mobile_border](https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg)

- Når formularen er udfyldt, oprettes der automatisk en problematik på [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Der vil også være et link til at monitorere fremskridt hen imod løsningen af problematikken.

### Mac {#mac}

- Åbn [AdGuard Browser Assistant](/adguard-for-mac/features/browser-assistant) og tryk på **Anmeld et problem**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Udfyld formularen til anmeldelse af en klage;
- Når formularen er udfyldt, oprettes der automatisk en problematik på [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Der vil også være et link til at monitorere fremskridt hen imod løsningen af problematikken.

### iOS {#ios}

- Åbn AdGuard-indstillingerne;
- Vælg **Support**, dernæst **Anmeld forkert blokering**:

![iOS *mobile_border](https://cdn.adtidy.org/blog/new/fnl9aios.jpeg)

- Udfyld formularen til anmeldelse af en klage;
- Når formularen er udfyldt, oprettes der automatisk en problematik på [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Der vil også være et link til at monitorere fremskridt hen imod løsningen af problematikken.

## Udfyldelse af formularen {#form}

:::note

Når en klage indsendes via appen eller AdGuard Browser Assistent, udfyldes alle oplysninger automatisk. Skærmfotos skal dog oprettes manuelt og dernæst vedhæftes. Anvendes et [direkte link](https://reports.adguard.com/new_issue.html), skal data dog angives manuelt.

:::

1. Udfyldelse af formularen starter med angivelse af produkttypen og -versionen;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Angiv problematiktypen samt yderligere oplysninger om brug af tredjepartssoftware (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Angiv adressen på siden og webbrowseren (eller downloadlinket i tilfælde af en app), hvor problemet opstod;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. Applikationsopsætning skal angives:

    - Filtre, som anvendes;
    - Stealth Mode-indstillinger, såfremt funktionen er aktiveret.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Brug et skærmfoto](../take-screenshot), hvoraf kernen af problemet fremgår;

    - **Vigtigt**: Skjul alle personlige oplysninger (e-mail, telefonnummer mv.), da skærmfotos vil være offentligt tilgængelige.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Angiv yderligere oplysninger, som vil hjælpe filterudviklere med at forstå situationen;

    Angiv også **GitHub**-kontoen, hvis den er tilgængelig (det kan være nødvendigt for udviklerne at indhente yderligere oplysninger);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Tjek hvert trin, inden formularen indsendes;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. Et link til at tjekke fremskridt for opgaven vil være tilgængeligt.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnosticering af et problem {#issue}

Denne mulighed er velegnet til dem, som ikke er bange for vanskeligheder og ikke har noget imod at prøve at finde problemet på egen hånd. Dette kræver ingen særlige færdigheder eller indgående kendskab til HTML og CSS.

Det kan f.eks. være en situation, hvor yndlingswebstedet ikke åbner, godkendelsen er ikke fungerer eller nogle sideelementer vises forkert. Årsagen kan være brug af et bestemt filter/udvidelse/Stealth Mode-indstilling. For at diagnosticere disse problemer, skal flg. gøres:

### **Filtre**

1. Deaktivér **Ad Blocker**;
2. Løste det problemet, genaktivér da modulet og deaktivér filtrene ét efter ét. Dette gøres for at identificere det filter, der "ødelægger" siden;
3. Er det lykkedes at finde det filter, der "ødelægger" en side, bør udviklerne informeres herom, når formularen udfyldes (se ovenfor). I så tilfælde er det ønskeligt at returnere til de oprindelige indstillinger;
4. Givet det ikke nogen resultater at slå alle filtre fra, anvend da reglen **@@||eksempel.com^$document,extension**; hvor **eksempel.com** vil skulle erstattes med det relevante webstedsnavn;
5. I tilfælde af at problemet ikke løses, gå til afsnittet **Stealth Mode**.

### **Stealth Mode**

1. Deaktivér **Stealth Mode**;
2. Løste dette problemet, aktivér da modulet og slå **Stealth Mode**-indstillingerne fra én efter én. Dette gøres for at identificere de filtre, som "ødelægger" siden;
3. Er det lykkedes at finde den indstilling, der "ødelægger" en side, bør udviklerne informeres herom, når formularen udfyldes (se ovenfor). I så tilfælde er det ønskeligt at returnere til de oprindelige indstillinger;
4. I tilfælde af at problemet ikke løses, gå til afsnittet **Udvidelser**.

### **Udvidelser**

1. Deaktivér **Udvidelser**;
2. Løste dette problemet, aktivér da modulet og slå indstillingerne i **Udvidelser** fra én efter én. Dette gøres for at finde ud af, hvilken indstilling, der "ødelægger" siden;
3. Er det lykkedes at finde den indstilling, der "ødelægger" en side, bør udviklerne informeres herom, når formularen udfyldes (se ovenfor). I så tilfælde er det ønskeligt at returnere til de oprindelige indstillinger.

### **Tredjepartsblockere**

Visse webbrowsere og antivirusprogrammer (såsom Yandex Browser, Kaspersky mv.) har indbyggede adblockere. De kan påvirke — og medføre driftsproblemer for — websteder. Anvendes sådanne programmer, tjek da, at problemet hidrører fra **AdGuard**: Deaktivér **AdGuard**-filtrering og forsøg at genskabe problemet. Fortsætter fejlen, forårsages problemet i så fald af en anden applikation eller webbrowser. Skyldes problemet **AdGuard**, følg da trinnene beskrevet i de foregående afsnit.
