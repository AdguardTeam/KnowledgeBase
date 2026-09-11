---
title: Gestione delle app
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Il modulo _Gestione app_ è accessibile toccando la scheda _Gestione app_ (terza icona da sinistra in fondo alla schermata). Questa sezione ti consente di gestire le autorizzazioni e le impostazioni di filtraggio per tutte le app installate sul tuo dispositivo.

![Gestione app \*mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Toccando un'app puoi gestirne le impostazioni:

- Instrada il suo traffico attraverso AdGuard
- Blocca inserzioni e tracciatori in quest'app (_Filtra i contenuti dell'app_)
- Filtra il suo traffico HTTPS (per le app non browser, richiede [l'installazione del certificato CA di AdGuard nell'archivio di sistema](/adguard-for-android/solving-problems/https-certificate-for-rooted/), disponibile sui dispositivi rootati)
- Instradalo attraverso il tuo server proxy specificato o AdGuard VPN in modalità Integrazione

![App management: Chrome \*mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Dal menu contestuale, puoi accedere anche alle statistiche dell'app.

![App management: Chrome Context menu \*mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### App “senza problemi” e “problematiche”

La maggior parte delle app funziona correttamente quando è filtrata. Per tali app, il traffico è instradato attraverso AdGuard e filtrato per impostazione predefinita.

Alcune app, come Download Manager, radio, app di sistema con UID 1000 e 1001 (ad esempio, i servizi di Google Play), sono "problematiche" e potrebbero funzionare in modo errato se instradate tramite AdGuard. Ecco perché puoi vedere il seguente avviso, provando a instradare o filtrare tutte le app:

![Dialogo per instradare tutte le app \*mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Per assicurare il funzionamento corretto di tutte le app installate sul tuo dispositivo, ti consigliamo vivamente d'instradare attraverso AdGuard soltanto le app prive di problemi. Puoi vedere l'elenco completo delle app sconsigliate per il filtraggio in _Impostazioni_ → _Generale_ → _Avanzate_ → _Impostazioni di basso livello_ → _Protezione_ → _App escluse_.
