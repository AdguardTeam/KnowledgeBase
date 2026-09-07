---
title: Øvrige funktioner og indstillinger
sidebar_position: 4
---

:::info

Denne artikel omhandler AdGuard Browser Extension, der kun beskytter selve webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Udover AdGuard Browser Extensions hovedindstillinger findes flere mere specifikke funktioner, som kan opsættes via fanerne [_Generelt_](#general) og [_Yderligere indstillinger_](#misc).

## Generelt {#general}

Fanen _Generelt_ indeholder udvidelsens hovedindstillinger, herunder styring af dens basisfiltreringsadfærd. Her kan der tillades søgeannoncer og [selvpromovering på websteder](/general/ad-filtering/search-ads/), aktiveres automatisk aktivering af sprogspecifikke filtre, angives filteropdateringsintervaller og aktiveres [beskyttelse mod phishing og ondsindede websites](/general/browsing-security/).

![Generelle indstillinger \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/general_settings.png)

Den aktuell opsætning kan også gemmes og hurtigt anvendes på en anden webbrowser eller enhed. For at gøre dette, klik på _Del indstillinger_: Udvidelsen genererer så et særligt link og en QR-kode indeholdende de aktuelle indstillinger. Linket kan enten kopieres og åbnes i en webbrowser, eller QR-koden kan skannes på en enhed med AdGuard for at åbne linket direkte i appen. Dernæst vises en prompt om at anvende den delte opsætning, så samme opsætning kan gendannes efter geninstallation af webbrowseren eller på en ny enhed.

Om nødvendigt kan dette link også deles med andre eller vedhæftes en supportanmodning, så teamet kan se den præcise opsætning.

Derudover kan indstillingerne stadig eksporteres til en .json-fil via klik på _Eksportere indstillinger_ og importeres via klik på _Importere indstillinger_. Dette gør det nemt at skifte mellem forskellige opsætningsprofiler eller flytte dem mellem webbrowsere.

## Yderligere indstillinger {#misc}

Afsnittet _Yderligere indstillinger_ har et antal indstillinger relateret til adblockingprocessen samt app-anvendeligheden.

![Yderligere indstillinger \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/additional_settings.png)

Aktivering af _Brug optimerede filtre_ aktiverer letvægtsversionerne af adblockingreglerne. Den fokuserer kun på de mest populære filtre for at spare internettrafik og systemhukommelse, hvilket er ideelt til mobil browsing.

_Hvidliste_ kan inverteres, hvilket afblokerer annoncer på alle websteder som standard, undtagen for de specifikke domæner, som manuelt føjes til listen

AdGuard-elementet kan også føjes til webbrowserens kontekstmenu, visning af antal blokerede annoncer kan aktiveres på AdGuard-ikonet og opdateringsnotifikationer for udvidelsen kan slås til/fra.

Derudover muliggør dette afsnit at aktivere notifikationer om AdGuard-appen, åbne _Filtreringslog_, rydde statistikker over blokerede annoncer og trackere eller nulstille indstillingerne.

Desuden er det muligt at hjælpe os med udviklingen af filtre ved at indsende statistikker over anvendte regler: Hvilke, som udløses, på hvilke websteder og hvor ofte. Denne indstilling er som standard slået fra, da vi ikke indsamler brugerdata uden samtykke. Men såfremt den aktiveres, vil alle data blive strengt anonymiseret.

Det er også muligt at hjælpe os med at forbedre udvidelsen ved at indsende anonymiserede brugsdata. Dette omfatter navnene på de skærme, som der interageres med, navnene på de knapper, som der klikkes på og sessionsidentifikatorer. Disse indsigter hjælper os med at forstå, hvor brugerne støder på modstand, forfine oplevelsen og gøre udvidelsen hurtigere og nemmere at bruge. Indstillingen _Indsend anonymiseret brugsdata_ er som standard slået fra. Aktiveres den, vil alle data blive strengt anonymiseret og kun brugt internt. De vil aldrig blive delt med tredjeparter.

:::note

Indstillingen _Indsend anonymiserede brugsdata_ kan også aktiveres på efterinstallationssiden i Chromium-webbrowsere.

:::

## Om {#about}

I afsnittet _Om_ findes oplysninger om den aktuelle version, links til Fortrolighedspolitik samt et link til Browser Extension-repo'et på GitHub.

![Om \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/about.png)
