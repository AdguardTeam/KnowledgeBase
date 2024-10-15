---
title: Problemi noti
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

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

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Trasparenza del Certificato

Grazie alla crittografia moderna, i browser, solitamente, possono rilevare i siti web dannosi, forniti di certificati SSL forgiati o falsi. Tuttavia, i meccanismi crittografici correnti non sono così buoni per rilevarli, se forniti con certificati emessi per errore o da un'autorità di certificazione (CA) che sia stata o sia diventata compromessa. La Trasparenza dei Certificati mira a rimediare a queste minacce, rendendo aperti allo scrutinio l'emissione ed esistenza dei certificati SSL ai titolari del dominio, alle CA e agli utenti del dominio.

I prodotti di AdGuard che utilizzano [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) a partire dalla versione **1.11**, implementeranno una politica basata sulla [Politica di Trasparenza dei Certificati di Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Hai commenti o suggerimenti?

Se vorresti aggiungere qualcosa, segnalare degli errori, o porre una domanda, ti preghiamo di contattarci a: `devteam@adguard.com`.
