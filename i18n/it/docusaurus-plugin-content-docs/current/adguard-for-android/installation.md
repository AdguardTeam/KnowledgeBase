---
title: Installazione
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisiti di sistema

**Versione OS:** Android 9.0 o superiore

**RAM:** almeno 2 GB

**Spazio libero su disco:** 500 MB

## Installazione

Gran parte delle app basate su Android sono distribuite tramite Google Play; tuttavia, AdGuard non è presente, poiché Google proibisce la distribuzione di blocchi di annunci a livello di rete tramite Google Play, ovvero, le app che bloccano gli annunci su altre app. Troverai ulteriori informazioni sulla politica restrittiva di Google [nel nostro blog](https://adguard.com/blog/adguard-google-play-removal.html).

Ecco perché puoi soltanto installare AdGuard per Android manualmente. Per utilizzare l'app sul tuo dispositivo mobile, dovrai fare quanto segue.

1. **Scarica l'app sul tuo dispositivo**. Ecco alcuni modi per farlo:

    - vai [sul nostro sito web](https://adguard.com/adguard-android/overview.html) e tocca il pulsante *Scarica*
    - avvia il browser e digita il seguente URL: [https://adguard.com/apk](https://adguard.com/apk)
    - o scansiona questo codice QR:

    ![Codice QR *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Consenti l'installazione di app da fonti sconosciute**. Una volta completato il download del file, tocca su *Apri* nella notifica.

    ![Installare app da fonti sconosciute *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Apparirà un popup. Tocca su *Impostazioni* naviga a *Installa app sconosciute* e concedi l'autorizzazione per il browser che hai utilizzato per scaricare il file.

    ![Installare app da fonti sconosciute *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Installa l'app**. Una volta che il browser avrà ottenuto le autorizzazioni necessarie, il sistema ti chiederà se desideri installare l'app di AdGuard. Tocca su *Installa*.

    ![Installare app da fonti sconosciute *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Quindi, ti sarà chiesto di leggere l'*Accordo di licenza* e la *Politica sulla riservatezza* di AdGuard. Puoi anche partecipare allo sviluppo del prodotto. Per farlo, spunta le caselle per *Invia automaticamente segnalazioni sugli arresti anomali* e *Invia dati tecnici e d'interazione*. Quindi, tocca su *Continua*.

    ![Politica di riservatezza *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Crea una VPN locale**. Per poter filtrare tutto il traffico direttamente sul tuo dispositivo e non indirizzarlo attraverso un server remoto, AdGuard deve stabilire una connessione VPN.

    ![Creare una VPN locale *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Abilita il filtraggio HTTPS**. Non è un'opzione obbligatoria, tuttavia, consigliamo di attivarla per una migliore qualità del blocco degli annunci.

    Se il tuo dispositivo ha Android da 7 a 9, ti sarà richiesto di installare un certificato di root e di configurare il filtraggio HTTPS, in seguito alla configurazione della VPN locale.

    ![Abilitare il Filtraggio HTTPS su Android da 7 a 9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Dopo aver toccato su *Installa ora*, apparirà una richiesta di autenticare l'installazione del certificato con una password, o con l'impronta digitale.

    ![Abilitare il Filtraggio HTTPS su Android da 7 a 9. Fase 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Se hai Android 10 o superiori sul tuo dispositivo, dopo aver creato una VPN locale, vedrai la schermata principale dell'app con una barretta in basso, e il suggerimento di abilitarre il Filtraggio HTTPS. Tocca su *Abilita* e segui le istruzioni sulla schermata successiva, o consulta [l'articolo sull'installazione del certificato](solving-problems/manual-certificate.md), per ulteriori informazioni.

    ![Abilitare il Filtraggio HTTPS *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Disinstallare/Reinstallare AdGuard

Se devi disinstallare AdGuard sul tuo dispositivo mobile, apri le *Impostazioni* e scegli *App* (Android 7) o *App e notifiche* (Android 8 e superiori). Trova AdGuard nell'elenco delle app installate e premi su *Disinstalla*.

![Reinstallare AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Per reinstallare AdGuard, basterà riscaricare il file APK e seguire i passaggi descritti nella sezione Installazione. La disinstallazione non è preventivamente richiesta.
