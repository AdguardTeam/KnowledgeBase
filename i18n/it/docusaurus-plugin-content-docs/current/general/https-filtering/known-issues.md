---
title: Problemi noti
sidebar_position: 2
---

Ultimo aggiornamento: 20 settembre 2022

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

Questo problema è risolto nel [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). Quest'estensione del browser ti aiuta a gestire il filtraggio direttamente dal browser, consentendoti di ispezionare il certificato originale di qualsiasi sito web.

### Trasparenza del Certificato

Grazie alla crittografia moderna, i browser, solitamente, possono rilevare i siti web dannosi, forniti di certificati SSL forgiati o falsi. Tuttavia, i meccanismi crittografici correnti non sono così buoni per rilevarli, se forniti con certificati emessi per errore o da un'autorità di certificazione (CA) che sia stata o sia diventata compromessa. La Trasparenza dei Certificati mira a rimediare a queste minacce, rendendo aperti allo scrutinio l'emissione ed esistenza dei certificati SSL ai titolari del dominio, alle CA e agli utenti del dominio.

I prodotti di AdGuard che utilizzano [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partire dalla versione **1.11**, implementeranno una politica basata sulla [Politica di Trasparenza dei Certificati di Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Hai commenti o suggerimenti?

Se vorresti aggiungere qualcosa, segnalare degli errori, o porre una domanda, ti preghiamo di contattarci a: `devteam@adguard.com`.
