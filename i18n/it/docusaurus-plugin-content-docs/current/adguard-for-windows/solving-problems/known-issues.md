---
title: Problemi noti di AdGuard per Windows
sidebar_position: 11
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemi di compatibilità di AdGuard per Windows e AdGuard VPN per Windows

Una volta installato AdGuard per Windows e AdGuard VPN per Windows, iniziano a collaborare senza alcuno sforzo da parte tua. Tuttavia, modificare alcune delle loro impostazioni predefinite, potrebbe causarne un malfunzionamento, qualora siano eseguite contemporaneamente.

Esistono due impostazioni specifiche su AdGuard per Windows: *Utilizza modalità driver di reindirizzamento* e *Filtra host locale*. Di default, la prima è disabilitata e la seconda è abilitata. Modificare una di queste impostazioni, interromperà inevitabilmente il filtraggio di AdGuard, se sia il blocco-inserzioni AdGuard Ad Blocker che AdGuard VPN sono abilitate sul tuo dispositivo.

Modificare queste impostazioni è necessario soltanto per risolvere problemi correlati all'operazione simultanea del blocco AdGuard Ad Blocker e delle app a livello di rete, quali antivirus, VPN e filtri di rete. Se ti imbatti in una situazione in cui necessiti di modificare lo stato predefinito delle suddette impostazioni e desideri comunque che AdGuard Ad Blocker e AdGuard VPN operino simultaneamente e correttamente, [crea un ticket su GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose), così che possiamo aiutarti personalmente.

Stiamo correntemente lavorando per superare le limitazioni sopra elencate, per l'operazione simultanea delle nostre app.
