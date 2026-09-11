---
title: Come utilizzare Samsung Pay con AdGuard in Corea del Sud
sidebar_position: 16
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Un certo numero di utenti ha riscontrato un problema in cui Samsung Pay non funziona mentre AdGuard è in esecuzione. This issue occurs almost exclusively on devices registered in South Korea.

What is causing this issue? A volte Samsung Pay non funziona su dispositivi con servizi VPN in esecuzione e AdGuard è una di queste app. Di default, AdGuard utilizza una VPN locale per filtrare il traffico, il che può causare dei problemi utilizzando Samsung Pay.

Di conseguenza, gli utenti devono disabilitare AdGuard, quando effettuano dei pagamenti con Samsung Pay. Ciò si può evitare con la funzionalità *Rileva Samsung Pay*. Quando quest'opzione è abilitata, l'app di AdGuard viene messa in pausa quando l'utente apre l'app di Samsung Pay, e riprende quando l'app viene chiusa.

:::note

This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. Se un'altra modalità è in uso, Samsung Pay funzionerà senza alcuna interruzione.

:::

Per abilitare *Rileva Samsung Pay*, segui questi passaggi:

1. Go to *Settings* → *General* → *Advanced*→ *Low-level settings*.

1. Scorri fino a *Rileva Samsung Pay* e sposta il cursore verso destra.

1. Tap *Allow permissions* and give AdGuard access to information about the use of other apps.

Le necessitiamo per raccogliere statistiche sull'operazione di Samsung Pay, e affinché la funzionalità *Rileva Samsung Pay* funzioni.

Dopo aver abilitato questa funzionalità, quando passi da Samsung Pay ad AdGuard, il seguente messaggio apparirà come mostrato nello screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Altrimenti, puoi disabilitare il filtraggio per Samsung Pay in *Gestione app*. Basta andare alla schermata *Gestione app* (terza scheda dal basso), trovare Samsung Pay nell'elenco, e disabilitare *Instrada traffico attraverso AdGuard*.
