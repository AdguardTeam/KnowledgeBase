---
title: Flertalsformer
sidebar_position: 4
---


Der er stor forskel på verdens sprog. En af disse disse er brugen af flertalsformer, der kan forårsage enorme vanskeligheder, når det kommer til lokalisering.

Vi anbefaler på det kraftigste, at denne artikel læses grundigt for mere viden om flertalsformer og brugen heraf i AdGuard-oversættelser.

## Hvad betyder flertalsformer? {#plurals}

Navneord på forskellige sprog kan have flere flertalsformer. Deres brug afhænger af antallet af ting, det drejer sig om.

F.eks. har engelske ord to ordformer, når det drejer sig om noget i ental, såsom *'one star'* og i flertal – *'two stars'*. Det er lige meget, om det drejer sig om fem, seksogtyve eller endda fem hundrede og to og tredive stjerner – det afsluttende 's' forbliver det samme. Nogle sprog kan dog kun indeholde én eller mange flertalsformer.

Modsat engelsk, har polsk tre flertalsformer for navneord. Én af dem bruges, når noget omtales i ental, en anden form bruges til flertal, men med tal, som ender på 2-4, undtagen 12-14, og den tredje form – for ord med andre tal foran sig.

Lad os tage et kig på dette billede. Her ses de talgrupper, som bestemmer en ordform, når de står foran det.

![Polsk](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Lad os trække en lille parallel mellem engelsk og polsk for bedre forståelse:

      Engelske version:                                                 Polsk ækvivalent:
    
      1. form — It takes one hour.                                     1. form — Zajmuje to godzinę.
      2. form — It takes two hours.                                    2. form — Zajmuje to dwie godziny.
      3. form — It takes five hours.                                   3. form — Zajmuje to pięć godzin.

Det er nu klart, at det polske *'godzinę'* (time) har tre forskellige former, hvorimod det engelske ord kun ændrer sin form to gange med de givne tal.

Udover polsk er der en mange andre sprog, som har tre flertalsformer, eller endda flere, såsom russisk, serbisk, slovakisk, tjekkisk mv. De følger dog ikke alle den samme regel. Derfor er det så vigtigt at vide, hvor mange flertalsformer et sprog indeholder, samt hvordan de anvendes korrekt.

## Hvor kan det findes info om antallet af flertalsformer? {#where-to-learn}

Ved en oversættelse, der kræver brug af flertal, står det måske ikke med det samme klart, hvor mange ordformer sproget har.

Her er nogle informationskilder, som kan bruges.

[Localization Guide](https://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) indeholder en lang liste af sprog. Antallet af flertalsformer for forskellige sprog vises på denne måde: `nplurals=2`, `nplurals=4` mv. Tallet efter lighedstegnet, `=`, angiver antallet af flertalsformer i det pågældende sprog.

Oplysninger om flertalsformer kan også findes i [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). CLDR-flertalsreglerne angiver en ekstra ordform for decimaltal (1,5; 2,3; 100,1…), men de benyttes ikke i AdGuard-oversættelser.

## Flertalsformer i AdGuard-oversættelser {#translations}

Det skal indledningsvis nævnes, at ikke alle AdGuard-oversættelser kræver brug af flertalsformer.

Pt. har vi 4 typer strenge på Crowdin, som involverer flertalsformer.

Lad os se nærmere på dem.

### 1. Sætninger med strengnøgler, som ender på `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

De fleste af dem er repræsenteret i projektet `AdGuard til Windows` og består kun af ét eller to ord:

- `days;`
- `extensions;`
- `hours`

Vær opmærksom på strengnøglerne for sådanne sætninger samt på feltet "Kontekst", hvor der kan ses vigtige bemærkninger om flertalsformer. Strengnøglerne kan indeholde ordformerne `Ental`, `Dobbelt`, `Flertal` (eks.`FormatDayDeclensionDual`). I så tilfælde skal den passende flertalsform lades stå, som den er angivet i nøglen.

### 2. Strenge med navneord i ental og flertal adskilt af kommaer {#2type}

Denne slags strenge optræder hyppigst i projektet `AdGuard til Android`.

Tag et kig på eksemplet:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Er der 3 flertalsformer af navneord i et sprog (såsom på polsk), skal alle flertalsformerne angives adskilt af kommaer.

`hour, hours — godzinę, godziny, godzin`

Har et navneord kun 2 former, er det ikke nødvendigt at skrive den samme form to gange (*typisk kun for denne type strenge med flertalsformer!*). Det vil dog ikke være en fejl, såfremt formen gentages to gange.

### 3. Strenge, som bruger det Crowdin-udviklede mønster {#3type}

Dette er det mest brugervenlige system til oversættelse af strenge med flertal.

Crowdin foreslår brugerne, at de oversætter en vis mængde af sætninger med forskellige flertalsformer.

Har et sprog kun én flertalsform, vil der kun ses én sætning, der skal oversættes. Ved tre eller flere former, viser Crowdin strengen opdelt i yderligere to eller tre strenge til oversættelse.

F.eks.:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Vær opmærksom, når disse strenge oversættes og godkendes. Ved man ikke, hvad "Other"-feltet betyder, så indsæt blot den samme form, som brugt i "Many"-feltet. Oversættelserne i felterne "Many" og "Other" kan være identiske.

### 4. Strenge med skabeloner adskilt af et lodret stregtegn {#4type}

Dette er den mest komplicerede type AdGuard-strenge, som for det meste bruges i projektet `AdGuard Websites`.

Vær især opmærksom på det lodrette stregtegn mellem sætningerne og **%count%**-variabler i originale sætninger – disse vil bidrage til at identificere sætninger, hvori oversættelser kræver brug af flertalsformer.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Lad os nu antage, at en sådan streng skal behandles: `Standard license for %count% computer | Standard license for %count% computers`.

Hvilken viden kræves for at oversætte strengen korrekt?

Lad os kalde sætningerne opdelt med et lodret stregtegn **for "skabeloner"**, da de faktisk fungerer som skabeloner for sætninger med forskellige antal.

For at komme tilbage til eksemplet, da engelske kun omfatter to former, skal der være to skabeloner, henholdsvis:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

hvor **skabelon 1** er "Standard license for *%count%* computer",

og **skabelon 2** er "Standard license for *%count%* computers"

En anden vigtig ting er **%count%**-variabler, som jf. sædvanen findes før de ord, de definerer. I stedet for **%count%** vises forskellige tal afhængigt af skabelonvalget.

I tilfælde af et sprog med f.eks. tre flertalsformer, skal der være tre skabeloner med to lodrette stregtegn imellem.

Oversættes f.eks. ovennævnte sætning til slovakisk, der ifølge reglen jf. [Lokaliseringsguiden](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) har tre ordformer, vil den korrekte oversættelse se således ud:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovakisk](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

I dette tilfælde ses tre skabeloner indeholdende tre former af ordet *"počítač"* (computer) på slovakisk.

*Ignoreres én af formerne, og bruges der kun to skabeloner for slovakisk i stedet for tre, vil systemet ikke kunne vælge en passende skabelon for visse tal*, og konsekvensen vil være grammatikfejl i sætninger, som f.eks. på engelsk: *Standardlicens til 5 computer*.
> **Brug altid så mange former, som findes på det pågældende sprog, selv når selve ordet har færre ordformer.**

F.eks. har det serbiske ord *'računar'* (computer) kun to former. På serbisk findes der imidlertid 3 flertalsformer.

![Serbisk](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Derfor bør oversættelsen fra engelsk til serbisk være:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Selvom det er indlysende, at de sidste to skabeloner er ens, er det meget vigtigt at følge reglen: **Skabelonantallet skal afspejle antallet af flertalsformer for det aktuelle sprog!**(typisk for denne type strenge med flertal).

## Kort sammendrag {#summary}

Ved oversættelse af AdGuard-projekter skal der udvises stor opmærksom på sætninger, som kræver brug af flertalsformer.

Mens de første tre typer af sådanne strenge er forholdsvis lette at håndtere, kræver den fjerde type større bevågenhed.

Og igen: Ses en original sætning med to vigtige elementer: **det lodrette stregtegn** og **%count%**-variabler, skal flg. gøres:

- Henvis til flertalsreglen for et sprog, der oversættes til;

Skabelonantallet skal matche antallet af flertalsformer i sproget, selv i tilfælde, hvor visse individuelle ord måtte have færre former. To flertalsformer — to skabeloner i oversættelser; fem flertalsformer — fem skabeloner mv.

- Glem ikke at bruge et lodret stregtegn mellem skabeloner, som det fremgår i originalstrengen;

- Oversæt, udfyld eller slet ikke **%count%**-variabler.

Ved at følge disse enkle regler kan AdGuard-udviklerne undgå en masse unødvendige komplikationer under lokaliseringsprocessen.
