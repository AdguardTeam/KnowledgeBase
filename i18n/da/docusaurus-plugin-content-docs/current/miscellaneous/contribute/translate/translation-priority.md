---
title: Sådan prioriteres oversættelser af Crowdin-filer
sidebar_position: 5
---

Der findes syv AdGuard-projekter på Crowdin:

- [AdGuard Applications](https://crowdin.com/project/adguard-applications)
- [AdGuard Websites](https://crowdin.com/project/adguard-websites)
- [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base)
- [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base)
- [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases)
- AdGuard Mail Knowledge Base
- AdGuard Ordliste

De første fem oversættes aktivt. *AdGuard Mail Knowledge Base* er endnu ikke tilgængelig for oversættelse. *AdGuard Ordliste* bruges kun til at gemme og håndtere terminologi. Ønskes udtryk tilføjet eller redigeret, kan dette gøres direkte i editorens arbejdsområde.

![Tilføjelse af udtryk *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Projektet Applications

Der er ingen strikse retningslinjer for, hvor der skal begyndes i projektet *AdGuard Applications*. Vælg blot et hvilket som helst ønsket produkt.

Der er blot et par ting, vi gerne vil nævne:

- En app bliver først tilgængelig på et sprog, efter **alle** dens strenge er oversat på Crowdin.
- Oversæt app-butiksbeskrivelser efter selve appen. En beskrivelse uden et oversat produkt er ikke nyttig.
- Nogle filer og mapper kan være forældede — f.eks. `adguard-vpn-for-desktop` og `adguard-vpn-for-ios-ARCHIVED`. Disse bør ikke oversættes.

## Projektet Websites

Det er dog anderledes i projektet *AdGuard Websites*. Sprog kan føjes til webstedet, selv hvis et komplet sæt oversættelser ikke er tilgængeligt. Dette afhænger dog af, hvilke filer, som allerede er oversat. Vi anbefaler derfor at starte med de vigtigste filer, som fremgår nedenfor:

[AdGuard Ad Blocker-websted](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN-websted](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS-websted](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Tilføjelse af nye strenge samt opdatering af eksisterende i disse filer kræver særlig opmærksomhed fra projektoversættere og -korrekturlæsere.

Ud over webstederne, er der en fil til oversættelse af [transaktionsmails](https://crowdin.com/project/adguard-websites/en#/emails) i *AdGuard Websites*-projektet. Nyligt tilføjede strenge i denne fil har også en høj oversættelsesprioritet.
