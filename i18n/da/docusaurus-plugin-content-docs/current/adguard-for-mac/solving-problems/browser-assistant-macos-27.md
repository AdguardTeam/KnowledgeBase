---
title: Sådan fungerer AdGuard Browser Assistent på macOS 27+
sidebar_position: 12
---

:::info

Denne artikel dækker AdGuard til Mac, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Grundet politikopdateringer i macOS 27 kan AdGuard muligvis ikke kommunikere med sin Browser Assistent, hvilket kan få udvidelsesbaserede filtreringsfunktioner til at ophøre med at fungere. For at etablere denne forbindelse skal AdGuard placere et Native Messaging host-manifest i webbrowserens applikationsdatamappe. Tidligere gjorde AdGuard dette automatisk i baggrunden. macOS 27 begrænser dog som standard mappeadgang på tværs af apps og kræver udtrykkelig tilladelse. Som følge heraf kan AdGuard ikke længere placere manifestfilen automatisk, hvilket afbryder kommunikationen mellem appen og udvidelsen.

## Anbefalede løsninger

Da dette problem kan påvirke alle Chromium-baseret webbrowsere, gennemgår dette afsnit, hvordan AdGuard kan tildeles de nødvendige tilladelser, uanset benyttet webbrowser.

### Trin 1: Tildel adgang via Filer og mapper

1. Åbn _Filer og mapper_
   - via AdGuard-indstillinger: Klik på tandhjulsikonet i appens hovedvindue → _Præferencer…_ → fanen _Assistent_ → _Åbn Filer og mapper_
     ![AdGuard-indstillinger](https://cdn.adtidy.org/content/kb/ad_blocker/mac/adguard-settings.png)
   - via AdGuard Opsætningsassistent: Klik fra browserassistentens installationsskærm på _Åbn Filer og mapper_ — denne knap vises, hvis AdGuard ikke har adgang til webbrowserens mappe
     ![AdGuard Opsætningsassistent](https://cdn.adtidy.org/content/kb/ad_blocker/mac/setup-assistant.png)
   - via _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Filer og mapper_
     ![Systemindstillinger](https://cdn.adtidy.org/content/kb/ad_blocker/mac/system-settings-new.png)
2. Find _AdGuard_ på listen, og klik på den for at vise rullemenuen
3. Find webbrowseren (f.eks. Chrome eller Brave), og slå kontakten ud for den til

:::note

En til/fra-knap til en bestemt webbrowser vises kun på denne liste, hvis webbrowseren allerede er installeret. Er den aktuelle webbrowser eller Google Chrome ikke på listen, fortsæt til trin 2.

:::

### Trin 2: Hvis webbrowseren ikke er på listen

**Mulighed A: Installér Google Chrome**

Nogle webbrowsere, såsom f.eks. Opera, er afhængige af Native Messaging-mappen tilhørende Google Chrome i stedet for at bruge deres egen mappe. På tidligere macOS-versioner kunne AdGuard blot oprette denne mappe selv. Fra og med macOS 27 tillader macOS dog ikke AdGuard at anmode om adgang til Chromes mappe, medmindre Chrome faktisk er installeret. Installation af Chrome giver AdGuard mulighed for at anmode om den nødvendige tilladelse.

1. Installér Google Chrome, og åbn den mindst én gang — den obligatoriske Native Messaging-mappe bliver tilgængelig på systemet
2. Åbn _Filer og mapper_ (via AdGuard-indstillingerne, AdGuard Opsætningsassistent eller Mac-systemindstillingerne, som beskrevet i trin 1)
3. Find _AdGuard_ på listen, og klik på den for at vise rullemenuen
4. Find Google Chrome, og slå kontakten ud for den til. Browser Assistent vil herefter begynde at fungere i den webbrowser, der er afhængig af Chromes mappe (såsom Opera).

**Mulighed B: Tildel Fuld diskadgang**

1. Åbn _Systemindstillinger_ → _Fortrolighed og Sikkerhed_ → _Fuld diskaadgang_
2. Find _AdGuard_ på listen og slå kontakten til
   ![Fuld diskadgang](https://cdn.adtidy.org/content/kb/ad_blocker/mac/full-disk-access-new.png)
