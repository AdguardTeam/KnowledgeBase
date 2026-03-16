---
title: Protezione DNS
sidebar_position: 4
---

:::info

Questo articolo descrive AdGuard per Windows v8.0, un blocca-inserzioni completo che protegge il tuo dispositivo a livello di sistema. Questo è una versione beta ancora in fase di sviluppo. Per provarlo, scarica la [versione beta di AdGuard per Windows](https://agrd.io/windows_beta).

:::

La protezione DNS ti dà maggior controllo su come il tuo dispositivo si connette alla rete globale. Ci sono tre ragioni principali per cui può essere utile:

## 1. Proteggi la tua riservatezza dal tuo ISP

Ogni volta che apri un sito web, ad esempio 'google.com', il tuo browser invia una richiesta a un server DNS per ottenere in cambio l'indirizzo IP del sito web. Solitamente, il server DNS appartiene al tuo ISP, il che significa che possono tracciare i siti web che visiti. Se passi a un altro server DNS, come AdGuard DNS, il tuo ISP non vede più la tua attività in rete.

## 2. Crittografa il tuo traffico DNS

I protocolli moderni come DNS-over-TLS e DNS-over-HTTPS assicurano che le tue richieste DNS siano crittografate. Questo li protegge dall'essere intercettati, modificati o spiati da parte degli aggressori.

## 3. Blocca contenuti indesiderati al livello DNS

La protezione DNS può filtrare inserzioni, tracciatori, siti web di phishing e altri contenuti dannosi o fastidiosi prima che siano caricati nel tuo browser o nelle tue app. [Scopri di più sul filtraggio DNS](https://adguard-dns.io/kb/general/dns-filtering/)

![Protezione DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Ecco cosa puoi configurare nella protezione DNS:

## Scegli un server DNS

![Server DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Puoi selezionare tra diversi fornitore DNS affidabili. AdGuard offre diverse opzioni per diverse esigenze:

- AdGuard DNS blocca inserzioni e tracciatori.

- AdGuard DNS Protezione Famiglia — blocca inserzioni, tracciatori e contenuti per adulti.

- AdGuard DNS Non filtrante — fornisce una connessione sicura e affidabile senza alcun filtraggio.

Puoi usare uno dei nostri server pubblici, aggiungere il tuo server DNS personale o scegliere un'altra opzione affidabile dalla nostra [lista di fornitori DNS affidabili](https://adguard-dns.io/kb/general/dns-providers/).

## Aggiungi filtri e regole DNS

Per affinare la protezione, puoi creare i tuoi filtri DNS usando la [sintassi delle regole DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/) oppure importare filtri DNS [pronti all'uso](https://filterlists.com).

Inoltre, puoi creare regole DNS personali per bloccare, sbloccare o reindirizzare domini secondo necessità. Usa il nostro costruttore di regole integrato.
