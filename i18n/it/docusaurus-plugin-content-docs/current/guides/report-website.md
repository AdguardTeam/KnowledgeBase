---
title: How to report websites and apps
sidebar_position: 3
---


Utilizzando i blocchi di annunci, potresti riscontrare un errato funzionamento di certi siti web o elementi corrotti della pagina. Questi problemi potrebbero sorgere a causa di vari fattori:

- Regole dell'utente errate;
- Algoritmi di aggiunta degli annunci modificati;
- Filtri/estensioni aggiunti da sviluppatori di terze parti;
- Gli autori di uno dei filtri hanno commesso un errore creando la regola;
- Reinserimento di annunci. Scopri di più su questo metodo nel nostro [blog](https://adguard.com/en/blog/ad-reinsertion.html).

Puoi aiutarci compilando un modulo con esempi di annunci che hai incontrato. Per farlo, sei pregato di utilizzare le istruzioni per il tuo OS.

## Segnalare un sito web {#report}

:::note

Quando invii un reclamo tramite l'app o tramite AdGuard Browser Assistant, tutte le informazioni sono automaticamente precompilate. Tranne per gli screenshot, che dovrai scattare e allegare da solo. Se stai utilizzando un [collegamento diretto](https://reports.adguard.com/new_issue.html), dovrai inserire i dati manualmente.

:::

Per segnalare il reinserimento di un annuncio o l'errata visualizzazione di un sito web, devi:

### Estensione del browser {#extension}

- Aprire le impostazioni dell'estensione del browser, cliccando sull'icona corrispondente;
- Cliccare su **Segnala un problema**:

![extension_issue *mobile_border](https://cdn.adtidy.org/blog/new/5si74extension.png)

- Dopo aver compilato il modulo, sarà creato automaticamente un ticket su [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Inoltre, sarà presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.

### Windows {#windows}

- Apri [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) e clicca su **Segnala un problema**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Compila il modulo per segnalare un reclamo;
- Una volta fatto, sarà creato automaticamente un ticket su [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Inoltre, sarà presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.

### Android {#android}

- Apri le impostazioni di AdGuard;
- Scegli **Supporto**, quindi **Segnala blocco errato**:

![android *mobile_border](https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg)

- Dopo aver compilato il modulo, sarà creato automaticamente un ticket su [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Inoltre, sarà presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.

### Mac {#mac}

- Open [AdGuard Browser Assistant](/adguard-for-mac/features/browser-assistant) and hit **Report an issue**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Compila il modulo per segnalare un reclamo;
- Una volta fatto, sarà creato automaticamente un ticket su [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Inoltre, sarà presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.

### iOS {#ios}

- Apri le impostazioni di AdGuard;
- Scegli **Supporto**, quindi **Segnala blocco errato**:

![ios *mobile_border](https://cdn.adtidy.org/blog/new/fnl9aios.jpeg)

- Compila il modulo per segnalare un reclamo;
- Una volta fatto, sarà creato automaticamente un ticket su [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Inoltre, sarà presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.

## Compilazione del modulo {#form}

:::note

Quando invii un reclamo tramite l'app o tramite AdGuard Assistant, tutte le informazioni sono automaticamente precompilate. Tranne per gli screenshot, che dovrai scattare e allegare da solo. Se stai utilizzando un [collegamento diretto](https://reports.adguard.com/new_issue.html), dovrai inserire i dati manualmente.

:::

1. La compilazione del modulo inizia descrivendo il tipo e la versione di un prodotto;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specifica il tipo di problema e le informazioni aggiuntive sull'utilizzo di software di terze parti (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Inserisci l'indirizzo della pagina e il browser (o il link di download, nel caso di un'app), su cui hai riscontrato un problema;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. La configurazione dell'applicazione dev'essere specificata:

    - I filtri che utilizzi;
    - Le impostazioni della modalità Stealth, se questa funzione è abilitata.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Fornisci uno screenshot](../take-screenshot) che catturi l'essenza del problema;

    - **Importante**: Nascondi le tue informazioni personali (email, numero di telefono, etc.), poiché gli screenshot saranno disponibili pubblicamente.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Fornisci le informazioni aggiuntive che aiuteranno gli sviluppatori dei filtri a comprendere la situazione;

    Inoltre, inserisci il tuo profilo di **GitHub**, se disponibile (è necessario perché gli sviluppatori possano contattarti, nel caso in cui necessitino di ulteriori dettagli);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Controlla ogni passaggio prima di inviare il modulo;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. Ti sarà fornito un link per tracciare i progressi della tua segnalazione.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## Diagnosi di un problema {#issue}

Quest'opzione è adatta a coloro che non temono le difficoltà e non si preoccupano di provare a trovare il problema per conto proprio. Ciò non richiede alcuna abilità speciale o conoscenze approfondite di HTML e CSS.

Ad esempio, riscontri una situazione in cui il tuo sito web preferito non si apre, l'autorizzazione è corrotta, o alcuni elementi della pagina sono mostrati in modo errato. La causa potrebbe essere l'utilizzo dell'impostazione di specifici filtri/estensione/Modalità Stealth. Per diagnosticare tali problemi, devi fare quanto segue:

### **Filtri**

1. Disabilita **Blocco annunci**;
2. Se il problema è stato risolto, riabilita il modulo e disabilita i filtri, uno per uno. Questo, per identificare i filtri che "corrompono" la pagina;
3. Se sei riuscito a scoprire quale filtro "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, è desiderabile tornare alle impostazioni iniziali;
4. Se la disattivazione di tutti i filtri non ha prodotto alcun risultato, applica la regola **@@||example.com^$document,extension**; in cui **example.com** è un esempio di nome di un sito, che dev'essere sostituito dalla tua opzione;
5. In caso di fallimento (problema non risolto), passa alla sezione **Modalità Stealth**.

### **Modalità Invisibilità**

1. Disabilita la **Modalità Stealth**;
2. Se ciò ha risolto il problema, attiva il modulo e disattiva, una per una, le opzioni della **Modalità Stealth**. Questo, per rilevare quali filtri stanno "corrompendo" la pagina;
3. Se sei riuscito a rilevare quale impostazione "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, è desiderabile tornare alle impostazioni iniziali;
4. In caso di fallimento (problema non risolto), passa alla sezione **Estensioni**.

### **Estensioni**

1. Disabilita le **Estensioni**;
2. Se ciò ha risolto il problema, attiva il modulo e disattiva, una per una, le opzioni delle **Estensioni**. Questo, per scoprire quale impostazione "corrompe" la pagina;
3. Se sei riuscito a rilevare quale impostazione "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, è desiderabile tornare alle impostazioni iniziali.

### **Blocchi di terze parti**

Alcuni browser e programmi antivirus (come Yandex Browser, Kaspersky, etc.), integrano dei blocchi di annunci. Potrebbero influire su e causare problemi all'operazione dei siti. Se utilizzi tali programmi, assicurati che il problema sia dovuto ad **AdGuard**: disabilita il filtraggio di **AdGuard** e prova a riprodurre il problema. Se persiste, significa che è causato da un'altra applicazione, o dal browser. Se il problema è causato da **AdGuard**, segui i passaggi descritti nei paragrafi precedenti.
