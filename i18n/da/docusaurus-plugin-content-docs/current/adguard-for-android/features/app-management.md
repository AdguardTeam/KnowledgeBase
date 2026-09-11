---
title: App-håndtering
sidebar_position: 2
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Modulet _App-håndtering_ kan tilgås ved tryk på fanen _App-håndtering_ (3. ikon fra venstre nederst på skærmen). Dette afsnit muliggør at håndtere tilladelser og filtreringsindstillinger for alle apps installeret på enheden.

![App-håndtering \*mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Ved tryk på en app kan dens indstillinger håndteres:

- Rut dens trafik igennem AdGuard
- Blokér annoncer og trackere i denne app (_Filtrér app-indhold_)
- Filtrér dens HTTPS-trafik (for ikke-webbrowser-apps kræver det [installation af AdGuards CA-certifikat i systemlageret](/adguard-for-android/solving-problems/https-certificate-for-rooted/) tilgængeligt på rootede enheder)
- Rut den igennem den angivne proxyserver eller AdGuard VPN i Integrationstilstand

![App-håndtering i Chrome \*mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Appens statistik kan også tilgås via kontekstmenuen.

![App-håndtering: Chrome-kontekstmenu \*mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Kompatible og inkompatible/"problematiske" apps

De fleste apps fungerer korrekt, når de filtreres. For sådanne apps rutes deres trafik igennem AdGuard og filtreres som standard.

Apps, som ikke er 100% kompatible, såsom Download Manager, radio, system-apps med UID 1000 og 1001 (f.eks. Google Play-tjenester) kan fejlfungere ved rutning igennem AdGuard. Derfor vil flg. advarsel kunne ses, når alle apps forsøges rutet eller filtreret:

![Rut alle apps-dialog \*mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

For at sikre korrekt drift af alle apps installeret på enheden, anbefaler det kraftigt kun at rute 100% kompatible apps igennem AdGuard. En komplet liste over apps, som ikke anbefales filtreret, kan ses i _Indstillinger_ → _Generelt_ → _Avanceret_ → _Lavniveauindstillinger_ → _Beskyttelse_ → _Undtagne apps_.
