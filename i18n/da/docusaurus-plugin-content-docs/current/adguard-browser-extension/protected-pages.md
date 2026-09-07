---
title: Webbrowserbeskyttede sider
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard Browser Extension, der kun beskytter webbrowseren. For at beskytte hele enheden, [download AdGuard-appen](https://adguard.com/download.html?auto=true)

:::

Ved brug af en webudvidelse, såsom AdGuard Browser Extension, er der visse begrænsede domæner, som forbyder adgang eller nægter tilladelser. Som konsekvens heraf får adblockerudvidelser ikke lov til at interagere med eller ændre indholdet på sådanne sider. De må med andre ord ikke blokere annoncer og andre irriterende elementer på sådanne websider.

## Chromium-webbrowserrestriktioner

Chromium-baserede webbrowsere, såsom Google Chrome, opretholder en liste over domæner med restriktioner, som udvidelser ikke har lov at tilgå. Disse domæner inkluderer:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URL'er startende med `chrome://`, `chrome-extension://` eller `https://chrome.google.com/webstore/`
- PDF-filer
- Sider, hvor Javascript er deaktiveret
- Sikkerhedsadvarselssider
- Fejlbeskedsider, såsom 404- og netværksfejl
- URL'er startende med `view-source:` eller `data:`

## Firefox-webbrowserrestriktioner

Tilsvarende har Firefox-webbrowseren sit eget sæt af domæner med restriktioner, hvor udvidelser ikke har lov til at fungere. Disse domæner med restriktioner omfatter:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Ændring af restriktioner i Firefox

Ændring af avancerede indstillinger kan påvirke stabiliteten og sikkerheden i Firefox. Dette anbefales derfor kun til avancerede brugere. Accepteres den tilknyttede risiko og ønskes tilføjelser stadig aktiveret, som ikke er tilladt på en beskyttet side, kan nedenstående trin følges:

1. Klik på menuknappen → **Tilføjelser og temaer** → **Udvidelser**.
2. Klik på den udvidelse, der skal aktiveres på websteder med restriktioner (i dette tilfælde AdGuard).
3. Vælg **Tillad** i afsnittet **Kør på websteder med restriktioner**.

Alternativ fremgangsmåde:

1. Åbn en ny fane og indtast **about:config** i adressebjælken.
2. Tryk på **Retur**. En advarsel vises muligvis. I så tilfælde, klik på **Acceptér risikoen og fortsæt**.
3. Søg efter `extensions.webextensions.restrictedDomains`. Findes denne præference ikke, kan den oprettes. Vælg blot typen **Boolean** og klik på **+** for at tilføje den.
4. Klik på kontakten ved siden af denne præference, så dens værdi viser `false`.
5. Genstart Firefox.

For yderligere information om dette emne, læs [artiklen på Mozillas supportwebsted](https://mzl.la/3POXoWi).
