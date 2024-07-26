---
title: Rete
sidebar_position: 9
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Generali

![Rete](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtra automaticamente il traffico delle applicazioni

Per impostazione predefinita, AdGuard blocca annunci e tracker nella maggior parte dei browser ([Tor Browser è un'eccezione](/adguard-for-mac/solving-problems/tor-filtering)). Questa impostazione consente ad AdGuard di bloccare anche gli annunci nelle app.

Per gestire le app filtrate, fare clic su _Applicazioni_.

### Filtra protocollo HTTPS

Questa impostazione consente ad AdGuard di filtrare il protocollo sicuro HTTPS, attualmente utilizzato dalla maggior parte dei siti web e delle app. Per impostazione predefinita, i siti web con informazioni potenzialmente sensibili, come i servizi bancari, non vengono filtrati. Per gestire le esclusioni HTTPS, fare clic su _Esclusioni_.

Per impostazione predefinita, AdGuard non filtra i siti web con certificati EV (Extended Validation). Se necessario, puoi abilitare l'opzione _Filtra siti web con certificati EV_.

## Proxy in uscita

Puoi configurare AdGuard per instradare tutto il traffico del tuo dispositivo attraverso il tuo server proxy.

## Proxy HTTP

Puoi utilizzare AdGuard come server proxy HTTP. Ciò ti consentirà di filtrare il traffico su altri dispositivi collegati al proxy.

Assicurati che il tuo Mac e l'altro dispositivo siano connessi alla stessa rete e inserisci la porta proxy sul dispositivo che desideri instradare attraverso il tuo server proxy (di solito nelle impostazioni di rete). Per filtrare anche il traffico HTTPS, [trasferisci il certificato proxy di AdGuard](http://local.adguard.org/cert) su questo dispositivo. [Ulteriori informazioni sull'installazione di un certificato proxy](/guides/proxy-certificate)
