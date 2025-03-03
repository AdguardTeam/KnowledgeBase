---
title: Dispositivi rootati
sidebar_position: 7
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

A causa delle misure di sicurezza dell'OS Android, alcune funzionalità di AdGuard sono disponibili soltanto sui dispositivi con permessi di root. Eccone l'elenco:

- Nella maggior parte dei casi, il **filtraggio HTTPS nelle app** richiede l'[installazione di un certificato CA nell'archivio di sistema](/adguard-for-android/features/settings#security-certificates), poiché la maggior parte delle app non si fida dei certificati nello store utente
- La [modalità di instradamento con **Proxy automatico**](/adguard-for-android/features/settings#routing-mode) richiede accesso root a causa delle limitazioni di Android sul filtraggio del traffico a livello di sistema
- La [modalità di instradamento con **Proxy manuale**](/adguard-for-android/features/settings#routing-mode) richiede l'accesso root su Android 10 e superiori, poiché non è più possibile determinare il nome dell'app associata a una connessione filtrata da AdGuard
