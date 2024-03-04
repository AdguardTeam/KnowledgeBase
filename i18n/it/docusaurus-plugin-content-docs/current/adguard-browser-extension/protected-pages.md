---
title: Pagine protette dal browser
sidebar_position: 4
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere il tuo intero dispositivo, [scarica l'app AdGuard](https://adguard.com/download.html?auto=true)

:::

## Pagine protette dal browser

Utilizzando un'estensione web come l'Estenzione di browser AdGuard, esistono dei domini limitati che proibiscono l'accesso o le autorizzazioni. Di conseguenza, le estensioni di blocco degli annunci non possono interagire con o modificarre i contenuti di tali pagine. In altre parole, non sono autorizzati a bloccare gli annunci e altri elementi fastidiosi su tali pagine web.

### Limitazioni del browser di Chromium

I browser basati su Chromium, come Google Chrome, mantengono un elenco di domini limitati a cui le estensioni non possono accedere. Questi domini includono:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URL che iniziano per `chrome://`, `chrome-extension://` o `https://chrome.google.com/webstore/`
- File PDF
- Pagine in cui JavaScript è disabilitato
- Pagine di avvisi sulla sicurezza
- Pagine di errore come gli errori 404 e gli errori di rete
- URL che iniziano per `view-source:` o `data:`

### Limitazioni del browser Firefox

Similmente, il browser di Firefox ha la propria serie di domini limitati, dove le estensioni non possono operare. Questi domini limitati includono:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

### Modificare le limitazioni su Firefox

Modificare le impostazioni avanzate può influire sulla stabilità e la sicurezza di Firefox. Questo è consigliato solo agli utenti esperti. Se sei consapevole dei rischi associati e desideri comunque abilitare gli componenti aggiuntivi non consentiti su una pagina protetta, segui i seguenti passaggi:

1. Clicca sul pulsante del menu → **Componenti aggiuntivi e temi** → **Estensioni**.
2. Clicca sull'estensione che desideri abilitare sui siti con limitazioni (In questo caso, AdGuard).
3. Seleziona **Consenti** nella sezione **Esegui sui siti con limitazioni**.

Altrimenti, puoi:

1. Aprire una nuova scheda e digitare **about:config** nella barra degli indirizzi.
2. Premere **Ritorno**. Potresti visualizzare un avviso. In questo caso, clicca su **Accetta i Rischi e Continua**.
3. Cerca `extensions.webextensions.restrictedDomains`. Se non riesci a trovare questa preferenza, puoi crearla. Seleziona semplicemente il tipo **Booleano** e clicca su **+** per aggiungerlo.
4. Clicca sul pulsante di attivazione/disattivazione affianco a tale preferenza, e modificane il valore in `false`.
5. Riavvia Firefox.

Per ulteriori informazioni in materia, leggi [l'articolo sul sito web di supporto di Mozilla](https://mzl.la/3POXoWi).
