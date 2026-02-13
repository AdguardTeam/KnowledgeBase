---
title: Impostazioni di rete
sidebar_position: 3
---

:::info

Questo articolo descrive AdGuard per Windows v8.0, un blocca-inserzioni completo che protegge il tuo dispositivo a livello di sistema. Questo è una versione beta ancora in fase di sviluppo. Per provarlo, scarica la [versione beta di AdGuard per Windows](https://agrd.io/windows_beta).

:::

Questa sezione ti permette di gestire come AdGuard filtra il tuo traffico nella rete globale e fornisce strumenti aggiuntivi per il controllo delle funzioni correlate alla rete.

![Impostazioni rete dedicata](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Usa AdGuard come proxy HTTP

Abilita questa opzione per far funzionare AdGuard come proxy HTTP. Tutto il traffico che lo attraversa sarà filtrato — non solo nel tuo computer, ma anche in altri dispositivi della tua rete dedicata domestica.

Per filtrare il traffico in altri dispositivi, installa il certificato root di AdGuard in essi e appronta manualmente il proxy.

Altre impostazioni sono abilitate per impostazione prescelta.

## Filtraggio HTTPS

Oggi la maggior parte dei siti web usa la crittografia HTTPS. Senza il filtraggio HTTPS, AdGuard non può bloccare le inserzioni in siti web come YouTube, Facebook o X (Twitter).

Si consiglia di mantenere l'opzione _Filtra HTTPS_ attivata a meno che non si abbia una ragione specifica per disattivarla.

Con questa opzione, puoi:

- Reinstallare o scarica il certificato di AdGuard

- Aggiungere siti web a una lista che non sarà filtrata

- Scegliere se filtrare i siti web con certificati EV (Extended Validation)

## Proxy per aggiornamenti app e filtri

Qui puoi scegliere quale proxy AdGuard deve usare per scaricare gli aggiornamenti dei filtri o nuove versioni dell'app — il proxy di sistema, un proxy personale o nessun proxy.

![Impostazioni proxy](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Usa il driver SockFilter

Abilita questa opzione per usare il driver SockFilter, che aiuta a bloccare inserzioni e tracciatori nelle app su Windows 8 e versioni successive.

Se questa opzione viene disabilitata, AdGuard passerà al vecchio driver WFP.
