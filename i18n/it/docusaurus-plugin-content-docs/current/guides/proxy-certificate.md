---
title: Come installare un certificato proxy
sidebar_position: 2
---

Le app desktop di AdGuard (AdGuard per Windows e AdGuard per Mac), sono utilizzabili come proxy. Ciò significa che puoi indirizzare il traffico di altri dispositivi attraverso AdGuard (interamente, o il traffico di app/browser specifici).

:::note

Questi dispositivi devono essere connessi alla stessa rete del PC o Mac su cui è installato AdGuard.

:::

Il traffico HTTP sarà filtrato in ogni caso, ma perché AdGuard possa filtrare il traffico HTTPS, dovrai installare manualmente il certificato di AdGuard sul dispositivo connesso.

## Come scaricare e installare il certificato

A seconda del sistema operativo del tuo dispositivo (Windows/Mac/Android/iOS), segui una di queste istruzioni:

### Windows {#windows}

1. Nota l'indirizzo IP del tuo computer su cui è installato AdGuard.

2. Assicurati che la protezione AdGuard sia attiva. Quindi, spunta la casella **Utilizza AdGuard come proxy HTTP** nella scheda di **Rete** delle sue impostazioni.

3. Sullo stesso dispositivo con AdGuard, segui questo collegamento utilizzando qualsiasi browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clicca il pulsante **Scarica**.

5. Trasferisci il file scaricato **cert.cer** al dispositivo il cui traffico desideri indirizzare attraverso AdGuard.

6. Su quel dispositivo, premi il tasto **Win**, digita `Gestisci certificati del computer` e premi **Invio**.

7. Sulla pagina *Certificati - Computer Locale*, trova la cartella *Autorità di Certificazione di Root Attendibile* → *Certificati*.

8. Fai clic destro sulla cartella *Certificati* e clicca su **Tutte le Attività** → **Importa**.

9. Sulla pagina *Procedura Guidata d'Importazione Certificati*, clicca su **Successivo**.

10. Clicca su **Sfoglia** per importare il certificato.

11. Naviga al file del certificato **cert.cer**, selezionalo, quindi clicca su **Apri**.

12. Clicca su **Successivo**.

13. Seleziona la casella **Posiziona tutti i certificati nel seguente archivio**.

14. Assicurati che il campo *Archivio certificati* mostri *Autorità di Certificazione di Root Attendibili* e clicca su **Successivo**.

15. Clicca **Fine**.

16. Premi il tasto **Win**, quindi apri le **Impostazioni**.

17. Seleziona **Rete & Internet** → **Proxy**.

18. Disattiva *Rileva automaticamente le impostazioni*.

19. Clicca su **Configura** nella scheda *Utilizza un server proxy*.

20. Attiva l'interruttore. Per l'**Indirizzo IP del proxy**, inserisci l'indirizzo IP annotato del tuo computer (passaggio 1). Per la **Porta**, inserisci la porta scelta nelle impostazioni di rete dell'app desktop di AdGuard.

21. Clicca su **Salva**.

### Mac {#mac}

1. Nota l'indirizzo IP del tuo computer su cui è installato AdGuard.

2. Assicurati che la protezione AdGuard sia attiva. Quindi vai in **Impostazioni** → **Rete** → **Proxy HTTP** e spunta la casella **Utilizza AdGuard come proxy HTTP**.

3. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clicca il pulsante **Scarica**.

5. Trasferisci il file scaricato **cert.cer** al dispositivo il cui traffico desideri indirizzare attraverso AdGuard.

6. Fai doppio click sul file del certificato scaricato.

7. Inserisci la password dell'amministratore, quindi clicca su **Modifica Keychain**.

8. Vai a **Spotlight** (l'icona di ricerca in alto a destra), digita "Accesso Portachiavi", quindi seleziona **Accesso Keychain** dai risultati della ricerca.

9. Sotto *Sistema*, evidenzia il certificato aggiunto.

10. Clicca con il tasto destro del mouse e scegli **Ottieni Info** dal menu contestuale.

11. Espandi *Attendibilità* per mostrare i criteri di attendibilità per il certificato.

12. In *Secure Sockets Layers (SSL)*, seleziona **Fidati Sempre**.

13. Apri le **Preferenze di Sistema** → **Rete** e scegli la connessione attiva superiore.

14. Clicca su **Dettagli...** e naviga alla scheda **Proxy**.

15. Spunta due caselle: *Proxy Web (HTTP)* e *Proxy Web sicuro (HTTPS)*. Nel campo **Server**, inserisci l'indirizzo IP annotato del tuo computer (passaggio 1). Nel campo **Porta**, inserisci la porta selezionata nelle impostazioni di rete dell'app desktop di AdGuard.

### Android {#android}

1. Annota l'indirizzo IP del tuo dispositivo su cui è installato AdGuard.

2. Assicurati che la protezione AdGuard sia attiva. Quindi, spunta la casella **Utilizza AdGuard come proxy HTTP** nella scheda di **Rete** delle sue impostazioni.

3. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clicca il pulsante **Scarica**.

5. Trasferisci il file scaricato **cert.cer** al dispositivo il cui traffico desideri indirizzare attraverso AdGuard.

6. Individua e tocca il certificato **cert.cer** precedentemente scaricato per aprirlo.

7. Su alcuni dispositivi, potrebbe esserti chiesto di inserire la password del tuo dispositivo. Fallo, quindi, premi **OK**. Il certificato è ora installato.

8. Apri le impostazioni avanzate della rete Wi-Fi attiva.

9. Cambia il **Tipo di proxy** a **Manuale**. Per il **nome dell'host del Proxy**, inserisci l'indirizzo IP annotato del tuo computer (passaggio 1). Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.

### iOS {#ios}

1. Annota l'indirizzo IP del tuo dispositivo su cui è installato AdGuard.

2. Assicurati che la protezione AdGuard sia attiva. Quindi, spunta la casella **Utilizza AdGuard come proxy HTTP** nella scheda di **Rete** delle sue impostazioni.

3. Dal computer con AdGuard, apri questo link utilizzando un browser web: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Clicca il pulsante **Scarica**.

5. Trasferisci il file scaricato **cert.cer** al dispositivo il cui traffico desideri indirizzare attraverso AdGuard.

6. Apri **Impostazioni** → **Sicurezza** → **Crittografia & Credenziali** → **Installa un certificato**. I dispositivi iOS non si fidano di default dei certificati, quindi, sarai avvisato alla selezione di un **Certificato CA**. Tocca **Installa comunque**.

7. Apri **Impostazioni** → **Profilo Scaricato** e tocca **Installa** nell'angolo in alto a destra. Inserisci la tua password e conferma l'installazione. Tocca **Fatto**.

8. Vai in **Impostazioni** → **Generali** → **Informazioni** → **Impostazioni di Attendibilità Certificati**. Abilita l'interruttore affianco a *CA di Adguard Personal*. Il certificato è ora installato.

9. Su quel dispositivo, apri le impostazioni avanzate della rete Wi-Fi attiva.

10. Cambia il **Tipo di proxy** a **Manuale**. Per il **nome dell'host del Proxy**, inserisci l'indirizzo IP annotato del tuo dispositivo (passaggio 1). Per la **Porta del proxy**, inserisci quella selezionata nelle impostazioni di rete dell'app di AdGuard.
