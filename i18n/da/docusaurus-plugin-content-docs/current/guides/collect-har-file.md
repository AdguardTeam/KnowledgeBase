---
title: Sådan genereres en HAR-fil
sidebar_position: 1
---

HAR-filer hjælper de tekniske supportteams med at fejlfinde komplekse problemer. Chrome eller Firefox anbefales til oprettelsen af disse filer. Dog har IE 11, Edge og Safari også `.har` filgenererings- og eksportmuligheder.

## Chrome {#chrome}

Følg disse trin for at oprette en HAR-fil i Chrome:

1. Gå til den URL, hvor problemet opstår. Reproducér ikke problematikken endnu.

1. Åbn **Udviklerværktøjer**:

    - Fra menuen: **Menu → Flere værktøjer → Udviklerværktøjer**.
    - Tastatur: **Ctrl+Shift+C** eller **Ctrl+Alt+I**, eller **⌥+⌘+I for Mac**.

1. Klik på **fanen Netværk**.

1. Find den runde knap øverst til venstre på fanen Netværk, og sørg for, at den er i rød optagetilstand. Er den grå, klik på den for at gøre den rød og starte optagelsen.

1. Brug knappen **Ryd** (cirkelknappen med en streg igennem ved siden af optageknappen) for at rydde al tidligere aktivitet.

1. Markér afkrydsningsfeltet **Bevar log** på fanen Netværk.

1. Markér afkrydsningsfeltet **Deaktivér cache**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Gentag de trin, som førte til problematikken.

1. Gem sessionen som en .har-fil ved at højreklikke på gitteret og vælge **Gem som HAR med indhold**.

1. Indsend den til AdGuard-supporten (support@adguard.com) inkl. detaljeret problemforklaring. Understøttende skærmfotos kan også være nyttige.

## Edge {#edge}

1. Gå til den URL, hvor problemet opstår. Reproducér ikke problematikken endnu.

1. Åbn **Udviklerværktøjer**:

    - Fra menuen: **Menu → Flere værktøjer → Udviklerværktøjer**.
    - Tastatur: **Ctrl+Shift+C** eller **Ctrl+Alt+I**, eller **⌥+⌘+I for Mac**.

1. Klik på **fanen Netværk**.

1. Find den runde knap øverst til venstre på fanen Netværk, og sørg for, at den er i rød optagetilstand. Er den grå, klik på den for at gøre den rød og starte optagelsen.

1. Brug knappen **Ryd** (cirkelknappen med en streg igennem ved siden af optageknappen) for at rydde al tidligere aktivitet.

1. Markér afkrydsningsfeltet **Bevar log** på fanen Netværk.

1. Markér afkrydsningsfeltet **Deaktivér cache**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Gentag de trin, som førte til problematikken.

1. Gem sessionen som en .har-fil ved at højreklikke på gitteret og vælge **Gem som HAR med indhold**.

1. Indsend den til AdGuard-supporten (support@adguard.com) inkl. detaljeret problemforklaring. Understøttende skærmfotos kan også være nyttige.

## Firefox {#firefox}

Følg disse trin for at oprette en HAR-fil i Firefox:

1. Gå til den URL, hvor problemet opstår. Reproducér ikke problematikken endnu.

1. Åbn Udviklerværktøjer i **Netværkstilstand**:

    - Fra menuen: **Menu → Webudvikler → Netværk**.
    - Tastatur: **Ctrl+Shift+C** eller **⌥+⌘+E (Mac)**.

1. Bemærk knappen **Afspil/Pause** øverst til venstre på fanen Netværk.

    - Knappen skal være i afspilningstilstand.

1. Vises der aktuelt oplysninger i gitteret, ryd da disse ved at klikke på knappen **Tøm papirkurv** ved siden af knappen Afspil/Pause.

1. Markér afkrydsningsfeltet **Vedvarende log** på fanen Netværk.

1. Markér afkrydsningsfeltet **Deaktivér cache**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Gentag de trin, som førte til problematikken.

1. Gem sessionen som en .har-fil ved at højreklikke på gitteret og vælge **Gem alt som HAR**.

1. Indsend den til AdGuard-supporten (support@adguard.com) inkl. detaljeret problemforklaring. Understøttende skærmfotos kan også være nyttige.

## Internet Explorer 11 {#ie11}

Følg disse trin for at oprette en HAR-fil i Internet Explorer 11:

1. Gå til den URL, hvor problemet opstår. Reproducér ikke problematikken endnu.

1. Åbn Udviklerværktøjer i **Netværkstilstand**:

    - Fra tandhjulsmenuen Værktøjer: **Udviklerværktøjer** → **fanen Netværk**.
    - Tastatur: **F12 → fanen Netværk**.

1. Bemærk profileringssessionens start- og stopknapper, **Afspil** og **Stop**, øverst til venstre på fanen Netværk.

    - Afspil-knappen vil være grå under optagelse, og Stop-knappen vil være rød. Sæt i **Afspil-tilstand**.

1. Ryd alle sessionsoplysninger vist i nederste gitter med knappen **Ryd session** på fanen **Netværk**. Hold markøren over ikoner for at se navne.

    - Knappen **Ryd session** er et trelinjersikon med et X på.

1. Markér afkrydsningsfeltet **Deaktivér cache**.

1. Gentag de trin, som førte til problemet.

1. Gem sessionen som en .har-fil ved at klikke på knappen **Gem til disk** (Eksportér som HAR) på fanen **Netværk**.

1. Indsend den til AdGuard-supporten (support@adguard.com) inkl. detaljeret problemforklaring. Understøttende skærmfotos kan også være nyttige.

## Safari {#safari}

Følg disse trin for at oprette en HAR-fil i Safari:

1. Kig efter **Udvikler**-menuen på Safari-menubjælken øverst på skærmen.

    - Ses den ikke, kan den slås til ved at gå til **Safari→ Indstillinger → Avanceret**.
    - Markér afkrydsningsfeltet nederst ved siden af **Vis Udvikler-menu på menubjælken**.

1. Gå til den URL, hvor problemet opstår. Reproducér ikke problematikken endnu.

1. Åbn fanen **Netværk** i Web Inspector:

    - Fra menuen: **Udvikler → Vis Web Inspector → Netværk**.
    - Tastatur: **">⌥+⌘+I → Netværk**

1. Markér afkrydsningsfeltet **Bevar log** til venstre på fanebladet Netværk i menuen **Øvrige filterindstillinger…**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Ryd aktuelle Netværkselementer ved at klikke på ikonet **Slet affald** yderst til højre på fanerne Netværk.

    - Tastatur: **⌘+K**

1. Markér afkrydsningsfeltet **Deaktivér cache**.

1. Reproducér de trin, som fører til problemet.

1. Gem sessionen som en .har-fil ved at klikke på ikonet **Eksport** ved siden af **Tøm papirkurv**.

1. Indsend den til AdGuard-supporten (support@adguard.com) inkl. detaljeret problemforklaring. Understøttende skærmfotos kan også være nyttige.

## Android {#android}

Følg disse trin for at oprette HAR-filer:

1. Åbn Adguard og gå til **Indstillinger**.

1. Vælg menupunktet **Avanceret**.

1. Vælg **Lavniveauindstillinger**

1. Aktivér `pref.har.capture` (hvorefter beskyttelsen skal genstartes).

1. Genskab dernæst problemet — åbn appen, udfør de relevante handlinger for at få annoncen vist.

1. Slå nu `pref.har.capture` fra igen.

1. Gå tilbage og tryk på **Eksportér logger og systeminfo** → **Gem**.

## Windows {#windows}

1. Åbn **Indstillinger*** → **Generelle indstillinger** → **Avancerede indstillinger** og rul ned.

1. Markér afkrydsningsfeltet **Aktivér HAR-skrivning**.

1. Genskab problematikken.

1. Gå til **Generelle indstillinger** → Klik på **Eksportér logfiler** → **Gem**.

1. Deaktivér HAR-skrivning ved at afmarkere det relevante afkrydsningsfelt.
