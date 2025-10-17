---
title: Protezione dal tracciamento
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Inoltre, può bloccare i cookie utilizzati dai siti web per contrassegnare il tuo browser, salvare le tue impostazioni personali e le preferenze dell'utente, o riconoscerti alla tua prossima visita.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Ecco le funzionalità attive dei livelli preconfigurati:

1. **Standard**

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Ask websites not to track me_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   c. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome di inviare informazioni sulla sua versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

2. **Elevata**

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Elimina i parametri di tracciamento dagli URL_. Questa funzionalità usa il filtro di tracciamento degli URL di AdGuard per rimuovere i parametri di tracciamento, come `utm_*` e `fb_ref`, dagli URL delle pagine

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::attenzione

   Questa funzionalità elimina tutti i cookie di terze parti, dopo la loro scadenza forzata. Ciò include i tuoi accessi tramite social o altri servizi di terze parti. Potresti dover accedere nuovamente ad alcuni siti web periodicamente, o riscontrare altri problemi correlati ai cookie. Per bloccare soltanto i cookie di tracciamento, usa il livello di protezione _Standard_.

   :::

   f. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome di inviare le proprie informazioni sulla versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

3. **Estremo** (precedentemente noto come _Definitivo_)

   a. _Blocca i tracciatori_. Questa funzionalità usa il filtro _Protezione dal tracciamento_ di AdGuard per proteggerti dai contatori in rete e dagli strumenti di analitica web

   b. _Elimina i parametri di tracciamento dagli URL_. Questa funzionalità usa il filtro di tracciamento degli URL di AdGuard per rimuovere i parametri di tracciamento, come `utm_*` e `fb_ref`, dagli URL delle pagine

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Questa funzione invia i segnali [Global Privacy Control](https://globalprivacycontrol.org/) e [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) ai siti web che visiti, chiedendo alle applicazioni web di disabilitare il tracciamento della tua attività

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::attenzione

   Questa funzionalità elimina tutti i cookie di terze parti, dopo la loro scadenza forzata. Ciò include i tuoi accessi tramite social o altri servizi di terze parti. Potresti dover accedere nuovamente ad alcuni siti web periodicamente, o riscontrare altri problemi correlati ai cookie. Per bloccare soltanto i cookie di tracciamento, usa il livello di protezione _Standard_.

   :::

   f. _Blocca WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Blocca API Push_. This feature blocks push notifications from websites

   h. _Blocca API di localizzazione_. Questa funzionalità impedisce ai browser di accedere ai tuoi dati GPS e di determinare la tua posizione

   i. _Nascondi il referente a terze parti_. Questa funzionalità impedisce alle terze parti di conoscere i siti web che visiti. Nasconde l'intestazione HTTP contenente l'URL della pagina iniziale, sostituendolo con uno predefinito o personalizzato, che puoi impostare

   j. _Hide User-Agent_. Questa funzionalità rimuove le informazioni identificative dall'intestazione User-Agent, che include tipicamente il nome e la versione del browser, il sistema operativo, e le impostazioni della lingua

   k. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome d'inviare le proprie informazioni sulla versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
