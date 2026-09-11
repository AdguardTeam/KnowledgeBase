---
title: Sporingsbeskyttelse
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Modulet Sporingsbeskyttelse kan tilgås ved tryk på fanen _Beskyttelse_ (2. ikon til venstre nederst på skærmen) og dernæst vælge _Sporingsbeskyttelse_.

_Sporingsbeskyttelse_ (tidligere Stealth Mode) forhindrer websteder i at indsamle brugeroplysninger, såsom IP-adresser, oplysninger om webbrowseren og operativsystemet, skærmopløsning, samt den side brugeren kom eller blev omdirigeret fra. Den kan også blokere cookies brugt af websteder til at markere webbrowseren og gemme personlige indstillinger, brugerpræferencer eller genkende brugeren ved næste besøg.

![Sporingsbeskyttelse \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Sporingsbeskyttelse_ har tre præopsatte niveauer af fortrolighedsbeskyttelse, (_Standard_, _Høj_ og _Ekstrem_) og et brugerdefineret niveau, (_Tilpasset_).

Her er de aktive funktioner på de præopsatte niveauer:

1. **Standard**

   a. _Blokér trackere_. Denne funktion bruger _AdGuard Sporingsbeskyttelse-filteret_ til at beskytte mod onlinetællere og webanalyseværktøjer

   b. _Bed websteder om at undlade sporing_. Denne funktion sender signalerne [Global Privacy Control](https://globalprivacycontrol.org/) og [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) til de besøgte websteder og beder web-apps deaktivere brugeraktivitetssporing

   c. _Fjern X-Client-Data-header_. Denne funktion forhindrer Google Chrome i at sende sine versions- og ændringsinfo til Google-domæner (herunder DoubleClick og Google Analytics)

2. **Høj**

   a. _Blokér trackere_. Denne funktion bruger _AdGuard Sporingsbeskyttelse-filteret_ til at beskytte mod onlinetællere og webanalyseværktøjer

   b. _Fjern sporingsparametre fra URL'er_. Denne funktion bruger _AdGuard URL Tracking-filteret_ til at fjerne sporingsparametre, såsom `utm_*` og `fb_ref`, fra side-URL'er

   c. _Skjul søgeforespørgsler_. Denne funktion skjuler søgeforespørgsler for websteder besøgt fra en søgemaskine

   d. _Bed websteder om at undlade sporing_. Denne funktion sender signalerne [Global Privacy Control](https://globalprivacycontrol.org/) og [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) til de besøgte websteder og beder web-apps deaktivere brugeraktivitetssporing

   e. _Slet tredjepartscookies_. Denne funktion begrænser levetiden for tredjepartscookies til 180 minutter og forhindrer annoncører i at spore brugeradfærd på tværs af flere sider

   :::caution

   Denne funktion sletter alle tredjepartscookies efter deres tvungne udløb. Dette omfatter brugerens logins gennem sociale netværk eller andre tredjepartstjenester. Brugeren kan periodisk skulle logge ind på nogle websteder igen eller opleve andre cookie-relaterede problemer. Brug beskyttelsesniveauet _Standard_ til kun at blokere sporingscookies.

   :::

   f. _Fjern X-Client-Data-header_. Denne funktion forhindrer Google Chrome i at sende sine versions- og ændringsinfo til Google-domæner (herunder DoubleClick og Google Analytics)

3. **Ekstrem** (tidligere kaldet _Ultimate_)

   a. _Blokér trackere_. Denne funktion bruger _AdGuard Sporingsbeskyttelse-filteret_ til at beskytte mod onlinetællere og webanalyseværktøjer

   b. _Fjern sporingsparametre fra URL'er_. Denne funktion bruger _AdGuard URL Tracking-filteret_ til at fjerne sporingsparametre, såsom `utm_*` og `fb_ref`, fra side-URL'er

   c. _Skjul søgeforespørgsler_. Denne funktion skjuler søgeforespørgsler for websteder besøgt fra en søgemaskine

   d. _Bed websteder om at undlade sporing_. Denne funktion sender signalerne [Global Privacy Control](https://globalprivacycontrol.org/) og [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) til de besøgte websteder og beder web-apps deaktivere brugeraktivitetssporing

   e. _Slet tredjepartscookies_. Denne funktion begrænser levetiden for tredjepartscookies til 180 minutter og forhindrer annoncører i at spore brugeradfærd på tværs af flere sider

   :::caution

   Denne funktion sletter alle tredjepartscookies efter deres tvungne udløb. Dette omfatter brugerens logins gennem sociale netværk eller andre tredjepartstjenester. Brugeren kan periodisk skulle logge ind på nogle websteder igen eller opleve andre cookie-relaterede problemer. Brug beskyttelsesniveauet _Standard_ til kun at blokere sporingscookies.

   :::

   f. _Blokér WebRTC_. Denne funktion blokerer WebRTC, der kan lække den reelle IP-adresse selv ved brug af proxy eller VPN. Nogle messengers, streamingplatforme eller spil kan muligvis ophøre med at fungere korrekt

   g. _Blokér Push-API_. Denne funktion blokerer push-notifikationer fra websteder

   h. _Blokér Lokations-API_. Denne funktion forhindrer webbrowsere i at tilgå brugerens GPS-data og bestemme placeringen

   i. _Skjul Referer fra tredjeparter_. Denne funktion forhindrer tredjeparter i at vide, hvilke websteder, som besøges. Den skjuler HTTP-headeren indeholdende URL'en på den indledende side og erstatter den med en standard eller en egen tilpasset URL, der kan opsættes

   j. _Skjul Brugeragent_. Denne indstilling fjerner identificerende oplysninger fra Brugeragent (User-Agent) headeren, som normalt omfatter webbrowsernavnet og -versionen, operativsystemet og sprogindstillingerne

   k. _Fjern X-Client-Data-header_. Denne funktion forhindrer Google Chrome i at sende sine versions- og ændringsinfo til Google-domæner (herunder DoubleClick og Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Hver indstilling har en beskrivelse, der oplyser mere om dens formål. [Læs mere om forskellige _Sporingsbeskyttelse_-indstillinger](/general/stealth-mode), og anvend dem med forsigtighed, da nogle kan forstyrre funktionaliteten af websteder og webbrowserudvidelser.
