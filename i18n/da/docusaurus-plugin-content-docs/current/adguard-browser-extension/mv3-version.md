---
title: AdGuard Browser Extension til Chrome MV3
sidebar_position: 5
---

Da MV2-udvidelser er under udfasning i Chrome Webshop, skal Chrome-brugere muligvis skifte til MV3-udvidelser, som er kompatible med Chromes nye API Manifest V3. Vores tanker om dette emne er udførligt drøftet på [vores blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Vores MV3-udvidelse blokerer effektivt annoncer og trackere, mens den ubemærket håndterer sociale widgets, bannere og videoreklamer. De fleste brugere vil ikke bemærke nogen operationelle forskelle, men der er visse begrænsninger og ændringer at være opmærksom på.

## Her findes vores udvidelser

**MV3-versionen** har erstattet vores ældre udvidelse i [Chrome Webshop](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

**Betaversionen af MV3** vil stadig være tilgængelig i [Chrome Webshop](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

Den ældre betaudvidelse omdøbes til [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) og vil være understøttet, indtil den udfases af Google.

## Vigtigste ændringer i funktioner og indstillinger

- **Ingen automatiske og manuelle filteropdateringer.** Indstillingerne _Auto-opdatér filtre_ og _Tjek filteropdatering_ er ikke længere tilgængelige via fanen _Filtre_. Da nogle af reglerne nu anvendes i DNR-form, kan filtre ikke opdateres pr. anmodning, men kun gennem hele processen med at opdatere udvidelsen sammen med gennemgangen i butikkerne.

- **Filtreringslog**

  ![Filtreringslog \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/filtering_log.png)

  Grundet DNR-restriktioner kan den præcise regel, der virkede, ikke vises, men vi vil angive en "omtrentlig regel, der blev udløst" baseret på vores motor. For præcise oplysninger vil den "udpakkede" version af udvidelsen skulle installeres i webbrowser. Detaljeret vejledning til, hvordan dette gøres, kan findes i en [separat artikel](/adguard-browser-extension/solving-problems/debug-rules/).

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
