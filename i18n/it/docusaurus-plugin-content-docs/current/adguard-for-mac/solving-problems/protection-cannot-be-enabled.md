---
title: Impossibile abilitare la protezione
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

Se non è possibile abilitare la Protezione di AdGuard per qualche motivo, esegui i seguenti passaggi:

1. Clicca sull'icona di AdGuard sulla barra dei menu e vai ad *Avanzate* → *Ripristino impostazioni...* → *Esci da AdGuard...*

2. Nella ricerca di Spotlight, digita Terminale, inserisci `sudo rm -R /Library/Application\ Support/com.adguard.adguard` ed esegui.

3. Riavvia il tuo computer.

4. Apri nuovamente il Terminale, digita `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` ed esegui. Dovresti ricevere il seguente messaggio: `Nessun file o cartella di questo tipo`.

5. Avvia AdGuard e inserisci le tue informazioni d'accesso quando richieste.
