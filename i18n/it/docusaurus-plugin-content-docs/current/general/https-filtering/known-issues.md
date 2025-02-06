---
title: Problemi noti
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Ultimo aggiornamento: 17 settembre 2024

Per comprendere questo articolo potrebbero essere necessarie alcune conoscenze di base sulla crittografia, TLS e HTTPS.

Prima di tutto, osserva questo semplice diagramma che mostra la struttura generale del protocollo HTTPS:

![Cos'è il filtraggio HTTP?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copia le proprietà della connessione TLS utilizzata dal tuo browser:

- AdGuard utilizza la stessa versione TLS
- AdGuard utilizza gli stessi metodi di crittografia (cifrario) del tuo browser

Effettivamente, significa che se utilizzi un browser moderno e sicuro, terrà conto di tutti i problemi TLS noti e non tenterà di utilizzare cifrature non sicure.

**Cosa fa AdGuard quando non ci sono dubbi sulla validità del certificato?** In questi casi, AdGuard cessa interamente il filtraggio di tutte le connessioni a questo dominio, lasciando il browser in carica di tutte le decisioni.

## Problemi noti

Il filtraggio HTTPS su AdGuard ha i propri svantaggi. Quasi tutti dovrebbero essere eliminati nelle prossime versioni di AdGuard.

Tutti i problemi a noi noti e le stime sulle correzioni, sono elencati di seguito.

### Ispezionare il certificato originale

Lo svantaggio più importante del meccanismo di filtraggio HTTPS è che nasconde il certificato reale di un sito web. Non puoi semplicemente controllarne il certificato originale, poiché puoi visualizzare soltanto quello emesso da AdGuard.

Questo problema può essere risolto in 2 modi:

- Utilizzando il nostro [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). Quest'estensione del browser ti aiuta a gestire il filtraggio direttamente dal browser, consentendoti di ispezionare il certificato originale di qualsiasi sito web

  ![Certificato Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Visitando la sezione *Attività recente* in AdGuard per Android o la sezione *registro di filtraggio* in AdGuard per Windows e AdGuard per Mac. Mentre nel Browser Assistant puoi vedere solo il certificato del sito web, in Attività recente puoi ispezionare il certificato di qualsiasi server utilizzato in una sottodomanda o browser, con o senza il Browser Assistant. Per visualizzare il certificato utilizzando questo metodo, segui le istruzioni riportate di seguito.

#### Ispeziona il certificato originale in AdGuard per Android

1. Fai clic sull'icona delle statistiche sulla barra di navigazione.
2. Vai a *Attività recente*.
3. Clicca sulla richiesta di cui vuoi ispezionare il certificato per aprire i dettagli della richiesta.
4. Scorri verso il basso fino al *Certificato originale*. Tocca per maggiori informazioni.

![Attività recente AdGuard per Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Ispeziona il certificato originale in AdGuard per Windows

1. Vai a *Impostazioni* → *Blocco annunci* → *Registro di filtraggio*.
2. Clicca sulla richiesta di cui vuoi ispezionare il certificato per aprire i dettagli della richiesta.
3. Nel settore *TLS*, fai clic su *Visualizza certificato del sito web*.

![Registro di filtraggio AdGuard per Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Ispeziona il certificato originale in AdGuard per Mac

1. Fare clic sull'icona dell'ingranaggio. Nel menu a tendina, vai a *Avanzate* → *Registro di filtraggio...*.
2. Clicca sulla richiesta di cui vuoi ispezionare il certificato per aprire i dettagli della richiesta.
3. Clicca su *Visualizza certificato*.

![Registro di filtraggio AdGuard per Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Trasparenza del Certificato

Grazie alla crittografia moderna, i browser, solitamente, possono rilevare i siti web dannosi, forniti di certificati SSL forgiati o falsi. Tuttavia, i meccanismi crittografici correnti non sono così buoni per rilevarli, se forniti con certificati emessi per errore o da un'autorità di certificazione (CA) che sia stata o sia diventata compromessa. La Trasparenza dei Certificati mira a rimediare a queste minacce, rendendo aperti allo scrutinio l'emissione ed esistenza dei certificati SSL ai titolari del dominio, alle CA e agli utenti del dominio.

I prodotti di AdGuard che utilizzano [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partire dalla versione **1.11**, implementeranno una politica basata sulla [Politica di Trasparenza dei Certificati di Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Hai commenti o suggerimenti?

Se vorresti aggiungere qualcosa, segnalare degli errori, o porre una domanda, ti preghiamo di contattarci a: `devteam@adguard.com`.
