---
title: Relay privato iCloud e AdGuard
sidebar_position: 7
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Descrizione breve del problema

Di default, AdGuard utilizza il "percorso predefinito", che disabilita il relay privato iCloud.

Correntemente, AdGuard e l'Inoltro Privato di iCloud non possono funzionare contemporaneamente. AdGuard non può bloccare gli annunci perché il relay privato iCloud crittografa il traffico prima che AdGuard possa filtrare le connessioni di rete. Quando il relay privato iCloud è attivo, qualsiasi filtraggio (incluso quello locale), diventa impossibile. Dunque, AdGuard non può filtrare il traffico o eseguire il filtraggio DNS su Safari. Tuttavia, AdGuard continua a filtrare il traffico sugli altri browser. Per continuare a utilizzare il relay privato iCloud, considera d'installare [AdGuard per Safari](https://adguard.com/adguard-safari/overview.html).

Lo stesso si applica all'utilizzo di qualsiasi app VPN su Mac: devi scegliere tra l'utilizzo del relay privato iCloud o di un servizio VPN.

## In dettaglio

AdGuard per Mac utilizza ora il filtraggio socket integrato di macOS, basato sull'API delle estensioni di rete. Questo nuovo meccanismo, nonché piuttosto difettoso, ha sostituito le care vecchie estensioni del Kernel. Nell'ultimo anno e mezzo, abbiamo segnalato oltre 20 bug ad Apple, relativi al loro nuovo metodo di filtraggio.

L'API delle estensioni di rete prevede una configurazione simile a una VPN con un elenco di voci simili a percorsi. Su Big Sur, AdGuard ha sviluppato le regole "tunnel diviso" per evitare la creazione della regola "percorso predefinito", poiché causa problemi sulle prime versioni di Big Sur.

Su Monterey, è stato introdotto il relay privato iCloud. Anche le funzionalità sulla privacy dell'app Mail, utilizzano i server di relay privato.

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. Il relay privato iCloud si applica alle connessioni a livello della libreria, prima che raggiungano il livello di socket, dove opera AdGuard.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Quando Private Relay vede questa regola, si disabilita automaticamente. Quindi, AdGuard opera senza problemi su Monterey, ma il relay privato iCloud viene disabilitato.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Continuiamo a cercare una soluzione a questo problema. One of the options is implementing HTTP/3 proxy filtering.

## Soluzione consigliata

Consigliamo di utilizzare AdGuard con un servizio VPN più tradizionale, come [AdGuard VPN](https://adguard-vpn.com/).

## Soluzione alternativa

Puoi impedire ad AdGuard di utilizzare il "percorso predefinito", disabilitando il "percorso predefinito". Ciò si può fare tramite Impostazioni Avanzate → `network.extension.monterey.force.split.tunnel`.

![Disabilita il percorso predefinito nelle impostazioni avanzate *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Tieni presente che, in questo caso, riscontrerai i problemi descritti sopra.
