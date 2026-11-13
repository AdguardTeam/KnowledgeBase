---
title: App-håndtering
sidebar_position: 1
---

I afsnittet _App-håndtering_ kan rutnings- og filtreringsindstillinger håndteres for alle apps installeret på enheden.

Når AdGuard registrerer, at en app er gået online, føjes den automatisk til _App-håndtering_, og dens trafik rutes igennem AdGuard.

Som standard filtrerer AdGuard al trafik, men det er muligt at vælge, hvad der skal undtages.

AdGuard filtrerer også HTTPS-trafik, da de fleste websteder i dag bruger HTTPS. Dette er især vigtigt for at blokere annoncer på sider såsom youtube.com, facebook.com og x.com, hvor det er umuligt at fjerne annoncer uden HTTPS-filtrering.

Når rutning og filtrering er slået til for en app, bliver ikonerne nedenfor hver app grønne.

Indstillingerne kan bibeholdes som de er, filtrering og rutning kan slås fra eller finjusteres manuelt for hver app. Der er ligeledes adgang til app-statistik.

![App-statistik \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Sådan fungerer app-filtrering og rutning i AdGuard til Windows v8.0

AdGuard til Windows v8.0 introducerer opdateret logik til håndtering af apps. Det bidrager til at forhindre kompatibilitetsproblemer, mens der stadig er kontrol over, hvilke apps som filtreres. Lad os gennemgå, hvordan det fungerer.

Der er "kompatible" og "inkompatible" apps. Nogle fungerer korrekt, når de filtreres, mens andre muligvis ikke fungerer, når deres trafik behandles af AdGuard. Dette kan skyldes funktioner såsom HTTPS-opsnapning eller proxying.

For at undgå app-fejlfunktioner fra starten, filtrerer AdGuard ikke alt vilkårligt. Den refererer i stedet til en kompatibilitetsliste — en samling apps kendt for at fungere korrekt med filtrering aktiveret.

:::note

"Ikke atl filtrere" betyder ikke "intet filtreres." Betroede apps (såsom webbrowsere) filtreres altid.

:::

Hver app har tre uafhængige behandlingslag: Trafikrutning igennem AdGuard, filtrering (blokering af annoncer og trackere) og HTTPS-filtrering (opfangning af krypteret trafik).

Disse bestemmes af tre kilder:

- _Kompatibilitetsliste_

  Apps testet af vores team og er bekræftet fungerende korrekt med filtrering.
  Denne liste opdateres baseret på interne tests og brugerrapporter i det [dedikerede repo til registrering af AdGuard-kompatibilitetsproblemer](https://github.com/AdguardTeam/CompatibilityIssues).

- _Undtagelseslister_

  Separate lister til rutning, filtrering og HTTPS-filtrering. Disse omfatter apps kendt for at fejlfungere ved anvendelse af filtrering.

- _Filtrere ukendte apps_

  Denne indstilling definerer, hvordan alle øvrige apps (som ikke er på nogen liste) håndteres.

:::info

Kompatibilitetslisterne opdateres løbende — og brugeren kan hjælpe med at forbedre dem. Bemærkers det, at en app ikke fungerer korrekt med filtrering aktiveret, **anmeld dette på [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** eller kontakt supporten via appen. Brugerfeedback bidrager til at forbedre AdGuard for alle.

:::

## Filtrere ukendte apps

![Filtrere ukendte apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

Indstillingen _Filtrere ukendte apps_ er aktiveret som standard og bestemmer, hvordan AdGuard håndterer nye apps, som endnu ikke findes på kompatibilitets- eller undtagelseslisterne

Når aktiveret, rutes app-trafik igennem AdGuard, almindelig filtrering anvendes, og **HTTPS-filtrering aktiveres IKKE automatisk**. Dette er tilsigtet: HTTPS-opfangning er den mest følsomme del af trafikbehandlingen og kan påvirke app-adfærden.

Når deaktiveret, behandles nye apps ikke af AdGuard — rutning af dem vil skulle opsættes manuelt.

Her er en hurtig oversigt over forskellige app-kategoriers adfærd relateret til denne indstilling:

| App-kategori                                                                              | Slå til (standard)                         | Slå fra                                            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| Kompatibel (f.eks. webbrowsere)        | · Rutning ✅ <br /> · Filtrering ✅ <br /> · HTTPS-filtrering ✅ | Samme adfærd — afhænger ikke af til/fra-knappen    |
| Inkompatibel (fra undtagelseslister, filtrering kan medføre problemer) | · Rutning ❌ <br /> · Filtrering ❌ <br /> · HTTPS-filtrering ❌ | Samme adfærd — afhænger ikke af til/fra-knappen    |
| Øvrige / (nyligt detekterede, ukendte, ikke på lister)                 | · Rutning ✅ <br /> · Filtrering ✅ <br /> · HTTPS-filtrering ❌ | Ikke rutet igennem AdGuard, skal aktiveres manuelt |

:::info Hvad der sker ved nulstilling

Klikkes på **Nulstil til standard**, vil to ting ske:

1. Alle app-specifikke tilladelser ryddes (sættes til »ikke opsat«).
2. Prædefinerede regler anvendes på kendte, sikre apps (såsom webbrowsere), herunder HTTPS-filtrering.

:::
