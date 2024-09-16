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

Di conseguenza, AdGuard non può funzionare con il relay privato iCloud e con le funzionalità per la privacy dell'app Mail:

1. Il relay privato iCloud si applica alle connessioni a livello della libreria, prima che raggiungano il livello di socket, dove opera AdGuard.
2. Il relay privato iCloud utilizza QUIC, che AdGuard non può filtrare nelle app filtrate, poiché il filtraggio HTTP/3 non è ancora disponibile.
3. Di conseguenza, AdGuard blocca QUIC, incluso il traffico di relay privato iCloud; altrimenti, il blocco degli annunci è impossibile.
4. Quando utilizzi il relay privato iCloud e imposti AdGuard alla modalità "tunnel diviso", non puoi aprire i siti web su Safari.
5. Per risolvere questo problema per Monterey, applichiamo la regola "percorso predefinito". Quando Private Relay vede questa regola, si disabilita automaticamente. Quindi, AdGuard opera senza problemi su Monterey, ma il relay privato iCloud viene disabilitato.

`network.extension.monterey.force.split.tunnel` ripristina il comportamento di "Big Sur" ma, tale opzione, potrebbe corrompere l'accesso ai siti web a causa di (3) e (4). Continuiamo a cercare una soluzione a questo problema. Una delle opzioni, è l'implementazione del filtraggio HTTP/3.

## Soluzione consigliata

Consigliamo di utilizzare AdGuard con un servizio VPN più tradizionale, come [AdGuard VPN](https://adguard-vpn.com/).

## Soluzione alternativa

Puoi impedire ad AdGuard di utilizzare il "percorso predefinito", disabilitando il "percorso predefinito". Ciò si può fare tramite Impostazioni Avanzate → `network.extension.monterey.force.split.tunnel`.

![Disabilita il percorso predefinito nelle impostazioni avanzate *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Tieni presente che, in questo caso, riscontrerai i problemi descritti sopra.
