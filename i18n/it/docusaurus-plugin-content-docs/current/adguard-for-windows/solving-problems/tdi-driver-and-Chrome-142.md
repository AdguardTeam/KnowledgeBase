---
title: Inghippi di filtraggio in Chrome 142 e successivi quando si usa il driver TDI
sidebar_position: 14
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

Some AdGuard for Windows users may notice that [the app stops filtering traffic in Chromium-based browsers](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Starting from Google Chrome 142+, browser traffic simply does not appear at the TDI driver level, preventing AdGuard from inspecting or filtering it.

Questo comportamento non è un errore di AdGuard, ma il risultato di recenti cambiamenti architetturali e di sicurezza nei browser moderni.

## Perché accade ciò

Browser basati su Chromium (Chrome, Edge, Brave, Vivaldi, ecc.) hanno rafforzato la loro architettura di sicurezza. Una modifica significativa è spostare processi interni sensibili nell'[ambiente isolato Windows AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), incluso il servizio per la rete dedicata, che gestisce tutto il traffico del browser.

### Cosa è cambiato in Chrome 142

A partire da Chrome 142, il processo del servizio di rete dedicata è avviato all'interno di AppContainer come opzione prescelta.

Quando ciò accade, le applicazioni eseguite in un AppContainer non usano la obsoleta interfaccia di rete TDI; invece, il loro traffico è instradato attraverso il più moderno stack WSK (Winsock Kernel). Di conseguenza, il driver TDI non può vedere, intercettare o elaborare le connessioni che passano attraverso WSK, e tutto il traffico del browser diventa invisibile al driver TDI usato da AdGuard.

Questo comportamento è controllato interamente dalle politiche di isolamento di Chrome e dagli esperimenti interni (prove sul campo), non dalle impostazioni dell'utente.

## Perché questo influisce su AdGuard

Il driver TDI è una tecnologia Windows obsoleta che è stata deprecata e non è supportata da Microsoft da molti anni. Non è compatibile con i moderni modelli di isolamento e ambientazione usati dai browser.

Per questo motivo, la visibilità del traffico basata su TDI diventa sempre più instabile. In alcuni browser, è già scomparsa completamente e alla fine smetterà di funzionare del tutto.

AdGuard già considera il driver TDI obsoleto e la sua completa rimozione è pianificata con l'evoluzione del prodotto.

## Soluzione temporanea

Certi cambiamenti del registro di Windows possono forzare il browser a fermare l'uso di AppContainer, causando nuovamente l'esecuzione dei suoi processi in una modalità non isolata. Il servizio della rete dedica ferma l'uso dello stack WSK e torna a un percorso di rete che il driver TDI può vedere. AdGuard quindi riacquista la capacità di filtrare il traffico del browser.

### Come modificare il registro nei browser basati su Chromium

:::warning

I diritti di amministratore sono obbligatori per modificare il registro. Modifiche errate possono influire sulla stabilità e sulla sicurezza del sistema o del browser. Creare sempre una copia di recupero del ramo del registro prima di modificarlo.

Prima di procedere, tieni presente che questa soluzione riduce la sicurezza ambiente isolato/AppContainer, rendendo il browser meno isolato. Si applica a livello di sistema perché modifica `HKLM`, e dovrebbe essere usata solo per il perfezionamento, espedienti temporanei, in ambienti controllati, o quando l'intercettazione del traffico basata su TDI è strettamente necessaria.

Non dovrebbe essere **applicata** in modo ampio nei computer degli utenti finali. **Procedi solo se comprendi le implicazioni.**

:::

#### Using .reg files

Puoi applicare automaticamente le modifiche necessarie al registro usando uno dei file .reg pre-generati qui sotto. Ogni file disabilita la messa in disparte diAppContainer/rete per uno specifico browser basato su Chromium:

- [Scarica Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Scarica Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Scarica Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Scarica Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Scarica Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Scarica YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

You can revert these changes using the undo .reg files provided below. These files remove the registry branches that were added by the direct version:

- [Undo Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chrome.reg)
- [Undo Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chromium.reg)
- [Undo Edge.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Edge.reg)
- [Undo Brave.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Brave.reg)
- [Undo Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Vivaldi.reg)
- [Undo YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_YandexBrowser.reg)

#### Explicit registry editing

Se il tuo browser non è elencato, segui le istruzioni manuali qui sotto per creare le voci di registro necessarie:

1. Determina il suo ramo di politica controllando la documentazione ufficiale del fornitore oppure aprendo la pagina politica interna. In Chrome, vai in `chrome://policy`. Altri browser usano un percorso simile.

2. Individua il ramo del registro corretto per il tuo browser. Browser diversi basati su Chromium usano percorsi di politica differenti sotto `HKLM`. Dovrebbe seguire il modello `HKLM\\SOFTWARE\\Policies\\<Vendor>\\<Product>`.

3. Apri l'Editor del Registro di sistema:

   - Premi _Win + R_
   - Digita _regedit_ e premi _Invio_
   - Approva l'interazione UAC eseguendolo come amministratore

4. Fai una copia del ramo Policies:

   - Nel pannello a sinistra, vai a `HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies`
   - Clicca col destro _Politiche_ → _Esporta_
   - Salva il file come _Policies_backup.reg_

   Se qualcosa va storto, puoi ripristinare la copia di recupero cliccando due volte questo file.

5. Vai alla chiave della politica del tuo browser:

   - Espandi il percorso `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_.
   - Individua la cartella corrispondente al tuo browser.

Se la chiave non esiste, puoi crearla manualmente. Esempio per Chrome:

- Clicca col destro _Politiche_ → _Nuovo_ → _Chiave_ e chiamala `Google`
- All'interno di `Google`, crea un'altra chiave denominata `Chrome`

Ripeti la stessa logica per Chromium, Edge, Brave, Vivaldi, Yandex Browser, ecc. Dovresti finire con una chiave che assomiglia a `HKEY_LOCAL_MACHINE\PROGRAMMA\Politiche\<Vendor>\<Product>`.

1. Aggiungi i valori del registro obbligatori:

   - Nella chiave corretta, clicca il pannello destro → _Nuovo_ → _Valore DWORD (32 bit)_

   - Chiamalo `RendererAppContainerEnabled`

   - Fai doppio clic su di esso e imposta:

     - **Valore:** 0
     - **Base:** Esadecimale o Decimale (entrambi vanno bene)

   - Ripetere il processo e creare un secondo DWORD `NetworkServiceSandboxEnabled`.

   - Imposta il suo valore a 0.

   Entrambi i parametri devono essere `REG_DWORD` e avere il valore **0**.

2. Chiudi il browser e applica le impostazioni. Per assicurare che la politica sia caricata:

   - Chiudi completamente il browser
   - Controlla il Gestore Attività e assicurati che non siano in esecuzione processi quali _chrome.exe_, _msedge.exe_, _brave.exe_
   - Riapri il browser

3. Verifica che le politiche siano state applicate aprendo il visualizzatore delle politiche per il tuo browser.

Dovresti vedere le seguenti politiche attive:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

Se disponibile, clicca _Ricarica le politiche_.

Fatto!

## Soluzione permanente

Abbiamo in programma di aggiungere il supporto per il driver SockFilter nelle prossime versioni. Risolverà l'inghippo sistemando i conflitti nello stack WFP. [Ulteriori informazioni](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
