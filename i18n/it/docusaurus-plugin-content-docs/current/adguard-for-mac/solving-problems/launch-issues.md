---
title: Problemi di avvio su macOS
sidebar_position: 6
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Occasionalmente, macOS potrebbe causare la corruzione del modulo Estensione di Rete di AdGuard, impedendogli di utilizzare l'app. In tal caso, dovresti seguire una di queste istruzioni, a seconda della tua versione dell'OS.

## Problemi di avvio su macOS 11 e superiori

Se riscontri problemi nell'avviare AdGuard per Mac sui sistemi operativi Big Sur e Monterey, sei pregato di utilizzare queste istruzioni:

1. Riavvia Mac e accedi alla [modalità di ripristino](https://support.apple.com/en-us/HT201255).
1. Disabilita SIP (Avvia il **Terminale** dal menu delle **Utility** e digita `csrutil disable`).
1. Riavvia Mac.
1. Chiudi l'app di AdGuard, apri il **Terminale** e digita `systemextensionsctl reset`.
1. Riavvia il Mac e accedi alla modalità di ripristino.
1. Abilita SIP (Avvia il **Terminale** dal menu delle **Utility** e digita `csrutil enable`).
1. Avvia l'app di AdGuard e abilita la protezione.

## Problemi di avvio su macOS 10

Se riscontri problemi nell'avvio di AdGuard per Mac sui sistemi operativi Sierra, Mojave e Catalina, sei pregato di utilizzare queste istruzioni:

1. Apri il **Terminale** e inserisci il comando `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Verifica che il flag `restricted` non sia presente (come sullo screenshot). ![Esempio di comando *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Riavvia il tuo Mac in modalità di ripristino.
1. Apri **Utilità** → **Terminale**.
1. Digita `csrutil disable`.
1. Inserisci la password da amministratore.
1. Riavvia il tuo Mac.
1. Apri il **Terminale** e inserisci il seguente comando: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Riavvia il tuo Mac in modalità di ripristino.
1. Apri **Utilità** → **Terminale** → Digita `csrutil enable` → Inserisci la password da amministratore → Riavvia il tuo Mac.
1. Abilita la protezione di AdGuard.
