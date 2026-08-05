---
title: Filtre
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard Browser Extension, der kun beskytter webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

- [Tilpassede filtre](#custom-filters)
- [Brugerregler](#user-rules)
- [Hvidliste](#allowlist)

Blokering af annoncer er kernefunktionen i enhver adblocker, og AdGuard Browser Extension er ingen undtagelse. Adblocking er baseret på filtre — sæt af regler skrevet i en særlig syntaks. Disse regler definerer, hvilke sideelementer, som skal blokeres, og hvilke, som ikke skal. AdGuard fortolker disse regler og ændrer forespørgsler i overensstemmelse hermed. Som et resultat ses annoncer ikke længere på websiderne.

![Filtre \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filters.png)

Alle filtre er grupperet efter kategori baseret på deres rolle:

- Adblocking: Blokér forskellige typer af reklamer
- Fortrolighed: Blokér online-trackere og analyseværktøjer for at beskytte personlige data
- Sociale widgets: Blokér sociale medieelementer, såsom _Like_- og _Share_-knapper
- Irritationer: Blokér irriterende webelementer, såsom cookie-meddelelser, tredjeparts-widgets eller pop op-vinduer på siden
- Sikkerhed: Blokér forespørgsler til phishing- og skadelige websteder
- Andre: Indeholder diverse filtre, som ikke passer ind i hovedkategorierne
- Sprogspecifikt: Blokér annoncer på websteder på bestemte sprog
- Tilpasset: Muliggør at tilføje egne filtre fra en lokal fil eller URL

Enten individuelle filtre kan aktiveres eller hele grupper på én gang.

![Sikkerhedsfiltre \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Tilpassede filtre {#custom-filters}

Mens funktionerne for andre filtergrupper er mere eller mindre selvforklarende, findes en gruppe kaldet _Tilpasset_, der kan afføde yderligere spørgsmål.

![Tilpassede filtre \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/custom_filters.png)

Via denne fane kan filtre tilføjes, som ikke er inkluderet i udvidelsen som standard. Der er masser af [offentligt tilgængelige filtre på internet](https://filterlists.com). Derudover kan egne filtre oprettes og tilføjes. Faktisk kan der bygges et hvilket som helst sæt filtre og tilpasse adblockingen som ønsket.

For at tilføje et filter, klik blot på _Tilføj tilpasset filter_, angiv URL'en eller filstien til det ønskede filter og klik på _Næste_.

![Tilføj et tilpasset filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/add_filter.png)

Tilpassede filtre opdateres uafhængigt og holder beskyttelsen effektiv og opdateret uden krav om opdateringer af udvidelsen.

## Brugerregler {#user-rules}

_Brugerregler_ er et andet værktøj, hvormed adblocking kan tilpasses.

![Brugerregler \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/user_rules.png)

Nye regler kan tilføjes på flere måder. Det nemmest er blot at skrive en regel, men det kræver en vis viden om [regelsyntaks](/general/ad-filtring/create-own-filters).

Der kan også importeres en filterliste, der er klar til brug, fra en tekstfil. **Sørg for, at forskellige regler er adskilt af linjeskift.**

:::note

Import af en klar-til-brug filterliste gøres bedst via fanen _Tilpassede filtre_.

:::

Egne filtreringsregler kan eksporteres. Denne mulighed er god til at overføre en liste over regler mellem webbrowsere eller enheder.

Når et websted føjes til _Hvidliste_, eller Assistentværktøjet bruges til at skjule et sideelement, gemmes den korresponderende regel automatisk i _Brugerregler_.

## Hvidliste {#allowlist}

_Hvidiste_ bruges til at undtage bestemte websteder fra filtrering. Ingen af blokeringsreglerne vil gælde for webstederne på denne liste.

![Hvidliste \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allowlist.png)

_Hvidliste_ kan også inverteres, så annoncer afblokeres overalt undtagen på de websteder, som er føjet til denne liste. For at gøre dette, gå til _Yderligere indstillinger_ og aktivér  _Invertér Hvidliste_. Før den aktiveres, vises en bekræftelsesdialog for at forklare, hvordan den fungerer, og forhindre utilsigtet aktivering.

![Invertér Hvidliste \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/invert_allowlist_dialog.png)

Eksisterende hvidlister kan også importeres og eksporteres. Det er nyttigt, såfremt de samme regler ønskes anvendt på tværs af alle webbrowsere.
