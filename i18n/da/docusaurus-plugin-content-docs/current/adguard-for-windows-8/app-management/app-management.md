---
title: App management
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

In the _App management_ section, you can manage routing and filtering settings for all apps installed on your device.

Once AdGuard detects that an app has gone online, it is automatically added to _App management_, and its traffic is routed through AdGuard.

By default, AdGuard filters all traffic, but you can choose what to exclude.

AdGuard also filters HTTPS traffic, as most websites today use HTTPS. This is especially important for blocking ads on sites like youtube.com, facebook.com, and x.com, where it is impossible to remove ads without HTTPS filtering.

When routing and filtering are enabled for an app, the icons below each app will appear green.

You can leave the settings as they are, disable both filtering and routing, or fine-tune them manually for each app. You can also access the app’s stats.

![App stats](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Sådan fungerer app-filtrering og rutning i AdGuard til Windows v8.0

AdGuard til Windows v8.0 introducerer opdateret logik til håndtering af apps. Det bidrager til at forhindre kompatibilitetsproblemer, mens der stadig er kontrol over, hvilke apps som filtreres. Lad os gennemgå, hvordan det fungerer.

Der er "uproblematisk" og "problematiske" apps. Some work correctly when filtered, while others may not function when their traffic is processed by AdGuard. This can be caused by features like HTTPS interception or proxying.

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

| App-kategori                                                                                           | Slå til (standard)                         | Slå fra                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | -------------------------------------------------- |
| Kompatibel eller uproblematisk (f.eks. webbrowsere) | · Rutning ✅ <br /> · Filtrering ✅ <br /> · HTTPS-filtrering ✅ | Samme adfærd — afhænger ikke af til/fra-knappen    |
| Problematisk (fra undtagelseslister, filtrering kan medføre problemer)              | · Rutning ❌ <br /> · Filtrering ❌ <br /> · HTTPS-filtrering ❌ | Samme adfærd — afhænger ikke af til/fra-knappen    |
| Øvrige / (nyligt detekterede, ukendte, ikke på lister)                              | · Rutning ✅ <br /> · Filtrering ✅ <br /> · HTTPS-filtrering ❌ | Ikke rutet igennem AdGuard, skal aktiveres manuelt |

:::info Hvad der sker ved nulstilling

Klikkes på **Nulstil til standard**, vil to ting ske:

1. Alle app-specifikke tilladelser ryddes (sættes til »ikke opsat«).
2. Prædefinerede regler anvendes på kendte, sikre apps (såsom webbrowsere), herunder HTTPS-filtrering.

:::
