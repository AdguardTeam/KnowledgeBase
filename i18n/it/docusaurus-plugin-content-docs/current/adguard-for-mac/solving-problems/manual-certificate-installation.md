---
title: Installazione manuale del certificato
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard per Mac necessita dell'installazione del certificato di root nell'archiviazione dei certificati per poter [filtrare il traffico HTTPS](/general/https-filtering/what-is-https-filtering). Quest'azione è eseguita automaticamente in gran parte dei casi, eseguendo l'app per la prima volta, ma per gli utenti dei browser basati su Gecko (Firefox, Waterfox, etc.) che hanno una password principale, configurata per il proprio browser, potrebbe esser necessario compiere dei passaggi aggiuntivi (poiché questi browser utilizzano la propria archiviazione dei certificati, invece di quella di sistema). Devono inserire la password principale quando richiesto (per concedere l'accesso ad AdGuard all'archiviazione del certificato) o di installare manualmente il certificato.

Per installare manualmente il certificato sui browser come Firefox:

  1. Apri *Preferenze*

  2. Vai a *Privacy e Sicurezza* → *Certificati*

  3. Clicca su *Visualizza Certificati*

  4. Naviga alla scheda *Autorità* e clicca il pulsante *Importa...*

  5. Seleziona il file `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` o, semplicemente, scaricalo da http://local.adguard.org/cert utilizzando un browser basato su Chromium (es. Google Chrome o il nuovo Edge) e con un filtraggio HTTPS in esecuzione su AdGuard

Le azioni esatte necessarie per diversi browser basati su Gecko potrebbero variare, ma la sequenza generale e il percorso al file `AdGuard Personal CA.cer` saranno gli stessi.
