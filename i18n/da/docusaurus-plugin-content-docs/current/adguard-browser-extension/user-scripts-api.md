---
title: Brugerscripts-API
sidebar_position: 8
---

:::info

Denne artikel omhandler AdGuard Browser Extension, der kun beskytter webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://adguard.com/download.html?auto=true).

:::

Når et tilpasset filter eller en brugerregel tilføjes, vises en anmodning om at aktivere Udviklertilstand for at bruge disse funktioner i udvidelsen.

![Notifikation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/userscripts_api_restrictions.png)

Fra og med version 5.2 bruger AdGuard Browser Extension User Scripts-API'en. Chrome kræver denne nye API for at følge bedste praksis for brugersikkerhed.

## Hvad er User Scripts-API'en?

User Scripts-API'en er et værktøj, der tillader udvidelser at køre tilpassede JavaScript-scripts på websider. Disse bruges ofte til at ændre eller forbedre websteder på måder, som ikke oprindeligt tilbydes af webstedet selv.

Med overgangen til Chrome Manifest V3 er mange ældre script-injiceringsmetoder blevet begrænset eller forsinket. Der er dog en undtagelse for User Scripts-API'en.

Læs mere om virkningerne af MV3-politikkerne i vores [blogindlæg](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Sådan aktiveres Udviklertilstand

For brug af tilpassede filtre og JavaScript-regler via fanen _Brugerregler_, skal webbrowseren først opsættes. Dette giver udvidelsen en pålidelig og sikker metode til script-injicering på websider på det optimale tidspunkt. Følg vejledningen nedenfor for den aktuelle Chrome-version.

### Til Chrome-versioner før 138

Udviklertilstand skal aktiveres for udvidelser. For at gøre dette, åbn Chrome-menuen med et klik på de tre prikker øverst til højre, gå til _Udvidelser_ ⭢ _Håndtere udvidelser_ og slå knappen _Udviklertilstand_ til.

![Håndtere Udvidelser \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### For Chrome fra og med version 138

Kontakten skal dog først skiftes til _Tillad user scripts_. For at gøre dette, åbn Chrome-menuen med et klik på de tre prikker øverste til højre, gå til _Udvidelser_ ⭢ _Håndtere udvidelser_, gå under AdGuard Browser Extension til _Detaljer_ og slå knappen _Tillad user scripts_ til.

![Håndtere Udvidelser \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
