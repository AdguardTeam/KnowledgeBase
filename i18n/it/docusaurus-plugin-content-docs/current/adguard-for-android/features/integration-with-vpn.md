---
title: Integrazione con AdGuard VPN
sidebar_position: 6
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard per Android crea una VPN locale per filtrare il traffico. Dunque, le altre app VPN non sono utilizzabili durante l'esecuzione di AdGuard per Android. Tuttavia, sia AdGuard che [AdGuard VPN](https://adguard-vpn.com/) dispongono di modalità Integrata per consentirti di usarle insieme.

In questa modalità, AdGuard VPN funge da server proxy in uscita, tramite il quale AdGuard Ad Blocker instrada il proprio traffico. Ciò consente ad AdGuard di creare un'interfaccia VPN e di bloccare localmente annunci e tracciatori, mentre AdGuard VPN instrada tutto il traffico attraverso un server remoto.

Se disabiliti AdGuard VPN, AdGuard smetterà di usarla come un proxy in uscita. Se disabiliti AdGuard, AdGuard VPN instraderà il traffico attraverso la propria interfaccia VPN.

Se hai AdGuard Ad Blocker e installi AdGuard VPN, l'app di blocco delle inserzioni la rileverà e abiliterà automaticamente l'integrazione con AdGuard VPN. Lo stesso si verifica al contrario. Nota che se hai abilitato l'integrazione, non potrai gestire le esclusioni dell'app e connetterti ai server DNS dall'app di AdGuard VPN. Puoi specificare le app da instradare attraverso il tuo Tunnel VPN tramite _Impostazioni_ → _Filtraggio_ → _Rete dedicata_ → _Proxy_ → _App eseguite tramite proxy_. Per selezionare un server DNS, apri AdGuard → _Protezione_ → _Protezione DNS_ → _Server DNS_.
