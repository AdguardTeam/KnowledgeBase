---
title: Safari Web-udvidelse
sidebar_position: 3
---

Web-udvidelser føjer tilpasset funktionalitet til Safari. Der kan findes [flere oplysninger om web-udvidelser hér](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Sådan ser Web-udvidelsen ud i Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuards Safari Web-udvidelse er et værktøj, der udnytter de seneste funktioner i iOS 15. Den tjener til at forbedre funktionaliteten af AdGuard til iOS. Med den kan AdGuard anvende avancerede filtreringsregler og dermed blokere flere annoncer.

## Hvad den gør

Som standard leverer Safari kun basisværktøjer til indholdsblockere. Disse værktøjer muliggør ikke det ydelsesniveau, der kan findes i indholdsblockere til andre operativsystemer (Windows, macOS, Android). Eksempelvis kan AdGuard-apps på andre platforme bruge sådanne kraftfulde anti-reklamevåben såsom [CSS-regler](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Udvidede CSS-selektorer](/general/ad-filtering/create-own-filters#extended-css-selectors) og [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Desværre er disse værktøjer absolut uerstattelige ved håndtering af mere komplekse tilfælde, som f.eks. pre-roll reklamer på YouTube.

AdGuards Safari Web-udvidelse komplimenterer AdGuard ved at give den mulighed for at anvende disse filtreringsregeltyper.

Derudover kan AdGuards Safari Web-udvidelse bruges til hurtig håndtering af AdGuard til iOS direkte fra webbrowseren. Tryk på knappen *Udvidelser* — det er den med et puslespilsikonet, afhængigt af enhedstypen kan den være placeret til venstre eller til højre for adressebjælken. Find **AdGuard** på listen, og tryk på den.

![Web-udvidelsesmenu *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> På iPad kan AdGuards Safari-webudvidelse tilgås direkte ved at trykke på AdGuard-ikonet på webbrowserens adressebjælke.

Flg. liste over muligheder vises:

- **Aktivering/deaktivering af beskyttelse på webstedet**. Slås kontakten fra, deaktiveres AdGuard fuldstændig for det aktuelle websted og en respektiv undtagelsesregel oprettes. Slås kontakten til igen, genoptages beskyttelsen for webstedet, og reglen slettes. Enhver sådan ændring vil tage lidt tid at effektuere.

- **Manuel blokering af elementer på siden**. Tryk på knappen *Blokér elementer på denne side* for at prompte en pop op til elementblokering. Vælg et hvilket som helst element på siden, der skal skjules, justér markeringszonen, se et eksempel på ændringer og bekræft fjernelsen. En korresponderende filtreringsregel føjes til AdGuard (kan senere deaktiveres/slettes for at fortryde ændringen).

- **Anmeld et problem**. Stryg op for at se knappen *Anmeld et problem*. Brug den til at anmelde en overset annonce eller ethvert andet problem, der er oplevet på den aktuelle side.

## Sådan aktiveres AdGuards Safari Web-udvidelse

:::note

AdGuards Safari Web-udvidelse kræver adgang til websidernes indhold for at fungere, men bruger den ikke til andre formål end adblocking.

:::

### I iOS-indstillingerne

Webudvidelsen er ikke et særskilt værktøj, men kræver AdGuard til iOS. Er AdGuard til iOS ikke installeret på enheden, så [installér den først](../installation) og fuldfør onboarding-processen for at gøre den funktionsklar.

Når processen er færdig, åbn *Indstillinger* og rul ned til *Apps*.

![Vælg Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Åbn dernæst *Safari* → *Udvidelser*.

![Vælg Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Vælg Udvidelser *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Find i **TILLAD DISSE UDVIDELSER**-afsnittet **AdGuard** blandt de tilgængelige udvidelser.

![Vælg AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tryk på den, og slå dernæst *Tillad udvidelse*-knappen til.

Sørg længere nede på skærmen for, at *Alle websteder* er sat til *Tillad* eller *Spørg*. Vælges *Tillad*, skal der ikke give tilladelse, hver gang et nyt websted besøges. I tvivlstilfælde, vælg *Spørg* for at tildele tilladelser pr. websted.

![AdGuard-udvidelse i Indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### I Safari

For at aktivere AdGuard-udvidelsen direkte fra Safari-webbrowseren, tryk på ikonet til venstre for URL-feltet:

![I Safari, tryk på ikonet til venstre for URL-feltet *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Tryk dernæst på *Håndtér udvidelser*.

![Udvidelser *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

Slå AdGuard-kontakterne til i det åbnede vindue. Den øverste er AdGuard Web-udvidelsen; de øvrige seks er indholdsblockere krævet for filtrering.

![Udvidelser *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

AdGuard bør nu kunne ses blandt de tilgængelige udvidelser. For at aktiver **Avanceret beskyttelse**, åbn AdGuard-udvidelsen, tryk på det gule **i** ikon, tryk på *Aktivér* og bekræft handlingen.

:::note

Anvendes AdGuard til iOS uden Premium-abonnement, vil **Avanceret beskyttelse** ikke kunne aktiveres.

:::

Alternativt kan **Avanceret beskyttelse** aktiveres direkte fra appen via fanen **Beskyttelse** (2. fra venstre i nederste ikonrække).

AdGuards Safari Web-udvidelse virker kun på iOS fra version 15.
