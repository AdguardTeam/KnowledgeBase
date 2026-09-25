---
title: AdGuard Browser Extension MV3
sidebar_position: 5
---

[Chrome har fjernet alle resterende Manifest V2-udvidelser (MV2) fra Chrome Webshop](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html), og andre Chromium-baserede webbrowseren, bl.a. Microsoft Edge og Opera, overgår ligeledes til MV3. Brugere af disse webbrowsere behøver en MV3-udvidelse kompatibel med det nye API Manifest V3. Vores tanker om dette emne drøftes udførligt på [vores blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Vores MV3-udvidelse blokerer effektivt annoncer og trackere, mens den ubemærket håndterer sociale widgets, bannere og videoreklamer. De fleste brugere vil ikke bemærke nogen operationelle forskelle, men der er visse begrænsninger og ændringer at være opmærksom på.

## Her findes vores udvidelser

**MV3-versionen** er vores primære Chrome-udvidelse og er tilgængelig i
[Chrome Webshop](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg). MV3-builds udgives også på [GitHub Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) som `chrome-mv3.zip`.

**MV3-beta** er tilgængelig i [Chrome Webshop](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

**AdGuard Ad Blocker MV2** er fjernet fra Chrome Webshop sammen med alle
øvrige MV2-udvidelser. MV2 fortsætter med at fungere i Firefox og i Chromium-baserede webbrowsere, som har bibeholdt
understøttelsen af den — se [Sådan fortsættes med at bruge AdGuard, efter Chrome har fjernet MV2](/adguard-browser-extension/solving-problems/mv2-removal-in-chrome/).

## Vigtigste ændringer i funktioner og indstillinger

- **Filteropdatinger.** Indstillingerne _Autoopdatér filtre_ og _Tjek filteropdateringer_ er ikke tilgængelige
  fra fanen _Filtre_: regler, som er indbygget i udvidelsen, kan kun opdateres sammen med en
  ny udvidelsesversion efter gennemgang af shoppen. Hold automatiske udvidelsesopdateinger aktiveret i
  webbrowseren.

  Tilpasserede filtr tilføjet efter URL opdateres uafhængigt af udvidelsesopdateringer.

- **AdGuard Quick Fixes-filter.** Da indbyggede regler ikke kan opdateres pr. anmodning, har udvidelsen
  filteret _AdGuard Quick Fixes_ indbygget. Den bruger dynamiske regler til at reagere på nyligt introducerede annoncer og
  defekte websteder mellem udgivelser, så hold den aktiveret.

- **Filtreringslog**

  ![Filtreringslog \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Grundet DNR-restriktioner kan den præcise regel, der virkede, ikke vises, men vi vil angive en "omtrentlig regel, der blev udløst" baseret på vores motor. For præcise oplysninger vil den "udpakkede" form af udvidelsen skulle installeres i webbrowseren. Detaljeret vejledning til, hvordan dette gøres, kan findes i en [separat artikel](/adguard-browser-extension/solving-problems/debug-rules/).

- _Sporingsbeskyttelse_ (tidligere kendt som _Stealth mode_)

  ![Sporingsbeskyttelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/tracking_protection_mv3.png)

  Der er intet _Cookies_-afsnit sammen med _Selvdestruktion af førstepartscookies_ og _Selvdestruktion af tredjepartscookies_, da TTL for cookies ikke kan indstilles med deklarative regler.

- _Phishing- og malwarebeskyttelse_ er ikke længere tilgængelig i de generelle indstillinger. For beskyttelse mod ondsindede websteder og svindel, aktivér de relevante _Sikkerhedsfiltre_ via fanen _Filtre_.

  ![Sikkerhed \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/security_filters.png)

## Begrænsninger

### Maks. antal regler og filtre

Manifest V3 pålægger kvoter for statiske og regex-regler pr. udvidelse. Brugere kan modtage notifikationer, når disse kvoter overskrides.

![Regelkvoter \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![For mange udvidelser \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Grundlæggende opdeler Manifest V3 regler i statisk (indbygget) og dynamisk med strikse kvoter pålagt.

**Statiske regler:** Minimum **30.000** regler pr. udvidelse, med en kumulativ kvotegrænse på **330.000** for alle udvidelser installeret af en enkelt bruger.

For regex-regler er kvotegrænsen sat til **1.000 pr. udvidelse**.

Det maksimale antal samtidigt aktiverede filtre er **50**.

**Dynamiske regler:** En striks kvotegrænse på **5.000** regler er pålagt, hvilket omfattende maks. 1.000 regex-regler.

Overskrides denne kvote, vil kun **5.000 konverterede regler** blive anvendt i flg. rækkefølge: Først Hvidliste, dernæst Brugerregler og endelig Tilpassede filtre.

> **Konverterede regler** er regler, som er blevet transformeret
> til \[DNR-format] med den [deklarative konverter][github-declarative-converter].
> Under denne konverteringsproces kan nogle regler overskrive andre (`$badfilter`), nogle kan blive kombineret (`$removeparam`), hvilket resulterer i en liste af regler med en lidt anden rækkefølge.
>
> Fra denne liste over konverterede regler vil kun 5.000 regler blive anvendt. De øvrige vises i editoren, men de anvendes ikke.

Sådan konverteres en regel med en basismodifikator til en deklarativ regel:

```adblock
||example.org^$script,third-party,domain=example.com
```

konverteres til

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Flere eksempler kan findes på [GitHub][github-declarative-converter-examples].

### Netværksregelmodifikatorer

Netværksregler har begrænsninger: Nogle regeltyper kan ikke implementeres i MV3 eller kan kun implementeres med restriktioner.

Flere detaljer om begrænsningerne kan findes på [GitHub][github-declarative-converter].
For yderligere oplysninger om modifikatorer, se vores [Vidensbase](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/dnr-converter/src/examples/README.md#basic-examples
