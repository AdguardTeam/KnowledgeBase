---
title: Come installare un certificato proxy
sidebar_position: 2
---

Le nostre app per desktop, AdGuard per Windows e AdGuard per Mac, sono utilizzabili come proxy per altri dispositivi. Ciò significa che puoi instradare il traffico di altri dispositivi attraverso AdGuard (tutto il traffico, o il traffico di app e browser specifici).

:::note

Questi dispositivi devono trovarsi nella stessa rete del PC o Mac con AdGuard.

:::

Il traffico HTTP sarà filtrato in ogni caso, ma perché AdGuard possa filtrare il traffico HTTPS, devi installare manualmente il certificato di AdGuard sul dispositivo connesso.

## Come scaricare e installare il certificato

A seconda del sistema operativo del dispositivo di cui desideri filtrare il traffico, segui una di queste istruzioni:

### Windows {#windows}

1. Annota l'indirizzo IP del tuo computer desktop con AdGuard installato.

1. Assicurati che la protezione di AdGuard sia abilitata. Su un computer Windows, spunta la casella **Utilizza AdGuard come un proxy HTTP** nella scheda **Rete** delle sue impostazioni. Per Mac, vai in **Impostazioni** → **Preferenze** → **Rete**, e abilita il **proxy HTTP**.

1. Sullo stesso computer con AdGuard, segui questo link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. Se il download non si avvia, prova con un altro browser, ad esempio, Firefox.

1. Trasferisci il file **cert.cer** scaricato sul dispositivo con Windows di cui desideri instradare il traffico tramite AdGuard. Puoi utilizzare un cavo USB, il Bluetooth, o i servizi su cloud per farlo.

1. Su quel dispositivo, premi **Win**, digita `Gestisci certificati del computer` e premi **Invio**.

1. Sulla pagina *Certificati — Computer Locale*, trova la cartella *Autorità di Certificazione di Root Attendibili* → *Certificati*.

1. Fai clic destro sulla cartella *Certificati* e clicca su **Tutte le Attività** → **Importa**.

1. Sulla pagina *Procedura Guidata d'Importazione Certificati*, clicca su **Successivo**.

1. Clicca su **Sfoglia** per importare il certificato.

1. Naviga al file del certificato **cert.cer**, selezionalo, clicca su **Apri**, quindi su **Successivo**.

1. Seleziona la casella **Posiziona tutti i certificati nel seguente archivio**.

1. Assicurati che il campo *Archivio certificati* mostri *Autorità di Certificazione di Root Attendibili*, quindi clicca su **Successivo**.

1. Clicca **Fine**.

1. Premi **Win**, quindi apri le **Impostazioni**.

1. Seleziona **Rete & Internet** → **Proxy**.

1. Disattiva *Rileva automaticamente le impostazioni*.

1. Clicca su **Configura** nella scheda *Utilizza un server proxy*.

1. Attiva l'interruttore. Per l'**indirizzo IP del proxy**, digita l'indirizzo IP del tuo computer desktop, annotato al passaggio 1. Per la **Porta**, inserisci la porta scelta nelle impostazioni di rete dell'app desktop di AdGuard.

1. Clicca su **Salva**.

### Mac {#mac}

1. Annota l'indirizzo IP del tuo computer su cui è installato AdGuard.

1. Assicurati che la protezione di AdGuard sia abilitata. Su un computer Windows, spunta la casella **Utilizza AdGuard come un proxy HTTP** nella scheda **Rete** delle sue impostazioni. Per Mac, vai in **Impostazioni** → **Preferenze** → **Rete**, e abilita il **proxy HTTP**.

1. Segui questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. Se il download non si avvia, prova con un altro browser, ad esempio, Firefox.

1. Trasferisci il file scaricato **cert.cer** al dispositivo Mac il cui traffico desideri indirizzare attraverso AdGuard. Puoi utilizzare un cavo USB, il Bluetooth, o i servizi su cloud per farlo.

1. Fai doppio click sul file del certificato scaricato.

1. Inserisci la password dell'amministratore, quindi clicca su **Modifica Keychain**.

1. Vai a **Spotlight** (l'icona di ricerca nell'angolo superiore destro), digita `Keychain Access`, quindi seleziona **Keychain Access** dai risultati della ricerca.

1. Sotto *Sistema*, evidenzia il certificato aggiunto.

1. Cliccalo con il tasto destro e seleziona **Ottieni Info** dal menu contestuale.

1. Espandi *Attendibilità* per mostrare i criteri di attendibilità per il certificato.

1. In *Secure Sockets Layers (SSL)*, seleziona **Fidati Sempre**.

1. Apri **Preferenze di Sistema** → **Rete** e seleziona la connessione attiva in alto.

1. Clicca su **Dettagli...** e naviga alla scheda **Proxy**.

1. Spunta due caselle di controllo: *Proxy web (HTTP)* e *Proxy web sicuro (HTTPS)*. Nel campo **Server**, digita l'indirizzo IP del tuo computer annotato al passaggio 1. Nel campo **Porta**, inserisci la porta selezionata nelle impostazioni di rete dell'app desktop di AdGuard.

### Android {#android}

1. Annota l'indirizzo IP del tuo computer su cui è installato AdGuard.

1. Assicurati che la protezione di AdGuard sia abilitata. Su un computer Windows, spunta la casella **Utilizza AdGuard come un proxy HTTP** nella scheda **Rete** delle sue impostazioni. Per Mac, vai in **Impostazioni** → **Preferenze** → **Rete**, e abilita il **proxy HTTP**.

1. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. Se il download non si avvia, prova con un altro browser, ad esempio, Firefox.

1. Trasferisci il file **cert.cer** scaricato sul dispositivo Android di cui desideri instradare il traffico tramite AdGuard. Puoi utilizzare un cavo USB, il Bluetooth, o i servizi su cloud per farlo.

1. Trova e tocca sul certificato **cert.cer** scaricato in precedenza, per aprire il file e seguire le istruzioni per installare il certificato.

1. I dispositivi Android non si fidano dei certificati di default, quindi si presenterà un avviso: puoi ignorarlo. Su alcuni smartphone, potrebbe essere richiesto l'inserimento della password del tuo dispositivo. Fallo, quindi premi **OK**. Il certificato sarà installato.

1. Apri le impostazioni avanzate della rete Wi-Fi attiva.

1. Cambia il **Tipo di proxy** a **Manuale**. Per il **Nome del host del proxy**, inserisci l'indirizzo IP del tuo computer desktop, annotato al passaggio 1. Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.

### iOS {#ios}

1. Annota l'indirizzo IP del tuo computer su cui è installato AdGuard.

1. Assicurati che la protezione di AdGuard sia abilitata. Su un computer Windows, spunta la casella **Utilizza AdGuard come un proxy HTTP** nella scheda **Rete** delle sue impostazioni. Per Mac, vai in **Impostazioni** → **Preferenze** → **Rete**, e abilita il **proxy HTTP**.

1. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clicca il pulsante **Scarica**. Se il download non si avvia, prova con un altro browser, ad esempio, Firefox.

1. Trasferisci il file scaricato **cert.cer** al dispositivo iOS il cui traffico desideri indirizzare attraverso AdGuard. Puoi utilizzare un cavo USB, il Bluetooth, o i servizi su cloud per farlo.

1. Sul tuo dispositivo iOS, apri **Impostazioni** → **Profilo Scaricato**, quindi tocca su **Installa** nell'angolo superiore destro. Inserisci la tua password e conferma l'installazione. Tocca **Fatto**.

1. Vai in **Impostazioni** → **Generali** → **Informazioni** → **Impostazioni di Attendibilità Certificati**. Abilita l'interruttore affianco a *CA di Adguard Personal*. Il certificato è ora installato.

1. Su quel dispositivo, apri le impostazioni avanzate della rete Wi-Fi attiva.

1. Cambia il **Tipo di proxy** a **Manuale**. Per il **Nome del host del proxy**, inserisci l'indirizzo IP del tuo computer desktop, annotato al passaggio 1. Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.
