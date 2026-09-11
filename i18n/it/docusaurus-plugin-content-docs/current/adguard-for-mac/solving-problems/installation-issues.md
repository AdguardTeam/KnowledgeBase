---
title: Risoluzione dei problemi d'installazione
sidebar_position: 5
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Errore "Installazione fallita" su macOS Catalina

Durante l'installazione puoi riscontrare un errore come questo:

![Schermata d'errore di installazione](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Segui queste istruzioni per risolvere il problema:

1. Riavvia il tuo Mac
2. Al riavvio del Mac, tieni premuti i tasti *Command(⌘) + R* subito dopo aver sentito il segnale acustico di avvio. Tieni premuti i tasti finché non appare il logo di Apple, per portare il computer in Modalità di Ripristino.
3. Dalla barra in alto seleziona *Utilità* → *Terminale*ed esegui questo comando: `csrutil disable`
4. Riavvia il Mac e accedi al profilo dell'amministratore
5. Apri la finestra del Finder e seleziona dalla barra in alto *Vai* → *Vai alla cartella* e digita `~/private/`
6. Crea una cartella denominata *tmp* e digita la tua password
7. Avvia l'installazione di AdGuard

Al completamento dell'installazione, riavvia il tuo Mac in modalità di Ripristino utilizzando l'istruzione precedente ed esegui il comando `csrutil enable` nel Terminale per consentire la protezione di sistema.
