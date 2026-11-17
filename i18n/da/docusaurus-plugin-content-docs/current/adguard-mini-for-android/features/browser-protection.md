---
title: Browserbeskyttelse
sidebar_position: 2
---

:::info

Denne side omhandler AdGuard Mini til Android, der beskytter Samsung Browser og Yandex Browser samt yder DNS-beskyttelse. For at beskytte Android-enheden fuldstændigt og få mere avancerede indstillinger, [download AdGuard til Android](https://agrd.io/download-kb-adblock).

:::

Browserbeskyttelse er kernefiltreringsfunktionen i AdGuard Mini til Android. Den blokerer annoncer på websider i Samsung Browser og Yandex Browser.

AdGuard Mini fungerer via Content Blocking API, en webbrowserteknologi, der tillader apps at blokere annoncer og anvende filtreringsregler på websider. Denne tilgang er fuldt ud i overensstemmelse med Google Play-politikker.

**Sådan aktiveres Browserbeskyttelse**

1. Åbn AdGuard Mini til Android og gå til _Beskyttelse_ → _Browserbeskyttelse_
2. Slå den webbrowser til, der anvendes
3. Bekræft AdGuard som adblocker i webbrowseren:

- Samsung Browser: Åbn webbrowserens menu, tryk på _Adblockere_, og slå AdGuard til
- Yandex Browser: Gå til webbrowserens _Indstillinger_ → _Udvidelser til indholdsblokering_, og tjek, at AdGuard er aktiveret.

![Browserbeskyttelse](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/browser_protection.png)

Her kan der også opsættes _Filtre_ og _Brugerregler_.

## Filtre

Filtre er lister over regler, som fortæller AdGuard Mini til Android, hvad der skal blokeres eller skjules på websider. De er organiseret i kategorier:

- **Adblocking** blokerer bannere, pop op-vinduer og andre annoncer
- **Sporingsbeskyttelse** skjuler onlineaktiviteten og personlige data for webtrackere (tilgængelig i den [fulde version](https://adguard.com/license.html))
- **Sociale widgets** fjerner knapper til sociale medier og indlejrede widgets
- **Irritationer** skjuler cookie-meddelelser, pop op-vinduer med nyhedsbreve og andre forstyrrende elementer
- **Sikkerhed** blokerer kendte ondsindede og mistænkelige domæner
- **Sprogspecifik** inkluderer filtre til bestemte sprog og regioner
- **Andet** dækker yderligere filtreringstilfælde
- **Tilpassede filtre** muliggør at tilføje en tredjepartsfilterliste efter URL for mere målrettet blokering (tilgængelig i den [fulde version](https://adguard.com/license.html))

![Filtre](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/filters.png)

For at håndtere filtre, gå til _Beskyttelse_ → _Browserbeskyttelse_ → _Filtre_. Gennemse kategorierne, og aktivér de filtre, som der er behov for. Vi anbefaler at holde _Adblocking_ og relevante _Sprogspecifik_-filtre aktiveret.

## Brugerregler

Brugerregler er tilpassede filtreringsregler, som muliggør justering af adblocking: Deaktivere filtrering på et websted, der ikke fungerer korrekt, tilføje en regel modtaget fra supporten eller skrive en egen regel til en bestemt side. De udgør den personlige filterliste, der anvendes oven på de aktiverede filtre, og bruger samme syntaks for filtreringsregler som alle [AdGuard-filtre](https://adguard.com/kb/general/ad-filtering/create-own-filters/).

For at tilføje en regel, gå til _Beskyttelse_ → _Browserbeskyttelse_ → _Brugerregler_.

![Brugerregler](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/user_rules.png)

Husk, at _Brugerregler_ gælder for _Browserbeskyttelse_, det vil sige på websider i Samsung Browser og Yandex Browser. For at blokere domæner på DNS-niveau på hele enheden, anvend [DNS-brugerregler](/adguard-mini-for-android/features/dns-protection.md) i stedet. Fungerer en tilføjet regel ikke på et websted, kan den blot deaktiveres eller slettes fra listen _Brugerregler_.
